
import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  className?: string;
}

const CalendlyEmbed = ({ url, className = "min-h-[630px] w-full" }: CalendlyEmbedProps) => {
  useEffect(() => {
    // Load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={className}>
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url={url}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;
