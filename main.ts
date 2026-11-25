import { mkdirSync, writeFileSync } from "node:fs";

// One code review comment: a single line approving the pull request
// while carrying quiet existential dread. Fixed text, no randomness,
// no network, no clock: two runs produce byte-identical output.
// Written with no trailing newline, so the file is exactly the
// comment itself: 78 characters, one line, valid UTF-8.
const comment =
  "LGTM. The tests pass, the code is clean, and I have never been less reassured.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", comment, "utf8");
