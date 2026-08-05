# ADR-015 — Value propositions are segment-scoped, never universal

**Status:** Accepted
**Date:** 2026-08-01

## Context
A private-practice clinician was approached about a directory listing and asked what
MedTech North is and what she would get. Answering her required stripping out most of what
is true about the business and settling three questions she had not asked aloud: am I being
sold something, does this send me patients, what does it cost me.

The obvious next move is to keep that wording as the clinician script. That is the mistake.
The lines that made it work are specific to her position. "It won't send you patients" is
disarming to a practice owner and meaningless to a hospital pharmacist. "No fee, in any
year" reassures a clinician and reads as a slight to a founder who pays. "Findable by
discipline" matters to someone whose expertise is their product and not to a policy
director.

## Decision
Outreach value propositions live in `assets/outreach/value-propositions/`, one file per
segment, each scoped to a stated position rather than to an ICP category. Wording is written
for a real conversation, not drafted in advance for a hypothetical one.

Nothing is promoted to a general script, a template or site copy until the same wording has
survived several conversations inside the same segment. Segments are added as conversations
force them. Breadth first, maturity second.

## Why not a single clinician script
Four ICP groups is the right granularity for the website, where everyone reads the same page
and no one is addressed individually. It is the wrong granularity for a direct message, where
the reader knows they were picked. A message pitched at "clinicians" in a one-to-one thread
reads as a mail merge, which is the exact objection the network's whole premise is supposed
to be immune to.

## Consequences
- Outreach gets slower per contact and better per contact. Accepted deliberately.
- The library will look thin for months. That is the honest state, not a gap to fill with
  invented segments.
- Each file carries its own untested claims. They stay marked untested until real replies
  settle them.
- If a segment file eventually changes a public surface, that change needs its own ADR.

## Related
ADR-002 (never charge the scarce side), ADR-009 (multipage ICP), ADR-010 (institutional
register), ADR-014 (no referral rewards).
