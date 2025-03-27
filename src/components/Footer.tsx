
import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agency-blue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/38dfd200-7160-4854-95d0-b41e484d5580.png" 
                alt="Improvement AI"
                className="w-12 h-12 mr-3"
              />
              <div className="text-2xl font-bold">IMPROVEMENT AI</div>
            </div>
            <p className="text-white/80 mb-6 max-w-xs">
              We provide the highest quality AI solutions to help businesses optimize their operations, 
              improve efficiency, and unlock their full potential through innovative technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Services - Reduced to only 3 services */}
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
          
          {/* Contact Info - Removed location */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@improvementai.com" className="text-white/80 hover:text-white transition-colors">
                  info@improvementai.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a href="tel:+12345678901" className="text-white/80 hover:text-white transition-colors">
                  +1 (234) 567-8901
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer - Updated copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Improvement AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
