# Build North cover images

Two Luma covers for Build North, MedTech North Session #3, 16 September 2026.

| File | Use |
|---|---|
| `cover-light.png` | Cream ground. Default. Sits better against Luma's own light page chrome |
| `cover-dark.png` | Ink ground. Stronger in a crowded feed and in dark mode |

**3200 x 1600, which is 1600 x 800 at 2x.** Luma renders the cover close to 2:1 on the event page and crops toward the centre in feeds and calendar listings, so everything that matters sits inside the middle square. The crimson edge bars are the part that gets cropped, which is fine because the leaf carries the Canadian read on its own.

## Why these are built rather than generated

An image model returns a flag. A cover needs a title, a date and a hierarchy, and it needs the type set exactly rather than approximated, so these are HTML rendered through headless Chromium.

**One red only, `#c41230`.** Flag red is roughly `#EF3340` and putting both in one frame looks like a printing error. The shape carries the country, the colour carries MedTech North.

## Regenerating

```
python3 gen.py
```

Needs headless Chromium and Pillow. Edit the `wide`, `light` and `dark` dicts in `gen.py` to change size, colour or spacing. Type is Bitstream Charter with Georgia as the fallback. Chromium's viewport runs 87px shorter than the window, so the page renders into a taller viewport and the script crops back to an exact 2:1.
