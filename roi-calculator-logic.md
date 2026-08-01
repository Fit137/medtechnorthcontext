# ROI Calculator — Logic & Math Specification

**Slide 12 of the MedTech North internal and investor deck.**
Companion to `slide-roi-calculator.html`. This document is the source of truth for the arithmetic. If the model changes, change it in the internal financial model workbook first, then mirror it here, then mirror it in the HTML.

---

## 1. What the calculator answers

One question: **at these settings, what does a year look like, and does the round clear?**

It is a **steady-state annual** model, not a year-by-year build. It does not ramp, does not compound and does not track cohorts. It takes a configuration of the business and returns the annual economics of that configuration. That limitation is deliberate; it keeps every number on screen traceable to one line of arithmetic that an investor can interrogate in real time.

---

## 2. Constants

Carried unchanged from the internal financial model workbook. Never edited in the calculator.

| Constant | Value | Provenance |
|---|---|---|
| Seats per dinner | 40 | The format. Changing it changes the product |
| Paying-member share of seats | 50% | Composition rule: one to one builders to validators |
| Average dinners attended per member | 2.3 | Typical redemption of 4 available |
| Dinner seat cost, restaurant | $105 | TO and VAN benchmark |
| Dinner seat cost, partner-hosted | $55 | Donated venue, catering only |
| Summit cost per attendee | $200 | Venue, AV, catering, staffing |
| Summit revenue per attendee | $237 | Derived: $90,000 over 380 attendees |
| À la carte revenue per member | $147 | Derived: $22,000 over 150 members |
| Welcome kit, blended | $54 | 53/35/12 tier mix over $45 / $45 / $120 |
| Platform and ops per member | $25 | Applied to guests as well as paying members |
| Cohort programme, annual | $1,200 | 8 sessions at $150. Fixed, not per member |
| Blended CAC | $220 | Weighted across tiers |
| New member share of base | 50% | Share of the base acquired fresh each year |
| Guest ratio | 1.5 | Hosted guests required per paying member |
| Anchor partner fee | $35,000 | Band is $25,000 to $60,000 |
| Category partner fee | $15,000 | Band is $10,000 to $25,000 |
| Summit sponsor fee | $25,000 | Band is $10,000 to $50,000 |
| Blended ARPU | $784.20 | `0.53 × 290 + 0.35 × 790 + 0.12 × 2,950` |

---

## 3. Inputs

Thirteen sliders. Every one is an assumption and carries the hollow-dot marker.

| Input | Range | Step | Base default |
|---|---|---|---|
| `chapters` — city chapters live | 1 to 8 | 1 | 5 |
| `cadence` — dinners per chapter per year | 4 to 12 | 1 | 4 |
| `util` — seat capacity filled | 40% to 100% | 1% | 86% |
| `summits` — summits per year | 0 to 4 | 1 | 2 |
| `satt` — summit attendees, all summits | 100 to 800 | 10 | 380 |
| `ph` — dinners in partner-hosted venues | 0% to 100% | 5% | 50% |
| `att` — dinners with a sponsor | 0% to 100% | 5% | 80% |
| `chq` — sponsor cheque per dinner | $2,000 to $8,000 | $250 | $4,000 |
| `anc` — anchor partners | 0 to 3 | 1 | 1 |
| `cat` — category-exclusive partners | 0 to 8 | 1 | 3 |
| `cap` — capital invested | $50,000 to $1,000,000 | $25,000 | $150,000 |
| `eq` — equity taken | 5% to 40% | 1% | 15% |
| `mult` — exit multiple on net contribution | 3x to 8x | 0.5 | 5x |

**Note there is no direct control for member count.** That is the central design decision. Members are derived from the capacity chain below, so nobody can slide their way past the physical limit of the business.

---

## 4. The derivation chain

This is the spine of the model. Everything else hangs off it.

```
dinners        = chapters × cadence
payingSeats    = 40 × 0.50                          = 20 per dinner
seatSlots      = dinners × payingSeats
ceiling        = seatSlots ÷ 2.3
members        = ceiling × util
guests         = members × 1.5
seatCost       = 105 × (1 − ph) + 55 × ph
satt_effective = summits > 0 ? satt : 0
```

Worked at base settings:

```
dinners      = 5 × 4                = 20
seatSlots    = 20 × 20              = 400
ceiling      = 400 ÷ 2.3            = 173.9
members      = 173.9 × 0.86         = 149.6
guests       = 149.6 × 1.5          = 224.4
seatCost     = 105 × 0.5 + 55 × 0.5 = $80
```

---

## 5. Revenue

```
revMembership = members × 784.20
revDinnerSpon = dinners × chq × att
revPartners   = anc × 35,000 + cat × 15,000
revSummit     = summits × 25,000 + satt_effective × 237
revAlaCarte   = members × 147

revenue       = revMembership + revDinnerSpon + revPartners + revSummit + revAlaCarte
```

At base:

| Line | Calculation | Result |
|---|---|---|
| Membership | 149.6 × 784.20 | $117,320 |
| Dinner sponsorship | 20 × 4,000 × 0.80 | $64,000 |
| Anchor and category | 1 × 35,000 + 3 × 15,000 | $80,000 |
| Summit | 2 × 25,000 + 380 × 237 | $140,060 |
| À la carte | 149.6 × 147 | $21,991 |
| **Total revenue** | | **$423,335** |

---

## 6. Cost

```
costDinner  = dinners × 40 × seatCost
costSummit  = satt_effective × 200
costMember  = members × 54
            + (members + guests) × 25
            + 1,200
            + members × 0.50 × 220
costFixed   = (22,000 + chapters × 8,000)      // operating
            + (20,000 + chapters × 8,000)      // team

cost        = costDinner + costSummit + costMember + costFixed
```

At base:

| Line | Calculation | Result |
|---|---|---|
| Dinner delivery | 20 × 40 × 80 | $64,000 |
| Summit delivery | 380 × 200 | $76,000 |
| Member servicing and acquisition | kits + platform + cohorts + CAC | $35,077 |
| Fixed operating and team | (22,000 + 40,000) + (20,000 + 40,000) | $122,000 |
| **Total cost** | | **$297,077** |

---

## 7. Results

```
net        = revenue − cost
margin     = net ÷ revenue
dinnerNet  = revDinnerSpon − costDinner          // Finding 3, live
roi        = net ÷ cap
payback    = net > 0 ? cap ÷ net : null          // years
ev         = net × mult
post       = cap ÷ eq                            // implied post-money
gap        = ev − post
headroom   = ceiling − members
```

At base:

| Output | Result |
|---|---|
| Net contribution | $126,259 |
| Net margin | 29.8% |
| Dinner programme net | $0 |
| Return on capital | 84% |
| Capital payback | 1.2 years |
| Enterprise value at 5x | $631,293 |
| Implied post-money | $1,000,000 |
| **Gap** | **−$368,707** |

---

## 8. Presets

| | Bear | Base | Bull |
|---|---|---|---|
| chapters | 3 | 5 | 5 |
| cadence | 4 | 4 | 8 |
| util | 65% | 86% | 95% |
| summits | 1 | 2 | 2 |
| satt | 180 | 380 | 450 |
| ph | 25% | 50% | 75% |
| att | 50% | 80% | 100% |
| chq | $3,000 | $4,000 | $5,000 |
| anc | 1 | 1 | 2 |
| cat | 1 | 3 | 5 |
| **Net contribution** | **$11,857** | **$126,259** | **$413,307** |
| Dinner programme net | −$26,400 | $0 | +$92,000 |
| Enterprise value | $47,428 | $631,293 | $2,479,844 |

The active preset highlight clears the moment any slider moves, so it is always clear whether the room is looking at a named scenario or a custom one.

---

## 9. The three behaviours the calculator is built to demonstrate

**The constraint is physical.** The capacity gauge turns to attention colour above 90 percent and the note switches to: open a chapter or raise cadence, do not add seats, composition is the product. There is no way to override it, because there is no member slider.

**Finding 3 is live, not annotated.** At base settings `dinnerNet` is exactly zero: twenty dinners at $64,000 of delivery against $64,000 of sponsorship. Drag partner-hosted venues or sponsor attach downward and the panel flips to "the dinner programme costs $X a year. Membership revenue is paying for food."

**The round does not clear at base, and that is the point.** Five chapters at quarterly cadence support a $631,000 enterprise value against a $1,000,000 implied post-money. The investor finds the gap themselves, then finds the way out:

| Configuration | Net | EV at 5x | Gap vs $1M post-money |
|---|---|---|---|
| 5 chapters, quarterly (base) | $126,259 | $631,293 | −$368,707 |
| 5 chapters, 6 dinners a year | $178,958 | $894,790 | −$105,210 |
| 5 chapters, 8 dinners, 5 category partners | $261,657 | $1,308,286 | **+$308,286** |

The slide therefore answers a concrete question rather than telling a story: **the raise is supported at five chapters running eight dinners a year with five category partners, and not before.**

---

## 10. Guard conditions

- If `summits = 0`, summit attendees are forced to zero for both revenue and cost. The readout shows "n/a".
- If `net ≤ 0`, payback returns null and displays "n/a". The net contribution tile switches from positive to attention colour.
- Payback above 10 years displays "10+ yrs" rather than a misleading precise figure.
- Utilisation is capped at 100% in the gauge fill so the bar cannot overflow.
- All money rounds to whole dollars at display time only. Never round inside the calculation chain.

---

## 11. Validation

Base settings reproduce year two of the internal financial model:

| | Calculator | Workbook | Delta |
|---|---|---|---|
| Revenue | $423,335 | $423,380 | 0.01% |
| Net contribution | $126,259 | $122,430 | 3.1% |
| Member ceiling | 174 | 174 | exact |
| Paying members | 150 | 150 | exact |
| Blended seat cost | $80 | $80 | exact |

The 3.1 percent delta on net sits in the fixed and team cost lines, where the calculator scales linearly per chapter while the workbook uses discrete year-by-year figures. The calculator is marginally the more conservative of the two, which is the correct direction for an investor-facing tool.

---

*CAD, exclusive of applicable taxes. Assumption-based planning model, not financial advice.*
