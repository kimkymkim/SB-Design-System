type SketchbookProps = {
  /** closed — red cover (tilt baked into the asset); open — flat spread */
  state?: "closed" | "open";
  /** Override the bundled assets if needed */
  closedSrc?: string;
  openSrc?: string;
  /** Width of the closed book in px; the open spread scales to match */
  width?: number;
  className?: string;
  onClick?: () => void;
};

/**
 * The sketchbook — the app's key brand asset (exported from Figma at
 * public/assets/). Two states, animated: the closed book crossfades,
 * untilts and scales into the open spread (spring, --motion-slow).
 */
export function Sketchbook({
  state = "closed",
  closedSrc = "/assets/sketchbook.svg",
  openSrc = "/assets/openbook.svg",
  width = 150,
  className = "",
  onClick,
}: SketchbookProps) {
  // intrinsic ratios of the exported assets
  const closedW = width;
  const closedH = width * (268 / 196);
  const openW = width * 1.45;
  const openH = openW * (237 / 284);
  const open = state === "open";
  const layer =
    "absolute inset-0 flex items-center justify-center transition-[transform,opacity] duration-(--motion-slow) ease-(--ease-spring)";

  return (
    <div
      className={`relative ${onClick ? "cursor-pointer" : ""} ${className}`}
      style={{ width: openW, height: closedH * 1.02 }}
      onClick={onClick}
      role={onClick ? "button" : "img"}
      aria-label={open ? "Open sketchbook" : "Closed sketchbook"}
    >
      <div className={`${layer} ${open ? "rotate-6 scale-110 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
        <img src={closedSrc} alt="" style={{ width: closedW, height: closedH }} draggable={false} />
      </div>
      <div className={`${layer} ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-3 scale-90 opacity-0"}`}>
        <img src={openSrc} alt="" style={{ width: openW, height: openH }} draggable={false} />
      </div>
    </div>
  );
}
