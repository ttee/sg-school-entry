/**
 * Locked trial cast. Every new clip must reuse these faces and voices.
 * Faces come from the original painterly 微课 (`public/video/a2-w0.mp4`, `a2-w1.mp4`, `b1-w0.mp4`).
 *
 * Voices are Singapore English (edge-tts en-SG), Standard grammar (no lah/ah particles).
 * Mei and Priya are pitch-shifted to a 6–7-year-old girl range. See scripts/dub_trial_sg_child.py.
 */
export const TRIAL_CAST = {
  mei: {
    name: "Mei",
    look: "neck-length straight black hair with fringe, no clip, navy pinafore, school bag, P2",
    voice: "en-SG-LunaNeural",
    age: "6-7",
  },
  priya: {
    name: "Priya",
    look: "dark ponytail with colorful ribbon, navy pinafore, biscuit in corridor scene",
    voice: "en-SG-LunaNeural",
    age: "6-7",
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
