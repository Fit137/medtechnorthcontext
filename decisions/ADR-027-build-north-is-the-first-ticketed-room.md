# ADR-027 — Build North is the first ticketed room, and every seat carries the same three minutes

**Status:** Proposed. Price, venue and date are Ali's to confirm
**Date:** 4 September 2026
**Implements:** `ADR-026` (free seats are funded seats) for the first time in a published room
**Departs from:** `ADR-023`'s no-stage-time rule, scoped to this format only
**Kit:** `assets/events/build-north-2026-09-16-kit.md`

## Context

`ADR-026` settled that every seat is ticketed unless a co-host has funded the room, and explicitly left the price unset because it depends on a venue and a menu that were not decided. `ADR-025` retired the free mixed table and required that "everything else is ticketed" be resolved by an ADR rather than by accident in a Luma listing.

Build North is the first room published under that regime. It is a celebratory room built around what got made in Canada this year, aimed at founders, operators, investors, clinicians and researchers, on Wednesday 16 September 2026. No co-host has funded it, so the guests fund it, which is exactly the case `ADR-026` describes as the default.

## Decision

### 1. A published three-step price ladder, twenty seats

| Release | Seats | Price |
|---|---|---|
| First | 10 | $125 |
| Second | 5 | $200 |
| Final | 5 | $300 |
| Service provider seat | 4 | $500 |

Event capacity is **20**. Ticket quantities sum to 24 because the service provider seats come out of the same twenty, not on top of them.

**All four prices are published on the page from the first day.** The ladder is the commitment device, and it only works if a buyer at $125 can see what the seat costs once ten are gone. Hidden tiers produce the same rise as a surprise, which reads as a trick and costs more trust than the $75 is worth.

**Why $125 at the bottom.** `ADR-019` priced a builder seat at $150 and `ADR-026` warned against pricing a guest seat at value rather than near the cost of the plate. The financial model carries a restaurant seat at $105 (`ADR-021`). $125 clears the plate, is trivially justifiable against a founder's own numbers, and is low enough to move ten seats in a week, which is the actual constraint.

**Why the service provider seat survives at $500.** `ADR-020` set it there and capped it at four, because four service providers in a room of twenty is a dinner and twelve is a vendor floor. Without a separate price they buy the $125 seat and the cap has no mechanism behind it.

### 2. Every seat carries three minutes, and nobody can buy more

One question, identical for everyone, asked in the same words: **what did you build this year, and what would make the next one easier to build here.** Three minutes each, twenty people, sixty minutes, running order **drawn at the table on the night**. No slides, no decks, no demos.

This is the year's structured question required by `ADR-019`, so the room produces material rather than a meal.

### 3. Publishing "twenty seats" is a deliberate exception

`docs/07-brand-and-voice.md` and `data/verified-stats.md` both say not to publish a fixed seat count, on the grounds that "forty seats" becomes a claim to defend when the first room held 16.

Twenty is published anyway, for three reasons. The ladder discloses it arithmetically the moment the tiers are visible, so hiding it is theatre. `ADR-019` already lists "a stated seat count" as one of the devices that stops an invitation reading as "you are the product". And the rule exists to stop an unfillable number being claimed as a track record, which is not what a capacity for a dated dinner is.

**The rule is not repealed.** It still holds for the website, for any past room, and for any number that describes attendance rather than capacity.

## Why stage time here does not break the rules it looks like it breaks

Two rules are in tension with this and neither is actually broken.

**"Nobody buys a microphone. No one pays for stage time or a speaking slot."** (`docs/07-brand-and-voice.md`.) The ticket buys a seat, and every seat carries the same three minutes. Money buys nothing that anyone else's money does not also buy. The rule exists to stop the floor being sold to the highest bidder, and a flat, unpurchasable, identical allocation is the strongest available form of that promise rather than an exception to it. **The moment one person can pay for six minutes, the rule is gone and so is the room.**

**`ADR-023`: founders get no stage time, no deck, no demo.** That rule was built for a specific problem: the scarce side was being asked to do unpaid work so that founders could benefit, and stage time was the mechanism. Here nobody is the audience for anybody. Everyone speaks, everyone listens for the other fifty-seven minutes, and the question is retrospective rather than promotional, so a three-minute pitch does not answer it and will be visibly the wrong shape when someone tries.

**`CLAUDE.md` rule 6, no segment ranked above another,** is the reason the allocation is flat and the order is drawn rather than sequenced. A speaker line-up splits the room into featured and attending, which is exactly what `ADR-023` refused for room 003 and what `docs/17-event-formats.md` records as unrecoverable once noticed.

## What this costs, stated plainly

- **The floor can run long and wreck the evening.** Twenty people at three minutes is sixty minutes only if it is run hard. It needs a visible timer and the first overrun cut off warmly and publicly, or it becomes ninety minutes and the dinner disappears.
- **Composition risk is live and is the serious one.** A celebratory builder room with a low entry price is the exact shape that fills with founders and service providers and no clinicians. `ADR-026` is binding here: **a sold seat is not an entitlement to attend.** Approval is required on every registration, and a buyer whose group is full is refunded the same day rather than seated.
- **The theme is politically adjacent and the copy is not.** Build North argues for domestic capacity from three dated procurement facts in `data/verified-stats.md`. It characterises no country, government or dispute, and it carries no tariff or trade figure, because none is verified. That restriction is not stylistic. Rule 4 applies to a Luma page exactly as it applies to the site.
- **Seven selling days.** The runway is short and the list was told three weeks ago that room 003 was cancelled. The mitigation is the decision rule below, taken early rather than late.

## Conditions on publishing

1. **The venue question is answered first.** Selling tickets makes a residential amenity room a commercial event in a residential amenity room, with no written permission and no commercial general liability insurance in force. Both are recorded as open in `HANDOFF.md`. The recommendation in the kit is a private dining room paid for out of ticket revenue.
2. **Nothing from rooms 001 or 002 appears on the page.** No testimonial, no photograph, no video. Rule 3 forbids it, permission from the four testimonial authors has not been requested, and room 001 and 002 footage carries a third party's branding under `ADR-017`. Section 13a of the kit has the permission message and the route to clearing it.
3. **If fewer than ten seats are sold by end of Monday 8 September, the date moves.** Decided now, in advance, because `ADR-025` is unambiguous that a room which has not composed is moved, and because moving on the 8th is a scheduling note while moving on the 14th is a second cancellation to the same list in a month.

## What this does not decide

Whether Build North is a series or a one-off. Whether the three-minute format survives contact with twenty real people, which is unknown until it runs and should be logged in `data/events/` the same week. And the price of a clinician seat in a room built for clinicians, which is a different question from the price of a seat in a room built for builders, and which `ADR-026` still leaves open.
