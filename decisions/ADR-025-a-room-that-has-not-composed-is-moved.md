# ADR-025 — Room 003 is cancelled, and the free mixed table is retired

**Status:** Accepted
**Date:** 22 August 2026
**Supersedes in practice:** the room format in `ADR-023` for any future free room. `ADR-023` remains the record of what room 003 was going to be.

## Context

Room 003, published as The MedTech North Table #3 for Wednesday 26 August 2026, was cancelled four days out.

Registrations existed. Confirmations arrived in the last few days, several people who had confirmed withdrew, and on the expected show rate for a free evening the real table was going to be a fraction of what the venue is set for. The room is a dining lounge inside the founder's building, set for 25 to 50, available free, one booking per month.

This is the same failure as room 002, where three physicians accepted and none attended. `data/verified-stats.md` already records it as a show-rate problem rather than an acquisition problem. Room 003 confirms it. Free attendance and open registration produce agreement, not attendance, and agreement arrives too late to compose a room around.

## Decision

**Room 003 is cancelled outright. No replacement date is offered.**

**The free, mixed, open-registration table is retired.** It will not be run again in this form.

**Free is reserved for one format: a table of chief executives and owner-operators only.** That is the only room MedTech North hosts at no cost going forward. Every other format is ticketed.

**Public reason for the cancellation is the format change, not the composition.** No headcount, no confirmation rate, no shortfall language, and no date. Messages in `assets/events/room-003-cancellation-kit.md`.

## Why no replacement date

A date offered now is a date that would not be kept, because the format that would fill it is being discarded. An open loop that goes quiet costs more over three months than a clean cancellation costs in one weekend. The list is left in good standing and contacted next when there is something built to invite it to.

## Why free stops being the default

The evening was free to the guest and expensive to the host: a month of outreach, a booking that cannot be carried, and a personal reputation staked on who turns up. Free registration is a promise with nothing behind it, and the person who registers knows that better than the host does. Ticketing is not primarily revenue here, it is the only confirmation signal available that arrives more than a day in advance.

The CEO table stays free because that room cannot be sold into existence. Its scarcity is the product.

## Unresolved, and it must be resolved before any ticketed room is published

**"Everything else is ticketed" collides with `ADR-002` if it includes the scarce side.** `ADR-002` is marked permanent: clinicians, researchers, academics, students and public sector leaders attend at no cost in every phase. `CLAUDE.md` rule 1 states the same. `ADR-019` already prices the room the other way round: clinicians and researchers free, builders $150, service providers $500.

Two readings, and they are materially different businesses:

| Reading | Effect | Status |
|---|---|---|
| Founders, builders, service providers and corporates pay. Clinicians, researchers and academics still attend free, now by invitation only rather than open registration | No conflict. This is `ADR-019` already, with open registration removed | Consistent with every existing decision |
| Everybody buys a ticket, clinicians included | Reverses `ADR-002` and `CLAUDE.md` rule 1 | **Requires an explicit ADR of its own before it ships.** Not decided here |

Not resolved in this ADR because it was not the decision being made. Flagged so it is not resolved by accident in a Luma listing.

## Also unused, and it addresses the actual failure

`ADR-019` already permits a **$50 refundable deposit, returned at the door**, once a room exceeds 25% no-show over two dinners. That threshold has now been crossed twice. The deposit does not breach rule 1 because the money goes back, and refundable deposits are the standard fix for exactly this failure. It was never deployed.

## Consequences

- Room 003 does not consume an edition number. The next room is Table #3
- `assets/events/room-003-long-table-kit.md` becomes historical. The On Record production work in it, quotes, sample footage, college advertising rules, is paused rather than cancelled
- The CEO table needs its own ADR: who qualifies, how they are found, how the room is composed without open registration, and what stops it becoming a vendor floor
- The invited-and-attended record for room 003 gets logged in `data/` while it is still recoverable. Who confirmed early, who withdrew late, and when. It is the only durable output of this room
- Nothing about tiering, ticketing or the CEO table goes to the room 003 list. `CLAUDE.md` rule 6

## What this does not decide

Whether the On Record format works. It has never run. One cancelled room is evidence about free open registration, not about the format it was going to carry.
