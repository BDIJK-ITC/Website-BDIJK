import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://my.spline.design/interactiveaiwebsite-UmNLjmq21wB7GWQf41fzqMJn/" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 drop-shadow-lg">
              Uw <span className="text-blue-600">Moderne Werkplek</span> Expert
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md backdrop-blur-sm bg-white/30 p-4 rounded-lg">
              Specialist in Microsoft 365 en moderne werkplekoplossingen die uw organisatie helpen efficiënter en veiliger te werken.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                Bekijk Diensten
              </button>
              <button className="bg-white/80 backdrop-blur-sm border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-colors">
                Contact Opnemen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;