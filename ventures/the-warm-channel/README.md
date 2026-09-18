# The Warm Channel, GTM input brief

The discovery input for running the `gtm-builder` skill on The Warm Channel. No website exists yet.

The Warm Channel is a done-for-you convening service. A client gives it a list of named target accounts, and it designs the room, builds and verifies the invitation list, runs the outreach, manages confirmations and show rate, and is paid on the executives who arrive. It supplies no venue, no catering and no production, so the client hosts. The first market is fintech and financial infrastructure vendors selling into banks, credit unions and insurers in the Greater Toronto Area.

Three files, written 2026-09-18. No placeholders for an agent to fill.

| File | What it is |
|---|---|
| `GTM-BRIEF.md` | The skill's REQUIRED INPUTS, answered. Project information for both runs, competitor slate, service list, business context, seven open decisions, and the claim constraints every phase has to respect |
| `SKILL-ADAPTATION.md` | How the nine phases change. Six of them carry a B2B SaaS assumption that produces the wrong artifact for a business that sells engagements |
| `RESEARCH-PROMPTS.md` | The external research steps, pre-filled, plus a step 0 the skill assumes you already did |

`gtm-builder` itself is not in this pack. Supply it before the run.

## How to run it

1. Fill the business context lines in `GTM-BRIEF.md` Section 4, and settle as many of the seven open decisions as you can. Decision 1, the tax number, is the one that blocks getting paid.
2. Run step 0 in `RESEARCH-PROMPTS.md` to name the competitors. The brief names categories on purpose, because inventing a competitor poisons Phase 2 and everything reading from it.
3. Run steps 1.1, 2.1 and 2.7 from the same file, then bring the findings back.
4. Invoke the skill. Point it at `GTM-BRIEF.md` and `SKILL-ADAPTATION.md` first.

It runs twice. Run A is the paying client, a fintech vendor. Run B is the guest, a bank or insurer executive who pays nothing. They have different buyers, different offers and different value propositions, and blending them produces a value proposition true of neither and a channel set that serves one and wastes the other. Run A first, because its offer is closest to a product and its pricing phase has something to price. Run B is the supply side, and nothing in Run A can be delivered without it.

## The one rule that governs the whole run

The Warm Channel has no entity, no client, no revenue and no delivered engagement, so the proof set is empty and closed. Unknown numbers stay `{TBD}` and are never invented. This bites hardest in Phase 6, which asks for a supporting proof point and a social proof headline in each of nine copy drills, eighteen invitations to make up a customer.

The founder's prior record is real and is a credential rather than a proof point. Section 5 of the brief carries the permitted wording for each piece of it, and four of those claims are gated on an artifact or a permission that does not exist yet. A credential in permitted wording still does not go in a proof field.
