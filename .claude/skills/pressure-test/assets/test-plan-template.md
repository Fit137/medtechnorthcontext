# Pressure Test Plan: [Company]

**Run date:** [date] · **Register:** `register.md` · **Verdicts:** `log.md`

One test per belief in the top five, unless a belief has a hidden time short enough that waiting is cheaper than testing. Where that is the case, say so instead of designing a test.

---

## This week

The one test that starts now, stated in three lines so it can be acted on without reading the rest of the document.

**Belief:** [rank and one sentence]
**The ask:** [the exact words]
**Kill number:** [n], read on [date]

---

## Already answered elsewhere

*Run this pass before designing anything.* Beliefs where someone has already run the experiment: an adjacent industry, another country, a public post-mortem, a trade body's data.

| Belief | What was found | Source | Effect on the score |
|---|---|---|---|

---

## The tests

### Test 1. [Name] · for belief [rank]

**Archetype:** [from the test library]
**What it measures:** [one line, and it should be the belief itself rather than a proxy]

**The ask:** [the exact thing being requested, in the words that will be used. If this is not the thing in doubt, redesign it]

**Sample:** [how many, over what period, sourced how. Note what share is cold]

| | |
|---|---|
| **Kill** | [at or below this, the belief is broken and the plan changes] |
| **Pass** | [at or above this, it holds for now] |
| **Inconclusive** | [the band between, which means the sample was too small or the ask was wrong] |

**Verdict read on:** [date, fixed. Read it on that date even if the result is disappointing]
**Owner:** [person]
**Cost:** [days and money, including your own hours at a real rate]

**How a no stays informative:** [how the question is built so refusals carry a reason]

**How this test could lie to us:** [from the library entry, made specific to this run]

---

## Waiting rather than testing

Beliefs where reality reports sooner than a test would. Name the belief, the hidden time, and the date by which the answer arrives on its own.

---

## Sequence

| Weeks | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Test 1 | ██ | ██ | ██ | | | |
| Test 2 | | | ██ | ██ | | |

**Capacity note:** name the real constraint. It is usually not sending or building, it is whoever has to handle the responses and read the verdicts. Two or three live tests is the practical ceiling for a small team, and a fourth degrades the others.
