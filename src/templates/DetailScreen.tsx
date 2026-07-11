import { Avatar, InfoCard, LearnCard, StatusBar, TopNav } from "../components";

export type ArtEntry = {
  id: string;
  date: string;
  tag: string;
  title: string;
  notes: string;
  src?: string;
  palette?: string[];
};

/**
 * Artwork detail screen: nav with the entry date, the artwork large,
 * then the journal InfoCard and a LearnCard suggestion.
 */
export function DetailScreen({
  entry,
  onBack,
  showStatusBar = true,
}: {
  entry: ArtEntry;
  onBack?: () => void;
  /** Disable when presented inside a sheet (the screen behind owns the status bar) */
  showStatusBar?: boolean;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-paper">
      {showStatusBar && <StatusBar className="shrink-0" />}
      <TopNav title={entry.date} rightLabel="Edit" onBack={onBack} className="shrink-0" />
      <div className="flex justify-center py-6">
        <Avatar src={entry.src} width={250} height={292} />
      </div>
      <div className="flex flex-col gap-6 px-4 pb-8">
        <InfoCard title={entry.title} created={entry.date} notes={entry.notes} palette={entry.palette} />
        <LearnCard
          thumbnail={<Avatar width={36} height={52} />}
          title="Art History in my art"
          description="Learn about what art history is hidden from your very own work!"
        />
      </div>
    </div>
  );
}
