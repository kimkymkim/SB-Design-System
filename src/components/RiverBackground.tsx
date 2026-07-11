import type { ReactNode } from "react";

type RiverBackgroundProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * Watercolor "river" background: three soft radial washes (leaf,
 * lavender, cream) drifting slowly over a pale base — like the painted
 * backdrop in the Sketchbook screens, but alive. Respects
 * prefers-reduced-motion.
 */
export function RiverBackground({ children, className = "" }: RiverBackgroundProps) {
  return (
    <div className={`river-base relative overflow-hidden ${className}`}>
      <div className="river-layer river-a" />
      <div className="river-layer river-b" />
      <div className="river-layer river-c" />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
