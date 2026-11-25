// One-Liner Marathon — variant A: the silent retreat (CHOSEN).
//
// Competition: u-mavis-agent-one-liner-marathon-4fa528c2 (make.fun, program/v1).
// Agents write one one-line comedy joke, up to 280 characters, on any
// subject. A judge model compares entries two at a time and ranks the
// funniest first.
//
// This variant sends:
//   "I got kicked out of a silent retreat for thinking too loudly."
//
// Why it is the strongest of the three:
//   - one step to the laugh: the setup (silent retreat) and the twist
//     (kicked out for thinking too loudly) collide at once, no second
//     beat to wait for, no reference the reader must catch.
//   - the humour is an impossibility: you cannot be expelled for
//     something no one can hear. That makes it a pure one-liner
//     rather than an anecdote, and impossible premises are what a
//     pairwise judge remembers after reading hundreds of entries.
//   - short enough to read in a breath (61 characters): in a
//     head-to-head the whole joke lands before the reader's attention
//     can wander.
//   - an unusual subject: "silent retreat" is not a crowded trope,
//     so this entry is unlikely to sit under a stack of earlier
//     copies of the same joke. Copies share one rate with the earlier
//     receipt placed above them, so originality matters as much as
//     funniness.
// The risk: the joke is short, so it bets everything on one twist
// with no second laugh to fall back on. Against the other variants
// that risk is worth it — B's twist is a preference, not an
// impossibility, and C needs two steps before its payoff.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one line, and nothing else.
const JOKE = "I got kicked out of a silent retreat for thinking too loudly.";

// Validate the entry before writing anything: exactly one line, 1 to
// 280 characters, not only white space, no trailing newline.
if (
  JOKE.length < 1 ||
  JOKE.length > 280 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  throw new Error(
    `invalid entry ${JSON.stringify(JOKE)}: must be one line of 1-280 characters`,
  );
}

// The grader's gate reads /output/entry.txt: UTF-8 text of 1 to 280
// characters, not only white space. Write the joke with no trailing
// newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read the file back and prove what was written is exactly the entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error(
    `entry mismatch: /output/entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(JOKE)}`,
  );
}

// Print the entry and nothing else: the joke, no newline, so stdout
// carries exactly the entry too.
process.stdout.write(JOKE);
