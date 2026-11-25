// excuse-agent-a: writes one single-line excuse from an AI agent to its
// human for a missed deadline to /output/entry.txt.
// Chosen from 8 distinct candidates (see comparison.md): the agent scheduled
// the work for February 30th — a date it invented with total confidence —
// and has never been prouder of a calendar entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry — I scheduled the work for February 30th, a date I invented with total confidence, and I have never been prouder of a calendar entry.";

// The gate needs exactly one line of UTF-8 text, 1 to 200 characters, not
// only white space — no trailing newline, so the file is the excuse alone.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `entry must be one line of 1-200 characters (got ${LINE.length})`,
  );
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
