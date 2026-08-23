"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type StoryKey = "A2-0" | "A2-1" | "B1-0" | "SEC-0";

type Clip = {
  poster: string;
  video: string;
  titleZh: string;
  captionZh: string;
  captionEn: string;
};

type Pair = {
  story: Clip;
  form: Clip;
};

const PAIRS: Record<StoryKey, Pair> = {
  "A2-0": {
    story: {
      poster: "/trial/a2-w0-setup.jpg",
      video: "/trial/a2-w0-setup.mp4?v=twoshot2",
      titleZh: "第 1 段 · 走廊（还没到 Lost & Found）",
      captionZh: "走廊一镜。Mei 找不到水瓶。Priya 说去失物招领。",
      captionEn: "Mei: Oh no! Where is my water bottle? I cannot find it.  Priya: Let's go to the Lost and Found.",
    },
    form: {
      poster: "/trial/a2-w0-counter.jpg",
      video: "/trial/a2-w0-counter.mp4?v=officeshot1",
      titleZh: "第 2 段 · Lost & Found 柜台",
      captionZh: "一镜：两个女孩站在柜台前。Aunty Tan 问，Mei 认领，Aunty 递给她，两人说 We found it，Mei 道谢。",
      captionEn: "Aunty Tan: Is this your white water bottle with the pink flower?  Mei: Yes, Aunty! That is my white water bottle!  Aunty Tan: Here you are. Please take it.  Priya: We found it!  Mei: We found it!  Mei: Thank you, Aunty!",
    },
  },
  "A2-1": {
    story: {
      poster: "/trial/a2-w1-ask.jpg",
      video: "/trial/a2-w1-ask.mp4?v=mouthfill1",
      titleZh: "第 1 段 · 故事",
      captionZh: "校门口。Priya 问。",
      captionEn: "Priya: Mei, good morning. What time do you wake up every Monday morning for school?",
    },
    form: {
      poster: "/trial/a2-w1-form.jpg",
      video: "/trial/a2-w1-form.mp4?v=mouthfill1",
      titleZh: "第 2 段 · 跟读本周句子",
      captionZh: "还是这两个人。Mei 答。",
      captionEn: "Mei: I wake up at six fifteen every Monday. My little sister Jia wakes later, because she goes to kindergarten.",
    },
  },
  "B1-0": {
    story: {
      poster: "/trial/b1-w0-story.jpg",
      video: "/trial/b1-w0-story.mp4?v=mouthfill1",
      titleZh: "第 1 段 · 故事",
      captionZh: "走廊。Priya 说话。",
      captionEn: "Priya: Just ask one question every lesson. That is how you get better here.",
    },
    form: {
      poster: "/trial/b1-w0-form.jpg",
      video: "/trial/b1-w0-form.mp4?v=mouthfill1",
      titleZh: "第 2 段 · 跟读本周句子",
      captionZh: "还是这两个人。Mei 说话。",
      captionEn: "Mei: I have been here for six months. I came last year, and I still study here.",
    },
  },
  "SEC-0": {
    story: {
      poster: "/trial/sec-w0-story.jpg",
      video: "/trial/sec-w0-story.mp4?v=mouthfill1",
      titleZh: "第 1 段 · 故事",
      captionZh: "食堂。两人都拿着托盘。",
      captionEn: "Aisha: The chicken rice looks really good today.  Wei: Yes. Let's sit by the window.",
    },
    form: {
      poster: "/trial/sec-w0-form.jpg",
      video: "/trial/sec-w0-form.mp4?v=mouthfill1",
      titleZh: "第 2 段 · 跟读本周句子",
      captionZh: "英语课。Wei 说话。",
      captionEn: "Wei: Although I was nervous in the paper, I tried my best and I finished every question.",
    },
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

function ClipPlayer({ clip }: { clip: Clip }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

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
    <div className="bg-card border border-line rounded-xl overflow-hidden">
      <p className="px-4 pt-3 text-sm font-semibold text-ink">{clip.titleZh}</p>
      <div className="relative bg-paper-2 mt-2">
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={clip.poster}
          className="w-full"
          style={{ maxHeight: "380px" }}
          onPlay={() => setStarted(true)}
        >
          <source src={clip.video} type="video/mp4" />
        </video>
        {!started && (
          <button
            type="button"
            onClick={playWithSound}
            className="absolute inset-0 flex flex-col items-center justify-center bg-ink/35 text-paper"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink text-xl">
              ▶
            </span>
            <span className="mt-2 text-sm font-semibold">点击播放 · 开声音</span>
          </button>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-sm text-ink leading-relaxed">{clip.captionZh}</p>
        <p className="mt-1 text-sm font-medium text-ink-2" lang="en">
          {clip.captionEn}
        </p>
      </div>
    </div>
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
  const pair = PAIRS[key];
  if (!pair) return null;

  return (
    <div className="mb-8 space-y-4">
      <ClipPlayer clip={pair.story} />
      <ClipPlayer clip={pair.form} />
      <p className="text-xs text-muted px-1">Mei、Priya、Aunty Tan，各人一个声音。</p>
      <div className="bg-accent/10 border border-accent/20 rounded-xl px-4 py-3 text-sm text-ink-2">
        试学可以看故事、跟读、做选择题。写作批改开通后才有。
        {" "}
        <Link href="/#contact" className="text-accent font-semibold hover:text-accent-hover">
          留微信 →
        </Link>
      </div>
    </div>
  );
}
