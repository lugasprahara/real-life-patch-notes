// Real-Life Patch Notes: The Comedy Changelog — make.fun entry.
//
// Writes one line to /output/entry.txt: a software patch note for a bug in
// real life. The bug: the stomach growl ignores silent mode and picks the
// worst possible rooms to go off in.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The note, in release-note parts: a version, the fix stated as shipped,
// and the root cause in the driest register available.
const VERSION = "v1.9.3";
const FIX =
  "Stomach no longer overrides silent mode during meetings, funerals and first dates.";
const ROOT_CAUSE = "The growl was filed as a critical alert. It is not. It never was.";

const NOTE = `${VERSION}: ${FIX} ${ROOT_CAUSE}`;

// Hold the line to the competition gate before it ships: one line of
// UTF-8 text, 1 to 160 characters, not only white space.
if (NOTE.includes("\n") || NOTE.trim().length === 0 || NOTE.length > 160) {
  throw new Error(`entry breaks the gate: ${NOTE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NOTE + "\n", "utf8");
