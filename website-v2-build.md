# Claude Code — Starter Prompt

Paste everything below the line into Claude Code, with `01-sitemap-and-content.md` and `02-design-brief.md` in the repo or attached.

---

## Read this section before doing anything

**The site is live and has visitors.** Nothing you do in this task may reach production without my explicit approval at a review gate.

Three rules, and breaking any of them means the work gets reverted regardless of quality:

1. **Never commit or push to `main`.** All work happens on a feature branch.
2. **Never modify an existing production route** until Stage 3 is explicitly approved by me. The homepage at `/` stays untouched.
3. **Never open a pull request** without being asked. Report, wait, then proceed.

If you are ever uncertain whether an action affects production, stop and ask. An unnecessary question costs a minute. A broken live site costs the launch.

## Environment setup, do this first

```bash
git checkout main && git pull
git checkout -b feat/multi-icp-rebuild
```

Confirm the branch before writing anything. State the branch name back to me.

**Vercel behaviour to be aware of:** this repo auto-deploys `main`. Feature branches produce preview deployments at their own URLs, which is exactly what we want. Every stage below is reviewed on a preview URL before anything merges.

## What you are building

A rebuild of the marketing site as a homepage plus four audience routes. Two documents govern it.

**`01-sitemap-and-content.md`** is the content. Every headline and passage is final and typeset as written. Do not rewrite, shorten, extend, or add copy. Where it says a visual carries the meaning, build the visual instead of writing a sentence.

**`02-design-brief.md`** is the design specification. It is authoritative on the system, the surfaces, motion, states, responsive behaviour, the performance budget and the honesty constraints.

## Stage 0 — Excavate and report, before writing code

Read Part 6 of the design brief. It lists what I could not verify because I do not have repo access.

Read the codebase and report back on each item:

- The actual values of `--mn-red`, `--mn-ink`, `--mn-mist` and any other tokens in `globals.css`
- The type faces and the modular scale
- The spacing scale
- Whether `member-card-3d.css` and its pointer-parallax hook exist, and quote the actual CSS and JS
- Whether the four group markers exist as a component library, and whether the "never colour alone" rule is stated in a comment
- The existing card, header and footer components
- Anything in the repo that contradicts the brief

**Do not write a line of implementation code until I have seen this report.** If a token or a construction differs from what the brief expects, we resolve it before building, not after.

There is one contradiction already flagged in Part 6, about Three.js versus CSS 3D for the table. Include your recommendation.

## Build stages, with a review gate after each

### Stage 1 — The four ICP routes

`/clinicians`, `/builders`, `/policy`, `/students`.

These are new routes. They touch nothing in production, which is why they come first. Use the shared template and the per-route hero device table in Part 2.

**Gate:** preview URL, and I review all four before Stage 2.

### Stage 2 — The signature moment

H4, the composing table, as a standalone component. Sorting sequence, legend interaction, all three input paths, both colour modes, reduced-motion resolved state.

Build it in isolation with a test page at `/preview/table` so it can be reviewed on its own.

**Gate:** preview URL. This is the most important component on the site and it gets its own review.

### Stage 3 — The new homepage, at `/preview`

Build the full homepage, H1 through H8, at the route `/preview`. **The existing `/` route stays exactly as it is.**

**Gate:** preview URL, side by side with the live homepage. The swap is a separate decision I make after seeing both.

### Stage 4 — Toggle, `/rooms`, responsive

Whole-site light and dark toggle replacing the current alternating sections. The `/rooms` route. Full responsive pass across all routes.

**Gate:** preview URL, tested at 1440, 900 and 375.

### The swap, only when I say so

When and only when I approve, we plan the cutover as its own task. Do not fold it into Stage 4.

## Guardrails throughout

**Scope.** Change nothing outside what a stage requires. No refactors, no file reorganisation, no dependency upgrades, no formatting passes on untouched files. If you notice something worth fixing, report it and leave it alone.

**Dependencies.** One new dependency permitted at most, only if the signature moment genuinely cannot be built without it, and only after asking. CSS 3D plus `requestAnimationFrame` should cover everything specified.

**The directory and admin.** Out of scope entirely. Do not touch `/directory`, `/admin`, the apply flow, or any API route. If a shared component needs changing to serve the new pages, report it before touching it, because those components are load-bearing in production.

**Migrations.** None. This task adds no schema change. If you believe one is needed, stop and ask.

**Commits.** Small, one concern each, clear messages. `git add`, `git commit -F`, `git push` as separate commands.

## Things that get work rebuilt

- Any sponsorship reference anywhere: sponsor, partner tier, anchor, category-exclusive, exhibitor, underwriter, booth, media rights, lead access. In copy, components, nav, footer or metadata.
- Any claim of a track record. No member counts, attendee totals, testimonials, logos, past-event galleries or live-looking counters. One room has happened.
- A device repeated across two routes. Each route has its own, per the table in Part 2.
- A colour-only distinction. The four groups are shape-first.
- A hover-revealed thing with no keyboard and no touch path.
- Reduced motion implemented as animation removal rather than the resolved end state.
- A canvas that does not reserve its final dimensions before render, causing layout shift.
- Copy that was rewritten rather than typeset as supplied.
- Any modification to a production route before Stage 3 is approved.

## Report at every gate

- The preview URL.
- Files created and files modified, and confirmation that no production route changed.
- Bundle size delta from `npm run build`, against the budget in Part 4.
- Which acceptance items in the brief you have verified, and which you could not.
- Anything you flagged and deliberately did not change, with your reasoning.
- Confirmation that `npm run build` passes with no new warnings.

Start with Stage 0. Report the excavation, and wait.
