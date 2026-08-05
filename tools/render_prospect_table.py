#!/usr/bin/env python3
"""Render data/prospects/scored.json into the artifact page body.

Honors the project design system from CLAUDE.md:
  --mn-red #c41230 is the ask, used for actions only, never decoration.
  --mn-ink #16191d is the argument.
Product hues are categorical and deliberately quieter than the red.
"""
import json, html, datetime

d = json.load(open("data/prospects/scored.json", encoding="utf-8"))
rows, counts, tiers = d["rows"], d["counts"], d["tiers"]
total = len(rows)
known_pct = round(100 * (1 - d["unknowns"] / (total * 8)))

HEAD = """<title>MedTech North Prospect Table</title>
<style>
:root{
  --ink:#16191d; --paper:#faf8f7; --card:#ffffff; --line:#e4dfdd;
  --muted:#6f6763; --faint:#9a918c;
  --red:#c41230;
  --meetup:#3d5a80; --dinner:#2f6b5f; --convening:#5b3a58;
  --bar:#ddd6d3;
  --sans:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
  --mono:ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,monospace;
}
@media (prefers-color-scheme:dark){
  :root{--ink:#ece8e6; --paper:#141618; --card:#1c1f22; --line:#2e3236;
        --muted:#9d9691; --faint:#6f6763; --red:#e8536a; --bar:#33383c;
        --meetup:#7ea2cc; --dinner:#5fae9b; --convening:#b087ac;}
}
:root[data-theme="dark"]{--ink:#ece8e6; --paper:#141618; --card:#1c1f22; --line:#2e3236;
  --muted:#9d9691; --faint:#6f6763; --red:#e8536a; --bar:#33383c;
  --meetup:#7ea2cc; --dinner:#5fae9b; --convening:#b087ac;}
:root[data-theme="light"]{--ink:#16191d; --paper:#faf8f7; --card:#ffffff; --line:#e4dfdd;
  --muted:#6f6763; --faint:#9a918c; --red:#c41230; --bar:#ddd6d3;
  --meetup:#3d5a80; --dinner:#2f6b5f; --convening:#5b3a58;}

*{box-sizing:border-box}
body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);
     font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased}
.wrap{max-width:1240px;margin:0 auto;padding:32px 20px 80px;display:flex;flex-direction:column;gap:24px}

header h1{margin:0;font-size:26px;letter-spacing:-.02em;font-weight:650;text-wrap:balance}
header p{margin:6px 0 0;color:var(--muted);max-width:66ch}
.gen{font-family:var(--mono);font-size:12px;color:var(--faint);margin-top:4px}

.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}
.stat{background:var(--card);border:1px solid var(--line);border-radius:4px;padding:12px 14px;
      display:flex;flex-direction:column;gap:2px}
.stat b{font-family:var(--mono);font-size:24px;font-weight:600;font-variant-numeric:tabular-nums;letter-spacing:-.02em}
.stat span{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted)}
.stat.q b{color:var(--red)}

.controls{display:flex;flex-wrap:wrap;gap:8px;align-items:center;
          background:var(--card);border:1px solid var(--line);border-radius:4px;padding:10px 12px}
.controls input[type=search]{flex:1 1 200px;min-width:160px;padding:7px 10px;border:1px solid var(--line);
  border-radius:3px;background:var(--paper);color:var(--ink);font:inherit;font-size:14px}
.controls input[type=search]:focus-visible,.chip:focus-visible{outline:2px solid var(--red);outline-offset:1px}
.chip{border:1px solid var(--line);background:transparent;color:var(--muted);font:inherit;font-size:13px;
      padding:6px 11px;border-radius:3px;cursor:pointer}
.chip:hover{color:var(--ink);border-color:var(--muted)}
.chip[aria-pressed="true"]{background:var(--red);border-color:var(--red);color:#fff}
.grp{display:flex;gap:6px;align-items:center}
.grp>em{font-style:normal;font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:var(--faint);margin-right:2px}

.tablewrap{overflow-x:auto;background:var(--card);border:1px solid var(--line);border-radius:4px}
table{border-collapse:collapse;width:100%;min-width:900px}
thead th{position:sticky;top:0;background:var(--card);z-index:2;text-align:left;
  font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);font-weight:600;
  padding:11px 12px;border-bottom:1px solid var(--line);white-space:nowrap}
thead th.s{cursor:pointer;user-select:none}
thead th.s:hover{color:var(--ink)}
thead th.num{text-align:right}
tbody tr{border-bottom:1px solid var(--line);cursor:pointer}
tbody tr:last-child{border-bottom:0}
tbody tr:hover{background:color-mix(in srgb,var(--paper) 60%,transparent)}
td{padding:10px 12px;vertical-align:middle}
td.num{text-align:right;font-family:var(--mono);font-variant-numeric:tabular-nums;font-size:14px}
.co{font-weight:600;letter-spacing:-.01em}
.city{font-size:12px;color:var(--muted);margin-top:1px}
.tier{display:inline-block;width:18px;text-align:center;font-family:var(--mono);font-weight:600;font-size:12px}
.tier-A{color:var(--red)}.tier-B{color:var(--muted)}.tier-C{color:var(--faint)}
.pill{display:inline-block;padding:2px 8px;border-radius:2px;font-size:11px;font-weight:600;
      letter-spacing:.04em;text-transform:uppercase;color:#fff;white-space:nowrap}
.p-Meetup{background:var(--meetup)}.p-Dinner{background:var(--dinner)}.p-Convening{background:var(--convening)}
.sc{display:flex;flex-direction:column;align-items:flex-end;gap:3px}
.sc i{display:block;height:2px;background:var(--bar);width:44px;border-radius:1px;overflow:hidden}
.sc i b{display:block;height:100%}
.b-m{background:var(--meetup)}.b-d{background:var(--dinner)}.b-c{background:var(--convening)}
.dim{color:var(--faint)}
.q{display:inline-flex;gap:2px;align-items:center}
.q u{display:block;width:4px;height:10px;background:var(--bar);border-radius:1px;text-decoration:none}
.q u.on{background:var(--red)}
.detail td{background:var(--paper);padding:16px 12px 20px}
.detail .cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}
.detail h4{margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted)}
.detail ul{margin:0;padding-left:15px;font-size:13px;color:var(--muted)}
.detail li{margin:2px 0}
.detail .note{font-size:13px;margin:0 0 12px;max-width:70ch}
.detail a{color:var(--red);font-size:12px;font-family:var(--mono);word-break:break-all}
footer{color:var(--muted);font-size:13px;max-width:70ch}
footer code{font-family:var(--mono);font-size:12px;background:var(--card);padding:1px 5px;border:1px solid var(--line);border-radius:2px}
.empty{padding:36px 12px;text-align:center;color:var(--muted)}
@media (prefers-reduced-motion:no-preference){tbody tr{transition:background .12s ease}}
</style>"""

BODY = """<div class="wrap">
<header>
  <h1>Prospect table</h1>
  <p>Every company scored against all three products. The table says which one to sell them, and how much of that score rests on things we have actually verified.</p>
  <div class="gen">generated __GEN__ from companies.csv · scores are derived, never typed</div>
</header>

<div class="stats">
  <div class="stat"><b>__TOTAL__</b><span>companies</span></div>
  <div class="stat"><b>__A__</b><span>tier A, call now</span></div>
  <div class="stat"><b>__CM__</b><span>best fit meetup</span></div>
  <div class="stat"><b>__CD__</b><span>best fit dinner</span></div>
  <div class="stat"><b>__CC__</b><span>best fit convening</span></div>
  <div class="stat q"><b>__KNOWN__%</b><span>fields verified</span></div>
</div>

<div class="controls">
  <input type="search" id="q" placeholder="Search company, city, note" aria-label="Search companies">
  <div class="grp"><em>product</em>
    <button class="chip" data-f="best" data-v="Meetup" aria-pressed="false">Meetup</button>
    <button class="chip" data-f="best" data-v="Dinner" aria-pressed="false">Dinner</button>
    <button class="chip" data-f="best" data-v="Convening" aria-pressed="false">Convening</button>
  </div>
  <div class="grp"><em>tier</em>
    <button class="chip" data-f="tier" data-v="A" aria-pressed="false">A</button>
    <button class="chip" data-f="tier" data-v="B" aria-pressed="false">B</button>
    <button class="chip" data-f="tier" data-v="C" aria-pressed="false">C</button>
  </div>
  <div class="grp"><em>data</em>
    <button class="chip" id="verified" aria-pressed="false">Well verified only</button>
  </div>
</div>

<div class="tablewrap">
<table>
  <thead><tr>
    <th class="s" data-k="tier">Tier</th>
    <th class="s" data-k="company">Company</th>
    <th class="s" data-k="best">Best fit</th>
    <th class="s num" data-k="m">Meetup</th>
    <th class="s num" data-k="d">Dinner</th>
    <th class="s num" data-k="c">Convening</th>
    <th class="s num" data-k="unknowns">Gaps</th>
  </tr></thead>
  <tbody id="tb"></tbody>
</table>
</div>
<div class="empty" id="empty" hidden>Nothing matches those filters.</div>

<footer>
  <p><strong>Gaps</strong> counts how many of the eight research fields are still unknown for that company. A high score with five gaps is a hypothesis. A high score with zero is a call. Sort by it to see which rows need research before they need outreach.</p>
  <p>Edit <code>data/prospects/companies.csv</code>, then run <code>python3 tools/build_prospect_table.py</code> and <code>python3 tools/render_prospect_table.py</code>. Scoring rules live in <code>data/prospects/schema.md</code>. Change a rule, rerun, and git shows exactly which companies moved.</p>
</footer>
</div>

<script>
const ROWS = __DATA__;
let filters = {best:null, tier:null}, verifiedOnly = false, sortKey = null, sortDir = -1;
const tb = document.getElementById('tb'), q = document.getElementById('q'), empty = document.getElementById('empty');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const bar = (v, cls) => `<span class="sc"><span>${v}</span><i><b class="${cls}" style="width:${v}%"></b></i></span>`;
const gaps = n => `<span class="q" title="${8-n} of 8 fields verified">` +
  Array.from({length:8},(_,i)=>`<u class="${i<n?'on':''}"></u>`).join('') + `</span>`;

function view(){
  let r = ROWS.filter(x=>{
    if (filters.best && x.best !== filters.best) return false;
    if (filters.tier && x.tier !== filters.tier) return false;
    if (verifiedOnly && x.unknowns > 2) return false;
    const t = q.value.trim().toLowerCase();
    if (t && !(x.company+' '+x.city+' '+x.note+' '+x.source).toLowerCase().includes(t)) return false;
    return true;
  });
  if (sortKey) r = [...r].sort((a,b)=>{
    const A=a[sortKey], B=b[sortKey];
    return (typeof A === 'number' ? A-B : String(A).localeCompare(String(B))) * sortDir;
  });
  return r;
}

function render(){
  const r = view();
  empty.hidden = r.length > 0;
  tb.innerHTML = r.map(x=>`
   <tr data-id="${esc(x.id)}" tabindex="0" aria-expanded="false">
    <td><span class="tier tier-${x.tier}">${x.tier}</span></td>
    <td><div class="co">${esc(x.company)}</div><div class="city">${esc(x.city)}</div></td>
    <td><span class="pill p-${x.best}">${x.best}</span></td>
    <td class="num">${bar(x.m,'b-m')}</td>
    <td class="num">${bar(x.d,'b-d')}</td>
    <td class="num">${bar(x.c,'b-c')}</td>
    <td class="num">${gaps(x.unknowns)}</td>
   </tr>`).join('');
}

function detailRow(x){
  const list = k => `<div><h4>${k} ${x[k==='Meetup'?'m':k==='Dinner'?'d':'c']}</h4><ul>` +
    (x.why[k].length ? x.why[k].map(w=>`<li>${esc(w)}</li>`).join('') : '<li class="dim">nothing scored</li>') + '</ul></div>';
  const ev = x.evidence.length
    ? `<div><h4>Evidence</h4>${x.evidence.map(u=>`<div><a href="${esc(u)}" target="_blank" rel="noopener">${esc(u)}</a></div>`).join('')}</div>`
    : `<div><h4>Evidence</h4><ul><li class="dim">none recorded. Research before contact</li></ul></div>`;
  const facts = `<div><h4>Known</h4><ul>
      <li>vertical: ${esc(x.vertical)}</li><li>space: ${esc(x.space)}</li>
      <li>motion: ${esc(x.motion)}</li><li>stake: ${esc(x.stake)}</li>
      <li>runs events: ${esc(x.events)}</li>
      ${x.trigger?`<li>trigger: ${esc(x.trigger)}</li>`:''}</ul></div>`;
  return `<tr class="detail"><td colspan="7">
      ${x.note?`<p class="note">${esc(x.note)}</p>`:''}
      <div class="cols">${list('Meetup')}${list('Dinner')}${list('Convening')}${facts}${ev}</div>
    </td></tr>`;
}

function toggle(tr){
  const nxt = tr.nextElementSibling;
  if (nxt && nxt.classList.contains('detail')){ nxt.remove(); tr.setAttribute('aria-expanded','false'); return; }
  document.querySelectorAll('tr.detail').forEach(n=>{
    n.previousElementSibling?.setAttribute('aria-expanded','false'); n.remove();
  });
  const x = ROWS.find(v=>v.id===tr.dataset.id);
  tr.insertAdjacentHTML('afterend', detailRow(x));
  tr.setAttribute('aria-expanded','true');
}

tb.addEventListener('click', e=>{ const tr=e.target.closest('tr'); if(tr&&!tr.classList.contains('detail')) toggle(tr); });
tb.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ const tr=e.target.closest('tr');
  if(tr&&!tr.classList.contains('detail')){ e.preventDefault(); toggle(tr);} }});
q.addEventListener('input', render);
document.querySelectorAll('.chip[data-f]').forEach(b=>b.addEventListener('click',()=>{
  const f=b.dataset.f, v=b.dataset.v, on = filters[f]===v;
  filters[f] = on ? null : v;
  document.querySelectorAll(`.chip[data-f="${f}"]`).forEach(o=>o.setAttribute('aria-pressed', String(!on && o===b)));
  render();
}));
document.getElementById('verified').addEventListener('click', e=>{
  verifiedOnly = !verifiedOnly; e.currentTarget.setAttribute('aria-pressed', String(verifiedOnly)); render();
});
document.querySelectorAll('thead th.s').forEach(th=>th.addEventListener('click',()=>{
  const k=th.dataset.k;
  if (sortKey===k) sortDir = -sortDir; else { sortKey=k; sortDir = (k==='company'||k==='tier') ? 1 : -1; }
  render();
}));
render();
</script>"""

page = HEAD + BODY
page = (page.replace("__DATA__", json.dumps(rows))
            .replace("__GEN__", d["generated"]).replace("__TOTAL__", str(total))
            .replace("__A__", str(tiers["A"])).replace("__CM__", str(counts["Meetup"]))
            .replace("__CD__", str(counts["Dinner"])).replace("__CC__", str(counts["Convening"]))
            .replace("__KNOWN__", str(known_pct)))

open("data/prospects/table.html", "w", encoding="utf-8").write(page)
print(f"wrote data/prospects/table.html  ({total} rows, {known_pct}% fields verified)")
