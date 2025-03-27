
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Unlocking Business Potential: The Revolution of AI Automation Tools",
    excerpt: "Discover how AI-powered automation tools are transforming business operations and creating new opportunities for growth and innovation.",
    category: "AI Automation",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "/blog/automation-tools"
  },
  {
    id: 2,
    title: "AI Agents: Revolutionizing Business Intelligence",
    excerpt: "Explore how AI agents are becoming essential tools for business intelligence, providing insights and capabilities that were previously unimaginable.",
    category: "AI Agents",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "/blog/ai-agents"
  },
  {
    id: 3,
    title: "Intelligent Growth: AI Solutions That Empower Every Business",
    excerpt: "Learn how AI solutions are empowering businesses of all sizes to grow more efficiently and effectively in today's competitive landscape.",
    category: "AI Solutions",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "/blog/intelligent-growth"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            OUR BLOG
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6 font-poppins">
            Latest Insights on AI and Automation
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600">
            Stay updated with the latest trends, best practices, and success stories in AI implementation and business automation.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link to={post.link} key={post.id} className="block">
              <div 
                className={cn(
                  "group rounded-xl overflow-hidden transition-all duration-300",
                  "bg-white border border-gray-200 hover:border-agency-blue/30",
                  "hover:shadow-xl hover:shadow-agency-blue/10"
                )}
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  ></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-medium bg-agency-blue text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-agency-blue transition-colors font-poppins">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-agency-blue font-medium font-poppins">
                    Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/blog">
            <Button 
              variant="outline" 
              className="rounded-full border-agency-blue text-agency-blue hover:bg-agency-blue hover:text-white px-8 py-6 text-lg font-poppins"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
