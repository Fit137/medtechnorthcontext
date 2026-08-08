# Build prompt: image assets for The MedTech North Table

> Paste everything below the rule into Claude Code. It is self-contained and does not require reading the repo.
>
> **Why this is a code task rather than an image-generation task.** `docs/07-brand-and-voice.md` bans stock photography, icon fonts, stock icon libraries, blur and gradients, and requires drawn SVG. A generative image model cannot honour those reliably and will not set type accurately. Hand-authored SVG rendered through headless Chromium will.

---

Build the image assets for a small monthly dinner called **The MedTech North Table**, run by MedTech North in Mississauga. Output is **14 PNG files** at exact pixel sizes, rendered from hand-authored HTML and inline SVG.

## What the evening is, so the design has the right temperature

Twelve or so people who work in health sit around one table and have dinner. There is no programme, no agenda, no exercise, nothing to prepare and nothing to present. Nobody presents and nobody pitches. The only thing that has been worked on is who sits beside whom.

It is a dinner, not a conference. Every frame should feel like a warm invitation from a person. If a frame reads as an announcement from an organisation, it is wrong.

## Technical approach

1. Write one standalone HTML file per frame in `build/frames/`. All CSS inline in a `<style>` block. **No external requests of any kind:** no CDN fonts, no remote images, no script tags pulling anything. Everything self-contained
2. Render with Playwright and the pre-installed Chromium. Do not run `playwright install`; the browser is at `/opt/pw-browsers` and `PLAYWRIGHT_BROWSERS_PATH` is already set
3. For each frame: set the viewport to the exact target size, `device_scale_factor=2`, screenshot, then downsample to the exact target with Pillow using `LANCZOS`. This gives clean antialiased type at the delivered size
4. Write outputs to `assets/events/room-003-images/` with the filenames given below
5. Build a `contact-sheet.html` that shows all 14 at thumbnail size with their filenames, so the whole set can be eyeballed at once
6. Write `verify.py` that asserts: 14 files exist, each has exactly the right pixel dimensions, and none is under 20 KB (a blank frame compresses to almost nothing). Run it and report the output

## Fonts

Run `fc-list` first and confirm what is installed. Preferred stacks, in order:

- **Headline serif:** `"Bitstream Charter", "Charter", "DejaVu Serif", "Liberation Serif", serif`
- **Support sans:** `"Liberation Sans", "DejaVu Sans", sans-serif`

Charter is a genuine transitional serif and is the right choice if present. If none of the preferred serifs resolve, stop and tell me rather than silently rendering in a default.

Set headlines with tight leading (1.05 to 1.15), slight negative letter-spacing (around -0.015em), and ragged right. Never justify. Never centre a headline that runs to more than two lines.

## Design system

- **Palette, and nothing else.** Cream field `#F4EFE6`, ink `#16191d`, crimson `#c41230`
- **Crimson is the ask.** One emphasis per frame at most, and on several frames none at all. It marks the one thing that matters on that frame, never decoration
- **Type hierarchy:** at least 4:1 between headline and support copy. Headlines should be genuinely large, filling most of the frame on the typographic frames
- **Grid:** 8px. Margins of 72px on the 1080-wide frames, 96px top and bottom on the 1920-tall stories
- **Texture:** a very subtle paper grain is encouraged and is what stops this reading as corporate. Use an inline SVG `feTurbulence` at low opacity (around 0.04) as an overlay. This is grain, not blur
- **Line art:** hand-author the SVG paths. Slightly irregular, varying stroke widths between about 2.5 and 4 units, `stroke-linecap="round"`, `stroke-linejoin="round"`, `fill="none"`. It should look inked by a person, not traced by a machine. Do not use an illustration library

### Absolute bans

- No emoji, no icon fonts, no stock icon libraries, no stock photography
- No gaussian blur, no gradients, no drop shadows, no glows
- Nothing left at a default size or a default font
- **Never depict people, faces, hands, or a populated room.** Empty table, empty chairs, plates, glasses. This is an honesty constraint: an image implying attendance at a past event is a claim that cannot be evidenced
- **Never depict a camera, tripod, studio light, microphone or any recording equipment**
- **Never depict an activity.** No cards, boards, notebooks, pens, laptops or phones anywhere. The entire promise of the evening is that nothing is asked of anyone, and a pen on a table contradicts it

## The mark and the footer

The MedTech North mark is **an up-triangle and a down-triangle meeting at a horizontal line**. Draw it as SVG: two triangles, apex to apex across a full-width hairline, in ink. Keep it small and quiet.

**Footer on every frame except the Luma cover and carousel slide 1:** the mark at about 20px tall, then the words `MedTech North` in the sans at about 20px, both on the left. `Mississauga` in the same sans on the right. Baseline-aligned, sitting 48px above the bottom edge. Nothing else.

The Luma cover and carousel slide 1 carry the full series name at headline scale instead, so they take no footer.

## The 14 frames

Copy is **typeset exactly as written**. Do not rewrite, shorten, expand, or add a word. Where two lines are given, the second is support copy at a quarter of the headline size or smaller.

### Standalone frames

| File | Size | Copy |
|---|---|---|
| `luma-cover.png` | 1080 × 1080 | Headline: *The MedTech North Table*<br>Support: *A small dinner for people who work in health*<br>Third line, smaller: *Mississauga, Wednesday 26 August* |
| `announcement.png` | 1080 × 1350 | Headline: *One table. No agenda.*<br>Support: *Mississauga, Wednesday 26 August* |
| `rules.png` | 1080 × 1350 | Three lines, generous leading, no illustration: *Nobody presents.* / *Nobody pitches.* / *Nothing leaves the table.* |
| `seating.png` | 1080 × 1350 | Headline: *You don't pick your chair.*<br>Support: *That part I do, and I take a while over it.* |
| `story-announcement.png` | 1080 × 1920 | Same copy as `announcement.png` |
| `story-rules.png` | 1080 × 1920 | Same copy as `rules.png` |

**`luma-cover.png`** carries the drawn illustration: a long dining table in line work, three-quarter view, set for a shared meal with plates, water glasses, a jug, two or three serving dishes, folded napkins and two unlit candles. Chairs pulled in along both sides. Nothing on the table but the meal. Table occupies the lower two thirds, type sits in the upper third.

**`rules.png`** is the strongest frame in the set. Largest type of anything you build. No illustration at all. A single crimson hairline under the third line.

**`seating.png`** may carry one drawn chair in line work, small, low in the frame. Optional. If it clutters the type, leave it out.

On the two story frames, keep every piece of copy inside the middle 70% vertically, because platform interface chrome eats the top and bottom.

### Carousel, 8 frames, all 1080 × 1350

Filenames `carousel-1.png` through `carousel-8.png`.

| # | Copy |
|---|---|
| 1 | *The MedTech North Table.*<br>*A small dinner for people who work in health. Mississauga, Wednesday 26 August* |
| 2 | *A small table. People who work in health.* |
| 3 | *There's no programme. Nothing to prepare, nothing to present.* |
| 4 | *Nobody presents. Nobody pitches. Nothing leaves the table.* |
| 5 | *The only part I actually work on is who sits beside who.* |
| 6 | *A dentist and a pharmacist describe the same patient completely differently. Both of them are right.* |
| 7 | *Eat. Talk. Home by nine.* |
| 8 | *Wednesday 26 August, 6:30. Dinner's covered.*<br>*Link below* |

**Rhythm across the set matters as much as any single frame.** Frame 1 is heavy and carries the drawn table. Frames 2, 3, 7 and 8 are quiet, with type at maybe 40% of the largest size. **Frame 4 is the peak and should be the biggest type in the carousel.** Frames 5 and 6 sit in between. Someone swiping should feel it lift at 4 and settle after.

Crimson appears on frame 4 only, as a hairline, and on frame 8 on the words *Link below*. Nowhere else in the carousel.

## Brand handling

The series name appears in full on `luma-cover.png` and `carousel-1.png`, and as the small footer wordmark everywhere else. **Never twice in one frame. Never inside body copy.** The brand is the container, not the message.

## When you are done

Run `verify.py`, open the contact sheet, and tell me:

1. Which serif actually resolved
2. Any frame where the copy did not fit at the size the hierarchy demanded, and what you did about it
3. Anything you had to invent because this brief did not specify it

Do not commit anything. I will look first.
