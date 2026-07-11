import type { ReactNode } from "react";

type ShimmerProps = {
  /** Play the glimmer (e.g. while art history is being read) */
  active?: boolean;
  /**
   * Optional traced outline of the artwork (SVG) rendered above the
   * image for the true Figma edge-glow. Without it the effect is the
   * bloom + light-sweep approximation, which works on any image.
   */
  trace?: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * Artwork glimmer: while the piece is being "read" for art history it
 * shimmers — a pulsing bloom with a light sweep across the image
 * (screen-blended, --motion-shimmer). Honors prefers-reduced-motion.
 */
export function Shimmer({ active = false, trace, children, className = "" }: ShimmerProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      {active && (
        <>
          <div className="shimmer-overlay" aria-hidden="true" />
          {trace && (
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {trace}
            </div>
          )}
        </>
      )}
    </div>
  );
}
