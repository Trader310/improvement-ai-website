
import { Calendar, Clock, Users } from 'lucide-react';
import CalendlyEmbed from './CalendlyEmbed';
import { useMediaQuery } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

const BookingSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const calendlyUrl = 'https://calendly.com/contact-improvementai/30min';
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <section id="booking" className="py-6 px-4 md:px-8 bg-white relative overflow-visible">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-agency-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-agency-blue/10"></div>
        <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-agency-blue/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            GET STARTED
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Book Your AI Consultation
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Select a time for your free 30-minute AI consultation with our experts and discover 
            how AI can transform your business.
          </p>
        </div>
        
        {/* Full-width Calendly embed without background */}
        <div className="overflow-visible w-full">
          <CalendlyEmbed 
            url={calendlyUrl} 
            className="w-full h-[700px] overflow-visible"
            prefill={{
              customAnswers: {
                'Source': isHomePage ? 'Homepage Booking Widget' : 'Booking Page Widget'
              }
            }}
          />
        </div>
        
        {/* Information Boxes - Below the Calendly Embed with further reduced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 mb-0">
          {/* Meeting Details */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-agency-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 font-poppins">30 Minutes</h4>
                  <p className="text-gray-600 text-sm">Focused consultation time</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-agency-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 font-poppins">Flexible Scheduling</h4>
                  <p className="text-gray-600 text-sm">Choose any available time slot</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-agency-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900 font-poppins">Expert Consultation</h4>
                  <p className="text-gray-600 text-sm">Meet with senior AI specialists</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Meeting Goal */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-medium text-gray-900 mb-3 font-poppins">Meeting Goal</h3>
            <p className="text-gray-700">
              The goal of this call is to discover how AI can help you increase revenue & profit while decreasing your workload & cost.
            </p>
            <div className="mt-4 text-agency-blue font-medium">
              I'm excited to talk with you!
            </div>
          </div>

          {/* What to Expect - Simplified to match other boxes' height */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
            <h3 className="text-xl font-medium text-gray-900 mb-3 font-poppins">What to Expect</h3>
            <p className="text-gray-700 mb-3">
              During our consultation, we'll explore AI solutions tailored to your business needs and goals.
            </p>
            <div className="text-agency-blue font-medium">
              Ready to transform your business with AI!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
