/**
 * Locked primary-school cast. Canonical faces are the two girls in
 * /trial/A2/1 (`public/trial/a2-w1-ask.jpg` / `a2-w1-form.mp4`).
 * Every primary clip (A2, B1, MATH stories) must reuse these faces.
 *
 * Voices: Singapore English (edge-tts en-SG), standard grammar (no lah/ah).
 * Mei and Priya are pitch-shifted to a 6–7-year-old girl range.
 */
export const TRIAL_CAST = {
  mei: {
    name: "Mei",
    look: "short black bob with straight fringe, no clip, pink backpack, navy pinafore, white polo, white socks, black Mary Janes, painterly A2/1 face",
    voice: "en-SG-LunaNeural",
    age: "6-7",
    lockFrame: "/trial/a2-w1-form.jpg",
  },
  priya: {
    name: "Priya",
    look: "long black ponytail with a small blue hair tie, slightly tanner, blue backpack, same navy pinafore, painterly A2/1 face",
    voice: "en-SG-LunaNeural",
    age: "6-7",
    lockFrame: "/trial/a2-w1-ask.jpg",
  },
  auntieTan: {
    name: "Auntie Tan",
    look: "curly grey hair, glasses, pink polo, gold nametag, Lost and Found counter",
    voice: "en-SG-LunaNeural",
    age: "adult",
  },
  wei: {
    name: "Wei",
    look: "Singapore secondary boy, white shirt, navy shorts",
    voice: "en-SG-WayneNeural",
    age: "teen",
  },
  aisha: {
    name: "Aisha",
    look: "Singapore secondary girl, white shirt, navy hijab",
    voice: "en-SG-LunaNeural",
    age: "teen",
  },
} as const;

export type TrialCastId = keyof typeof TRIAL_CAST;
