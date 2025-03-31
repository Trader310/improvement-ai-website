
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
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>IMPROVEMENT AI | AI Automation & Implementation Solutions</title>
        <meta name="description" content="Transform your business with AI automation, custom AI agents, and strategic implementation services that boost efficiency and drive sustainable growth." />
        <meta name="keywords" content="AI automation, business process optimization, artificial intelligence solutions, AI implementation, AI agents, workflow automation" />
      </Helmet>
      <Header />
      
      <div className="bg-[#e8f0fe]">
        <HeroSection />
      </div>
      
      <div className="bg-white">
        <AnimateOnScroll animation="slide-in-bottom" delay={100}>
          <ServicesSection />
        </AnimateOnScroll>
      </div>
      
      <div className="mt-16">
        <AnimateOnScroll animation="slide-in-bottom" delay={100}>
          <AboutSection />
        </AnimateOnScroll>
      </div>
      
      <AnimateOnScroll animation="slide-in-bottom" delay={100}>
        <BlogSection showViewAllButton={true} />
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
