
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import CTABanner from '@/components/CTABanner';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <BlogSection showViewAllButton={false} />
        
        {/* Use the CTA Banner component instead of inline banner */}
        <CTABanner 
          title="Launch Your AI Revolution Today" 
          description="Unlock the Future of Business with Our Cutting-Edge AI Innovations"
          variant="default"
        />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
