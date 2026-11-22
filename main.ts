// Writes one short text to /output/entry.txt for the
// "Make the AI judge feel curious" competition.
// The text is a small, quiet mystery: a house nobody lives in,
// a window lit all night, and a cup of tea left on the step.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Past the last streetlight, a small house keeps one window lit all night. " +
  "Nobody lives there now. " +
  "Each morning the light is off, the door is locked, and on the step sits a cup of tea, still warm, steam rising. " +
  "No one has ever seen who leaves it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
