import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Microsoft 365 Certified Professional",
    "Specialist in moderne werkplekoplossingen",
    "Ruime ervaring met Microsoft-technologieën",
    "Focus op security en compliance",
    "Persoonlijke aanpak met maatwerk oplossingen"
  ];

  return (
    <section id="over-mij" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="BDIJK IT Consultant" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold">Sinds 2014</p>
                <p>Microsoft Specialist</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Over BDIJK IT Consultancy</h2>
            <p className="text-gray-600 mb-6">
              Als Microsoft-specialist help ik organisaties bij het optimaliseren van hun moderne werkplek. 
              Mijn expertise ligt in het implementeren en beheren van Microsoft 365 en aanverwante clouddiensten.
            </p>
            <p className="text-gray-600 mb-8">
              Door mijn jarenlange ervaring met Microsoft-technologieën kan ik u helpen bij het maken van de juiste keuzes 
              voor uw organisatie. Of het nu gaat om een complete migratie naar de cloud of het optimaliseren van uw 
              bestaande Microsoft-omgeving.
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{highlight}</p>
                </div>
              ))}
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
              Leer Mij Kennen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;