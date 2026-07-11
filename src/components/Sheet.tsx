import type { ReactNode } from "react";

type SheetProps = {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  /** Where the sheet rests inside its container */
  align?: "center" | "bottom";
  className?: string;
};

/**
 * Modal presentation layer: a light blurred backdrop plus a smoothly
 * entering panel (slide-up + fade, --motion-slow / --ease-standard).
 * Positioned absolutely — wrap the screen in `relative`.
 */
export function Sheet({ open, onClose, children, align = "center", className = "" }: SheetProps) {
  return (
    <div
      className={`absolute inset-0 z-10 ${open ? "" : "pointer-events-none"} ${className}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/15 backdrop-blur-[2px] transition-opacity duration-(--motion-slow) ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`absolute inset-x-0 flex justify-center px-4 ${
          align === "bottom" ? "bottom-4" : "top-1/2 -translate-y-1/2"
        }`}
      >
        <div
          className={`transition-[transform,opacity] duration-(--motion-slow) ease-(--ease-standard) ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
