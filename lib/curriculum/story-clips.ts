export type LessonClip = {
  src: string;
  poster?: string;
  titleZh: string;
  captionEn: string;
};

const V = "sg1";

function clip(n: number, captionEn: string, titleZh = "先看"): LessonClip {
  return {
    src: `/curriculum/stories/${n}.mp4?v=${V}`,
    poster: `/curriculum/stories/${n}.jpg`,
    titleZh,
    captionEn,
  };
}

/** Trial Lost and Found stays the two locked shots. */
const CLIPS: Record<number, LessonClip[]> = {
  1: [
    clip(
      1,
      "Ms Tan: Good morning, class.  Mei: Good morning, Ms Tan.  Priya: Where do we line up?  Mei: I am in Blue House.",
    ),
  ],
  2: [
    {
      src: "/trial/a2-w0-setup.mp4?v=sg1",
      poster: "/trial/a2-w0-setup.jpg",
      titleZh: "先看：走廊",
      captionEn:
        "Mei: Oh no! Where is my water bottle? I cannot find it.  Priya: Let's go to the Lost and Found.",
    },
    {
      src: "/trial/a2-w0-counter.mp4?v=sg1",
      poster: "/trial/a2-w0-counter.jpg",
      titleZh: "再看：柜台",
      captionEn:
        "Aunty Tan: Is this your white water bottle with the pink flower?  Mei: Yes, Aunty! That is my white water bottle!  Priya: Wow, that's great!  Mei: We found it!  Mei: Thank you, Aunty!",
    },
  ],
  3: [
    clip(
      3,
      "Mei: Can I borrow a pencil, please?  Priya: Yes. Here you are.  Mei: Thank you.",
    ),
  ],
  5: [
    clip(
      5,
      "Ms Tan: Line up quickly. Do not run. Leave your bags.",
    ),
  ],
  6: [
    clip(
      6,
      "Mei: Where are the picture books? I would like to borrow this. When must I return it?",
    ),
  ],
  13: [
    clip(
      13,
      "Mei: It leaked because I dropped it.  Priya: Let's go to the Lost and Found.  Mei: I will buy a new one.",
    ),
  ],
  14: [
    clip(
      14,
      "Mei: How much is this workbook? I have ten dollars.  Aunty Tan: Here is your change.",
    ),
  ],
  16: [
    clip(
      16,
      "Mei: I would like chicken rice, please. Is it spicy?  Priya: Can we share a table?",
    ),
  ],
  20: [
    clip(
      20,
      "Mei: We need a loaf of bread. How much are the eggs?  Aunty: Please pack them.",
    ),
  ],
  31: [
    clip(
      31,
      "Priya: Would you like a biscuit?  Mei: No, thank you.  Priya: Maybe later.",
    ),
  ],
  56: [
    clip(
      56,
      "PA: PE is cancelled. Meet at the hall at 7:50. Bring your water bottle.",
    ),
  ],
  63: [
    clip(
      63,
      "Mei: I feel nervous.  Priya: Let's breathe slowly. You are ready.",
    ),
  ],
  4: [
    clip(
      4,
      "Mei: What do you think?  Priya: I agree because it is fair.  Mei: Shall we try this?",
    ),
  ],
  7: [
    clip(
      7,
      "Mei: I prefer basketball to art.  Priya: Why do you like it?  Mei: Let's try both.",
    ),
  ],
  8: [
    clip(
      8,
      "Ms Tan: Mei has been working hard. She still needs help with articles.  Priya: How can we practise at home?",
    ),
  ],
  12: [
    clip(
      12,
      "Mei: Priya was faster than me. Come on, Blue House!  Priya: It was the best race.",
    ),
  ],
  22: [
    clip(
      22,
      "Mei: Shall we go on Sunday?  Priya: Why don't we take the MRT?  Mei: Let's leave at nine.",
    ),
  ],
  30: [
    clip(
      30,
      "Priya: Have you been here long? Come with me to the canteen. You can sit here.",
    ),
  ],
  38: [
    clip(
      38,
      "Mei: Which platform is it?  PA: Please mind the gap.  Priya: We alight at Bedok.",
    ),
  ],
  42: [
    clip(
      42,
      "Mei: I have a sore throat.  Priya: You should rest.",
    ),
  ],
  78: [
    clip(
      78,
      "PA: Please mind the gap. Please let passengers alight first. Doors closing. Please stand clear.",
    ),
  ],
  80: [
    clip(
      80,
      "PA: PE is cancelled. Please proceed to the hall at 7:50. Bring your water bottle.",
    ),
  ],
  81: [
    clip(
      81,
      "Screen: Please take a queue number. Now serving A12. Please wait to be called.",
    ),
  ],
  84: [
    clip(
      84,
      "Mei: Water supply will be disrupted from 9 a.m. to 5 p.m.  Priya: Please store some water.",
    ),
  ],
  18: [
    clip(
      18,
      "Mei: We are going to visit Ah Ma. First we clean the house. Gong Xi Fa Cai.",
    ),
  ],
  21: [
    clip(
      21,
      "Mei: Excuse me, the lift is not working.  Neighbour: We have to take the stairs to the twelfth storey.  Mei: Our unit is 12-345.",
    ),
  ],
  41: [
    clip(
      41,
      "Mei: We could hear the drums.  Priya: The flag went up.  Mei: It was unforgettable.",
    ),
  ],
  43: [
    clip(
      43,
      "Ms Tan: Paper is recycled in the blue bin.  Mei: We should reduce waste.  Priya: Put cans here.",
    ),
  ],
  45: [
    clip(
      45,
      "Mei: There are many lights.  Priya: The street looks beautiful.  Mei: We respect this festival.",
    ),
  ],
  82: [
    clip(
      82,
      "Staff: Please register at the counter. Please have your NRIC ready. Visiting hours are from 12 p.m. to 8 p.m.",
    ),
  ],
};

export function lessonClips(n: number): LessonClip[] {
  return CLIPS[n] ?? [];
}

export function setLessonClip(n: number, clips: LessonClip[]) {
  CLIPS[n] = clips;
}
