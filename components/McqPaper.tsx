"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Paper } from "@/lib/curriculum/types";
import { SKILL_LABEL_ZH } from "@/lib/curriculum/types";
import { estimateCes } from "@/lib/curriculum/thresholds";
import { ERROR_MATRIX } from "@/lib/curriculum/errors";
import { OAS_LETTERS } from "@/lib/curriculum/mocks";

const STORAGE_PREFIX = "sge-paper-";

export type PaperResult = {
  id: string;
  titleZh: string;
  percent: number;
  ces: number | null;
  targetCes: number | null;
  date: string;
  wrong: string[];
};

export function loadPaperResult(id: string): PaperResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + id);
    return raw ? (JSON.parse(raw) as PaperResult) : null;
  } catch {
    return null;
  }
}

export default function McqPaper({
  paper,
  timed,
}: {
  paper: Paper;
  timed?: boolean;
}) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => paper.items.map(() => null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(paper.minutes * 60);
  const [running, setRunning] = useState(Boolean(timed));
  const [needAll, setNeedAll] = useState(false);

  useEffect(() => {
    if (!running || submitted) return;
    const t = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [running, submitted]);

  useEffect(() => {
    if (timed && secondsLeft === 0 && !submitted) {
      setSubmitted(true);
      setRunning(false);
    }
  }, [secondsLeft, submitted, timed]);

  const totalCorrect = answers.filter((a, i) => a === paper.items[i].correct).length;
  const percent = Math.round((totalCorrect / paper.items.length) * 100);
  const ces =
    paper.subject === "math" || paper.targetCes == null
      ? null
      : estimateCes(percent, paper.track);

  const wrongErrors = useMemo(() => {
    const ids = paper.items
      .filter((_, i) => answers[i] !== paper.items[i].correct)
      .map((it) => it.errorId);
    return ERROR_MATRIX.filter((e) => ids.includes(e.id));
  }, [answers, paper.items]);

  useEffect(() => {
    if (!submitted) return;
    const result: PaperResult = {
      id: paper.id,
      titleZh: paper.titleZh,
      percent,
      ces,
      targetCes: paper.targetCes,
      date: new Date().toISOString(),
      wrong: wrongErrors.map((e) => e.id),
    };
    try {
      localStorage.setItem(STORAGE_PREFIX + paper.id, JSON.stringify(result));
    } catch {
      /* ignore */
    }
  }, [submitted, paper.id, paper.titleZh, paper.targetCes, percent, ces, wrongErrors]);

  const mm = Math.floor(secondsLeft / 60);
  const ss = String(secondsLeft % 60).padStart(2, "0");

  if (submitted) {
    const met =
      paper.targetCes == null || ces == null ? null : ces >= paper.targetCes;
    return (
      <div className="space-y-6">
        <div className="bg-card border border-line rounded-2xl p-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            摸底结果
          </p>
          <h2 className="font-serif text-2xl font-semibold mb-2">
            {totalCorrect} / {paper.items.length} · {percent}%
          </h2>
          {ces != null && (
            <p className="text-ink-2 mb-2">
              大约 CES <strong className="text-ink">{ces}</strong>
              {paper.targetCes != null && (
                <>
                  {" "}
                  · 目标 {paper.targetCes} ·{" "}
                  <span className={met ? "text-accent font-semibold" : "text-warn-ink font-semibold"}>
                    {met ? "到了我们的目标" : "还差一点"}
                  </span>
                </>
              )}
            </p>
          )}
          <p className="text-sm text-muted">用来排课。正式分数以成绩单为准。</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif font-semibold text-lg">逐题对照</h3>
          {paper.items.map((item, i) => {
            const picked = answers[i];
            const ok = picked === item.correct;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl p-5 ${
                  ok ? "border-accent/40 bg-accent/5" : "border-warn-ink/30 bg-warn-bg"
                }`}
              >
                <p className="text-xs font-semibold text-accent mb-2">
                  {i + 1} / {paper.items.length}
                  {item.skill ? ` · ${SKILL_LABEL_ZH[item.skill]}` : ""}
                  {ok ? " · 对" : " · 错"}
                </p>
                <p className="text-ink mb-3 leading-relaxed whitespace-pre-line">{item.prompt}</p>
                <ul className="text-sm space-y-1 mb-3">
                  {item.options.map((opt, oi) => {
                    const mark =
                      oi === item.correct
                        ? "✓"
                        : picked === oi
                          ? "✗"
                          : "";
                    return (
                      <li
                        key={oi}
                        className={
                          oi === item.correct
                            ? "text-ink font-semibold"
                            : picked === oi
                              ? "text-warn-ink"
                              : "text-ink-2"
                        }
                      >
                        {OAS_LETTERS[oi]}. {opt}
                        {mark ? ` ${mark}` : ""}
                      </li>
                    );
                  })}
                </ul>
                <p className="text-sm text-ink-2">{item.why}</p>
              </div>
            );
          })}
        </div>

        {wrongErrors.length > 0 && (
          <div className="bg-card border border-line rounded-2xl p-6">
            <h3 className="font-serif font-semibold text-lg mb-3">母语迁移对照</h3>
            <ul className="space-y-3 text-sm">
              {wrongErrors.map((e) => (
                <li key={e.id}>
                  <p className="font-semibold text-ink">{e.mandarin}</p>
                  <p className="text-ink-2">
                    ✗ {e.wrong} → ✓ {e.right}
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/curriculum/errors" className="inline-block mt-4 text-sm text-accent font-semibold">
              打开完整错误矩阵
            </Link>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link
            href="/curriculum/tracker"
            className="px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold"
          >
            记入成绩表
          </Link>
          <button
            type="button"
            className="px-5 py-2.5 border border-accent rounded-full font-semibold"
            onClick={() => {
              setAnswers(paper.items.map(() => null));
              setSubmitted(false);
              setNeedAll(false);
              setSecondsLeft(paper.minutes * 60);
              setRunning(Boolean(timed));
            }}
          >
            重做
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {timed && (
        <div className="sticky top-14 z-20 mb-6 bg-card border border-line rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-ink-2">剩余时间</span>
          <span className={`font-serif text-xl font-semibold ${secondsLeft < 60 ? "text-warn-ink" : "text-ink"}`}>
            {mm}:{ss}
          </span>
        </div>
      )}

      <div className="space-y-5 mb-8">
        {paper.items.map((item, i) => (
          <div key={item.id} className="bg-card border border-line rounded-2xl p-5">
            <p className="text-xs font-semibold text-accent mb-2">
              {i + 1} / {paper.items.length}
              {item.skill ? ` · ${SKILL_LABEL_ZH[item.skill]}` : ""}
            </p>
            <p className="text-ink mb-3 leading-relaxed whitespace-pre-line">
              {item.highlight
                ? item.prompt.split(item.highlight).map((chunk, ci, arr) => (
                    <span key={ci}>
                      {chunk}
                      {ci < arr.length - 1 && <u className="font-semibold decoration-2">{item.highlight}</u>}
                    </span>
                  ))
                : item.prompt}
            </p>
            <div className="space-y-2">
              {item.options.map((opt, oi) => (
                <label
                  key={oi}
                  className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer ${
                    answers[i] === oi ? "border-accent bg-accent/5" : "border-line hover:border-accent/50"
                  }`}
                >
                  <input
                    type="radio"
                    name={item.id}
                    checked={answers[i] === oi}
                    onChange={() => {
                      const next = [...answers];
                      next[i] = oi;
                      setAnswers(next);
                    }}
                    className="mt-0.5 accent-[var(--color-accent)]"
                  />
                  <span className="text-ink-2">
                    <span className="font-semibold mr-2">{OAS_LETTERS[oi]}.</span>
                    {opt}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {needAll && (
        <p className="text-center text-sm text-warn-ink mb-3">还有题目没选。请全部完成后再交卷。</p>
      )}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => {
            if (answers.some((a) => a === null)) {
              setNeedAll(true);
              return;
            }
            setNeedAll(false);
            setSubmitted(true);
            setRunning(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-8 py-3 bg-accent text-accent-ink rounded-full font-semibold"
        >
          交卷
        </button>
      </div>
    </div>
  );
}
