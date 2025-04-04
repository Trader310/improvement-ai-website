
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import { Clock, Calendar, Users, Target, Lightbulb, CheckCircle, MessageSquare } from 'lucide-react';
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
      <div className="pt-24 pb-4 px-4 md:px-8"> {/* Further reduced bottom padding */}
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Now centered */}
          <div className="mb-4 text-center"> {/* Reduced margin and centered */}
            <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
              SCHEDULE A MEETING
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Consultation Session
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how AI can transform your business operations during a complimentary 30-minute consultation with our experts.
            </p>
          </div>
          
          {/* Full Width Calendly Embed - Without background styling */}
          <div className="w-full mb-0"> {/* Keeping zero margin */}
            <CalendlyEmbed 
              url={calendlyUrl} 
              className="min-h-[650px] w-full" {/* Reduced height */}
              prefill={{
                customAnswers: {
                  'Source': 'Website Direct Booking'
                }
              }}
            />
          </div>
          
          {/* Information Boxes - Below the Calendly Embed */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-0"> {/* Keeping zero margin */}
            {/* Meeting Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
              <div className="space-y-5">
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
            </div>
            
            {/* Meeting Goal */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meeting Goal</h3>
              <p className="text-gray-700">
                The goal of this call is to discover how AI can help you increase revenue & profit while decreasing your workload & cost.
              </p>
              <div className="mt-4 text-agency-blue font-medium">
                I'm excited to talk with you!
              </div>
            </div>
            
            {/* What to Expect - Made content match height of other boxes */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 h-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Expect</h3>
              <p className="text-gray-700 mb-3">
                During our consultation, we'll explore AI solutions tailored to your business needs and goals.
              </p>
              <p className="text-gray-700 mb-3">
                You'll get personalized recommendations from our experts.
              </p>
              <div className="text-agency-blue font-medium">
                Ready to transform your business with AI!
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
