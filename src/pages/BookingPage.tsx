
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white overflow-x-hidden">
      <Header />
      <div className="pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Schedule Your AI Consultation</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose a time below for your 30-minute consultation with our AI experts. We'll discuss your 
              business needs and how our AI solutions can help you achieve your goals.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
            <CalendlyEmbed 
              url="https://calendly.com/dropstrader/improvement-ai-consultation" 
              className="min-h-[700px] w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
