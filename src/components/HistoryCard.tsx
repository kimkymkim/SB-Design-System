import type { ReactNode } from "react";
import { Button } from "./Button";

type HistoryCardProps = {
  /** Optional small thumbnail beside the title row */
  thumbnail?: ReactNode;
  title: string;
  /** Body copy — use <strong> for emphasized art-history terms */
  children: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

/**
 * Art-history card ("About your work" / "Art History in my art"):
 * white, hairline border, 26px radius, 24px medium title, 14px body
 * with bold emphasis spans, full-width pill action.
 */
export function HistoryCard({
  thumbnail,
  title,
  children,
  actionLabel,
  onAction,
  className = "",
}: HistoryCardProps) {
  return (
    <div className={`flex w-full flex-col gap-3 rounded-[26px] border border-card-border bg-paper px-4 py-6 ${className}`}>
      <div className="flex items-center gap-3">
        {thumbnail && <div className="flex shrink-0 items-center justify-center">{thumbnail}</div>}
        <p className="font-sans text-[24px] font-medium leading-none tracking-[-0.24px] text-ink-2">{title}</p>
      </div>
      <div className="font-sans text-[14px] leading-[1.25] text-ink-2 [&_strong]:font-bold [&_strong]:text-ink">
        {children}
      </div>
      {actionLabel && (
        <Button className="mt-1" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
