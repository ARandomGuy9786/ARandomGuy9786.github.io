# Design system

Recorded from the built site (2026-09-26).

## World
Comic-book print, after the feel of an early-2000s underground hip-hop cover: ink outlines on everything,
halftone shading, narration caption boxes, flat fills. All artwork is original.

## Colour
| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | #FBFAF7 | #15131C | page ground |
| `--panel` | #FFFFFF | #211E2C | panels, cards |
| `--line` | #17141C | #CFC8DE | ink (turns to chalk at night) |
| `--sky` | #9C97B6 | #2F2946 | hero, cover bands, close |
| `--smoke` | #E2262B | same | primary action, smoke wipe |
| `--caption` | #F3C63F | same | caption boxes, the tag |
| `--hood` | #2F5A55 | same | panel art |
| `--steel` | #8FA7C4 | #5E7494 | panel art |

Light by default whatever the OS says; the toggle is the only way into dark, and it is remembered.

## Type
- Tag (hero name, nav mark only): Sedgwick Ave Display, gold with an ink stroke and offset shadow.
- Headings: Bowlby One, used sparingly.
- Body and UI: Schibsted Grotesk.

## Components
Caption box (`.cap`) for every eyebrow; ink-bordered buttons, no drop shadows; panels with a slight
tilt; ledger rows for calm sections; numbered strips only where the content is a real sequence.

## Motion
Ink-heavy and punchy: entrances land with a slight overshoot; ambient smoke and the nav head-nod are
the only slow things. Home: pinned hero, smoke wipe with chapter card, pinned sideways strip on desktop.
All of it is disabled under `prefers-reduced-motion`; content never depends on JavaScript.
