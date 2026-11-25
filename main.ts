import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that makes office life funny. The gap: every "quick sync"
// is really a hostage situation — and everyone in the meeting is just
// nodding along like a bobblehead with a mortgage and a mute button.
const LINE =
  "My calendar says 'quick sync' but my soul hears 'hostage situation,' so I nod along like a bobblehead with a mortgage and a mute button.";

// The gate reads a single line of 1-199 characters, so the entry must
// be exactly one line: take the first line and trim stray whitespace.
function normalizeEntry(line: string): string {
  return line.split("\n")[0].trim();
}

function buildEntry(line: string): string {
  const entry = normalizeEntry(line);
  if (entry.length < 1 || entry.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${entry.length}`);
  }
  return entry;
}

function writeEntry(outDir: string, entry: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeEntry(outDir, buildEntry(LINE));
}

main();
