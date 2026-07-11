import type { ReactNode } from "react";

type StatusCardProps = {
  /** Small artwork/brand thumbnail at the left */
  thumbnail?: ReactNode;
  /** Status text, e.g. "Observing your brush strokes" */
  children: ReactNode;
  /** Animate a trailing ellipsis while work is in progress */
  busy?: boolean;
  className?: string;
};

/** Small red-sketchbook thumbnail used in the status/history cards. */
export function StatusCardThumb() {
  return (
    <svg width="34" height="46" viewBox="0 0 34 46" aria-hidden="true" className="drop-shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
      <rect x="1" y="1" width="32" height="44" rx="4" fill="#C23430" />
      <rect x="1" y="1" width="4" height="44" rx="2" fill="#9E2823" />
      <circle cx="15" cy="15" r="4.5" fill="#F1A7B5" opacity="0.9" />
      <rect x="17" y="24" width="10" height="7" rx="1.8" fill="#9CBF8E" opacity="0.9" transform="rotate(-8 22 27)" />
    </svg>
  );
}

/**
 * Scanning/progress card ("Observing your brush strokes…"): white,
 * hairline card border, 26px radius, 24px medium status text.
 */
export function StatusCard({ thumbnail, children, busy = true, className = "" }: StatusCardProps) {
  return (
    <div
      className={`flex w-full items-center gap-3 rounded-[26px] border border-card-border bg-paper px-4 py-6 ${className}`}
      role="status"
    >
      {thumbnail && <div className="flex shrink-0 items-center justify-center">{thumbnail}</div>}
      <p className={`font-sans text-[24px] font-medium leading-[1.25] tracking-[-0.24px] text-ink-2 ${busy ? "busy-dots" : ""}`}>
        {children}
      </p>
    </div>
  );
}
