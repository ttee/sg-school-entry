export interface Skill {
  id: string;
  labelZh: string;
  weekLabel: string;
  weekNumber: number;
}

export interface DrillItem {
  question: string;
  options: string[];
  correctIndex: number;
  whyWrong: string[];
}

export interface SkillDrill {
  skillId: string;
  items: DrillItem[];
}

export const skills: Skill[] = [
  {
    id: "skill-articles",
    labelZh: "冠词 a / an / the",
    weekLabel: "试学周",
    weekNumber: 0,
  },
  {
    id: "skill-prep-place",
    labelZh: "地点介词 in / at / near",
    weekLabel: "试学周",
    weekNumber: 0,
  },
  {
    id: "skill-present-simple",
    labelZh: "现在时第三人称 -s",
    weekLabel: "第 1 周",
    weekNumber: 1,
  },
  {
    id: "skill-interrogative-what-time",
    labelZh: "疑问句 What time…?",
    weekLabel: "第 1 周",
    weekNumber: 1,
  },
  {
    id: "skill-genitive",
    labelZh: "所有格 's",
    weekLabel: "第 1 周",
    weekNumber: 1,
  },
  {
    id: "skill-present-continuous",
    labelZh: "现在进行时",
    weekLabel: "第 2 周",
    weekNumber: 2,
  },
  {
    id: "skill-past-simple",
    labelZh: "一般过去时",
    weekLabel: "第 3 周",
    weekNumber: 3,
  },
  {
    id: "skill-quantifiers",
    labelZh: "可数与不可数",
    weekLabel: "第 4 周",
    weekNumber: 4,
  },
  {
    id: "skill-comparatives",
    labelZh: "比较级和最高级",
    weekLabel: "第 5 周",
    weekNumber: 5,
  },
  {
    id: "skill-prep-time",
    labelZh: "时间介词 at / in / on",
    weekLabel: "第 6 周",
    weekNumber: 6,
  },
  {
    id: "skill-going-to",
    labelZh: "打算 going to",
    weekLabel: "第 7 周",
    weekNumber: 7,
  },
  {
    id: "skill-classroom",
    labelZh: "课堂 can / must",
    weekLabel: "第 8 周",
    weekNumber: 8,
  },
];

export const drills: SkillDrill[] = [
  {
    skillId: "skill-articles",
    items: [
      {
        question: "Mei lost ____ water bottle.",
        options: ["a", "an", "the", "some"],
        correctIndex: 0,
        whyWrong: [
          "第一次说到这个水壶用 a。",
          "water 不是元音，不用 an。",
          "还没指明是哪一个，不用 the。",
          "some 不用于一个可数名词。",
        ],
      },
      {
        question: "Auntie Tan wears ____ pink polo shirt.",
        options: ["a", "an", "the", "some"],
        correctIndex: 0,
        whyWrong: [
          "第一次说衣服用 a。pink 不是元音。",
          "pink 不是元音。",
          "第一次说衣服用 a。",
          "第一次说衣服用 a。",
        ],
      },
      {
        question: "Yes, that is ____ white water bottle!",
        options: ["a", "an", "the", "(不加)"],
        correctIndex: 2,
        whyWrong: [
          "已经认出来的那个水壶用 the。",
          "已经认出来的那个水壶用 the。",
          "已经认出来的那个水壶用 the。",
          "已经认出来的那个水壶用 the。",
        ],
      },
      {
        question: "Mei wrote ____ email to her cousin.",
        options: ["a", "an", "the", "some"],
        correctIndex: 1,
        whyWrong: [
          "email 是元音开头，第一次说用 an。",
          "email 是元音开头，第一次说用 an。",
          "email 是元音开头，第一次说用 an。",
          "email 是元音开头，第一次说用 an。",
        ],
      },
      {
        question: "They walked to ____ Lost and Found office.",
        options: ["a", "an", "the", "(不加)"],
        correctIndex: 2,
        whyWrong: [
          "学校里大家知道的失物招领处用 the。",
          "学校里大家知道的失物招领处用 the。",
          "学校里大家知道的失物招领处用 the。",
          "学校里大家知道的失物招领处用 the。",
        ],
      },
      {
        question: "There is ____ big sign on the wall.",
        options: ["a", "an", "the", "some"],
        correctIndex: 0,
        whyWrong: [
          "第一次说这块牌子用 a。big 不是元音。",
          "big 不是元音。",
          "第一次说这块牌子用 a。",
          "第一次说这块牌子用 a。",
        ],
      },
    ],
  },
  {
    skillId: "skill-present-simple",
    items: [
      {
        question: "Mei ____ up at 6:15 every Monday.",
        options: ["wake", "wakes", "waking", "waked"],
        correctIndex: 1,
        whyWrong: [
          "主语 Mei 是第三人称单数，动词要加 -s。",
          "第三人称单数现在时：wakes（wake + s）。",
          "waking 是进行时，这里说每周一的习惯。",
          "waked 不是正确形式，wake 的过去式是 woke。",
        ],
      },
      {
        question: "She ____ breakfast with her family.",
        options: ["eat", "eats", "eating", "ate"],
        correctIndex: 1,
        whyWrong: [
          "主语 She 是第三人称单数，要用 eats。",
          "第三人称单数现在时：eats（eat + s）。",
          "eating 是进行时，不是一般现在时。",
          "ate 是过去时，这里说习惯用现在时。",
        ],
      },
      {
        question: "Her mum ____ her a packed lunch.",
        options: ["give", "gives", "giving", "gave"],
        correctIndex: 1,
        whyWrong: [
          "主语 mum 是第三人称单数，要用 gives。",
          "第三人称单数现在时：gives（give + s）。",
          "giving 是进行时形式。",
          "gave 是过去时，这里说习惯。",
        ],
      },
      {
        question: "Mei ____ her teeth and puts on her uniform.",
        options: ["brush", "brushes", "brushing", "brushed"],
        correctIndex: 1,
        whyWrong: [
          "主语 Mei 是第三人称单数，要用 brushes。",
          "第三人称单数现在时：brushes（brush + es）。",
          "brushing 是进行时。",
          "brushed 是过去时。",
        ],
      },
      {
        question: "The school bell ____ at eight o'clock.",
        options: ["ring", "rings", "ringing", "rang"],
        correctIndex: 1,
        whyWrong: [
          "主语 bell 是第三人称单数，要用 rings。",
          "第三人称单数现在时：rings（ring + s）。",
          "ringing 是进行时。",
          "rang 是过去时。",
        ],
      },
      {
        question: "She ____ her homework every evening.",
        options: ["do", "does", "doing", "did"],
        correctIndex: 1,
        whyWrong: [
          "主语 She 是第三人称单数，要用 does。",
          "第三人称单数现在时：does（特殊变化）。",
          "doing 是进行时。",
          "did 是过去时。",
        ],
      },
      {
        question: "Mei's dad ____ her to school by car.",
        options: ["drive", "drives", "driving", "drove"],
        correctIndex: 1,
        whyWrong: [
          "主语 dad 是第三人称单数，要用 drives。",
          "第三人称单数现在时：drives（drive + s）。",
          "driving 是进行时。",
          "drove 是过去时。",
        ],
      },
      {
        question: "The teacher ____ the door at half past eight.",
        options: ["close", "closes", "closing", "closed"],
        correctIndex: 1,
        whyWrong: [
          "主语 teacher 是第三人称单数，要用 closes。",
          "第三人称单数现在时：closes（close + s）。",
          "closing 是进行时。",
          "closed 是过去时。",
        ],
      },
      {
        question: "Every Monday morning, Mei ____ ready for school.",
        options: ["get", "gets", "getting", "got"],
        correctIndex: 1,
        whyWrong: [
          "主语 Mei 是第三人称单数，要用 gets。",
          "第三人称单数现在时：gets（get + s）。",
          "getting 是进行时。",
          "got 是过去时。",
        ],
      },
      {
        question: "She ____ goodbye to her mum before leaving.",
        options: ["say", "says", "saying", "said"],
        correctIndex: 1,
        whyWrong: [
          "主语 She 是第三人称单数，要用 says。",
          "第三人称单数现在时：says（say → says）。",
          "saying 是进行时。",
          "said 是过去时。",
        ],
      },
    ],
  },
  {
    skillId: "skill-classroom",
    items: [
      {
        question: "Students ____ bring their water bottles to PE.",
        options: ["can", "must", "could", "might"],
        correctIndex: 1,
        whyWrong: [
          "can 表示可以，不是规定。",
          "must 表示必须，体育课必须带水杯。",
          "could 表示过去的能力或可能。",
          "might 表示可能，不是规定。",
        ],
      },
      {
        question: "You ____ ask questions if you don't understand.",
        options: ["can", "must", "may", "should"],
        correctIndex: 0,
        whyWrong: [
          "can 表示可以/能够，鼓励学生提问。",
          "must 太强硬，不是必须提问。",
          "may 太正式，一般用 can。",
          "should 表示应该，can 更合适表示允许。",
        ],
      },
      {
        question: "Students ____ wear their lab coats in Science class.",
        options: ["can", "must", "could", "may"],
        correctIndex: 1,
        whyWrong: [
          "can 表示可以，但这是安全规定。",
          "must 表示必须，实验课必须穿实验服。",
          "could 表示可能，不是规定。",
          "may 表示可能，不够强。",
        ],
      },
      {
        question: "You ____ run in the corridor. Walk slowly.",
        options: ["can", "must", "can't", "must not"],
        correctIndex: 3,
        whyWrong: [
          "can 是肯定，但学校不允许跑。",
          "must 是必须跑，意思反了。",
          "can't 表示不能，但 must not 更强调禁止。",
          "must not 表示禁止，走廊不准跑。",
        ],
      },
      {
        question: "Students ____ finish their homework by Friday.",
        options: ["can", "must", "could", "might"],
        correctIndex: 1,
        whyWrong: [
          "can 表示能够，但这是要求。",
          "must 表示必须，周五前必须交作业。",
          "could 表示可能，不是要求。",
          "might 表示也许，不是要求。",
        ],
      },
      {
        question: "You ____ use the library computers for research.",
        options: ["can", "must", "should", "may"],
        correctIndex: 0,
        whyWrong: [
          "can 表示可以，学生可以用图书馆电脑。",
          "must 是必须，不是规定要用。",
          "should 是应该，can 更合适表示允许。",
          "may 太正式，通常用 can。",
        ],
      },
      {
        question: "During exams, you ____ talk to other students.",
        options: ["can", "must", "can't", "must not"],
        correctIndex: 3,
        whyWrong: [
          "can 是可以，但考试不允许说话。",
          "must 是必须，意思反了。",
          "can't 表示不能，但 must not 更强调禁止。",
          "must not 表示严格禁止，考试不准说话。",
        ],
      },
      {
        question: "You ____ bring a calculator to Maths class.",
        options: ["can", "must", "should", "may"],
        correctIndex: 0,
        whyWrong: [
          "can 表示可以，学生可以带计算器。",
          "must 是必须，通常不是规定。",
          "should 是应该，can 表示允许更合适。",
          "may 太正式，通常用 can。",
        ],
      },
      {
        question: "Students ____ arrive at school before 8:00 AM.",
        options: ["can", "must", "could", "might"],
        correctIndex: 1,
        whyWrong: [
          "can 表示可以，但这是学校规定。",
          "must 表示必须，学校要求 8 点前到。",
          "could 表示可能，不是规定。",
          "might 表示也许，不是规定。",
        ],
      },
      {
        question: "If you are sick, you ____ go to the nurse's office.",
        options: ["can", "must", "should", "may"],
        correctIndex: 0,
        whyWrong: [
          "can 表示可以，学生可以去医务室。",
          "must 是必须，不是每次都必须去。",
          "should 是应该，但 can 表示允许更好。",
          "may 太正式，通常用 can。",
        ],
      },
    ],
  },
];
