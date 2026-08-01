# MedTech North — Internal & Investor Deck
## Design instructions for Claude Design

---

## 0. What this is, and how it differs from the pricing deck

This is the **internal and investor counterpart** to the member-facing pricing deck. Same brand, same craft standard, opposite register.

The pricing deck sells belonging. This one proves arithmetic. A member should never see it, and an investor should be able to interrogate every number on screen without asking for the spreadsheet.

**The register shift, stated plainly for the build:**

| | Pricing deck | This deck |
|---|---|---|
| Job | Make someone want the room | Make someone believe the model |
| Hero object | 3D merch, booths, member cards | Data: charts, ceilings, sensitivity grids |
| Color role | Tier identity and desire | Signal: healthy, watch, risk |
| Motion | Illumination, delight | Interrogation: hover to see the arithmetic |
| Tone | Warm, aspirational | Cool, exact, unflinching |

**Format:** HTML deck, 16:9, 1920 x 1080, keyboard and scroll navigable, each slide individually exportable as PNG. Single file with slide sections.

**Carried forward unchanged:** the MedTech North design system for typography, palette and spacing tokens. The logo-derived geometry. The craft bans, which are absolute: custom-drawn SVG and CSS only, no emoji, no icon fonts, no stock icons, no CSS blur as an effect, no default-sized anything, everything on an 8px grid, nothing that looks like a glyph at 200 percent zoom.

**Every number comes from the internal financial model workbook. Do not recalculate, re-round or invent a single figure.**

---

## 1. Visual language for a numbers deck

### 1.1 The logo as data geometry

The mark is an up-triangle and a down-triangle meeting at a line. In the pricing deck that line was a table. Here it becomes the **axis**.

- **Zero line.** The seam where the triangles meet is the zero baseline on every chart. Values above it are contribution, below it is cost. This single idea makes the mark structural rather than decorative.
- **The up-triangle** is used for revenue, contribution and growth. **The down-triangle** for cost, churn and risk. Consistently, everywhere, without exception.
- **Chart marks** are built from the triangle geometry: bar caps, data points, legend keys.
- **Section markers** use the four tier icons already built (Guest through Chief) wherever a slide is tier-specific.

### 1.2 Color as signal, not decoration

Three semantic roles, drawn from the design system palette. Define them once and apply mechanically.

| Role | Applied to |
|---|---|
| **Positive** | Contribution, surplus, revenue, healthy ratios, base and bull scenarios |
| **Neutral** | Structural elements, assumptions not yet tested, capacity headroom |
| **Attention** | Costs, the bear case, High severity risks, capacity above 90 percent, any figure flagged as the weakest assumption |

**Critical rule: attention is not alarm.** This deck's credibility comes from showing its own weak points confidently. Attention-coded cells should read as "we know" rather than "we're worried." No red-alert treatment, no warning triangles, no negative iconography.

**Assumption coding.** Every figure that is an assumption rather than a calculation carries a small drawn marker: a hollow dot before the number. Investors should be able to see, at a glance, which numbers are inputs and which are outputs. This is the single most trust-building detail in the deck. Include a persistent legend for it in the footer.

### 1.3 Table treatment

Reuse the pricing deck's table system with the color layer swapped from tier identity to signal, and add two things:

- **Formula reveal on hover.** Hovering any calculated cell shows the arithmetic that produced it, drawn as a tooltip. Example, on the chapter ceiling cell: "80 paying seat-slots ÷ 2.3 dinners attended = 34.8 members." This is the deck's signature interaction and it should work on every calculated number in the deck.
- **Driver highlight.** Hovering an assumption cell illuminates every downstream figure it feeds, across the whole slide, with a drawn connector line. Hovering "partner-hosted share" lights up blended seat cost, dinner delivery cost, and net contribution. This makes the model's dependency structure visible without a diagram.

Row hover, column hover and the illumination treatment carry over from the pricing deck unchanged.

---

## 2. Charts and 3D objects

Fewer objects than the pricing deck, and they are all information. No merch, no booths, no lifestyle mockups anywhere in this deck.

| Object | Slide | Direction |
|---|---|---|
| **The capacity cylinder** | Capacity slide | A 3D cylinder representing one chapter's annual seat supply, filled to the current utilisation level, with the ceiling drawn as a hard rim. Four of them side by side for the four cadences (4, 6, 8, 12 dinners). Hovering one shows its member ceiling and revenue. The single most important object in the deck. |
| **Revenue composition stack** | Revenue mix slide | A three-year stacked column where each stream is a distinct band. Membership is deliberately the thin band. Hovering a band lifts it out of the stack and shows its share. |
| **The sensitivity surface** | Sensitivity slide | A 3D surface plot over the two-axis grid (partner-hosted share by sponsor level), with the zero plane drawn using the logo seam. The base case sits as a marked point on the surface. Rotates on cursor. This makes the $160,000 swing physical rather than tabular. |
| **Scenario fan** | Scenarios slide | Three lines diverging from a common origin (bear, base, bull), with the area between them shaded. The bear line is drawn solid and given equal visual weight, not treated as an afterthought. |
| **Unit economics waterfall** | Unit economics slide | Per tier: fee at the top, cost components stepping down, contribution at the base. One waterfall per tier, four across. |
| **LTV bars with an uncertainty band** | LTV slide | Bars for LTV by tier, each with a drawn uncertainty band showing the range if retention lands 25 points lower. The band is the point of the chart, not an annotation on it. |
| **Extruded chapter map** | Expansion slide | The five cities on an extruded Canada, each city rendered as a capacity cylinder at its own fill level. Reuses two objects at once. |

**Lighting rule:** one primary light upper left, one soft fill, drawn contact shadows, consistent across every object so the deck reads as one set.

---

## 3. Slide-by-slide build

### Slide 1. Cover
Extruded logo mark, still rather than rotating. Title: "Unit Economics and Financial Basis". Subtitle: "Internal and investor use. Assumption-based planning model." Persistent corner label reading INTERNAL on this and every subsequent slide, small and permanent.

### Slide 2. The honest opening
One line, large, alone: **"This model projects a business that has not yet held its first dinner. Every number is a hypothesis with arithmetic attached."** Nothing else on the slide. Leading with the limitation is what earns the next twenty.

### Slide 3. The model in one picture
A single drawn diagram: guests flow in free, members pay to be near them, sponsors pay for the composition, the programme funds itself. Annotate with the three share figures (membership 29%, sponsorship 50%). No table yet.

### Slide 4. Finding 1 — the chapter ceiling
The capacity cylinders at hero scale. The arithmetic drawn as a visible chain: 40 seats → 50% guests → 20 paying seats → × 4 dinners = 80 slots → ÷ 2.3 attended = **34.8 members.** Each step of the chain hoverable. Below: the cadence table showing 4, 6, 8, 12 dinners and the resulting ceilings and five-chapter revenue.

### Slide 5. What Finding 1 means
Three statements, generous spacing, no chart: growth comes from cities and cadence not from selling harder; membership can never be the main line; a waitlist is scarcity proof that prices the sponsorship.

### Slide 6. Finding 2 — revenue composition
The stacked column across three years, with membership and sponsorship shares called out as display figures. This slide has to land the point that membership is a qualification mechanism, not the revenue engine.

### Slide 7. Unit economics by tier
Four waterfalls. Sponsored and unsponsored toggle. Guest column present and explicitly labelled as acquisition cost for the sponsorship business, not as a loss.

### Slide 8. Lifetime value, with the caveat visible
LTV bars with uncertainty bands. The caveat is typeset at the same weight as the numbers, not in a footnote: retention has no history, these are directional until two renewal cycles run.

### Slide 9. Finding 3 — the dinner programme
The sensitivity surface at hero scale, rotating on cursor. The base case marked. Headline: the programme is exactly self-funding at base, and swings $160,000 either side.

### Slide 10. Three-year build
The full P&L table with formula reveal on every calculated cell. Founder compensation is a visible line, not buried. Margin decline is annotated as intended rather than left to be asked about.

### Slide 11. Scenarios
The scenario fan plus the comparison table. Give the bear case equal visual weight and put its net contribution figure in display type. The message is that the downside clears zero.

### Slide 12. Break-even
One number, large: zero paying members required to cover the fixed base at base sponsorship. Beneath it, the arithmetic that gets there, drawn as the chain treatment from slide 4.

### Slide 13. The risk register
Ten risks, severity-coded, with mitigation beside each. Do not soften these. The four High severity rows should be the most visually prominent content on the slide.

### Slide 14. Assumption register
Ranked by damage-if-wrong, with the impact quantified. Include the counter-intuitive one prominently: higher attendance lowers the chapter ceiling, because engaged members consume more of a fixed seat supply.

### Slide 15. What we build next
The five items that turn this into a full model: monthly cohort engine, cash timing, seat-by-seat summit build, chapter unit model, actuals capture. Frame the last one as the most valuable: three dinners of real data will move this model more than any further modelling.

### Slide 16. Close
No call to action, no ask. A single restated line: what we are building is a room with a hard seat limit, funded by the people who want to be near the people who fill it. Extruded mark, small.

---

## 4. Content rules

- Every figure traces to the internal financial model workbook. Do not recalculate or re-round.
- All figures CAD and tax-exclusive. Persistent small line: "CAD, exclusive of applicable taxes. Assumption-based planning model, not financial advice."
- **Never present an assumption as a measurement.** The hollow-dot marker is mandatory on every assumed figure.
- No hockey-stick framing. No TAM slide. No "conservative estimate" language attached to anything that has not been measured.
- The register is cool and exact. No sales language, no superlatives, no exclamation marks. Where the model is weak, the slide says so at the same type weight as where it is strong.
- INTERNAL label persists on every slide including exports.

---

## 5. Responsive, export and accessibility

- Desktop 1920 and 1440: full system, all hover reveals, all 3D rotation.
- Tablet: 3D objects hold with rotation off, tables reflow to two columns with a year switcher.
- Mobile: charts become vertical stacks, all hover reveals become tap-toggled or shown by default. No arithmetic lives behind hover alone.
- Each slide exports individually as PNG at 1920 x 1080 with hover states at rest and the INTERNAL label intact.
- prefers-reduced-motion collapses rotation and parallax to static frames; every number remains reachable.
- All signal coding must be distinguishable by shape and position as well as color.

---

## 6. Acceptance test

1. **Traceability test.** Pick any five numbers at random. Each must reveal its arithmetic on hover and match the workbook exactly.
2. **Assumption test.** Every assumed figure carries the hollow-dot marker. Every calculated figure does not. No exceptions.
3. **Weakness test.** The bear case, the four High risks and the summit revenue caveat are as visually prominent as the positive findings. If the deck reads as one-sided, rebuild it.
4. **Register test.** No slide could be mistaken for the member-facing pricing deck. No merch, no booths, no aspirational copy.
5. **Chain test.** The capacity arithmetic on slide 4 is legible as a chain of steps without reading a caption.
6. **Zoom test.** At 200 percent nothing looks like a glyph, a default, or an accident.
