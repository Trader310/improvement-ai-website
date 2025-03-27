
import { useEffect, useState } from 'react';

interface ChatBubble {
  id: number;
  isActive: boolean;
  fromLeft: boolean; // To determine which side the message comes from
}

const ChatAnimation = () => {
  const [chatBubbles, setChatBubbles] = useState<ChatBubble[]>([]);
  const maxBubbles = 5;
  
  useEffect(() => {
    // Initial delay before starting the animation
    const initialDelay = setTimeout(() => {
      // Start the animation cycle
      const intervalId = setInterval(() => {
        setChatBubbles(prev => {
          // Create a new array to avoid mutation
          const updated = [...prev];
          
          // Determine the side for the new bubble (alternate sides)
          const lastFromLeft = updated.length > 0 ? updated[updated.length - 1].fromLeft : false;
          const newFromLeft = !lastFromLeft; // Alternate from previous
          
          // Add a new bubble if we haven't reached the maximum
          if (updated.length < maxBubbles) {
            updated.push({ id: Date.now(), isActive: true, fromLeft: newFromLeft });
          } else {
            // Remove the oldest bubble and add a new one
            updated.shift();
            updated.push({ id: Date.now(), isActive: true, fromLeft: newFromLeft });
          }
          
          // Make sure only the latest bubble is active
          return updated.map((bubble, index) => ({
            ...bubble,
            isActive: index === updated.length - 1
          }));
        });
      }, 2000); // Add a new bubble every 2 seconds
      
      return () => clearInterval(intervalId);
    }, 500);
    
    return () => clearTimeout(initialDelay);
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="flex flex-col-reverse w-full max-w-[90%] space-y-reverse space-y-3">
        {chatBubbles.map((bubble, index) => {
          const isLatest = index === chatBubbles.length - 1;
          const opacity = isLatest ? "100" : `${80 - index * 15}`;
          const blurAmount = isLatest ? "0" : `${index}`;
          
          return (
            <div
              key={bubble.id}
              className={`
                chat-bubble rounded-lg p-4 w-4/5 h-14
                ${isLatest ? 'bg-[#5271FF]' : 'bg-[#E8F0FE]'}
                ${bubble.fromLeft ? 'self-start rounded-tl-none' : 'self-end rounded-tr-none'}
                ${isLatest ? 'animate-pulse-subtle' : ''}
                transition-all duration-500 ease-out
                opacity-${opacity}
                backdrop-blur-[${blurAmount}px]
                transform translate-y-0
                animate-slide-up
                flex items-center
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: isLatest ? '0 4px 12px rgba(82, 113, 255, 0.2)' : 'none',
                filter: isLatest ? 'none' : `blur(${index * 0.5}px)`,
                opacity: isLatest ? 1 : 1 - (index * 0.2),
                transform: `translateY(${-index * 10}px)`,
              }}
            >
              {/* Add visual elements inside the message bubbles */}
              <div className="flex space-x-2 h-full items-center">
                {bubble.fromLeft ? (
                  // Left side message content (wavy lines)
                  <div className="flex flex-col justify-center space-y-1 w-full">
                    <div className={`h-1.5 rounded-full ${isLatest ? 'bg-white/80' : 'bg-gray-300/80'} w-2/3`}></div>
                    <div className={`h-1.5 rounded-full ${isLatest ? 'bg-white/60' : 'bg-gray-300/60'} w-1/2`}></div>
                  </div>
                ) : (
                  // Right side message content (dots)
                  <div className="flex justify-end space-x-1 w-full">
                    <div className={`h-2 w-2 rounded-full ${isLatest ? 'bg-white' : 'bg-gray-300'} animate-pulse`} style={{ animationDuration: '1.5s' }}></div>
                    <div className={`h-2 w-2 rounded-full ${isLatest ? 'bg-white' : 'bg-gray-300'} animate-pulse`} style={{ animationDuration: '1.8s' }}></div>
                    <div className={`h-2 w-2 rounded-full ${isLatest ? 'bg-white' : 'bg-gray-300'} animate-pulse`} style={{ animationDuration: '2.1s' }}></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Subtle background effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-32 h-32 rounded-full bg-[#5271FF]/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
      </div>
    </div>
  );
};

export default ChatAnimation;
