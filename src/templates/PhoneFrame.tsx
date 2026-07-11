import type { ReactNode } from "react";

/**
 * iPhone 16-sized frame (393×852) for presenting screen templates in the
 * gallery. Screens position their content absolutely inside it.
 */
export function PhoneFrame({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-[852px] w-[393px] overflow-hidden rounded-[40px] border border-border-subtle bg-paper shadow-sheet">
        {children}
      </div>
      {label && <p className="text-[13px] text-ink/50">{label}</p>}
    </div>
  );
}
