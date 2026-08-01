# Claude Design handoff prompt

Paste everything below the line into Claude Design, with `01-website-structure-and-content.md` and `02-design-instructions.md` attached.

---

## What we're building

A five-page site for MedTech North: a homepage plus four segment pages. It replaces the current single-page site.

Two attached documents govern this build.

**`01-website-structure-and-content.md`** is the content. Every headline and passage in it is final and typeset as written. Do not rewrite, shorten, extend, or add copy. Where it says a visual carries the meaning, build the visual rather than writing a sentence.

**`02-design-instructions.md`** is the design specification. It is authoritative on objects, motion, the light and dark system, the text budget, and the craft bans.

## The quality bar

**Reference the membership pricing deck already built in this project.** That deck is the standard: custom-drawn geometry, layered 3D objects on one consistent light source, generous composition, motion that reads as precision rather than decoration.

**Do not reference the current MedTech North landing page.** It is being replaced for three specific reasons, all of which have fixes in the design document:

- one visual repeated until it lost meaning
- almost no dimensional objects
- text doing work the visuals should have done

Carry forward from the pricing deck: the mark-derived geometry, the four group markers, the single light setup, and the motion language. The design system's existing tokens govern typography and colour.

## Build order

Work in this sequence and stop for review after each stage.

**Stage 1.** The homepage, all eight sections, with the light and dark toggle working across the whole page. Six objects. Stop and show me.

**Stage 2.** `/clinicians` and `/builders`, one hero object each.

**Stage 3.** `/policy` and `/students`, one hero object each. The Canada map is built here, on `/policy` only.

**Stage 4.** `/rooms`, navigation, footer, register form, and the responsive pass.

## Six things that will get a rebuild

**1. Any sponsorship reference.** No sponsor, partner tier, anchor, category-exclusive, exhibitor, underwriter, booth, media rights or lead access, on any page, in any component, in nav, in the footer, in metadata. Monetisation lives in private documents, never on this site. This is the hardest constraint in the brief.

**2. A repeated visual.** Seven objects, each appearing on exactly one page. The Canada map is allocated to `/policy` and appears nowhere else.

**3. Light and dark authored as an inversion.** Every object is built twice. In light mode the primary light reads as highlight on upper-left faces; in dark mode as rim light on upper-left edges with the fill dropped. An object that works in one mode and goes muddy in the other has not been finished.

**4. Copy beyond the budget.** Eight words of headline, 45 words of support, per section. Many sections need no support passage at all. If a section can't work inside that, the visual isn't carrying enough.

**5. Emoji, icon fonts, stock icons, blur effects, stock photography.** All drawn SVG, all the time. Nothing may look like a glyph at 200 percent zoom.

**6. Segment hierarchy on the homepage.** The four doors in section H7 must be identical in weight, size, position treatment and colour. A founder, a clinician, a policy analyst and a student each need to read that section and see themselves as equally welcome.

## The one section to get right first

**H1, the table assembling.** Forty seats, four marker types arriving and settling into balance over about 2.5 seconds. It is the signature object of the brand and every other object on the site inherits its light, its materials and its sense of weight. Build it first, show it to me before continuing, and treat the rest of the site as descendants of it.

## Deliver

Working pages with the toggle functional, each hero object animating on scroll and responding to cursor, and every acceptance test in section 9 of the design document reported on individually.

Ask before deviating from either attached document.
