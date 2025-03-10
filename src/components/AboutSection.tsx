
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-agency-blue/5 rounded-tr-[70px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-agency-blue/20 to-agency-blue/5 mix-blend-overlay"></div>
              <div className="aspect-video bg-gradient-to-br from-agency-blue to-agency-dark-blue rounded-2xl flex items-center justify-center">
                <div className="text-white/90 text-center p-6">
                  <div className="mb-4 inline-block">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 13L12 16L9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">AI Innovation Visualization</h4>
                  <p className="text-white/70">Interactive demonstration available during consultation</p>
                </div>
              </div>
            </div>
            
            {/* Floating Card Elements */}
            <div className="absolute -top-6 -left-6 p-4 rounded-lg bg-white shadow-lg animate-float hidden md:block">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-agency-blue/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.0857V12.0057C21.9988 14.1621 21.3005 16.2604 20.0093 17.9875C18.7182 19.7147 16.9033 20.9782 14.8354 21.5896C12.7674 22.201 10.5573 22.1276 8.53447 21.3803C6.51168 20.633 4.78465 19.2518 3.61096 17.4428C2.43727 15.6338 1.87979 13.4938 2.02168 11.342C2.16356 9.19029 2.99721 7.14205 4.39828 5.5028C5.79935 3.86354 7.69279 2.72111 9.79619 2.24587C11.8996 1.77063 14.1003 1.98806 16.07 2.86572" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01L9 11.01" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">98% Success Rate</p>
                  <p className="text-xs text-gray-500">Client implementations</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 p-4 rounded-lg bg-white shadow-lg animate-float hidden md:block" style={{ animationDelay: '1s' }}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-agency-blue/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Custom Solutions</p>
                  <p className="text-xs text-gray-500">Tailored for your needs</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
              ABOUT US
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading the Future of Business with AI Innovation
            </h3>
            
            <div className="text-gray-600 space-y-4 mb-8">
              <p>
                At Morningside AI, we believe in the transformative power of artificial intelligence to revolutionize how businesses operate. Our team of AI experts combines deep technical knowledge with practical business experience to deliver solutions that drive real results.
              </p>
              <p>
                We don't just implement technology – we partner with you to understand your unique challenges and create custom AI solutions that align perfectly with your business objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16V12" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8H12.01" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Expert Team</h4>
                  <p className="text-gray-600">Our specialists combine deep AI expertise with business acumen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Proven Results</h4>
                  <p className="text-gray-600">Our AI solutions deliver measurable ROI and business impact</p>
                </div>
              </div>
            </div>
            
            <Button 
              className={cn(
                "bg-agency-blue text-white hover:bg-agency-light-blue",
                "rounded-full px-8 py-6 text-lg transition-all duration-300",
                "group relative overflow-hidden"
              )}
            >
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-agency-blue to-agency-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
