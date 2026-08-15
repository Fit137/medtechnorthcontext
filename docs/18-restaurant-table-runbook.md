# Restaurant Table Runbook

> **INTERNAL.** Operating detail for the ticketed restaurant track. Decision record: `ADR-025`. Track definition: `ADR-024`.

---

## 1. The unit

One table, 24 seats, one named vertical, one restaurant, weeknight, 6:30 to 9:00 pm with the finish time stated in writing.

**Wednesday is the night.** Thursday competes with everything, Monday is the worst attended evening of the week, Friday loses anyone with family, and many practices close early on Friday.

| Seats | Class | Price | Revenue |
|---|---|---|---|
| 12 | Invited | $0 | $0 |
| 9 | Builder | $225 | $2,025 |
| 3 | Category Hold | $750 | $2,250 |
| **24** | | | **$4,275** |

Commercial presence is 3 of 24, rising to 6 if all three Category Holds bring their optional second person at $225. That stays well under the majority-service-provider line in `docs/03-icp-and-segments.md`.

## 2. The cost

| Line | Amount | Note |
|---|---|---|
| Food and non-alcoholic, 24 covers | $2,520 | $105 per seat, from the financial model via `ADR-021`. Includes HST and gratuity |
| Portrait station | $500 | One photographer, one lit station, 3 hours (`ADR-023`) |
| Print, name cards, seating card | $80 | |
| Contingency, 5% | $155 | |
| **Total** | **$3,255** | |

**Margin at full table: $1,020, or 24%.**

Alcohol is a cash bar on individual tabs. It never enters this table. The restaurant's licence carries the liability and we do not have commercial general liability insurance yet.

### Sensitivity

| Scenario | Invited | Builder | Hold | Revenue | Cost | Result |
|---|---|---|---|---|---|---|
| Full | 12 | 9 | 3 | $4,275 | $3,255 | **+$1,020** |
| Expected | 11 | 7 | 2 | $3,075 | $2,780 | **+$295** |
| Floor | 9 | 5 | 2 | $2,625 | $2,380 | **+$245** |
| Below floor | 8 | 3 | 1 | $1,425 | $1,940 | **−$515** |

**The floor is 2 Category Holds plus 5 Builder seats.** Below that the table loses money at any invited-side count.

## 3. Go or no-go

**One trigger, one date, decided in advance so it is not argued on the night.**

> **$2,600 collected and cleared by day −10. Below that, the table is postponed and every payment is returned in full within 48 hours.**

$2,600 covers a 16-person room including the portrait station. Day −10 sits three days ahead of the restaurant's usual seven-day soft count and a week ahead of the 72-hour final guarantee, so there is still room to release the booking without penalty.

A second, softer marker at **$4,000 by day −5** decides whether the table runs at 24 or is trimmed to 18.

## 4. Contracting the restaurant

Negotiate these five terms before signing anything. In order of how much money they are worth.

1. **A food and beverage minimum, not a room rental fee.** Spend counts toward it, so the risk moves to the restaurant
2. **Guaranteed minimum of 16, not 24.** This single term caps the downside and is the most important thing on the page
3. **Final count at 72 hours.** 48 if they will give it. Anything longer than 72 forces the go/no-go earlier
4. **A per-head rate held across a recurring monthly booking.** Committing to six Wednesdays is real negotiating power on a slow night and can move $105 down toward $85
5. **Confirm in writing whether they require a certificate of insurance.** If they do, insurance stops being a background item and becomes a hard blocker

Ask for a long single table or two parallel tables of 12. Never scattered rounds. The format is the table.

## 5. The 28-day sequence

Counting back from the table. Commercial outreach goes first because those buyers decide faster and their money de-risks the event.

| Day | Action | Gate |
|---|---|---|
| −28 | Restaurant contracted. Page live with one price. Invited-side outreach opens | |
| −28 to −21 | Category Hold outreach, direct and private. Target 8 conversations for 3 sales | |
| −21 | **6 to 8 invited guests confirmed by reply.** Composition now describable by role | Gate 1 |
| −21 to −14 | Sell Category Holds against that composition. No names disclosed | |
| −14 | **2 Category Holds closed** | Gate 2 |
| −14 to −10 | Builder seats pushed publicly and by direct message | |
| −10 | **$2,600 cleared. Go or postpone** | **Gate 3** |
| −7 | Remaining Builder seats. Invited side overbooked to 15 | |
| −5 | $4,000 marker. Run at 24 or trim to 18 | Gate 4 |
| −3 | Final guaranteed count to the restaurant. Seating plan fixed | |
| −2 | **Voice call to every invited guest.** Not a text | |
| −1 | Confirmation message with seat number, neighbour's name and role, finish time | |
| 0 | Run it | |
| +2 | Composition report to Category Hold buyers. Role and specialty, no names | |
| +7 | Consented introductions made personally (`ADR-021`) | |

**Twenty-eight days is the floor, not the target.** Senior owner-operators book a weeknight three to four weeks out. Two weeks is too short for this audience and six weeks is far enough away that they forget.

## 6. No early bird

**Rejected.** A discount ladder on a $225 seat prices the evening as a mixer, teaches the list to wait for the discount next time, and adds urgency pressure that `docs/07-brand-and-voice.md` forbids.

**Use the cap and the close date instead.** "Twenty-four seats. Registration closes 19 September or when the table is full." That is scarcity stated as a property of the format, which is allowed, rather than as pressure, which is not.

## 7. What the Category Hold contains

Quoted privately, never on the page. Seven items, all real, none of them a logo, a booth, stage time or a list.

| Item | Detail |
|---|---|
| **The category for that night** | No direct competitor admitted at any price (`ADR-020`). The only thing in the room exactly one company can hold |
| One seat | Second person optional at $225 |
| Composition report | Who was in the room by role and specialty, after the fact. No names, no contact data |
| Two consented introductions | Made personally, after the room (`ADR-021`) |
| Input on the question | They help shape the question asked at the portrait station. They do not own it and it is not their question |
| Their own portrait and short film | From the capture station. Marginal cost to us is zero and the object is worth more than the price |
| First refusal | Same category, next table, for seven days after |

**This is why seat-to-seat comparison does not arise.** A Builder buys attendance. A Category Hold buys the category, and attendance comes with it. Different purchases, stated that way in the quote.

### Naming

**Category Hold.** Alternate if it tests badly: **the Industry Seat**.

Rejected: anything containing sponsor, partner, tier, anchor, exhibitor or underwriter (`CLAUDE.md` rule 2, `ADR-007`), and every regulated professional title in rule 5.

### The qualifying route

The public page carries one price and a registration question asking what the person does. Anyone who sells into the room is routed to a short private form, and the code and the quote follow the form. **Never the other way round.** The form is what makes the private price feel earned rather than arbitrary.

## 8. Who gets an invited seat

Not a giveaway. **Free means chosen, not discounted** (`ADR-002`).

Priority order, and go for these on day one rather than after the money is in:

1. Practice owners in the named vertical, GTA
2. Department or programme leads at a named institution
3. Researchers with a named affiliation
4. The CEO already holding an RSVP, and the professors from rooms 001 and 002

The reason to fill these first is not generosity. **A Category Hold cannot be sold against a room that does not exist yet**, and describing the composition honestly requires the composition to be real.

## 9. The question worth asking on the night

On the way out, to invited guests only, conversationally: what would you have paid for this evening.

It costs nothing, it produces a real number instead of an argument, and it is the only thing that could ever support a future ADR arguing that `ADR-002` should be reversed. Log the answers in the event file.
