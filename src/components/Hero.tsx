import React from 'react';
import { Laptop2, Shield, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Uw <span className="text-blue-600">Moderne Werkplek</span> Expert
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Specialist in Microsoft 365 en moderne werkplekoplossingen die uw organisatie helpen efficiënter en veiliger te werken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Bekijk Diensten
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-colors duration-200">
                Contact Opnemen
              </button>
            </div>
          </div>

          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Laptop2 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Modern Werken</h3>
              <p className="text-gray-600">Optimaliseer uw werkplek voor het digitale tijdperk</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Veilig Werken</h3>
              <p className="text-gray-600">Bescherm uw bedrijfsgegevens met de beste beveiliging</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 col-span-2">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Samen Werken</h3>
              <p className="text-gray-600">Verbeter teamwork met moderne samenwerkingstools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;