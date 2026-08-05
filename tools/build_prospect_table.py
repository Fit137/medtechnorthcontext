#!/usr/bin/env python3
"""Score data/prospects/companies.csv against all three products and render the HTML view.

Scores are derived. Never hand-edit them, and never hand-edit the HTML.
Rules live in data/prospects/schema.md and must stay in step with this file.
"""
import csv, html, json, os, datetime

SRC = "data/prospects/companies.csv"
OUT = "data/prospects/table.html"

def num(v):
    try: return int(str(v).strip())
    except: return None

def has(v):
    return bool(str(v).strip()) and str(v).strip().lower() != "unknown"

def clamp(n): return max(0, min(100, n))

def score_meetup(r):
    s, why = 0, []
    if r["healthcare_vertical"] == "yes":
        s += 25; why.append("+25 sells into health")
    if r["needs_demo"] == "yes":
        s += 20; why.append("+20 product needs explaining")
    if r["sales_motion"] in ("plg","hybrid"):
        s += 15; why.append("+15 lead-gen motion, a list of 30 is a real outcome")
    if has(r["ca_office_city"]):
        s += 15; why.append("+15 can reach the GTA")
    if r["funding"] == "venture":
        s += 10; why.append("+10 venture funded, discretionary spend")
    e = num(r["employees_total"])
    if e is not None and e < 500:
        s += 10; why.append("+10 small enough that one person decides")
    if r["sponsors_health_events"] == "yes":
        s += 5; why.append("+5 already sponsors health events")
    if e is not None and e > 5000:
        s -= 20; why.append("-20 too large, $2,500 is below their floor")
    return clamp(s), why

def score_dinner(r):
    s, why = 0, []
    if r["healthcare_vertical"] == "yes":
        s += 25; why.append("+25 healthcare vertical")
    if r["runs_own_events"] == "yes":
        s += 20; why.append("+20 already runs its own events")
    if r["sales_motion"] in ("sales-led","hybrid"):
        s += 15; why.append("+15 relationship-led motion")
    if has(r["ca_office_city"]):
        s += 15; why.append("+15 Canadian office")
    if r["sponsors_health_events"] == "yes":
        s += 10; why.append("+10 sponsors health events")
    if r["category_stake"] in ("orthogonal","adjacent"):
        s += 10; why.append("+10 category stake is manageable")
    if has(r["trigger"]):
        s += 5; why.append("+5 dated trigger")
    if r["sales_motion"] == "plg":
        s -= 15; why.append("-15 PLG, no list means no measurable outcome")
    return clamp(s), why

def score_convening(r):
    s, why = 0, []
    if r["healthcare_vertical"] == "yes":
        s += 25; why.append("+25 healthcare vertical")
    if r["sales_motion"] == "sales-led":
        s += 20; why.append("+20 considered sales motion")
    if has(r["ca_marketing_contact"]):
        s += 15; why.append("+15 named Canadian budget holder")
    if r["category_stake"] == "orthogonal":
        s += 15; why.append("+15 orthogonal, safe to co-host")
    if has(r["trigger"]):
        s += 10; why.append("+10 dated trigger")
    if r["runs_own_events"] == "yes":
        s += 10; why.append("+10 runs its own events")
    if r["hostable_space"] == "yes":
        s += 10; why.append("+10 hostable space, bonus not a gate")
    e = num(r["employees_total"])
    if e is not None and e > 200:
        s += 5; why.append("+5 large enough to hold budget")
    if r["category_stake"] == "conflicted":
        s -= 25; why.append("-25 conflicted, cannot co-host")
    if r["sales_motion"] == "plg":
        s -= 20; why.append("-20 PLG, will not buy a composed room")
    if not has(r["ca_office_city"]):
        s -= 15; why.append("-15 no Canadian office and no stated expansion intent")
    return clamp(s), why

def tier(n):
    return "A" if n >= 65 else ("B" if n >= 45 else "C")

def build():
    with open(SRC, encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    out = []
    for r in rows:
        m, mw = score_meetup(r)
        d, dw = score_dinner(r)
        c, cw = score_convening(r)
        best = max([("Meetup", m), ("Dinner", d), ("Convening", c)], key=lambda x: x[1])
        unknowns = sum(1 for k in ("healthcare_vertical","hostable_space","ca_marketing_contact",
                                   "sales_motion","category_stake","runs_own_events",
                                   "sponsors_health_events","needs_demo") if not has(r[k]))
        out.append({
            "id": r["id"], "company": r["company"], "city": r["ca_office_city"] or "no CA office",
            "source": r["source_list"], "status": r["status"], "note": r["note"],
            "vertical": r["healthcare_vertical"], "space": r["hostable_space"],
            "motion": r["sales_motion"], "stake": r["category_stake"],
            "events": r["runs_own_events"], "trigger": r["trigger"],
            "employees": r["employees_total"], "funding": r["funding"],
            "m": m, "d": d, "c": c, "best": best[0], "bestScore": best[1],
            "tier": tier(best[1]), "unknowns": unknowns,
            "why": {"Meetup": mw, "Dinner": dw, "Convening": cw},
            "evidence": [u for u in r["evidence"].split("|") if u.strip()],
        })
    out.sort(key=lambda x: -x["bestScore"])
    return out

DATA = build()
gen = datetime.date.today().isoformat()
counts = {p: sum(1 for r in DATA if r["best"] == p) for p in ("Meetup","Dinner","Convening")}
tiers = {t: sum(1 for r in DATA if r["tier"] == t) for t in ("A","B","C")}
unk = sum(r["unknowns"] for r in DATA)

os.makedirs("data/prospects", exist_ok=True)
print(json.dumps({"companies": len(DATA), "by_product": counts, "by_tier": tiers,
                  "unknown_fields": unk, "generated": gen}, indent=2))
with open("data/prospects/scored.json", "w", encoding="utf-8") as f:
    json.dump({"generated": gen, "rows": DATA, "counts": counts,
               "tiers": tiers, "unknowns": unk}, f, indent=1)
print("wrote data/prospects/scored.json")
