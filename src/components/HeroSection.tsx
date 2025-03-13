
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 md:px-8 overflow-hidden bg-[#F1F0FB]"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F1F0FB] to-white/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Make your work <span className="text-agency-blue">effortless</span> with <span className="text-agency-blue">AI solutions</span>.
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Leverage cutting-edge AI technology to automate processes, create intelligent agents, and transform your business operations.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button 
              onClick={scrollToBooking}
              className={cn(
                "bg-agency-blue text-white hover:bg-agency-light-blue",
                "rounded-full px-8 py-6 text-lg transition-all duration-300",
                "group relative overflow-hidden hover:shadow-lg"
              )}
            >
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 bg-gradient-to-r from-agency-blue to-agency-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              className="rounded-full border-agency-blue text-agency-blue hover:bg-agency-blue/10 px-8 py-6 text-lg group"
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* 3D Cube Visual Element */}
        <div className="lg:w-1/2 lg:pl-12">
          <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center">
            <div className="animate-float">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 md:w-48 md:h-48">
                <path d="M40 60L100 30L160 60L100 90L40 60Z" stroke="#5271FF" strokeWidth="8" strokeLinejoin="round"/>
                <path d="M40 60V140L100 170V90L40 60Z" stroke="#5271FF" strokeWidth="8" strokeLinejoin="round"/>
                <path d="M100 90V170L160 140V60L100 90Z" stroke="#5271FF" strokeWidth="8" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-agency-blue/60 animate-bounce">
        <div className="w-1 h-10 border-l-2 border-agency-blue/60"></div>
        <p className="text-sm mt-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
