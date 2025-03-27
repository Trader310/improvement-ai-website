
import { useEffect, useState, useRef } from 'react';

interface ChatBubble {
  id: number;
  isActive: boolean;
  fromLeft: boolean;
  contentType: 'lines' | 'dots';
  opacity: number;
  transform: string;
}

const ChatAnimation = () => {
  const [chatBubbles, setChatBubbles] = useState<ChatBubble[]>([]);
  const maxBubbles = 5;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const createNewBubble = () => {
      setChatBubbles(prev => {
        // Create a new array to avoid mutation
        const updated = [...prev];
        
        // Determine the side for the new bubble (alternate sides)
        const lastFromLeft = updated.length > 0 ? updated[updated.length - 1].fromLeft : false;
        const newFromLeft = !lastFromLeft; // Alternate from previous
        
        // Determine content type (alternate between lines and dots)
        const contentType = newFromLeft ? 'lines' : 'dots';
        
        // Remove oldest bubble if we've reached max
        if (updated.length >= maxBubbles) {
          updated.shift();
        }
        
        // Add a new bubble
        updated.push({
          id: Date.now(),
          isActive: true,
          fromLeft: newFromLeft,
          contentType,
          opacity: 0, // Start with opacity 0
          transform: 'translateY(20px)' // Start slightly below
        });
        
        // Animate all bubbles
        return updated.map((bubble, idx) => {
          const isLatest = idx === updated.length - 1;
          return {
            ...bubble,
            isActive: isLatest,
            opacity: isLatest ? 1 : Math.max(0.4, 1 - idx * 0.2),
            transform: `translateY(${isLatest ? 0 : -idx * 5}px)`
          };
        });
      });
    };
    
    // Initial delay before starting
    const startDelay = setTimeout(() => {
      // Start the animation cycle
      intervalRef.current = setInterval(createNewBubble, 2000);
      createNewBubble(); // Create first bubble immediately
    }, 500);
    
    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="flex flex-col-reverse w-full max-w-[90%] space-y-reverse space-y-3">
        {chatBubbles.map((bubble, index) => {
          const isLatest = index === chatBubbles.length - 1;
          
          return (
            <div
              key={bubble.id}
              className={`
                chat-bubble rounded-lg p-4 w-4/5 min-h-[60px]
                ${isLatest ? 'bg-[#5271FF]' : 'bg-[#E8F0FE]'}
                ${bubble.fromLeft ? 'self-start rounded-tl-none' : 'self-end rounded-tr-none'}
                ${isLatest ? 'animate-pulse-subtle' : ''}
                flex items-center
              `}
              style={{
                opacity: bubble.opacity,
                transform: bubble.transform,
                boxShadow: isLatest ? '0 4px 12px rgba(82, 113, 255, 0.2)' : 'none',
                filter: isLatest ? 'none' : `blur(${index * 0.5}px)`,
                transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
            >
              {/* Content elements inside the message bubbles */}
              <div className="flex space-x-2 h-full items-center w-full">
                {bubble.contentType === 'lines' ? (
                  // Lines content
                  <div className="flex flex-col justify-center space-y-2 w-full">
                    <div className={`h-2 rounded-full ${isLatest ? 'bg-white/80' : 'bg-gray-300/80'} w-2/3`}></div>
                    <div className={`h-2 rounded-full ${isLatest ? 'bg-white/60' : 'bg-gray-300/60'} w-1/2`}></div>
                  </div>
                ) : (
                  // Dots content
                  <div className="flex justify-end space-x-2.5 w-full">
                    <div className={`h-2.5 w-2.5 rounded-full ${isLatest ? 'bg-white' : 'bg-gray-300'} animate-pulse`} 
                      style={{ animationDuration: '1.2s', animationDelay: '0.1s' }}></div>
                    <div className={`h-2.5 w-2.5 rounded-full ${isLatest ? 'bg-white' : 'bg-gray-300'} animate-pulse`} 
                      style={{ animationDuration: '1.2s', animationDelay: '0.3s' }}></div>
                    <div className={`h-2.5 w-2.5 rounded-full ${isLatest ? 'bg-white' : 'bg-gray-300'} animate-pulse`} 
                      style={{ animationDuration: '1.2s', animationDelay: '0.5s' }}></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-40 h-40 rounded-full bg-[#5271FF]/30 animate-pulse" 
          style={{ animationDuration: '4s', filter: 'blur(20px)' }}></div>
      </div>
    </div>
  );
};

export default ChatAnimation;
