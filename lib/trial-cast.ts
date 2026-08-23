/**
 * Locked trial cast. Every new clip must reuse these faces and voices.
 * Faces come from the original painterly 微课 (`public/video/a2-w0.mp4`, `a2-w1.mp4`, `b1-w0.mp4`).
 */
export const TRIAL_CAST = {
  mei: {
    name: "Mei",
    look: "neck-length straight black hair with fringe, no clip, navy pinafore, school bag, P2",
    voice: "ara",
  },
  priya: {
    name: "Priya",
    look: "dark ponytail with colorful ribbon, navy pinafore, biscuit in corridor scene",
    voice: "eve",
  },
  auntieTan: {
    name: "Auntie Tan",
    look: "curly grey hair, glasses, pink polo, gold nametag, Lost and Found counter",
    voice: "luna",
  },
  wei: {
    name: "Wei",
    look: "Singapore secondary boy, white shirt, navy shorts",
    voice: "leo",
  },
  aisha: {
    name: "Aisha",
    look: "Singapore secondary girl, white shirt, navy hijab",
    voice: "iris",
  },
} as const;

export type TrialCastId = keyof typeof TRIAL_CAST;
