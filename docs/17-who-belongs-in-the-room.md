# Who Belongs in the Room: the CEO-only question, scored

> **INTERNAL. Never published.** Decision brief for room 003, written 11 August 2026 while the room is roughly 17 days out. No ADR yet, because the decision is the founder's. The scoring below is the argument, not the ruling.

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
3. **The condo is the wrong venue for senior guests.** `ADR-013` states it plainly: the amenity repels physicians and anyone making a legitimacy judgment. It has already cost one confirmed speaker.
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

They are the hardest segment available, by a wide margin. Seven more CEOs, cold, in seventeen days, working alone, with no incorporated entity, no insurance, no reference permission from Miro, and nothing citable.

The 70% positive reply rate came from a mixed and mostly junior audience. Executive conversion runs an order of magnitude lower.

---

## 4. The variable nobody has scored, and it dominates everything

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

| Option | Smile | Exec | Rules | Energy | Cash | Learn | **Score** |
|---|---|---|---|---|---|---|---|
| **A. CEO-only table of 8, cancel the rest** | 3 | 2 | 4 | 9 | 6 | 5 | **4.40** |
| **B. Mixed, split into two sorted rooms** | 5 | 6 | 2 | 5 | 7 | 4 | **4.70** |
| **C. Two rooms, two dates** | 5 | 4 | 5 | 3 | 5 | 5 | **4.50** |
| **D. Upgrade the mixed room: nomination-only, senior-weighted, composed seating, condo** | 8 | 8 | 9 | 6 | 8 | 9 | **8.00** |
| **E. Same as D, moved to a downtown Toronto restaurant, commercial seats paid** | 9 | 6 | 9 | 8 | 4 | 9 | **7.75** |

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

**Do not convert room 003 to CEO-only. Run option D, and move to E as soon as cash allows.**

Concretely, in order of value:

1. **Close the open link.** Room 003 becomes nomination-only from today. Anyone arriving late is offered room 004.
2. **Keep all three current registrations.** See section 8. Cancelling on people who said yes, in order to hold seats for people who have not, is the worst reputational trade available in a small community.
3. **Move the venue if at all possible.** A downtown Toronto restaurant, small private table, roughly doubles the probability that the guest who matters actually arrives. If the cash is not there, keep the condo and accept a lower number.
4. **Weight the room senior without announcing it.** Target three or four additional people at director level or above, sourced by nomination from the four already registered.
5. **Run the confirmation ritual.** Detailed in section 9. Expected lift from roughly 50% to 75 to 80% attendance, at zero cost.
6. **Never state a headcount.** `data/verified-stats.md` already forbids publishing a seat count. A table of six that was described as a small table is a dinner. A table of six that was described as eight is a shortfall.
7. **Instrument every message.** Room 003 is the outreach funnel table the business has been missing.

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
| Room 003 delivered well, Duncan attends | Confirmation ritual, better venue |
| Composition report and three consented introductions sent | Delivered within 48 hours |
| He is asked for two nominations, and for permission to name him | Earned by delivery, not requested cold |
| Executive table of eight, external venue, Q4 | Business name, GST number, CGL certificate in force |

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
