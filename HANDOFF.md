# Handoff — Current State

**Last updated:** 2026-07-30

---

## Where things stand

One room has been held. The site is live. Nothing has been sold. No entity has been incorporated for MedTech North specifically.

The strategic question was resolved in late July: the room that actually assembles is dentists, clinical pharmacists, physiotherapists and researchers, not physicians. Rather than chase physicians, the plan monetises the room that exists, and lets that fund physician recruitment later. See `decisions/ADR-012`.

---

## Done

| Area | State |
|---|---|
| Business model | Designed and documented. Hybrid membership plus corporate revenue |
| Market argument | Researched, sourced, verified. See `data/verified-stats.md` |
| ICP definition | Four groups with full sub-segments |
| Membership pricing | Complete: tiers, rate card, savings scenarios, tax treatment |
| Financial model | Built as XLSX with 11 tabs and 246 live formulas. Unit economics, capacity ceiling, 3-year build, scenarios, sensitivity, risk register |
| Website v1 | Live. Next.js on Vercel with Supabase, member directory, admin panel, invite-gated apply flow |
| Website v2 spec | Content, design brief and build prompt written. Not yet built |
| Brand voice | Codified |
| Launch social campaign | 12 assets specified |
| Keynote | "The Room", 18 minutes, six-phase package |
| Printables and merch | 41 items specified with print specs |
| Investor deck | Slide content, design instructions, ROI calculator HTML |
| First event | Held 29 July 2026, 16 attendees |
| Miro boards | Business model board, event presentation board |

## Not done

| Area | State | Blocker |
|---|---|---|
| **Supabase migration 0007** | Not run | Manual step in Supabase SQL editor. Blocks new-column saves and pitch uploads |
| **Incorporation** | Not started | Decision on timing. See `docs/08-legal-and-compliance.md` |
| **Business name registration** | Not done | $60, Ontario Business Registry |
| **Commercial general liability insurance** | Not obtained | Highest-priority unmitigated risk |
| **Condo amenity written permission** | Not requested | Assumption only that commercial use is prohibited |
| **First revenue** | None | Insight brief is the fastest path |
| **Website v2** | Specified, not built | Prompts ready in `prompts/claude-code/` |
| **Second event** | Not scheduled | Venue is booked monthly for nine months |
| **Physician recruitment** | Zero MDs to date | Two documented dropouts, both structural |
| **Sponsorship** | No conversations started | Deliberately sequenced after proof |
| **Trademark** | Not filed | ~$640 CIPO fees. Wait until after incorporation |

---

## Next actions, in order

1. **Run migration 0007** in Supabase. Unblocks the platform.
2. **Get CGL insurance quotes.** Longest lead time, real exposure, required by external venues and corporate procurement.
3. **Register the business name** ($60).
4. **Interview 8 to 12 clinicians from the first room** for the insight brief. This is the only product sellable before anything else exists, and the raw material is already in the network.
5. **Approach the condo board in writing** for amenity permission, from a position of transparency.
6. **Schedule room 2** using the booked venue.
7. **Approach five buyers** with the insight brief concept.

---

## Open questions

| Question | Why it matters | Who decides |
|---|---|---|
| Incorporate now or after first revenue? | Liability exposure vs cost and admin overhead | Ali, with an accountant |
| Does the condo amenity agreement actually prohibit this? | Nine months of programming depend on it | Read the declaration, then a condo lawyer |
| Publish pricing on the website or keep it behind application? | Reverses a founding principle of the page | Ali |
| Three.js or CSS 3D for the site's signature object? | Two physics systems in one site is a defect | Whoever builds website v2 |
| Is the 76% procurement figure still usable? | It is from a 2016 CAHO survey and it is load-bearing in the pitch | Find a newer source or always date it aloud |
| What is the real price for a corporate convening engagement? | Current $20K assumption is probably low | Ask three buyers what they spent last year |

---

## Known risks

**High severity, from the financial model risk register:**

- Retention is entirely unproven. Every LTV figure is a projection.
- Summit revenue is the weakest line in the model, resting on one blended assumption.
- Sponsor attach rate must reach 80% by year two or the dinner programme becomes a real cost.
- Capacity ceiling misread as a growth problem leads to selling into a full chapter, which destroys composition.
- Guest supply. If guests stop coming, paying members leave.
- Founder concentration. Curation, seating, introductions and selling all sit with one person.

**Operational:**

- The condo venue repels physicians. It cost a confirmed speaker. It is free and booked for nine months, so the plan uses it for unsponsored rooms only.
- No insurance in force while events are running.
