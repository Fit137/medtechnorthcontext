/* ============================================================
   BUILD NORTH · master slide engine
   Click a name, or use the arrow keys: the person stands up on
   the right with what they registered. Esc returns to the idle
   view. Operator keys: E edit · T timer · F full screen ·
   Ctrl or Cmd S saves a copy with every edit and image inside.
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
DATA.text=DATA.text||{}; DATA.logos=DATA.logos||{};
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

/* ---------- the names ---------- */
const list=$('.names'), info=$('.info'), note=$('.note'), ph=$('.ph'), lg=$('.lg'), tmr=$('.info .tmr');
let sel=null, editing=false, order=[];
function renderList(){
  order=people(); list.innerHTML='';
  order.forEach((p,i)=>{ const d=document.createElement('div'); d.className='nm'; d.tabIndex=0; d.setAttribute('role','option'); d.dataset.id=p.id;
    d.setAttribute('aria-selected',String(p.id===sel));
    d.innerHTML='<span class="pic">'+picSVG(p.marker,22)+'</span><span class="n">'+esc(p.name||'New name')+'</span>';
    d.addEventListener('click',()=>select(p.id===sel&&!editing?null:p.id));
    d.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();select(p.id);} });
    list.appendChild(d); fitLine($('.n',d),28,21); });
  const add=document.createElement('div'); add.className='nm add'; add.tabIndex=0;
  add.innerHTML='<span class="pic">'+picSVG(0,22,C.mist)+'</span><span class="n">Add a name</span>';
  add.addEventListener('click',addPerson); list.appendChild(add);
  /* longer lists tighten so the column never reaches the rail */
  const rows=Math.ceil((order.length+(editing?1:0))/2); list.style.gridAutoRows=(rows>8?Math.max(54,Math.floor(672/rows)):84)+'px';
}
function setText(el,v){ if(document.activeElement!==el&&el.textContent!==(v||'')) el.textContent=v||''; }
function renderInfo(){
  const p=sel&&byId(sel); document.body.classList.toggle('sel',!!p);
  if(!p){ note.textContent=''; return; }
  $('.i-eye .pic').innerHTML=picSVG(p.marker,22);
  setText($('.i-name'),p.name);
  ['title','company','category'].forEach(f=>{ const row=$('.fld[data-f="'+f+'"]'); setText($('dd',row),p[f]); row.classList.toggle('empty',!p[f]); });
  note.textContent=p.note||'';
  ph.querySelector('.ini').textContent=initials(p.name);
  let img=$('img',ph);
  const put=src=>{ if(!img){img=document.createElement('img');img.alt='';ph.insertBefore(img,ph.firstChild);} img.src=src; ph.classList.add('has'); };
  if(p.photo) put(p.photo); else { if(img){img.remove();img=null;} ph.classList.remove('has');
    const s=slug(p.name); if(s) probe(['headshots/'+s+'.jpg','headshots/'+s+'.jpeg','headshots/'+s+'.png','headshots/'+s+'.webp'],src=>{ if(sel===p.id&&!p.photo) put(src); }); }
  const key=logoKey(p);
  if(DATA.logos[key]) lg.innerHTML='<img alt="'+esc(p.company)+'" src="'+DATA.logos[key]+'">';
  else { lg.innerHTML=p.company?'<div class="lt">'+esc(p.company)+'</div>':'<span class="lp">'+picSVG(p.marker,30,'rgba(255,255,255,.8)')+'</span>';
    fitText($('.lt',lg),25,16,2);
    probe(['logos/'+key+'.svg','logos/'+key+'.png'],src=>{ if(sel===p.id&&!DATA.logos[key]) lg.innerHTML='<img alt="'+esc(p.company)+'" src="'+src+'">'; }); }
  fitText($('.i-name'),60,40,2);
}
function probe(l,ok){ let i=0; const t=new Image(); t.onload=()=>ok(l[i]); t.onerror=()=>{i++; if(i<l.length) t.src=l[i];}; t.src=l[0]; }

/* ---------- selection, the card arriving, the timer ---------- */
let ent=0, elapsed=0, PAUSED=false, bars=[];
function select(id){
  const changed=id!==sel; sel=id;
  $$('.nm[data-id]').forEach(el=>el.setAttribute('aria-selected',String(el.dataset.id===id)));
  if(changed){ ent=RM?1:0; elapsed=0; }
  renderInfo(); renderTimer();
  const el=$('.nm[data-id="'+id+'"]'); if(el&&document.activeElement!==el&&!editing) el.focus({preventScroll:true});
}
function renderTimer(){ if(bars.length!==SLOT()){ tmr.innerHTML=''; bars=[]; for(let i=0;i<SLOT();i++){const t=document.createElement('i');t.innerHTML='<b></b>';tmr.appendChild(t);bars.push(t.firstChild);} }
  bars.forEach((b,i)=>{ b.style.height=(clamp((elapsed-i*60)/60,0,1)*100).toFixed(1)+'%'; });
  tmr.classList.toggle('over',elapsed>=bars.length*60); tmr.classList.toggle('paused',PAUSED); }
function step(d){ const ids=order.map(p=>p.id); if(!ids.length) return;
  let i=ids.indexOf(sel); i=i<0?(d>0?0:ids.length-1):clamp(i+d,0,ids.length-1); select(ids[i]); }

/* ---------- one loop ---------- */
const stage=$('#stage'), master=$('#master'), pc=$('.pc'), floor=$('.floor'), mapRig=$('.mapstage .rig');
dotField(mapRig,{step:15,r:2.4,planes:[-80,-26,26,80],seed:11});
const tk=tracker(master); let last=performance.now(), t0=last, raf=0, tmrId=0;
function schedule(){cancelAnimationFrame(raf);clearTimeout(tmrId);raf=requestAnimationFrame(frame);tmrId=setTimeout(()=>frame(performance.now()),40);}
function frame(now){ cancelAnimationFrame(raf);clearTimeout(tmrId);
  DT=Math.min(.06,Math.max(.004,(now-last)/1000)); last=now; const t=RM?0:(now-t0)/1000, p=tk.read();
  mapRig.style.transform='rotateX('+(18+p.y*5).toFixed(2)+'deg) rotateY('+(-12+Math.sin(t*.08)*8+p.x*8).toFixed(2)+'deg)';
  if(sel){ ent=Math.min(1,ent+DT*1.3); const e=easeOut(ent);
    pc.style.transform='translate3d(0,'+((1-e)*40).toFixed(1)+'px,'+((1-e)*-220).toFixed(1)+'px) rotateY('+(-16-(1-e)*34+p.x*10+Math.sin(t*.33)*2).toFixed(2)+'deg) rotateX('+(4-p.y*6+Math.sin(t*.26)*1).toFixed(2)+'deg)';
    pc.style.opacity=clamp(e*1.6,0,1).toFixed(2); floor.style.opacity=e.toFixed(2);
    if(!PAUSED) elapsed+=DT; renderTimer(); }
  schedule(); }

/* ---------- fit to any screen ---------- */
function fit(){ const k=Math.min(innerWidth/1920,innerHeight/1080); stage.style.transform='translate(-50%,-50%) scale('+k+')'; }
addEventListener('resize',fit);

/* ---------- the rail ---------- */
let luguFound=null;
const rail=document.createElement('div'); rail.className='mnrail';
function paintRail(){ const src=DATA.lugu||luguFound;
  rail.innerHTML='<span class="mn">'+mark(22,'#ffffff','rgba(255,255,255,.46)')+'MedTech North</span><i class="sep"></i><span class="lugu drop">'+(src?'<img alt="Lugu" src="'+src+'">':'Lugu')+'</span><i class="sep"></i><span class="leaf">'+leaf(24,C.redB)+'</span>';
  wireDrop($('.lugu',rail),'lugu'); }
master.appendChild(rail); paintRail();
if(!DATA.lugu) probe(['logos/lugu.svg','logos/lugu.png'],src=>{luguFound=src;paintRail();});

/* ---------- HUD, idle cursor ---------- */
const hud=$('#hud'); let hudT=0, idleT=0;
function flash(msg){ hud.textContent=msg||'Click a name, or ↑ ↓ · Esc clears · E edit · T timer · F full screen'; hud.classList.add('show'); clearTimeout(hudT); hudT=setTimeout(()=>hud.classList.remove('show'),1800); }
addEventListener('mousemove',()=>{ document.body.classList.remove('idle'); clearTimeout(idleT); idleT=setTimeout(()=>{ if(!editing) document.body.classList.add('idle'); },2600); },{passive:true});

/* ---------- edit mode ---------- */
let ceMode='plaintext-only'; (function(){const t=document.createElement('div');t.contentEditable='plaintext-only';if(t.contentEditable!=='plaintext-only')ceMode='true';})();
const opbar=$('#opbar');
function opMsg(){ $('.msg',opbar).innerHTML=storeOK
  ?'Editing. Select a name, then click any outlined field to change it. Drop a photo on the portrait, a logo on the strip under it, the Lugu mark on the rail. <b>Save a copy</b> writes one file with everything inside.'
  :'<span class="warn">This browser is out of storage, so the last change is not saved here.</span> Use Save a copy now.'; }
function setEditing(on){ editing=on; document.body.classList.toggle('editing',on); document.body.classList.remove('idle');
  $$('.ed,[data-edit]').forEach(el=>{el.contentEditable=on?ceMode:'false';});
  if(!on&&document.activeElement&&document.activeElement.blur) document.activeElement.blur();
  renderList(); renderInfo(); opMsg(); }
$$('.info .ed').forEach(el=>{
  el.addEventListener('input',()=>{ const p=sel&&byId(sel); if(!p) return; p[el.dataset.f]=el.textContent.replace(/\s+/g,' ').trim(); persist();
    if(el.dataset.f==='name'){ ph.querySelector('.ini').textContent=initials(p.name); const n=$('.nm[data-id="'+p.id+'"] .n'); if(n) n.textContent=p.name||'New name'; } });
  el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();el.blur();} });
  el.addEventListener('blur',()=>{ if(el.dataset.f==='name') renderList(); renderInfo(); });
});
$$('[data-edit]').forEach(el=>{ const k=el.getAttribute('data-edit'); if(DATA.text[k]!=null) el.textContent=DATA.text[k];
  el.addEventListener('input',()=>{DATA.text[k]=el.textContent.replace(/\s+/g,' ').trim();persist();});
  el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();el.blur();} }); });
function addPerson(){ const p={id:'added-'+Date.now(),name:'',title:'',company:'',category:'',marker:0,photo:null,note:'Added on the night.'};
  DATA.people.push(p); persist(); renderList(); select(p.id); setTimeout(()=>{ const n=$('.i-name'); if(n) n.focus(); },80); }
function removeSelected(){ if(!sel) return; const p=byId(sel); if(!p||!confirm('Remove '+(p.name||'this name')+' from the master slide?')) return;
  DATA.people=DATA.people.filter(q=>q.id!==sel); persist(); sel=null; renderList(); renderInfo(); }

/* ---------- images in ---------- */
const picker=$('#filepick'); let pickFor=null;
function wireDrop(el,kind){ if(!el) return;
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
  try{ const p=sel&&byId(sel);
    if(kind==='photo'&&p){ p.photo=await toPhoto(file); persist(); renderInfo(); }
    else if(kind==='logo'&&p){ DATA.logos[logoKey(p)]=await toLogo(file); persist(); renderInfo(); }
    else if(kind==='lugu'){ DATA.lugu=await toLogo(file); persist(); paintRail(); }
  }catch(err){ console.error('[build-north] image',err); } }
addEventListener('dragover',e=>e.preventDefault()); addEventListener('drop',e=>e.preventDefault());

/* ---------- Save a copy: this file, with every edit and image inside ---------- */
function saveCopy(){ const json=JSON.stringify(DATA).replace(/</g,'\\u003c');
  const out=PRISTINE.replace(/(<script type="application\/json" id="mn-data">)[\s\S]*?(<\/script>)/,(m,a,b)=>a+json+b);
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([out],{type:'text/html'})); a.download='build-north-master.html';
  document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1500); }
$$('[data-act]').forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); const a=b.getAttribute('data-act');
  if(a==='add') addPerson(); if(a==='remove') removeSelected(); if(a==='save') saveCopy(); if(a==='exit') setEditing(false); }));

/* ---------- keys ---------- */
addEventListener('keydown',e=>{
  if((e.metaKey||e.ctrlKey)&&(e.key==='s'||e.key==='S')){ e.preventDefault(); saveCopy(); return; }
  const t=e.target; if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName))) return;
  if(e.metaKey||e.ctrlKey||e.altKey) return;
  const k=e.key;
  if(k==='ArrowDown'||k==='ArrowRight'||k==='PageDown'){ e.preventDefault(); step(1); }
  else if(k==='ArrowUp'||k==='ArrowLeft'||k==='PageUp'){ e.preventDefault(); step(-1); }
  else if(k==='Escape'){ if(editing) setEditing(false); else select(null); }
  else if(k==='Home'){ e.preventDefault(); step(-999); }
  else if(k==='End'){ e.preventDefault(); step(999); }
  else if(k==='f'||k==='F'){ const d=document.documentElement; if(document.fullscreenElement) document.exitFullscreen(); else if(d.requestFullscreen) d.requestFullscreen(); }
  else if(k==='e'||k==='E'){ setEditing(!editing); }
  else if(k==='t'||k==='T'){ PAUSED=!PAUSED; renderTimer(); flash(PAUSED?'Timer paused':'Timer running'); }
  else if(k==='?'||k==='h'||k==='H'){ flash(); }
});

/* ---------- boot ---------- */
renderList(); fit(); renderTimer();
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ renderList(); renderInfo(); });
schedule(); flash();
window.BuildNorth={data:()=>DATA,select:select,edit:setEditing,saveCopy:saveCopy};
})();
