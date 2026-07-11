import type { ReactNode } from "react";
import { Button } from "./Button";

type LearnCardProps = {
  thumbnail: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
};

/**
 * "Learn" suggestion card on the artwork detail screen: thumbnail +
 * title/description + full-width pill action, on the lavender surface.
 */
export function LearnCard({
  thumbnail,
  title,
  description,
  actionLabel = "Learn",
  onAction,
  className = "",
}: LearnCardProps) {
  return (
    <div className={`w-full rounded-sheet bg-lavender p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex h-[58px] w-[44px] shrink-0 items-center justify-center">{thumbnail}</div>
        <div className="flex flex-col gap-1">
          <p className="font-sans text-[16px] font-medium leading-5 text-ink">{title}</p>
          <p className="font-sans text-[12.5px] leading-[15px] text-ink">{description}</p>
        </div>
      </div>
      <Button className="mt-4" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  );
}
