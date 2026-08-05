#!/usr/bin/env python3
"""Expand and enrich data/prospects/people.csv using an Apify actor.

Status: ready to run. Blocked in this environment only by network policy,
which returns 403 on CONNECT to api.apify.com. Nothing here needs changing
once that host is allowed and APIFY_TOKEN is set.

Actor-agnostic on purpose. Apify actor slugs and their output field names
change, so pass --actor and let normalise() map whatever comes back. Add a
mapping there rather than editing anything else.

Usage
  export APIFY_TOKEN=...
  python3 tools/apify_enrich.py --dry-run                 # print payloads, call nothing
  python3 tools/apify_enrich.py --actor <slug> --limit 20 # run for the top 20 companies
  python3 tools/apify_enrich.py --actor <slug> --tier A   # run for tier A only
"""
import argparse, csv, json, os, sys, time, urllib.parse, urllib.request, datetime

API = "https://api.apify.com/v2"
PEOPLE = "data/prospects/people.csv"
COMPANIES = "data/prospects/companies.csv"
SCORED = "data/prospects/scored.json"

TITLES = {
    "Meetup": ["Head of Growth", "Demand Generation", "Growth Marketing",
               "Field Marketing", "Event Marketing", "Community", "Partnerships"],
    "Dinner": ["Industry Marketing", "Field Marketing", "Brand Marketing",
               "Business Development Director", "Head of Marketing", "Country Manager"],
    "Convening": ["Healthcare Industry Lead", "Head of Healthcare", "Life Sciences",
                  "Field Marketing", "Country Manager", "General Manager", "Strategic Partnerships"],
}
SMALL = ["Founder", "CEO", "Head of Partnerships"]

COLS = ["linkedin_url","full_name","first_name","title","company_id","company","city","country",
        "email","email_status","seniority","owns_budget","product_fit","team_size",
        "role_started","tenure_months","previous_company","company_trigger","hiring_signal",
        "recent_post_topic","recent_post_url","stated_problem","spoke_at","ran_event","published",
        "mutual_connections","shared_context",
        "status","channel","first_contact","last_contact","opener_used","reply",
        "next_action","next_action_date",
        "source","scraped_at","confidence","verify_before_contact","evidence"]


def seniority_of(title):
    t = (title or "").lower()
    for kw, val in [("founder","founder"), ("co-founder","founder"), ("partner","partner"),
                    ("chief","c-level"), ("cmo","c-level"), ("ceo","c-level"), ("cro","c-level"),
                    ("vp","vp"), ("vice president","vp"), ("head of","director"),
                    ("director","director"), ("lead","manager"), ("manager","manager")]:
        if kw in t:
            return val
    return "ic"


def tenure(role_started):
    if not role_started:
        return ""
    try:
        d = datetime.date.fromisoformat(role_started[:10])
    except ValueError:
        return ""
    today = datetime.date.today()
    return (today.year - d.year) * 12 + today.month - d.month


def normalise(item, company, actor):
    """Map one actor output item onto our schema. Extend the alias lists, not the caller."""
    def pick(*names):
        for n in names:
            v = item.get(n)
            if isinstance(v, dict):
                v = v.get("text") or v.get("name") or v.get("url")
            if v not in (None, "", []):
                return v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)
        return ""

    url = pick("linkedinUrl", "profileUrl", "url", "publicProfileUrl", "profile_url")
    url = url.split("?")[0].rstrip("/")
    name = pick("fullName", "name", "full_name")
    title = pick("headline", "jobTitle", "title", "position", "occupation")
    started = pick("currentPositionStartDate", "startDate", "positionStartDate")[:10]

    row = {c: "" for c in COLS}
    row.update(
        linkedin_url=url, full_name=name, first_name=(name.split() or [""])[0],
        title=title, company_id=company["id"], company=company["company"],
        city=pick("location", "city", "geoLocation", "addressWithCountry"),
        country=pick("country", "countryCode"),
        email=pick("email", "workEmail"),
        email_status="unknown" if not pick("email", "workEmail") else "guessed",
        seniority=seniority_of(title),
        owns_budget="unknown",
        product_fit=company["best"].lower(),
        role_started=started, tenure_months=str(tenure(started)),
        previous_company=pick("previousCompany", "pastCompany"),
        company_trigger=company.get("trigger", ""),
        status="researching", confidence="low",
        source=f"apify:{actor}", scraped_at=datetime.date.today().isoformat(),
        verify_before_contact="title and tenure re-verified before any message",
        evidence=url,
    )
    return row


def targets(limit, tier_filter):
    d = json.load(open(SCORED, encoding="utf-8"))
    rows = [r for r in d["rows"] if not tier_filter or r["tier"] == tier_filter]
    return rows[:limit] if limit else rows


def query_for(c):
    titles = list(TITLES[c["best"]])
    try:
        if int(c["employees"]) < 200:
            titles = SMALL + titles[:3]
    except (TypeError, ValueError):
        pass
    ors = " OR ".join(f'"{t}"' for t in titles)
    return f'site:linkedin.com/in "{c["company"]}" ({ors}) (Canada OR Toronto OR Ontario)', titles


def call_actor(actor, payload, token, timeout=300):
    url = f"{API}/acts/{actor.replace('/', '~')}/run-sync-get-dataset-items?token={token}"
    req = urllib.request.Request(url, data=json.dumps(payload).encode(),
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode())


def load_existing():
    if not os.path.exists(PEOPLE):
        return {}
    return {r["linkedin_url"]: r for r in csv.DictReader(open(PEOPLE, encoding="utf-8"))
            if r.get("linkedin_url")}


def save(rows):
    with open(PEOPLE, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=COLS)
        w.writeheader()
        w.writerows(sorted(rows.values(), key=lambda r: (r["company"], r["full_name"])))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--actor", help="Apify actor slug, e.g. owner/actor-name")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--tier", choices=["A", "B", "C"])
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args()

    token = os.environ.get("APIFY_TOKEN", "")
    cs = targets(a.limit, a.tier)

    if a.dry_run or not token or not a.actor:
        if not a.dry_run:
            print("APIFY_TOKEN or --actor missing. Printing payloads instead.\n", file=sys.stderr)
        out = []
        for c in cs:
            q, titles = query_for(c)
            out.append({"company": c["company"], "tier": c["tier"], "product": c["best"],
                        "titles": titles, "google_query": q,
                        "actor_input": {"queries": [q], "maxItems": 5,
                                        "searchQuery": f'{c["company"]} {titles[0]}'}})
        os.makedirs("data/prospects", exist_ok=True)
        json.dump(out, open("data/prospects/apify_payloads.json", "w", encoding="utf-8"), indent=1)
        print(f"wrote data/prospects/apify_payloads.json  ({len(out)} companies)")
        print("Paste any actor_input straight into the Apify console to run it by hand.")
        return

    people = load_existing()
    added = updated = 0
    for i, c in enumerate(cs, 1):
        q, titles = query_for(c)
        print(f"[{i}/{len(cs)}] {c['company']}", file=sys.stderr)
        try:
            items = call_actor(a.actor, {"queries": [q], "maxItems": 5,
                                         "searchQuery": f'{c["company"]} {titles[0]}'}, token)
        except Exception as e:
            print(f"  failed: {e}", file=sys.stderr)
            continue
        for it in items or []:
            row = normalise(it, c, a.actor)
            if not row["linkedin_url"]:
                continue
            prev = people.get(row["linkedin_url"])
            if prev:
                # never clobber hand-verified work
                for k, v in row.items():
                    if v and not prev.get(k):
                        prev[k] = v
                updated += 1
            else:
                people[row["linkedin_url"]] = row
                added += 1
        time.sleep(1)

    save(people)
    print(f"people.csv: {added} added, {updated} updated, {len(people)} total")


if __name__ == "__main__":
    main()
