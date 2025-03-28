
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
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [textComplete, setTextComplete] = useState(false);
  
  // The phrases that will be animated
  const phrases = [
    "Make your work effortless with AI solutions",
    "Transform your business with intelligent automation", 
    "Elevate productivity with AI-powered tools"
  ];
  
  useEffect(() => {
    // Show the hero section with a fade-in effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Text animation with typewriter effect and rotating phrases
    let typingInterval;
    let cursorInterval;
    
    // Cursor blinking animation
    cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    // Typing animation function
    const typeText = () => {
      const currentPhrase = phrases[currentIndex];
      
      typingInterval = setInterval(() => {
        setTypedText(prev => {
          if (prev.length < currentPhrase.length) {
            return currentPhrase.substring(0, prev.length + 1);
          } else {
            clearInterval(typingInterval);
            
            // Wait and then clear the text to start the next phrase
            setTimeout(() => {
              // Erase text function
              const eraseInterval = setInterval(() => {
                setTypedText(prev => {
                  if (prev.length > 0) {
                    return prev.substring(0, prev.length - 1);
                  } else {
                    clearInterval(eraseInterval);
                    
                    // Move to next phrase after erasing
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                    
                    // Start typing again after a pause
                    setTimeout(typeText, 500);
                    return "";
                  }
                });
              }, 30);
            }, 2000);
            
            return prev;
          }
        });
      }, 80);
    };
    
    // Start the typing effect
    setTimeout(() => {
      typeText();
      setTimeout(() => setTextComplete(true), 2000);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-40 pb-16 px-4 md:px-8 overflow-hidden bg-[#e8f0fe]">
      {/* Gradient Background - Smooth transition to white */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] via-[#e8f0fe] to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="w-full mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight tracking-wide font-montserrat text-[#5271FF]">
            <span className="inline-block min-h-[3em] md:min-h-[2em]">
              {typedText}
              <span className={`text-slate-950 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </span>
          </h1>
          
          <p className={`mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out transform ${textComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Leverage AI technology to automate processes and transform your business operations.
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
