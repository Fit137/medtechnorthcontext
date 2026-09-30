# Build North, 30 September 2026

## The master slide and speaker slides: `build-north-master.html`

### The opening

The file opens on six scenes that sit behind the welcome speech. Each one carries a single beat of it; the speech itself stays spoken, so the screen shows only the line the room should hold on to.

| # | Scene | The beat in the speech | The object |
|---|---|---|---|
| 1 | Welcome | Thank you for coming. Tonight we celebrate you. | Canada as dots, turning, the beacon lit |
| 2 | Among us tonight | Builders, expertise, healthcare, academia | Four equal panels in a shallow arc, one group marker each, none ranked |
| 3 | Every decision counts | One of these times, where every decision counts and compounds | One up-triangle becomes two, four, eight: the mark's growth sign, drawn out generation by generation |
| 4 | Your decision | Build, join a startup, work in Canadian healthcare, invest, start a career here | Five slabs stepping forward, each with its marker; the leaf for choosing Canada |
| 5 | From the patient to the nation | Jobs, investment, national GDP, the sector, the nation | Rings on the floor around the patient, a ripple running out, each reach named where its ring turns away |
| 6 | Thank you | On behalf of every Canadian, thank you | The country lights up outward from one point |

After the last scene comes the names slide. Right, Space, Page Down or Enter moves forward; Left, Page Up or Backspace moves back; the up-triangles at the bottom right jump to any scene. From the names slide, Page Up or **Opening** at the bottom left returns. Addresses: `#open` to `#open-6`, `#speakers`, then each speaker's id.

**The system.** One grid, one type scale, one object per scene. MedTech North's mark and wordmark sit top left on every scene, the date top right, the way forward bottom left, progress as up-triangles bottom right beside the leaf. Type runs display 176, headlines 84 to 132, lead 40, panel text 30, eyebrows 15. White carries the words, mist carries what the room gains (the reaches in scene 5), red is kept for what can be clicked and the leaf. The four group markers are told apart by shape, never colour. Objects enter once and hold; only the ripple and the compounding pulse keep moving, because there the motion is the point. No figures appear anywhere in the opening. Press E to reword any line.

### The names and speaker slides

One file, two surfaces after the opening. The names slide lists every speaker, alphabetical by first name. Click a name and that speaker's own slide opens: portrait card with photo and company, job title, company, ecosystem contribution, the five-mark timer, and a value map. Every speaker slide has **All speakers** at the top left to return to the names; Esc or the browser's back button does the same.

On a speaker slide, Right, Down, Space or Page Down moves to the next speaker and Left, Up or Page Up to the previous one. After the last speaker it returns to the names. "Next" at the bottom left shows who is up and is clickable. The timer restarts with each speaker slide; T pauses it. Each speaker slide has its own address (`build-north-master.html#rozhen-asrani`), so a link or a reload opens that speaker directly.

**The value map.** Below the seam, each speaker's company sits at the hub, with what it does in one line, and three lanes run out from it: what it brings to the health system, to healthcare professionals, and to health tech. The slabs stand in 3D, follow the pointer, and a pulse runs from the hub along each lane. The lines come from the three registration answers plus each company's public description, and live in `src/value-lines.json` with their sources. They carry no figures and no outcome claims. Five rest on thin public information and say so in edit mode: EESI (Amr), Sanaré Tech (Sarim), the stealth venture beside ZKSCool (Nancy), and Eman's and Ganiat's lines, which come from their titles alone. Press E on a slide to reword any line.

Only those three registration fields are shown. Email, phone, payment, coupon and referral data are never on the page. Three fields stay held back until confirmed: Reham's title and workplace, Esraa's registered organisation (her regulator), and Diaa's University of Toronto listing. Open their slide and press E to type them in once confirmed.

E is edit mode: on a speaker slide, change any outlined field or drop a photo on the portrait or a logo on the strip under it; Remove this speaker takes a no-show off. Add a name adds a walk-in and opens their slide. Ctrl or Cmd S saves one file with everything inside. Rebuild from source with `python3 src/build_master.py build-north-master.html`. When a new Luma export arrives, refresh the names first with `python3 src/make_master_data.py <export.csv> --skip "Name"`, listing anyone who has said they are not coming. Photos already on the slide carry over.

## The earlier per-speaker deck: `build-north-deck.html`

`build-north-deck.html` is the whole deck in one file. Fonts are embedded, nothing loads from the network, so it runs from a laptop on the venue projector with no wifi. Open it in Chrome and press **F** for full screen.

Built to the partner deck's standard: same tokens, DM Sans and Inter, red bookends around an ink programme, one CSS 3D object per slide running on its own, and the same geometry for the mark, the four group pictograms, the composed table and Canada as dots.

## Running order

26 slides for 14 speakers: holding slide, Build North, why here, why now, how tonight runs, the rules, running order, then the speakers alphabetically by first name in blocks of five, five and four with a break between blocks, then the word wall, the ask, and the word wall again to hold for the rest of the evening.

Seven standby slides (the July room) and four open slots sit in the file, skipped until you add them. A walk-in joins at the end under "Joined tonight", so nothing already shown moves.

## Keys

| Key | Does |
|---|---|
| Right, Space, Page Down | Next slide |
| Left, Page Up | Previous slide |
| Up, Down | Steer the object on screen |
| F | Full screen |
| T | Pause or resume the speaker timer |
| O | Slides panel: jump anywhere, add a standby or walk-in, remove a no-show |
| E | Edit mode |
| Ctrl or Cmd S | Save a copy |

The timer starts when a speaker's slide comes up: one mark per minute, the fifth fills red. The cursor hides after a few seconds still.

## On the night

**The word.** Click the line beside THE WORD on a speaker's slide, type, press Enter. It appears on the word wall automatically. This works without edit mode.

**Photos, logos and the Lugu mark.** Press E, then drop an image on the portrait, on the strip under it, or on "Lugu" in the bottom rail. You can also click them to choose a file. Photos are cropped square and shown in full colour. Logos render as a white mark, and a white background on a JPG is lifted out automatically.

Or put files beside the deck before you open it:

```
headshots/firstname-lastname.jpg     e.g. headshots/amr-kayid.jpg
logos/organisation-name.svg or .png  e.g. logos/dynacare.svg, logos/dmz.png
logos/lugu.svg
```

**Save a copy.** Edits save in the browser you made them in. Before moving the deck to another laptop, press Save a copy: the downloaded file holds every edit, word and image.

**Checks before the room.** In edit mode, each speaker slide with an open question shows it at the bottom left. Three are blocking and are deliberately left conservative until confirmed:

- **Reham Saied El Nahrawy**: title and organisation left off. Registered as Pharmacist, logged in July as a pharmacy assistant, and Pharmacist is a protected title.
- **Esraa Hassan**: organisation left off. She listed the BC regulator; confirm whether she works there or is registered with it.
- **Diaa Abdallah**: only Lifescience Dynamics shows. He listed University of Toronto from a humber.ca address.
- **Megan Kane** now holds the Rellia Health seat and sorts into block two.

Speaker contribution lines for Megan Kane, Catherine Demers, Rozhen Asrani, Saher Ghattas, Zahan Cooper and Amr Kayid were rewritten from their own public profiles and their companies' public descriptions. Each is editable in edit mode.

Nothing on any slide claims a track record, and every figure traces to `data/verified-stats.md`.

## Editing the source

`src/` holds the parts: `deck.css`, `deck.body.html`, `deck.js`, `data.json` (the people) and the fonts. Rebuild with:

```
python3 src/build.py build-north-deck.html
```
