# Hypothesis Risk and Falsification Order

> **INTERNAL. Never published.** Companion to `docs/20-outreach-campaign-sequence.md`, which turns this register into send plans. Decision record: `ADR-026`.

The question this answers: which beliefs, if wrong, end the business rather than dent it, and what is the cheapest message that would tell us within weeks instead of quarters.

---

## The rule that makes a campaign an experiment

Most outreach tests a subject line. A campaign tests a hypothesis only when **the thing being asked for is the thing in doubt.**

If the belief under test is that an organisation will hand over its building for a day in return for media and presence, the message has to ask for the building. A request for a fifteen-minute call tests curiosity and returns a number that feels like progress and means nothing.

Three consequences, and they are not optional:

1. **One primary hypothesis per campaign**, written down before the first send.
2. **A kill number and a date**, also written before the first send. A threshold chosen after the results arrive is a rationalisation with a percentage sign on it.
3. **The question has to let a no identify itself.** "Not right now" is noise. "We run these ourselves and we fill them fine" is a result. That difference is designed into the question, not recovered in the follow-up.

The corollary is uncomfortable and worth stating: a campaign that produces meetings but never puts the risky claim in front of anyone has consumed a month and bought nothing.

---

## How the register is scored

**Collapse radius**, 1 to 10: how much of the business stops working if the belief is false. 10 means there is no business without it.

**Probability wrong**, 1 to 10: honest estimate against the evidence in the repo today, not against how much we want it to be true.

**Latency**: how long from first send to a defensible answer.

**Risk** = collapse x probability. Ties break toward the shorter latency, because an early cheap answer is worth more than a late precise one.

---

## The register

| # | Belief, stated as it would be written on a wall | If it is wrong | Collapse | P(wrong) | Risk | Latency |
|---|---|---|---|---|---|---|
| **H1** | **Composition is worth a premium over exposure.** A buyer pays more for who is in the room than for a stage in front of a bigger one | The $25,000 convening price falls to the $2,500 to $4,500 exposure band. The premium product does not exist and the business is an events shop with a small list | 10 | 6 | **60** | 3 to 5 weeks |
| **H2** | **A neutral convener beats their own team.** A company cannot assemble this room under its own logo and knows it | The reason to buy anything disappears. Every prospect becomes a competitor with a bigger budget | 10 | 5 | **50** | 2 to 4 weeks |
| **H3** | **Composition can be delivered at the promised floor.** 50 invited to a brief produces 25 in the room matching it | The guarantee ladder in `ADR-022` triggers on the first delivery. Step 2A returns every fee including delivered work | 10 | 5 | **50** | 6 to 10 weeks |
| **H4** | **Organisations with space will donate it for media and presence.** The venue is obtained, not bought | Venue returns as a cost line, the financial model's partner-hosted bull case goes with it, and an October or November day requires committing cash before a cheque exists | 7 | 4 | **28** | **2 to 3 weeks** |
| **H5** | **Media is sufficient consideration.** A host will act for co-branded material and proximity without a promised lead count | Every deal needs a commercial outcome attached, which `docs/08-legal-and-compliance.md` forbids promising. The deal cannot be made honestly at that price | 7 | 4 | **28** | **2 to 3 weeks** |
| **H6** | **The room is portable outside the GTA.** A composed room can be assembled in a city where we have no list | The business is capped at one metro. National ambition, the day of rooms and the US inbound line all shrink to what Mississauga can hold | 6 | 6 | **36** | 3 to 6 weeks |
| **H7** | **A US company will buy Canadian access before it has a Canadian entity.** Expansion budget pays for a composed room | The second line closes. Pricing power described in `docs/12-convening-as-a-service.md` as the best in the business goes untested | 5 | 5 | **25** | 6 to 12 weeks |
| **H8** | **Clinicians keep coming once corporates are paying.** Free attendance survives commercial funding | The asset every other line depends on degrades quietly, and the first sign of it is a reply rate falling six months from now | 10 | 3 | **30** | Not testable by email |
| **H9** | **The buyer signs in Canada.** Someone holding a Canadian budget can approve this alone | Every deal inherits a foreign approval chain and the 30 to 60 day cycle becomes 90 to 120. Survivable, slow, and it breaks the November date | 4 | 5 | **20** | 1 to 2 weeks |
| **H10** | **Owner-operators are a sellable room.** Buyers will pay for dentists, pharmacists, physiotherapists and practice owners rather than holding out for physicians | `ADR-012` monetises the room that exists. If buyers only pay for MDs, that decision has to be revisited with no MD ever having attended | 7 | 4 | **28** | 2 to 4 weeks |
| **H11** | **Show rate can be held above the guaranteed floor.** Better than 50% of confirmed guests arrive | Delivery fails even when demand works. Free events run 40 to 60% no-show and three physicians accepted for room 002 and none arrived | 8 | 5 | **40** | Room 003, then per room |

---

## The top five, expanded

### H1. Composition is worth a premium over exposure

**Why it is first.** Everything above $4,500 in `docs/16-product-architecture.md` rests on it. The whole architecture is built on the line that the meetup sells exposure and the convening sells composition, priced roughly ten times apart.

**Evidence for:** none that is clean. **Evidence against:** none either, and that is the problem. Miro paid twice, and what Miro bought was audience assembly and facilitation around their own product, which sits much closer to exposure than to composition to a brief. The most-cited proof in the repo does not actually test the claim it is used to support.

**The instrument.** A two-arm split on the same corporate list, randomly assigned. Arm A leads on who will be in the room and never states a number. Arm B leads on the room as a stage and an audience. Both are legitimate products we sell, so nothing dishonest is being offered in either arm. `ADR-022` already settled that exposure stopped being the villain.

**What falsifies it.** Arm B outperforming Arm A on qualified reply, materially and repeatedly. If a company would rather stand in front of sixty than sit with twenty-five briefed, then composition is our preference and not the market's, and the price ladder inverts.

**Kill number.** 120 sends, 60 per arm. If Arm A returns fewer than half of Arm B's qualified replies across two rounds, stop selling composition first and re-price.

### H2. A neutral convener beats their own team

**Why it matters.** This is the founding premise stated as a risk rather than as a slogan. `docs/11-corporate-outreach.md` puts it plainly: a vendor convening its own customers holds a sales meeting and clinicians detect it inside one evening. If prospects do not believe that about themselves, there is no product.

**Evidence for:** Miro paid rather than doing it in house, twice. That is real and it is the strongest single fact available. **Evidence against:** Miro had no Canadian clinical audience and no reason to build one, so paying was cheaper than caring. A Canadian company with a field marketing team and an existing advisory board has neither constraint.

**The instrument.** Ask the question directly in the first message rather than saving it for a call. What their last Canadian clinician room cost all in, and how many practising clinicians actually sat in it. A number in the reply concedes the premise. A reply that says they have no trouble filling their own rooms falsifies it, and it is the most valuable email we can receive.

**Kill number.** 80 sends to named Canadian field marketing and industry marketing owners. If more than a third of substantive replies say the room is easy for them to fill, the neutrality argument is weaker than the repo assumes and the pitch moves to production capacity and format rather than access.

### H3. Composition can be delivered at the promised floor

**Why it is the quiet one.** H1 and H2 are demand risks. This is the delivery risk, and it is the one that turns a win into a refund. `ADR-022` guarantees 25 in the room matching a brief against 50 invited. Room 001 seated 16. A single named specialty has never been convened at volume. Three physicians accepted for room 002 and all three no-showed.

**The instrument.** Not a corporate campaign. An instrumented clinician campaign in one named specialty, in one city, with every stage recorded from the first message. The output is the table `docs/05-monetization.md` already identifies as the entire pitch: contacted, replied, confirmed, attended.

**What falsifies it.** A confirmed-to-attended rate that cannot clear 50% twice.

**The rule this creates immediately.** Do not sign a convening in a specialty or a city where that table does not exist. The paid brief at $4,500 exists precisely so this failure is discovered on someone else's schedule and at a tenth of the exposure.

### H4 and H5, taken together. The venue and the media floor

These are separated in the register and tested by one campaign, because the same message asks for the space and offers only media in return. A yes clears both. A no is ambiguous, so the follow-up question has to disambiguate: was it the space or the consideration.

**Why they run first despite lower risk scores.** Latency and dependency. They are the shortest tests available, and the October or November date depends on H4 resolving inside three weeks. A high-risk hypothesis with a ten week latency does not get to go first when a lower-risk one gates the calendar.

**What falsifies H5 specifically.** Replies that engage warmly and then ask for a lead count before anything else, repeatedly, across archetypes. One buyer asking is a buyer. Six asking is a market telling us the floor is not a floor.

---

## The three that cold email cannot test

Recording these so nobody builds a campaign for them and reads the result as an answer.

| Hypothesis | Why email cannot reach it | What actually tests it |
|---|---|---|
| **H8. Clinician trust survives commercial funding** | The people whose behaviour would change are not the people being emailed, and the change is slow and quiet | Reply rate and returning-attendee rate before and after the first funded room, measured on the same list. Requires the baseline below |
| **H11. Show rate** | Registration is not attendance and no message predicts the gap | Room 003 on 26 August, then every room after it, recorded the same way |
| **Founder concentration** | Structural, not a market question | Whether anything in the sequence below can be run by someone else without quality falling |

---

## The measurement problem that sits under all of it

**Every kill number in this document is meaningless without a baseline, and the baseline is currently an anecdote.**

The roughly 70% positive reply rate across the two Miro rooms is self-reported and unauditable. It is simultaneously the most persuasive asset in the business and the reference point against which every campaign below would be judged. Reconstructing it from the actual LinkedIn and email send records is a few hours of work and it is a prerequisite, not a nice-to-have. Without it there is no way to know whether a 12% reply rate on a cold corporate list is a catastrophe or a normal drop from a warm hand-picked one.

Do it before the first send, not after the first disappointing week.

---

## What a negative result actually buys

The instinct is to treat a falsified hypothesis as a bad month. It is the opposite, and the arithmetic is worth stating.

A falsified H4 costs three weeks and a few hundred researched sends. Discovering the same thing by booking a venue with AV and a stage costs a deposit, a catering minimum and a quarter spent selling against a fixed date. `ADR-018` already names that sequence as the standard way event businesses die.

A falsified H1 costs a split test. Discovering it by pricing a year of convenings at $25,000 and finding no buyer costs the year.

**Order the sends so the expensive mistakes get made cheaply and early.** That is the whole method, and the sequencing in `docs/20-outreach-campaign-sequence.md` is nothing more than this register sorted by risk and latency.
