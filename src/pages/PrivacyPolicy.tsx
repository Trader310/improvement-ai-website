
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOMetaTags from '@/components/SEOMetaTags';
import ScrollToTop from '@/components/ScrollToTop';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEOMetaTags 
        title="Privacy Policy | IMPROVEMENT AI"
        description="Privacy Policy for IMPROVEMENT AI. Learn how we collect, use, and protect your information."
        keywords="privacy policy, data protection, GDPR, personal data, IMPROVEMENT AI"
        canonicalUrl="https://improvementai.agency/privacy-policy"
      />
      
      <Header />
      
      <main className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: April 5, 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p>Thank you for choosing to be part of the Improvement AI community. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit or use our website https://www.improvementai.agency/ ("Website" or "Service"). Please read it carefully to understand your rights and how we protect your information in accordance with applicable laws, including the EU General Data Protection Regulation (GDPR) and U.S. privacy laws.</p>
          
          <hr className="my-6" />
          
          <h2 className="text-2xl font-semibold mt-8">1. Who We Are</h2>
          <p>Improvement AI ("Company," "we," "us," or "our") is a technology and AI automation agency based in Poland, serving clients globally, with a focus on the United States. This Privacy Policy applies to all information collected through our Website and any related services, communications, or events.</p>
          
          <h2 className="text-2xl font-semibold mt-8">2. Definitions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Information that can identify an individual, directly or indirectly.</li>
            <li><strong>Usage Data:</strong> Automatically collected information on how users interact with the Website.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve your experience.</li>
            <li><strong>Account:</strong> A registered user profile allowing access to restricted areas or services.</li>
            <li><strong>Device:</strong> Any device used to access the Website, including desktop, mobile, or tablet.</li>
            <li><strong>Service Provider:</strong> Third-party vendors and partners that process data on our behalf.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">3. What Information We Collect</h2>
          <h3 className="text-xl font-semibold mt-6">a. Information You Provide Directly</h3>
          <p>We may collect personal data when you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fill out a contact form or lead form</li>
            <li>Request a demo or consultation</li>
            <li>Communicate with us via email, phone, or chat</li>
          </ul>
          <p>This includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6">b. Information Collected Automatically</h3>
          <p>When you access the Website, we automatically collect certain information through cookies and analytics tools:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device identifiers and OS</li>
            <li>Geographic location (approximate)</li>
            <li>Pages visited and time spent</li>
            <li>Referring/exit pages</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">4. Legal Bases for Processing (GDPR)</h2>
          <p>If you are located in the European Economic Area (EEA), we process your personal data based on the following legal grounds:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent</strong> – When you opt-in for communications or cookies</li>
            <li><strong>Contractual Necessity</strong> – To fulfill services or respond to inquiries</li>
            <li><strong>Legal Obligation</strong> – To comply with applicable laws</li>
            <li><strong>Legitimate Interests</strong> – To improve our services and security (unless overridden by your rights)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">5. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate, maintain, and optimize the Website</li>
            <li>Respond to your inquiries or support requests</li>
            <li>Send updates, marketing communications (if opted-in), or important notices</li>
            <li>Improve our services, marketing, and analytics</li>
            <li>Monitor usage patterns to prevent fraud or misuse</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>We do not use your personal data for automated decision-making or profiling without your consent.</p>
          
          <h2 className="text-2xl font-semibold mt-8">6. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies (e.g., pixels, beacons) to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintain website functionality and security</li>
            <li>Remember your preferences (e.g., language)</li>
            <li>Analyze usage trends via tools like Google Analytics</li>
            <li>Improve performance and content</li>
          </ul>
          
          <table className="border-collapse border border-gray-300 my-4 w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Cookie Type</th>
                <th className="border border-gray-300 px-4 py-2">Purpose</th>
                <th className="border border-gray-300 px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Essential</td>
                <td className="border border-gray-300 px-4 py-2">Enables core functions</td>
                <td className="border border-gray-300 px-4 py-2">Session</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Functional</td>
                <td className="border border-gray-300 px-4 py-2">Stores preferences</td>
                <td className="border border-gray-300 px-4 py-2">Persistent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Analytics</td>
                <td className="border border-gray-300 px-4 py-2">Collects usage data</td>
                <td className="border border-gray-300 px-4 py-2">Persistent</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Marketing</td>
                <td className="border border-gray-300 px-4 py-2">Tracks engagement with ads (if applicable)</td>
                <td className="border border-gray-300 px-4 py-2">Persistent</td>
              </tr>
            </tbody>
          </table>
          
          <p>You may adjust cookie settings via your browser or use our Cookie Consent banner.</p>
          
          <h2 className="text-2xl font-semibold mt-8">7. Sharing of Information</h2>
          <p>We may share your data with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service Providers (e.g., hosting, analytics, CRM platforms like Calendly)</li>
            <li>Business partners or contractors helping deliver our services</li>
            <li>Affiliates or subsidiaries under strict confidentiality agreements</li>
            <li>Authorities when legally required (e.g., fraud prevention or court orders)</li>
            <li>Third parties in the event of a merger, acquisition, or asset sale</li>
            <li>Others, with your explicit consent</li>
          </ul>
          <p>We do not sell, trade, or rent your personal information.</p>
          
          <h2 className="text-2xl font-semibold mt-8">8. International Transfers</h2>
          <p>We may transfer your data to countries outside your jurisdiction, including to the United States or other countries that may not offer the same data protection standards. When doing so, we:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use Standard Contractual Clauses approved by the EU</li>
            <li>Rely on adequacy decisions (where applicable)</li>
            <li>Ensure appropriate technical and organizational safeguards are in place</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">9. Data Retention and Security</h2>
          <p>We retain your personal data only for as long as necessary for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The purposes stated in this policy</li>
            <li>Legal, accounting, or reporting obligations</li>
            <li>Legitimate business interests</li>
          </ul>
          <p><strong>Security Measures:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>We employ various industry-standard security measures, such as regular software updates and data minimization practices.</li>
            <li>Although we strive to protect your data, no method of online transmission is completely secure.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">10. Your Privacy Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion ("right to be forgotten")</li>
            <li>Object to or restrict processing</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a Data Protection Authority</li>
          </ul>
          <p>To exercise your rights, please email: wiktor@improvementai.agency</p>
          
          <h2 className="text-2xl font-semibold mt-8">11. Children's Privacy</h2>
          <p>Our Website is not intended for children under 13 (or under 16 in some jurisdictions). We do not knowingly collect data from minors. If you believe a child has provided us data, please contact us for immediate removal.</p>
          
          <h2 className="text-2xl font-semibold mt-8">12. Third-Party Websites and Tools</h2>
          <p>Our Website may contain links to third-party websites, tools, or platforms. We are not responsible for their privacy practices. Please read their policies before submitting data.</p>
          <p>Examples include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics</li>
            <li>Calendly</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8">13. Changes to This Privacy Policy</h2>
          <p>We reserve the right to modify this Privacy Policy at any time. When we make changes, we will:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Update the "Last updated" at the top</li>
            <li>Notify users via email or website banner (where appropriate)</li>
          </ul>
          <p>We encourage you to review this page periodically.</p>
          
          <h2 className="text-2xl font-semibold mt-8">14. Contact Us</h2>
          <p>For questions, concerns, or privacy-related requests, please contact us:</p>
          <p>Email: wiktor@improvementai.agency</p>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPolicy;
