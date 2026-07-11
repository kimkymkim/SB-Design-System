const placeholderColors = [
  "var(--color-grey-200)",
  "var(--color-grey-300)",
  "var(--color-grey-400)",
  "var(--color-grey-500)",
];

type PaletteDotsProps = {
  /**
   * Colors sampled from the uploaded artwork image. Until an image is
   * provided, neutral grey placeholders are shown.
   */
  colors?: string[];
  /** Dot diameter in px — 32 max, smaller is fine */
  size?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
};

/**
 * Overlapping color-dot stack beside each artwork. The dots are plain
 * circles (≤32px) whose colors come from the uploaded image; they
 * overlap by 25% of their diameter.
 */
export function PaletteDots({
  colors = placeholderColors,
  size = 32,
  direction = "vertical",
  className = "",
}: PaletteDotsProps) {
  const dotSize = Math.min(size, 32);
  const overlap = -dotSize * 0.25;
  return (
    <div
      className={`flex w-fit ${direction === "vertical" ? "flex-col" : "flex-row"} ${className}`}
      role="img"
      aria-label="Artwork color palette"
    >
      {colors.map((color, i) => (
        <span
          key={i}
          className="rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            marginTop: direction === "vertical" && i > 0 ? overlap : 0,
            marginLeft: direction === "horizontal" && i > 0 ? overlap : 0,
          }}
        />
      ))}
    </div>
  );
}
