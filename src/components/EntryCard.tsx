import { Pill } from "./Pill";
import { PaletteDots } from "./PaletteDots";

type EntryCardProps = {
  src: string;
  alt?: string;
  date: string;
  tag: string;
  palette?: string[];
  /** Photo width in px; height follows the image's aspect ratio */
  width?: number;
  className?: string;
};

/**
 * Timeline entry card: an artwork photo with a translucent backdrop,
 * a date pill (top), a tag pill (bottom), and the palette dot stack.
 * Cards are scattered informally on the timeline, so the layers
 * intentionally overhang the photo like a collaged polaroid.
 */
export function EntryCard({
  src,
  alt = "",
  date,
  tag,
  palette,
  width = 175,
  className = "",
}: EntryCardProps) {
  return (
    <div className={`relative w-fit ${className}`} style={{ padding: "18px 14px 18px 18px" }}>
      {/* translucent scrim slab behind the lower half */}
      <div className="absolute bottom-0 left-0 h-[45%] w-[95%] rounded-backdrop bg-scrim" />
      <img
        src={src}
        alt={alt}
        className="relative rounded-photo object-cover shadow-photo"
        style={{ width }}
      />
      <Pill className="absolute -top-0 left-[30px] bg-paper/60 backdrop-blur-sm">{date}</Pill>
      <Pill className="absolute bottom-0 right-0 bg-paper/60 backdrop-blur-sm">{tag}</Pill>
      <PaletteDots colors={palette} className="absolute -left-0 top-[35%]" />
    </div>
  );
}
