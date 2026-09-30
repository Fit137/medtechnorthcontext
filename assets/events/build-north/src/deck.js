/* ============================================================
   BUILD NORTH · engine
   One requestAnimationFrame loop that only ticks the slide on
   screen. Geometry (the mark, the four group pictograms, the
   composed table, Canada as dots) is lifted from the partner
   deck engine so this deck draws the same shapes. Reduced
   motion and print both render the resolved end state.
   Operator keys: E edit · O slides · T timer · F full screen.
   ============================================================ */
(function(){
"use strict";
/* the file exactly as authored, before anything below touches it.
   Save a copy writes this back out with the current data inside. */
const PRISTINE='<!DOCTYPE html>\n'+document.documentElement.outerHTML;

const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
let PRINT=false;
const still=()=>RM||PRINT;
const C={red:'#c41230',redB:'#ef3340',ink:'#16191d',deep:'#0b0f14',mist:'#b9cedd',sage:'#b7cfc4'};
const MK=[C.redB,'#ffffff',C.mist,C.sage];   /* founders · clinicians · capital · policy */
const $=(s,r)=>(r||document).querySelector(s);
const $$=(s,r)=>Array.prototype.slice.call((r||document).querySelectorAll(s));
const lerp=(a,b,k)=>a+(b-a)*k;
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const easeOut=t=>1-Math.pow(1-t,3);
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
let DT=1/60;
const kf=k=>1-Math.pow(1-k,Math.min(4,DT*60));

/* ---------- data: embedded, then this browser's newer edits ---------- */
const LS='mn-build-north-2026-09-30';
let DATA=JSON.parse($('#mn-data').textContent);
try{const s=JSON.parse(localStorage.getItem(LS)||'null'); if(s&&s.people&&s.rev>(DATA.rev||0)) DATA=s;}catch(e){}
DATA.text=DATA.text||{}; DATA.logos=DATA.logos||{};
const SLOT=()=>Math.max(1,Math.min(12,+DATA.slotMinutes||5));
let storeOK=true, saveT=0;
function persist(){
  DATA.rev=Date.now();
  clearTimeout(saveT);
  saveT=setTimeout(()=>{try{localStorage.setItem(LS,JSON.stringify(DATA));storeOK=true;}catch(e){storeOK=false;} opMsg();},200);
}
const P=()=>DATA.people;
const pById=id=>P().find(p=>p.id===id);

/* ---------- shared geometry, as the site and the partner deck draw it ---------- */
const CAN=[[0.03,0.42],[0.12,0.34],[0.20,0.38],[0.24,0.30],[0.31,0.33],[0.34,0.24],[0.42,0.27],[0.46,0.18],[0.55,0.22],[0.60,0.14],[0.68,0.20],[0.74,0.16],[0.82,0.24],[0.90,0.22],[0.97,0.30],[0.93,0.42],[0.86,0.46],[0.80,0.54],[0.74,0.52],[0.70,0.62],[0.62,0.60],[0.58,0.70],[0.66,0.74],[0.60,0.82],[0.52,0.78],[0.46,0.86],[0.40,0.80],[0.34,0.84],[0.30,0.76],[0.24,0.80],[0.20,0.70],[0.13,0.72],[0.10,0.62],[0.05,0.56]];
const TOR=[0.63,0.72];
function inPoly(x,y,p){let s=false;for(let i=0,j=p.length-1;i<p.length;j=i++){const xi=p[i][0],yi=p[i][1],xj=p[j][0],yj=p[j][1];if(((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))s=!s;}return s;}
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
/* 0 founders gear · 1 clinicians medical cross · 2 capital rising bars · 3 policy columns */
function shape(t,x,y,r,c){
  t=((t%4)+4)%4;x=+x;y=+y;const f=v=>(+v).toFixed(2);
  if(t===0){let s='';for(let k=0;k<6;k++)s+='<rect x="'+f(x-r*.24)+'" y="'+f(y-r*1.22)+'" width="'+f(r*.48)+'" height="'+f(r*.72)+'" fill="'+c+'" transform="rotate('+(k*60)+' '+f(x)+' '+f(y)+')"></rect>';
    s+='<path fill-rule="evenodd" fill="'+c+'" d="M'+f(x+r*.88)+' '+f(y)+'a'+f(r*.88)+' '+f(r*.88)+' 0 1 0 '+f(-r*1.76)+' 0a'+f(r*.88)+' '+f(r*.88)+' 0 1 0 '+f(r*1.76)+' 0M'+f(x+r*.36)+' '+f(y)+'a'+f(r*.36)+' '+f(r*.36)+' 0 1 1 '+f(-r*.72)+' 0a'+f(r*.36)+' '+f(r*.36)+' 0 1 1 '+f(r*.72)+' 0"></path>';return s;}
  if(t===1){const a=r*.42,b=r*1.18;return '<path fill="'+c+'" d="M'+f(x-a)+' '+f(y-b)+'h'+f(a*2)+'v'+f(b-a)+'h'+f(b-a)+'v'+f(a*2)+'h'+f(-(b-a))+'v'+f(b-a)+'h'+f(-a*2)+'v'+f(-(b-a))+'h'+f(-(b-a))+'v'+f(-a*2)+'h'+f(b-a)+'Z"></path>';}
  if(t===2){const w=r*.58,g=r*.24,x0=x-(w*3+g*2)/2,base=y+r*1.1;
    return [r*.95,r*1.55,r*2.2].map((h,i)=>'<rect x="'+f(x0+i*(w+g))+'" y="'+f(base-h)+'" width="'+f(w)+'" height="'+f(h)+'" fill="'+c+'"></rect>').join('');}
  let s='<path fill="'+c+'" d="M'+f(x-r*1.15)+' '+f(y-.42*r)+'L'+f(x)+' '+f(y-1.2*r)+'L'+f(x+r*1.15)+' '+f(y-.42*r)+'Z"></path>';
  [-0.92,-0.19,0.54].forEach(o=>{s+='<rect x="'+f(x+o*r)+'" y="'+f(y-.24*r)+'" width="'+f(r*.38)+'" height="'+f(r*1.05)+'" fill="'+c+'"></rect>';});
  return s+'<rect x="'+f(x-r*1.15)+'" y="'+f(y+.92*r)+'" width="'+f(r*2.3)+'" height="'+f(r*.3)+'" fill="'+c+'"></rect>';
}
function mark(h,a,b){const w=(h*40/68).toFixed(1);
  return '<svg viewBox="0 0 40 68" width="'+w+'" height="'+h+'" style="display:block;overflow:visible" aria-label="MedTech North"><polygon points="20,6 34,34 6,34" fill="'+a+'"></polygon><polygon points="20,62 34,34.5 6,34.5" fill="'+b+'"></polygon></svg>';}
/* the maple leaf, drawn: a leaf mark, never the flag and never the Government of Canada wordmark */
function leaf(h,fill){const w=(h*3720/4030).toFixed(1);
  return '<svg viewBox="2940 400 3720 4030" width="'+w+'" height="'+h+'" aria-label="Canada"><path fill="'+fill+'" d="M4890 4430l-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"></path></svg>';}
function picSVG(t,size,col){return '<svg viewBox="-12 -12 24 24" width="'+size+'" height="'+size+'" style="display:block;overflow:visible;flex:none">'+shape(t,0,0,8.4,col||MK[((t%4)+4)%4])+'</svg>';}
function pictoURL(t,col){return 'url("data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-12 -12 24 24">'+shape(t,0,0,8.2,col)+'</svg>')+'")';}
function svgBox(vb,inner,z){const d=document.createElement('div');
  d.style.cssText='position:absolute;inset:0'+(z!=null?';transform:translateZ('+z+'px)':'');
  d.innerHTML='<svg viewBox="'+vb+'" preserveAspectRatio="xMidYMid meet" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">'+inner+'</svg>';
  return d;}

/* Canada, as dots on several planes, brightest at Toronto */
function dotField(rig,opt){
  const W=1000,H=620,rnd=mulberry(opt.seed||7),Z=opt.planes;
  const px=TOR[0]*W, py=TOR[1]*H, far=Math.hypot(W,H)*0.62;
  const pts=[];
  for(let y=16;y<H-14;y+=opt.step) for(let x=8;x<W-8;x+=opt.step){
    if(!inPoly(x/W,y/H,CAN)) continue;
    pts.push([x+(rnd()-.5)*6,y+(rnd()-.5)*6,Math.floor(rnd()*Z.length)]);
  }
  const layers=[];
  Z.forEach((z,k)=>{
    let s='';
    pts.forEach(p=>{ if(p[2]!==k) return;
      const d=clamp(Math.hypot(p[0]-px,p[1]-py)/far,0,1);
      s+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="'+opt.r+'" fill="'+opt.color+'" opacity="'+(1-d*0.5).toFixed(2)+'"></circle>';
    });
    const b=svgBox('0 0 '+W+' '+H,s,z); rig.appendChild(b); layers.push(b);
  });
  if(opt.beacon){
    const b=svgBox('0 0 '+W+' '+H,'<circle cx="'+(px)+'" cy="'+(py)+'" r="15" fill="none" stroke="'+opt.beacon+'" stroke-width="2.4" style="animation:mn-beacon 2.6s ease-in-out infinite"></circle><circle cx="'+px+'" cy="'+py+'" r="6" fill="'+opt.beacon+'"></circle>',(Z[Z.length-1]||0)+18);
    rig.appendChild(b); layers.push(b);
  }
  return layers;
}

/* pointer, eased, read once per frame */
function tracker(host){
  const s={tx:0,ty:0,x:0,y:0};
  if(!RM&&host){
    host.addEventListener('pointermove',e=>{const r=host.getBoundingClientRect();
      s.tx=(e.clientX-r.left)/r.width-0.5;s.ty=(e.clientY-r.top)/r.height-0.5;},{passive:true});
    host.addEventListener('pointerleave',()=>{s.tx=0;s.ty=0;});
  }
  s.read=()=>{s.x=lerp(s.x,s.tx,kf(.12));s.y=lerp(s.y,s.ty,kf(.12));return s;};
  return s;
}
/* every object walks its own selection on a timer, so the deck stays alive
   on a projector with nobody touching it. A pointer over it takes the wheel. */
function autoDrive(hosts,apply,max,period,lead){
  const A={k:-1,acc:-(lead==null?1.1:lead),hold:false,moved:0};
  /* a moving hand holds it; a cursor left resting on the projector does not */
  (Array.isArray(hosts)?hosts:[hosts]).forEach(el=>{ if(!el||RM) return;
    el.addEventListener('pointermove',()=>{A.hold=true;A.moved=performance.now();},{passive:true});
    el.addEventListener('pointerleave',()=>{A.hold=false;A.acc=-.35;});
  });
  A.tick=()=>{ if(A.hold&&performance.now()-A.moved>3000){A.hold=false;A.acc=-.35;}
    if(still()||A.hold) return;
    A.acc+=DT; if(A.acc<period) return;
    A.acc=0; A.k=A.k+1>max()?0:A.k+1; apply(A.k); };
  A.sync=k=>{A.k=k;A.acc=0;};
  A.reset=()=>{A.k=-1;A.acc=-(lead==null?1.1:lead);};
  return A;
}

/* the composed table: elliptical extruded top, chairs carrying their
   group pictogram, a plate that counter-rotates to stay legible */
const STEEL='#49515c';
function table3d(o){
  o=o||{};
  const n=o.seats||12, TW=o.w||760, TH=o.h||500, DEP=o.depth||7, SC=o.seatScale||1;
  const RX=o.rx||TW*0.585, RY=o.ry||TH*0.608, pitch=o.pitch==null?58:o.pitch;
  const wrap=document.createElement('div');
  wrap.style.cssText='position:absolute;left:50%;top:'+(o.top||'44%')+';width:'+TW+'px;height:'+TH+'px;margin:'+(-TH/2)+'px 0 0 '+(-TW/2)+'px;transform-style:preserve-3d';
  for(let i=6;i>=0;i--){const z=-DEP+(i/6)*(DEP*2), k=i/6;
    const w=document.createElement('div');
    w.style.cssText='position:absolute;inset:0;border-radius:50%;transform:translateZ('+z.toFixed(1)+'px);background:'+
      (i===6?(o.topFill||'linear-gradient(150deg,#2b3138,#171b21)'):'rgb('+Math.round(8+14*k)+','+Math.round(10+16*k)+','+Math.round(13+19*k)+')')+
      (i===6?';box-shadow:inset 0 1px 0 rgba(255,255,255,.10),0 44px 90px rgba(0,0,0,.55)':'');
    wrap.appendChild(w);
  }
  const light=document.createElement('div');
  light.style.cssText='position:absolute;inset:0;border-radius:50%;transform:translateZ('+(DEP+0.4)+'px);pointer-events:none';
  wrap.appendChild(light);
  const seats=[];
  for(let i=0;i<n;i++){
    const a=(-90+i*(360/n))*Math.PI/180, t=(o.group?o.group(i):i%4);
    const x=Math.cos(a)*RX, y=Math.sin(a)*RY;
    const rot=Math.atan2(-y,-x)*180/Math.PI+90;
    const s=document.createElement('div');
    s.style.cssText='position:absolute;left:50%;top:50%;width:76px;height:66px;margin:-33px 0 0 -38px;transform-style:preserve-3d;transition:opacity .22s ease';
    s.innerHTML='<div style="position:absolute;left:22px;right:22px;top:16px;height:30px;background:linear-gradient(#1d2228,#0c1015);transform:translateZ(9px)"></div>'+
      '<div data-pad style="position:absolute;inset:0;border-radius:11px;background:linear-gradient(158deg,#49515c,#272d35);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 9px 20px rgba(0,0,0,.5);transform:translateZ(19px);display:flex;align-items:center;justify-content:center">'+
        '<svg viewBox="-18 -18 36 36" style="width:34px;height:34px;overflow:visible;transform:rotate('+(-rot).toFixed(1)+'deg)">'+shape(t,0,0,12.4,MK[t])+'</svg></div>'+
      '<div data-back style="position:absolute;left:5px;right:5px;bottom:0;height:58px;border-radius:13px 13px 5px 5px;background:linear-gradient(#454e59,#232932);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 12px 24px rgba(0,0,0,.45);transform-origin:bottom center;transform:translateZ(19px) rotateX(-90deg);padding:9px 10px;display:flex;flex-direction:column;gap:6px">'+
        '<i style="display:block;height:6px;border-radius:3px;background:rgba(255,255,255,.09)"></i><i style="display:block;height:6px;border-radius:3px;background:rgba(255,255,255,.07)"></i></div>';
    wrap.appendChild(s);
    const seat={el:s,x:x,y:y,t:t,rot:rot,lift:0,want:0,i:i,pad:s.querySelector('[data-pad]'),back:s.querySelector('[data-back]')};
    seat.tone=(col,glow)=>{
      seat.pad.style.background='linear-gradient(158deg,'+col+',rgba(0,0,0,.42))';
      seat.pad.style.boxShadow='inset 0 0 0 1.5px '+col+',0 9px 26px rgba(0,0,0,.5)'+(glow?',0 0 26px '+glow:'');
      seat.back.style.background='linear-gradient('+col+',rgba(0,0,0,.5))';
    };
    seat.skin=col=>{
      seat.pad.style.background='linear-gradient(158deg,'+col+',rgba(0,0,0,.5))';
      seat.pad.style.boxShadow='inset 0 1px 0 rgba(255,255,255,.2),0 9px 20px rgba(0,0,0,.5)';
      seat.back.style.background='linear-gradient('+col+',rgba(0,0,0,.55))';
    };
    seat.reset=()=>seat.skin(STEEL);
    seat.label=(txt,col)=>{
      let p=seat._lab;
      if(!p){p=document.createElement('div');seat._lab=p;
        p.style.cssText='position:absolute;left:50%;top:-8px;padding:6px 12px;border-radius:3px;font:600 14px/1 var(--font-ui);letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;transform-origin:center;transition:opacity .2s ease';
        s.appendChild(p);}
      p.textContent=txt||'';
      p.style.background=col||C.mist; p.style.color=(col||C.mist)===C.mist?'#0b0f14':'#fff';
      p.style.transform='translate(-50%,0) translateZ(66px) rotateZ('+(-rot).toFixed(1)+'deg) rotateX('+(-pitch)+'deg)';
      p.style.opacity=txt?'1':'0';
    };
    seats.push(seat);
  }
  return {el:wrap,seats:seats,light:light,
    place(e){
      seats.forEach((s,i)=>{
        const se=clamp((e*1.6-0.14-i*(1.1/seats.length))/0.42,0,1), q=easeOut(se);
        s.lift=lerp(s.lift,s.want,kf(.16));
        const ux=s.x*(1+s.lift*.5/RX), uy=s.y*(1+s.lift*.5/RY);
        s.el.style.transform='translate3d('+ux.toFixed(1)+'px,'+uy.toFixed(1)+'px,'+(s.lift+(1-q)*-26).toFixed(1)+'px) rotateZ('+s.rot.toFixed(1)+'deg) scale('+((0.72+q*0.28)*SC).toFixed(3)+')';
        s.el.style.visibility=se>0?'visible':'hidden';
      });
    },
    warm(t){ light.style.background='radial-gradient(36% 44% at '+(24+52*(0.5+0.5*Math.sin(t*0.26))).toFixed(1)+'% 38%,rgba(255,214,168,.24),transparent 68%)'; }
  };
}
function timerTicks(host,n){host.innerHTML='';const b=[];for(let i=0;i<n;i++){const t=document.createElement('i');t.innerHTML='<b></b>';host.appendChild(t);b.push(t.firstChild);}return b;}
function fitText(el,max,min,maxLines){
  if(!el) return;
  let s=max; el.style.fontSize=s+'px';
  const lh=parseFloat(getComputedStyle(el).lineHeight)/s||1.1;
  while(s>min&&el.scrollHeight>s*lh*maxLines+2){s-=2;el.style.fontSize=s+'px';}
}

/* ---------- who is speaking, and in what order ---------- */
const byName=(a,b)=>(a.name||'').localeCompare(b.name||'','en',{sensitivity:'base'});
function running(){
  const live=P().filter(p=>p.status==='live'&&p.name).sort(byName);
  const walk=P().filter(p=>p.status==='walkin'&&p.name).sort((a,b)=>(a.joined||0)-(b.joined||0));
  const n=live.length, k=n<=6?1:n<=10?2:3, blocks=[]; let i=0;
  for(let b=0;b<k;b++){const size=Math.ceil((n-i)/(k-b)); if(size>0) blocks.push(live.slice(i,i+size)); i+=size;}
  return {live:live,walk:walk,blocks:blocks,all:live.concat(walk)};
}
const inRunning=p=>(p.status==='live'||p.status==='walkin')&&!!p.name;
function initials(name){const w=String(name||'').trim().split(/\s+/).filter(Boolean);if(!w.length)return '';return (w[0][0]+(w.length>1?w[w.length-1][0]:'')).toUpperCase();}
const first=name=>String(name||'').trim().split(/\s+/)[0]||'';
const BLOCKNAME=['Block one','Block two','Block three'];

/* ---------- images: dropped in edit mode, or found beside the file ---------- */
let luguFound=null;
function probe(list,ok){ if(!list.length) return; let i=0; const t=new Image();
  t.onload=()=>ok(list[i]); t.onerror=()=>{i++; if(i<list.length) t.src=list[i];}; t.src=list[0]; }
const logoKey=p=>slug(p.org)||slug(p.name)||p.id;
function loadImg(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file);const im=new Image();im.onload=()=>res(im);im.onerror=rej;im.src=u;});}
async function toHeadshot(file){
  const im=await loadImg(file); const S=720, side=Math.min(im.naturalWidth,im.naturalHeight);
  const sx=(im.naturalWidth-side)/2, sy=Math.max(0,(im.naturalHeight-side)*0.22);
  const c=document.createElement('canvas'); c.width=c.height=S;
  c.getContext('2d').drawImage(im,sx,sy,side,side,0,0,S,S);
  return c.toDataURL('image/jpeg',0.86);
}
async function toLogo(file){
  if(/svg/i.test(file.type)||/\.svg$/i.test(file.name)) return await new Promise(res=>{const r=new FileReader();r.onload=()=>res(r.result);r.readAsDataURL(file);});
  const im=await loadImg(file); const k=Math.min(1,900/im.naturalWidth);
  const w=Math.round(im.naturalWidth*k), h=Math.round(im.naturalHeight*k);
  const c=document.createElement('canvas'); c.width=w; c.height=h; const g=c.getContext('2d');
  g.drawImage(im,0,0,w,h);
  const d=g.getImageData(0,0,w,h), a=d.data; let opaque=true;
  for(let i=3;i<a.length;i+=16){ if(a[i]<250){opaque=false;break;} }
  /* a logo on a white field: lift the white out so it can render in one colour */
  if(opaque){ for(let i=0;i<a.length;i+=4){ const m=Math.min(a[i],a[i+1],a[i+2]);
    if(m>236) a[i+3]=0; else if(m>212) a[i+3]=Math.round(255*(236-m)/24); } g.putImageData(d,0,0); }
  return c.toDataURL('image/png');
}

/* ---------- the constant rail: MedTech North · Lugu · the leaf ---------- */
function luguInner(){ const src=DATA.lugu||luguFound; return src?'<img alt="Lugu" src="'+src+'">':'Lugu'; }
function addRail(sec){
  if($('.mnrail',sec)) return;
  const r=document.createElement('div'); r.className='mnrail';
  const red=sec.classList.contains('s-red');
  r.innerHTML='<span class="mn">'+mark(22,'#ffffff','rgba(255,255,255,.46)')+'MedTech North</span><i class="sep"></i><span class="lugu drop">'+luguInner()+'</span><i class="sep"></i><span class="leaf">'+leaf(24,red?'#ffffff':C.redB)+'</span>';
  sec.appendChild(r);
  wireDrop($('.lugu',r),'lugu',()=>null);
}
function paintRails(){ $$('.mnrail .lugu').forEach(el=>{el.innerHTML=luguInner();}); }

/* ═══════════════ controllers, one per slide kind ═══════════════ */
const CTRL=new Map();
function ctrl(sec){ let c=CTRL.get(sec); if(!c){ const f=FACT[sec.dataset.kind]; c=f?f(sec):{}; c.ready=false; CTRL.set(sec,c);} return c; }
function ensure(sec){ const c=ctrl(sec); if(!c.ready||c.dirty){ c.ready=true; c.dirty=false; if(c.build) c.build(); } return c; }

/* HOLD */
function mkHold(sec){
  const rig=$('.cf .rig',sec), qs=$$('.qs div',sec), tk=tracker(sec); let acc=0,k=0;
  return {
    build(){ rig.innerHTML=''; dotField(rig,{step:15,r:2.3,color:'#ffffff',planes:[-80,-26,26,80],seed:11,beacon:C.redB}); },
    enter(){acc=0;},
    tick(t){ const p=tk.read();
      rig.style.transform='rotateX('+(16+p.y*5).toFixed(2)+'deg) rotateY('+(Math.sin(t*.07)*9+p.x*8).toFixed(2)+'deg)';
      if(still()) return; acc+=DT; if(acc>4.6){acc=0;k=(k+1)%qs.length;qs.forEach((q,i)=>i===k?q.setAttribute('data-on',''):q.removeAttribute('data-on'));} }
  };
}
/* 1 · Canada, as dots, turning */
function mkTitle(sec){
  const rig=$('.cstage .rig',sec), tk=tracker(sec); let ent=0, layers=[];
  return {
    build(){ rig.innerHTML=''; layers=dotField(rig,{step:14,r:2.6,color:'#ffffff',planes:[-90,-30,30,90],seed:7,beacon:'#ffffff'}); },
    enter(){ ent=still()?1:0; },
    resolve(){ ent=1; },
    tick(t){ const p=tk.read(); ent=Math.min(1,ent+DT*.7); const e=easeOut(ent);
      rig.style.transform='rotateX('+(20+p.y*6).toFixed(2)+'deg) rotateY('+(-18+Math.sin(t*.09)*7+p.x*10).toFixed(2)+'deg)';
      layers.forEach((l,i)=>{ const z=[-90,-30,30,90,108][i]||0; l.style.transform='translateZ('+(z*e).toFixed(1)+'px)'; l.style.opacity=clamp(e*1.4-i*0.12,0,1).toFixed(2); }); }
  };
}
/* flip tiles walked on a timer: 2 · the market, 5 · the rules */
function mkFlip(sec,period,joinFrame){
  const inner=$('.inner',sec), tiles=$$('.ft',sec); let sel=-1, flipped={}, timers=[];
  function setSel(k){ sel=k;
    tiles.forEach((el,i)=>{ if(i===k){el.setAttribute('data-flip','');flipped[i]=1;} else el.removeAttribute('data-flip'); });
    if(joinFrame&&Object.keys(flipped).length>=tiles.length) inner.setAttribute('data-joined','');
  }
  const auto=autoDrive(inner,setSel,()=>tiles.length-1,period,.9);
  tiles.forEach((el,i)=>{ el.addEventListener('pointerenter',()=>{setSel(i);auto.sync(i);}); el.addEventListener('pointerleave',()=>el.removeAttribute('data-flip')); });
  const tk=tracker(sec);
  function reset(){
    timers.forEach(clearTimeout); timers=[]; flipped={}; inner.removeAttribute('data-joined');
    tiles.forEach((el,i)=>{ el.removeAttribute('data-flip');
      if(still()){el.style.opacity='1';el.style.transform='';return;}
      el.style.transition='none';el.style.opacity='0';el.style.transform='scale(.94)';
      timers.push(setTimeout(()=>{el.style.transition='transform .42s var(--ez),opacity .34s ease';el.style.opacity='1';el.style.transform='scale(1.02)';
        timers.push(setTimeout(()=>{el.style.transform='';el.style.transition='';},140));},160+i*260));
    });
    if(still()&&joinFrame) inner.setAttribute('data-joined','');
  }
  return {
    enter(){auto.reset();reset();sel=-1;},
    leave(){timers.forEach(clearTimeout);},
    resolve(){timers.forEach(clearTimeout);tiles.forEach(el=>{el.style.opacity='1';el.style.transform='';el.removeAttribute('data-flip');});},
    tick(){ const p=tk.read(); auto.tick(); inner.style.transform='rotateX('+((joinFrame?34:30)+p.y*5).toFixed(2)+'deg) rotateY('+(p.x*6).toFixed(2)+'deg)'; },
    api:{cycle(d){setSel(sel<0?(d>0?0:tiles.length-1):clamp(sel+d,0,tiles.length-1));auto.sync(sel);}}
  };
}
/* 3 · the ribbon, four marks rising in turn */
function mkPolicy(sec){
  const fl=$('.fl',sec), marks=$$('.ms',sec), posts=[]; let sel=-1, ent=0;
  const tk=tracker(sec);
  function setSel(k){ sel=k; marks.forEach((m,i)=>{ m.removeAttribute('data-on'); m.removeAttribute('data-off'); if(k>=0){ i===k?m.setAttribute('data-on',''):m.setAttribute('data-off',''); } }); }
  const auto=autoDrive([$('.marks',sec)],setSel,()=>3,3.1,.9);
  marks.forEach((m,i)=>m.addEventListener('pointerenter',()=>{setSel(i);auto.sync(i);}));
  return {
    build(){
      const W=1720, col=(W-3*28)/4;
      for(let i=0;i<4;i++){
        const p=document.createElement('div'); p.className='post'; p.style.left=(i*(col+28)+8)+'px';
        p.innerHTML='<i class="tp" style="left:0;top:0;width:56px;height:56px"></i><i class="fr" style="left:0;top:56px;width:56px;transform-origin:top;transform:rotateX(90deg)"></i><i class="rt" style="left:56px;top:0;height:56px;transform-origin:left;transform:rotateY(-90deg)"></i>';
        fl.appendChild(p); posts.push({el:p,h:0,want:28,tp:$('.tp',p),fr:$('.fr',p),rt:$('.rt',p),i:i});
      }
    },
    enter(){ auto.reset(); setSel(still()?3:-1); ent=still()?1:0; },
    resolve(){ setSel(-1); marks.forEach(m=>m.removeAttribute('data-off')); ent=1; posts.forEach(p=>{p.h=p.want=p.i===3?130:84;}); this.paint(); },
    paint(){ posts.forEach(p=>{
        const on=p.i===sel, last=p.i===3, col=on?(last?C.redB:C.mist):(last?'#7a1a26':'#3a424b');
        p.tp.style.transform='translateZ('+p.h.toFixed(1)+'px)'; p.tp.style.background=on?col:'linear-gradient(160deg,'+col+',#1a1f25)';
        p.fr.style.height=p.h.toFixed(1)+'px'; p.fr.style.background='linear-gradient('+col+',#0b0f13)';
        p.rt.style.width=p.h.toFixed(1)+'px'; p.rt.style.background='linear-gradient(90deg,#0b0f13,'+col+')';
        p.tp.style.boxShadow=on?'0 0 30px '+(last?'rgba(239,51,64,.55)':'rgba(185,206,221,.45)'):'none';
      }); },
    tick(t){ const p=tk.read(); auto.tick(); ent=Math.min(1,ent+DT*.9); const e=easeOut(ent);
      fl.style.transform='rotateX('+(64+p.y*4).toFixed(2)+'deg) rotateZ('+(p.x*2).toFixed(2)+'deg) translateZ('+((1-e)*-60).toFixed(1)+'px)';
      posts.forEach(q=>{ q.want=(q.i===sel?236:(q.i===3?130:84))*clamp(e*1.4-q.i*0.12,0,1); q.h=lerp(q.h,q.want,kf(.12)); });
      this.paint(); },
    api:{cycle(d){setSel(sel<0?(d>0?0:3):clamp(sel+d,0,3));auto.sync(sel);}}
  };
}
/* 4 · three plates, and the timer the room will see */
function mkFormat(sec){
  const rig=$('.qstage .rig',sec), plates=$$('.qp',sec), tk=tracker(sec), demo=$('[data-demo]',sec);
  let sel=-1, ent=0, dacc=0; const S=plates.map((el,i)=>({el:el,i:i,on:0,want:0}));
  let bars=[];
  function setSel(k){ sel=k; S.forEach(s=>{ s.want=s.i===k?1:0; s.i===k?s.el.setAttribute('data-on',''):s.el.removeAttribute('data-on'); }); }
  const auto=autoDrive([$('.qstage',sec)],setSel,()=>2,2.4,.8);
  plates.forEach((el,i)=>el.addEventListener('pointerenter',()=>{setSel(i);auto.sync(i);}));
  return {
    build(){ bars=timerTicks(demo,SLOT()); },
    enter(){ auto.reset(); setSel(-1); ent=still()?1:0; dacc=0; if(bars.length!==SLOT()) bars=timerTicks(demo,SLOT()); },
    resolve(){ ent=1; setSel(-1); bars.forEach((b,i)=>{b.style.height=(i<SLOT()-1?100:0)+'%';}); },
    tick(t){ const p=tk.read(); auto.tick(); ent=Math.min(1,ent+DT*.8);
      rig.style.transform='rotateX('+(24+p.y*6).toFixed(2)+'deg) rotateY('+(-22+p.x*10).toFixed(2)+'deg)';
      S.forEach(s=>{ const land=clamp(ent*2.2-s.i*0.35,0,1), q=easeOut(land);
        s.on=lerp(s.on,s.want,kf(.18));
        s.el.style.transform='translate3d('+((1-q)*300-s.on*30).toFixed(1)+'px,'+((s.i-1)*150).toFixed(1)+'px,'+(s.on*70).toFixed(1)+'px) rotateY('+(s.on*6).toFixed(2)+'deg)';
        s.el.style.opacity=q.toFixed(2); });
      if(!still()){ dacc=(dacc+DT)%((SLOT()+1.6)*0.9);
        bars.forEach((b,i)=>{ b.style.height=(clamp((dacc/0.9)-i,0,1)*100).toFixed(1)+'%'; }); } },
    api:{cycle(d){setSel(sel<0?(d>0?0:2):clamp(sel+d,0,2));auto.sync(sel);}}
  };
}
/* 6 · the running order, and the table it seats */
function mkOrder(sec){
  const rig=$('.tstage .rig',sec), list=$('.olist',sec), tk=tracker(sec);
  let T=null, people=[], names=[], sel=-1, ent=0;
  function setSel(k){ sel=k;
    names.forEach((el,i)=>i===k?el.setAttribute('data-on',''):el.removeAttribute('data-on'));
    if(T) T.seats.forEach((s,i)=>{ if(i===k){s.want=24;s.tone(C.mist,'rgba(185,206,221,.5)');s.label(first(people[i].name),C.mist);} else {s.want=0;s.reset();s.label('');} });
  }
  const auto=autoDrive([list,$('.tstage',sec)],setSel,()=>Math.max(0,people.length-1),1.7,1.1);
  return {
    build(){
      const R=running(); people=R.all; rig.innerHTML=''; list.innerHTML=''; names=[]; T=null;
      const groups=R.blocks.map((b,i)=>({label:R.blocks.length>1?BLOCKNAME[i]:'',ppl:b}));
      if(R.walk.length) groups.push({label:'Joined tonight',ppl:R.walk});
      let idx=0;
      groups.forEach(g=>{ const b=document.createElement('div'); b.className='ob';
        b.innerHTML=(g.label?'<div class="obl">'+esc(g.label)+'</div>':'');
        g.ppl.forEach(p=>{ const d=document.createElement('div'); d.className='onm'; d.innerHTML=picSVG(p.marker,22)+'<span>'+esc(p.name)+'</span>';
          const k=idx++; d.addEventListener('pointerenter',()=>{setSel(k);auto.sync(k);}); b.appendChild(d); names.push(d); });
        list.appendChild(b); });
      if(people.length){ T=table3d({seats:people.length,w:780,h:520,depth:8,top:'50%',pitch:58,group:i=>people[i].marker}); rig.appendChild(T.el); }
      /* long lists tighten so the column never runs into the rail */
      const n=people.length; list.style.gap=n>16?'10px':'18px'; names.forEach(el=>{el.style.fontSize=(n>18?21:n>15?24:27)+'px';el.style.padding=(n>15?'2px 0':'');});
    },
    enter(){ auto.reset(); setSel(-1); ent=still()?1:0; },
    resolve(){ ent=1; setSel(-1); if(T){T.place(1);T.place(1);} },
    tick(t){ const p=tk.read(); auto.tick(); ent=Math.min(1,ent+DT*.8); const e=easeOut(ent);
      rig.style.transform='rotateX('+(58+p.y*5).toFixed(2)+'deg) rotateY('+(Math.sin(t*.06)*6+p.x*6).toFixed(2)+'deg)';
      if(T){ T.el.style.transform='translateY('+((1-e)*-40).toFixed(1)+'px)'; T.warm(t); T.place(e); } },
    api:{cycle(d){ if(!people.length) return; setSel(sel<0?(d>0?0:people.length-1):clamp(sel+d,0,people.length-1)); auto.sync(sel);}}
  };
}
/* break: the table again, the next three seats lit */
function mkBreak(sec){
  const rig=$('.tstage .rig',sec), tk=tracker(sec); let T=null, ent=0;
  return {
    build(){ const R=running(), all=R.all; rig.innerHTML='';
      if(!all.length) return;
      T=table3d({seats:all.length,w:740,h:490,depth:8,top:'50%',pitch:58,group:i=>all[i].marker}); rig.appendChild(T.el);
      const next=(sec._next||[]);
      T.seats.forEach((s,i)=>{ if(next.indexOf(all[i].id)>=0){ s.want=20; s.tone(C.mist,'rgba(185,206,221,.45)'); s.label(first(all[i].name),C.mist);} }); },
    enter(){ ent=still()?1:0; },
    resolve(){ ent=1; if(T){T.place(1);T.place(1);} },
    tick(t){ const p=tk.read(); ent=Math.min(1,ent+DT*.8);
      rig.style.transform='rotateX('+(58+p.y*5).toFixed(2)+'deg) rotateY('+(Math.sin(t*.06)*6+p.x*6).toFixed(2)+'deg)';
      if(T){ T.warm(t); T.place(easeOut(ent)); } }
  };
}
/* the person: a portrait card standing in front of the seam */
let PAUSED=false;
function mkPerson(sec){
  const pc=$('.pc',sec), floor=$('.p-floor',sec), tmr=$('.p-timer',sec), tk=tracker(sec);
  let ent=0, el=0, bars=[];
  function render(){ const n=bars.length;
    bars.forEach((b,i)=>{ b.style.height=(clamp((el-i*60)/60,0,1)*100).toFixed(1)+'%'; });
    tmr.classList.toggle('over',el>=n*60); tmr.classList.toggle('paused',PAUSED); }
  return {
    build(){ bars=timerTicks(tmr,SLOT()); },
    enter(){ ent=still()?1:0; el=0; if(bars.length!==SLOT()) bars=timerTicks(tmr,SLOT()); render(); fitPerson(sec); },
    leave(){ el=0; render(); },
    resolve(){ ent=1; el=0; render(); this.pose(0,{x:0,y:0}); },
    pose(t,p){ const e=easeOut(ent);
      pc.style.transform='translate3d(0,'+((1-e)*50).toFixed(1)+'px,'+((1-e)*-200).toFixed(1)+'px) rotateY('+(-15-(1-e)*28+p.x*11+Math.sin(t*.33)*2.2).toFixed(2)+'deg) rotateX('+(4-p.y*7+Math.sin(t*.26)*1.1).toFixed(2)+'deg)';
      pc.style.opacity=clamp(e*1.6,0,1).toFixed(2);
      floor.style.opacity=e.toFixed(2); floor.style.transform='scaleX('+(0.7+e*0.3).toFixed(3)+')'; },
    tick(t){ const p=tk.read(); ent=Math.min(1,ent+DT*1.05); this.pose(RM?0:t,p);
      if(!PAUSED) el+=DT; render(); }
  };
}
/* the word wall: every word typed on a speaker's slide, in one field */
function mkWall(sec){
  const cf=$('.cf .rig',sec), rig=$('.wstage .rig',sec), empty=$('.empty',sec), tk=tracker(sec);
  let W=[], ent=0;
  function layout(){
    rig.innerHTML=''; W=[];
    const words=running().all.map(p=>(p.word||'').trim()).filter(Boolean);
    empty.classList.toggle('show',!words.length);
    if(!words.length) return;
    const BW=1640, BH=600, OX=(1920-BW)/2, OY=(784-BH)/2;
    const els=words.map((w,i)=>{ const d=document.createElement('div'); d.className='wd'; d.textContent=w;
      const r=mulberry(hash(w)+i*977); d._fs=Math.round(60+r()*52); d._z=Math.round(-90+r()*180); d._j=(r()-.5)*26; d._o=0.72+r()*0.28;
      rig.appendChild(d); return d; });
    let scale=words.length>18?0.8:1;
    for(let pass=0;pass<8;pass++){
      els.forEach(d=>{d.style.fontSize=(d._fs*scale).toFixed(1)+'px';});
      const gap=70*scale, rows=[]; let row=[], rw=0;
      els.forEach(d=>{ const w=d.offsetWidth; if(row.length&&rw+gap+w>BW){rows.push({e:row,w:rw});row=[];rw=0;} rw+=(row.length?gap:0)+w; row.push(d); });
      if(row.length) rows.push({e:row,w:rw});
      const rh=rows.map(r=>Math.max.apply(null,r.e.map(d=>d.offsetHeight)));
      const total=rh.reduce((a,b)=>a+b,0)+(rows.length-1)*22*scale;
      if(total>BH&&pass<7){scale*=Math.max(.6,Math.sqrt(BH/total)*0.97);continue;}
      let y=OY+(BH-total)/2;
      rows.forEach((r,ri)=>{ let x=OX+(BW-r.w)/2; r.e.forEach(d=>{ d._x=x; d._y=y+(rh[ri]-d.offsetHeight)/2+d._j; x+=d.offsetWidth+gap; }); y+=rh[ri]+22*scale; });
      break;
    }
    els.forEach((d,i)=>{ d.style.transform='translate3d('+d._x.toFixed(1)+'px,'+d._y.toFixed(1)+'px,'+d._z+'px)'; d.style.color='rgba(255,255,255,'+d._o.toFixed(2)+')'; d.style.transitionDelay=(still()?0:0.25+i*0.09).toFixed(2)+'s'; });
    W=els;
  }
  return {
    build(){ cf.innerHTML=''; dotField(cf,{step:15,r:2.3,color:'#ffffff',planes:[-70,-24,24,70],seed:5}); },
    enter(){ ent=still()?1:0; layout(); requestAnimationFrame(()=>W.forEach(d=>d.setAttribute('data-on',''))); },
    leave(){ W.forEach(d=>d.removeAttribute('data-on')); },
    resolve(){ layout(); W.forEach(d=>{d.setAttribute('data-on','');d.style.transitionDelay='0s';}); },
    tick(t){ const p=tk.read(); ent=Math.min(1,ent+DT*.6);
      rig.style.transform='rotateX('+(6+p.y*7).toFixed(2)+'deg) rotateY('+(Math.sin(t*.08)*4+p.x*12).toFixed(2)+'deg)';
      cf.style.transform='rotateX('+(18+p.y*4).toFixed(2)+'deg) rotateY('+(Math.sin(t*.05)*6+p.x*6).toFixed(2)+'deg) scale(1.15)'; }
  };
}
/* the ask: Canada again, ambient */
function mkAsk(sec){
  const rig=$('.amb .rig',sec), tk=tracker(sec);
  return {
    build(){ rig.innerHTML=''; dotField(rig,{step:15,r:2.4,color:'#ffffff',planes:[-80,-26,26,80],seed:9,beacon:'#ffffff'}); },
    tick(t){ const p=tk.read(); rig.style.transform='rotateX('+(20+p.y*5).toFixed(2)+'deg) rotateY('+(-14+Math.sin(t*.07)*8+p.x*8).toFixed(2)+'deg)'; }
  };
}
const FACT={hold:mkHold,title:mkTitle,market:s=>mkFlip(s,2.3,false),policy:mkPolicy,format:mkFormat,rules:s=>mkFlip(s,2.6,true),order:mkOrder,brk:mkBreak,person:mkPerson,wall:mkWall,ask:mkAsk};

/* ═══════════════ the person slides ═══════════════ */
const personSec=new Map();
let ceMode='plaintext-only';
(function(){const t=document.createElement('div');t.contentEditable='plaintext-only';if(t.contentEditable!=='plaintext-only')ceMode='true';})();
function buildPerson(p){
  let sec=personSec.get(p.id);
  if(!sec){
    sec=document.createElement('section'); sec.className='s-ink wash-mist person'; sec.dataset.kind='person'; sec.dataset.pid=p.id;
    sec.innerHTML=
      '<div class="conf"></div>'+
      '<div class="seam"></div>'+
      '<div class="stage3d p-stage"><div class="p-floor"></div><div class="rig">'+
        '<div class="pc"><div class="sr"></div><div class="sb"></div>'+
          '<div class="fc"><div class="ph drop" data-drop="headshot"><div class="ini"></div><div class="t1"></div><div class="t2"></div></div><div class="lg drop" data-drop="logo"></div></div>'+
        '</div></div></div>'+
      '<div class="eyebrow p-eye" data-in><span class="pic"></span>Building in Canada</div>'+
      '<div class="p-namebox" data-in style="--d:1"><div class="p-name ed" data-f="name" data-ph="Name"></div></div>'+
      '<div class="p-role" data-in style="--d:2"><span class="t ed" data-f="title" data-ph="Title"></span><span class="dot">·</span><span class="o ed" data-f="org" data-ph="Organisation"></span></div>'+
      '<div class="eyebrow p-cl" data-in style="--d:3">Ecosystem contribution</div>'+
      '<div class="p-contrib ed" data-f="contribution" data-ph="One line on what they give the ecosystem" data-in style="--d:3"></div>'+
      '<div class="p-timer tmr" data-in style="--d:4"></div>'+
      '<div class="p-rows" data-in style="--d:4">'+
        '<div class="p-row"><span class="lb">Working on</span></div>'+
        '<div class="p-row"><span class="lb">Why Canada</span></div>'+
        '<div class="p-row w"><span class="lb">The word</span><div class="p-word" spellcheck="false" data-f="word"></div></div>'+
      '</div>';
    personSec.set(p.id,sec);
    const word=$('.p-word',sec); word.contentEditable=ceMode;
    $$('.ed,.p-word',sec).forEach(el=>{
      el.addEventListener('input',()=>{ const q=pById(sec.dataset.pid), f=el.dataset.f;
        q[f]=el.textContent.replace(/\s+/g,' ').trim(); persist();
        if(f==='name') $('.ini',sec).textContent=initials(q.name);
        if(f==='word') markDirty('wall'); });
      el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();el.blur();} });
      el.addEventListener('blur',()=>{ const q=pById(sec.dataset.pid), f=el.dataset.f;
        if(f==='name'||f==='org'){ rebuild(); } else paintPerson(sec,q); });
    });
    wireDrop($('.ph',sec),'headshot',()=>pById(sec.dataset.pid));
    wireDrop($('.lg',sec),'logo',()=>pById(sec.dataset.pid));
    addRail(sec);
    if(editing) $$('.ed',sec).forEach(e=>e.contentEditable=ceMode);
  }
  paintPerson(sec,p);
  return sec;
}
function setText(el,v){ if(document.activeElement!==el&&el.textContent!==(v||'')) el.textContent=v||''; }
function paintPerson(sec,p){
  $('.conf',sec).textContent=p.confirm||'';
  setText($('.p-name',sec),p.name); setText($('.t',sec),p.title); setText($('.o',sec),p.org);
  setText($('.p-contrib',sec),p.contribution); setText($('.p-word',sec),p.word);
  $('.p-eye .pic',sec).innerHTML=picSVG(p.marker,22);
  $('.ini',sec).textContent=initials(p.name);
  paintHeadshot(sec,p); paintLogo(sec,p); fitPerson(sec);
}
function fitLine(el,max,min){ if(!el) return; let s=max; el.style.fontSize=s+'px'; while(s>min&&el.scrollWidth>el.clientWidth+1){s-=1;el.style.fontSize=s+'px';} }
function fitPerson(sec){ fitText($('.p-name',sec),92,64,2); fitLine($('.p-role',sec),28,19); fitText($('.p-contrib',sec),36,26,2); fitText($('.lg .lt',sec),27,17,2); }
function paintHeadshot(sec,p){
  const ph=$('.ph',sec); let img=$('img',ph);
  const put=src=>{ if(!img){img=document.createElement('img');img.alt='';ph.insertBefore(img,ph.firstChild);} img.src=src; ph.classList.add('has'); };
  if(p.headshot){put(p.headshot);return;}
  if(img){img.remove();img=null;} ph.classList.remove('has');
  const s=slug(p.name); if(!s) return;
  probe(['headshots/'+s+'.jpg','headshots/'+s+'.jpeg','headshots/'+s+'.png','headshots/'+s+'.webp'],src=>{ if(!pById(sec.dataset.pid).headshot&&slug(pById(sec.dataset.pid).name)===s) put(src); });
}
function paintLogo(sec,p){
  const lg=$('.lg',sec), key=logoKey(p);
  const img=src=>{ lg.innerHTML='<img alt="'+esc(p.org||p.name)+'" src="'+src+'">'; };
  if(DATA.logos[key]){img(DATA.logos[key]);return;}
  lg.innerHTML=p.org?'<div class="lt">'+esc(p.org)+'</div>':'<span class="lp">'+picSVG(p.marker,30,'rgba(255,255,255,.8)')+'</span>';
  fitText($('.lt',lg),27,17,2);
  if(key) probe(['logos/'+key+'.svg','logos/'+key+'.png'],src=>{ if(!DATA.logos[key]&&logoKey(pById(sec.dataset.pid))===key) img(src); });
}
function buildBreak(next,bi){
  const sec=document.createElement('section'); sec.className='s-deep wash-mist brk'; sec.dataset.kind='brk'; sec.dataset.label='Break';
  const three=next.slice(0,3); sec._next=three.map(p=>p.id);
  sec.innerHTML='<div class="stage3d tstage"><div class="rig"></div></div><div class="pad"><div class="eyebrow" data-in>Break</div><h1 class="h1" data-in style="--d:1">A short break.</h1>'+
    '<div class="nx" data-in style="--d:2"><div class="eyebrow">Up next</div>'+three.map(p=>'<div class="onm">'+picSVG(p.marker,22)+'<span>'+esc(p.name)+'</span></div>').join('')+'</div></div>';
  addRail(sec); return sec;
}

/* ═══════════════ the deck ═══════════════ */
const stage=$('#stage');
let secs=[], cur=0, editing=false;
function markDirty(kind){ $$('#stage>section[data-kind="'+kind+'"]').forEach(s=>{ const c=CTRL.get(s); if(c) c.dirty=true; }); }
function rebuild(){
  const keep=secs[cur];
  $$('#stage>section.brk').forEach(s=>{CTRL.delete(s);s.remove();});
  const R=running(), wall=$('#s-wall'), seq=[];
  R.blocks.forEach((b,bi)=>{ b.forEach(p=>seq.push(buildPerson(p))); if(bi<R.blocks.length-1) seq.push(buildBreak(R.blocks[bi+1],bi)); });
  R.walk.forEach(p=>seq.push(buildPerson(p)));
  P().filter(p=>!inRunning(p)).forEach(p=>seq.push(buildPerson(p)));
  seq.forEach(s=>{ stage.insertBefore(s,wall);
    if(s.dataset.kind==='person'){ inRunning(pById(s.dataset.pid))?s.removeAttribute('data-skip'):s.setAttribute('data-skip',''); } });
  markDirty('order'); markDirty('wall'); markDirty('brk');
  secs=$$('#stage>section');
  const k=secs.indexOf(keep); cur=k>=0?k:clamp(cur,0,secs.length-1);
  if(!secs[cur].classList.contains('on')) show(cur,true); else { ensure(secs[cur]); }
  hud(); renderPanel();
}

/* ---------- navigation ---------- */
let active=null;
function show(i,quiet){
  i=clamp(i,0,secs.length-1);
  const prev=active, sec=secs[i];
  if(prev&&prev!==sec){ prev.classList.remove('on','live'); const c=CTRL.get(prev); if(c&&c.leave) c.leave(); }
  cur=i; active=sec;
  sec.classList.add('on'); sec.classList.remove('live'); void sec.offsetWidth; sec.classList.add('live');
  const c=ensure(sec); if(c.enter) c.enter();
  try{history.replaceState(null,'','#'+(i+1));}catch(e){}
  if(!quiet) hud(true); renderPanel();
}
function next(){ for(let i=cur+1;i<secs.length;i++) if(!secs[i].hasAttribute('data-skip')){show(i);return;} }
function prev(){ for(let i=cur-1;i>=0;i--) if(!secs[i].hasAttribute('data-skip')){show(i);return;} }
function visibleIndex(){ let n=0,k=0; secs.forEach((s,i)=>{ if(!s.hasAttribute('data-skip')){n++; if(i<=cur) k=n;} }); return [k,n]; }

/* ---------- one loop, only the slide on screen ---------- */
let t0=performance.now(), last=t0, raf=0, tmr=0;
function schedule(){cancelAnimationFrame(raf);clearTimeout(tmr);raf=requestAnimationFrame(frame);tmr=setTimeout(()=>frame(performance.now()),40);}
function frame(now){
  cancelAnimationFrame(raf);clearTimeout(tmr);
  DT=Math.min(.06,Math.max(.004,(now-last)/1000)); last=now;
  const c=active&&CTRL.get(active);
  if(c&&c.tick){ try{ c.tick((now-t0)/1000); }catch(err){ console.error('[build-north]',active.id||active.dataset.pid,err); } }
  schedule();
}

/* ---------- fit to any screen ---------- */
function fit(){ const k=Math.min(innerWidth/1920,innerHeight/1080); stage.style.transform='translate(-50%,-50%) scale('+k+')'; }
addEventListener('resize',fit);

/* ---------- HUD, idle cursor ---------- */
const hudEl=$('#hud'); let hudT=0, idleT=0;
function hud(flash){
  const vi=visibleIndex();
  hudEl.innerHTML='<b>'+vi[0]+'</b> / '+vi[1]+(PAUSED?' · timer paused':'')+' · ← → · E edit · O slides · T timer · F full screen';
  if(flash){ hudEl.classList.add('show'); clearTimeout(hudT); hudT=setTimeout(()=>hudEl.classList.remove('show'),1600); }
}
addEventListener('mousemove',()=>{ document.body.classList.remove('idle'); clearTimeout(idleT); idleT=setTimeout(()=>{ if(!editing) document.body.classList.add('idle'); },2600); hud(true); },{passive:true});

/* ---------- edit mode ---------- */
const opbar=$('#opbar');
function opMsg(){
  const m=$('.msg',opbar); if(!m) return;
  m.innerHTML=storeOK
    ?'Editing. Click any outlined text to change it. Drop a photo on a portrait, a logo on a card, the Lugu mark on the rail. Changes save in this browser. <b>Save a copy</b> puts everything in one file for the venue laptop.'
    :'<span class="warn">This browser is out of storage, so the last change is not saved here.</span> Use Save a copy now: the file it writes holds every change and image.';
}
function setEditing(on){
  editing=on; document.body.classList.toggle('editing',on); document.body.classList.remove('idle');
  $$('.ed,[data-edit]').forEach(el=>{ el.contentEditable=on?ceMode:'false'; });
  if(!on&&document.activeElement&&document.activeElement.blur) document.activeElement.blur();
  opMsg();
}
$$('[data-edit]').forEach(el=>{
  const k=el.getAttribute('data-edit'); if(DATA.text[k]!=null) el.textContent=DATA.text[k];
  el.addEventListener('input',()=>{ DATA.text[k]=el.textContent.replace(/\s+/g,' ').trim(); persist(); });
  el.addEventListener('keydown',e=>{ if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();el.blur();} });
});

/* ---------- images in ---------- */
const picker=$('#filepick'); let pickFor=null;
function wireDrop(el,kind,getP){
  if(!el) return;
  el.addEventListener('dragover',e=>{ if(!editing) return; e.preventDefault(); el.classList.add('over'); });
  el.addEventListener('dragleave',()=>el.classList.remove('over'));
  el.addEventListener('drop',e=>{ if(!editing) return; e.preventDefault(); e.stopPropagation(); el.classList.remove('over');
    const f=e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files[0]; if(f) take(f,kind,getP()); });
  el.addEventListener('click',e=>{ if(!editing) return; e.stopPropagation(); pickFor={kind:kind,p:getP()}; picker.value=''; picker.click(); });
}
picker.addEventListener('change',()=>{ const f=picker.files&&picker.files[0]; if(f&&pickFor) take(f,pickFor.kind,pickFor.p); });
async function take(file,kind,p){
  if(!/^image\//.test(file.type)&&!/\.svg$/i.test(file.name)) return;
  try{
    if(kind==='headshot'){ p.headshot=await toHeadshot(file); persist(); paintPerson(personSec.get(p.id),p); }
    else if(kind==='logo'){ const key=logoKey(p); DATA.logos[key]=await toLogo(file); persist();
      P().forEach(q=>{ if(logoKey(q)===key&&personSec.get(q.id)) paintLogo(personSec.get(q.id),q); }); }
    else if(kind==='lugu'){ DATA.lugu=await toLogo(file); persist(); paintRails(); }
  }catch(err){ console.error('[build-north] image',err); }
}
/* a file dropped anywhere else must never replace the deck in the window */
addEventListener('dragover',e=>e.preventDefault());
addEventListener('drop',e=>e.preventDefault());

/* ---------- Save a copy: this file, with every edit and image inside ---------- */
function saveCopy(){
  const json=JSON.stringify(DATA).replace(/</g,'\\u003c');
  const out=PRISTINE.replace(/(<script type="application\/json" id="mn-data">)[\s\S]*?(<\/script>)/,(m,a,b)=>a+json+b);
  const blob=new Blob([out],{type:'text/html'}), a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download='build-north-deck.html'; document.body.appendChild(a); a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1500);
}

/* ---------- the slides panel ---------- */
const panel=$('#oppanel');
$('.help',panel).innerHTML=
  '<b>Keys</b>: ← → or Space to move · ↑ ↓ steer the object on screen · E edit · T pause the timer · F full screen · Ctrl or Cmd S saves a copy.<br><br>'+
  '<b>Photos and logos</b>: in edit mode, drop them on the card. Or put files beside this deck: <b>headshots/firstname-lastname.jpg</b> and <b>logos/organisation-name.svg</b> or .png. The Lugu mark: <b>logos/lugu.svg</b>.<br><br>'+
  '<b>No-show</b>: just move past the slide. To take someone out of the running order before you start, press Remove.';
function renderPanel(){
  if(!panel.classList.contains('open')) return;
  const L=$('.list',panel); L.innerHTML=''; let n=0;
  secs.forEach((s,i)=>{
    const skip=s.hasAttribute('data-skip'); if(!skip) n++;
    const p=s.dataset.kind==='person'?pById(s.dataset.pid):null;
    const lab=p?(p.name||'Open slot'):(s.dataset.label||s.id);
    const tag=p&&!inRunning(p)?(p.status==='empty'?' · open slot':' · standby'):'';
    const row=document.createElement('div'); row.className='row'+(i===cur?' cur':'')+(skip?' skip':'');
    row.innerHTML='<span class="n">'+(skip?'':n)+'</span><span class="l">'+esc(lab)+tag+'</span>'+
      (p&&p.confirm&&inRunning(p)?'<i class="f" title="'+esc(p.confirm)+'"></i>':'')+
      (p?'<button type="button">'+(inRunning(p)?'Remove':'Add')+'</button>':'');
    row.addEventListener('click',e=>{
      if(e.target.tagName==='BUTTON'){ e.stopPropagation(); toggleRunning(p,i); return; }
      show(i);
    });
    L.appendChild(row);
  });
  const c=$('.row.cur',L); if(c&&c.scrollIntoView) c.scrollIntoView({block:'nearest'});
}
function toggleRunning(p,i){
  if(inRunning(p)){ p._was=p.status; p.status='standby'; }
  else{
    if(!p.name){ show(i); setEditing(true); setTimeout(()=>{const el=$('.p-name',personSec.get(p.id)); if(el) el.focus();},60); return; }
    p.status=p._was==='live'?'live':'walkin'; if(p.status==='walkin') p.joined=Date.now();
  }
  persist(); rebuild();
}
function togglePanel(on){ panel.classList.toggle('open',on==null?!panel.classList.contains('open'):on); renderPanel(); }
$$('[data-act]').forEach(b=>b.addEventListener('click',e=>{ e.stopPropagation(); const a=b.getAttribute('data-act');
  if(a==='panel') togglePanel(); if(a==='close') togglePanel(false); if(a==='save') saveCopy(); if(a==='exit') setEditing(false); }));

/* ---------- keys and taps ---------- */
addEventListener('keydown',e=>{
  const t=e.target;
  if((e.metaKey||e.ctrlKey)&&(e.key==='s'||e.key==='S')){ e.preventDefault(); saveCopy(); return; }
  if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT|BUTTON)$/.test(t.tagName))) return;
  if(e.metaKey||e.ctrlKey||e.altKey) return;
  const k=e.key;
  if(k==='ArrowRight'||k==='PageDown'||k===' '){ e.preventDefault(); next(); }
  else if(k==='ArrowLeft'||k==='PageUp'){ e.preventDefault(); prev(); }
  else if(k==='ArrowUp'||k==='ArrowDown'){ const c=active&&CTRL.get(active); if(c&&c.api){ e.preventDefault(); c.api.cycle(k==='ArrowDown'?1:-1); } }
  else if(k==='Home'){ e.preventDefault(); show(secs.findIndex(s=>!s.hasAttribute('data-skip'))); }
  else if(k==='End'){ e.preventDefault(); for(let i=secs.length-1;i>=0;i--) if(!secs[i].hasAttribute('data-skip')){show(i);break;} }
  else if(k==='f'||k==='F'){ const d=document.documentElement; if(document.fullscreenElement) document.exitFullscreen(); else if(d.requestFullscreen) d.requestFullscreen(); }
  else if(k==='e'||k==='E'){ setEditing(!editing); }
  else if(k==='o'||k==='O'){ togglePanel(); }
  else if(k==='t'||k==='T'){ PAUSED=!PAUSED; hud(true); }
  else if(k==='Escape'){ if(panel.classList.contains('open')) togglePanel(false); else if(editing) setEditing(false); }
});
$('#viewport').addEventListener('pointerup',e=>{
  if(e.pointerType!=='touch'||editing) return;
  if(e.target.closest('a,button,input,[contenteditable="true"],[contenteditable="plaintext-only"]')) return;
  (e.clientX<innerWidth/3)?prev():next();
});

/* ---------- print: every slide resolves before the page is drawn ---------- */
function resolveAll(){ PRINT=true;
  secs.forEach(s=>{ const c=ensure(s); try{ if(c.enter) c.enter(); if(c.resolve) c.resolve(); for(let i=0;i<3;i++) if(c.tick) c.tick(9+i); }catch(err){} s.classList.add('live'); });
}
addEventListener('beforeprint',resolveAll);
addEventListener('afterprint',()=>{ PRINT=false; secs.forEach((s,i)=>{ if(i!==cur) s.classList.remove('live'); }); show(cur,true); });

/* ---------- boot ---------- */
$$('[data-mark]').forEach(el=>{ const h=+el.getAttribute('data-mark')||46, red=!!el.closest('.s-red');
  el.innerHTML=mark(h,red?'#ffffff':C.redB,red?'rgba(255,255,255,.46)':'#e9edf1'); });
$$('#stage>section').forEach(addRail);
if(!DATA.lugu) probe(['logos/lugu.svg','logos/lugu.png'],src=>{ luguFound=src; paintRails(); });
secs=$$('#stage>section');
rebuild();
fit();
const h=parseInt((location.hash||'').slice(1),10);
show(h>0&&h<=secs.length?h-1:0,true);
if(document.fonts&&document.fonts.ready) document.fonts.ready.then(()=>{ personSec.forEach(s=>fitPerson(s)); const c=active&&CTRL.get(active); if(c&&c.enter&&active.dataset.kind==='wall') c.enter(); });
/* the loop always runs: reduced motion holds every object still, but the speaker timer still has to count */
if(RM){ resolveAll(); PRINT=false; show(cur,true); }
schedule();
window.BuildNorth={data:()=>DATA,show:show,rebuild:rebuild,saveCopy:saveCopy,take:take,edit:setEditing,panel:togglePanel};
})();
