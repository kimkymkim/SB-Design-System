/**
 * Decorative iOS status bar (time + signal/wifi/battery) for phone-frame
 * demos. Purely presentational.
 */
export function StatusBar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-[59px] w-full items-end justify-between px-8 pb-2 font-sans text-[15px] font-semibold text-ink ${className}`} aria-hidden="true">
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        {/* signal */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
          <rect x="0" y="7" width="3" height="4" rx="0.8" />
          <rect x="4.5" y="5" width="3" height="6" rx="0.8" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.8" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
        </svg>
        {/* wifi */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <path d="M8 9.2 6.2 7.4a2.7 2.7 0 0 1 3.6 0L8 9.2Z" />
          <path d="M4.4 5.6a5.4 5.4 0 0 1 7.2 0l-1.3 1.3a3.6 3.6 0 0 0-4.6 0L4.4 5.6Z" />
          <path d="M2.5 3.7a8 8 0 0 1 11 0l-1.3 1.3a6.2 6.2 0 0 0-8.4 0L2.5 3.7Z" />
        </svg>
        {/* battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="currentColor" opacity="0.4" />
          <rect x="2" y="2" width="18" height="8" rx="1.8" fill="currentColor" />
          <path d="M23.5 4v4a2.2 2.2 0 0 0 0-4Z" fill="currentColor" opacity="0.4" />
        </svg>
      </span>
    </div>
  );
}
