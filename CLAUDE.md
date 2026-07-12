# SB Design System — guide for AI-assisted work

React + Tailwind v4 design system for the **Sketchbook** app (a web app
that looks/feels like a native iOS app). Extracted from the Sketchbook
Figma file. When building screens or features, compose from these pieces
— do not restyle from scratch.

## Commands

- `npm run dev` — component gallery (all tokens/components/templates demoed)
- `npm run build` — typecheck + build

## Rules (from the design's owner)

1. **Never mock artwork in.** Use `Avatar` — it shows a neutral
   placeholder until a real image is supplied.
2. **Script font (Homemade Apple) is ONLY for journal-entry titles**
   ("The Toulippe") and entry captions (`Pill script`). All other
   headings use the sans (`--font-sans`, Figtree standing in for Google
   Sans).
3. **Palette dots** are plain circles ≤32px whose colors come from the
   uploaded artwork image — grey placeholders until an image exists.
4. **Use tokens, not raw values.** Colors/radii/shadows/motion live in
   `src/styles/index.css` (`@theme`) and mirror `tokens/tokens.json`
   (platform-neutral source of truth).
5. **Glass** is the `.glass` class (Figma Glass material: 3.4px frost,
   -45° rim light). Don't hand-roll backdrop blurs.
6. **Motion**: fast 150ms (taps) / medium 300ms (expansion, menus) /
   slow 500ms (sheets) / shimmer 2.4s; easings `--ease-standard`,
   `--ease-decelerate`, `--ease-spring`. Looping motion must honor
   `prefers-reduced-motion`.
7. **Spacing** is a 4/8px rhythm (Tailwind default scale).
8. **Icons**: lucide-react only (SF Symbols are Apple-licensed; not for web).

## Where things are

- `src/components/` — all components, exported from `index.ts`
- `src/templates/` — composed screens: `WelcomeScreen`, `TimelineScreen`,
  `DetailScreen` (mobile), `DesktopCanvas` (webapp canvas + Learn flow)
- `public/assets/` — brand assets (closed/open sketchbook SVGs, used by
  `Sketchbook`)
- `public/fonts/` — bundled Figtree + Homemade Apple

## Signature interactions (already built — reuse them)

- Entries **float** on the canvas (`.float-gentle`, staggered delays)
- Tap an entry → slight **expand + backdrop shadow** → detail sheet presents
- **Learn flow**: `HistoryCard` (Learn) → `Shimmer` on the artwork +
  `StatusCard` ("Observing your brush strokes…") → `HistoryCard`
  ("About your work") → Save appends history to the entry (`InfoCard
  history` prop)

## Known approximations (true up if exact values become available)

`cream`, `canvas`, palette demo colors, `--gradient-stroke`. Fonts are
open stand-ins for proprietary Google Sans Flex — swap via `--font-sans`.
