# Handoff — Current State

**Last updated:** 2026-08-21

---

## Where things stand

**Corrected 2 August 2026.** The previous entry said one room had been held and nothing had been sold. Both were understated.

**Two rooms have been held, and both were commissioned by Miro**, who engaged the founder to convene attendees and run workshops on the Miro product. Room two was steered toward healthcare. Miro's official brand account endorsed the output publicly. Four attendees posted public, attributable LinkedIn testimonials under their own names, including a professor at McMaster University. Outreach across both rooms produced a self-reported ~70% positive reply rate, with volume deliberately held back by the condo's capacity rather than by demand.

**Miro co-hosted both rooms, paid, and endorsed the output publicly.** That is the co-host product, sold and delivered twice, which is exactly what `docs/16-product-architecture.md` now prices at the top of the ladder.

Room 001 was go-to-market themed rather than healthcare. Room 002 was the patient journey map. **Three physicians accepted for room 002 and all three no-showed on the day.** What is unproven is convening a **single named specialty** at volume.

The site is live. No entity has been incorporated for MedTech North specifically.

The strategic question was resolved in late July: the room that actually assembles is dentists, clinical pharmacists, physiotherapists and researchers, not physicians. Rather than chase physicians, the plan monetises the room that exists, and lets that fund physician recruitment later. See `decisions/ADR-012`.

---

## The current push: a hosted day of rooms, 12 November 2026

**Decided 21 August 2026.** The goal is a large event in Canada before December, national reach, and a US inbound line, with cold outreach scaled against all three. `ADR-025` sets the shape: **six to eight composed rooms in one hosted building on one day, no room over 35, and no fixed cost committed before a host agreement is signed.** This is not a summit and `ADR-018` is not reversed.

**Three asks, split, run at different speeds.** Venue host gives a building and receives media and presence, no money in either direction, 2 to 4 weeks to yes. Room funder pays $7,500 to $25,000 for a composed room. Co-host does both and is the slowest. Bundling them lets the slowest set the date.

**The city is an output of the campaign, not an input.** The host campaign runs in every corridor at once. No host is signed in any city until 12 practising clinicians there have replied positively.

**Hard gate: a host agreement signed by 30 September 2026**, or the day moves to Q1 2027 and November becomes a single room in the GTA.

**Room 003 on 26 August is the asset shoot for the whole host campaign.** The consideration offered to a host is media and there is no sample reel. A two minute cut plus verticals is needed by 2 September.

| What | Where |
|---|---|
| Which beliefs would end the business if wrong | `docs/18-hypothesis-risk-and-falsification.md` |
| Why an organisation hosts for free, and what media is worth | `docs/19-host-incentives-and-the-media-floor.md` |
| Six campaigns, kill numbers, CASL architecture, critical path | `docs/20-outreach-campaign-sequence.md` |
| Named Canada-wide host candidates by archetype | `data/venue-host-targets.md` |
| Send-ready copy | `assets/outreach/value-propositions/venue-host-institutional.md`, `corporate-room-funder.md` |
| Decisions | `ADR-025`, `ADR-026` |

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
| **Room 003** | **Scheduled and published.** Wednesday 26 August 2026, 6:30 to 9:00 pm, Mississauga. Live on Luma as "The MedTech North Table", the first room on MedTech North's own theme rather than a co-host's. Format is On Record (`ADR-023`). Copy, outreach ladder and social kit in `assets/events/room-003-long-table-kit.md` | Not filled yet. Production quotes not obtained, sample footage not shot, per-college advertising rules not checked |
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

**Reordered 21 August 2026 against the 12 November date.** Items 1 to 7 are the week that gates everything else. See `docs/20-outreach-campaign-sequence.md` section 2.

1. **Register the business name** ($60). Now on the critical path for outreach as well as invoicing: CASL requires a valid mailing address and sender identification in every message.
2. **Get CGL insurance quotes and bind.** Longest lead time on the page, and a facilities team asks for a certificate before it gives a date.
3. **Ask Miro for written permission to name them as a reference**, with a two-line quote. Still the highest-value hour available, and every campaign is weaker without it. `ADR-017`.
4. **Reconstruct the outreach funnel from the actual send records.** Every kill number in the campaign plan is meaningless without this baseline, and the ~70% figure cannot go in front of a buyer until it is a table.
5. **Shoot room 003 properly on 26 August.** It is the asset shoot for the host campaign. Two minute reel plus three verticals by 2 September. Get two production quotes at the same time.
6. **Ask both rooms two questions:** which organisation should be in this room, and whose building should we use. Free, and the second half is aimed straight at campaign 1.
7. **Write the one-page host agreement and one-page funder agreement.** Their legal drafting from scratch costs weeks we do not have before 30 September.
8. **Launch campaign 1, the building**, at low volume immediately and full volume from 2 September. 60 qualified sends by 11 September.
9. **Launch campaign 2, the convener premise**, in parallel. 80 sends over four weeks. It tests the founding assumption and it costs nothing to run alongside.
10. **Ask the four public testimonial authors for permission to quote them** in private material. Courtesy, and it returns nominations.
11. **Campaign 3, composition against exposure**, from week 3. Same price both arms, random assignment fixed before sending.
12. **Campaign 4, rooms inside the day**, once a host and a date exist. Two sold by 15 October or the day runs at reduced scale.
13. **Campaign 6, the clinician side**, instrumented from message one, in whichever city the host campaign chose. This is the gate on everything sold in 3, 4 and 5.
14. **Log event 002.** Date, attendance, composition, what was bought and what was delivered.
15. **Run migration 0007** in Supabase. Unblocks the platform, does not block the event.
16. **Interview 8 to 12 clinicians** for the insight brief, with the two buyer-discovery questions added.
17. **Approach the condo board in writing** for amenity permission.

The vendor readiness pack (items 1, 2 and 7, plus the incorporation decision and a composition report template) is roughly $400 plus an insurance premium and it is the highest-return week available. A verbal yes is not cash until it exists, and a donated building is not a booking until there is a certificate of insurance.

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
