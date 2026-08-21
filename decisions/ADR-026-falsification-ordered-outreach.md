# ADR-026: Outreach is ordered by hypothesis risk, and every campaign carries a written falsifier

**Status:** Accepted
**Date:** 2026-08-21
**Related:** `ADR-015` (segment-scoped value propositions), `ADR-025` (hosted day of rooms)

## Context

Outreach is about to scale from hand-picked warm contacts to several hundred researched sends a week. At that volume the failure mode changes. A small warm campaign fails by producing nothing. A large campaign fails by producing activity: meetings, replies, a pipeline, and no answer to the question of whether the business works.

The register in `docs/18-hypothesis-risk-and-falsification.md` lists eleven beliefs the business rests on. Five of them would end it rather than dent it if they are wrong, and none of the five has been tested. The two rooms that have been held were commissioned by a client who bought audience assembly and facilitation, which is closer to exposure than to composition to a brief, so the most-cited proof in the repo does not test the claim it is usually used to support.

## Decision

**Campaigns are ordered by hypothesis risk and latency, not by how easy the list is to build.**

Three rules, and they are checked before a campaign sends rather than after it disappoints.

**1. One primary hypothesis per campaign, written down first.** If a campaign cannot name the belief it tests, it is prospecting rather than a campaign, and it goes behind anything that can.

**2. The ask is the experiment.** The thing requested in the message has to be the thing in doubt. A request for a meeting tests curiosity and returns a number that feels like progress. If the belief is that an organisation will donate a building, the message asks for the building. If the belief is that a company cannot fill its own clinical room, the message asks what their last one cost and how many clinicians sat in it, and invites the answer that would falsify us.

**3. A kill number and a date, written before the first send.** A threshold chosen after results arrive is a rationalisation with a percentage sign on it.

**Latency can outrank risk.** The highest-risk hypothesis does not automatically go first. A lower-risk question that gates the November date and answers in three weeks goes ahead of a higher-risk one that takes ten. That is why campaign 1 asks for a building rather than testing the pricing ladder.

## What this changes in practice

- Every contact row carries a `hypothesis_signal` field, recorded at the moment a reply arrives. Without it a campaign produces a pipeline and no knowledge, and the next quarter starts from the same uncertainty as this one
- A no with a reason is a result and is logged as one. A no without a reason is a note that the question was badly asked
- Negative results are written into this repo with the same weight as positive ones. A falsified belief that changes a decision gets its own ADR

## The tension with `ADR-015`, and how it resolves

`ADR-015` says value propositions are segment-scoped and never universal, and that a message pitched at a category reads as a mail merge. Several hundred sends a week appears to contradict it.

**It does not, because what scales is the research and not the sentences.** The opening line, the named person and the specific ask are written per organisation from one researched fact. The consideration, the never list and the close are stable across the campaign. A campaign is a segment file plus a research pass, never a template plus a merge field.

Two segment files are therefore drafted ahead of a live conversation, which `ADR-015` would normally forbid. That exception is deliberate and bounded: a campaign cannot carry a written falsifier if the wording changes with every send. Both files stay at draft status and carry their untested claims in a table until real replies settle them.

## The prerequisite this creates

**Every kill number is meaningless without a baseline, and the baseline is currently an anecdote.** The roughly 70% positive reply rate across the two rooms is self-reported and unauditable. It is both the most persuasive asset available and the reference point against which every campaign is judged. Reconstructing it from the actual send records is a few hours of work and it happens before the first send, not after the first disappointing week.

## Consequences

- Campaigns can be stopped in the week a kill number is hit, which is the point of writing it down
- Founder attention becomes the scarce resource rather than send volume. `docs/20-outreach-campaign-sequence.md` caps total live volume at 200 to 250 researched sends a week across all campaigns, because reply handling binds long before deliverability does
- Three campaigns at volume is the ceiling. A fourth degrades the reply quality of the other three

## What this does not authorise

No change to any public surface. No claim, figure or reference is made usable by being called an experiment. `data/verified-stats.md` governs every number in every message, `ADR-017` governs the client name, and the guarantee ladder in `ADR-022` is a promise rather than a test instrument.
