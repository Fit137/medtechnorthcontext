import base64, json, sys, pathlib
SP=pathlib.Path(__file__).parent
out=pathlib.Path(sys.argv[1])
def font(fam,f,rng):
    b=base64.b64encode((SP/'fonts'/f).read_bytes()).decode()
    return "@font-face{font-family:'%s';font-style:normal;font-weight:300 700;font-display:block;src:url(data:font/woff2;base64,%s) format('woff2');unicode-range:%s}\n"%(fam,b,rng)
LAT="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
EXT="U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"
fonts=("/* DM Sans (display) and Inter (UI), embedded so the deck runs with no network */\n"+
  font('DM Sans','dmsans-latinext.woff2',EXT)+font('DM Sans','dmsans-latin.woff2',LAT)+
  font('Inter','inter-latinext.woff2',EXT)+font('Inter','inter-latin.woff2',LAT))
data=json.loads((SP/'data.json').read_text())
dj=json.dumps(data,ensure_ascii=False,indent=1).replace('<','\\u003c')
html=('<!DOCTYPE html>\n<html lang="en"><head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
 '<title>Build North · MedTech North</title>\n'
 '<style>\n'+fonts+'</style>\n<style>\n'+(SP/'deck.css').read_text()+'</style>\n</head>\n<body>\n'+
 (SP/'deck.body.html').read_text()+
 '\n<script type="application/json" id="mn-data">'+dj+'</script>\n'
 '<script>\n'+(SP/'deck.js').read_text()+'</script>\n</body></html>\n')
out.write_text(html)
print(out, len(html)//1024, 'KB')
