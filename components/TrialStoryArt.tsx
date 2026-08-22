"use client";

type StoryKey = "A2-0" | "A2-1" | "B1-0" | "SEC-0";

type Story = {
  poster: string;
  video: string;
  captionZh: string;
  captionEn: string;
};

const STORIES: Record<StoryKey, Story> = {
  "A2-0": {
    poster: "/trial/a2-w0.jpg",
    video: "/trial/a2-w0.mp4",
    captionZh: "失物招领。Auntie Tan 举起水杯问：Is this your bottle?",
    captionEn: "Is this your bottle? Yes, that's mine.",
  },
  "A2-1": {
    poster: "/trial/a2-w1-p3.jpg",
    video: "/trial/a2-w1.mp4",
    captionZh: "周一早上。Mei 6:15 醒来，吃早餐，出门上学。",
    captionEn: "I wake up at 6:15. She wakes later.",
  },
  "B1-0": {
    poster: "/trial/b1-w0.jpg",
    video: "/trial/b1-w0.mp4",
    captionZh: "全英语学校。每天先看布告栏，再把句子写进本子。",
    captionEn: "I have been here for six months. I went there last year.",
  },
  "SEC-0": {
    poster: "/trial/sec-w0.jpg",
    video: "/trial/sec-w0.mp4",
    captionZh: "中学第一周。Wei 带 Aisha 去食堂。Although he was nervous, he tried.",
    captionEn: "Although he was nervous, he tried. Not although…but…",
  },
};

const WRITING_FRAMES = [
  { src: "/trial/a2-w1-p1.jpg", labelZh: "图 1", labelEn: "Mei wakes at 6:15." },
  { src: "/trial/a2-w1-p2.jpg", labelZh: "图 2", labelEn: "She eats bread and milk." },
  { src: "/trial/a2-w1-p3.jpg", labelZh: "图 3", labelEn: "Dad waves goodbye." },
];

export function TrialWritingPictures({
  level,
  weekNumber,
}: {
  level: string;
  weekNumber: number;
}) {
  if (level !== "A2" || weekNumber !== 1) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {WRITING_FRAMES.map((frame) => (
        <figure key={frame.src} className="bg-paper border border-line rounded-xl overflow-hidden">
          <img
            src={frame.src}
            alt={frame.labelEn}
            className="w-full aspect-[4/3] object-cover"
          />
          <figcaption className="px-3 py-2 text-sm text-ink-2">
            <span className="font-semibold text-ink">{frame.labelZh}</span>
            {" · "}
            {frame.labelEn}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function TrialStoryArt({
  level,
  weekNumber,
}: {
  level: string;
  weekNumber: number;
}) {
  const key = `${level}-${weekNumber}` as StoryKey;
  const story = STORIES[key];
  if (!story) return null;

  return (
    <div className="mb-8 bg-card border border-line rounded-xl overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        poster={story.poster}
        className="w-full bg-paper-2"
        style={{ maxHeight: "420px" }}
      >
        <source src={story.video} type="video/mp4" />
      </video>
      <div className="px-5 py-4">
        <p className="text-sm text-ink leading-relaxed">{story.captionZh}</p>
        <p className="mt-1 text-sm font-medium text-ink-2" lang="en">
          {story.captionEn}
        </p>
      </div>
    </div>
  );
}
