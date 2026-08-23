# Monetization Strategy

> **Stale as of 22 August 2026. `ADR-026` reverses `ADR-002`.** Every seat is now ticketed unless a co-host has paid the convening fee up front, in which case that buyer's guests sit free. The one-sentence architecture below is no longer accurate: the free room is not free any more, and it is not the asset engine.


**The architecture in one sentence:** the free room produces the asset, paid corporate engagements elsewhere produce the revenue, and nothing is ever charged for anything held in the condo amenity.

Two machines, not one. That separation answers the venue question and the legal question at the same time.

---

## Machine 1 — the free room

Monthly, 25 to 35 people, condo lounge, nobody charged. Costs $300 to $500 a month in catering. Produces relationships, the interview pipeline, nominations, credibility and the raw material for everything sold.

**This is R&D and content production. Treat it as a cost centre. Do not try to monetise it.**

---

## Machine 2 — corporate products, scored

Weights: revenue per unit of founder time 0.25 · preserves clinician trust 0.25 · speed to first cash 0.20 · compliance feasibility 0.15 · builds the long-term asset 0.15

| Product | Rev/time | Trust | Speed | Compliance | Long-term | **Score** |
|---|---|---|---|---|---|---|
| **Sponsored panel series** | 7 | 9 | 9 | 9 | 8 | **8.35** |
| **Category insight brief** | 8 | 10 | 6 | 10 | 8 | **8.20** |
| **US market entry programme** | 10 | 8 | 5 | 8 | 9 | **8.05** |
| **Clinical advisory roundtable** | 9 | 8 | 8 | 7 | 7 | **7.95** |
| Per-dinner corporate sponsorship | 6 | 8 | 6 | 8 | 9 | 7.25 |
| Builder membership and tickets | 3 | 10 | 4 | 10 | 10 | 7.05 |
| 50-person sponsored launch briefing | 8 | 5 | 7 | 5 | 6 | **6.30** |

**Pattern:** every high scorer monetises the *output* of the room. Every low scorer monetises *access to the people in it*. Apply that filter to any new idea.

---

### Product 1 — Category insight brief ★ sell first

**Format:** not an event. 8 to 15 structured interviews of 30 to 45 minutes, plus what is captured at the monthly room. Output is a 12 to 18 page written report, aggregated and anonymised. Nobody named.

**Venue:** none. Remote or the condo boardroom. This is research, not a paid event, so the building is fine.

**Price:** $10–25K commissioned with 90-day exclusivity, or $2.5–5K syndicated to four to eight buyers.

**Cost:** close to zero.

**Two sellable right now:**
- *What Ontario pharmacists need to operationalise the July 2026 scope expansion*
- *How Ontario dental practices are adapting to the 2026-27 CDCP benefit year*

**Buyers.** Pharmacy: vaccine manufacturers with products on the new publicly funded list, pharmacy clinical decision support and software, point-of-care testing, large chains, consumer health. Dental: practice management and billing software, supply distributors, imaging, implant and aligner manufacturers, benefits administrators.

**Why first:** no venue, no physicians, no compliance battle, no event logistics. It is also the proof artifact that makes everything else sellable.

---

### Product 2 — Sponsored recorded panel series

**Format:** recurring recorded conversations between clinicians on clinical and system topics. A corporate underwrites a season of six to eight episodes.

**What the sponsor buys:** presenting credit, association with credible clinical conversation, rights to share episodes on their own channels.

**What they explicitly do not get:** editorial control, product mentions inside the content, or any participant list. This funder-content firewall is the standard "independent educational support" structure that compliance teams recognise, and it is why this format clears review fastest.

**Venue:** remote recording, so cadence is unlimited. The condo sofas only for unsponsored episodes.

**Price:** $5–15K per season. **Cost:** near zero.

**Clinicians are not paid here** and do not need to be. The value is visibility, reach and a CV line.

---

### Product 3 — Clinical advisory roundtable

**Format:** 90 minutes to half a day. 8 to 15 clinicians giving structured input on a client-defined question. Neutral facilitation, Chatham House among participants, written summary to the client.

**Venue: the client's own office.** This is the unlock. Costs nothing, removes the residential-unit problem, gives them home-field comfort. Fallback is a hotel room at $1.5–3K billed as a pass-through.

**Price:** $18–35K. **Cost:** honoraria of $400–750 per clinician, so $5–9K for twelve.

**Clinicians are paid here.** Standard in the industry and expected. It is what makes the format honest rather than extractive.

**Most regulated of the three.** Expect requirements around documented legitimate need, fair market value honoraria, written participant agreements, and no connection between participation and prescribing or purchasing.

---

### Product 4 — US market entry programme

Three events plus intelligence plus a KOL map, for US or international companies entering Canada. **$60–120K.**

Highest ticket, longest sales cycle. Aligns with what Invest Ontario, Toronto Global and municipal economic development offices are measured on, which makes them referral partners rather than competitors.

---

### Deferred — 50-person sponsored launch briefing

$20–40K. **Right destination, wrong starting point.** Scores lowest of the corporate options because a large promotional briefing is where trust erodes fastest and compliance review is hardest. Revisit from month six with a cleared format and two reference clients.

> **Pricing note.** The original $20K assumption is probably low. Pharma and device companies routinely spend well into five and six figures on advisory boards and third-party medical education once agency fees, honoraria, venue and travel are counted. Find the real number by asking three buyers what they spent last year and what they got, which doubles as the best sales call available.

---

## Killed permanently

| Idea | Why |
|---|---|
| Single builder sponsors **and** curates the guest list | Delivers clinicians as an audience. They detect it in one evening. Trades the asset for a cheque |
| Charging clinicians anything | Permanent. See `docs/01-business-model.md` |
| Selling attendee data or lead lists | Destroys the trust the entire model rests on |

**Hosting is fine. Curating is not.** A company may host a room, get warm framing and a seat, with the composition rule written into the agreement: MedTech North builds the guest list, the host does not see it in advance, no pitching from the floor.

---

## Compliance reality — and why it is the moat

**There is no Canadian regulator that pre-clears a third-party convener's event format. No permit exists.** Earlier phrasing about "pre-clearance" meant the *sponsor's own compliance team*, not a regulator.

- **PAAB** pre-clears promotional material for health professionals, but the *company* submits its own materials.
- **MLR review** (medical, legal, regulatory) is internal to each company and happens every time.
- **Vendor onboarding** is separate: procurement setup, insurance certificates, MSA, compliance questionnaire.

**You do not get cleared once. You become easy to clear every time.**

| Transfers between clients | Does not transfer |
|---|---|
| Documented operating standards: recruitment, promises to clinicians, consent capture, honoraria setting | Each company's own MLR sign-off |
| Vendor readiness pack: incorporation, insurance, privacy policy, DPA, MSA, references | Anything about their product |
| Format architecture: agendas, invitation language, consent and release forms, honoraria agreements | Global SOPs of a US or EU parent, often stricter than Canadian minimums |
| Track record and prior compliance documentation | Drug versus device rules, which differ |

Realistically this compresses an 8 to 12 week review to 2 to 4 weeks. Still the difference between winning and losing.

**Get ahead of vendor onboarding**, which eats more calendar than recruitment does: clean entity, liability insurance, MSA template ready before the first pitch.

---

## Sequence

| Month | Move |
|---|---|
| 1–3 | Free rooms. Recorded panel series starts, near-zero cost. Instrument outreach obsessively |
| 3 | Sell panel series and first insight brief. Approach a funded organisation about a delivery contract |
| 4–5 | First paid advisory roundtable, at the sponsor's office |
| 6+ | Market entry programmes, category partners, the 50-person format |

**Instrument the outreach.** The 75% positive response rate is currently an anecdote. Log every send, response, confirmation and show-rate by specialty. "We contacted 40 cardiologists, 30 responded positively, 22 confirmed, 19 attended" is devastating to a corporate whose own team gets single digits. That table is the entire pitch deck.
