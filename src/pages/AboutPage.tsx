
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
