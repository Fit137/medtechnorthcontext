# Handoff — Current State

**Last updated:** 2026-07-30

---

## Where things stand

**Corrected 2 August 2026.** The previous entry said one room had been held and nothing had been sold. Both were understated.

**Two rooms have been held, and both were commissioned by Miro**, who engaged the founder to convene attendees and run workshops on the Miro product. Room two was steered toward healthcare. Miro's official brand account endorsed the output publicly. Four attendees posted public, attributable LinkedIn testimonials under their own names, including a professor at McMaster University. Outreach across both rooms produced a self-reported ~70% positive reply rate, with volume deliberately held back by the condo's capacity rather than by demand.

Convening as a service is therefore proven and has a paying client. What is unproven is convening a **single named specialty** at volume, and physicians remain the one segment showing resistance.

The site is live. No entity has been incorporated for MedTech North specifically.

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
| Second event | Held. Steered toward healthcare. **Details not yet logged. Needs an event file** |
| Convening as a service | **Proven and commissioned.** Miro engaged the founder for both rooms |
| Testimonials | **Four public, attributable LinkedIn testimonials exist.** Written permission to quote not yet requested |
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
| **Corporate outreach** | Strategy, firmographic screen and named target list written. No conversations started | Vendor readiness pack. See `docs/11-corporate-outreach.md` and `ADR-015` |
| **Miro reference permission** | Not requested | Closing act on a finished engagement. No further Miro rooms are pursued: healthcare is not their ICP and the annual budget is spent. See `ADR-017` |
| **Co-host list** | Profile and named list written, not researched at volume | Run the Perplexity prompts in `prompts/research/cohost-discovery.md`. See `data/cohost-targets.md` |
| **Testimonial quote permission** | Not requested | Four public LinkedIn testimonials exist. Public already, so this is courtesy, but it must be held before quoting |
| **Outreach funnel table** | Anecdote only | The ~70% figure is recoverable from LinkedIn and email send records in a few hours. It is the most persuasive asset available and it is currently unauditable |
| **Event 002 log** | Not written | No date, attendance or composition recorded anywhere |
| **Monthly meetup stream** | **Not logged at all** | Running monthly in the GTA, ~30 people, reportedly including physicians. Contradicts the zero-physician record. Log these as events before any figure is used with a buyer |
| **Per-specialty convening at volume** | Unproven | Both rooms were mixed. A single-specialty room has not been run. Room three is the test |
| **Trademark** | Not filed | ~$640 CIPO fees. Wait until after incorporation |

---

## Next actions, in order

1. **Ask Miro for written permission to name them as a reference**, ideally with a two-line quote. Highest-value hour available. Miro is a reference, not a future client: healthcare is not their ICP and their annual budget for these rooms is spent. See `ADR-017`.
2. **Build the co-host list.** Run the Perplexity prompts in `prompts/research/cohost-discovery.md`, score the output, work Mississauga and the GTA first. See `data/cohost-targets.md`.
3. **Reconstruct the outreach funnel** from the actual send records for both rooms. Converts the ~70% claim from an anecdote into an auditable table.
4. **Ask the four public testimonial authors** for permission to quote them in private material. Courtesy, not necessity, and it returns nominations.
5. **Register the business name** ($60). Without it there is no invoice carrying a GST/HST number, and corporate accounts payable bounces it.
6. **Get CGL insurance quotes.** Longest lead time, real exposure, required by external venues and corporate procurement.
7. **Log event 002.** Date, attendance, composition, what Miro bought and what was delivered.
8. **Run migration 0007** in Supabase. Unblocks the platform.
9. **Ask both rooms "which company should be in this room?"** Highest-converting outreach channel available and it costs nothing. See `docs/10-growth-flywheel.md`.
10. **Interview 8 to 12 clinicians** for the insight brief, with the two buyer-discovery questions added. Fastest cash in the business and it attaches to every other product.
11. **Approach the condo board in writing** for amenity permission, from a position of transparency.
12. **Schedule room 3 as a named single-specialty room**, with the outreach funnel instrumented from the first message. Specialty convening at volume is still the untested claim.
13. **Work the target lists.** Co-host prospects first, then Tier A. See `docs/12-convening-as-a-service.md` and `data/corporate-targets.md`.

The vendor readiness pack (items 5 and 6, plus the incorporation decision, a one-page agreement and a composition report template) is roughly $400 plus an insurance premium and is the highest-return week available. A verbal yes is not cash until it exists.

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
