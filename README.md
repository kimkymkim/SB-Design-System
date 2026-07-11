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
| `Pill` | Date/tag labels (`outline`) and the cream "Add work" pill (`cream`) |
| `PaletteDots` | Overlapping artwork-palette dot stack (vertical or horizontal) |
| `EntryCard` | Timeline artwork card: photo, scrim, date + tag pills, palette dots |
| `FloatingSheet` / `SheetHeader` | Welcome modal sheet |
| `InfoCard` | Artwork detail card: script title, Created/Notes/Palette rows |
| `LearnCard` | "Art History in my art" suggestion card with Learn action |
| `Fab` | Cream "+" floating action button |
| `TopNav` | Back chevron + date, right text action |
| `StatusBar` | Decorative iOS status bar for phone-frame demos |

## Fonts

The Figma file uses **Google Sans Flex**, which is proprietary to Google. Agreed
open-licensed stand-ins are bundled in `public/fonts/`:

- UI: **DM Sans** (closest open match)
- Script titles: **Beth Ellen**

To swap in licensed Google Sans later, replace the font file and update
`--font-sans` in `src/styles/index.css` — components need no changes.

## Known approximations

Some values were sampled from screenshots rather than read from Figma variables
(marked `approx` in the token files): `cream`, `lavender`, and the four
`palette-*` colors. True them up in both `tokens/tokens.json` and
`src/styles/index.css` when exact values are available.

Artwork images in the gallery are generated SVG placeholders — the real app
supplies photos.
