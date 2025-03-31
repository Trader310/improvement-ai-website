
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/CTABanner';
import { Helmet } from 'react-helmet-async';

const AIAgentPage = () => {
  const benefits = [
    "Deliver seamless 24/7 customer support without human intervention",
    "Dramatically reduce response times from hours to mere seconds",
    "Efficiently handle multiple complex inquiries simultaneously",
    "Maintain consistent quality and accuracy in every customer interaction",
    "Strategically scale your customer service without expanding staff",
    "Generate valuable customer insights and actionable analytics"
  ];

  const features = [
    {
      title: "Advanced Natural Language Understanding",
      description: "Our AI agents comprehend complex customer inquiries with human-like understanding, processing nuanced language and contextual information."
    },
    {
      title: "Seamless Knowledge Integration",
      description: "Intelligently connects with your company's knowledge base to provide accurate, consistent information across all customer touchpoints."
    },
    {
      title: "Omnichannel Support Capabilities",
      description: "Works cohesively across your website, messaging platforms, social media channels, and other critical communication interfaces."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Custom AI Agent Development | Intelligent Assistants | IMPROVEMENT AI</title>
        <meta name="description" content="Build custom AI agents and virtual assistants that understand your business context and engage with customers naturally while improving conversion rates and satisfaction." />
        <meta name="keywords" content="AI agents, virtual assistants, conversational AI, customer service automation, intelligent chatbots, natural language processing" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] to-white/90 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                AI Agent <span className="text-agency-blue">Development</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Custom intelligent AI assistants that deeply understand your business context, engage with customers naturally, and drive measurable improvements in conversion rates, customer satisfaction, and revenue growth.
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
                alt="Advanced AI Agent Development Solutions"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Strategic Benefits of Custom AI Agents</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Key AI Agent Capabilities</h2>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Story</h2>
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Their AI consultation was incredibly valuable. They quickly identified key automation opportunities, and the custom AI agent they developed now efficiently handles 70% of our inbound customer inquiries."
                </blockquote>
                <p className="font-medium text-agency-blue">- Senior Marketing Director, Leading SaaS Company</p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Results Achieved</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                      <span>70% reduction in customer support ticket volume</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                      <span>93% customer satisfaction rating with AI interactions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-3 flex-shrink-0" />
                      <span>30% increase in qualified lead conversion rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Banner with enhanced gradient */}
      <CTABanner 
        title="Ready to Build Your Intelligent AI Agent Solution?" 
        description="Let's discuss how a tailored AI agent can transform your customer interactions and drive business growth."
        variant="agent"
      />
      
      <Footer className="bg-gradient-to-r from-[#1133cc]/90 via-[#3a5bff] to-[#8aa3ff]" />
    </div>
  );
};

export default AIAgentPage;
