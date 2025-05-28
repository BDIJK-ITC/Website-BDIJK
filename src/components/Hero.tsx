import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Uw <span className="text-blue-600">Moderne Werkplek</span> Expert
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Specialist in Microsoft 365 en moderne werkplekoplossingen die uw organisatie helpen efficiënter en veiliger te werken.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                Bekijk Diensten
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-colors">
                Contact Opnemen
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Moderne Werkplek Consultancy" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;