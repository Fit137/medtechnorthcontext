# MedTech North — Design Brief

**Surface:** marketing site rebuild. One homepage, four ICP routes, one format page.
**Builder:** Claude Code, working in the live Next.js repo.
**Status:** executable. Read Part 6 first if you have repo access, because it lists what to verify before building.

---

## Part 0 — Spec at a glance

| | |
|---|---|
| **What** | Rebuild the single-page marketing site as a homepage plus four audience routes |
| **For whom** | One audience decides: a practising clinician deciding whether to accept an invitation. Three others are served: a founder deciding whether to apply, a public sector lead deciding whether it is safe to attend, a student deciding whether they belong |
| **Register** | **Institutional.** Objects hold. Entry 300 to 500 ms. Restraint is the message |
| **Spine** | Canada has every part except the room, and the design must make that missing room feel like a physical absence before a word is read |
| **Signature moment** | **The composing table.** Forty seats arrive unsorted and physically sort into balance. On an ICP route the same table appears with that group's seats lit |
| **Effort budget** | 40% signature moment · 40% everything else · 20% states and edges |
| **Definition of done** | Ships on the existing stack. Adds one dependency at most. Header and footer match the live site exactly. Passes AA. A first-time visitor can state what this is within eight seconds. No route currently in production is modified until explicitly approved |

**Why Institutional and not Announcement.** The audience is senior clinicians and public sector leaders. A physician withdrew from the last event on learning the venue was residential, which is a legitimacy judgment made in under a second. Restraint reads as seriousness to this audience; spectacle reads as a pitch. The signature moment is the one place spectacle is earned, and it is earned because the motion is the argument rather than decoration.

---

## Part 1 — The system

### Palette

```css
--mn-red:   #c41230;   /* the ask: the single action on a surface, and nothing else */
--mn-ink:   #16191d;   /* the argument: body copy, dark stages, structure */
--mn-mist:  #b9cedd;   /* their gain: anything that is a benefit to the visitor */
--mn-gray:  #6b7178;   /* the inherited: the current situation, the alternative, the deprecated */
```

**The meaning mapping is the most useful paragraph here.** When you hit a case this brief did not specify, and you will within the hour, resolve it against meaning rather than looks. A "what you get" list is mist. A cost of the status quo is gray. A button is red, and red appears nowhere that is not an action.

**Consequence to hold:** red never appears in the four group markers, in data, or in decoration. If red is on screen, something can be clicked.

### Type

- **Display:** DM Sans, weights 300 to 500.
- **UI and body:** Inter, weights 300 to 500.
- **Scale:** use the modular scale already in `globals.css`. Add no new step.
- **Measure:** 60 to 75 characters. Set `max-width: 68ch` on body passages.
- **Numerals:** `font-variant-numeric: tabular-nums` on every figure, without exception. A number that reflows mid count-up destroys trust in the number.
- **Headlines are claims, not labels.** "Canada invents faster than it adopts" beats "About Us".

### Space and grid

- Spacing scale from the codebase only. Inventing a seventh value is how a design drifts.
- 12 columns, max-width 1200px, gutter from the existing token.
- Standard section padding from the codebase. Two exceptions are permitted to break it: the hero and the signature surface.

### Motion vocabulary

- **Easing:** `cubic-bezier(.22,1,.36,1)` for everything on the site.
- **Durations:** micro 140 ms · hover 180 ms · entry 400 ms · signature sequence 2,400 ms · ambient loop 11 s.
- **Stagger:** 90 ms between siblings.
- **Ambient amplitude:** ±0.4° rotation, 3 px translation. More than that reads as broken rather than alive.
- **Three motion sources, never mixed on one element.** Scroll-driven must be reversible and must never hijack the scroll. Time-driven covers ambient and entry. Pointer-driven covers parallax and hover.
- **Coalesce** every continuous animation into a single `requestAnimationFrame` loop. Never animate from a raw pointer or scroll handler.
- **`will-change`** applied on interaction start, released on end. Never on a permanently mounted element.
- **Animate `transform` and `opacity` only.** No exceptions are granted in this brief.

### The recurring motif — the four group markers

Four shapes, already shipping in the repo's visual library: **gear** for founders and operators, **medical cross** for clinicians and researchers, **rising bars** for capital and corporate, **columns** for policy and government.

The codebase carries a comment stating these are distinguished **by shape, never by colour alone.** That is an accessibility rule and a brand rule in one. Honour it everywhere.

**Geometry, specified once:** 24 px on canvases, 16 px in chips, 12 px in the footer. Unlit state is `--mn-gray` at 40% opacity. Lit state is full `--mn-ink`, or `--mn-mist` when the marker represents a gain to the reader.

They appear in four places and are never explained: the hero table, the composition surface, the ICP page headers, and the footer. By the third appearance a visitor reads them without a legend.

### The 3D construction — reuse, do not rebuild

The repo already ships a 3D card (`member-card-3d.css` plus a pointer-parallax hook). **Reuse its physics verbatim.** The new work inherits the product's feel for free, and this is the single highest-leverage instruction in the brief.

```
stage   → perspective: 1500px
rig     → transform-style: preserve-3d;
          transform: rotateX(8deg) rotateY(-22deg);
          transition: transform .18s cubic-bezier(.22,1,.36,1)
face    → translateZ(var(--depth))
edge    → translateZ(calc(var(--depth) * -1))
side-r  → rotateY(90deg) translateZ(var(--depth)); transform-origin: right
side-b  → rotateX(-90deg) translateZ(var(--depth)); transform-origin: bottom
```

```js
const nx = (e.clientX - r.left) / r.width  - 0.5;
const ny = (e.clientY - r.top)  / r.height - 0.5;
rig.style.transform = BASE + ` rotateY(${nx * 18}deg) rotateX(${-ny * 14}deg)`;
```

Add a tracking class on `pointerenter` to disable the transition while the pointer drives it. Remove it on `pointerleave` and reset to base so it eases home.

**Why 3D earns its place here:** the table has real structure worth seeing from an angle, depth encodes who sits opposite whom, and the product already ships a 3D component so consistency demands it. This is not flat content tilted for effect.

**No 3D libraries for interface work.** CSS 3D plus `rAF` covers everything specified below. A WebGL context costs crisp text, and text is what most of these surfaces carry.

---

## Part 2 — The surfaces

### H1 · Hero

**Purpose.** State what this is in one screenful, and let the table establish itself as the object the whole site is about.

**Content.** Headline, support passage and single action from `01-sitemap-and-content.md` §H1.

**Design brief**

- **Stage.** `--mn-ink`. Light reads from upper left. This is the darkest surface on the page and sets the contrast the rest of the site relaxes from.
- **Device.** The composed table at rest. Forty seats in the four markers, already in balance, seen at the base rig angle.
- **Entry.** Headline rises 12 px over 400 ms. Support follows at 90 ms stagger. Action last. Table fades from 0 to 1 opacity over 600 ms, beginning at 200 ms. Total under 1,200 ms.
- **Ambient.** The rig drifts ±0.4° on an 11 s loop. Nothing else on this surface moves.
- **Interaction.** Pointer parallax on the rig, per the construction above. Keyboard: no interaction, the table is decorative here and carries `aria-hidden="true"` with the composition stated in adjacent text.
- **Restraint.** Do not animate individual seats on this surface. The sorting belongs to H4 and using it here spends the signature moment before it has been set up.
- **States.** Loading: the stage renders at final dimensions with the table absent, so nothing shifts. No skeleton.
- **Responsive.** Below 900 px the table moves above the headline and reduces to 20 seats at the same ratio. Pointer parallax off, ambient loop retained.

### H2 · The paradox

**Purpose.** Make the size of the sector and the length of the delay felt as one disproportion.

**Content.** §H2, including the sourcing line.

**Design brief**

- **Stage.** Light surface. First relief from the ink hero.
- **Device.** **The teardown.** Four figures print in sequence with tabular numerals counting up over 900 ms each, 90 ms apart. A deliberate 600 ms pause. Then one line where a number should be: *more than a year to reach a patient.* The pause is the argument.
- **Entry.** Scroll-driven, triggered once at 40% viewport intersection. Reversible on scroll-back only in the sense that it does not replay.
- **Ambient.** None. This surface is still.
- **Interaction.** None. Sourcing line is a static footnote, not a tooltip.
- **Restraint.** No parallax, no card lift, no hover states anywhere on this surface. The figures are the entire content and motion competes with them.
- **States.** Reduced motion: all figures render at final value, the pause becomes vertical space.
- **Responsive.** Figures stack single column below 700 px. Count-up retained.

### H3 · Why now

**Purpose.** Date the urgency to something recent and verifiable.

**Content.** §H3.

**Design brief**

- **Stage.** Light, continuous with H2.
- **Device.** **The ribbon.** A horizontal timeline receding slightly into Z. Three markers: 11 Dec 2025, 16 Dec 2025, 15 Jun 2026. Only the third is lit in `--mn-mist`, because it is the one that changed the reader's situation.
- **Entry.** The ribbon draws left to right over 800 ms, scroll-triggered. Markers land at 90 ms intervals with a 100 ms impact scale from 0.94 to 1.
- **Ambient.** None.
- **Interaction.** Hover a marker to raise its label. Touch: labels visible by default below 900 px. Keyboard: markers are not focusable, labels are in the DOM.
- **States.** Reduced motion: ribbon and all three labels render resolved.
- **Responsive.** Below 700 px the ribbon becomes vertical, top to bottom, and loses the Z recession.

### H4 · The room — **signature moment**

**Purpose.** Show that the room is composed rather than filled, in one gesture, without copy.

**Content.** §H4. Copy is deliberately minimal here because the device carries the meaning.

**Design brief**

- **Stage.** `--mn-ink`. Returning to dark after two light surfaces is what makes this land. This surface sits at 45% of total scroll.
- **Device.** **Sorting elements.** Forty seat markers arrive unsorted from the edges of the stage over 900 ms, then physically sort into alternating balance along the table over 1,200 ms with 40 ms per-seat stagger. The four groups resolve into a visible pattern. Total sequence 2,400 ms, plays once.
- **Entry.** Scroll-triggered at 50% intersection. Plays once and does not replay on scroll-back.
- **Ambient.** After the sequence resolves, the rig returns to the ±0.4° / 11 s drift.
- **Interaction.** Hovering a group marker in the legend lifts that group's seats by 8 px, dims the other three to 35% opacity over 180 ms, and draws connectors to the seats they would sit beside. Keyboard: the legend items are buttons, focusable, and produce the same state on focus. Touch: legend items are 44 px minimum and toggle on tap, one at a time.
- **Restraint.** The connectors draw and hold. Do not animate them continuously, do not add particles, do not add a glow. The sorting is the spectacle and it happens once.
- **States.** Reduced motion: the table renders already sorted, connectors absent until hover or focus. Loading: reserved space at final height. Error, meaning WebGL or canvas failure: static SVG of the sorted table, no interaction, no fallback text about a missing feature.
- **Responsive.** Below 900 px the table reduces to 20 seats at identical ratio, sorting sequence retained at 1,600 ms, hover replaced by tap.

### H5 · The rules

**Purpose.** Convert four constraints into the reason to trust the room.

**Content.** §H5, four rules.

**Design brief**

- **Stage.** Light. Deliberately the quietest surface on the page.
- **Device.** **Flipping panels.** Four panels carrying the rule. On hover or focus they rotate 180° over 420 ms to show, on the reverse, who the rule protects. The flip is the argument.
- **Entry.** Fade and 8 px rise, 400 ms, 90 ms stagger. No flip on entry.
- **Ambient.** None.
- **Interaction.** Flip on hover, on focus, and on tap. All three paths required.
- **Restraint.** One hover state and no entry animation beyond the fade. This is the surface an eager builder will over-animate, and rules that move read as negotiable.
- **States.** Reduced motion: panels render showing the rule face, with the reverse content stacked beneath in the DOM rather than hidden.
- **Responsive.** 2×2 below 900 px, single column below 600 px. Flip retained.

### H6 · What's at stake

**Purpose.** Make the cost of the room not existing concrete rather than rhetorical.

**Content.** §H6, three consequences.

**Design brief**

- **Stage.** `--mn-ink`.
- **Device.** **Failed routes.** Three paths advance toward a target and each fails differently: one stops short, one loops back on itself, one arrives at the wrong node. Rendered in `--mn-gray`, because these are the inherited situation.
- **Entry.** Scroll-driven. Each path draws over 700 ms, 140 ms apart, and fails on arrival.
- **Ambient.** None.
- **Interaction.** None.
- **Restraint.** No people, no faces, no stock imagery, no medical iconography. Abstraction is the only respectful treatment for a surface about patients waiting.
- **States.** Reduced motion: all three paths render in their failed end state.
- **Responsive.** Paths stack vertically below 700 px.

### H7 · Find your seat

**Purpose.** Route four audiences without ranking them.

**Content.** §H7, four cards.

**Design brief**

- **Stage.** Light.
- **Device.** Four cards, each carrying its group marker at 24 px. Reuse the existing card component. Do not respecify it.
- **Entry.** Fade and 8 px rise, 400 ms, 90 ms stagger.
- **Ambient.** None.
- **Interaction.** Hover raises the card 6 px and dims the other three by 15% over 180 ms. Focus produces the identical state.
- **Restraint.** All four cards are identical in size, weight, position treatment and colour. No card gets an accent, a badge, or a "most popular" equivalent. A founder, a clinician, a policy lead and a student must each read this and see equal welcome.
- **States.** Focus-visible: 2 px `--mn-red` outline at 3 px offset, contrast 4.9:1 against the light stage.
- **Responsive.** 2×2 below 900 px, single column below 600 px.

### H8 · Register

**Purpose.** Make the next step obvious and small, and close the loop with the hero.

**Content.** §H8, including the confirmation copy.

**Design brief**

- **Stage.** `--mn-ink`. Same stage as H1, closing the loop.
- **Device.** The table returns, sorted, with one seat unlit. On successful submission that seat lights over 600 ms. Same object as the hero, changed state.
- **Entry.** Form fields rise 8 px, 400 ms, 90 ms stagger.
- **Ambient.** ±0.4° / 11 s on the rig.
- **Interaction.** Selecting a role in the dropdown lights the corresponding group marker on the table. Full keyboard path required. Submit button is the only red element on the surface.
- **States.** Empty: form at rest, no placeholder text posing as data. Loading: submit button shows an inline progress element, form stays interactive-disabled rather than removed. Error: message appears beneath the offending field in `--mn-red`, field border changes and the field keeps focus. Success: form replaced by the confirmation copy, rising in over 400 ms, and the seat lights.
- **Responsive.** Table above form below 900 px, reduced to 20 seats.

---

### The ICP routes — shared template

All four routes use one template. Only the device on the hero and the vocabulary change.

**Structure:** Hero → What it's for → Who's at the table → How you attend → Rules → Register.

**Shared design brief**

- **Stage.** Hero on `--mn-ink`, remaining surfaces light, register surface returns to ink. Same rhythm as the homepage at smaller scale.
- **Entry.** Identical to homepage: 400 ms, 8 px rise, 90 ms stagger.
- **Device on "Who's at the table."** A field of group markers at 16 px, one per named sub-segment, unlit until scroll-in, then lighting in sequence at 40 ms intervals. The breadth is the argument, so no sub-segment is emphasised over another.
- **Restraint.** These routes carry **no ambient motion except the hero rig.** They are reading surfaces and the reader is deciding something. Do not animate the sub-segment list continuously.
- **Register surface.** Reuse H8 with the role preselected from the route.

**Per-route hero device**

| Route | Device | The argument it makes |
|---|---|---|
| `/clinicians` | **The state machine.** A development track: concept, prototype, design freeze, launch, procurement. The clinician marker sits past the freeze point, then travels left on scroll and lands between concept and prototype, and the track behind it changes from locked to editable | Your input arrives too late, and this moves it |
| `/builders` | **Depth repetition.** The same meeting repeated into Z, each instance a month, so eighteen months becomes physical distance. At the end the same distance collapses to one plane | The wait is a length you can see |
| `/policy` | **Dot-field.** The Canada silhouette as a point cloud divided into thirteen planes at slightly different heights, each with its own boundary. Hovering raises a plane | Thirteen jurisdictions, and the unevenness is the point |
| `/students` | **The ribbon.** A career-stage track: student, early, mid, senior. A seat marker sits at mid-career, then travels to the student position and stays lit | Entry is possible fifteen years earlier than habit suggests |

**The map appears on `/policy` only.** It is the sole surface where a map means something specific. Anywhere a map is decorative, use the route's own device.

---

## Part 3 — States and edges

### The state matrix

| State | Applies to | Treatment |
|---|---|---|
| Default | All | As specified per surface |
| Hover | H4 legend, H5 panels, H7 cards, H3 markers | 180 ms, transform and opacity only |
| Focus-visible | Every interactive element | 2 px `--mn-red` outline, 3 px offset. Contrast 4.9:1 on light, 5.2:1 on ink |
| Active | Buttons | `scale(0.98)`, 90 ms |
| Loading | H8 form, any canvas | Reserved space at final dimensions. Never a spinner over a collapsed layout |
| Empty | Directory, if touched | Existing anonymous placeholder pattern. Do not seed plausible profiles |
| Error | H8 form | Message beneath the field, `--mn-red`, field retains focus, form is not cleared |
| Offline | All | Canvas surfaces render their static end state. No error copy about a missing feature |

### Responsive

Each surface **becomes** something below the breakpoint rather than shrinking.

- **≥1200 px:** full system, pointer parallax, scroll-driven sequences.
- **900 to 1199 px:** parallax off, sequences retained, tables reduce to 28 seats.
- **600 to 899 px:** tables reduce to 20 seats at identical ratio, hover states become tap, all grids reflow to 2 columns.
- **<600 px:** single column throughout. Canvas surfaces pause their `rAF` loop when off-screen via `IntersectionObserver`. Every hover-revealed thing is visible by default or tap-toggled. Touch targets ≥ 44 px.

### Reduced motion

`prefers-reduced-motion: reduce` **ships the resolved end state**, per surface, never "animations off."

- H1 table: sorted, static.
- H2 figures: final values.
- H3 ribbon: drawn, all labels visible.
- H4 table: already sorted, connectors on focus only.
- H5 panels: rule face, reverse content in the DOM beneath.
- H6 paths: failed end state.
- H8 seat: lit on success without transition.

Nothing may be mid-transition or invisible in this mode.

### Dark mode

The site carries a **whole-site toggle**, not the current alternating light and dark sections. Remove the alternation.

- Persistent toggle in the header on every route.
- Respects `prefers-color-scheme` on first visit, then persists the choice.
- 200 ms transition on background and colour. No cross-fade of whole sections.
- **Every canvas surface is authored twice.** In light mode the primary light reads as a highlight on upper-left faces. In dark mode it reads as rim light on upper-left edges with the fill dropped. Do not invert. An object correct in one mode and muddy in the other is unfinished.
- The four markers hold contrast in both modes, and remain distinguishable by shape.

### Print

Not a forwarding surface. Provide a minimal print stylesheet that removes canvases, shows the resolved copy, and keeps the sourcing line on H2.

---

## Part 4 — Constraints

### Build

- Next.js 14 App Router, TypeScript, CSS Modules, existing `--mn-*` tokens.
- **One new dependency permitted at most**, and only if the signature moment cannot be built without it. CSS 3D plus `rAF` should cover everything here.
- Reuse existing components. Do not respecify the card, the header or the footer.
- Client components only where interaction requires it. Every canvas is `next/dynamic` with `ssr: false`.

### Performance budget

- Largest Contentful Paint under 2.0 s on a 4G throttle.
- Cumulative Layout Shift under 0.05. Every canvas reserves final dimensions before render.
- Total JS added by this work under 60 KB gzipped, excluding anything already in the bundle.
- Canvas surfaces pause their `rAF` loop when off-screen.
- No canvas in the initial bundle. All code-split.

### Accessibility

- AA minimum throughout. Body on ink is 12.6:1. `--mn-mist` on ink is 8.9:1. **The risky pairing is `--mn-gray` on light at 4.6:1**, which passes for body but must not be used below 16 px.
- **No colour-only distinctions anywhere.** The four groups are distinguished by shape first, per the existing codebase rule.
- Every canvas that is decorative carries `aria-hidden="true"` and its meaning is stated in adjacent text.
- Every hover-revealed piece of content has a keyboard and a touch path.
- Focus order follows visual order on every route.

### Honesty constraints

These are spec items and the design changes to honour them.

- **No live-looking counters.** No attendee totals, member counts, or numbers that appear to update.
- **Unopened chapters render as dotted, unlit branches**, never as lit pins. Toronto is the only lit chapter.
- **The directory empty state stays anonymous.** Animated placeholders that name what would be there. Never plausible fake profiles.
- **No testimonials, no logos, no endorsements** until they exist and are consented to.
- **One room has happened.** Nothing in the design may imply a track record. No "past events" gallery, no photo wall.
- **No fixed seat count in copy or in a stat block.** The table renders forty seats as a design object; the copy says "small rooms."

---

## Part 5 — Master prompt

> Build the MedTech North site rebuild described in this brief, in the existing Next.js 14 repo, on a feature branch only.
>
> Read Part 6 first and verify the tokens, the 3D construction and the group-marker library against the actual codebase. Report any discrepancy before writing code.
>
> Build in this order, stopping for review after each stage.
>
> **Stage 1.** The four ICP routes: `/clinicians`, `/builders`, `/policy`, `/students`. These are new routes and touch nothing in production. Use the shared template in Part 2 and the per-route hero device table.
>
> **Stage 2.** The signature moment, H4, as a standalone component with the sorting sequence, the legend interaction, all three input paths, and both colour modes.
>
> **Stage 3.** The new homepage at `/preview`, using H1 through H8. **Do not modify the existing `/` route.**
>
> **Stage 4.** The whole-site light and dark toggle, the `/rooms` route, and the responsive pass.
>
> Copy comes from `01-sitemap-and-content.md` and is typeset as written. Do not rewrite, extend or add copy.
>
> Constraints that will get work rebuilt: any sponsorship reference anywhere; any claim of a track record; a device that repeats across routes; a colour-only distinction; a hover with no keyboard and touch path; reduced motion implemented as removal rather than the resolved end state; and any modification to a production route before Stage 3 is approved.

---

## Part 6 — Decisions

### Verified

These come from the conversation history and prior work on this project and can be relied on.

- Four audience groups and their sub-segments.
- Membership tier names: Guest, Chapter, National, Circle.
- The four "rules we do not bend" and their current wording.
- Every statistic in H2 and P2, with sources.
- The no-sponsorship constraint, which is absolute.
- The whole-site light and dark toggle requirement.
- One room has taken place, attended by roughly sixteen people, predominantly non-physician clinicians.

### Open — verify against the repo before building

I do not have repo access. Each of these is drawn from prior project documentation and must be confirmed by reading the codebase.

| Item | Expected | If different |
|---|---|---|
| `--mn-red` | `#c41230` | Use the actual token and update the meaning mapping |
| `--mn-ink` | `#16191d` | As above |
| `--mn-mist` | `#b9cedd` | If absent, propose the nearest existing token for "their gain" and flag it |
| Type faces | DM Sans display, Inter UI | Use what ships |
| 3D construction | `member-card-3d.css` plus a pointer-parallax hook, `perspective:1500px`, base `rotateX(8deg) rotateY(-22deg)` | If the construction differs, reuse the real one. Do not build a second physics |
| Group markers | Web component library, four shapes, "never colour alone" comment | If they do not exist, this brief's motif fails and needs re-specifying. Stop and report |
| Spacing and type scale | Existing modular scale in `globals.css` | Every number in this brief resolves to it |
| Existing card component | Reused at H7 | Do not build a new card |

**Contradiction to resolve.** The uploaded 3D table component from the earlier design pass loads Three.js and reads a `data-mode` attribute for theming. This brief specifies CSS 3D and no WebGL for interface work. Decide before Stage 2: either adapt that component to the CSS construction, or accept the WebGL cost and state why. Do not run both.

### Invented

Named plainly, because presenting invention as excavation is the failure mode this brief is written to avoid.

- Every duration, offset and rotation figure in Part 1. Derived from the register, not lifted from the codebase.
- The device assignments per surface, chosen from the catalogue against the argument each surface makes.
- The 45%-of-scroll placement for the signature moment.
- The performance budget figures.
- The contrast ratios, which are calculated from the expected hex values and must be recalculated if any token differs.
