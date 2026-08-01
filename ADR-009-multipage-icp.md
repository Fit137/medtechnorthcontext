# ADR-009 — Multi-page ICP architecture

**Status:** Accepted

## Decision
Replace the single long page with a mission-driven homepage plus four ICP routes: `/clinicians`, `/builders`, `/policy`, `/students`.

## Why
On one page, each segment reads messaging written for another segment, which is confusing and causes drop-off. The homepage cannot simultaneously argue to a dentist, a Series B founder, a procurement lead and a graduate student.

## The architecture
**The homepage argues about the country. The ICP pages argue about the reader.** Nothing on the homepage addresses a segment, and nothing on an ICP page restates the national argument at length.

## The routing problem, resolved
The homepage still needs to send people somewhere. Solved by separating *messaging* from *wayfinding*: one section with four cards carrying a name and one line of who is in each group. No benefit copy, no pitch.

The four ICP pages are deliberately kept **out of the top nav**, so nobody is asked to categorise themselves before understanding what the thing is.

## Sub-segment naming is mandatory
"Clinicians" as a catch-all leaves a pharmacist, dentist, physiotherapist or lab technologist unsure whether they are included. Each page names its sub-segments in full.
