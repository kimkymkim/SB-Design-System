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
  const states =
    "transition-[transform,box-shadow,background-color,opacity] duration-(--motion-fast) ease-(--ease-standard) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40";

  if (variant === "link") {
    return (
      <button
        className={`w-full rounded-full bg-paper py-2 text-center font-sans text-[15px] tracking-[-0.36px] text-ink underline decoration-solid [text-underline-position:from-font] hover:opacity-70 active:opacity-50 ${states} ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`w-full rounded-full border border-border-strong bg-paper px-[18px] py-[12.5px] text-center font-sans text-[13.5px] font-medium tracking-[-0.36px] text-ink shadow-button hover:bg-white-soft active:scale-[0.98] active:shadow-none ${states} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
