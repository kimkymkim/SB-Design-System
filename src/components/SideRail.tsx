import type { ReactNode } from "react";
import { Plus } from "lucide-react";

export type RailAction = {
  icon: ReactNode;
  label: string;
  onSelect?: () => void;
};

type SideRailProps = {
  /** Artwork-filled avatar bubble at the top */
  avatarSrc?: string;
  onAdd?: () => void;
  /** Icon actions in the vertical pill (list, calendar, …) */
  actions?: RailAction[];
  className?: string;
};

const railSurface =
  "rounded-full border-[1.2px] border-rail-border bg-rail drop-shadow-[0px_5px_2.5px_rgba(0,0,0,0.25)]";

/**
 * Desktop side rail: avatar bubble, round add button, and a vertical
 * pill of icon actions — the sleek left-edge menu of the webapp canvas.
 */
export function SideRail({ avatarSrc, onAdd, actions = [], className = "" }: SideRailProps) {
  return (
    <div className={`flex w-[65px] flex-col items-center gap-6 ${className}`}>
      <div className={`size-[65px] overflow-hidden rounded-full ${avatarSrc ? "" : "bg-grey-200"}`}>
        {avatarSrc ? (
          <img src={avatarSrc} alt="Your sketchbook" className="size-full object-cover" />
        ) : (
          <div className="flex size-full items-center justify-center" role="img" aria-label="Your sketchbook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-grey-400)" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.3 3.6-5.5 8-5.5s8 2.2 8 5.5v1H4v-1Z" />
            </svg>
          </div>
        )}
      </div>
      <button
        aria-label="Add art entry"
        onClick={onAdd}
        className={`flex size-16 items-center justify-center ${railSurface} transition-[transform,filter] duration-(--motion-fast) hover:brightness-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 active:scale-95`}
      >
        <Plus size={17} strokeWidth={1.8} color="var(--color-ink)" />
      </button>
      {actions.length > 0 && (
        <div className={`flex w-16 flex-col items-center py-1 ${railSurface}`}>
          {actions.map((action) => (
            <button
              key={action.label}
              aria-label={action.label}
              onClick={action.onSelect}
              className="flex size-[60px] items-center justify-center rounded-full text-ink transition-colors duration-(--motion-fast) hover:bg-ink/5 focus-visible:bg-ink/5 focus-visible:outline-none active:bg-ink/10"
            >
              {action.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
