import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  company: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, company, rating }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={20} 
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 flex-grow italic">"{content}"</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "BDIJK IT Consultancy heeft onze IT-infrastructuur volledig getransformeerd. Ze hebben niet alleen technische oplossingen geboden, maar ook geholpen met het ontwikkelen van een strategische IT-roadmap.",
      author: "Martijn de Vries",
      company: "TechSolutions B.V.",
      rating: 5
    },
    {
      content: "De cloud migratie uitgevoerd door BDIJK IT was vlekkeloos. Hun team was professioneel, communicatief en heeft ervoor gezorgd dat er geen downtime was tijdens het proces.",
      author: "Laura Jansen",
      company: "Marketing Partners",
      rating: 5
    },
    {
      content: "Als middelgroot bedrijf hadden we behoefte aan IT-expertise zonder een volledig interne IT-afdeling. BDIJK IT biedt precies wat we nodig hebben met hun flexibele dienstverlening.",
      author: "Thomas Bakker",
      company: "Construct NL",
      rating: 4
    },
    {
      content: "De beveiligingsaudit door BDIJK IT heeft zwakke plekken in onze systemen blootgelegd die we anders over het hoofd hadden gezien. Hun proactieve aanpak heeft ons veel problemen bespaard.",
      author: "Sophie van der Meer",
      company: "FinanceGroup",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === Math.ceil(testimonials.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonials.length / 2) - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Wat Onze Klanten Zeggen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We zijn trots op de langdurige relaties die we hebben opgebouwd met onze klanten en de resultaten die we samen hebben bereikt.
          </p>
        </div>
        
        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
        
        {/* Mobile layout with carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard
                      content={testimonial.content}
                      author={testimonial.author}
                      company={testimonial.company}
                      rating={testimonial.rating}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={prevTestimonial}
            >
              <ChevronLeft size={24} className="text-blue-600" />
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              onClick={nextTestimonial}
            >
              <ChevronRight size={24} className="text-blue-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {[...Array(testimonials.length)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;