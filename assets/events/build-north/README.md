# Build North, 30 September 2026

## The master slide: `build-north-master.html`

This replaces the per-speaker deck. One slide: every speaker's name on the left, alphabetical by first name. Click a name, or use the arrow keys, and that person stands up on the right with what they registered: job title, company, ecosystem contribution. Esc returns to the idle view with the three questions. A five-mark timer starts with each selection; T pauses it.

Only those three registration fields are shown. Email, phone, payment, coupon and referral data are never on the page. Three fields stay held back until confirmed: Reham's title and workplace, Esraa's registered organisation (her regulator), and Diaa's University of Toronto listing. Press E to type them in once confirmed.

E is edit mode: change any field, add a walk-in (Add a name), remove a no-show, drop a photo on the portrait or a logo on the strip under it. Ctrl or Cmd S saves one file with everything inside. Rebuild from source with `python3 src/build_master.py build-north-master.html`. When a new Luma export arrives, refresh the names first with `python3 src/make_master_data.py <export.csv> --skip "Name"`, listing anyone who has said they are not coming. Photos already on the slide carry over.

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
