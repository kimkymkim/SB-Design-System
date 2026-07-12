import type { ReactNode } from "react";
import { Pencil, Share, Trash2, Plus, ChevronLeft, ImagePlus, BookOpen, Palette, CalendarDays, Rows3 } from "lucide-react";
import { useState } from "react";
import {
  Avatar,
  Button,
  EntryCard,
  EntryForm,
  Fab,
  FloatingSheet,
  HistoryCard,
  InfoCard,
  LearnCard,
  Link,
  Menu,
  MonthLabel,
  PaletteDots,
  Pill,
  RiverBackground,
  SheetHeader,
  Shimmer,
  SideRail,
  Sketchbook,
  StatusBar,
  StatusCard,
  StatusCardThumb,
  TextArea,
  TextField,
  TopNav,
} from "./components";
import { DesktopCanvas, PhoneFrame, TimelineScreen, WelcomeScreen, DetailScreen } from "./templates";

const spacingScale = [4, 8, 12, 16, 24, 32, 48, 64];

const motionTokens = [
  ["fast — 150ms", "taps, hovers"],
  ["medium — 300ms", "card expansion, menus"],
  ["slow — 500ms", "sheet presentation"],
  ["float — 6s", "entry-card bob"],
  ["river — 28–36s", "background drift"],
] as const;

const neutrals = [
  ["Ink (black)", "var(--color-ink)", "#0D0D0D"],
  ["Ink 2 (second black)", "var(--color-ink-2)", "#323232"],
  ["Grey 700", "var(--color-grey-700)", "#545454"],
  ["Grey 600", "var(--color-grey-600)", "#6F6F6F"],
  ["Grey 500", "var(--color-grey-500)", "#8F8F8F"],
  ["Grey 400", "var(--color-grey-400)", "#ABABAB"],
  ["Grey 300", "var(--color-grey-300)", "#D0D0D0"],
  ["Grey 200", "var(--color-grey-200)", "#E4E4E4"],
  ["Grey 100", "var(--color-grey-100)", "#F1F1F1"],
  ["White soft", "var(--color-white-soft)", "#FAFAFA"],
  ["Paper", "var(--color-paper)", "#FFFFFF"],
] as const;

const accents = [
  ["Cream", "var(--color-cream)", "#F8F3CD"],
  ["Lavender", "var(--color-lavender)", "#EAECF9"],
  ["Border subtle", "var(--color-border-subtle)", "#E8E8E8"],
  ["Border strong", "var(--color-border-strong)", "#C0C0C0"],
] as const;

const shadows = [
  ["Sheet", "var(--shadow-sheet)"],
  ["Button", "var(--shadow-button)"],
  ["Photo (M3 elevation)", "var(--shadow-photo)"],
  ["Elevation 4", "var(--shadow-elevation-4)"],
] as const;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 border-b border-border-subtle pb-2 text-[15px] font-medium uppercase tracking-wide text-ink/60">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ShimmerDemo() {
  const [active, setActive] = useState(true);
  return (
    <button onClick={() => setActive(!active)} className="cursor-pointer focus-visible:outline-none" aria-label="Toggle shimmer">
      <Shimmer active={active} className="rounded-photo">
        <Avatar width={200} height={220} />
      </Shimmer>
    </button>
  );
}

function SketchbookDemo() {
  const [state, setState] = useState<"closed" | "open">("closed");
  return (
    <Sketchbook
      state={state}
      width={150}
      onClick={() => setState(state === "closed" ? "open" : "closed")}
    />
  );
}

function Swatch({ name, css, hex }: { name: string; css: string; hex: string }) {
  return (
    <div className="w-28">
      <div className="h-16 rounded-xl border border-border-subtle" style={{ backgroundColor: css }} />
      <p className="mt-1 text-[12px] font-medium">{name}</p>
      <p className="text-[11px] text-ink/50">{hex}</p>
    </div>
  );
}

export default function App() {
  return (
    <main className="mx-auto max-w-5xl px-8 pb-24 pt-12">
      <h1 className="text-3xl font-medium">SB Design System</h1>
      <p className="mt-1 text-ink/60">
        Tokens &amp; components from the Sketchbook Figma file.
      </p>

      <Section title="Colors — Neutrals">
        <div className="flex flex-wrap gap-4">
          {neutrals.map(([name, css, hex]) => (
            <Swatch key={name} name={name} css={css} hex={hex} />
          ))}
        </div>
      </Section>

      <Section title="Colors — Accents & Borders">
        <div className="flex flex-wrap gap-4">
          {accents.map(([name, css, hex]) => (
            <Swatch key={name} name={name} css={css} hex={hex} />
          ))}
        </div>
      </Section>

      <Section title="Drop Shadows">
        <div className="flex flex-wrap gap-8">
          {shadows.map(([name, css]) => (
            <div key={name} className="w-40">
              <div className="h-20 rounded-2xl bg-paper" style={{ boxShadow: css }} />
              <p className="mt-2 text-[12px] font-medium">{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Spacing — 4/8px rhythm">
        <div className="flex items-end gap-4">
          {spacingScale.map((px) => (
            <div key={px} className="flex flex-col items-center gap-1">
              <div className="w-8 rounded-sm bg-lavender" style={{ height: px }} />
              <p className="text-[11px] text-ink/50">{px}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Motion">
        <div className="flex flex-wrap gap-6">
          {motionTokens.map(([name, usage]) => (
            <div key={name} className="w-44">
              <p className="text-[13px] font-medium">{name}</p>
              <p className="text-[12px] text-ink/50">{usage}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] text-ink/60">
          Easings: standard <code>cubic-bezier(0.2,0,0,1)</code>, decelerate{" "}
          <code>cubic-bezier(0,0,0.2,1)</code>, spring <code>cubic-bezier(0.34,1.56,0.64,1)</code>.
          See the Timeline template below for float / tap-expand / sheet presentation.
        </p>
      </Section>

      <Section title="Iconography — Lucide">
        <div className="flex items-center gap-6 text-ink">
          <Plus size={20} strokeWidth={1.8} />
          <ChevronLeft size={20} strokeWidth={1.8} />
          <Pencil size={20} strokeWidth={1.8} />
          <Share size={20} strokeWidth={1.8} />
          <Trash2 size={20} strokeWidth={1.8} />
          <ImagePlus size={20} strokeWidth={1.8} />
          <BookOpen size={20} strokeWidth={1.8} />
          <Palette size={20} strokeWidth={1.8} />
        </div>
        <p className="mt-3 text-[13px] text-ink/60">
          Open-licensed stroke icons standing in for SF Symbols (which are Apple-platform only).
          Brand-specific marks: export SVGs from the Figma file.
        </p>
      </Section>

      <Section title="River Background">
        <RiverBackground className="h-64 rounded-3xl border border-border-subtle">
          <div className="p-6">
            <MonthLabel>July 2026</MonthLabel>
          </div>
        </RiverBackground>
        <p className="mt-3 text-[13px] text-ink/60">
          Three watercolor washes drifting slowly (28–36s). Honors prefers-reduced-motion.
        </p>
      </Section>

      <Section title="Typography">
        <div className="flex flex-col gap-3">
          <p className="font-script text-[30px]">
            “The Toulippe” — script, journal-entry titles only
          </p>
          <p className="text-[30px] font-medium">Page heading — all other h1s use the sans</p>
          <p className="text-[18px] font-medium tracking-[0.32px]">Sheet title — 18 medium</p>
          <p className="text-[15px] font-medium">Nav label — 15 medium</p>
          <p className="text-[13.5px] font-medium tracking-[-0.36px]">Button label — 13.5 medium</p>
          <p className="text-[13.5px] tracking-[-0.14px]">Pill label — 13.5 regular</p>
          <p className="text-[12.5px] tracking-[-0.21px]">Body / sheet description — 12.5 regular</p>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex w-[280px] flex-col gap-3">
            <Button>Add art</Button>
            <Button variant="link">View art</Button>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Fab />
            <p className="text-[11px] text-ink/50">Floating button</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Link href="#">View art</Link>
            <p className="text-[11px] text-ink/50">Inline link</p>
          </div>
        </div>
      </Section>

      <Section title="Labels">
        <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-lavender p-6">
          <div className="flex flex-col items-center gap-2">
            <Pill variant="glass">July 11, 2026</Pill>
            <p className="text-[11px] text-ink/50">glass — fully rounded</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Pill variant="square">July 11, 2026</Pill>
            <p className="text-[11px] text-ink/50">square — gradient stroke, no glass</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Pill>3d scan</Pill>
            <p className="text-[11px] text-ink/50">outline</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Pill variant="cream">Add work</Pill>
            <p className="text-[11px] text-ink/50">cream</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Pill variant="square" script>Pink House</Pill>
            <p className="text-[11px] text-ink/50">square + script caption</p>
          </div>
        </div>
      </Section>

      <Section title="Status & History Cards">
        <div className="flex w-[420px] flex-col gap-5">
          <StatusCard thumbnail={<StatusCardThumb />}>Observing your brush strokes</StatusCard>
          <HistoryCard title="About your work" actionLabel="Save">
            <strong>Dutch tulip painting tradition</strong> — the flower itself looks like a
            “broken” parrot tulip, the feathered, flame-streaked petals that{" "}
            <strong>Dutch Golden Age</strong> painters obsessively rendered during and after{" "}
            <strong>Tulipomania</strong>.
          </HistoryCard>
        </div>
      </Section>

      <Section title="Shimmer — art being read">
        <ShimmerDemo />
        <p className="mt-3 text-[13px] text-ink/60">
          Bloom + light sweep while art history is read from the piece (from the Figma Learn
          flow). Click to toggle. Pass an SVG outline via <code>trace</code> for the full
          edge-glow on known artwork.
        </p>
      </Section>

      <Section title="Side Rail — desktop">
        <div className="rounded-3xl bg-canvas p-8">
          <SideRail
            actions={[
              { icon: <Rows3 size={22} strokeWidth={1.6} />, label: "List view" },
              { icon: <CalendarDays size={22} strokeWidth={1.6} />, label: "Calendar view" },
            ]}
          />
        </div>
      </Section>

      <Section title="Palette Dots">
        <p className="mb-4 text-[13px] text-ink/60">
          Plain circles, 32px or smaller — colors are sampled from the uploaded
          artwork image. Grey placeholders until an image is provided.
        </p>
        <div className="flex items-start gap-10">
          <PaletteDots />
          <PaletteDots direction="horizontal" size={24} />
          <PaletteDots
            direction="horizontal"
            size={24}
            colors={["#F1A7B5", "#F6F1C6", "#9CBF8E", "#35571F"]}
          />
        </div>
      </Section>

      <Section title="Avatar / Artwork Slot">
        <div className="flex items-end gap-8">
          <Avatar />
          <Avatar width={100} height={102} />
        </div>
      </Section>

      <Section title="Entry Card">
        <div className="flex flex-wrap gap-10">
          <EntryCard date="July 7, 2026" title="The Toulippe" note="bookshop" />
          <EntryCard
            date="July 1, 2026"
            title="Riverline"
            note="audio visual"
            palette={["#F1A7B5", "#9CBF8E", "#4C7D4C", "#F3F3DC"]}
          />
        </div>
      </Section>

      <Section title="Sketchbook — key brand asset">
        <SketchbookDemo />
        <p className="mt-3 text-[13px] text-ink/60">
          Click to animate closed ↔ open. Placeholder art until the real exports land in{" "}
          <code>public/assets/</code> (see the README there).
        </p>
      </Section>

      <Section title="Floating Sheet + Menu">
        <div className="flex flex-wrap items-start gap-10">
          <FloatingSheet>
            <Avatar width={130} height={180} className="-rotate-6" />
            <SheetHeader
              title="Welcome to your Sketchbook"
              description="Add art to. Learn more about you."
            />
            <div className="flex w-full flex-col gap-3">
              <Button>Add art</Button>
              <Button variant="link">View art</Button>
            </div>
          </FloatingSheet>
          <Menu
            items={[
              { label: "Add work", symbol: <Plus size={16} strokeWidth={1.8} /> },
              { label: "Edit entry", symbol: <Pencil size={16} strokeWidth={1.8} /> },
              { label: "Share…", symbol: <Share size={16} strokeWidth={1.8} /> },
              { label: "Delete", destructive: true, symbol: <Trash2 size={16} strokeWidth={1.8} /> },
            ]}
          />
        </div>
      </Section>

      <Section title="Detail Cards">
        <div className="flex w-[360px] flex-col gap-6">
          <InfoCard
            title="The Toulippe"
            created="July 7, 2026"
            notes="In a bookshop while observing some flowers and what if some where combined together?"
          />
          <LearnCard
            thumbnail={<Avatar width={36} height={52} />}
            title="Art History in my art"
            description="Learn about what art history is hidden from your very own work!"
          />
        </div>
      </Section>

      <Section title="Inputs">
        <div className="flex w-[340px] flex-col gap-4">
          <TextField label="Title" placeholder="“The Toulippe”" />
          <TextField label="Date" type="date" />
          <TextArea label="Notes" placeholder="Where were you? What sparked it?" />
        </div>
      </Section>

      <Section title="Entry Input Sheet">
        <EntryForm />
      </Section>

      <Section title="Navigation">
        <div className="w-[393px] rounded-3xl border border-border-subtle bg-paper">
          <StatusBar />
          <TopNav title="July 7, 2026" rightLabel="Edit" />
        </div>
      </Section>

      <Section title="Screen Templates">
        <p className="mb-6 text-[13px] text-ink/60">
          The Timeline is interactive: entries float in place; tap one to see it expand and
          present the detail sheet. The + button opens the entry input sheet.
        </p>
        <div className="flex flex-wrap gap-10">
          <PhoneFrame label="Welcome">
            <WelcomeScreen />
          </PhoneFrame>
          <PhoneFrame label="Timeline — interactive">
            <TimelineScreen />
          </PhoneFrame>
          <PhoneFrame label="Detail">
            <DetailScreen
              entry={{
                id: "toulippe",
                date: "July 7, 2026",
                tag: "“bookshop”",
                title: "The Toulippe",
                notes:
                  "In a bookshop while observing some flowers and what if some where combined together?",
              }}
            />
          </PhoneFrame>
        </div>
      </Section>

      <Section title="Desktop Canvas — interactive Learn flow">
        <p className="mb-4 text-[13px] text-ink/60">
          Open “The Toulippe” (top entry), press Learn: the artwork shimmers while brush strokes
          are observed, then the art history appears — Save appends it to the entry.
        </p>
        <DesktopCanvas />
      </Section>
    </main>
  );
}
