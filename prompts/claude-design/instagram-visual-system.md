# Instagram visual system and build brief

> **For Claude Design.** Builds every image, carousel and video for the MedTech North Instagram account.
> Copy source of truth: `assets/social/instagram-strategy-and-calendar.md` section 9. **Paste that section together with this file.** Nothing here restates copy, because two copies of the same sentence in one repo drift within a month.
> Calendar and asset IDs: same file, section 8.
> Decision record: `decisions/ADR-025-instagram-as-a-channel.md`.

---

## 0. Before you build anything

### Where this gets built

**In the same Claude Design project as the partner deck.** Not a new project.

`assets/design/design-system-tokens.md` is unambiguous about why, and it is the single most expensive mistake available here. `--font-display` and `--font-ui` are not defined in any slide. The project supplies them, along with sixteen embedded woff2 files that no prompt can carry. A fresh project starts from Claude Design's own defaults, the type silently falls back, and every asset looks like a different brand. That already happened once, to the first Luma cover.

**Anchor to a named surface, not to adjectives.** For carousels and stills, the reference is the six-frame LinkedIn carousel built from `prompts/claude-design/table-linkedin-carousel.md`. For 3D objects, the reference is the partner deck's hero renders. Say "match frame 3 of the Table carousel" rather than describing a look.

### The one thing this system does that the others do not

Every previous asset set in this repo was built one surface at a time. **An Instagram grid is a single surface.** Nine tiles are seen together, before any of them is read, and a visitor decides from that view alone whether the account is one brand or six people posting. Section 5 is not a nice-to-have, it is the acceptance criterion the others do not have.

---

## 1. The three-colour lock

Three colours, three fixed roles, no fourth. Grades of a role are permitted. A new hue is not.

| Role | Name | Hex | Permitted grades |
|---|---|---|---|
| **Background** | Paper | `#ffffff` | `#e9edf1` |
| **Primary** | Ink | `#16191d` | `#49515c`, `#8a9299` |
| **Accent** | Red | `#c41230` | none |

**One permitted inversion.** On video surfaces the field is ink and the type is paper. That is the two roles swapping places, not a fourth colour. Red never swaps, never grades, never becomes a background.

**Red is governed by meaning, not by composition.** `docs/07-brand-and-voice.md`: red is the ask, actions only. If red is on a frame, something can be acted on. A quote frame with no ask gets no red, however much the composition wants it. Maximum one red element per frame.

**Struck, permanently:** cream `#F4EFE6`, any warm neutral, any beige, any gradient between two of the three roles. The system is cool. `assets/design/design-system-tokens.md` records why.

---

## 2. The two-font lock

| Token | Job | Never used for |
|---|---|---|
| `--font-display` | Headlines. Shouts, stops the scroll | Body, footers, page numbers, handles, sourcing lines |
| `--font-ui` | Everything else. Calm, plain, invisible | Any headline, at any size |

**Never a third.** Never name or substitute a typeface: reference the token and let the project resolve it.

**Minimum 4:1 size ratio between headline and support on every frame.** If the support copy is competing for attention, the headline is too small, not the support too large.

**Type scale, 1080 × 1350.** All values snap to the 8px grid.

| Level | Size / leading | Token |
|---|---|---|
| Peak headline | 132 / 1.05 | display |
| Standard headline | 92 / 1.10 | display |
| Quiet headline | 64 / 1.15 | display |
| Support | 32 / 1.35 | ui |
| Rail, footer, page number, source | 22 / 1.00, tracking .06em | ui |

On 1080 × 1920 surfaces, multiply every size by 1.15 and re-snap to 8.

---

## 3. The layout lock

One template. Decided once, never re-decided. Video 3's third step, and the reason the account can produce a post in minutes rather than an afternoon.

### 1080 × 1350, feed

Eight-pixel grid throughout. Nothing sits off it.

| Zone | Band | Contents | Alignment |
|---|---|---|---|
| **Rail** | y 80 to 152 | Series eyebrow, `--font-ui` 22, ink at 55% | Left, x 120 |
| **Headline** | y 220 to 760 | `--font-display`, ragged right, max width 840 | Left, x 120 |
| **Content** | y 800 to 1140 | Support copy, or the object, or data | Left, x 120 |
| **Footer** | y 1198 to 1270 | Mark and wordmark left at x 120, 32px tall. Page number right, baseline aligned, right edge x 960 | Split |

**Two margins, deliberately different.**

- **Geometry and objects: 80px.** Full bleed permitted where the object is the frame.
- **Type: 120px.** Never less. The extra 40px exists because Instagram crops profile-grid tiles to 3:4, which takes about 34px off each side of a 4:5 image. Type at an 80px margin gets clipped in the grid view. Type at 120px does not.

### 1080 × 1920, reels and stories

Same zones, shifted into the platform's safe area.

| Zone | Band |
|---|---|
| Rail | y 340 to 420 |
| Headline | y 460 to 1080 |
| Content | y 1120 to 1360 |
| Footer | y 1380 to 1448 |

**Hard safe zone: all copy inside x 120 to 900, y 320 to 1440.** The right rail from x 900 carries Instagram's own buttons. The band below y 1440 carries the caption and handle.

**Cover-critical band: y 420 to 1440.** A reel's first frame is also its grid tile, and the grid crops it to 3:4 and sometimes to 1:1. Anything that must survive the grid lives inside that band.

---

## 4. The eight templates

Build each once as a component. Every asset in section 7 is one of these with copy swapped.

| ID | Template | Canvas | Notes |
|---|---|---|---|
| `T-A` | Carousel cover | 1080 × 1350 | Peak headline. No page number. Carries the object where one is specified |
| `T-B` | Carousel interior | 1080 × 1350 | Standard or quiet headline. Page number and swipe chevron in the footer |
| `T-C` | Carousel close | 1080 × 1350 | The ask. The one frame in a set permitted red, on the action line |
| `T-D` | Quote frame | 1080 × 1350 | Type only. No object, no rule, no ornament. Composition carries it |
| `T-E` | Data frame | 1080 × 1350 | Numerals in `--font-display` at peak scale, label in `--font-ui` beneath. Sourcing line in the footer rail, left of the wordmark |
| `T-F` | Reel cover | 1080 × 1920 | First frame of a video. Doubles as the grid tile. Cover-critical band applies |
| `T-G` | Burned-in caption | 1080 × 1920 | See section 6c |
| `T-H` | Reel end card | 1080 × 1920 | Two seconds. Mark, wordmark, one line. Never a call to action longer than four words |

**`T-A` is the template that matters most.** Video 3's whole argument is that the other slides are irrelevant if the cover does not stop the scroll, and that a carousel fails on presentation long before it fails on content. Give `T-A` the largest type, the strongest single object, and the most whitespace of anything in this system.

---

## 5. The grid

Nine tiles are one composition. Instagram fills newest first, top left, left to right.

**Four tile species,** and every asset is exactly one of them.

| Species | What it is | Field |
|---|---|---|
| **P**, portrait | Format A reel covers. Ali to camera | Photographic, graded cool |
| **H**, hands | Format C reel covers. Top-down, hands and a document | Photographic, graded cool |
| **O**, object | Format B reel covers. A 3D object | Ink |
| **T**, typographic | Carousel covers and stills | Paper |

**The rule, and it is the whole of section 5: no two tiles of the same species may touch, horizontally or vertically.**

The calendar in section 8 of the strategy file already satisfies this. After the first nine posts the grid reads:

| | | |
|---|---|---|
| `R-07` **P** | `R-06` **H** | `R-05` **O** |
| `S-01` **T** | `R-04` **P** | `R-03` **H** |
| `R-02` **O** | `C-01` **T** | `R-01` **P** |

Portraits land on the diagonal, objects on the opposite corners, and no species touches itself in any direction. **Verify this before every post, not after.** Reordering the calendar without re-running the check is the way the grid quietly falls apart in week four.

**Grading the photographic tiles is what holds the grid together.** P and H tiles are real footage and will otherwise look like a different account from the O and T tiles. Grade every one of them to the ink family: cool, desaturated, no warm cast, no filter, no vignette, blacks landing near `#16191d` rather than at zero. The title lockup burned onto them uses the same two tokens as everything else.

---

## 6. Motion

### 6a. The reconciliation, stated once

`docs/07-brand-and-voice.md` sets the motion register as institutional: objects hold, entry 300 to 500ms, restraint is the message. Instagram needs a hook inside one second. Those look incompatible and are not.

**The object's motion stays institutional. The edit does not.**

Frame one is fully composed and the object is already in motion when the video starts. No fade from black, no build-in, no logo sting, no title card, nothing that spends the first second arriving. The restraint lives in *how* the object moves, never in *when* it starts.

### 6b. Permitted and banned motion

Derived from the craft bans in `docs/07`, which forbid blur and gradients as effects and therefore rule out most of the standard motion-graphics vocabulary.

**Permitted:** geometry drawing on along its own path · type entering on an 8 to 16px rise with opacity · parallax between background field, midground structure and foreground type · single-axis object rotation · contact shadow translating with its object as drawn geometry · a rule extending · a numeral landing on its final value.

**Banned:** Ken Burns zoom or pan over a raster · cross-dissolve · any blur transition · glow · particles · bounce, elastic or overshoot easing · letter-by-letter typewriter · anything that reads as a template preset.

**Easing and timing:** strong ease-out, 300 to 500ms per element, grouped elements staggered 40 to 60ms, exits at half the entry duration. Carried unchanged from the website motion rules.

**Loop rules for every Format B asset:** 8 to 15 seconds · last frame identical to the first, seamlessly · legible with sound off, always · 30fps · H.264 · 1080 × 1920. Audio is chosen at post time and the design never depends on it.

**One light source across everything.** Primary from upper left, soft fill lower right, contact shadows drawn as geometry rather than blurred. This is what makes a grid of unrelated objects read as one photographed set, and it is the same rule the website already runs.

### 6c. `T-G`, burned-in captions

Most of these are watched muted.

- `--font-ui`, 44px, paper on a solid ink plate at 88% opacity, never on a blur
- Plate corners square. No rounding, no shadow
- Two lines maximum, centred horizontally, baseline at y 1280
- One phrase per card, cut on the breath, never mid-clause
- Never overlaps the speaker's face or the artifact in a `H` tile

### 6d. Video built from the still frames

The brief asks for video made from the images themselves. The route, given the bans above.

Build every still as **three separated layers** rather than one flat frame: background field, midground structure and object, foreground type and footer. Then animate only the relationships between them.

- Foreground type rises 12px with opacity over 400ms, staggered 50ms per line
- Midground object parallaxes 24px against the background across the full duration
- Any rule or connecting line draws on along its own path rather than fading in
- Background field never moves

That produces an 8 to 12 second asset from a static composition without a single banned effect, and it means the still and the video are the same artwork rather than two builds.

---

## 7. What to build

### 7a. Profile assets

| ID | Asset | Spec |
|---|---|---|
| `IG-M-01` | Profile picture | 320 × 320. The mark alone: up-triangle and down-triangle meeting at a line. Ink on paper. **Test it at 32px before delivering.** At that size it is a smudge or it is a mark, and there is no middle |
| `IG-M-02` | Highlight cover, The Table | 1080 × 1920, centre-safe within a 320px circle. Drawn table plane, ink field |
| `IG-M-03` | Highlight cover, The Rules | Same. A single drawn rule across the seam |
| `IG-M-04` | Highlight cover, Apply | Same. The up-triangle alone |

The three highlight covers ship now and sit unused until week 5. They are cheap inside this batch and expensive as a one-off later.

### 7b. Carousels, eight sets of six

**`IG-C-01` is the reference build. Get it right, then the other seven are the same template with copy swapped.**

`IG-C-01`, what the table is:

- Slide 1, `T-A`. Peak headline, 132px, three short lines stacked with generous leading. No object, no illustration. This is the strongest frame in the set and the account's first carousel cover, so it sets the standard for the other seven
- Slides 2 to 5, `T-B`. Standard headline at 92px, except slide 4, which takes 112px and is the interior peak
- Slide 6, `T-C`. Quiet headline 64px, the action line in red, page number, no chevron
- Object: slide 1 only, and only if the type does not already fill the frame. `H4`, the table seen top down, at 30% opacity behind the headline. If it competes, drop it. Type wins

The remaining seven, treatment only. Copy is in section 9 of the strategy file and is typeset exactly as written, with no word rewritten, shortened or added.

| Set | Peak slide | Object | Note |
|---|---|---|---|
| `IG-C-02` why there is no programme | 1 and 3 | none | Typographic throughout. The quietest set |
| `IG-C-03` what patients get wrong | 2, which carries the question | none | Slide 2 sets the question in quote marks at peak scale. It is the series' visual signature and recurs |
| `IG-C-04` rules of the table | 4 | none | Four rules on four slides at identical scale. Deliberately monotonous. The repetition is the argument |
| `IG-C-05` the 8th largest market | 1 | `H2`, magnitude against delay | `T-E` on slides 1 to 4. Numerals inside the forms, never beside them. **Sourcing line on slide 6, mandatory** |
| `IG-C-06` how a seat works | 1 | `H7`, four doors | Slides 2, 3 and 4 take one door each at identical weight. **No door may read as more prestigious than another.** That includes size, position and colour |
| `IG-C-07` Table #4 | 1 | drawn long table, empty | Holds `[DATE]`. Mark the placeholder visually distinct so it cannot ship unfilled |
| `IG-C-08` what happens at a table | 1 | drawn long table, empty | Warmest set in tone, coolest in palette. No warm colour, ever |

### 7c. Stills, seven

| ID | Template | Object | Note |
|---|---|---|---|
| `IG-S-01` | `T-D` | none | Three lines, generous leading, largest type of any still. One thin red rule under the last line is the only permitted red, and only because the rules are the ask |
| `IG-S-02` | `T-D` | none | Two words. Peak scale. The most restrained frame in the set |
| `IG-S-03` | `T-D` | none | Long quote, so it drops to quiet headline scale and takes the full content zone |
| `IG-S-04` | `T-D` | `H4`, table top down at 40% | Composition, not headcount. **No seat count rendered, no seats countable.** Draw the table plane and interleaved markers without a resolvable total |
| `IG-S-05` | `T-E` | `H2` | Sourcing line mandatory |
| `IG-S-06` | `T-D` | none | Four words |
| `IG-S-07` | `T-D` | none | Holds `[DATE]` |

### 7d. Format B object loops, three at launch

These reuse what the website already has. Nothing here is built from nothing.

| ID | Source object | Where it currently lives | Motion, 9:16 |
|---|---|---|---|
| `IG-R-02` | The compression, `/builders` hero | `assets/website/website-design-concepts.md` §4 | The long track runs the full height of the frame and collapses to a single point in the lower third. Vertical suits it better than the website's horizontal. 12s |
| `IG-R-05` | Table for twelve, Three.js | `design-refs/table-standalone.html`, **website repo, not this one** | Re-render vertical at 1080 × 1920, alpha off, ink field. Keep the entrance sequence and the ambient drift. Drop the pointer parallax, which has no meaning on a video. 15s |
| `IG-R-09` | `H1`, the table assembling | `website-design-concepts.md` §4 | Markers arrive from off-canvas in the four types and settle into balance. Runs about 2.5s on the website, so slow it to 8s and hold on the settled state for the last 3. 11s |

**Six more objects are available and reserved** for weeks 3 to 6 once the pattern read says whether Format B won: `H2` magnitude against delay, `H3` the timeline, `H4` the table top down, `H6` three states, and `/clinicians` the frozen design. `/policy`, the thirteen jurisdictions, is not used: it is a good object and it is off-topic for this account's niche.

**Two constraints on the four group markers, both carried and both non-negotiable.** Distinguishable by shape and weight, never by colour alone, which is an accessibility rule and a brand rule at once. And no marker may be rendered larger, brighter or more central than another, because `CLAUDE.md` rule 6 forbids ranking the segments and a size difference is a ranking.

### 7e. Format A and C covers

You are not shooting these. Ali is. What you build is the treatment applied to his footage.

| Deliverable | Spec |
|---|---|
| Grade preset | Cool, desaturated, no warm cast, blacks landing near `#16191d`. One preset, applied to every P and H tile, no per-clip adjustment |
| Title lockup | The on-screen text named in each script. `--font-display`, paper, 96px, two lines maximum, top left at x 120 y 460, inside the cover-critical band |
| `T-G` caption style | Section 6c |
| `T-H` end card | Two seconds. Mark and wordmark centred, one line beneath in `--font-ui` at 32px. Never longer than four words |

---

## 8. Export

One frame per artboard, individually exportable. No shared canvas, no collage, no contact sheet.

```
IG-{TYPE}-{NN}[-{SLIDE}].{ext}

IG-C-01-1.png      carousel 1, slide 1
IG-C-01-6.png      carousel 1, slide 6
IG-S-04.png        still 4
IG-R-05.mp4        object loop 5
IG-R-05-cover.png  its grid tile, extracted from frame 1
IG-M-01.png        profile mark
```

**Every video ships with its cover frame as a separate PNG.** Instagram lets you pick a cover from the clip and the frame it picks is never the one you designed.

PNG at 1x for stills and carousels, 1080 wide. H.264 MP4 for video, 1080 × 1920, 30fps.

---

## 9. Craft bans

Absolute, carried from `docs/07-brand-and-voice.md`, and three additions specific to this platform.

- No emoji. No Unicode symbols. No icon fonts. No stock icon libraries. Anywhere, at any size, for any purpose. Every mark is drawn SVG
- No CSS or raster blur as a design effect. Depth comes from size, opacity, stroke weight and layering
- No gradients. No drop shadows. Contact shadows are drawn geometry
- No stock photography. No images of patients, clinicians, handshakes, boardrooms or laboratories
- **No image containing a guest, a crowd, a populated table or anything implying attendance.** `CLAUDE.md` rule 3. This is the ban most likely to be broken by accident, because a full table is the obvious image for a dinner brand and it is a claim that cannot be evidenced
- No camera, tripod, studio light or recording equipment in any frame. That side of the operation is private
- No pens, cards, notebooks, laptops or devices on a depicted table. The promise is that nothing is asked of anyone, and an object implying a task contradicts it
- No element left at a default size. Nothing that looks like a glyph at 200% zoom
- **New: no countdown, no timer, no "spots remaining", no progress bar toward a full room.** Scarcity is a property of the format and never a pressure device
- **New: no seat count rendered anywhere, and no arrangement of seats a viewer can count.** `data/verified-stats.md` forbids a fixed seat count. Earlier assets in `assets/social/launch-campaign.md` render forty seats and are superseded
- **New: no trending visual template.** If a layout is recognisable as belonging to a format currently circulating on the platform, it is wrong for this account regardless of how well it performs

---

## 10. Acceptance test

Run all eleven before delivering. Rebuild anything that fails.

1. **Project test.** Built in the partner deck's Claude Design project. `--font-display` and `--font-ui` resolve to the real faces, not a fallback
2. **Three-colour test.** Sample every frame. Exactly three roles present. No cream, no warm neutral, no fourth hue
3. **Red test.** Red appears at most once per frame, and only where something can be acted on
4. **Two-font test.** No third typeface. No headline in `--font-ui`. No footer in `--font-display`. Every frame clears the 4:1 ratio
5. **Grid test.** Lay the first nine tiles in the section 5 arrangement. No two tiles of the same species touch. The nine read as one account
6. **Crop test.** Every 4:5 frame centre-cropped to 3:4, and every reel cover cropped to 3:4 and to 1:1. No type clipped in any of the three
7. **Thumbnail test.** Every carousel cover at 150px wide. The headline is still readable. If it is not, the cover has failed the only job video 3 says it has
8. **Mute test.** Every video with sound off. The argument survives
9. **Light test.** Every object shares one light direction and the set reads as photographed together
10. **Claim test.** Search every frame for a headcount, a seat count, a countable arrangement of seats, a guest, a crowd, a full table, a sponsorship term, and any figure not on `data/verified-stats.md`. Zero results on all seven
11. **Balance test.** Wherever the four group markers appear together, no marker is larger, brighter or more central than another

---

## 11. Two things to check before starting

**`design-refs/table-standalone.html` is not in this repository.** It is referenced by `prompts/claude-code/3d-table-integration.md` and lives in the website repo, `Fit137/MedTechNorthlandingpage`. `IG-R-05` depends on it. Get the file, or rebuild the table for twelve from `H1` in `website-design-concepts.md` and say which you did.

**`assets/social/launch-campaign.md` is superseded for this channel and partly unusable anywhere.** It is a twelve-frame LinkedIn kit, its master format is right and its strategy is not, and several of its frames render a forty-seat table and use partner tier language. Do not lift frames from it. It is listed here so it is not discovered mid-build and mistaken for a starting point.
