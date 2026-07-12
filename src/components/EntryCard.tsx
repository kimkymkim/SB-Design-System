import { PaletteDots } from "./PaletteDots";

type EntryCardProps = {
  /** Artwork image; omit to show the neutral placeholder */
  src?: string;
  alt?: string;
  title: string;
  date: string;
  /** Small label derived from the journal entry's notes ("bookshop") */
  note?: string;
  /** Palette colors sampled from the uploaded image */
  palette?: string[];
  className?: string;
};

const squareLabel =
  "absolute flex items-center justify-center whitespace-nowrap border border-border-subtle bg-paper text-ink";

/**
 * Journal entry as seen on the infinite canvas (Figma 2215:323):
 * the artwork on its cream mat; a glass square in front of the lower
 * edge; the title on it in the script font (tilted 0.6°); the date
 * label at the top; a small note-derived label on the right (-7.9°);
 * the image palette stacked on the left. Labels are square-cornered
 * white with hairline borders.
 */
export function EntryCard({
  src,
  alt = "",
  title,
  date,
  note,
  palette,
  className = "",
}: EntryCardProps) {
  return (
    <div className={`relative h-[298px] w-[313px] ${className}`}>
      {/* artwork on its cream mat */}
      <div className="absolute left-[27px] top-[8px] flex h-[264px] w-[225px] items-center justify-center rounded-[20px] bg-mat p-[13px]">
        {src ? (
          <img src={src} alt={alt} className="h-[180px] w-[124px] object-cover" />
        ) : (
          <div
            className="flex h-[180px] w-[124px] items-center justify-center bg-grey-100"
            role="img"
            aria-label="No artwork yet"
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="var(--color-grey-400)" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.3 3.6-5.5 8-5.5s8 2.2 8 5.5v1H4v-1Z" />
            </svg>
          </div>
        )}
      </div>

      {/* glass square in front of the lower edge */}
      <div className="glass absolute left-[22px] top-[222px] h-[76px] w-[234px] rounded-[10px]" style={{ background: "var(--color-scrim)" }} />

      {/* image palette, left */}
      <PaletteDots colors={palette} size={28} className="absolute left-0 top-[60px]" />

      {/* date label, top */}
      <span className={`${squareLabel} left-[60px] top-0 px-5 py-3 font-sans text-[17px] leading-[1.11] tracking-[-0.17px]`}>
        {date}
      </span>

      {/* title label on the glass square, script */}
      <span className={`${squareLabel} left-[48px] top-[237px] rotate-[0.6deg] px-5 py-3 font-script text-[17px] leading-[1.11] tracking-[-0.17px]`}>
        “{title}”
      </span>

      {/* small note-derived label, right */}
      {note && (
        <span className={`${squareLabel} left-[210px] top-[122px] rotate-[-7.93deg] px-3.5 py-2 font-sans text-[12px] leading-[1.11] tracking-[-0.12px]`}>
          “{note}”
        </span>
      )}
    </div>
  );
}
