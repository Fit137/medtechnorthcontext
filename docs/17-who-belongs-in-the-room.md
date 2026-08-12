# Who Belongs in the Room: the CEO-only question, scored

> **INTERNAL. Never published.** Decision brief for room 003, written 11 August 2026 while the room is roughly 17 days out. The scoring below is the argument, not the ruling.
>
> **Revised 11 August 2026, same day, after challenge.** Section 4 of the first draft argued that geography and venue dominated the decision and that senior guests should be routed out of the building. **That was wrong on three counts** and the corrections are in section 4a. The venue policy is now settled in `ADR-023`. The recommendation survives, on two reasons rather than five.

---

## 1. The situation

Room 003 has four registrations. One is the CEO of a 272-person Toronto health data company (`data/prospects/smile-digital-health.md`). The other three are a professor at Humber College, a pharmacist, and a health researcher, all in their late twenties or early thirties. Everyone else who was given the link has not acted, and several said they would decide closer to the date.

The founder is depleted by the format. Free, open registration produces late RSVPs, no-shows, no reciprocity, and no reaction to anything offered afterwards, including the directory listing. He is self-funding, working alone, and hosting in his own condo amenity.

The proposal on the table is to convert room 003 to a CEO-only table of eight, cancel the current registrations, move the displaced guests to a paid restaurant event, and run the executive table as the new format.

---

## 2. Where the read is correct

Seven things, all of them true and none of them to be argued with.

1. **Open registration with no cost of entry produces indifference.** The evidence is in hand: no reaction to the directory listing, late RSVPs, and a documented 40 to 60% no-show rate on free rooms.
2. **Service providers must never get free proximity to executives.** Already project policy. A salesperson working a CEO at a table burns the room permanently.
3. **The building is the right venue for a small confidential room.** Free, private, noise-isolated, controllable, no minimum spend, no certificate required. The first draft argued the opposite and was wrong. Settled in `ADR-023`. The one physician who withdrew over the residential venue remains a single data point from a mixed room.
4. **Charging changes the founder's relationship to a no-show.** Psychologically accurate and worth acting on.
5. **Named seats, personalisation, a stated cap and a guest list circulated in advance all raise attendance.** Correct, and this is the cheapest available lever in the entire operation.
6. **Founder energy is a real asset, not a soft one.** `HANDOFF.md` lists founder concentration as a high-severity risk. A format the founder resents will not survive twelve months, and inconsistency kills a series faster than a small room does.
7. **One CEO of a 272-person company is worth more than twenty casual attendees.** True.

---

## 3. Four errors in the current read

### Error 1. The seventeen days are an artefact, not a signal

He did not plan seventeen days ahead. He registered roughly one minute after being asked, inside a LinkedIn exchange, as the cheapest way to close the conversation. The gap to the event is a function of when the message was sent.

Compare like for like. The students gave a low-cost signal. He gave a slightly higher-cost signal, because he had to find the site and complete a form. Both are low-cost signals. His is more valuable because **he** is more valuable, not because the timing proves deliberation.

Treating the timing as evidence of intent is the specific error that makes the whole CEO-only plan look safer than it is.

### Error 2. "Free" and "open" have been treated as the same thing

Almost every source of frustration on the list comes from **open**, not from free. Open registration is what admits people with no stake. Free entry is what protects the asset the business sells.

Rule 1 says never charge the scarce side. It says nothing about admitting everyone who finds a link. Nomination-only entry, a required personal confirmation and a stated cap remove the drive-by attendee completely while keeping clinicians free, permanently.

**This one distinction dissolves most of the emotional problem without changing the business.**

### Error 3. The clinicians are the product, not the audience

The entire commercial model in `docs/16-product-architecture.md` rests on one sentence: composition is the promise, and a buyer pays $25,000 for it. Composition means clinicians in the room.

A table of eight CEOs has no composition to sell. It is a peer dinner. Peer dinners are a real business, and Toronto already has many credible ones: YPO, EO, Vistage, Council of Canadian Innovators, MaRS programming, and every bank's private client team. In that market there is no particular reason to pick a first-time convener with no track record.

In the composed-room market, the repo's own research found no direct equivalent. Going CEO-only trades a position with almost no competition for one with a great deal of it.

### Error 4. CEOs are being modelled as easier to fill than a mixed room

> **Partly conceded in section 4a.** The pool is larger than this section assumed. The conversion problem stands.

Seven more CEOs, cold, in seventeen days, working alone, with no incorporated entity, no insurance, no reference permission from Miro, and nothing citable.

The 70% positive reply rate came from a mixed and mostly junior audience. Executive conversion runs well below it. Naming eight target companies is not the same act as seating eight chief executives, and the distance between a list and a table is the whole business.

---

## 4. The geography argument, as first written and now withdrawn

> **Retained for the record. Superseded by section 4a and `ADR-023`.**

**622 College Street to a Mississauga condo, on a weeknight, is a 45 to 70 minute drive each way.**

Total commitment for the guest: roughly three hours of travel and evening, unpaid, to a residential amenity room, among strangers, for a first meeting with someone he has never met.

Now price the same evening at a restaurant ten minutes from his office.

| Configuration | Estimated P(attends) |
|---|---|
| Mississauga condo amenity, no confirmation ritual | **30 to 35%** |
| Mississauga condo amenity, full confirmation ritual | 45 to 50% |
| Downtown Toronto restaurant, full confirmation ritual | **65 to 70%** |

Venue and geography move his attendance by roughly a factor of two. Format, CEO-only or mixed, moves it by perhaps ten points. **The room has been agonised over on the axis that matters least.**

`ADR-013` already anticipated this. The amenity is designated for free ungated rooms. A room containing the highest-value guest ever registered is not that room.

---

## 4a. Three corrections to the above

### Correction 1. He accepted the location in writing

The outreach message named Mississauga. He read it and registered anyway. That is real information and the first draft ignored it.

The commute figure was also asserted from the company's College Street address without knowing where he lives. For a chief executive of that company size, living in Oakville, Mississauga or Burlington is entirely plausible, in which case the amenity is **closer** than downtown.

| Configuration | First draft | Revised |
|---|---|---|
| Amenity, no confirmation ritual | 30 to 35% | 40% |
| Amenity, full confirmation ritual | 45 to 50% | **55 to 60%** |
| Amenity, full ritual, resident west of Toronto | not modelled | 65 to 70% |
| Downtown restaurant, full ritual | 65 to 70% | 65 to 70% |

**The claimed factor of two was wrong.** The real gap is roughly ten points and may be zero or negative. Resolve it by asking whether he is travelling from the office or from home, which is an ordinary hosting question.

What survives: accepting a location in advance and driving to it on a weeknight are different acts. The 40 to 60% no-show figure is composed entirely of people who had already agreed.

### Correction 2. Pool size and conversion rate were conflated

"Executives are hard to fill" is a claim about **conversion**. It is not a claim about **pool**, and on pool the first draft was simply wrong.

Mississauga, Oakville, Burlington, Brampton, Milton and Hamilton form a dense corridor holding Trillium Health Partners and a large pharmaceutical and device cluster. For eight seats the constraint is conversion, not supply. The argument reverses at scale: fifty mixed seats are easier downtown, where people arrive after work without a car.

**Trillium Health Partners is ten minutes from the venue.** Health system executives are the segment with zero attendance across three rooms, and their recruiting pool is next door to a venue that has been treated as a liability.

Revised fill probabilities, seventeen days, solo, cold, accepting the pool argument:

| Outcome | First draft | Revised |
|---|---|---|
| 7 or more CEOs seated | 5% | **12%** |
| 5 or more | 15% | 30% |
| 3 or more | 35% | 55% |
| 2 or fewer | 50% | 30% |

Materially better. The modal outcome is still three to five, not eight.

### Correction 3. ADR-013 was cited against the amenity when it supports it

`ADR-013` restricts the amenity to free ungated rooms because commercial use is assumed prohibited. It is a rule about **money changing hands in the building**, not about guest seniority. A free executive dinner in-house, with every ticketed event held outside, applies that rule correctly.

The privacy case is also stronger than the first draft allowed. Chatham House is a rule in every room, and a confidential executive conversation cannot be held in a restaurant dining room. A genuine private room for eight carries a minimum spend near $1,000 before the food is considered.

And the insurance point runs the other way: external venues **require** a CGL certificate that is not in force. Until it is, the amenity carries less friction, not more.

**Settled in `ADR-023`.** Small, senior, confidential and free runs in the building. Large, mixed and ticketed runs outside it.

### What survives all three corrections

Two reasons, down from five.

1. **The promise, not the format.** Announcing a CEO-only table and seating four demonstrates to the most valuable prospect in the pipeline that we cannot compose a room, which is the exact claim the $25,000 product rests on. A table of four executives and four clinicians never described as CEO-only is a good dinner.
2. **Composition is what is sold.** A table of eight CEOs contains no clinician composition. Untouched by geography or venue.

Plus the unchanged objection to cancelling the three existing registrations, which breaks rule 1 if they are then charged.

---

## 5. The options, scored

Weights, and why:

| Criterion | Weight | Reason |
|---|---|---|
| Protects the Smile relationship | 0.25 | Highest-value asset currently in play |
| Executable in 17 days, working alone | 0.20 | Hard constraint, not a preference |
| Consistent with the model and the rules | 0.20 | Rule breaches are reverted, not negotiated |
| Founder energy and sustainability | 0.15 | Named as a high-severity risk in its own right |
| Cash risk | 0.10 | No revenue, no insurance |
| Learning value | 0.10 | The funnel is still an anecdote |

**Rescored after the section 4a corrections.** First-draft scores in brackets where they moved.

| Option | Smile | Exec | Rules | Energy | Cash | Learn | **Score** |
|---|---|---|---|---|---|---|---|
| **A. CEO-only table of 8, cancel the rest** | 4 [3] | 4 [2] | 4 | 9 | 7 [6] | 6 [5] | **5.25** [4.40] |
| **B. Mixed, split into two sorted rooms** | 5 | 6 | 2 | 5 | 7 | 4 | **4.70** |
| **C. Two rooms, two dates** | 5 | 4 | 5 | 3 | 5 | 5 | **4.50** |
| **D. Nomination-only mixed room of 12 to 15, in-house** | 8 | 8 | 9 | 6 | 8 | 9 | **8.00** |
| **E. Same as D, downtown restaurant, commercial seats paid** | 7 [9] | 5 [6] | 8 [9] | 6 [8] | 3 [4] | 8 [9] | **6.35** [7.75] |
| **F. Composed table of eight, in-house, not announced as CEO-only** | 9 | 9 | 9 | 8 | 9 | 8 | **8.75** |

**A rose by 0.85** because the pool argument is sound and the fill odds are better than first modelled. It still loses, on the two reasons in section 4a.

**E fell by 1.40** because the restaurant buys no attendance advantage over the amenity, loses the closed door that Chatham House depends on, costs roughly $1,000 in minimum spend, and requires a CGL certificate that is not in force.

**F is new** and it emerged from the challenge. It is the eight-seat lounge table, used as the founder described it, composed rather than sorted, with no headcount or composition announced in advance.

### Why A scores 3 on the Smile criterion

Not because CEO-only is a bad product. Because announcing it and missing it is the one outcome that permanently forecloses the relationship. If he is told the table is CEOs and three people arrive, the demonstration delivered to the most valuable prospect in the pipeline is that we cannot convene. That is the exact claim the $25,000 product is built on.

A pleasant mixed dinner where he meets a professor and a pharmacist is a modest, safe positive. A missed executive table is a large, unrecoverable negative. The distribution is not symmetric.

### Why B scores 2 on rules

`CLAUDE.md` rule 6: no segment ranked above another. A physically separated senior room is that ranking made visible and unarguable. It is not a messaging problem to be solved with careful wording, and in a small national health community the story travels.

**Two tables is fine. Two tiers is not.** The distinction is whether each table is composed, meaning mixed by seniority and segment with designed adjacency, or sorted, meaning ranked. Two composed tables are a normal dinner. One executive table and one overflow table is a status injury delivered to everyone in the second room.

### Why C scores 3 on energy

It doubles the number of solo nights for the person who has just said the current single night is draining him.

---

## 6. Scenario probabilities

### Option A, if executed

| Outcome | P | Consequence |
|---|---|---|
| 8 CEOs seated | 5% | Step change. Every other conversation gets easier |
| 5 to 7 CEOs | 10% | Strong. Product proven |
| 3 to 4 CEOs | 20% | Survivable, mild underdelivery |
| 1 to 2 CEOs | 40% | Visible failure, witnessed by the one person who matters |
| Duncan no-shows, 2 to 3 others | 25% | Total loss. The mixed room was already cancelled |

**65% of the probability mass sits in the bottom two rows.**

### Option D or E

| Outcome | P | Consequence |
|---|---|---|
| Duncan attends, 10 to 14 nominated guests | 40% | Product demonstrated, relationship advanced |
| Duncan attends, 6 to 9 guests | 20% | Fine. Small rooms are the stated format |
| Duncan no-shows, room runs well | 30% | **Recoverable.** Send the composition report, invite him to the next one |
| Room underfills badly | 10% | Mild, private, nobody promised a number |

**The asymmetry decides the question.** Under D and E, Duncan failing to appear is a delay. Under A, the same event is terminal, because everything else was cancelled to make room for him.

---

## 7. Recommendation

**Run option F. The eight-seat lounge table, in the building, composed rather than sorted, never announced as CEO-only.**

Four seats are already held: the health data CEO, the professor, the pharmacist, the researcher. Four remain.

1. **Close the open link.** Room 003 becomes nomination-only from today. Latecomers are offered room 004.
2. **Keep all three current registrations.** Section 8. Cancelling on people who said yes, to hold seats for people who have not, is the worst reputational trade available in a small community.
3. **Stay in the building.** `ADR-023`. Free, private, closed door, full control of seating and timing, no certificate required.
4. **Fill the remaining four weighted senior**, from the west GTA corridor, including one Trillium Health Partners executive if reachable.
5. **Name roles, never people.** "Confirmed so far: the chief executive of a Toronto health data platform, a professor of health sciences, a community pharmacist." Honest, needs nobody's consent, and it is a genuine draw for the remaining seats.
6. **Run the confirmation ritual.** Section 9. Expected lift from roughly 50% to 75 to 80%, at no cost.
7. **Never state a headcount or a composition promise.** A table of six described as a small table is a dinner. A table of six described as eight executives is a shortfall.
8. **Instrument every message.** Room 003 is the outreach funnel table the business has been missing.

**Four more people in seventeen days is achievable. Seven more chief executives is not.** That single difference is the entire gap between option F and option A, and it costs nothing that was actually wanted: the small table, the building, the free venue, the privacy, the place cards, the manageable check-in count and the higher production are all preserved.

---

## 8. On the three current registrations

The proposal treats them as ballast. They are not.

- **The Humber professor is materially valuable.** Faculty are nomination sources, they carry clinical and teaching networks, and `docs/12` already records that a professor's public testimonial is among the strongest assets held.
- **The pharmacist is the scarce side.** Ontario pharmacy scope expanded on 1 July 2026, which is one of the two live commercial triggers in the whole strategy.
- **The health researcher is the scarce side.**

**Charging any of the three breaks rule 1 outright**, in every phase, permanently. Clinicians, researchers and academics attend at no cost. That rule is not a launch promotion and it is the foundation the $25,000 product stands on. Service providers paying a premium is correct and separate.

There is also a value point the current read misses. A health data CEO can meet other CEOs anywhere. What he cannot buy, at any price, is an unguarded hour with a practising pharmacist and a health services researcher who have no reason to flatter him. That is the room's actual product, and giving him seven peers instead is a downgrade dressed as an upgrade.

### The screen that removes the drain without ranking anyone

Everyone admitted meets at least one of:

- **(a)** sees patients
- **(b)** signs a cheque
- **(c)** publishes or teaches
- **(d)** was nominated by someone in a, b or c

Students enter only through (d), capped at one or two per room. This removes precisely the people causing the frustration, and it does so on a basis of contribution rather than status, which keeps rule 6 intact.

---

## 9. The confirmation ritual

No cost, largest single effect on the night.

| When | Action |
|---|---|
| On registration | Personal email, from a person, not a system. One question requiring a one-line reply |
| T-10 days | Calendar invitation with the address, parking and arrival time |
| T-7 days | The composition so far, by role and organisation type, no names without consent |
| T-3 days | Named seat confirmed, and who they are seated beside and why |
| T-1 day | One line. "Still good for tomorrow?" |
| Morning of | Address and time |

**The one-question reply is the instrument.** Anyone who will not spend sixty seconds answering an email will not spend three hours in traffic. It converts a soft registration into a measured one, and it forecasts the night accurately enough to plan catering.

---

## 10. Reading the Smile signal this week, cheaply

Send one email. Guest composition so far, by role, and one question: which of these people would he most want to sit beside, or who is missing.

| His response | Read | P(attends) |
|---|---|---|
| Replies with a name, or a preference | Real interest | 75%+ |
| Replies warmly, no content | Soft, still winnable | 50% |
| No reply within five days | Placeholder registration | 25% |

That single email is worth more than any further analysis, and it can be sent today.

---

## 11. The CEO table is a real product, and it is one dinner early

Nothing above says the executive table is wrong. It is a genuine format, eight is the correct number, and the reasoning behind it holds: peers do not sell to each other, attendance is higher when the list is known in advance, and the production is easier to run alone.

It is wrong **now**, for one reason. Filling it requires a name to open the door, and the only name available is a man who has not yet met us. Asking his permission to use him as the draw, before he has attended anything, is a large ask that risks the asset.

**Run it after room 003, not instead of it.** The sequence:

| Stage | Prerequisite |
|---|---|
| Room 003 delivered well, Duncan attends | Confirmation ritual, composed table of eight |
| Composition report and three consented introductions sent | Delivered within 48 hours |
| He is asked for two nominations, and for permission to name him | Earned by delivery, not requested cold |
| Pure executive table of eight, in the building, Q4 | Business name, GST number, CGL certificate in force |

With his permission and two of his nominations, P(filling eight seats) moves from roughly 5% to somewhere near 50%. Without it, the format is a cold-outreach problem with a seventeen-day clock.

**The instinct is right. The timing is one dinner early.**

---

## 12. Rules currently at risk

| Rule | How the plan breaches it | Fix |
|---|---|---|
| **1. Never charge the scarce side** | Displaced clinicians and researchers offered paid tickets to the restaurant event | Clinicians, researchers, academics free. Service providers and commercial attendees pay |
| **6. No segment ranked above another** | A physically separated executive room | Two composed tables, never one senior and one overflow |
| **3. No claims of a track record** | Any stated headcount before the night | State "a small table". Never a number |
| Venue policy (`ADR-013`) | The highest-value guest routed to the amenity designated for free ungated rooms | External venue, or accept the lower attendance probability knowingly |
| Legal exposure | No CGL in force, condo permission never requested, external venues require a certificate | The vendor readiness pack, roughly $400 plus premium |
