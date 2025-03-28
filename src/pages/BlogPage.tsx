
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <BlogSection />
        
        {/* CTA Banner with gradient background */}
        <div className="w-full py-16 px-4 md:px-8 mb-16">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-agency-blue/80 via-agency-blue to-agency-dark-blue p-8 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">Launch Your AI Revolution Today</h2>
              <p className="text-xl max-w-2xl mx-auto mb-8 font-poppins">
                Unlock the Future of Business with Our Cutting-Edge AI Innovations
              </p>
              <Link to="/booking">
                <Button
                  variant="outline"
                  className="bg-white text-blue-600 hover:bg-blue-50 border-none rounded-full px-8 py-6 text-lg group hover:scale-105 transition-all duration-300 animate-bounce animate-pulse-subtle font-poppins"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
