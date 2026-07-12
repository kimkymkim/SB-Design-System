import { useEffect, useState } from "react";
import { CalendarDays, ChevronLeft, Rows3 } from "lucide-react";
import {
  Avatar,
  EntryCard,
  HistoryCard,
  PaletteDots,
  Pill,
  Shimmer,
  SideRail,
  Sketchbook,
  StatusCard,
  StatusCardThumb,
} from "../components";

type FlowState = "closed" | "info" | "observing" | "results" | "saved";

const historyText =
  "Dutch tulip painting tradition — the flower itself looks like a “broken” parrot tulip, the feathered, flame-streaked petals that Dutch Golden Age painters obsessively rendered during and after Tulipomania.";

/**
 * Desktop webapp canvas: paper-grey infinite canvas with floating
 * entries, the side rail, and the sketchbook anchor. Opening an entry
 * presents the two-column detail modal with the Learn flow:
 * Learn → the artwork shimmers while brush strokes are observed →
 * "About your work" art history → Save appends it to the entry.
 */
export function DesktopCanvas() {
  const [flow, setFlow] = useState<FlowState>("closed");

  // scanning auto-completes after two shimmer cycles
  useEffect(() => {
    if (flow !== "observing") return;
    const t = setTimeout(() => setFlow("results"), 4800);
    return () => clearTimeout(t);
  }, [flow]);

  const close = () => setFlow("closed");

  return (
    <div className="paper relative h-[720px] w-full overflow-hidden rounded-3xl border border-border-subtle">
      <SideRail
        className="absolute left-5 top-8"
        actions={[
          { icon: <Rows3 size={22} strokeWidth={1.6} />, label: "List view" },
          { icon: <CalendarDays size={22} strokeWidth={1.6} />, label: "Calendar view" },
        ]}
      />

      {/* floating entries */}
      <div className="float-gentle absolute left-[150px] top-[40px]">
        <button onClick={() => setFlow("info")} aria-label="Open The Toulippe" className="cursor-pointer transition-transform duration-(--motion-medium) ease-(--ease-spring) hover:scale-[1.02] focus-visible:outline-none">
          <EntryCard date="July 7, 2026" title="The Toulippe" note="bookshop" />
        </button>
      </div>
      <div className="float-gentle absolute left-[420px] top-[220px]" style={{ animationDelay: "1.6s" }}>
        <EntryCard date="July 1, 2026" title="Riverline" note="audio visual" />
      </div>
      <div className="float-gentle absolute left-[180px] top-[400px]" style={{ animationDelay: "3s" }}>
        <EntryCard date="July 2, 2026" title="Ebi stamps" note="Travel" />
      </div>

      {/* script caption + sketchbook anchor */}
      <div className="absolute left-[440px] top-[560px]">
        <Pill variant="square" script>Pink House</Pill>
      </div>
      <div className="absolute bottom-2 right-4">
        <Sketchbook width={56} />
      </div>

      {/* detail modal */}
      {flow !== "closed" && (
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-ink/15 backdrop-blur-[2px]" onClick={close} />
          <div className="absolute left-1/2 top-1/2 flex w-[820px] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-sheet bg-paper p-6 shadow-sheet">
            <button
              aria-label="Back"
              onClick={close}
              className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full bg-paper shadow-photo transition-transform duration-(--motion-fast) hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 active:scale-95"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>
            <Pill className="absolute right-4 top-4 cursor-pointer bg-paper">Edit</Pill>

            {/* artwork column — shimmers while being read */}
            <div className="mt-10 shrink-0">
              <Shimmer active={flow === "observing"} className="rounded-photo">
                <Avatar width={300} height={360} />
              </Shimmer>
            </div>

            {/* info column */}
            <div className="mt-10 flex min-h-[420px] flex-1 flex-col gap-5 rounded-sheet bg-lavender px-6 pb-7 pt-4">
              <h2 className="text-center font-script text-[32px] leading-[1.11] tracking-[-0.32px] text-ink">
                “The Toulippe”
              </h2>
              <dl className="flex flex-col gap-2 font-sans text-[16px] leading-[1.25] text-ink-2">
                <div className="flex gap-1">
                  <dt className="font-bold text-ink">Created:</dt>
                  <dd>July 7, 2026</dd>
                </div>
                <div>
                  <dt className="inline font-bold text-ink">Notes: </dt>
                  <dd className="inline">
                    In a bookshop while observing some flowers and what if some where combined together?
                  </dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="font-bold text-ink">Palette:</dt>
                  <dd>
                    <PaletteDots size={24} direction="horizontal" />
                  </dd>
                </div>
                {flow === "saved" && (
                  <div>
                    <dt className="inline font-bold text-ink">Art History (from your work): </dt>
                    <dd className="inline">{historyText}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-auto">
                {flow === "info" && (
                  <HistoryCard
                    thumbnail={<StatusCardThumb />}
                    title="Art History in my art"
                    actionLabel="Learn"
                    onAction={() => setFlow("observing")}
                  >
                    Learn about what art history is hidden from your very own work!
                  </HistoryCard>
                )}
                {flow === "observing" && (
                  <StatusCard thumbnail={<StatusCardThumb />}>Observing your brush strokes</StatusCard>
                )}
                {flow === "results" && (
                  <HistoryCard title="About your work" actionLabel="Save" onAction={() => setFlow("saved")}>
                    <strong>Dutch tulip painting tradition</strong> — the flower itself looks like a
                    “broken” parrot tulip, the feathered, flame-streaked petals that{" "}
                    <strong>Dutch Golden Age</strong> painters obsessively rendered during and after{" "}
                    <strong>Tulipomania</strong>. Those paintings prized exactly this kind of
                    color-break pattern (what we now know was a virus) — red flames over a paler
                    ground.
                  </HistoryCard>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
