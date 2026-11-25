// One-Line Laugh-Off — make.fun entry (program/v1, Node 22+).
// Writes exactly one funny line, at most 200 characters, to
// /output/entry.txt. Deterministic, no network, no model calls.
// The line is a fixed constant chosen by the author.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one joke that lands on a cold read. "Something strong"
// is heard as a drink order, then the turn re-reads it as a life
// choice — the barista answers with the strongest thing she has:
// her resignation letter. No setup, no explanation, 79 characters.
const ENTRY =
  "I asked the barista for something strong. She handed me her resignation letter.";

// Gate guard: the sealed scorer only accepts 1–200 characters.
// Fail loudly here rather than writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200) {
  throw new Error(`ENTRY is ${[...ENTRY].length} characters; must be 1–200.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
