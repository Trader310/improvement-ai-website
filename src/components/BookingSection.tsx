
import { Button } from './ui/button';
import { Calendar, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const BookingSection = () => {
  return (
    <section id="booking" className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-agency-blue/5 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-agency-blue/10"></div>
        <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-agency-blue/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div>
            <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
              GET STARTED
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Book a Free AI Consultation
            </h3>
            
            <p className="text-gray-600 mb-8">
              Discover how AI can transform your business operations during a complimentary 30-minute consultation with our experts. We'll analyze your needs and provide tailored recommendations.
            </p>
            
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
            
            <Button 
              className={cn(
                "bg-agency-blue text-white hover:bg-agency-light-blue",
                "rounded-full px-8 py-6 text-lg transition-all duration-300",
                "group relative overflow-hidden"
              )}
            >
              <span className="relative z-10">Book Your Session</span>
              <span className="absolute inset-0 bg-gradient-to-r from-agency-blue to-agency-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </div>
          
          {/* Mock Calendly Integration */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-gray-900">Select a Date & Time</h4>
              <p className="text-gray-600 mt-2">30-minute AI consultation</p>
            </div>
            
            {/* Calendar Mock */}
            <div className="mb-6">
              <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                <div className="text-gray-500">S</div>
                <div className="text-gray-500">M</div>
                <div className="text-gray-500">T</div>
                <div className="text-gray-500">W</div>
                <div className="text-gray-500">T</div>
                <div className="text-gray-500">F</div>
                <div className="text-gray-500">S</div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center">
                {[...Array(31)].map((_, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "py-2 rounded-md text-sm cursor-pointer transition-colors",
                      index === 15 
                        ? "bg-agency-blue text-white" 
                        : "hover:bg-agency-blue/10 text-gray-700"
                    )}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Time Slots */}
            <div className="mb-6">
              <h5 className="text-gray-900 font-medium mb-3">Available Times</h5>
              <div className="grid grid-cols-3 gap-2">
                {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "py-2 text-center text-sm rounded-md cursor-pointer transition-colors",
                      index === 2 
                        ? "bg-agency-blue text-white" 
                        : "border border-gray-200 hover:border-agency-blue text-gray-700"
                    )}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-agency-blue focus:border-agency-blue" 
                  placeholder="Your full name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-agency-blue focus:border-agency-blue" 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            
            <Button 
              className="w-full bg-agency-blue text-white hover:bg-agency-light-blue rounded-md py-3"
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
