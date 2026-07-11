const defaultColors = [
  "var(--color-palette-pink)",
  "var(--color-palette-cream)",
  "var(--color-palette-leaf)",
  "var(--color-palette-forest)",
];

type PaletteDotsProps = {
  /** CSS colors of the artwork's palette, top-to-bottom / left-to-right */
  colors?: string[];
  /** Dot diameter in px (Figma: 28 vertical stack, 24 inline row) */
  size?: number;
  direction?: "vertical" | "horizontal";
  className?: string;
};

/**
 * Overlapping color-dot stack shown beside each artwork
 * (dots overlap by 25% of their diameter, matching Figma's 21px step on 28px dots).
 */
export function PaletteDots({
  colors = defaultColors,
  size = 28,
  direction = "vertical",
  className = "",
}: PaletteDotsProps) {
  const overlap = -size * 0.25;
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
            width: size,
            height: size,
            backgroundColor: color,
            marginTop: direction === "vertical" && i > 0 ? overlap : 0,
            marginLeft: direction === "horizontal" && i > 0 ? overlap : 0,
          }}
        />
      ))}
    </div>
  );
}
