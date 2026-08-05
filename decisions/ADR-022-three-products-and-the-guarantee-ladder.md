# ADR-022: Three products, and a guarantee that returns margin but not capital

**Status:** Accepted. Supersedes pricing in `ADR-019`, `ADR-021` section 2, and the partner deck's tier stack.

## Decision
Three products, separated by **what is promised**, not by size.

| | Monthly Meetup | Calendar Dinner | Convening |
|---|---|---|---|
| Composition promised | None | None | **Yes, to their brief** |
| Size | ~30 | 50 to 100 | Target 50, floor 25 |
| Attendee list | **Opted-in only** | Never | Never |
| Presentation | **Yes** | Welcome only | No |
| Entry | **$2,500** | **$4,500** | **$25,000** |
| Annual | $24,000 / 12 | $14,400 / 4 | $72,000 / 4, $96,000 / 6 |

Detail in `docs/16-product-architecture.md`.

## The meetup sells exposure. The dinner and convening sell composition.
Both are honest products. The deck's slide 4 currently disparages the exposure model, which is no longer available to us as an argument now that we sell one. **Composition stays the premium, exposure stops being the villain.**

## Why the meetup may carry a list when nothing else may
Because it makes no composition promise and no confidentiality promise, and because consent is collected properly at registration: an unchecked box, the sponsor named, non-consenters still admitted. That is CASL express consent and PIPEDA meaningful consent. Anything less is neither.

**Sell "attendees who opted in", never "the attendee list".**

Two rooms, two data promises, both stated plainly. A meetup attendee is never treated as a dinner or convening attendee for any purpose: separate registration, separate consent, separate list. The separation makes the premium clearer, because a company paying $25,000 is buying the room where nobody is harvested.

## Pay per convening, always
Nobody commits to a year before seeing one. The annual discount rewards commitment, it is not the price of entry.

## The Brief at $4,500, credited in full
We return with exactly who we would put in the room and whether we can get them. If we cannot fill it, they spent $4,500 instead of $25,000.

**This is also our protection: we only sign a convening we have already shown we can fill.** It is what stops the guarantee below from ever triggering.

## The guarantee ladder
Replaces "thirty conversations or the year is free, and you keep the dinners." That refunded revenue after the costs were already spent, which is a loss larger than the margin.

**Principle: we return margin. We do not eat capital.**

**The floor is 50% of target**, because free-attendance events run 40 to 60% no-show and pretending otherwise is how this fails. Convening target 50, floor 25 matching the brief.

1. **Miss once:** the next convening is free. We absorb delivery. No cash leaves.
2. **Miss twice:** their choice.
   - **Full refund of every fee paid, including delivered convenings, and the relationship ends.** If we cannot assemble half of what they asked for twice, either the brief has no market or we are the wrong convener, and keeping the money is indefensible.
   - **Or stay on pay-per-attendee at $700 per verified attendee matching the brief.** No minimum. Some buyers are happy with 18 of the right people.

## What caps the exposure
The paid brief above all. Then: refund capped at fees paid and never consequential, their brief inside 14 days, their own seat-holders attend, no pitching by them, and the floor counts people matching the brief rather than headcount.

Step 1 costs roughly $14,000 of delivery against $25,000 held, still positive. Step 2A is a real loss of what has been spent, accepted deliberately and bounded by the brief stage.

## What this resolves
`docs/15-partner-deck-audit.md` flagged that the deck ran 15% commercial seats and the dinner programme ran 50%. Composition ratio is now a promise **only** in the convening. The other two promise nothing, so there is nothing to reconcile.

## What this does not authorise
The monthly meetup stream is not logged anywhere in this repo, and `data/verified-stats.md` still records zero physicians. "Roughly 30" and "physicians attend" are founder statements until the meetups are logged as events. Rule 4 applies to both.
