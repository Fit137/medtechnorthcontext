# Instagram: strategy, account metadata and a six-week calendar

> **For Ali.** Everything you personally publish, say, or set up.
> The matching build instructions for Claude Design are in `prompts/claude-design/instagram-visual-system.md`.
> Every to-camera script is in `assets/social/instagram-scripts.md`.
> The decision this rests on is `decisions/ADR-025-instagram-as-a-channel.md`.
>
> **Written 16 August 2026. Calendar starts Monday 17 August 2026 and runs to Sunday 27 September 2026.**

---

## 0. Read this part before anything else

You asked for images, carousels and videos. You will get all three. But the source material you handed over is emphatic about a running order, and following it changes what gets built first. Three things move ahead of the calendar.

**One niche, decided before the first post.** Video 1 spends a third of its runtime on this. Four topics in a bio makes the account uncategorisable to the algorithm and confusing to a visitor. MedTech North has four ICPs, which looks like four topics and is not. Section 1 settles it.

**Reels first, carousels second, stories last.** Brock Johnson puts 80% of early effort on reels because reels reach non-followers and stories reach almost nobody when you have no followers. That inverts what a brand instinctively wants to make, which is beautiful static frames. The existing `assets/social/launch-campaign.md` is twelve static frames. It is a LinkedIn kit. It is not an Instagram launch and reusing it as one would waste the first month.

**The best-of-nine test comes before scaling.** Three formats, three posts each, then read which won and repeat that. This is the difference between a calendar and a guess. Weeks 1 and 2 of the calendar below are that test and nothing else. Weeks 3 to 6 are deliberately less specified, because what goes in them depends on what the test says.

**And the caveat you flagged, answered directly:** the format split you assumed, images plus carousels plus videos, is roughly right but the weighting is wrong. The strategy says 64% reels by count and closer to 80% by effort. Static images drop from the centre of the plan to the connective tissue between reels. Carousels stay, but they change job: video 3 is clear that reels get you found and carousels get you clients, so carousels stop being awareness assets and become the conversion surface.

---

## 1. The niche

**The topic is convening. What happens when you put clinicians, founders, researchers and policy people at one table, and what it actually takes to run those rooms.**

Not medtech. Not Canadian health innovation. Not clinicians. Those are the subject matter of the room, and an account about them competes with every health publication in the country while saying nothing only you can say.

Three reasons this is the right single topic.

**It is one thing, so the algorithm can file it.** Every post is a room, a rule about rooms, or a person who was in one.

**It does not rank the segments.** `CLAUDE.md` rule 6 forbids describing one group as more valuable than another, and it is the rule most easily broken by a channel that has to pick an audience. An account about convening is about the table, not about who deserves a seat. A founder, a dentist and a procurement lead all read it as being about the thing they are all in.

**You are the only person who can post it.** Video 1 says pick what you have most experience in. Nobody else in Canada is running these rooms and documenting the mechanics in public.

**Who it is actually for, in order.** Practising clinicians and practice owners in the GTA come first, because they are the constrained side and the account's job is to make the room look real to someone who just received your message. Founders second, because they are proactive and will find you. Corporates and policy are not an Instagram audience for this business and no post is written for them. That ordering is an internal targeting decision and it never appears in the copy.

**What this excludes, permanently.** Sector news. Funding announcements. Commentary on other people's products. Regulatory explainers. All of it is on-topic for medtech and off-topic for you.

---

## 2. Instagram will not fill Table #3

Table #3 is 26 August. The account opens 17 August with zero followers. Nine days.

`ADR-024` already settled the equivalent point about the Luma page: the public surface does not fill the room, the outreach fills the room, and the page handles the name, the legitimacy and the logistics. Instagram has exactly the same job in weeks 1 and 2. Somebody gets your direct message, looks you up, and needs to find something that looks real and current. That is worth doing well and it is not acquisition.

The account starts converting somewhere around Table #5, once there is a body of work and the DM automation has a list to talk to. Judge weeks 1 and 2 on whether nine reels went out, not on registrations.

---

## 3. Account setup

Do all of this in one sitting before the first post.

### 3a. Account type

**Business, not Creator.** Creator accounts do not expose the category field or the contact button in the same way, and the direct message automation in section 7 needs a Business account connected to a Facebook Page.

### 3b. Handle

| Preference | Handle | Note |
|---|---|---|
| 1 | `medtechnorth` | Check availability first |
| 2 | `medtechnorth.ca` | Reads Canadian, and the dot is legible |
| 3 | `themedtechnorthtable` | Long. Only if both above are gone |

Do not take a handle with an underscore or a trailing number. Both read as an account that could not get its own name.

### 3c. Name field

The name field is indexed by Instagram search. The handle is not, to the same degree. Thirty characters.

```
MedTech North | Health Tech
```

Twenty-seven characters. "Health Tech" is the search term a founder or an operator types. "Toronto" goes in the bio rather than here, because the name field only has room for one keyword and the sector term beats the city term.

### 3d. Bio

One hundred and fifty characters including line breaks. This version is 142.

```
Small dinners for people who work in health. Toronto and the GTA.
Clinicians and researchers attend free, permanently.
Table #3, 26 August.
```

**Line three is a maintenance obligation.** It is updated the morning after every room, or it comes out entirely. A stale date is worse than no date, and it is the exact failure a clinician checking whether you are real will notice.

**Version without the dated line, for any period when the next date is not confirmed:**

```
Small dinners for people who work in health. Toronto and the GTA.
Clinicians and researchers attend free, permanently.
One table, no agenda, nobody selling anything.
```

**What is deliberately absent and stays absent:** any headcount, any count of rooms held, the word community, the word network, any emoji, any exclamation mark, any sponsorship term, and any urgency device. See section 12 on the emoji decision, which is a real cost.

### 3e. Links

Instagram allows five. Use two. A wall of links contradicts the one-door posture the rest of the brand keeps.

1. The Luma page for the current table
2. `medtechnorth.ca`

The registration link is the first one because that is the action. Everything else routes through direct message keywords in section 7, which the source material argues outperforms link-in-bio by a wide margin.

### 3f. Category

Pick from what Instagram actually offers. In order of preference: **Organization**, then **Business Service**.

Avoid **Community Organization** (`docs/07-brand-and-voice.md` rules out community as the noun for the whole thing, and the category renders as visible copy directly under the name) and **Event Planner** (accurate, and it reads like someone who books venues for a living).

### 3g. Profile picture

**The mark.** Up-triangle and down-triangle meeting at a line, ink on white, drawn to be legible at 32 pixels. Asset `IG-M-01` in the design file.

Your face is the hook inside the content, and it is the wrong choice here, because a profile picture is mostly seen as a 32px circle beside a comment and a face at that size is a smudge. A geometric mark is not.

### 3h. Contact

Email button on. Phone off. Address off. The venue address is only ever sent on registration and it is a residential building.

### 3i. Highlights

Build the three covers now because they cost the design pass almost nothing, and then leave them empty until week 5.

Brock is explicit that stories are the one format to defer when you have no followers, because stories are seen almost exclusively by followers. Covers: **The Table**, **The Rules**, **Apply**.

---

## 4. The content pool, and the one adaptation that matters

Video 1 says: search your topic, save every reel over a million views into a folder called content pool, get to twenty, and let the explore feed start feeding you more.

**Do this. But not on your own sector.** There is no corpus of million-view reels about health convening, and if you search medtech you will fill the folder with device demos and hospital marketing, none of which is a format you can run.

**Search the format, not the subject.** These are the searches. Save anything over a million views that a solo person with a phone could plausibly recreate.

| Search | What you are collecting |
|---|---|
| supper club, dinner party host, private dinner | People who run rooms and film it |
| small business owner day in the life | The artifact and receipt formats |
| founder diary, building in public | To-camera confession structure |
| unpopular opinion business, I stopped doing X | The refusal hook, which is your natural register |
| restaurant owner, clinic owner, dental practice owner | Your actual audience, and what they already watch |
| street interview one question | The Question series structure |

Twenty saves minimum before Monday. It takes about forty minutes and it does two things: it gives you proven structures to borrow, and it retrains your explore feed so the suggestions keep coming.

**What you are borrowing is structure, never content.** Hook shape, cut rhythm, on-screen text placement, where the camera sits. Not the script and not the subject.

---

## 5. The three formats under test

Weeks 1 and 2 run nine reels: three formats, three each. They are deliberately different in *production method*, not just in topic, because that is what makes the result readable. If all three were you talking to a camera about different things, the test would tell you nothing about format.

Every one of these can be made by you, alone, with a phone, this week. None of them depends on Table #3 footage, production quotes, or anything currently unfunded.

### Format A: to camera, one rule

You, 25 to 40 seconds, one house rule or one thing you refuse to do, told through a specific incident rather than a principle.

Hook is your face and a flat declarative first line, no preamble, no greeting, no "so I wanted to talk about". Brock's relatability lever is specificity, so the rule always arrives attached to a concrete moment.

Scripts S-01 through S-14, plus the announcement S-18, in `assets/social/instagram-scripts.md`.

### Format B: the object

Eight to fifteen seconds of designed motion built from the website's existing 3D objects. No face, no voice. Three to six words on screen. Works muted.

This is the format the source material says everyone forgets. Brock's point is that the hook is visual before it is verbal, and this is the only format where the design system is the hook. It is also the cheapest format you personally run, because Claude Design builds it and you press post.

Nine objects already exist and are mapped in the design file.

### Format C: the artifact

Fifteen to thirty seconds. Your hand and a real document. The message you actually send. The Luma page. A printed guest list with names covered. A calendar. A receipt.

Filmed on a table, top down, one continuous take, no cuts. This is the documentary format and it is entertaining for the reason street interviews are entertaining: it is a real thing, and the viewer is being shown something they would not otherwise see.

**Nothing in frame may identify a guest.** Names covered before the camera turns on, not in the edit.

---

## 6. The two series

Video 2's headline prediction for 2026 is that repeatable formats, series and challenges dominate. Two series run here, both of which are already in the operating plan rather than invented for a content calendar.

### Series 1: The Question

**"What do patients get wrong about your field?"**

Same question, every guest, every room, forever. Numbered publicly. Each answer is a reel.

This is already designed. `docs/17-event-formats.md` Part 3 specifies a single lit station running alongside dinner, one fixed question for everyone, and it gives the reason the question is fixed: twenty people answering the same question is a content format, one person answering twenty questions is an interview.

**Why this is the strongest asset available to the account, stated precisely.** `docs/17` line 129 makes the point that On Record is the only format producing public material that does not break the no-track-record rule, because the material is about the guest rather than about MedTech North. And `docs/10-growth-flywheel.md` line 42 says the elegant move is to manufacture the artifact the guest wants to share rather than asking them to share yours. Put those together and The Question is not just content, it is the distribution mechanism. Every guest who posts their own clip carries the room into a network you could not buy access to.

**It is also the one part of this plan with a real dependency.** See section 11.

### Series 2: Rules of the table

Numbered. One rule per episode, Format A. Runs from day one, depends on nobody, and is the fallback if The Question is delayed.

### What is deliberately not being done

The source material's challenge examples run to a man locking himself in a prison cell for a year. It also says, in the same breath, not to go to that level. For a business whose whole proposition is that a hospital chief of staff would take it seriously, spectacle is a losing trade. The series above are the version of a repeatable format that survives contact with the register. There is no stunt in this plan and there should not be one.

---

## 7. Direct message automation

Brock calls this the single biggest difference maker on Instagram for people who want revenue rather than reach, and the argument holds unusually well here, because the MedTech North funnel is gated by application and nomination rather than by a checkout. The link-in-bio version tells an interested person to leave the post. The keyword version tells them to engage with it and then delivers the thing to their inbox.

**Tool:** ManyChat. It is the officially approved Meta partner and it is what the source material uses.

### The keywords

| Comment or DM | Auto reply |
|---|---|
| `TABLE` | The Luma link for the current room, one sentence of context, nothing else |
| `ROOM` | Same as TABLE. People type what they remember, not what you told them |
| `NOMINATE` | A reply that routes to you personally, not a form |

**TABLE and ROOM reply text:**

```
Here's the link for the next table.

[luma link]

It's in Mississauga, dinner's covered, and there's nothing to prepare.

Ali
```

**NOMINATE reply text:**

```
Thanks. Tell me who, and one line on why, and I'll take it from there.

Every nomination is read by me, not a form.

Ali
```

That second one deliberately does not automate the outcome. `docs/10-growth-flywheel.md` is explicit that the nomination mechanic dies the moment it feels like a growth tactic, so the automation goes as far as opening the thread and no further.

### The follow trigger

Turn it on. No sale in it.

```
Thanks for the follow.

If you work in health anywhere around the GTA, tell me what you do and I'll tell you straight whether the next table's a fit.

Ali
```

The question is not a pitch. It opens a thread, and Instagram weights a person's feed toward accounts they have exchanged messages with, which is the actual mechanism the source material is describing.

### Two things to check before switching it on

**CASL.** Canada's anti-spam legislation covers commercial electronic messages, and a direct message plausibly qualifies. A keyword reply is solicited, because the person explicitly asked, and that is the strongest position. The follow trigger is unsolicited and is the one to run past whoever handles the compliance questions in `docs/08-legal-and-compliance.md`. Keeping it free of any offer, which the draft above does, is the mitigation. Check it anyway, because the cost of checking is twenty minutes and the cost of being wrong is a complaint from exactly the professional audience you are courting.

**Never write "comment below and I'll send you".** Say what it is: "Comment TABLE and the link comes to you." Same mechanic, no urgency device, no second-person hype.

---

## 8. The six-week calendar

**One post a day, forty-two posts.** Twenty-seven reels, eight carousels, seven stills.

Post a second time on any day you have the asset and the appetite. The source material is unambiguous that more posting produces more growth, and the only reason this is specified at one a day is production capacity, not strategy. If you get ahead, get further ahead.

**Timing:** one slot, 7:00 to 8:00am Eastern, every day. Clinicians and owners check phones before clinic. Do not spread posts across the day chasing an optimum. Consistency of slot is worth more than the optimum.

**Asset IDs match the design file.** `IG-R-##` reels, `IG-C-##` carousels, `IG-S-##` stills, `IG-Q-##` The Question.

### Week 1: Monday 17 to Sunday 23 August. Best of nine, part one

| Date | Day | Asset | Format | Working title | Script or copy |
|---|---|---|---|---|---|
| 17 Aug | Mon | `IG-R-01` | A | I took the agenda off my dinners | S-01 |
| 18 Aug | Tue | `IG-C-01` | Carousel | What the table is | §9, C-01 |
| 19 Aug | Wed | `IG-R-02` | B | Eighteen months, or one evening | On-screen only |
| 20 Aug | Thu | `IG-R-03` | C | The message I actually send | S-15 |
| 21 Aug | Fri | `IG-R-04` | A | Nobody buys a microphone | S-02 |
| 22 Aug | Sat | `IG-S-01` | Still | Nobody presents. Nobody pitches. | §9, S-01 |
| 23 Aug | Sun | `IG-R-05` | B | A table for twelve | On-screen only |

### Week 2: Monday 24 to Sunday 30 August. Best of nine, part two. Table #3 runs Wednesday

| Date | Day | Asset | Format | Working title | Script or copy |
|---|---|---|---|---|---|
| 24 Aug | Mon | `IG-R-06` | C | What I cut from the page, and why | S-16 |
| 25 Aug | Tue | `IG-R-07` | A | The hardest part is the pitching | S-03 |
| 26 Aug | Wed | `IG-S-02` | Still | Table #3. Tonight. | §9, S-02 |
| 27 Aug | Thu | `IG-R-08` | C | What a room costs | S-17. **Flagged, §11** |
| 28 Aug | Fri | `IG-R-09` | B | Four groups, one table | On-screen only |
| 29 Aug | Sat | `IG-C-02` | Carousel | Why there is no programme | §9, C-02 |
| 30 Aug | Sun | `IG-S-03` | Still | A dentist and a pharmacist | §9, S-03 |

**Nothing about Table #3 gets posted on the night beyond `IG-S-02`.** No room photo, no attendance, no "great evening". `CLAUDE.md` rule 3 and the standing exclusions in `assets/events/room-003-long-table-kit.md` both apply, and the temptation to post a full table is at its highest exactly when the room is full.

### Monday 31 August: read the pattern

**Do this before writing anything for week 3.** Protocol in section 10. It takes an hour.

### Week 3: Monday 31 August to Sunday 6 September. Double down, and The Question opens

| Date | Day | Asset | Format | Working title | Script or copy |
|---|---|---|---|---|---|
| 31 Aug | Mon | `IG-R-10` | Winner | Chosen after the pattern read | S-04 if Format A |
| 1 Sep | Tue | `IG-R-11` | Winner | | S-05 if Format A |
| 2 Sep | Wed | `IG-Q-01` | Question | What patients get wrong. № 1 | Guest, no script |
| 3 Sep | Thu | `IG-C-03` | Carousel | What patients get wrong | §9, C-03 |
| 4 Sep | Fri | `IG-R-12` | Winner | | S-06 if Format A |
| 5 Sep | Sat | `IG-S-04` | Still | Composition, not headcount | §9, S-04 |
| 6 Sep | Sun | `IG-R-13` | Winner | | S-07 if Format A |

### Week 4: Monday 7 to Sunday 13 September

| Date | Day | Asset | Format | Working title | Script or copy |
|---|---|---|---|---|---|
| 7 Sep | Mon | `IG-Q-02` | Question | № 2 | Guest |
| 8 Sep | Tue | `IG-R-14` | Winner | | S-08 if Format A |
| 9 Sep | Wed | `IG-C-04` | Carousel | Rules of the table | §9, C-04 |
| 10 Sep | Thu | `IG-R-15` | Winner | | S-09 if Format A |
| 11 Sep | Fri | `IG-Q-03` | Question | № 3 | Guest |
| 12 Sep | Sat | `IG-S-05` | Still | More than a year to a patient | §9, S-05 |
| 13 Sep | Sun | `IG-R-16` | Winner | | S-10 if Format A |

### Week 5: Monday 14 to Sunday 20 September

| Date | Day | Asset | Format | Working title | Script or copy |
|---|---|---|---|---|---|
| 14 Sep | Mon | `IG-R-17` | Winner | | S-11 if Format A |
| 15 Sep | Tue | `IG-C-05` | Carousel | The 8th largest market | §9, C-05 |
| 16 Sep | Wed | `IG-Q-04` | Question | № 4 | Guest |
| 17 Sep | Thu | `IG-R-18` | Winner | | S-12 if Format A |
| 18 Sep | Fri | `IG-R-19` | Second place | Re-test the runner-up once | S-13 if Format A |
| 19 Sep | Sat | `IG-S-06` | Still | Nothing leaves the table | §9, S-06 |
| 20 Sep | Sun | `IG-C-06` | Carousel | How a seat actually works | §9, C-06 |

**Stories start this week.** Three a week, no more. Reshare each day's post to story with one line of context. That is the whole story strategy until the account clears a few hundred followers.

### Week 6: Monday 21 to Sunday 27 September. Table #4

> **Move this block.** It should sit two to three weeks ahead of the confirmed Table #4 date. That date is not set as of 16 August, so every asset below carries a `[DATE]` placeholder and none of them renders until it is filled.

| Date | Day | Asset | Format | Working title | Script or copy |
|---|---|---|---|---|---|
| 21 Sep | Mon | `IG-R-20` | A | Table #4 is [DATE] | S-18 |
| 22 Sep | Tue | `IG-C-07` | Carousel | Table #4 | §9, C-07 |
| 23 Sep | Wed | `IG-Q-05` | Question | № 5 | Guest |
| 24 Sep | Thu | `IG-R-21` | Winner | | S-14 if Format A |
| 25 Sep | Fri | `IG-R-22` | Winner | | Reuse the strongest hook |
| 26 Sep | Sat | `IG-S-07` | Still | Table #4, [DATE] | §9, S-07 |
| 27 Sep | Sun | `IG-C-08` | Carousel | What happens at a table | §9, C-08 |

---

## 9. Captions and on-image copy

**Instagram captions are not LinkedIn captions.** About 125 characters show before the fold. The hook is line one or there is no hook. Everything in `assets/social/launch-campaign.md` is too long for this platform, and several of those captions now also contain a fixed seat count, which `data/verified-stats.md` forbids. Do not reuse them.

**Standing rules for every caption:** no emoji, no exclamation marks, no em dashes, no urgency, no headcount, no sponsorship word, no claim that physicians attend. First line carries a keyword, because Instagram indexes caption text for search.

**Hashtags:** the same five on every post, at the end, after a line break. They matter little now and they are not worth thinking about per post.

```
#medtech #healthtech #toronto #mississauga #healthinnovation
```

### Reel captions

Reel captions are short. The video carries the argument.

**`IG-R-01`**
```
I ran the first two of these with a format. Exercises, going round the table, the lot. I've cut all of it.

Table #3 is 26 August in Mississauga. Comment TABLE and the link comes to you.
```

**`IG-R-02`**
```
The distance between a finished product and the first clinical conversation, drawn to scale.

Comment TABLE for the next one.
```

**`IG-R-03`**
```
This is the actual message. No template, no sequence, no automation behind it.

Comment TABLE and the link comes to you.
```

**`IG-R-04`**
```
Nobody gets stage time at these. Not founders, not anyone paying, not me.

Table #3, 26 August, Mississauga.
```

**`IG-R-05`**
```
A table for twelve.

26 August, Mississauga. Comment TABLE for the link.
```

**`IG-R-06`**
```
I wrote about six hundred words for the page and published about two hundred and fifty. Everything I cut, and why.

Comment TABLE for the link.
```

**`IG-R-07`**
```
Not the obvious kind. The quiet kind, where somebody works out which side of the table is worth their time and spends the night on it.

Table #3, 26 August.
```

**`IG-R-08`**
```
What one of these actually costs to run.

Comment TABLE for the next one.
```

**`IG-R-09`**
```
Founders, clinicians, researchers, policy. One table.

26 August, Mississauga.
```

**`IG-Q-01` through `IG-Q-05`, template**
```
[Guest's field], on what patients get wrong.

№ [n] in the series. Same question, every table.
```

> Tag the guest only if they have asked to be tagged. Never tag someone into a post about a room they attended without asking first: it discloses their attendance to their entire network, and `CLAUDE.md` rule 3 plus the Chatham House rule both point the same way.

**`IG-R-20`, Table #4 announcement**
```
Table #4 is [DATE] in Mississauga.

Small dinner for people who work in health. No pitch, no slides, no programme, nothing to prepare. Dinner's covered and there's no cost.

Comment TABLE and the link comes to you.
```

### Carousel copy, typeset exactly

Six slides each, 1080 × 1350. Five beats from video 3: hook, promise, pull, payoff, ask. The cover carries the whole thing, so slide 1 gets the most design attention of any frame in the set.

**`IG-C-01`. What the table is**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *No agenda. No slides. Nobody selling anything.* |
| 2 | Promise | *A small dinner in Mississauga for people who work in health.* |
| 3 | Pull | *Founders, clinicians, practice owners, researchers. Kept mixed on purpose.* |
| 4 | Pull | *Nobody presents. Nobody pitches. Nothing leaves the table.* |
| 5 | Payoff | *You turn up, you talk to people, you leave when you want to.* |
| 6 | Ask | *Table #3. Wednesday 26 August, 6:30. No cost.* / *Comment TABLE for the link* |

**`IG-C-02`. Why there is no programme**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *I took the agenda off these dinners.* |
| 2 | Promise | *The first two had a format. Exercises, mapping, questions in turn.* |
| 3 | Pull | *It went fine. I've cut all of it.* |
| 4 | Pull | *Everyone I invite has already had a long week.* |
| 5 | Payoff | *Nothing is asked of you. That's the design, not an omission.* |
| 6 | Ask | *Table #3. Wednesday 26 August.* / *Comment TABLE for the link* |

**`IG-C-03`. What patients get wrong**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *I ask everyone at the table the same question.* |
| 2 | Promise | *"What do patients get wrong about your field?"* |
| 3 | Pull | *Same question, every guest, every room.* |
| 4 | Pull | *Nobody prepares. Nobody sees it in advance.* |
| 5 | Payoff | *They keep the footage. It's theirs, to use however they want.* |
| 6 | Ask | *The answers go up here, one at a time.* / *Follow for the series* |

**`IG-C-04`. Rules of the table**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *Four rules I don't bend.* |
| 2 | Pull | *Nobody buys a microphone.* |
| 3 | Pull | *No one here is anyone's prospect.* |
| 4 | Pull | *Nothing leaves the table.* |
| 5 | Payoff | *Composition over headcount.* |
| 6 | Ask | *Boring rules, kept absolutely.* / *Comment TABLE for the next one* |

**`IG-C-05`. The 8th largest market**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *Canada is the 8th largest medical device market in the world.* |
| 2 | Promise | *1,500+ medtech companies.* |
| 3 | Pull | *6,000+ life sciences companies.* |
| 4 | Pull | *$344B in annual health spending, 12.1% of GDP.* |
| 5 | Payoff | *A new device still takes more than a year to reach a patient here.* |
| 6 | Ask | *That's a proximity problem.* / *Sources: Medtech Canada, ISED, Invest in Canada, CIHI* |

> Every figure on this carousel is on `data/verified-stats.md`. The sourcing line on slide 6 is not optional.

**`IG-C-06`. How a seat actually works**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *Three ways people end up at this table.* |
| 2 | Pull | *Clinicians and researchers are invited. No cost, permanently.* |
| 3 | Pull | *Founders and operators apply.* |
| 4 | Pull | *Anyone can nominate someone else.* |
| 5 | Payoff | *Every request is read by a person. Usually me.* |
| 6 | Ask | *Comment TABLE for the link, or NOMINATE to put a name forward.* |

**`IG-C-07`. Table #4**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *Table #4 is [DATE].* |
| 2 | Promise | *Mississauga. A small dinner for people who work in health.* |
| 3 | Pull | *No pitch. No slides. No programme.* |
| 4 | Pull | *Nothing to prepare and nothing to present.* |
| 5 | Payoff | *Dinner's covered. There's no cost.* |
| 6 | Ask | *Comment TABLE and the link comes to you.* |

**`IG-C-08`. What happens at a table**

| # | Beat | Copy |
|---|---|---|
| 1 | Hook | *What actually happens at one of these.* |
| 2 | Promise | *You arrive. Food's already out.* |
| 3 | Pull | *You talk to whoever's near you.* |
| 4 | Pull | *Nobody stands up. Nobody opens a deck.* |
| 5 | Payoff | *You go home at nine.* |
| 6 | Ask | *That's it. That's the whole evening.* / *Comment TABLE for the next one* |

### Still frames, on-image copy

| Asset | Copy | Caption |
|---|---|---|
| `IG-S-01` | *Nobody presents.* / *Nobody pitches.* / *Nothing leaves the table.* | Three rules. The third one is why people speak plainly about procurement and money. |
| `IG-S-02` | *Table #3.* / *Tonight.* | Mississauga, 6:30. |
| `IG-S-03` | *A dentist and a pharmacist describe the same patient completely differently. Both of them are right.* | That's the reason for the mix. |
| `IG-S-04` | *We count composition, not headcount.* | I'll tell you who was in the room by role. Not how many, because it isn't the point. |
| `IG-S-05` | *More than a year, best case, from lab to bedside.* | Several years in practice. Source: University of Waterloo, April 2026. |
| `IG-S-06` | *Nothing leaves the table.* | Chatham House by default, in every room, without exception. |
| `IG-S-07` | *Table #4.* / *[DATE]* | Mississauga. Comment TABLE for the link. |

---

## 10. The pattern read, Monday 31 August

An hour, and it decides four weeks of work. Video 1's step four, done properly.

**Pull one number per reel: views.** Not likes, not saves, not comments. Views, because the goal in the first block is reach.

**Rank all nine. Take the top three. Ask what those three share.** The source material lists the axes: the audio, the caption, the format itself, the hook, the on-screen title, the visuals. Add two Instagram gives you that the transcript predates having in this form: **3-second watch rate** and **average watch time**. A reel with high views and a low 3-second rate got distribution and lost the room, which is a hook problem, not a format problem. That distinction is the most useful thing in the panel.

**Write down the pattern as one sentence.** Not a list. If you cannot write it as one sentence you have not found it.

**Then post that pattern, repeatedly, for four weeks.** Weeks 3 to 6 are deliberately underspecified in the calendar above so there is room to do this.

### What to track from then on

| Goal | Metric | Why |
|---|---|---|
| Growth | Shares | Brock's answer, directly. Shares are the growth signal |
| Conversion | Comments | Because comments are the DM automation trigger, so comments literally are the funnel here |
| Hook quality | 3-second watch rate | Isolates the first two seconds from everything else |
| Retention | Average watch time against length | Tells you whether to cut the format shorter |

**Ignore follower count for at least ninety days.** Video 2's whole opening answer is that comparing outcomes early is the thing most likely to make you stop. The average small business grows about 8% a month. Count uploads.

---

## 11. Flags. Read all seven before you start

**1. This plan does not run without a batch day.** Forty-two posts in six weeks with a business to run is only possible if Format A and Format C are filmed in blocks. Book two half-days: one before 17 August covering S-01 to S-05 and three artifact pieces, one on 31 August after the pattern read. Filming daily will fail in week two and the calendar will quietly stop.

**2. The Question depends on footage that does not exist yet.** `HANDOFF.md` lists production quotes as not obtained and sample footage as not shot for Table #3. If there is no camera in the room on 26 August, `IG-Q-01` through `IG-Q-05` have nothing behind them and five calendar slots go empty. **Contingency:** film one friendly practice owner before 26 August, which `docs/17-event-formats.md` already lists as a required task before the first invitation goes out anyway. That single pre-shoot covers `IG-Q-01`, proves the format, and gives you the sample you need for the co-host conversation. It is the highest-value item on this page.

**3. `IG-R-08`, "what a room costs", exposes your own economics.** Roughly $400 of catering is in `ADR-024`, it is your own cost rather than a market claim, and publishing it is honest and unusually good content. It also tells a prospective co-host what an evening costs you before you have quoted them anything. Your call. If it stays, it is one of the strongest posts in the set. If it goes, replace it with the artifact piece on the seating plan.

**4. The physician no-show story is the single most shareable thing you own and it needs your explicit approval.** Three accepted for room 002 and all three no-showed. Posting that does not break rule 3, because disclosing a failure is not claiming a track record, and it does not claim physicians attend. It is specific, counterintuitive and genuinely interesting, which is three of the five SHARE letters. It also tells every clinician considering Table #4 that clinicians do not turn up to these. **Not scripted below by default.** Say the word and it becomes S-19.

**5. Your face is now part of the brand.** The institutional register has held so far partly because there was no person in front of it. Format A puts you in front of it permanently, and there is no version of Instagram growth that does not. There is precedent: `assets/website/website-design-concepts.md` already places a founder portrait on the About page. But it is a change and it should be a decision rather than a drift.

**6. No emoji costs you something real.** The craft ban in `docs/07-brand-and-voice.md` is absolute and this plan honours it in images and captions both. On Instagram that is a genuine departure from platform norms and it will make the account read as more formal than its neighbours. That is arguably the point, given the audience makes legitimacy judgements in seconds. Recorded as a deliberate cost, not an oversight.

**7. Check the CASL position on the follow trigger** before switching it on. Section 7.

---

## 12. What never appears on this account

Carried from `assets/events/room-003-long-table-kit.md` section 12 and `CLAUDE.md`, with three additions specific to this platform.

- Any headcount, past or expected
- Any photo containing a guest, or any image implying a full room
- Any claim that physicians attend
- Sponsor, sponsorship, partner tier, anchor, category-exclusive, exhibitor, underwriter, booth, lead access
- Any regulated professional title used as a label, badge or tier name
- Any figure not on `data/verified-stats.md`
- Limited spots, last chance, filling fast, or any countdown
- Em dashes, en dashes, exclamation marks, emoji
- **New: a guest tagged into a post about a room they attended, without asking first**
- **New: a comment reply that pitches. Reply to everything, sell in none of it**
- **New: any trending audio whose lyrics or source clip you have not listened to in full.** Borrow the structure, not somebody else's meaning
