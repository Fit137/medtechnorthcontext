# Outreach Campaign Sequence

> **INTERNAL. Never published.** Hypotheses: `docs/18-hypothesis-risk-and-falsification.md`. Incentives: `docs/19-host-incentives-and-the-media-floor.md`. Targets: `data/venue-host-targets.md` and `data/prospects/companies.csv`. Decisions: `ADR-025`, `ADR-026`.
>
> **Not legal advice.** Section 7 sets out an outbound architecture that has to be confirmed with counsel before volume. `docs/08-legal-and-compliance.md` currently says nothing about outbound commercial electronic messages, which is a gap this document flags rather than closes.

Six campaigns, ordered so that the most expensive mistakes get made cheaply and early, and so that the one campaign gating the November date runs first regardless of its risk score.

---

## 1. The date, and what it forces

**Target: Thursday 12 November 2026. Alternate: Thursday 5 November 2026.** Both are held until a host offers a window.

Thursday because facilities are staffed, clinicians can rearrange a Thursday evening more easily than a Monday, and it leaves Friday for edit turnaround. November rather than October because an October date requires a host to say yes inside two weeks from a standing start, which is possible and should not be planned for.

**Backwards from 12 November:**

| By | What must be true | If it is not |
|---|---|---|
| **Fri 21 Aug** | Business name registered. CGL insurance quotes requested | A facilities team asks for a certificate of insurance before it gives a date. This is the single cheapest item on the critical path and the one most likely to be discovered late |
| **Wed 26 Aug** | Room 003 shot properly. This is the asset shoot, not only an event | The host campaign goes out with nothing to show, and the consideration we are offering is media |
| **Wed 2 Sep** | Two minute reel plus three vertical cuts exist. Two production quotes obtained | Campaign 1 stays at low volume until they do |
| **Fri 11 Sep** | Campaign 1 at full volume. First site visits booked | The 12 November date is already at risk |
| **Wed 30 Sep** | **Host agreement signed. Hard gate** | The day of rooms moves to Q1 2027 and November becomes a single composed room in the GTA. Decide on the day, do not drift |
| **Thu 15 Oct** | Two funded rooms sold. Clinician gate passed in the host city | Run the day at reduced scale with fewer rooms. Do not buy scale with our own cash |
| **Thu 22 Oct** | Clinician outreach at volume, six per room confirmed | Extend outreach, reduce room count, keep the date |
| **Thu 12 Nov** | The day | |

**What is not committed before 30 September, under any circumstances:** a venue deposit, a catering minimum, AV hire, or any fixed cost that survives a cancellation. `ADR-018` names committing those before a cheque exists as the standard way event businesses die, and nothing in the ambition to move faster changes that arithmetic.

---

## 2. Phase 0. The week that is not a campaign

None of this is outreach and all of it gates outreach. Roughly $400 plus an insurance premium.

| # | Item | Why it blocks | Cost |
|---|---|---|---|
| 1 | **Ask Miro for written permission to name them as a reference, with a two-line quote** | The single highest-value hour available. Every campaign below is materially weaker without a named reference, and the co-host claim currently cannot be evidenced to a stranger | Free |
| 2 | **Register the business name** | No compliant invoice, no GST/HST number, corporate accounts payable bounces it | $60 |
| 3 | **CGL insurance quotes, then bind** | Required by any external venue and most vendor onboarding. Longest lead time on the page | $500 to $1,500/yr, estimated |
| 4 | **Reconstruct the outreach funnel from the actual send records** | Every kill number below is meaningless without a baseline. The ~70% figure is currently unauditable and cannot go in front of a buyer | A few hours |
| 5 | **Ask the four public testimonial authors for permission to quote** | Courtesy rather than necessity, and it returns nominations | Free |
| 6 | **Ask both rooms: which organisation should be in this room, and whose building should we use** | Highest-converting channel available, and it costs nothing. The second half of that question is new and it is aimed straight at campaign 1 | Free |
| 7 | **One-page host agreement and one-page funder agreement** | Their legal team drafting from scratch costs weeks we do not have before 30 September | Time |

Items 1, 2, 3 and 6 are the ones that block the November date specifically. Items 4 and 5 make every campaign convert better.

---

## 3. The six campaigns

Each carries one primary hypothesis, one falsifier, and a kill number written before the first send. Results go in the log in section 9, including the ones we do not like.

### Campaign 1. The building

| | |
|---|---|
| **Tests** | H4 (organisations with space will donate it) and H5 (media is sufficient consideration) |
| **Target** | Archetypes 1 to 4 in `data/venue-host-targets.md`, all corridors at once |
| **The ask** | Their space for one day inside a two-week window, in return for co-branding, presence, media shot in their building and their category held for the day. **No money in either direction** |
| **Why the ask is the test** | It requests the exact thing in doubt and offers exactly the consideration in doubt. A yes clears both hypotheses. A polite no needs one follow-up question to tell them apart: was it the space or was it what we offered for it |
| **Falsifier** | Fewer than two site conversations from 60 qualified sends across at least three archetypes, or a pattern of replies asking for a lead count before anything else |
| **Kill number** | 60 sends by 11 September. Six substantive replies, two site conversations, one signed host by 30 September |
| **Volume** | 20 in week 1 at low volume before the reel exists, 40 more in weeks 2 and 3 |
| **Runs first because** | It gates the date. A three week latency on a calendar-critical question outranks a higher risk score with a ten week latency |

### Campaign 2. The convener premise

| | |
|---|---|
| **Tests** | H2 (a neutral convener beats their own team) and H9 (the buyer signs in Canada) |
| **Target** | Named Canadian field marketing, industry marketing, community and partnerships owners at horizontal platforms with a healthcare vertical. The highest-probability slice is anyone who took a Canadian healthcare role in the last twelve months |
| **The ask** | Not a meeting about our event. A specific question: what their last Canadian clinician room cost all in, and how many practising clinicians actually sat in it |
| **Why the ask is the test** | A number in the reply concedes the premise and sets the price anchor without us quoting one. A reply saying they fill their own rooms easily is the falsifier, and it is the most valuable email we can receive |
| **Falsifier** | More than a third of substantive replies report no difficulty assembling clinicians themselves |
| **Kill number** | 80 sends over four weeks. If the falsifier holds at 80, the pitch moves from access to production capacity and format, and the pricing in `docs/16-product-architecture.md` gets revisited |
| **Runs in parallel with campaign 1** | Different segment, different inbox, no contention |

### Campaign 3. Composition against exposure

| | |
|---|---|
| **Tests** | H1, the most load-bearing belief in the business |
| **Target** | One list, randomly split. Tier A and B rows in `data/prospects/companies.csv` |
| **The ask** | **Same price in both arms, $7,500, same room, same date.** Only the promise changes. Arm A promises who will be in the room against a written brief. Arm B promises a fifteen minute slot and the attendees who opt in. Both are products we actually sell, per `ADR-022`, so neither arm offers anything we would not deliver |
| **Why price is held constant** | A test that varies price and promise together says nothing about which one moved. Holding the money still is what makes the result readable |
| **Falsifier** | Arm B returning materially more qualified replies than Arm A across two rounds |
| **Kill number** | 120 sends, 60 per arm, over three weeks. If Arm A returns under half of Arm B's qualified replies twice, stop leading with composition and re-price the ladder |
| **Timing** | Weeks 3 to 6. After campaign 1 has a host, because a confirmed date and building materially change what both arms can offer |
| **The discipline that makes it a test** | Assignment is random and set before sending. Not "the ones that felt like a composition pitch" |

### Campaign 4. Rooms inside the day

| | |
|---|---|
| **Tests** | Revenue, and H10 (owner-operators are a sellable room) |
| **Target** | Tier A in `data/corporate-targets.md`, scored `best_product = dinner` or `convening` |
| **The ask** | One composed room inside the day, to their brief, category held, composition report, five consented introductions. $7,500 to $25,000 depending on scope, per `docs/16-product-architecture.md` |
| **Precondition** | A signed host and a confirmed date. Selling a room in an unbooked building is why event businesses discount |
| **Falsifier for H10** | Replies that gate on physician attendance, repeatedly. Two is a preference. Six across segments means `ADR-012` needs revisiting |
| **Kill number** | Two rooms sold by 15 October, or the day runs at reduced scale |

### Campaign 5. US inbound

| | |
|---|---|
| **Tests** | H7 (a US company will buy Canadian access before it has a Canadian entity) |
| **Target** | US medtech, health software and diagnostics companies with **inbound Canadian customers and no team here**, an announced Canadian or North American expansion, or a recent raise with international expansion in the thesis. Disqualifier unchanged: anyone still asking whether Canada is worth doing |
| **The ask** | A composed room of the specialty they need to sell to, in Toronto, on a fixed date they can fly to |
| **Why the date matters more here than anywhere** | `docs/12-convening-as-a-service.md` names the absence of a trigger as the single biggest practical risk in this product. **The day is the trigger.** A published date with a closing date is the manufactured deadline that document asks for, and this campaign exists partly to test whether a manufactured deadline actually moves a foreign expansion decision |
| **Secondary channel, and it should carry most of the volume** | Investment attraction bodies and trade offices, per archetype 3. Their KPIs are landed foreign companies and they hold lists of firms actively evaluating Canada. This should almost never be pure cold |
| **Kill number** | 100 sends plus six referral conversations by 15 October. One paid brief at $4,500 is a pass. Zero is a result, and it means the trigger theory is wrong rather than the product |
| **Note** | Messages sent from Canada to US recipients are still governed by CASL. See section 7 |

### Campaign 6. The scarce side, instrumented

| | |
|---|---|
| **Tests** | H3 (composition can be delivered), H6 (the room is portable) and H11 (show rate) |
| **Target** | Practising clinicians, practice owners and operators. In the host city, in one named specialty |
| **The ask** | The room itself, and the private offer that has already been decided: an on-record interview and the footage, theirs outright. Per `assets/events/room-003-long-table-kit.md`, that lever is private and appears in direct messages only |
| **Why it is last in the list and first in importance** | It cannot start until a city is chosen, and it is the campaign that decides whether anything sold in campaigns 3, 4 and 5 can actually be delivered |
| **The gate it enforces** | 12 positive replies with the host city's postal codes before a host agreement is signed there |
| **Instrumentation** | Every stage recorded from message one: contacted, replied, positive, confirmed, attended. This is the table `docs/05-monetization.md` identifies as the entire pitch, and it has never existed |

---

## 4. What runs when

| Weeks | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Phase 0 | ██ | ██ | | | | | | | | | | |
| C1 building | ██ | ██ | ██ | ██ | | | | | | | | |
| C2 convener | ██ | ██ | ██ | ██ | | | | | | | | |
| C3 A/B | | | ██ | ██ | ██ | ██ | | | | | | |
| C4 rooms | | | | ██ | ██ | ██ | ██ | ██ | | | | |
| C5 US inbound | | | | ██ | ██ | ██ | ██ | ██ | ██ | ██ | | |
| C6 clinicians | | | | | ██ | ██ | ██ | ██ | ██ | ██ | ██ | ██ |

Week 1 begins 24 August 2026. Week 12 ends on the event week.

**Never more than three campaigns at volume at once.** The constraint is in section 6 and it is not deliverability.

---

## 5. The rule that reconciles scale with `ADR-015`

`ADR-015` says value propositions are segment-scoped, never universal, and that a message pitched at a category reads as a mail merge, which is the exact objection this network's premise is supposed to be immune to. Scaling cold email appears to contradict it. It does not, if the right thing is scaled.

**Scale the research, not the sentences.**

| Per message, written by hand | Stable across the campaign |
|---|---|
| The opening line, built from **one specific researched fact** about that organisation. Their facility, their new hire, their mandate, their reporting year, their announced expansion | The consideration offered |
| The named person and why them | The three things they never receive |
| The window offered | The close |

A campaign is a segment file plus a research pass, not a template plus a merge field. One researched fact per message is the difference between 300 sends a week that build a reputation and 300 that spend one.

**Each campaign gets its own file in `assets/outreach/value-propositions/`**, at draft status, promoted to tested only after the same wording survives several real conversations in the same segment. Campaigns 1 and 2 have files already. Campaigns 4, 5 and 6 get written when the first real conversation forces them, not in advance.

---

## 6. Volume, and the constraint that actually binds

Warmed domains and inboxes remove the deliverability ceiling. They do not remove the two ceilings underneath it.

**Sending capacity**, which is not the problem: 20 to 30 a day per inbox on a newly warmed domain, rising to 40 to 50 once it has history. Several inboxes across several domains puts theoretical capacity well above anything we will use.

**Research capacity**, which is one of the two real limits: at one genuinely researched fact per message, a focused hour produces roughly 12 to 20 qualified, personalised sends. That is 60 to 100 a day at the absolute limit of one person's attention, and quality falls before the count does.

**Reply capacity, which is the binding constraint and the one that gets forgotten.** At 250 sends a week and a 15% reply rate, that is roughly 38 replies to answer personally, plus the calls that come out of them. Answering a reply well takes longer than sending the original message, because it needs the research the message only gestured at. Add six to ten calls a week and the week is gone.

**So the practical ceiling is 200 to 250 researched sends a week in total, across all live campaigns**, not per campaign. Founder concentration is already on the risk register, and this is where it bites first. Pushing to 500 produces more sends, fewer answered replies, and a worse reply rate on the next campaign because the first one taught people that a reply goes nowhere.

**Speed comes from sequencing, not from volume.** The November date is gated by one host saying yes, which needs 60 good messages and not 600.

---

## 7. Send architecture, and the law that governs it

**CASL applies.** It governs commercial electronic messages sent from or accessed in Canada, so it covers the Canadian campaigns and it also covers campaign 5, because the sender is in Canada even when the recipient is not. Enforcement is by the CRTC and administrative penalties run to seven figures. This is not a reason to send less. It is a reason to build the architecture once and correctly.

**Three things every message carries, without exception:**

1. **Identification.** Who is sending, the business name, and a mailing address that is valid for at least 60 days. This is why the business name registration in Phase 0 is on the critical path for outreach and not only for invoicing.
2. **A working unsubscribe**, functional for at least 60 days and honoured promptly. In a one-to-one message this can be a plain sentence rather than a footer, and a plain sentence reads better.
3. **A lawful basis, recorded per contact.** For this outreach that is generally implied consent through a conspicuously published business address, which requires that the address was published without a statement refusing unsolicited messages, and that **the message is relevant to that person's business role**. Every campaign above is aimed at a named person about their stated function, which is what keeps that basis intact.

**Four operational rules that follow:**

- **Published business addresses only.** No scraped personal addresses, no pattern-guessed addresses at consumer domains, no addresses collected where a no-unsolicited notice appears
- **Record the basis and the source URL per contact**, in the same row as the rest of the research. If we cannot say why a message was lawful, it was not
- **Relevance is the test, so a message that drifts off the recipient's function loses the basis.** A partnerships manager asked about partnerships is fine. The same person asked to buy a table is not
- **US recipients also fall under CAN-SPAM**, which is lighter: accurate headers, a valid physical postal address, and an opt-out honoured within ten business days. The Canadian requirements are stricter, so building to CASL satisfies both

**The gap to close:** `docs/08-legal-and-compliance.md` covers PIPEDA and member data and says nothing about outbound commercial messages. Add a section, and put the question to the same professional already being asked about incorporation and GST/HST treatment.

---

## 8. Instrumentation

One row per contact, per campaign. This is the table that converts the ~70% anecdote into an auditable claim, and it is worth more to a buyer than any deck.

`campaign` · `org` · `person` · `title` · `segment` · `city` · `researched_fact` · `lawful_basis` · `source_url` · `sent_at` · `replied_at` · `reply_class` (positive / question / no / no-reason-given) · `no_reason` · `call_booked` · `outcome` · `hypothesis_signal`

**`hypothesis_signal` is the column that makes this document work.** It records what a reply said about the belief under test, in a few words, at the moment it arrives. Without it the campaign produces a pipeline and no knowledge, and the next quarter starts from the same uncertainty as this one.

`no_reason` matters nearly as much. A no with a reason is a result. A no without one is a note to improve the question.

---

## 9. Weekly review, thirty minutes, same questions

1. What did each live campaign say about its hypothesis this week. Not how many sends went out
2. Has any kill number been hit. If yes, stop that campaign this week rather than next
3. Which gate date is nearest and is it still reachable
4. What went into `assets/outreach/value-propositions/` from a real conversation this week
5. Reply backlog. If it is above a week, cut send volume rather than answering worse

**The hard one, asked out loud every week: what would have to be true for this to be failing, and did anything this week look like that.** A campaign that only ever produces encouraging news is not being read honestly.
