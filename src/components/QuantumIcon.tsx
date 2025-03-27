
import { useEffect, useRef, useState } from 'react';

const QuantumIcon = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.8);
  const animationFrameRef = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const nodesRef = useRef<{x: number, y: number, angle: number, speed: number, size: number, originalSize: number}[]>([]);
  const startTimeRef = useRef<number>(Date.now());
  
  // Create nodes for animation
  useEffect(() => {
    // Create nodes around the icon
    const createNodes = () => {
      const nodes = [];
      const nodeCount = 8; // 8 nodes around the icon
      
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        nodes.push({
          x: 0, // Will be set in animation
          y: 0, // Will be set in animation
          angle: angle,
          speed: 0.0003 + Math.random() * 0.0002,
          size: 4 + Math.random() * 3,
          originalSize: 4 + Math.random() * 3
        });
      }
      
      nodesRef.current = nodes;
    };
    
    createNodes();
    
    // Load the icon image
    const img = new Image();
    img.src = '/lovable-uploads/19e31e7b-7e45-4995-8528-ed520eadce6c.png';
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
      
      // Start fade-in animation
      setTimeout(() => {
        setOpacity(1);
        setScale(1);
      }, 100);
    };
    
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
    if (!imageLoaded || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let hoverX = -100;
    let hoverY = -100;
    
    // Handle mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      hoverX = e.clientX - rect.left;
      hoverY = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      hoverX = -100;
      hoverY = -100;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Animation function
    const animate = () => {
      const elapsedMs = Date.now() - startTimeRef.current;
      const progress = Math.min(1, elapsedMs / 7000); // 7 second animation
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw the main image with current opacity
      if (imageRef.current) {
        ctx.save();
        ctx.globalAlpha = Math.min(progress * 2, 1); // Fade in over first 3.5 seconds
        
        // Calculate image size (80% of canvas, maintaining aspect ratio)
        const imgSize = Math.min(canvas.width, canvas.height) * 0.6;
        const imgWidth = imgSize;
        const imgHeight = imgSize;
        
        // Position image in center
        const imgX = centerX - imgWidth / 2;
        const imgY = centerY - imgHeight / 2;
        
        // Apply pulsing effect
        const pulse = 1 + Math.sin(elapsedMs * 0.001) * 0.02; // Subtle pulse
        
        ctx.drawImage(
          imageRef.current, 
          imgX, 
          imgY, 
          imgWidth * pulse, 
          imgHeight * pulse
        );
        ctx.restore();
      }
      
      // Draw nodes and connections
      nodesRef.current.forEach((node, index) => {
        // Update node position based on orbit
        const radius = Math.min(canvas.width, canvas.height) * 0.4; // Orbit radius
        const orbitSpeed = node.speed;
        
        // Update angle
        node.angle += orbitSpeed * elapsedMs;
        
        // Calculate position
        node.x = centerX + Math.cos(node.angle) * radius;
        node.y = centerY + Math.sin(node.angle) * radius;
        
        // Check if mouse is near this node
        const dx = node.x - hoverX;
        const dy = node.y - hoverY;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        
        // Adjust node size based on mouse proximity
        const hoverEffect = distToMouse < 50 ? 1.5 - (distToMouse / 50) : 0;
        node.size = node.originalSize * (1 + hoverEffect);
        
        // Only draw nodes if we're in the emergence phase (after 2 seconds)
        if (progress > 0.3) {
          const nodeOpacity = Math.min(1, (progress - 0.3) * 3);
            
          // Draw node
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(74, 144, 226, ${nodeOpacity * 0.7})`;
          ctx.fill();
          
          // Draw glow
          const glow = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.size * 2
          );
          glow.addColorStop(0, `rgba(0, 255, 255, ${nodeOpacity * 0.5})`);
          glow.addColorStop(1, 'rgba(0, 255, 255, 0)');
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      });
      
      // Draw connections between nodes if we're in the active phase (after 3 seconds)
      if (progress > 0.4) {
        const connectionOpacity = Math.min(0.7, (progress - 0.4) * 2);
        
        nodesRef.current.forEach((node, i) => {
          // Connect to center
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(centerX, centerY);
          
          // Make connections more vivid near the mouse
          const dx = (node.x + centerX) / 2 - hoverX;
          const dy = (node.y + centerY) / 2 - hoverY;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);
          const hoverIntensity = distToMouse < 80 ? 1 - distToMouse / 80 : 0;
          
          ctx.strokeStyle = `rgba(135, 206, 250, ${connectionOpacity * (0.3 + hoverIntensity * 0.7)})`;
          ctx.lineWidth = 1 + hoverIntensity;
          ctx.stroke();
          
          // Add energy sparks on connections randomly
          if (Math.random() > 0.97 && progress > 0.6) {
            const sparkPos = Math.random();
            const sparkX = node.x + (centerX - node.x) * sparkPos;
            const sparkY = node.y + (centerY - node.y) * sparkPos;
            
            ctx.beginPath();
            ctx.arc(sparkX, sparkY, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
            ctx.fill();
          }
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [imageLoaded]);
  
  return (
    <div className="quantum-icon-container w-full h-full relative flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full" 
        style={{ 
          opacity: opacity,
          transform: `scale(${scale})`,
          transition: 'opacity 1.5s ease-out, transform 1.5s ease-out' 
        }}
      />
    </div>
  );
};

export default QuantumIcon;
