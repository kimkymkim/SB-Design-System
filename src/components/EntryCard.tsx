import { Avatar } from "./Avatar";
import { Pill } from "./Pill";
import { PaletteDots } from "./PaletteDots";

type EntryCardProps = {
  /** Artwork image; omit to show the avatar placeholder */
  src?: string;
  alt?: string;
  date: string;
  tag: string;
  /** Palette colors sampled from the uploaded image */
  palette?: string[];
  /** Photo width in px */
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Timeline entry card: artwork (or avatar placeholder until an image is
 * uploaded), a glass date pill (top), a glass tag pill (bottom), the
 * image-derived palette dots, and a translucent scrim slab — collaged
 * like a polaroid.
 */
export function EntryCard({
  src,
  alt = "",
  date,
  tag,
  palette,
  width = 175,
  height = 179,
  className = "",
}: EntryCardProps) {
  return (
    <div className={`relative w-fit ${className}`} style={{ padding: "18px 14px 18px 18px" }}>
      {/* translucent scrim slab behind the lower half */}
      <div className="absolute bottom-0 left-0 h-[45%] w-[95%] rounded-backdrop bg-scrim" />
      <Avatar src={src} alt={alt} width={width} height={height} className="relative" />
      <Pill variant="glass" className="absolute -top-0 left-[30px]">{date}</Pill>
      <Pill variant="glass" className="absolute bottom-0 right-0">{tag}</Pill>
      <PaletteDots colors={palette} size={28} className="absolute -left-0 top-[35%]" />
    </div>
  );
}
