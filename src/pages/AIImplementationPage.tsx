
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIImplementationPage = () => {
  const benefits = [
    "Automate repetitive tasks and processes",
    "Integrate AI with your existing systems",
    "Increase operational efficiency by up to 40%",
    "Reduce manual errors and improve accuracy",
    "Scale operations without increasing headcount",
    "Customize solutions to your specific business needs"
  ];

  const useCases = [
    {
      title: "Document Processing",
      description: "Automatically extract, classify, and process information from invoices, receipts, and contracts."
    },
    {
      title: "Customer Data Analysis",
      description: "Analyze customer behavior patterns to identify trends, preferences, and potential opportunities."
    },
    {
      title: "Workflow Automation",
      description: "Create intelligent workflows that adapt and improve based on real-time data and feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] to-white/90 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI Implementation & <span className="text-agency-blue">Automation</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Seamlessly integrate AI into your existing systems to automate repetitive tasks, optimize workflows, and make data-driven decisions with unprecedented speed and accuracy.
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
                alt="AI Implementation & Automation"
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
          <h2 className="text-3xl font-bold text-center mb-12">Common Use Cases</h2>
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
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-agency-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how AI implementation can streamline your operations and drive growth.
          </p>
          <Link to="/booking">
            <Button className="bg-white text-agency-blue hover:bg-gray-100 px-8 py-6 text-lg">
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIImplementationPage;
