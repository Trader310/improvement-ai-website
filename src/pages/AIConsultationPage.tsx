
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Lightbulb, Target, CheckCircle, Clock, Calendar, BarChart, Users, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const AIConsultationPage = () => {
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
                Strategic <span className="text-agency-blue">AI Consultation</span> Services
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Expert guidance to identify opportunities, overcome challenges, and develop a customized AI roadmap 
                aligned with your business goals and technical requirements.
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
              <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-agency-blue/20 transform rotate-3 transition-transform hover:rotate-0 duration-500">
                <Sparkles className="w-40 h-40 text-agency-blue mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Process */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-agency-blue">Consultation</span> Process
          </h2>
          
          <div className="relative">
            {/* Timeline Connection */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-agency-blue/20 hidden md:block"></div>
            
            {[
              {
                step: "01",
                title: "Discovery Session",
                description: "We conduct an in-depth analysis of your business operations, challenges, and goals to identify potential AI applications."
              },
              {
                step: "02",
                title: "Opportunity Mapping",
                description: "Our experts map out specific areas where AI can create the most value for your organization based on industry best practices."
              },
              {
                step: "03",
                title: "Solution Design",
                description: "We develop a tailored AI strategy and solution architecture aligned with your business requirements and technical infrastructure."
              },
              {
                step: "04",
                title: "Implementation Planning",
                description: "A detailed roadmap outlining the resources, timeline, and milestones required for successful AI integration."
              },
              {
                step: "05",
                title: "ROI Analysis",
                description: "We provide a comprehensive assessment of the expected return on investment, including cost savings and revenue opportunities."
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
      
      {/* Consultation Areas */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Key <span className="text-agency-blue">Consultation</span> Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-12 w-12 text-agency-blue" />,
                title: "Strategic AI Roadmapping",
                description: "Develop a comprehensive plan for AI adoption that aligns with your long-term business objectives and market positioning."
              },
              {
                icon: <Lightbulb className="h-12 w-12 text-agency-blue" />,
                title: "Process Optimization",
                description: "Identify workflows and operations that can be enhanced or automated through AI to increase efficiency and reduce costs."
              },
              {
                icon: <BarChart className="h-12 w-12 text-agency-blue" />,
                title: "Data Strategy & Governance",
                description: "Create frameworks for data collection, management, and utilization that maximize AI effectiveness while ensuring compliance."
              },
              {
                icon: <Users className="h-12 w-12 text-agency-blue" />,
                title: "Change Management",
                description: "Develop strategies for smooth transition and adoption of AI technologies within your organization's culture."
              },
              {
                icon: <Layers className="h-12 w-12 text-agency-blue" />,
                title: "Technical Architecture",
                description: "Design scalable AI infrastructure that integrates seamlessly with your existing systems and supports future growth."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-agency-blue" />,
                title: "Vendor Selection & Evaluation",
                description: "Navigate the complex AI vendor landscape to identify the right partners and technologies for your specific needs."
              }
            ].map((area, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-agency-blue/30 transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-agency-blue/10 inline-block mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Benefits of Our <span className="text-agency-blue">AI Consultation</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: <Clock className="h-6 w-6 text-agency-blue" />,
                  title: "Accelerated AI Adoption",
                  description: "Bypass common pitfalls and leverage our experience to implement AI solutions faster with higher success rates."
                },
                {
                  icon: <Target className="h-6 w-6 text-agency-blue" />,
                  title: "Strategic Clarity",
                  description: "Gain clear direction on which AI technologies will best serve your specific business needs and objectives."
                },
                {
                  icon: <BarChart className="h-6 w-6 text-agency-blue" />,
                  title: "Maximized ROI",
                  description: "Focus your investment on high-impact AI applications that deliver measurable business value and competitive advantage."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-agency-blue/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
              {[
                {
                  icon: <Lightbulb className="h-6 w-6 text-agency-blue" />,
                  title: "Risk Mitigation",
                  description: "Identify and address potential technical, operational, and regulatory challenges before they impact your AI implementation."
                },
                {
                  icon: <Calendar className="h-6 w-6 text-agency-blue" />,
                  title: "Future-Proofed Strategy",
                  description: "Develop a flexible AI approach that can adapt to emerging technologies and changing business requirements."
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-agency-blue" />,
                  title: "Expert Knowledge Transfer",
                  description: "Build internal capability through collaboration with our specialists and structured knowledge sharing."
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-agency-blue/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
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
              Start Your AI Journey With Expert Guidance
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Schedule a free consultation with our AI specialists to explore how strategic AI planning 
              can transform your business operations and drive growth.
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

export default AIConsultationPage;
