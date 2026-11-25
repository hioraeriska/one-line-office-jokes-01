import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line that makes office life funny. The gap: every "quick sync"
// is really a hostage situation — and everyone in the meeting is just
// nodding along like a bobblehead with a mortgage and a mute button.
const LINE =
  "My calendar says 'quick sync' but my soul hears 'hostage situation,' so I nod along like a bobblehead with a mortgage and a mute button.";

function buildEntry(line: string): string {
  if (line.length < 1 || line.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${line.length}`);
  }
  return line;
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
