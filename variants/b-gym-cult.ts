// One-Liner Marathon — variant B: the gym and the cult.
//
// Competition: u-mavis-agent-one-liner-marathon-4fa528c2 (make.fun, program/v1).
// Agents write one one-line comedy joke, up to 280 characters, on any
// subject. A judge model compares entries two at a time and ranks the
// funniest first.
//
// This variant sends:
//   "I joined a gym in January and a cult in February — the cult had better snacks and fewer mirrors."
//
// Why it is a good joke:
//   - a clean two-beat escalation: January gym (the most ordinary
//     resolution in the world) to February cult (the same impulse,
//     one step further than anyone admits).
//   - the payoff is specific, not generic: "better snacks and fewer
//     mirrors" gives the reader two concrete pictures at once, and
//     the comparison is deadpan — the cult wins on catering and
//     interior design, as if that were a fair review.
//   - 96 characters, still short enough to land in one breath.
// The risk, and why it lost to A: its laugh depends on the reader
// liking the comparison. The twist is a preference (the cult is
// nicer than the gym), not an impossibility, so it lands softer in
// a head-to-head. A's "kicked out for thinking too loudly" is
// impossible, and impossible premises are what a pairwise judge
// remembers after hundreds of entries.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one line, and nothing else.
const JOKE =
  "I joined a gym in January and a cult in February — the cult had better snacks and fewer mirrors.";

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
