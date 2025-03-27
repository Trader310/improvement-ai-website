
import { useRef } from 'react';

const QuantumIcon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef} 
      className="quantum-icon-container relative w-full h-full flex items-center justify-center"
    >
      <div className="relative">
        {/* Larger static icon - significantly increased size */}
        <img 
          src="/lovable-uploads/38dfd200-7160-4854-95d0-b41e484d5580.png" 
          alt="Quantum Intelligence"
          className="w-[360px] h-[360px] md:w-[460px] md:h-[460px] object-contain z-10 relative"
        />
        
        {/* Simple subtle glow background for better aesthetics */}
        <div 
          className="absolute inset-0 rounded-full blur-xl z-0" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(74,144,226,0.2) 0%, rgba(0,255,255,0.1) 50%, transparent 70%)',
            transform: 'scale(1.5)',
            opacity: 0.4,
          }}
        ></div>
      </div>
    </div>
  );
};

export default QuantumIcon;
