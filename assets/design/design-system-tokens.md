# Design system, as actually built

> Extracted 8 August 2026 from the bundled partner deck HTML exported out of Claude Design. This is the observed system, not an aspirational one. `docs/07-brand-and-voice.md` pins only `--mn-red` and `--mn-ink` and says verify the rest in `globals.css`; this file fills that gap from the deck.

---

## How Claude Design actually enforces the system

This is the important part, and it explains why repeating "use our design system" in a prompt changes nothing.

**The deck's slides do not define type. They consume it:**

```
font: 500 19px/1 var(--font-ui)
font: 400 17px/1.2 var(--font-ui)
font: 300 16px/1 var(--font-ui)
... and var(--font-display) for headlines
```

`--font-display` and `--font-ui` are **not defined anywhere in the slide code.** The Claude Design *project* supplies them. The bundle also carries **16 embedded woff2 font files**, which are project assets rather than anything a prompt could carry.

The source additionally contains the marker `THIS PROJECT USES DESIGN COMPONENTS (.dc.html)` and a `@ds-adherence-ignore` directive on the one scaffold file allowed to use raw hex and px.

**Three consequences:**

1. **A design system is a property of the project, not of a prompt.** Asking a fresh project to "use our design system" is a no-op, because there is no system in that project to adhere to
2. **The adherence check is real** and flags raw hex and px, which is why `@ds-adherence-ignore` exists as an escape hatch. But it can only enforce a system that is present
3. **The fonts must be present as project assets** or type silently falls back, which is the single most visible way an asset stops looking like the brand

## Colour, as used in the deck

| Role | Hex | Where it appears |
|---|---|---|
| **Red, the ask** | `#c41230` | Actions, emphasis. Matches `docs/07` |
| Red, bright variant | `#ef3340` | Sparingly, one usage |
| **Ink, the argument** | `#16191d` | Body, slide backgrounds. Matches `docs/07` |
| Ink, deeper | `#0b0f14`, `#04060a` | Dark stages |
| Ink family | `#151a1f` · `#20262c` · `#2b323a` · `#49515c` · `#4d545b` · `#6b7178` · `#8a9299` | Structure, secondary text, receding elements |
| Light neutrals | `#b9bfc5` · `#c9ced3` · `#d8dcdf` · `#e8ecef` · `#e9edf1` | Panels, rules, the inherited state |
| White | `#ffffff` | On dark stages |

**The system is cool.** Ink and gray with red. Slide backgrounds observed are `#16191d` and `#04060a`.

> **Correction.** Earlier prompts in `assets/events/` and `prompts/` specified a warm cream field at `#F4EFE6`. **That colour was invented and is not in this system.** Any asset built against it will look like a different brand, which is exactly what happened to the first Luma cover. Cream is struck.

## Type

| Token | Use |
|---|---|
| `--font-display` | Headlines |
| `--font-ui` | Everything else |

Observed usage: weights 300, 400 and 500. Sizes 16 to 19px at deck scale. Line heights 1 to 1.2. Letter-spacing `.04em` to `.06em` on small caps-ish UI labels.

**Never name a typeface in a prompt.** Reference the token. The project resolves it and the fonts travel with the project.

## The rule for getting a new asset on-system

In order of reliability.

1. **Build it in the same Claude Design project as the partner deck.** Same tokens, same fonts, same components, no instruction needed. A new project starts from Claude Design's own defaults
2. **If it has to be a new project, port the system before asking for anything.** Token definitions and the font assets first, asset second. Asking first and correcting after does not converge
3. **Anchor to a named existing surface.** "Match slide 1 of the partner deck" outperforms any description. Adjectives do not transfer, references do

**And the structural caveat: an event cover is not a deck slide.** Even inside the right project, a one-off surface with no sibling will drift, because nothing anchors it. Name the surface it should resemble.
