# Perplexity Deep Research Prompts: Co-Host Discovery

Copy-paste ready. Each prompt is self-contained, so no repo context is needed by the tool running it. Profile these produce against: `data/cohost-targets.md`.

**Run order.** Prompt 1 to build the universe. Prompts 2A to 2E to go deep per archetype where prompt 1 is thin. Prompt 3 to find the named human at each shortlisted company. Prompt 4 monthly, to catch triggers. Do not run 3 until the list is scored and cut, because it is the expensive one.

---

## Prompt 1. The master sweep

```
You are a B2B market researcher building a target list of Canadian companies that could host and pay for a private, invitation-only professional gathering held at their own offices.

CONTEXT FOR YOUR JUDGEMENT, NOT FOR OUTPUT
A small events company designs, composes and facilitates 25 to 40 person invitation-only rooms of Canadian healthcare professionals (dentists, pharmacists, physiotherapists, nurses, researchers, health system leaders). A corporate client provides its own premises and pays a production fee of CAD $25,000 to $45,000 per room. The client receives co-host billing and a welcome address. The client does NOT receive the guest list, attendee contact data, or stage time. So the ideal client is a company that wants proximity to Canadian healthcare professionals but has no commercial stake in what those professionals conclude.

FIND: Canadian companies meeting ALL FIVE criteria below.

1. PHYSICAL SPACE. Has a Canadian office with space to seat 25 to 40 people for a private event. Strongest evidence is a named facility such as an executive briefing centre, innovation lab, customer experience centre, "Greenhouse", "wavespace", town hall floor, or a documented past event held at their own address.
2. HEALTHCARE VERTICAL. Has healthcare, life sciences, or health systems as a named industry vertical, practice area, or ICP in Canada specifically.
3. CANADIAN MARKETING FUNCTION. Employs at least one person in Canada in field marketing, industry marketing, events marketing, customer marketing, community, or account-based marketing.
4. CONSIDERED SALES MOTION. Sells via a relationship-led enterprise or professional sales process with contract values above roughly CAD $50,000 and sales cycles of three months or more. EXCLUDE product-led, self-serve, or transactional businesses.
5. LOW CATEGORY STAKE. Their product or service does not compete in, and has no direct commercial interest in, the clinical or professional subject matter the room would discuss. A cloud platform, consultancy, bank or law firm qualifies. A dental software vendor discussing dental software does not.

HARD EXCLUSIONS
- No Canadian office
- Fewer than 50 Canadian employees
- Pharmaceutical companies promoting a specific drug or vaccine
- Healthcare not present as a named vertical
- Companies whose entire Canadian presence is a reseller or distributor

GEOGRAPHY, in priority order: Mississauga and the Greater Toronto Area, downtown Toronto, Montreal, Vancouver, Ottawa, Waterloo and Kitchener, Calgary.

OUTPUT
A single markdown table, one row per company, minimum 40 rows, sorted by the city priority above. Columns:

| Company | Canadian city and office address | Approx. Canadian headcount | Hostable space: named facility or evidence | Healthcare vertical in Canada: evidence | Canadian marketing function: evidence | Sales motion | Category stake: ORTHOGONAL / ADJACENT / CONFLICTED | Trigger in last 12 months | Source URLs |

RULES
- Every claim in every cell must be supported by a source URL in the final column. Multiple URLs are fine.
- If you cannot verify a cell, write UNKNOWN. Do not infer, estimate, or fill from general knowledge. An UNKNOWN is more useful to me than a guess.
- Prefer evidence from the last 24 months. Note the date of anything older.
- "Trigger" means one of: hired a Canadian healthcare leader, launched a Canadian healthcare product or practice, opened or expanded a Canadian office, published a Canadian healthcare customer story, or sponsored a Canadian healthcare event. Include the date.
- Do not include companies you cannot verify have a Canadian office.

After the table, list separately: any company you considered and rejected, with the criterion it failed, in one line each.
```

---

## Prompt 2A. Professional services and law

```
Build a list of professional services firms and law firms in Canada that (a) have a healthcare, life sciences, or health-industry practice group in Canada, and (b) own or operate a dedicated client convening or innovation facility in a Canadian city, and (c) have publicly run invitation-only client events, roundtables, or executive dinners in the last 24 months.

Include the Big Four, mid-market accounting firms, management consultancies, and national law firms with life sciences, health law, or emerging companies practices.

For each firm return: firm name, Canadian cities with qualifying space, the name of the facility if it has one, the name of the healthcare or life sciences practice group, the practice group leader in Canada with title, at least one documented example of an invitation-only event they hosted with a date and link, and source URLs for each claim.

Write UNKNOWN for anything you cannot source. Minimum 20 firms. Sort by strength of documented convening activity, most active first.
```

## Prompt 2B. Horizontal technology platforms with a Canadian healthcare vertical

```
Build a list of technology companies with a Canadian office that sell horizontal software or infrastructure (cloud, data, AI, security, collaboration, identity, communications, analytics, ERP, CRM) into Canadian healthcare organisations, and that have healthcare named as an industry vertical in Canada.

I am specifically NOT looking for clinical software, electronic medical records, medical devices, or diagnostics. I want companies whose product is industry-neutral but who sell into healthcare as a named vertical.

For each company return: company name, Canadian office locations, approximate Canadian headcount, whether they operate an executive briefing centre or customer experience centre in Canada and its name, the Canadian healthcare or public sector industry lead with name and title if findable, any Canadian healthcare customer case study with a link, whether they exhibited or sponsored a Canadian health technology event in the last 18 months with which event and when, and source URLs.

Flag with a HIRED marker any company that has appointed a Canada-based healthcare industry lead, healthcare account executive team lead, or health vertical marketing lead in the last 12 months, and give the date and source.

Write UNKNOWN for unsourceable fields. Minimum 30 companies. Sort so that companies with a HIRED marker appear first.
```

## Prompt 2C. Financial institutions, insurers and benefits administrators

```
Build a list of Canadian banks, insurers, benefits administrators, and financial services firms that operate a dedicated programme serving healthcare professionals (physicians, dentists, pharmacists, veterinarians, allied health practitioners) as a customer segment in Canada.

For each: institution name, the name of the healthcare professional programme, which professions it covers, the Canadian cities where it has offices with event-capable space, evidence of the institution hosting or sponsoring professional education or networking events for healthcare practitioners in the last 24 months with dates and links, the name and title of whoever leads the healthcare professional segment in Canada if findable, and source URLs.

Include dental and medical professional insurance and financial services bodies as well as retail and commercial banks.

Write UNKNOWN where unsourceable. Minimum 15 institutions.
```

## Prompt 2D. Canadian health technology scale-ups

```
Build a list of Canadian-headquartered health technology and digital health companies that are Series C or later, or have more than 150 employees, and that have a physical Canadian office.

For each: company name, headquarters city and office locations, approximate headcount, total funding raised and most recent round with date, what they sell and to whom (which healthcare professional or organisation type is their buyer), whether they have a marketing or community function based in Canada, evidence of them hosting or sponsoring events for healthcare professionals in the last 24 months with links, and source URLs.

Additionally, for each company state in one sentence which clinical or professional topics they would have a commercial interest in the outcome of, since I need to avoid pairing a company with a discussion it has a stake in.

Write UNKNOWN where unsourceable. Minimum 25 companies. Exclude companies with no Canadian office and companies below 150 employees unless they have raised Series C or later.
```

## Prompt 2E. The Mississauga and GTA life sciences corridor

```
Build a comprehensive list of life sciences, medtech, pharmaceutical, and health technology companies with a corporate office, Canadian headquarters, or major facility in Mississauga, Brampton, Oakville, Burlington, Markham, or Vaughan, Ontario.

For each: company name, exact office address, what the site is (Canadian head office, manufacturing, R&D, sales and marketing, distribution), approximate headcount at that site, whether the site includes corporate office space capable of hosting a 25 to 40 person private event, the Canadian commercial or marketing leadership if findable, and source URLs.

Prioritise sites that are Canadian head offices or sales and marketing operations over pure manufacturing or distribution sites, because I need companies with commercial teams and corporate meeting space, not factories.

Use Invest Mississauga, Invest Ontario, municipal economic development directories, Life Sciences Ontario, and company websites as sources. Write UNKNOWN where unsourceable. Minimum 40 companies, sorted by proximity to Mississauga city centre.
```

---

## Prompt 3. Find the buyer, one company at a time

Run only on the scored shortlist. Substitute the company name.

```
For the company [COMPANY NAME] in Canada, identify the specific people who would own the budget for a private, invitation-only executive event held at their Canadian office for an audience of healthcare professionals.

Return every person you can find, with name, exact job title, city, LinkedIn URL, and a source, in these categories:
1. Field marketing, industry marketing, events marketing, or customer marketing, based in Canada
2. Healthcare, life sciences, or public sector industry lead, based in Canada
3. The most senior Canadian marketing leader
4. The most senior Canadian healthcare or life sciences commercial leader
5. Anyone in Canada whose title includes community, partnerships, or ecosystem

Also find and report:
- Any private or invitation-only event this company has run at its own Canadian premises in the last 24 months: what it was, when, who it was for, and a link
- Which Canadian healthcare or health technology conferences they exhibited at or sponsored in the last 18 months
- Any Canadian healthcare leadership hire announced in the last 12 months, with date
- The company's fiscal year end
- The address of their main Canadian office and any named briefing, innovation, or experience facility there

Write UNKNOWN for anything you cannot source. Do not guess names or titles under any circumstances. Cite a URL for every person and every claim.
```

---

## Prompt 4. Monthly trigger sweep

The highest-converting signal is a newly appointed Canadian healthcare leader. Run this on a calendar reminder.

```
Search for announcements from the last 45 days of any of the following in Canada:

1. A technology, consulting, financial services, or professional services company appointing a Canada-based leader for healthcare, life sciences, health systems, or public sector health
2. A company with a Canadian office launching a healthcare or life sciences practice, vertical, product, or go-to-market team in Canada
3. A non-Canadian company announcing entry into the Canadian healthcare market
4. A company opening or expanding a Canadian office that includes customer briefing, innovation, or event space

For each: company, person's name and title where applicable, date, city, a one-line summary, and the source URL. Exclude clinical provider organisations, hospitals, and government bodies. Exclude appointments that are internal promotions with no new mandate, and say so if you cannot tell.

Return as a table sorted newest first. If there is nothing in a category, say so rather than padding the list.
```

---

## Scoring the output

Perplexity returns a universe. This turns it into a call order. Score each row out of 100, work the list downward, and requalify anything scoring below 45 before spending time on it.

| Points | Criterion |
|---|---|
| **25** | Named hostable facility at a Canadian address, verified |
| **20** | Canadian healthcare leader hired in the last 12 months |
| **15** | Documented invitation-only event they ran themselves in the last 24 months |
| **10** | Named Canadian field or industry marketing person identified |
| **10** | Category stake marked ORTHOGONAL |
| **10** | Canadian healthcare vertical named on their own site |
| **5** | Sponsored or exhibited at a Canadian health event in the last 18 months |
| **5** | Fiscal year ends within four months |
| **−20** | Category stake marked CONFLICTED |
| **−15** | Space is UNKNOWN after research |

**Above 70:** call this week. **45 to 70:** call after the first tier is worked. **Below 45:** leave it, and do not let a recognisable brand name pull it up the list.

---

## Two things the research will not tell you

**Whether they will accept the composition rule.** Every co-host will ask, in some form, whether they can invite their own people. The answer is that they may nominate and MedTech North composes, and they do not see the list in advance. No amount of research predicts who accepts that. It is a first-call question, and it is the one that determines whether the deal is a co-host engagement or a venue rental with a higher price tag.

**Whether the room's topic can be made orthogonal to them.** A CONFLICTED marker is not always fatal. It means the room's subject has to be chosen so that the co-host has no stake in the conclusion, and sometimes that is easy and sometimes it makes the room pointless. That judgement is a conversation, not a search result.
