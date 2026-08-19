export interface Skill {
  id: string;
  labelZh: string;
  labelEn: string;
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
    labelEn: "articles, demonstratives, possessives",
    weekLabel: "A2 试学周",
    weekNumber: 0,
  },
  {
    id: "skill-present-simple",
    labelZh: "现在时第三人称 -s",
    labelEn: "present simple 3sg -s",
    weekLabel: "A2 Week 1",
    weekNumber: 1,
  },
  {
    id: "skill-present-continuous",
    labelZh: "现在进行时",
    labelEn: "present continuous",
    weekLabel: "A2 Week 2",
    weekNumber: 2,
  },
  {
    id: "skill-past-simple",
    labelZh: "一般过去时",
    labelEn: "past simple",
    weekLabel: "A2 Week 3",
    weekNumber: 3,
  },
  {
    id: "skill-quantifiers",
    labelZh: "可数与不可数",
    labelEn: "quantifiers / countable-uncountable",
    weekLabel: "A2 Week 4",
    weekNumber: 4,
  },
  {
    id: "skill-comparatives",
    labelZh: "比较级",
    labelEn: "comparatives and superlatives",
    weekLabel: "A2 Week 5",
    weekNumber: 5,
  },
  {
    id: "skill-prep-time",
    labelZh: "时间介词 at / in / on",
    labelEn: "prepositions of time",
    weekLabel: "A2 Week 6",
    weekNumber: 6,
  },
  {
    id: "skill-classroom",
    labelZh: "课堂 can / must",
    labelEn: "can, must + classroom instructions",
    weekLabel: "A2 Week 8",
    weekNumber: 8,
  },
];

export const drills: SkillDrill[] = [
  {
    skillId: "skill-articles",
    items: [
      {
        question: "Is ____ your bottle?",
        options: ["this", "these", "those", "them"],
        correctIndex: 0,
        whyWrong: [
          "问 Is this your bottle 用 this 指近处的单数物品。",
          "these 是复数，不能指一个水杯。",
          "those 是复数且指远处，不合适。",
          "them 是宾格代词，不能做主语。",
        ],
      },
      {
        question: "Yes, that's ____.",
        options: ["my", "mine", "me", "I"],
        correctIndex: 1,
        whyWrong: [
          "my 后面要加名词（my bottle），不能单独用。",
          "mine = my bottle，可以单独用表示我的东西。",
          "me 是宾格我，不是物主代词。",
          "I 是主格我，不是物主代词。",
        ],
      },
      {
        question: "Mei lost ____ water bottle.",
        options: ["a", "an", "the", "some"],
        correctIndex: 0,
        whyWrong: [
          "首次提到用 a（a water bottle）。",
          "water 不是元音开头，不用 an。",
          "首次提到不用 the，再提才用 the。",
          "some 用于不确定数量，这里是一个水杯。",
        ],
      },
      {
        question: "Auntie Tan wears ____ pink polo shirt.",
        options: ["a", "an", "the", "some"],
        correctIndex: 0,
        whyWrong: [
          "首次提到衣服用 a（a pink polo shirt）。",
          "pink 不是元音开头，不用 an。",
          "首次提到不用 the。",
          "some 不用于单数可数名词。",
        ],
      },
      {
        question: "That is ____ bottle with the pink flower.",
        options: ["a", "an", "the", "no article"],
        correctIndex: 2,
        whyWrong: [
          "已经说过的特定水杯，用 the 表示那个已知的。",
          "bottle 不是元音开头，不用 an。",
          "已经提过的特定物品用 the。",
          "可数名词单数前要加冠词。",
        ],
      },
      {
        question: "____ is Auntie Tan at the counter.",
        options: ["This", "That", "These", "Those"],
        correctIndex: 1,
        whyWrong: [
          "This 用于近处，Auntie Tan 在柜台那边较远。",
          "That 用于指较远的人或物（Auntie Tan 在柜台那边）。",
          "These 是复数，Auntie Tan 是一个人。",
          "Those 是复数，不能指一个人。",
        ],
      },
      {
        question: "The Lost and Found office is ____ the school office.",
        options: ["in", "at", "on", "by"],
        correctIndex: 0,
        whyWrong: [
          "Lost and Found office 在 school office 里面，用 in。",
          "at 表示在某个点，不是里面。",
          "on 表示在表面上，不合适。",
          "by 表示在旁边，不是里面。",
        ],
      },
      {
        question: "Mei said thank ____.",
        options: ["me", "your", "you", "yours"],
        correctIndex: 2,
        whyWrong: [
          "me 不对，固定说法是 thank you。",
          "your 是物主代词，不能用在这里。",
          "固定搭配 thank you（谢谢你）。",
          "yours 是名词性物主代词，不能用在这里。",
        ],
      },
      {
        question: "Priya saw ____ white water bottle on the counter.",
        options: ["a", "an", "the", "some"],
        correctIndex: 0,
        whyWrong: [
          "首次提到水杯时用 a。",
          "white 不是元音开头，不用 an。",
          "首次提到用 a，特指时才用 the。",
          "some 用于不确定数量，这里指一个。",
        ],
      },
      {
        question: "Mei walks down ____ corridor to the office.",
        options: ["a", "an", "the", "no article"],
        correctIndex: 2,
        whyWrong: [
          "学校里特定的走廊，用 the。",
          "corridor 不是元音开头，不用 an。",
          "学校里大家都知道的走廊，用 the。",
          "特定地点前要加 the。",
        ],
      },
    ],
  },
  {
    skillId: "skill-present-simple",
    items: [
      {
        question: "Mei ____ up at seven o'clock every Monday.",
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
