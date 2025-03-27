
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "AI Automation & Implementation",
      description: "Seamlessly integrate artificial intelligence into your existing systems to automate repetitive tasks and enhance operational efficiency.",
      link: "/ai-implementation",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 2,
      title: "AI System Development",
      description: "Custom AI assistants that understand your business context and engage with customers naturally through intuitive interfaces.",
      link: "/ai-agent",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 3,
      title: "AI Consultation",
      description: "Strategic guidance from AI experts who evaluate your specific business needs and provide tailored implementation roadmaps.",
      link: "/ai-consultation",
      imageUrl: "/lovable-uploads/ee40b53e-ddae-4e5e-a20f-04d954d600f8.png"
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
          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 font-poppins">
            Our Services
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive AI solutions designed to transform your business operations
            and drive meaningful results with customized strategies for your needs.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
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
                <h4 className="text-2xl font-medium mb-3 font-poppins">{service.title}</h4>
                <p className="text-white/80 mb-6 line-clamp-2 h-[48px] font-poppins">{service.description}</p>
                <Link to={service.link}>
                  <Button 
                    variant="outline" 
                    className="border-white text-white bg-black/30 hover:bg-white hover:text-black w-full justify-between font-normal font-poppins"
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
