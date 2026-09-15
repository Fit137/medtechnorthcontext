# ADR-027 — Build North is the first ticketed room, it celebrates the choice to build in Canada, and every seat carries the same three minutes

**Status:** Proposed. Price, venue and time of day are Ali's to confirm
**Date:** 4 September 2026
**Amended:** 15 September 2026, twice. The room moved from Wednesday 16 September to **Wednesday 30 September 2026**, so registration now closes Friday 25 September and the go or move decision is Monday 21 September. The title and the page then changed to lead on the celebration rather than the format. Price, seat count, the three-minute rule and all three publishing conditions are unchanged
**Implements:** `ADR-026` (free seats are funded seats) for the first time in a published room
**Departs from:** `ADR-023`'s no-stage-time rule, and `ADR-020`'s $500 service provider price. Both scoped to this format
**Kit:** `assets/events/build-north-2026-09-30-kit.md`

## Context

`ADR-026` settled that every seat is ticketed unless a co-host has funded the room, and left the price unset because it depended on a venue and a menu that were not decided. `ADR-025` required that "everything else is ticketed" be resolved by an ADR rather than by accident in a Luma listing.

Build North is the first room published under that regime. Wednesday 30 September 2026, twenty seats, no co-host, so the guests fund it. That is the default case `ADR-026` describes.

Two things about it are new. It is **not a dinner**, and it is priced at a fraction of anything in `ADR-019`.

## Decision

### 1. What it celebrates is the choice to build, invest and work in Canada

Three hours. One segment with a stage in it, then food, drinks and an open room. Every previous room was sold as a dinner. This one is sold as a celebration, and the page says so in its first sentence.

**The offer is being heard, and the argument is what being heard is for.** People who choose Canada for a health technology company are choosing the slower market, and the page names that choice and then prices it in patient terms: a shorter road from a Canadian idea to a Canadian patient, and a stronger domestic sector. Everything else in the design serves that. The stage is flat so nobody is featured, the question is retrospective so it cannot become a pitch, and the food is out from the start.

The page carries four blocks and no more: what is being celebrated, why now, the evening, the seats. The who-is-in-the-room bullets and the house-rules block stay cut. Both were logistics presented as an argument, and on a page whose job is to make somebody want something, they were the noise.

**Published as Build North: A Celebration of Canadian Health Tech.** Both "Table" and "Session" come off the title, since Table reads as a dinner and Session reads as work. The edition number leaves the title too and lives in direct messages and printed pieces instead, which keeps `ADR-024` satisfied without putting "No. 3" next to "Celebration". Numbering continues unbroken, since room 003 was cancelled without consuming a number.

**What the page celebrates is a choice.** Founders who build here, investors who back Canadian medtech and health tech, and talent who could work anywhere and stay. The page names those three and then says what the choices buy: a shorter road from a Canadian idea to a Canadian patient, and a stronger domestic sector. That is the value, and it is in the first four lines.

**No via negativa on the page** (Ali, 15 September). The evening is never defined by what it lacks, so the no-selling rule is carried as "everyone speaks, everyone listens" and enforced in the approval email and at the open.

### 2. A published three-step price ladder, twenty seats

| Release | Seats | Price |
|---|---|---|
| First | 10 | $20 |
| Second | 5 | $40 |
| Final | 5 | $60 |
| Service provider seat | 4 | $150 |

Event capacity is **20**. Ticket quantities sum to 24 because the service provider seats come out of the same twenty, not on top of them.

**All four prices are visible from day one.** The ladder is the commitment device and it only works if somebody buying at $20 can see what the seat costs once ten are gone. Hidden tiers deliver the same rise as a surprise, and a surprise reads as a trick.

**Why $20 and not $125.** Most of the founders this room is built for have not raised. `ADR-026` already settled the principle: **"The ticket's job is commitment, not revenue."** It recommends pricing near cost rather than at value, and warns that a ticket priced as though it were education fails on exactly the ground `ADR-019` identified. $20 is far enough below anyone's threshold that price is not the reason they decline, and far enough above zero to carry the one signal free registration cannot carry. It is a filter, not a revenue line.

**What it gives up.** `ADR-019` priced a builder seat at $150 and the room grossed enough to buy a venue. At this ladder the room grosses $700, which covers food and coffee for twenty and nothing else. The venue therefore has to be free or borrowed, which is a real constraint and is handled in condition 1 below.

**Why the service provider seat drops from $500 to $150.** `ADR-020` set $500 against a $125 builder seat, a ratio of four to one. Holding $500 against a $20 seat is twenty-five to one, which stops reading as a qualification filter and starts reading as a segment being ranked, which rule 6 forbids. $150 is two and a half times the top of the ladder, which is high enough to make somebody think about whether they belong in the room and low enough that nobody reads it as a verdict on their profession. **The cap of four is what actually prevents a vendor floor, and the cap is unchanged.** The price supports the cap. It does not replace it.

### 3. Every seat carries three minutes, and nobody can buy more

One question, identical for everyone, in the same words: **what are you building, and why did you decide to build it here.** Three minutes each, order **drawn at the table on the night**. No slides, no decks, no demos.

The second half of that question is the decision. A product list is an update. Saying out loud why you chose the harder market is the thing that gets recognised, and twenty answers to it are an argument about the country rather than twenty updates. It is also the structured question `ADR-019` requires of every room, so the evening produces material rather than just an evening. The answers get written down the same night.

### 4. Scarcity is published as a reason, not as pressure, and "twenty seats" is a deliberate exception

`docs/07-brand-and-voice.md` and `data/verified-stats.md` both say not to publish a fixed seat count, because "forty seats" becomes a claim to defend when the first room held 16.

Twenty is published anyway. The ladder discloses it arithmetically the moment the tiers are visible, so hiding it is theatre. `ADR-019` already lists a stated seat count among the devices that stop an invitation reading as "you are the product". And the rule exists to stop an unfillable number being claimed as a track record, which is not what a capacity for a dated room is.

**The word "exclusive" does not appear.** `docs/07-brand-and-voice.md` permits it once per page and only in the literal sense of category exclusivity, and it names "limited spots" and "only a select few are invited" as the failures. So the page gives the reason for twenty instead: it is the largest number where everyone still gets three minutes. That reads as a design constraint rather than a sales tactic, and a reader cannot argue with it.

**The rule is not repealed.** It still holds for the website, for any past room, and for any number describing attendance rather than capacity.

## Why stage time here does not break the rules it looks like it breaks

**"Nobody buys a microphone. No one pays for stage time or a speaking slot."** (`docs/07-brand-and-voice.md`.) The ticket buys a seat, and every seat carries the same three minutes, so the money buys nothing that anyone else's money does not also buy. The rule exists to stop the floor going to the highest bidder. A flat, unpurchasable, identical allocation is the strongest available form of that promise rather than an exception to it. The moment one person can pay for six minutes, the rule is gone and so is the room.

**`ADR-023`: founders get no stage time, no deck, no demo.** That rule solved a specific problem. The scarce side was being asked to do unpaid work so founders could benefit, and stage time was the mechanism. Here nobody is the audience for anybody: everyone speaks and everyone listens for the other sixty-two minutes. The question is retrospective rather than promotional, so a pitch does not answer it and is visibly the wrong shape when somebody tries.

**Rule 6** is why the allocation is flat and the order is drawn rather than sequenced. A line-up splits a room into featured and attending, which `docs/17-event-formats.md` records as unrecoverable once anyone notices.

## What this costs, stated plainly

- **The stage can run long and eat the celebration.** Twenty people at three minutes is sixty-five minutes only if it is run hard. Visible timer, and cut the first overrun off warmly and publicly. The celebration is the thing people paid for.
- **The house rules came off the public page.** No selling and nothing leaves the room both still stand and are said aloud at the open, and the no-selling rule survives in the description as a sentence. A rules block on an invitation to a celebration reads as a list of restrictions, which is the wrong first impression. The risk is that somebody arrives not having read it. The open is the mitigation and it has to actually happen.
- **Composition risk is live and it is the serious one.** A $20 ticket on a celebratory builder theme is the exact shape that fills with founders and service providers and no clinicians. `ADR-026` binds here: **a sold seat is not an entitlement to attend.** Approval is required on every registration and a buyer whose group is full is refunded the same day rather than seated.
- **$700 does not buy a venue.** See condition 1.
- **The theme is politically adjacent and the copy is not.** Build North argues for domestic capacity from three dated procurement facts in `data/verified-stats.md`. It characterises no country, government or dispute and carries no tariff figure, because none is verified. Rule 4 applies to a Luma page exactly as it applies to the site.

## Conditions on publishing

1. **The venue is settled first, and money can no longer solve it.** A ticketed event in a residential amenity room, with no written permission and no commercial general liability insurance, is recorded as open in `HANDOFF.md`. At $700 gross the room cannot buy its way into a restaurant. A programme, unlike a dinner, fits a borrowed seminar room, hospital innovation office, incubator or co-working space, most of which are free or nearly free to a healthcare audience. That is the recommended route and it also fixes the legitimacy problem that cost a confirmed speaker at room 001. Insurance gets quoted today either way, because it has the longest lead time on the list.
2. **Nothing from rooms 001 or 002 appears on the page.** No testimonial, no photograph, no video. Rule 3 forbids it, permission from the four testimonial authors has never been requested, and that footage carries a third party's branding under `ADR-017`. Section 13a of the kit holds the permission message and the route to clearing it.
3. **Fewer than ten seats sold by end of Monday 21 September and the date moves.** Decided in advance, because `ADR-025` is unambiguous that a room which has not composed gets moved, and because moving on the 21st is a scheduling note while moving on the 28th is the third date this room has carried. **The room has already moved once**, from 16 September, so a second move is more expensive than the first and needs a stated reason rather than a quiet slide.

## What this does not decide

Whether the series renames from Table to Session permanently. Whether Build North recurs. Whether the three-minute format survives contact with twenty real people, which is unknown until it runs and should be logged in `data/events/` the same week. And the price of a clinician seat in a room built specifically for clinicians, which is a different question from the price of a seat in a mixed room, and which `ADR-026` still leaves open.
