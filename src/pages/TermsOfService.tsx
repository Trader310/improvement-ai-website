
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOMetaTags from '@/components/SEOMetaTags';
import ScrollToTop from '@/components/ScrollToTop';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEOMetaTags 
        title="Terms of Service | IMPROVEMENT AI"
        description="Terms of Service for IMPROVEMENT AI. Learn about the terms that govern your use of our services."
        keywords="terms of service, legal terms, conditions, service agreement, IMPROVEMENT AI"
        canonicalUrl="https://improvementai.agency/terms-of-service"
      />
      
      <Header />
      
      <main className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: April 5, 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p>Welcome to Improvement AI. These Terms of Service ("Terms") govern your access to and use of our website and services provided by Improvement AI ("Company," "we," "us," or "our"). By accessing or using our services, you agree to comply with and be bound by these Terms.</p>
          
          <hr className="my-6" />
          
          <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
          <p>Improvement AI offers a range of services, including AI Consultation, AI System Development, AI Agent Creation, and AI Implementation & Automation. These Terms apply to your use of our website https://www.improvementai.agency/ and all related services.</p>
          
          <h2 className="text-2xl font-semibold mt-8">2. Services Provided</h2>
          <p>Improvement AI provides the following services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI Consultation</li>
            <li>AI System Development</li>
            <li>AI Agent Creation</li>
            <li>AI Implementation & Automation</li>
          </ul>
          <p>These services are subject to the terms outlined in this document. We may update or amend the services from time to time.</p>
          
          <h2 className="text-2xl font-semibold mt-8">3. Account Registration and Use</h2>
          <p>Our services do not require account registration for general use. However, if any feature of our services requires account creation or special access, users will be asked to provide accurate and current information.</p>
          
          <h2 className="text-2xl font-semibold mt-8">4. User Conduct</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. Any activity that violates these Terms or engages in illegal or unauthorized behavior may result in the suspension or termination of your access to our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8">5. Third-Party Services</h2>
          <p>Our website may include links to third-party services, such as Calendly for meeting scheduling and Google Analytics for website usage analysis. We do not control and are not responsible for the content or practices of any third-party services.</p>
          
          <h2 className="text-2xl font-semibold mt-8">6. Intellectual Property</h2>
          <p>All intellectual property rights related to the services, including but not limited to software, designs, and content, are owned by Improvement AI or its licensors. Users are granted a limited, non-exclusive license to access and use the services as intended.</p>
          
          <h2 className="text-2xl font-semibold mt-8">7. Termination</h2>
          <p>Improvement AI reserves the right to terminate or suspend your access to the services, with or without cause, at any time and without prior notice. Termination may occur if you violate these Terms or if it is necessary for business operations.</p>
          
          <h2 className="text-2xl font-semibold mt-8">8. Limitation of Liability</h2>
          <p>The services and content provided by Improvement AI are offered "as is" without warranties of any kind. Improvement AI is not liable for any indirect, incidental, or consequential damages arising from the use of the website or services, including but not limited to loss of profits, data, or goodwill.</p>
          
          <h2 className="text-2xl font-semibold mt-8">9. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of Poland, without regard to its conflict of law provisions.</p>
          
          <h2 className="text-2xl font-semibold mt-8">10. Changes to Terms</h2>
          <p>Improvement AI reserves the right to modify these Terms at any time. When changes occur, the new Terms will be posted on this website with an updated "Effective Date." You are encouraged to review these Terms periodically. Continued use of our services after changes will signify your acceptance of the modified Terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8">11. Service Modifications</h2>
          <p>Improvement AI may withdraw or amend services, features, or materials offered through our services at any time and at our sole discretion, without notice.</p>
          
          <h2 className="text-2xl font-semibold mt-8">12. Contact Us</h2>
          <p>For any questions or concerns about these Terms, please contact us at:</p>
          <p>Email: wiktor@improvementai.agency</p>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TermsOfService;
