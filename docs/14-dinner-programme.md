# Dinner Programme: Five Cities

> **Stale as of 22 August 2026. `ADR-026` reverses `ADR-002`.** Every seat is now ticketed unless a co-host has paid the convening fee up front, in which case that buyer's guests sit free. Seat mix, the "never charged" clinician row and the no-show devices all predate the change.


> **INTERNAL.** Sequence: Toronto, Ottawa, Montreal, Calgary, Vancouver.

---

## 1. Seat count

**24 seats.** Not 40.

| Why | |
|---|---|
| Acoustics | Above ~24 in a restaurant, one conversation splits into several. The single conversation is the product |
| Composition | 24 can be composed precisely. 40 gets filled |
| Venue | 24 fits a private dining room in every city. 40 needs an event space |
| `ADR-013` | Already decided 25 to 35, not 50 |

Five cities × 24 = **120 seats per cycle.**

---

## 2. The table

| Group | Seats | Pays |
|---|---|---|
| Clinicians, practice owners, researchers | 12 | **$0** |
| Builders (founders, operators) | 7 | **$150** |
| Service providers (agencies, consultants, law, recruiters) | 4 | **$500** |
| Funder | 1 | Their fee |

12 free, 11 paid. Holds the 1:1 rule and the service provider cap.

**A seat buys attendance. The funder fee buys the category.** See section 3a and `ADR-020`.

---

## 3. Economics per dinner

Seat cost from the financial model: **$105 restaurant, $55 partner-hosted.**

| | Restaurant | Partner-hosted |
|---|---|---|
| Food cost, 24 seats | $2,520 | $1,320 |
| Seat revenue (7×$150 + 4×$500) | $3,050 | $3,050 |
| **Before the funder** | **+$530** | **+$1,730** |
| Funder fee | $3,500 to $7,500 | $3,500 to $7,500 |
| **Net per dinner** | **$4,030 to $8,030** | **$5,230 to $9,230** |

**20 dinners a year at partner-hosted: roughly $105,000 to $185,000 net.**

Two conclusions:
- **Seat fees cover the food. The funder cheque is the profit.** That is the whole model.
- **A donated venue is worth more than any price increase.** $1,200 a dinner, $24,000 a year across 20.

---

## 3a. What each tier gets, and why the prices differ

Internal only. This is the value logic, not a rate card.

**The one rule that makes the ladder hold: a seat buys attendance, the funder fee buys the category.** Attendance is a commodity, so it is priced like one. Category exclusivity is the only thing exactly one company can hold, so it is the only thing that carries a premium.

| | Clinician | Builder | Service provider | Session funder | Co-host |
|---|---|---|---|---|---|
| **Price, our venue** | $0 | $150 | $500 | $7,500 | n/a |
| **Price, their venue** | | | | $6,300 | **$6,300 and up by scope** |
| **Seats** | 12 | 7 | 4 | 1 | 2 |
| Attends, talks to anyone | Yes | Yes | Yes | Yes | Yes |
| **Their category locked to them** | no | no | no | **Yes** | **Yes** |
| **Direct competitors barred** | no | no | no | **Yes** | **Yes** |
| **Can be refused if category taken** | no | no | **Yes** | no | no |
| Shapes the question | no | no | no | **Yes** | **Yes** |
| Welcome to the room | no | no | no | 30 seconds | 2 minutes |
| Named on the invitation | no | no | no | no | **Yes** |
| Composition report | no | no | no | **Yes** | **Yes** |
| Insight brief included | no | no | no | no | **Yes** |
| Consented introductions after | no | no | **2** | **3** | **5** |
| First refusal on next quarter | no | no | no | no | **Yes** |
| Venue | ours | ours | ours | ours | **theirs** |
| Attendee list or contact data | **never** | **never** | **never** | **never** | **never** |
| Extra introductions at $250 | no | no | up to 5 | up to 5 | up to 5 |
| Pitching from the floor | **never** | **never** | **never** | **never** | **never** |

### Why the prices are where they are

**Price tracks extraction.** Clinicians create the value that everyone else is paying to be near, so they never pay. Everyone else pays in proportion to how much they take out of the room.

| Who | What they extract | Price logic |
|---|---|---|
| Clinician | Peers, and a view of what is being built | Creates the value. Never charged |
| Builder | Clinical input on their own product | Moderate. $150 |
| Service provider | Prospects for a services business | Highest per person. $500 and capped at 4 |
| Session funder | The room's category for that night | Different in kind, not degree |
| Co-host | The above, plus the room happens inside their walls | Highest |

### The competitor question, answered

**A competitor cannot walk into a co-host's building for $500.** Their category is barred the moment the co-host signs. We run the conflict check on category before confirming any commercial seat, the way a law firm does. If the category is taken, the seat is refused and the money returned.

The co-host never sees names and never approves individuals. **Category exclusion is a rule we enforce, not a favour we grant.** That distinction is what stops it becoming curation.

### Venue is a credit, not a premium

A co-host does not pay more **because** they gave a room. They pay more only if they bought more. Same scope, their venue, always cheaper by the $1,200 the donated venue saves.

| Scope | Our venue | Their venue |
|---|---|---|
| 1 dinner, seat, category locked, composition report, 3 introductions | $7,500 | **$6,300** |
| Above plus the five-city insight brief | $22,000 | **$20,800** |
| 4 dinners, brief, media, 5 introductions, first refusal | $45,000 | **$40,200** |

**Venue is a credit against price. Scope is the price.** See `ADR-021`.

### The attendee list is never sold, and introductions replace it

Not before the room, not after, not to anyone, at any price. The reason is PIPEDA and CASL before it is anything else: a guest consented to attend a dinner, not to have their details passed to a company that will email them.

**The replacement is better than the list.** After the room, each commercial guest names who they want to continue with. We ask that person. If they agree, we introduce them. Two introductions with a service provider seat, three with a funder, five with a co-host, more at $250 each.

That calms the room, which was the real concern. People stop working the table when they know a mechanism exists. And a warm introduction from the convener beats a cold email to a supplied contact, so the buyer gets more, not less.

**One list is allowed:** an opt-in list shared among attendees, where everyone who appears also receives it. That is a community feature, not a data sale. It never goes to a funder who was not on it.

### Close the Luma leak

Luma shows the guest list to attendees by default. **Turn it off.** Otherwise a $500 seat buys the attendee list we tell funders nobody receives.

State the never list honestly: **we never supply a list, an export or contact data, to anyone.** We do not claim to stop people talking in a room, because that claim would not survive one evening.

---

## 4. Should clinicians pay? No, and not only because the repo says so

**My own reasoning, independent of the rule.**

Clinicians do pay for things: CME, certification, association membership, study clubs. They pay for **credentials and education**. MedTech North offers neither and is forbidden from implying either (`CLAUDE.md` rule 7). Charging them means asking them to buy something we do not sell.

**On $20 to $25 specifically: worse than free.**
- Too small to change behaviour. A professional does not reorganise an evening over $25
- Turns an invitation into a transaction. They become a customer of a thing with no product
- Prices the dinner as a meetup. A dinner by nomination has no price at all
- Payment and refund admin across five cities, for no gain

**Your suspicion point is right and the repo does not address it.** A free dinner invitation from an unknown party does read as "you are the product." The fix is not price. It is the invitation.

| Signal that reads "you are the product" | Signal that reads "you were chosen" |
|---|---|
| Open registration link | Named nomination, personal message |
| "Free dinner" | "Twelve seats. You were suggested by X" |
| Anyone can come | A waitlist exists and is mentioned once |
| No seat assignment | "You are seated next to Y because of Z" |
| No role | "Would you open the question?" |

**Being invited is the opposite of being the product.** That framing costs nothing and it is stronger than any price.

---

## 5. No-show rate

Free events run **40 to 60% no-show**. Paid run 10 to 30%. That gap is real and must be engineered out without a ticket price.

**Five devices, in order of power, all free:**

1. **Assigned seat with a named neighbour.** "You are next to Dr. K, who runs into the same claims problem." People do not skip a person
2. **A role.** Open the question, respond first, close the table. Nobody skips a thing where they have a job
3. **Personal confirmation 48 hours out.** From you, by text, not an automated email
4. **A visible waitlist.** "If you cannot make it, tell me by Friday so the seat goes to someone waiting." Social cost, not pressure
5. **Overbook by 20%.** Invite 29 for 24 seats

**Target: under 20% no-show.** If a city exceeds 25% after two dinners, add a **refundable deposit** of $50, returned at the door. Refundable deposits lift attendance 15 to 20%. It is a commitment device, not a fee, and it does not break rule 1 because the money comes back. Do not add it before the data says you need it.

---

## 6. Should service providers pay for the table? Yes, but not 1:1

**Your version:** pair every clinician with a paying service provider, $100 each, break even.

**Two problems.**
- **Composition.** 1:1 puts 12 service providers in a room of 24. The first event turned them away and that was correct. Eight in a room of sixteen is a vendor floor with a few clinicians standing in it
- **Break-even is not a business.** It pays for food and pays you nothing

**The version that works:** cap them at 4 and charge $500, not $100. Fewer seats, higher price, same money, no damage. The price is also a filter. Someone who pays $500 to attend a dinner is serious. And their seat is refused outright if the funder's category is theirs, per `ADR-020`.

---

## 7. What the funder buys when there is no panel

Your objection is right: a restaurant dinner with no stage has nothing to debrief. **The fix costs nothing.**

**Give every dinner one structured question.** Same question, all five cities, same quarter. That is the whole change.

Then the funder buys four things:

| What | Detail |
|---|---|
| **A seat** | Among 12 clinicians they cannot otherwise assemble. They are a guest, not a vendor |
| **The question** | Shaped with them. Their commercial interest points the conversation without touching the guest list |
| **Composition report** | Who was in the room, by role, never by name |
| **The national picture** | The same question answered in Toronto, Ottawa, Montreal, Calgary and Vancouver in one quarter |

**The fourth is the product.** No one in Canada has a same-quarter, five-city, cross-specialty read on a single question. That is an insight brief worth $12,000 to $25,000, not $3,500, and it is the reason to run the cities in parallel rather than in series.

**The dinners are the instrument. The insight brief is what gets sold.**

---

## 8. Calendar

**Windows.** Mid-September to late November. Late January to mid-June.
**Never.** July, August, late December, March break.

**Days.** Tuesday and Wednesday. Thursday second. Never Monday or Friday.
Dentists often work Saturday and close Friday or Monday. Community pharmacists work shifts. Tuesday and Wednesday clear both.

**Time.** 6:30pm to 9:00pm. Clinicians start early.

**Known clashes to avoid** ✅: Canada's Medtech Conference (3 June 2026, Oakville) · MaRS Impact Health (April) · Toronto Health Innovation Week (April) · OBIO Investment Summit (February, Toronto).

**Piggyback tactic:** a dinner the evening of a major conference in that city pulls the builder and funder half cheaply, because they are already in town. It does **not** help the clinician half, who are local and not attending. Use it for cities where the builder side is hard, not the clinical side.

---

## 9. Venues

**Do not default to restaurants.** A donated venue is worth $1,200 a dinner. Order of preference:

1. **A co-host's own office.** Free, removes the venue problem, gives them home-field comfort
2. **A professional services firm's client space.** They have it, they lend it, they want the relationship
3. **A hospital, university or association boardroom** brought by a chapter clinical lead
4. **A restaurant private room.** Last resort, and always a **private** room with a door

**Restaurant criteria, non-negotiable:** a closed private room, one table or two at most, no music, no shared space, a fixed per-head menu agreed in advance, dietary options confirmed (halal, kosher, vegetarian, allergies), and a firm 9:00pm end.

**Toronto starter options, all need verification** ⬜: Gusto 101 wine cellar (20, has A/V) · Rodney's Oyster House, the Cuddy Room (10 to 24) · Alebrije (24) · Saigon Supper Room (24) · Trapézi (28) · Sassafraz, Yorkville.

**For the other four cities**, do not book from a list. Ask the chapter clinical lead where they already take people. A local clinician's recommendation beats any search result, and asking is itself a relationship move.

---

## 10. Running five cities in parallel

**Plan in parallel. Launch in sequence.** One person cannot run five cities at once, and founder concentration is already the top operational risk.

**What runs in parallel from week one:**
- The single question for the quarter
- Funder conversations, sold as the five-city insight brief
- Recruiting one **chapter clinical lead** per city
- Calendar and venue holds

**What runs in sequence:**
- The dinners themselves, at four to six week intervals

**The mechanism that makes five cities possible is the chapter clinical lead.** One respected clinician per city who co-owns the room, brings the first twelve, and names the venue. It scores 8.50 in `docs/10-growth-flywheel.md`, second highest of any growth mechanic. **Recruit the lead before booking anything.** No lead, no city.

| Week | Move |
|---|---|
| 1 to 2 | Set the quarter's question. Start funder conversations on the five-city brief |
| 1 to 8 | Recruit five chapter clinical leads. This is the gate |
| 3 | Toronto dinner. You are there, it is the proof |
| 7 to 9 | Ottawa |
| 11 to 13 | Montreal |
| 15 to 17 | Calgary |
| 19 to 21 | Vancouver |
| 22 | Publish the five-city insight brief. Sell the next quarter against it |

**Do not book city two until Toronto's composition report and funnel table exist.** They are what sell the rest.
