
import { useEffect, useState } from 'react';

interface ChatBubble {
  id: number;
  isActive: boolean;
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
          
          // Add a new bubble if we haven't reached the maximum
          if (updated.length < maxBubbles) {
            updated.push({ id: Date.now(), isActive: true });
          } else {
            // Remove the oldest bubble and add a new one
            updated.shift();
            updated.push({ id: Date.now(), isActive: true });
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
      <div className="flex flex-col-reverse w-full max-w-[80%] space-y-reverse space-y-3">
        {chatBubbles.map((bubble, index) => {
          const isLatest = index === chatBubbles.length - 1;
          const opacity = isLatest ? "100" : `${80 - index * 15}`;
          const blurAmount = isLatest ? "0" : `${index}`;
          
          return (
            <div
              key={bubble.id}
              className={`
                chat-bubble rounded-lg p-4 w-4/5 h-12
                ${isLatest ? 'bg-[#5271FF]' : 'bg-[#E8F0FE]'}
                ${isLatest ? 'self-end' : 'self-start'}
                ${isLatest ? 'animate-pulse-subtle' : ''}
                transition-all duration-500 ease-out
                opacity-${opacity}
                backdrop-blur-[${blurAmount}px]
                transform translate-y-0
                animate-slide-up
              `}
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: isLatest ? '0 4px 12px rgba(82, 113, 255, 0.2)' : 'none',
                filter: isLatest ? 'none' : `blur(${index * 0.5}px)`,
                opacity: isLatest ? 1 : 1 - (index * 0.2),
                transform: `translateY(${-index * 10}px)`,
                height: '48px'
              }}
            />
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
