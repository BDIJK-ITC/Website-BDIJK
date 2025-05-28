import React from 'react';
import { ShieldCheck, Cloud, Users, LineChart, Settings, Laptop } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Cloud size={40} />,
      title: "Microsoft 365",
      description: "Implementatie en beheer van Microsoft 365, inclusief Teams, SharePoint en Exchange Online voor optimale samenwerking."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Security & Compliance",
      description: "Beveilig uw moderne werkplek met Microsoft Defender, Intune en Azure AD voor maximale bescherming."
    },
    {
      icon: <Laptop size={40} />,
      title: "Modern Workplace",
      description: "Creëer een flexibele, veilige werkplek met Windows 11, Microsoft 365 en Azure Virtual Desktop."
    },
    {
      icon: <Settings size={40} />,
      title: "Automatisering",
      description: "Optimaliseer werkprocessen met Power Platform, Power Automate en SharePoint workflows."
    },
    {
      icon: <Users size={40} />,
      title: "Adoptie & Training",
      description: "Maximaliseer uw Microsoft-investering met gebruikerstraining en change management."
    },
    {
      icon: <LineChart size={40} />,
      title: "Strategie & Advies",
      description: "Ontwikkel een toekomstbestendige Microsoft roadmap die aansluit bij uw bedrijfsdoelen."
    }
  ];

  return (
    <section id="diensten" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mijn Diensten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Als Microsoft-specialist help ik organisaties bij het optimaal benutten van hun moderne werkplek
            met focus op Microsoft 365 en gerelateerde clouddiensten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Wilt u uw Microsoft-omgeving optimaliseren of overstappen naar de moderne werkplek?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
            Neem Contact Op
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;