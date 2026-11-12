import React from 'react';
import { cn } from '../../lib/utils';

export interface ShimmerButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLAnchorElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#FFFFFF',
      shimmerSize = '0.05em',
      shimmerDuration = '3s',
      borderRadius = '14px',
      background = 'linear-gradient(135deg, #D4AF37 0%, #E5C358 50%, #C9A227 100%)',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <a
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as React.CSSProperties
        }
        className={cn(
          'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/20 px-6 py-3.5 [background:var(--bg)] [border-radius:var(--radius)] text-slate-950 font-bold uppercase tracking-wider text-xs shadow-[0_4px_20px_rgba(201,162,39,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_30px_rgba(201,162,39,0.6)] active:scale-[0.98]',
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Spark container */}
        <div
          className={cn(
            '-z-30 blur-[2px]',
            'absolute inset-0 overflow-visible [container-type:size]'
          )}
        >
          {/* Spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* Spark before */}
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>

        {/* Highlight inner border */}
        <div
          className={cn(
            'insert-0 absolute size-full',
            'rounded-[inherit] px-4 py-1.5 text-sm font-medium',
            'shadow-[inset_0_-2px_6px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.4)]',
            'transition-all duration-300 ease-in-out'
          )}
        />
      </a>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';
