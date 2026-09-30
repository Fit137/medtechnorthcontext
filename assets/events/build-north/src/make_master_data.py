"""Rebuild master-data.json from a Luma guest export.
Usage: python3 make_master_data.py <export.csv> [--skip "Full Name" ...]
Shows only job title, company and ecosystem contribution. Photos and
logos already in master-data.json carry over by person id."""
import csv, json, re, sys, pathlib
S=pathlib.Path(__file__).parent
args=sys.argv[1:]; src=args[0]; skip={a.lower() for a in args[args.index('--skip')+1:]} if '--skip' in args else set()
old=json.loads((S/'master-data.json').read_text())
prev={p['id']:p for p in old['people']}
slug=lambda s:re.sub(r'[^a-z0-9]+','-',s.lower()).strip('-')
ALIAS={'nancy-zhou':'nancy'}          # photo supplied before her registration arrived
people=[]
for r in csv.DictReader(open(src)):
    if r['approval_status']!='approved' or r['name']=='MedTech North': continue
    name=' '.join(w[:1].upper()+w[1:] for w in r['name'].split())
    if name=='Mostafa': name='Mostafa Abdelmeguid'
    rid=slug(name)
    if name=='Rellia Health': name='Megan Kane'; rid='rellia-health'
    if name.lower() in skip: continue
    title=r['What is your job title?'].strip().replace(' - ',', ').replace(' / ','\u00a0/ ')   # the slash stays on the first line
    company=r['What company do you work for?'].strip()
    cat=', '.join(t.strip() for t in r['Ecosystem contribution'].split(',') if t.strip() and t.strip()!='Other')
    note=''
    if company=='NA': company=''
    if company=='Genieainow.com': company='GenieAI Now'
    if rid=='reham-saied-el-nahrawy':
        title=''; company=''
        note="Held back: registered as Pharmacist at 'Pharmacy'. The July room logged her as a pharmacy assistant and Pharmacist is a protected title in Ontario. Type her title and workplace here once she confirms."
    if rid=='esraa-hassan':
        company=''
        note="Held back: she registered the College of Health and Care Professionals of British Columbia, which is her regulator, not an employer. Her public profile shows a registered dietitian, so the title stands."
    if rid=='diaa-abdallah':
        company='Lifescience Dynamics'
        note="Held back: he also registered University of Toronto, from a humber.ca address. Confirm which institution he wants named before adding it."
    marker=0 if ('Founder' in cat or cat in ('Student','')) else 1
    had=prev.get(rid) or prev.get(ALIAS.get(rid,''),{}) or {}
    people.append(dict(id=rid,name=name,title=title,company=company,category=cat,marker=marker,photo=had.get('photo'),note=note))
old['people']=people
(S/'master-data.json').write_text(json.dumps(old,ensure_ascii=False,indent=1))
for p in sorted(people,key=lambda p:p['name']):
    print(f"{p['name']:24}| {p['title'][:40]:40}| {p['company'][:22]:22}| {'PHOTO' if p['photo'] else '-'}")
print(len(people),'speakers')
