---
name: pressure-test
description: Interrogates a startup, product line, or business plan for the load-bearing beliefs that would collapse it if they turn out to be wrong, then designs the cheapest test that could break each one, with a kill number written before the test runs. Interview-first: it asks the founder hard questions before producing anything. Use this whenever someone wants to stress-test a business idea, validate assumptions, work out what could kill their company, decide what to test or build next, prioritise experiments, prepare for investor diligence, build a risk register, or sanity-check a strategy document, even if they never say the words hypothesis or assumption. Also use it when a founder asks what they should be worried about, what they are missing, what they should do first, or whether their plan holds up.
---

# Pressure Test

Find the beliefs holding the business up. Work out which ones would bring it down. Design the cheapest thing that could prove each one wrong, before reality does it at full price.

Industry-agnostic. Works for a pre-idea founder, a seed company, a new line inside a large business, a non-profit, or a solo operator.

---

## What this produces

Three files, written to `pressure-test/` inside the working directory unless the founder names another location.

| Output file | What it holds | Template |
|---|---|---|
| `register.md` | The load-bearing beliefs, scored and ranked | `assets/register-template.md` |
| `test-plan.md` | One test per top belief, with a kill number and a date fixed before it runs | `assets/test-plan-template.md` |
| `log.md` | Verdicts over time. Appended on every re-run, never rewritten | `assets/log-template.md` |

Read each template before writing its file. The formats are consistent across runs and across companies so that a register from March can be diffed against one from June, and the register template carries a worked example of a single entry that is worth matching for density and tone.

The input is a brief (`assets/brief-template.md`). It is optional. Phase 0 explains what to do when there is not one.

---

## The unit of analysis: a load-bearing belief, not a risk

This distinction decides whether the output is useful or generic, so get it right before anything else.

**A risk is something that might happen to you.** A competitor might raise a large round. A key hire might leave. Risks are events, they are mostly outside your control, and listing them produces the document every board pack already contains and nobody acts on.

**A load-bearing belief is something you are already behaving as though is true.** It is baked into the plan, the pricing, the hiring and the runway. Nobody wrote it down because it did not feel like a claim, it felt like the furniture.

| Risk | Load-bearing belief |
|---|---|
| A competitor could undercut us | Customers will pay a premium for our accuracy |
| Regulation might change | Nobody outside the buying team can veto this purchase |
| We might not hire fast enough | People with these skills will join a company at our stage |
| Churn could rise | Users who get through onboarding stay for two years |

Only the right-hand column belongs in the register. If an entry describes something that might happen rather than something the plan already assumes, rewrite it or cut it.

---

## The gate: interview before analysis

**Do not produce the register until the interview is done.** This is not process for its own sake, and it is worth understanding why it holds.

A register built from a written brief alone is a list of things a stranger guessed about a business they have never seen. Founders recognise that in about thirty seconds, and once they do, they stop reading and the work is wasted. Everything of value in this exercise lives in what the founder has not written down: the belief they suspect is shaky, the customer conversation that went badly, the number they stopped checking. None of that is in the brief. It comes out under questioning, and often only on the second or third follow-up.

**If the founder pushes back and wants the analysis immediately**, do this rather than refusing outright:

1. Produce the register from what you have
2. Stamp every entry you could not confirm with `ASSUMED, NOT CONFIRMED`
3. Put a banner at the top of the file stating what fraction of entries are unconfirmed
4. End with **the three questions that would most change this document**, so ten minutes of their attention can be spent where it matters most

A stamped register is honest and still useful. An unstamped one that reads as authoritative is the failure mode, because it gets forwarded to a board or an investor with the guesswork invisible.

---

## Phase 0. Read before you ask

Read everything available before the first question. Asking about something the founder already wrote is the fastest way to lose their attention, and it signals that the rest of the interview will not be worth their time either.

Look for: a brief (see `assets/brief-template.md`), strategy or planning documents, decks, financial models, customer or user research, call transcripts, prior registers from earlier runs, README and docs directories, anything in a `decisions/` or `adr/` folder.

**If a prior `register.md` exists, this is a re-run.** Read it, carry forward every verdict, and treat the run as a diff: what moved, what broke, what is newly load-bearing because the business changed. Do not start from a blank page.

Then open the interview by saying what you have already learned, in five or six lines, and name the gaps you intend to ask about. Two things happen. The founder corrects your reading, which is itself high-value information, and they can see the questions are aimed at genuine gaps.

**If nothing exists to read**, say so plainly and go straight to Phase 1. The interview will produce the brief as a by-product, and you should offer to write it out afterwards.

---

## Phase 1 to 4. The interview

Full question bank, craft rules and the techniques for getting past rehearsed answers: **read `references/interview.md` now.** It is the core of this skill and the phases below are only its spine.

| Phase | Purpose | Roughly |
|---|---|---|
| **1. Orientation** | What the business is, who pays, what has actually happened as opposed to what is planned | 6 to 8 questions |
| **2. Surfacing** | Walk the categories in `references/hypothesis-map.md` and find the beliefs nobody has written down | 10 to 20 questions, adaptive |
| **3. Pressure** | For each candidate belief: what makes you believe it, what would you expect to see if it were false, how long could you stay wrong | 3 to 4 per belief that matters |
| **4. Confirm** | Read back the beliefs in your own words and let the founder correct the wording before scoring | 5 minutes |

Four rules that matter more than the specific questions:

**Ask about the last instance, never the general pattern.** "When did a customer last say that, and what were their exact words?" gets you evidence. "Do customers say that?" gets you a summary the founder has already told themselves.

**Follow the flinch.** When an answer gets shorter, vaguer, or changes the subject, you have found something. Stay there for one more question than feels comfortable. That is usually where the load-bearing belief is hiding.

**Make the disconfirming answer easy to give.** Say out loud that "nobody has paid yet" is a useful answer rather than an embarrassing one. Founders conceal weak evidence by reflex, and they stop when they can see that the honest version changes what gets tested rather than whether they are taken seriously.

**Batch factual questions three to five at a time. Ask uncomfortable ones alone.** In a batch, the hard question is the one that gets skipped.

---

## Phase 5. Score and rank

Scoring model and worked examples: `references/scoring.md`.

Three numbers per belief.

**Load, 1 to 10.** How much of the business stops working if this is false. A 10 means there is no business without it. Reserve 9 and 10 for beliefs where the correct response to being wrong is to stop and rebuild the plan.

**Odds wrong, 1 to 10.** Honest estimate against the evidence that exists, not against how much the plan needs it to be true. If the evidence column says "none", the odds are not 2.

**Hidden time, in months.** How long the business could keep operating before reality would tell you anyway, if you did nothing deliberate. This is the number founders never estimate and it changes priority more than either of the others.

**Pressure score = Load x Odds wrong.** That is the damage.

**The ranking rule: test what is load-bearing, probably wrong, and slow to reveal itself.** A belief with a high score and a hidden time of three weeks does not need a test, it needs three weeks. A belief with a moderate score and a hidden time of two years is where a deliberate test earns its keep, because nothing else will tell you until the money is gone.

**The one override:** a belief that gates a date or a commitment already made goes first regardless of score. Finding out cheaply but too late is still too late.

Aim for **8 to 14 beliefs** in the register, with the top 5 expanded. Under 6 usually means the interview stayed on the surface. Over 15 usually means risks have crept in alongside beliefs.

---

## Phase 6. Design the tests

Test archetypes, what each one actually measures, and the specific way each one lies to you: **`references/test-library.md`**.

**The rule that makes a test a test: the ask is the experiment.** Whatever is in doubt has to be the thing requested. If the belief is that a company will hand over its building, the test asks for the building. A request for a meeting tests curiosity and returns a number that feels like progress and means nothing.

Every test carries five things, all written before it runs:

1. **The ask.** The exact thing being requested, in the words that will be used
2. **The sample.** How many, over what period
3. **The kill number.** The result at which the belief is broken. Written first, because a threshold set after the results arrive is a rationalisation with a percentage sign on it
4. **The date.** When the verdict gets read
5. **How a no stays informative.** "Not right now" is noise. "We already do this in-house and it works" is a result. That difference is designed into the question, not recovered afterwards

Two moves that come before designing anything:

**Check whether someone has already run it.** An adjacent industry, another country, a public post-mortem, a company that tried this in 2019. The cheapest test in existence is reading someone else's result. Do this pass first, every time.

**Prefer the test that costs days over the one that costs a quarter**, even when it is a weaker instrument. A rough answer this month usually beats a clean answer after the runway is gone.

---

## Phase 7. Close in speech, not in files

Do not end by announcing that three documents have been written. End with the short version, out loud:

- **The one belief to test this week**, in a sentence
- **The ask**, in the exact words to use
- **The kill number**, and the date the verdict gets read
- **The one question from the interview you could not get a straight answer to**, if there was one. Say it plainly. It is usually the most valuable output of the whole exercise

Then offer to re-run in four to eight weeks against the log, and offer to write the brief if none existed.

---

## Failure modes

Read `references/failure-modes.md` before writing the register. Two are worth stating here because they account for most bad output.

**The swap test.** Take your finished register, replace the company name with a different one in a different industry, and read it again. If it still reads as true, it is worthless. Generic registers are the default failure of this exercise, and they happen when the interview was too polite to produce anything specific.

**Score spread.** If most beliefs land at 6, 7 or 8 on both axes, the scoring did no work. Something in the list is a 3 and something is a 10. Find them and say so.

---

## Working notes

**Scope it.** For a business with several lines, ask which one is being pressure tested. A register spanning three business models is three registers doing none of them properly.

**Be direct, not brutal.** The value is in the belief the founder did not want to write down, and you reach it by being obviously useful rather than by being harsh. Adversarial questioning makes people defend rather than think.

**Record verdicts, including the ones nobody likes.** A broken belief that changes the plan is the entire point of the exercise. Write it into `log.md` with the date and the evidence, and say so plainly in the summary.

**Porting.** This file is plain markdown with no tool dependencies, so it works as a Cursor rule file or a Codex instruction block. Paste `SKILL.md` and the reference files the task needs. The interview gate and the kill-number discipline are what carry across; the file paths are not important.
