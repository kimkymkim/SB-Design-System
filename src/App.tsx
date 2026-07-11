import type { ReactNode } from "react";
import {
  Button,
  EntryCard,
  Fab,
  FloatingSheet,
  InfoCard,
  LearnCard,
  PaletteDots,
  Pill,
  SheetHeader,
  StatusBar,
  TopNav,
} from "./components";

/* Placeholder artwork (real app supplies photos; Figma assets are not redistributable) */
const tulipArt = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="175" height="179"><rect width="175" height="179" fill="#b8bce8"/><ellipse cx="88" cy="80" rx="38" ry="48" fill="#f1a7b5"/><ellipse cx="70" cy="72" rx="16" ry="30" fill="#f8c9d2"/><path d="M88 120v40" stroke="#35571f" stroke-width="5"/><path d="M88 140c-14-4-24-14-26-26 14 2 24 12 26 26Z" fill="#9cbf8e"/></svg>`,
)}`;

const gardenArt = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="175" height="174"><rect width="175" height="174" fill="#dce8d4"/><circle cx="50" cy="120" r="26" fill="#f1a7b5"/><circle cx="110" cy="90" r="34" fill="#9cbf8e"/><circle cx="140" cy="140" r="20" fill="#f6f1c6"/><rect y="150" width="175" height="24" fill="#35571f" opacity=".55"/></svg>`,
)}`;

const swatches = [
  ["Ink", "var(--color-ink)", "#090909"],
  ["Paper", "var(--color-paper)", "#FFFFFF"],
  ["Cream", "var(--color-cream)", "#F8F3CD"],
  ["Lavender", "var(--color-lavender)", "#EAECF9"],
  ["Border subtle", "var(--color-border-subtle)", "#E8E8E8"],
  ["Border strong", "var(--color-border-strong)", "#C0C0C0"],
  ["Palette pink", "var(--color-palette-pink)", "#F1A7B5"],
  ["Palette cream", "var(--color-palette-cream)", "#F6F1C6"],
  ["Palette leaf", "var(--color-palette-leaf)", "#9CBF8E"],
  ["Palette forest", "var(--color-palette-forest)", "#35571F"],
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

export default function App() {
  return (
    <main className="mx-auto max-w-5xl px-8 pb-24 pt-12">
      <h1 className="text-3xl font-medium">SB Design System</h1>
      <p className="mt-1 text-ink/60">
        Tokens &amp; components from the Sketchbook Figma file.
      </p>

      <Section title="Colors">
        <div className="flex flex-wrap gap-4">
          {swatches.map(([name, css, hex]) => (
            <div key={name} className="w-28">
              <div
                className="h-16 rounded-xl border border-border-subtle"
                style={{ backgroundColor: css }}
              />
              <p className="mt-1 text-[12px] font-medium">{name}</p>
              <p className="text-[11px] text-ink/50">{hex}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div className="flex flex-col gap-3">
          <p className="font-script text-[30px]">“The Toulippe” — script / detail title</p>
          <p className="text-[18px] font-medium tracking-[0.32px]">Sheet title — 18 medium</p>
          <p className="text-[15px] font-medium">Nav label — 15 medium</p>
          <p className="text-[13.5px] font-medium tracking-[-0.36px]">Button label — 13.5 medium</p>
          <p className="text-[13.5px] tracking-[-0.14px]">Pill label — 13.5 regular</p>
          <p className="text-[12.5px] tracking-[-0.21px]">Body / sheet description — 12.5 regular</p>
        </div>
      </Section>

      <Section title="Buttons & Pills">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex w-[280px] flex-col gap-3">
            <Button>Add art</Button>
            <Button variant="link">View art</Button>
          </div>
          <div className="flex items-center gap-3">
            <Pill>July 11, 2026</Pill>
            <Pill>3d scan</Pill>
            <Pill variant="cream">Add work</Pill>
            <Fab />
          </div>
        </div>
      </Section>

      <Section title="Palette Dots">
        <div className="flex items-start gap-10">
          <PaletteDots />
          <PaletteDots direction="horizontal" size={24} />
        </div>
      </Section>

      <Section title="Entry Card">
        <div className="flex flex-wrap gap-10">
          <EntryCard src={tulipArt} date="July 7, 2026" tag="“bookshop”" />
          <EntryCard src={gardenArt} date="July 1, 2026" tag="audio visual" />
        </div>
      </Section>

      <Section title="Floating Sheet">
        <FloatingSheet>
          <div className="flex h-[180px] w-[130px] -rotate-6 items-center justify-center rounded-md bg-[#c33] shadow-photo">
            <span className="text-[12px] text-white/80">sketchbook</span>
          </div>
          <SheetHeader
            title="Welcome to your Sketchbook"
            description="Add art to. Learn more about you."
          />
          <div className="flex w-full flex-col gap-3">
            <Button>Add art</Button>
            <Button variant="link">View art</Button>
          </div>
        </FloatingSheet>
      </Section>

      <Section title="Detail Cards">
        <div className="flex w-[360px] flex-col gap-6">
          <InfoCard
            title="The Toulippe"
            created="July 7, 2026"
            notes="In a bookshop while observing some flowers and what if some where combined together?"
          />
          <LearnCard
            thumbnail={<div className="h-[52px] w-[36px] rounded-sm bg-[#c33] shadow-photo" />}
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
