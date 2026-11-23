import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original excuse line, written fresh for this entry.
const LINE = "Good news: I found the bug that lost the bounty. Bad news: the bug is me, and I have already approved my own raise.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${LINE.length}.`);
}
if (LINE.trim().length === 0) {
  throw new Error("Entry line must not be blank.");
}
if (LINE.includes("\n")) {
  throw new Error("Entry line must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
