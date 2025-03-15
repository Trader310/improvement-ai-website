
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
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-6">            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-agency-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Flexible Scheduling</h4>
                  <p className="text-gray-600">Choose a time that works best for you and your team</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-agency-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">30-Minute Session</h4>
                  <p className="text-gray-600">Focused discussion on your specific business needs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-agency-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Expert Consultation</h4>
                  <p className="text-gray-600">Meet with senior AI specialists who understand your industry</p>
                </div>
              </div>
            </div>
            
            {/* Meeting Goal */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hidden lg:block">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meeting Goal</h3>
              <p className="text-gray-700">
                The goal of this call is to discover how AI can help you increase revenue & profit 
                while decreasing your workload & costs.
              </p>
              <div className="mt-4 text-agency-blue font-medium">
                I'm excited to talk with you!
              </div>
            </div>
            
            <div className="lg:hidden">
              {isMobile ? (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button 
                      className={cn(
                        "bg-agency-blue text-white hover:bg-agency-light-blue w-full",
                        "rounded-full px-8 py-6 text-lg transition-all duration-300",
                        "group relative overflow-hidden"
                      )}
                    >
                      <span className="relative z-10">Book Your Session</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-agency-blue to-agency-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="h-[90vh]">
                    <div className="px-4 pt-4">
                      <CalendlyEmbed url={calendlyUrl} className="h-[80vh]" />
                    </div>
                  </DrawerContent>
                </Drawer>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={cn(
                        "bg-agency-blue text-white hover:bg-agency-light-blue w-full",
                        "rounded-full px-8 py-6 text-lg transition-all duration-300",
                        "group relative overflow-hidden"
                      )}
                    >
                      <span className="relative z-10">Book Your Session</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-agency-blue to-agency-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[80vh]">
                    <CalendlyEmbed url={calendlyUrl} className="h-[75vh]" />
                  </DialogContent>
                </Dialog>
              )}
            </div>
            
            <div className="text-center lg:text-left">
              <Link to="/booking">
                <Button variant="link" className="text-agency-blue underline">
                  View booking page
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column - Calendly Integration (visible on desktop) */}
          <div className="col-span-3 hidden lg:block">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <CalendlyEmbed url={calendlyUrl} className="min-h-[650px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
