
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white overflow-x-hidden">
      <Helmet>
        <title>About Our AI Automation Experts | IMPROVEMENT AI</title>
        <meta name="description" content="Learn about IMPROVEMENT AI's expert team of AI automation specialists dedicated to transforming your business processes with intelligent AI solutions." />
        <meta name="keywords" content="AI automation experts, business process automation, AI consultation, intelligent automation, AI technology solutions, artificial intelligence specialists, business transformation, digital workflow optimization" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://improvementai.com/about" />
      </Helmet>
      <Header />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
