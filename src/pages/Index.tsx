
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import TeamSection from '@/components/TeamSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Index = () => {
  // Enhanced Intersection Observer for smooth scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // For staggered child animations
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animateElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      
      <div className="bg-gradient-to-b from-[#e8f0fe] via-[#f0f7ff] to-white">
        <HeroSection />
      
        {/* The smooth gradient transition div - creates a natural color fade */}
        <div 
          className="h-40 bg-gradient-to-b from-white/0 via-[#f0f7ff] to-white"
          style={{ 
            marginTop: '-10rem', 
            position: 'relative', 
            zIndex: 10 
          }}
        />
      
        <AnimateOnScroll animation="slide-in-bottom" delay={100}>
          <ServicesSection />
        </AnimateOnScroll>
      </div>
      
      {/* Removed extra spacing by moving AboutSection up */}
      <div className="mt-0">
        <AnimateOnScroll animation="slide-in-bottom" delay={100}>
          <AboutSection />
        </AnimateOnScroll>
      </div>
      
      <AnimateOnScroll animation="slide-in-bottom" delay={100}>
        <BlogSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="slide-in-bottom" delay={100}>
        <TeamSection />
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="slide-in-bottom" delay={100}>
        <BookingSection />
      </AnimateOnScroll>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
