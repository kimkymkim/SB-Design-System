import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "link";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Pill button from the Sketchbook FloatingSheet.
 * primary — white pill, hairline border, layered drop shadow ("Add art", "Learn")
 * link    — borderless underlined text button ("View art")
 */
export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  if (variant === "link") {
    return (
      <button
        className={`w-full rounded-full bg-paper py-2 text-center font-sans text-[15px] tracking-[-0.36px] text-ink underline decoration-solid [text-underline-position:from-font] ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`w-full rounded-full border border-border-strong bg-paper px-[18px] py-[12.5px] text-center font-sans text-[13.5px] font-medium tracking-[-0.36px] text-ink shadow-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
