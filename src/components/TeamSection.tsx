
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "Michael",
    role: "CEO",
    testimonial: "Partnering with this agency was a game changer. Their AI lead reactivation system brought in leads we thought were long gone—over 30% re-engaged in just a month.",
    rating: 5
  },
  {
    name: "Sarah",
    role: "Founder",
    testimonial: "Their AI consultation was incredibly valuable. They quickly identified automation opportunities, and the custom AI agent they built now handles 70% of our inbound inquiries.",
    rating: 5
  },
  {
    name: "James",
    role: "Operations Director",
    testimonial: "We needed a smarter way to qualify leads, and their AI agent nailed it. It filters and prioritizes prospects automatically, saving our sales team hours every day.",
    rating: 5
  },
  {
    name: "Elena",
    role: "CMO",
    testimonial: "Impressive from start to finish. Their AI automation streamlined our internal workflows and boosted productivity—everything now runs smoother and faster than ever before.",
    rating: 5
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4 font-poppins">
            CLIENT TESTIMONIALS
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 font-poppins">
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
              className="group relative h-full"
            >
              {/* Testimonial Card */}
              <div className={cn(
                "bg-white rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col",
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
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 text-sm italic mb-6 flex-grow">
                    "{testimonial.testimonial}"
                  </p>
                  
                  {/* Client Info - Simplified */}
                  <div className="flex items-center mt-auto">
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 font-poppins">
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
