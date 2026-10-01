import base64, json, sys, time, pathlib
SP=pathlib.Path(__file__).parent
out=pathlib.Path(sys.argv[1])
def font(fam,f,rng):
    b=base64.b64encode((SP/'fonts'/f).read_bytes()).decode()
    return "@font-face{font-family:'%s';font-style:normal;font-weight:300 700;font-display:block;src:url(data:font/woff2;base64,%s) format('woff2');unicode-range:%s}\n"%(fam,b,rng)
LAT="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
EXT="U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"
fonts=("/* DM Sans (display) and Inter (UI), embedded so the slide runs with no network */\n"+
  font('DM Sans','dmsans-latinext.woff2',EXT)+font('DM Sans','dmsans-latin.woff2',LAT)+
  font('Inter','inter-latinext.woff2',EXT)+font('Inter','inter-latin.woff2',LAT))
data=json.loads((SP/'master-data.json').read_text())
# what each company does and what it brings, researched per speaker; sources stay in value-lines.json
V=json.loads((SP/'value-lines.json').read_text())
for p in data['people']:
    v=V.get(p['id'])
    if v:
        for k in ('whatLabel','what','system','clinicians','healthtech','check'): p[k]=v.get(k,'')
# stamp the build time so this file's data outranks edits saved from an older build in the same browser
data['rev']=int(time.time()*1000)
dj=json.dumps(data,ensure_ascii=False).replace('<','\\u003c')
html=('<!DOCTYPE html>\n<html lang="en"><head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
 '<title>Build North · MedTech North</title>\n<style>\n'+fonts+'</style>\n<style>\n'+(SP/'master.css').read_text()+'</style>\n</head>\n<body>\n'+
 (SP/'master.body.html').read_text()+'\n<script type="application/json" id="mn-data">'+dj+'</script>\n'
 '<script>\n'+(SP/'master.js').read_text()+'</script>\n</body></html>\n')
out.write_text(html); print(out, len(html)//1024, 'KB')
