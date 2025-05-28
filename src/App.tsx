import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLayout from './components/admin/AdminLayout';
import AdminBlog from './components/admin/AdminBlog';
import AdminLogin from './components/admin/AdminLogin';

function MainLayout() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = "BDIJK IT Consultancy";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLogin />} />
          <Route path="blog" element={<AdminBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;