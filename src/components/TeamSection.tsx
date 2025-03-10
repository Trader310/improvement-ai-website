
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & AI Strategist",
    bio: "With over 15 years in tech leadership, Sarah specializes in helping businesses leverage AI for transformation and growth.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO & AI Engineer",
    bio: "Michael brings extensive experience in designing and implementing complex AI systems that solve real business challenges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of AI Implementation",
    bio: "Emily excels at bridging the gap between advanced AI technologies and practical business applications with measurable results.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "David Wilson",
    role: "AI Research Director",
    bio: "David leads our R&D efforts, staying at the cutting edge of AI advancements to bring innovative solutions to our clients.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            OUR TEAM
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Meet the Experts Behind Our Success
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our team combines deep technical expertise with business acumen to deliver AI solutions that drive meaningful results.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Team Member Card */}
              <div className={cn(
                "bg-white rounded-xl overflow-hidden transition-all duration-300",
                "border border-gray-200 group-hover:border-agency-blue/30",
                "group-hover:shadow-xl group-hover:shadow-agency-blue/10"
              )}>
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-agency-blue transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-agency-blue font-medium mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="mt-5 flex items-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-agency-blue transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-agency-blue transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-agency-blue transition-colors">
                      <Mail size={18} />
                    </a>
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
