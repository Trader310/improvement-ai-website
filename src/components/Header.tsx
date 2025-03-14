
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return <header className={cn('fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 lg:px-12', isScrolled ? 'py-2 bg-[#e8f0fe] shadow-md' : 'py-6 bg-[#e8f0fe]')}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="font-bold text-2xl">
            <span className="text-black">IMPROVEMENT</span>
            <span className="text-[#5271FF]"> AI</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-800 font-medium hover:text-[#4096ff] transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-800 font-medium hover:text-[#4096ff] transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-800 font-medium hover:text-[#4096ff] transition-colors">
            About Us
          </button>
          <button onClick={() => scrollToSection('blog')} className="text-gray-800 font-medium hover:text-[#4096ff] transition-colors">
            Blog
          </button>
          <button onClick={() => scrollToSection('team')} className="text-gray-800 font-medium hover:text-[#4096ff] transition-colors">
            Team
          </button>
        </nav>

        {/* Contact Us Button */}
        <Button onClick={() => scrollToSection('booking')} className="hidden md:block bg-[#4096ff] text-white hover:bg-agency-light-blue transition-colors rounded-full px-8">
          Contact us
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#4096ff]" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-[#e8f0fe] shadow-lg py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-800 font-medium py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-800 font-medium py-2">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-800 font-medium py-2">
              About Us
            </button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-800 font-medium py-2">
              Blog
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-800 font-medium py-2">
              Team
            </button>
            <Button onClick={() => scrollToSection('booking')} className="bg-[#4096ff] text-white hover:bg-agency-light-blue w-full rounded-full">
              Contact us
            </Button>
          </nav>
        </div>}
    </header>;
};

export default Header;
