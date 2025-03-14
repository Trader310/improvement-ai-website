
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f0fe] to-white overflow-x-hidden">
      <Header />
      <div className="pt-24">
        <ServicesSection />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
