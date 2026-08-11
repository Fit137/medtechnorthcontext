# Prompt: Luma cover for The MedTech North Table

> **Read this before pasting.** The previous version told Claude Design to use its own design system, which is why the cover came back in warm cream with an unrelated serif. That was wrong twice over: a design system cannot be instructed in by prompt, and the cream palette was invented rather than drawn from the real system. See `assets/design/design-system-tokens.md`.
>
> **Run this inside the same Claude Design project as the partner deck.** That project holds `--font-display`, `--font-ui` and the 16 embedded font files. A new project starts from Claude Design's defaults and no amount of instruction will change that, because there is no system present for it to adhere to.
>
> The token block below is a fallback for the case where a new project is unavoidable. If you are in the deck project, delete it: the project already knows.

---

Design a Luma event cover for **The MedTech North Table**, a small monthly dinner in Mississauga for people who work in health tech.

**Match the MedTech North partner deck in this project.** Specifically, treat slide 1 as the reference surface: same palette, same type tokens, same restraint. If anything here conflicts with the project's design system, the design system wins.

**Format:** 1080 × 1080.

**Type:** `var(--font-display)` for the title, `var(--font-ui)` for everything else. Do not name or substitute a typeface.

**Colour:** ink `#16191d` and the gray family through `#8a9299`, red `#c41230` for one emphasis only. The system is cool, not warm. No cream, no beige, no sepia.

**Subject:** one long dining table, simply set and completely empty, with chairs along both sides. Drawn, in the deck's own geometric register rather than an illustrative one.

**Copy, typeset exactly as written:**

- The MedTech North Table
- Table #3
- A small dinner for people who work in health tech
- Mississauga, Wednesday 26 August

**Temperature:** a warm invitation from a person, not an announcement from an organisation. A dinner, not a conference. Warmth comes from the writing and the restraint, never from the palette.

**Three constraints that are not style choices and cannot be relaxed:**

- **No people, faces or hands.** An image implying attendance at a past event is a claim that cannot be evidenced
- **No camera, tripod, light or recording equipment**
- **No pens, cards, notebooks, laptops or phones.** Nothing is asked of anyone at this dinner, and an object implying a task contradicts that

---

## Fallback token block, only if you cannot work in the deck project

Paste this above the prompt, and expect it to get you close rather than exact, because the fonts will not be present.

```
Design system, non-negotiable:

Colour, and nothing outside this set:
  red     #c41230   actions and one emphasis per surface, never decoration
  bright  #ef3340   rare
  ink     #16191d   body and stages
  deeper  #0b0f14   #04060a
  family  #151a1f #20262c #2b323a #49515c #4d545b #6b7178 #8a9299
  light   #b9bfc5 #c9ced3 #d8dcdf #e8ecef #e9edf1
  white   #ffffff

Type: two roles only. A display face for headlines, a UI face for
everything else. Weights 300, 400, 500. Line height 1 to 1.2.
Letter-spacing .04em to .06em on small labels.

Craft, absolute: no emoji, no icon fonts, no stock icon libraries, no
stock photography, no blur, no gradients, no drop shadows, nothing at a
default size. All illustration drawn as SVG.
```
