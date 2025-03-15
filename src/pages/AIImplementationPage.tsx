
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Bot, ArrowRight, Code, FileCode, Gauge, Layers, Database, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const AIImplementationPage = () => {
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
                <span className="text-agency-blue">AI Implementation</span> & <span className="text-agency-blue">Automation</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Transform your business operations with cutting-edge AI solutions that reduce costs, 
                increase efficiency, and deliver exceptional results.
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
                <Brain className="w-40 h-40 text-agency-blue mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How AI Implementation <span className="text-agency-blue">Benefits Your Business</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12 text-agency-blue" />,
                title: "Enhanced Productivity",
                description: "Automate repetitive tasks and workflows, allowing your team to focus on high-value strategic activities that drive business growth."
              },
              {
                icon: <Gauge className="h-12 w-12 text-agency-blue" />,
                title: "Operational Efficiency",
                description: "Streamline business processes through intelligent automation, reducing operational costs and minimizing human error."
              },
              {
                icon: <Database className="h-12 w-12 text-agency-blue" />,
                title: "Data-Driven Insights",
                description: "Leverage AI to analyze vast amounts of data and extract actionable insights that inform better business decisions."
              },
              {
                icon: <Workflow className="h-12 w-12 text-agency-blue" />,
                title: "Workflow Optimization",
                description: "Identify bottlenecks and inefficiencies in your processes, then implement AI solutions to optimize operations."
              },
              {
                icon: <FileCode className="h-12 w-12 text-agency-blue" />,
                title: "Custom AI Solutions",
                description: "Develop tailored AI implementations that address your unique business challenges and objectives."
              },
              {
                icon: <Layers className="h-12 w-12 text-agency-blue" />,
                title: "Scalable Architecture",
                description: "Build AI systems that grow with your business, ensuring continued performance as data volume and complexity increase."
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
      
      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-[#f8faff] to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our AI Implementation <span className="text-agency-blue">Process</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Connection */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-agency-blue/20 hidden md:block"></div>
            
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "We analyze your current systems, workflows, and pain points to identify areas where AI can create the most impact."
              },
              {
                step: "02",
                title: "Solution Design",
                description: "Our team designs a customized AI implementation strategy tailored to your specific business needs and objectives."
              },
              {
                step: "03",
                title: "Development & Integration",
                description: "We develop and seamlessly integrate AI solutions into your existing systems with minimal disruption to your operations."
              },
              {
                step: "04",
                title: "Testing & Optimization",
                description: "Rigorous testing ensures your AI implementation performs optimally before deployment, with continuous optimization post-launch."
              },
              {
                step: "05",
                title: "Training & Support",
                description: "We provide comprehensive training for your team and ongoing support to ensure you maximize the benefits of your AI implementation."
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
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-agency-blue/10">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-agency-blue to-agency-light-blue p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-full h-full bg-white/10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)]"></div>
          </div>
          
          <div className="relative z-10 text-white text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Schedule a free consultation with our AI implementation experts to discuss how we can help automate
              your workflows and optimize your business operations.
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

export default AIImplementationPage;
