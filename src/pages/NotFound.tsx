
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-agency-blue/10 to-white px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-9xl font-bold text-agency-blue mb-4">404</div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          className="bg-agency-blue text-white hover:bg-agency-light-blue rounded-full px-8 py-6 text-lg inline-flex items-center"
          onClick={() => window.location.href = '/'}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
