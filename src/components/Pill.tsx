import type { HTMLAttributes, ReactNode } from "react";

type PillProps = {
  variant?: "outline" | "cream";
  children: ReactNode;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Label pill from the timeline entry cards.
 * outline — transparent with hairline border (dates: "July 11, 2026", tags: "3d scan")
 * cream   — butter-yellow filled ("Add work")
 */
export function Pill({ variant = "outline", children, className = "", ...rest }: PillProps) {
  const variantClasses =
    variant === "cream"
      ? "bg-cream shadow-photo"
      : "border border-border-subtle bg-transparent";
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-[17px] py-[10px] font-sans text-[13.5px] leading-[1.11] tracking-[-0.14px] text-ink ${variantClasses} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
