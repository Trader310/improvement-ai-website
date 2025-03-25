
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAgentPage = () => {
  const benefits = [
    "Provide 24/7 customer support without human intervention",
    "Reduce response time from hours to seconds",
    "Handle multiple inquiries simultaneously",
    "Maintain consistent quality in every interaction",
    "Scale your customer service without hiring more staff",
    "Generate valuable customer insights and analytics"
  ];

  const features = [
    {
      title: "Natural Language Understanding",
      description: "Our AI agents comprehend customer inquiries with human-like understanding, even with complex language and context."
    },
    {
      title: "Knowledge Integration",
      description: "Seamlessly connects with your company's knowledge base to provide accurate, consistent information."
    },
    {
      title: "Multi-channel Support",
      description: "Works across your website, messaging apps, social media, and other communication channels."
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
                AI Agent <span className="text-agency-blue">Development</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Custom AI assistants that understand your business context, engage with customers naturally, and drive measurable improvements in conversions, satisfaction, and revenue.
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="AI Agent Development"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Custom AI Agents</h2>
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
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-agency-blue mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-agency-blue/5 p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Story</h2>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Their AI consultation was incredibly valuable. They quickly identified automation opportunities, and the custom AI agent they built now handles 70% of our inbound inquiries."
                </blockquote>
                <p className="font-medium text-agency-blue">- Marketing Director, SaaS Company</p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                      <span>70% reduction in support ticket volume</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                      <span>93% customer satisfaction rate</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                      <span>30% increase in lead conversion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-agency-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Custom AI Agent?</h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how a tailored AI solution can transform your customer interactions.
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

export default AIAgentPage;
