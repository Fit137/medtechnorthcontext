# Cursor Composer prompt: MedTech North site copy and compliance edit

Copy everything below the line into Cursor Composer.

---

## Context

This repo is the MedTech North marketing site. Next.js 14 App Router, TypeScript, CSS Modules with `--mn-*` tokens. The landing page is `app/page.tsx`.

This task is a **copy and compliance edit**. It is not a redesign, not a refactor, and not a feature change.

## Hard constraints, read before starting

- Do **not** change layout, component structure, spacing, colours, typography, or any CSS.
- Do **not** refactor components, rename files, reorder imports, or reorganise anything.
- Do **not** add dependencies.
- Change **text content only**, plus the one identifier noted in Edit 1.
- Keep the diff as small as possible. If any change would require touching CSS or restructuring JSX, **stop and report it** rather than doing it.
- If a string I describe does not exist verbatim, search for the nearest match, show me what you found, and wait for confirmation before editing it.
- The Toronto-anchored positioning stays exactly as it is. Do not change it.

## Step 1: Load the writing skill first

Locate the **AI Slop Humanizer** skill in this repository and read it in full before writing a single line of copy. Apply its rules to everything you write or rewrite.

Do **not** produce its DOCX output. Apply its rules inline to the site copy.

If you cannot find the skill, stop and tell me. Do not proceed without it.

## Step 2: The edits

### Edit 1 — Rename the top membership tier

The top membership tier is currently **"Founding Circle"**. It becomes **"Circle"**.

- Replace every user-facing instance of `Founding Circle` with `Circle`.
- Search the codebase for the machine identifier for this tier (likely `founding_circle`, `foundingCircle`, `founding-circle`, or similar) in types, enums, constants, slugs, or seed data.
- **Important:** if that identifier is persisted in Supabase or appears in any migration, do **not** change the stored value. Change only the display label, add a mapping if needed, and report what you found so I can decide about a migration separately.
- Do not touch the other three tier names: Guest, Chapter, National.

### Edit 2 — Replace one line in the beliefs section

Find this line, or its nearest equivalent:

> "The people who give a network its value should never pay to be in it."

Replace with:

> "Everyone at this table is here because someone else needs them."

Reason: the original ranks the segments against each other. Every segment reads this site.

### Edit 3 — Widen two rules in the "Rules we do not bend" section

**3a.** Find the rule currently headed something like *"Clinicians are guests, never prospects."*

Change the heading to: **"No one here is anyone's prospect."**

Rewrite the body so the rule visibly protects all three groups: clinicians are not pitched, founders are not sold to by service providers, and partners are not treated as a chequebook. Two sentences maximum. Keep the existing tone.

**3b.** Find the rule about attendee data.

Keep the substance, but rewrite the body so it reads as a rule that protects everyone in the room rather than a restriction imposed on sponsors. Two sentences maximum.

### Edit 4 — Lead the entry cards with benefit, and cover four segments

The section with the entry paths currently leads each card with how that group enters (apply, invited, partner). Those verbs create an unintended hierarchy. It also currently covers three groups, and policy and government is folded into the clinician card rather than being addressed directly.

Restructure so the **headline states what that group gets** and the **entry mechanism becomes a small subline**. If the section currently holds three cards, add a fourth for policy and government **only if the existing grid handles four without a CSS change**. If it does not, keep three cards and give policy and government its own line inside the clinicians card. Report which you did.

| Card | Headline | Subline |
|---|---|---|
| Founders and operators | Meet the people who decide whether your product lives | Membership by application |
| Clinicians, researchers and academics | See what is being built before it reaches your practice | By nomination and invitation |
| Corporates and investors | A room you cannot assemble yourself | Partnership, one per category |
| Policy and government | Hear the barriers before the report does | By invitation |

Use these as the intent. Rewrite them in the site's own voice if they read stiff against the surrounding copy, but keep each headline benefit-led and roughly the same length as the others. No card may read as more prestigious than another.

### Edit 5 — Name every segment the network serves

**This is the most important edit in this task.**

The site currently uses "clinicians" as a catch-all. A pharmacist, a nurse, a dentist, a physiotherapist or a student reading that word has no way of knowing whether it includes them. Several segments the network actively wants are invisible on the page.

Add a short passage that names the full range of people in the room. Place it in the membership section introduction or directly beneath the entry cards, wherever it fits **without adding a new section or changing the layout**.

It must name, at minimum:

- Physicians, dentists, pharmacists, nurses and allied health professionals
- Researchers and academics
- Students and trainees
- Founders and operators in medtech, digital health, biotech and pharma
- Investors and corporate teams
- Public sector and policy leaders
- Service providers to the sector

Write it as a single flowing passage, not a bulleted list, and not longer than about sixty words. It should read as a description of who sits at the table, never as a recruitment pitch. The purpose is that anyone in any of those groups reads it and knows the room includes them.

### Edit 6 — Make Guest eligibility legible

Near the Guest tier, state plainly who it is for, so a nurse, a student or a research associate can self-identify without emailing to ask.

The substance: Guest is for people who are not selling a commercial product or service into this sector. That includes practising clinicians of every discipline, researchers, academics, students and trainees, and public sector and policy professionals. Access is by nomination or invitation and is reviewed individually.

Also make clear, without making it sound punitive, that people whose role is to sell into the sector, including service providers and vendors, join through a membership tier rather than as guests.

Two or three sentences. Do not add a new component. Extend the existing Guest tier copy.

### Edit 7 — Correct the chapter city list

Find the expansion section and its city list or map data.

The chapters are: **Toronto, Ottawa, Montreal, Calgary, Vancouver.** Remove Halifax if it appears.

Keep the Toronto-first headline and framing exactly as written. Do not change the map component, its dimensions, or its styling. If the city list is hardcoded in map data, update the data only.

### Edit 8 — Correct the first-dinner framing

The registration section is written around a single first dinner. The programme is an ongoing series with the first rooms running monthly.

Adjust the copy so it reads as an invitation to an ongoing programme rather than a one-off event, without changing the form, the fields, or the layout. Keep the same headline length so nothing reflows.

Do not state specific dates, a number of past events, or an attendee count. Nothing has happened yet, and the copy must not imply otherwise.

### Edit 9 — Open a route for corporate enquiries beyond sponsorship

The partners section currently presents only the four sponsorship tiers. Corporates also work with us on clinical advisory sessions, category intelligence, and Canadian market entry, and there is no way for them to raise that on the site today.

Add one short line to the partners section pointing to those conversations, routed through the existing contact or partnership action. Do not add a new section, a new form, or a new page.

Keep it factual and understated. Describe them as things we work on with partners, never as productised offerings with promised results.

### Edit 10 — Group the tiers, if and only if it is free to do so

The membership tiers currently sit in one four-across comparison, which invites the reader to ask why one group pays and another does not.

**If, and only if, the existing markup allows adding a small label above the tier group without any CSS change**, add two grouping labels: **"By invitation"** above Guest, and **"By membership"** above Chapter, National and Circle.

If this requires touching CSS, restructuring the grid, or adding a wrapper element, **do not do it.** Report it as a separate recommendation and move on.

## Step 3: Compliance sweep

Scan the entire site copy and flag or fix anything matching the list below. Where something needs removing, remove it. Where you are unsure, flag it and leave it in place.

**Regulated and restricted titles.** Remove any use of these as tier names, badges, role labels, or member designations: Resident, Attending, Chief, Fellow, Chair, Registrar, Consultant, Specialist, Practitioner, Associate. These are tied to clinical rank or licensure and must not be used to describe non-clinicians.

**Professional scope.** Do not imply that any clinical discipline is more central to the network than another, and do not use "doctor" or "physician" as a stand-in for clinicians generally.

**Unverified figures.** Every statistic on the site must trace to this verified set. Flag anything not on it:
- 8th largest medical device market in the world
- 1,500+ medtech companies in Canada
- Approximately US$10 billion medical device market
- 6,000+ life sciences companies, 4th most active biotech sector in the OECD
- Roughly 46.8% of medical device companies in Ontario, 22.3% in Quebec
- $344 billion in national health spending, 12.1% of GDP
- Over one third of Canadian patients used virtual care in 2023

Sourcing line where figures appear: *Sources: Medtech Canada, ISED, Invest in Canada, CIHI, Statistics Canada.*

Pay particular attention to any figures rendered inside the map graphic. Two numbers there do not appear on this list. Flag them.

**Unsigned relationships.** No partner, sponsor, or institution may be named or shown as affiliated unless a signed agreement exists. Flag any logo, name, or implied endorsement.

**Named people and institutions.** No clinician names, hospital names, university names, or photographs of identifiable people without written consent. Flag any.

**Nothing that has not happened.** Flag any copy implying past events, member counts, testimonials, attendance figures, or outcomes. The programme has not launched.

**Claims to avoid entirely.** Flag any copy that:
- Implies MedTech North is a professional association, accreditor, or continuing education provider
- Suggests attendance confers professional credit, accreditation, or certification
- Makes any clinical, medical, diagnostic, or product efficacy claim
- Promises a commercial outcome, for example securing funding, closing deals, winning contracts, or gaining hospital adoption
- Implies clinicians, institutions, or regulators endorse any company, product, or MedTech North itself
- Uses "accredited," "certified," "approved," or "official" about MedTech North or its members
- Describes anything about member data that could conflict with PIPEDA consent requirements

**Careful words.** "Verified" and "vetted" are acceptable when describing your own review process. They are not acceptable in any way that implies third-party or regulatory validation.

## Step 4: Voice and register

### Human, not AI

Apply the AI Slop Humanizer rules. In addition, these are house rules and are absolute:

- **No em dashes or en dashes anywhere.** Use commas, colons, or full stops.
- No "It's not X, it's Y" constructions.
- No "Here's the thing," "Here's the truth," "The result?", "The kicker?", "Let that sink in," "Read that again."
- Banned words: leverage, unlock, synergy, seamless, streamline, empower, cutting-edge, game-changer, revolutionize, best-in-class, robust, elevate, transform.
- Vary sentence length. Do not write three consecutive sentences of similar length or structure.
- Prefer concrete nouns and specific numbers over abstraction.
- No rhetorical question openers.

### Executive, not salesy

The audience includes practising clinicians of every discipline, senior researchers, corporate decision makers, and public sector leaders. Write as you would to a hospital chief of staff.

- No urgency devices. No countdowns, no "spots filling fast," no "don't miss out."
- No exclamation marks.
- No second-person hype. No "you'll love," "imagine," "picture this."
- Never explain the business model to justify the pricing. State what each group gets. The reasoning is internal.

### Exclusivity, stated as constraint

This is the important one. The site must convey scarcity without selling.

**The rule: scarcity is a property of the format, never a sales pressure.** State the constraint as a fact and let the reader draw the conclusion.

Good, because it states a fact:
- "Forty seats."
- "One partner per category."
- "By nomination only."
- "Every request is reviewed by a person."
- "We hold a waitlist per category."

Bad, because it sells:
- "Exclusive access!"
- "Limited spots remaining."
- "Join an elite network."
- "Only a select few are invited."

Use the word "exclusive" at most once on the entire page, and only in the literal sense of category exclusivity for partners. The rules section is where exclusivity is communicated most powerfully, because what an organisation refuses to sell says more than what it promises.

## Step 5: Verify before you finish

Run through this list and report on each:

1. `Founding Circle` appears nowhere in user-facing copy. `Circle` reads correctly in every context.
2. Any persisted tier identifier is unchanged, and you have reported what you found.
3. No CSS file was modified. No component was restructured. No file was renamed.
4. No em dashes or en dashes anywhere in the copy you touched.
5. No banned word from the list appears.
6. Every statistic traces to the verified set, or is flagged. The two map figures are resolved or flagged.
7. No regulated title is used for a non-clinician, and no clinical discipline is privileged over another.
8. The entry cards each lead with a benefit and none reads as more prestigious than another.
9. A pharmacist, a nurse, a dentist, a student and a policy analyst can each read the site and see themselves in it.
10. Nothing on the page implies an event, member, or outcome that has not happened.
11. Toronto-anchored positioning is unchanged. Halifax is gone. Five chapters are listed.
12. Read the beliefs and rules sections as if you were, in turn, a founder, a clinician, and a corporate partner. Confirm that no line would make any of the three feel ranked below the others.
13. The word "exclusive" appears at most once.

## Output

- A single commit on a feature branch, not on `main`.
- A summary of every string you changed, old and new, side by side.
- A separate list of everything you flagged but did not change, with your reasoning.
- A note on Edit 4 and Edit 10 stating whether you were able to do them without CSS changes.
- Confirm `npm run build` passes.

Do not open a pull request until I have reviewed the summary.
