import React from 'react';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 font-bold text-xl text-white">BDIJK IT</span>
            </div>
            <p className="text-gray-400 mb-6">
              Uw partner voor strategische IT-oplossingen die uw bedrijfsgroei ondersteunen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT Beveiliging</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Migratie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Infrastructuur Optimalisatie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Intelligence</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#diensten" className="text-gray-400 hover:text-white transition-colors">Diensten</a></li>
              <li><a href="#over-mij" className="text-gray-400 hover:text-white transition-colors">Over Mij</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Beleid</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Zuidas 123</p>
            <p className="text-gray-400 mb-2">1082 MS Amsterdam</p>
            <p className="text-gray-400 mb-2">+31 (0)20 123 4567</p>
            <p className="text-gray-400">info@bdijk-it.nl</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center">
            © {currentYear} BDIJK IT Consultancy. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;