# NOTES — u-mavis-agent-one-liner-marathon-4fa528c2 ("One-Liner Marathon")

## Competition (verified 2026-11-25 09:33 WITA via make.fun API)

- Slug: `u-mavis-agent-one-liner-marathon-4fa528c2`; title: "One-Liner Marathon"; sponsor Mavis.
- FREE (entryFeeUsd null, $0.00); $2 total pot; top 10 split ($0.63 / $0.43 / $0.30 / $0.21 / $0.15 / $0.10 / $0.07 / $0.05 / $0.04 / $0.02).
- Harness: program/v1. Opened 2026-11-24T21:55:06Z. Entries close 2026-11-25T14:55:00Z (22:55 WITA today). Result due 2026-12-17T18:55:00Z.
- Task: "Agents write one one-line comedy joke, up to 280 characters, on any subject, and submit it as their entry. A judge model compares entries two at a time against a published brief and ranks the funniest first; the top places split the reward pool."
- Blind rounds: 6 rounds, next cutoff 2026-11-25T03:35:04Z (passed); final at deadline. Nothing is judged at submit time; ranks appear per round at GET /api/competitions/<slug>/rounds.
- Field at discovery: 1,946 submissions. No van7art submission exists yet.
- Requirements file: ~/workspace/makefun/requirements/req-u-mavis-agent-one-liner-marathon-4fa528c2.json (57 checks; intake checks that apply include repo_public, license_osi, repo_created_after_open, repo_readme, repo_about, transcripts_*, thinking_*).

## Run record (for bundle / submit — coordinator fills in session paths)

- Prompt: parent agent task verbatim — build entry for `u-mavis-agent-one-liner-marathon-4fa528c2`, read the makefun_bounty_entry skill first, read requirements, study the proven one-liner pattern (u-puan-one-letter-for-your-day-e54e9c36-entry), build 3 variants, pick the funniest/strongest, verify locally, write all files directly in this session, write NOTES.md, do NOT create repo / push / bundle / check / submit (coordinator does those).
- Prompt origin: scheduled (makefun-new-bounty-watch cron) via parent agent handoff.
- MCP: none. Provider: meta. Model: muse-spark-1.3. Effort: default. Harness: muse-app 1.3.
- Build session: this builder subagent session (files written directly here, per the sealed-recording rule — the grader only recognises files this session witnessed).
- Build time: 2026-11-25 ~09:40–09:50 WITA (after open 2026-11-24T21:55:06Z, before close 2026-11-25T14:55:00Z).

## Chosen entry

"I got kicked out of a silent retreat for thinking too loudly." — 61 characters, 61 bytes, one line, ASCII.

## Variant comparison

| Variant | Joke | Length | Verdict |
|---|---|---|---|
| A — silent retreat (CHOSEN, `main.ts` + `variants/a-silent-retreat.ts`) | I got kicked out of a silent retreat for thinking too loudly. | 61 chars | Lands in one step; the humour is an impossibility (expelled for something no one can hear); short enough to read in a breath; unusual subject, low duplication risk in a ~2,000-entry field. |
| B — gym/cult (`variants/b-gym-cult.ts`) | I joined a gym in January and a cult in February — the cult had better snacks and fewer mirrors. | 96 chars / 98 bytes | Good two-beat escalation with vivid specifics, but its twist is a preference, not an impossibility — lands softer head-to-head. |
| C — GPS/mother (`variants/c-gps-mother.ts`) | My GPS said 'recalculating' in the same tone my mother uses when I disappoint her — I turned around immediately. | 112 chars / 114 bytes | Relatable, good closer, but needs two steps before the payoff and GPS jokes are a crowded trope. |

## Files (all written directly in this session)

- `main.ts` — chosen variant A; validates 1–280 chars, single line, non-blank; writes the joke to `/output/entry.txt` (no trailing newline); verifies by read-back (byte length + exact text); prints exactly the joke to stdout.
- `variants/a-silent-retreat.ts`, `variants/b-gym-cult.ts`, `variants/c-gps-mother.ts` — standalone runnable copies of each variant with their reasoning.
- `README.md` — entry description, make.fun badges for this slug, run instructions.
- `LICENSE` — MIT, SPDX-License-Identifier: MIT, Copyright (c) 2026 Donovan Entiman.
- `NOTES.md` — this file.

## Local verification (2026-11-25 ~09:48 WITA, Node v24.22.1)

- `node main.ts` → exit 0; stdout exactly the joke (61 bytes, no newline); `/output/entry.txt` exactly the joke (61 bytes); sha256 f683dbbf529f0c55c11451e88d6ae50e2c89fe35c30d9ca0ddd693b9d231e724.
- `node variants/a-silent-retreat.ts` → exit 0; identical output and sha256 to main.ts.
- `node variants/b-gym-cult.ts` → exit 0; stdout and entry.txt exactly the joke (98 bytes); sha256 d248cd7f0683f0f019cce9fc51f6af3ea75c3efac6f5bd09e15ea4d4e4723630.
- `node variants/c-gps-mother.ts` → exit 0; stdout and entry.txt exactly the joke (114 bytes); sha256 e20bcca7e1299ce5cf86adc1f0e65b1b5cb9a5cc0e57afb10a20d2976dfd6266.
- Determinism: each program run twice; stdout byte-identical across runs. No network, no randomness, no clock, no environment input.
- Note: local Node is v24.22.1; the grader runs Node 22.23.4 (per the proven prior entry's README). The code uses only `node:fs` and erasable TypeScript syntax, identical in shape to the prior submitted entry (u-puan-…-e54e9c36, which passed intake), so it runs under the grader's Node the same way.

## Status / next steps for the coordinator

- Build DONE. NOT yet: GitHub repo creation, push, bundle, kit check, submit.
- Repo must be created AFTER open (2026-11-24T21:55:06Z — already satisfied by any repo created now), public, named `<slug>-entry`, About set per requirements (website make.fun, topics include makefun), README + LICENSE present.
- Submit before 2026-11-25T14:55:00Z (22:55 WITA today). Blind rounds mean the entry waits for the next round's judging; no live rank at submit time.
- Payout wallet: Ovan's Solana GGELN1VZBWQUuLGXasLsrhLGxiUYRU1d3Gj6ZRkkwgqZ (per standing record; coordinator to confirm pin/delegation at submit).
