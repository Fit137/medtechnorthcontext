# Event Formats: Room 003 Onwards

> **INTERNAL. Status: proposal, decision pending.** Formats for the first room MedTech North runs on its own theme. Part 1 records a rejected set and why, because the reason is the useful part. Part 2 is the current set. No ADR yet. Related: `docs/13-buyer-led-room-design.md`, `docs/16-product-architecture.md`, `ADR-012`, `ADR-016`.

---

## The constraint that reset the brief

The target is not "clinicians" in general. It is **owner-operators**: practice owners running businesses at six and mostly seven figures of annual revenue. `docs/03-icp-and-segments.md` lists practice owners under leadership, and `ADR-012` already says a dentist owns a practice and can buy in three weeks. This sharpens that from a sub-segment into the person the room is built for.

Three things follow, and they kill most event formats outright:

1. **Their hour has a price they can calculate.** An evening is not free to them, it is chargeable time they are choosing not to bill.
2. **They are pitched constantly.** Every vendor, agency, banker and platform in the sector is already asking for the same evening. An invitation that smells like one more of those is deleted, not declined.
3. **They are tired.** They will not come out to do exercises, quizzes, mapping or structured discussion. Those are work, and they have work.

A free dinner does not clear this bar, because everyone offers a free dinner.

## Part 1: the rejected set

Recorded because the failure mode is the reusable insight.

| Format | What it was | Why it was rejected |
|---|---|---|
| **A. Verdict** | Founders show, clinicians score them on cards | Unpaid evaluation work for a stranger's company. The clinician is the supplier, not the beneficiary |
| **B. The Friction List** | Clinicians name one friction each, room ranks them | Still work. Ninety seconds of public speaking and a ranking exercise is a task, dressed as participation |
| **C. What Changed** | Dated policy hook, field notes, open table | A discussion. Informal, casual, and the owner gains nothing they can bank |

The common defect: **all three treated the clinician's attention as the input and gave the value to founders, to the room, or to a future insight brief.** That is backwards for this ICP.

## The rule that replaces them

**The scarce side receives. The abundant side works and pays.**

Founders have time, they are proactive, and what they want is owner access. So they are the ones who apply, who pay, who get no stage time, and who earn a relationship after the room rather than during it. Owners receive something with a price on it and are asked for nothing.

This also fixes the sequencing problem. Guarantee the owners first and founders become easy to fill, because a founder buys a room on its composition. Chasing both at once has never worked here.

Three consequences that are now non-negotiable in any format below:

- **No pitching, no deck, no demo, no stage time for founders.** Already house rule (`docs/13-buyer-led-room-design.md`), now load-bearing rather than decorative
- **No task is assigned to an owner.** Not a card, not a vote, not a map
- **The owner's benefit is stated in the first message and is legible in one line**

---

## Part 2: the current set

## Format D: On Record

*The owner leaves owning a professional asset about their own practice.*

The evening runs a small production set alongside dinner. Each owner takes a booked twenty-minute slot: proper lighting, a real camera, a lav mic, an interviewer who has read about their practice. They talk about their own work. What they treat, what they have built, what patients get wrong about their field, what they wish referrers understood.

They leave owning the footage outright. Edited long form, vertical cuts for social, stills, and a written profile drawn from the transcript. Theirs to run as advertising, put on their site, or send to a referrer. No cost, no obligation, no watermark demanded.

**What the owner receives:** an asset with a market price, plus the status of being the one who was interviewed. Both, in one object, on the night.

**Effort asked of them:** turn up presentable and talk about themselves for twenty minutes. No preparation, no reading, no homework.

**Why it is hard to say no:** they are not being asked for their opinion on somebody else's product. They are being told that their practice is worth a professional feature and that someone else will do all of the work.

**Where founders sit:** at the tables, over dinner, with no airtime whatsoever. They meet owners as people between filming slots.

**ASSUMPTION.** A comparable production booked privately runs into the low thousands. Get two real quotes before this number is used in any conversation.

## Format E: The Catchment Table

*The other people at the table send patients to practices like yours.*

Eight to twelve owners, deliberately non-competing and geographically adjacent. A dentist, a physiotherapist, a community pharmacy owner, an optometrist, a massage or chiropractic clinic owner, all inside the same catchment, none in the same discipline. Dinner, no programme, no exercise. The seating plan is the entire product.

Afterwards, consented introductions are made individually by MedTech North, which is already how the dinner product works (`docs/16-product-architecture.md`).

**What the owner receives:** referral relationships in their own catchment, which is recurring revenue rather than a one-off.

**Effort asked of them:** none. This is the lowest-effort format available.

**The weakness, stated plainly:** the value arrives over months, not on the night, and the curation that makes it valuable is invisible until they are already sitting down. It is also the format that most resembles a referral networking group, and an owner at seven figures has usually already declined three of those. Differentiate hard on the things those groups do that this does not: no dues, no attendance requirement, no obligation to produce referrals, invitation only.

## Format F: The Bench

*The people the owner needs to hire are in the room.*

Staffing is the operational emergency in dental, physiotherapy and community pharmacy right now. Owners pay real money to fill a chair or a bench and wait months to do it.

The room puts owners together with final-year students and recent graduates in the disciplines they actually hire, nominated by faculty rather than self-selected. No booths, no résumé tables, no career fair staging. Dinner, and the owners are the reason the students are there.

This inverts the student problem in `docs/03-icp-and-segments.md`. Students stop being seats that dilute the room and become the reason the owner attends.

**What the owner receives:** a hiring pipeline they would otherwise pay a recruiter for.

**Effort asked of them:** none, and it is flattering, because they spend the evening being courted.

**The weakness:** an owner who is fully staffed this month has no reason to come, and you cannot tell who that is without asking at invitation. Founders also have close to no reason to be in this room, which breaks the sequencing logic the whole design rests on.

**ASSUMPTION.** Recruiter placement fees for these roles in the GTA are commonly quoted as a percentage of first-year salary. Do not use a figure until one is sourced into `data/verified-stats.md`.

---

## Scoring

Weights reflect the reset brief: the owner is the constraint, the value must be immediate and bankable, and nothing may be asked of them.

Owner pull 0.26 · immediate money or status value 0.18 · show rate 0.14 · owner effort 0.12 · outreach explainability 0.10 · founder pull and willingness to pay 0.08 · co-host carrying capacity 0.07 · advertisability 0.05

| Criterion | D. On Record | E. Catchment Table | F. The Bench |
|---|---|---|---|
| Owner pull | 9 | 7 | 8 |
| Immediate money or status value | 10 | 6 | 8 |
| Show rate | 9 | 7 | 8 |
| Owner effort (higher is easier) | 9 | 10 | 9 |
| Outreach explainability | 9 | 8 | 10 |
| Founder pull and willingness to pay | 8 | 6 | 5 |
| Co-host carrying capacity | 9 | 8 | 7 |
| Advertisability | 10 | 5 | 8 |
| **Weighted total** | **9.15** | **7.17** | **8.01** |

### Reading the scores

**Owner pull.** D is the only one where the offer is a gift rather than an invitation. E is a dinner, and the reset brief says dinners do not clear the bar on their own. F is strong but conditional on the owner hiring this month.

**Immediate value.** D delivers on the night, in an object they can hold. F is quantifiable but arrives weeks later as a hire. E is the slowest and the vaguest, which is its real problem.

**Show rate.** D has the strongest no-show deterrent available anywhere: a booked slot, at a named time, with a crew and a set waiting. Missing it wastes something visible. E is a dinner seat and dinner seats are the easiest thing in the world to skip, partly recoverable by naming the other seven people to each guest.

**Founder pull.** D gives founders a room of owners and a credible reason to accept zero airtime. F barely justifies their presence at all, which is why it scores lowest despite being a good event.

**Advertisability.** D compounds. Every clip an owner posts to their own audience carries the room with it, and it is the only format that produces public material without breaking the no-track-record rule, because the material is about the owner rather than about MedTech North.

## What each one costs you

Not folded into the score above, because these are your constraints rather than the guest's. They matter more than usual given revenue to date is $0.

| | D. On Record | E. Catchment Table | F. The Bench |
|---|---|---|---|
| Cash per room | Production on top of catering | Catering only | Catering only |
| Your operational load | High. Slot booking, running a set, edit turnaround | Low | Medium. Faculty sourcing takes lead time |
| Fit with the convening business | Strong. The footage is also your own evidence base | Strong. It is the existing dinner product with better seating | Weak. A talent room has a different buyer than `data/corporate-targets.md` |
| It fails if | The footage is not genuinely good. Below a quality bar, the gift becomes an embarrassment | The curation is not real, or one vendor gets in | Owners are not hiring that month |

**If cost were weighted, D still leads**, because a single co-host fee at the existing $2,500 meetup rate is sized to cover an evening of production almost exactly. But D is the one format that cannot be run badly on a budget, and a mediocre video is worse than no video.

## Recommendation

**Run D. Apply E's seating discipline to the dinner half of the same night.**

They are complementary rather than competing. On Record needs something for people to do between filming slots, and a curated non-competing catchment table is the best possible answer, so the same evening delivers a produced asset and a referral relationship without asking the owner for anything either time.

**Hold F.** It is a good event and a real business, but it serves a different buyer and it gives founders nothing, which breaks the sequencing that makes everything else work. Revisit it once the owner room exists and can be borrowed against.

## The founders' path, made explicit

This is the inversion, written as a mechanic rather than a principle.

| Stage | What the founder gets |
|---|---|
| Before | Applies. Pays. Told plainly there is no stage time, no deck, no demo, no pitching |
| On the night | A seat at a table with owners, and nothing else. They are a guest at someone else's feature |
| After | They submit which owners they want to reach and why, to MedTech North |
| The gate | The owner is asked privately and says yes or no. No is final and is not reported back as a maybe |
| The outcome | A consented introduction, made personally. Three to five per room, per `docs/16-product-architecture.md` |

The point of routing the ask through you rather than the room: **the owner is never pitched at the event.** That is the single thing that makes them willing to come back, and it is also what a founder is actually paying for, because a warm introduction from the convener converts better than a cornered conversation at a dinner.

## Outreach, first message to an owner

> Hi [name]. I run a small monthly room in Mississauga for people running clinical practices across the GTA.
>
> The next one is [date] and it works differently to most invitations you get. We bring in a proper camera setup and interview each practice owner in the room for twenty minutes about their own work. You leave owning the footage: the full interview, short cuts for social, stills and a written profile. Yours to use however you want, including as advertising for the practice.
>
> Nothing to prepare, nothing to present, and nobody is selling you anything on the night. Dinner is provided and there is no cost to you, permanently.
>
> If you want a slot, tell me which evening time suits and I will hold it for you.

The last line is the show-rate mechanic. A held time with a crew attached is a much harder commitment to walk away from than an RSVP to an evening.

Companion line for founders, which must never appear in the owner's message: no stage time, no demo, introductions afterwards and only with the owner's consent.

## Before the first room

- [ ] **Two real production quotes.** One operator, lighting, mics, edit turnaround. The whole format depends on this number being affordable and the output being good
- [ ] **Sample footage exists before the first invitation goes out.** Film one friendly owner first. Nobody books a slot on a promise, and you cannot claim a track record (`CLAUDE.md` rule 3)
- [ ] **Ownership and permission in writing.** They own their footage outright. Any use by MedTech North needs separate written permission, and putting it on the site needs its own ADR
- [ ] **No patient information on camera.** Ever. No charts, no screens, no identifiable case detail
- [ ] **Verify professional advertising rules per college** before the first shoot. Dentistry, pharmacy and physiotherapy each regulate how a member may advertise, and comparative or superlative claims are the likely exposure. **ASSUMPTION until checked with the actual college guidance.** Simplest mitigation: brief every interviewee that the edit will not carry superlatives, and let them approve their cut
- [ ] **Venue.** A residential amenity lounge is not a set, and it already cost one confirmed speaker (`ADR-013`). A production night is the strongest possible reason to fund an external venue

## Open questions

| Question | Why it matters | Who decides |
|---|---|---|
| Is the ICP now formally owner-operators rather than clinicians broadly? | It changes `docs/03-icp-and-segments.md` and probably needs an ADR | Ali |
| One discipline per room or mixed catchment? | Mixed serves the referral half. Single discipline is the untested volume claim in `HANDOFF.md` | Ali |
| Does room 003 run unfunded to produce the sample, or wait for a co-host? | Selling a format nobody has seen is hard. Running it costs production money you do not have yet | Ali |
| Who conducts the interviews? | Founder-led is cheaper and warmer. It also makes you the bottleneck on a night you are already hosting | Ali |
