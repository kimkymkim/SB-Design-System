# Brand assets

Upload the two key sketchbook exports from Figma here (PNG @2x or SVG):

| File | What it is |
|---|---|
| `sketchbook-closed.png` | Closed red sketchbook with stickers (welcome screen 1) |
| `sketchbook-open.png` | Open sketchbook spread (welcome screen 2) |

The `Sketchbook` component picks them up via its `closedSrc` / `openSrc`
props (`/assets/sketchbook-closed.png`, `/assets/sketchbook-open.png`) and
animates between the two states. Placeholder art renders until these files
exist.
