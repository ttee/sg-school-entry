"use client";

import { useRef, useState } from "react";

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
    video: "/trial/a2-w0.mp4?v=talk1",
    captionZh: "跟读：Auntie Tan 问，Mei 答。",
    captionEn: "Is this your bottle? Yes, that's mine. Thank you.",
  },
  "A2-1": {
    poster: "/trial/a2-w1.jpg",
    video: "/trial/a2-w1.mp4?v=talk1",
    captionZh: "跟读：I wake up / she wakes。",
    captionEn: "I wake up at 6:15. She wakes later.",
  },
  "B1-0": {
    poster: "/trial/b1-w0.jpg",
    video: "/trial/b1-w0.mp4?v=talk1",
    captionZh: "跟读：现在完成 vs 过去时。",
    captionEn: "I have been here for six months. I went there last year.",
  },
  "SEC-0": {
    poster: "/trial/sec-w0.jpg",
    video: "/trial/sec-w0.mp4?v=talk1",
    captionZh: "跟读：Although…，不要 although…but…。",
    captionEn: "Do you know where the canteen is? Although I was nervous, I tried.",
  },
};

const WRITING_FRAMES = [
  { src: "/trial/a2-w1-p1.jpg", labelZh: "图 1", labelEn: "Mei wakes at 6:15." },
  { src: "/trial/a2-w1-p2.jpg", labelZh: "图 2", labelEn: "She eats bread and milk." },
  { src: "/trial/a2-w1-p3.jpg", labelZh: "图 3", labelEn: "Dad waves goodbye." },
];

export function hasTalkingStory(level: string, weekNumber: number): boolean {
  return (
    (level === "A2" && (weekNumber === 0 || weekNumber === 1)) ||
    (level === "B1" && weekNumber === 0) ||
    (level === "SEC" && weekNumber === 0)
  );
}

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  if (!story) return null;

  const playWithSound = async () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = false;
    el.volume = 1;
    try {
      await el.play();
      setStarted(true);
    } catch {
      setStarted(true);
    }
  };

  return (
    <div className="mb-8 bg-card border border-line rounded-xl overflow-hidden">
      <div className="relative bg-paper-2">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={story.poster}
          className="w-full"
          style={{ maxHeight: "420px" }}
          onPlay={() => setStarted(true)}
        >
          <source src={story.video} type="video/mp4" />
        </video>
        {!started && (
          <button
            type="button"
            onClick={playWithSound}
            className="absolute inset-0 flex flex-col items-center justify-center bg-ink/35 text-paper"
          >
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-ink text-2xl">
              ▶
            </span>
            <span className="mt-3 text-sm font-semibold">点击播放 · 开声音跟读</span>
          </button>
        )}
      </div>
      <div className="px-5 py-4">
        <p className="text-sm text-ink leading-relaxed">{story.captionZh}</p>
        <p className="mt-1 text-sm font-medium text-ink-2" lang="en">
          {story.captionEn}
        </p>
      </div>
    </div>
  );
}
