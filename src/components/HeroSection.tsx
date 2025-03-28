
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
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedText3, setTypedText3] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Text typing animation for the three parts of the header
    const text1 = "Make your work ";
    const text2 = "effortless";
    const text3 = " with AI solutions";
    
    let i = 0, j = 0, k = 0;
    
    // First part typing
    const typeText1 = () => {
      if (i < text1.length) {
        setTypedText1(prev => prev + text1.charAt(i));
        i++;
        setTimeout(typeText1, 80);
      } else {
        // Start second part after first completes
        setTimeout(typeText2, 100);
      }
    };
    
    // Second part typing
    const typeText2 = () => {
      if (j < text2.length) {
        setTypedText2(prev => prev + text2.charAt(j));
        j++;
        setTimeout(typeText2, 80);
      } else {
        // Start third part after second completes
        setTimeout(typeText3, 100);
      }
    };
    
    // Third part typing
    const typeText3 = () => {
      if (k < text3.length) {
        setTypedText3(prev => prev + text3.charAt(k));
        k++;
        setTimeout(typeText3, 80);
      } else {
        // Mark typing as complete
        setTypingComplete(true);
      }
    };
    
    // Start the sequence
    setTimeout(typeText1, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-40 pb-16 px-4 md:px-8 overflow-hidden bg-[#e8f0fe]">
      {/* Gradient Background - Smooth transition to white */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] via-[#e8f0fe] to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="w-full mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight tracking-wide font-montserrat">
            <span className="text-[#5271FF] inline-block min-h-[1.5em]">{typedText1}</span>
            <span className="text-slate-950 inline-block min-h-[1.5em]">{typedText2}</span>
            <span className="text-[#5271FF] inline-block min-h-[1.5em]">{typedText3}</span>
          </h1>
          
          <p className={`mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-1000 delay-300 ease-out transform ${typingComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Leverage AI technology to automate processes and transform your business operations.
          </p>
          
          <div className={`mt-10 flex justify-center transition-all duration-1000 delay-500 ease-out transform ${typingComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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
