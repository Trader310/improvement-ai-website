
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "AI Implementation & Automation",
      description: "Seamlessly integrate AI into your existing systems to automate repetitive tasks.",
      link: "/ai-implementation",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 2,
      title: "AI Agent Development",
      description: "Custom AI assistants that understand your business context and engage with customers naturally.",
      link: "/ai-agent",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 3,
      title: "AI Consultation",
      description: "Strategic guidance from AI experts who evaluate your specific business needs.",
      link: "/ai-consultation",
      imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            OUR SERVICES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h3>
          <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {services.length} services
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-xl h-[400px] group"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
                <p className="text-white/80 mb-6">{service.description}</p>
                <Link to={service.link}>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black w-full justify-between"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
