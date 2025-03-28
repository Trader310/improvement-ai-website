
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const BlogSection = ({ showViewAllButton = true }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 AI Automation Tools for Businesses in 2025",
      description: "Discover the most effective AI automation tools that are transforming business operations and driving efficiency.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      date: "Apr 15, 2025",
      readTime: "5 min read",
      slug: "automation-tools"
    },
    {
      id: 2,
      title: "How AI Agents are Revolutionizing Customer Service",
      description: "Learn how intelligent AI agents are providing 24/7 support and transforming the customer experience landscape.",
      imageUrl: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      date: "Mar 28, 2025",
      readTime: "6 min read",
      slug: "ai-agents"
    },
    {
      id: 3,
      title: "The Future of Business Growth: AI-Driven Intelligence",
      description: "Explore how AI-powered analytics and insights are enabling businesses to make smarter decisions and achieve sustainable growth.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      date: "Mar 10, 2025",
      readTime: "8 min read",
      slug: "intelligent-growth"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
            OUR BLOG
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-poppins">
            Latest Articles
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Insights, strategies, and case studies on how AI is transforming businesses across industries.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden rounded-xl mb-5">
                  <img 
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="block group-hover:text-agency-blue">
                <h3 className="text-xl font-semibold mb-3 font-poppins">{post.title}</h3>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-agency-blue font-medium">
                Read More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button - Only show if showViewAllButton is true */}
        {showViewAllButton && (
          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" className="border-agency-blue text-agency-blue hover:bg-agency-blue/10 px-8 py-6 rounded-full text-lg">
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
