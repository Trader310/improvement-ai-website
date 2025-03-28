
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CTABanner = ({ title = "Ready to Transform Your Business with AI?", description = "Let's discuss how AI can streamline your operations and drive growth." }) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-[#3A5BFF]/90 via-[#5271FF] to-[#6A85FF] p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">{title}</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 font-poppins">
            {description}
          </p>
          <Link to="/booking">
            <Button
              variant="outline"
              className="bg-white text-blue-600 hover:bg-blue-50 border-none rounded-full px-8 py-6 text-lg group hover:scale-105 transition-all duration-300 animate-pulse-subtle font-poppins"
            >
              Let's Connect
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
