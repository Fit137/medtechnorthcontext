#!/usr/bin/env python3
"""Emit one targeted people-search URL per company, using the title set that
matches the product that company scores best on.

Why URLs and not names: mid-level Canadian marketing managers, who own the
meetup and dinner budgets, do not surface in web search. Founders and public
industry leaders do. Rather than guess the ones search cannot reach, this
generates the exact query that finds them in a few seconds each.
"""
import csv, json, urllib.parse, os

TITLES = {
    "Meetup": ["Head of Growth", "Demand Generation", "Growth Marketing",
               "Field Marketing", "Event Marketing", "Community Manager", "Partnerships Manager"],
    "Dinner": ["Industry Marketing", "Field Marketing", "Brand Marketing",
               "Business Development Director", "Head of Marketing", "Country Manager"],
    "Convening": ["Healthcare Industry Lead", "Head of Healthcare", "Life Sciences",
                  "Field Marketing", "Country Manager", "General Manager", "Strategic Partnerships"],
}
SMALL = ["Founder", "CEO", "Head of Partnerships"]

def google(company, titles, canada=True):
    ors = " OR ".join(f'"{t}"' for t in titles)
    q = f'site:linkedin.com/in "{company}" ({ors})'
    if canada:
        q += " (Canada OR Toronto OR Ontario)"
    return "https://www.google.com/search?q=" + urllib.parse.quote(q)

def linkedin(company, titles):
    kw = f'"{company}" ' + " OR ".join(f'"{t}"' for t in titles[:3])
    return ("https://www.linkedin.com/search/results/people/?keywords="
            + urllib.parse.quote(kw) + "&origin=GLOBAL_SEARCH_HEADER")

d = json.load(open("data/prospects/scored.json", encoding="utf-8"))
have = {r["company_id"] for r in csv.DictReader(open("data/prospects/contacts.csv", encoding="utf-8"))}

out = []
for r in d["rows"]:
    if r["id"] in have:
        continue
    titles = list(TITLES[r["best"]])
    try:
        small = int(r["employees"]) < 200
    except (TypeError, ValueError):
        small = False
    if small:
        titles = SMALL + titles[:3]
    out.append({
        "id": r["id"], "company": r["company"], "tier": r["tier"], "best": r["best"],
        "score": r["bestScore"], "city": r["city"],
        "titles": " · ".join(titles),
        "google": google(r["company"], titles),
        "linkedin": linkedin(r["company"], titles),
    })

out.sort(key=lambda x: (-x["score"], x["company"]))
os.makedirs("data/prospects", exist_ok=True)
with open("data/prospects/contact_searches.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=["id","company","tier","best","score","city","titles","google","linkedin"])
    w.writeheader()
    w.writerows(out)
print(f"wrote data/prospects/contact_searches.csv  ({len(out)} companies still needing a contact)")
print(f"already have a named contact for {len(have)} companies")
