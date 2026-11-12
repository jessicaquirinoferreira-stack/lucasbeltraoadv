import React, { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

export const ScrollProgress = ({ className }: { className?: string }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none',
        className
      )}
    >
      <div
        className="h-full bg-gradient-to-r from-[#C9A227] via-[#F3E29F] to-[#D4AF37] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(201,162,39,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
