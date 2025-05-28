import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react';
import Logo from '../Logo';

const AdminLayout: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
    { icon: <FileText size={20} />, label: 'Blog Posts', path: '/admin/blog' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Logo />
                <span className="ml-2 font-bold text-xl text-gray-800">Admin</span>
              </Link>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <LogOut size={20} className="mr-2" />
                Uitloggen
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] fixed">
          <nav className="mt-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600 bg-blue-50' : ''
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-1 ml-64 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;