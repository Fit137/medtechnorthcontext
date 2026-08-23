# Event Formats: Room 003 Onwards

> **Stale as of 22 August 2026. `ADR-026` reverses `ADR-002`.** Every seat is now ticketed unless a co-host has paid the convening fee up front, in which case that buyer's guests sit free. The On Record economics assume owners attend free and always will. That premise is gone unless the room is co-host funded.


> **INTERNAL. Status: Format D chosen. See `ADR-023` and the production model in Part 3.** Part 1 records a rejected set and why, because the reason is the useful part. Part 2 is the set that replaced it. Part 3 is how D actually runs inside an evening. Related: `docs/13-buyer-led-room-design.md`, `docs/16-product-architecture.md`, `ADR-012`, `ADR-016`.

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

---

# Part 3: how On Record actually runs

## The throughput problem

A twenty-minute interview per owner does not fit inside an evening and it never will.

| Owners | At 20 min | At 12 min | At 7 min | At 5 min |
|---|---|---|---|---|
| 20 | 6h 40m | 4h 00m | 2h 20m | 1h 40m |
| 16 | 5h 20m | 3h 12m | 1h 52m | 1h 20m |
| 12 | 4h 00m | 2h 24m | 1h 24m | 1h 00m |
| 8 | 2h 40m | 1h 36m | 56m | 40m |

A 6:30 to 9:30 evening is 180 minutes. After arrival, food and an opening, the usable capture window is about **105 minutes**, and it has to run without stopping the dinner, because a room where nobody talks to each other is a worse room.

So the honest read: **at twenty minutes, only eight owners fit, and only if the entire evening is a production schedule.** That is not the event.

## Three assumptions worth breaking before compromising

1. **That interview length equals deliverable length.** It does not. Twenty minutes of raw is what an unstructured interview needs to find a story. With four fixed questions and an instruction to answer in full sentences, three good minutes produces a usable vertical cut, and ten produces a long-form edit.
2. **That everyone needs the same capture.** They do not. The status and the money value sit in different objects, and the cheap one takes five minutes.
3. **That the best footage comes from the event.** It does not. The best footage of a practice owner is shot **in their practice**: their space, their team, their front desk. A backdrop at a dinner venue produces generic footage no matter how long the interview runs.

Breaking the third one resolves the constraint entirely, because the deep interview was always in the wrong place.

## The two-tier capture model

**Tier 1: the Portrait and the Question. Everyone, on the night.**

One lit station running continuously alongside dinner. Each owner comes over when it suits them.

| Step | Time |
|---|---|
| Walk over, mic up | 1.5 min |
| Two or three portrait frames | 1.5 min |
| One question to camera, two takes | 3 min |
| Unmic, thank, release back to the table | 1 min |
| **Per owner** | **~7 min** |

They leave having been professionally photographed and filmed, and they receive edited stills plus a captioned vertical clip within a week. A current professional headshot is something most owners need, most owners have an outdated one, and it costs them nothing and five minutes.

**The question is the same for everyone, every room.** Something that positions them as the expert and that they will happily post: what patients get wrong about their field, or the one change they made this year they would tell another owner to make. Identical questions make editing consistent, remove all preparation, and produce a series that compounds across months. Twenty owners answering the same question is a content format. One owner answering twenty questions is an interview.

**Tier 2: the Feature. A few owners, at their own clinic, on another day.**

Forty-five to sixty minutes on site, including footage of the space and the team. This is the asset with real market value, and it is better in every respect than anything shot at a dinner. It also gets you a second, unhurried touchpoint with a qualified owner, in their building, which is worth more than the evening itself.

You already identified this as a separate opportunity. It is not separate. It is where the twenty minutes was always supposed to live.

## Run of show, room of 12 to 14 owners

Room 003 runs **6:30 to 9:00**, which is 150 minutes rather than the 180 assumed earlier. The capture window shrinks with it.

| Time | What happens |
|---|---|
| 6:30 | Arrival, food, tables seated by catchment and discipline |
| 6:45 | Open. Two minutes. What the night is, what happens with the footage, what nobody will do to them |
| 6:50 | Capture station opens. Runner brings people over in a set order, two at a time, so nobody queues |
| 6:50 to 8:30 | Dinner and tables run continuously. Capture never interrupts the room |
| 8:30 | Station closes. Feature slots booked for whoever wants one |
| 8:35 | Close. Two minutes, thanks and nothing else. The nomination question is asked to people individually as they leave, never to the room |
| 9:00 | Ends |

**The capture window is now 100 minutes, not 105.** 12 owners at 7 minutes is 84 minutes and still fits one station with room to spare. **The one-station ceiling drops from about 16 to about 14.** Beyond that, add a second operator rather than shortening the slot, because a shortened slot is the compromise that makes someone feel rushed.

With a commissioned second question at roughly 8.5 minutes per owner, one station carries **11**. That is the number to hold if a brief has been sold.

**The runner is the role that makes this work**, and it is the right job for a student: they hold the running order, collect the release form, brief the next person on the question while the current one films, and keep the station from ever sitting idle. It also gives a student a real reason to be in the room without taking an owner's seat.

## Scale reality check

Room 001 had 16 attendees in total, of whom 10 or more were practising clinicians and none were confirmed as owner-operators of seven-figure practices. **Room 003 will not have 20 owners.** Designing the production around 20 is solving a problem you do not have yet. Design for 12, prove the footage is good, and add a second station the month the room outgrows one.

## Answering the two compromises directly

**Fewer people interviewed is the worse compromise.** It splits the room into the featured and the attending, it makes the unfeatured evening a plain dinner, and it forces a selection nobody asked you to make. Any owner who works out they were not chosen has been ranked, and `CLAUDE.md` rule 6 exists precisely because ranking guests is unrecoverable.

**Shorter is survivable, and the fix is not duration.** What makes a person feel rushed is setup overhead eating their time and being cut off mid-answer. Both are solvable:

- Pre-light and pre-frame the station before anyone arrives. Nobody watches you adjust a light
- Fixed questions, so no thinking time is spent deciding what to ask
- **The last question is always "anything you want to add."** They control the ending, so nobody is cut off
- Tell them the format up front: short on the night, and a longer one at their clinic if they want it. An owner who knows a five-minute slot is a five-minute slot does not feel rushed. One who expected twenty does

**If you must pick one of the two, pick shorter.** But the two-tier model means you do not have to.

## What this does to the price

A produced room is not a $2,500 monthly meetup. One operator, lighting, mics and edit turnaround is a real cost per room, and two operators is roughly double.

**ASSUMPTION, and the first thing to replace with reality:** get two quotes for a single operator with lighting and a one-week edit turnaround for an evening in the GTA, and one for a photographer running a portrait station. Until those exist, the pricing below is a shape rather than a number.

The likely commercial consequence: On Record sits at the **$7,500 session partner** line in `docs/13-buyer-led-room-design.md` rather than the $2,500 meetup line in `docs/16-product-architecture.md`, because the co-host is funding a production rather than an evening. That is a better sale, not a worse one, and the footage gives the co-host something concrete without ever touching the attendee list.

**The cheap version, if the first room runs unfunded:** one operator, no separate photographer, stills pulled from video frames. Quality drops and it is still worth doing once, because you cannot sell this format without sample footage and you cannot get sample footage without running it.

---

# Part 4: what the co-host is buying, and who the question serves

> Proposal. Needs its own ADR once decided. Extends `ADR-023`.

## The framing that loses the sale

"Fund a production and twelve practice owners get free marketing" is not a purchase. Any buyer hears it as charity with a logo attached, and the first question back is why they should pay for someone else's advertising.

**The production is not the deliverable. It is the admission price, paid in kind.** Owners attend free and always will (`ADR-002`), so the value that gets them out of the practice has to flow to them as something other than cash. The co-host is not funding a video. They are funding **the reason twelve owner-operators clear an evening**, in a room where no competitor of theirs is present.

That sentence is the whole sale, and it is honest.

## What the co-host actually receives

| Item | Detail |
|---|---|
| **The room** | Twelve to sixteen practice owners, in person, three hours, category exclusivity for that room (`ADR-020`) |
| **Their own footage** | The set is lit and the operator is already paid for. Their Canadian lead gets a filmed piece at marginal cost, recorded away from the room and never shown to it |
| **Composition report** | Who was there, by role. Existing product, existing promise |
| **Consented introductions** | Three to five, made personally, owner consents first. Same gate as founders |
| **The synthesis** | Twelve owners on the record answering the same question. After three rooms that is thirty-six, and it is primary research they cannot produce |
| **Association, unpromised** | When owners post their clips, the room travels. Never mandated, never guaranteed, never sold as reach |

**On that last row, the rule that protects it: owners get two exports.** One clean, one carrying a small end card naming the room and the co-host. They pick. Requiring a tag turns the gift into an invoice and the format dies in one round.

**Cost per owner is the number to hold in your head.** At $7,500 for a room of twelve that is $625 for three hours of in-person presence with an owner-operator. Do not quote a comparison figure, because none exists in `data/verified-stats.md`. Use the discovery question from `docs/12-convening-as-a-service.md` instead: what did you spend last year to get in front of practice owners, and how many did you actually meet. Their number sets the anchor.

**The disqualifying signal:** a buyer who wants leads. They will be unhappy, they will push on the never list, and they will produce a bad reference. Sell them nothing.

## Can the question serve them

Partly, and the line is already drawn in `docs/12-convening-as-a-service.md` under **topical orthogonality**: the co-host's product must be orthogonal to the room's subject. A dental software vendor co-hosting a room about running a dental practice turns the evening into a sales meeting, and owners read that in about ten minutes.

So tuning the question toward the co-host's category is precisely the thing that breaks the co-host product. But the same document already says category-adjacent companies are not lost revenue, they are buyers of a different thing, with **the interest disclosed and bounded**. That resolves your question cleanly, because there are two buyers and only one of them may touch the question.

| Buyer | Relationship to the subject | What they buy | Does the question serve them |
|---|---|---|---|
| **Co-host** | Must be orthogonal | The room, footage, report, introductions, category exclusivity | **No.** The question is written for the owner |
| **Brief buyer** | May be category-adjacent | The synthesised answers, on the record | **Yes, openly.** They commission the territory and the room is told |

**A commissioned question does not feel forced. A hidden one does.** Owners answer commissioned research every week of their lives and think nothing of it, as long as they know who is asking and can decline without consequence. What they cannot forgive is finding out afterwards that the friendly question was market research they were not told about.

## The two questions

**Question 1, the series question. Every owner, every room, unchanged.** Written entirely for them. This is the one that builds the library and the one that has to pass the test below.

**Question 2, commissioned. Only exists when a brief has been sold.** Announced before the camera rolls, in one sentence: this one was put to us by [company], you can skip it, and nothing changes if you do. Skipping has to be genuinely costless or the disclosure is theatre.

**The test that governs both: would the owner post this clip to their own audience, unedited?**

If yes, the question serves them and the buyer benefits by association. If no, it has been captured, and the format is spent. "What frustrates you most about your current booking software" fails instantly, because it produces a clip about a problem rather than about their expertise, and no owner posts that. "What did you change about how the practice runs this year that you would tell another owner to copy" passes, produces a postable clip, and still generates commentary a practice-operations company would pay for.

Territory can be steered. Wording cannot. **The buyer names the territory, MedTech North writes the question, and the postability test is the veto.**

**Timing cost:** the second question adds roughly 90 seconds per owner, taking the station from about 7 minutes to about 8.5. Twelve owners then fills the capture window almost exactly. Past twelve with two questions, add the second operator.

## Three configurations

1. **Orthogonal co-host, one question.** The cleanest and the Miro shape. They fund the evening, the question belongs to the owner
2. **Orthogonal co-host plus brief.** They also buy the synthesis of the series answers. Still no commissioned question, because the material already exists
3. **Category-adjacent buyer, brief only.** No co-host position, not named to the room as a host, not present. They commission question two, it is declared, and they receive the synthesis

Configuration 3 can run at the same room as configuration 1 with a different company, provided the two are not in the same category. That roughly doubles what a single evening can carry without touching the never list, because the brief buyer never enters the room and never sees a name.

## What neither buyer ever gets

Attendee contact data. Guest list before the room. Editorial control over the brief or any edit. Stage time. Any claim that owners endorse them. Any promised commercial outcome. **Unflattering answers are delivered as given**, and a buyer who commissions a question about their own category and dislikes the result receives it anyway. Say that at signature, not afterwards.

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
