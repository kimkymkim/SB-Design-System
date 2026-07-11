type SketchbookProps = {
  /** closed — red cover, tilted; open — flat spread */
  state?: "closed" | "open";
  /**
   * Real exported assets from the Figma file. Place them in
   * public/assets/ and pass their paths; simplified placeholder art
   * renders until then.
   */
  closedSrc?: string;
  openSrc?: string;
  width?: number;
  className?: string;
  onClick?: () => void;
};

/**
 * The sketchbook — the app's key brand asset. Two states, animated:
 * the closed book (tilted -9° like the welcome screen) untilts, scales
 * and crossfades into the open spread (spring, --motion-slow).
 */
export function Sketchbook({
  state = "closed",
  closedSrc,
  openSrc,
  width = 150,
  className = "",
  onClick,
}: SketchbookProps) {
  const height = width * 1.33;
  const open = state === "open";
  const layer =
    "absolute inset-0 flex items-center justify-center transition-[transform,opacity] duration-(--motion-slow) ease-(--ease-spring)";

  return (
    <div
      className={`relative ${onClick ? "cursor-pointer" : ""} ${className}`}
      style={{ width: width * 1.35, height: height * 1.1 }}
      onClick={onClick}
      role={onClick ? "button" : "img"}
      aria-label={open ? "Open sketchbook" : "Closed sketchbook"}
    >
      {/* closed cover */}
      <div className={`${layer} ${open ? "-rotate-2 scale-110 opacity-0" : "-rotate-9 scale-100 opacity-100"}`}>
        {closedSrc ? (
          <img src={closedSrc} alt="" className="shadow-photo" style={{ width, height }} />
        ) : (
          <svg width={width} height={height} viewBox="0 0 150 200" className="drop-shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
            <rect x="4" y="2" width="142" height="196" rx="14" fill="#C23430" />
            <rect x="4" y="2" width="10" height="196" rx="5" fill="#9E2823" />
            <rect x="118" y="2" width="8" height="196" fill="#7A1F1B" opacity="0.55" />
            {/* sticker hints — replaced by the real asset */}
            <circle cx="58" cy="62" r="15" fill="#F1A7B5" opacity="0.9" />
            <rect x="76" y="98" width="34" height="24" rx="5" fill="#9CBF8E" opacity="0.9" transform="rotate(-8 93 110)" />
            <rect x="42" y="132" width="30" height="18" rx="4" fill="#F6F1C6" opacity="0.9" transform="rotate(6 57 141)" />
          </svg>
        )}
      </div>
      {/* open spread */}
      <div className={`${layer} ${open ? "rotate-0 scale-100 opacity-100" : "rotate-3 scale-90 opacity-0"}`}>
        {openSrc ? (
          <img src={openSrc} alt="" className="shadow-photo" style={{ width: width * 1.35, height }} />
        ) : (
          <svg width={width * 1.35} height={height} viewBox="0 0 202 200" className="drop-shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
            <rect x="1" y="6" width="200" height="188" rx="10" fill="#C23430" />
            <rect x="8" y="12" width="91" height="176" rx="5" fill="#FDFDFB" />
            <rect x="103" y="12" width="91" height="176" rx="5" fill="#FDFDFB" />
            <line x1="101" y1="12" x2="101" y2="188" stroke="#E4E4E4" strokeWidth="2" />
            <path d="M99 12c-2 40-2 136 0 176M103 12c2 40 2 136 0 176" stroke="#F1F1F1" strokeWidth="1.5" fill="none" />
          </svg>
        )}
      </div>
    </div>
  );
}
