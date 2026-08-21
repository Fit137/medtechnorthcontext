# Value propositions by segment

One file per segment. Each file holds the proposition, the send-ready wording, the things
that must be ruled out in writing, and what is still untested.

## The rule this library exists to enforce

**No wording here is universal.** A message that works on a private-practice clinician is
not a message for a hospital clinician, an academic, a policy contact, a student or a
founder. They are asking different questions, and a line that disarms one can insult another.

Nothing gets promoted to a general script, to site copy or to a template until the same
wording has survived several real conversations in the same segment. Until then, a new
conversation in an uncovered segment gets written from scratch, and what is learned becomes
a new file here.

The library grows by conversation, not by extrapolation. Breadth first, then maturity.

## Coverage

| Segment | File | Status |
|---|---|---|
| Practising clinician, private or community practice | `clinician-private-practice.md` | Draft, one live conversation |
| Institutional venue host | `venue-host-institutional.md` | Draft, **zero** live conversations. Campaign 1 |
| Canadian corporate room funder | `corporate-room-funder.md` | Draft, **zero** live conversations. Campaigns 2 and 3 |
| Hospital or health-system clinician | not written | |
| Academic and research | not written | |
| Student and early career | not written | |
| Policy and government | not written | |
| Founder and operator | not written | |
| Service provider | not written | |

**Status ladder:** draft (written for one conversation) → tested (survived several in the
same segment, wording stable) → settled (safe to template, and worth an ADR if it changes a
public surface).

**Two files are drafted ahead of a conversation rather than because of one**, which is a
deliberate exception to rule 1 below and not a new practice. They exist because
`docs/20-outreach-campaign-sequence.md` runs campaigns whose whole purpose is to test a
stated hypothesis, and a campaign cannot carry a written falsifier if the wording is
improvised per send. They stay at draft until real replies settle them, and they carry
their untested claims in a table at the foot of each file.

## Adding a segment

1. Write the file when a real conversation forces it, not in advance.
2. Open with what that segment is actually asking, unstated. That governs everything else.
3. State what they do not get, in writing. Every segment has a plausible wrong assumption
   about the offer, and it is cheaper to kill it in the first message than in month three.
4. Record the wording you rejected and why. That table is the part that transfers between
   segments, more than the copy does.
5. Check against `CLAUDE.md`, `docs/07-brand-and-voice.md` and `docs/08-legal-and-compliance.md`
   before sending. Run the `asset-qa` skill on anything going to an external audience.
6. Leave the untested claims listed as untested.

## Constraints that apply in every file, without exception

- The clinical, research, policy and student sides are free permanently. Never framed as a
  discount, trial, launch rate or founding offer.
- No member counts, attendee totals, testimonials, logos or endorsements. One room has been
  held, with 16 people.
- No sponsorship, partner tier, anchor, exhibitor or category language in anything a member
  or guest reads.
- No regulated professional title used as a label, badge or tier name.
- No segment described as more valuable than another, in any message any of them could see.
- No implied accreditation, credit, certification or commercial outcome.
- Every figure traces to `data/verified-stats.md`.
