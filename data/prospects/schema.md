# Prospect Table: Schema and Scoring

> **INTERNAL.** Source of truth is `companies.csv`. The HTML view is generated from it, never edited by hand.

## Why a CSV and not Supabase

Supabase lives in the **website** repo and already has an unrun migration blocking it. Putting a prospect table there means touching the production database to solve a research problem, and then building a UI before the data is usable at all.

For a list this size the CSV wins on every axis that matters:

| | CSV in git | Supabase |
|---|---|---|
| Usable today | Yes | After a migration and a UI |
| Diffs between research passes | **Yes, this is the point** | No |
| Opens in Sheets or Excel | Yes | Export first |
| Touches production | No | Yes |
| Cost | Zero | Zero, but with risk |

**Move to Supabase when a second thing consumes this data**, meaning the website, an outreach tool, or a CRM sync. Not before. Until then the CSV is the database and git is the audit log.

---

## The design decision that matters

**One company table, three scores.** Every company is scored against all three products, and the table says which one to sell them.

That is the thing Clay and Perplexity both do badly. A single ICP list forces a company into one bucket. In reality Microsoft Canada is a poor meetup sponsor and an excellent convening buyer, while a small AI startup is the reverse. Scoring all three surfaces that instead of hiding it.

---

## Columns

### Identity
| Column | Values |
|---|---|
| `id` | slug, stable, never reused |
| `company` | Legal or trading name |
| `website` | |
| `hq_city`, `hq_country` | |
| `ca_office_city` | Blank if no Canadian office |
| `source_list` | Where the name came from |

### Firmographics
| Column | Values |
|---|---|
| `employees_total` | Integer or blank |
| `employees_canada` | Integer or blank |
| `funding` | `bootstrapped` · `venture` · `public` · `private` · `subsidiary` · `partnership` · `unknown` |
| `stage` | `seed` · `series-a` · `series-b` · `series-c-plus` · `growth` · `mature` · `unknown` |

### Enrichment, the research fields
| Column | Values | What it decides |
|---|---|---|
| `healthcare_vertical` | `yes` · `no` · `unknown` | Do they name healthcare as a vertical **in Canada** |
| `hostable_space` | `yes` · `no` · `unknown` | Named facility or evidence of hosting 25 or more |
| `ca_marketing_contact` | Name and title, or `unknown` | Somebody in Canada who owns a budget |
| `sales_motion` | `plg` · `sales-led` · `hybrid` · `unknown` | PLG is fine for a meetup, fatal for a convening |
| `category_stake` | `orthogonal` · `adjacent` · `conflicted` · `unknown` | Whether they can co-host without reading as a sales meeting |
| `runs_own_events` | `yes` · `no` · `unknown` | Budget line already exists |
| `sponsors_health_events` | `yes` · `no` · `unknown` | Proves both budget and intent |
| `trigger` | Free text plus a date | A dated 2026 event that moved their market |
| `needs_demo` | `yes` · `no` · `unknown` | Does the product need explaining. Drives meetup fit |

### Scores, derived, never typed by hand
| Column | |
|---|---|
| `score_meetup` | 0 to 100 |
| `score_dinner` | 0 to 100 |
| `score_convening` | 0 to 100 |
| `best_product` | The highest of the three |
| `tier` | A above 65 · B 45 to 65 · C below 45 |

### Workflow
| Column | Values |
|---|---|
| `status` | `new` · `enriching` · `qualified` · `contacted` · `meeting` · `won` · `lost` · `parked` |
| `note` | One line, ours |
| `last_enriched` | ISO date |
| `evidence` | Pipe-separated URLs |

---

## Scoring

Three products, three formulas. Every input is a field above, so scores are reproducible and change only when the data changes.

### Meetup, $2,500. They want a stage and opted-in leads.

| Points | Condition |
|---|---|
| +25 | Sells to health builders, clinicians or practices |
| +20 | `needs_demo = yes`. A product that needs explaining gains most from 15 minutes |
| +15 | `sales_motion` is `plg` or `hybrid`. A list of 30 is a real outcome for them |
| +15 | Someone can reach the GTA, meaning a Canadian office or nearby |
| +10 | `funding = venture`. Discretionary spend and a growth mandate |
| +10 | `employees_total` under 500. $2,500 is one person's decision |
| +5 | `sponsors_health_events = yes` |
| −20 | `employees_total` above 5,000. $2,500 is below their procurement floor |

**PLG is a positive here.** It is the one product where self-serve companies are the right buyer.

### Dinner, $4,500. Proximity to a mixed room, no leads.

| Points | Condition |
|---|---|
| +25 | `healthcare_vertical = yes` |
| +20 | `runs_own_events = yes` |
| +15 | `sales_motion` is `sales-led` or `hybrid` |
| +15 | Canadian office |
| +10 | `sponsors_health_events = yes` |
| +10 | `category_stake` is `orthogonal` or `adjacent` |
| +5 | `trigger` present |
| −15 | `sales_motion = plg`. No list means no measurable outcome for them |

### Convening, $25,000. A composed room to their brief.

| Points | Condition |
|---|---|
| +25 | `healthcare_vertical = yes` |
| +20 | `sales_motion = sales-led` |
| +15 | `ca_marketing_contact` identified |
| +15 | `category_stake = orthogonal` |
| +10 | `trigger` present |
| +10 | `runs_own_events = yes` |
| +10 | `hostable_space = yes`. **A bonus, no longer a gate**, because the Toronto venue option serves buyers without space |
| +5 | `employees_total` above 200 |
| −25 | `category_stake = conflicted` |
| −20 | `sales_motion = plg` |
| −15 | No Canadian office **and** no evidence of expansion intent |

**The change from the earlier co-host screen:** hostable space used to be a hard requirement. `ADR-022` added the Toronto venue for buyers who fly in, so space became a bonus. That single change puts every US company back in scope.

---

## The loop

1. **Seed.** Names from `data/corporate-targets.md` and `data/cohost-targets.md`
2. **Enrich.** Researched in batches, evidence URL per claim, `unknown` when unsourced. Never inferred
3. **Score.** Run the generator. Scores are recomputed from fields every time
4. **Read.** Open the HTML view, sort by the product being sold this week
5. **Refine.** Change a criterion in the generator, rerun, and git shows exactly which companies moved

Step 5 is the part Clay does not give you. **A scoring change is a diff, so you can see who moved and why.**

## Rules

- **`unknown` is a valid and useful answer.** A guessed field is worse than a blank one, because it silently changes a score
- **Every non-obvious claim carries an evidence URL.** No URL, no `yes`
- **Never hand-edit the score columns.** They are derived
- **Never hand-edit the HTML.** It is generated

---

## Running it

```bash
python3 tools/seed_prospects.py          # only to rebuild from scratch, overwrites the CSV
python3 tools/build_prospect_table.py    # scores every row, writes scored.json
python3 tools/render_prospect_table.py   # writes table.html
```

Normal loop is the last two. `seed_prospects.py` overwrites hand-entered research, so do not run it once enrichment has started.
