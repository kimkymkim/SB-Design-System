/**
 * Month/year label anchoring the timeline ("July 2026") — a white
 * rounded label with the nav type style.
 */
export function MonthLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-2xl bg-paper px-4 py-3 font-sans text-[15px] font-medium leading-[18px] text-ink ${className}`}
    >
      {children}
    </span>
  );
}
