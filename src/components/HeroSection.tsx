
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { useMediaQuery } from '@/hooks/use-mobile';
import CalendlyEmbed from './CalendlyEmbed';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const calendlyUrl = 'https://calendly.com/dropstrader/improvement-ai-consultation';
  const [isVisible, setIsVisible] = useState(false);
  const [textComplete, setTextComplete] = useState(false);
  const [heading1Visible, setHeading1Visible] = useState(false);
  const [heading2Visible, setHeading2Visible] = useState(false);
  const [heading3Visible, setHeading3Visible] = useState(false);
  
  useEffect(() => {
    // Show the hero section with a fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Staged animation for hero text elements
    setTimeout(() => setHeading1Visible(true), 500);
    setTimeout(() => setHeading2Visible(true), 800);
    setTimeout(() => setHeading3Visible(true), 1100);
    
    // Set text complete for description and button animations
    setTimeout(() => setTextComplete(true), 1400);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-40 pb-16 px-4 md:px-8 overflow-hidden bg-[#e8f0fe]">
      {/* Gradient Background - Smooth transition to white */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] via-[#e8f0fe] to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="w-full mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight tracking-wide font-montserrat overflow-hidden">
            <span className={`text-[#5271FF] inline-block transition-transform duration-700 ease-out ${heading1Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              Make your work 
            </span>{" "}
            <span className={`text-black inline-block transition-transform duration-700 ease-out ${heading2Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              effortless
            </span>{" "}
            <span className={`text-[#5271FF] inline-block transition-transform duration-700 ease-out ${heading3Visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              with AI solutions
            </span>
          </h1>
          
          <p className={`mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out transform ${textComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Leverage intelligent AI technology to automate processes, enhance productivity, and transform your business operations for optimal performance.
          </p>
          
          <div className={`mt-10 flex justify-center transition-all duration-1000 delay-500 ease-out transform ${textComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {isMobile ? <Drawer>
                <DrawerTrigger asChild>
                  <Button className={cn(
                    "bg-[#5271FF] text-white hover:bg-[#3A5BFF]", 
                    "rounded-full px-8 py-6 text-lg transition-all duration-300", 
                    "group relative overflow-hidden hover:shadow-lg",
                    "animate-pulse-subtle"
                  )}>
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
                  <Button className={cn(
                    "bg-[#5271FF] text-white hover:bg-[#3A5BFF]", 
                    "rounded-full px-8 py-6 text-lg transition-all duration-300", 
                    "group relative overflow-hidden hover:shadow-lg",
                    "animate-pulse-subtle"
                  )}>
                    <span className="relative z-10">Let's Talk</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#5271FF] to-[#3A5BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[90vh]">
                  <CalendlyEmbed url={calendlyUrl} className="h-[85vh]" />
                </DialogContent>
              </Dialog>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
