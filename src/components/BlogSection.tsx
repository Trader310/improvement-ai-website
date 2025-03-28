
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = ({ showViewAllButton = true }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Unlocking Business Potential: The Revolution of AI Automation",
      description: "Discover how AI-powered automation tools are transforming business operations and creating new opportunities for growth and innovation.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      category: "AI Automation",
      slug: "automation-tools"
    },
    {
      id: 2,
      title: "AI Agents: Revolutionizing Business Intelligence",
      description: "Explore how AI agents are becoming essential tools for business intelligence, providing insights and capabilities that were previously unimaginable.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      category: "AI Agents",
      slug: "ai-agents"
    },
    {
      id: 3,
      title: "Intelligent Growth: AI Solutions That Empower Every Business",
      description: "Learn how AI solutions are empowering businesses of all sizes to grow more efficiently and effectively in today's competitive landscape.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      category: "AI Solutions",
      slug: "intelligent-growth"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Updated with Poppins font and lighter weight */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-blue-100 mb-4">
            OUR BLOG
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 font-poppins">
            Latest Insights on AI and Automation
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and success stories in AI implementation and business automation.
          </p>
        </div>

        {/* Blog Posts Grid - Updated with repositioned labels and lighter font weight for titles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="group border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="overflow-hidden h-56 relative">
                  <img 
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Repositioned label to bottom left of image */}
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-block text-sm font-medium text-[#5271FF] px-3 py-1 rounded-full bg-blue-50/90 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <Link to={`/blog/${post.slug}`} className="block group-hover:text-agency-blue">
                  <h3 className="text-xl font-medium mb-3 font-poppins">{post.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-blue-500 font-medium">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Only show if showViewAllButton is true */}
        {showViewAllButton && (
          <div className="text-center">
            <Link to="/blog">
              <button className="border border-agency-blue text-agency-blue hover:bg-agency-blue/10 px-8 py-3 rounded-full text-lg inline-flex items-center">
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
