
import { useEffect, useRef, useState } from 'react';

const QuantumIcon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const nodesRef = useRef<{ x: number, y: number, size: number, angle: number, speed: number }[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  
  // Create nodes for animation
  useEffect(() => {
    const createNodes = () => {
      const nodes = [];
      const nodeCount = 8; // 8 nodes around the icon
      
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        nodes.push({
          x: 0, // Will be set during animation
          y: 0, // Will be set during animation
          size: 3 + Math.random() * 2,
          angle: angle,
          speed: 0.0002 + Math.random() * 0.0002
        });
      }
      
      nodesRef.current = nodes;
    };
    
    createNodes();
    
    // Set loaded after a small delay to simulate loading
    setTimeout(() => {
      setLoaded(true);
      // Fade in
      setTimeout(() => {
        setOpacity(1);
      }, 300);
    }, 500);
    
    // Reset animation start time
    startTimeRef.current = Date.now();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  // Animation effect
  useEffect(() => {
    if (!loaded || !containerRef.current) return;
    
    const container = containerRef.current;
    const centerX = container.clientWidth / 2;
    const centerY = container.clientHeight / 2;
    
    let mouseX = -100;
    let mouseY = -100;
    
    // Handle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouseX = -100;
      mouseY = -100;
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation function
    const animate = () => {
      const elapsedMs = Date.now() - startTimeRef.current;
      const progress = Math.min(1, elapsedMs / 7000); // 7-second animation
      const iconSize = Math.min(container.clientWidth, container.clientHeight) * 0.6;
      const orbitRadius = iconSize * 0.65;
      
      // Update nodes position
      nodesRef.current.forEach((node) => {
        node.angle += node.speed * elapsedMs;
        node.x = centerX + Math.cos(node.angle) * orbitRadius;
        node.y = centerY + Math.sin(node.angle) * orbitRadius;
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [loaded]);
  
  const imagePulse = loaded ? 'animate-[pulseSubtle_4s_ease-in-out_infinite]' : '';
  const imageScale = loaded ? 'scale-100' : 'scale-90';
  
  return (
    <div 
      ref={containerRef} 
      className="quantum-icon-container relative w-full h-full flex items-center justify-center"
    >
      <div 
        className={`relative ${imagePulse} ${imageScale} transition-all duration-1000`}
        style={{ opacity }}
      >
        {/* Central Icon */}
        <img 
          src="/lovable-uploads/38dfd200-7160-4854-95d0-b41e484d5580.png" 
          alt="Quantum Intelligence"
          className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] object-contain z-10 relative"
        />
        
        {/* Glowing background effect */}
        <div 
          className="absolute inset-0 rounded-full bg-[#4A90E2]/20 blur-xl animate-pulse z-0" 
          style={{ 
            animationDuration: '3s',
            transform: 'scale(1.2)',
            opacity: loaded ? 0.6 : 0
          }}
        ></div>
        
        {/* Energetic particles */}
        {loaded && nodesRef.current.map((node, index) => (
          <div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse"
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              boxShadow: '0 0 8px 2px rgba(0, 255, 255, 0.6)',
              animationDuration: '1.5s',
              animationDelay: `${index * 0.2}s`,
              opacity: 0.8,
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
        ))}
        
        {/* Neural connection lines */}
        <svg 
          className="absolute inset-0 w-full h-full z-5 opacity-70"
          style={{ opacity: loaded ? 0.7 : 0 }}
        >
          {loaded && (() => {
            // Define centerX and centerY here for use in the JSX
            const centerX = containerRef.current ? containerRef.current.clientWidth / 2 : 0;
            const centerY = containerRef.current ? containerRef.current.clientHeight / 2 : 0;
            
            return nodesRef.current.map((_, i) => {
              // Connect each node to the center
              const node = nodesRef.current[i];
              const nextNode = nodesRef.current[(i + 1) % nodesRef.current.length];
              return (
                <g key={i}>
                  {/* Line to center */}
                  <line 
                    x1={node.x} 
                    y1={node.y} 
                    x2={centerX} 
                    y2={centerY} 
                    stroke="#4A90E2" 
                    strokeWidth="1" 
                    strokeDasharray="4,4"
                    className="animate-pulse"
                    style={{ animationDuration: '3s' }}
                  />
                  
                  {/* Line to adjacent node */}
                  <line 
                    x1={node.x} 
                    y1={node.y} 
                    x2={nextNode.x} 
                    y2={nextNode.y} 
                    stroke="#87CEFA" 
                    strokeWidth="0.5"
                    strokeDasharray="3,3"
                  />
                </g>
              );
            });
          })()}
        </svg>
      </div>
    </div>
  );
};

export default QuantumIcon;
