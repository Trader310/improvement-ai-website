
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Clock, Calendar, Users } from 'lucide-react';
import SEOMetaTags from '@/components/SEOMetaTags';

const BookingPage = () => {
  const calendlyUrl = 'https://calendly.com/contact-improvementai/30min';
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] to-white overflow-x-hidden">
      <SEOMetaTags 
        title="Book Your AI Consultation | IMPROVEMENT AI"
        description="Schedule a free consultation with IMPROVEMENT AI's experts to discuss how artificial intelligence can transform your business operations and drive growth."
        keywords="AI consultation, book AI meeting, artificial intelligence expert consultation, AI business transformation, free AI consultation, business automation consultation"
        canonicalUrl="https://improvementai.com/booking"
      />
      
      <Header />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
                  SCHEDULE A MEETING
                </h2>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  AI Consultation Session
                </h1>
                <p className="text-lg text-gray-600">
                  Discover how AI can transform your business operations during a complimentary 30-minute consultation with our experts.
                </p>
              </div>
              
              {/* Meeting Details */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-agency-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">30 Minutes</h4>
                    <p className="text-gray-600 text-sm">Focused consultation time</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-agency-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                    <p className="text-gray-600 text-sm">Choose any available time slot</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-agency-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Expert Consultation</h4>
                    <p className="text-gray-600 text-sm">Meet with senior AI specialists</p>
                  </div>
                </div>
              </div>
              
              {/* Meeting Goal */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Meeting Goal</h3>
                <p className="text-gray-700">
                  The goal of this call is to discover how AI can help you increase revenue & profit while decreasing your workload & cost.
                </p>
                <div className="mt-4 text-agency-blue font-medium">
                  I'm excited to talk with you!
                </div>
              </div>
            </div>
            
            {/* Right Column - Calendly - Direct embed without parent container */}
            <CalendlyEmbed 
              url={calendlyUrl} 
              className="lg:col-span-3 min-h-[950px] w-full rounded-xl shadow-lg border border-gray-200"
              prefill={{
                customAnswers: {
                  'Source': 'Website Direct Booking'
                }
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
