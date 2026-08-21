# Segment value proposition: Canadian corporate room funder

**Status:** draft, written for campaigns 2 and 3. **Zero live conversations.** Every claim below is untested.
**Scope:** a named person in Canada who owns a budget and a number, at a company with a healthcare vertical. Titles: Field Marketing Manager, Industry Marketing Lead, Head of Community, Events Marketing Manager, ABM Manager, Customer Marketing Manager, Director of Partnerships, Canadian country or industry lead. The highest-probability slice is anyone who took a Canadian healthcare role in the last twelve months.

Do not reuse this wording for an institutional venue host, who is being asked for a building rather than sold a room. See `venue-host-institutional.md`. Do not reuse it for a US company with no Canadian presence, who is buying market entry and hears a different question entirely.

Campaigns, kill numbers and timing: `docs/20-outreach-campaign-sequence.md`, campaigns 2 and 3.

---

## What this segment is actually asking

1. **Is this a sponsorship.** If it reads as one it is priced against a trade show booth and compared to twelve other places attention can be bought
2. **Can I explain this internally in one sentence.** They are not spending their money and the sentence is the whole approval
3. **What do I get that I could not have produced myself.** This is H2 in `docs/18-hypothesis-risk-and-falsification.md` and it is the question the business exists to answer
4. **What happens if it underdelivers.** They have been burned, usually recently

## The proposition

They cannot assemble this room under their own logo. Not because they lack budget or competence, but because the people they want will read a room convened by a vendor as a sales meeting, and every one of those people has already been asked.

## What they get, in plain terms

Composition to a written brief, their category held for that room, a composition report afterwards, five consented introductions made personally, and material filmed on the day. Priced per `docs/16-product-architecture.md`, with the guarantee ladder in `ADR-022` stated up front rather than produced under pressure.

## What they do not get, and must be told early

No attendee list, contact data, export or badge scanning, ever. No view of the guest list before the room. No approval over individuals. No stage time beyond a welcome, no deck, no demo, no pitching from the floor. No claim that clinicians endorse them. No promised commercial outcome.

---

## Campaign 2. The convener premise

**This message is an experiment, not a pitch, and it is written to make a no informative.** It invites the answer that would falsify the premise of the business, because that answer is worth more than a meeting.

Subject lines:

```
Your last clinician room
Two questions about your Canadian events
[Company] and practising clinicians
```

```
[Name],

[ONE RESEARCHED SENTENCE. Their role start date, their Canadian health vertical launch,
a customer story they published, an event they ran.]

Two questions, and I am asking because the answers decide whether I should be talking
to you at all.

What did your last Canadian event for practising clinicians cost, all in, counting
staff time and agency fees. And how many practising clinicians actually sat in the room.

I convene small rooms of clinicians, practice owners and operators in Canada. They are
composed by hand, nobody presents, and nobody is sold to. If your answer is that these
rooms are cheap for you to fill and they fill well, then you do not need me and I will
have learned something worth knowing. If it is the answer I usually hear, twenty
minutes is probably worth it.

Ali
MedTech North
[registered business name, mailing address]

Reply with one word if you would rather I did not write again.
```

**What to record from every reply.** The cost figure, the clinician count, and whether they volunteered a difficulty. Those three fields are the campaign's actual output. A booked call with none of them is a weaker result than a two line refusal that contains all three.

---

## Campaign 3. Composition against exposure

**The test design, and the part that makes it valid.** Same price in both arms, same room, same date, same list, random assignment fixed before sending. Only the promise changes. A test that varies price and promise together tells us nothing about which one moved.

| | **Arm A. Composition** | **Arm B. Exposure** |
|---|---|---|
| Price offered | $7,500 | $7,500 |
| What is promised | Who is in the room, against a written brief | A room, a fifteen minute slot, and the attendees who opt in |
| What is not promised | Any stage time | Any particular composition |
| Both include | Category held for that room, seats for two, material filmed on the day | |

Both are products we sell and would deliver. `ADR-022` settled that exposure is a legitimate purchase and stopped treating it as the villain. Nothing dishonest is offered in either arm.

### Arm A, composition

```
[Name],

[ONE RESEARCHED SENTENCE.]

On 12 November I am running a day of small rooms in [city]. Six to eight of them, around
thirty people each, each one composed by hand around a single question.

One of those rooms could be built to your brief. You tell me who you need in it,
practising clinicians, practice owners, operations leads in a named discipline, and I
compose to that and report against it afterwards. Your category is held for that room,
so no direct competitor is in it.

What does not happen: you do not present, there is no deck and no demo, and you do not
see the guest list beforehand. You do not receive attendee data at any point. Two of
your people sit in the room as peers.

$7,500. If the room does not match the brief, the next one is free.

Worth twenty minutes.

Ali
MedTech North
[registered business name, mailing address]

Reply with one word if you would rather I did not write again.
```

### Arm B, exposure

```
[Name],

[ONE RESEARCHED SENTENCE.]

On 12 November I am running a day of small rooms in [city]. Six to eight of them, around
thirty people each, clinicians, practice owners, researchers and founders.

One of those rooms could be yours to open. Fifteen minutes on the screen, in front of
the room, plus the contact details of everyone who ticks the box to hear from you. That
box is unticked by default and people who leave it unticked still attend, so expect most
of the room rather than all of it. Your category is held for that room.

Two of your people in the room for the rest of it.

$7,500.

Worth twenty minutes.

Ali
MedTech North
[registered business name, mailing address]

Reply with one word if you would rather I did not write again.
```

**Reading the result.** Qualified replies per arm, not raw replies. A qualified reply names a budget owner, asks a price or scope question, or books time. If Arm B wins twice across 120 sends, the ladder in `docs/16-product-architecture.md` is upside down and the finding goes into an ADR rather than into a workaround.

---

## Openers that were tried and rejected

| Rejected | Why |
|---|---|
| "Sponsorship opportunities for our November summit" | Two rule 2 violations in six words, and summit is not what is being run. See `ADR-018` and `ADR-025` |
| "Reach 200+ healthcare professionals" | An attendee total we cannot claim, per rule 3 |
| "We have worked with global software companies" | True and unusable until written permission is held, per `ADR-017` |
| "Our 70% response rate proves the model" | Anecdote grade until reconstructed from send records. It cannot go in front of a buyer, per `data/verified-stats.md` |
| "Would you be open to a quick chat about partnering" | Asks for a meeting, tests nothing, and uses partner language |
| "Physicians and surgeons in the room" | Zero have attended. Three accepted for room 002 and none arrived. Never claim it |
| Opening with the guarantee | It answers question 4 before questions 1 to 3 have been asked, which reads as defensive. Second message, or on the call |

## Guardrails applied

- No sponsorship, partner tier, anchor, exhibitor, booth or media rights language, per rule 2
- No attendee totals, member counts, logos or endorsements, per rule 3
- No named reference or quoted testimonial until permission is held, per `ADR-017`
- No claim of physician attendance, per `data/verified-stats.md`
- No figure outside `data/verified-stats.md`. The only numbers in the copy are our own prices and our own room sizes
- No promised commercial outcome, per rule 7
- Category exclusivity described per room, per `ADR-020`, never as a season or a tier
- Sender identification, mailing address and a working opt-out in every message
- No em dashes, no exclamation marks, no urgency devices

## Untested, and what would settle it

| Claim | How it gets settled |
|---|---|
| That a stranger concedes their own rooms are hard to fill | Campaign 2. Count how many replies volunteer a difficulty unprompted |
| That composition outsells exposure at the same price | Campaign 3, two rounds, random assignment |
| That $7,500 is the right entry rung for a room inside a shared day | Watch where the price objection lands. If nobody objects, it is too low |
| That the guarantee raises conversion rather than raising suspicion | Send it in the second message for half the replies and hold it back for the other half |
| That a November date is far enough out to be planned for and close enough to be real | If the recurring answer is "put me down for next year", the date is the problem and not the offer |
