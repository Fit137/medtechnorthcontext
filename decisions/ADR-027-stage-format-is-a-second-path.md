# ADR-027: The stage format is a second path, and it does not replace the Table

**Status:** Accepted
**Date:** 2026-08-21
**Changes:** `ADR-025` (hosted day of rooms). Reopens the size limit in `ADR-018`.

## Context

`ADR-018` refused a summit and `ADR-025` set the November event as six to eight composed rooms with none over 35. Both were built on one premise: composition is the product, and composition degrades as a room grows.

**The premise is intact and it does not cover the acquisition problem.** A room sold on who is in it cannot be advertised, because the guest list is confidential by design and naming attendees is forbidden under `ADR-021` and `CLAUDE.md` rule 3. So the Table can only ever be filled by direct outreach, one person at a time. That is a hard ceiling on reach, not a temporary one.

**A named speaker is the one asset that can be published.** A speaker consents to their name and face being used, which is the difference between an invitation that can be advertised and one that cannot. Speakers also recruit speakers, and they recruit attendees.

## Decision

**Two paths run in parallel and are never merged.**

| | **The Table** | **The Stage** |
|---|---|---|
| Size | 25 to 35 | **50 to 100** |
| What is promised | Composition | **The programme and the speakers** |
| Programme | None. No agenda, nothing to prepare | **Panels and recorded interviews** |
| Advertisable | No. Direct outreach only | **Yes. Named speakers with images** |
| Guest list | Confidential, never published | Attendees still never published. **Speakers are** |
| Venue | Ours, or a co-host's | **A hosted venue with a stage** |
| Status | Unchanged, continues | New |

**The Stage promises the programme, never the room.** This keeps `ADR-024` intact: what is sold is what can be controlled on the night. Speakers are contracted and can be named. Attendance and composition are not promised at 50 to 100 and no composition report is offered for this format.

## What this does not reverse

`ADR-018` refused a summit for reasons that still hold, and the Stage is bounded so they keep holding:

- **No fixed cost before a host is signed.** No venue deposit, no catering minimum, no AV hire. The venue is obtained, not bought. This was the actual argument in `ADR-018`, and it is unchanged
- **No exhibitors, no booths, no trade floor.** Rule 2 vocabulary is still banned everywhere
- **No attendance figure published**, before or after, per rule 3
- **Clinicians, researchers and students attend free**, permanently, per `ADR-002`
- **No composition promise at this size.** Selling composition into a 100-person room is the failure `ADR-018` predicted, and refusing to promise it is what keeps the Table's premium intact

## Consequences

- `data/venue-host-targets.md` is rescreened. The six-room requirement is replaced by one room of 50 to 100 with a stage, which was the largest disqualifier and removing it widens the pool from a shortlist to 88 candidates
- **The bottleneck moves from venue to speakers.** A venue with no named speakers cannot fill 100 seats, and speakers are recruited on institutional legitimacy rather than on budget
- The three-ask split in `ADR-025` survives and gains a fourth: venue, funder, co-host, **speaker**
- `ADR-020` category exclusivity gets harder at this size. Five panels need many companies on stage, so a commercial host constrains the speaker list in a way an institutional host does not. Category exclusivity is scoped to a funder's own panel, not the event
- The Table keeps its promises unchanged. Nothing in this ADR touches `ADR-022`, `ADR-023` or `ADR-024`

## What must be true before the first Stage event is confirmed

1. A signed host with a verified seat count, not an estimated one
2. **Three named speakers who have consented in writing to their name and image being used.** Without these the event cannot be advertised, which removes its only advantage over the Table
3. No fixed cost committed before both of the above
