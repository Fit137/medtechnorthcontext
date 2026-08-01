# MedTech North — Website Design Instructions

**Version 2.0.** For Claude Design. Governs the homepage and four segment pages.

---

## 0. The standard, stated plainly

The reference for quality is **the membership pricing deck already built in Claude Design**, not the current landing page. Everything below assumes that deck's craft level: custom-drawn geometry, layered 3D objects with a single consistent light source, generous composition, obsessive alignment, motion that reads as precision.

The current landing page falls short in three specific ways, and each has a fix in this document.

**It repeats one visual.** The Canada map appears several times and carries a different meaning each time, which means it carries none. Fixed by section 4: every page gets one distinct hero object, and the map is allotted to exactly one page.

**It has no dimensional objects.** The membership card that rotates on hover is the only element with real presence. Everything else is flat. Fixed by section 4: seven built objects, all sharing one light setup.

**It leans on text where a visual should carry the meaning.** Fixed by section 2: a text budget per section, enforced.

---

## 1. Two things that change globally

### 1a. Light and dark, as a whole-site toggle

The current site alternates light and dark sections down the page. Remove that entirely. Every section renders in the active mode.

- A persistent toggle in the header, visible on every page
- Respects `prefers-color-scheme` on first visit, then remembers the choice
- Transition of 200ms on background and text, no cross-fade of whole sections
- Every 3D object must be authored for both modes. In light mode the primary light reads as a highlight on upper-left faces. In dark mode the same geometry reads as rim light on upper-left edges with the fill dropped. **Do not simply invert.** An object that looks correct in one mode and muddy in the other has not been built.
- Contrast holds in both modes for every marker, chip and label

### 1b. The map appears once

The Canada map is allocated to `/policy` and appears nowhere else. On that page it means something specific: thirteen jurisdictions with different rules. That is the only place a map is the right answer.

Everywhere the map currently appears for decoration, replace it with the object assigned to that page in section 4.

---

## 2. Visual-first, with a text budget

The instruction is minimal text and large visual representation. Made concrete:

| Element | Budget |
|---|---|
| Section headline | Up to 8 words |
| Support passage | Up to 45 words, and many sections need none |
| Anything else on screen | Belongs in the visual |

**The test:** scroll the page with the body copy blurred. The headlines and the objects alone must carry the argument. If a section becomes unintelligible, that section's visual is doing decoration rather than work, and it gets rebuilt.

Visuals occupy a minimum of 55 percent of each section's area on desktop. Nothing floats small in dead space.

---

## 3. The mark as the system

The logo is an up-triangle and a down-triangle meeting at a line. That geometry generates everything.

- **The seam** where they meet is the site's structural rule: section dividers, timeline axes, the table plane, the horizon in every 3D scene.
- **The up-triangle** carries growth, invention and what's built. **The down-triangle** carries delay, cost and what blocks. Used consistently, never decoratively.
- **Four group markers**, carried over unchanged from the pricing deck: founders, clinicians and researchers, capital and corporate, policy. Minimum 24px on desktop canvases, distinguishable by shape and weight rather than colour alone, always accompanied by a designed legend.
- **The extruded mark** is the hero object of the homepage and appears small in the footer. Nowhere else.

---

## 4. One hero object per page

Seven objects total. Each is built once, animates on scroll, and responds to cursor with 4 to 8 degrees of parallax on desktop. On touch each runs a slow ambient loop.

**Every object shares one light setup:** primary from upper left, soft fill lower right, contact shadows drawn as geometry rather than blurred. This is what makes the site read as one photographed set rather than a collection of graphics.

### Home

**H1. The table assembling.** Forty seats around a drawn table plane, seen at a low three-quarter angle. On load, markers arrive from off-canvas in the four types and settle into alternating balance. Runs once, about 2.5 seconds, then holds with a slow drift. This is the signature object of the brand.

**H2. Magnitude against delay.** Two forms in one frame. A large mass built from the sector's numbers, and beside it a long thin track representing the years a device waits. The disproportion is the argument. Numerals sit inside the forms, not beside them.

**H3. The timeline.** A physical track with three dated markers: December 2025, December 2025, June 2026. Extruded, with the most recent marker still catching light. Scroll-driven, reversible.

**H4. The table, top-down.** Architectural drawing quality. Forty seat positions along both sides in the four marker types, interleaved. Hovering a seat raises a role label, never a name.

**H6. Three states.** One object rendered three times in worsening condition: a seat that stays empty, a marker that leaves the frame, a connection that draws to the wrong node. Understated. No people, no faces, no stock imagery, nothing that reads as an appeal.

**H7. Four doors.** Four forms built from the mark's geometry, identical in weight and treatment. Hover lifts one and dims the others by 15 percent. None may look more prestigious than another, and that includes size, position and colour.

### /clinicians

**The frozen design.** A horizontal development track: concept, prototype, design freeze, launch, procurement. The clinician marker sits at the far right, past the freeze point. On scroll it travels left and lands between concept and prototype, and the track behind it changes state to show what became editable again. One motion, no caption needed.

### /builders

**The compression.** A long track from product-ready to first clinical conversation, drawn at a length that requires scrolling to traverse. At the end, the same distance collapses into a single point labelled one evening. The scroll length is the point: the reader should feel the eighteen months in their thumb.

### /policy

**The jurisdictions.** The Canada map, extruded, divided into thirteen distinct planes at slightly different heights, each with its own drawn boundary. Not a heat map and not a dot grid. The unevenness is the meaning. Hovering a jurisdiction raises its plane and shows a label.

### /students

**The early entry.** A career-stage track from student through early career, mid-career, senior. A seat marker sits at the mid-career point, then slides to the student position and stays lit. Same grammar as the clinicians object, different axis, which makes the two pages feel like siblings without repeating.

---

## 5. Motion

Carried from the pricing deck, unchanged.

- UI motion under 250ms, strong ease-out
- Narrative motion is scroll-driven, so the reader controls pace, and scrubbing back reverses
- Everything enters from near rest: 8 to 16px rise with an opacity fade, grouped elements staggered 40 to 60ms
- Exits run at roughly half the entry duration
- Cursor reactivity on all hero objects, gated to fine pointers
- `prefers-reduced-motion` collapses all translation and parallax to opacity fades, renders each hero object as a designed static frame, and lands count-ups at their final value

**One idle exception:** the register action carries a slow border pulse on a 3-second loop, near-subliminal. It is the only element allowed to move when nothing else is happening.

---

## 6. Craft bans, absolute

No emoji, no Unicode symbols, no icon fonts, no stock icon libraries, anywhere, at any size, for any purpose. Every mark is drawn SVG.

No CSS blur as a design effect. Depth comes from size, opacity, stroke weight and layering.

No graphic smaller than its container's purpose. No element left at a default size.

No stock photography. No images of patients, clinicians, handshakes, boardrooms or laboratories.

At 200 percent zoom, nothing may look like a glyph, a default, or an accident.

---

## 7. Per-page register

The pages should feel like one system with four different temperatures.

| Page | Density | Motion | Feel |
|---|---|---|---|
| Home | Most generous spacing | Fullest, the table assembling is the site's set piece | Consequential |
| Clinicians | Calm, wide margins, longest line length | Precise and slow. This page has the most refined animation on the site, deliberately | Respectful |
| Builders | Tighter, faster rhythm | Most kinetic. The compression scroll is the sharpest interaction | Direct |
| Policy | Structured, most grid-visible | Restrained. Nothing playful | Institutional |
| Students | Warmest, lightest | Open and quick | Welcoming, never junior |

---

## 8. Responsive

**Desktop 1440 and above:** full system, cursor parallax, scroll-driven scenes.

**Tablet:** parallax off, scroll scenes retained, objects hold their composition.

**Mobile:** every hero object has a designed mobile state, not a cropped desktop one. Canvas scenes pause when off-screen. Anything revealed on hover is visible by default or tap-toggled. Nothing informational lives behind hover.

---

## 9. Acceptance test

Run before delivering. Rebuild anything that fails.

1. **Blur test.** Blur the body copy on every page. Headlines and objects alone still carry the argument.
2. **Mode test.** Every object is authored for both light and dark. Neither looks like an inversion of the other.
3. **Repetition test.** No object appears on two pages. The map appears once.
4. **Light test.** All seven objects share one light direction and read as one set.
5. **Sponsorship test.** Search every page for sponsor, partner tier, exhibitor, underwriter, booth. Zero results.
6. **Balance test.** On the homepage's four doors, no segment reads as more prestigious than another.
7. **Zoom test.** At 200 percent, nothing looks like a glyph or a default.
8. **Budget test.** No section exceeds 8 words of headline and 45 words of support.
