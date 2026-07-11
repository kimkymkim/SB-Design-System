# SB Design System

Design tokens and React components extracted from the **Sketchbook** Figma file
([source frames](https://www.figma.com/design/OESQPDASU3F9NQtu9E57Za/Sketchbook?node-id=2204-4563)).
Built for a web app that looks and feels like a native iOS app.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4** — tokens live as CSS variables in `src/styles/index.css` (`@theme`)
- **Portable tokens** — `tokens/tokens.json` is platform-neutral; generate Swift/Android
  constants from it if a native app ever ships

## Getting started

```bash
npm install
npm run dev      # component gallery at localhost:5173
npm run build
```

## Components

| Component | Source in Figma |
|---|---|
| `Button` | Pill button (`primary`) and underlined text button (`link`) from the welcome sheet |
| `Pill` | Labels: `outline`, `cream` ("Add work"), `glass` (fully rounded, frosted), `square` (no rounding, gradient stroke) |
| `PaletteDots` | Plain circles ≤32px, colors sampled from the uploaded image; grey placeholders until then |
| `Avatar` | Artwork slot — neutral placeholder until an image is filled in |
| `EntryCard` | Timeline artwork card: avatar/photo, scrim, glass pills, palette dots |
| `FloatingSheet` / `SheetHeader` | Welcome modal sheet |
| `Sheet` | Modal presentation: blurred backdrop + slide-up panel |
| `Menu` | Quick-action contextual menu: glass, 44px rows, hairline dividers |
| `InfoCard` | Journal detail card: script title, Created/Notes/Palette rows |
| `LearnCard` | "Art History in my art" suggestion card with Learn action |
| `EntryForm` | Input sheet for logging an art entry (upload slot, title, date, tag, notes) |
| `TextField` / `TextArea` | Form inputs |
| `Fab` | Cream "+" floating action button |
| `Link` | Inline underlined text link |
| `MonthLabel` | Timeline "July 2026" anchor label |
| `RiverBackground` | Animated watercolor gradient background (drifting washes, reduced-motion aware) |
| `TopNav` | Back chevron + date, right text action |
| `StatusBar` | Decorative iOS status bar for phone-frame demos |

## Screen templates (`src/templates/`)

`WelcomeScreen`, `TimelineScreen`, and `DetailScreen` compose the components
into the three designed screens. The Timeline is the flagship interaction:
entries float gently in place on the river canvas; tapping one expands it
slightly with a soft backdrop shadow, then the full detail sheet presents.
The FAB opens the entry-logging input sheet.

## Motion

| Token | Value | Use |
|---|---|---|
| `duration-fast` | 150ms | taps, hovers |
| `duration-medium` | 300ms | card expansion, menus |
| `duration-slow` | 500ms | sheet presentation |
| float | 6s | entry-card bob |
| river | 28–36s | background drift |

Easings: `standard cubic-bezier(0.2,0,0,1)`, `decelerate (0,0,0.2,1)`,
`spring (0.34,1.56,0.64,1)`. All looping motion honors
`prefers-reduced-motion`.

## Spacing

General rhythm is a 4/8px scale — 4, 8, 12, 16, 24, 32, 48, 64 — via
Tailwind's default spacing utilities.

## Iconography

[Lucide](https://lucide.dev) (`lucide-react`) stands in for SF Symbols,
which are licensed for Apple platforms only. Brand-specific marks should be
exported as SVGs from the Figma file.

## Fonts

The Figma file uses **Google Sans Flex**, which is proprietary to Google. Agreed
open-licensed stand-ins are bundled in `public/fonts/`:

- UI: **Figtree** (closest open match to Google Sans)
- Script titles: **Beth Ellen**

To swap in licensed Google Sans later, replace the font file and update
`--font-sans` in `src/styles/index.css` — components need no changes.

## Known approximations

Some values were sampled from screenshots rather than read from Figma variables
(marked `approx` in the token files): `cream`, `lavender`, and the four
`palette-*` colors. True them up in both `tokens/tokens.json` and
`src/styles/index.css` when exact values are available.

Artwork is never mocked in — the `Avatar` placeholder shows until a real
image is uploaded. The `--gradient-stroke` on the square label is also
approximated.

## Roadmap

- **Desktop**: minimal web app — river gradient moving in the background,
  art pieces floating on an infinite canvas, and a sleek side menu to add
  an art entry. (Mobile-first for now; desktop layout deliberately deferred.)
- True up approximated colors/gradient against Figma variables.
- Swap in licensed Google Sans files.
