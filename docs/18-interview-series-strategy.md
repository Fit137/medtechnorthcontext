# The Interview Series: Format, Cast and Topics

> **INTERNAL. Never published, never quoted, never shown to a guest.** This document ranks segments against each other, which `CLAUDE.md` rule 6 forbids in anything a member reads. Related: `ADR-023` (On Record is the room format), `docs/17-event-formats.md`, `docs/10-growth-flywheel.md`, `docs/11-corporate-outreach.md`, `data/verified-stats.md`.

The question: an online interview series, released as video. One-on-one or webinar. Which guests drive an audience, say yes quickly, appear for no fee, and require no chasing. What gets talked about that has not been talked about already.

---

## Short answer

**Run one-on-one, recorded, released. Do not run a live webinar in season one.**

Three reasons, all of them structural rather than aesthetic.

A live webinar has a **visible failure mode**. Free-attendance events in this business run 40 to 60% no-show, which is why the guarantee ladder in `docs/16-product-architecture.md` guarantees half of a stated target rather than the target. A room of eleven at a dinner is a good evening. Eleven people on a live webinar, with a named guest watching the attendee count, is a bad evening for the one person whose opinion of the property matters most.

A live webinar also **displays a track record that does not exist**. Registration counts, attendee numbers and past-session archives are exactly what `CLAUDE.md` rule 3 forbids. Two rooms have been held. A recorded interview makes no headcount claim at all, so the rule costs nothing. A live event has to either publish numbers or conspicuously hide them.

And a recording **cannot fail in public**. A weak interview is never released. A weak webinar has already happened in front of the guest.

The second-best format is a **recorded roundtable of two or three guests**, which is the thing people actually want from a webinar, without the part they fear. Run it from month three, once there is a back catalogue to show a guest before asking them to sit with two strangers.

**Ecosystem verdict, in one line: build the series on practice owners, and use ecosystem support organisations as the distribution partner rather than as the guest.**

---

## Part 1: format, scored

Weights reflect the two stated objectives, an audience that actually watches and no chasing, plus the constraint that revenue to date is zero, so operating cost is real.

Reach ceiling 0.16 · distribution multiplier 0.16 · guest yes-rate 0.15 · commercial conversion 0.15 · downside safety 0.14 · operating cost, higher is cheaper 0.13 · repurposing yield 0.11

| Criterion | One-on-one, recorded | Recorded roundtable, 2 to 3 | On-site Feature | Live closed roundtable, unrecorded | Live panel webinar | Live webinar, single guest |
|---|---|---|---|---|---|---|
| Reach ceiling | 7 | 8 | 7 | 2 | 6 | 4 |
| Distribution multiplier | 8 | 10 | 10 | 3 | 8 | 5 |
| Guest yes-rate | 10 | 8 | 8 | 9 | 6 | 7 |
| Commercial conversion | 9 | 8 | 10 | 9 | 6 | 5 |
| Downside safety | 10 | 9 | 9 | 8 | 2 | 3 |
| Operating cost (higher is cheaper) | 8 | 6 | 3 | 8 | 4 | 6 |
| Repurposing yield | 9 | 10 | 10 | 3 | 7 | 6 |
| **Weighted total** | **8.68** | **8.42** | **8.17** | **5.99** | **5.61** | **5.10** |

### Reading the format table

**Guest yes-rate is where the live formats lose.** A recording is a 40-minute call on a calendar, movable, re-shootable, and nobody sees it until it is good. A live session asks a practice owner to hold a fixed evening hostage. `docs/17-event-formats.md` already established that an owner's evening is chargeable time they are choosing not to bill. A recording does not ask for the evening.

**Downside safety is where they lose badly.** The live panel scores 2 because it puts three or four people whose goodwill is the whole asset in front of the property's weakest number. That is the single most expensive thing that can go wrong here, and it is unrecoverable in a small sector where those three people know each other.

**The roundtable beats the one-on-one on everything except cost and ease.** Three guests means three distributors, disagreement makes better clips, and the repurposing yield is the highest in the table. It loses on the two things that matter in month one. Sequence it, do not skip it.

**The on-site Feature is already decided** and scores third here only because travel and crew make it expensive per unit. It converts better than anything else in the table, because it is an hour inside a qualified buyer's building. `ADR-023` Tier 2 covers it. The online series is not a replacement for it, it is the thing that fills its calendar.

**The live closed roundtable, unrecorded, is a different product.** Small, invitation-only, Chatham House, nothing leaves the table. It has near-zero reach by design and the highest per-attendee conversion in the business. Keep it, price it, and never confuse it with content.

### What to do with the webinar idea

Hold it. A live session is worth running when three conditions hold at once, and none holds today.

1. There is an owned list large enough that 40 to 60% no-show still leaves a full-looking room
2. There is a back catalogue, so a guest can see what they are agreeing to
3. There is a reason to be live, meaning questions from the audience that could not be scripted

Condition three is the one people skip. If the session would be identical as a recording, it should be a recording.

---

## Part 2: the ecosystem map, scored

Every element that could sit in front of a camera, rated on the criteria in the brief plus two that decide whether the effort pays for itself.

Weights: unsaid-topic supply 0.18 · audience pull 0.16 · self-distribution 0.14 · commercial pull-through 0.12 · eagerness 0.12 · no chasing 0.10 · low friction 0.10 · appears for free 0.08

**Column definitions.** *Unsaid* is whether they hold material nobody has published. *Pull* is whether their name makes people watch. *Self-dist* is whether they will post it themselves without being asked, which is the real view driver here. *Eager* is how fast they say yes. *Friction* is approval gates, comms policy and compliance, higher is easier. *Free* is whether they appear without a fee. *No chase* is speed to yes and operating burden. *Commercial* is pull-through to the products in `docs/16-product-architecture.md`.

| # | Ecosystem element | Unsaid | Pull | Self-dist | Eager | Friction | Free | No chase | Commercial | **Score** |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Community pharmacy owners** | 10 | 7 | 8 | 9 | 8 | 10 | 7 | 10 | **8.62** |
| 2 | **Dental practice owners** | 9 | 7 | 9 | 9 | 8 | 10 | 7 | 10 | **8.58** |
| 3 | **Ecosystem support organisations** | 5 | 8 | 10 | 9 | 8 | 10 | 8 | 7 | **7.90** |
| 4 | **Scaled health-tech commercial leads** | 7 | 7 | 8 | 8 | 7 | 10 | 7 | 9 | **7.74** |
| 5 | **Physiotherapy and rehab clinic owners** | 7 | 6 | 8 | 9 | 9 | 10 | 8 | 6 | **7.64** |
| 6 | Investors, health VC and angels | 5 | 8 | 8 | 9 | 9 | 10 | 9 | 5 | **7.58** |
| 7 | Patient advocates and patient leaders | 8 | 6 | 9 | 10 | 8 | 9 | 8 | 3 | **7.54** |
| 8 | **Academic researchers and professors** | 8 | 6 | 7 | 9 | 8 | 10 | 8 | 5 | **7.46** |
| 9 | Early founders, pre-seed and seed | 5 | 4 | 10 | 10 | 10 | 10 | 10 | 4 | **7.42** |
| 10 | Municipal and regional economic development | 6 | 5 | 7 | 9 | 8 | 10 | 8 | 8 | **7.30** |
| 11 | **Canadian subsidiary marketing leads** | 5 | 5 | 9 | 8 | 6 | 10 | 6 | 10 | **7.12** |
| 12 | Service providers and consultants | 4 | 3 | 10 | 10 | 10 | 10 | 10 | 3 | **6.96** |
| 13 | DSO, banner and group practice executives | 8 | 6 | 6 | 6 | 6 | 10 | 5 | 9 | **6.94** |
| 14 | Professional associations and colleges | 6 | 9 | 7 | 5 | 5 | 10 | 4 | 8 | **6.76** |
| 15 | Employed allied clinicians | 6 | 4 | 7 | 10 | 7 | 10 | 9 | 3 | **6.66** |
| 16 | Students and new graduates | 3 | 3 | 9 | 10 | 10 | 10 | 10 | 2 | **6.52** |
| 17 | Nurses and nurse practitioners | 7 | 6 | 6 | 8 | 5 | 10 | 6 | 4 | **6.40** |
| 18 | Provincial health system and procurement | 9 | 9 | 2 | 4 | 3 | 10 | 2 | 7 | **5.96** |
| 19 | Hospital procurement and supply chain | 10 | 8 | 2 | 3 | 3 | 10 | 2 | 5 | **5.62** |
| 20 | Hospital physicians and surgeons | 8 | 8 | 4 | 3 | 4 | 8 | 2 | 4 | **5.36** |
| 21 | Federal officials | 8 | 9 | 2 | 3 | 2 | 10 | 1 | 5 | **5.22** |
| 22 | Distributors, payers and benefits carriers | 7 | 4 | 4 | 4 | 4 | 10 | 3 | 6 | **5.16** |

### Who turns up for each of them

The audience column matters more than the score, because it decides which episodes to make when a specific corporate conversation is open.

| # | Element | Who reliably watches | Use in the series |
|---|---|---|---|
| 1 | Community pharmacy owners | Other pharmacy owners, pharmacy managers, banner head offices, pharmacy software vendors, vaccine and OTC brand teams | **Season one lead.** Their market changed on 1 July 2026 and nobody has interviewed them about it |
| 2 | Dental practice owners | Other dentists, associates and hygienists, practice managers, dental software and imaging vendors, DSO corporate development | **Season one lead.** CDCP is the largest coverage expansion in Canadian history and the operator view is missing |
| 3 | Ecosystem support organisations | Founders at every stage, provincial and federal program staff, university commercialisation offices, their own member lists | **Distribution partner, not guest.** Co-promotion is their mandate. See the caution below |
| 4 | Scaled health-tech commercial leads | Founders, corporate development, Canadian marketing peers, investors | Credibility guest, and a warm path into the buyer list |
| 5 | Physiotherapy and rehab clinic owners | Other clinic owners, kinesiologists and rehab assistants, rehab software vendors, insurers and benefits carriers | Fills the catchment logic in `docs/17-event-formats.md` Format E |
| 6 | Investors | Founders, in volume, faster than any other guest type | Best pure attendance magnet for a founder audience. A good guest and a poor customer |
| 7 | Patient advocates | Clinicians, policy staff, health journalists, disease-specific communities | Highest share rate per episode. No patient information on camera, ever |
| 8 | Academic researchers | Graduate students, other researchers, university communications, program officers | Their institution amplifies. One McMaster professor already posted publicly and unprompted |
| 9 | Early founders | Other founders, and almost nobody else | See the finding below. Cap hard or exclude |
| 10 | Municipal and regional economic development | Regional business media, other municipalities, provincial program staff, local employers | Quiet, high-value. Feeds the public funding track |
| 11 | Canadian subsidiary marketing leads | Marketing peers across the sector, agencies, association staff, their own head office | **The buyer, on camera.** The single best pre-sales instrument available |
| 12 | Service providers and consultants | Their own prospect lists, and thin beyond that | See the finding below |
| 13 | DSO, banner and group executives | Practice owners considering selling, corporate development, lenders | Hard to book, worth it once |
| 14 | Professional associations and colleges | Their entire membership, which is the list you want | Slow yes, enormous reach when it lands |
| 15 | Employed allied clinicians | Peers in the same discipline, students, faculty | Cheap volume for the same-question format |
| 16 | Students and new graduates | Other students, faculty, early career peers | Volume and warmth, no authority. Use inside compilations |
| 17 | Nurses and nurse practitioners | Nursing peers, nursing faculty, virtual care and remote monitoring companies | Employer approval is the gate |
| 18 | Provincial health system and procurement | Founders, corporates, policy staff, journalists, effectively everyone | Highest value per episode, lowest probability of happening |
| 19 | Hospital procurement and supply chain | Founders and corporates who have hit the wall | The most valuable unheard voice in the sector, and the hardest to get on camera |
| 20 | Hospital physicians and surgeons | Other physicians, trainees, hospital leadership | Do not build a season on this. See the finding below |
| 21 | Federal officials | Founders, industry associations, policy watchers | Legal review required before an approach. Not a season one problem |
| 22 | Distributors, payers and benefits carriers | Practice owners, brand teams, benefits consultants | Compliance-gated. Park it |

---

## Part 3: three findings the scores make hard to avoid

### 1. Eagerness runs opposite to authority

Look at the four highest scores on **eager**, **free** and **no chase** together. Service providers score a perfect 10 on all three. Early founders score 10 on all three. Students score 10 on all three. All three sit in the bottom half of the table.

The people who will most happily appear on camera for nothing are the people whose appearance persuades nobody. That is not a coincidence and it is not a moral point. Eagerness is a signal of how much someone needs the exposure, and needing exposure is the opposite of having an audience.

**So the brief has to be read carefully.** The stated goal is guests who are eager, welcoming, free and require no chasing. Optimising directly for those four produces a channel of consultants and seed-stage founders talking to each other, and that channel is dead on arrival.

The correct move is to keep the four requirements and find the segment where they coincide with authority rather than replace it. **Practice owners are that segment**, which is why the two owner rows top the table. They say yes fast, they appear for nothing, they have an audience of exactly the people corporates pay to reach, and they post their own footage without being asked, because a professional feature about their practice is advertising they would otherwise have paid for.

### 2. The guest is the distribution, so pick guests by who they reach

`docs/10-growth-flywheel.md` already contains the mechanism and it applies here without modification: do not ask them to share your content, manufacture the artifact they want to share.

MedTech North has no audience. Two rooms, no member counts, nothing publishable per rule 3. So every view in year one arrives through somebody else's following. That makes **self-distribution the most important column in the map**, not audience pull, because a guest with 40,000 followers who never posts is worth less than a guest with 900 who posts three times.

Practical consequence: before booking anyone, look at whether they have posted their own material in the last 90 days. That check is worth more than the follower count and takes the same thirty seconds.

### 3. Physicians are the segment to design around, not toward

Row 20 scores 5.36, and the two lowest sub-scores are eagerness at 3 and no-chasing at 2. That is not pessimism, it is the record. Zero physicians have attended either room. Three accepted for room 002 and all three no-showed on the day. Two more withdrew for structural reasons.

A video series is a cheaper way to test physician willingness than another room, because a recording costs one calendar slot rather than a catered evening. But it must not be the spine of season one. `ADR-012` settled this for events and the same reasoning holds for content: authority is category-specific, and for practice software, imaging, materials, minor ailments and dental benefits there is no physician above the practice owner in the purchase decision.

**Two cautions to carry, both from existing documents.**

*Founders on camera.* The public rule is that nobody buys a microphone and no one here is anyone's prospect. `ADR-023` gives founders no stage time in the room. If founders get airtime online while being denied it in the room, the rule looks negotiable, and a clinician who notices that will not say so, they will simply stop replying. Season one is safer with founders as questioners rather than subjects, or absent.

*Ecosystem support organisations.* Row 3 scores 7.90, the highest non-clinical score in the map, and its self-distribution score of 10 is the highest in the table. MaRS, OBIO, CAN Health, MEDTEQ+ and the regional centres co-promote as a matter of mandate. They are also listed in `data/competitors.md` as competitors, and `data/corporate-targets.md` files them under organisations that contract rather than sponsor. Use them to distribute and to supply guests. Do not let the series become their channel.

---

## Part 4: topics that have not been said

The novelty is not in finding an unreported subject. Every policy change below has been reported. The unsaid part is always the same: **what it did to somebody's week.** Policy coverage stops at the announcement. Nobody publishes the operating consequence, because that requires an owner willing to say it on camera, and nobody has been asking.

Every figure below traces to `data/verified-stats.md`. Nothing else ships.

| # | Working title | The verified hook | Why it has not been said | Guest |
|---|---|---|---|---|
| 1 | What the 28th minor ailment cost to staff | Ontario pharmacists went from 19 to 28 minor ailments on 1 July 2026, 33 planned for early 2027. Over 99% of Ontario pharmacies participate. 2.4 million assessments delivered | Coverage stopped at the scope list. Nobody has an owner on record on consult room space, staffing, or whether the fee covers the time | Community pharmacy owners |
| 2 | The chair time CDCP actually bought | CDCP expanded to all eligible Canadians for the 2026-27 benefit year. More than 6.5 million covered, over 4 million treated, roughly $13 billion over five years, the largest expansion of federal health coverage in Canadian history | Reported as a coverage story and a political story. Never as an operations story from inside a practice | Dental practice owners |
| 3 | The number everyone is still quoting from 2016 | A survey of Ontario's academic hospitals found 76% naming policies, directives and procurement regulations a major hurdle | This figure is load-bearing across the whole sector and it is a decade old. An episode that goes looking for the 2026 answer is new by construction, and it repairs the weakest citation in the pitch | Health system and procurement, or an academic |
| 4 | Buy Canadian, argued from both sides | Buy Ontario Act, royal assent 11 December 2025. Federal Buy Canadian effective 16 December 2025, health and pharmaceuticals one of five named strategic sectors. Threshold for Canadian preference dropped from $25M to $5M on 15 June 2026 | A June 2026 Policy Options piece argued it will not deliver much. Conceding a counterargument on camera is rarer and more persuasive than the announcement | Policy voice plus a founder who has bid |
| 5 | One full loop, start to finish | More than a year, best case, from lab to bedside, and several years in practice. Without pilots there is no data, and without data there is no adoption | Everyone cites the delay. Almost nobody walks one product through the whole loop with dates attached | Academic researcher, or a scaled commercial lead |
| 6 | Thirteen jurisdictions | 13 provincial and territorial jurisdictions, each with different priorities and privacy legislation | Founders keep discovering this after they have built for one province. It is stated everywhere and explained nowhere | Regulatory or privacy specialist |
| 7 | Who signs a ten thousand dollar decision | No public figure. Sourced from the buyer directly | Nothing published anywhere describes how a Canadian subsidiary actually approves a small marketing spend. The person who knows will say it happily, because it makes them look competent | Canadian subsidiary marketing lead |
| 8 | Why owners stop going to evening education | Free-attendance events run 40 to 60% no-show | The people who fund evening education have never heard the honest answer, and they are the buyer list in `data/corporate-targets.md` | Practice owners, three of them |
| 9 | What your referrer wishes you knew | No figure required | Cross-discipline candour is common in private and absent in public. Cheap to make, endlessly repeatable | Any two non-competing disciplines |
| 10 | The bench nobody can fill | No sourced figure yet. Recruiter placement fees are commonly quoted as a percentage of first-year salary and must be sourced before use | Staffing is the live operational emergency in dental, physiotherapy and community pharmacy, and owners talk about it more freely than about technology | Practice owners |

### The format device that produces novelty at volume

`ADR-023` already contains it, and it transfers to online without a change: **one owner answering twenty questions is an interview, twenty owners answering the same question is a format.**

Ask every guest, in every episode, the same closing question. Cut the answers together monthly. The compilation is a second release from footage already shot, it gives every guest a second reason to post, and the series accumulates something no competitor has, which is a longitudinal record of what one question looks like across disciplines and across a year.

Keep the question identical. Varying it produces interviews that do not compound.

---

## Part 5: the offer that removes chasing

Chasing happens when the ask is for their time. It stops when the ask is a gift. This is the same inversion `ADR-023` made for the room, ported to video.

**Not:** would you come on our show. That asks a busy owner to donate an hour to a property they have not heard of, and puts them in the position of doing a favour.

**Instead:** we produce a professional feature about your practice. You keep the footage outright, edited long form, vertical cuts, stills and a written profile drawn from the transcript. Yours to run as advertising, put on your site, or send to a referrer. No cost, no watermark demanded, and you approve the cut before anything is published.

Everything that makes this work is already decided:

- **The scarce side receives, the abundant side works and pays.** Owners are asked for nothing beyond turning up presentable and talking about their own work
- **No preparation, no homework, no reading.** The moment there is prep, it becomes a task and the yes rate collapses
- **They own it.** MedTech North's use of any clip requires separate written permission, per `ADR-023`
- **They approve the cut.** This is a compliance requirement and it is also the reason the yes is easy

**One thing to fix before the first invitation goes out.** The current bottleneck is not willingness, it is that nothing exists to show. Shoot two episodes with people who already owe nothing and will say yes today, edit them properly, and use those two as the entire pitch for every subsequent guest. A link beats a paragraph, permanently.

---

## Part 6: distribution, without asking anyone for anything

Five mechanisms, all of them ones where nobody is asked to promote MedTech North.

1. **The guest posts it**, because it is about them and it is good. This is the primary channel and it needs no ask
2. **Their organisation reposts.** Universities, banners, associations and corporate marketing teams amplify their own people as a matter of routine
3. **The monthly compilation** gives every past guest a second reason to post, months after their episode
4. **Co-promotion by ecosystem support organisations** when one of their members is featured. Their mandate is member visibility, so the ask lands as a favour to them
5. **A co-host funds the production and shares to their own list.** A produced session sits at the $7,500 line in `docs/16-product-architecture.md`. Publicly they are a co-host, never a sponsor, per `ADR-007`

Note what is absent. There is no ask to share, no repost request, no incentive. `docs/10-growth-flywheel.md` scores referral rewards worst of all mechanics for a reason: payment reframes a judgement call as a job.

---

## Part 7: measure something other than views

View count is the wrong number here and chasing it will produce the wrong content. A niche Canadian health business channel that reaches 800 of the right people outperforms one that reaches 40,000 of the wrong ones, and only one of those two can be sold.

Track these instead:

| Metric | Why |
|---|---|
| Named target companies whose staff watched | The only view count that maps to revenue |
| Guests who posted their own episode without being asked | The health of the whole distribution model, in one number |
| Nominations arriving per episode | The flywheel metric from `docs/10-growth-flywheel.md`, and the cheapest guest supply available |
| Interviews converted into room attendance | The series exists to fill rooms |
| Interviews converted into a corporate conversation | Especially row 11, where the interview is the discovery call |
| Episodes usable in the insight brief | Next action 10 in `HANDOFF.md` needs 8 to 12 clinician interviews. Do that work once, use it twice |

That last row is the strongest argument for doing this at all. The insight brief already requires clinician interviews. Filming them costs one extra hour of setup and produces a publishable asset, a gift for the guest, and material for the brief from the same conversation.

---

## Compliance carried forward

Non-negotiable, all sourced from existing decisions.

- **Per-college advertising rules must be checked before the first shoot.** No superlatives, no comparative claims in any cut. Still open in `HANDOFF.md`
- **Every interviewee approves their own cut** before release
- **No patient information on camera, in any frame**, ever
- **Guests own their footage outright.** Any MedTech North use needs separate written permission
- **Publishing guest material on the MedTech North site needs its own ADR**, because rule 3 currently forbids anything that reads as a track record
- **No sponsorship language anywhere public.** A paying company is a co-host
- **If anything ever carries registration**, CASL requires express consent, unchecked box, named party, at the point of registration
- **Federal officials require legal review first**, for conflict of interest and hospitality rules. Not a season one problem, and it should not become one by accident

---

## Recommendation, in sequence

| Phase | What runs | Guests |
|---|---|---|
| Weeks 1 to 2 | Two proof episodes, recorded one-on-one, edited properly | Two people who will say yes today. Warmth over prominence |
| Month 1 to 2 | Weekly one-on-one, same closing question every time | Rows 1, 2 and 5. Practice owners |
| Month 2 | First monthly compilation from footage already shot | All prior guests |
| Month 3 | Add recorded roundtables of two or three | Rows 4, 8 and 10 mixed with owners |
| Month 3 onward | Approach rows 14 and 18 with a back catalogue in hand | Associations, then health system |
| Month 6, conditional | A live session, only if all three conditions in Part 1 hold | Reassess |

**Do not run a live webinar until there is a list and a catalogue.** The format is not the problem. The order is.

---

## Open questions

| Question | Why it matters | Who decides |
|---|---|---|
| Do founders appear on camera at all in season one? | Airtime online while denied it in the room makes the public rule look negotiable | Ali |
| Is the series branded MedTech North, or is it the guest's asset with no branding? | Unbranded increases the yes rate and reduces distribution. Branded does the reverse | Ali |
| What is the production floor? | `ADR-023` is explicit that a mediocre video is worse than no video. Two real quotes are still outstanding | Ali, after quotes |
| Does an episode count as advertising under any college's rules? | Determines whether the guest or MedTech North carries the exposure | Check per college before shoot one |
| Does site publication of guest footage warrant reversing rule 3? | Needs its own ADR either way | Ali |
