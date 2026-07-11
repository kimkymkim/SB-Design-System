import type { HTMLAttributes, ReactNode } from "react";

type PillProps = {
  variant?: "outline" | "cream" | "glass" | "square";
  /** Entry captions ("Pink House") render in the script font */
  script?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Label component from the timeline entry cards.
 * outline — transparent with hairline border (dates, tags)
 * cream   — butter-yellow filled ("Add work")
 * glass   — fully rounded, translucent frosted glass (labels over artwork)
 * square  — no rounding, no glass: solid white with a linear-gradient stroke
 * Pass `script` for handwritten entry captions on the square label.
 */
export function Pill({ variant = "outline", script = false, children, className = "", ...rest }: PillProps) {
  const base = `inline-flex items-center justify-center whitespace-nowrap px-[17px] py-[10px] text-[13.5px] leading-[1.11] tracking-[-0.14px] text-ink ${
    script ? "font-script" : "font-sans"
  }`;

  const variants: Record<string, string> = {
    outline: "rounded-full border border-border-subtle bg-transparent",
    cream: "rounded-full bg-cream shadow-photo",
    glass: "glass rounded-full",
    square:
      "rounded-none border border-transparent [background:linear-gradient(var(--color-paper),var(--color-paper))_padding-box,var(--gradient-stroke)_border-box]",
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </span>
  );
}
