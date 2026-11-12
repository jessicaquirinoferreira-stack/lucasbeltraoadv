import React, { useRef, useState, MouseEvent } from 'react';
import { cn } from '../../lib/utils';

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  color?: string;
}

export const CardSpotlight: React.FC<CardSpotlightProps> = ({
  children,
  className,
  radius = 280,
  color = 'rgba(201, 162, 39, 0.14)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0A1220]/80 transition-all duration-300 hover:border-[#C9A227]/40 shadow-xl',
        className
      )}
      {...props}
    >
      {/* Radial spotlight on mouse hover */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};
