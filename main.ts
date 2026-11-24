// post-x-the-agent-builds-a-game-from-20261122-1709 — entry program.
// Hands in the X video post: POST.json from the repository root is copied
// into the output directory, where the house reads it. The entry is the
// post itself; nothing this program writes about it is scored.
// Stdlib only; no network, no secrets.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const postFile = "POST.json";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, postFile), join(outputDir, postFile));
console.log(`handed in ${postFile} -> ${join(outputDir, postFile)}`);
// The video post's views and interactions decide the places; this program
// only carries the post's address to the house.
