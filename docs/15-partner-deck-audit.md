# Partner Deck Audit

> **INTERNAL.** Audit date 2 August 2026. Deck audited: "MedTech North · Partner Deck", 13 slides, Toronto 2026 founding year.

The deck is good. The writing is strong, the teardown on slide 6 is the best commercial argument anyone has written for this business, and the four rules on slide 7 are exactly right. What follows is what has changed underneath it since it was written.

---

## Tier 1. Do not send until these are fixed

### 1. "Every Royal College specialty" (slide 2)

**The most dangerous line in the deck.** Zero physicians have attended either room. `ADR-012` says explicitly: do not write clinician-facing material as physician-first. `data/verified-stats.md` forbids implied composition claims.

A partner who signs on this line and then attends a room of dentists, pharmacists and physiotherapists has been misled. That is the one mistake that cannot be recovered from.

**Fix:** name the composition that actually assembles. Dentists, clinical pharmacists, physiotherapists, researchers, practice owners. It is a stronger claim anyway, because those people own their purchase decisions and hospital physicians do not.

### 2. "Composition published to partners two weeks out, who is at your table and why they matter to you" (slide 12)

**This is the guest list before the room.** It is on the never list in `ADR-020` and `ADR-021`, and it is the thing that stops a funded room becoming a curated one.

**Fix:** publish composition by **role**, never by name, before the room. Names only appear in the composition report afterwards, and only as counts. Consented introductions carry the individuals.

### 3. "You may veto anyone; you may not pick them" (slide 9)

A veto right requires seeing names. That is curation with extra steps, and it breaks the rule the whole product rests on: **hosting is fine, curating is not.**

**Fix:** the client sets the brief and names **categories** they would find awkward. We run the conflict check. They never see individuals before the room.

### 4. Forty seats

The deck says "table of forty" on slides 2, 6 and 10. `docs/14-dinner-programme.md` settled on **24**, because above roughly 24 one conversation splits into several and the single conversation is the product.

The deck already contradicts itself here: slide 9 says "~22 people, not 40. Tighter room, sharper brief." That instinct was right and it should govern the whole deck.

**Every number on slide 6 changes when the room is 24.**

### 5. The 2027 summit, sold as a line item

Slide 5 sells "Summit Standing $12,000" inside the $85,000 stack. Slide 8 promises summit standing from year two. Slide 12 promises a full-day Canada-wide summit in 2027.

`ADR-018` decided no summit in year one and set five conditions before one is reconsidered. **Selling standing in an event that may not happen is a refund liability written into the contract.**

**Fix:** replace with standing at the **day of rooms**, which is the format `ADR-018` actually committed to, or remove the line and reduce the stack.

### 6. Twelve dinners in Toronto in 2026

It is August. Five months remain. Twelve dinners is not achievable, and the deck sells a founding year built on that count.

**Fix:** either re-date the founding year to 2027, or sell a founding half-year of four to six rooms at a proportional rate.

---

## Tier 2. Data integrity

**Rule 4: every figure must trace to `data/verified-stats.md`. None of the slide 6 teardown figures do.**

| Deck figure | Status |
|---|---|
| $185 per cover, Toronto private dining | Not in verified stats. Our own model says $105 restaurant, $55 partner-hosted |
| $25,000 to $45,000 "standing agency band" per assembled executive dinner | Not sourced. This is the load-bearing number in a $578,000 argument |
| $75 loaded hourly rate | Not sourced |
| $35,000 custom research retainer | Not sourced |
| **$578,000 total** | Derived entirely from the above |

The teardown is the strongest slide in the deck **and** the most exposed. One buyer who asks "where does $35,000 an evening come from" and gets no answer loses the argument and some of the trust.

**Two fixes, do both.** Source each line or remove it. And convert the slide from an assertion into a question: **"what did your last assembled executive dinner cost you, all in?"** Their number is better than ours, it is unarguable, and asking it is the best sales call available.

---

## Tier 3. Pricing is unreconciled, and the deck may be closer to right

| | Deck | Repo |
|---|---|---|
| Dinner partner | $7,500 | $7,500 ✅ matches |
| Table partner, six dinners | $34,000 | no equivalent |
| Category holder, annual | $85,000 | $10,000 to $25,000 |
| Anchor, annual | $180,000 | $25,000 to $60,000 |
| Headquarters convening, one | $45,000 | $25,000 to $45,000 ✅ overlaps |
| Three convenings | $115,000 | $90,000 to $150,000 ✅ overlaps |

**Do not assume the repo wins.** `HANDOFF.md` carries this as an open question and says plainly that the $20,000 assumption is probably low. `docs/05-monetization.md` says the same. The deck's numbers are value-derived rather than guessed, which is the better method.

**What must happen:** re-derive the stack at 24 seats rather than 40, then decide. The repo bands were anchors to validate, and this deck is the first serious attempt to validate them. Update `docs/01-business-model.md` once settled, not before.

---

## Tier 4. Things in the deck that are better than what the repo has. Adopt these.

| Idea | Why it is good |
|---|---|
| **The paid brief at $4,500, credited in full** (slide 9) | Qualifies the buyer, produces cash in week one, and reverses the risk honestly: "if we cannot fill it you spent $4,500 instead of $45,000." Nothing in the repo does this. **Adopt immediately** |
| **The teardown as replacement cost** (slide 6) | The right frame. Price against what building it costs them, not against what a booth costs. Needs sourcing, not rethinking |
| **"The restrictions are the asset"** (slide 7) | Better articulation of the never list than anything in the repo. Each rule paired with the reason it produces value. **Lift this wholesale** |
| **Refund after the first two dinners, keep the evenings** (slide 11) | Stronger than our make-good and cheap to offer if composition is real |
| **"Credited in full against an annual partnership within 30 days"** (slide 8) | Clean ladder mechanic. Removes the reason to hesitate at the entry rung |
| **"Come to one dinner as our guest before you sign anything"** (slide 13) | This is the observer seat, and it is well placed |

---

## Tier 5. Already aligned. Leave alone.

- Clinicians free forever, founders apply and pay
- Nobody buys stage time. Hosting earns a welcome, not a keynote
- No attendee data harvesting. Introductions personal and consented. **Matches `ADR-021` exactly**
- Chatham House by default
- Category exclusivity as the premium. **Matches `ADR-020`**
- Chapter sequence Toronto, Ottawa, Montreal. Matches the five-city plan
- "Every tier is by conversation. Nothing here is listed publicly." Matches `ADR-005` and `ADR-007`
- Partner vocabulary is fine **in this document**, because rule 2 governs public material and this is private. Confirm it never reaches the site

---

## Tier 6. Writing rules

The deck uses em dashes and en dashes throughout. `CLAUDE.md` calls that absolute, with no public or private carve-out. A find and replace fixes it: commas, colons, full stops.

---

## The composition arithmetic that has to be resolved

The deck says: never more than **six commercial seats at a table of forty**, and a category hold takes two of them, so three holds is the entire year.

`docs/14-dinner-programme.md` says: 24 seats, of which **12 are commercial** (7 builders, 4 service providers, 1 funder).

These are not reconcilable. 15% commercial versus roughly 50%.

**The deck's ratio is the more defensible one and the repo's is the more profitable one.** That trade has not been made deliberately anywhere, and it should be, because it determines both the price and whether the room survives. Resolve it before either document is used again.
