"use client";

import { useMemo, useState } from "react";
import { WORD_TARGETS } from "@/lib/curriculum/writing";

export default function WordCountBox() {
  const [level, setLevel] = useState<(typeof WORD_TARGETS)[number]["level"]>("S1");
  const [text, setText] = useState("");
  const band = WORD_TARGETS.find((w) => w.level === level)!;
  const count = useMemo(
    () => text.trim().split(/\s+/).filter(Boolean).length,
    [text]
  );
  const ok = count >= band.min && count <= band.max;

  return (
    <div className="bg-card border border-line rounded-2xl p-5">
      <div className="flex flex-wrap gap-2 mb-3">
        {WORD_TARGETS.map((w) => (
          <button
            key={w.level}
            type="button"
            onClick={() => setLevel(w.level)}
            className={
              level === w.level
                ? "px-3 py-1.5 rounded-full bg-accent text-accent-ink text-sm font-semibold"
                : "px-3 py-1.5 rounded-full border border-line text-sm"
            }
          >
            {w.level} {w.min}–{w.max}
          </button>
        ))}
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        className="w-full bg-paper border border-line rounded-xl p-3 text-sm text-ink"
        placeholder="Paste the composition here. Counts English words."
      />
      <p className={`mt-3 text-sm font-semibold ${ok ? "text-accent" : "text-warn-ink"}`}>
        {count} words · target {band.min}–{band.max} · {ok ? "in band" : "outside band"}
      </p>
    </div>
  );
}
