
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Bot, ArrowRight, MessageCircle, BarChart3, BrainCircuit, Headphones, ShieldCheck, Zap } from 'lucide-react';
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
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-full filter blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-full filter blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-agency-blue">AI Agent</span> Development
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Custom AI assistants that understand your business context, engage with customers naturally, and drive measurable improvements in conversions, satisfaction, and revenue.
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
      
      {/* What Are AI Agents Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Are <span className="text-agency-blue">AI Agents?</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                AI agents are intelligent virtual assistants that can understand natural language, learn from interactions,
                and perform complex tasks to support your business operations and customer service needs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Unlike basic chatbots, our AI agents are custom-built to understand your specific business domain, products,
                and customer needs. They can handle complex queries, make recommendations, process transactions, and continuously
                improve through machine learning.
              </p>
              <p className="text-lg text-gray-700">
                Whether you need customer support automation, sales assistance, or internal knowledge management,
                our AI agents deliver personalized, context-aware interactions that feel natural and add real value.
              </p>
            </div>
            <div className="bg-[#f8faff] p-8 rounded-3xl">
              <div className="chat-interface bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <div className="chat-header flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-agency-blue" />
                    </div>
                    <span className="ml-3 font-semibold">AI Sales Assistant</span>
                  </div>
                  <span className="text-sm text-gray-400">Online</span>
                </div>
                
                <div className="chat-messages space-y-4">
                  <div className="message ai-message bg-agency-blue/5 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Hello! I'm your AI sales assistant. How can I help you today?</p>
                  </div>
                  
                  <div className="message user-message bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-gray-800">I'm looking for a solution to automate my customer support.</p>
                  </div>
                  
                  <div className="message ai-message bg-agency-blue/5 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Based on your needs, I'd recommend our AI Customer Support Agent. It can handle common queries, route complex issues to human agents, and is available 24/7.</p>
                  </div>
                  
                  <div className="message user-message bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-gray-800">That sounds perfect! What's the implementation process like?</p>
                  </div>
                  
                  <div className="message ai-message bg-agency-blue/5 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">We'll customize the AI to your business, integrate with your systems, and train it on your knowledge base. The process typically takes 2-4 weeks. Would you like to schedule a consultation to discuss details?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Benefits of <span className="text-agency-blue">AI Agents</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Headphones className="h-12 w-12 text-agency-blue" />,
                title: "24/7 Availability",
                description: "Provide instant responses to customers at any time, reducing wait times and improving satisfaction."
              },
              {
                icon: <Zap className="h-12 w-12 text-agency-blue" />,
                title: "Increased Efficiency",
                description: "Handle thousands of conversations simultaneously, freeing up your human team for complex tasks."
              },
              {
                icon: <MessageCircle className="h-12 w-12 text-agency-blue" />,
                title: "Natural Conversations",
                description: "Engage users in human-like interactions that understand context, nuance, and follow-up questions."
              },
              {
                icon: <BrainCircuit className="h-12 w-12 text-agency-blue" />,
                title: "Continuous Learning",
                description: "Our AI agents improve over time, learning from interactions to provide better responses."
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-agency-blue" />,
                title: "Actionable Insights",
                description: "Gain valuable data on customer inquiries, pain points, and satisfaction levels."
              },
              {
                icon: <ShieldCheck className="h-12 w-12 text-agency-blue" />,
                title: "Consistent Experience",
                description: "Deliver the same high-quality responses across all customer touchpoints."
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
      
      {/* Use Cases Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            AI Agent <span className="text-agency-blue">Use Cases</span>
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            Our AI agents can be customized for various business needs across different industries. Here are some popular applications:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Support Automation",
                description: "Handle common inquiries, troubleshoot issues, and escalate complex problems to human agents when necessary."
              },
              {
                title: "Sales Assistance",
                description: "Guide customers through product selection, answer questions, and facilitate purchases with personalized recommendations."
              },
              {
                title: "Internal Knowledge Management",
                description: "Help employees quickly find information, answer policy questions, and streamline internal processes."
              },
              {
                title: "Lead Generation & Qualification",
                description: "Engage website visitors, qualify leads, and schedule appointments with your sales team."
              }
            ].map((useCase, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-agency-blue/5 to-agency-light-blue/5 p-8 rounded-xl border border-agency-blue/10 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-agency-blue">{useCase.title}</h3>
                <p className="text-gray-700">{useCase.description}</p>
              </div>
            ))}
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
              Ready to Implement AI Agents in Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Schedule a free consultation with our AI agent development experts to discuss your specific needs
              and how our tailored solutions can help you achieve your business goals.
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
