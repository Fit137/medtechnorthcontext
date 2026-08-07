# Event Formats: Room 003 Onwards

> **INTERNAL. Status: proposal, decision pending.** Three candidate formats for the first room MedTech North runs on its own theme. No ADR yet. Write one once a format is chosen. Related: `docs/13-buyer-led-room-design.md`, `docs/16-product-architecture.md`, `ADR-012`, `ADR-016`.

---

## Why a new format is needed

Rooms 001 and 002 were commissioned by Miro. The theme served the co-host: a patient journey mapped live on a Miro board, because the board was the product being demonstrated. That was correct for a paid engagement and it is finished. Miro is a reference now, not a client (`ADR-017`).

Room 003 carries no co-host and no borrowed theme, so the format has to earn attendance on its own. It also has to survive being sold later, which means it must pass the no-funder gate in `docs/13-buyer-led-room-design.md`: state the topic and composition with no company attached, and ask whether it is a room worth running. All three formats below are scored against that.

## What room 001 actually taught

From `data/events/2026-07-29-patient-journey-jam.md`:

| Observation | What it implies for format design |
|---|---|
| 16 attended. 10+ practising clinicians, zero physicians | Design for dentists, clinical pharmacists, physiotherapists and researchers. Not physicians, not students, not vendors |
| A dentist and a clinical pharmacist read the same patient journey differently and both were right | Cross-disciplinary disagreement is the thing that worked. Build the format around producing it on purpose |
| Presenters left with an artifact. Everyone else left with an evening | Value was concentrated in a few people. Spread it |
| An MD founder withdrew over low physician count | People come for peer density before they come for content |
| Three physicians accepted for room 002 and all three no-showed | Acceptance is not attendance. A role held on the night is the only lever available |
| Service providers were turned away, correctly | Any format must have a natural cap on vendors, not a door policy argued at the door |

The design brief that falls out of this: **zero preparation for guests, a named job for as many people as possible, clinicians as the authority rather than the audience, and an artifact the room produces together rather than one presenter takes home.**

---

## Format A: Verdict

*Founders show, clinicians score.*

Four founders get four minutes each. No slides, no demo. Each brings one question they want answered. Every clinician in the room holds a card with three fixed lines: does this fit the way you actually work, would you use it, what would stop you. Cards are collected, scored and sent to each founder as a single sheet. Founders may not respond in the room.

**Roles:** every clinician is a reviewer, named on the sheet. One timekeeper. One person reads the aggregate back at the end.

**Artifact:** a scored sheet per founder, clinician-sourced, role-attributed only with consent.

**The problem with it:** the clinician is being asked to do unpaid evaluation work for a stranger's company. That is the same offer room 002 made to three physicians who did not turn up. It is the most familiar format of the three and the most replaceable.

**Naming note:** do not call this Second Opinion. That name belongs to the private 2 to 3 clinician product and reusing it at room scale dilutes the thing being sold.

---

## Format B: The Friction List

*Clinicians speak first. Founders respond, and only by attaching to something a clinician said.*

The whole evening runs on one prompt: **one thing in your week that cost you time or money.** Every clinician gives theirs in ninety seconds, or writes it on a card and has it read out. Items go on the board, numbered as they land. After each block of five, someone from a different discipline says whether the same thing happens in theirs.

Founders speak last and speak short. Sixty seconds each, and the only permitted opening is a number from the wall: "number seven, that is what we build against." That is the company share, and it is constrained on purpose, because a founder who has just been told the problem by the person who has it gives a better sixty seconds than one who was given a slot.

The room then ranks the list. Top five get read back. Everyone leaves with the full numbered list within 48 hours.

**Roles:** contributor (everyone, with a number), three openers asked personally, one timekeeper, two scribes at the board, cross-check speakers between blocks, founder responders, one closer. Scribe is the right seat for a student: a real job that does not consume a clinician's chair.

**Artifact:** a dated, numbered, discipline-tagged list of what breaks in Canadian dental practices and community pharmacies. That is the insight brief seed (`ADR-011`) and it is precisely the thing `docs/13-buyer-led-room-design.md` says a corporate buyer cannot produce for itself.

**Why the show rate should be the highest of the three:** the item is collected at RSVP. Someone who has typed their friction has co-authored the agenda, and the room is visibly holding a slot with their number on it. That is a smaller psychological gap to close than "I said I would come to a networking evening."

---

## Format C: What Changed

*A dated policy hook, pointed at one profession at a time.*

Ontario pharmacy scope went from 19 minor ailments to 28 on 1 July 2026, with six newly funded vaccines. The CDCP 2026-27 benefit year opened the same day. Both are on the verified list. The room asks what actually changed at the counter and in the chair since then.

Three or four clinicians give five minutes of field notes each, no slides, invited weeks in advance. Then the table opens. Founders in the room respond to what they heard.

**Roles:** heavy for the four who speak, light for everyone else. This is the format's weakness and it is structural, not a detail to be fixed with a run of show.

**Artifact:** a short written brief. Highly saleable, and it dates fast.

**What it is really for:** this is the single-specialty room that item 12 of `HANDOFF.md` calls the untested claim. Convening a named specialty at volume has never been done here. Both prior rooms were mixed.

---

## Scoring

Weights reflect what the room has to do: attract clinicians, hold them to the date, explain itself in one message, cost the guest nothing, and carry a commercial layer later.

Clinician attraction 0.22 · show rate 0.20 · explainability in outreach 0.16 · commercial carrying capacity 0.14 · guest effort 0.12 · founder stake 0.10 · advertisability 0.06

| Criterion | A. Verdict | B. Friction List | C. What Changed |
|---|---|---|---|
| Clinician attraction | 6 | 9 | 8 |
| Show rate | 7 | 9 | 7 |
| Explainability | 8 | 9 | 10 |
| Commercial carrying capacity | 7 | 8 | 10 |
| Guest effort (higher is easier) | 9 | 9 | 7 |
| Founder stake | 9 | 7 | 5 |
| Advertisability | 8 | 9 | 9 |
| **Weighted total** | **7.44** | **8.66** | **8.04** |

### Reading the scores

**Clinician attraction.** A asks a clinician to work on a founder's problem. B asks them to talk about their own week and hear how three other disciplines handle the same thing. C asks about their own revenue, which is the strongest hook of all, but only for the one profession named.

**Show rate.** B is the only format where the guest has already contributed something before the day. A and C both leave most of the room in an audience seat, and an audience seat is the easiest thing in the world to skip.

**Explainability.** C wins outright because it is news and needs no explanation at all. B needs one extra sentence. A sounds like a pitch night, which is legible but crowded.

**Commercial carrying capacity.** C is the room a pharmacy-adjacent company already has a budget line for. B builds an asset that compounds across editions instead of expiring with the news cycle. A is the weakest, because a founder showcase is cheap in this market and the buyer for it is not the buyer described in `data/corporate-targets.md`.

**Founder stake.** A gives founders the most airtime, C the least. B gives them the least airtime of any format that still counts as a share, but arguably the best sixty seconds, because they respond to a stated problem rather than opening cold.

**Advertisability.** All three are advertisable within the rules. None may carry attendee counts, member counts, past-event galleries or logos (`CLAUDE.md` rule 3, `data/verified-stats.md`). What can be advertised is the format, the prompt, the disciplines invited and the artifact.

---

## Recommendation

**Run B as the format. Point edition one at C's topic.**

They are not mutually exclusive and treating them as such wastes the better half of each. The Friction List is the recurring container: same prompt, same roles, same artifact, every month, so it accumulates. What Changed is a theme the container can be pointed at, and it happens to be the sharpest theme available for the next two months while the 1 July changes are still fresh.

So room 003 is The Friction List, and the prompt for that edition is narrowed: *one thing that has cost you time since the scope change on 1 July.* Pharmacists and dentists both answer it, both have a live commercial reason to care, and the cross-discipline check between blocks is exactly the mechanism that produced the best moment of room 001.

Format A is not worthless, it is mistimed. Once there is a paying co-host and an external venue, a scored founder review has a buyer. Running it now, unfunded and in the condo, spends the clinician goodwill that everything else depends on.

---

## The roles ledger

Show rate is the whole argument for this design, so the roles are listed as an operational checklist rather than a description.

| Role | How many | Asked when | Effort on the night |
|---|---|---|---|
| Contributor | Everyone | At RSVP | 90 seconds, or a card read for them |
| Opener | 3 | Personally, one week out | Goes first, nothing else |
| Timekeeper | 1 | On arrival | Calls time. Good returning-guest job |
| Scribe | 2 | One week out | Writes items on the board. Student seat |
| Cross-check | 4 to 6 | On the night, by discipline | One sentence between blocks |
| Founder responder | Each founder | At RSVP | 60 seconds, must open with a number |
| Closer | 1 | On the night | Reads the top five back |

Role names avoid every regulated title in `CLAUDE.md` rule 5. Nobody is a chair, a lead, or anything that reads as clinical rank. Check any new role name against that list before it goes on a card.

## Show-rate mechanics

Free-attendance events run 40 to 60% no-show and `docs/16-product-architecture.md` states that plainly rather than pretending otherwise. Roles improve the number, they do not solve it. Stated honestly so the first edition is not judged against a fantasy.

1. **Collect the item at RSVP.** Single highest-value mechanic. It converts an RSVP into a contribution.
2. **Send the number back.** "You are number seven." Three days out.
3. **Ask the openers personally.** Three people who know the evening starts with them.
4. **Send the previous edition's list to everyone confirmed**, 48 hours out, once one exists. Proof the artifact is real.
5. **Text on the day, not email.** One line, mid-afternoon. Room 001's pre-event blast went by email and carried a broken video link.
6. **Close with the nomination question.** "Who else should be on this list?" Item 9 of `HANDOFF.md`, and the cheapest recruitment channel in the business.
7. **Venue.** The condo held for dentists and pharmacists and repelled physicians, costing a confirmed speaker. Keep it for unfunded editions only, per `ADR-013`.

**ASSUMPTION.** No-show improvement from the role mechanic is untested here. Instrument the funnel from the first message so edition one produces a real number rather than another anecdote (`HANDOFF.md` item 3).

## The commercial layer

Public and private are separate documents and separate vocabularies. `CLAUDE.md` rule 2 and `ADR-007` are absolute: the words sponsor, sponsorship, partner tier, anchor, exhibitor, booth and lead access do not appear on the site, on Luma, in social copy, or in anything a guest reads.

**In public, a paying company is a co-host and is named as one.** That is exactly what Miro was, it is already established practice for this room series, and it needs no euphemism.

**In private,** the pricing already exists and should not be reinvented here:

| Line | Price | Source |
|---|---|---|
| Monthly meetup co-host | $2,500 per room, $24,000 for twelve | `docs/16-product-architecture.md` |
| Session partner, themed room | $7,500 | `docs/13-buyer-led-room-design.md` |
| Insight brief built from the room | $12,000 to $18,000 | same |
| Bundle | $18,000 to $22,000 | same |

The Friction List is unusually well suited to the bundle, because the room and the brief are the same object. The list a company funds in March is the brief it reads in April.

**Category exclusivity is one company per room** (`ADR-020`). The co-host influences the theme and may nominate. MedTech North composes the room (`docs/13-buyer-led-room-design.md`).

## What must never happen to this format

- No attendee list is ever sold from a dinner or a convening. The meetup carries a named, unchecked, express-consent opt-in and nothing else (`docs/16-product-architecture.md`)
- Clinicians pay nothing, in this format and every future one (`ADR-002`)
- The friction list is published at pattern level. No named clinician and no named employer without written permission
- No claim that physicians attend. Three accepted for room 002 and none has yet sat in a room
- Vendors are capped in the composition, not argued with at the door. Six in a room of forty, fewer in a smaller one (`docs/03-icp-and-segments.md`)

## Outreach copy, first message

Written for a clinical pharmacist. Swap the hook for the CDCP benefit year when writing to a dentist.

> Hi [name]. I run a small monthly room in Mississauga for people working in Canadian health: dentists, pharmacists, physiotherapists, researchers, and some of the people building software for them.
>
> The next one is [date] and the whole evening runs on one question. Since scope expanded on 1 July, what is actually costing you time at the counter?
>
> Everyone gives one item, ninety seconds, no slides, nothing to prepare. They go on the board, the room ranks them, and the founders in the room respond to the ones they are building against. You leave with the full list.
>
> Clinicians attend at no cost, permanently. Food is provided.
>
> If you want a slot, reply with the one thing you would put on the list and I will hold you a number.

The last line is the mechanism, not a flourish. It converts a reply into a commitment and gives the follow-up something concrete to confirm.

Every figure usable in the surrounding campaign is in `data/verified-stats.md`: 19 to 28 minor ailments as of 1 July 2026, five more in early 2027 reaching 33, six newly funded vaccines, over 99% of Ontario pharmacies participating, 2.4 million assessments delivered, and for dentistry the 2026-27 CDCP benefit year, 6.5 million covered, over 4 million treated, roughly $13 billion across five years.

## Open questions

| Question | Why it matters | Who decides |
|---|---|---|
| Mixed room or single specialty for edition one? | Single specialty tests the unproven claim. Mixed protects the cross-discipline moment that worked | Ali |
| Does the ninety-second round scale past about 20 speakers? | At 30 attendees the round alone runs an hour. Blocks and card reading are the mitigation, untested | Test in edition one |
| Is a co-host approached before or after edition one runs unfunded? | Selling a format nobody has seen is harder. Running it free costs a month | Ali |
| Does the list get published, and where? | It is the most saleable asset in the business and giving it away free changes the brief's price | Needs its own ADR |
