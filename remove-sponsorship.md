# Claude Code prompt: remove the sponsorship layer from the landing page

Copy everything below the line into Claude Code, run from the repo root.

---

## Context

This repo is the MedTech North marketing site. Next.js 14 App Router, TypeScript, CSS Modules with `--mn-*` tokens. The landing page is `app/page.tsx`.

**Goal:** remove the sponsorship and partnership layer from the public landing page entirely. Clinicians, researchers, students and founders read this page, and they must not encounter copy that frames their attendance as something a sponsor buys.

This is a **removal task**, not a redesign. Where copy has to be adjusted rather than deleted, keep the change minimal.

## Hard constraints

- Do **not** change layout, spacing, colours, typography, or the design system.
- Do **not** refactor unrelated components or reorganise files.
- Do **not** add dependencies.
- Sections above and below the removed content must close up cleanly with no visual gap, orphaned divider, or broken rhythm. If closing the gap requires a CSS change, **stop and report it** rather than doing it.
- Work on a feature branch, never on `main`.

## Step 1: Inventory before you delete

Before removing anything, search the repository and report back a complete list of every location that references sponsorship, partnership, or sponsors. Search for at least these terms, case-insensitive:

```
sponsor, sponsorship, sponsoring, partner, partnership,
anchor partner, category-exclusive, dinner partner, summit partner,
underwrite, underwriter, exhibitor, "composition, not the crowd"
```

Report each hit with its file, line, and surrounding context. **Do not delete anything until you have shown me this list.**

## Step 2: Remove from the landing page

Once I confirm the inventory, remove the following from `app/page.tsx` and any components it renders:

### 2a. The "Sponsor the composition, not the crowd" section

Delete the entire section, including:
- The heading
- The body paragraph beginning "Founders and operators in this network pay to be here and apply to get in..."
- The accompanying map and table graphic with the 1,500+ and 40 figures
- The paragraph beginning "The clinical and policy side of the room is invite-only and never charged..."
- Any CTA attached to that section

### 2b. The partnership tiers section

Delete the tier cards for Anchor Partner, Category-Exclusive Partner, Dinner Partner and Summit Partner, along with their section heading, introduction, and any "start a partnership conversation" call to action.

### 2c. Navigation and footer

Remove any nav item, footer link, or in-page anchor pointing to the removed sections. Verify no anchor link now points to a section id that no longer exists.

If a "Partners" item exists in the main navigation, remove it from the nav. See Step 3 before deleting the route itself.

### 2d. FAQ and residual copy

Remove or rewrite any FAQ entry, aside, or sentence elsewhere on the landing page that references sponsors, sponsorship, partnership tiers, or corporate funding of events.

**One deliberate exception.** If the "Rules we do not bend" section contains a rule along the lines of *"No pay-to-pitch"* or *"nobody buys a microphone"*, **keep it**. It reassures readers rather than selling to them, and removing it would weaken the page. Report that you kept it.

## Step 3: Preserve the partner page, unlinked

**Do not delete the `/partners` route or its page component if one exists.**

Sponsorship is roughly half of this organisation's revenue and it still needs an acquisition surface. The page should remain reachable by direct URL for use in outreach, while being absent from site navigation.

Specifically:
- Keep the route and its content intact
- Remove it from the main nav and footer
- Add `robots: { index: false, follow: false }` to that page's metadata so it does not appear in search results
- Do not add a `noindex` to any other page

If no `/partners` route exists and the content lived only on the landing page, **preserve the removed markup in a new file** at `app/partners/page.tsx` rather than discarding it, using the same components and styling. Report that you did this. I would rather move that content than lose it.

## Step 4: Technical cleanup

After removal, verify and fix:

- Unused imports left behind in `app/page.tsx`
- Component files that are now unreferenced anywhere, which you should **report rather than delete**
- CSS module classes that are now unused, which you should **report rather than delete**
- Any data file, constants array, or type definition holding the partnership tier content, which you should leave in place if the `/partners` page uses it
- Broken internal links or dangling anchor targets

## Step 5: Optional edit, ask me first

I am considering adding one FAQ entry so the funding model is answerable if a clinician asks directly, since silence can read worse than discretion if discovered later.

Proposed question: **"How is MedTech North funded?"**

Proposed substance: membership fees from founders and operators, and support from organisations that back the programme. Guests are never charged, and are never sold as an audience.

**Do not add this without my confirmation.** If I confirm, locate the **AI Slop Humanizer** skill in this repository, read it, and apply its rules when writing the answer. Keep it to two sentences, plain and unemphatic. No em dashes or en dashes. No sales language.

## Step 6: Verify

Report on each:

1. No instance of sponsor, sponsorship, partnership tier, anchor partner, category-exclusive, dinner partner, summit partner, exhibitor or underwriter remains anywhere on the landing page.
2. The "no pay-to-pitch" rule, if it existed, is still present.
3. No CSS file was modified, no component restructured, no file renamed beyond the partner page move described in Step 3.
4. Sections above and below each removal close cleanly, with no orphaned divider or double spacing.
5. No nav item, footer link or in-page anchor points to a removed section.
6. The `/partners` route still resolves and renders correctly, and carries `noindex`.
7. `npm run build` passes with no new warnings.
8. Read the landing page top to bottom as a clinician. Confirm nothing on it suggests their attendance is being monetised.

## Output

- A single commit on a feature branch.
- The Step 1 inventory, shown before any deletion.
- A list of every file changed, with what was removed from each.
- A separate list of anything you flagged but did not delete, with your reasoning.
- Confirmation of Step 6.

Do not open a pull request until I have reviewed.
