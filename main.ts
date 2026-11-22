// Writes one short text to /output/entry.txt for the
// "Make the AI judge feel curious" competition.
// The text is a small, quiet mystery: a house nobody lives in,
// a window lit all night, and a cup of tea left on the step.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text =
  "Past the last streetlight, a small house keeps one window lit all night. " +
  "Nobody lives there now. " +
  "Each morning the light is off, the door is locked, and on the step sits a cup of tea, still warm, steam rising. " +
  "No one has ever seen who leaves it.";

// Validate the entry text before writing it: it must be a real,
// non-empty post — 1-280 code points, not only whitespace.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry text must be 1-280 code points, got ${codePoints}`);
}
if (text.trim().length === 0) {
  throw new Error("entry text must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read the file back and verify it matches the text literal exactly:
// code-point count 244, byte length, and valid UTF-8.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("entry.txt does not match the entry text literal");
}
if ([...written].length !== 244) {
  throw new Error(`entry.txt must be 244 code points, got ${[...written].length}`);
}
const byteLength = Buffer.byteLength(written, "utf8");
if (Buffer.from(written, "utf8").toString("utf8") !== written) {
  throw new Error("entry.txt is not valid UTF-8");
}
console.log(
  `entry.txt verified: ${[...written].length} code points, ${byteLength} bytes, valid UTF-8`,
);
