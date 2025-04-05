
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
  className = "min-h-[900px] w-full", 
  prefill 
}: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add CSS to hide Calendly's internal scrollbar and adjust height
    const style = document.createElement('style');
    style.textContent = `
      .calendly-inline-widget {
        overflow: hidden !important;
        height: 100% !important;
      }
      .calendly-inline-widget iframe {
        height: 100% !important;
        min-height: 1000px !important;
        overflow: hidden !important;
        border: none !important;
      }
      .calendly-spinner {
        display: none !important;
      }
      body .calendly-overlay {
        overflow: hidden !important;
      }
      /* Additional styling to completely remove all scrollbars from the embed */
      .calendly-inline-widget iframe::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
      }
      .calendly-inline-widget iframe {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      /* Fix page-level scrolling */
      html {
        overflow-y: auto !important;
        scroll-behavior: smooth !important;
      }
      body {
        overflow-y: auto !important;
        height: 100% !important;
        overflow-x: hidden !important;
      }
      body.calendly-open {
        overflow-y: auto !important;
        overflow-x: hidden !important;
        height: 100% !important;
      }
      .calendly-popup-content, .calendly-popup-content iframe {
        max-height: none !important;
        overflow: hidden !important;
      }
    `;
    document.head.appendChild(style);

    // Clean up on unmount
    return () => {
      try {
        document.body.removeChild(script);
        document.head.removeChild(style);
      } catch (e) {
        console.warn('Calendly script or style already removed');
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
    <div 
      className={`calendly-inline-widget ${className}`} 
      data-url={getCalendlyUrl()}
      style={{ minWidth: '320px', height: '100%' }}
    ></div>
  );
};

export default CalendlyEmbed;
