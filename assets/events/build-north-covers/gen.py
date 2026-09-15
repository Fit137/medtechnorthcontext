import pathlib, subprocess, os, struct

LEAF = "m 0,-60 -11.9,22.2 c -1.35,2.41 -2.59,1.71 -3.75,1.11 L -24,-41.3 l 6.25,33.2 c 1.31,6.06 -2.9,6.06 -4.97,3.45 l -14.6,-16.3 -2.37,8.3 c -0.27,1.09 -1.48,2.24 -3.3,1.93 l -18.5,-3.89 4.86,17.7 c 1.04,3.92 1.85,5.54 -1.04,6.57 l -6.56,3.08 31.7,25.7 c 3.15,2.44 3.71,4.06 2.57,7.55 l -2.77,9.11 30,-3.46 c 0.93,0 1.55,0.53 1.55,1.61 l -1.87,34.1 h 5.61 l -1.08,-34 c -0.02,-1.14 0.51,-1.7 1.44,-1.7 l 30,3.46 -2.77,-9.11 c -1.14,-3.49 -0.58,-5.11 2.57,-7.55 l 31.7,-25.7 -6.56,-3.08 c -2.89,-1.03 -2.08,-2.65 -1.04,-6.57 l 4.86,-17.7 -18.5,3.89 c -1.82,0.31 -3.03,-0.84 -3.3,-1.93 l -2.37,-8.3 -14.6,16.3 c -2.07,2.61 -6.28,2.61 -4.97,-3.45 l 6.25,-33.2 -8.34,4.79 c -1.16,0.6 -2.4,1.3 -3.75,-1.11 z"

TPL = """<!doctype html><html><head><meta charset="utf-8"><style>
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{background:{bg}}}
.canvas{{width:{W}px;height:{H}px;position:relative;overflow:hidden;background:{bg};
font-family:"Bitstream Charter",Charter,Georgia,"Liberation Serif",serif;color:{ink}}}
.grain{{position:absolute;inset:0;opacity:{grain};pointer-events:none;
background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>")}}
.bar{{position:absolute;top:0;bottom:0;width:{bar}px;background:#c41230}}
.bar.l{{left:0}} .bar.r{{right:0}}
.stage{{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;flex-direction:column;
align-items:center;justify-content:center}}
.leaf{{width:{leafw}px;height:{leafw}px;margin-bottom:{leafgap}px}}
h1{{font-size:{title}px;line-height:.9;letter-spacing:.004em;font-weight:400;white-space:nowrap}}
.rule{{width:{rule}px;height:3px;background:#c41230;margin:{rm1}px 0 {rm2}px}}
.meta{{font-size:{meta}px;letter-spacing:.07em;text-transform:uppercase;color:{metac};text-align:center}}
.foot{{position:absolute;bottom:{footb}px;left:0;right:0;text-align:center;
font-size:{foots}px;letter-spacing:.24em;text-transform:uppercase;color:{footc}}}
</style></head><body>
<div class="canvas">
<div class="bar l"></div><div class="bar r"></div>
<div class="stage">
<svg class="leaf" viewBox="-70 -66 140 132" fill="#c41230"><path d="{leaf}"/></svg>
<h1>BUILD NORTH</h1><div class="rule"></div>
<div class="meta">Wednesday 30 September, Mississauga</div>
</div>
<div class="foot">MedTech North &nbsp;&middot;&nbsp; Session #3</div>
<div class="grain"></div>
</div></body></html>"""

light = dict(bg="#F2ECE1", ink="#16191d", metac="#3d4249", footc="#8f959b", grain=".055")
dark  = dict(bg="#16191d", ink="#F2ECE1", metac="#cac4b9", footc="#787e85", grain=".05")
wide  = dict(W=1600,H=800,bar=112,leafw=86,leafgap=22,title=162,rule=250,rm1=34,rm2=26,meta=32,footb=46,foots=19)

jobs = {"cover-light": {**wide, **light}, "cover-dark": {**wide, **dark}}
chrome = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
for name, v in jobs.items():
    pathlib.Path(f"{name}.html").write_text(TPL.format(leaf=LEAF, **v))
    subprocess.run([chrome,"--headless","--disable-gpu","--no-sandbox","--hide-scrollbars",
        "--force-device-scale-factor=2", f"--window-size={v['W']},{v['H']+400}",
        f"--screenshot={name}-raw.png", f"file://{os.getcwd()}/{name}.html"], capture_output=True)
    from PIL import Image
    im = Image.open(f"{name}-raw.png").convert("RGB")
    im.crop((0,0,v['W']*2,v['H']*2)).save(f"{name}.png")
    os.remove(f"{name}-raw.png")
    w,h = Image.open(f"{name}.png").size
    print(f"{name}: {w}x{h}  ratio {w/h:.3f}")
