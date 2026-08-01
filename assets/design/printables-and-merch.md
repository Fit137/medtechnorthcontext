# MedTech North — Printables & Merch Programme
## Design instructions for Claude Design

---

## 0. What to produce for every item

Each catalogue item below requires **three outputs**, in this order. An item is not complete until all three exist.

1. **3D mockup.** A rendered presentation view for approval and for use in decks and social. CSS 3D or layered SVG with perspective, on the shared lighting setup defined in section 4.
2. **Print-ready artwork.** Built at exact final trim size with bleed and safety guides on their own layers, at the resolution stated for that item.
3. **Spec card.** A one-page summary a printer can quote from: dimensions, stock, finish, print method, colour build, quantity band, and the pre-press notes from section 6.

**Carried forward and non-negotiable:** the MedTech North design system governs typography, palette and spacing. Custom-drawn vector geometry only. No emoji, no icon fonts, no stock icons, no CSS blur as an effect, no default-sized anything, everything on an 8px grid. Nothing may look like a glyph or an accident at 200 percent zoom.

**One honest limitation to design around:** true CMYK separation and PDF/X export happen in a pre-press step outside this build. Produce artwork at exact dimensions with correct guides and supply the colour build values in the spec card. Section 6 states exactly what the pre-press operator must do so nothing is lost in the handoff.

---

## 1. The logo system in print

The mark is an up-triangle and a down-triangle. In print it has to work at 8mm on a pin and at 2.4 metres on a booth wall, so build a proper size ladder rather than scaling one file.

**Three drawn versions, built once:**

- **Full mark.** Both triangles with full internal geometry. Minimum reproduction 18mm wide. Use on covers, backwalls, posters, cards.
- **Compact mark.** Simplified interior, thicker strokes, no fine detail. For 8mm to 18mm: pin, luggage tag, coaster, pen, foil blocks on small items.
- **Single-line mark.** The seam only, drawn as one continuous rule. For blind deboss, edge printing, napkin bands, and anywhere the mark must read by texture rather than contrast.

**Print-specific rules:**

- Minimum clear space on all sides equals the height of the up-triangle. Nothing enters it, including trim edges.
- Never reproduce the mark in a tint below 100 percent of the brand red or ink. No screens, no gradients, no drop shadows in print.
- For foil, deboss and letterpress, supply the mark as a solid vector shape on a named spot layer. Fine interior detail must be removed for these processes; use the compact mark.
- The four group markers (founders, clinicians and researchers, capital and corporate, policy) reuse the existing drawn set. Minimum 6mm in print, always with a legend on the same surface or its reverse.

---

## 2. Universal print specifications

Apply to every item unless the catalogue overrides it.

| Spec | Value |
|---|---|
| Bleed | 3mm on all sides (0.125" for North American trim sizes) |
| Safety margin | 5mm from trim for text and critical marks. 8mm on saddle-stitched and perfect-bound items |
| Resolution, raster | 300 ppi at final size, minimum |
| Resolution, line art and type | Vector, or 600 ppi if rasterised |
| Colour space | CMYK for process work. Brand red as a spot where the item allows |
| Brand red, spot | Nearest match appears to be Pantone 200 C. **Confirm against a physical swatch book before any run.** Never approve a spot colour from a screen |
| Brand red, process build | Supply the CMYK build in the spec card and print a proof before volume. Screen values will not match press output |
| Rich black, large areas | C60 M40 Y40 K100. Never for text below 24pt |
| Text black | K100 only. Single channel, no exceptions |
| Registration black | Never use. It is for crop marks only and will not dry |
| Total ink limit | 300% coated, 280% uncoated. Check every dark build against this |
| Minimum type size | 6pt for legal and small print, 7pt for anything meant to be read |
| Minimum stroke | 0.25pt positive, 0.5pt reversed out of a solid |
| Die lines | Own spot channel named "Dieline", 100% magenta, set to overprint, deleted before final export or supplied as a separate layer |
| Foil, deboss, spot UV | Each on its own named spot layer as solid shapes, overprint on, clearly labelled "Foil", "Deboss", "SpotUV" |
| Fonts | Outlined for final artwork. Supply a live-text version alongside for future edits |
| File naming | `MTN_[item]_[variant]_[size]_[vFinal]` |

---

## 3. The catalogue

Four groups. Group A and B are what members and guests receive. Group C is the summit. Group D is what gets given away.

Budget constraints from the financial model, which the kit contents must respect: standard welcome kit lands at $45 per member, Chief kit at $120, and Chief members carry a $250 printables and merch allocation. Design to those numbers, not past them.

---

### GROUP A — The member kit

What arrives after someone joins. This is the first physical proof that the membership is real.

**A1. Member card** *(the flagship object)*

Credit card format, CR80: 85.6 x 54mm, corner radius 3.18mm. Tier-differentiated, and the differentiation should be felt before it is read.

| Tier | Substrate | Finish | Front | Reverse |
|---|---|---|---|---|
| Guest | 0.76mm matte PVC | Soft-touch | Compact mark, "Guest", name | "Always our guests" and the nomination URL |
| Resident | 0.76mm PVC | Soft-touch, single foil | Mark in foil, tier, name, home chapter | Member since, four group markers with legend |
| Attending | 0.76mm duplex PVC | Soft-touch, foil both faces | As above, plus tier mark in foil | As above, plus summit access line |
| Chief | 0.5mm brushed stainless | Laser-etched | Etched mark, tier, name, member number | Etched seam rule, member since |

Front carries: mark, tier name, member name, home chapter. Reverse carries: member since date, the four group markers with legend, and one line of brand language. No QR codes on the card face; the card is an object, not a scanner target.

**A2. Welcome letter.** A5, 148 x 210mm, 120gsm uncoated, letterpress mark at the head. Personal, signed, one page. Never printed double-sided.

**A3. Kit sleeve or box.** Rigid sleeve sized to hold A5 contents, 122 x 217 x 25mm internal. Uncoated board, blind-debossed single-line mark on the face. No printing inside; the interior is plain so the contents carry the colour.

**A4. Notebook.** A5, 148 x 210mm. Cover 350gsm uncoated with foil-blocked compact mark. Interior 100gsm dot grid, 96 pages. First page carries the four group markers and the composition principles, printed in a light tint so it reads as a watermark rather than content.

**A5. Enamel pin.** 18mm wide, hard enamel, compact mark. Butterfly clutch, not rubber. Supplied on a 55 x 85mm backing card carrying the seam rule and one line.

**A6. Luggage tag.** 105 x 55mm, leather or heavy PVC, single-line mark blind-debossed. Reverse carries a printed insert slot. This is the item most likely to be seen by strangers in airports, so it stays quiet.

**A7. Bookmark.** 55 x 180mm, 400gsm, printed both sides. Front: the seam rule and the mark. Reverse: the four table principles set small. Chief version gets edge painting in brand red.

**A8. Sticker sheet.** A6, 105 x 148mm, kiss-cut on white vinyl. Contains: the full mark, the compact mark, the four group markers, and one word mark. Matte laminate.

---

### GROUP B — The dinner table

Used during the evening. These are the objects that make composition visible in the room, which is the whole product.

**B1. Place card.** Folded tent, 90 x 55mm folded (90 x 110mm flat), 350gsm uncoated. Guest name on both faces so neighbours can read it. The person's group marker printed at 8mm beside the name. No job titles, no company names. The marker does that work and keeps the table level.

**B2. Composition card.** The signature table object. A6 tent, 105 x 148mm folded. One face shows tonight's room described by role: how many founders, clinicians, investors, policy people, rendered as the group markers in the actual proportion of the room. The other face carries the four principles. Printed fresh for every dinner, so build it as a template with editable counts.

**B3. Menu card.** DL, 105 x 210mm, 300gsm uncoated, single colour plus blind deboss of the seam at the head. Kept deliberately plain so the composition card is the object people pick up.

**B4. Conversation cards.** Deck of 24, 63 x 88mm (poker size), 300gsm, rounded 3mm corners, matte. Each card carries one question designed to work across all four groups. Boxed in a tuck box with the compact mark. This is the highest-leverage printable in the whole programme because it directly produces the conversations the network exists to create.

**B5. Introduction slip.** 90 x 55mm, 250gsm, printed one side, pad-bound in 50s. Space for two names and one line of context. Used at the table, collected at the end, and turned into the follow-up introductions within the week.

**B6. Coaster.** 95mm square, 1.4mm pulpboard, letterpress single-line mark. Uncoated so it works as a coaster rather than sliding.

**B7. Napkin band.** 40 x 200mm, 120gsm, single colour. One per setting. The cheapest item in the programme and the one that makes a restaurant table look composed.

**B8. Seating map poster.** A2, 420 x 594mm, 200gsm silk. Displayed at the entrance. The table drawn top-down with group markers in seat positions, no names. Photographed constantly, so treat it as a designed graphic and not a utility print.

---

### GROUP C — The summit

**C1. Badge insert.** 100 x 150mm portrait, 300gsm, printed both sides. Name large, organisation small, group marker at 12mm, tier mark for members. Reverse carries a mini programme grid. Landscape lanyard, 20mm woven, brand red with the wordmark repeating.

**C2. Programme booklet.** A5, saddle-stitched, cover 250gsm uncoated with foil mark, interior 120gsm silk, 24 to 32 pages. Spread structure: composition of the room, the day grid, speakers, exhibitor map, principles, notes pages at the back. Notes pages are dot grid and match the notebook.

**C3. Exhibitor booth graphics.** Fabric backwall 2400 x 2300mm, artwork at 1:10 scale at 300 ppi or 1:1 at 100 ppi, plus 100mm of extra bleed for the silicone edge. Counter wrap 950 x 900mm. Table runner 600 x 1800mm. The booth frame geometry should read as the two triangles forming a truss.

**C4. Speaker name plate.** 210 x 100mm folded tent, 400gsm, foil mark. Reused across sessions, so no session names printed.

**C5. Wayfinding.** A1 and A2 boards plus 300 x 300mm floor decals. Arrow geometry derived from the up-triangle. Single colour on white, high contrast, readable at 6 metres.

**C6. Delegate folder.** A4 presentation folder with a single interior pocket and a business card slot. 350gsm, matte laminate outside, uncoated inside. Blind deboss only, no printed colour on the exterior beyond the mark.

**C7. Speaker certificate.** A4, 300gsm uncoated, letterpress mark, hand-signed. Sent flat in a rigid envelope, never rolled.

---

### GROUP D — Gifts and marketing giveaways

Given to anyone: prospects, nominators, venue hosts, partners, people met at other events. These carry the brand into rooms MedTech North does not run.

**D1. Nomination card.** *(The most strategically important item in this list.)* 105 x 148mm, A6, 400gsm, printed both sides, edge painted. Front: "Someone should be at this table." Reverse: space to write a name, and the nomination URL. Given in twos and threes to members and guests. This turns the acquisition engine into a physical object someone can hand to a colleague. Design it to be the nicest piece of card anyone in the room has been handed that year.

**D2. Invitation card.** 127 x 178mm (5" x 7"), 540gsm duplex with a coloured centre ply showing at the edge. Letterpress the mark, foil the date. Supplied with a matching envelope. Used for the first dinner in each new chapter and for anchor partner invitations. This is a $6 to $9 per unit object and it is worth every cent for a 40 seat room.

**D3. Postcard.** A6, 105 x 148mm, 400gsm. Front: one of the Canada data visuals from the site. Reverse: standard postcard division with the ecosystem stat and the URL. Handed out at other people's conferences.

**D4. Tote bag.** 380 x 420mm, 12oz natural cotton, long handles. Single-colour screen print of the compact mark, small, positioned low and off-centre rather than a large chest print. Restraint reads as expensive.

**D5. Insulated bottle.** 500ml stainless, matte finish, laser-etched compact mark. No colour print. Etching survives dishwashers, printing does not.

**D6. Pen.** Metal barrel, matte, laser-etched wordmark. Medium black refill. Specify a refill that is commercially available so it can be reused.

**D7. Beanie or toque.** Ribbed knit, woven label with the mark rather than embroidery. This is a Canadian network; a toque is not a novelty item, it is correct.

**D8. Chocolate or coffee sleeve.** Branded sleeve on a locally made product, 40 x 180mm wrap. Names the maker on the reverse. Costs little, and sourcing locally is on-brand for a Canadian ecosystem network.

**D9. Desk object.** The extruded mark as a solid paperweight, 60 x 60 x 20mm, machined aluminium or cast concrete. Reserved for anchor partners, keynote hosts and venue partners. Roughly 20 units a year. This is the object that sits on a decision maker's desk for a decade.

**D10. Sticker pack.** As A8 but in a giveaway sleeve of three sheets.

---

### GROUP E — Stationery and sales collateral

**E1. Business cards.** 88.9 x 50.8mm, 600gsm duplex, edge painted brand red, letterpress mark, foil name. Standard for Ali and every chapter host.
**E2. Letterhead.** A4 and US Letter, 120gsm uncoated, mark at head, single colour.
**E3. Envelopes.** DL and C5, printed flap with the single-line mark.
**E4. Compliments slip.** 210 x 99mm, 120gsm.
**E5. Partner brief.** A4, 8 pages, saddle-stitched, 170gsm silk. The printed edition of the partner tiers and composition argument.
**E6. Composition report.** A4, 12 to 16 pages, 170gsm uncoated. The printed annual proof asset. Sent to every partner and every member. Design it as a document of record, not a brochure.

---

## 4. 3D mockup direction

Build these as CSS 3D or layered SVG with perspective. They serve approvals, the pricing deck, and social.

**Shared setup for every mockup, without exception:**
- One primary light from upper left, one soft fill from lower right, drawn contact shadows. Never blurred shadows.
- Neutral surface, no lifestyle backgrounds, no hands, no offices, no stock scenes.
- Three-quarter view at 25 to 35 degrees unless the item reads better flat.
- Visible material edge thickness on every card, board and box. Thickness is what communicates quality.
- Finishes must be shown as light behaviour rather than as texture overlays: foil catches a specular highlight along one edge, deboss shows as a shadow-and-highlight pair, soft-touch reads as a wide diffuse falloff, edge painting shows as a coloured band on the visible edge.

**Priority mockups to build first, in this order:**
1. The four member cards fanned, showing the substrate ladder from PVC to brushed steel
2. The welcome kit exploded axonometric with drawn leader lines to each component
3. The dinner table set: place card, composition card, menu, coaster, napkin band, photographed as one setting
4. The conversation card deck with its tuck box, three cards fanned
5. The nomination card and invitation card as a pair, showing the edge paint and letterpress
6. The exhibitor booth at 1:20 with a human-height reference
7. The desk object, single hero render
8. The giveaway family: tote, bottle, notebook, pen, toque, arranged as one product family under consistent light

---

## 5. Print-ready artwork rules

Every artwork file is built with four layers, named exactly:

1. `Artwork` — all visible content
2. `Bleed` — the 3mm extension, filled
3. `Guides` — trim line, safety margin, fold lines, all in a non-printing colour, clearly marked
4. `Finishing` — foil, deboss, spot UV, die line, each as its own named sublayer of solid shapes with overprint on

Additional rules:

- Build at 100 percent final size. Never build small and scale. The only exceptions are the booth backwall and the A1 signage, which build at 1:10 with the scale factor stated on the spec card.
- Any item that folds gets fold lines on the `Guides` layer with the fold direction labelled. Creasing, not scoring, on anything above 250gsm.
- Any item that is double-sided gets front and back as separate artboards at identical dimensions, labelled `_front` and `_back`.
- Where a mark sits near a fold or a trim, verify against the clear space rule in section 1 before export.
- Editable data items, meaning place cards, composition cards, badge inserts and certificates, are built as templates with the variable fields on a separate layer named `Variable` and a plain-text data schema supplied alongside.

---

## 6. Pre-press handoff checklist

Supply this with every artwork file so nothing is lost between design and press.

- [ ] Convert to CMYK using the printer's supplied ICC profile. If none is supplied, use FOGRA39 for coated and FOGRA47 for uncoated, and state which was used.
- [ ] Brand red set as a spot swatch where the item is specified as spot, named `MTN Red`. Confirmed against a physical Pantone book, not a screen.
- [ ] All text black is K100 single channel. Verified by separation preview.
- [ ] All large dark areas are rich black at C60 M40 Y40 K100 and no dark build exceeds the total ink limit for the chosen stock.
- [ ] All fonts outlined. Live-text version archived separately.
- [ ] All raster content at 300 ppi minimum at final size, verified after any scaling.
- [ ] Bleed present on all four sides at the stated amount, with content genuinely extending into it rather than stopping at trim.
- [ ] Nothing critical inside the safety margin.
- [ ] Finishing layers present, named, set to overprint, and not included in the CMYK separations.
- [ ] Die lines on their own spot channel, set to overprint, removed or clearly flagged before final export.
- [ ] Export as PDF/X-4 for anything with transparency or spot finishing. PDF/X-1a:2001 for flat process work.
- [ ] Request a physical proof on the specified stock before any run above 250 units. Screen approval is never sufficient for foil, deboss, edge paint or any spot colour.

---

## 7. Rollout order

Build in this sequence so the first dinner is fully equipped before anything optional is made.

**Before dinner one:** B1 place card, B2 composition card, B5 introduction slip, B7 napkin band, D1 nomination card, E1 business cards. These six make a room look composed for very little money.

**Before member one:** A1 member card, A2 welcome letter, A3 sleeve, A5 pin. The kit can ship without the notebook if timing is tight; it cannot ship without the card.

**Before chapter two:** D2 invitation card, B8 seating map, A4 notebook, B4 conversation cards.

**Before the summit:** the whole of Group C.

**Ongoing:** Group D as budget allows, with the nomination card and the desk object prioritised over apparel, because one drives acquisition and the other drives partnership.

---

## 8. Acceptance test

Run these on every item before it is considered finished.

1. **Three-output test.** Mockup, artwork and spec card all exist. No item ships with two of three.
2. **Small-mark test.** Print the artwork at actual size on a home printer. If the mark breaks up, switch to the compact or single-line version.
3. **Clear space test.** Measure the space around every mark against the rule in section 1. Trim edges count.
4. **Ink test.** No dark build exceeds the total ink limit. No text is set in rich or registration black.
5. **Restraint test.** Cover the mark on any giveaway item. If the object still looks like conference swag, redesign it. The test for every item in Group D is whether someone would keep it if it were unbranded.
6. **Table test.** Lay out the full Group B set as one setting. It should read as one designed system, not seven separate prints.
7. **Zoom test.** At 200 percent nothing looks like a glyph, a default, or an accident.
