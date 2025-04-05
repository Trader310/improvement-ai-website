
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBookingPage = location.pathname === '/booking';
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

  // Determine header background color based on page and scroll position
  // Apply the same bg-[#e8f0fe] for both HomePage and BookingPage
  let headerBgClass = '';
  if (isHomePage || isBookingPage) {
    headerBgClass = isScrolled ? 'bg-[#e8f0fe] shadow-md' : 'bg-[#e8f0fe]';
  } else {
    headerBgClass = isScrolled ? 'bg-white shadow-md' : 'bg-white';
  }

  return <header className={cn('fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 lg:px-12', isScrolled ? 'py-2' : 'py-6', headerBgClass)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Link */}
        <Link to="/" className="flex items-center">
          <div className="font-bold text-2xl font-poppins">
            <span className="text-black">IMPROVEMENT</span>
            <span className="text-[#5271FF]"> AI</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 font-medium hover:text-[#5271FF] transition-colors font-poppins">
            Home
          </Link>
          <Link to="/services" className="text-gray-800 font-medium hover:text-[#5271FF] transition-colors font-poppins">
            Services
          </Link>
          <Link to="/about" className="text-gray-800 font-medium hover:text-[#5271FF] transition-colors font-poppins">
            About Us
          </Link>
          <Link to="/blog" className="text-gray-800 font-medium hover:text-[#5271FF] transition-colors font-poppins">
            Blog
          </Link>
        </nav>

        {/* Contact Us Button */}
        <Link to="/booking">
          <Button className="hidden md:block bg-[#5271FF] text-white hover:bg-[#3A5BFF] transition-colors rounded-full px-8 font-poppins">
            Contact us
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#5271FF]" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className={`md:hidden absolute top-full left-0 w-full ${isHomePage || isBookingPage ? 'bg-[#e8f0fe]' : 'bg-white'} shadow-lg py-4 px-6 animate-fade-in`}>
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 font-medium py-2 font-poppins">
              Home
            </Link>
            <Link to="/services" className="text-gray-800 font-medium py-2 font-poppins">
              Services
            </Link>
            <Link to="/about" className="text-gray-800 font-medium py-2 font-poppins">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-800 font-medium py-2 font-poppins">
              Blog
            </Link>
            <Link to="/booking">
              <Button className="bg-[#5271FF] text-white hover:bg-[#3A5BFF] w-full rounded-full font-poppins">
                Contact us
              </Button>
            </Link>
          </nav>
        </div>}
    </header>;
};

export default Header;
