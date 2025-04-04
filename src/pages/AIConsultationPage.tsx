
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Clock, FileText, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import CTABanner from '@/components/CTABanner';
import { Helmet } from 'react-helmet-async';

const AIConsultationPage = () => {
  const processSteps = [
    {
      icon: <FileText className="h-8 w-8 text-agency-blue" />,
      title: "Comprehensive Discovery",
      description: "We thoroughly assess your current operations, identify process inefficiencies, and understand your strategic business objectives."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-agency-blue" />,
      title: "AI Strategy Development",
      description: "We create a customized AI implementation roadmap precisely tailored to your specific business needs and growth objectives."
    },
    {
      icon: <Clock className="h-8 w-8 text-agency-blue" />,
      title: "Implementation Planning",
      description: "We provide a detailed timeline, resource requirements, and projected ROI analysis for your AI transformation journey."
    }
  ];

  const benefits = [
    "Expert guidance on selecting the optimal AI technologies for your business needs",
    "Unbiased, vendor-neutral recommendations tailored to your specific industry challenges",
    "Comprehensive implementation roadmap with clear timelines and cost projections",
    "Strategic identification of quick-win opportunities and long-term AI adoption strategies",
    "Thorough risk assessment and practical mitigation planning for smooth implementation",
    "Customized training programs and change management recommendations for team adoption"
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>AI Consultation Services | Expert AI Strategy | IMPROVEMENT AI</title>
        <meta name="description" content="Get expert AI consultation services to develop a strategic roadmap for implementing AI solutions that drive business growth and operational efficiency." />
        <meta name="keywords" content="AI consultation, AI strategy development, artificial intelligence experts, business process optimization, AI transformation, technology consulting" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] to-white/90 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-6">
                AI <span className="text-agency-blue">Consultation</span> Services
              </h1>
              <p className="text-xl text-gray-700 mb-8 font-poppins">
                Strategic guidance from experienced AI experts who evaluate your specific business challenges and develop tailored AI solutions that align perfectly with your growth objectives and technical infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button className="bg-agency-blue text-white hover:bg-agency-blue/90 px-8 py-6 text-lg">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Strategic AI Consultation Services"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Proven AI Consultation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-agency-blue/10 rounded-full">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Benefits of Our AI Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg border border-gray-100 shadow-sm">
                <CheckCircle2 className="text-agency-blue mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner with a different variant */}
      <CTABanner 
        title="Ready to Start Your AI Transformation Journey?" 
        description="Book a free 30-minute strategic consultation to discuss your business challenges and explore tailored AI opportunities."
        variant="consultation"
      />
      
      <Footer className="bg-gradient-to-r from-[#4d76fd]/90 via-[#6a8fff] to-[#88a8ff]" />
    </div>
  );
};

export default AIConsultationPage;
