
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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 md:px-8 overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-agency-blue to-black opacity-80"></div>
        
        {/* Animated 3D wave-like shapes - simplified for performance */}
        <div className="absolute w-full h-full">
          <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-agency-light-blue rounded-full filter blur-[100px] opacity-20 animate-float"></div>
          <div className="absolute top-[40%] right-[10%] w-80 h-80 bg-agency-blue rounded-full filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[15%] left-[30%] w-72 h-72 bg-agency-dark-blue rounded-full filter blur-[110px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Make your work <span className="text-agency-blue">effortless</span> with <span className="text-agency-blue">AI solutions</span>.
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0">
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
              className="rounded-full border-white text-white hover:bg-white/10 px-8 py-6 text-lg group"
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* 3D Visual Element */}
        <div className="lg:w-1/2 lg:pl-12">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 bg-agency-blue rounded-full opacity-20 animate-pulse-light"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full opacity-10 animate-pulse-light" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-agency-light-blue rounded-full opacity-15 animate-pulse-light" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full opacity-10 animate-pulse-light" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
        <div className="w-1 h-10 border-l-2 border-white/60"></div>
        <p className="text-sm mt-2">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;
