// Writes a one-line roast of a daily gadget to /output/entry.txt for the
// "One-Line Roast: The Gadget You Use Every Day" bounty. The roast targets
// the microwave: a gadget everyone uses daily, roasted on its most
// recognisable habit — beeping again and again after the food is done —
// with the twist that the first beeps were only a suggestion. One line,
// 77 characters, comfortably inside the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";

const roast = "My microwave beeps five times, as if the first four were merely a suggestion.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
