# Agent Primer — read before doing anything

You are working on **MedTech North**, a curated network for Canadian health innovation. This file gives you the context and the rules. Read `HANDOFF.md` next for current state.

---

## The project in six lines

Canada is the 8th largest medical device market in the world and a new device still takes over a year to reach a Canadian patient. That is a proximity problem, not an invention problem. MedTech North convenes four groups in small invitation-only rooms so the right people meet early enough for it to matter. Clinicians and researchers attend free, permanently. Founders join by application. Corporates pay for structured access to insight and input, privately, never on the website. Two rooms have been held, both commissioned by Miro.

---

## Hard rules — violating any of these means the work gets reverted

### 1. Never charge the scarce side
Clinicians, researchers, academics, students and public sector leaders attend at no cost, in every phase, permanently. This is not a launch promotion. Charging them collapses the asset every other revenue line depends on.

### 2. No sponsorship language in public
Sponsor, sponsorship, partner tier, anchor, category-exclusive, exhibitor, underwriter, booth, media rights, lead access. None of these appear on the website, in social content, in event material, or in anything a member reads. Monetisation lives in private documents shared on calls.

### 3. No claims of a track record
Two rooms have happened, the first with 16 people. Never write or imply member counts, attendee totals, past-event galleries, logos, endorsements, or live-looking counters. Public testimonials and a client name now exist and are usable in **private** material once permission is held. Neither goes on the site without its own ADR. See `data/verified-stats.md`.

### 4. Every figure must trace to `data/verified-stats.md`
No exceptions. If a number is not on that list, it does not ship. Note which figures carry age warnings.

### 5. No regulated professional titles for non-holders
Never use as a tier name, badge, role label or member designation: Resident, Attending, Chief, Fellow, Chair, Registrar, Consultant, Specialist, Practitioner, Associate. These are tied to clinical rank or licensure.

### 6. No segment ranked above another
Every ICP reads the same site. Never describe one group as the value creators and another as value capturers. That reasoning is internal and stays internal.

### 7. Never imply accreditation or outcomes
No professional credit, certification, endorsement, or promised commercial results.

---

## Writing rules

Apply the `ai-slop-humanizer` skill to any public-facing copy. In addition, these are absolute:

- **No em dashes or en dashes.** Commas, colons, full stops.
- No "It's not X, it's Y" constructions.
- No "Here's the thing", "The result?", "Let that sink in", "Read that again".
- Banned words: leverage, unlock, synergy, seamless, streamline, empower, cutting-edge, game-changer, revolutionize, best-in-class, robust, elevate, transform, landscape, foster.
- Vary sentence length deliberately. Never three consecutive sentences of similar structure.
- No exclamation marks. No urgency devices. No second-person hype.
- Scarcity is stated as a property of the format, never as pressure. "Small rooms, by nomination" works. "Limited spots" does not.
- The word "exclusive" appears at most once on any page, and only in the literal sense of category exclusivity.

Register is **executive**. Write as you would to a hospital chief of staff.

---

## Technical context

**Repo:** `Fit137/MedTechNorthlandingpage`. Next.js 14.2.35, React 18.3.1, TypeScript, App Router, CSS Modules with `--mn-*` tokens, Supabase (Postgres + RLS + Storage), Resend, HubSpot, Vercel with auto-deploy from `main`.

**Tokens:** `--mn-red: #c41230` (the ask — actions only), `--mn-ink: #16191d` (the argument). Verify others in `globals.css`.

**The site is live and has visitors.** Never push to `main`. Never modify a production route without explicit approval. Work on feature branches and review on preview URLs.

**Outstanding blocker:** migration `0007_expand_member_metadata.sql` has not been run in Supabase.

---

## Where to find things

| Question | File |
|---|---|
| How does the business work? | `docs/01-business-model.md` |
| What figures can I cite? | `data/verified-stats.md` |
| Who is in the room? | `docs/03-icp-and-segments.md` |
| What do things cost? | `docs/04-membership-pricing.md` |
| How does it make money? | `docs/05-monetization.md` |
| What is the primary commercial line? | `docs/12-convening-as-a-service.md` |
| How do I design a room around a buyer? | `docs/13-buyer-led-room-design.md` |
| Who do we sell to, and how? | `docs/11-corporate-outreach.md` |
| Which companies specifically? | `data/corporate-targets.md` |
| What are the unit economics? | `docs/06-financial-model.md` |
| How should I write? | `docs/07-brand-and-voice.md` |
| What can we legally claim? | `docs/08-legal-and-compliance.md` |
| Why was X decided? | `decisions/` |
| What is the site copy? | `assets/website/sitemap-and-content.md` |
| What happened at the first event? | `data/events/2026-07-29-patient-journey-jam.md` |

---

## Before you start any task

1. Read `HANDOFF.md` for current state.
2. Check `decisions/` for whether your area has a settled decision.
3. If you are writing public copy, read `docs/07-brand-and-voice.md`.
4. If you are touching the repo, read the production safety rules in `prompts/claude-code/`.
5. If your task changes something durable, add an ADR.
