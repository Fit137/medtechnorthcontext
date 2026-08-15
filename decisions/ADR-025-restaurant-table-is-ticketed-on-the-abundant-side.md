# ADR-025 — The restaurant table is ticketed on the abundant side only, and it names a vertical

**Status:** Proposed. Closes the open question in `ADR-024`. Amends the commercial seat price in `ADR-020`. Needs Ali's confirmation on the vertical and the date.

## Context

`ADR-024` created two dinner tracks and left one question open: who pays for a restaurant ticket. The pressure to answer it is now commercial rather than theoretical. The in-house room does not cover its own cost, cannot be sold against in advance because attendance only firms up three or four days out, and produces no revenue. The founder needs a room that funds itself without a co-host cheque, and needs it soon enough to validate the model before committing to other cities.

A competing Toronto event (dentistry, healthcare and pharma networking, $12, open registration, standing format) was raised as evidence that clinicians will pay. It is not evidence for this model. That event sells the same thing to every attendee: exposure to the other attendees. This model sells clinician presence to a commercial buyer, which makes the clinician a different party to the transaction, not a cheaper one.

## Decision

**Restaurant tables are ticketed. Clinicians, researchers, academics, students and public sector leaders are not ticketed.** `ADR-002` and `CLAUDE.md` rule 1 stand unamended.

Three seat classes per table of 24:

| Class | Who | Seats | Price |
|---|---|---|---|
| **Invited** | Clinicians, researchers, academics, students, public sector | 12 | $0, by nomination |
| **Builder** | Founders, operators, builders in health | 9 | **$225** |
| **Category Hold** | Companies selling into the room | 3 | **$750**, private, one seat each |

**Category Hold replaces the $500 service provider seat from `ADR-020` at restaurant venues only.** The in-house rate is unchanged. The reason is scope and cost, not extraction: a restaurant seat costs $105 against $55 partner-hosted (`ADR-021`), and the Category Hold carries a composition report, two consented introductions, category exclusivity and a portrait, none of which a Builder seat carries.

## Why not charge the invited side

Three reasons, in descending order of how much they matter.

1. **It is the hard rule, and reversing it needs its own argument, not a venue decision.** `ADR-024` said this explicitly and it remains correct.
2. **It slows the fill, and the fill is the bottleneck.** A cold clinician who has never heard of MedTech North converts to a paid ticket at a small fraction of the rate they convert to a named invitation. The stated goal is speed. Charging the scarce side is the slowest available path to a full room.
3. **Affordability is not the barrier and never was.** A dentist can afford $200. What a dentist buys with professional money is credentials and education, which rule 7 forbids us from offering or implying (`ADR-019`). A priced seat is evaluated against CE courses and study clubs. An invitation is not evaluated against anything.

## Where clinician-side revenue is legitimate

**The Feature** (`ADR-023`, tier two): a 45 to 60 minute shoot at the owner's own practice, on another day, producing a film they own. That is a service with a deliverable and a market price. Charging for it does not breach rule 1, because rule 1 governs the price of attendance, not the price of production work commissioned afterwards.

**The rule: never charge for the seat, charge for the thing made after it.**

## Named vertical, not mixed composition

Restaurant tables name a single profession. The first is **dental practice owners in the GTA**.

The `assets/events/room-003-long-table-kit.md` exclusion against naming a profession applies to the free in-house room, where the fallback has to exist because the room happens regardless. **A paid table has a different fallback: the go/no-go trigger.** If the named vertical does not assemble, the table is cancelled and money is returned. Backfilling a dental room with researchers would deliver a Category Hold buyer something other than what they bought.

A Category Hold cannot be priced without a defined category, and a category cannot be defined without a defined room. Naming the vertical is what makes the commercial line sellable at all.

## Sequence: composition first, money second

The founder's stated model was sell tickets, count them, then approach a sponsor. That is the mixer playbook and it inverts this one. A commercial buyer's first question is who is in the room, and the honest answer has to already exist.

**Order: confirm 6 to 8 named invited guests, then sell Category Holds against the composition described by role and specialty, then fill Builder seats.** Names are never disclosed to the buyer, before or after (`ADR-020`, `ADR-021`).

## Commitment without payment, on the invited side

Payment is not the only commitment device and is a weak one at this income level. In order of effect:

1. A stated seat count and a named seat, confirmed by reply in a direct message
2. The name and role of the person they will be sitting beside
3. A voice call at 48 hours, not a text
4. A waitlist mentioned once, truthfully
5. Overbooking the invited side by 25%, with the final count given to the restaurant at 72 hours

**Escalation, pre-agreed rather than argued later:** if invited-side no-show exceeds 25% at this table, the next one adds the $50 refundable deposit already sanctioned by `ADR-019`. Returned at the door, so rule 1 is intact.

## Pricing stays off the public page for the commercial line

The public page shows one number, the Builder seat. The Category Hold is quoted privately after a qualifying form, per `ADR-005` and `CLAUDE.md` rule 2. Two prices on one page invites exactly the seat-to-seat comparison the Category Hold exists to avoid, and a public tier table reads as a sponsorship rate card regardless of the words used.

**"Mini sponsorship" and every variant of it are rejected as a name, including in private material.** Private documents get forwarded, and the word prices the thing against conference sponsorship, where $750 buys a logo. **Category Hold** names what is actually sold.

## Prerequisites before a single Category Hold is sold

- **Business name registration and a GST/HST number.** Corporate accounts payable bounces an invoice without one (`HANDOFF.md` item 5)
- **Commercial general liability insurance, or a written confirmation the restaurant does not require a certificate.** Some venues require one to hold a semi-private space
- **Cash bar, individual tabs.** The restaurant's licence carries the alcohol liability. We do not host the alcohol

## What this does not decide

Whether the ICP is formally owner-operators rather than clinicians broadly. Still open from `ADR-023` and still waiting on rooms running.

Whether clinicians would pay. **Ask them, do not assume either way.** At this table, ask departing invited guests what they would have paid for the evening. That produces a real number at zero cost, and it is the only thing that could ever justify a future ADR arguing the reversal directly.
