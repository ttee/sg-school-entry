"use client";

import { useMemo, useRef, useState } from "react";
import McqPaper from "@/components/McqPaper";
import type { StoryLesson } from "@/lib/curriculum/story-lesson";

function PlayLine({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [missing, setMissing] = useState(false);
  const [playing, setPlaying] = useState(false);
  if (missing) {
    return (
      <span className="text-xs text-muted">家长先读给孩子听</span>
    );
  }
  return (
    <>
      <audio
        ref={ref}
        src={src}
        preload="none"
        onError={() => setMissing(true)}
        onEnded={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={() => {
          const el = ref.current;
          if (!el) return;
          void el.play().then(() => setPlaying(true)).catch(() => setMissing(true));
        }}
        className="px-3 py-1.5 rounded-full bg-accent text-accent-ink text-sm font-semibold"
      >
        {playing ? "…" : "听"} {label}
      </button>
    </>
  );
}

function ContrastDrill({
  promptZh,
  right,
  wrong,
  whyZh,
}: {
  promptZh: string;
  right: string;
  wrong: string;
  whyZh: string;
}) {
  const [pick, setPick] = useState<"right" | "wrong" | null>(null);
  const order = useMemo(
    () => (promptZh.length % 2 === 0 ? (["right", "wrong"] as const) : (["wrong", "right"] as const)),
    [promptZh],
  );
  return (
    <div className="border border-line rounded-xl p-4 space-y-2">
      <p className="text-sm text-ink-2">{promptZh}</p>
      {order.map((k) => {
        const text = k === "right" ? right : wrong;
        const chosen = pick === k;
        const show = pick != null;
        return (
          <button
            key={k}
            type="button"
            onClick={() => setPick(k)}
            className={`block w-full text-left px-3 py-2 rounded-lg border text-sm ${
              !show
                ? "border-line hover:border-accent"
                : k === "right"
                  ? "border-accent bg-accent/5"
                  : chosen
                    ? "border-warn-ink bg-warn-bg"
                    : "border-line text-muted"
            }`}
            lang="en"
          >
            {text}
          </button>
        );
      })}
      {pick != null && (
        <p className={`text-sm ${pick === "right" ? "text-accent" : "text-warn-ink"}`}>
          {pick === "right" ? "对。" : "再听一遍对的那句。"} {whyZh}
        </p>
      )}
    </div>
  );
}

function MeaningDrill({
  situationZh,
  options,
  correct,
  whyZh,
}: {
  situationZh: string;
  options: string[];
  correct: number;
  whyZh: string;
}) {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <div className="border border-line rounded-xl p-4 space-y-2">
      <p className="text-sm text-ink-2">{situationZh}</p>
      {options.map((opt, i) => {
        const show = pick != null;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setPick(i)}
            className={`block w-full text-left px-3 py-2 rounded-lg border text-sm ${
              !show
                ? "border-line hover:border-accent"
                : i === correct
                  ? "border-accent bg-accent/5"
                  : pick === i
                    ? "border-warn-ink bg-warn-bg"
                    : "border-line text-muted"
            }`}
            lang="en"
          >
            {opt}
          </button>
        );
      })}
      {pick != null && (
        <p className={`text-sm ${pick === correct ? "text-accent" : "text-warn-ink"}`}>
          {pick === correct ? "对。你听懂了句型。" : "看情景再选。"} {whyZh}
        </p>
      )}
    </div>
  );
}

function TileDrill({
  promptZh,
  words,
  answer,
}: {
  promptZh: string;
  words: string[];
  answer: string;
}) {
  const [chosen, setChosen] = useState<string[]>([]);
  const [left, setLeft] = useState(words);
  const built = chosen.join(" ");
  const target = answer.replace(/[?!.,]/g, "");
  const done = built.toLowerCase() === target.toLowerCase();
  const tooLong = built.length > target.length + 4;

  return (
    <div className="border border-line rounded-xl p-4">
      <p className="text-sm text-ink-2 mb-3">{promptZh}</p>
      <p className="min-h-10 mb-3 font-medium" lang="en">
        {built || "…"}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        {left.map((w, i) => (
          <button
            key={`${w}-${i}`}
            type="button"
            className="px-3 py-1.5 rounded-full border border-line text-sm hover:border-accent"
            lang="en"
            onClick={() => {
              setChosen((c) => [...c, w]);
              setLeft((arr) => arr.filter((_, j) => j !== i));
            }}
          >
            {w}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          className="text-sm text-accent"
          onClick={() => {
            setChosen([]);
            setLeft(words);
          }}
        >
          重来
        </button>
      </div>
      {done && <p className="mt-2 text-sm text-accent">拼对了。</p>}
      {tooLong && !done && <p className="mt-2 text-sm text-warn-ink">顺序不对。点重来。</p>}
    </div>
  );
}

function SayIt({
  cueZh,
  en,
  audio,
  who,
}: {
  cueZh: string;
  en: string;
  audio: string;
  who: string;
}) {
  const [show, setShow] = useState(false);
  const [said, setSaid] = useState(false);
  return (
    <div className="border border-line rounded-xl p-4 space-y-2">
      <p className="text-xs text-muted">{who}</p>
      <p className="text-sm text-ink-2">{cueZh}</p>
      <div className="flex flex-wrap gap-2">
        <PlayLine src={audio} label="再听" />
        <button
          type="button"
          className="px-3 py-1.5 rounded-full border border-line text-sm"
          onClick={() => setShow(true)}
        >
          显示英文
        </button>
        <button
          type="button"
          className="px-3 py-1.5 rounded-full border border-accent text-sm"
          onClick={() => setSaid(true)}
        >
          我会说了
        </button>
      </div>
      {show && (
        <p className="text-sm font-medium" lang="en">
          {en}
        </p>
      )}
      {said && <p className="text-sm text-accent">记下了。明天还要再说一遍。</p>}
    </div>
  );
}

function WriteCheck({
  promptZh,
  promptEn,
  sample,
  must,
}: {
  promptZh: string;
  promptEn: string;
  sample: string;
  must: { re: string; hintZh: string }[];
}) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const results = must.map((m) => ({
    ...m,
    ok: new RegExp(m.re, "i").test(text),
  }));
  const all = results.every((r) => r.ok);

  return (
    <div className="space-y-3">
      <p className="text-sm text-ink-2">{promptZh}</p>
      <p className="text-sm font-medium" lang="en">
        {promptEn}
      </p>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setChecked(false);
        }}
        rows={4}
        className="w-full bg-paper border border-line rounded-xl p-3 text-sm"
        placeholder={sample}
        lang="en"
      />
      <button
        type="button"
        className="px-4 py-2 rounded-full bg-accent text-accent-ink text-sm font-semibold"
        onClick={() => setChecked(true)}
      >
        检查这句
      </button>
      {checked && (
        <ul className="text-sm space-y-1">
          {results.map((r) => (
            <li key={r.hintZh} className={r.ok ? "text-accent" : "text-warn-ink"}>
              {r.ok ? "有了：" : "还没有："}
              {r.hintZh}
            </li>
          ))}
          <li className="text-muted">
            {all
              ? "句型在。这不是老师批改，只查今天这一个点。"
              : `可以参照：${sample}`}
          </li>
        </ul>
      )}
    </div>
  );
}

export default function StoryLessonFlow({ lesson }: { lesson: StoryLesson }) {
  const p = lesson.pedagogy;

  return (
    <div className="space-y-10">
      <p className="text-sm text-ink-2 leading-relaxed">{p.parentHowZh}</p>

      <section className="bg-accent/10 border border-accent/30 rounded-2xl p-5">
        <h2 className="font-serif font-semibold text-lg mb-1">今天会说</h2>
        <p className="text-xs text-muted mb-3">听完跟读。先不要看阅读。</p>
        <ol className="space-y-3">
          {p.today.map((line) => (
            <li key={line.en} className="flex flex-wrap items-center gap-3">
              <PlayLine src={line.audio} label={line.who} />
              <span className="text-sm font-medium" lang="en">
                {line.en}
              </span>
              <span className="text-xs text-ink-2">{line.cueZh}</span>
            </li>
          ))}
        </ol>
      </section>

      {p.clips.length > 0 && (
        <section>
          <h2 className="font-serif font-semibold text-lg mb-3">先看嘴</h2>
          <div className="space-y-4">
            {p.clips.map((clip) => (
              <div key={clip.src} className="bg-card border border-line rounded-2xl overflow-hidden">
                <p className="px-4 pt-3 text-sm font-semibold">{clip.titleZh}</p>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={clip.poster}
                  className="w-full mt-2"
                  style={{ maxHeight: 380 }}
                >
                  <source src={clip.src} type="video/mp4" />
                </video>
                <p className="px-4 py-3 text-sm text-ink-2" lang="en">
                  {clip.captionEn}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">听懂再选</h2>
        <p className="text-sm text-ink-2 mb-3">
          语法要帮你听懂意思。不要靠「看起来像错的英文」。
        </p>
        <div className="space-y-3">
          {p.meaning.map((m) => (
            <MeaningDrill key={m.id} {...m} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">对还是错</h2>
        <p className="text-sm text-ink-2 mb-3">中国孩子常直译的那一句，对上学校里要说的一句。</p>
        <div className="space-y-3">
          {p.contrasts.map((c) => (
            <ContrastDrill key={c.id} {...c} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">{p.teach.titleZh}</h2>
        <p className="text-sm text-ink-2 mb-3">{p.teach.ruleZh}</p>
        <p className="text-sm font-medium mb-4" lang="en">
          {p.teach.ruleEn}
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <div className="border border-warn-ink/30 bg-warn-bg/40 rounded-xl p-4 text-sm">
            <p className="text-xs font-semibold text-warn-ink mb-1">不要这样说</p>
            <p lang="en">{p.teach.wrong}</p>
          </div>
          <div className="border border-accent/40 bg-accent/5 rounded-xl p-4 text-sm">
            <p className="text-xs font-semibold text-accent mb-1">要这样说</p>
            <p lang="en">{p.teach.right}</p>
          </div>
        </div>
        <ul className="list-disc pl-5 text-sm text-ink-2 space-y-1">
          {p.teach.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">同一句型，换词</h2>
        <p className="text-sm text-ink-2 mb-3">只换名词或动词。耳朵要听熟这个框。</p>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm" lang="en">
          {p.frames.map((f) => (
            <li key={f} className="bg-card border border-line rounded-lg px-3 py-2">
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">拼出句子</h2>
        <TileDrill {...p.tiles} />
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">开口：跟读 / 分角色</h2>
        {lesson.dialogueScene && (
          <p className="text-sm text-muted mb-3">{lesson.dialogueScene}</p>
        )}
        <div className="space-y-2 text-sm mb-4">
          {lesson.dialogue.map((l, i) => (
            <p key={`${l.who}-${i}`}>
              <strong>{l.who}:</strong> <span lang="en">{l.say}</span>
            </p>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">现在才读</h2>
        <p className="text-sm text-ink-2 mb-3">词你已经听过。短文只是把同样的话放进场景。</p>
        <div className="bg-card border border-line rounded-2xl p-5 text-sm leading-relaxed whitespace-pre-wrap">
          {lesson.reading}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-3">词汇（会用）</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card">
            <thead className="bg-accent/5">
              <tr>
                <th className="text-left px-3 py-2">词</th>
                <th className="text-left px-3 py-2">例句</th>
                <th className="text-left px-3 py-2">家长怎么讲</th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocab.map((row) => (
                <tr key={row.word} className="border-t border-line align-top">
                  <td className="px-3 py-2 font-semibold whitespace-nowrap">{row.word}</td>
                  <td className="px-3 py-2" lang="en">
                    {row.example}
                  </td>
                  <td className="px-3 py-2 text-ink-2">{row.noteZh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-lg mb-2">练习</h2>
        <p className="text-sm text-ink-2 mb-4">五题。必须用句型才能选对。</p>
        <McqPaper paper={lesson.paper} kind="lesson" />
      </section>

      <section className="bg-card border border-accent/40 rounded-2xl p-5">
        <h2 className="font-serif font-semibold text-lg mb-2">说出来（先不看英文）</h2>
        <p className="text-sm text-ink-2 mb-3">家长只给中文情景。孩子说英语。卡住再点「听」。</p>
        <div className="space-y-3">
          {p.today.map((line) => (
            <SayIt key={`say-${line.en}`} {...line} />
          ))}
        </div>
      </section>

      <section className="bg-card border border-line rounded-2xl p-5">
        <h2 className="font-serif font-semibold text-lg mb-2">写一句</h2>
        <WriteCheck {...p.write} />
      </section>
    </div>
  );
}
