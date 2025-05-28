import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Diensten', 'Over Mij', 'Blog', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className={`mx-auto max-w-7xl transition-all duration-300 ${
        scrolled 
          ? 'bg-blue-100/80 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 border border-blue-200/20' 
          : 'bg-blue-50/50 backdrop-blur-sm px-4 py-3 rounded-full'
      }`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <span className={`ml-2 font-bold text-xl ${
              scrolled ? 'text-blue-900' : 'text-blue-800'
            }`}>
              BDIJK IT
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <nav className={`${
              scrolled 
                ? 'bg-white/30 backdrop-blur-sm rounded-full px-3 py-1 mr-4' 
                : 'mr-4'
            }`}>
              <ul className="flex space-x-1">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        scrolled
                          ? 'text-blue-900 hover:bg-white/40 hover:shadow-sm'
                          : 'text-blue-900 hover:bg-blue-100/50'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button className={`px-6 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:from-blue-600 hover:to-blue-700'
                : 'bg-blue-500/80 text-white hover:bg-blue-600/90'
            }`}>
              Vrijblijvend Gesprek
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${
              scrolled 
                ? 'text-blue-900 hover:bg-white/40' 
                : 'text-blue-900 hover:bg-blue-100/50'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="mt-4 mx-auto max-w-7xl bg-blue-50/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-200/20 p-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-2 rounded-lg text-blue-900 hover:bg-white/40 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Vrijblijvend Gesprek
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;