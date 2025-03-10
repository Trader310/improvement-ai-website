
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 lg:px-12',
        isScrolled 
          ? 'py-2 bg-agency-blue shadow-md' 
          : 'py-6 bg-agency-blue/50 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-white font-bold text-2xl">
            MORNINGSIDE AI
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white font-medium hover:text-white/80 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-white font-medium hover:text-white/80 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white font-medium hover:text-white/80 transition-colors"
          >
            About Us
          </button>
          <button 
            onClick={() => scrollToSection('blog')}
            className="text-white font-medium hover:text-white/80 transition-colors"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('team')}
            className="text-white font-medium hover:text-white/80 transition-colors"
          >
            Team
          </button>
        </nav>

        {/* Contact Us Button */}
        <Button 
          onClick={() => scrollToSection('booking')}
          className="hidden md:block bg-white text-agency-blue hover:bg-white/90 transition-colors rounded-full px-8"
        >
          Contact us
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-agency-blue shadow-lg py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white font-medium py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white font-medium py-2"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-white font-medium py-2"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-white font-medium py-2"
            >
              Team
            </button>
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-white text-agency-blue hover:bg-white/90 w-full rounded-full"
            >
              Contact us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
