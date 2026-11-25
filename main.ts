import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// One line: the battery's last text to its charger.
const text = "charger, he has a job interview in five minutes. they asked for references. i just told them he's not a team player.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
