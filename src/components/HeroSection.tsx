
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { useMediaQuery } from '@/hooks/use-mobile';
import CalendlyEmbed from './CalendlyEmbed';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const calendlyUrl = 'https://calendly.com/dropstrader/improvement-ai-consultation';
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Add a short delay to ensure the animation is noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Function to open Calendly in a new tab (as fallback)
  const openCalendlyNewTab = () => {
    window.open(calendlyUrl, '_blank');
  };
  
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-40 pb-16 px-4 md:px-8 overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left w-full mb-10 lg:mb-0">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight tracking-wide font-montserrat transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <span className="text-[#5271FF]">Make your work </span>
            <span className="text-slate-950">effortless</span>
            <span className="text-[#5271FF]"> with AI solutions</span>
          </h1>
          
          <p className={`mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Leverage AI technology to automate processes and transform your business operations.
          </p>
          
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {isMobile ? <Drawer>
                <DrawerTrigger asChild>
                  <Button className={cn("bg-[#5271FF] text-white hover:bg-[#3A5BFF]", "rounded-full px-8 py-6 text-lg transition-all duration-300", "group relative overflow-hidden hover:shadow-lg")}>
                    <span className="relative z-10">Let's Talk</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#5271FF] to-[#3A5BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="h-[90vh]">
                  <div className="px-4 pt-4">
                    <CalendlyEmbed url={calendlyUrl} className="h-[85vh]" />
                  </div>
                </DrawerContent>
              </Drawer> : <Dialog>
                <DialogTrigger asChild>
                  <Button className={cn("bg-[#5271FF] text-white hover:bg-[#3A5BFF]", "rounded-full px-8 py-6 text-lg transition-all duration-300", "group relative overflow-hidden hover:shadow-lg")}>
                    <span className="relative z-10">Let's Talk</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#5271FF] to-[#3A5BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh]">
                  <CalendlyEmbed url={calendlyUrl} className="h-[85vh]" />
                </DialogContent>
              </Dialog>}
            
            <Link to="/services">
              <Button variant="outline" className="rounded-full border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF]/10 px-8 py-6 text-lg group">
                Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
