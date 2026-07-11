import { useState } from "react";
import {
  EntryCard,
  EntryForm,
  Fab,
  MonthLabel,
  Pill,
  RiverBackground,
  Sheet,
  StatusBar,
} from "../components";
import { DetailScreen, type ArtEntry } from "./DetailScreen";

const entries: (ArtEntry & { x: number; y: number; delay: number })[] = [
  {
    id: "scan",
    date: "July 11, 2026",
    tag: "3d scan",
    title: "Blue Willow",
    notes: "Scanned at the ceramics fair — the glaze pattern kept pulling me back.",
    x: 24,
    y: 120,
    delay: 0,
  },
  {
    id: "toulippe",
    date: "July 7, 2026",
    tag: "“bookshop”",
    title: "The Toulippe",
    notes:
      "In a bookshop while observing some flowers and what if some where combined together?",
    x: 150,
    y: 330,
    delay: 1.8,
  },
  {
    id: "river",
    date: "July 1, 2026",
    tag: "audio visual",
    title: "Riverline",
    notes: "Field recording sketch by the water.",
    x: 16,
    y: 560,
    delay: 3.2,
  },
];

/**
 * Timeline screen: art entries float gently in place on the river
 * canvas. Tapping an entry expands it slightly (with a soft backdrop
 * shadow), then the full detail sheet presents. The FAB opens the
 * entry-logging input sheet.
 */
export function TimelineScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [detailEntry, setDetailEntry] = useState<ArtEntry | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const openEntry = (entry: ArtEntry) => {
    if (expandedId || detailEntry) return;
    setExpandedId(entry.id);
    // let the expand play (--motion-medium) before the sheet presents
    setTimeout(() => setDetailEntry(entry), 280);
  };

  const closeDetail = () => {
    setDetailEntry(null);
    setExpandedId(null);
  };

  return (
    <RiverBackground className="h-full w-full">
      <StatusBar />
      <MonthLabel className="ml-6 mt-2">July 2026</MonthLabel>

      {entries.map((entry) => (
        <div
          key={entry.id}
          className="float-gentle absolute"
          style={{ left: entry.x, top: entry.y, animationDelay: `${entry.delay}s` }}
        >
          <button
            onClick={() => openEntry(entry)}
            aria-label={`Open ${entry.title}`}
            className={`block cursor-pointer text-left transition-[transform,filter] duration-(--motion-medium) ease-(--ease-spring) focus-visible:outline-none ${
              expandedId === entry.id
                ? "scale-[1.07] drop-shadow-[0px_10px_18px_rgba(0,0,0,0.22)]"
                : "drop-shadow-none hover:scale-[1.02]"
            }`}
          >
            <EntryCard date={entry.date} tag={entry.tag} src={entry.src} palette={entry.palette} />
          </button>
        </div>
      ))}

      {/* bottom-right action cluster */}
      <div className="absolute bottom-14 right-4 flex flex-col items-end gap-3">
        <Pill variant="cream">Add work</Pill>
        <Fab className="mr-1" onClick={() => setFormOpen(true)} />
      </div>

      {/* full detail sheet */}
      <Sheet open={detailEntry !== null} onClose={closeDetail}>
        {detailEntry && (
          <div className="h-[700px] w-[360px] overflow-hidden rounded-sheet shadow-sheet">
            <DetailScreen entry={detailEntry} onBack={closeDetail} showStatusBar={false} />
          </div>
        )}
      </Sheet>

      {/* entry-logging input sheet */}
      <Sheet open={formOpen} onClose={() => setFormOpen(false)}>
        <EntryForm onSave={() => setFormOpen(false)} onCancel={() => setFormOpen(false)} />
      </Sheet>
    </RiverBackground>
  );
}
