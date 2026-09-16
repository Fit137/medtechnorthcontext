"""MedTech North LinkedIn profile banner slideshow.

LinkedIn Premium rotates up to FIVE banner images, one every three seconds.
Each slide is 1584 x 396 (4:1). Rendered here at 2x.

Two constraints drive the layout:
  1. The profile photo overlaps the lower left of the banner on desktop, so
     nothing that matters goes there.
  2. Mobile crops the sides, so type stays horizontally centred and only the
     crimson edge bars are allowed to fall off.

Three seconds is the whole read, so one idea per slide and nothing small.
"""
import pathlib, subprocess, os
from PIL import Image

CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
W, H = 1584, 396

LEAF = ("m 0,-60 -11.9,22.2 c -1.35,2.41 -2.59,1.71 -3.75,1.11 L -24,-41.3 l 6.25,33.2 c 1.31,6.06 -2.9,6.06 "
        "-4.97,3.45 l -14.6,-16.3 -2.37,8.3 c -0.27,1.09 -1.48,2.24 -3.3,1.93 l -18.5,-3.89 4.86,17.7 c 1.04,3.92 "
        "1.85,5.54 -1.04,6.57 l -6.56,3.08 31.7,25.7 c 3.15,2.44 3.71,4.06 2.57,7.55 l -2.77,9.11 30,-3.46 c 0.93,0 "
        "1.55,0.53 1.55,1.61 l -1.87,34.1 h 5.61 l -1.08,-34 c -0.02,-1.14 0.51,-1.7 1.44,-1.7 l 30,3.46 -2.77,-9.11 "
        "c -1.14,-3.49 -0.58,-5.11 2.57,-7.55 l 31.7,-25.7 -6.56,-3.08 c -2.89,-1.03 -2.08,-2.65 -1.04,-6.57 l "
        "4.86,-17.7 -18.5,3.89 c -1.82,0.31 -3.03,-0.84 -3.3,-1.93 l -2.37,-8.3 -14.6,16.3 c -2.07,2.61 -6.28,2.61 "
        "-4.97,-3.45 l 6.25,-33.2 -8.34,4.79 c -1.16,0.6 -2.4,1.3 -3.75,-1.11 z")

SEAM = """<svg class="seam" viewBox="0 0 200 86">
  <polygon points="100,4 128,38 72,38" fill="#c41230"/>
  <rect x="0" y="41" width="200" height="3" fill="{ink}"/>
  <polygon points="100,81 72,47 128,47" fill="{ink}"/></svg>"""

PAGE = """<!doctype html><html><head><meta charset="utf-8"><style>
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{background:{bg}}}
.canvas{{width:{W}px;height:{H}px;position:relative;overflow:hidden;background:{bg};
  font-family:"Bitstream Charter",Charter,Georgia,"Liberation Serif",serif;color:{ink}}}
.grain{{position:absolute;inset:0;opacity:{grain};pointer-events:none;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/></filter><rect width='160' height='160' filter='url(%23n)'/></svg>")}}
.bar{{position:absolute;top:0;bottom:0;width:54px;background:#c41230}}
.bar.l{{left:0}} .bar.r{{right:0}}
.stage{{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
  gap:{gap}px;padding-bottom:34px}}
.word{{font-size:96px;line-height:1;letter-spacing:.012em;white-space:nowrap}}
.line{{font-size:{fs}px;line-height:1.16;text-align:center;max-width:1080px}}
.mark{{font-size:68px;line-height:1;letter-spacing:.07em;white-space:nowrap}}
.leaf{{width:104px;height:104px;flex:none}}
.seam{{width:164px;height:70px;flex:none}}
.col{{display:flex;flex-direction:column;align-items:center;gap:22px}}
</style></head><body><div class="canvas">
<div class="bar l"></div><div class="bar r"></div>
<div class="stage">{body}</div>
<div class="grain"></div></div></body></html>"""

def render(name, body, theme, fs=60, gap=40):
    html = PAGE.format(W=W, H=H, body=body, fs=fs, gap=gap, **theme)
    pathlib.Path(f"{name}.html").write_text(html)
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
                    "--force-device-scale-factor=2", f"--window-size={W},{H+400}",
                    f"--screenshot={name}-raw.png", f"file://{os.getcwd()}/{name}.html"],
                   capture_output=True)
    Image.open(f"{name}-raw.png").convert("RGB").crop((0, 0, W*2, H*2)).save(f"{name}.png")
    os.remove(f"{name}-raw.png")
    print(f"{name}.png  {Image.open(f'{name}.png').size}")

LEAF_SVG = f'<svg class="leaf" viewBox="-70 -66 140 132" fill="#c41230"><path d="{LEAF}"/></svg>'

def slides(theme, suffix):
    seam = SEAM.format(ink=theme["ink"])
    render(f"slide-1-wordmark{suffix}", f'{LEAF_SVG}<div class="word">BUILD NORTH</div>', theme)
    render(f"slide-2-chose{suffix}",
           '<div class="line">They could have built anywhere.<br>They chose here.</div>', theme, fs=62)
    render(f"slide-3-who{suffix}",
           '<div class="line">Founders, capital and talent<br>that stayed in Canada.</div>', theme, fs=62)
    render(f"slide-4-patient{suffix}",
           '<div class="line">A shorter road from a Canadian idea<br>to a Canadian patient.</div>', theme, fs=58)
    render(f"slide-5-mark{suffix}",
           f'<div class="col">{seam}<div class="mark">MEDTECH NORTH</div></div>', theme)

slides(dict(bg="#16191d", ink="#F2ECE1", grain=".05"), "-dark")
slides(dict(bg="#F2ECE1", ink="#16191d", grain=".055"), "-light")
