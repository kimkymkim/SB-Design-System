import type { ButtonHTMLAttributes } from "react";
import { Plus } from "lucide-react";

type FabProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Small cream floating action button ("+") from the timeline screen.
 */
export function Fab({ className = "", ...rest }: FabProps) {
  return (
    <button
      aria-label="Add"
      className={`flex size-9 items-center justify-center rounded-full bg-cream shadow-photo transition-[transform,filter,box-shadow] duration-(--motion-fast) ease-(--ease-standard) hover:brightness-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none disabled:opacity-40 ${className}`}
      {...rest}
    >
      <Plus size={15} strokeWidth={1.8} color="var(--color-ink)" />
    </button>
  );
}
