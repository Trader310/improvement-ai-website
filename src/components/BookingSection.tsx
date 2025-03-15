
import { Button } from './ui/button';
import { Calendar, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import CalendlyEmbed from './CalendlyEmbed';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';
import { useMediaQuery } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a time for your free 30-minute AI consultation with our experts and discover 
            how AI can transform your business.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <CalendlyEmbed 
            url={calendlyUrl} 
            className="min-h-[700px] w-full"
            prefill={{
              customAnswers: {
                'Source': 'Homepage Booking Widget'
              }
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
