import type { McqItem, McqSkill } from "./types";

const DUMMY = new Set(["—", "-", "–", "——", "no option"]);

export function q(
  id: string,
  prompt: string,
  options: string[],
  correct: number,
  errorId: string,
  why: string,
  skill: McqSkill,
  highlight?: string
): McqItem {
  if (options.length !== 4) {
    throw new Error(`${id}: need 4 options, got ${options.length}`);
  }
  if (correct < 0 || correct > 3) {
    throw new Error(`${id}: correct index ${correct} out of range`);
  }
  if (options.some((o) => !String(o).trim() || DUMMY.has(String(o).trim()))) {
    throw new Error(`${id}: dummy or empty option`);
  }
  if (new Set(options).size !== 4) {
    throw new Error(`${id}: duplicate options`);
  }
  if (!why.trim()) {
    throw new Error(`${id}: missing why`);
  }
  return { id, prompt, options, correct, errorId, why, skill, highlight };
}

/** Spread items across skills so a short placement slice is not all grammar. */
export function balancedSlice(items: McqItem[], n: number): McqItem[] {
  if (n >= items.length) return items.slice();
  const buckets = new Map<string, McqItem[]>();
  for (const it of items) {
    const key = it.skill ?? "other";
    const arr = buckets.get(key) ?? [];
    arr.push(it);
    buckets.set(key, arr);
  }
  const keys = [...buckets.keys()];
  const out: McqItem[] = [];
  let i = 0;
  while (out.length < n) {
    const key = keys[i % keys.length];
    const bucket = buckets.get(key);
    if (bucket && bucket.length) {
      out.push(bucket.shift()!);
    }
    i++;
    if (i > n * keys.length + 8) break;
  }
  return out;
}
