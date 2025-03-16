
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Bot, Zap, ArrowRight, MessageSquare, Users, Brain, ShieldCheck, BarChart, Settings, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const AIAgentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] to-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] to-white/90"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Custom <span className="text-agency-blue">AI Agent</span> Development
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Powerful, context-aware AI assistants that understand your business, 
                engage with customers naturally, and drive measurable improvements
                in satisfaction, efficiency, and revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/booking">
                  <Button className="bg-agency-blue text-white hover:bg-agency-light-blue rounded-full px-8 py-6 text-lg">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-agency-blue/10 to-agency-light-blue/10 rounded-3xl"></div>
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-agency-blue/20 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                <Bot className="w-40 h-40 text-agency-blue mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How <span className="text-agency-blue">AI Agents</span> Transform Your Business
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-12 w-12 text-agency-blue" />,
                title: "24/7 Customer Support",
                description: "Provide instant, accurate responses to customer inquiries around the clock, improving satisfaction and reducing support costs."
              },
              {
                icon: <Users className="h-12 w-12 text-agency-blue" />,
                title: "Personalized Experiences",
                description: "Create tailored interactions based on customer history, preferences, and behavior patterns to increase engagement and loyalty."
              },
              {
                icon: <Brain className="h-12 w-12 text-agency-blue" />,
                title: "Knowledge Management",
                description: "Centralize and leverage your business knowledge, enabling consistent and accurate information retrieval across all interactions."
              },
              {
                icon: <ShieldCheck className="h-12 w-12 text-agency-blue" />,
                title: "Secure Interactions",
                description: "Maintain confidentiality with enterprise-grade security protocols while handling sensitive customer information."
              },
              {
                icon: <BarChart className="h-12 w-12 text-agency-blue" />,
                title: "Data-Driven Insights",
                description: "Analyze interactions to uncover trends, customer needs, and improvement opportunities that drive business growth."
              },
              {
                icon: <Zap className="h-12 w-12 text-agency-blue" />,
                title: "Operational Efficiency",
                description: "Automate routine inquiries and processes, allowing your human team to focus on complex, high-value activities."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-agency-blue/30 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-agency-blue/10 inline-block mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our AI Agent <span className="text-agency-blue">Development Process</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Connection */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-agency-blue/20 hidden md:block"></div>
            
            {[
              {
                step: "01",
                title: "Requirements Discovery",
                description: "We analyze your business needs, target audience, and communication goals to define the ideal AI agent capabilities."
              },
              {
                step: "02",
                title: "Knowledge Base Creation",
                description: "Our team collects and structures your business information, products, services, and processes into a comprehensive knowledge base."
              },
              {
                step: "03",
                title: "Personality Design",
                description: "We craft a unique agent personality that reflects your brand voice and resonates with your target audience."
              },
              {
                step: "04",
                title: "Technical Development",
                description: "Using advanced LLM technology, we build your custom AI agent with the ability to understand context, remember conversations, and provide relevant responses."
              },
              {
                step: "05",
                title: "Integration & Testing",
                description: "We integrate the AI agent with your existing systems and thoroughly test it across various scenarios to ensure optimal performance."
              },
              {
                step: "06",
                title: "Deployment & Refinement",
                description: "After launch, we continuously monitor, analyze, and refine your AI agent based on real-world interactions and feedback."
              }
            ].map((phase, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Phase Number */}
                <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-agency-blue text-white flex items-center justify-center text-2xl font-bold">
                  {phase.step}
                </div>
                
                {/* Content Box */}
                <div className={cn(
                  "flex-grow p-6 bg-white rounded-xl shadow-md border border-gray-100",
                  "hover:shadow-xl hover:border-agency-blue/30 transition-all duration-300",
                  "md:w-[calc(50%-2rem)]"
                )}>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Features */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Advanced <span className="text-agency-blue">Technical Features</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-agency-blue/10 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Capabilities</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    icon: <Code className="h-5 w-5 text-agency-blue" />,
                    title: "Advanced Natural Language Processing",
                    description: "Our agents understand complex queries, context, and intent for more natural conversations."
                  },
                  {
                    icon: <Settings className="h-5 w-5 text-agency-blue" />,
                    title: "Multi-Channel Integration",
                    description: "Seamlessly deploy across websites, messaging apps, email, and voice platforms."
                  },
                  {
                    icon: <Brain className="h-5 w-5 text-agency-blue" />,
                    title: "Contextual Memory",
                    description: "Remembers conversation history to provide coherent, continuous interactions."
                  },
                  {
                    icon: <ShieldCheck className="h-5 w-5 text-agency-blue" />,
                    title: "Enterprise Security",
                    description: "End-to-end encryption and compliance with industry standards for data protection."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-agency-blue/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-agency-blue/10 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">System Integration</h3>
              </div>
              <div className="p-6 space-y-4">
                {[
                  {
                    icon: <Bot className="h-5 w-5 text-agency-blue" />,
                    title: "API Connectivity",
                    description: "Connect to your CRM, ERP, and other business systems for comprehensive functionality."
                  },
                  {
                    icon: <Users className="h-5 w-5 text-agency-blue" />,
                    title: "Authentication Systems",
                    description: "Secure user verification and seamless handover to human agents when needed."
                  },
                  {
                    icon: <BarChart className="h-5 w-5 text-agency-blue" />,
                    title: "Analytics Dashboard",
                    description: "Monitor performance, user satisfaction, and conversion metrics in real-time."
                  },
                  {
                    icon: <MessageSquare className="h-5 w-5 text-agency-blue" />,
                    title: "Human-in-the-Loop Capability",
                    description: "Smooth escalation process when human expertise is required for complex situations."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-agency-blue/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-agency-blue/10">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-agency-blue to-agency-light-blue p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-full h-full bg-white/10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]"></div>
          </div>
          
          <div className="relative z-10 text-white text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Deploy Your Custom AI Agent?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Schedule a free consultation with our AI specialists to discuss your specific business needs and how our custom AI agents can transform your customer interactions.
            </p>
            <Link to="/booking">
              <Button className="bg-white text-agency-blue hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIAgentPage;
