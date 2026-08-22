# ADR-025 — A room that has not composed is moved, not run

**Status:** Accepted
**Date:** 22 August 2026

## Context

Room 003, published as The MedTech North Table #3 for Wednesday 26 August 2026, was cancelled four days out.

Registrations existed. Confirmations did not arrive until the last few days, several people who had confirmed withdrew, and the expected show rate on a free evening put the likely table well below both the number the On Record format needs and the number the venue is set for. The dining lounge seats 25 to 50.

This is the same failure as room 002, where three physicians accepted and all three no-showed. `data/verified-stats.md` already records it as a show-rate problem rather than an acquisition problem. Room 003 confirms that reading: outreach produced interest, the calendar did not convert it.

## Decision

**A room that has not composed by its confirmation cut-off is moved to a new date. It is not run thin, and it is not filled by relaxing who is in it.**

The public reason is the real one: the table did not compose. No cause is invented, no headcount is disclosed, and the message goes out from the founder before it goes out from the ticketing platform. Messages are in `assets/events/room-003-cancellation-kit.md`.

## Why moving beats running

Running a room at a third of its intended size costs more than the evening. The guests who show up are the ones who confirmed early, which is exactly the behaviour worth rewarding, and a thin room punishes them. The venue sees a table it cannot justify holding again. And the format itself does not degrade gracefully: On Record needs enough owners at the table for a capture station running alongside dinner to look like part of an evening rather than the evening.

Against that, a moved date costs one round of apologies and some goodwill with people who had already blocked the night.

## Consequences

- **Confirmation cut-off becomes public copy.** Seats confirm by the Friday before. Unconfirmed seats return to the list. Stated as a property of the format, per `docs/07-brand-and-voice.md`
- **Invitations go out in waves against an assumed show rate**, not one to one against the seat count
- **The portrait slot booking becomes the confirmation mechanism**, not a separate courtesy. It is already a second commitment and it is already in the confirmation email
- **A funnel table is now required per room:** invited, registered, confirmed, attended. Currently anecdote only, and listed as outstanding in `HANDOFF.md`
- **No deposit on the scarce side, in any form.** `ADR-002` and `CLAUDE.md` rule 1 are unaffected by this decision. Clinicians, researchers, academics and students are never charged, including as a no-show mechanism. Founders already pay under `ADR-023`
- **Edition numbering holds.** The next room is Table #4. A moved date does not consume a number

## What this does not decide

Whether the On Record format itself is the problem. One cancelled room is not evidence about a format that has never run. Reassess after Table #4 has either composed or failed to.
