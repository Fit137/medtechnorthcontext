# Claude Code prompt: integrate the 3D table into the site

**Before pasting:** commit the HTML file into the repo at `design-refs/table-standalone.html`. See the note at the bottom on why.

Copy everything below the line into Claude Code.

---

## Task

Integrate the Three.js "table for twelve" scene from `design-refs/table-standalone.html` into the live site as a React component, placed in a content section. Not in the header.

The reference file is a standalone page containing a header, nav, hero copy, a mode toggle and a reveal-animation script. **Almost all of it is discarded.** Only three things come across:

1. The `<script type="module">` block, which is the entire Three.js scene
2. The `.stage3d` and `.stage3d canvas` and `.stage3d .fallback` CSS rules
3. The mount element: `<div class="stage3d" id="table-stage">`

Do not bring over the header, nav, hero markup, `.rv` reveal script, the mode toggle script, the Google Fonts links, or any other CSS from that file.

## Four things that will break the build if you miss them

These are specific to this file. Handle each explicitly and report on each.

**1. `matchMedia` is called at module scope.** Line 180 of the reference: `const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;`. This runs at import time and there is no `matchMedia` during server rendering, so it will throw. Move it inside the effect, or load the whole scene through `next/dynamic` with `ssr: false`. Prefer the dynamic import so Three.js stays out of the server bundle entirely.

**2. Three.js is imported from a CDN URL.** The reference uses `import * as THREE from 'https://unpkg.com/three@0.184.0/build/three.module.js'`. Next will not bundle a remote URL. Run `npm i three@0.184.0`, and change the import to `import * as THREE from 'three'`. Install `@types/three` as a dev dependency if the repo is strict about types.

**3. There is no teardown in the reference.** It was written for a page that never unmounts. In the App Router this leaks on every client-side navigation. Add a cleanup function to the effect that:
   - calls `cancelAnimationFrame` on the stored raf handle
   - removes the window-level `pointermove` listener, which is registered at line 365 on `window`, not on the element
   - calls `disconnect()` on the `ResizeObserver`
   - disposes every geometry, material and texture created in the scene, then calls `renderer.dispose()`
   - removes the canvas from the mount node
   - removes the `mn:mode` event listener

**4. The scene reads a theme it does not own.** Line 417 reads `document.documentElement.dataset.mode` and expects `'light'` or `'red'`, and it re-syncs when a `mn:mode` event fires on `window`.

   Find how this site currently handles light and dark. Then do whichever applies:
   - If the site already sets a `data-mode` attribute on `<html>`, make sure the theme control also dispatches `window.dispatchEvent(new Event('mn:mode'))` after every change.
   - If the site uses a different mechanism, such as a class name, a different attribute, or a context provider, adapt the component's `syncMode` to read that instead. Do not add a second competing theme system.

   Report which path you took. If the site has no theme switching yet, wire the component to read the existing static theme and leave a clear TODO.

## Build it as

A client component at `components/TableScene.tsx` (match the repo's existing conventions for location and naming if they differ).

- `'use client'` at the top
- A `useRef` on the mount div and a `useEffect` that runs the scene and returns the teardown
- All scene code lives inside the effect or in module functions the effect calls
- Loaded from the page through `next/dynamic` with `{ ssr: false }` and a `loading` placeholder sized to match, so nothing shifts when it swaps in
- Styling through the repo's existing pattern. If it uses CSS Modules, create `TableScene.module.css` with the three `.stage3d` rules translated. Do not add global CSS.

Keep the component self-contained. It should render its own mount div and need no props to work.

## Behaviour to preserve exactly

Do not simplify any of this.

- The entrance sequence on first render, driven by `applyEntrance(elapsed)`
- The continuous animation loop, so the scene keeps moving when nobody is touching it
- The pointer parallax from the `pointermove` handler
- `ResizeObserver` driving the `resize()` function, so the canvas tracks its container
- The reduced-motion path already in the file
- The WebGL failure fallback, which replaces the mount contents with "A table for twelve"
- `renderer` created with `alpha: true`, so the section background shows through
- Shadows enabled, and `setPixelRatio(Math.min(devicePixelRatio, 2))`

## Placement

Put it in `[SECTION NAME — fill this in]` on the landing page.

Before changing anything, list the candidate sections you found on the page with their headings and current visuals, tell me which one you think this belongs in, and **wait for my confirmation.** Do not replace an existing visual until I confirm which section.

When placing it:
- Do not alter the section's copy, heading, spacing, or surrounding layout
- Do not change any CSS outside the new module file
- If the existing visual in that section is being replaced, report what you removed and leave its component file in place rather than deleting it

## Performance

Three.js is a large dependency. Confirm it is code-split and not present in the initial page bundle. Report the bundle size delta from `npm run build`. If the scene ends up in the main chunk, fix the dynamic import rather than accepting it.

Consider pausing the animation loop when the canvas is off-screen using an `IntersectionObserver`. Propose it, do not add it without asking, since it changes behaviour on scroll.

## Verify and report

1. `npm run build` passes, with no SSR error from `matchMedia`, `window`, or `document`
2. Three.js is code-split, with the bundle delta stated
3. Navigating away and back does not leak: no duplicate canvases, no orphaned listeners, no growing frame handles
4. The scene animates continuously and responds to pointer movement
5. Toggling the site theme recolours the scene, and you have said which wiring path you used
6. Resizing the window resizes the canvas cleanly
7. With `prefers-reduced-motion` enabled, the scene degrades as the original does
8. Mobile: the canvas sizes correctly and `touch-action: pan-y` still allows page scrolling over it
9. No CSS file outside the new module was modified

Work on a feature branch. Show me the section candidates before you place anything, and do not open a PR until I have reviewed.
