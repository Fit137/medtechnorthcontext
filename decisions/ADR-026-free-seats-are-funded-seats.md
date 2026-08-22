# ADR-026 — Free seats are funded seats

**Status:** Accepted
**Date:** 22 August 2026
**Supersedes:** `ADR-002` (never charge the scarce side), which is now marked Superseded
**Amends:** `CLAUDE.md` hard rule 1, `ADR-019` seat mix, `ADR-024` open question

## Context

`ADR-002` was written as permanent and unconditional: clinicians, researchers, academics, students and public sector leaders attend at no cost, in every phase, forever. It rested on one claim, that charging them erodes the signal the whole model depends on.

Two rooms of evidence say the rule had a cost that was never priced. Room 002: three physicians accepted and none attended. Room 003: registrations existed, confirmations arrived in the final days, confirmed guests withdrew, and the room was cancelled four days out (`ADR-025`).

A free seat carries no information. It is agreement, not attendance, and it arrives too late to compose a room around. Meanwhile the evening was free only to the guest. The cost landed on the founder as a month of outreach, a booking that cannot be carried, and a personal reputation staked on who walks through the door.

`ADR-002` assumed unfunded free rooms were affordable. They are not, and the assumption was never tested because no unfunded room had been run before room 003. Rooms 001 and 002 were paid for by Miro.

## Decision

**Every seat has a price. The only question is who pays it.**

**Default: everyone buys a ticket.** Clinicians, researchers, academics, students, founders, operators and corporates alike. No segment holds a standing entitlement to a free seat.

**The single exception: a funded room.** When a commercial co-host or sponsor has paid the convening fee **up front** and the room is being convened for them, the seats that buyer needs filled are free to the guest and paid for by the buyer. Those guests are invited, not sold to, and they never learn a price because there is not one in front of them.

**Free is an accounting position, never a marketing one.** A seat is free when somebody else has already paid for it. There is no other route to a free seat: no comps, no discounts, no goodwill exceptions, no "just this once for a good one". Those are exactly what re-creates the failure this decision exists to end.

## What this preserves from ADR-002, and what it discards

The defensible half of `ADR-002` survives. A clinician should never have to buy their way into a room that exists because of them. In a funded room that still holds exactly, and it holds in the case that matters commercially, because a funded room is the case where a buyer needs them there.

What is discarded is the unfunded free room: nobody pays, the host absorbs the entire cost, and the guest's commitment is worth precisely what it cost them.

## What this costs, stated plainly

- **Fewer clinicians per room.** A ticketed invitation converts worse than a free one. That is the trade, made deliberately. The bet is that ten people who paid beat forty who agreed.
- **`ADR-019`'s sharpest objection still stands as a warning.** Clinicians buy credentials and education, and MedTech North sells neither and is forbidden from implying either by rule 7. A ticket priced as though it were education will fail on exactly that ground. It is a dinner and a table, and it must be priced like one.
- **Composition risk, and it is the serious one.** If clinicians price out and founders do not, the room inverts into a vendor floor, which is the failure mode `ADR-019` and `ADR-020` were built to prevent. **A sold seat is not an entitlement to attend.** Composition still governs the room, per-segment caps still apply, and a founder who buys a ticket into a room with no clinicians in it gets a refund, not a seat.
- **The website and the pitch both currently promise free.** Every one of those promises has to be retired deliberately rather than quietly.

## The price is not set here

**Recommendation: price a guest ticket at roughly the cost of the plate, plus a small margin. Not at value.**

The ticket's job is commitment, not revenue. Priced near cost it filters out the people who were never coming while remaining trivially easy for someone earning a clinical salary to justify. Priced at value it becomes a product competing with a CME budget, which is the `ADR-019` failure arriving through the front door.

Actual numbers are not decided in this ADR because they depend on the venue and the menu, neither of which is settled for the next room.

## Existing promises are honoured

Anyone already invited, registered or told in writing that attendance is free at no cost, permanently, is not retroactively billed and is not asked to pay for the room they were invited to. The rule changes going forward. It does not reach backwards, and doing so would cost more trust than the tickets are worth.

## Migration required. None of this is optional once a ticketed room is published

| File | What it currently says | What it needs |
|---|---|---|
| `CLAUDE.md` rule 1 | "Never charge the scarce side" | **Done.** Rewritten to "Never run an unfunded room" |
| `CLAUDE.md` line 9 | "Clinicians and researchers attend free, permanently" | **Done** |
| `README.md` | Same claim, listed as a permanent design rule | **Done** |
| `GLOSSARY.md` | "The scarce side: never charged" | **Done** |
| `ADR-002` | Accepted, Permanent | **Done.** Marked Superseded |
| `ADR-019` | 12 clinicians free per 24-seat dinner | **Flagged.** The seat mix and the whole price ladder need rebuilding around a paid guest seat |
| `ADR-024` | Blocks on this exact question | **Done.** Answer recorded |
| `docs/01-business-model.md` | "Never charge the scarce side" as a core principle, twice | **Done** |
| `docs/03-icp-and-segments.md` | "Access: free, permanently" on three segments | **Done** |
| `docs/04-membership-pricing.md` | Guest tier at $0, savings scenarios built on free attendance | **Flagged.** Needs the Guest tier repriced. Savings tables downstream |
| `docs/05-monetization.md`, `docs/06-financial-model.md` | Revenue lines and unit economics assume a free clinical side | **Flagged, not touched.** The financial model is 246 live formulas and cannot be restated in prose |
| `docs/14-dinner-programme.md`, `docs/17-event-formats.md` | "Never charged", "owners attend free and always will" | **Flagged** |
| `assets/website/` and the live site | Whatever the live pages promise | **Not touched. Needs approval.** The site is live and has visitors. `CLAUDE.md` production rules apply |
| Investor and partner decks | Free clinical side is load-bearing in the argument | **Flagged.** The argument changes shape, not just a number |

## What this does not decide

The CEO and owner-operator table from `ADR-025`. That room is free to its guests, and under this decision that makes it an unfunded room unless a co-host pays for it. Whether it is an exception, a loss leader with a budget attached, or a room that must be sold before it runs, is not settled here and needs its own ADR before it is scheduled.
