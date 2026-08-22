# ADR-024 — Two dinner tracks, and what the free one is allowed to promise

**Status:** Accepted, with one open question flagged below.

## Context

Every dinner has been treated as one product with one set of promises. It is not. Two things are being run, they have different economics, and conflating them produces copy that either over-promises on the free one or under-sells the paid one.

## The two tracks

| | **In-house** | **Restaurant** |
|---|---|---|
| Venue | Ali's building, Mississauga | A booked restaurant |
| Attendee cost | **Free** | **Ticketed.** See the open question |
| Composition | **Not curated, not promised** | **Curated deliberately, and that is what the ticket buys** |
| Cadence | Monthly, already running | Planned |
| What it is for | Documentation, relationships, footage, and a reason to contact anyone in the sector | Revenue, and a room built to a purpose |

## The rule this exists to create

**A free in-house dinner promises the format, never the room.**

It may promise what will and will not happen: no agenda, nothing to prepare, nothing to present, nobody selling anything, a stated finish time. Those are entirely within Ali's control on the night.

It may **not** promise who will be there, that seating is deliberate, that the mix will balance, or that anyone will meet a particular kind of person. Free attendance runs 40 to 60% no-show (`docs/16-product-architecture.md`), so the room that arrives is not the room that registered, and a promise about composition is one the format cannot keep.

**Seating is the specific casualty and it is deliberate.** Earlier copy sold the seating plan as the thing Ali works hardest on. It is removed from all in-house material. If a guest is told their seat was chosen for them and the person beside them turns out to be a coincidence of who showed up, the most credible claim on the page becomes the least true thing on it. Composition is a paid promise. It belongs to the restaurant track and to convening.

## What the free dinner is actually for

Stated plainly because the public value proposition is thin and pretending otherwise leads to bad copy.

**The in-house dinner is not a product. It is a factory.** It produces:

- Portraits and footage, which is the private lever that gets owners through the door (`ADR-023`)
- Relationships and graph data
- Reference material and proof for selling the restaurant track and convening
- A legitimate reason to contact anyone in Canadian health, monthly

At roughly $400 of catering, that is a defensible marketing and research cost. It is not a room that has to justify itself on ticket economics, and it should never be asked to.

**The consequence for copy: the public page cannot fill this room and should stop trying.** It handles the name, the logistics and the two or three things that are genuinely promisable. The outreach fills the room. That is not a weakness in the page, it is the correct division of labour.

## Numbering is standing practice

Every edition is numbered publicly. "Table #3." It signals continuity rather than a launch, and a series someone can join at #4 reads better than a first-ever event. My earlier rule against it is withdrawn.

## The MD inference is retired

The physician who withdrew from room 001 was a resource-constrained founder selling to doctors, not a clinician evaluating a peer room. He asked for an ROI analysis on his own slide-preparation time, misrepresented his company size, and was removed. **No rule about physician behaviour may be built on that incident.** See the correction in `data/events/2026-07-29-patient-journey-jam.md`.

Physicians are invited, are listed publicly among the invited, and are expected to attend.

## Open question, and it touches a hard rule

**Who pays for a restaurant ticket?**

`CLAUDE.md` hard rule 1 and `ADR-002` are absolute: clinicians, researchers, academics, students and public sector leaders attend at no cost, in every phase, permanently. Charging them collapses the asset every other revenue line depends on.

**ASSUMPTION, pending Ali's confirmation: tickets are sold to builders, founders, operators and service providers. Clinicians and researchers remain free at restaurant dinners as they are everywhere else.** That reading is consistent with both the ticket revenue and the hard rule.

If the intent is instead that everyone pays, that reverses `ADR-002` and needs its own ADR that argues the reversal directly rather than arriving as a side effect of a venue decision.

> **Answered 22 August 2026.** Everyone pays. `ADR-026` makes the reversal directly: a seat is free only when a co-host has funded it. This paragraph is left in place because the requirement it set, that the reversal be argued on its own terms, is what `ADR-026` does.
