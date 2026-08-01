# Brand and Voice

## Positioning

**MedTech North is the room where Canadian health innovation actually happens.** Toronto-anchored, Canada-wide. Four groups at one table, seated by hand.

**The load-bearing words:** room · table · composition · curated · invited · committed · seated · balance

**Words to avoid:** "community" as the noun for the whole thing (undersells the model) · "network" used loosely · "exclusive" more than once per page · "platform" · "ecosystem" as a verb

---

## Register

**Executive.** Write as you would to a hospital chief of staff.

The audience is practising clinicians of every discipline, senior researchers, corporate decision makers and public sector leaders. This audience makes legitimacy judgments in seconds. A confirmed speaker withdrew from the first event on learning the venue was residential.

- No exclamation marks
- No urgency devices, countdowns, "spots filling fast", "don't miss out"
- No second-person hype: no "you'll love", "imagine", "picture this"
- Never explain the business model to justify pricing. State what each group gets. The reasoning is internal
- No rhetorical question openers

---

## Scarcity, stated as constraint

**The rule: scarcity is a property of the format, never a sales pressure.** State the constraint as a fact and let the reader draw the conclusion.

| Works, because it states a fact | Fails, because it sells |
|---|---|
| "Small rooms, composed by hand" | "Exclusive access!" |
| "One partner per category" | "Limited spots remaining" |
| "By nomination only" | "Join an elite network" |
| "Every request is read by a person" | "Only a select few are invited" |

**The rules section is where exclusivity lands hardest, because what an organisation refuses to sell says more than what it promises.**

> **Do not publish a fixed seat count.** The first room held 16. "Forty seats" becomes a claim to defend. "Small rooms" ages better.

---

## Writing rules — absolute

Apply the `ai-slop-humanizer` skill to all public-facing copy. In addition:

- **No em dashes or en dashes anywhere.** Commas, colons, full stops
- No "It's not X, it's Y" constructions
- No "Here's the thing" / "Here's the truth" / "The result?" / "The kicker?" / "Let that sink in" / "Read that again" / "Spoiler:" / "Plot twist:"
- **Banned words:** leverage · unlock · synergy · seamless · streamline · empower · cutting-edge · game-changer · revolutionize · best-in-class · robust · elevate · transform · landscape · foster · delve · testament · navigate (figurative) · realm
- Vary sentence length deliberately. Never three consecutive sentences of similar length or structure
- Prefer concrete nouns and specific numbers over abstraction
- Contractions where natural
- Never close on a generic bow. End on a fact or a full stop, not a summary of the theme
- No forced triads

---

## The four rules we do not bend

Public copy. These convert constraints into the reason to trust the room.

**Nobody buys a microphone.** No one pays for stage time or a speaking slot. The room is not for sale.

**No one here is anyone's prospect.** Clinicians aren't pitched. Founders aren't sold to. Everyone at the table is a peer.

**Nothing leaves the table.** Chatham House by default, in every room, without exception.

**Composition over headcount.** We'll tell you who was in the room by role. We won't tell you how many, because it isn't the point.

> **Note on rule two.** The original wording was "Clinicians are guests, never prospects." Widened deliberately, because the original read to founders and corporates as "you are the thing we're guarding against". The wider version protects all three groups. See `ADR-008`.

---

## The beliefs line

**Current:** "Everyone at this table is here because someone else needs them."

**Replaced:** "The people who give a network its value should never pay to be in it." That version ranked the segments against each other, and every segment reads the same site.

---

## Cross-segment balance

Every ICP reads the same site. Three mechanisms create unintended hierarchy, and all three are corrected:

1. **Beliefs copy that names who creates value.** Removed.
2. **Rules that protect one group from another.** Widened to cover everyone.
3. **Entry paths described by mechanism.** "Apply" sounds like a hurdle, "invited" sounds like status, "partner" sounds transactional. Fixed by leading each card with the benefit and demoting the mechanism to a subline.

**The test for every line:** would a founder, a clinician and a corporate all read this sentence and feel it was written with them in mind?

---

## Per-segment vocabulary

Each ICP page uses that segment's own language.

| Page | Vocabulary |
|---|---|
| Clinicians | point of care, workflow, care pathway, evidence generation, scope of practice, translational, multidisciplinary |
| Builders | runway, traction, pilot, clinical champion, procurement cycle, reimbursement pathway, regulatory strategy, commercialisation |
| Policy | capacity, procurement pathways, health technology assessment, value-based procurement, interoperability, jurisdictional, domestic capacity |
| Students | training, supervisor, cohort, translational, career pathway. Warmer, never junior in tone |

---

## Design system

**Tokens:** `--mn-red: #c41230` · `--mn-ink: #16191d`. Verify all others in `globals.css`.

**Colour meanings** (resolve unspecified cases against these, not against looks):
- **Red is the ask.** Actions only. If red is on screen, something can be clicked
- **Ink is the argument.** Body copy, dark stages, structure
- **Mist is their gain.** Anything that is a benefit to the visitor
- **Gray is the inherited.** The current situation, the alternative

**The mark:** an up-triangle and a down-triangle meeting at a line. The seam is the structural rule: dividers, timeline axes, the table plane, the horizon in 3D scenes. Up-triangle carries growth and what is built. Down-triangle carries delay and what blocks.

**Four group markers:** gear (founders), medical cross (clinicians and researchers), rising bars (capital and corporate), columns (policy). **Distinguished by shape, never colour alone.** This is an accessibility rule and a brand rule in one.

**Craft bans, absolute:** no emoji · no icon fonts · no stock icon libraries · no CSS blur as an effect · no stock photography · no element left at a default size · nothing that looks like a glyph at 200% zoom. All drawn SVG.

**Register for motion:** Institutional. Objects hold. Entry 300 to 500 ms. Restraint is the message. Spectacle is earned only at the signature moment, and only because the motion is the argument.
