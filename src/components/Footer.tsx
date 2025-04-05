
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`text-white ${className || 'bg-agency-blue'}`}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info - Updated layout without logo */}
          <div className="lg:col-span-1">
            <h2 className="font-bold text-2xl mb-4 font-poppins">IMPROVEMENT AI</h2>
            <p className="text-white/80 mb-6 max-w-xs">
              We deliver AI solutions to optimize operations and unlock your business's 
              potential with cutting-edge artificial intelligence technology.
            </p>
          </div>
          
          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">AI Automation & Implementation</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">AI System Development</a>
              </li>
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">AI Consultation</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info - Updated with new email and phone */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:wiktor@improvementai.agency" className="text-white/80 hover:text-white transition-colors">
                  wiktor@improvementai.agency
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+48888333117" className="text-white/80 hover:text-white transition-colors">
                  +48 888 333 117
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Improvement AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
