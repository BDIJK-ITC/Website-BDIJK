import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Neem Contact Op</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wilt u meer weten over onze diensten of heeft u een vraag? Vul het formulier in of gebruik onze contactgegevens.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="lg:w-1/2 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Stuur ons een bericht</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoon</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Bedrijf</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors inline-flex items-center"
              >
                Versturen <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2 bg-blue-600 text-white p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Bezoekadres</p>
                    <p className="mt-1">Zuidas 123<br />1082 MS Amsterdam</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Telefoon</p>
                    <p className="mt-1">+31 (0)20 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="mt-1">info@bdijk-it.nl</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Kantooruren</h4>
              <p className="mb-2">Maandag - Vrijdag: 9:00 - 17:30</p>
              <p>Weekend: Gesloten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;