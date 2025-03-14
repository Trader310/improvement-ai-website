
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f0fe] to-white overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
