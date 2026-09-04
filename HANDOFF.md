# Handoff — Current State

**Last updated:** 2026-08-22

---

## Where things stand

**Corrected 2 August 2026.** The previous entry said one room had been held and nothing had been sold. Both were understated.

**Two rooms have been held, and both were commissioned by Miro**, who engaged the founder to convene attendees and run workshops on the Miro product. Room two was steered toward healthcare. Miro's official brand account endorsed the output publicly. Four attendees posted public, attributable LinkedIn testimonials under their own names, including a professor at McMaster University. Outreach across both rooms produced a self-reported ~70% positive reply rate, with volume deliberately held back by the condo's capacity rather than by demand.

**Miro co-hosted both rooms, paid, and endorsed the output publicly.** That is the co-host product, sold and delivered twice, which is exactly what `docs/16-product-architecture.md` now prices at the top of the ladder.

Room 001 was go-to-market themed rather than healthcare. Room 002 was the patient journey map. **Three physicians accepted for room 002 and all three no-showed on the day.** What is unproven is convening a **single named specialty** at volume.

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
| **Room 003** | **Cancelled 22 August 2026, four days out.** Confirmations arrived late, confirmed guests withdrew, and the expected show rate on a free evening put the real table far below what the venue is set for. Cancelled outright with no replacement date, and **the free mixed open-registration table is retired**, per `ADR-025`. Guest messages in `assets/events/room-003-cancellation-kit.md`. `assets/events/room-003-long-table-kit.md` is now historical | Free is reserved for a CEO and owner-operator table, which needs its own ADR. Ticketing now extends to everyone: `ADR-026` supersedes `ADR-002`. Guest ticket price not set. Room 003 attendance record not yet logged in `data/` |
| **Build North, Session #3** | **Scheduled for Wednesday 16 September 2026, 6:00 to 9:00 pm. Not published.** The first ticketed room, implementing `ADR-026`, and **the first room that is not a dinner. What it sells is recognition.** Every one of the twenty seats gets three minutes on a stage to answer one question, what are you building and why did you decide to build it here, then the rest of the evening is a celebration with food and drinks. Published price ladder, $20 for the first ten seats, $40 for the next five, $60 for the last five, plus four service provider seats at $150. Published as Session #3 rather than Table #3, since Table reads as a dinner. Full kit in `assets/events/build-north-2026-09-16-kit.md`, decision in `ADR-027` | Three conditions before it publishes. **Venue, and money can no longer solve it:** a ticketed event in a residential amenity room, no written permission, no CGL insurance, and at $700 gross the room cannot buy its way into a restaurant. A borrowed seminar room, hospital innovation office or incubator is the recommended route. **No testimonials or past-event footage** on the page until permission is held and an ADR exists. **Go or move decision on Monday 8 September** if fewer than ten seats have sold |
| **Pricing reversal migration** | **Decided 22 August 2026. `ADR-026` supersedes `ADR-002`: every seat is ticketed unless a co-host funds the room.** Primer, README, glossary, `ADR-002`, `ADR-019`, `ADR-023`, `ADR-024`, `docs/01`, `docs/03` all updated | Not done: guest ticket price, `docs/04` Guest tier, `docs/05`, the `docs/06` XLSX and its 246 formulas, `docs/14`, `docs/17`, investor and partner decks, and **the live website, which needs explicit approval before any copy changes**. Banners added to the stale docs |
| **Physician recruitment** | Zero MDs to date | Two documented dropouts, both structural |
| **Corporate outreach** | Strategy, firmographic screen and named target list written. No conversations started | Vendor readiness pack. See `docs/11-corporate-outreach.md` and `ADR-015` |
| **Miro reference permission** | Not requested | Closing act on a finished engagement. No further Miro rooms are pursued: healthcare is not their ICP and the annual budget is spent. See `ADR-017` |
| **Co-host list** | Profile and named list written, not researched at volume | Run the Perplexity prompts in `prompts/research/cohost-discovery.md`. See `data/cohost-targets.md` |
| **Testimonial quote permission** | Not requested | Four public LinkedIn testimonials exist. Public already, so this is courtesy, but it must be held before quoting |
| **Outreach funnel table** | Anecdote only | The ~70% figure is recoverable from LinkedIn and email send records in a few hours. It is the most persuasive asset available and it is currently unauditable |
| **Event 002 log** | Not written | No date, attendance or composition recorded anywhere |
| **Monthly room series** | Two held, only one logged | **These are the Miro rooms, not a separate stream.** A recurring monthly series, roughly 30 people, mixed. Miro co-hosted both. Room 002 still needs an event file |
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
