
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "Michael Roberts",
    role: "CEO, TechVision Inc.",
    testimonial: "Working with this team transformed our operations completely. Their AI solutions automated our customer service, resulting in 40% cost reduction and happier customers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sarah Chen",
    role: "Founder, DataDrive Solutions",
    testimonial: "Their AI implementation exceeded our expectations. We've seen a 75% increase in productivity since launching our custom AI agents. Truly remarkable results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "James Wilson",
    role: "Operations Director, Global Retail",
    testimonial: "The team delivered an AI solution that revolutionized our inventory management. We've reduced waste by 30% and improved customer satisfaction scores dramatically.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "CMO, Marketing Innovators",
    testimonial: "Their AI-powered analytics platform gave us insights we never thought possible. Our campaigns are now 60% more effective with the same budget. I highly recommend them.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            CLIENT TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say About Us
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what business leaders have to say about our AI solutions and the impact on their operations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Testimonial Card */}
              <div className={cn(
                "bg-white rounded-xl overflow-hidden transition-all duration-300",
                "border border-gray-200 group-hover:border-agency-blue/30",
                "group-hover:shadow-xl group-hover:shadow-agency-blue/10"
              )}>
                {/* Rating */}
                <div className="px-6 pt-6 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm italic mb-6">
                    "{testimonial.testimonial}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-agency-blue text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
