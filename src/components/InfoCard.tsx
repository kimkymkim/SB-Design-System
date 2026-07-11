import { PaletteDots } from "./PaletteDots";

type InfoCardProps = {
  title: string;
  created: string;
  notes: string;
  palette?: string[];
  className?: string;
};

/**
 * Artwork detail card: script title, then Created / Notes / Palette rows
 * on the lavender surface.
 */
export function InfoCard({ title, created, notes, palette, className = "" }: InfoCardProps) {
  return (
    <div className={`w-full rounded-sheet bg-lavender px-6 py-6 ${className}`}>
      <h2 className="font-script text-[30px] leading-[36px] text-ink">“{title}”</h2>
      <dl className="mt-6 flex flex-col gap-2 font-sans text-[13px] leading-4 text-ink">
        <div className="flex gap-1">
          <dt className="font-bold">Created:</dt>
          <dd>{created}</dd>
        </div>
        <div>
          <dt className="inline font-bold">Notes: </dt>
          <dd className="inline">{notes}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="font-bold">Palette:</dt>
          <dd>
            <PaletteDots colors={palette} size={24} direction="horizontal" />
          </dd>
        </div>
      </dl>
    </div>
  );
}
