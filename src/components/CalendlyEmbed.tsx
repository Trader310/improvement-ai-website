
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

    // Add CSS to fix scrolling issues
    const style = document.createElement('style');
    style.textContent = `
      .calendly-inline-widget {
        overflow: visible !important;
        height: 100% !important;
        min-height: 800px !important;
      }
      .calendly-inline-widget iframe {
        height: 100% !important;
        min-height: 900px !important;
        overflow: visible !important;
        border: none !important;
      }
      .calendly-spinner {
        display: none !important;
      }
      /* Remove all Calendly-imposed overflow restrictions */
      body .calendly-overlay {
        overflow: visible !important;
        position: static !important;
      }
      /* Additional styling to remove scrollbars from the embed */
      .calendly-inline-widget iframe::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
      }
      .calendly-inline-widget iframe {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
      /* Ensure page-level scrolling works correctly */
      html {
        overflow-y: auto !important;
        scroll-behavior: smooth !important;
        height: auto !important;
      }
      body {
        overflow-y: auto !important;
        height: auto !important;
        position: static !important;
        overflow-x: hidden !important;
      }
      body.calendly-open {
        overflow-y: auto !important;
        position: static !important;
        height: auto !important;
        overflow-x: hidden !important;
      }
      .calendly-popup-content, .calendly-popup-content iframe {
        max-height: none !important;
        overflow: visible !important;
      }
      /* Ensure the full calendar is visible */
      .calendly-iframe {
        height: auto !important;
        min-height: 100vh !important;
        overflow: visible !important;
      }
      /* Fix for modal dialogs */
      .calendly-overlay .calendly-popup {
        height: auto !important;
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        overflow: visible !important;
      }
      /* Make sure booking section has room to scroll */
      #booking, .booking-page-container {
        min-height: auto !important;
        overflow: visible !important;
        padding-bottom: 200px !important;
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
      style={{ minWidth: '320px', height: '100%', minHeight: '900px', overflow: 'visible' }}
    ></div>
  );
};

export default CalendlyEmbed;
