import type { ReactNode } from "react";
import {
  Avatar,
  Button,
  EntryCard,
  Fab,
  FloatingSheet,
  InfoCard,
  LearnCard,
  Link,
  Menu,
  PaletteDots,
  Pill,
  SheetHeader,
  StatusBar,
  TopNav,
} from "./components";

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
          <EntryCard date="July 7, 2026" tag="“bookshop”" />
          <EntryCard date="July 1, 2026" tag="audio visual" />
        </div>
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
              { label: "Add work", symbol: "＋" },
              { label: "Edit entry" },
              { label: "Share…" },
              { label: "Delete", destructive: true },
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

      <Section title="Navigation">
        <div className="w-[393px] rounded-3xl border border-border-subtle bg-paper">
          <StatusBar />
          <TopNav title="July 7, 2026" rightLabel="Edit" />
        </div>
      </Section>
    </main>
  );
}
