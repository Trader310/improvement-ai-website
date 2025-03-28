
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CTABanner = ({ 
  title = "Ready to Transform Your Business with AI?", 
  description = "Let's discuss how AI can streamline your operations and drive growth.",
  variant = "default"
}) => {
  // Define different gradient variants
  const gradientVariants = {
    default: "bg-gradient-to-r from-[#3A5BFF]/90 via-[#5271FF] to-[#6A85FF]",
    consultation: "bg-gradient-to-r from-[#4d76fd]/90 via-[#6a8fff] to-[#88a8ff]", // different blue shade for consultation page
    implementation: "bg-gradient-to-r from-[#2a46db]/90 via-[#3a5bff] to-[#7a92ff]", // more gradient for implementation page
    agent: "bg-gradient-to-r from-[#1133cc]/90 via-[#3a5bff] to-[#8aa3ff]" // more gradient for agent page
  };

  const gradientClass = gradientVariants[variant] || gradientVariants.default;

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div className={`${gradientClass} p-8 md:p-16 text-center text-white`}>
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
