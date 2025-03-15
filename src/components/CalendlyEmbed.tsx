
import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  className?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: {
      [key: string]: string;
    };
  };
}

const CalendlyEmbed = ({ 
  url, 
  className = "min-h-[630px] w-full", 
  prefill 
}: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up on unmount
    return () => {
      try {
        document.body.removeChild(script);
      } catch (e) {
        console.warn('Calendly script already removed');
      }
    };
  }, []);

  // Create URL with prefill parameters if provided
  const getCalendlyUrl = () => {
    if (!prefill) return url;
    
    const baseUrl = new URL(url);
    
    if (prefill.name) baseUrl.searchParams.append('name', prefill.name);
    if (prefill.email) baseUrl.searchParams.append('email', prefill.email);
    
    if (prefill.customAnswers) {
      Object.entries(prefill.customAnswers).forEach(([key, value]) => {
        baseUrl.searchParams.append(`a1=${key}`, value);
      });
    }
    
    return baseUrl.toString();
  };

  return (
    <div className={className}>
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url={getCalendlyUrl()}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;
