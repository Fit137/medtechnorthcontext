# ADR-023: Venue follows format, small and confidential in-house, large and ticketed outside

**Status:** Accepted
**Date:** 11 August 2026
**Supersedes:** the venue reasoning in the first draft of `docs/17-who-belongs-in-the-room.md`, which was wrong.

## Decision

| Format | Venue | Charging |
|---|---|---|
| Small, senior, confidential, 6 to 10 | **The building amenity** | Free. Never charged in the building |
| Mixed monthly room, 20 to 35 | The building amenity | Free |
| Large, mixed, 50 to 100 | **External venue or restaurant** | Ticketed. Commercial attendees pay |
| Composed to a client brief | **Client headquarters** | Paid, per `docs/16` |

## Why

**Privacy.** Chatham House is a stated rule in every room. A confidential executive conversation cannot be held in a restaurant dining room. The amenity gives a closed door, noise isolation, controlled entry, no service interruptions and no time limit. Below a five-star hotel private room or a corporate boardroom, no commercial restaurant matches that for a table of eight.

**Cost.** The amenity is free with no minimum spend. A genuine private dining room for eight carries a minimum spend of roughly $1,000 before food quality enters the conversation.

**Control.** Place cards, seating, timing, format and facilitation are fully controlled in-house. That is most of what makes a small room feel considered.

**Delegation earns its fee at volume.** Catering, service and logistics for fifty people cannot be run by one person. For eight, the same spend buys less control than doing it directly.

**Ticketing is coherent at volume and awkward at eight.**

## Consistency with ADR-013

`ADR-013` restricts the amenity to free ungated rooms, because the condo declaration is assumed to prohibit commercial use. A free executive dinner in the building, with every ticketed event held outside it, applies that rule rather than contradicting it. The earlier reading, that senior guests should be routed out of the building, misread ADR-013 as being about guest seniority when it is about money changing hands.

## The geography argument, corrected

Mississauga is not a weakness for a west-GTA executive room, and may be an advantage.

- Mississauga, Oakville, Burlington, Brampton, Milton and Hamilton form a dense corridor containing Trillium Health Partners and a large pharmaceutical and device cluster.
- For a room of eight, the binding constraint is conversion, not pool size. Eight yeses from a dense local pool where we are the only convener is a different problem from filling fifty seats.
- For a guest living west of Toronto, the amenity is closer than downtown, sometimes by half.
- **The pool argument reverses at scale.** A 50-person mixed room is easier to fill downtown, where people arrive after work without a car.

**Trillium Health Partners is ten minutes away.** Health system executives are the segment with zero attendance to date, and the recruiting pool for them is adjacent to the venue.

## Insurance, corrected

External venues require a CGL certificate that is not in force. Until it is, the amenity is the lower-friction option rather than the higher-risk one. This reverses an assumption in the first draft of `docs/17`.

## What remains true

- No written permission has been requested from the condo board. Unchanged and still the highest unmitigated exposure (`docs/08-legal-and-compliance.md`).
- One physician withdrew over the residential venue. One data point, from a mixed room, and it does not generalise to a guest who accepted the location in writing.

## Consequence

**The small executive table is a fourth product and it is not in `docs/16-product-architecture.md`.** It has no price, no stated promise and no place in the ladder. It needs all three before it is sold to anyone. Closest existing relative is the clinical advisory roundtable named in `docs/12`.
