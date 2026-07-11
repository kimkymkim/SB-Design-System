import type { ButtonHTMLAttributes } from "react";

type FabProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Small cream floating action button ("+") from the timeline screen.
 */
export function Fab({ className = "", ...rest }: FabProps) {
  return (
    <button
      aria-label="Add"
      className={`flex size-9 items-center justify-center rounded-full bg-cream shadow-photo ${className}`}
      {...rest}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 1v12M1 7h12" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </button>
  );
}
