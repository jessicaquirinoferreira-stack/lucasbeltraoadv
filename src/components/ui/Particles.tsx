import React, { useEffect, useRef } from 'react';
import { cn } from '../../lib/utils';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  color?: string;
}

export const Particles: React.FC<ParticlesProps> = ({
  className,
  quantity = 35,
  staticity = 50,
  ease = 50,
  color = '#D4AF37',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouseCoordinates = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d');
    }
    initCanvas();
    animate();
    window.addEventListener('resize', initCanvas);

    return () => {
      window.removeEventListener('resize', initCanvas);
    };
  }, [color]);

  const onMouseMove = (e: MouseEvent) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = e.clientX - rect.left - w / 2;
      const y = e.clientY - rect.top - h / 2;
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouseCoordinates.current.x = x;
        mouseCoordinates.current.y = y;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0;
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = (): any => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 0.8;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.45 + 0.1).toFixed(2));
    const dx = (Math.random() - 0.5) * 0.25;
    const dy = (Math.random() - 0.5) * 0.25;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawParticles = () => {
    circles.current.length = 0;
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams());
    }
  };

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle;
      context.current.translate(translateX, translateY);
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = color;
      context.current.globalAlpha = alpha;
      context.current.fill();
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!update) return;

      if (circle.alpha < circle.targetAlpha) {
        circle.alpha += 0.02;
      }
      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX +=
        (mouseCoordinates.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY +=
        (mouseCoordinates.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

      // Wrap around edges
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        circle.x = Math.floor(Math.random() * canvasSize.current.w);
        circle.y = Math.floor(Math.random() * canvasSize.current.h);
      }
    }
  };

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      circles.current.forEach((circle: any) => {
        drawCircle(circle, true);
      });
    }
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10', className)} ref={canvasContainerRef}>
      <canvas ref={canvasRef} />
    </div>
  );
};
