
import { useEffect, useRef, useState } from 'react';

const QuantumIcon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [phase, setPhase] = useState(0); // 0: Initial, 1: Emergence, 2: Active
  const [opacity, setOpacity] = useState(0);
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
  const nodesRef = useRef<{ 
    x: number, 
    y: number, 
    size: number, 
    baseSize: number,
    angle: number, 
    speed: number,
    opacity: number,
    color: string
  }[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  
  // Create nodes for animation
  useEffect(() => {
    const createNodes = () => {
      const nodes = [];
      const nodeCount = 12; // Increased node count for more complex visuals
      
      // Create primary orbital nodes
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        nodes.push({
          x: 0, // Will be set during animation
          y: 0, // Will be set during animation
          size: 2 + Math.random() * 2,
          baseSize: 2 + Math.random() * 2,
          angle: angle,
          speed: 0.0002 + Math.random() * 0.0003,
          opacity: 0.1 + Math.random() * 0.3, // Start with low opacity
          color: Math.random() > 0.7 ? '#00FFFF' : (Math.random() > 0.5 ? '#4A90E2' : '#87CEFA')
        });
      }
      
      // Add some secondary nodes for complexity
      for (let i = 0; i < nodeCount/2; i++) {
        const angle = (i / (nodeCount/2)) * Math.PI * 2;
        nodes.push({
          x: 0, 
          y: 0, 
          size: 1.5 + Math.random() * 1.5,
          baseSize: 1.5 + Math.random() * 1.5,
          angle: angle + Math.PI/nodeCount, // Offset for interesting pattern
          speed: 0.00015 + Math.random() * 0.0002, // Slightly slower
          opacity: 0.1 + Math.random() * 0.2, // Start with very low opacity
          color: Math.random() > 0.6 ? '#00FFFF' : (Math.random() > 0.4 ? '#4A90E2' : '#87CEFA')
        });
      }
      
      nodesRef.current = nodes;
    };
    
    createNodes();
    
    // Phase transitions
    const initialPhaseTimeout = setTimeout(() => {
      setPhase(1); // Move to Emergence phase after 2 seconds
      
      const activePhaseTimeout = setTimeout(() => {
        setPhase(2); // Move to Active phase after 4 seconds total
      }, 2000);
      
      return () => clearTimeout(activePhaseTimeout);
    }, 2000);
    
    // Set loaded and fade in
    setTimeout(() => {
      setLoaded(true);
      // Fade in gradually
      setTimeout(() => {
        setOpacity(1);
      }, 300);
    }, 300);
    
    // Reset animation start time
    startTimeRef.current = Date.now();
    
    return () => {
      clearTimeout(initialPhaseTimeout);
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
    
    // Handle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    const handleMouseLeave = () => {
      setMousePosition(null);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation function
    const animate = () => {
      const elapsedMs = Date.now() - startTimeRef.current;
      const elapsedSeconds = elapsedMs / 1000;
      const progress = Math.min(1, elapsedMs / 7000); // 7-second full animation cycle
      
      const iconSize = Math.min(container.clientWidth, container.clientHeight) * 0.7; // Slightly larger icon
      const orbitRadius = iconSize * 0.65;
      
      // Phase-based animation adjustments
      const phaseProgress = phase === 0 
        ? Math.min(1, elapsedSeconds / 2) // Initial phase progress (0-2s)
        : phase === 1 
          ? Math.min(1, (elapsedSeconds - 2) / 2) // Emergence phase progress (2-4s)
          : Math.min(1, (elapsedSeconds - 4) / 3); // Active phase progress (4-7s)
      
      // Update nodes position and properties based on phase
      nodesRef.current.forEach((node, index) => {
        // Orbit movement with phase-based adjustments
        node.angle += node.speed * elapsedMs * (phase > 0 ? 1 + phase * 0.2 : 0.5);
        
        // Calculate radius with slight variation for each node
        const nodeRadius = orbitRadius * (0.8 + Math.sin(elapsedSeconds * 0.5 + index) * 0.1);
        
        node.x = centerX + Math.cos(node.angle) * nodeRadius;
        node.y = centerY + Math.sin(node.angle) * nodeRadius;
        
        // Phase-based opacity
        if (phase === 0) {
          node.opacity = 0.1 + phaseProgress * 0.4; // Gradually appear
        } else if (phase === 1) {
          node.opacity = 0.5 + phaseProgress * 0.3; // Continue increasing opacity
        } else {
          // In active phase, pulse opacity slightly for visual interest
          node.opacity = 0.7 + Math.sin(elapsedSeconds * 2 + index) * 0.3;
        }
        
        // Phase-based size
        const phaseSizeFactor = phase === 0 
          ? 0.5 + phaseProgress * 0.5 
          : phase === 1 
            ? 1 + phaseProgress * 0.5
            : 1.1 + Math.sin(elapsedSeconds * 1.5 + index) * 0.4; // Pulsing in active phase
        
        node.size = node.baseSize * phaseSizeFactor;
        
        // Handle mouse interaction - nodes react when mouse is nearby
        if (mousePosition) {
          const dx = mousePosition.x - node.x;
          const dy = mousePosition.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) { // Mouse influence radius
            // Increase size of nodes near mouse
            const influence = 1 + (1 - distance / 80) * 0.8;
            node.size *= influence;
            
            // Also increase opacity slightly
            node.opacity = Math.min(1, node.opacity * 1.2);
          }
        }
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
  }, [loaded, mousePosition, phase]);
  
  // Dynamic styles based on animation phase
  const getPhaseStyles = () => {
    if (phase === 0) {
      return {
        filter: 'blur(2px)',
        transform: 'scale(0.95)',
      };
    } else if (phase === 1) {
      return {
        filter: 'blur(0.5px)',
        transform: 'scale(0.98)',
      };
    } else {
      return {
        filter: 'blur(0px)',
        transform: 'scale(1)',
      };
    }
  };
  
  const imagePulse = loaded ? `animate-[pulseSubtle_${phase === 2 ? 4 : 6}s_ease-in-out_infinite]` : '';
  const imageScale = loaded ? 'scale-100' : 'scale-90';
  
  // Get center coordinates for use in JSX rendering
  const getCenterCoordinates = () => {
    if (!containerRef.current) return { x: 0, y: 0 };
    return {
      x: containerRef.current.clientWidth / 2,
      y: containerRef.current.clientHeight / 2
    };
  };
  
  return (
    <div 
      ref={containerRef} 
      className="quantum-icon-container relative w-full h-full flex items-center justify-center"
    >
      <div 
        className={`relative ${imagePulse} ${imageScale} transition-all duration-1000`}
        style={{ 
          opacity,
          ...getPhaseStyles()
        }}
      >
        {/* Central Icon */}
        <img 
          src="/lovable-uploads/38dfd200-7160-4854-95d0-b41e484d5580.png" 
          alt="Quantum Intelligence"
          className="w-[240px] h-[240px] md:w-[320px] md:h-[320px] object-contain z-10 relative"
          style={{
            filter: `drop-shadow(0 0 ${phase * 3}px rgba(74, 144, 226, 0.6))`,
            transition: 'filter 2s ease-in-out'
          }}
        />
        
        {/* Glowing background effects - more pronounced in later phases */}
        <div 
          className="absolute inset-0 rounded-full blur-xl z-0" 
          style={{ 
            background: `radial-gradient(circle at center, rgba(74,144,226,${0.1 + phase * 0.15}) 0%, rgba(0,255,255,${0.05 + phase * 0.1}) 50%, transparent 70%)`,
            transform: 'scale(1.5)',
            opacity: loaded ? 0.4 + phase * 0.2 : 0,
            transition: 'opacity 1.5s ease-out, background 2s ease-out'
          }}
        ></div>
        
        {/* Secondary glow effect */}
        <div 
          className="absolute inset-0 rounded-full bg-[#00FFFF]/10 blur-lg animate-pulse z-0" 
          style={{ 
            animationDuration: '6s',
            transform: 'scale(1.3)',
            opacity: phase > 0 ? 0.3 + phase * 0.2 : 0,
            transition: 'opacity 1.5s ease-out'
          }}
        ></div>
        
        {/* Wireframe effect - more visible in initial phase */}
        <div 
          className="absolute inset-0 border-2 rounded-full z-5" 
          style={{ 
            borderColor: '#4A90E2',
            opacity: 0.4 - phase * 0.1,
            transform: `scale(${0.9 + phase * 0.1})`,
            transition: 'all 1.5s ease-out'
          }}
        ></div>
        
        {/* Energetic particles */}
        {loaded && nodesRef.current.map((node, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              left: `${node.x}px`,
              top: `${node.y}px`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              backgroundColor: node.color,
              boxShadow: `0 0 ${4 + phase * 4}px 2px ${node.color}`,
              opacity: node.opacity,
              transition: 'box-shadow 1.5s ease-out',
              transform: 'translate(-50%, -50%)',
              zIndex: 15
            }}
          ></div>
        ))}
        
        {/* Neural connection lines */}
        <svg 
          className="absolute inset-0 w-full h-full z-5"
          style={{ 
            opacity: loaded ? 0.1 + phase * 0.3 : 0,
            transition: 'opacity 1.5s ease-out'
          }}
        >
          {loaded && (() => {
            // Get center coordinates
            const center = getCenterCoordinates();
            
            return nodesRef.current.map((node, i) => {
              // Connect each node to the center and to adjacent nodes
              const nextNode = nodesRef.current[(i + 1) % nodesRef.current.length];
              const nextNextNode = nodesRef.current[(i + 2) % nodesRef.current.length];
              
              // Calculate opacity based on phase and node properties
              const lineOpacity = Math.min(1, (node.opacity + nextNode.opacity) / 2);
              const centerLineOpacity = 0.2 + phase * 0.3;
              
              return (
                <g key={i}>
                  {/* Line to center - only visible in phase 1 and 2 */}
                  {phase > 0 && (
                    <line 
                      x1={node.x} 
                      y1={node.y} 
                      x2={center.x} 
                      y2={center.y} 
                      stroke={phase > 1 ? node.color : "#4A90E2"} 
                      strokeWidth={0.5 + phase * 0.5} 
                      strokeDasharray={phase < 2 ? "4,4" : ""}
                      style={{ 
                        opacity: centerLineOpacity,
                      }}
                    />
                  )}
                  
                  {/* Line to adjacent node */}
                  <line 
                    x1={node.x} 
                    y1={node.y} 
                    x2={nextNode.x} 
                    y2={nextNode.y} 
                    stroke={node.color} 
                    strokeWidth={0.3 + phase * 0.3}
                    strokeDasharray={phase < 1 ? "3,3" : phase < 2 ? "3,2" : ""}
                    style={{ opacity: lineOpacity }}
                  />
                  
                  {/* Extra connections in later phases */}
                  {phase > 1 && Math.random() > 0.6 && (
                    <line 
                      x1={node.x} 
                      y1={node.y} 
                      x2={nextNextNode.x} 
                      y2={nextNextNode.y} 
                      stroke={node.color} 
                      strokeWidth="0.4"
                      strokeDasharray="2,4"
                      style={{ 
                        opacity: lineOpacity * 0.7,
                      }}
                    />
                  )}
                </g>
              );
            });
          })()}
        </svg>
        
        {/* Central core effect - appears in later phases */}
        {phase > 0 && (
          <div 
            className="absolute rounded-full z-20"
            style={{
              left: '50%',
              top: '50%',
              width: `${10 + phase * 8}px`,
              height: `${10 + phase * 8}px`,
              background: 'radial-gradient(circle, #00FFFF 0%, #4A90E2 70%, transparent 100%)',
              boxShadow: `0 0 ${10 + phase * 15}px 5px rgba(0, 255, 255, 0.7)`,
              opacity: phase === 1 ? 0.3 + loaded * 0.3 : 0.6 + Math.sin(Date.now() / 1000) * 0.2,
              transform: 'translate(-50%, -50%)',
              transition: 'all 1s ease-out'
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default QuantumIcon;
