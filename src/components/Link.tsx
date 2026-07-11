import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Inline text link — underlined, ink-colored, matching the "View art"
 * style ("underline-position: from-font" like the Figma file).
 */
export function Link({ children, className = "", ...rest }: LinkProps) {
  return (
    <a
      className={`cursor-pointer rounded-sm font-sans text-[15px] tracking-[-0.36px] text-ink underline decoration-solid transition-opacity duration-(--motion-fast) [text-underline-position:from-font] hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 active:opacity-50 ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
