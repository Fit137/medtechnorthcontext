# MedTech North — Context Repository

The single source of truth for MedTech North. Built so any agent or collaborator can pick up the project cold and be useful within one read.

**What MedTech North is:** a curated network for Canadian health innovation. Small, invitation-only rooms convening four groups — clinicians and researchers, founders and operators, capital and corporate, policy and government — anchored in the Greater Toronto Area.

**Status as of 2026-07-30:** one room held (16 attendees, 29 July 2026). Live marketing site with member directory. Pre-revenue. Pre-incorporation.

---

## How to use this repo

**If you are an AI agent:** read `CLAUDE.md` first. It is the context primer and tells you the rules that govern this project.

**If you are a human picking this up:** read `HANDOFF.md`. It states exactly where things stand, what is done, what is not, and what happens next.

**If you need a specific answer**, use the map below.

---

## Repository map

```
├── README.md               you are here
├── CLAUDE.md               agent primer — read this first
├── HANDOFF.md              current state, next actions, open questions
│
├── docs/                   the knowledge base
│   ├── 01-business-model.md        how the thing works and earns
│   ├── 02-market-context.md        the argument, with sourced figures
│   ├── 03-icp-and-segments.md      who is in the room, in full
│   ├── 04-membership-pricing.md    tiers, rate card, savings scenarios
│   ├── 05-monetization.md          corporate revenue products, scored
│   ├── 06-financial-model.md       unit economics and the capacity ceiling
│   ├── 07-brand-and-voice.md       writing rules, register, forbidden words
│   ├── 08-legal-and-compliance.md  entity, tax, insurance, regulated claims
│   ├── 09-operations.md            venues, formats, event mechanics
│   └── 10-growth-flywheel.md       how the network compounds
│
├── decisions/              14 ADRs — what was decided and why
│
├── data/
│   ├── verified-stats.md           the only figures cleared for public use
│   ├── competitors.md              6-org landscape and feature matrix
│   └── events/                     one file per room held
│
├── assets/
│   ├── website/                    sitemap, content, design brief
│   ├── design/                     investor deck, ROI calculator, printables
│   ├── social/                     launch campaign
│   ├── speaking/                   the keynote
│   ├── pricing-model.xlsx          83 live formulas
│   └── financial-model.xlsx        246 live formulas
│
├── prompts/
│   ├── claude-code/                4 build prompts, staged and gated
│   └── claude-design/              2 design prompts
│
├── GLOSSARY.md             terms with specific meanings here
└── CONTRIBUTING.md         how to keep this repo current
```

---

## The five things that matter most

1. **Free seats are funded seats.** Every seat has a price and the only question is who pays it. Guests sit free when a co-host has paid the convening fee up front, and buy a ticket otherwise. See `ADR-026`, which supersedes `ADR-002`.
2. **Each chapter has a hard membership ceiling of about 35 paying members** at quarterly cadence. Growth comes from more cities and more evenings, never from selling harder into a full room.
3. **Membership is under 30% of revenue at every stage.** Corporate engagements and sponsorship carry the business. Membership exists to make composition provable.
4. **No sponsorship language appears anywhere public.** Monetisation happens in private documents and calls.
5. **One room has happened.** Nothing may claim a track record.

---

## Conventions

- All currency CAD, exclusive of GST/HST/QST unless stated.
- Figures in `data/verified-stats.md` are the only ones cleared for public use.
- Decisions are recorded as ADRs in `decisions/`. Supersede rather than edit.
- Anything marked ASSUMPTION has not been validated. Anything marked VERIFIED has a source.
