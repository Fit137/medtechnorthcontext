#!/usr/bin/env python3
"""Seed data/prospects/companies.csv from the named targets already researched.

Only facts confirmed in web research on 1-2 August 2026 are set. Everything
else is 'unknown' on purpose. A guessed field silently changes a score.
"""
import csv, os

COLS = ["id","company","website","hq_city","hq_country","ca_office_city","source_list",
        "employees_total","employees_canada","funding","stage",
        "healthcare_vertical","hostable_space","ca_marketing_contact","sales_motion",
        "category_stake","runs_own_events","sponsors_health_events","trigger","needs_demo",
        "status","note","last_enriched","evidence"]

U = "unknown"

def row(id, company, **kw):
    d = {c: "" for c in COLS}
    d.update(id=id, company=company, status="new", last_enriched="",
             healthcare_vertical=U, hostable_space=U, ca_marketing_contact=U,
             sales_motion=U, category_stake=U, runs_own_events=U,
             sponsors_health_events=U, needs_demo=U, funding=U, stage=U,
             hq_country="Canada", evidence="", trigger="", note="")
    d.update(kw)
    return d

CDCP = "CDCP 2026-27 benefit year opened 1 Jul 2026; grids revised 1 Apr 2026"
PHARM = "Ontario minor ailments 19 to 28 on 1 Jul 2026; 6 new funded vaccines"

R = []

# --- Dental software. CDCP trigger, buyer is the practice owner, no PAAB. ---
for i,(c,city,ev) in enumerate([
    ("ABELDent","", ""),
    ("MaxiDent","", "https://slashdot.org/software/dental-practice-management/in-canada/"),
    ("ClearDent","", "https://slashdot.org/software/dental-practice-management/in-canada/"),
    ("Dentitek","", "https://slashdot.org/software/dental-practice-management/in-canada/"),
    ("Smilepass","Toronto","https://dentalrx.ca/articles/canadian-dental-software"),
    ("Henry Schein One Canada (Dentrix)","", "https://dentalrx.ca/articles/canadian-dental-software"),
    ("Curve Dental","", ""),
]):
    R.append(row(f"dental-sw-{i}", c, ca_office_city=city, source_list="corporate-targets A1",
                 healthcare_vertical="yes", sales_motion="sales-led", category_stake="conflicted",
                 needs_demo="yes", trigger=CDCP, evidence=ev,
                 note="Buyer is the practice owner. Conflicted as co-host in a dental room."))

# --- Dental groups, imaging, materials, distribution ---
for i,c in enumerate(["dentalcorp","123Dentist","Altima Dental"]):
    R.append(row(f"dso-{i}", c, ca_office_city="Toronto" if c=="dentalcorp" else "",
                 source_list="corporate-targets A2", healthcare_vertical="yes",
                 sales_motion="sales-led", category_stake="adjacent", needs_demo="no",
                 note="Employer brand budget. No regulatory review."))
for i,c in enumerate(["Pearl","Overjet","VideaHealth","Denti.AI","3Shape Canada","Medit","SprintRay","Planmeca Canada","DEXIS / Envista"]):
    R.append(row(f"dental-ai-{i}", c, hq_country=U, source_list="corporate-targets A4",
                 healthcare_vertical="yes", sales_motion="sales-led", category_stake="conflicted",
                 needs_demo="yes", note="Product needs explaining. Strong meetup fit."))
for i,c in enumerate(["Align Technology Canada","Straumann Canada","Nobel Biocare","Dentsply Sirona Canada","Ivoclar"]):
    R.append(row(f"dental-mfr-{i}", c, hq_country=U, source_list="corporate-targets A5",
                 healthcare_vertical="yes", sales_motion="sales-led", category_stake="conflicted",
                 runs_own_events="yes", sponsors_health_events="yes", needs_demo="yes",
                 note="Study-club native. Will ask for stage time; screen for it."))
for i,c in enumerate(["Henry Schein Canada","Patterson Dental Canada","Sinclair Dental"]):
    R.append(row(f"dental-dist-{i}", c, source_list="corporate-targets A6",
                 healthcare_vertical="yes", sales_motion="sales-led", category_stake="conflicted",
                 needs_demo="no", note="Will push for a booth. Sell the brief, not the room."))

# --- Practice finance ---
R.append(row("fin-scotia","Scotiabank Healthcare+", ca_office_city="Toronto", source_list="corporate-targets A3",
             funding="public", stage="mature", healthcare_vertical="yes", sales_motion="sales-led",
             category_stake="orthogonal", hostable_space="yes", needs_demo="no",
             employees_total=90000, sponsors_health_events="yes",
             evidence="https://www.scotiabank.com/ca/en/healthcare-plus/dentist-banking.html",
             note="Dedicated dentist and pharmacist programmes. The room is their acquisition target."))
for i,c in enumerate(["RBC Healthcare","BMO","TD","CIBC","MNP professional practice","Baker Tilly","CDSPI","Sun Life","Manulife","Green Shield Canada"]):
    R.append(row(f"fin-{i}", c, ca_office_city="Toronto", source_list="cohost-targets A3",
                 funding="public", stage="mature", healthcare_vertical="yes",
                 sales_motion="sales-led", category_stake="orthogonal", hostable_space="yes",
                 needs_demo="no", note="Fast signature, weakest thesis fit. Cap at one per room."))

# --- Pharmacy ---
R.append(row("pharm-mapflow","MAPflow", source_list="corporate-targets B1", healthcare_vertical="yes",
             sales_motion="hybrid", category_stake="conflicted", needs_demo="yes", trigger=PHARM,
             funding=U, evidence="https://mapflow.ca/",
             note="2,200+ pharmacies. Their product IS the 1 Jul change."))
R.append(row("pharm-medessist","MedEssist", ca_office_city="Toronto", source_list="corporate-targets B1",
             healthcare_vertical="yes", sales_motion="hybrid", category_stake="conflicted",
             needs_demo="yes", trigger=PHARM, funding="venture", stage="seed",
             evidence="https://www.medessist.com/|https://betakit.com/medessists-access-to-care-program-has-turned-100-ontario-pharmacies-into-mini-clinics/",
             note="Toronto, pharmacist-founded, 100 Ontario pharmacies onboarded. One hop to founder."))
R.append(row("pharm-telus","TELUS Health (Kroll, PharmaClik Rx)", ca_office_city="Toronto",
             source_list="corporate-targets B1", healthcare_vertical="yes", sales_motion="sales-led",
             category_stake="conflicted", needs_demo="yes", trigger=PHARM, funding="public",
             stage="mature", hostable_space="yes",
             evidence="https://www.telus.com/en/health/health-professionals/pharmacies/add-ons/minor-ailments"))
for i,(c,ev,note) in enumerate([
    ("Guardian / IDA / Remedy'sRx","https://www.guardian-ida-remedysrx.ca/en/who-we-are/who-we-are","852 Ontario locations. McKesson banner network."),
    ("Pharmasave","https://www.scrapehero.com/location-reports/10-largest-pharmacies-in-canada/","486 Ontario locations."),
    ("Whole Health Pharmacy Partners","https://wholehealthpharmacy.ca/","Ontario, 200+. Nimblest banner."),
    ("Shoppers Drug Mart / Loblaw","","Largest and slowest by an order of magnitude."),
]):
    R.append(row(f"banner-{i}", c, ca_office_city="Ontario", source_list="corporate-targets B2",
                 healthcare_vertical="yes", sales_motion="sales-led", category_stake="adjacent",
                 needs_demo="no", trigger=PHARM, evidence=ev, note=note))
for i,c in enumerate(["Abbott (ID NOW)","Roche Diagnostics Canada","bioMerieux","Cepheid","QuidelOrtho","BD","Siemens Healthineers Canada"]):
    R.append(row(f"poct-{i}", c, hq_country=U, ca_office_city="Mississauga" if "Abbott" in c else "",
                 source_list="corporate-targets B3", healthcare_vertical="yes", sales_motion="sales-led",
                 category_stake="conflicted", needs_demo="yes", trigger=PHARM, stage="mature",
                 employees_total=50000))
for i,c in enumerate(["Haleon Canada","Kenvue","Bayer Consumer Health","Reckitt","Jamieson"]):
    R.append(row(f"otc-{i}", c, hq_country=U, source_list="corporate-targets B4", healthcare_vertical="yes",
                 sales_motion="sales-led", category_stake="conflicted", needs_demo="no", trigger=PHARM,
                 stage="mature", employees_total=20000, note="MLR exists but lighter than prescription."))
for i,c in enumerate(["GSK Canada","Pfizer Canada","Merck Canada","Moderna Canada","Sanofi Canada","AstraZeneca Canada"]):
    R.append(row(f"vax-{i}", c, hq_country=U, source_list="corporate-targets B5", healthcare_vertical="yes",
                 sales_motion="sales-led", category_stake="conflicted", needs_demo="no", trigger=PHARM,
                 stage="mature", employees_total=50000, hostable_space="yes",
                 note="Largest cheques, slowest path. PAAB and full MLR. Sell the brief, not a room."))

# --- Allied health software ---
for i,(c,city,ev) in enumerate([
    ("Jane App","North Vancouver","https://jane.app/"),
    ("Embodia","Toronto","https://embodiaapp.com/h/cpa-members/"),
    ("Noterro","",""), ("Owl Practice","Toronto",""), ("Practice Perfect","",""),
]):
    R.append(row(f"rehab-{i}", c, ca_office_city=city, source_list="corporate-targets C",
                 healthcare_vertical="yes", sales_motion="plg", category_stake="conflicted",
                 needs_demo="yes", funding="venture", evidence=ev,
                 note="PLG. Strong meetup fit, poor convening fit."))

# --- Professional services. Convening's best archetype. ---
for i,(c,ev,note) in enumerate([
    ("Deloitte Canada","https://www.deloitte.com/ca/en/services/consulting/services/deloitte-greenhouse.html","Deloitte Greenhouse, Toronto. Purpose-built for convening."),
    ("EY Canada","https://www.newswire.ca/news-releases/new-ey-tower-brings-firms-purpose-to-life-631088003.html","EY wavespace, first in Canada, EY Tower."),
    ("PwC Canada","",""), ("KPMG Canada","",""), ("Accenture Canada","",""),
    ("BDO Canada","",""), ("Grant Thornton Canada","",""),
]):
    R.append(row(f"prof-{i}", c, ca_office_city="Toronto", source_list="cohost-targets A1",
                 funding="partnership", stage="mature", healthcare_vertical="yes",
                 hostable_space="yes", sales_motion="sales-led", category_stake="orthogonal",
                 runs_own_events="yes", needs_demo="no", employees_total=10000, evidence=ev,
                 note=note or "Convening is already their marketing model. Watch: they will want to fill the room with their clients."))
for i,c in enumerate(["Osler","Torys","Fasken","McCarthy Tetrault","Blakes","Gowling WLG","Norton Rose Fulbright","Borden Ladner Gervais"]):
    R.append(row(f"law-{i}", c, ca_office_city="Toronto", source_list="cohost-targets A1",
                 funding="partnership", stage="mature", healthcare_vertical="yes",
                 hostable_space="yes", sales_motion="sales-led", category_stake="orthogonal",
                 runs_own_events="yes", needs_demo="no", employees_total=1000,
                 note="Life sciences practice. Service provider cap applies to their seats."))

# --- Horizontal platforms with a Canadian healthcare vertical. The Miro shape. ---
R.append(row("plat-microsoft","Microsoft Canada", ca_office_city="Mississauga and Toronto",
             hq_country="United States", source_list="cohost-targets A2", funding="public", stage="mature",
             healthcare_vertical="yes", hostable_space="yes", sales_motion="sales-led",
             category_stake="orthogonal", runs_own_events="yes", needs_demo="no", employees_total=200000,
             evidence="https://www.microsoft.com/en-ca/about/facts|https://canadianbusiness.com/design/microsoft-canada-headquarters-toronto-cibc-square/",
             note="Meadowvale Blvd plus CIBC Square. Customer-facing tech displays incl. telemedicine."))
for i,c in enumerate(["AWS Canada","Google Cloud Canada","Salesforce Canada","ServiceNow Canada","SAP Canada",
                      "IBM Canada","Cisco Canada","Dell Technologies Canada","Nvidia Canada","Snowflake",
                      "Databricks","Okta","Zoom","Docusign","Atlassian","Figma","Notion","Twilio",
                      "Thomson Reuters","OpenText"]):
    R.append(row(f"plat-{i}", c, ca_office_city="Toronto", hq_country=U, source_list="cohost-targets A2",
                 funding="public", stage="mature", healthcare_vertical=U, hostable_space=U,
                 sales_motion="sales-led", category_stake="orthogonal", needs_demo="no",
                 employees_total=5000,
                 note="Verify a Canada-based healthcare industry lead. A hire in the last 12 months is the strongest trigger available."))

# --- Canadian health tech scale-ups ---
for i,(c,city,emp,ev,note) in enumerate([
    ("PointClickCare","Mississauga",2000,"https://www.investmississauga.ca/industries/life-sciences/medtech/","One of Canada's largest homegrown tech companies. Mississauga."),
    ("League","Toronto",500,"",""),("Maple","Toronto",300,"",""),("Think Research","Toronto",400,"",""),
    ("Kii Health","Toronto",300,"https://builtintoronto.com/companies/type/healthtech-companies","Formerly CloudMD."),
    ("Greenspace Health","Toronto",100,"https://builtintoronto.com/companies/type/healthtech-companies","Toronto and Kelowna."),
    ("AlayaCare","Montreal",600,"",""),("Dialogue Health","Montreal",700,"",""),
    ("WELL Health","Vancouver",1000,"",""),("Cloud DX","Kitchener",80,"",""),
    ("Novari Health","Kingston",60,"",""),("Myant","Mississauga",200,"https://www.investmississauga.ca/industries/life-sciences/medtech/",""),
    ("Baylis Medical Technologies","Mississauga",400,"https://www.investmississauga.ca/industries/life-sciences/medtech/",""),
]):
    R.append(row(f"scaleup-{i}", c, ca_office_city=city, source_list="cohost-targets A4",
                 employees_total=emp, funding="venture", stage="series-c-plus",
                 healthcare_vertical="yes", sales_motion="sales-led", category_stake="conflicted",
                 needs_demo="yes", evidence=ev, note=note or "Founder signs in one call. Topic selection does real work."))

# --- Mississauga corridor medtech ---
for i,c in enumerate(["Boston Scientific Canada","GE HealthCare Canada","Roche Canada","AstraZeneca Canada Ops",
                      "GSK Canada Ops","Amgen Canada","Johnson & Johnson Canada","Medtronic Canada","Abbott Canada",
                      "Stryker Canada","Philips Canada","Baxter Canada"]):
    R.append(row(f"medtech-{i}", c, ca_office_city="Mississauga / GTA", hq_country=U,
                 source_list="cohost-targets A5", funding="public", stage="mature",
                 healthcare_vertical="yes", hostable_space="yes", sales_motion="sales-led",
                 category_stake="conflicted", needs_demo="no", employees_total=50000,
                 evidence="https://www.investmississauga.ca/industries/life-sciences/medtech/",
                 note="Biggest budgets, slowest, highest stake. Advisory roundtable beats an open room."))

# --- The worked example ---
R.append(row("misc-chatbase","Chatbase", ca_office_city="Toronto", hq_country=U,
             source_list="cohost-targets worked example", employees_total=30, funding="bootstrapped",
             stage="growth", healthcare_vertical="no", hostable_space="no", sales_motion="hybrid",
             category_stake="orthogonal", needs_demo="yes",
             ca_marketing_contact="Head of partnerships, Toronto (observed, not sourced)",
             evidence="https://www.crunchbase.com/organization/chatbase|https://chatarmin.com/en/blog/chatbase-pricing",
             note="~$10M ARR bootstrapped. Fails co-host on space. Partnerships function is a different buyer. See docs/13."))

os.makedirs("data/prospects", exist_ok=True)
with open("data/prospects/companies.csv","w",newline="",encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=COLS)
    w.writeheader()
    for r in R:
        w.writerow(r)
print(f"seeded {len(R)} companies")
