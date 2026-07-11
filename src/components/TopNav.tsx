type TopNavProps = {
  title: string;
  onBack?: () => void;
  rightLabel?: string;
  onRightAction?: () => void;
  className?: string;
};

/**
 * Top navigation row: back chevron + date label on the left,
 * text action ("Edit") on the right. 42px tall, matching Figma.
 */
export function TopNav({ title, onBack, rightLabel, onRightAction, className = "" }: TopNavProps) {
  return (
    <div className={`flex h-[42px] w-full items-center justify-between px-3 ${className}`}>
      <button className="flex items-center gap-1 font-sans text-[15px] font-medium text-ink" onClick={onBack}>
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true" className="rotate-180">
          <path d="M1.5 1.5 8 8l-6.5 6.5" stroke="var(--color-ink)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="px-2">{title}</span>
      </button>
      {rightLabel && (
        <button className="px-2 font-sans text-[15px] font-medium text-ink" onClick={onRightAction}>
          {rightLabel}
        </button>
      )}
    </div>
  );
}
