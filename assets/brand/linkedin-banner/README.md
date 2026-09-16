# LinkedIn profile banner slideshow

Five slides for the rotating profile banner, in the MedTech North system. Evergreen, so no dates, no prices and no event.

## What LinkedIn does with these

LinkedIn Premium rotates **up to five banner images, one every three seconds**, on personal profiles. Each slide is **1584 x 396 (4:1)**. Files here are 3168 x 792, which is 2x.

Three seconds is the entire read, so each slide carries one idea and nothing is set small.

## Two constraints that shaped the layout

**The profile photo sits on the lower left** and covers roughly the first 180px across and the bottom 80px. All type is horizontally centred and lifted clear of that corner. The crimson bar on the left is the only thing the avatar touches, and it is decorative.

**Mobile crops the sides.** Type stays in the middle. The edge bars are the only elements allowed to fall off.

## The five slides, in order

| File | Carries |
|---|---|
| `slide-1-wordmark` | BUILD NORTH with the leaf. The identity beat |
| `slide-2-chose` | They could have built anywhere. They chose here |
| `slide-3-who` | Founders, capital and talent that stayed in Canada |
| `slide-4-patient` | A shorter road from a Canadian idea to a Canadian patient |
| `slide-5-mark` | The seam mark and MEDTECH NORTH. The brand close |

Order matters less than it looks, because a visitor lands mid-rotation. Every slide is written to stand on its own.

**Dark is the default.** A dark banner gives the profile photo something to sit against. The light set is there if the rest of the profile runs pale.

## Regenerating

```
python3 gen.py
```

Needs headless Chromium and Pillow. All ten files come from one run. Copy lives in the `slides()` function, geometry in the CSS block at the top. Type is Bitstream Charter with Georgia as the fallback. Chromium's viewport runs short of the window, so each page renders into a taller viewport and gets cropped back to exact dimensions.

Source for the format: [LinkedIn adds revolving slideshow option for profile banner images](https://www.socialmediatoday.com/news/linkedin-adds-revolving-slideshow-option-for-profile-banner-images/734691/)
