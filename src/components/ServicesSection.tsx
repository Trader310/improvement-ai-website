
import { useState } from 'react';
import { Bot, Brain, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services: ServiceCard[] = [
    {
      icon: <Brain className="w-12 h-12 text-agency-blue" />,
      title: "AI Implementation & Automation",
      description: "Seamlessly integrate AI into your existing systems to automate repetitive tasks, optimize workflows, and make data-driven decisions with unprecedented speed and accuracy."
    },
    {
      icon: <Bot className="w-12 h-12 text-agency-blue" />,
      title: "AI Agent Development",
      description: "Custom AI assistants that understand your business context, engage with customers naturally, and drive measurable improvements in conversions, satisfaction, and revenue."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-agency-blue" />,
      title: "AI Consultation",
      description: "Strategic guidance from AI experts who evaluate your specific business needs and develop tailored AI solutions that align with your growth objectives and technical requirements."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            OUR SERVICES
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Business with AI
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            We specialize in implementing cutting-edge AI solutions that make your business operations smarter, faster, and more efficient.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "relative p-8 rounded-2xl transition-all duration-300 group",
                "border border-gray-200 hover:border-agency-blue/30",
                "bg-white hover:shadow-xl hover:shadow-agency-blue/10"
              )}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-agency-blue/5 to-agency-light-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div 
                className={cn(
                  "p-4 rounded-xl bg-agency-blue/5 inline-block mb-6",
                  "transition-transform duration-300",
                  hoveredCard === index ? "scale-110" : ""
                )}
              >
                {service.icon}
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h4>
              
              <p className="text-gray-600">
                {service.description}
              </p>
              
              <div 
                className={cn(
                  "mt-8 text-agency-blue font-medium flex items-center",
                  "transition-all duration-300",
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                )}
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
