
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import TeamPage from "./pages/TeamPage";
import BookingPage from "./pages/BookingPage";
import AIImplementationPage from "./pages/AIImplementationPage";
import AIAgentPage from "./pages/AIAgentPage";
import AIConsultationPage from "./pages/AIConsultationPage";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/ai-implementation" element={<AIImplementationPage />} />
            <Route path="/ai-agent" element={<AIAgentPage />} />
            <Route path="/ai-consultation" element={<AIConsultationPage />} />
            
            {/* Blog Post Routes */}
            <Route path="/blog/automation-tools" element={<BlogPost1 />} />
            <Route path="/blog/ai-agents" element={<BlogPost2 />} />
            <Route path="/blog/intelligent-growth" element={<BlogPost3 />} />
            
            {/* Legal Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
