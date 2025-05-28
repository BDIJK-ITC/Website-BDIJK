import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "De toekomst van hybride werken met Microsoft 365",
    excerpt: "Ontdek hoe Microsoft 365 de hybride werkplek ondersteunt en productiviteit bevordert in het nieuwe normaal.",
    date: "15 maart 2024",
    readTime: "5 min",
    image: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Modern Workplace"
  },
  {
    id: 2,
    title: "Cybersecurity best practices voor het MKB",
    excerpt: "Praktische tips om uw bedrijf te beschermen tegen de meest voorkomende cyberdreigingen.",
    date: "10 maart 2024",
    readTime: "4 min",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Security"
  },
  {
    id: 3,
    title: "Optimaliseer uw Teams-omgeving",
    excerpt: "Verbeter de efficiëntie van uw organisatie met deze Microsoft Teams tips en tricks.",
    date: "5 maart 2024",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Productiviteit"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Laatste Inzichten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Blijf op de hoogte van de laatste ontwikkelingen in IT en lees onze expert blogs over Microsoft 365, security en moderne werkplekken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  Lees meer <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-md transition-colors inline-flex items-center">
            Alle Blogs <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;