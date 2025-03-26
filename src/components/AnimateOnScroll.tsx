
import { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'slide-in-bottom' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const AnimateOnScroll = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.15,
  className = '',
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = {
    'fade-in': 'opacity-0 animate-fade-in',
    'slide-in-left': 'opacity-0 -translate-x-8 animate-slide-in-left',
    'slide-in-right': 'opacity-0 translate-x-8 animate-slide-in-right',
    'slide-in-bottom': 'opacity-0 translate-y-12 animate-slide-in-bottom',
    'scale-in': 'opacity-0 scale-95 animate-scale-in',
  };

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible
          ? animationClasses[animation]
          : 'opacity-0'
      }`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
        animationDuration: '0.7s',
        animationTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
