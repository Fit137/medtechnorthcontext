# Person Schema: What We Want to Know, and Why

> **INTERNAL.** Companion to `schema.md` (companies) and `positions.md` (which title to target). Source of truth is `people.csv`.

**LinkedIn URL is the primary key.** Names collide, emails change, titles change. The profile URL is the one stable identifier, and it is also the only field that lets a second pass update a person rather than duplicate them.

---

## The principle

Every field below has to answer one of three questions. If it answers none, do not collect it.

1. **Can this person say yes?** Authority.
2. **Why would they care this month?** Timing.
3. **What do I open with?** The proof point.

Anything else is data you will pay to store and never use.

---

## Block 1. Identity and reach

| Field | Values | Notes |
|---|---|---|
| `linkedin_url` | URL | **Primary key.** Normalise to `linkedin.com/in/slug`, strip query strings |
| `full_name` | | |
| `first_name` | | For the greeting. Watch for preferred names in the headline |
| `title` | Exact current title | Verbatim, not summarised |
| `company_id` | FK to `companies.csv` | |
| `city`, `country` | | Toronto and the GTA change the approach: you can offer coffee |
| `email` | | |
| `email_status` | `verified` · `catch-all` · `guessed` · `unknown` | **Never send to `guessed`.** A bounce on a small list damages the sending domain |
| `phone` | | Low priority, rarely the right channel here |

---

## Block 2. Authority. Can they say yes?

| Field | Values | Why |
|---|---|---|
| `seniority` | `ic` · `manager` · `director` · `vp` · `c-level` · `founder` · `partner` | |
| `owns_budget` | `yes` · `no` · `unknown` | A manager at a 30-person company signs. A director at a 50,000-person company may not |
| `product_fit` | `meetup` · `dinner` · `convening` | Derived from title and the company's best-fit score |
| `reports_to` | Name and title | Only useful if the first path stalls |
| `team_size` | Integer | Proxy for budget |

---

## Block 3. Timing. Why would they care this month?

**This block outranks everything else in the file.**

| Field | Values | Why it matters |
|---|---|---|
| `role_started` | ISO date | |
| `tenure_months` | Integer, derived | **Under 12 is the single strongest signal we have.** New in role means a number to hit, no local community, budget, and a reason to move fast |
| `previous_company` | | A move from a competitor tells you what they will compare us to |
| `company_trigger` | Inherited from the company row | CDCP, pharmacy scope, a new Canadian healthcare team |
| `hiring_signal` | `yes` · `no` | A team being built is a budget being spent |

---

## Block 4. Proof points. What do I open with?

This is where an enrichment pipeline earns its cost, and where a generic list stays generic.

| Field | Values | Notes |
|---|---|---|
| `recent_post_topic` | Text plus date | Last 90 days only. Older reads as stalking |
| `recent_post_url` | URL | |
| `stated_problem` | Text plus URL | **The most valuable field in the table.** A public post where they name a problem our room addresses |
| `spoke_at` | Event and date | They are comfortable on a stage, and they are reachable through organisers |
| `ran_event` | Event and date | **Proves the budget line exists.** Directly scores `runs_own_events` on the company row |
| `published` | Article, podcast, report | |
| `mutual_connections` | Count and names | Ask for the introduction rather than sending a cold message |
| `shared_context` | School, city, prior employer, association | |

### The five proof points that actually move a reply rate, ranked

1. **New in role, under 12 months.** They need early wins and they have not yet chosen their vendors
2. **They ran an event in the last 6 months.** The budget line exists and you can reference the event itself
3. **They posted a problem our room addresses.** Quote it back to them in their words
4. **A mutual connection.** Stop sending cold messages and ask for the introduction
5. **Shared context.** Weakest of the five, still better than nothing

### What not to reference

Anything from their personal life. Anything more than a year old. Anything so specific it reads as surveillance rather than research. **The test: would you be comfortable saying "I saw your post about X" out loud, to their face, at the dinner?** If not, do not put it in an email.

---

## Block 5. Outreach state

| Field | Values |
|---|---|
| `status` | `new` · `researching` · `ready` · `contacted` · `replied` · `meeting` · `won` · `lost` · `do-not-contact` |
| `channel` | `linkedin` · `email` · `introduction` · `event` |
| `first_contact` , `last_contact` | ISO dates |
| `opener_used` | Which proof point we led with. **Track this, it is how you learn what works** |
| `reply` | `none` · `positive` · `neutral` · `negative` · `referred-on` |
| `next_action`, `next_action_date` | |

**`do-not-contact` is permanent and never cleared.** One person asking to be left alone and then being contacted again is worth more damage than the whole list is worth.

---

## Block 6. Provenance

| Field | Values |
|---|---|
| `source` | `apify:<actor>` · `web-research` · `introduction` · `manual` |
| `scraped_at` | ISO date |
| `confidence` | `high` · `medium` · `low` |
| `verify_before_contact` | Free text |
| `evidence` | Pipe-separated URLs |

**Titles go stale fastest.** Anything older than 90 days is re-verified before it is used in a message.

---

## Two constraints that govern how this list is used

**LinkedIn's terms prohibit automated collection.** Using a scraper carries an account and access risk that sits with whoever runs it. Manual search and a normal Sales Navigator export do not.

**CASL governs the sending, not the collecting.** For Canadian business recipients there is an implied-consent basis where a business email address is conspicuously published without a statement refusing such messages, **and the message relates to their role**. Every message must carry sender identification, a physical mailing address, and a working unsubscribe. Get any of that wrong and the exposure is per message, not per campaign.

Practical consequence: **prefer LinkedIn messages and introductions over cold email** for this list. Better reply rates, and the compliance surface is far smaller.

---

## Running the enrichment

```bash
export APIFY_TOKEN=...
python3 tools/apify_enrich.py --dry-run                  # payloads only, calls nothing
python3 tools/apify_enrich.py --actor <slug> --tier A    # run for tier A
python3 tools/apify_enrich.py --actor <slug> --limit 20  # run for the top 20
```

**Blocked in the Claude Code environment as of 5 August 2026.** The network policy returns 403 on CONNECT to `api.apify.com`, and no `APIFY_TOKEN` is set. Two things to change, both outside this repo:

1. Allow `api.apify.com` in the environment's network policy. See the environment configuration docs at code.claude.com/docs/en/claude-code-on-the-web
2. Set `APIFY_TOKEN` as an environment variable on the environment

Until then `--dry-run` writes `apify_payloads.json` with a ready input object per company. Those paste straight into the Apify console and run by hand, which is also the cheaper way to test one actor before spending credits across 130 companies.

**The script is actor-agnostic.** Slugs and output field names change, so pass `--actor` and extend the alias lists in `normalise()` rather than editing anything else. It dedupes on `linkedin_url` and never overwrites a field that already holds hand-verified work.
