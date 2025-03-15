
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, LightbulbIcon, Target, TrendingUp, Users, BookOpen, LineChart, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import CalendlyEmbed from '@/components/CalendlyEmbed';

const AIConsultationPage = () => {
  const calendlyUrl = 'https://calendly.com/dropstrader/improvement-ai-consultation';
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] to-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#e8f0fe] to-white/90"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-agency-blue/5 rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-agency-blue">AI Consultation</span> Services
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Strategic guidance from AI experts who evaluate your specific business needs and develop tailored AI solutions that align with your growth objectives and technical requirements.
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
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-agency-blue/20 transform rotate-2 transition-transform hover:rotate-0 duration-500">
                <Sparkles className="w-40 h-40 text-agency-blue mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About AI Consultation Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative p-6 bg-agency-blue/5 rounded-3xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                    <LightbulbIcon className="h-12 w-12 text-agency-blue mb-4" />
                    <span className="text-xl font-bold text-gray-900">Strategic Planning</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                    <Target className="h-12 w-12 text-agency-blue mb-4" />
                    <span className="text-xl font-bold text-gray-900">Needs Analysis</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                    <TrendingUp className="h-12 w-12 text-agency-blue mb-4" />
                    <span className="text-xl font-bold text-gray-900">Growth Roadmap</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center">
                    <LineChart className="h-12 w-12 text-agency-blue mb-4" />
                    <span className="text-xl font-bold text-gray-900">ROI Forecasting</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our <span className="text-agency-blue">AI Consultation</span> Services?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our AI consultation services provide expert guidance to help you navigate the complex landscape of artificial intelligence. We work closely with you to understand your business challenges, identify opportunities for AI integration, and develop a strategic roadmap tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Unlike general technology consultants, our team specializes exclusively in AI implementations with a proven track record across multiple industries. We combine deep technical expertise with business acumen to ensure your AI initiatives deliver measurable results and ROI.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're just beginning your AI journey or looking to optimize existing implementations, our consultation services provide the clarity and direction you need to succeed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Process Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our AI Consultation <span className="text-agency-blue">Process</span>
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            We follow a structured approach to ensure your AI consultation delivers maximum value and actionable insights for your business.
          </p>
          
          <div className="relative">
            {/* Timeline Connection */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-agency-blue/20 hidden md:block"></div>
            
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-white" />,
                title: "Discovery Session",
                description: "We begin with a comprehensive discovery session to understand your business objectives, challenges, and current technology landscape."
              },
              {
                icon: <Target className="w-8 h-8 text-white" />,
                title: "Needs Assessment",
                description: "Our experts conduct a detailed assessment to identify specific areas where AI can create the most significant impact for your business."
              },
              {
                icon: <LightbulbIcon className="w-8 h-8 text-white" />,
                title: "Solution Mapping",
                description: "We develop a tailored AI solution map that outlines recommended technologies, implementation approaches, and expected outcomes."
              },
              {
                icon: <LineChart className="w-8 h-8 text-white" />,
                title: "ROI Analysis",
                description: "Our team provides a detailed analysis of potential return on investment, helping you prioritize AI initiatives based on business impact."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-white" />,
                title: "Implementation Roadmap",
                description: "We deliver a comprehensive roadmap with clear milestones, resource requirements, and timeline for successful AI implementation."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12",
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Step Icon */}
                <div className="z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-agency-blue to-agency-light-blue text-white flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                
                {/* Content Box */}
                <div className={cn(
                  "flex-grow p-6 bg-white rounded-xl shadow-md border border-gray-100",
                  "hover:shadow-xl hover:border-agency-blue/30 transition-all duration-300",
                  "md:w-[calc(50%-2rem)]"
                )}>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Book Consultation Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Information */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="inline-block text-sm font-semibold text-agency-blue px-4 py-1.5 rounded-full bg-agency-blue/10 mb-4">
                  GET STARTED
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Book Your AI Consultation
                </h3>
                <p className="text-lg text-gray-600">
                  Select a time for your free 30-minute AI consultation with our experts and discover how AI can transform your business.
                </p>
              </div>
              
              {/* Meeting Details */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-agency-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">30 Minutes</h4>
                    <p className="text-gray-600 text-sm">Focused consultation time</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-agency-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                    <p className="text-gray-600 text-sm">Choose any available time slot</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-agency-blue/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-agency-blue" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Expert Consultation</h4>
                    <p className="text-gray-600 text-sm">Meet with senior AI specialists</p>
                  </div>
                </div>
              </div>
              
              {/* Meeting Goal */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Meeting Goal</h3>
                <p className="text-gray-700">
                  The goal of this call is to discover how AI can help you increase revenue & profit while decreasing your workload & cost.
                </p>
                <div className="mt-4 text-agency-blue font-medium">
                  I'm excited to talk with you!
                </div>
              </div>
            </div>
            
            {/* Right Column - Calendly */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <CalendlyEmbed 
                  url={calendlyUrl} 
                  className="min-h-[700px] w-full"
                  prefill={{
                    customAnswers: {
                      'Source': 'AI Consultation Page'
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIConsultationPage;
