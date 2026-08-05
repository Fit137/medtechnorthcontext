# Partner Deck v2: Update Scope and Claude Design Instruction

Two parts. Part A is the scope of change in plain terms. Part B is the paste-ready instruction for Claude Design.

Source of truth: `docs/16-product-architecture.md` and `ADR-022`. Audit of the current deck: `docs/15-partner-deck-audit.md`.

---

# PART A. Update scope

## What changed, in one line

The deck sells one thing, a $85,000 Toronto partnership year built on twelve dinners of forty. **It now sells three things at three different promises**, and the guarantee stops being a liability we cannot absorb.

## The three products

| | **Monthly Meetup** | **Calendar Dinner** | **Convening** |
|---|---|---|---|
| Composition promised | **None** | **None** | **Yes, to their written brief** |
| Room | ~30, mixed | 50 to 100, mixed | Target 50, floor 25 |
| Cadence | Monthly, already running | Quarterly, planned | On demand |
| Venue | Our GTA venue | Our venue | Their HQ, or Toronto for US buyers |
| Attendee list | **Yes, opted-in only** | Never | Never |
| Presentation | **Yes, 10 to 15 min** | Welcome only, 2 min | No deck, no demo |
| Entry | **$2,500** | **$4,500** | **$25,000** |
| Annual | $24,000 for 12 | $14,400 for 4 | $72,000 for 4 · $96,000 for 6 |
| Category exclusivity | That night | That dinner, up to 3 partners | Full |

**The meetup sells exposure. The dinner and the convening sell composition.** Both honest, not the same purchase.

## The guarantee, rebuilt

Old: thirty conversations or the year is free, and you keep the dinners. That refunds revenue after the costs are spent, so the loss is larger than the margin.

New principle: **we return margin, we do not eat capital.**

- **The floor is 50% of target**, stated openly, because free-attendance events run 40 to 60% no-show. Convening target 50, floor 25 matching the brief
- **Miss once:** the next convening is free. We absorb delivery, no cash leaves
- **Miss twice:** their choice. Full refund of every fee paid including delivered convenings, relationship ends. Or stay on **pay-per-attendee at $700 per verified attendee matching the brief**

Caps: refund never exceeds fees paid, brief within 14 days, their own seat-holders attend, no pitching by them, floor counts people matching the brief rather than headcount.

## The Brief, $4,500, credited in full

Before any convening. We return exactly who we would seat and whether we can get them. **If we cannot fill it, they spent $4,500 instead of $25,000.** This is also what stops the guarantee triggering, because we only sign what we have shown we can fill.

## Six corrections carried over from the audit

1. **"Every Royal College specialty" must go.** Zero physicians have attended the recorded rooms. Name what actually assembles
2. **Composition published to partners two weeks out becomes by role, never by name**
3. **"You may veto anyone" becomes: they name awkward categories, we run the conflict check.** They never see individuals before the room
4. **Forty seats is gone.** Meetup 30, calendar dinner 50 to 100, convening target 50
5. **Summit standing is removed from every stack.** No summit is committed
6. **Teardown figures are unsourced.** Either source them or convert the slide into the discovery question

## One argument that must change

Slide 4 currently says the exposure model is what everyone else sells and composition is what only we sell. **We now sell exposure too, at the bottom of the ladder.** Composition stays the premium. Exposure stops being the villain.

---

# PART B. Claude Design instruction

Paste everything below into Claude Design.

---

## Context

You are updating an existing 13-slide HTML deck called "MedTech North · Partner Deck". Keep the visual system exactly as it is: the red `#c41230`, the ink `#16191d`, the typography, the slide numbering, the running-on-its-own animated slides, and the general restraint. **This is a content and structure update, not a redesign.** Do not restyle anything that is not named below.

**Writing rules, absolute, no exceptions:**
- No em dashes and no en dashes anywhere. Use commas, colons, full stops. This includes number ranges: write "$25,000 to $45,000", never with a dash
- No exclamation marks, no urgency devices, no second-person hype
- Banned words: leverage, unlock, synergy, seamless, streamline, empower, cutting-edge, game-changer, revolutionize, best-in-class, robust, elevate, transform, landscape, foster
- Scarcity is a property of the format, never pressure. "Three category holds is the whole year" works. "Limited spots" does not
- Register is executive. Write as you would to a hospital chief of staff
- Never imply professional credit, accreditation, endorsement, or any promised commercial result

---

## Slide 1. Cover

Keep the layout. Change the framing from one partnership year to three ways in.

- Subtitle becomes: **Three rooms · 2026 · Toronto**
- Keep the line "You cannot buy this room. You can help compose it."
- Replace the standfirst with: *MedTech North is a curated network for Canadian health innovation. Clinicians, researchers and policy leaders sit here free, by invitation. Founders apply and pay. Three different rooms, three different promises, and only one of them is a stage.*
- Replace the footer chips with: **Monthly Meetup · Calendar Dinner · Convening**

## Slide 2. Composition

**Delete "Every Royal College specialty" entirely.** This is the most important change in the deck.

Replace the clinicians line with: *Dentists, clinical pharmacists, physiotherapists, nurses and allied health, practice owners, researchers and academics. Free, forever.*

Change the closing line to: *Composed against a target ratio in the convening. The monthly meetup and the calendar dinner are mixed rooms, and we do not pretend otherwise.*

Remove "table of forty" and "twelve times a year".

## Slide 3. The problem

Keep as is. It is the strongest writing in the deck and nothing in it has gone stale.

## Slide 4. Two models

Keep the two-column structure and the animation. Rewrite so we are no longer attacking a thing we sell.

- Left column heading stays **The exposure model**. Body: *Buy attention. A stage, a list, a logo. Measured in impressions and follow-ups. Useful, honest, and available in many places. We sell one of these, at the bottom of our ladder, and we tell you that is what it is.*
- Right column stays **The composition model**. Body: *Buy a hand in who is in the room, and a seat in it as a peer. Measured in composed conversations. Nobody is anyone's prospect. Your category is held, so a competitor cannot buy in behind you.*
- Closing line becomes: *Most organisations can sell you exposure. The second column is the one that took two years of refusing things to build.*

## Slide 5. REPLACE ENTIRELY. The three rooms

Delete the eight-item $120,000 stack. Build a three-column comparison, the same visual weight as the current stack, animated to step through the columns.

Headline: **Three rooms. Three different promises.**
Standfirst: *The price follows what we promise, not how many people are in the room.*

| | Monthly Meetup | Calendar Dinner | Convening |
|---|---|---|---|
| **Entry** | $2,500 | $4,500 | $25,000 |
| **Annual** | $24,000, twelve | $14,400, four | $72,000 four · $96,000 six |
| Room | About 30, mixed | 50 to 100, mixed | Target 50, floor 25 |
| Composition promised | No | No | **Yes, to your brief** |
| Presentation | Yes, 10 to 15 minutes | A two minute welcome | No deck, no demo |
| Attendee contacts | Those who opted in | None | None |
| Category held | That night | That dinner | Full |
| Venue | Ours | Ours | Yours, or ours in Toronto |

Footer line: *The meetup is a stage and a list. The convening is a room built to your brief. Nothing in between pretends to be either.*

## Slide 6. The teardown

Keep the slide and the frame, it is the best commercial argument in the deck. Two changes.

**Rebase every figure to a convening of 50 invited, 25 attending**, not twelve dinners of forty.

**Every retained number needs a visible source line, or it goes.** Any figure without a source must be deleted rather than softened. Then add a closing block, styled as the emphasis line:

> *Every number above is what it would cost you to build it. We would rather use yours. What did your last assembled executive dinner cost, all in, and how many of the right people were in the room?*

Keep the three unpurchasable rows (category protection, clinicians attending unpaid, a room where you are not permitted to sell) exactly as they are.

## Slide 7. The terms of the room

Keep all four rules and the "the restrictions are the asset" framing. This is the best slide in the deck.

Add one qualifying line under the heading: *These four rules govern the calendar dinner and the convening. The monthly meetup is an open room with a stage and a consented list, and we say so on the invitation.*

Change the "No attendee data harvesting" body to: *No contact details leave a dinner or a convening, ever. Introductions are personal, one at a time, with consent asked first.*

## Slide 8. REPLACE ENTIRELY. The ladder

Delete the four tiers at $7,500 / $34,000 / $85,000 / $180,000. Replace with four rungs, same animated stepping treatment.

**Rung 1. Monthly Meetup · $2,500 per meetup**
About 30 people, mixed. A 10 to 15 minute presentation. Two seats. The attendees who opted in to hear from you. One sponsor a night. *Twelve for $24,000.*

**Rung 2. Calendar Dinner · $4,500 per dinner**
50 to 100 people, mixed, not tailored. A two minute welcome, not a keynote. Two seats as peers. Your category held for that dinner. A composition report and three consented introductions. No list. *Four for $14,400.*

**Rung 3. The Brief · $4,500, credited in full**
Before you commit to a convening. We come back with exactly who we would seat and whether we can get them. If we cannot fill it, you spent $4,500 instead of $25,000.

**Rung 4. Convening · $25,000**
Built to your written brief. Target 50, guaranteed floor 25. Your building, or a Toronto venue if you are coming from outside Canada. Category held. Composition report, insight brief, five consented introductions. *Four for $72,000. Six for $96,000.*

Footer: *Pay per room at every rung. The annual rate is what commitment earns, not what entry costs.*

## Slide 9. The Convening

Keep the structure. Update the specifics.

- Heading becomes **The Convening · your building, or ours**
- Add the two venue paths as a short pair: *Canadian companies host in their own offices. Companies outside Canada fly in, and we arrange the Toronto room.*
- Change "~22 people, not 40" to **"Target 50 invited. Guaranteed floor of 25 attending and matching your brief."**
- **Change "You may veto anyone; you may not pick them"** to: *You set the brief and name any category you would find awkward. We run the conflict check and compose the room. You see roles before the evening, never names.*
- Keep "Start here, The Brief, $4,500" and the credited-in-full mechanic. Move it visually to the top of the slide, it is the entry point
- Pricing block becomes: **one convening $25,000 · four across a year $72,000 · six across a year $96,000**
- Keep the four rules travelling line and "Guests are told who is hosting before they accept"

## Slide 10. 2026 capacity

- Re-date the founding period. It is now August 2026, so twelve dinners this year is not possible. Change to **a founding half-year, or move the founding year to 2027.** Pick one and be consistent across slides 1, 10 and 12
- Remove "table of forty" and rebase the commercial cap on the new room sizes
- Remove the $20,000 activation fee unless it is a real line item. If kept, it must appear as a cost somewhere, not only as a waiver

## Slide 11. REPLACE ENTIRELY. The guarantee

Delete "thirty conversations or the year is free" and the "you keep the dinners" clause.

Headline: **We guarantee half, in writing, because half is what free attendance actually delivers.**

Standfirst: *Events people attend for free run 40 to 60% no-show. Everyone in this industry knows it and most decks pretend otherwise. We state the target and guarantee the floor.*

Then three steps as a vertical sequence, styled like the current step treatment:

**The floor.** You brief 50. We guarantee 25 in the room who match that brief, counted by role in the composition report.

**If we miss it.** The next convening is free. We absorb the whole cost of it. Nothing changes on your side.

**If we miss it twice.** Your choice, not ours.
- *Every fee you have paid comes back, including convenings already delivered, and we stop. If we cannot assemble half of what you asked for twice, either the brief has no market or we are the wrong people, and keeping your money for that is indefensible.*
- *Or you stay and switch to $700 per verified attendee who matches your brief. No minimum, no commitment. Some briefs are worth running at eighteen.*

Conditions block, in the small type used on the current slide 11: *Your brief arrives within 14 days of signing · your named seat-holders attend · nobody at your table is pitched, and a breach of that voids the guarantee, and we will tell you it has · the floor counts people who match the brief, not headcount · a refund never exceeds the fees you have paid.*

Bottom-corner marker: **The floor · 25 of 50**

## Slide 12. The rhythm

Rebuild against the new products.

- **Every month:** the meetup runs. Open room, one sponsor
- **Quarterly:** a calendar dinner, 50 to 100, published in advance
- **On demand:** a convening, briefed and composed
- Keep the chapter conversations line for Ottawa and Montreal
- **Remove the 2027 summit entirely.** Replace with: *A day of rooms, when there are enough rooms to fill a day.*
- Keep the annual composition report

## Slide 13. Close

Keep the headline "You can buy the dinner. You cannot buy the reason they came."

Update the call to action:
- *Come to a meetup. It is the cheapest way to see whether the room is real.*
- *If it is, tell us the brief you would set.*
- *We will come back with who we would seat and whether we can get them, for $4,500, credited in full.*

Keep: *Every tier is by conversation. Nothing here is listed publicly, and it never will be.*

---

## Final pass, do all four

1. **Search the whole deck for em dashes and en dashes and remove every one.** Including inside number ranges
2. **Search for "forty", "40 covers", "table of forty" and remove every instance.** Room sizes are now 30, 50 to 100, and target 50 floor 25
3. **Search for "summit" and remove every instance**, including the $12,000 line item on the old slide 5 and the 2027 entry on slide 12
4. **Search for "Royal College" and confirm it appears nowhere**
