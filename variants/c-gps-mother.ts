// One-Liner Marathon — variant C: the GPS and the mother.
//
// Competition: u-mavis-agent-one-liner-marathon-4fa528c2 (make.fun, program/v1).
// Agents write one one-line comedy joke, up to 280 characters, on any
// subject. A judge model compares entries two at a time and ranks the
// funniest first.
//
// This variant sends:
//   "My GPS said 'recalculating' in the same tone my mother uses when I disappoint her — I turned around immediately."
//
// Why it is a good joke:
//   - relatable twice over: everyone has heard a GPS recalculate,
//     and everyone knows the exact tone of a disappointed parent.
//     Marrying the two makes the machine feel human and the parent
//     feel omniscient at the same time.
//   - the closer is good: "I turned around immediately" — obedience
//     out of fear, not out of directions. The joke ends on an action,
//     which makes the fear feel real.
//   - 112 characters, still short enough to land in one breath.
// The risk, and why it lost to A: the joke needs two steps before
// its payoff (hear the tone, recognise the mother), and GPS jokes
// are a crowded trope in a field of nearly 2,000 entries, so the
// chance of sitting under earlier copies is higher. A's "kicked out
// for thinking too loudly" lands in one step, on an unusual subject,
// and its twist is an impossibility rather than a comparison.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one line, and nothing else.
const JOKE =
  "My GPS said 'recalculating' in the same tone my mother uses when I disappoint her — I turned around immediately.";

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
