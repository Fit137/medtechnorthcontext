/* ============================================================
   BUILD NORTH · the opening, the names slide, speaker slides
   The file opens on six scenes that sit behind the host's
   welcome; the last hands over to the names. Click a name and
   that speaker's slide opens. All speakers
   (top left), Esc or the browser's back returns to the names.
   On a speaker slide the arrow keys, Page Up and Page Down move
   to the previous or next speaker. Operator keys: E edit · T
   timer · F full screen · Ctrl or Cmd S saves a copy with every
   edit and image inside.
   ============================================================ */
(function(){
"use strict";
const PRISTINE='<!DOCTYPE html>\n'+document.documentElement.outerHTML;
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const C={red:'#c41230',redB:'#ef3340',mist:'#b9cedd',sage:'#b7cfc4'};
const MK=[C.redB,'#ffffff',C.mist,C.sage];   /* founders · clinicians · capital · policy */
const $=(s,r)=>(r||document).querySelector(s), $$=(s,r)=>Array.prototype.slice.call((r||document).querySelectorAll(s));
const lerp=(a,b,k)=>a+(b-a)*k, clamp=(v,a,b)=>v<a?a:v>b?b:v, easeOut=t=>1-Math.pow(1-t,3);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
let DT=1/60; const kf=k=>1-Math.pow(1-k,Math.min(4,DT*60));

/* ---------- data: embedded, then this browser's newer edits ---------- */
const LS='mn-build-north-master-2026-09-30';
let DATA=JSON.parse($('#mn-data').textContent);
try{const s=JSON.parse(localStorage.getItem(LS)||'null'); if(s&&s.people&&s.rev>(DATA.rev||0)) DATA=s;}catch(e){}
DATA.text=DATA.text||{}; DATA.logos=DATA.logos||{}; delete DATA.lugu;
let storeOK=true, saveT=0;
function persist(){ DATA.rev=Date.now(); clearTimeout(saveT);
  saveT=setTimeout(()=>{try{localStorage.setItem(LS,JSON.stringify(DATA));storeOK=true;}catch(e){storeOK=false;} opMsg();},200); }
const people=()=>DATA.people.slice().sort((a,b)=>(a.name||'￿').localeCompare(b.name||'￿','en',{sensitivity:'base'}));
const byId=id=>DATA.people.find(p=>p.id===id);
const SLOT=()=>Math.max(1,Math.min(12,+DATA.slotMinutes||5));

/* ---------- the partner deck's geometry ---------- */
const CAN=[[0.03,0.42],[0.12,0.34],[0.20,0.38],[0.24,0.30],[0.31,0.33],[0.34,0.24],[0.42,0.27],[0.46,0.18],[0.55,0.22],[0.60,0.14],[0.68,0.20],[0.74,0.16],[0.82,0.24],[0.90,0.22],[0.97,0.30],[0.93,0.42],[0.86,0.46],[0.80,0.54],[0.74,0.52],[0.70,0.62],[0.62,0.60],[0.58,0.70],[0.66,0.74],[0.60,0.82],[0.52,0.78],[0.46,0.86],[0.40,0.80],[0.34,0.84],[0.30,0.76],[0.24,0.80],[0.20,0.70],[0.13,0.72],[0.10,0.62],[0.05,0.56]];
const TOR=[0.63,0.72];
function inPoly(x,y,p){let s=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const xi=p[i][0],yi=p[i][1],xj=p[j][0],yj=p[j][1];if(((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))s=!s;}return s;}
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function shape(t,x,y,r,c){
  t=((t%4)+4)%4;const f=v=>(+v).toFixed(2);
  if(t===0){let s='';for(let k=0;k<6;k++)s+='<rect x="'+f(x-r*.24)+'" y="'+f(y-r*1.22)+'" width="'+f(r*.48)+'" height="'+f(r*.72)+'" fill="'+c+'" transform="rotate('+(k*60)+' '+f(x)+' '+f(y)+')"></rect>';
    s+='<path fill-rule="evenodd" fill="'+c+'" d="M'+f(x+r*.88)+' '+f(y)+'a'+f(r*.88)+' '+f(r*.88)+' 0 1 0 '+f(-r*1.76)+' 0a'+f(r*.88)+' '+f(r*.88)+' 0 1 0 '+f(r*1.76)+' 0M'+f(x+r*.36)+' '+f(y)+'a'+f(r*.36)+' '+f(r*.36)+' 0 1 1 '+f(-r*.72)+' 0a'+f(r*.36)+' '+f(r*.36)+' 0 1 1 '+f(r*.72)+' 0"></path>';return s;}
  if(t===1){const a=r*.42,b=r*1.18;return '<path fill="'+c+'" d="M'+f(x-a)+' '+f(y-b)+'h'+f(a*2)+'v'+f(b-a)+'h'+f(b-a)+'v'+f(a*2)+'h'+f(-(b-a))+'v'+f(b-a)+'h'+f(-a*2)+'v'+f(-(b-a))+'h'+f(-(b-a))+'v'+f(-a*2)+'h'+f(b-a)+'Z"></path>';}
  if(t===2){const w=r*.58,g=r*.24,x0=x-(w*3+g*2)/2,base=y+r*1.1;return [r*.95,r*1.55,r*2.2].map((h,i)=>'<rect x="'+f(x0+i*(w+g))+'" y="'+f(base-h)+'" width="'+f(w)+'" height="'+f(h)+'" fill="'+c+'"></rect>').join('');}
  let s='<path fill="'+c+'" d="M'+f(x-r*1.15)+' '+f(y-.42*r)+'L'+f(x)+' '+f(y-1.2*r)+'L'+f(x+r*1.15)+' '+f(y-.42*r)+'Z"></path>';
  [-0.92,-0.19,0.54].forEach(o=>{s+='<rect x="'+f(x+o*r)+'" y="'+f(y-.24*r)+'" width="'+f(r*.38)+'" height="'+f(r*1.05)+'" fill="'+c+'"></rect>';});
  return s+'<rect x="'+f(x-r*1.15)+'" y="'+f(y+.92*r)+'" width="'+f(r*2.3)+'" height="'+f(r*.3)+'" fill="'+c+'"></rect>';
}
function mark(h,a,b){return '<svg viewBox="0 0 40 68" width="'+(h*40/68).toFixed(1)+'" height="'+h+'" style="display:block;overflow:visible" aria-label="MedTech North"><polygon points="20,6 34,34 6,34" fill="'+a+'"></polygon><polygon points="20,62 34,34.5 6,34.5" fill="'+b+'"></polygon></svg>';}
/* a drawn leaf mark: never the flag, never the Government of Canada wordmark */
function leaf(h,fill){return '<svg viewBox="2940 400 3720 4030" width="'+(h*3720/4030).toFixed(1)+'" height="'+h+'" aria-label="Canada"><path fill="'+fill+'" d="M4890 4430l-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"></path></svg>';}
function picSVG(t,size,col){return '<svg viewBox="-12 -12 24 24" width="'+size+'" height="'+size+'" style="display:block;overflow:visible;flex:none">'+shape(t,0,0,8.4,col||MK[((t%4)+4)%4])+'</svg>';}
function svgBox(vb,inner,z){const d=document.createElement('div');d.style.cssText='position:absolute;inset:0'+(z!=null?';transform:translateZ('+z+'px)':'');
  d.innerHTML='<svg viewBox="'+vb+'" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">'+inner+'</svg>';return d;}
function dotField(rig,o){
  const W=1000,H=620,rnd=mulberry(o.seed||7),Z=o.planes,px=TOR[0]*W,py=TOR[1]*H,far=Math.hypot(W,H)*0.62,pts=[];
  for(let y=16;y<H-14;y+=o.step) for(let x=8;x<W-8;x+=o.step){ if(!inPoly(x/W,y/H,CAN)) continue; pts.push([x+(rnd()-.5)*6,y+(rnd()-.5)*6,Math.floor(rnd()*Z.length)]); }
  Z.forEach((z,k)=>{let s='';pts.forEach(p=>{if(p[2]!==k)return;const d=clamp(Math.hypot(p[0]-px,p[1]-py)/far,0,1);
    s+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+o.r+'" fill="#fff" opacity="'+(1-d*0.5).toFixed(2)+'"></circle>';}); rig.appendChild(svgBox('0 0 '+W+' '+H,s,z));});
  rig.appendChild(svgBox('0 0 '+W+' '+H,'<circle cx="'+px+'" cy="'+py+'" r="15" fill="none" stroke="'+C.redB+'" stroke-width="2.4" style="animation:mn-beacon 2.6s ease-in-out infinite"></circle><circle cx="'+px+'" cy="'+py+'" r="6" fill="'+C.redB+'"></circle>',Z[Z.length-1]+18));
}
function tracker(host){const s={tx:0,ty:0,x:0,y:0};
  if(!RM) host.addEventListener('pointermove',e=>{const r=host.getBoundingClientRect();s.tx=(e.clientX-r.left)/r.width-0.5;s.ty=(e.clientY-r.top)/r.height-0.5;},{passive:true});
  s.read=()=>{s.x=lerp(s.x,s.tx,kf(.1));s.y=lerp(s.y,s.ty,kf(.1));return s;};return s;}
function fitText(el,max,min,lines){ if(!el) return; let s=max; el.style.fontSize=s+'px';
  const lh=parseFloat(getComputedStyle(el).lineHeight)/s||1.1; while(s>min&&el.scrollHeight>s*lh*lines+2){s-=2;el.style.fontSize=s+'px';} }
function fitLine(el,max,min){ if(!el) return; let s=max; el.style.fontSize=s+'px'; while(s>min&&el.scrollWidth>el.clientWidth+1){s-=1;el.style.fontSize=s+'px';} }
const initials=n=>{const w=String(n||'').trim().split(/\s+/).filter(Boolean);return w.length?(w[0][0]+(w.length>1?w[w.length-1][0]:'')).toUpperCase():'';};
const logoKey=p=>slug(p.company)||slug(p.name)||p.id;
function probe(l,ok){ let i=0; const t=new Image(); t.onload=()=>ok(l[i]); t.onerror=()=>{i++; if(i<l.length) t.src=l[i];}; t.src=l[0]; }
function setText(el,v){ if(document.activeElement!==el&&el.textContent!==(v||'')) el.textContent=v||''; }

/* ---------- the two surfaces ---------- */
const stage=$('#stage'), master=$('#master'), person=$('#person');
const list=$('.names'), note=$('.note',person), ph=$('.ph',person), lg=$('.lg',person), tmr=$('.p-timer',person), nextup=$('.nextup',person);
let view='', cur=null, cursor=null, editing=false, order=[];

/* ---------- the names ---------- */
function renderList(){
  order=people(); list.innerHTML='';
  order.forEach(p=>{ const d=document.createElement('div'); d.className='nm'+(p.id===cursor?' cur':''); d.tabIndex=0; d.setAttribute('role','button'); d.dataset.id=p.id;
    d.innerHTML='<span class="pic">'+picSVG(p.marker,22)+'</span><span class="n">'+esc(p.name||'New name')+'</span>';
    d.setAttribute('aria-label','Open '+(p.name||'this speaker')+"'s slide");
    d.addEventListener('click',()=>open(p.id));
    d.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();open(p.id);} });
    d.addEventListener('focus',()=>markCursor(p.id));
    list.appendChild(d); fitLine($('.n',d),28,21); });
  const add=document.createElement('div'); add.className='nm add'; add.tabIndex=0; add.setAttribute('role','button');
  add.innerHTML='<span class="pic">'+picSVG(0,22,C.mist)+'</span><span class="n">Add a name</span>';
  add.addEventListener('click',addPerson); add.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();addPerson();} });
  list.appendChild(add);
  /* longer lists tighten so the column never reaches the rail */
  const rows=Math.ceil((order.length+(editing?1:0))/2); list.style.gridAutoRows=Math.max(50,Math.min(84,Math.floor(630/Math.max(1,rows))))+'px';
}
function markCursor(id){ cursor=id; $$('.nm[data-id]').forEach(el=>el.classList.toggle('cur',el.dataset.id===id)); }
function moveCursor(d){ const ids=order.map(p=>p.id); if(!ids.length) return;
  let i=ids.indexOf(cursor); i=i<0?0:clamp(i+d,0,ids.length-1);
  const el=$('.nm[data-id="'+ids[i]+'"]'); if(el) el.focus({preventScroll:true}); markCursor(ids[i]); }

/* ---------- the value map: the company at the hub, what it brings along three lanes ---------- */
const VF=['what','system','clinicians','healthtech'];
const LANES=[{t:3,c:C.sage},{t:1,c:'#ffffff'},{t:0,c:C.redB}];   /* health system · healthcare professionals · health tech */
const LY=[50,165,280], HUB=[330,165], ROWX=420;
const vmap=$('.vmap',person), vrig=$('.vm-rig',person), vlinks=$('.vm-links',person), vhub=$('.vm-hub',person), vrows=$$('.vm-row',person);
vlinks.innerHTML=LY.map((y,i)=>{ const d='M'+HUB[0]+' '+HUB[1]+'C'+(HUB[0]+54)+' '+HUB[1]+' '+(ROWX-54)+' '+y+' '+ROWX+' '+y;
  return '<g data-i="'+i+'"><path d="'+d+'" fill="none" stroke="rgba(255,255,255,.17)" stroke-width="1.6"></path>'+
    '<path class="u" d="'+d+'" fill="none" stroke="'+LANES[i].c+'" stroke-width="2.8" stroke-linecap="round"></path>'+
    '<circle cx="'+ROWX+'" cy="'+y+'" r="4.5" fill="'+LANES[i].c+'"></circle></g>'; }).join('')+
  '<circle cx="'+HUB[0]+'" cy="'+HUB[1]+'" r="11" fill="none" stroke="rgba(255,255,255,.32)" stroke-width="1.4"></circle><circle cx="'+HUB[0]+'" cy="'+HUB[1]+'" r="5.5" fill="#fff"></circle>';
const pulses=$$('.u',vlinks).map(el=>{ const L=el.getTotalLength(); el.setAttribute('stroke-dasharray','18 '+(L+40).toFixed(1)); return {el:el,L:L}; });
vrows.forEach((r,i)=>{ $('.vm-pic',r).innerHTML=picSVG(LANES[i].t,26,LANES[i].c); });
const wm=document.createElement('div'); wm.className='vm-wm'; $('.face',vhub).insertBefore(wm,$('.face',vhub).firstChild);
function paintValue(p){
  vmap.classList.toggle('none',!VF.some(k=>p[k]));
  $('.vm-hk .pic',vhub).innerHTML=picSVG(p.marker,18);
  $('.vm-hk .k',vhub).textContent=p.whatLabel||p.company||'What they do';
  wm.innerHTML=picSVG(p.marker,230,'#ffffff');
  setText($('.vm-ht',vhub),p.what);
  vrows.forEach((r,i)=>{ const f=r.dataset.f; setText($('.vm-v',r),p[f]); r.classList.toggle('off',!p[f]);
    $('g[data-i="'+i+'"]',vlinks).style.display=(p[f]||editing)?'':'none'; });
  fitText($('.vm-ht',vhub),27,19,5); vrows.forEach(r=>fitText($('.vm-v',r),22,17,2));
}

/* ---------- a speaker's slide ---------- */
function paintPerson(){
  const p=cur&&byId(cur); if(!p) return;
  $('.p-eye .pic',person).innerHTML=picSVG(p.marker,22);
  setText($('.p-name',person),p.name); setText($('.p-role .t',person),p.title); setText($('.p-role .o',person),p.company);
  setText($('.p-contrib',person),p.category); $('.p-cf',person).classList.toggle('empty',!p.category);
  paintValue(p);
  note.textContent=[p.note,p.check].filter(Boolean).join(' ');
  ph.querySelector('.ini').textContent=initials(p.name);
  let img=$('img',ph);
  const put=src=>{ if(!img){img=document.createElement('img');img.alt='';ph.insertBefore(img,ph.firstChild);} img.src=src; ph.classList.add('has'); };
  if(p.photo) put(p.photo); else { if(img){img.remove();img=null;} ph.classList.remove('has');
    const s=slug(p.name); if(s) probe(['headshots/'+s+'.jpg','headshots/'+s+'.jpeg','headshots/'+s+'.png','headshots/'+s+'.webp'],src=>{ if(cur===p.id&&!p.photo) put(src); }); }
  const key=logoKey(p);
  if(DATA.logos[key]) lg.innerHTML='<img alt="'+esc(p.company)+'" src="'+DATA.logos[key]+'">';
  else { lg.innerHTML=p.company?'<div class="lt">'+esc(p.company)+'</div>':'<span class="lp">'+picSVG(p.marker,30,'rgba(255,255,255,.8)')+'</span>';
    fitText($('.lt',lg),27,17,2);
    probe(['logos/'+key+'.svg','logos/'+key+'.png'],src=>{ if(cur===p.id&&!DATA.logos[key]) lg.innerHTML='<img alt="'+esc(p.company)+'" src="'+src+'">'; }); }
  const ids=order.map(q=>q.id), nx=byId(ids[ids.indexOf(p.id)+1]);
  $('.nn',nextup).textContent=nx?(nx.name||'New name'):'All speakers';
  fitText($('.p-name',person),92,64,2); fitLine($('.p-role',person),28,19); fitText($('.p-contrib',person),36,26,2);
}

/* ---------- the opening: six scenes behind the host's welcome ---------- */
const speech=$('#speech'), scenes=$$('.scene',speech), spNext=$('.sp-next',speech), spProg=$('.sp-prog',speech);
$('.sp-logo .m',speech).innerHTML=mark(46,'#ffffff','rgba(255,255,255,.46)');
let sc=0, sEnt=0, sT=performance.now();
function upTri(size,fill,stroke){ return '<svg viewBox="0 0 20 18" width="'+size+'" height="'+(size*.9).toFixed(1)+'" style="display:block;overflow:visible"><polygon points="10,1 19,17 1,17" fill="'+(fill||'none')+'" stroke="'+(stroke||'none')+'" stroke-width="1.5" stroke-linejoin="round"></polygon></svg>'; }
spProg.innerHTML=scenes.map((el,i)=>'<button type="button" data-s="'+i+'" aria-label="'+esc(el.dataset.label)+'"></button>').join('')+'<i class="sep"></i><span class="leaf">'+leaf(22,C.redB)+'</span>';
$$('button',spProg).forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); toScene(+b.dataset.s); }));
function paintProg(){
  $$('button',spProg).forEach((b,i)=>{ b.innerHTML=upTri(14,i===sc?'#ffffff':i<sc?'rgba(255,255,255,.42)':null,i>sc?'rgba(255,255,255,.45)':null); b.setAttribute('aria-current',String(i===sc)); });
  $('.nn',spNext).textContent=sc<scenes.length-1?scenes[sc+1].dataset.label:"Tonight's speakers"; }
const rot=(x,y)=>'rotateX('+x.toFixed(2)+'deg) rotateY('+y.toFixed(2)+'deg)';
const SCN=[];
/* 1 · welcome: Canada as dots, turning slowly */
(function(){ const rig=$('.sc-map .rig',speech); dotField(rig,{step:13,r:2.3,planes:[-90,-30,30,90],seed:5});
  SCN.push({tick(t,p){ rig.style.transform=rot(22+p.y*5,-18+Math.sin(t*.07)*7+p.x*8); }}); })();
/* 2 · among us tonight: four groups, four equal panels in a shallow arc */
(function(){ const rig=$('.sc-room .rig',speech), gps=$$('.gp',speech), GW=352, GAP=44, ARC=[-13,-4.5,4.5,13], GZ=[0,28,28,0];
  gps.forEach((g,i)=>{ g.style.left=((1920-(GW*4+GAP*3))/2+i*(GW+GAP))+'px'; $('.gp-pic',g).innerHTML=picSVG(+g.dataset.t,64,'#ffffff'); });
  SCN.push({tick(t,p,e){ rig.style.transform=rot(5-p.y*5+Math.sin(t*.17)*.8,p.x*8+Math.sin(t*.1)*2.5);
    gps.forEach((g,i)=>{ const k=easeOut(clamp(e*1.6-i*.17,0,1)), bob=Math.sin(t*.6+i*1.4)*6;
      g.style.transform='translate3d(0,'+((1-k)*60).toFixed(1)+'px,'+((1-k)*-260+GZ[i]+bob).toFixed(1)+'px) rotateY('+ARC[i]+'deg)'; g.style.opacity=clamp(k*1.4,0,1).toFixed(2); }); }}); })();
/* 3 · every decision counts, and compounds: one up-triangle, then two, four, eight */
(function(){ const rig=$('.sc-tree .rig',speech), W=900, H=640, G=6, HS=[0,130,290,440,570,630], SZ=[34,24,18,14,11,8.5], L=[];
  const X=g=>60+g*158, Y=(g,i)=>{ const n=1<<g; return n===1?H/2:H/2-HS[g]/2+i*HS[g]/(n-1); };
  for(let g=0;g<G;g++){ const n=1<<g, z=SZ[g]; let m='';
    if(g) for(let i=0;i<n;i++){ const px=X(g-1), py=Y(g-1,i>>1), x=X(g), y=Y(g,i);
      m+='<path d="M'+px+' '+py.toFixed(1)+'C'+(px+78)+' '+py.toFixed(1)+' '+(x-78)+' '+y.toFixed(1)+' '+x+' '+y.toFixed(1)+'" fill="none" stroke="rgba(185,206,221,.5)" stroke-width="'+(g<3?1.7:1.1)+'" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"></path>'; }
    for(let i=0;i<n;i++){ const x=X(g), y=Y(g,i);
      m+='<polygon points="'+x+','+(y-z*.58).toFixed(1)+' '+(x+z*.55).toFixed(1)+','+(y+z*.42).toFixed(1)+' '+(x-z*.55).toFixed(1)+','+(y+z*.42).toFixed(1)+'" fill="'+(g?C.mist:'#ffffff')+'"></polygon>'; }
    const box=svgBox('0 0 '+W+' '+H,m,g*16); rig.appendChild(box); L.push({box:box,paths:$$('path',box)}); }
  SCN.push({tick(t,p,e,te){ rig.style.transform=rot(4-p.y*5+Math.sin(t*.15)*.8,-13+p.x*8+Math.sin(t*.09)*2.5);
    L.forEach((l,g)=>{ const k=clamp((te-.35-g*.42)/.55,0,1), draw=(1-easeOut(k)).toFixed(3);
      l.box.style.opacity=(clamp(k*1.8,0,1)*(g?.8+.2*Math.sin(t*1.5-g*.9):1)).toFixed(2);
      if(l.d!==draw){ l.d=draw; l.paths.forEach(pa=>pa.setAttribute('stroke-dashoffset',draw)); } }); }}); })();
/* 4 · your decision: five slabs, each one stepping forward */
(function(){ const rig=$('.sc-dec .rig',speech), dcs=$$('.dc',speech);
  dcs.forEach((d,i)=>{ d.style.top=(i*138)+'px'; const k=d.dataset.t;
    $('.dc-pic',d).innerHTML=k==='up'?upTri(30,'#ffffff'):k==='leaf'?leaf(34,'#ffffff'):picSVG(+k,36,'#ffffff'); });
  SCN.push({tick(t,p,e){ rig.style.transform=rot(5-p.y*5+Math.sin(t*.16)*.8,-16+p.x*8+Math.sin(t*.09)*2);
    dcs.forEach((d,i)=>{ const k=easeOut(clamp(e*1.7-i*.15,0,1)), bob=Math.sin(t*.55+i*1.3)*4;
      d.style.transform='translate3d('+((1-k)*90).toFixed(1)+'px,0,'+((1-k)*-240+i*14+bob).toFixed(1)+'px)'; d.style.opacity=clamp(k*1.4,0,1).toFixed(2); }); }}); })();
/* 5 · from the patient to the nation: rings on the floor, a ripple running out, each reach named where its ring turns away */
(function(){ const rig=$('.sc-rip .rig',speech), plane=$('.rp-plane',speech), svg=$('.rp-rings',speech), TILT=56;
  const RR=[150,232,314,396,478], RL=['Jobs','Investment','National GDP','The sector','The nation'];
  let m=RR.map(r=>'<circle r="'+r+'" fill="none" stroke="rgba(185,206,221,.34)" stroke-width="1.5"></circle>').join('');
  m+='<g class="wv">'+[0,1,2].map(()=>'<circle r="60" fill="none" stroke="#b9cedd" stroke-width="2.4" opacity="0"></circle>').join('')+'</g>';
  m+=RR.map(r=>'<circle cy="'+(-r)+'" r="6" fill="#b9cedd"></circle>').join('');
  m+='<circle r="62" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.5)" stroke-width="1.5"></circle><circle r="5" fill="#fff"></circle>';
  svg.innerHTML=m; const waves=$$('.wv circle',svg), labs=[];
  const stand=(el,x,y,ax)=>{ el.style.transform='translate3d('+(560+x)+'px,'+(560+y)+'px,0) rotateX(-'+TILT+'deg) translate('+ax+')'; plane.appendChild(el); labs.push(el); };
  const core=document.createElement('div'); core.className='rp-core'; core.innerHTML=picSVG(1,60,'#ffffff'); stand(core,0,0,'-50%,-100%');
  const pt=document.createElement('div'); pt.className='rp-pt'; pt.innerHTML='<b data-edit="sp.rc">The Canadian patient</b>'; stand(pt,0,70,'-50%,0');
  RR.forEach((r,i)=>{ const el=document.createElement('div'); el.className='rp-lb'; el.innerHTML='<b data-edit="sp.r'+i+'">'+RL[i]+'</b>'; stand(el,0,-r,'-50%,-100%'); });
  SCN.push({tick(t,p,e){ rig.style.transform='rotateX('+(TILT-p.y*4+Math.sin(t*.14)*.8).toFixed(2)+'deg) rotateZ('+(p.x*4+Math.sin(t*.08)*2).toFixed(2)+'deg)';
    svg.style.opacity=clamp(e*2,0,1).toFixed(2);
    labs.forEach((l,i)=>{ l.style.opacity=clamp(e*2.4-i*.2,0,1).toFixed(2); });
    waves.forEach((w,k)=>{ const u=((RM?.3:t*.24)+k/3)%1; w.setAttribute('r',(62+u*430).toFixed(1)); w.setAttribute('opacity',((1-u)*.65*clamp(e*2-.4,0,1)).toFixed(3)); }); }}); })();
/* 6 · thank you: the country lights up from one point */
(function(){ const rig=$('.sc-map2 .rig',speech), reveal=$('.sc-reveal',speech); dotField(rig,{step:14,r:2.3,planes:[-70,-20,30,80],seed:9});
  SCN.push({tick(t,p,e,te){ rig.style.transform=rot(20+p.y*4,-6+Math.sin(t*.06)*5+p.x*6);
    reveal.style.setProperty('--r',(easeOut(clamp(te/2.8,0,1))*130).toFixed(1)+'%'); }}); })();
function enterScene(i){ sc=clamp(i,0,scenes.length-1); sEnt=RM?1:0; sT=performance.now();
  scenes.forEach((el,k)=>{ el.classList.toggle('on',k===sc); el.classList.remove('live'); });
  void speech.offsetWidth; scenes[sc].classList.add('live'); paintProg(); }
function toScene(i){ nav({v:'speech',s:clamp(i,0,scenes.length-1)}); }
function sStep(d){ const i=sc+d; if(i>=scenes.length) back(); else if(i>=0) toScene(i); }

/* ---------- moving between them: the address follows, so the browser's back works too ---------- */
/* #open, #open-2 … the opening · #speakers the names · #<id> a speaker */
function route(){ let h=''; try{ h=decodeURIComponent(location.hash.slice(1)); }catch(e){}
  if(h==='speakers') return {v:'names'};
  if(byId(h)) return {v:'person',id:h};
  const m=/^open-(\d+)$/.exec(h); return {v:'speech',s:m?clamp(+m[1]-1,0,scenes.length-1):0}; }
const hashOf=r=>r.v==='names'?'speakers':r.v==='person'?r.id:(r.s?'open-'+(r.s+1):'open');
function nav(r){ try{ const h=hashOf(r); if(location.hash.slice(1)!==h) location.hash=h; }catch(e){} show(r); }
function open(id){ if(byId(id)) nav({v:'person',id:id}); }
function back(){ nav({v:'names'}); }
let ent=0, elapsed=0, PAUSED=false, bars=[];
function surface(sec){ [speech,master,person].forEach(x=>{ if(x!==sec) x.classList.remove('on','live'); }); sec.classList.add('on'); }
function show(r){
  const p=r.v==='person'&&byId(r.id);
  if(p){ const fresh=view!=='person'||cur!==p.id; cur=p.id; markCursor(p.id); view='person';
    if(fresh){ paintPerson(); ent=RM?1:0; elapsed=0; renderTimer();
      person.classList.remove('live'); surface(person); void person.offsetWidth; person.classList.add('live'); }
  } else if(r.v==='names'){ if(view!=='names'){ view='names'; surface(master);
    const el=cursor&&$('.nm[data-id="'+cursor+'"]'); if(el&&!editing) el.focus({preventScroll:true}); } }
  else { const fresh=view!=='speech'||sc!==r.s; view='speech'; surface(speech); if(fresh) enterScene(r.s); }
  const host=view==='names'?master:view==='person'?person:speech, a=document.activeElement;
  if(a&&a!==document.body&&!host.contains(a)&&!opbar.contains(a)) a.blur();
  document.body.dataset.view=view; $('#opbar [data-act="remove"]').disabled=view!=='person'; opMsg();
}
function step(d){ const ids=order.map(p=>p.id); const i=ids.indexOf(cur)+d; if(i<0||i>=ids.length) back(); else open(ids[i]); }
addEventListener('hashchange',()=>show(route()));

/* ---------- the timer ---------- */
function renderTimer(){ if(bars.length!==SLOT()){ tmr.innerHTML=''; bars=[]; for(let i=0;i<SLOT();i++){const t=document.createElement('i');t.innerHTML='<b></b>';tmr.appendChild(t);bars.push(t.firstChild);} }
  bars.forEach((b,i)=>{ b.style.height=(clamp((elapsed-i*60)/60,0,1)*100).toFixed(1)+'%'; });
  tmr.classList.toggle('over',elapsed>=bars.length*60); tmr.classList.toggle('paused',PAUSED); }

/* ---------- one loop ---------- */
const pc=$('.pc',person), floor=$('.p-floor',person), mapRig=$('.mapstage .rig',master);
dotField(mapRig,{step:15,r:2.4,planes:[-80,-26,26,80],seed:11});
const tkM=tracker(master), tkP=tracker(person), tkS=tracker(speech); let last=performance.now(), t0=last, raf=0, tmrId=0;
function schedule(){cancelAnimationFrame(raf);clearTimeout(tmrId);raf=requestAnimationFrame(frame);tmrId=setTimeout(()=>frame(performance.now()),40);}
function frame(now){ cancelAnimationFrame(raf);clearTimeout(tmrId);
  DT=Math.min(.06,Math.max(.004,(now-last)/1000)); last=now; const t=RM?0:(now-t0)/1000;
  if(view==='speech'){ const p=tkS.read(); sEnt=Math.min(1,sEnt+DT*.9); SCN[sc].tick(t,p,sEnt,RM?99:(now-sT)/1000); }
  else if(view==='names'){ const p=tkM.read(); mapRig.style.transform='rotateX('+(18+p.y*5).toFixed(2)+'deg) rotateY('+(-12+Math.sin(t*.08)*8+p.x*8).toFixed(2)+'deg)'; }
  else { const p=tkP.read(); ent=Math.min(1,ent+DT*1.05); const e=easeOut(ent);
    pc.style.transform='translate3d(0,'+((1-e)*50).toFixed(1)+'px,'+((1-e)*-200).toFixed(1)+'px) rotateY('+(-15-(1-e)*28+p.x*11+Math.sin(t*.33)*2.2).toFixed(2)+'deg) rotateX('+(4-p.y*7+Math.sin(t*.26)*1.1).toFixed(2)+'deg)';
    pc.style.opacity=clamp(e*1.6,0,1).toFixed(2); floor.style.opacity=e.toFixed(2); floor.style.transform='scaleX('+(0.7+e*0.3).toFixed(3)+')';
    vrig.style.transform='rotateX('+(9-p.y*5+Math.sin(t*.19)*.8).toFixed(2)+'deg) rotateY('+(-8+p.x*9+Math.sin(t*.13)*2).toFixed(2)+'deg)';
    [vhub].concat(vrows).forEach((s,i)=>{ const k=easeOut(clamp(ent*1.5-i*.16,0,1)), bob=i?Math.sin(t*.7+i*1.7)*5:Math.sin(t*.45)*3;
      s.style.transform='translate3d('+((1-k)*-34).toFixed(1)+'px,0,'+((1-k)*-190+(i?10:24)+bob).toFixed(1)+'px)'; s.style.opacity=clamp(k*1.4,0,1).toFixed(2); });
    vlinks.style.opacity=clamp(ent*1.8-.5,0,1).toFixed(2);
    pulses.forEach((q,i)=>{ const u=((RM?.62:t*.42)+i*.29)%1; q.el.setAttribute('stroke-dashoffset',(18-u*(q.L+36)).toFixed(1)); });
    if(!PAUSED) elapsed+=DT; renderTimer(); }
  schedule(); }

/* ---------- fit to any screen ---------- */
function fit(){ const k=Math.min(innerWidth/1920,innerHeight/1080); stage.style.transform='translate(-50%,-50%) scale('+k+')'; }
addEventListener('resize',fit);

/* ---------- the rail, on both surfaces ---------- */
const rail=document.createElement('div'); rail.className='mnrail';
rail.innerHTML='<span class="mn">'+mark(22,'#ffffff','rgba(255,255,255,.46)')+'MedTech North</span><i class="sep"></i><span class="leaf">'+leaf(24,C.redB)+'</span>';
stage.appendChild(rail);

/* ---------- HUD, idle cursor ---------- */
const hud=$('#hud'); let hudT=0, idleT=0;
function flash(msg){ hud.textContent=msg||(view==='speech'
  ?'→ next · ← previous · F full screen · E edit'
  :view==='names'
  ?'Click a name to open their slide · Page Up the opening · E edit · F full screen'
  :'← → previous and next speaker · Esc all speakers · T timer · E edit · F full screen');
  hud.classList.add('show'); clearTimeout(hudT); hudT=setTimeout(()=>hud.classList.remove('show'),1800); }
addEventListener('mousemove',()=>{ document.body.classList.remove('idle'); clearTimeout(idleT); idleT=setTimeout(()=>{ if(!editing) document.body.classList.add('idle'); },2600); },{passive:true});

/* ---------- edit mode ---------- */
let ceMode='plaintext-only'; (function(){const t=document.createElement('div');t.contentEditable='plaintext-only';if(t.contentEditable!=='plaintext-only')ceMode='true';})();
const opbar=$('#opbar');
function opMsg(){ $('.msg',opbar).innerHTML=!storeOK
  ?'<span class="warn">This browser is out of storage, so the last change is not saved here.</span> Use Save a copy now.'
  :view==='speech'
  ?'Editing. Click any outlined line to change its wording. <b>Save a copy</b> writes one file with everything inside.'
  :view==='names'
  ?'Editing. Open a name to change what their slide shows, or add a walk-in. <b>Save a copy</b> writes one file with everything inside.'
  :'Editing. Click any outlined field to change it. Drop a photo on the portrait, a logo on the strip under it. <b>Save a copy</b> writes one file with everything inside.'; }
function setEditing(on){ editing=on; document.body.classList.toggle('editing',on); document.body.classList.remove('idle');
  $$('.ed,[data-edit]').forEach(el=>{el.contentEditable=on?ceMode:'false';});
  if(!on&&document.activeElement&&document.activeElement.blur) document.activeElement.blur();
  renderList(); paintPerson(); opMsg(); }
$$('.ed',person).forEach(el=>{
  el.addEventListener('input',()=>{ const p=cur&&byId(cur); if(!p) return; p[el.dataset.f]=el.textContent.replace(/\s+/g,' ').trim(); persist();
    if(el.dataset.f==='name') ph.querySelector('.ini').textContent=initials(p.name); });
  el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();el.blur();} });
  el.addEventListener('blur',()=>{ if(el.dataset.f==='name') renderList(); paintPerson(); });
});
$$('[data-edit]').forEach(el=>{ const k=el.getAttribute('data-edit'); if(DATA.text[k]!=null) el.textContent=DATA.text[k];
  el.addEventListener('input',()=>{DATA.text[k]=el.textContent.replace(/\s+/g,' ').trim();persist();});
  el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();el.blur();} }); });
function addPerson(){ const p={id:'added-'+Date.now(),name:'',title:'',company:'',category:'',marker:0,photo:null,note:'Added on the night.'};
  DATA.people.push(p); persist(); renderList(); if(!editing) setEditing(true); open(p.id);
  setTimeout(()=>{ const n=$('.p-name',person); if(n) n.focus(); },80); }
function removeCurrent(){ if(view!=='person') return; const p=byId(cur); if(!p||!confirm('Remove '+(p.name||'this name')+' from tonight?')) return;
  DATA.people=DATA.people.filter(q=>q.id!==p.id); persist(); cursor=null; renderList(); back(); }

/* ---------- images in ---------- */
const picker=$('#filepick'); let pickFor=null;
function wireDrop(el,kind){
  el.addEventListener('dragover',e=>{ if(!editing) return; e.preventDefault(); el.classList.add('over'); });
  el.addEventListener('dragleave',()=>el.classList.remove('over'));
  el.addEventListener('drop',e=>{ if(!editing) return; e.preventDefault(); e.stopPropagation(); el.classList.remove('over'); const f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0]; if(f) take(f,kind); });
  el.addEventListener('click',e=>{ if(!editing) return; e.stopPropagation(); pickFor=kind; picker.value=''; picker.click(); }); }
wireDrop(ph,'photo'); wireDrop(lg,'logo');
picker.addEventListener('change',()=>{ const f=picker.files&&picker.files[0]; if(f&&pickFor) take(f,pickFor); });
function loadImg(file){return new Promise((res,rej)=>{const im=new Image();im.onload=()=>res(im);im.onerror=rej;im.src=URL.createObjectURL(file);});}
async function toPhoto(file){ const im=await loadImg(file), S=720, side=Math.min(im.naturalWidth,im.naturalHeight);
  const c=document.createElement('canvas'); c.width=c.height=S;
  c.getContext('2d').drawImage(im,(im.naturalWidth-side)/2,Math.max(0,(im.naturalHeight-side)*0.22),side,side,0,0,S,S); return c.toDataURL('image/jpeg',0.86); }
async function toLogo(file){
  if(/svg/i.test(file.type)||/\.svg$/i.test(file.name)) return await new Promise(res=>{const r=new FileReader();r.onload=()=>res(r.result);r.readAsDataURL(file);});
  const im=await loadImg(file), k=Math.min(1,900/im.naturalWidth), w=Math.round(im.naturalWidth*k), h=Math.round(im.naturalHeight*k);
  const c=document.createElement('canvas'); c.width=w; c.height=h; const g=c.getContext('2d'); g.drawImage(im,0,0,w,h);
  const d=g.getImageData(0,0,w,h), a=d.data; let opaque=true; for(let i=3;i<a.length;i+=16){ if(a[i]<250){opaque=false;break;} }
  /* a logo on a white field: lift the white out so it renders as one clean mark */
  if(opaque){ for(let i=0;i<a.length;i+=4){ const m=Math.min(a[i],a[i+1],a[i+2]); if(m>236) a[i+3]=0; else if(m>212) a[i+3]=Math.round(255*(236-m)/24); } g.putImageData(d,0,0); }
  return c.toDataURL('image/png'); }
async function take(file,kind){ if(!/^image\//.test(file.type)&&!/\.svg$/i.test(file.name)) return;
  try{ const p=cur&&byId(cur); if(!p) return;
    if(kind==='photo'){ p.photo=await toPhoto(file); persist(); paintPerson(); }
    else if(kind==='logo'){ DATA.logos[logoKey(p)]=await toLogo(file); persist(); paintPerson(); }
  }catch(err){ console.error('[build-north] image',err); } }
addEventListener('dragover',e=>e.preventDefault()); addEventListener('drop',e=>e.preventDefault());

/* ---------- Save a copy: this file, with every edit and image inside ---------- */
function saveCopy(){ const json=JSON.stringify(DATA).replace(/</g,'\\u003c');
  const out=PRISTINE.replace(/(<script type="application\/json" id="mn-data">)[\s\S]*?(<\/script>)/,(m,a,b)=>a+json+b);
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([out],{type:'text/html'})); a.download='build-north-master.html';
  document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1500); }
$$('[data-act]').forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); const a=b.getAttribute('data-act');
  if(a==='back') back(); if(a==='next') step(1); if(a==='snext') sStep(1); if(a==='opening') toScene(0);
  if(a==='add') addPerson(); if(a==='remove') removeCurrent(); if(a==='save') saveCopy(); if(a==='exit') setEditing(false); }));

/* ---------- keys ---------- */
addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&(e.key==='s'||e.key==='S')){ e.preventDefault(); saveCopy(); return; }
  if(e.defaultPrevented) return;
  const t=e.target; if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
  if(t&&t.tagName==='BUTTON'&&(e.key==='Enter'||e.key===' ')) return;
  if(e.metaKey||e.ctrlKey||e.altKey) return;
  const k=e.key;
  if(k==='Escape'&&editing){ setEditing(false); return; }
  if(view==='speech'){
    if(k==='ArrowRight'||k==='ArrowDown'||k==='PageDown'||k===' '||k==='Enter'){ e.preventDefault(); sStep(1); }
    else if(k==='ArrowLeft'||k==='ArrowUp'||k==='PageUp'||k==='Backspace'){ e.preventDefault(); sStep(-1); }
    else if(k==='Home'){ e.preventDefault(); toScene(0); }
    else if(k==='End'){ e.preventDefault(); toScene(scenes.length-1); }
  } else if(view==='person'){
    if(k==='ArrowRight'||k==='ArrowDown'||k==='PageDown'||k===' '){ e.preventDefault(); step(1); }
    else if(k==='ArrowLeft'||k==='ArrowUp'||k==='PageUp'){ e.preventDefault(); step(-1); }
    else if(k==='Escape'||k==='Backspace'){ e.preventDefault(); back(); }
  } else {
    if(k==='ArrowRight'){ e.preventDefault(); moveCursor(1); }
    else if(k==='ArrowLeft'){ e.preventDefault(); moveCursor(-1); }
    else if(k==='ArrowDown'){ e.preventDefault(); moveCursor(cursor?2:0); }
    else if(k==='ArrowUp'){ e.preventDefault(); moveCursor(cursor?-2:0); }
    else if(k==='Home'){ e.preventDefault(); moveCursor(-999); }
    else if(k==='End'){ e.preventDefault(); moveCursor(999); }
    else if(k==='Enter'||k==='PageDown'||k===' '){ e.preventDefault(); open(cursor||(order[0]&&order[0].id)); }
    else if(k==='PageUp'||k==='Backspace'){ e.preventDefault(); toScene(scenes.length-1); }
  }
  if(k==='f'||k==='F'){ const d=document.documentElement; if(document.fullscreenElement) document.exitFullscreen(); else if(d.requestFullscreen) d.requestFullscreen(); }
  else if(k==='e'||k==='E'){ setEditing(!editing); }
  else if(k==='t'||k==='T'){ PAUSED=!PAUSED; renderTimer(); flash(PAUSED?'Timer paused':'Timer running'); }
  else if(k==='?'||k==='h'||k==='H'){ flash(); }
});

/* ---------- boot ---------- */
renderList(); fit(); renderTimer(); show(route());
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ renderList(); if(cur) paintPerson(); });
schedule(); flash();
window.BuildNorth={data:()=>DATA,open:open,back:back,edit:setEditing,saveCopy:saveCopy};
})();
