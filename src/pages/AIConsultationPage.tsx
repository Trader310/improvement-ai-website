
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Clock, FileText, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const AIConsultationPage = () => {
  const processSteps = [
    {
      icon: <FileText className="h-8 w-8 text-agency-blue" />,
      title: "Discovery",
      description: "We assess your current operations, identify pain points, and understand your business goals."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-agency-blue" />,
      title: "Strategy Development",
      description: "We create a customized AI implementation plan tailored to your specific needs and objectives."
    },
    {
      icon: <Clock className="h-8 w-8 text-agency-blue" />,
      title: "Implementation Roadmap",
      description: "We provide a detailed timeline, resource requirements, and ROI projections for your AI transformation."
    }
  ];

  const benefits = [
    "Expert guidance on AI technology selection",
    "Unbiased recommendations tailored to your business",
    "Clear implementation roadmap with timeline and costs",
    "Identification of quick wins and long-term strategies",
    "Risk assessment and mitigation planning",
    "Training and change management recommendations"
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
                AI <span className="text-agency-blue">Consultation</span> Services
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Strategic guidance from AI experts who evaluate your specific business needs and develop tailored AI solutions that align with your growth objectives and technical requirements.
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
                alt="AI Consultation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Consultation Process</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Our AI Consultation</h2>
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
      
      {/* Testimonial Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-agency-blue p-8 md:p-12 rounded-2xl text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
              <blockquote className="text-2xl italic mb-8">
                "We needed a smarter way to qualify leads, and their AI agent nailed it. It filters and prioritizes prospects automatically, saving our sales team hours every day."
              </blockquote>
              <p className="font-medium">- Sales Director, Tech Startup</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-agency-blue/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Book a free 30-minute consultation to discuss your business needs and explore AI opportunities.
          </p>
          <Link to="/booking">
            <Button className="bg-agency-blue text-white hover:bg-agency-blue/90 px-8 py-6 text-lg">
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

export default AIConsultationPage;
