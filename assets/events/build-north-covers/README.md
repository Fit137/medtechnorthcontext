# Build North cover images

For Build North, MedTech North Session #3, Wednesday 30 September 2026.

## Luma wants a square

**Luma event covers are 1:1, minimum 800 x 800**, and Luma rounds the corners when it renders them, so nothing that matters goes near a corner. Source: [Event Cover Images, Luma Help](https://help.luma.com/p/event-cover-images).

A 2:1 file gets centre-cropped to a square in the editor, which is what sliced "BUILD NORTH" into "UILD NORT" on the first upload.

| File | Ratio | Pixels | Use |
|---|---|---|---|
| `cover-light.png` | 1:1 | 2400 x 2400 | **The Luma cover.** Default |
| `cover-dark.png` | 1:1 | 2400 x 2400 | The Luma cover in ink. Stronger in a crowded feed |
| `cover-wide-light.png` | 2:1 | 3200 x 1600 | Link previews, LinkedIn, anywhere landscape |
| `cover-wide-dark.png` | 2:1 | 3200 x 1600 | Same, in ink |

## What is on them

The headline and two marks, and nothing else. Type set small enough to need squinting reads as clutter at thumbnail size and Luma already prints the date, the time and the city next to the image, so putting them in the artwork twice buys nothing.

- **The maple leaf** and the crimson bars carry the country.
- **The seam mark** sits under the headline: an up-triangle and a down-triangle meeting at a line, which is the MedTech North mark and the structural rule the brand uses everywhere.

## Why these are built rather than generated

An image model returns a flag. A cover needs a headline set exactly, in the right typeface, at a known size, inside a known crop.

**One red only, `#c41230`.** Flag red is roughly `#EF3340` and the two together look like a printing error. The shape carries the country, the colour carries MedTech North.

## Regenerating

```
python3 gen.py
```

Needs headless Chromium and Pillow. All four files come out of one run. The date is not on the artwork any more, so a date change no longer needs a re-render. To change size, colour or spacing, edit the `SQ`, `WIDE`, `LIGHT` and `DARK` dicts at the bottom of `gen.py`. Type is Bitstream Charter with Georgia as the fallback. Chromium's viewport runs 87px shorter than the window, so each page renders into a taller viewport and the script crops back to exact dimensions.
