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
      className={`cursor-pointer font-sans text-[15px] tracking-[-0.36px] text-ink underline decoration-solid [text-underline-position:from-font] ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
