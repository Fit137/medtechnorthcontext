# MedTech North — Visual Revamp Prompt for Claude Design

Paste everything below this line into Claude Design as the revamp instruction.

---

## Revamp all site visuals. The current direction is rejected.

The current build renders the network concept as small scattered dots on empty backgrounds. That output fails: the dots are too small to read as anything, the sections have no anchor imagery, and nothing on screen communicates value. A skimmer scrolling the site sees text with confetti. Discard that entire visual layer and rebuild every graphic to the specification below. Keep all copy, page structure, and the existing design system tokens (typography, color, spacing) exactly as they are. This prompt governs graphics only.

## The new visual thesis: Canada is the canvas

Every major section gets one large, confident, data-rich visual built from Canadian identity: the map of Canada, geometry derived from the maple leaf, and real Canadian medtech, biotech, and digital health statistics rendered directly onto the graphics. Each visual must pass one test: **a visitor who reads nothing but the visuals should still leave knowing (1) this is Canada's health innovation network, (2) the sector is large and real, (3) four groups meet here, and (4) the room is curated and small on purpose.**

## Hard rules

1. **Scale.** Every section's primary visual occupies at least 40% of its section's area on desktop. No graphic smaller than a third of the viewport width. Nothing that reads as texture or ornament.
2. **Numbers live on the visuals, not beside them.** Large numerals rendered inside the maps and charts, with short labels. The visual is the chart; the copy is commentary.
3. **Real data only.** Use the verified statistics table at the end of this prompt, exactly as written, with the sourcing line. Do not invent, round up, or extrapolate any figure.
4. **Responsive and alive.** Every visual has a scroll-entry animation, at least one hover/tap interaction that reveals a data detail, and a designed mobile layout (restack, don't shrink). Motion stays within the existing motion rules: scroll-driven, ease-out, reversible, reduced-motion fallback.
5. **Banned:** sparse floating dots, particle fields, abstract node clusters without geography, any graphic whose meaning requires the caption to decode, stock-photo imagery, literal flag reproductions (derive from the leaf's geometry instead — an 11-point leaf angle grid, leaf-vein line structures — never a rendered flag).
6. **The four groups stay visually distinct** (founders, clinicians/researchers, capital/corporate, policy) using four marker shapes at legible size — minimum 10px equivalent — always accompanied by a persistent on-canvas legend. Distinguishable by shape and weight, not color alone.

## Master asset: the Canada Data Map

Build one hero-grade map of Canada and reuse it in configured states across the site. Specification:

- The landmass rendered as a high-density dot grid or fine contour mesh — dense enough that the country's silhouette is instantly recognizable at any size. This is a solid, substantial object, not scattered points.
- City nodes at Toronto, Vancouver, Montreal, Ottawa, Calgary, Halifax, sized by ecosystem weight, each with a numeric callout chip (see stats table: e.g., Ontario ~46.8% of Canada's medical device companies, Quebec ~22.3%).
- A stat layer: 2 to 4 large numerals anchored to map regions (e.g., "1,500+ medtech companies" spanning the country, "8th largest medical device market in the world" as the map's headline stat).
- Hover/tap on any city: a detail card with that region's figure. Scroll entry: the dot grid resolves from coarse to fine, then city nodes ignite in sequence, then numerals count up.
- Toronto carries a distinct "home" marker; the five expansion cities render in a "coming" state.

## Section-by-section rebuild

**Home hero.** The Canada Data Map at full scale behind/beside the headline, in its richest state: all stat callouts active, the four group markers clustered at Toronto and visibly converging toward it from across the map (talent and capital flowing to the room). Skim takeaway: Canada's health innovation, gathered in one place.

**Home problem block.** A split-Canada visual: left half of the map shows the ecosystem as it is — the sector's big numbers (companies, market size) rendered as strong stat blocks but disconnected from each other with visible gaps between the four group markers; right half shows the same markers seated together along a bold table line. One visual argument: the assets exist, the room doesn't — until now.

**Home composition bar.** Rebuild as a full-width data band. The 40-seat table rendered at commanding scale: a thick table line with 40 large seat markers in the four shapes, interleaved. The four stats (40 seats, 4 dinners + summit, 1:1 ratio, guests-at-no-cost) rendered as oversized numerals directly above their visual referents on the table. Seats fill on scroll; numerals count up.

**Home ICP cards.** Each of the four cards gets a solid emblem built from maple-leaf geometry: a quadrant of the leaf's angular structure containing that group's marker shape at large scale, plus one group-relevant stat rendered into the emblem (founders: 1,500+ medtech companies; clinicians: over one-third of Canadian patients used virtual care in 2023; corporates/investors: ~US$10B market; policy: 12.1% of GDP spent on health).

**Home map block.** The Canada Data Map in expansion state: Toronto lit, arcs drawn toward the five coming cities, each city chip carrying its regional figure. This is now a fully-loaded infographic, not an outline with dots.

**Membership page.** Each track section gets a large lateral panel: founders — the map's company-density layer with the application threshold rendered as a bold gate line; clinicians — a leaf-geometry emblem holding the "invited, at no cost" statement with the virtual-care adoption stat; corporates — the map ringed by a perimeter with five labeled category docks (bank, CDMO, legal, cloud, insurer), one filled to show exclusivity.

**Events page.** The 40-seat table becomes this page's master visual, drawn at architectural scale: top-down, seats as large labeled markers, hover revealing role labels. The dinner timeline keeps its drawn-line structure but each milestone gets a solid pictographic panel, not a dot. The Summit section: the table multiplied into a grid of tables forming the silhouette of a maple leaf when fully populated — the single most ambitious visual on the site; on scroll, tables populate until the leaf resolves. Skim takeaway: the dinners, scaled nationwide.

**Partners page.** The comparison visual rebuilt at full width: left, a blurred, jittering crowd mass labeled with "unverified audience"; right, the composed 40-seat table with its composition stats. The tier panels each get a solid emblem (anchor: the map with a foundation line beneath it; category: the five-dock strip; dinner: a single table; summit: the leaf-of-tables motif at small scale).

**About page.** One restrained visual: the Canada map in its quietest state with a single stat pairing — the size of the sector against the absence of a connecting room — and the founder portrait framed by the four group markers at the corners, rendered at proper weight.

**Register Interest.** Keep the live-seat interaction (role selection lights your seat) but rebuild the table at the new commanding scale, seated inside a subtle Canada-map backdrop, so the final image a visitor sees is themselves, at the table, in the country.

## Verified statistics layer

Use these figures verbatim, with this sourcing treatment: a single small footnote line per section — "Sources: Medtech Canada, ISED, Invest in Canada, Statistics Canada, CIHI" — not inline citations on the visuals.

| Figure | Use as | Source |
|---|---|---|
| 8th largest medical device market in the world | Map headline stat | Medtech Canada / ISED |
| 1,500+ medtech companies across Canada | Country-spanning numeral | Medtech Canada |
| ~US$10 billion medical device market (2024) | Market-size callout | ISED |
| 6,000+ life sciences companies; 4th most active biotech firms in the OECD | Biotech depth callout | Invest in Canada |
| ~46.8% of medical device companies in Ontario; ~22.3% in Quebec | Toronto/Montreal city chips | Trade Commissioner Service data |
| 1,300+ medical device firms in Ontario | Toronto region detail card | Invest in Canada |
| $344B national health spending, 12.1% of GDP (2023) | Policy-group stat | CIHI |
| Over one-third of Canadian patients used virtual care in 2023 | Digital health adoption stat | Statistics Canada |
| Telehealth market ~US$2.5B, growing ~32% (2025) | Digital health momentum stat | Trade Commissioner Service |
| Lowest-cost G7 country for biotech and clinical trials | Investor-facing callout | Trade Commissioner Service |

## Acceptance test

Before finishing, run the skim test on every page: zoom to fit the full page, blur the body copy mentally, and check that the visuals alone tell the story — Canada, a large real sector, four groups, one deliberately small curated table. If any section's visual could be deleted without losing information, it is decoration and must be rebuilt. Deliver desktop and mobile states for every section.

---

*End of Claude Design prompt.*
