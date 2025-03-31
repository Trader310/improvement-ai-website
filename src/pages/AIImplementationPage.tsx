
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/CTABanner';
import { Helmet } from 'react-helmet-async';

const AIImplementationPage = () => {
  const benefits = [
    "Automate repetitive tasks and streamline complex business processes",
    "Seamlessly integrate AI solutions with your existing business systems",
    "Increase operational efficiency and productivity by up to 40%",
    "Dramatically reduce manual errors and improve data accuracy",
    "Scale operations intelligently without increasing workforce overhead",
    "Implement customized AI solutions tailored to your specific business requirements"
  ];

  const useCases = [
    {
      title: "Intelligent Document Processing",
      description: "Automatically extract, classify, and process critical information from invoices, receipts, contracts and other business documents with high accuracy."
    },
    {
      title: "Advanced Customer Data Analysis",
      description: "Leverage AI to analyze customer behavior patterns, identifying valuable trends, preferences, and potential growth opportunities."
    },
    {
      title: "Smart Workflow Automation",
      description: "Implement intelligent workflows that continuously adapt and improve based on real-time data inputs and feedback mechanisms."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>AI Implementation & Automation Services | IMPROVEMENT AI</title>
        <meta name="description" content="Transform your business with our expert AI implementation and automation services. Streamline processes, reduce costs, and boost efficiency with customized AI solutions." />
        <meta name="keywords" content="AI implementation, business automation, workflow optimization, intelligent document processing, AI integration, business efficiency" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] to-white/90 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-poppins text-gray-900 mb-6">
                AI Implementation & <span className="text-agency-blue">Automation</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 font-poppins">
                Seamlessly integrate advanced AI technologies into your existing systems to automate repetitive tasks, optimize complex workflows, and make data-driven decisions with unprecedented speed and accuracy.
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="AI Implementation & Automation Solutions"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How AI Implementation Benefits Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-6 rounded-lg border border-gray-100 shadow-sm">
                <CheckCircle2 className="text-agency-blue mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-800">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic AI Implementation Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-agency-blue mb-4">{useCase.title}</h3>
                <p className="text-gray-700">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner with enhanced gradient */}
      <CTABanner 
        title="Ready to Transform Your Business with AI Automation?" 
        description="Let's discuss how our AI implementation services can streamline your operations and drive sustainable business growth."
        variant="implementation"
      />
      
      <Footer className="bg-gradient-to-r from-[#2a46db]/90 via-[#3a5bff] to-[#7a92ff]" />
    </div>
  );
};

export default AIImplementationPage;
