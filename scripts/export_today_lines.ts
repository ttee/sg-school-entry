import { ALL_STORIES } from "../lib/curriculum/storylines";
import { buildPedagogy } from "../lib/curriculum/story-pedagogy";

const jobs = ALL_STORIES.flatMap((s) =>
  buildPedagogy(s).today.map((line, i) => ({
    n: s.n,
    i,
    file: `public/audio/stories/${s.n}-${i}.mp3`,
    text: line.en,
    who: line.who,
  })),
);

process.stdout.write(JSON.stringify(jobs, null, 2));
