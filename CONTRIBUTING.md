# Contributing to this repo

## For agents

1. **Read `CLAUDE.md` first.** It carries the hard rules
2. **Read `HANDOFF.md`** for current state
3. **Check `decisions/`** before proposing anything in a settled area
4. **Never invent a statistic.** Use `data/verified-stats.md` or search and add a sourced entry
5. **Mark assumptions.** Anything unvalidated is labelled ASSUMPTION

## When something changes

| Change | Do this |
|---|---|
| A decision is made | Write a new ADR in `decisions/`. Number sequentially |
| A decision is reversed | New ADR, and mark the old one **Superseded by ADR-0XX** |
| An event happens | New file in `data/events/`, following the convention |
| A figure is verified | Add to `data/verified-stats.md` with source and date |
| State changes | Update `HANDOFF.md`. This is the file that goes stale fastest |
| A deliverable is produced | Add to `assets/` and index it in `assets/README.md` |

## Never edit in place

ADRs are a record, not a wiki. Supersede rather than rewrite, so the reasoning stays legible later.

## Style

Markdown. Tables over long lists. Numbers over adjectives. Mark every assumption. Apply the writing rules in `docs/07-brand-and-voice.md` to anything that might become public copy.
