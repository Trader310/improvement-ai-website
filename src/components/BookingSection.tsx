
import { Calendar, Clock, Users } from 'lucide-react';
import CalendlyEmbed from './CalendlyEmbed';
import { useMediaQuery } from '@/hooks/use-mobile';

const BookingSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const calendlyUrl = 'https://calendly.com/dropstrader/improvement-ai-consultation';

  return (
    <section id="booking" className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-agency-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-agency-blue/10"></div>
        <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-agency-blue/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            GET STARTED
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Book Your AI Consultation
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Select a time for your free 30-minute AI consultation with our experts and discover 
            how AI can transform your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-6">
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
          
          {/* Right Column - Calendly */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full">
              <CalendlyEmbed 
                url={calendlyUrl} 
                className="h-[750px] w-full"
                prefill={{
                  customAnswers: {
                    'Source': 'Homepage Booking Widget'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
