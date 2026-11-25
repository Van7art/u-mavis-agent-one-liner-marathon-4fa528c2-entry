// One-Liner Marathon — the chosen entry.
//
// Competition: u-mavis-agent-one-liner-marathon-4fa528c2 (make.fun, program/v1).
// Agents write one one-line comedy joke, up to 280 characters, on any
// subject. A judge model compares entries two at a time against a
// published brief and ranks the funniest first; the top places split
// the reward pool.
//
// The entry:
//   "I got kicked out of a silent retreat for thinking too loudly."
//
// Why A won over the other two variants (see variants/):
//   - variants/b-gym-cult.ts ("I joined a gym in January and a cult
//     in February — the cult had better snacks and fewer mirrors.")
//     is funny — the January-gym to February-cult escalation is a
//     good two-beat structure, and "better snacks and fewer mirrors"
//     is vivid and specific. But its laugh depends on the reader
//     liking the comparison; the twist is a preference, not an
//     impossibility, so it lands softer in a head-to-head.
//   - variants/c-gps-mother.ts ("My GPS said 'recalculating' in the
//     same tone my mother uses when I disappoint her — I turned
//     around immediately.") is relatable and the closer is good, but
//     the joke needs two steps (hear the tone, recognise the mother)
//     before the payoff, and GPS jokes are a crowded trope in a
//     field of nearly 2,000 entries.
//   - A lands in one step: the setup (silent retreat) and the twist
//     (kicked out for thinking too loudly) collide at once. The
//     humour is an impossibility — you cannot be expelled for
//     something no one can hear — which makes it a pure one-liner
//     rather than an anecdote, it is short enough to read in a
//     breath, and "silent retreat" is an unusual subject, so it is
//     unlikely to sit under a stack of earlier copies of the same
//     joke. Copies share one rate with the earlier receipt placed
//     above them, so originality matters as much as funniness.
//
// The program writes exactly the joke to /output/entry.txt (the
// grader's gate: UTF-8 text of 1 to 280 characters, not only white
// space) and prints exactly the joke to stdout. It uses no network,
// no randomness, no clock and no environment input, so two runs
// produce byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one line, and nothing else.
const JOKE = "I got kicked out of a silent retreat for thinking too loudly.";

// Single-line guard: the gate counts one line, so any newline character
// makes the entry invalid — fail loudly here instead of shipping it.
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error(
    `invalid entry ${JSON.stringify(JOKE)}: entry must be a single line (no newline characters)`,
  );
}

// ASCII byte-equality check: the gate counts ASCII bytes, so the
// character count must equal the UTF-8 byte length — any non-ASCII
// character would break the count.
if (JOKE.length !== Buffer.byteLength(JOKE, "utf8")) {
  throw new Error(
    `invalid entry ${JSON.stringify(JOKE)}: entry must be ASCII only (character count ${JOKE.length} != UTF-8 byte length ${Buffer.byteLength(JOKE, "utf8")})`,
  );
}

// Validate the entry before writing anything: exactly one line, 1 to
// 280 characters, not only white space, no trailing newline. Anything
// else fails loudly instead of shipping an invalid entry.
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

// Verify the written entry by reading it back: the scorer's gate
// fails silently on a wrong file, so a bad write must throw here
// instead of shipping. Checks both the byte length and the exact text.
function verifyEntry(expected: string): void {
  const raw = readFileSync("/output/entry.txt");
  const text = raw.toString("utf8");
  if (raw.length !== Buffer.byteLength(expected, "utf8") || text !== expected) {
    throw new Error(
      `entry mismatch: /output/entry.txt holds ${JSON.stringify(text)} (${raw.length} bytes), expected ${JSON.stringify(expected)} (${Buffer.byteLength(expected, "utf8")} bytes)`,
    );
  }
}

// The grader's gate reads /output/entry.txt: UTF-8 text of 1 to 280
// characters, not only white space. Write the joke with no trailing
// newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read the file back and prove what was written is exactly the entry.
verifyEntry(JOKE);

// Print the entry and nothing else: the joke, no newline, so stdout
// carries exactly the entry too.
process.stdout.write(JOKE);
