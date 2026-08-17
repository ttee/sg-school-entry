import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

type LessonPlan = {
  title: string;
  fossil?: string;
  boardWriting?: string;
  sections: {
    name: string;
    duration: string;
    teacherNotes: string;
  }[];
  spokenLines?: string[];
  childPrompts?: string[];
  backupPrompts?: string[];
  speakingPrompts?: null;
  mathExample?: string;
};

const lessonPlans: Record<string, LessonPlan> = {
  "A2-0": {
    title: "办公室的瓶子 — Is this your bottle?",
    fossil: "零冠词与定冠词：I go to school by the bus / I am student",
    boardWriting: "a / the / Ø",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「今天我们只修正一个问题，不会贪多。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "拿出一个水瓶（或在屏幕上展示图片）。指着瓶子问孩子：'What's this?' 引导孩子说 'It's a bottle.' 然后说：'This is Mei's bottle. Is this YOUR bottle?' 让孩子回答 'No, that's not mine.' 或 'Yes, that's mine.' 重复 2-3 次，让孩子熟悉 your / mine / that's 的搭配。如果孩子说不完整，教师补全句子让孩子跟读。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误句子：'I go to school by the bus.' 和 'I am student.' 问孩子：'这两句话对吗？' 等孩子思考后，圈出错误部分 the bus 和 student。解释：去上学坐公交是习惯用法，说 by bus 不加 the。职业身份前要加 a/an，所以是 I am a student。改正后写：'I go to school by bus.' 和 'I am a student.' 让孩子跟读改正后的句子 3 次。",
      },
      {
        name: "跟读",
        duration: "10 分钟",
        teacherNotes: "教师说一句，孩子跟读一句。每句重复 2 次。共 6-8 句短对话，场景是办公室和教室。包括那对关于瓶子的句子。句子见下方【跟读句子】列表。注意语调：疑问句结尾上扬，陈述句平稳。如果孩子某句卡住，教师拆分成小块再跟读。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 个开放提示，让孩子自己说完整句子，不给选择题。家长可以用手机录像。第一个提示：'You see a pen on the teacher's desk. Ask if it's Ms Tan's pen.' 期待输出：'Is this your pen, Ms Tan?' 第二个提示：'Your classmate Priya left a book on the table. Tell her it's hers.' 期待输出：'Priya, that's your book.' 或 'That's yours.' 第三个提示：'You go to school by MRT. Tell me how you go to school.' 期待输出：'I go to school by MRT.' 如果孩子卡住，教师给一个词提示（比如说 'Start with Is this…' 或 'Start with I go…'），但不说完整句子。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看试学周作业入口。告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「孩子完成作业后，我们会在微信群里同步进度。如果有问题随时联系。」不提「小班课」「包过」等销售话术。",
      },
    ],
    spokenLines: [
      "Is this your bottle?",
      "Yes, that's mine.",
      "No, that's not mine.",
      "I go to school by bus.",
      "I am a student.",
      "Ms Tan is in the office.",
      "Priya, that's your book.",
      "This is Mei's pencil case.",
    ],
    childPrompts: [
      "You see a pen on the teacher's desk. Ask if it's Ms Tan's pen.",
      "Your classmate Priya left a book on the table. Tell her it's hers.",
      "You go to school by MRT. Tell me how you go to school.",
    ],
    backupPrompts: [
      "You left your water bottle in the classroom. Tell your teacher.",
      "Ask me if I go to school by bus.",
    ],
  },
  "A2-1": {
    title: "现在进行时 — What are you doing?",
    fossil: "I playing / She is play / What you doing?",
    boardWriting: "am/is/are + verb-ing",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "做一个动作（比如写字），问孩子：'What am I doing?' 引导回答 'You are writing.'",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写下错误：'I playing.' 和 'She is play.' 指出缺少 am/is，动词要加 -ing。改正：'I am playing.' 和 'She is playing.' 孩子跟读 3 次。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。每句 2 次。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给 3 个提示，孩子自己说完整句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒作业入口，记录进度。",
      },
    ],
    spokenLines: [
      "I am reading a book.",
      "She is writing.",
      "What are you doing?",
      "We are playing football.",
      "Priya is drawing a picture.",
      "They are eating lunch.",
    ],
    childPrompts: [
      "You are doing homework. Tell me.",
      "Ask Mei what she is doing.",
      "Your friend is running. Describe what he is doing.",
    ],
  },
  "A2-2": {
    title: "一般过去时规则变化 — I walked to school yesterday",
    fossil: "I walk to school yesterday / She play tennis last week",
    boardWriting: "verb + -ed (yesterday, last week, ago)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说：'Today I walk to school. Yesterday I walked to school.' 让孩子注意 -ed 结尾。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I walk to school yesterday.' 圈出 walk，改成 walked。孩子跟读。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出过去时句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I walked to school yesterday.",
      "She played tennis last week.",
      "We watched a movie two days ago.",
      "Priya helped her mother.",
      "They listened to music.",
      "Jun Wei cleaned his room.",
    ],
    childPrompts: [
      "Yesterday you visited the library. Tell me.",
      "Last week you played with your friend. Tell me.",
      "Two days ago you finished your homework. Tell me.",
    ],
  },
  "A2-3": {
    title: "一般过去时不规则变化 — I went / saw / ate",
    fossil: "I go to the park yesterday / I see a bird / I eat rice",
    boardWriting: "go → went, see → saw, eat → ate",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'Today I go. Yesterday I went.' 让孩子注意不规则变化。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I go to the park yesterday.' 圈出 go，改成 went。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出不规则过去时句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I went to East Coast Park.",
      "She saw a bird.",
      "We ate chicken rice.",
      "Priya made a cake.",
      "They came to school early.",
      "Jun Wei took the MRT.",
    ],
    childPrompts: [
      "Yesterday you went to the library. Tell me.",
      "Last week you saw a movie. Tell me.",
      "You ate noodles for lunch. Tell me.",
    ],
  },
  "A2-4": {
    title: "可数与不可数名词 — some water / two apples",
    fossil: "two water / a rice / many bread",
    boardWriting: "countable: a/an, many, two/three | uncountable: some, much",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "拿出两个苹果图片和一杯水图片。说 'two apples' 和 'some water'。让孩子注意 apples 有 -s，water 没有。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'two water' 和 'a rice'。圈出错误，改成 'two glasses of water' 和 'some rice'。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出可数/不可数句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I have two apples.",
      "She drank some water.",
      "We need much time.",
      "There are many books.",
      "Priya wants a glass of milk.",
      "There is some rice on the plate.",
    ],
    childPrompts: [
      "You want some juice. Ask for it.",
      "You have three pencils. Tell me.",
      "You need much practice. Tell me.",
    ],
  },
  "A2-5": {
    title: "比较级和最高级 — faster than / the fastest",
    fossil: "more bigger / more cheap / he is tall than me",
    boardWriting: "fast → faster → fastest | exciting → more exciting → most exciting",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示两张图：一个人跑得快，一个人跑得慢。说 'Priya is faster than Mei.' 让孩子注意 -er 和 than。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'more bigger' 和 'he is tall than me'。圈出错误，改成 'bigger' 和 'he is taller than me'。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出比较级句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "Priya is faster than Mei.",
      "This jump is longer than the first one.",
      "She was the fastest in her heat.",
      "This book is more interesting than that one.",
      "Mount Everest is the highest mountain.",
      "Jun Wei is taller than his brother.",
    ],
    childPrompts: [
      "Compare yourself to your friend (tall).",
      "Tell me about the fastest runner in your class.",
      "Compare two books (interesting).",
    ],
  },
  "A2-6": {
    title: "there is / there are — There is a book / There are two books",
    fossil: "There have a book / There is two books / There are a book",
    boardWriting: "There is + singular | There are + plural",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "指着一本书说 'There is a book.' 指着两本书说 'There are two books.' 让孩子注意单复数。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'There have a book.' 和 'There is two books.' 圈出错误，改成 'There is a book.' 和 'There are two books.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出 there is/are 句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "There is a book on the table.",
      "There are two pencils in the box.",
      "There is some water in the bottle.",
      "There are many students in the classroom.",
      "Is there a library near your school?",
      "Are there any apples in the fridge?",
    ],
    childPrompts: [
      "Describe what's on your desk (use there is/are).",
      "Tell me about things in your classroom.",
      "Ask if there is a park near my house.",
    ],
  },
  "A2-7": {
    title: "be going to — I am going to visit East Coast Park",
    fossil: "I going to the library tomorrow / I go to swim / Tomorrow I go library",
    boardWriting: "be going to + verb",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'Tomorrow I am going to visit the library.' 让孩子注意 am going to 后面跟动词原形。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I going to the library tomorrow.' 圈出缺少的 am，改成 'I am going to go to the library tomorrow.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出将来计划句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I am going to visit East Coast Park.",
      "Priya is going to draw.",
      "We are going to do homework.",
      "She is going to read a book.",
      "They are going to play football.",
      "Jun Wei is going to take the MRT.",
    ],
    childPrompts: [
      "Tell me your plan for tomorrow.",
      "What is your friend going to do this weekend?",
      "Ask me what I am going to do.",
    ],
  },
  "A2-8": {
    title: "情态动词 can / must — I can swim / You must wear your nametag",
    fossil: "I can to swim / I must to go / I can swimming",
    boardWriting: "can/must + verb (no to, no -ing)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'I can swim.' 和 'You must wear your nametag.' 让孩子注意后面是动词原形。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I can to swim.' 圈出 to，改成 'I can swim.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出 can/must 句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I can swim.",
      "You must wear your nametag.",
      "Can I borrow this book?",
      "She can speak English.",
      "We must finish our homework.",
      "Jun Wei can run fast.",
    ],
    childPrompts: [
      "Tell me something you can do.",
      "Tell me a school rule (use must).",
      "Ask if you can open the window.",
    ],
  },
  "A2-9": {
    title: "动词 + -ing — I like swimming / Priya enjoys drawing",
    fossil: "I like swim / I like to swimming / I enjoy to read",
    boardWriting: "like/love/hate/enjoy + verb-ing",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'I like swimming.' 和 'Priya enjoys drawing.' 让孩子注意 -ing 结尾。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I like swim.' 圈出 swim，改成 'I like swimming.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出 like/enjoy + -ing 句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I like swimming.",
      "Priya enjoys drawing.",
      "We hate waiting in the rain.",
      "She loves reading.",
      "They enjoy playing football.",
      "Jun Wei likes eating chicken rice.",
    ],
    childPrompts: [
      "Tell me a hobby you enjoy.",
      "What does your friend like doing?",
      "Tell me something you hate doing.",
    ],
  },
  "A2-10": {
    title: "频率副词 — I always walk to school / She is never late",
    fossil: "I go always / I am always go / I never am late",
    boardWriting: "always/usually/often/sometimes/never: before verb, after be",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'I always walk to school.' 和 'She is never late.' 让孩子注意副词位置。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I go always.' 圈出错误，改成 'I always go.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出含频率副词的句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I always walk to school.",
      "She is never late.",
      "We sometimes eat at the canteen.",
      "Priya usually does her homework.",
      "They often play football.",
      "Jun Wei is always helpful.",
    ],
    childPrompts: [
      "Tell me something you always do.",
      "Tell me something you never do.",
      "What do you sometimes do on weekends?",
    ],
  },
  "A2-11": {
    title: "介词 in / on / at — in the library / on the desk / at the gate",
    fossil: "in the bus / on the classroom / at the table (for in) / in the wall",
    boardWriting: "in (inside), on (surface), at (point)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'The book is on the desk.' 'Mei is in the library.' 'We meet at the gate.' 让孩子注意介词用法。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'in the bus' 和 'on the classroom'。圈出错误，改成 'on the bus' 和 'in the classroom'。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出含正确介词的句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "The book is on the desk.",
      "Mei is in the library.",
      "We meet at the school gate.",
      "The poster is on the wall.",
      "I am in the classroom.",
      "Jun Wei waits at the bus stop.",
    ],
    childPrompts: [
      "Tell me where you are now (use in).",
      "Tell me where your book is (use on).",
      "Tell me where you meet your friend (use at).",
    ],
  },
  "B1-0": {
    title: "现在完成时 — I have finished / She has been to Singapore",
    fossil: "I have finish / I already go / She has went",
    boardWriting: "have/has + past participle (finished, been, done)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'I have finished my homework.' 让孩子注意 have + 过去分词。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I have finish.' 圈出 finish，改成 'I have finished.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出现在完成时句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I have finished my homework.",
      "She has been to Singapore.",
      "We have done the test.",
      "Priya has read that book.",
      "They have visited the museum.",
      "Jun Wei has already eaten lunch.",
    ],
    childPrompts: [
      "Tell me something you have finished today.",
      "Tell me a place you have visited.",
      "Ask me if I have been to Malaysia.",
    ],
  },
  "B1-1": {
    title: "现在完成进行时 — I have been waiting / She has been studying",
    fossil: "I have been wait / I am waiting since 2 hours / She has been study",
    boardWriting: "have/has been + verb-ing",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'I have been waiting for 20 minutes.' 让孩子注意 have been + -ing。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I have been wait.' 圈出 wait，改成 'I have been waiting.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出现在完成进行时句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I have been waiting for 20 minutes.",
      "She has been studying since 3 pm.",
      "We have been playing football.",
      "Priya has been reading for an hour.",
      "They have been working on the project.",
      "Jun Wei has been practicing piano.",
    ],
    childPrompts: [
      "Tell me something you have been doing today.",
      "How long have you been learning English?",
      "Tell me about your friend (what has she been doing).",
    ],
  },
  "B1-2": {
    title: "被动语态现在时 — English is spoken / The book is written",
    fossil: "English is speak / The book is wrote / It is do by me",
    boardWriting: "is/are + past participle (spoken, written, done)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'English is spoken in Singapore.' 让孩子注意被动语态结构。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'English is speak.' 圈出 speak，改成 'English is spoken.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出被动语态句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "English is spoken in Singapore.",
      "The book is written by a famous author.",
      "Rice is grown in many countries.",
      "The homework is done by the students.",
      "The door is opened every morning.",
      "The test is taken by all P5 students.",
    ],
    childPrompts: [
      "Tell me a language that is spoken in your country.",
      "Tell me something that is made in China.",
      "Tell me how chicken rice is prepared (use passive).",
    ],
  },
  "B1-3": {
    title: "被动语态过去时 — The letter was sent / The test was taken",
    fossil: "The letter was send / It was wrote / The test was took",
    boardWriting: "was/were + past participle",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'The letter was sent yesterday.' 让孩子注意过去时被动语态。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'The letter was send.' 圈出 send，改成 'The letter was sent.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出过去时被动语态句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "The letter was sent yesterday.",
      "The test was taken last week.",
      "The book was written in 2020.",
      "The homework was done on time.",
      "The window was broken by the ball.",
      "The prize was won by Priya.",
    ],
    childPrompts: [
      "Tell me about a test that was taken last month.",
      "Tell me about a book that was written a long time ago.",
      "Tell me about something that was built in Singapore.",
    ],
  },
  "B1-4": {
    title: "第一条件句 — If it rains, I will stay home",
    fossil: "If it will rain / If it rain / If it rains, I stay",
    boardWriting: "If + present simple, will + verb",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'If it rains, I will stay home.' 让孩子注意 if 从句用现在时，主句用 will。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'If it will rain, I stay home.' 圈出错误，改成 'If it rains, I will stay home.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出条件句。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "If it rains, I will stay home.",
      "If she studies hard, she will pass.",
      "If we have time, we will visit the museum.",
      "If Priya finishes early, she will play.",
      "If Jun Wei is late, he will miss the bus.",
      "If you help me, I will help you.",
    ],
    childPrompts: [
      "Tell me what you will do if it rains tomorrow.",
      "Tell me what will happen if you study hard.",
      "Tell me what your friend will do if she has free time.",
    ],
  },
  "B1-5": {
    title: "定语从句 — The girl who sits next to me / The book which I read",
    fossil: "The girl sits next to me is Priya / the book who I read",
    boardWriting: "who (people), which (things), that (both)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'The girl who sits next to me is Priya.' 让孩子注意 who 连接从句。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'The girl sits next to me is Priya.' 圈出缺少的 who，改成 'The girl who sits next to me is Priya.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出定语从句。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "The girl who sits next to me is Priya.",
      "The book which I read was interesting.",
      "That's the teacher that helped me.",
      "The student who won the prize is Jun Wei.",
      "The place which we visited was beautiful.",
      "The friend that I met yesterday is Mei.",
    ],
    childPrompts: [
      "Describe a friend (use who).",
      "Describe a book you read (use which).",
      "Describe a place you visited (use that).",
    ],
  },
  "B1-6": {
    title: "used to — I used to walk to school",
    fossil: "I use to walk to school / I didn't used to like rice / I am used to swim",
    boardWriting: "used to + verb (past habit, not now)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'I used to walk to school. Now I take the bus.' 让孩子注意 used to 表示过去习惯。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'I use to walk.' 圈出 use，改成 'I used to walk.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出 used to 句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I used to walk to school.",
      "She used to live in Guangzhou.",
      "We didn't use to speak English at home.",
      "Priya used to play piano.",
      "They used to eat at the canteen.",
      "Jun Wei used to be shy.",
    ],
    childPrompts: [
      "Tell me something you used to do when you were younger.",
      "Tell me about your friend's past habit.",
      "Tell me something you didn't use to like.",
    ],
  },
  "B1-7": {
    title: "although / despite — Although it rained / Despite the rain",
    fossil: "Although it is raining, but I go / Despite of the rain / Despite it is raining",
    boardWriting: "although/even though + clause | despite/in spite of + noun/-ing",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'Although it was raining, we went to the park.' 和 'Despite the rain, we went to the park.' 让孩子注意区别。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'Although it is raining, but I go.' 圈出 but，解释 although 不和 but 连用。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出 although/despite 句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "Although it was raining, we went to East Coast Park.",
      "Despite the rain, Sports Day continued.",
      "In spite of feeling tired, Mei finished the race.",
      "Even though it was late, she kept studying.",
      "Despite being young, he is very smart.",
      "Although the test was hard, Jun Wei passed.",
    ],
    childPrompts: [
      "Tell me what you did despite bad weather.",
      "Tell me what you will do although you are tired.",
      "Tell me about someone who succeeded in spite of difficulties.",
    ],
  },
  "B1-8": {
    title: "so / such — so beautiful / such a beautiful park",
    fossil: "so a beautiful park / such beautiful / so beautiful park / such a weather",
    boardWriting: "so + adjective | such a/an + adjective + noun",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'The park was so beautiful.' 和 'It was such a beautiful park.' 让孩子注意区别。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'so a beautiful park.' 圈出错误，改成 'such a beautiful park.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出 so/such 句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "The park was so beautiful.",
      "It was such a beautiful park.",
      "We had such bad weather.",
      "She is so kind.",
      "Jun Wei had such an interesting book.",
      "The test was so difficult.",
    ],
    childPrompts: [
      "Describe something using so + adjective.",
      "Describe something using such a + adjective + noun.",
      "Tell me about such good friends.",
    ],
  },
  "B1-9": {
    title: "too / enough — too tired to run / tall enough to reach",
    fossil: "too much tired / enough rich / too tired that I can't / I am not enough tall",
    boardWriting: "too + adj + to | adj + enough + to",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'I was too tired to run.' 和 'She is tall enough to reach the shelf.' 让孩子注意结构。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'too much tired.' 圈出 much，改成 'too tired.'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出 too/enough 句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "I was too tired to run.",
      "She is tall enough to reach the shelf.",
      "We didn't have enough time.",
      "The test was too difficult.",
      "Jun Wei is strong enough to carry the box.",
      "Priya is old enough to go alone.",
    ],
    childPrompts: [
      "Tell me something you are too tired to do.",
      "Tell me something you are tall enough to reach.",
      "Tell me about someone who is old enough to do something.",
    ],
  },
  "B1-10": {
    title: "反意疑问句 — You're in Priya's class, aren't you?",
    fossil: "You like it, is it? / She's tall, is she? / You don't like English, isn't it?",
    boardWriting: "positive statement → negative tag | negative statement → positive tag",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'You're in Priya's class, aren't you?' 让孩子注意前肯后否。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'You like it, is it?' 圈出 is it，改成 'don't you?'",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出反意疑问句。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "You're in Priya's class, aren't you?",
      "She doesn't take the bus, does she?",
      "Jun Wei can swim, can't he?",
      "They are late, aren't they?",
      "You don't like durian, do you?",
      "Priya has finished, hasn't she?",
    ],
    childPrompts: [
      "Ask me a question tag about the weather.",
      "Ask your friend if she likes chicken rice (use tag).",
      "Make a negative statement with a question tag.",
    ],
  },
  "B1-11": {
    title: "过去完成时 — When I arrived, the bus had left",
    fossil: "When I arrived, the bus left / I have finished before she came / I already eat before she come",
    boardWriting: "had + past participle (earlier past action)",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'When I arrived, the bus had left.' 让孩子注意两个过去动作的先后。",
      },
      {
        name: "化石",
        duration: "6 分钟",
        teacherNotes: "写错误：'When I arrived, the bus left.' 解释更早的动作用 had left。",
      },
      {
        name: "跟读",
        duration: "8 分钟",
        teacherNotes: "教师说一句，孩子跟读。",
      },
      {
        name: "开口",
        duration: "10 分钟",
        teacherNotes: "给提示，孩子说出过去完成时句子。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "When I arrived, the bus had left.",
      "Jun Wei had already eaten.",
      "The library had closed before we got there.",
      "She had finished her homework before dinner.",
      "They had visited Singapore before 2020.",
      "Priya had read the book before the test.",
    ],
    childPrompts: [
      "Tell me something you had done before you came to school.",
      "Tell me what had happened before you arrived.",
      "Tell me about a place your friend had visited.",
    ],
  },
  "MATH-0": {
    title: "钱币与单位 — $ 符号和 each / in total",
    mathExample: "Jun Wei bought 2 books for $8 each. 2 × $8 = $16. He paid $16.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示新加坡钱币图片，说 'This is $5.' 'This is $10.' 让孩子熟悉 $ 符号。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'Jun Wei bought 2 books for $8 each.' 问孩子：'How much did he pay?' 引导列式：2 × $8 = $16。强调关键词 each（每个）和 in total（总共）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'Priya bought 3 pencils at $2 each. How much?' 期待输出：'3 × $2 = $6.' 题目 2：'Mei has $20. She spent $8. How much is left?' 期待输出：'$20 − $8 = $12.' 题目 3：'4 erasers cost $12 altogether. How much is one eraser?' 期待输出：'$12 ÷ 4 = $3.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释。比如 '3 × $5 = $15'，孩子要说 'Three times five dollars equals fifteen dollars.' 或 'Three multiplied by five dollars is fifteen dollars.'",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有类似题目，完成后系统批改。",
      },
    ],
    spokenLines: [
      "3 × $5 = $15",
      "Three times five dollars equals fifteen dollars.",
      "$20 − $8 = $12",
      "Twenty dollars minus eight dollars equals twelve dollars.",
      "$12 ÷ 4 = $3",
      "Twelve dollars divided by four equals three dollars.",
    ],
    childPrompts: [
      "Priya bought 3 pencils at $2 each. How much did she pay? (Say the calculation.)",
      "Mei has $20. She spent $8. How much is left? (Say the calculation.)",
      "4 erasers cost $12 altogether. How much is one eraser? (Say the calculation.)",
    ],
  },
  "MATH-1": {
    title: "乘除法关键词 — of / shared equally / per",
    mathExample: "3 packs of 4 = 3 × 4 = 12. 12 sweets shared equally among 3 children = 12 ÷ 3 = 4.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '3 packs of 4 sweets.' 问孩子：'How many sweets?' 引导 3 × 4 = 12。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "写：'12 sweets shared equally among 3 children.' 引导 12 ÷ 3 = 4。强调关键词 of（乘法）、shared equally（除法）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读算式并解释意思。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "3 packs of 4 = 3 × 4 = 12",
      "12 sweets shared equally among 3 children = 12 ÷ 3 = 4",
      "5 groups of 6 = 5 × 6 = 30",
      "20 cookies shared equally among 4 children = 20 ÷ 4 = 5",
    ],
    childPrompts: [
      "4 bags of 5 apples. How many apples in total? (Say the calculation.)",
      "18 sweets shared equally among 6 children. How many sweets each? (Say the calculation.)",
      "7 packs of 3 pencils. How many pencils? (Say the calculation.)",
    ],
  },
  "MATH-2": {
    title: "分数加法 — same denominator",
    mathExample: "Mei ate 2/8 of the pizza, Priya ate 3/8. 2/8 + 3/8 = 5/8. Together they ate 5/8 of the pizza.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示 pizza 图片，切成 8 份。说 'This is 1/8.' 'This is 2/8.' 让孩子熟悉分数表达。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "写：'2/8 + 3/8 = 5/8'。解释：分母相同，只加分子。读作 'two eighths plus three eighths equals five eighths.'",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读分数算式。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "2/8 + 3/8 = 5/8",
      "Two eighths plus three eighths equals five eighths.",
      "1/4 + 2/4 = 3/4",
      "One quarter plus two quarters equals three quarters.",
    ],
    childPrompts: [
      "1/6 + 2/6. What's the answer? (Say it in English.)",
      "3/10 + 4/10. What's the answer? (Say it in English.)",
      "Mei ate 1/5 of the cake, Jun Wei ate 2/5. How much did they eat together? (Say the calculation.)",
    ],
  },
  "MATH-3": {
    title: "长度与时间单位 — m / cm / hours / minutes",
    mathExample: "The bookshelf is 2 m. The table is 1 m. 2 m − 1 m = 1 m. The bookshelf is 1 m taller. Also: 2 hours = 120 minutes.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '2 metres.' 'not 2 metres.' 强调单位不用复数 -s。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "写：'2 m − 1 m = 1 m'。解释：单位统一，才能加减。2 hours = 120 minutes。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读单位换算算式。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "2 m − 1 m = 1 m",
      "Two metres minus one metre equals one metre.",
      "2 hours = 120 minutes",
      "Two hours equals one hundred and twenty minutes.",
    ],
    childPrompts: [
      "The rope is 5 m. I cut off 2 m. How much is left? (Say the calculation.)",
      "3 hours = how many minutes? (Say it in English.)",
      "The table is 80 cm. The chair is 50 cm. How much taller is the table? (Say the calculation.)",
    ],
  },
  "MATH-4": {
    title: "立体图形 — cube / cuboid / cylinder / cone / sphere",
    mathExample: "A dice is a cube. It has 6 square faces. A book box is a cuboid. It has 6 rectangular faces. A can is a cylinder. It has 2 circular faces.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示正方体、长方体、圆柱图片。让孩子说出英文名称。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "写：'cube: 6 square faces'。'cuboid: 6 rectangular faces'。'cylinder: 2 circular faces'。孩子跟读。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给图片，孩子说出图形名称和特征。比如 'This is a cube. It has 6 faces.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子描述身边物品是什么形状。比如 'A dice is a cube.' 'A can is a cylinder.'",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "A dice is a cube.",
      "It has 6 square faces.",
      "A book box is a cuboid.",
      "It has 6 rectangular faces.",
      "A can is a cylinder.",
      "It has 2 circular faces.",
    ],
    childPrompts: [
      "Look at this shape (show cube). What is it? Describe it.",
      "Look at this shape (show cylinder). What is it? Describe it.",
      "Tell me an object that is a cuboid.",
    ],
  },
  "MATH-5": {
    title: "象形统计图 — Each picture stands for...",
    mathExample: "Each ⭐ stands for 2. There are 4 stars. 4 × 2 = 8. There are 8 children. Also: Each ⭐ stands for 5. 3 stars → 3 × 5 = 15.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示一张象形统计图，说 'Each star stands for 2 children.' 让孩子数星星。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "写：'Each ⭐ stands for 2. There are 4 stars. 4 × 2 = 8.' 强调不要直接数图，要乘。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给图表，孩子说出算式。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读图并说出算式。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业。",
      },
    ],
    spokenLines: [
      "Each star stands for 2.",
      "There are 4 stars.",
      "4 × 2 = 8",
      "There are 8 children.",
      "Each picture stands for 5.",
      "3 pictures means 3 × 5 = 15.",
    ],
    childPrompts: [
      "Each ⭐ stands for 3. There are 5 stars. How many children? (Say the calculation.)",
      "Each 🍎 stands for 4. There are 6 apples. How many in total? (Say the calculation.)",
      "Look at this pictogram. Each picture stands for 10. There are 7 pictures. How many? (Say the calculation.)",
    ],
  },
  "MATH-6": {
    title: "万以内整数与钱币 — Numbers to 10 000 and money",
    mathExample: "Ali had $50.00. He bought a book for $18.60. $50.00 − $18.60 = $31.40. He has $31.40 left. Also: 4256 + 2318 → line up ones, tens, hundreds, thousands → 6574.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示数字 7395，说 'Seven thousand three hundred and ninety-five.' 让孩子注意千位 thousands。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'$50.00 − $18.60 = $31.40'。强调对齐小数点。再写：'4256 + 2318 = 6574'。强调对齐位值（千、百、十、个）。关键词：place value（位值），decimal notation（小数记法）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is 3000 + 2000 + 400 + 50 + 6?' 期待输出：'5456.' 题目 2：'Priya bought a toy for $12.50 and a book for $8.30. How much did she spend?' 期待输出：'$12.50 + $8.30 = $20.80.' 题目 3：'Which is greater: 4567 or 4576?' 期待输出：'4576 is greater.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释。比如 '$50.00 − $18.60 = $31.40'，孩子要说 'Fifty dollars minus eighteen dollars sixty cents equals thirty-one dollars forty cents.'",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，对应申请 P4 的孩子需要掌握的内容（preceding level 规则）。",
      },
    ],
    spokenLines: [
      "$50.00 − $18.60 = $31.40",
      "Fifty dollars minus eighteen dollars sixty cents equals thirty-one dollars forty cents.",
      "4256 + 2318 = 6574",
      "Four thousand two hundred and fifty-six plus two thousand three hundred and eighteen equals six thousand five hundred and seventy-four.",
      "The value of 7 in 7395 is 7000.",
      "Seven thousand.",
    ],
    childPrompts: [
      "What is 5000 + 3000? (Say the calculation.)",
      "Mei spent $15.60 and $8.50. How much in total? (Say the calculation.)",
      "Compare 4567 and 4576. Which is greater? (Say the answer.)",
    ],
  },
  "MATH-7": {
    title: "六七八九乘法口诀与有余数除法 — Multiplication tables 6–9 and division with remainder",
    mathExample: "Mei bought 7 packs of stickers. Each pack has 8 stickers. 7 × 8 = 56. She has 56 stickers. Also: 50 ÷ 6 = 8 R 2 (8 remainder 2). 124 × 6 = 744.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '7 × 8 = 56.' '8 × 7 = 56.' 让孩子注意乘法交换律。再说 '50 ÷ 6 = 8 R 2.' 解释 R 表示 remainder（余数）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'7 × 8 = 56'。强调 P2 学过 2/3/4/5/10 的乘法口诀，P3 新学 6/7/8/9。然后写：'50 ÷ 6 = 8 R 2'。解释：6 × 8 = 48，还剩 2，所以余数是 2。再写：'124 × 6 = 744'。演示竖式进位。关键词：times（乘）、divided by（除）、remainder（余数）、equally（平均分）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is 6 × 9?' 期待输出：'54.' 题目 2：'Priya has 85 marbles. She shares them equally among 9 friends. How many marbles does each friend get, and how many are left?' 期待输出：'85 ÷ 9 = 9 R 4. Each friend gets 9 marbles, 4 are left.' 题目 3：'What is 237 × 4?' 期待输出：'948.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释。比如 '50 ÷ 6 = 8 R 2'，孩子要说 'Fifty divided by six equals eight remainder two.' 或 'Fifty divided by six is eight with a remainder of two.'",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，包括六七八九乘法口诀、有余数除法、三位数乘/除一位数。对应申请 P4 的孩子需要掌握的内容（preceding level 规则）。",
      },
    ],
    spokenLines: [
      "7 × 8 = 56",
      "Seven times eight equals fifty-six.",
      "50 ÷ 6 = 8 R 2",
      "Fifty divided by six equals eight remainder two.",
      "124 × 6 = 744",
      "One hundred and twenty-four times six equals seven hundred and forty-four.",
      "6 × 9 = 54",
      "Six times nine equals fifty-four.",
    ],
    childPrompts: [
      "What is 8 × 7? (Say the calculation.)",
      "85 marbles shared equally among 9 friends. How many each, and how many left? (Say the calculation.)",
      "What is 237 × 4? (Say the calculation.)",
    ],
  },
  "MATH-8": {
    title: "等值分数与相关分数加减 — Equivalent fractions and related fractions",
    mathExample: "Mei ate 2/3 of a pizza. Ali ate 4/6 of another pizza. 2/3 = 4/6 (equivalent). Also: 1/2 + 1/4 = 2/4 + 1/4 = 3/4. And: 4/8 = 1/2 (simplest form).",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示 pizza 图片，切成 6 份。说 'This is 2/3.' 再展示另一个切成 6 份的 pizza，涂色 4 份。说 'This is 4/6.' 让孩子观察两个 pizza 涂色部分一样多。引出 2/3 = 4/6（equivalent fractions）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'2/3 = 4/6 = 8/12'。解释：分子分母同时乘以 2 或 3。然后写：'4/8 = 1/2'。解释：分子分母同时除以 4，约分成最简分数（simplest form）。再写：'1/2 + 1/4 = 2/4 + 1/4 = 3/4'。解释：先把 1/2 改成 2/4（相同分母），然后加。最后写：'1/2 vs 1/3'。画图说明 1/2 > 1/3（分母越大，分数越小）。关键词：equivalent fractions（等值分数）、simplest form（最简）、related fractions（相关分数）、compare（比较）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is another fraction equivalent to 1/2?' 期待输出：'2/4 or 3/6.' 题目 2：'What is 6/9 in simplest form?' 期待输出：'2/3.' 题目 3：'Mei walked 1/2 of the path. Jun Wei walked 1/4. How much did they walk together?' 期待输出：'1/2 + 1/4 = 2/4 + 1/4 = 3/4.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出分数算式并解释。比如 '2/3 = 4/6'，孩子要说 'Two thirds equals four sixths. They are equivalent fractions.' 或 '1/2 + 1/4 = 3/4'，孩子要说 'One half plus one quarter equals three quarters.' 注意分母读法：thirds, quarters, sixths, eighths（加 -s）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，包括等值分数、最简分数、异分母比较、相关分数加减。对应申请 P4 的孩子需要掌握的 P3 内容（preceding level 规则）。强调：本周不教假分数/带分数（那是 P4 内容），只练习一个整体内的分数。",
      },
    ],
    spokenLines: [
      "2/3 = 4/6",
      "Two thirds equals four sixths.",
      "4/8 = 1/2",
      "Four eighths equals one half in simplest form.",
      "1/2 + 1/4 = 3/4",
      "One half plus one quarter equals three quarters.",
      "1/2 > 1/3",
      "One half is greater than one third.",
    ],
    childPrompts: [
      "What is another fraction equivalent to 3/4? (Say it in English.)",
      "What is 6/9 in simplest form? (Say the calculation.)",
      "1/3 + 1/6. How much in total? (Say the calculation.)",
    ],
  },
  "MATH-9": {
    title: "千米、毫升与复合单位 — Kilometres, millilitres and compound units",
    mathExample: "The road is 3 km long. 3 km = 3000 m. A bottle has 1 l 800 ml. That's 1800 ml. A bag of rice weighs 2 kg 500 g. That's 2500 g.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '1 km = 1000 m.' '1 l = 1000 ml.' 让孩子注意新单位：千米（kilometres）和毫升（millilitres）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'3 km = 3000 m'。解释：1 km = 1000 m，所以 3 × 1000 = 3000。然后写：'1 l 800 ml'（复合单位 compound units）。解释：1 l = 1000 ml，所以 1 l 800 ml = 1000 ml + 800 ml = 1800 ml。再写：'2 kg 500 g = 2500 g'。解释：1 kg = 1000 g，所以 2 kg = 2000 g，2000 + 500 = 2500。最后写：'4500 m = 4 km 500 m'。解释：4500 ÷ 1000 = 4 余 500，所以是 4 km 500 m。关键词：kilometres / millilitres / convert（转换）、compound units（复合单位）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'How many metres in 5 km?' 期待输出：'5 km = 5000 m. 5 × 1000 = 5000.' 题目 2：'Convert 2 m 75 cm to cm.' 期待输出：'2 m = 200 cm. 200 + 75 = 275 cm.' 题目 3：'A bottle has 1 l 200 ml. Mei drinks 600 ml. How much is left?' 期待输出：'1 l 200 ml = 1200 ml. 1200 − 600 = 600 ml. Or 1 l 200 ml − 600 ml = 600 ml.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出单位换算算式并解释。比如 '3 km = 3000 m'，孩子要说 'Three kilometres equals three thousand metres.' 或 '1 l 800 ml'，孩子要说 'One litre eight hundred millilitres.' 注意读法：kilometres（千米）、millilitres（毫升）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，包括千米、毫升、复合单位、大小单位互换（km ↔ m, m ↔ cm, kg ↔ g, l ↔ ml）。对应申请 P4 的孩子需要掌握的 P3 内容（preceding level 规则）。强调：本周不教面积/周长、时间秒/24 小时制，也不教小数（那些是 P3 其他主题或 P4 内容）。",
      },
    ],
    spokenLines: [
      "3 km = 3000 m",
      "Three kilometres equals three thousand metres.",
      "1 l 800 ml = 1800 ml",
      "One litre eight hundred millilitres equals one thousand eight hundred millilitres.",
      "2 kg 500 g = 2500 g",
      "Two kilograms five hundred grams equals two thousand five hundred grams.",
      "1 m 35 cm = 135 cm",
      "One metre thirty-five centimetres equals one hundred and thirty-five centimetres.",
    ],
    childPrompts: [
      "How many metres in 7 km? (Say the calculation.)",
      "Convert 2 m 75 cm to cm. (Say the calculation.)",
      "A bottle has 1 l 800 ml. Mei drinks 600 ml. How much is left? (Say the calculation.)",
    ],
  },
  "MATH-10": {
    title: "面积与周长 — Area and perimeter",
    mathExample: "A rectangle is 8 m long and 5 m wide. Area = 8 × 5 = 40 m². A square has sides of 6 cm. Area = 6 × 6 = 36 cm². A rectangle is 10 m long and 4 m wide. Perimeter = 10 + 4 + 10 + 4 = 28 m.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 'Area is the space inside a shape.' '面积用 cm² 或 m²（平方单位）。' '周长是所有边长之和。' 让孩子注意：面积 area vs 周长 perimeter。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上画一个长方形，标注：长 8 m，宽 5 m。写：'Area = length × width = 8 m × 5 m = 40 m²'。强调：面积用平方单位 m²。然后画一个正方形，边长 6 cm。写：'Area = side × side = 6 cm × 6 cm = 36 cm²'。再画长方形（10 m 长、4 m 宽），写：'Perimeter = 10 + 4 + 10 + 4 = 28 m' 或 '2 × (10 + 4) = 28 m'。强调：周长是所有边长之和，单位是 m，不是 m²。关键词：area（面积）、perimeter（周长）、length（长）、width（宽）、side（边）、square units（平方单位 cm², m²）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'A rectangle is 12 m long and 7 m wide. What is its area?' 期待输出：'Area = 12 m × 7 m = 84 m².' 题目 2：'A square has sides of 5 cm. What is its area?' 期待输出：'Area = 5 cm × 5 cm = 25 cm².' 题目 3：'A rectangle is 9 m long and 4 m wide. What is its perimeter?' 期待输出：'Perimeter = 9 + 4 + 9 + 4 = 26 m. Or 2 times 9 plus 4 equals 2 times 13 equals 26 m.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出面积和周长算式并解释。比如 'Area = 8 m × 5 m = 40 m²'，孩子要说 'Area equals eight metres times five metres equals forty square metres.' 或 'Perimeter = 10 + 4 + 10 + 4 = 28 m'，孩子要说 'Perimeter equals ten plus four plus ten plus four equals twenty-eight metres.' 注意读法：square metres（平方米）、square centimetres（平方厘米）、times（乘）、plus（加）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，包括面积（area in cm², m²）、周长（perimeter of rectangles and squares）、面积与周长的应用题（word problems）。对应申请 P4 的孩子需要掌握的 P3 内容（preceding level 规则）。强调：本周不教 P4 圆形、三角形面积（circles, triangles area），不教 P3 角度（angles），答案用整数 cm 或 m，不用小数。",
      },
    ],
    spokenLines: [
      "Area = 8 m × 5 m = 40 m²",
      "Area equals eight metres times five metres equals forty square metres.",
      "Area = 6 cm × 6 cm = 36 cm²",
      "Area equals six centimetres times six centimetres equals thirty-six square centimetres.",
      "Perimeter = 10 + 4 + 10 + 4 = 28 m",
      "Perimeter equals ten plus four plus ten plus four equals twenty-eight metres.",
      "Perimeter = 4 × 5 cm = 20 cm",
      "Perimeter equals four times five centimetres equals twenty centimetres.",
    ],
    childPrompts: [
      "A rectangle is 12 m long and 7 m wide. What is its area? (Say the calculation.)",
      "A square has sides of 5 cm. What is its area? (Say the calculation.)",
      "A rectangle is 9 m long and 4 m wide. What is its perimeter? (Say the calculation.)",
    ],
  },
  "MATH-11": {
    title: "时间 — Time: seconds, duration, 24-hour clock",
    mathExample: "The lesson starts at 9:30 a.m. and ends at 10:15 a.m. Duration = 45 minutes. 2:30 p.m. = 14:30 (24-hour clock: 2 + 12 = 14). 1 minute = 60 seconds. So 3 minutes = 3 × 60 = 180 seconds.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '1 minute = 60 seconds.' '2:30 p.m. = 14:30.' 让孩子注意：秒（seconds）、24 小时制（24-hour clock）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'1 min = 60 s'。解释：1 分钟有 60 秒，所以 3 min = 3 × 60 = 180 s。然后写：'2:30 p.m. = 14:30'。解释：下午时间转 24 小时制，加 12。2 + 12 = 14。早上不变，比如 8:00 a.m. = 08:00。再写：'A lesson starts at 9:30 a.m. and ends at 10:15 a.m. Duration = 45 minutes.'。解释：经过时间 duration = 结束 − 开始，10:15 − 9:30 = 45 min。关键词：seconds（秒）、duration（经过时间）、starting time（开始时间）、finishing time（结束时间）、24-hour clock（24 小时制）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'How many seconds in 2 minutes?' 期待输出：'2 min = 2 × 60 = 120 s. Two minutes equals one hundred and twenty seconds.' 题目 2：'What is 3:45 p.m. in 24-hour clock?' 期待输出：'3 + 12 = 15. So 3:45 p.m. = 15:45.' 题目 3：'A recess starts at 10:00 a.m. and ends at 10:30 a.m. How long is the recess?' 期待输出：'10:30 − 10:00 = 30 minutes. The recess is 30 minutes long.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出时间算式并解释。比如 '1 min = 60 s'，孩子要说 'One minute equals sixty seconds.' 或 '2:30 p.m. = 14:30'，孩子要说 'Two thirty p.m. equals fourteen thirty in 24-hour clock.' 或 'The lesson lasted 45 minutes'，孩子要说 'The lesson lasted forty-five minutes.' 注意读法：seconds（秒）、minutes（分钟）、hours（小时）、a.m. / p.m.（上午/下午）、24-hour clock（24 小时制）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，包括秒（seconds）、起始/结束/经过时间（starting/finishing/duration）、24 小时制（24-hour clock）。对应申请 P4 的孩子需要掌握的 P3 内容（preceding level 规则）。强调：P2 第 3 周学过时间到 5 分钟（telling time to 5 minutes），本周新增秒和 24 小时制，不教 P4 跨午夜的时间计算（duration across midnight），题目都在同一天内。",
      },
    ],
    spokenLines: [
      "1 min = 60 s",
      "One minute equals sixty seconds.",
      "2:30 p.m. = 14:30",
      "Two thirty p.m. equals fourteen thirty in 24-hour clock.",
      "The lesson starts at 9:30 a.m. and ends at 10:15 a.m.",
      "Duration = 10:15 − 9:30 = 45 minutes.",
      "The lesson lasted forty-five minutes.",
      "3 min = 3 × 60 = 180 s",
      "Three minutes equals one hundred and eighty seconds.",
    ],
    childPrompts: [
      "How many seconds in 2 minutes? (Say the calculation.)",
      "What is 3:45 p.m. in 24-hour clock? (Say the calculation.)",
      "A recess starts at 10:00 a.m. and ends at 10:30 a.m. How long is the recess? (Say the calculation.)",
    ],
  },
  "MATH-12": {
    title: "角与直线 — Angles and lines: right angle, perpendicular, parallel",
    mathExample: "A square has 4 right angles. Each right angle = 90°. The door frame has sides that are perpendicular (meet at a right angle). The opposite sides of a rectangle are parallel (never meet, always the same distance apart).",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示正方形图片，说 'A square has 4 right angles.' '一个直角 = 90°。' 让孩子注意：直角（right angle）= 90°。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上画一个正方形，标注 4 个角。说：'Each corner is a right angle. A right angle = 90°.' 然后画字母 T，说：'These two lines are perpendicular. Perpendicular means they meet at a right angle.' 再画两条平行线，说：'These lines are parallel. Parallel lines never meet. They are always the same distance apart.' 强调：P3 只教直角 = 90°、垂直（perpendicular）、平行（parallel），不教 P4 的量角器和非直角度数，也不教 P5 的三角形性质。关键词：right angle（直角）、perpendicular（垂直）、parallel（平行）、opposite sides（对边）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出答案。题目 1：'How many right angles does a rectangle have?' 期待输出：'A rectangle has 4 right angles.' 题目 2：'Look at the door frame. Are the sides parallel or perpendicular?' 期待输出：'The sides are perpendicular. They meet at a right angle.' 题目 3：'Do the opposite sides of a square parallel?' 期待输出：'Yes, the opposite sides of a square are parallel.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子描述教室里的物品。比如 'The door frame has 4 right angles.' 'The window sides are perpendicular.' 'The floor tiles have parallel lines.' 提示孩子用 right angle, perpendicular, parallel 这些词。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，包括直角（right angle = 90°）、垂直线（perpendicular lines）、平行线（parallel lines）。对应申请 P4 的孩子需要掌握的 P3 内容（preceding level 规则）。强调：本周不教 P4 的量角器（protractor）和非直角的度数，也不教 P5 的三角形性质（triangle properties）。题目使用学校日常物品（门框、书本、教室瓷砖、窗户）作为情境。",
      },
    ],
    spokenLines: [
      "A square has 4 right angles.",
      "Each right angle = 90°.",
      "A right angle equals ninety degrees.",
      "These lines are perpendicular.",
      "Perpendicular lines meet at a right angle.",
      "These lines are parallel.",
      "Parallel lines never meet.",
      "The opposite sides of a rectangle are parallel.",
    ],
    childPrompts: [
      "How many right angles does a square have? (Say the answer.)",
      "Look at the letter T. Are the lines perpendicular or parallel? (Say the answer.)",
      "Look at the window. Are the opposite sides parallel? (Say the answer.)",
    ],
  },
  "MATH-13": {
    title: "条形统计图 — Bar graphs: most, least, difference, total",
    mathExample: "Favourite fruit (each bar = number of children): Apple 8, Orange 5, Mango 12, Banana 7. Most popular = Mango (12 is the tallest bar). Least popular = Orange (5 is the shortest bar). Difference: Apple − Orange = 8 − 5 = 3. Total: 8 + 5 + 12 + 7 = 32 children.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示条形统计图图片，说 'This is a bar graph. Each bar shows a number.' 让孩子注意条形图（bar graph）和条的高度（height of the bar）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'Favourite fruit: Apple 8, Orange 5, Mango 12, Banana 7.' 画简单的条形图或用文字描述。问孩子：'Which fruit is most popular?' 引导回答 'Mango is most popular because 12 is the tallest bar.' 再问：'Which is least popular?' 引导回答 'Orange is least popular because 5 is the shortest bar.' 然后问：'What is the difference between Apple and Orange?' 引导列式：8 − 5 = 3。最后问：'How many children in total?' 引导列式：8 + 5 + 12 + 7 = 32。强调关键词：bar graph（条形图）、tallest bar（最高的条）、shortest bar（最短的条）、most popular（最多）、least popular（最少）、difference（差值）、total（总数）。注意：P3 只教条形图，不教 P4 的折线图（line graph）或 P5 的饼图（pie chart）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'Favourite sports: Football 15, Basketball 10, Swimming 18, Badminton 9. Which sport is most popular?' 期待输出：'Swimming is most popular. 18 is the tallest bar.' 题目 2：'Same bar graph. Which is least popular?' 期待输出：'Badminton is least popular. 9 is the shortest bar.' 题目 3：'How many more children chose Swimming than Badminton?' 期待输出：'18 − 9 = 9. Nine more children chose Swimming.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出条形图信息并解释。比如 'Mango is most popular because it has the tallest bar.' 'The difference between Apple and Orange is 8 − 5 = 3.' 'The total is 32 children.'",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P3 数学题目，包括读条形图、找最多/最少、计算差值、求总数。对应申请 P4 的孩子需要掌握的 P3 内容（preceding level 规则）。题目用文字描述条形图（系统是文字 MCQ，没有图片上传功能），数字简单，条的高度差别明显。P2 第 5 周学过象形统计图（picture graph），本周升级到条形图。",
      },
    ],
    spokenLines: [
      "Mango is most popular.",
      "Mango has the tallest bar.",
      "Orange is least popular.",
      "Orange has the shortest bar.",
      "8 − 5 = 3",
      "The difference is 3.",
      "8 + 5 + 12 + 7 = 32",
      "The total is 32 children.",
    ],
    childPrompts: [
      "Favourite sports: Football 15, Basketball 10, Swimming 18, Badminton 9. Which sport is most popular? (Say the answer.)",
      "Same bar graph. Which is least popular? (Say the answer.)",
      "How many more children chose Swimming than Badminton? (Say the calculation.)",
    ],
  },
  "MATH-14": {
    title: "十万以内整数 — Numbers to 100 000: place value, compare",
    mathExample: "The number 73 685 = Seventy-three thousand, six hundred and eighty-five. In 73 685: 7 is in ten thousands place = 70 000, 3 is in thousands place = 3 000, 6 is in hundreds place = 600. Compare: 84 567 < 84 657 (because 5 hundreds < 6 hundreds). Add: 56 789 + 10 000 = 66 789.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '73 685 = Seventy-three thousand, six hundred and eighty-five.' 让孩子注意五位数的读法。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'73 685'。问孩子：'What is the value of 7?' 引导回答 '7 is in ten thousands place. 7 = 70 000.' 再问：'What is the value of 6?' 引导回答 '6 is in hundreds place. 6 = 600.' 然后写：'84 567 vs 84 657'。问：'Which is greater?' 引导比较：万位相同，千位相同，百位 5 < 6，所以 84 567 < 84 657。最后写：'56 789 + 10 000 = 66 789'。解释：加一万只改万位，5 变成 6。强调关键词：place value（位值）、ten thousands place（万位）、thousands place（千位）、hundreds place（百位）、compare（比较）、greater than / less than（大于/小于）。注意：P4 只教到 100 000（五位数），不教 P5 的小数（decimals）、百分数（percentages）。也不教 P4 下学期的因数倍数（factors/multiples）。P3 学过 10 000 以内（四位数），本周扩展到 100 000（五位数）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'In the number 85 432, what is the value of the digit 5?' 期待输出：'5 is in thousands place. The value is 5 000. Five thousand.' 题目 2：'Compare 67 890 and 67 980. Which is greater?' 期待输出：'67 980 is greater. Because 8 tens is greater than 9 tens. Wait, 67 980 has 9 in hundreds place, 67 890 has 8 in hundreds place. So 67 980 is greater.' 题目 3：'What is 56 789 + 10 000?' 期待输出：'56 789 + 10 000 = 66 789. Sixty-six thousand, seven hundred and eighty-nine.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出五位数并解释位值。比如 '73 685 = Seventy-three thousand, six hundred and eighty-five. The digit 7 is in ten thousands place. Its value is 70 000.' 或 '84 567 < 84 657 because 5 hundreds is less than 6 hundreds.'",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括十万以内整数（numbers to 100 000）、位值（place value: 万位、千位、百位、十位、个位）、读写数字、比较大小。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校、机场、图书馆等情境。强调：本周只教到 100 000（五位数），不教 P5 的小数、百分数，也不教 P4 下学期的因数倍数。",
      },
    ],
    spokenLines: [
      "73 685 = Seventy-three thousand, six hundred and eighty-five.",
      "In 73 685, the digit 7 is in ten thousands place.",
      "Its value is 70 000.",
      "84 567 < 84 657",
      "84 567 is less than 84 657.",
      "56 789 + 10 000 = 66 789",
      "Fifty-six thousand, seven hundred and eighty-nine plus ten thousand equals sixty-six thousand, seven hundred and eighty-nine.",
    ],
    childPrompts: [
      "In the number 85 432, what is the value of the digit 5? (Say the answer.)",
      "Compare 67 890 and 67 980. Which is greater? (Say the answer.)",
      "What is 56 789 + 10 000? (Say the calculation.)",
    ],
  },
  "MATH-15": {
    title: "因数与倍数 — Factors and multiples: common factors, common multiples",
    mathExample: "Factors of 12 = 1, 2, 3, 4, 6, 12. 3 is a factor of 12 because 12 ÷ 3 = 4 remainder 0. Common factors of 12 and 18 = 1, 2, 3, 6. Common multiples of 4 and 6 include 12, 24, 36.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '12 ÷ 3 = 4. 3 is a factor of 12.' 让孩子注意：因数 factor 是能整除某数的数。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'Factors of 12'。问孩子：'Which numbers divide 12 exactly?' 引导列举：1, 2, 3, 4, 6, 12（配对：1×12, 2×6, 3×4）。强调：1 和 12 自己都是因数，不要漏掉。然后写：'Is 6 a factor of 42?' 引导计算：42 ÷ 6 = 7 无余数，所以是。再写：'Common factors of 12 and 18'。先列 12 的因数：1, 2, 3, 4, 6, 12。再列 18 的因数：1, 2, 3, 6, 9, 18。找共同的：1, 2, 3, 6。然后写：'Is 35 a multiple of 7?' 引导：7 × 5 = 35，所以 35 是 7 的倍数。最后写：'Common multiples of 4 and 6'。列 4 的倍数：4, 8, 12, 16, 20, 24...。列 6 的倍数：6, 12, 18, 24...。找共同的：12, 24, 36... 强调关键词：factor（因数）、multiple（倍数）、common factors（公因数）、common multiples（公倍数）、divides exactly（整除）、remainder（余数）。注意：本周不教质数 prime numbers / 质因数分解 prime factorisation / HCF LCM 名称（只说 common factors / common multiples）。测试因数时数字 ≤ 100。公倍数是两个一位数的公倍数。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What are the factors of 18?' 期待输出：'1, 2, 3, 6, 9, 18. One, two, three, six, nine, eighteen.' 题目 2：'Is 8 a factor of 56?' 期待输出：'Yes. 56 ÷ 8 = 7. No remainder. So 8 is a factor of 56.' 题目 3：'What are the common multiples of 3 and 5?' 期待输出：'Multiples of 3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30... Multiples of 5: 5, 10, 15, 20, 25, 30... Common multiples: 15, 30, 45...'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出因数倍数并解释关系。比如 '12 的因数是 1, 2, 3, 4, 6, 12. 3 is a factor of 12 because 12 divided by 3 equals 4 with no remainder.' 或 '35 is a multiple of 7 because 7 times 5 equals 35.' 注意读法：factor（因数）、multiple（倍数）、common factors（公因数）、common multiples（公倍数）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括因数（factors）、倍数（multiples）、公因数（common factors）、公倍数（common multiples）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（学生分组、排队、分享文具等）。强调：本周不教质数、质因数分解、HCF/LCM 作为算法名称（只说 common factors / common multiples）。任何数都是自己的因数和倍数。常见错误：把倍数当因数、列因数漏 1 和自己、找公倍数只写一个数的倍数。",
      },
    ],
    spokenLines: [
      "Factors of 12 = 1, 2, 3, 4, 6, 12",
      "3 is a factor of 12 because 12 ÷ 3 = 4 remainder 0.",
      "Common factors of 12 and 18 = 1, 2, 3, 6",
      "35 is a multiple of 7 because 7 × 5 = 35.",
      "Common multiples of 4 and 6 include 12, 24, 36.",
      "If 3 is a factor of 15, then 15 is a multiple of 3.",
    ],
    childPrompts: [
      "What are the factors of 18? (Say the answer.)",
      "Is 8 a factor of 56? (Say the calculation and answer.)",
      "What are the first three common multiples of 3 and 5? (Say the answer.)",
    ],
  },
  "MATH-16": {
    title: "四则运算乘除算法 — Multiplication and division algorithms",
    mathExample: "Jun Wei counted 2413 stickers. He has 6 folders. 2413 ÷ 6 = 402 R1. Each folder gets 402 stickers, 1 left over. Also: 316 boxes × 28 pencils = 8848 pencils.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '2413 × 6.' 和 '2413 ÷ 6 = 402 R1.' 让孩子注意四位数的乘除算法。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'2413 ÷ 6 = 402 R1'。问孩子：'How many in each folder?' 引导回答 '402 stickers in each folder, 1 sticker left over.' 强调 remainder（余数）必须小于 divisor（除数）。然后写：'316 × 28 = 8848'。解释：3 位数 × 2 位数，两个部分积（316×20=6320, 316×8=2528），对齐位值后相加。关键词：multiplication algorithm（乘法算法）、division algorithm（除法算法）、partial product（部分积）、quotient（商）、remainder（余数）。注意：P4 只教 up to 4 digits by 1 digit（4 位数 × 1 位数）、up to 3 digits by 2 digits（3 位数 × 2 位数）、up to 4 digits by 1 digit division（4 位数 ÷ 1 位数）。不教两位数除法（那是 P5）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is 3456 × 7?' 期待输出：'3456 × 7 = 24192. Three thousand four hundred and fifty-six times seven equals twenty-four thousand one hundred and ninety-two.' 题目 2：'What is 425 × 36?' 期待输出：'425 × 36 = 15300. Four hundred and twenty-five times thirty-six equals fifteen thousand three hundred.' 题目 3：'What is 8964 ÷ 4?' 期待输出：'8964 ÷ 4 = 2241. Eight thousand nine hundred and sixty-four divided by four equals two thousand two hundred and forty-one.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释。比如 '2413 ÷ 6 = 402 R1'，孩子要说 'Two thousand four hundred and thirteen divided by six equals four hundred and two remainder one.' 或 '316 × 28 = 8848'，孩子要说 'Three hundred and sixteen times twenty-eight equals eight thousand eight hundred and forty-eight.' 注意读法：times（乘）、divided by（除）、remainder（余数）、equals（等于）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括四则运算里的乘法算法（multiplication algorithm: 4 位数 × 1 位数、3 位数 × 2 位数）、除法算法（division algorithm: 4 位数 ÷ 1 位数，可能有余数）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（图书馆、文具、回收、食堂等）。强调：本周不教运算顺序 order of operations（+ − 和 × ÷ 混合谁先算）、括号 brackets、小数 decimals、百分数 percentages、两位数除法 long division by 2-digit（那是 P5）、计算器 calculator。常见错误：进位漏写 carry error、个位对齐错 place value alignment、余数 ≥ 除数 remainder ≥ divisor（余数必须 < 除数）、3位数×2位数把第二个部分积放错位 partial product misaligned。",
      },
    ],
    spokenLines: [
      "2413 ÷ 6 = 402 R1",
      "Two thousand four hundred and thirteen divided by six equals four hundred and two remainder one.",
      "316 × 28 = 8848",
      "Three hundred and sixteen times twenty-eight equals eight thousand eight hundred and forty-eight.",
      "3456 × 7 = 24192",
      "Three thousand four hundred and fifty-six times seven equals twenty-four thousand one hundred and ninety-two.",
      "425 × 36 = 15300",
      "Four hundred and twenty-five times thirty-six equals fifteen thousand three hundred.",
    ],
    childPrompts: [
      "What is 3456 × 7? (Say the calculation.)",
      "What is 8964 ÷ 4? (Say the calculation.)",
      "What is 425 × 36? (Say the calculation.)",
    ],
  },
  "MATH-17": {
    title: "带分数与假分数 — Mixed numbers and improper fractions",
    mathExample: "2 1/3 = 7/3 because 2 × 3 + 1 = 7. Also: 11/4 = 2 3/4 because 11 ÷ 4 = 2 remainder 3.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示两个分数：2 1/3 和 7/3。说 '2 1/3 is a mixed number. It has a whole number and a fraction.' '7/3 is an improper fraction. The numerator is bigger than the denominator.' 让孩子注意两种形式的区别。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'2 1/3'。问孩子：'Can we write this as an improper fraction?' 引导计算：2 × 3 + 1 = 7，所以 2 1/3 = 7/3。强调公式：a b/c = (a×c+b)/c。然后写：'11/4'。问：'Can we write this as a mixed number?' 引导除法：11 ÷ 4 = 2 余数 3，所以 11/4 = 2 3/4。强调：商是整数部分，余数是新分子，分母不变。关键词：mixed number（带分数）、improper fraction（假分数）、whole number（整数）、numerator（分子）、denominator（分母）、remainder（余数）。注意：本周不教一组的几分之几（fraction of a set）、异分母加减、带分数加减（P5）、分数乘法（P5）。分母不超过 12。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'Convert 1 2/5 to an improper fraction.' 期待输出：'1 × 5 + 2 = 7. So 1 2/5 = 7/5. One and two fifths equals seven fifths.' 题目 2：'Convert 13/6 to a mixed number.' 期待输出：'13 ÷ 6 = 2 remainder 1. So 13/6 = 2 1/6. Thirteen sixths equals two and one sixth.' 题目 3：'Which form is 9/4? Convert it to the other form.' 期待输出：'9/4 is an improper fraction because 9 is greater than 4. 9 ÷ 4 = 2 remainder 1. So 9/4 = 2 1/4.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出分数转换并解释步骤。比如 '2 1/3 = 7/3'，孩子要说 'Two and one third equals seven thirds. I multiply 2 times 3 plus 1 to get 7.' 或 '11/4 = 2 3/4'，孩子要说 'Eleven quarters equals two and three quarters. I divide 11 by 4 to get 2 remainder 3.' 注意读法：mixed number（带分数）、improper fraction（假分数）、thirds / quarters / fifths / sixths（分母读法）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括带分数与假分数的识别和转换（mixed numbers and improper fractions: identify and convert both ways）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（食堂、美术课、图书馆等）。强调：本周只教识别和转换，不教一组的几分之几（fraction of a set, 下周）、异分母加减（adding/subtracting unlike fractions）、带分数加减（adding mixed numbers, P5）、分数乘法（multiplying fractions, P5）。分母不超过 12。常见错误：换成假分数时只乘不加整数部分（forgetting to add the whole number: should be a×c+b, not just a×c）、换成带分数时余数当分子忘了（forgetting remainder becomes numerator）、分子分母对调（swapping numerator and denominator）。",
      },
    ],
    spokenLines: [
      "2 1/3 = 7/3",
      "Two and one third equals seven thirds.",
      "11/4 = 2 3/4",
      "Eleven quarters equals two and three quarters.",
      "2 × 3 + 1 = 7",
      "11 ÷ 4 = 2 remainder 3",
      "1 2/5 = 7/5",
      "One and two fifths equals seven fifths.",
    ],
    childPrompts: [
      "Convert 1 2/5 to an improper fraction. (Say the calculation.)",
      "Convert 13/6 to a mixed number. (Say the calculation.)",
      "Which form is 9/4? Convert it to the other form. (Say the calculation.)",
    ],
  },
  "MATH-18": {
    title: "一组的几分之几 — Fraction of a set",
    mathExample: "2/3 of 18 = 18 ÷ 3 × 2 = 6 × 2 = 12. Divide by denominator first, then multiply by numerator. Also: 1/4 of 12 = 12 ÷ 4 = 3.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '1/4 of 12' 和 '2/3 of 18'。让孩子注意 'of' 这个词表示找一组里的几分之几。展示 12 个物品，问 '1/4 is how many?' 引导：把 12 分成 4 份，每份 3 个。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'2/3 of 18'。问孩子：'How do we find 2/3 of 18?' 引导算法：先÷分母再×分子。18 ÷ 3 = 6（一份是 6），6 × 2 = 12（2 份是 12）。所以 2/3 of 18 = 12。强调：divide by denominator first, then multiply by numerator。然后写：'1/4 of 12 = 12 ÷ 4 = 3'。再写：'5/8 of 24'。引导：24 ÷ 8 = 3，3 × 5 = 15。关键词：fraction of a set（一组的几分之几）、of（的）、divide by denominator（除以分母）、multiply by numerator（乘以分子）。注意：本周不教带分数互换（已在第 17 周）、异分母加减、分数乘法（P5）、小数百分数、余数作为分数。分母不超过 12，集合必须整除。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is 1/3 of 15?' 期待输出：'1/3 of 15 = 15 ÷ 3 = 5. One third of fifteen equals five.' 题目 2：'Priya has 20 stickers. She gives 3/5 of them to Jun Wei. How many stickers does she give?' 期待输出：'3/5 of 20 = 20 ÷ 5 × 3 = 4 × 3 = 12. Priya gives 12 stickers.' 题目 3：'What is 2/3 of 18?' 期待输出：'2/3 of 18 = 18 ÷ 3 × 2 = 6 × 2 = 12. Two thirds of eighteen equals twelve.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释步骤。比如 '2/3 of 18 = 12'，孩子要说 'Two thirds of eighteen equals twelve. I divide 18 by 3 to get 6. Then I multiply 6 by 2 to get 12.' 或 '1/4 of 12 = 3'，孩子要说 'One quarter of twelve equals three. I divide 12 by 4 to get 3.' 注意读法：of（的）、divide by（除以）、multiply by（乘以）、thirds / quarters / fifths（分母读法）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括找一组的几分之几（fraction of a set）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（教室学生、文具、食堂座位、图书馆书籍等）。强调：算法是先÷分母再×分子（divide by denominator first, then multiply by numerator）。常见错误：先乘后除（multiplying before dividing）、把 of 当成减去（misinterpreting 'of' as subtraction）、分母分子对调（swapping numerator and denominator）。分母不超过 12，集合必须整除（no remainders）。",
      },
    ],
    spokenLines: [
      "2/3 of 18 = 18 ÷ 3 × 2 = 12",
      "Two thirds of eighteen equals twelve.",
      "1/4 of 12 = 12 ÷ 4 = 3",
      "One quarter of twelve equals three.",
      "5/8 of 24 = 24 ÷ 8 × 5 = 15",
      "Five eighths of twenty-four equals fifteen.",
      "3/5 of 20 = 20 ÷ 5 × 3 = 12",
      "Three fifths of twenty equals twelve.",
    ],
    childPrompts: [
      "What is 1/3 of 15? (Say the calculation.)",
      "Priya has 20 stickers. She gives 3/5 of them to Jun Wei. How many stickers does she give? (Say the calculation.)",
      "What is 2/3 of 18? (Say the calculation.)",
    ],
  },
  "MATH-19": {
    title: "分数加减 — Adding and subtracting fractions",
    mathExample: "2/7 + 3/7 = 5/7. Same denominator: add numerators. 1/2 + 1/4 = 2/4 + 1/4 = 3/4. Unlike fractions: find common denominator first. 2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2. Simplify to simplest form.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '2/7 + 3/7' 和 '1/2 + 1/4'。让孩子注意：同分母的分数可以直接加分子，异分母的要先找公分母。展示两个披萨的图：一个分成 7 块（2 块红色 + 3 块黄色 = 5 块），问 'How many sevenths?' 引导：2/7 + 3/7 = 5/7。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'2/7 + 3/7'。问孩子：'Are the denominators the same?' Yes. 'So we can add the numerators: 2 + 3 = 5. Answer: 5/7.' 这叫 like fractions（同分母分数）。然后写：'1/2 + 1/4'。问孩子：'Are the denominators the same?' No. 'So we need a common denominator first.' 引导：1/2 = 2/4。现在变成 2/4 + 1/4 = 3/4。强调：unlike fractions（异分母分数）要先找 common denominator（公分母），然后加减分子。再写：'2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2'。提醒：答案要化到 simplest form（最简分数）。关键词：like fractions（同分母）、unlike fractions（异分母）、common denominator（公分母）、simplest form（最简分数）。注意：本周只教至多两个不同分母（not more than two different denominators），分母不超过 12。不教带分数加减（P5）、分数乘法（P5）、三个不同分母、小数百分数。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is 3/4 − 1/2?' 期待输出：'3/4 − 1/2 = 3/4 − 2/4 = 1/4. Three quarters minus one half equals one quarter.' 题目 2：'Mei ate 1/3 of a cake. Ali ate 1/6 of the same cake. What fraction did they eat altogether?' 期待输出：'1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2. They ate one half of the cake.' 题目 3：'What is 5/12 + 1/4? Give your answer in simplest form.' 期待输出：'5/12 + 1/4 = 5/12 + 3/12 = 8/12 = 2/3. Five twelfths plus one quarter equals two thirds.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释步骤。比如 '1/2 + 1/4 = 3/4'，孩子要说 'One half plus one quarter equals three quarters. I change one half to two quarters. Then I add two quarters plus one quarter to get three quarters.' 或 '2/3 − 1/6 = 1/2'，孩子要说 'Two thirds minus one sixth equals one half. I change two thirds to four sixths. Then I subtract four sixths minus one sixth to get three sixths, which simplifies to one half.' 注意读法：plus（加）、minus（减）、equals（等于）、change to（变成）、common denominator（公分母）、simplest form（最简分数）、thirds / quarters / sixths / eighths / twelfths（分母读法）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括同分母和异分母分数加减（adding and subtracting like and unlike fractions）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（教室活动、分享食物、文具、花园等）。强调：同分母直接加减分子，异分母先找公分母再加减分子，答案要化到最简分数。常见错误：分子分母一起加（1/2 + 1/3 ≠ 2/5）、异分母不先通分、通分后忘了改分子（1/2 变成 2/4 时分子也要×2）、答案不约分（写 4/8 而不是 1/2）。本周只教至多两个不同分母，分母不超过 12。",
      },
    ],
    spokenLines: [
      "2/7 + 3/7 = 5/7",
      "Two sevenths plus three sevenths equals five sevenths.",
      "1/2 + 1/4 = 2/4 + 1/4 = 3/4",
      "One half plus one quarter equals three quarters. I change one half to two quarters first.",
      "2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2",
      "Two thirds minus one sixth equals one half. I change two thirds to four sixths, then simplify three sixths to one half.",
      "3/4 − 1/2 = 3/4 − 2/4 = 1/4",
      "Three quarters minus one half equals one quarter.",
      "5/12 + 1/4 = 5/12 + 3/12 = 8/12 = 2/3",
      "Five twelfths plus one quarter equals two thirds.",
    ],
    childPrompts: [
      "What is 3/4 − 1/2? (Say the calculation and answer in simplest form.)",
      "Mei ate 1/3 of a cake. Ali ate 1/6 of the same cake. What fraction did they eat altogether? (Say the calculation.)",
      "What is 5/12 + 1/4? Give your answer in simplest form. (Say the calculation.)",
    ],
  },
  "MATH-20": {
    title: "小数到三位 — Decimals up to 3 decimal places",
    mathExample: "0.47 < 0.5 because 0.47 = 47 hundredths, 0.50 = 50 hundredths. 3/5 = 6/10 = 0.6. The denominator 5 is a factor of 10. 2.36 to 1 d.p. = 2.4. Look at hundredths: 6 ≥ 5, round up.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '0.47' 和 '0.5'。让孩子注意：小数可以有不同位数，比较时要补零对齐。展示两个数字卡：0.47 和 0.5。问 'Which is bigger?' 引导：0.47 = 47 hundredths, 0.5 = 0.50 = 50 hundredths。所以 0.5 > 0.47。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'3.256'。问孩子：'What is the value of the digit 5?' 引导：5 在百分位（hundredths place）= 0.05。位值：十分位 tenths（0.1）、百分位 hundredths（0.01）、千分位 thousandths（0.001）。然后写：'0.47 and 0.5'。问孩子：'Which is greater?' 引导：补零对齐，0.47 = 0.470, 0.5 = 0.500。比较：470 < 500，所以 0.47 < 0.5。再写：'0.4 as a fraction'。引导：0.4 = 4/10 = 2/5（约分到最简分数 simplest form）。写：'3/5 as a decimal'。引导：分母 5 是 10 的因数（factor of 10）。3/5 = 6/10 = 0.6。写：'Round 2.36 to 1 d.p.'。引导：看百分位（hundredths place）：6 ≥ 5，进位。2.36 → 2.4。关键词：tenths（十分位）、hundredths（百分位）、thousandths（千分位）、place value（位值）、compare（比较）、order（排序）、decimal（小数）、fraction（分数）、round（四舍五入）、d.p.（decimal place，小数位）、simplest form（最简分数）。注意：本周只教 P4 Decimals 1.1–1.5（notation, place values, comparing, decimals ↔ fractions when denominator is factor of 10/100, rounding to whole/1 d.p./2 d.p.）。不教小数加减乘除（adding/subtracting/multiplying/dividing decimals）、×÷10/100/1000（P5）、百分数（percentages）、4 位小数（4 decimal places）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is the value of the digit 8 in 12.385?' 期待输出：'The digit 8 is in the hundredths place. Its value is 0.08. Zero point zero eight or eight hundredths.' 题目 2：'Compare 1.2, 1.15, and 1.205. Arrange them from smallest to greatest.' 期待输出：'Align the decimal places: 1.200, 1.150, 1.205. From smallest to greatest: 1.15, 1.2, 1.205. One point one five, one point two, one point two zero five.' 题目 3：'Convert 0.6 to a fraction in simplest form. Convert 3/4 to a decimal. Round 4.68 to 1 decimal place.' 期待输出：'0.6 = 6/10 = 3/5. Three fifths. 3/4 = 75/100 = 0.75. Zero point seven five. 4.68 to 1 d.p.: look at hundredths, 8 is greater than or equal to 5, round up to 4.7. Four point seven.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出小数并解释位值、比较、转换、四舍五入。比如 '3.256'，孩子要说 'Three point two five six. The 5 is in the hundredths place. Its value is zero point zero five or five hundredths.' 或 '0.47 < 0.5'，孩子要说 'Zero point four seven is less than zero point five. Because zero point four seven equals forty-seven hundredths, and zero point five equals fifty hundredths.' 注意读法：point（小数点）、tenths（十分位）、hundredths（百分位）、thousandths（千分位）、less than（小于）、greater than（大于）、equals（等于）、simplest form（最简分数）、round to（四舍五入到）、d.p.（decimal place）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括小数位值（place values）、比较排序（comparing and ordering）、小数转分数（decimals to fractions）、分数转小数（fractions to decimals when denominator is factor of 10/100）、四舍五入（rounding to whole/1 d.p./2 d.p.）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（测量、比赛、图书馆、食堂座位比例等）。强调：位值读法（tenths, hundredths, thousandths）、比较时补零对齐、小数转分数要约分到最简、分数转小数分母要是 10 或 100 的因数、四舍五入看下一位（≥5 进位，<5 不进位）。常见错误：0.35 当成 0.350 比大小只看位数、0.4 = 4/10 忘了约分、四舍五入看错位（要四舍五入到 1 d.p. 却看了百分位而不是十分位后一位）。本周不教小数加减乘除（下周开始）、×÷10/100/1000（P5）、百分数、4 位小数。",
      },
    ],
    spokenLines: [
      "0.47 < 0.5",
      "Zero point four seven is less than zero point five.",
      "3/5 = 0.6",
      "Three fifths equals zero point six.",
      "2.36 to 1 d.p. = 2.4",
      "Two point three six rounded to one decimal place equals two point four.",
      "0.4 = 4/10 = 2/5",
      "Zero point four equals four tenths or two fifths in simplest form.",
      "5.852 to 2 d.p. = 5.85",
      "Five point eight five two rounded to two decimal places equals five point eight five.",
    ],
    childPrompts: [
      "What is the value of the digit 8 in 12.385? (Say the place and value.)",
      "Compare 1.2, 1.15, and 1.205. Arrange from smallest to greatest. (Say the order.)",
      "Convert 0.6 to a fraction in simplest form. Convert 3/4 to a decimal. Round 4.68 to 1 d.p. (Say all three.)",
    ],
  },
  "MATH-21": {
    title: "小数加减 — Adding and subtracting decimals (up to 2 d.p.)",
    mathExample: "3.45 + 2.7: Align decimal points. 3.45 + 2.70 = 6.15. Also: 6.80 − 1.35 = 5.45. $4.50 + $2.75 = $7.25.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '3.45 + 2.7' 和 '6.8 − 1.35'。让孩子注意：小数加减要对齐小数点。展示两个数字卡：3.45 和 2.7。问 'How do we add these?' 引导：写成竖式，对齐小数点，补零 2.70，然后加。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'3.45 + 2.7'。问孩子：'Where is the decimal point?' 引导：对齐小数点。写竖式：3.45 下面写 2.70（补零）。从右边开始加：5 + 0 = 5, 4 + 7 = 11（写 1 进 1），3 + 2 + 1 = 6。答案 6.15。然后写：'6.8 − 1.35'。引导：对齐小数点，6.80 − 1.35。从右边开始减：0 − 5 不够，从 8 借 1，10 − 5 = 5。8 − 1 − 3 = 4。6 − 1 = 5。答案 5.45。再写：'$4.50 + $2.75'。引导：钱币是 2 位小数。对齐小数点，$4.50 + $2.75 = $7.25。强调关键词：decimal point（小数点）、align（对齐）、add zeros（补零）、borrow（借位）、carry（进位）。注意：本周只教 P4 Decimals 2.1 最多两位小数的加减，不教三位小数加减、小数乘除（Decimals 3.1–3.3）、×÷10/100/1000（P5）、百分数（percentages）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is 5.04 + 0.8?' 期待输出：'Align decimal points: 5.04 + 0.80 = 5.84. Five point zero four plus zero point eight equals five point eight four.' 题目 2：'What is 10 − 3.26?' 期待输出：'Write as 10.00 − 3.26. Align decimal points. 10.00 − 3.26 = 6.74. Ten minus three point two six equals six point seven four.' 题目 3：'Mei spent $4.50 and $2.75. How much in total?' 期待输出：'$4.50 + $2.75 = $7.25. Align decimal points. Four dollars fifty cents plus two dollars seventy-five cents equals seven dollars twenty-five cents.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释对齐小数点的过程。比如 '3.45 + 2.7'，孩子要说 'I align the decimal points. I add a zero to make 2.70. Then I add from the right: 5 + 0 = 5, 4 + 7 = 11, write 1 carry 1, 3 + 2 + 1 = 6. The answer is 6.15.' 或 '6.8 − 1.35'，孩子要说 'I align the decimal points. I write 6.80. I subtract from the right: 0 − 5, I need to borrow, 10 − 5 = 5. 8 − 1 − 3 = 4. 6 − 1 = 5. The answer is 5.45.' 注意读法：decimal point（小数点）、align（对齐）、borrow（借位）、carry（进位）、from the right（从右边）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括小数加减（adding and subtracting decimals up to 2 decimal places）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（测量、钱币、液体容量等）。强调：对齐小数点是关键，补零后位数相同，从右边开始算。常见错误：不对齐小数点、从左边开始减、借位漏了某一位。本周不教三位小数加减、小数乘除、×÷10/100/1000、百分数。",
      },
    ],
    spokenLines: [
      "3.45 + 2.7 = 6.15",
      "Three point four five plus two point seven equals six point one five.",
      "6.8 − 1.35 = 5.45",
      "Six point eight minus one point three five equals five point four five.",
      "$4.50 + $2.75 = $7.25",
      "Four dollars fifty cents plus two dollars seventy-five cents equals seven dollars twenty-five cents.",
      "10 − 3.26 = 6.74",
      "Ten minus three point two six equals six point seven four.",
      "5.04 + 0.8 = 5.84",
      "Five point zero four plus zero point eight equals five point eight four.",
    ],
    childPrompts: [
      "What is 5.04 + 0.8? (Say the calculation and align decimal points.)",
      "What is 10 − 3.26? (Say the calculation and show how you write 10.00.)",
      "Mei spent $4.50 and $2.75. How much in total? (Say the calculation.)",
    ],
  },
  "MATH-22": {
    title: "小数乘除 — Multiplying and dividing decimals",
    mathExample: "2.45 × 3 = 7.35. 6.4 ÷ 4 = 1.6. 5 ÷ 2 = 2.5. 7 ÷ 4 = 1.75. Round 4.38 × 2 to 1 d.p. → 8.76 → 8.8.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "说 '2.45 × 3' 和 '6.4 ÷ 4'。让孩子注意：小数乘除一位整数、整数除以整数商为小数。展示数字卡：2.45 和 3。问 'How do we multiply these?' 引导：先算 245 × 3 = 735，小数点往左移 2 位 = 7.35。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'2.45 × 3'。问孩子：'How many decimal places does 2.45 have?' 2 位。'So we calculate 245 × 3 = 735, then move the decimal point 2 places to the left: 7.35.' 然后写：'6.4 ÷ 4'。引导：小数点直接上移。64 ÷ 4 = 16，小数点在十分位，答案 1.6。再写：'5 ÷ 2'。问：'Can 2 divide 5 evenly?' No. 'So we add .0 to 5, making it 5.0. Now 50 ÷ 2 = 25, write 2.5.' 写：'7 ÷ 4'。引导：4 goes into 7 once (余 3)，补零 30，4 goes into 30 seven times (余 2)，补零 20，4 goes into 20 five times。答案 1.75。最后写：'Round 4.38 × 2 to 1 d.p.'。引导：4.38 × 2 = 8.76，看百分位 6 ≥ 5，进位 = 8.8。强调关键词：decimal places（小数位）、multiply（乘）、divide（除）、quotient（商）、remainder（余数）、round to（四舍五入到）、d.p.（decimal place）。注意：本周只教 P4 Decimals 3.1–3.3，不教小数×小数、除以小数、×÷10/100/1000（P5）、百分数、3 位小数×一位数。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'What is 3.26 × 5?' 期待输出：'3.26 has 2 decimal places. 326 × 5 = 1630. Move the point 2 places left: 16.30. Three point two six times five equals sixteen point three zero or sixteen point three.' 题目 2：'What is 7 ÷ 4?' 期待输出：'4 goes into 7 once, remainder 3. Add zero: 30. 4 goes into 30 seven times, remainder 2. Add zero: 20. 4 goes into 20 five times. Answer: 1.75. Seven divided by four equals one point seven five.' 题目 3：'What is 4.38 × 2, rounded to 1 decimal place?' 期待输出：'4.38 × 2 = 8.76. Look at the hundredths place: 6 is greater than or equal to 5, so round up. 8.76 to 1 d.p. is 8.8. Eight point eight.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释步骤。比如 '2.45 × 3'，孩子要说 'I count the decimal places: 2.45 has 2 decimal places. I calculate 245 times 3 equals 735. Then I move the decimal point 2 places to the left: 7.35. Two point four five times three equals seven point three five.' 或 '5 ÷ 2'，孩子要说 '5 divided by 2. 2 cannot divide 5 evenly. I add point zero to 5. Now 50 divided by 2 equals 25. Write 2.5. Five divided by two equals two point five.' 注意读法：times（乘）、divided by（除）、decimal places（小数位）、move the point（移动小数点）、round to（四舍五入到）、d.p.（decimal place）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括小数乘除（multiplying and dividing decimals up to 2 d.p. by a 1-digit whole number）、整数除以整数商为小数（dividing a whole number by a whole number with quotient as a decimal）、四舍五入（rounding to a specified degree of accuracy）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（购物、测量、分配等）。金额写新元 S$ 不是美元 $。强调：小数点位置很重要，除不尽时要写成小数，四舍五入看下一位。常见错误：小数点位置错、除不尽不会写成小数、四舍五入看错位。本周不教小数×小数、除以小数、×÷10/100/1000、百分数。",
      },
    ],
    spokenLines: [
      "2.45 × 3 = 7.35",
      "Two point four five times three equals seven point three five.",
      "6.4 ÷ 4 = 1.6",
      "Six point four divided by four equals one point six.",
      "5 ÷ 2 = 2.5",
      "Five divided by two equals two point five.",
      "7 ÷ 4 = 1.75",
      "Seven divided by four equals one point seven five.",
      "3.26 × 5 = 16.30",
      "Three point two six times five equals sixteen point three.",
      "4.38 × 2 = 8.76, to 1 d.p. = 8.8",
      "Four point three eight times two equals eight point seven six. Rounded to one decimal place is eight point eight.",
    ],
    childPrompts: [
      "What is 3.26 × 5? (Say the calculation and explain decimal places.)",
      "What is 7 ÷ 4? (Say the calculation step by step.)",
      "What is 4.38 × 2, rounded to 1 decimal place? (Say the calculation and rounding.)",
    ],
  },
  "MATH-23": {
    title: "面积和周长进阶 — Area and perimeter: missing side, composite",
    mathExample: "Rectangle area 24 cm², length 8 cm → breadth = 24 ÷ 8 = 3 cm. Square area 36 cm² → side = 6 cm. Square perimeter 20 cm → side = 20 ÷ 4 = 5 cm. L-shape: 6×4 rectangle + 3×2 rectangle = 24 + 6 = 30 cm² total area.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "展示长方形图，标注：area 24 cm², length 8 cm。问孩子：'What is the breadth?' 引导：area = length × breadth → breadth = area ÷ length = 24 ÷ 8 = 3 cm。让孩子注意：已知面积和一边可以求另一边。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上画长方形，标注：area 24 cm², length 8 cm。写：'breadth = area ÷ length = 24 ÷ 8 = 3 cm'。然后画正方形，标注：area 36 cm²。问：'What is the side?' 引导：36 = 6 × 6，所以 side = 6 cm。再画正方形，标注：perimeter 20 cm。写：'side = perimeter ÷ 4 = 20 ÷ 4 = 5 cm'。接着画 L-shape（用文字描述）：'An L-shape is made of a 6 cm × 4 cm rectangle joined to a 3 cm × 2 cm rectangle along the 3 cm side.' 写：'Area = (6×4) + (3×2) = 24 + 6 = 30 cm²'。强调：组合图形可以拆分（split）成几个长方形分别算面积再相加。周长只算外轮廓（outer perimeter），不算内部拼接线。关键词：area（面积）、perimeter（周长）、length（长）、width / breadth（宽）、side（边）、composite figure（组合图形）、split（拆分）、outer perimeter（外轮廓）。注意：本周只教 P4 Area and Perimeter 1.1–1.3，不教三角形面积、圆形、体积、cm²↔m²互换。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出算式和答案。题目 1：'A rectangle has area 48 m² and breadth 6 m. What is the length?' 期待输出：'length = area ÷ breadth = 48 ÷ 6 = 8 m. Forty-eight square metres divided by six metres equals eight metres.' 题目 2：'A square has area 49 cm². What is the side?' 期待输出：'49 = 7 × 7, so side = 7 cm. Seven times seven equals forty-nine, so the side is seven centimetres.' 题目 3：'An L-shape is made of an 8 cm × 3 cm rectangle and a 4 cm × 5 cm rectangle. They share the 4 cm side. What is the total area?' 期待输出：'Area = (8×3) + (4×5) = 24 + 20 = 44 cm². Eight times three plus four times five equals forty-four square centimetres.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出算式并解释步骤。比如 'Rectangle area 24 cm², length 8 cm → breadth ?'，孩子要说 'breadth equals area divided by length. Twenty-four divided by eight equals three. The breadth is three centimetres.' 或 'L-shape: 6×4 rectangle + 3×2 rectangle'，孩子要说 'I split the L-shape into two rectangles. Rectangle one: six times four equals twenty-four square centimetres. Rectangle two: three times two equals six square centimetres. Total area: twenty-four plus six equals thirty square centimetres.' 注意读法：area（面积）、perimeter（周长）、breadth / width（宽）、side（边）、split（拆分）、times（乘）、divided by（除）、equals（等于）、square centimetres（平方厘米）、square metres（平方米）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括已知面积/周长求一边（finding one dimension given the other and area/perimeter）、已知正方形面积/周长求边长（finding side of square given area/perimeter）、组合图形面积和周长（area and perimeter of composite figures made up of rectangles and squares）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（教室、花园、图书馆等）。描述组合图形时给足数字让孩子能唯一确定如何拆分或相减。强调：长方形 area = length × width → 已知 area 和 length，求 width：width = area ÷ length；周长只算外轮廓，不算内部拼接线。常见错误：面积÷错边、正方形边长当面积、组合图形漏算某一块、周长算进内部边。本周不教三角形面积、圆形、体积、cm²↔m²互换。",
      },
    ],
    spokenLines: [
      "breadth = area ÷ length",
      "Breadth equals area divided by length.",
      "24 ÷ 8 = 3 cm",
      "Twenty-four divided by eight equals three centimetres.",
      "Square area 36 cm² → side 6 cm",
      "Thirty-six square centimetres means side is six centimetres.",
      "Square perimeter 20 cm → side = 20 ÷ 4 = 5 cm",
      "Perimeter twenty centimetres divided by four equals five centimetres per side.",
      "L-shape: (6×4) + (3×2) = 24 + 6 = 30 cm²",
      "L-shape total area: six times four plus three times two equals thirty square centimetres.",
      "Perimeter counts only outer edges.",
      "Perimeter只算外轮廓，不算内部拼接线。",
    ],
    childPrompts: [
      "A rectangle has area 48 m² and breadth 6 m. What is the length? (Say the calculation.)",
      "A square has area 49 cm². What is the side? (Say the calculation.)",
      "An L-shape is made of an 8×3 rectangle and a 4×5 rectangle. They share the 4 cm side. What is the total area? (Say the calculation.)",
    ],
  },
  "MATH-24": {
    title: "表格和折线图 — Tables and line graphs",
    mathExample: "Temperature at noon: Monday 30°C, Tuesday 31°C, Wednesday 29°C, Thursday 32°C, Friday 30°C. The line goes up from Monday to Tuesday (30 → 31), down to Wednesday (31 → 29), up to Thursday (29 → 32), down to Friday (32 → 30). Highest: Thursday 32°C. Lowest: Wednesday 29°C. Difference: 32 − 29 = 3°C.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "用文字描述一组温度数据：'Temperature at noon each day: Monday 30°C, Tuesday 31°C, Wednesday 29°C.' 问孩子：'On which day was it hottest?' 引导：比较 30, 31, 29，最大是 31，所以 Tuesday。让孩子注意：表格和折线图都是从数据里找最高/最低、算差值、看趋势。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写温度数据（文字描述）：'Temperature at noon each day: Monday 30°C, Tuesday 31°C, Wednesday 29°C, Thursday 32°C, Friday 30°C.' 说：'Imagine this is a line graph. The line goes up from Monday to Tuesday (30 → 31), down to Wednesday (31 → 29), up to Thursday (29 → 32), down to Friday (32 → 30).' 画简单示意图：横轴日期 Mon Tue Wed Thu Fri，纵轴温度，标上 30, 31, 29, 32, 30，连线。问孩子：'Which day had the highest temperature?' 引导：compare all values: 30, 31, 29, 32, 30. Highest is 32, so Thursday. 再问：'What is the difference between the highest and the lowest?' 引导：highest = Thursday 32°C, lowest = Wednesday 29°C. Difference = 32 − 29 = 3°C. 强调：读折线图时看点在纵轴的高度，不要看斜线（the slope is NOT the value; read the point on the vertical axis）。接着写表格练习（文字描述）：'Library visitors: Monday 56, Tuesday ?, Wednesday 68, Thursday 74, Friday 70. The number increased by 6 from Monday to Tuesday.' 问孩子：'What is Tuesday?' 引导：Monday 56 + 6 = 62. Check: 62 + 6 = 68 (Wednesday) ✓. 关键词：table（表格）、line graph（折线图）、horizontal axis（横轴）、vertical axis（纵轴）、data point（数据点）、highest（最高）、lowest（最低）、increase（上升）、decrease（下降）、difference（差值）、pattern（规律）。注意：本周只教 P4 Statistics 1.1–1.2（completing a table from given data; reading and interpreting data from tables and line graphs），不教饼图（pie charts，下周）、条形图作为主要新技能（bar graphs 已在 P3 第 13 周学过）、平均数/均值（mean / average）、P5/P6 数据主题（mode / median / range）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出比较和算式。题目 1：'Rainfall in mm: Monday 12, Tuesday 8, Wednesday 15, Thursday 10, Friday 6. On which day was the rainfall the lowest?' 期待输出：'Compare the numbers: 12, 8, 15, 10, 6. The lowest is 6. So Friday had the lowest rainfall.' 题目 2：'Book sales: Monday 24, Tuesday 30, Wednesday 27, Thursday 33, Friday 36. On which day did sales go down compared to the previous day?' 期待输出：'Monday 24, Tuesday 30. Tuesday went up. Tuesday 30, Wednesday 27. 30 is more than 27, so Wednesday went down. Wednesday is the answer.' 题目 3：'Temperature: 8 a.m. 26°C, 10 a.m. 29°C, 12 noon 31°C. What is the difference between noon and 8 a.m.?' 期待输出：'Noon is 31°C. 8 a.m. is 26°C. Difference equals 31 minus 26 equals 5°C.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出数据并解释趋势。比如 'Temperature: Monday 30°C, Tuesday 31°C, Wednesday 29°C, Thursday 32°C, Friday 30°C'，孩子要说 'The line goes up from Monday to Tuesday because thirty is less than thirty-one. Then it goes down to Wednesday because thirty-one is more than twenty-nine. Then it goes up to Thursday because twenty-nine is less than thirty-two. Then it goes down to Friday because thirty-two is more than thirty. The highest temperature is Thursday at thirty-two degrees Celsius. The lowest is Wednesday at twenty-nine degrees Celsius. The difference is thirty-two minus twenty-nine equals three degrees Celsius.' 或 'Library visitors: Monday 56, Tuesday ?, Wednesday 68, Thursday 74, Friday 70. The pattern is plus six from Monday to Tuesday'，孩子要说 'Monday is fifty-six. Add six: fifty-six plus six equals sixty-two. So Tuesday is sixty-two visitors. Check: sixty-two plus six equals sixty-eight. That matches Wednesday. Correct.' 注意读法：highest（最高）、lowest（最低）、increase / goes up（上升）、decrease / goes down（下降）、difference（差值）、pattern（规律）、add（加）、minus / subtract（减）、compare（比较）、degrees Celsius（摄氏度）、books / visitors（单位）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括从表补全数据（completing a table from given data）、读折线图找最高/最低点（finding highest/lowest point on line graph）、判断升降趋势（identifying increase/decrease）、计算差值（calculating difference）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则）。题目使用新加坡学校情境（图书馆、食堂、天气、East Coast Park 等）。描述表格和折线图时用文字给足数字让孩子能唯一确定最高/最低点和趋势，例如 'Temperature at noon: Monday 30°C, Tuesday 31°C, Wednesday 29°C, Thursday 32°C, Friday 30°C. The line goes up from Monday to Tuesday, down to Wednesday, up to Thursday, down to Friday.' 强调：读折线图时看点在纵轴的高度，不要看斜线（the slope is NOT the value）；算差值用减法（difference = higher − lower）；表格填数时写上单位（°C, books, visitors 等）。常见错误：把折线两点之间的斜率当成数值（confusing slope with value）、读错横轴日期（misreading the day on horizontal axis）、算差值用加法（using addition instead of subtraction）、表格填数时单位漏写或错写（missing or wrong units）。本周不教饼图（pie charts，下周）、条形图作为主要新技能（bar graphs 已在 P3 第 13 周学过）、平均数/均值（mean / average）、P5/P6 数据主题（mode / median / range）。",
      },
    ],
    spokenLines: [
      "Temperature Monday 30, Tuesday 31, Wednesday 29, Thursday 32, Friday 30.",
      "The line goes up from Monday to Tuesday. Thirty to thirty-one.",
      "Highest temperature is Thursday at thirty-two degrees Celsius.",
      "Lowest temperature is Wednesday at twenty-nine degrees Celsius.",
      "Difference = 32 − 29 = 3°C",
      "Thirty-two minus twenty-nine equals three degrees Celsius.",
      "Library visitors: Monday 56, Tuesday ?, Wednesday 68. Pattern plus six.",
      "Monday fifty-six plus six equals sixty-two. So Tuesday is sixty-two visitors.",
      "Read the point on the vertical axis, not the slope.",
      "读折线图时看点在纵轴的高度，不要看斜线。",
    ],
    childPrompts: [
      "Rainfall mm: Monday 12, Tuesday 8, Wednesday 15, Thursday 10, Friday 6. Which day had the lowest rainfall? (Say the comparison.)",
      "Book sales: Monday 24, Tuesday 30, Wednesday 27, Thursday 33, Friday 36. On which day did sales go down? (Say the comparison.)",
      "Temperature: 8 a.m. 26°C, 10 a.m. 29°C, 12 noon 31°C. What is the difference between noon and 8 a.m.? (Say the calculation.)",
    ],
  },
  "MATH-25": {
    title: "饼图 — Pie charts",
    mathExample: "40 children chose favourite sports. The pie chart shows: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8. Which sport is most popular? Compare: 1/2 > 1/4 > 1/8. Football (1/2) is the largest slice. How many chose Football? 1/2 of 40 = 40 ÷ 2 = 20 children.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "用文字描述一个饼图：'40 children chose favourite sports. The pie chart shows: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8.' 问孩子：'Which sport is the most popular?' 引导：比较分数 1/2, 1/4, 1/8, 1/8。最大的是 1/2，所以 Football。让孩子注意：饼图每一块是整体的几分之几（each slice is a fraction of the whole），最大块就是分数最大的块（the largest slice is the one with the biggest fraction）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写饼图数据（文字描述）：'40 children chose favourite sports. The pie chart shows: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8.' 画简单饼图示意图：圆形分成四块，标上 Football 1/2（一半）、Swimming 1/4（四分之一）、Basketball 1/8、Running 1/8。问孩子：'Which sport is the most popular?' 引导：compare fractions: 1/2 = 4/8, 1/4 = 2/8, 1/8 = 1/8, 1/8 = 1/8. Biggest is 4/8 = 1/2, so Football. 再问：'How many children chose Football?' 引导：Football is 1/2 of the total. Total is 40. So 1/2 of 40 = 40 ÷ 2 = 20 children. 强调：用分数乘总数时先除以分母再乘以分子（divide by denominator first, then multiply by numerator），如 1/2 of 40 = 40 ÷ 2 = 20，2/5 of 60 = 60 ÷ 5 × 2 = 12 × 2 = 24。验证所有分数块之和是 1（check that all fractions add up to 1）：1/2 + 1/4 + 1/8 + 1/8 = 4/8 + 2/8 + 1/8 + 1/8 = 8/8 = 1 ✓. 关键词：pie chart（饼图）、slice（一块）、fraction of the whole（整体的几分之几）、largest slice（最大块）、smallest slice（最小块）、of（的，用于分数乘法）、divide by denominator（除以分母）、multiply by numerator（乘以分子）。本周只用分数（fractions: 1/2, 1/4, 1/8, 1/5, 3/8 等），不用百分数（percentages）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出比较和算式。题目 1：'48 students. Pie chart shows: Bus 1/2, Walk 1/4, Car 1/6, Cycle 1/12. How many travel by bus?' 期待输出：'Bus is one half of the total. Total is forty-eight. One half of forty-eight equals forty-eight divided by two equals twenty-four. Twenty-four students travel by bus.' 题目 2：'24 students. Pie chart shows: Apple 1/3, Orange 1/4, Mango 1/6, Banana 1/4. Which fruit is the least popular?' 期待输出：'Compare the fractions: one third, one quarter, one sixth, one quarter. Convert to common denominator: one third equals four twelfths, one quarter equals three twelfths, one sixth equals two twelfths, one quarter equals three twelfths. The smallest is two twelfths equals one sixth. So Mango is the least popular.' 题目 3：'60 students. Pie chart shows: Water 2/5, Juice 1/5, Milk 1/5, Milo 1/5. How many bought water?' 期待输出：'Water is two fifths of the total. Total is sixty. Two fifths of sixty equals sixty divided by five times two equals twelve times two equals twenty-four. Twenty-four students bought water.'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出饼图数据并说出最大/最小块和人数计算。比如 '32 students. Pie chart shows: Apple 1/4, Orange 1/2, Mango 1/8, Banana 1/8'，孩子要说 'The pie chart shows fruit choices. Apple is one quarter, orange is one half, mango is one eighth, banana is one eighth. To find the most popular, I compare the fractions: one half equals four eighths, one quarter equals two eighths, one eighth equals one eighth, one eighth equals one eighth. The largest is four eighths equals one half. So orange is the most popular. How many students chose orange? Orange is one half of thirty-two. One half of thirty-two equals thirty-two divided by two equals sixteen students.' 或 '40 drinks. Pie chart shows: Water 1/2, Juice 1/4, Milk 1/8, Milo 1/8'，孩子要说 'Water is one half of forty. Forty divided by two equals twenty students. Juice is one quarter of forty. Forty divided by four equals ten students. Check: all fractions must add to one. One half plus one quarter plus one eighth plus one eighth equals four eighths plus two eighths plus one eighth plus one eighth equals eight eighths equals one. Correct.' 注意读法：pie chart（饼图）、slice（一块）、one half / one quarter / one eighth（二分之一 / 四分之一 / 八分之一）、the largest slice（最大块）、the smallest slice（最小块）、of（的，用于分数乘法）、divide by denominator（除以分母）、multiply by numerator（乘以分子）、add up to one（加起来是 1）。常见错误：treating the largest slice as the whole（把最大块当作全部：如果 Football 是 1/2，不是说 Football = 40，而是 Football = 40 ÷ 2 = 20）、fractions do not sum to 1（分数块加起来不是 1：必须检查）、incorrect order: multiplying by numerator first（先乘分子再除分母：应该先除以分母，如 40 ÷ 2，不是 40 × 1 ÷ 2）、not converting to common denominator when comparing unlike fractions（比较分数时不通分）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括读饼图找最大/最小块（finding the largest/smallest slice by comparing fractions）、用分数乘总数求人数（calculating the number by multiplying the total by the fraction: divide by denominator first, then multiply by numerator）、验证所有分数块之和是 1（verifying that all fractions add up to 1）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则，Statistics 1.2 pie charts）。题目使用新加坡学校情境（运动选择、交通方式、水果选择、图书借阅、CCA 活动、East Coast Park 活动等）。描述饼图时用文字给出总数和每一块的分数让孩子能唯一确定最大/最小块和人数，例如 '40 children. Pie chart shows: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8.' 强调：饼图每一块是整体的几分之几（each slice is a fraction of the whole），最大块就是分数最大的块（the largest slice is the one with the biggest fraction），用分数乘总数时先除以分母再乘以分子（divide by denominator first, then multiply by numerator），所有分数块之和必须是 1（all fractions must add up to 1）。常见错误：treating the largest slice as the whole（把最大块当作全部）、fractions do not sum to 1（分数块加起来不是 1）、incorrect order（先乘分子再除分母）、not converting to common denominator when comparing unlike fractions（比较分数时不通分）。本周只用分数（fractions: 1/2, 1/4, 1/8, 1/5, 3/8 等），不用百分数（percentages）。本周不教：百分数（percentages，P5）、平均数/均值（mean / average）、360° 扇形角度计算（sector angles in degrees，除非用简单分数 1/4 = 90°，但重点是分数 of a set）。",
      },
    ],
    spokenLines: [
      "40 children. Pie: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8.",
      "Which sport is most popular? Compare: one half, one quarter, one eighth, one eighth.",
      "One half equals four eighths. One quarter equals two eighths.",
      "Largest is four eighths equals one half. So Football.",
      "How many chose Football? One half of forty = 40 ÷ 2 = 20 children.",
      "Check: 1/2 + 1/4 + 1/8 + 1/8 = 4/8 + 2/8 + 1/8 + 1/8 = 8/8 = 1.",
      "All fractions add up to one. Correct.",
      "2/5 of 60 = 60 ÷ 5 × 2 = 12 × 2 = 24.",
      "Divide by denominator first, then multiply by numerator.",
      "先除以分母再乘以分子。",
    ],
    childPrompts: [
      "48 students. Pie: Bus 1/2, Walk 1/4, Car 1/6, Cycle 1/12. How many travel by bus? (Say the calculation.)",
      "24 students. Pie: Apple 1/3, Orange 1/4, Mango 1/6, Banana 1/4. Which fruit is the least popular? (Say the comparison.)",
      "60 students. Pie: Water 2/5, Juice 1/5, Milk 1/5, Milo 1/5. How many bought water? (Say the calculation.)",
    ],
  },
  "MATH-26": {
    title: "角 — Angles",
    mathExample: "Quarter turn = 1/4 of 360° = 360° ÷ 4 = 90° = right angle. ∠ABC is named at B. The middle letter B is the vertex. Acute < 90°. Right = 90°. Obtuse between 90° and 180°. 35° is acute, 90° is right, 120° is obtuse.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "问孩子：'If you turn a quarter of the way around (1/4 turn), how many degrees is that?' 引导：A complete turn is 360°. A quarter turn is 1/4 of 360°. So quarter turn = 360° ÷ 4 = 90°. 让孩子注意：quarter turn = 90° = right angle（直角）。也可以问：'What is a right angle?' 答案：A right angle is exactly 90°. 让孩子想想哪里见过直角：rectangle corners（长方形的角）、square corners（正方形的角）、book corners（书本的角）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'Quarter turn = 1/4 of 360° = 360° ÷ 4 = 90°.' 画简单示意图：一个圆圈，标出 1/4 圈 = 90°，1/2 圈 = 180°，一整圈 = 360°。问孩子：'What is a half turn?' 引导：half turn = 1/2 of 360° = 360° ÷ 2 = 180°. 再讲角的名称：写 ∠ABC，问孩子：'Which letter is the vertex (the point where the two lines meet)?' 引导：The middle letter B is the vertex. The two lines are BA and BC, and they meet at B. 讲角的类型：acute angle < 90°（锐角 < 90°），right angle = 90°（直角 = 90°），obtuse angle between 90° and 180°（钝角在 90° 和 180° 之间）。例：35° < 90° → acute，90° = 90° → right，120° > 90° and < 180° → obtuse. 强调：长方形和正方形都有四个直角 = 90°（rectangles and squares have four right angles = 90°）。关键词：angle（角）、vertex（顶点）、degrees（度数）、quarter turn（1/4 圈）、half turn（1/2 圈）、complete turn（一整圈）、acute angle（锐角）、right angle（直角）、obtuse angle（钝角）。本周不教：triangle angle sum（三角形内角和）、reflex angle（优角）、angles on a straight line（平角的性质）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出定义和计算。题目 1：'A quarter turn is how many degrees? Calculate: one quarter of three hundred sixty degrees.' 期待输出：'A complete turn is three hundred sixty degrees. A quarter turn is one quarter of three hundred sixty degrees. Three hundred sixty divided by four equals ninety degrees. So a quarter turn is ninety degrees. Ninety degrees is a right angle.' 题目 2：'Look at angle ABC. The middle letter is B. What is the vertex?' 期待输出：'The vertex is the point where the two lines meet. In angle ABC, the middle letter is B. So the vertex is at B. The two lines are BA and BC.' 题目 3：'Which is acute: sixty degrees or one hundred twenty degrees? Which is obtuse?' 期待输出：'Acute angle is less than ninety degrees. Sixty degrees is less than ninety degrees, so sixty degrees is acute. Obtuse angle is more than ninety degrees but less than one hundred eighty degrees. One hundred twenty degrees is more than ninety degrees and less than one hundred eighty degrees, so one hundred twenty degrees is obtuse.' 纠正常见错误：把 quarter turn 当 45°（应该是 90°）、把 ∠ABC 的顶点当成 A 或 C（应该是中间字母 B）、锐角钝角混淆（acute < 90°, obtuse > 90°）。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出角的信息并说出类型和计算。比如 'If you turn a half turn, how many degrees is that?'，孩子要说 'A half turn is one half of a complete turn. A complete turn is three hundred sixty degrees. One half of three hundred sixty degrees equals three hundred sixty divided by two equals one hundred eighty degrees. So a half turn is one hundred eighty degrees. One hundred eighty degrees is a straight angle.' 或 'Look at angle XYZ. The letters are X, Y, and Z. Which letter is the vertex?'，孩子要说 'In angle XYZ, the middle letter is Y. The vertex is always the middle letter. So the vertex is at Y. The two lines forming the angle are YX and YZ. They meet at Y.' 或 'Angle a equals eighty degrees. Is this angle acute, right, or obtuse?'，孩子要说 'Acute angle is less than ninety degrees. Eighty degrees is less than ninety degrees. So angle a is acute.' 或 'A rectangle has four corners. Each corner is a right angle. How many degrees is each corner?'，孩子要说 'A right angle is exactly ninety degrees. Each corner of a rectangle is a right angle. So each corner is ninety degrees.' 提醒孩子：quarter turn = 90°（1/4 圈 = 90°），half turn = 180°（1/2 圈 = 180°），complete turn = 360°（一整圈 = 360°），acute < 90°（锐角 < 90°），right = 90°（直角 = 90°），obtuse between 90° and 180°（钝角在 90° 和 180° 之间），vertex is the middle letter in ∠ABC（顶点是中间字母 B）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括角的名称（using notation ∠ABC, middle letter is vertex）、度数（measuring angles in degrees）、quarter turn = 90°、half turn = 180°、complete turn = 360°、比较角度大小（comparing two given degree measures）、识别锐角直角钝角（identifying acute < 90°, right = 90°, obtuse between 90° and 180°）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则，Geometry → Angles 1.1–1.3）。题目使用新加坡学校情境（Tampines Primary School, Jun Wei, Mei, Priya 等）。本周不教：triangle angle sum（三角形内角和，不在 P4 Angles 1.1–1.3 官方列表中）、reflex angle（优角）、angles on a straight line add up to 180°（平角的性质，P5）、protractor construction that needs a diagram（需要图示的量角器使用）。常见错误：把 quarter turn 当 45°（应该是 90°）、锐角钝角混淆（acute < 90°, obtuse > 90° but < 180°）、∠ABC 时把 A 或 C 当顶点（应该是中间字母 B）、把 half turn 当 90°（应该是 180°）。长方形和正方形都有四个 right angles = 90°。",
      },
    ],
    spokenLines: [
      "Quarter turn = 1/4 of 360° = 360° ÷ 4 = 90° = right angle.",
      "Half turn = 1/2 of 360° = 360° ÷ 2 = 180° = straight angle.",
      "Complete turn = 360°.",
      "∠ABC. Middle letter B is the vertex.",
      "Vertex is where the two lines meet.",
      "Acute angle < 90°. 35° is acute.",
      "Right angle = 90°. 90° is right.",
      "Obtuse angle between 90° and 180°. 120° is obtuse.",
      "Rectangle has four right angles. Each corner = 90°.",
      "Compare: 75° < 90°, so 75° is smaller.",
    ],
    childPrompts: [
      "If you turn 1/4 of the way around, how many degrees? (Say the calculation.)",
      "∠ABC. Which letter is the vertex? (Say the definition.)",
      "Angle a = 80°. Is this acute, right, or obtuse? (Say the definition and compare.)",
    ],
  },
  "MATH-27": {
    title: "长方形和正方形 — Rectangle and Square",
    mathExample: "Rectangle: 4 right angles = 90°, opposite sides equal. Long side 8 cm, short side 5 cm → opposite sides: 8 cm, 5 cm, 8 cm, 5 cm. Square: 4 right angles = 90°, 4 equal sides. Each side 6 cm → all four sides 6 cm. Draw on grid: rectangle 4 units by 3 units.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "问孩子：'What is a rectangle? What is a square?' 引导：A rectangle has 4 right angles = 90° and opposite sides equal. A square has 4 right angles = 90° and 4 equal sides. 让孩子注意：rectangle 的对边相等（opposite sides equal: two long sides are equal, two short sides are equal），但不是四边都相等；square 的四边都相等（all four sides equal）。也可以问：'How many right angles does a rectangle have? How many right angles does a square have?' 答案：Both have 4 right angles = 90°. 让孩子想想哪里见过长方形和正方形：book cover（书的封面，usually rectangle）、window（窗户，usually rectangle）、tile（地砖，usually square）、table（桌子，usually rectangle）。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'Rectangle: 4 right angles = 90°, opposite sides equal.' 画简单示意图：一个长方形，标出 long side 8 cm, short side 5 cm, opposite sides: 8 cm, 5 cm, 8 cm, 5 cm. 问孩子：'Are all four sides of a rectangle equal?' 引导：No. Only opposite sides are equal. The two long sides are equal. The two short sides are equal. 再写：'Square: 4 right angles = 90°, 4 equal sides.' 画简单示意图：一个正方形，标出 each side 6 cm, all four sides 6 cm. 问孩子：'Are all four sides of a square equal?' 引导：Yes. All four sides are equal. 讲在方格纸上画长方形和正方形：'Draw a rectangle 4 units by 3 units on a square grid.' 引导：long side 4 units, short side 3 units. Two sides 4 units, two sides 3 units. 强调：rectangle 和 square 都有 4 right angles = 90°，都有 opposite sides parallel（对边平行，如果 P3 第 12 周已教平行和垂直，可以回顾）。关键词：rectangle（长方形）、square（正方形）、right angle（直角 = 90°）、opposite sides（对边）、equal sides（相等的边）、parallel（平行）、square grid（方格纸）。本周不教：diagonal properties（对角线性质，官方明确 excluding diagonal properties）、line symmetry / nets（对称/展开图）、triangle angle sum（三角形内角和）、quadrilateral interior angle sum（四边形内角和，不在官方 P4 2.1 列表中）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出性质和计算。题目 1：'A rectangle has one side that is ten centimeters long. The opposite side is also ten centimeters long. Another side is four centimeters long. How long is the side opposite to the four centimeter side?' 期待输出：'A rectangle has opposite sides equal. One side is ten centimeters. The opposite side is also ten centimeters. Another side is four centimeters. The side opposite to the four centimeter side is also four centimeters. So the opposite side is four centimeters.' 题目 2：'A square has one side that is nine centimeters long. How long are the other three sides?' 期待输出：'A square has four equal sides. One side is nine centimeters. All four sides are equal. So the other three sides are also nine centimeters each. All four sides are nine centimeters.' 题目 3：'On a square grid, you draw a rectangle with a long side of five units and a short side of two units. How many sides are five units long?' 期待输出：'A rectangle has opposite sides equal. The long side is five units. The two long sides are opposite to each other. So both long sides are five units. There are two sides that are five units long.' 强调：rectangle 的 opposite sides equal，square 的 4 equal sides，both have 4 right angles = 90°。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出长方形和正方形的性质并说出计算。比如 'A rectangle has two long sides that are both eight centimeters. The two short sides are both five centimeters. Are the opposite sides equal?'，孩子要说 'A rectangle has opposite sides equal. The two long sides are opposite to each other. Both long sides are eight centimeters. So the opposite sides are equal. The two short sides are opposite to each other. Both short sides are five centimeters. So the opposite sides are equal. Yes, the opposite sides are equal.' 或 'A square has sides that are each six centimeters long. How long are all four sides?'，孩子要说 'A square has four equal sides. Each side is six centimeters. All four sides are equal. So all four sides are six centimeters.' 或 'How many right angles does a rectangle have?'，孩子要说 'A rectangle has four corners. Each corner is a right angle. A right angle is ninety degrees. So a rectangle has four right angles.' 或 'On a square grid, you want to draw a rectangle that is four units long and three units wide. How many units is the long side?'，孩子要说 'The rectangle is four units long and three units wide. The long side is four units. The short side is three units. The rectangle has two long sides and two short sides. Two sides are four units long. Two sides are three units long.' 强调：rectangle: 4 right angles = 90°, opposite sides equal; square: 4 right angles = 90°, 4 equal sides; both have opposite sides parallel。常见错误：把 rectangle 当成四边相等（应该是 opposite sides equal）、忘记两个形状都有 4 right angles = 90°、用对角线性质（不在 P4 2.1-2.2）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括 rectangle properties（4 right angles = 90°, opposite sides equal）、square properties（4 right angles = 90°, 4 equal sides）、drawing rectangles and squares on a square grid（在方格纸上画长方形和正方形，用文字描述 'draw a rectangle 4 units by 3 units'）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则，Geometry → 2D Shapes 2.1–2.2）。题目使用新加坡学校情境（Tampines Primary School, Jun Wei, Mei, Priya 等）。本周不教：diagonal properties（对角线性质，官方明确 excluding diagonal properties）、line symmetry / nets（对称/展开图）、triangle angle sum（三角形内角和）、quadrilateral interior angle sum（四边形内角和，不在官方 P4 2.1 列表中）。常见错误：把 rectangle 当成四边相等（应该是 opposite sides equal）、用对角线性质（官方排除）、混淆 rectangle 和 square 的定义（rectangle 对边相等，square 四边相等）、忘记两个形状都有 4 right angles = 90°。",
      },
    ],
    spokenLines: [
      "Rectangle: 4 right angles = 90°, opposite sides equal.",
      "Square: 4 right angles = 90°, 4 equal sides.",
      "Rectangle: long side 8 cm, short side 5 cm. Opposite sides: 8 cm, 5 cm, 8 cm, 5 cm.",
      "Square: each side 6 cm. All four sides 6 cm.",
      "Rectangle: opposite sides equal. Two long sides equal, two short sides equal.",
      "Square: all four sides equal. If one side 9 cm, all four sides 9 cm.",
      "Both rectangle and square have 4 right angles = 90°.",
      "Draw on grid: rectangle 4 units by 3 units. Long side 4 units, short side 3 units.",
      "Rectangle and square: opposite sides parallel.",
      "Not teaching: diagonal properties, line symmetry, nets.",
    ],
    childPrompts: [
      "A rectangle has one side that is 10 cm long. The opposite side is also 10 cm long. Another side is 4 cm long. How long is the opposite side? (Say the property and answer.)",
      "A square has one side that is 9 cm long. How long are the other three sides? (Say the property and answer.)",
      "How many right angles does a rectangle have? How many right angles does a square have? (Say the property and answer.)",
    ],
  },
  "MATH-28": {
    title: "对称轴 — Line of Symmetry",
    mathExample: "A non-square rectangle has 2 lines of symmetry: the two midlines through opposite sides. The diagonals are NOT lines of symmetry. A square has 4 lines of symmetry (2 midlines + 2 diagonals). An equilateral triangle has 3.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "问孩子：'What is a line of symmetry? What is a symmetric figure?' 引导：A line of symmetry (对称轴) is a straight line. When you fold a figure along this line, the two halves match exactly (一半是另一半的镜像). A symmetric figure (对称图形) is a figure that has at least one line of symmetry. 让孩子想想哪些图形有对称轴：square（正方形）、rectangle（长方形）、equilateral triangle（等边三角形）、circle（圆）。也可以问：'Does every figure have a line of symmetry?' 答案：No. A scalene triangle (三边不等的三角形) or irregular quadrilateral (不规则四边形) usually has 0 lines of symmetry.",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'A non-square rectangle has 2 lines of symmetry: the two midlines through opposite sides.' 画简单示意图：一个长方形，画两条中线（horizontal midline through the two long sides, vertical midline through the two short sides），标注 'midline 1' and 'midline 2'. 问孩子：'Are the diagonals of a non-square rectangle lines of symmetry?' 引导：No. If you fold along a diagonal, the two halves do NOT match. The diagonals are NOT lines of symmetry. 再写：'A square has 4 lines of symmetry (2 midlines + 2 diagonals).' 画简单示意图：一个正方形，画 4 条对称轴（2 midlines + 2 diagonals），标注 'midline 1', 'midline 2', 'diagonal 1', 'diagonal 2'. 讲完成对称图形：'On a 4 by 4 square grid, a vertical line of symmetry runs down the middle. One unit square is shaded 1 unit left of the line. Where must the matching square be?' 引导：1 unit right of the line (距离相同). 讲等边三角形：'An equilateral triangle has 3 lines of symmetry (从每个顶点到对边中点).' 讲圆：'A circle has many lines of symmetry (任何经过圆心的直线).' 强调：正方形有 4 条（2 midlines + 2 diagonals），非正方形长方形有 2 条（2 midlines only, diagonals are NOT），等边三角形有 3 条，非等边的等腰三角形有 1 条，不规则三角形通常有 0 条。关键词：line of symmetry（对称轴）、symmetric figure（对称图形）、midline（中线）、diagonal（对角线）、fold（折叠）、match（重合）、equilateral triangle（等边三角形）、isosceles triangle（等腰三角形）、scalene triangle（不规则三角形）。本周不教：rotational symmetry（旋转对称）、reflection in a point（点对称）、3D symmetry（立体对称）、nets（展开图，那是第 29 周）。常见错误：把长方形的对角线当对称轴（rectangle diagonals are NOT lines of symmetry）、认为每个图形都有对称轴（scalene triangles usually have 0）、在对称轴错误的一侧完成图形（should be same distance on the other side）、数出不能让两半重合的折叠线（must check that folding makes two halves match exactly）。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出性质和判断。题目 1：'A non-square rectangle has two long sides and two short sides. How many lines of symmetry does it have?' 期待输出：'A non-square rectangle has two lines of symmetry. The two lines of symmetry are the two midlines through opposite sides. One midline goes through the midpoints of the two long sides. The other midline goes through the midpoints of the two short sides. The diagonals are NOT lines of symmetry. So a non-square rectangle has two lines of symmetry.' 题目 2：'An equilateral triangle has three sides that are all equal. How many lines of symmetry does it have?' 期待输出：'An equilateral triangle has three lines of symmetry. Each line of symmetry goes from one vertex (顶点) to the midpoint of the opposite side. There are three vertices, so there are three lines of symmetry. An equilateral triangle has three lines of symmetry.' 题目 3：'On a four by four square grid, a vertical line of symmetry runs down the middle. One unit square is shaded one unit to the left of the line. Where must the matching square be?' 期待输出：'The matching square must be one unit to the right of the line. A line of symmetry means that if you fold along the line, the two halves match. If one square is one unit to the left, the matching square is one unit to the right. Same distance from the line. So the matching square is one unit to the right of the line.' 如果孩子卡住，教师给提示：'A non-square rectangle has how many midlines? Are the diagonals lines of symmetry?' 或 'An equilateral triangle has three sides. From each vertex, draw a line to the midpoint of the opposite side. How many lines?' 或 'If one square is one unit left, the matching square is … units right?'",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出对称轴的性质并判断。比如 'A square has four corners and four sides that are all equal. How many lines of symmetry does it have?'，孩子要说 'A square has four lines of symmetry. Two lines of symmetry are the two midlines through opposite sides. Two lines of symmetry are the two diagonals. So a square has four lines of symmetry: two midlines plus two diagonals.' 或 'Is an isosceles triangle that is not equilateral a symmetric figure?'，孩子要说 'Yes. An isosceles triangle that is not equilateral is a symmetric figure. It has one line of symmetry. The line of symmetry goes from the vertex between the two equal sides to the midpoint of the base (底边). So it is a symmetric figure.' 或 'On a square grid, a horizontal line of symmetry runs across the middle. Two unit squares are shaded one unit above the line. How many matching squares must be below the line? How far below?'，孩子要说 'The two unit squares are one unit above the line. The matching squares must be one unit below the line. Same number of squares: two squares. Same distance from the line: one unit below. So two squares, one unit below the line.' 或 'Does a circle have a line of symmetry?'，孩子要说 'Yes. A circle has many lines of symmetry. Any straight line that goes through the center of the circle is a line of symmetry. When you fold along that line, the two halves match. So a circle has many lines of symmetry. We do not invent a number for how many.' 如果孩子卡住，教师给提示：'A square has two midlines and two diagonals. Are they all lines of symmetry?' 或 'An isosceles triangle has two equal sides. Does it have a line of symmetry?' 或 'If two squares are one unit above, the matching squares are … units below?' 或 'A circle: any line through the center is …?'",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括 identifying symmetric figures（识别对称图形 3.1）、determining whether a straight line is a line of symmetry（判断一条直线是否是对称轴 3.2）、completing a symmetric figure on a square grid（在方格纸上完成对称图形 3.3）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则，Geometry → Symmetry 3.1–3.3）。题目使用新加坡学校情境（Tampines Primary School, Jun Wei, Mei, Priya 等）。本周不教：rotational symmetry / order of rotational symmetry（旋转对称）、reflection in a point（点对称）、3D symmetry（立体对称）、nets（展开图，那是第 29 周）。常见错误：把长方形的对角线当对称轴（rectangle diagonals are NOT）、认为每个图形都有对称轴（scalene triangles usually have 0）、在对称轴错误的一侧完成图形（should be same distance on the other side）、数出不能让两半重合的折叠线（must check by folding）。",
      },
    ],
    spokenLines: [
      "A non-square rectangle has 2 lines of symmetry: the two midlines.",
      "The diagonals are NOT lines of symmetry.",
      "A square has 4 lines of symmetry: 2 midlines + 2 diagonals.",
      "An equilateral triangle has 3 lines of symmetry.",
      "An isosceles triangle (not equilateral) has 1 line of symmetry.",
      "A circle has many lines of symmetry.",
      "Scalene triangle / irregular quadrilateral usually has 0 lines of symmetry.",
      "Completing on grid: 1 unit left → 1 unit right (same distance).",
      "After completing: left half 5 shaded squares → right half 5 shaded squares.",
      "Not teaching: rotational symmetry, nets.",
    ],
    childPrompts: [
      "A non-square rectangle has two long sides and two short sides. How many lines of symmetry does it have? (Say the property and answer.)",
      "An equilateral triangle has three sides that are all equal. How many lines of symmetry does it have? (Say the property and answer.)",
      "On a four by four square grid, a vertical line of symmetry runs down the middle. One unit square is shaded one unit to the left of the line. Where must the matching square be? (Say the property and answer.)",
    ],
  },
  "MATH-29": {
    title: "展开图 — Nets",
    mathExample: "A row of 6 equal squares is NOT a cube net. Faces overlap when folded. A cross of 6 equal squares (1 center + 4 sides + 1 bottom) IS a cube net. Folds without overlapping. A net of 1 square + 4 triangles → square pyramid. A net of 2 triangles + 3 rectangles → triangular prism.",
    sections: [
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "问孩子：'What is a net? What is a 2D representation?' 引导：A net (展开图) is a flat shape that folds into a 3D solid (立体图形). For example, a cube net has 6 squares that fold to a cube without overlapping faces. A 2D representation (二维表示) is a drawing of a 3D solid on paper (如正方形+两个平行四边形表示立方体), but it is not a net. 让孩子想想哪些立体图形：cube（立方体）、cuboid（长方体）、cone（圆锥）、cylinder（圆柱）、prism（棱柱）、pyramid（棱锥）。提醒：4.1 identifying 2D representations includes cone and cylinder. But 4.3 identifying nets does NOT include cone or cylinder (不能发明圆锥圆柱展开图). 这是最后一个官方 P4 Geometry 主题周。",
      },
      {
        name: "本周例题",
        duration: "8 分钟",
        teacherNotes: "在白板上写：'A row of 6 equal squares in a straight line: NOT a cube net.' 画简单示意图：6 个正方形排成一排，标注 'Row of 6 squares'. 问孩子：'Why not a cube net?' 引导：When you fold a row of 6 squares, the faces overlap. For example, the first square and the last square both try to cover the same position on the cube. A valid cube net has 6 squares that fold to a cube without overlapping faces. 再写：'A cross of 6 equal squares (1 center + 4 sides + 1 bottom): IS a cube net.' 画简单示意图：十字形，1 个中心正方形，4 个在中心正方形的四边，1 个在底部。标注 'Cross shape: valid cube net'. 讲 pyramid vs prism：'A net of 1 square + 4 triangles → square pyramid (1 square base + 4 triangular faces = 5 faces).' 画简单示意图：1 个正方形在中心，4 个三角形在四边。'A net of 2 triangles + 3 rectangles → triangular prism (2 triangular ends + 3 rectangular sides = 5 faces).' 画简单示意图：2 个三角形，3 个长方形。讲 4.1 vs 4.3：'Cylinder 2D representation: rectangle + 2 circles (4.1 identifying 2D representations). But cylinder net is NOT in 4.3 (不能发明圆柱展开图).' 讲 cuboid net：'Cuboid net has 6 rectangles, opposite faces match in pairs. For example: 2 faces of 8×4, 2 faces of 8×3, 2 faces of 4×3 (对面成对相等).' 强调：任何 6 个正方形排列不一定是 cube net（一排会重叠），不能混淆 prism（2 triangles + 3 rectangles）和 square pyramid（1 square + 4 triangles），不能发明 cone/cylinder net（cone 和 cylinder 只在 4.1 二维表示，不在 4.3 展开图中），不能把 2D drawing 当 net。",
      },
      {
        name: "孩子口头说算式",
        duration: "10 分钟",
        teacherNotes: "给 3 个口头题，孩子说出性质和判断。题目 1：'A net has 6 equal squares arranged in a row (a straight line). Is this a net of a cube?' 期待输出：'A cube has 6 square faces, all equal. A valid cube net has 6 squares that fold to a cube without overlapping faces. When you fold a row of 6 squares in a straight line, the faces overlap when folded. For example, the first square and the last square both try to cover the same position on the cube. So a row of 6 squares is NOT a cube net because faces overlap when folded.' 题目 2：'A net has 1 square and 4 triangles. The square is in the center, and one triangle is attached to each side of the square. Which solid can be formed by this net?' 期待输出：'A square pyramid has 1 square base and 4 triangular faces. In total: 1 + 4 = 5 faces. This net has 1 square + 4 triangles. When you fold this net, the square becomes the base, and the 4 triangles fold up to meet at the top vertex (顶点). This forms a square pyramid. A triangular prism has 2 triangles + 3 rectangles, not 1 square + 4 triangles. So this net forms a square pyramid.' 题目 3：'A net has 2 triangles and 3 rectangles. Which solid can be formed by this net?' 期待输出：'A triangular prism has 2 triangular faces and 3 rectangular faces. In total: 2 + 3 = 5 faces. This net has 2 triangles + 3 rectangles. When you fold this net, the 2 triangles become the two ends of the prism, and the 3 rectangles wrap around to connect the two triangular ends. This forms a triangular prism. A square pyramid has 1 square + 4 triangles, not 2 triangles + 3 rectangles. So this net forms a triangular prism.' 引导孩子用完整句子说出性质、区分 prism vs pyramid，强调 cube net 必须折叠后无重叠。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "让孩子读出展开图的性质并判断立体图形。比如 'A solid has 6 faces. All 6 faces are squares, and all the squares are equal in size. Which solid is this?'，孩子要说 'A cube has 6 square faces, all equal. A cuboid has 6 rectangular faces. A cone has 1 circular face and a curved surface. A pyramid with a square base has 1 square and 4 triangles. So the answer is cube.' 或 'A 2D representation shows a rectangle and two circles (one circle at each end of the rectangle). Which solid does this represent?'，孩子要说 'This is the 2D representation of a cylinder. A cylinder has two circular faces and one curved surface. When drawn on paper, it looks like a rectangle with two circles. Note: 4.1 identifying 2D representations includes cone and cylinder. But 4.3 identifying nets does NOT include cone or cylinder.' 或 'A net has 6 rectangles. The rectangles have dimensions: 2 faces are 8 cm by 4 cm, 2 faces are 8 cm by 3 cm, and 2 faces are 4 cm by 3 cm (opposite faces match in pairs). Which solid can be formed by this net?'，孩子要说 'A cuboid has 6 rectangular faces, and opposite faces are equal. The net has 6 rectangles with opposite faces matching in pairs: 2 of 8×4, 2 of 8×3, 2 of 4×3. So the answer is cuboid.' 提醒：不能混淆 prism（2 triangles + 3 rectangles）和 square pyramid（1 square + 4 triangles），不能发明 cone/cylinder net，不能把 2D drawing 当 net（2D drawing 如正方形+两个平行四边形表示立方体，不是 net）。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "提醒本周作业有 P4 数学题目，包括 identifying 2D representations（识别二维表示 4.1: cube, cuboid, cone, cylinder, prism, pyramid）、drawing 2D representations（画二维表示 4.2: cube, cuboid, prism, pyramid——不包括 cone, cylinder）、identifying the nets of 3D solids（识别展开图 4.3: cube, cuboid, prism, pyramid——不包括 cone, cylinder）、identifying the solid which can be formed by a given net（从展开图判断立体图形 4.4）。对应申请 P5 的孩子需要掌握的 P4 内容（preceding level 规则，Geometry → Nets 4.1–4.4）。题目使用新加坡学校情境（Raffles Girls' Primary School, Jun Wei, Mei, Priya 等）。本周不教：nets of cone, cylinder, sphere（cone 和 cylinder 只在 4.1 二维表示，不在 4.3 展开图；sphere 不在 P4 nets 列表）、surface area / volume formulas（表面积体积公式）、Euler's formula（欧拉公式）、line symmetry / rotational symmetry（对称，已在第 28 周教过）。常见错误：以为任何 6 个正方形排列都是 cube net（一排 6 个正方形折叠时面会重叠，不是 cube net）、混淆 prism（2 triangles + 3 rectangles）和 square pyramid（1 square + 4 triangles）、发明 cone/cylinder net、把 2D drawing 当 net。这是最后一个官方 P4 Geometry 主题周。",
      },
    ],
    spokenLines: [
      "Cube net: 6 squares that fold without overlapping.",
      "Row of 6 squares: NOT a cube net (faces overlap).",
      "Cross of 6 squares: IS a cube net.",
      "Square pyramid net: 1 square + 4 triangles (5 faces).",
      "Triangular prism net: 2 triangles + 3 rectangles (5 faces).",
      "Cuboid net: 6 rectangles, opposite faces match in pairs.",
      "4.1 includes cone and cylinder. 4.3 nets do NOT include cone or cylinder.",
      "Cylinder 2D representation: rectangle + 2 circles (4.1 only, NOT 4.3 net).",
      "Cone 2D representation: circle + triangle (4.1 only, NOT 4.3 net).",
      "2D drawing (square + 2 parallelograms) is NOT a net.",
      "Not teaching: cone/cylinder nets, surface area, volume, Euler's formula.",
      "This is the last official P4 Geometry week.",
    ],
    childPrompts: [
      "A net has 6 equal squares arranged in a row (a straight line). Is this a net of a cube? (Say the property and answer.)",
      "A net has 1 square and 4 triangles. The square is in the center, and one triangle is attached to each side of the square. Which solid can be formed by this net? (Say the property and answer.)",
      "A net has 2 triangles and 3 rectangles. Which solid can be formed by this net? (Say the property and answer.)",
    ],
  },
  "SEC-0": {
    title: "Wei 的第一周 — First Week at Secondary School",
    fossil: "Although I was nervous, but I tried. ✗ / I go yesterday ✗",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语试学，不是 CEQ。本周只练一个错误：although 和 but 不能同时用，叙事体用过去时。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Have you started secondary school? Or will you start soon?' 让孩子说几句。如果孩子说 'I go to secondary school yesterday'（过去时错误）或 'Although I was nervous, but I tried'（although-but 错误），不要立刻纠正，等微课环节再讲。问：'Were you nervous on your first day?'，引导孩子说 'Yes, I was nervous.' 或 'I felt nervous.'（过去时）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个错误句子：'Although I was nervous, but I tried.' 和 'I go yesterday.' 问孩子：'这两句话对吗？' 等孩子思考后，圈出错误部分。解释化石 1：中文说「虽然…但是…」，英语只用一个词。Although I was nervous, I tried. ✓（只用 although）或 I was nervous, but I tried. ✓（只用 but）。不能同时用。化石 2：Yesterday / Last Monday 出现时，动词变过去式。I went yesterday. ✓（不是 I go）。叙事体全用过去时：Wei felt nervous（不是 feel）、Mr Lim welcomed us（不是 welcome）。让孩子跟读改正后的句子 3 次。",
      },
      {
        name: "跟读",
        duration: "10 分钟",
        teacherNotes: "教师说一句，孩子跟读一句。每句重复 2 次。共 6-8 句短句，场景是 Wei 的中学第一周。包括 although / but 的对比句和叙事过去时句子。句子见下方【跟读句子】列表。注意语调：陈述句平稳，疑问句结尾上扬。如果孩子某句卡住，教师拆分成小块再跟读。",
      },
      {
        name: "开口",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 个开放提示，让孩子自己说完整句子。家长可以用手机录像。第一个提示：'You were nervous on your first day at secondary school, but you made one friend. Tell me.' 期待输出：'Although I was nervous, I made one friend.' 或 'I was nervous, but I made one friend.'（注意不要同时用 although 和 but）。第二个提示：'Yesterday your form teacher welcomed the class. Tell me what happened.' 期待输出：'Yesterday my form teacher welcomed the class.'（注意过去时 welcomed）。第三个提示：'Your English lessons are harder than primary school, but your teacher is helpful. Tell me.' 期待输出：'Although my English lessons are harder, my teacher is helpful.' 或 'My English lessons are harder, but my teacher is helpful.' 如果孩子卡住，教师给一个词提示（比如说 'Start with Although...' 或 'Start with I was nervous...'），但不说完整句子。",
      },
      {
        name: "收口",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 试学周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语样本，包括阅读理解、语法题、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 试学周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "Although Wei was nervous, he made three friends. ✓",
      "Wei was nervous, but he made three friends. ✓",
      "I was nervous, but I tried my best. ✓",
      "Last Monday, Mr Lim welcomed our class. ✓ (past tense: welcomed)",
      "Although the lessons were harder, I felt confident. ✓",
      "Wei worried about making friends. ✓ (past tense: worried)",
      "Ms Raj handed out a comprehension passage. ✓ (past tense: handed)",
      "The lessons are harder than primary school. ✓",
    ],
    childPrompts: [
      "You were nervous on your first day at secondary school, but you made one friend. Tell me.",
      "Yesterday your form teacher welcomed the class. Tell me what happened.",
      "Your English lessons are harder than primary school, but your teacher is helpful. Tell me.",
    ],
  },
  "SEC-1": {
    title: "CCA Briefing — Subject-Verb Agreement",
    fossil: "Everyone have ✗ / The team of teachers help ✗",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 1 周，不是 CEQ。本周只练一个错误：主谓一致（subject-verb agreement）。Everyone / Each 用单数动词（has / is），The team of… 主语是 team，也用单数（helps）。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Does everyone in your school join a CCA?' 让孩子说几句。如果孩子说 'Everyone have to join'（主谓一致错误）或 'The team of teachers help us'（主谓一致错误），不要立刻纠正，等微课环节再讲。问：'What CCA do you want to join?'，引导孩子说话。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个错误句子：'Everyone have to join a CCA.' 和 'The team of teachers help us.' 问孩子：'这两句话对吗？' 等孩子思考后，圈出错误部分。解释化石：中文主语后动词不变形（「每个人都要」「老师团队帮」），但英语要根据主语单复数变形。Everyone / Each / Every + 单数名词 → 动词用单数形式（has / is / does）。The team / group / class + of + 复数名词 → 主语是 team/group/class（单数），动词用单数形式（helps / is / does）。正确说法：Everyone has to join. ✓ / The team of teachers helps us. ✓。让孩子跟读改正后的句子 3 次。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which verb did we use with Everyone?' 等孩子说 'has'。问：'Which verb did we use with The team?' 等孩子说 'helps'。如果孩子说错，再带读 2 次。确认孩子能准确说出单数动词。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 1 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 1 周，包括阅读理解（CCA briefing）、语法题（主谓一致）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 1 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "Everyone in secondary school has to join one CCA. ✓",
      "The team of teachers helps the students. ✓",
      "CCA points count towards your record. ✓",
      "The debate team of senior students helps train juniors. ✓",
    ],
  },
  "SEC-2": {
    title: "Morning Assembly — Prepositions of Time",
    fossil: "在星期一早上 7:30 (中文一个在，英语分 at / on / in)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 2 周，不是 CEQ。本周只练一个错误：时间介词（prepositions of time）。at 用于具体时刻（at 7:30），on 用于星期和日期（on Monday），in 用于时段（in the morning）。中文用一个「在」，英语要区分 at / on / in。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'What time do you arrive at school?' 让孩子说。如果孩子说 'I arrive in 7:30'（时间介词错误）或 'I arrive at the morning'（时间介词错误），不要立刻纠正，等微课环节再讲。问：'What day is your assembly?'，引导孩子说话。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下一个错误句子：'The assembly is in 7:30 at Monday morning.' 或 '我在星期一早上 7:30 到学校' → 'I arrive in 7:30 on Monday at the morning.' 问孩子：'这句话对吗？' 等孩子思考后，圈出错误部分。解释化石：中文用一个「在」表达时间，英语要区分 at / on / in。at 用于具体时刻（at 7:30 / at noon），on 用于星期和日期（on Monday / on 15 August），in 用于时段（in the morning / in 2026 / in January）。正确说法：The assembly is at 7:30 on Monday morning. ✓ / I arrive at 7:30 on Monday in the morning. ✓（可组合）。让孩子跟读改正后的句子 3 次。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which preposition did we use with 7:30?' 等孩子说 'at'。问：'Which preposition did we use with Monday?' 等孩子说 'on'。问：'Which preposition did we use with the morning?' 等孩子说 'in'。如果孩子说错，再带读 2 次。确认孩子能准确说出 at / on / in 的用法。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 2 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 2 周，包括阅读理解（morning assembly）、语法题（时间介词 at / on / in）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 2 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "The assembly starts at 7:30. ✓ (具体时刻用 at)",
      "We have assembly on Monday. ✓ (星期用 on)",
      "We line up in the morning. ✓ (时段用 in)",
      "The flag-raising is at 7:45 on Monday morning. ✓ (可以组合)",
    ],
  },
  "SEC-3": {
    title: "School Library — Uncountable Nouns",
    fossil: "homework is uncountable (not a homework)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 3 周，不是 CEQ。本周只练一个错误：不可数名词（uncountable nouns）。homework / advice / information 是不可数的，不能说 a homework / an advice / an information。中文可以说「一份作业」，但英语不能加 a。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you have homework tonight?' 让孩子说。如果孩子说 'I have a homework'（不可数名词加 a 的错误），不要立刻纠正，等微课环节再讲。问：'What homework did your teacher give you?'，引导孩子说话。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下一个错误句子：'I have a homework tonight.' 或 'The teacher gave us an advice.' 问孩子：'这句话对吗？' 等孩子思考后，圈出错误部分。解释化石：homework / advice / information 是不可数名词（uncountable nouns）。中文可以说「一份作业」「一条建议」「一条信息」，但英语不能加 a / an。正确说法：I have homework tonight. ✓ / The teacher gave us some advice. ✓ / We need information. ✓。让孩子跟读改正后的句子 3 次。强调：如果要表示「一些」，用 some（some homework / some advice / some information）；如果是「我的/你的」，用 my / your（my homework / your advice）。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Can we say a homework?' 等孩子说 'No'。问：'Can we say an advice?' 等孩子说 'No'。问：'What can we say instead?' 等孩子说 'homework' 或 'some homework' 或 'my homework'。如果孩子说错，再带读 2 次。确认孩子能准确说出不可数名词的用法。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 3 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 3 周，包括阅读理解（school library 借书场景）、语法题（不可数名词 homework / advice / information）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 3 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "We have homework tonight. ✓ (homework 不可数，不加 a)",
      "Mr Lim gave us some advice. ✓ (advice 不可数，用 some)",
      "The library has information about borrowing. ✓ (information 不可数)",
      "I need to finish my homework by Monday. ✓ (用 my，不用 a)",
    ],
  },
  "SEC-4": {
    title: "Canteen Rules — must / have to",
    fossil: "must / have to for school rules (not must to)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 4 周，不是 CEQ。本周只练一个错误：must / have to 表示学校规则。中文说「必须要排队」，但英语是 You must queue，不是 You must to queue。must 和 have to 后面直接加动词原形，不加 to。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'What are some school rules at your school?' 让孩子说。如果孩子说 'We must to wear uniform'（must 后加 to 的错误），不要立刻纠正，等微课环节再讲。问：'What rules do you have at the canteen?'，引导孩子说话。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下一个错误句子：'You must to queue at the canteen.' 或 'We have to to return the tray.' 问孩子：'这句话对吗？' 等孩子思考后，圈出错误部分。解释化石：must 和 have to 后面直接加动词原形，不能加 to。中文说「必须要」，但英语不能加 to。正确说法：You must queue. ✓ / You have to return the tray. ✓。must not 表示禁止（You must not cut the queue.）。让孩子跟读改正后的句子 3 次。强调：must 和 have to 都表示必须，但 must 语气更强（老师/学校规定），have to 更客观（学校制度要求）。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Can we say must to queue?' 等孩子说 'No'。问：'Can we say have to to return?' 等孩子说 'No'。问：'What do we say?' 等孩子说 'must queue' 或 'have to return'。如果孩子说错，再带读 2 次。确认孩子能准确说出 must / have to 的用法。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 4 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 4 周，包括阅读理解（canteen recess 场景）、语法题（must / have to / must not）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 4 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "You must queue at the canteen. ✓ (must 后面直接加动词，不加 to)",
      "You have to return your tray. ✓ (have to 后面直接加动词，不加 to)",
      "Students must not cut the queue. ✓ (must not 表示禁止)",
      "We have to wear our nametags. ✓ (have to 表示必须)",
    ],
  },
  "SEC-5": {
    title: "PE Lesson — should vs must",
    fossil: "should (advice) vs must (school rule)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 5 周，不是 CEQ。本周只练一个区别：should（建议/advice）vs must（学校规则/school rule）。如果是学校规则，用 must；如果是建议，用 should。每个句子只有一个正确答案，不能两个选项都对。本周情境是 Wei 第一次上 PE 课。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you have PE lessons at school?' 让孩子说。问：'What do you wear for PE?' 引导孩子说 PE attire / PE shirt / shorts。问：'What are some PE rules at your school?'，让孩子说话。如果孩子说 'You should wear PE uniform'（should 和 must 混淆），不要立刻纠正，等微课环节再讲。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个句子：'You ____ change into your PE attire before the lesson.' 和 'You ____ bring a water bottle to PE—it's helpful.' 问孩子：'第一句空格填 must 还是 should？第二句呢？' 等孩子思考后，解释化石：第一句是学校规则（must change），因为 PE attire 是必须的。第二句是建议（should bring），因为 water bottle 是 helpful but not required。关键区别：规则（rule）→ must（should 不出现或明显错误）；建议（advice）→ should（must 不出现或明显错误）。让孩子跟读改正后的句子 3 次。强调：不能说 must to 或 should to，后面直接加动词原形。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which sentences use must?' 等孩子指出规则的句子。问：'Which sentences use should?' 等孩子指出建议的句子。问：'Can we say must bring a water bottle if it's only helpful?' 等孩子说 'No, we say should.' 如果孩子说错，再带读 2 次。确认孩子能区分 must（规则）和 should（建议）。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 5 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 5 周，包括阅读理解（Wei 第一次上 PE 课）、语法题（should vs must，每个空只有一个正确答案）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 5 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "You must change into your PE attire. ✓ (学校规则用 must)",
      "You should bring a water bottle. ✓ (建议用 should)",
      "Students must do a warm-up before PE. ✓ (规则用 must)",
      "If you feel unwell, you should sit at the side. ✓ (建议用 should)",
    ],
  },
  "SEC-6": {
    title: "Science Lab — because vs so",
    fossil: "because (reason) vs so (result)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 6 周，不是 CEQ。本周只练一个区别：because（原因）vs so（结果）。如果空格需要填原因从句连接词，用 because；如果需要填结果连接词，用 so。每个空只有一个正确答案，不能让 because 和 so 都对同一个空。本周情境是 Wei 第一次上科学实验课。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Have you ever done a science experiment at school?' 让孩子说。问：'What safety rules do you follow in the lab?' 引导孩子说 wear goggles / don't touch chemicals / wash hands。问：'Why do you need to wear goggles?'，让孩子说话。如果孩子说 'Because of the chemicals are dangerous'（because of + 句子的错误）或混淆 because 和 so，不要立刻纠正，等微课环节再讲。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个句子：'You must wear goggles ____ the chemicals can be dangerous.' 和 'The chemicals are dangerous, ____ you need to wear goggles.' 问孩子：'第一句空格填 because 还是 so？第二句呢？' 等孩子思考后，解释化石：第一句是原因（because the chemicals are dangerous），because 引导原因从句。第二句是结果（so you need to wear goggles），so 引导结果。关键区别：原因（reason）→ because（so 不出现或明显错误）；结果（result）→ so（because 不出现或明显错误）。让孩子跟读改正后的句子 3 次。强调：不能用 because of + 句子（because of 后只能接名词短语，如 because of the dangerous chemicals），不能用 so that 当 because（so that 表示目的）。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which sentences use because?' 等孩子指出原因的句子。问：'Which sentences use so?' 等孩子指出结果的句子。问：'Can we use because to show a result?' 等孩子说 'No, we use so for results.' 如果孩子说错，再带读 2 次。确认孩子能区分 because（原因）和 so（结果）。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 6 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 6 周，包括阅读理解（Wei 第一次上科学实验课）、语法题（because vs so，每个空只有一个正确答案）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 6 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "You must wear goggles because the chemicals are dangerous. ✓ (because 表示原因)",
      "The chemicals are dangerous, so you need to wear goggles. ✓ (so 表示结果)",
      "Because lab safety is important, you must follow the rules. ✓ (because 引导原因从句)",
      "Lab safety is important, so you must follow the rules. ✓ (so 引导结果)",
    ],
  },
  "SEC-7": {
    title: "Dismissal — if vs when",
    fossil: "if (possible) vs when (certain)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 7 周，不是 CEQ。本周只练一个区别：if（可能/不确定）vs when（一定会发生）。如果事件是一定会发生的（例如铃声每天都会响），用 when；如果事件是可能的、不确定的（例如可能错过车），用 if。每个空只有一个正确答案，不能让 if 和 when 都对同一个空。本周情境是 Wei 第一次放学。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'How do you go home after school?' 让孩子说 take the bus / MRT / walk / parent picks me up。问：'What time do you leave school?' 引导孩子说 The bell rings at... / We pack our bags at... 问：'What happens if you miss your bus?'，让孩子说话。如果孩子混淆 if 和 when（例如说 'When you miss the bus' 或 'If the bell rings'），不要立刻纠正，等微课环节再讲。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个句子：'____ the bell rings at 1:40, you must pack your bags. (The bell rings every day)' 和 '____ you miss the bus, you can take the MRT. (Maybe you will miss it, maybe not)' 问孩子：'第一句空格填 if 还是 when？第二句呢？' 等孩子思考后，解释化石：第一句是一定会发生的事件（铃声每天都响），用 when。第二句是可能的、不确定的事件（可能错过车），用 if。关键区别：一定会发生（certain / it happens）→ when（if 不出现或明显错误）；可能的、不确定的（possible / not sure）→ if（when 不出现或明显错误）。让孩子跟读改正后的句子 3 次。强调：不能让 if 和 when 都对同一个空。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which sentences use when?' 等孩子指出一定会发生的事件句子。问：'Which sentences use if?' 等孩子指出可能的事件句子。问：'Can we use if for something that happens every day?' 等孩子说 'No, we use when for certain things.' 如果孩子说错，再带读 2 次。确认孩子能区分 if（可能）和 when（一定会发生）。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 7 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 7 周，包括阅读理解（Wei 第一次放学：bell / bag / bus bay / wait for bus / road safety）、语法题（if vs when，每个空只有一个正确答案）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 7 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」等话术。",
      },
    ],
    spokenLines: [
      "When the bell rings at 1:40, you must pack your bags. ✓ (铃声每天都响，用 when)",
      "If you miss the bus, you can take the MRT. ✓ (可能错过车，用 if)",
      "Walk to the door when you see your bus number. ✓ (车会来，用 when)",
      "If you run across the road, you could get hurt. ✓ (跑是可能的，不一定，用 if)",
    ],
  },
  "SEC-8": {
    title: "Computer Lab — present perfect vs past simple",
    fossil: "present perfect (for / since / already) vs past simple (yesterday / last week)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 8 周，不是 CEQ。本周只练一个区别：present perfect（未完成/持续的时间：for two weeks / since Monday / already）vs past simple（已完成的时间：yesterday / last week / at 2 p.m.）。如果时间是已完成的，用 past simple（forgot / logged in）；如果时间是未完成的/持续的，用 present perfect（has been / has explained）。每个空只有一个正确答案，不能让两个时态都对同一个空。本周情境是 Wei 第一次上计算机实验室课。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you use computers at school?' 让孩子说 yes / no / sometimes。问：'What do you do on the computer?'，引导孩子说 type / save files / search / play games。问：'Do you have a password for your school account?'，让孩子说话。如果孩子混淆时态（例如说 'I have forgot my password yesterday' 或 'Wei is at Riverside for two weeks'），不要立刻纠正，等微课环节再讲。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个句子：'Wei ____ at Riverside Secondary for two weeks. (unfinished time)' 和 'Yesterday, Aisha ____ her password. (finished time: yesterday)' 问孩子：'第一句空格填 has been 还是 was？第二句填 has forgotten 还是 forgot？' 等孩子思考后，解释化石：第一句时间是未完成的/持续的（for two weeks），用 present perfect（has been）。第二句时间是已完成的（yesterday），用 past simple（forgot）。关键区别：未完成/持续时间（for / since / already）→ present perfect（past simple 不出现或明显错误）；已完成时间（yesterday / last week / at 2 p.m.）→ past simple（present perfect 不出现或明显错误）。让孩子跟读改正后的句子 3 次。强调：不能让 present perfect 和 past simple 都对同一个空。禁止：I have forgotten my password yesterday. ✗（应该用 forgot）",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which sentences use present perfect?' 等孩子指出未完成时间的句子。问：'Which sentences use past simple?' 等孩子指出已完成时间的句子。问：'Can we say I have forgotten yesterday?' 等孩子说 'No, yesterday is finished time, we use past simple: I forgot.' 如果孩子说错，再带读 2 次。确认孩子能区分 present perfect（未完成时间）和 past simple（已完成时间）。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 8 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 8 周，包括阅读理解（Wei 第一次上计算机实验室课：log in / password / save work / headphones）、语法题（present perfect vs past simple，每个空只有一个正确答案）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 8 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」「题目全部原创」「官方题目」等话术。",
      },
    ],
    spokenLines: [
      "Wei has been at Riverside for two weeks. ✓ (未完成时间 for two weeks，用 present perfect)",
      "Yesterday Aisha forgot her password. ✓ (已完成时间 yesterday，用 past simple)",
      "Mr Raj has explained the rule since Monday. ✓ (未完成时间 since Monday，用 present perfect)",
      "Last week the class had their first ICT lesson. ✓ (已完成时间 last week，用 past simple)",
    ],
  },
  "SEC-9": {
    title: "Sick Bay — although vs but",
    fossil: "although (concession) vs but (contrast) — unique keys",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 9 周，不是 CEQ。本周只练一个区别：although（concession 让步从句）vs but（contrast 对比转折）。如果空格在句首或需要引导让步从句，正确答案是 although（but 不出现或明显错误）；如果空格在逗号后连接对比句子，正确答案是 but（although 不出现或明显错误）。每个空只有一个正确答案，不能让 although 和 but 都对同一个空。禁止：although … but … 同时出现在一个句子里（中文「虽然…但是…」在英语里只用一个）。本周情境是 Wei 上课时身体不适去 sick bay。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Have you ever felt unwell during a lesson?' 让孩子说 yes / no / sometimes。问：'What did you do when you felt unwell?'，引导孩子说 told the teacher / went to sick bay / rested / drank water。问：'What does a school nurse do?'，让孩子说话。如果孩子混淆 although 和 but（例如说 'Although I was sick, but I went to school'），不要立刻纠正，等微课环节再讲。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个句子：'_____ Wei felt unwell, he finished the lesson.' 和 'The nurse was busy, _____ she helped Wei immediately.' 问孩子：'第一句空格填 Although 还是 but？第二句填 although 还是 but？' 等孩子思考后，解释化石：第一句空格在句首引导让步从句（让步=concession），用 Although（不用 but）。第二句空格在逗号后连接对比句子（对比转折=contrast），用 but（不用 although）。关键区别：although 引导让步从句（Although Wei felt unwell, he finished the lesson. ✓），but 在逗号后连接对比（Wei felt unwell, but he finished the lesson. ✓）。禁止：Although Wei felt unwell, but he finished the lesson. ✗（although 和 but 不能同时出现，中文「虽然…但是…」在英语里只用一个）。让孩子跟读改正后的句子 3 次。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which sentences use although?' 等孩子指出让步从句的句子。问：'Which sentences use but?' 等孩子指出对比转折的句子。问：'Can we say Although I was sick, but I went to school?' 等孩子说 'No, we can only use although or but, not both.' 如果孩子说错，再带读 2 次。确认孩子能区分 although（让步从句）和 but（对比转折）。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 9 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 9 周，包括阅读理解（Wei 上课时身体不适去 sick bay：Mr Lim sends him / Nurse Ong: sit down, take temperature, drink water, call home if needed）、语法题（although vs but，每个空只有一个正确答案）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 9 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」「题目全部原创」「官方题目」等话术。",
      },
    ],
    spokenLines: [
      "Although Wei felt unwell, he finished the lesson. ✓ (although 引导让步从句，不加 but)",
      "The nurse was busy, but she helped Wei immediately. ✓ (but 连接对比句子，前面没有 although)",
      "Although the sick bay was quiet, Wei felt more relaxed. ✓ (although 在句首)",
      "Wei wanted to go back, but Nurse Ong told him to rest. ✓ (but 在逗号后)",
    ],
  },
  "SEC-10": {
    title: "Fire Drill — too vs enough",
    fossil: "too + adj vs adj + enough — unique keys",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 10 周，不是 CEQ。本周只练一个区别：too + adj（太…不能）vs adj + enough（足够…可以）。如果意思是『超过需要/不可能』，正确答案是 too（too crowded / too slow / too late / too loud），enough 不出现或明显错误。如果意思是『足够达到需要』，正确答案是 enough（wide enough / quiet enough / fast enough / large enough），too 不出现或明显错误。禁止：too enough, enough too, very enough。每个空只有一个正确答案，不能让 too 和 enough 都对同一个空。本周情境是 Wei 第一次消防演习。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Have you ever had a fire drill at school?' 让孩子说 yes / no / I don't know。问：'What do you do during a fire drill?'，引导孩子说 leave the classroom / go outside / line up / don't run。问：'Why do schools have fire drills?'，让孩子说话。如果孩子混淆 too 和 enough（例如说 'The room is too big enough' 或 'The corridor was enough crowded'），不要立刻纠正，等微课环节再讲。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个句子：'The corridor was _____ for them to move quickly. (meaning: more crowded than wanted)' 和 'The staircase was _____ for two lines of students. (meaning: sufficient width)' 问孩子：'第一句空格填 too crowded 还是 crowded enough？第二句填 too wide 还是 wide enough？' 等孩子思考后，解释化石：第一句意思是「太挤了，不能快走」（超过需要，不可能），用 too crowded（enough 不出现或明显错误）。第二句意思是「够宽，可以走两排」（足够达到需要），用 wide enough（too 不出现或明显错误）。关键区别：too + adj = 超过需要/不可能（The corridor was too crowded. ✓ The alarm was too loud. ✓），adj + enough = 足够达到需要（The staircase was wide enough. ✓ The field was large enough. ✓）。禁止：too enough, enough too, very enough。强调：The room is too small（小到不行，不够用）vs The room is small enough（小到刚好够用）意思相反！让孩子跟读改正后的句子 3 次。",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which sentences use too?' 等孩子指出超过需要的句子。问：'Which sentences use enough?' 等孩子指出足够达到需要的句子。问：'Can we say the corridor was too crowded enough?' 等孩子说 'No, we can only use too or enough, not both.' 如果孩子说错，再带读 2 次。确认孩子能区分 too（超过需要）和 enough（达到需要）。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 10 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 10 周，包括阅读理解（Wei 第一次消防演习：alarm / leave bags / walk don't run / stairs / assembly point on the field / class register）、语法题（too + adj vs adj + enough，每个空只有一个正确答案）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 10 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」「题目全部原创」「官方题目」等话术。",
      },
    ],
    spokenLines: [
      "The corridor was too crowded to move quickly. ✓ (太挤了，不能快走，用 too)",
      "The staircase was wide enough for two lines. ✓ (够宽，可以走两排，用 enough)",
      "The field was large enough for all classes. ✓ (够大，所有班级都能站，用 enough)",
      "The alarm was too loud. It made everyone stop. ✓ (太大声了，超过需要，用 too)",
    ],
  },
  "SEC-11": {
    title: "School Bookshop — a few vs a little",
    fossil: "a few (countable) vs a little (uncountable) — unique keys",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 英语第 11 周，不是 CEQ。本周只练一个区别：a few（可数）vs a little（不可数）。如果名词可数（pens, books, minutes, dollars），正确答案是 a few，a little 不出现或明显错误。如果名词不可数（money, time, paper, water, stationery, change 作为找零），正确答案是 a little，a few 不出现或明显错误。禁止：a few money, a little pens, few of money。每个空只有一个正确答案，不能让 a few 和 a little 都对同一个空。本周情境是 Wei 在学校书店买文具。」提醒家长可以在旁边观摩，但请让孩子自己开口。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Have you ever bought pens or notebooks at a school bookshop?' 让孩子说 yes / no / I don't know。问：'What do you usually buy at the bookshop?'，引导孩子说 pens / pencils / erasers / notebooks / exercise books。问：'Do you pay with cash or with your phone?'，让孩子说话。如果孩子混淆 a few 和 a little（例如说 'I need a little pens' 或 'I have a few money'），不要立刻纠正，等微课环节再讲。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下两个句子：'Wei needed _____ pens.' 和 'Wei had _____ money left.' 问孩子：'第一句空格填 a few 还是 a little？第二句填 a few 还是 a little？' 等孩子思考后，解释化石：第一句 pens 是可数名词（one pen, two pens），用 a few（a little 不出现或明显错误）。第二句 money 是不可数名词（不能说 one money, two moneys），用 a little（a few 不出现或明显错误）。关键区别：a few + 可数名词复数（a few pens / a few books / a few minutes / a few dollars），a little + 不可数名词（a little money / a little time / a little paper / a little water / a little stationery / a little change 作为找零）。禁止：a few money（money 不可数）, a little pens（pens 可数）, few of money（介词 of 用法错误）。让孩子跟读改正后的句子 3 次：Wei needed a few pens. Wei had a little money left.",
      },
      {
        name: "跟读",
        duration: "5 分钟",
        teacherNotes: "展示 4 个正确句子（见 spokenLines），一句一句让孩子跟读。读完后问：'Which sentences use a few?' 等孩子指出可数名词的句子。问：'Which sentences use a little?' 等孩子指出不可数名词的句子。问：'Can we say a few money?' 等孩子说 'No, money is uncountable, we say a little money.' 如果孩子说错，再带读 2 次。确认孩子能区分 a few（可数）和 a little（不可数）。",
      },
      {
        name: "作业",
        duration: "5 分钟",
        teacherNotes: "打开 /learn 页面，给孩子看 SEC 第 11 周作业入口。告诉孩子：「这周的作业是中学 AEIS 英语第 11 周，包括阅读理解（Wei 在学校书店买文具：bookshop near canteen / a little queue / a few blue pens / exercise book / Mr Lim told class to buy a little extra stationery / total S$6.50 / Wei had a little money left—only S$8 / receipt / change S$1.50 / Aisha forgot wallet / Wei can lend a few dollars）、语法题（a few 可数 vs a little 不可数，每个空只有一个正确答案）、写作（2 题选 1，写 200-300 词）。完成后系统会自动批改选择题，写作部分会有 AI 反馈。」对家长说：「这是 AEIS-Secondary 第 11 周，不是 CEQ。官方 Sec 1 卷型：Part 1 Writing 2 题选 1 篇，200-300 词；Part 2 有 50 道 MCQ（理解 + 完形 + 词汇 + 语法）。本周是样本，不是完整 50 题。孩子完成作业后，我们会在微信群里同步进度。」不提「包过」「保证录取」「题目全部原创」「官方题目」等话术。",
      },
    ],
    spokenLines: [
      "Wei needed a few pens for his English class. ✓ (pens 可数，用 a few)",
      "Wei had a little money left from his allowance. ✓ (money 不可数，用 a little)",
      "There was a little queue at the counter. ✓ (queue 单数，用 a little 表示小规模)",
      "The auntie gave Wei a little change. ✓ (change 作为找零的钱不可数，用 a little)",
    ],
  },
  "SMATH-0": {
    title: "百分数增减 — Percentage Increase/Decrease",
    fossil: "part/whole mix-up / % of vs % increase",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学试学周，不是 CEQ 也不是小学 AEIS 数学。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 百分数。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出算式步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know what 10% means?' 等孩子回答。然后说：'10% means 10 out of 100, or 10 divided by 100, or 0.1.' 用新加坡元举例：'A book costs S$80. What is 10% of S$80?' 引导孩子说 'S$80 divided by 10 equals S$8.' 或 'S$8.' 不立刻讲增减，只练「几分之几 of 某数」的算法。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'20% of S$50 ≠ 20% increase from S$50.' 解释：20% of S$50 = S$50 ÷ 5 = S$10（这是一部分，不是增加后的新价格）。20% increase from S$50：先算 20% of S$50 = S$10，再加到 S$50 → S$50 + S$10 = S$60（这才是新价格）。写出公式：Increase = original × percentage, New price = original + increase. Decrease 同理：先算 decrease amount，再减。让孩子跟读公式 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出算式步骤）。例题：Jun Wei bought a book for S$80. The price increased by 10%. What is the new price? 步骤：① 10% of S$80 = S$80 ÷ 10 = S$8. ② New price = S$80 + S$8 = S$88. Answer: S$88. 强调：算式要分步骤写，不能只写答案。再做一道减少：A bag costs S$50. The price decreased by 20%. New price? 步骤：① 20% of S$50 = S$50 ÷ 5 = S$10. ② New price = S$50 − S$10 = S$40. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：A toy costs S$60. Price increased by 15%. New price? 答案：15% of S$60 = S$9, New = S$60 + S$9 = S$69. 题 2：A dress costs S$100. Price decreased by 25%. New price? 答案：25% of S$100 = S$25, New = S$100 − S$25 = S$75. 题 3：18 is 25% of a number. What is the number? 答案：18 ÷ 0.25 = 72 或 18 ÷ 25 × 100 = 72. 教师巡看孩子的算式，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 Percentage 1.1 (找整体) + 1.2 (增减)，对应 preceding level 规则。(3) 本周化石：part/whole 混淆（20% of ≠ 20% increase）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写算式题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-1": {
    title: "比 — Ratio",
    fossil: "ratio not in simplest form / mixing part:part with part:whole",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 1 周，比（ratio）。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 Ratio 1.1–1.7。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出算式步骤。本周不教涉及分数或小数的比（官方明确排除）。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know what a ratio is?' 等孩子回答。然后说：'A ratio compares two or more quantities. For example, boys to girls = 3:5 means for every 3 boys, there are 5 girls.' 在白板上写 3:5，解释：'This is a ratio, read as three to five.' 问孩子：'If there are 3 boys and 5 girls, how many students in total?' 等孩子说 '8.' 强调：'3 + 5 = 8 total parts.' 不立刻讲分配，只练读比和算总份数。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Simplest form: 8:12 = 2:3 (divide by 4).' 解释：最简比是用最小的整数表示比，8:12 可以同时除以 4，得 2:3。不要写 8:12 当答案如果题目要求 simplest form。再写：'Part:part vs part:whole. Boys:girls = 3:5 (part:part). Boys:total = 3:8 (part:whole).' 强调：boys to girls 是两个部分的比，boys to total 是部分与整体的比。让孩子跟读：'Part to part. Part to whole.' 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出算式步骤）。例题：The sports club has 120 students. Boys to girls = 3:5. How many boys are there? 步骤：① Total parts = 3 + 5 = 8. ② 1 part = 120 ÷ 8 = 15. ③ Boys = 3 × 15 = 45. Answer: 45 boys. 强调：算式要分步骤写，不能只写答案。再做一道最简比：Write 12:18 in simplest form. 步骤：① Find the HCF of 12 and 18 = 6. ② 12 ÷ 6 = 2, 18 ÷ 6 = 3. ③ Simplest form = 2:3. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：Divide S$80 in the ratio 3:5. What is the larger share? 答案：Total parts = 3+5 = 8, 1 part = S$80 ÷ 8 = S$10, Larger share = 5 × S$10 = S$50. 题 2：Write 15:25 in simplest form. 答案：HCF = 5, 15÷5 = 3, 25÷5 = 5, Simplest form = 3:5. 题 3：Find the missing term: 4:7 = 12:□. 答案：4 × 3 = 12, so 7 × 3 = 21, □ = 21. 教师巡看孩子的算式，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 Ratio 1.1–1.7（notation, equivalent ratios, dividing a quantity, simplest form, finding ratio, missing term, relationship with fraction），对应 preceding level 规则。(3) 本周化石：ratio not in simplest form（未约简）、mixing part:part with part:whole（混淆部分与部分、部分与整体）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写算式题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-2": {
    title: "代数 — Algebra",
    fossil: "3a means 3×a not 3+a / forgetting to simplify like terms",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 2 周，代数（algebra）。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 Algebra 1.1–1.5。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出算式步骤。本周不教括号（brackets）、负系数、联立方程、不等式、二次方程。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know what algebra is?' 等孩子回答。然后说：'Algebra uses letters to represent unknown numbers. For example, n stands for a number. If n = 4, then 3n means 3 × n = 3 × 4 = 12.' 在白板上写 3n，解释：'3n means 3 multiplied by n, not 3 + n.' 问孩子：'If a = 5, what is 2a?' 等孩子说 '10.' 强调：'2a = 2 × a = 2 × 5 = 10.' 不立刻讲化简，只练代数乘法记号。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'3a means 3 × a, not 3 + a.' 解释：代数里 3a 表示乘法，不是加法。再写：'Simplify 2x + 3x. Answer: 2x + 3x = 5x (combine like terms).' 强调：同类项（like terms）可以合并，2x 和 3x 都是 x 的项，所以 2x + 3x = 5x。不要写成 2x + 3x 当答案，要化简到 5x。让孩子跟读：'3a equals 3 times a. Combine like terms.' 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出算式步骤）。例题：If a = 4, find the value of 3a + 2. 步骤：① 3a = 3 × a = 3 × 4 = 12. ② 3a + 2 = 12 + 2 = 14. Answer: 14. 强调：算式要分步骤写，不能只写答案。再做一道化简：Simplify 4x + 7 + 3x − 2. 步骤：① Combine like terms: 4x + 3x = 7x. ② Combine constants: 7 − 2 = 5. ③ Answer: 7x + 5. 再做一道方程：Solve 2x + 3 = 11. 步骤：① 2x = 11 − 3. ② 2x = 8. ③ x = 8 ÷ 2. ④ x = 4. Answer: x = 4. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：Simplify 2x + 5x. 答案：2x + 5x = 7x. 题 2：If m = 6, find 2m − 5. 答案：2m = 2 × 6 = 12, 2m − 5 = 12 − 5 = 7. 题 3：Solve x + 9 = 15. 答案：x = 15 − 9 = 6. 教师巡看孩子的算式，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子写 2x + 5x 当答案不化简，提醒 'Combine like terms to simplify'。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 Algebra 1.1–1.5（using a letter, notation 3a = 3×a, simplifying excluding brackets, evaluating by substitution, simple linear equations with whole number coefficient），对应 preceding level 规则。(3) 本周化石：3a means 3×a not 3+a（未理解代数乘法记号）、forgetting to simplify like terms（忘记合并同类项）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写算式题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-3": {
    title: "分数除法 — Fraction Division",
    fossil: "÷ a whole number vs ÷ a fraction / invert-and-multiply",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 3 周，分数除法（fraction division）。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 Fractions 1.1–1.2。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出算式步骤。本周不教带分数除法（如果不在 1.1–1.2）、百分数、比、代数。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know how to divide fractions?' 等孩子回答。然后说：'When we divide by a fraction, we invert and multiply. For example, 3 ÷ 1/2 means 3 × 2/1 = 6.' 在白板上写 3 ÷ 1/2，解释：'Dividing by 1/2 is the same as multiplying by 2/1 (the reciprocal).' 问孩子：'What is 4 ÷ 1/4?' 等孩子说 '16.' 强调：'4 ÷ 1/4 = 4 × 4/1 = 16.' 再问：'What is 1/2 ÷ 2?' 等孩子尝试。解释：'1/2 ÷ 2 = 1/2 × 1/2 = 1/4.'",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Dividing a fraction by a whole number: 1/2 ÷ 4 = 1/2 × 1/4 = 1/8.' 解释：除以整数时，要把整数写成分数（4 = 4/1），然后倒过来乘（1/4）。再写：'Dividing by a fraction: 3 ÷ 1/2 = 3 × 2/1 = 6.' 强调：除以分数时，把分数倒过来（invert）再乘（multiply）。1/2 倒过来是 2/1。让孩子跟读：'To divide by a fraction, invert and multiply. One half divided by four equals one eighth.' 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出算式步骤）。例题：What is 3 ÷ 1/2? 步骤：① Write 3 as 3/1. ② Invert 1/2 to get 2/1. ③ Multiply: 3/1 × 2/1 = 6/1 = 6. Answer: 6. 强调：算式要分步骤写，说明 invert and multiply。再做一道真分数除以整数：What is 3/4 ÷ 3? (Give answer in simplest form) 步骤：① Write 3 as 3/1. ② Invert 3/1 to get 1/3. ③ Multiply: 3/4 × 1/3 = 3/12. ④ Simplify: 3/12 = 1/4. Answer: 1/4. 再做一道真分数除以真分数：What is 1/3 ÷ 1/6? 步骤：① Invert 1/6 to get 6/1. ② Multiply: 1/3 × 6/1 = 6/3 = 2. Answer: 2. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：What is 2/3 ÷ 5? (Give answer in simplest form) 答案：2/3 ÷ 5 = 2/3 × 1/5 = 2/15. 题 2：What is 8 ÷ 2/3? 答案：8 ÷ 2/3 = 8/1 × 3/2 = 24/2 = 12. 题 3：What is 2/5 ÷ 1/10? 答案：2/5 ÷ 1/10 = 2/5 × 10/1 = 20/5 = 4. 教师巡看孩子的算式，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子忘记化简，提醒 'Simplify to simplest form when the question says so'。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 Fractions 1.1 (dividing a proper fraction by a whole number without calculator), 1.2 (dividing a whole number or a proper fraction by a proper fraction without calculator)，对应 preceding level 规则。(3) 本周化石：÷ a whole number vs ÷ a fraction（除以整数 vs 除以分数混淆）、invert-and-multiply（倒过来乘）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写算式题家长拍照上传。答案要求 simplest form 时题干会明确说明。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-4": {
    title: "圆的面积和周长 — Circle Area and Circumference",
    fossil: "semicircle perimeter needs the diameter / πr² vs 2πr mix-up",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 4 周，圆的面积和周长（area and circumference of circle）。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 Area and Circumference of Circle 1.1–1.3。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出算式步骤。π 的值每道题都会明确给出，本周全用 π = 22/7。本周不教体积、球体/圆锥/圆柱公式。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know the formula for the circumference of a circle?' 等孩子回答。然后说：'Circumference = 2πr or πd. For example, if radius = 7 cm and π = 22/7, circumference = 2 × 22/7 × 7 = 44 cm.' 在白板上写 C = 2πr，计算 2 × 22/7 × 7 = 44。再问：'What is the formula for the area of a circle?' 等孩子说 'πr².' 强调：'Area = πr². For example, if r = 7 cm and π = 22/7, area = 22/7 × 7 × 7 = 154 cm².' 在白板上写 A = πr²，计算 22/7 × 49 = 154。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Semicircle perimeter = curved part + diameter = πr + 2r.' 解释：半圆的周长不是只有弧长（πr），还要加上底边（直径 2r）。举例：'If r = 7 cm and π = 22/7, semicircle perimeter = 22/7 × 7 + 14 = 22 + 14 = 36 cm.' 强调：'Perimeter means the outer edge. For a semicircle, the outer edge includes the curved part AND the straight part (the diameter).' 再写：'Area = πr², Circumference = 2πr. Don't mix them up!' 让孩子跟读：'Semicircle perimeter equals pi r plus diameter. Area is pi r squared, not two pi r.' 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出算式步骤）。例题：A semicircle has radius 7 cm. Take π = 22/7. Find the perimeter. 步骤：① Curved part = πr = 22/7 × 7 = 22 cm. ② Diameter = 2r = 2 × 7 = 14 cm. ③ Perimeter = curved part + diameter = 22 + 14 = 36 cm. Answer: 36 cm. 强调：半圆周长 = 弧长 + 直径。再做一道圆的面积：A circle has radius 7 cm. Take π = 22/7. Find the area. 步骤：① Area = πr² = 22/7 × 7 × 7. ② Calculate: 22/7 × 49 = 22 × 7 = 154 cm². Answer: 154 cm². 再做一道组合图形：A rectangle is 14 cm by 10 cm. A semicircle of diameter 14 cm is added to one 14-cm side. Take π = 22/7. Find the total area. 步骤：① Rectangle area = 14 × 10 = 140 cm². ② Semicircle radius = 14 ÷ 2 = 7 cm. ③ Semicircle area = (1/2) × πr² = (1/2) × 22/7 × 49 = 77 cm². ④ Total area = 140 + 77 = 217 cm². Answer: 217 cm². 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：A circle has diameter 21 cm. Take π = 22/7. Find the circumference. 答案：C = πd = 22/7 × 21 = 66 cm. 题 2：A circle has radius 14 cm. Take π = 22/7. Find the area. 答案：A = πr² = 22/7 × 14 × 14 = 22/7 × 196 = 616 cm². 题 3：A quarter circle has radius 7 cm. Take π = 22/7. Find the perimeter (curved part + two straight sides). 答案：Curved part = (1/4) × 2πr = (1/4) × 2 × 22/7 × 7 = 11 cm. Two sides = 7 + 7 = 14 cm. Perimeter = 11 + 14 = 25 cm. 教师巡看孩子的算式，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子半圆周长忘了加直径，提醒 'Semicircle perimeter = πr + diameter, not just πr'。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 Area and Circumference of Circle 1.1 (area and circumference of circle), 1.2 (finding the area and perimeter of semicircle and quarter circle), 1.3 (finding the area and perimeter of composite figures made up of square, rectangle, triangle, semicircle and quarter circle)，对应 preceding level 规则。(3) 本周化石：半圆周长忘了加直径（semicircle perimeter = πr + diameter，不是只有 πr）、面积公式 πr² 与周长公式 2πr 混淆。(4) π 的值：官方没有统一规定，每道题会明确说明。本周全用 π = 22/7。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写算式题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-5": {
    title: "正方体和长方体体积 — Volume of Cube and Cuboid",
    fossil: "volume vs edge / forgetting V = l × w × h",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 5 周，正方体和长方体体积（volume of cube and cuboid）。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 Volume of Cube and Cuboid 2.1–2.5。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出算式步骤。本周不教 cm³ 和 m³ 之间的转换（官方明确排除），也不教球体/圆锥/圆柱。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know the formula for the volume of a cube?' 等孩子回答。然后说：'Volume of a cube = edge³. That means edge × edge × edge. For example, if the edge is 4 cm, volume = 4³ = 4 × 4 × 4 = 64 cm³.' 在白板上写 V = edge³，计算 4³ = 4 × 4 × 4 = 64。再问：'What is the formula for the volume of a cuboid?' 等孩子说 'length × width × height.' 强调：'Volume of a cuboid = length × width × height. For example, if l = 10 cm, w = 4 cm, h = 3 cm, volume = 10 × 4 × 3 = 120 cm³.' 在白板上写 V = l × w × h，计算 10 × 4 × 3 = 120。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Volume vs edge: 64 cm³ is the volume, NOT the edge. The edge is 4 cm.' 解释：体积和边长是不同的东西，单位也不同（cm³ vs cm）。举例：'A cube has volume 64 cm³. What is the edge? Edge = ³√64 = 4 cm, because 4 × 4 × 4 = 64.' 再写：'Cuboid volume = length × width × height. Don't forget to multiply all three!' 让孩子跟读：'Volume of cube equals edge cubed. Volume of cuboid equals length times width times height. Volume uses cm³ or m³, edge uses cm or m.' 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出算式步骤）。例题 1：A cube has volume 64 cm³. Find the length of one edge. 步骤：① Volume of cube = edge³. ② edge³ = 64. ③ edge = ³√64 = 4 cm (because 4 × 4 × 4 = 64). Answer: 4 cm. 强调：³√64 means cube root of 64, the number that gives 64 when multiplied by itself three times. 再做一道长方体：A cuboid has volume 120 cm³. The length is 10 cm and the width is 4 cm. Find the height. 步骤：① Volume = l × w × h. ② 120 = 10 × 4 × h. ③ 120 = 40 × h. ④ h = 120 ÷ 40 = 3 cm. Answer: 3 cm. 再做一道已知体积和底面积求高：A cuboid has volume 96 cm³ and base area 16 cm². Find the height. 步骤：① Volume = base area × height. ② 96 = 16 × h. ③ h = 96 ÷ 16 = 6 cm. Answer: 6 cm. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：A cube has edge 3 cm. Find the volume. 答案：V = edge³ = 3³ = 3 × 3 × 3 = 27 cm³. 题 2：A cuboid is 5 cm long, 4 cm wide, and 3 cm high. Find the volume. 答案：V = l × w × h = 5 × 4 × 3 = 60 cm³. 题 3：A cube has volume 125 cm³. Find the length of one edge. 答案：edge³ = 125, edge = ³√125 = 5 cm (because 5 × 5 × 5 = 125). 教师巡看孩子的算式，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子把体积和边长混淆，提醒 'Volume uses cm³, edge uses cm'。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 Volume of Cube and Cuboid 2.1 (finding one dimension of a cuboid given its volume and the other dimensions), 2.2 (finding the length of one edge of a cube given its volume), 2.3 (finding the height of a cuboid given its volume and base area), 2.4 (finding the area of a face of a cuboid given its volume and one dimension), 2.5 (use of √ and ³√ as needed)，对应 preceding level 规则。(3) 本周化石：体积和边长混淆（volume vs edge: 64 cm³ is the volume, 4 cm is the edge）、忘记长方体体积公式 V = l × w × h（要把三个边都乘起来）。(4) 单位：体积用 cm³ 或 m³，长度/边/高用 cm 或 m。官方大纲明确不教 cm³ 和 m³ 之间的转换。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写算式题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-6": {
    title: "平均数 — Average of a Set of Data",
    fossil: "average confused with total / forgetting total = average × n",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 6 周，平均数（average of a set of data）。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 STATISTICS: DATA ANALYSIS 1.1–1.2。官方 MOE 2021 Primary Mathematics (Updated Oct 2025), PRIMARY SIX, STATISTICS, SUB-STRAND: DATA ANALYSIS: 1. Average of a Set of Data, 1.1 average as 'total value ÷ number of data', 1.2 relationship between average, total value and number of data。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出算式步骤。官方用词是 average（平均数），不教 mean / median / mode 作为官方名称。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know how to find the average?' 等孩子回答。然后说：'Average = total value ÷ number of data. For example, 5 students scored 70, 80, 90, 85, 75. Total = 70 + 80 + 90 + 85 + 75 = 400. Number of students = 5. Average = 400 ÷ 5 = 80.' 在白板上写公式 Average = total value ÷ number of data，计算 (70+80+90+85+75) ÷ 5 = 400 ÷ 5 = 80。再说：'If we know the average and the number of data, we can find the total. Total = average × number of data. For example, the average of 6 students is 80. Total = 80 × 6 = 480.' 在白板上写 Total = average × number of data，计算 80 × 6 = 480。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Average confused with total: 80 is the average, NOT the total. The total is 400.' 解释：平均数和总值是不同的。平均数 = 总值 ÷ 数据个数，总值 = 平均数 × 数据个数。举例：'5 students have an average score of 80. The total is 80 × 5 = 400, NOT 80.' 再写：'Finding a missing value: if the average of 5 students is 80, and 4 of them scored 80, 70, 90, 75, what did the 5th student score? Step 1: Total = 80 × 5 = 400. Step 2: Sum of 4 scores = 80 + 70 + 90 + 75 = 315. Step 3: 5th score = 400 − 315 = 85.' 让孩子跟读：'Average equals total value divided by number of data. Total equals average times number of data. To find a missing value, first find the total, then subtract the known values.' 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出算式步骤）。例题 1：5 students scored 70, 80, 90, 85, and 75 in a test. Find the average score. 步骤：① Total = 70 + 80 + 90 + 85 + 75 = 400. ② Number of students = 5. ③ Average = total ÷ number of data = 400 ÷ 5 = 80. Answer: 80. 再做一道求总值：The average score of 6 students is 80. Find the total value of all 6 scores. 步骤：① Total = average × number of data. ② Total = 80 × 6 = 480. Answer: 480. 再做一道求缺失值：4 students scored 80, 70, 90, and 75 in a test. The average of all 5 students is 80. Find the score of the 5th student. 步骤：① Total = average × number of data = 80 × 5 = 400. ② Sum of 4 scores = 80 + 70 + 90 + 75 = 315. ③ 5th score = total − sum of known scores = 400 − 315 = 85. Answer: 85. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：Jun Wei scored 78, 82, 85, and 90 in four tests. Find his average score. 答案：Total = 78 + 82 + 85 + 90 = 335. Number = 4. Average = 335 ÷ 4 = 83.75. 题 2：The average weight of 5 boxes is 8 kg. Find the total weight of all 5 boxes. 答案：Total = average × number = 8 × 5 = 40 kg. 题 3：5 students scored an average of 70. 4 of them scored 65, 72, 68, and 75. Find the 5th student's score. 答案：Total = 70 × 5 = 350. Sum of 4 = 65 + 72 + 68 + 75 = 280. 5th score = 350 − 280 = 70. 教师巡看孩子的算式，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子把平均数和总值混淆，提醒 'Average is NOT the same as total. Average = total ÷ number of data.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 STATISTICS: DATA ANALYSIS 1.1 average as 'total value ÷ number of data', 1.2 relationship between average, total value and number of data，对应 preceding level 规则。(3) 本周化石：平均数和总值混淆（average confused with total: 孩子写总值而不是平均数，或者把 average 当成 total × number 而不是 total ÷ number）、求缺失值时忘记 total = average × number of data（when finding a missing value, forgetting that total = average × number of data）。(4) 官方用词是 average（平均数），不用 mean / median / mode 这些名称。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写算式题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-7": {
    title: "特殊四边形求未知角 — Special Quadrilaterals",
    fossil: "treating parallelogram angle as triangle sum / treating trapezium as parallelogram / adding extra construction lines",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 7 周，特殊四边形求未知角（finding unknown angles in special quadrilaterals）。本周是 Sec 1 数学卷型样本，内容对应前一级 P6 MEASUREMENT AND GEOMETRY, SUB-STRAND: GEOMETRY: 1. Special Quadrilaterals, 1.1 finding unknown angles, without additional construction of lines, in composite geometric figures involving square / rectangle / triangle / parallelogram / rhombus / trapezium。官方 MOE 2021 Primary Mathematics (Updated Oct 2025), PRIMARY SIX。SEAB 官方规则：申请 Sec 1 入学的孩子需熟悉 Sec 1 前一级的内容。不用计算器，要写出推理步骤。不加辅助线（without additional construction of lines）。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know the properties of special quadrilaterals?' 等孩子回答。然后说：'Square and rectangle: all angles 90°. Parallelogram: adjacent angles add to 180°. Rhombus: adjacent angles add to 180°. Trapezium (Singapore): one pair of parallel sides; the two angles between the same pair of parallel sides add to 180°.' 在白板上画一个平行四边形 ABCD，标注 ∠A = 70°，问：'What is ∠B?' 等孩子回答。解释：'Adjacent angles in a parallelogram add to 180°. So ∠B = 180° − 70° = 110°.' 在白板上写公式 ∠A + ∠B = 180°，计算 ∠B = 180° − 70° = 110°。再画一个梯形 PQRS（PQ ∥ SR），标注 ∠P = 80°，问：'What is ∠S?' 等孩子回答。解释：'The two angles between the same pair of parallel sides add to 180°. So ∠S = 180° − 80° = 100°.' 在白板上写 ∠P + ∠S = 180°，计算 ∠S = 180° − 80° = 100°。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Treating a parallelogram angle as a triangle sum. ✗ A parallelogram is NOT a triangle. Adjacent angles in a parallelogram add to 180°, NOT all three angles adding to 180°.' 举例：'In parallelogram ABCD, ∠A = 70°. Some students think ∠B + ∠C = 110° (triangle sum). ✗ Wrong. Adjacent angles add to 180°. So ∠B = 180° − 70° = 110°. Opposite angles are equal. So ∠C = ∠A = 70°.' 再写：'Fossil 2: Treating a trapezium as a parallelogram. ✗ A trapezium has only ONE pair of parallel sides, NOT two. So NOT all opposite angles are equal. Only the two angles between the same pair of parallel sides add to 180°.' 举例：'In trapezium PQRS (PQ ∥ SR), ∠P = 80°. Some students think ∠R = ∠P = 80° (parallelogram). ✗ Wrong. ∠P and ∠S are between the same pair of parallel sides, so ∠S = 180° − 80° = 100°. But ∠R is NOT necessarily equal to ∠P.' 再写：'Fossil 3: Adding extra construction lines. ✗ The question says without additional construction of lines. Do NOT draw diagonals or extra lines unless the question gives them.' 让孩子跟读：'Adjacent angles in a parallelogram add to 180°. The two angles between the same pair of parallel sides in a trapezium add to 180°. Do not add extra construction lines.' 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出推理步骤）。例题 1：In parallelogram ABCD, ∠A = 70°. Find ∠B. 步骤：① In a parallelogram, adjacent angles add to 180°. ② ∠A + ∠B = 180°. ③ ∠B = 180° − 70° = 110°. Answer: 110°. 再做一道梯形：In trapezium PQRS, PQ is parallel to SR. ∠P = 80° and ∠Q = 100°. Find ∠R. 步骤：① In a trapezium, the two angles between the same pair of parallel sides add to 180°. ② PQ ∥ SR, so ∠Q and ∠R are between the same pair of parallel sides. ③ ∠Q + ∠R = 180°. ④ ∠R = 180° − 100° = 80°. Answer: 80°. 再做一道菱形：In rhombus WXYZ, ∠W = 110°. Find ∠X. 步骤：① In a rhombus, adjacent angles add to 180°. ② ∠W + ∠X = 180°. ③ ∠X = 180° − 110° = 70°. Answer: 70°. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：In parallelogram ABCD, ∠B = 65°. Find ∠C. 答案：Adjacent angles add to 180°. ∠B + ∠C = 180°. ∠C = 180° − 65° = 115°. 题 2：In trapezium WXYZ, WX is parallel to ZY. ∠W = 110°. Find ∠Z. 答案：The two angles between the same pair of parallel sides add to 180°. ∠W + ∠Z = 180°. ∠Z = 180° − 110° = 70°. 题 3：In rectangle PQRS, ∠P = 90°. Find ∠Q. 答案：All angles in a rectangle are 90°. ∠Q = 90°. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子把平行四边形当成三角形，提醒 'A parallelogram is NOT a triangle. Adjacent angles add to 180°, NOT all angles adding to 180°.' 如果孩子把梯形当成平行四边形，提醒 'A trapezium has only ONE pair of parallel sides. NOT all opposite angles are equal.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：P6 MEASUREMENT AND GEOMETRY, GEOMETRY: 1. Special Quadrilaterals, 1.1 finding unknown angles, without additional construction of lines, in composite geometric figures involving square / rectangle / triangle / parallelogram / rhombus / trapezium，对应 preceding level 规则。(3) 本周化石：treating a parallelogram angle as a triangle sum（把平行四边形的角当成三角形和 180°）、treating a trapezium as a parallelogram（把梯形当成平行四边形，以为所有对角都相等）、adding extra construction lines（加了题目没给的辅助线）。(4) 四边形性质：square / rectangle all angles 90°；parallelogram adjacent angles add to 180°；rhombus adjacent angles add to 180°；trapezium (SG) the two angles between the same pair of parallel sides add to 180°。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-8": {
    title: "质数与质数分解 — Primes and Prime Factorisation",
    fossil: "treating 1 as a prime / writing a factorisation that still has a composite (e.g. 2 × 15 instead of 2 × 3 × 5)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 8 周，质数与质数分解（primes and prime factorisation）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.1 primes and prime factorisation。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。不用计算器，要写出分解步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you know what a prime number is?' 等孩子回答。然后说：'A prime number is a whole number greater than 1 that has exactly two factors: 1 and itself. For example, 2, 3, 5, 7, 11, 13 are prime numbers. 2 is the only even prime number.' 在白板上写质数列表：2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...。强调：'1 is NOT a prime number. 1 is neither prime nor composite.' 再说：'A composite number is a whole number greater than 1 that has more than two factors. For example, 4, 6, 8, 9, 10, 12 are composite numbers.' 举例：'4 has factors 1, 2, 4 (three factors), so 4 is composite. 6 has factors 1, 2, 3, 6 (four factors), so 6 is composite.'",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Treating 1 as a prime. ✗ 1 is NOT a prime number. A prime must have exactly two factors: 1 and itself. 1 has only one factor (itself), so it is neither prime nor composite.' 再写：'Fossil 2: Writing a factorisation that still has a composite. ✗ For example, 30 = 2 × 15 is NOT complete prime factorisation, because 15 is still composite (15 = 3 × 5). The correct prime factorisation is 30 = 2 × 3 × 5. All factors must be prime.' 举例：'Express 24 as a product of its prime factors. ✗ Wrong: 24 = 3 × 8 (8 is composite). ✗ Wrong: 24 = 4 × 6 (both composite). ✓ Correct: 24 = 2 × 2 × 2 × 3 (all prime).' 再举例：'Is 1 a prime number? ✗ No. 1 is neither prime nor composite. Prime numbers start from 2.'",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范一道完整例题（写出分解步骤）。例题 1：Find the prime factorisation of 60. 步骤：① Start with the smallest prime 2. 60 ÷ 2 = 30. So 60 = 2 × 30. ② 30 is still composite. 30 ÷ 2 = 15. So 60 = 2 × 2 × 15. ③ 15 is still composite. 15 ÷ 3 = 5. So 60 = 2 × 2 × 3 × 5. ④ All factors are now prime (2, 2, 3, 5). Answer: 60 = 2 × 2 × 3 × 5. 再做一道：Express 72 as a product of its prime factors. 步骤：① 72 ÷ 2 = 36. So 72 = 2 × 36. ② 36 ÷ 2 = 18. So 72 = 2 × 2 × 18. ③ 18 ÷ 2 = 9. So 72 = 2 × 2 × 2 × 9. ④ 9 ÷ 3 = 3. So 72 = 2 × 2 × 2 × 3 × 3. ⑤ All factors are prime. Answer: 72 = 2 × 2 × 2 × 3 × 3. 再做一道识别题：Which of the following is a prime number: 1, 9, 13, 15? 步骤：① 1 is not prime (neither prime nor composite). ② 9 = 3 × 3 (composite). ③ 13 has only factors 1 and 13 (prime). ④ 15 = 3 × 5 (composite). Answer: 13. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出分解步骤。家长可以用手机拍照孩子的推理。题 1：Express 45 as a product of its prime factors. 答案：45 ÷ 3 = 15. So 45 = 3 × 15. 15 ÷ 3 = 5. So 45 = 3 × 3 × 5. All factors are prime. Answer: 45 = 3 × 3 × 5. 题 2：List all the prime numbers between 10 and 20. 答案：Check each number: 11 (prime), 12 = 2 × 6 (composite), 13 (prime), 14 = 2 × 7 (composite), 15 = 3 × 5 (composite), 16 = 2 × 8 (composite), 17 (prime), 18 = 2 × 9 (composite), 19 (prime). Answer: 11, 13, 17, 19. 题 3：A number has the prime factorisation 2 × 3 × 5. What is the number? 答案：2 × 3 = 6. 6 × 5 = 30. Answer: 30. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子写 2 × 15，提醒 '15 is still composite. You must continue: 15 = 3 × 5. So the answer is 2 × 3 × 5.' 如果孩子把 1 当成质数，提醒 '1 is NOT a prime number. 1 is neither prime nor composite.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.1 primes and prime factorisation，对应 preceding level 规则。(3) 本周化石：treating 1 as a prime（把 1 当成质数，实际上 1 既不是质数也不是合数）、writing a factorisation that still has a composite（质数分解还有合数，例如写 2 × 15 而不是 2 × 3 × 5）。(4) 质数定义：a whole number greater than 1 that has exactly two factors: 1 and itself（大于 1 且只有两个因数的整数）。例子：2, 3, 5, 7, 11, 13, ...（2 是唯一的偶质数）。1 不是质数（1 is neither prime nor composite）。(5) 质数分解方法：从最小的质数 2 开始除，每次除后检查商是否还能继续分解，直到所有因数都是质数。例如 60 = 2 × 2 × 3 × 5。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-9": {
    title: "HCF 和 LCM 质数分解 — HCF and LCM by Prime Factorisation",
    fossil: "swapping HCF and LCM / using product of highest powers for HCF instead of lowest powers",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 9 周，HCF 和 LCM 通过质数分解（HCF and LCM by prime factorisation）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 finding HCF and LCM by prime factorisation（只教 HCF 和 LCM 部分，本周不教 squares, cubes, square roots and cube roots）。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。不用计算器，要写出分解步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you remember how to find prime factorisation from last week?' 等孩子回答。然后说：'Good. This week we use prime factorisation to find HCF and LCM. HCF stands for Highest Common Factor (最大公约数). LCM stands for Lowest Common Multiple (最小公倍数).' 在白板上写例子：'12 and 18. First we factorise: 12 = 2 × 2 × 3 = 2² × 3. 18 = 2 × 3 × 3 = 2 × 3². Now we find HCF and LCM.' 先不解释，让孩子看到今天的目标。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Swapping HCF and LCM. ✗ Some students use the LCM method (all primes, highest powers) to find HCF. ✗ Some students use the HCF method (common primes only, lowest powers) to find LCM. HCF = common primes, lowest powers. LCM = all primes, highest powers.' 再写：'Fossil 2: Using highest powers for HCF. ✗ For example, 12 = 2² × 3, 18 = 2 × 3². Wrong: HCF = 2² × 3² = 36 (this is actually LCM, not HCF). Correct: HCF = 2¹ × 3¹ = 6 (common primes, lowest powers).' 举例：'Find the HCF of 24 and 36. ✗ Wrong: 24 = 2³ × 3, 36 = 2² × 3². HCF = 2³ × 3² = 72 (using highest powers, this is LCM method). ✓ Correct: HCF = 2² × 3¹ = 12 (common primes, lowest powers).' 再举例：'Find the LCM of 8 and 12. ✗ Wrong: 8 = 2³, 12 = 2² × 3. LCM = 2² × 3 = 12 (using lowest powers, this is HCF method). ✓ Correct: LCM = 2³ × 3 = 24 (all primes, highest powers).'",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出分解和求 HCF/LCM 的步骤）。例题 1：Find the HCF of 12 and 18 by prime factorisation. 步骤：① Factorise both numbers. 12 = 2 × 2 × 3 = 2² × 3. 18 = 2 × 3 × 3 = 2 × 3². ② Find common primes: 2 and 3. ③ Take lowest powers: 2¹ (because 12 has 2², 18 has 2¹, so lowest is 2¹), 3¹ (because 12 has 3¹, 18 has 3², so lowest is 3¹). ④ HCF = 2¹ × 3¹ = 2 × 3 = 6. Answer: 6. 例题 2：Find the LCM of 12 and 18 by prime factorisation. 步骤：① Factorise both numbers (same as above): 12 = 2² × 3, 18 = 2 × 3². ② Take all primes (both have 2 and 3). ③ Take highest powers: 2² (because 12 has 2², 18 has 2¹, so highest is 2²), 3² (because 12 has 3¹, 18 has 3², so highest is 3²). ④ LCM = 2² × 3² = 4 × 9 = 36. Answer: 36. 再做一道应用题：Two bells ring together at 8 a.m. One bell rings every 12 minutes, the other rings every 18 minutes. At what time will they ring together again? 步骤：① Find LCM of 12 and 18 (smallest common time). ② LCM = 36 minutes (from example above). ③ 8:00 a.m. + 36 minutes = 8:36 a.m. Answer: 8:36 a.m. 孩子在纸上抄一遍例题步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出分解和求 HCF/LCM 的步骤。家长可以用手机拍照孩子的推理。题 1：Find the HCF of 24 and 36 by prime factorisation. 答案：24 = 2 × 2 × 2 × 3 = 2³ × 3. 36 = 2 × 2 × 3 × 3 = 2² × 3². Common primes: 2, 3. Lowest powers: 2² (lowest is 2² from both), 3¹ (lowest is 3¹ from 24). HCF = 2² × 3 = 4 × 3 = 12. Answer: 12. 题 2：Find the LCM of 15 and 20 by prime factorisation. 答案：15 = 3 × 5. 20 = 2 × 2 × 5 = 2² × 5. All primes: 2, 3, 5. Highest powers: 2² (from 20), 3¹ (from 15), 5¹ (both have 5¹). LCM = 2² × 3 × 5 = 4 × 3 × 5 = 60. Answer: 60. 题 3：Mei has 30 stickers and Jun Wei has 45 stickers. They want to divide all the stickers equally into the largest possible number of goody bags with no stickers left over. How many goody bags can they make? 答案：We need HCF of 30 and 45 (largest number of bags). 30 = 2 × 3 × 5. 45 = 3 × 3 × 5 = 3² × 5. Common primes: 3, 5. Lowest powers: 3¹, 5¹. HCF = 3 × 5 = 15. Answer: 15 goody bags. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子混淆 HCF 和 LCM，提醒 'HCF = common primes, lowest powers. LCM = all primes, highest powers.' 如果孩子求 HCF 时用了最高次幂，提醒 'For HCF, we take the LOWEST powers of common primes, not the highest powers.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 finding HCF and LCM by prime factorisation，对应 preceding level 规则。(3) 本周化石：swapping HCF and LCM（把 HCF 和 LCM 的方法搞反），using highest powers for HCF（HCF 应该取最小次幂，不是最大次幂）。(4) HCF 方法：先质数分解两个数，找共有的质因数，取最小次幂相乘。例：12 = 2² × 3, 18 = 2 × 3²，HCF = 2¹ × 3¹ = 6。(5) LCM 方法：先质数分解两个数，看所有质因数（共有的和独有的），取最大次幂相乘。例：12 = 2² × 3, 18 = 2 × 3²，LCM = 2² × 3² = 36。(6) 应用规律：largest number of groups/bags = HCF（最多能分几组/几袋用 HCF），smallest total/common time = LCM（最小公倍数/最早共同时间用 LCM）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-10": {
    title: "平方立方与根 — Squares, Cubes, Square Roots and Cube Roots by Prime Factorisation",
    fossil: "swapping square and cube (×2 vs ×3 on exponents) / taking √ of a non-square / taking ³√ of a non-cube",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 10 周，平方、立方、平方根和立方根通过质数分解（squares, cubes, square roots and cube roots by prime factorisation）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 squares, cubes, square roots and cube roots by prime factorisation（本周只教平方、立方、平方根和立方根部分，不教 HCF 和 LCM，那是上周第 9 周）。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。不用计算器，要写出分解步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'Do you remember how to find prime factorisation? Last week we used it for HCF and LCM. This week we use it for squares, cubes, square roots and cube roots.' 在白板上写：'6 = 2 × 3. What is 6²?' 等孩子回答。然后说：'Let's use prime factorisation. 6 = 2 × 3, so 6² = (2 × 3)² = 2² × 3² = 4 × 9 = 36.' 让孩子看到今天的目标：用质数分解求平方、立方、平方根、立方根。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Swapping square and cube. ✗ Some students multiply exponents by 3 when finding a square (should be ×2), or multiply by 2 when finding a cube (should be ×3). Example: 4 = 2². Wrong: 4² = 2³ = 8 (used ×3, this is 2³ not 2⁴). Correct: 4² = 2⁴ = 16 (multiply exponent by 2: 2 × 2 = 4, so 2⁴ = 16).' 再写：'Fossil 2: Taking square root of a non-perfect-square. ✗ Example: √12. 12 = 2² × 3¹. Wrong: √12 = 2¹ × 3^0.5 (divided odd exponent 3¹ by 2). Correct: 12 is not a perfect square (because 3 has odd exponent 1). Only perfect squares have all even exponents.' 再举例：'Fossil 3: Taking cube root of a non-perfect-cube. ✗ Example: ³√16. 16 = 2⁴. Wrong: ³√16 = 2^(4/3) (divided 4 by 3). Correct: 16 is not a perfect cube (because 4 is not a multiple of 3). Only perfect cubes have all exponents as multiples of 3.' 最后写：'Fossil 4: Mixing √ and ³√. ✗ Example: Find √27. Wrong: √27 = 3 (this is ³√27, not √27). Correct: 27 = 3³, so √27 is not an integer (27 is a perfect cube, not a perfect square).'",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出分解和计算步骤）。例题 1：Find 6² by prime factorisation. 步骤：① Factorise 6. 6 = 2 × 3. ② Square: multiply each exponent by 2. 6² = (2 × 3)² = 2² × 3² = 4 × 9 = 36. Answer: 36. 例题 2：Find √36 by prime factorisation. 步骤：① Factorise 36. 36 = 2 × 2 × 3 × 3 = 2² × 3². ② Check: are all exponents even? Yes (2 and 2 are even). So 36 is a perfect square. ③ Square root: divide each exponent by 2. √36 = 2^(2÷2) × 3^(2÷2) = 2¹ × 3¹ = 2 × 3 = 6. Answer: 6. 例题 3：Find 4³ by prime factorisation. 步骤：① Factorise 4. 4 = 2 × 2 = 2². ② Cube: multiply each exponent by 3. 4³ = (2²)³ = 2^(2×3) = 2⁶ = 64. Answer: 64. 例题 4：Find ³√64 by prime factorisation. 步骤：① Factorise 64. 64 = 2 × 2 × 2 × 2 × 2 × 2 = 2⁶. ② Check: is the exponent a multiple of 3? Yes (6 = 3 × 2). So 64 is a perfect cube. ③ Cube root: divide the exponent by 3. ³√64 = 2^(6÷3) = 2² = 4. Answer: 4. 再做一道应用题：Wei is making a square floor pattern with square tiles. Each small tile measures 1 cm by 1 cm. He has 36 tiles in total. If he arranges all the tiles to form a large square, what is the length of one side of the large square? 步骤：① We need √36 (area of large square = 36 cm², side = √36). ② Factorise 36: 36 = 2² × 3². ③ √36 = 2¹ × 3¹ = 6. Answer: 6 cm.",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出分解和计算步骤。家长可以用手机拍照孩子的推理。题 1：Find 8² by prime factorisation. 答案：8 = 2 × 2 × 2 = 2³. 8² = (2³)² = 2^(3×2) = 2⁶ = 64. Answer: 64. 题 2：Find ³√125 by prime factorisation. 答案：125 = 5 × 5 × 5 = 5³. Check: exponent 3 is a multiple of 3, so 125 is a perfect cube. ³√125 = 5^(3÷3) = 5¹ = 5. Answer: 5. 题 3：Is 18 a perfect square? 答案：Factorise 18: 18 = 2 × 3 × 3 = 2¹ × 3². Check exponents: 2 has exponent 1 (odd), 3 has exponent 2 (even). Not all exponents are even, so 18 is not a perfect square. Answer: No. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子把平方和立方的指数规则搞反（×2 vs ×3），指出：'Square: multiply by 2. Cube: multiply by 3. Don't swap them.' 如果孩子开平方根时遇到奇数次幂还除以 2，指出：'Only even exponents can be divided by 2. If any exponent is odd, it is not a perfect square.' 如果孩子开立方根时遇到不是 3 的倍数的次幂还除以 3，指出：'Only exponents that are multiples of 3 can be divided by 3. If any exponent is not a multiple of 3, it is not a perfect cube.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 squares, cubes, square roots and cube roots by prime factorisation（本周只教平方、立方、平方根和立方根，不教 HCF 和 LCM），对应 preceding level 规则。(3) 本周化石：swapping square and cube（把平方和立方的指数规则搞反，平方时次幂×3，立方时次幂×2），taking square root of a non-perfect-square（开平方时遇到奇数次幂），taking cube root of a non-perfect-cube（开立方根时遇到不是 3 的倍数的次幂），mixing √ and ³√（把平方根和立方根混淆）。(4) Square 方法：先质数分解一个数（如 6 = 2 × 3），求平方时每个质因数的次幂×2（6² = 2² × 3² = 36）。(5) Cube 方法：每个质因数的次幂×3（4 = 2²，4³ = 2⁶ = 64）。(6) Square root 方法：只有每个质因数的次幂都是偶数才是 perfect square，每个次幂÷2（√36 = √(2² × 3²) = 2¹ × 3¹ = 6）。如果有奇数次幂，不是 perfect square。(7) Cube root 方法：只有每个质因数的次幂都是 3 的倍数才是 perfect cube，每个次幂÷3（³√64 = ³√(2⁶) = 2² = 4）。如果有次幂不是 3 的倍数，不是 perfect cube。(8) 应用：正方形地砖拼成大正方形，求边长用平方根（area = n², side = √n）；小立方体堆成大立方体，求边长用立方根（volume = n³, side = ³√n）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-11": {
    title: "负数四则运算 — Negative Numbers, Integers, Rationals, Reals and Their Four Operations",
    fossil: "sign error when adding/subtracting negatives / minus × minus left negative / mixing (−3)² and −3²",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 11 周，负数、整数、有理数、实数及其四则运算（negative numbers, integers, rational numbers, real numbers and their four operations）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.3 负数、整数、有理数、实数及其四则运算。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。不用计算器，要写出算式步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：'What happens when we add a negative number? For example, 3 + (−5)?' 等孩子回答。如果孩子说 3 + (−5) = −2，点头。如果孩子说 3 + (−5) = 8 或其他错误，说：'Let's think. Adding a negative number is like subtracting a positive number. 3 + (−5) = 3 − 5 = −2.' 在白板上写：'3 + (−5) = 3 − 5 = −2'。再问：'What about −4 − (−6)?' 等孩子回答。如果孩子卡住，说：'Subtracting a negative number is like adding a positive number. −4 − (−6) = −4 + 6 = 2.' 在白板上写：'−4 − (−6) = −4 + 6 = 2'。让孩子看到今天的目标：负数的加减乘除四则运算，以及区分 (−3)² 和 −3²。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Sign error when adding/subtracting negatives. ✗ Example: −4 − (−6). Wrong: −4 − (−6) = −10 (treated −(−6) as −6 instead of +6). Correct: −4 − (−6) = −4 + 6 = 2. Subtracting a negative is like adding a positive.' 再写：'Fossil 2: Minus × minus left negative. ✗ Example: (−3) × (−4). Wrong: (−3) × (−4) = −12 (thought negative × negative = negative). Correct: (−3) × (−4) = 12. Negative × negative = positive.' 再写：'Fossil 3: Mixing (−3)² and −3². ✗ Example 1: (−3)². Wrong: (−3)² = −9 (forgot brackets mean the whole negative is squared). Correct: (−3)² = (−3) × (−3) = 9. Example 2: −3². Wrong: −3² = 9 (thought it was (−3)²). Correct: −3² = −(3²) = −9. Square first, then negative.' 对家长说：「本周三大化石：减负数当成加负数、负负得负、括号平方和先平方后负搞混。我们今天专攻这三个难点。」",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范六道完整例题（写出算式步骤）。例题 1：Calculate: 3 + (−5). 步骤：① Adding a negative = subtracting a positive. ② 3 + (−5) = 3 − 5 = −2. Answer: −2. 例题 2：Calculate: −4 − (−6). 步骤：① Subtracting a negative = adding a positive. ② −4 − (−6) = −4 + 6 = 2. Answer: 2. 例题 3：Calculate: (−3) × (−4). 步骤：① Negative × negative = positive. ② (−3) × (−4) = 12. Answer: 12. 例题 4：Calculate: (−12) ÷ 4. 步骤：① Negative ÷ positive = negative. ② (−12) ÷ 4 = −3. Answer: −3. 例题 5：Calculate: (−3)². 步骤：① Brackets mean the whole negative is squared. ② (−3)² = (−3) × (−3) = 9. Answer: 9. 例题 6：Calculate: −3². 步骤：① Square first, then negative. ② −3² = −(3 × 3) = −9. Answer: −9. 再做一道应用题：The temperature in a lab was 5°C. It dropped by 9°C. What is the new temperature? 步骤：① Start: 5°C. ② Drop by 9°C: 5 − 9 = −4. ③ New temperature: −4°C. Answer: −4°C. 让孩子跟读每个步骤，特别是 'adding a negative = subtracting a positive'、'subtracting a negative = adding a positive'、'negative × negative = positive'。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的推理。题 1：Calculate: −5 − (−8). Show your working. 答案：① Subtracting a negative = adding a positive. ② −5 − (−8) = −5 + 8 = 3. Answer: 3. 题 2：Calculate: (−3) × 4 ÷ (−2). Show your working. 答案：① First, multiply: (−3) × 4 = −12 (negative × positive = negative). ② Then, divide: (−12) ÷ (−2) = 6 (negative ÷ negative = positive). Answer: 6. 题 3：Wei's bank account had S$50. He spent S$70. What is his new balance? Show your working. 答案：① Start: S$50. ② Spent: S$50 − S$70 = −S$20. ③ New balance: −S$20 (he owes S$20). Answer: −S$20. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子把 −5 − (−8) 算成 −13（把减负数当成加负数），指出：'Subtracting a negative is like adding a positive. −5 − (−8) = −5 + 8 = 3.' 如果孩子把 (−3) × (−4) 算成 −12（负负得负），指出：'Negative × negative = positive, not negative. (−3) × (−4) = 12.' 如果孩子把 (−3)² 算成 −9 或把 −3² 算成 9，指出：'(−3)² = (−3) × (−3) = 9. But −3² = −(3²) = −9. The brackets make a difference.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.3 negative numbers, integers, rational numbers, real numbers and their four operations（负数、整数、有理数、实数及其四则运算），对应 preceding level 规则。(3) 本周化石：sign error when adding/subtracting negatives（把 −4 − (−6) 当成 −10），minus × minus left negative（负负得负），mixing (−3)² and −3²（混淆 (−3)² = 9 和 −3² = −9）。(4) 加减法规则：adding a negative = subtracting a positive（3 + (−5) = 3 − 5 = −2），subtracting a negative = adding a positive（−4 − (−6) = −4 + 6 = 2）。(5) 乘除法规则：negative × negative = positive（(−3) × (−4) = 12），negative × positive = negative（(−3) × 4 = −12），positive ÷ negative = negative（12 ÷ (−3) = −4），negative ÷ negative = positive（(−12) ÷ (−3) = 4）。(6) 区分 (−3)² 和 −3²：(−3)² = (−3) × (−3) = 9（括号内先负后平方），−3² = −(3²) = −9（先平方后负）。(7) 运算顺序：先括号 brackets，再乘除 multiplication/division（从左到右），最后加减 addition/subtraction（从左到右）。例：(−4) + (−2) × 3 = (−4) + (−6) = −10。(8) 应用：温度变化（5°C − 9°C = −4°C），账户余额（S$50 − S$70 = −S$20）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-12": {
    title: "数轴表示与排序 — Representation and Ordering of Numbers on the Number Line",
    fossil: "placing a negative on the positive side / thinking −8 > −3 because 8 > 3",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 12 周，数轴上的数的表示和排序（representation and ordering of numbers on the number line）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.5 representation and ordering of numbers on the number line。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 8–11 周已教 1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则，跳过了 1.4 计算器运算（AEIS 禁用计算器），本周是 1.5 数轴，下一周是 1.6 不等号。本周可以说『左边的数小于右边的数』，但不把不等号符号作为本周主要练习内容。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上画一条横线，中间标 0，右边标 1, 2, 3，左边标 −1, −2, −3。问孩子：'What do we call this line?' 等孩子回答（number line / 数轴）。指着 0 右边说：'Numbers to the right of 0 are positive.' 指着 0 左边说：'Numbers to the left of 0 are negative.' 再问：'Which number is bigger, 2 or −3?' 等孩子回答。如果孩子说 2，点头。指着数轴说：'2 is to the right of −3, so 2 is bigger.' 再问：'Which number is bigger, −3 or −8?' 等孩子回答。如果孩子说 −3，点头并强调：'−3 is to the right of −8 on the number line, so −3 is bigger than −8. Further left means smaller.' 如果孩子说 −8（常见化石），说：'Let's look at the number line. −8 is to the left of −3. Further left means smaller. So −8 is smaller than −3, not bigger.' 让孩子看到今天的目标：在数轴上表示数、从小到大排序、比较负数大小。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Placing a negative on the positive side. ✗ Example: Where is −2 on the number line? Wrong: Place −2 to the right of 0 (on the positive side). Correct: −2 is to the left of 0 (on the negative side). All negative numbers are to the left of 0.' 再写：'Fossil 2: Thinking a more-negative number is larger because its absolute value is larger. ✗ Example: Which is bigger, −8 or −3? Wrong: −8 is bigger because 8 > 3. Correct: −8 is to the left of −3 on the number line, so −8 is smaller than −3. Further left = smaller. Remember: −8 < −3 (not −8 > −3).' 画一条数轴，标上 −8, −3, 0, 3。指着 −8 和 −3 说：'−8 is further left, so −8 is smaller. Think about temperature: −8°C is colder than −3°C.' 对家长说：「本周两大化石：把负数标在正数一侧、以为 −8 > −3 因为 8 > 3。记住关键规则：数轴上越靠左的数越小。」",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范五道完整例题（写出推理步骤）。例题 1：Which point is furthest left among −2, 0, 3, −5? 步骤：① Draw a number line. Mark −5, −2, 0, 3. ② −5 is furthest left. Answer: −5. 例题 2：Arrange −4, 1, −1, 0 from smallest to largest. 步骤：① On a number line, numbers increase from left to right. ② −4 is furthest left, then −1, then 0, then 1. Answer: −4, −1, 0, 1. 例题 3：Where is −1/2 on the number line? 步骤：① −1/2 is negative, so it is to the left of 0. ② −1/2 is halfway between −1 and 0. Answer: −1/2 lies between −1 and 0 on the negative side. 例题 4：Which number lies between −3 and 1? 选项：A. −5, B. −2, C. 2, D. 3. 步骤：① Between −3 and 1 means to the right of −3 and to the left of 1. ② −5 is to the left of −3 (✗). −2 is between −3 and 1 (✓). 2 and 3 are to the right of 1 (✗). Answer: B. −2. 例题 5：Which is smaller, −8 or −3? 步骤：① On a number line, −8 is to the left of −3. ② Further left = smaller. Answer: −8 is smaller than −3. 再做一道应用题：On Monday the temperature was −8°C. On Tuesday it was −3°C. Which day was colder? 步骤：① −8°C < −3°C (−8 is to the left of −3 on the number line). ② Smaller temperature = colder. Answer: Monday (−8°C is colder). 让孩子跟读每个步骤，特别是 'further left = smaller' 和 '−8 is to the left of −3, so −8 < −3'。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Arrange −7, 3, −2, 0 from smallest to largest. Show your working. 答案：① On a number line, numbers increase from left to right. ② −7 is furthest left, then −2, then 0, then 3. Answer: −7, −2, 0, 3. 题 2：Mark the position of 3/2 on the number line. Show your working. 答案：① 3/2 = 1.5. ② 3/2 is positive, so it is to the right of 0. ③ 3/2 lies halfway between 1 and 2. Answer: 3/2 lies between 1 and 2 on the positive side. 题 3：Wei and Aisha are at Riverside Secondary. The ground floor is level 0. Wei is at level −3 (basement parking). Aisha is at level 2 (classroom). Arrange their floor levels from lowest to highest. Show your working. 答案：① Wei: −3. Aisha: 2. Ground: 0. ② On a number line, −3 is to the left of 0, and 0 is to the left of 2. ③ From lowest to highest: −3, 0, 2. Answer: Wei (−3), Ground (0), Aisha (2). 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子把 −7 排在 −2 右边（以为 −7 > −2），指出：'−7 is to the left of −2 on the number line, so −7 is smaller. Further left = smaller.' 如果孩子把 3/2 标在负数一侧，指出：'3/2 is positive (3 ÷ 2 = 1.5 > 0), so it must be to the right of 0.' 如果孩子把 Wei (−3) 排在 Aisha (2) 上面（以为 −3 > 2），指出：'−3 is to the left of 2 on the number line, so −3 is lower (smaller). Think: basement is below ground, ground is below classrooms.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.5 representation and ordering of numbers on the number line（数轴上的数的表示和排序），对应 preceding level 规则。(3) 本周化石：placing a negative on the positive side（把 −2 标在 0 右边），thinking −8 > −3 because 8 > 3（以为 −8 大于 −3）。(4) 数轴规则：0 右边是正数 positive numbers，0 左边是负数 negative numbers。从左到右 = 从小到大（left to right = smallest to largest）。越靠左越小（further left = smaller）。(5) 表示 representation：整数（−3, 0, 2）容易标。简单有理数：−1/2 在 −1 和 0 中间，3/2 在 1 和 2 中间，−2.5 在 −3 和 −2 中间。(6) 排序 ordering：例如 −5, −1, 0, 2 从小到大（按数轴从左到右顺序）。(7) 负数比较：−8 在 −3 左边，所以 −8 < −3（不是 −8 > −3）。记住：更负的数更小。(8) 两数之间 between：−3 和 1 之间可以是 −2, −1, 0（这些数在 −3 右边且在 1 左边）。(9) 应用：温度（−8°C 比 −3°C 更冷，因为 −8 < −3），楼层（地下用负数，地面 = 0，地上用正数），账户余额（负数 = 欠款）。金额用新加坡元 S$。(10) 本周不教：1.6 不等号符号（<, >, ≤, ≥），那是下一周。本周可以说「left = smaller」或「−8 is smaller than −3」，但不把不等号符号作为主要教学目标。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-13": {
    title: "不等号的使用 — Use of <, >, ≤, ≥",
    fossil: "flipping the inequality on negatives (writing −8 > −3) / mixing < with ≤ when numbers are equal",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 13 周，不等号的使用（use of <, >, ≤, ≥）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.6 use of <, >, ≤, ≥。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 8–12 周已教 1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则、1.5 数轴，跳过了 1.4 计算器运算（AEIS 禁用计算器），本周是 1.6 不等号。本周不教 1.7 近似与估算（approximation and estimation，包括 rounding off 四舍五入 和 significant figures 有效数字），那是下一周。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写四个符号：<, >, ≤, ≥。指着 < 问：'What does this symbol mean?' 等孩子回答（less than / 小于）。指着 > 问：'What does this symbol mean?' 等孩子回答（greater than / 大于）。指着 ≤ 问：'What about this one?' 等孩子回答（less than or equal to / 小于或等于）。指着 ≥ 问：'And this one?' 等孩子回答（greater than or equal to / 大于或等于）。在白板上写 −8 和 −3。问：'Which number is smaller, −8 or −3?' 等孩子回答。如果孩子说 −8，点头并说：'Correct. On a number line, −8 is to the left of −3, so −8 is smaller. How do we write this using symbols?' 如果孩子说 −8 < −3，点头。如果孩子说 −8 > −3（常见化石），说：'Let's check. −8 is to the left of −3 on the number line, so −8 is smaller, not bigger. The correct symbol is <, not >. −8 < −3.' 让孩子看到今天的目标：用不等号符号表示数的大小关系、判断不等式的真假、处理等号情况（≤ 和 ≥）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Flipping the inequality on negatives. ✗ Example: Fill in the blank: −8 ___ −3. Wrong: −8 > −3 (thinking 8 > 3, so −8 > −3). Correct: −8 < −3. Remember: −8 is to the left of −3 on the number line, so −8 is smaller than −3. Further left = smaller. Don't flip the inequality because of the absolute values!' 再写：'Fossil 2: Mixing < with ≤ when the numbers are equal. ✗ Example: Is −3 < −3 true or false? Wrong: True (thinking < means less than or equal to). Correct: False. −3 equals −3, not less than −3. The symbol < means strictly less than. If the numbers are equal, use ≤ or ≥, not < or >. −3 ≤ −3 is true (because −3 equals −3, which fits &quot;less than or equal to&quot;). −3 < −3 is false (because −3 equals −3, which does not fit &quot;less than&quot;).' 画一条数轴，标上 −8, −3, 0。指着 −8 和 −3 说：'−8 is to the left of −3, so −8 < −3. Think about temperature: −8°C is colder than −3°C, so −8 < −3.' 再写 −3 和 −3，说：'These are the same number. −3 = −3. So −3 ≤ −3 is true (fits &quot;less than or equal to&quot;), but −3 < −3 is false (does not fit &quot;less than&quot;).' 对家长说：「本周两大化石：写 −8 > −3 因为以为 8 > 3、接受 −3 < −3 为真。记住：数轴上越靠左的数越小，等号情况用 ≤ 或 ≥。」",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范五道完整例题（写出推理步骤）。例题 1：Fill in the blank with the correct symbol: −8 ___ −3. 选项：A. <, B. >, C. ≤, D. ≥. 步骤：① On a number line, −8 is to the left of −3. ② Further left = smaller. So −8 is less than −3. ③ The symbol for &quot;less than&quot; is <. Answer: A. −8 < −3. 例题 2：Is the statement −3 ≤ −3 true or false? 步骤：① −3 equals −3. ② The symbol ≤ means &quot;less than or equal to&quot;. ③ Since −3 equals −3, the statement is true. Answer: True. 例题 3：Which statement is true? 选项：A. −5 < −2, B. −5 > −2, C. −5 = −2, D. 0 < −1. 步骤：① Option A: −5 is to the left of −2, so −5 < −2 is true (✓). ② Option B: −5 is not greater than −2 (✗). ③ Option C: −5 does not equal −2 (✗). ④ Option D: 0 is to the right of −1, so 0 > −1, not 0 < −1 (✗). Answer: A. −5 < −2. 例题 4：Fill in the blank with the correct symbol: −3 ___ −3 (Note: The numbers are equal). 选项：A. <, B. >, C. ≤, D. Cannot use any symbol. 步骤：① −3 equals −3. ② The symbol < means strictly less than, so −3 < −3 is false (✗ A). ③ The symbol > means strictly greater than, so −3 > −3 is false (✗ B). ④ The symbol ≤ means &quot;less than or equal to&quot;. Since −3 equals −3, −3 ≤ −3 is true (✓ C). Answer: C. −3 ≤ −3. 例题 5：Wei's account balance is −S$30 (he owes $30). Aisha's balance is −S$50 (she owes $50). Which inequality is correct? 选项：A. −30 > −50, B. −30 < −50, C. −30 = −50, D. Both are positive. 步骤：① On a number line, −30 is to the right of −50. ② Further right = bigger. So −30 is greater than −50. ③ The symbol for &quot;greater than&quot; is >. Answer: A. −30 > −50. (Interpretation: Wei owes less money than Aisha, so his balance is higher, even though both are negative.) 每道题后问孩子：'Do you understand the working steps?' 确保孩子看到：符号 < 是 less than（严格小于），≤ 是 less than or equal to（小于或等于），等号情况用 ≤ 或 ≥ 而不是 < 或 >，负数比较看数轴位置（左边 = 小）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Write the correct symbol (<, >, ≤, or ≥) in the blank and explain using the number line: −8 ___ −3. 答案：① On a number line, −8 is to the left of −3. ② Further left = smaller. So −8 is less than −3. Answer: −8 < −3. 题 2：Is the statement −5 ≤ −5 true or false? Explain why using the meaning of the symbol ≤. 答案：① −5 equals −5. ② The symbol ≤ means &quot;less than or equal to&quot;. ③ Since −5 equals −5, the statement is true. Answer: True. 题 3：Aisha's bank account shows a balance of −S$40 (she owes $40). Mr Lim's account shows a balance of S$15 (he has $15). Write an inequality to compare the two balances and explain which account has less money. 答案：① Aisha: −40. Mr Lim: 15. ② On a number line, −40 is to the left of 15. ③ Further left = smaller. So −40 is less than 15. Answer: −40 < 15. (Aisha's account has less money because she owes money, which is a negative balance.) 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子写 −8 > −3（化石），指出：'−8 is to the left of −3 on the number line, so −8 is smaller, not bigger. The correct symbol is <, not >.' 如果孩子接受 −5 < −5 为真（化石），指出：'−5 equals −5, not less than −5. The symbol < means strictly less than. Since the numbers are equal, the statement −5 < −5 is false. But −5 ≤ −5 is true because ≤ means &quot;less than or equal to&quot;.' 做完三题后，问孩子：'What is the fossil error we want to avoid this week?' 等孩子回答（flipping the inequality on negatives, mixing < with ≤ when numbers are equal）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.6 use of <, >, ≤, ≥（不等号的使用），对应 preceding level 规则。(3) 本周化石：flipping the inequality on negatives（写 −8 > −3 因为以为 8 > 3），mixing < with ≤ when numbers are equal（接受 −3 < −3 为真）。(4) 不等号符号：< 小于 less than，> 大于 greater than，≤ 小于或等于 less than or equal to，≥ 大于或等于 greater than or equal to。(5) 填空：−8 ___ −3 → < （因为 −8 在数轴上更靠左，所以 −8 < −3）。(6) 真假判断：−3 ≤ −3 是 true（−3 等于 −3，符合 less than or equal to），−3 < −3 是 false（−3 等于 −3，不符合 less than）。(7) 负数比较：−8 < −3（不是 −8 > −3）。进一步靠左 = 更小（further left = smaller）。(8) 等号情况：−3 ___ −3 的答案只能是 ≤ 或 ≥（不能是 < 或 >，因为 −3 equals −3）。(9) 应用：温度（−8°C 比 −3°C 更冷，写 −8 < −3），账户余额（负数 = 欠款，−S$50 比 S$20 更小，写 −50 < 20）。金额用新加坡元 S$。(10) 唯一性 unique keys：两个选项不能都对同一题干为真。不提供 −5 < −2 和 −2 > −5 同时作为选项（都是真的）。不提供 −3 ≤ 1 和 −3 < 1 作为两个正确选项（如果都对，只选一个）。填空题如果 < 和 ≤ 都能真（例如 −5 ___ −2），则选择只有一个符号正确的题干（如 −3 ___ −3 只有 ≤ 正确），或问 which symbol is always correct。化石 −8 > −3 必须作为错误选项。(11) 本周不教 1.7 近似与估算 approximation and estimation（包括 rounding off 四舍五入 和 significant figures 有效数字），那是下一周。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-14": {
    title: "近似与估算 — Approximation and Estimation",
    fossil: "rounding down when the next digit is 5 / counting leading zeros as significant figures / estimating without rounding first",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 14 周，近似与估算（approximation and estimation）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.7 approximation and estimation (including rounding off numbers to a required number of decimal places or significant figures, and estimating the results of computation)。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 8–13 周已教 1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则、1.5 数轴、1.6 不等号，跳过了 1.4 计算器运算（AEIS 禁用计算器），本周是 1.7 近似与估算。本周完成官方 N1（N2 比 ratio 是下一部分，未开放）。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：3.456 to 2 decimal places = ?  问孩子：'What is 3.456 rounded to 2 decimal places?' 等孩子思考后，解释：'Look at the third decimal place. It's 6. Since 6 ≥ 5, we round up the second decimal place from 5 to 6. Answer: 3.46.' 再写：2.5 to 0 decimal places = ?  问孩子：'What is 2.5 rounded to 0 decimal places? Is it 2 or 3?' 等孩子回答。如果孩子说 2（常见化石），说：'Let's check. Look at the first decimal place. It's 5. Since 5 ≥ 5, we round up. So 2.5 becomes 3, not 2. This is important: when the next digit is 5, we round up.' 再写：48 × 21 ≈ ?  问孩子：'How can we estimate this?' 等孩子思考后，解释：'To estimate, we round each number first, then compute. Round 48 to 50. Round 21 to 20. Then compute: 50 × 20 = 1000. So 48 × 21 ≈ 1000.' 让孩子看到今天的目标：四舍五入到小数位数（decimal places）、四舍五入到有效数字（significant figures）、估算计算结果（estimating the results of computation）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Rounding down when the next digit is 5. ✗ Example: Round 2.5 to 0 decimal places. Wrong: 2 (thinking 5 is in the middle, so round down). Correct: 3. Rule: digit ≥ 5 → round up. So 2.5 becomes 3, not 2. Always round up when the next digit is 5 or more.' 再写：'Fossil 2: Counting leading zeros as significant figures. ✗ Example: Round 0.03450 to 2 significant figures. Wrong: 0.00 (thinking the first two digits 0 and 0 are the 2 s.f.). Correct: 0.035. Rule: Leading zeros after the decimal are not significant. Only count non-zero digits and zeros between or after them. In 0.03450, the significant figures are 3, 4, 5, 0 (4 s.f.). The first s.f. is 3, the second s.f. is 4, the third digit is 5. Since 5 ≥ 5, round up the second s.f. from 4 to 5. Answer: 0.035.' 再写：'Fossil 3: Estimating without rounding first, or rounding the answer only. ✗ Example: Estimate 48 × 21. Wrong: 48 × 21 = 1008, then round 1008 to 1000. Correct: Round 48 to 50, round 21 to 20, then compute 50 × 20 = 1000. Rule: To estimate, round each number first, then compute. Don't compute the exact answer and then round it.' 画出例子：2.5 → 3（not 2），0.03450 to 2 s.f. → 0.035（not 0.00），48 × 21 ≈ 50 × 20 = 1000（not 1008 → 1000）。让孩子跟读正确的方法 3 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范五道完整例题（写出推理步骤）。例题 1：Round 3.456 to 2 decimal places. 步骤：① 3.456 to 2 d.p. ② Look at the third decimal place: 6. ③ Since 6 ≥ 5, round up the second decimal place from 5 to 6. Answer: 3.46. 例题 2：Round 2.5 to 0 decimal places. 步骤：① 2.5 to 0 d.p. ② Look at the first decimal place: 5. ③ Since 5 ≥ 5, round up. 2 becomes 3. Answer: 3 (not 2). 例题 3：Round 3482 to 2 significant figures. 步骤：① 3482 to 2 s.f. ② The first s.f. is 3, the second s.f. is 4, the third digit is 8. ③ Since 8 ≥ 5, round up the second s.f. from 4 to 5. ④ Keep the place value by adding zeros: 3500. Answer: 3500. 例题 4：Round 0.03450 to 2 significant figures. 步骤：① 0.03450. ② Leading zeros after the decimal are not significant. The first non-zero digit is 3 (1st s.f.), then 4 (2nd s.f.), then 5 (3rd digit). ③ Since 5 ≥ 5, round up the 2nd s.f. from 4 to 5. ④ Write: 0.035. Answer: 0.035 (not 0.00). 例题 5：Estimate 48 × 21 by rounding each number first, then compute. 步骤：① Round 48 to the nearest ten: 50. ② Round 21 to the nearest ten: 20. ③ Estimate: 50 × 20 = 1000. Answer: 1000 (not 1008 or other). 教师在白板上写出每一步，让孩子看到完整推理过程。强调：'AEIS 官方要求写出 working steps，不能只写答案。四舍五入要说明看哪一位数字，是否 ≥ 5。估算要先 round 每个数，再计算。'",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Round 6.847 to 2 decimal places. Show which digit you look at to make your decision. 答案：① 6.847 to 2 d.p. ② Look at the third decimal place: 7. ③ Since 7 ≥ 5, round up the second decimal place from 4 to 5. Answer: 6.85. 题 2：Round 0.005682 to 3 significant figures. Explain which digits are significant and show your working. 答案：① 0.005682. ② Leading zeros after the decimal are not significant. The first non-zero digit is 5 (1st s.f.), then 6 (2nd s.f.), then 8 (3rd s.f.), then 2 (4th digit). ③ Since 2 < 5, do not round up. Keep the first 3 s.f.: 5, 6, 8. Answer: 0.00568. 题 3：Aisha went shopping. She bought items for S$37.50, S$22.80, and S$19.40. Estimate the total cost by rounding each price to the nearest dollar first, then compute the sum. Show your working. 答案：① S$37.50 ≈ S$38 (0.50 ≥ 0.5, round up). ② S$22.80 ≈ S$23 (0.80 ≥ 0.5, round up). ③ S$19.40 ≈ S$19 (0.40 < 0.5, do not round up). ④ Estimate: S$38 + S$23 + S$19 = S$80. Answer: S$80. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子在题 1 或题 2 出现化石（2.5 → 2 或前导零算作有效数字），指出错误并让孩子重做。如果孩子在题 3 先算精确值再四舍五入（化石 3），指出错误：'To estimate, round each number first, then compute. Don't compute the exact answer and then round it.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.7 approximation and estimation (including rounding off numbers to a required number of decimal places or significant figures, and estimating the results of computation)（近似与估算），对应 preceding level 规则。(3) 本周化石：rounding down when the next digit is 5（2.5 to 0 d.p. = 2 是错的，应该是 3，因为 5 ≥ 5，round up），counting leading zeros as significant figures（0.03450 to 2 s.f. = 0.00 是错的，应该是 0.035，前导零不是有效数字），estimating without rounding first（48 × 21 先算 1008 再 round to 1000 是错的，应该先 round 50×20 再算 1000）。(4) 四舍五入到小数位数 rounding off to decimal places (d.p.)：3.456 to 2 d.p. = 3.46（看第三位 6 ≥ 5，进位）；2.5 to 0 d.p. = 3（看第一位 5 ≥ 5，进位，只能是 3，不是 2）。(5) 四舍五入到有效数字 rounding off to significant figures (s.f.)：0.03450 to 2 s.f. = 0.035（leading zeros after the decimal are not significant，有效数字从第一个非零数字开始，3 和 4 是前两位，看第三位 5 ≥ 5，进位）；3482 to 2 s.f. = 3500（3 和 4 是前两位，看第三位 8 ≥ 5，进位，后面补零保持位值）。(6) 估算 estimating the results of computation：先四舍五入每个数，再计算。48 × 21 ≈ 50 × 20 = 1000（先 round 每个数，再相乘，不是先算 48 × 21 = 1008 再 round to 1000）。(7) 金额用新加坡元 S$（money in Singapore dollars S$）。不用计算器（calculators are not allowed）。(8) 唯一性 unique keys：两个选项不能都对同一题干为真。不提供 3.46 和 346/100 作为两个选项（数值相同）。2.5 to 0 d.p. 只有 3 是正确答案（不是 2）。估算题只有一个 intended estimate 是正确的（如果 key 是 50×20=1000，不提供 48×20=960 或其他合理估算作为第二个正确答案）。(9) 本周完成官方 N1：第 8 周教了 1.1 质数分解，第 9 周教了 1.2 HCF/LCM，第 10 周教了 1.2 平方立方和根，第 11 周教了 1.3 负数四则，1.4 计算器运算已跳过（AEIS 禁用计算器），第 12 周教了 1.5 数轴，第 13 周教了 1.6 不等号，本周教 1.7 近似与估算，本周完成官方 N1。下一部分是 N2 比 ratio（未开放）。(10) 不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源，官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。对家长说：「本周作业有 5+8+3 道题，模拟官方题型，不是完整 34+20+10–15 题。孩子做完后上传到作业 app，选择题自动批改，写推理题家长拍照上传。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-15": {
    title: "有理数比与化简 — Ratios Involving Rational Numbers, Simplest Form",
    fossil: "leaving a ratio with fractions unsimplified / swapping the order / treating 2/3 : 4 as 2 : 4",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 15 周，有理数比与化简（ratios involving rational numbers, writing a ratio in its simplest form）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.1 ratios involving rational numbers, 2.2 writing a ratio in its simplest form。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 8–14 周已完成 N1（1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则、1.5 数轴、1.6 不等号、1.7 近似估算，1.4 跳过因 AEIS 禁用计算器），本周开始 N2，只教 2.1–2.2（ratios involving rational numbers, writing a ratio in its simplest form）。本周不教 2.3 problems involving ratio（比的应用题，那是下一周）。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：1/2 : 1/3 = ?  问孩子：'How do we write this ratio in its simplest form?' 等孩子思考后，解释：'To compare fractions, we need a common denominator. The LCM of 2 and 3 is 6. Convert: 1/2 = 3/6, 1/3 = 2/6. So 1/2 : 1/3 = 3/6 : 2/6 = 3 : 2. We just use the numerators after converting to the same denominator.' 再写：0.4 : 0.6 = ?  问孩子：'How do we write this ratio in its simplest form?' 等孩子回答。解释：'Convert to whole numbers by multiplying by 10: 0.4 × 10 = 4, 0.6 × 10 = 6. So 0.4 : 0.6 = 4 : 6. Now find the HCF of 4 and 6. HCF = 2. Divide both by 2: 4 ÷ 2 = 2, 6 ÷ 2 = 3. Answer: 2 : 3.' 再写：2/3 : 4 = ?  问孩子：'How do we write this ratio in its simplest form?' 等孩子思考后，解释：'We have a fraction and a whole number. Convert 4 to a fraction with the same denominator: 4 = 12/3. So 2/3 : 4 = 2/3 : 12/3 = 2 : 12. Find HCF of 2 and 12. HCF = 2. Divide: 2 ÷ 2 = 1, 12 ÷ 2 = 6. Answer: 1 : 6.' 让孩子看到今天的目标：化简涉及分数或小数的比（ratios involving rational numbers），写成最简形式（writing in its simplest form）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Leaving a ratio with fractions unsimplified. ✗ Example: Write 1/2 : 1/3 in its simplest form. Wrong: 1/2 : 1/3 (leaving it as is, not simplifying). Correct: 3 : 2. Rule: ratios must be written in their simplest form, which means converting to whole numbers (usually integers) and dividing by the HCF. 1/2 : 1/3 = 3/6 : 2/6 = 3 : 2. Always simplify to whole number ratios when asked for simplest form.' 再写：'Fossil 2: Swapping the order. ✗ Example: Write 1/2 : 1/3 in its simplest form. Wrong: 2 : 3 (swapping the order). Correct: 3 : 2. Rule: order matters. a : b is not b : a. 1/2 = 3/6, 1/3 = 2/6, so 1/2 : 1/3 = 3 : 2 (not 2 : 3). If the question asks for Wei : Aisha, the answer must have Wei first, Aisha second.' 再写：'Fossil 3: Treating 2/3 : 4 as 2 : 4 (only taking the numerator of the fraction). ✗ Example: Write 2/3 : 4 in its simplest form. Wrong: 2 : 4 (taking 2 from the numerator, ignoring the denominator 3). Correct: 1 : 6. Rule: convert 4 to a fraction with the same denominator. 4 = 12/3. So 2/3 : 4 = 2/3 : 12/3 = 2 : 12 = 1 : 6 (after dividing by HCF 2). Never just take the numerator!' 画一个示意图：1/2 : 1/3。转换为相同分母：3/6 : 2/6。取分子：3 : 2。对家长说：「本周三大化石：不化简比（留为 1/2 : 1/3）、顺序颠倒（3 : 2 写成 2 : 3）、只取分子（2/3 : 4 写成 2 : 4，忽略分母）。记住关键规则：转换为相同形式，然后除以 HCF；顺序很重要，a : b 不是 b : a。」",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范五道完整例题（写出推理步骤）。例题 1：Write 1/2 : 1/3 in its simplest form. 步骤：① 1/2 : 1/3. ② Find common denominator. LCM of 2 and 3 is 6. ③ Convert: 1/2 = 3/6, 1/3 = 2/6. ④ So 1/2 : 1/3 = 3/6 : 2/6 = 3 : 2. Answer: 3 : 2. 例题 2：Write 0.4 : 0.6 in its simplest form. 步骤：① 0.4 : 0.6. ② Convert to whole numbers by multiplying by 10: 4 : 6. ③ Find HCF of 4 and 6: HCF = 2. ④ Divide both by 2: 4 ÷ 2 = 2, 6 ÷ 2 = 3. Answer: 2 : 3. 例题 3：Write 2/3 : 4 in its simplest form. 步骤：① 2/3 : 4. ② Convert 4 to a fraction: 4 = 12/3. ③ So 2/3 : 4 = 2/3 : 12/3 = 2 : 12. ④ Find HCF of 2 and 12: HCF = 2. ⑤ Divide: 2 ÷ 2 = 1, 12 ÷ 2 = 6. Answer: 1 : 6. 例题 4：Which ratio is the same as 3 : 2? 选项：A. 2 : 3, B. 6 : 4, C. 9 : 8, D. 1.5 : 1. 步骤：① Check each option. ② Option A: 2 : 3 is not the same as 3 : 2 (order swapped) (✗). ③ Option B: 6 : 4. Simplify: HCF = 2. 6 ÷ 2 = 3, 4 ÷ 2 = 2. So 6 : 4 = 3 : 2 (✓). ④ Option C: 9 : 8 is already simplified, not 3 : 2 (✗). ⑤ Option D: 1.5 : 1 = 15 : 10 = 3 : 2 (HCF 5) (✓, but B is listed first). Answer: B. 6 : 4. 例题 5：Write 1.5 : 2.5 in its simplest form. 步骤：① 1.5 : 2.5. ② Convert to whole numbers by multiplying by 10: 15 : 25. ③ Find HCF of 15 and 25: HCF = 5. ④ Divide: 15 ÷ 5 = 3, 25 ÷ 5 = 5. Answer: 3 : 5. 再做一道金额应用题：Wei has S$2.50 and Aisha has S$3.75. Write the ratio of Wei's money to Aisha's money in its simplest form. 步骤：① Wei : Aisha = S$2.50 : S$3.75. ② Convert to cents: 250 cents : 375 cents. ③ Find HCF of 250 and 375: HCF = 125. ④ Divide: 250 ÷ 125 = 2, 375 ÷ 125 = 3. ⑤ Remember order: Wei first, Aisha second. Answer: 2 : 3 (Wei : Aisha).",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Write 1/2 : 1/3 in its simplest form. Show your working steps. 答案：① 1/2 : 1/3. ② Find common denominator. LCM of 2 and 3 is 6. ③ Convert: 1/2 = 3/6, 1/3 = 2/6. ④ So 1/2 : 1/3 = 3/6 : 2/6 = 3 : 2. Answer: 3 : 2. 题 2：Write 0.6 : 1.5 in its simplest form. Show your working steps. 答案：① 0.6 : 1.5. ② Convert to whole numbers by multiplying by 10: 6 : 15. ③ Find HCF of 6 and 15: HCF = 3. ④ Divide: 6 ÷ 3 = 2, 15 ÷ 3 = 5. Answer: 2 : 5. 题 3：Wei has S$2.40 and Aisha has S$3.60. Write the ratio of Wei's money to Aisha's money in its simplest form. Show your working steps. 答案：① Wei : Aisha = S$2.40 : S$3.60. ② Convert to cents: 240 cents : 360 cents. ③ Find HCF of 240 and 360: HCF = 120. ④ Divide: 240 ÷ 120 = 2, 360 ÷ 120 = 3. ⑤ Remember order: Wei first, Aisha second. Answer: 2 : 3. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子留为 1/2 : 1/3 不化简，指出：'You need to write it in its simplest form. Convert to the same denominator, then simplify to whole numbers: 3 : 2.' 如果孩子把 3 : 2 写成 2 : 3，指出：'Order matters. 1/2 = 3/6, 1/3 = 2/6, so 1/2 : 1/3 = 3 : 2, not 2 : 3.' 如果孩子把 2/3 : 4 写成 2 : 4，指出：'You can't just take the numerator. Convert 4 to 12/3 first. Then 2/3 : 12/3 = 2 : 12 = 1 : 6.' 如果孩子完成速度快，给备用练习题：Write 1/4 : 1/2 in its simplest form. （答案：1 : 2）Write 3 : 1/2 in its simplest form. （答案：6 : 1）",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.1 ratios involving rational numbers, 2.2 writing a ratio in its simplest form（有理数比与化简），对应 preceding level 规则。(3) 本周化石：leaving a ratio with fractions unsimplified（把 1/2 : 1/3 作为最终答案，而不是化简为 3 : 2），swapping the order（如果 key 是 3 : 2，错写成 2 : 3，a : b 不是 b : a），treating 2/3 : 4 as 2 : 4（只取分子，忽略分母，错！应是 1 : 6）。(4) 比 ratio 可以涉及分数或小数 involving rational numbers：1/2 : 1/3, 0.4 : 0.6, 2/3 : 4。(5) 化简 writing in its simplest form：转换为相同形式（全是整数，或全是相同分母），然后除以 HCF（highest common factor）。1/2 : 1/3 = 3 : 2（乘以 6）；0.4 : 0.6 = 4 : 6 = 2 : 3（先转整数，再除以 HCF 2）；2/3 : 4 = 2 : 12 = 1 : 6（4 = 12/3，然后 2/3 : 12/3 = 2 : 12，除以 HCF 2）。(6) 顺序 order matters：a : b 不是 b : a。如果题目是 Wei : Aisha，答案必须是 Wei 在前 Aisha 在后。(7) 金额用新加坡元 S$（money in Singapore dollars S$，如涉及钱币）。Convert to cents, find HCF, divide. (8) 唯一性 unique keys：两个选项不能是同一个比的不同写法。不提供 2 : 3 和 4 : 6 同时作为选项（都是同一个比）。不提供 1 : 6 和 2 : 12 同时作为选项（都是同一个比）。如果 key 是 3 : 2，2 : 3 必须作为错误选项（order fossil），不是第二个正确答案。(9) 本周不教：2.3 problems involving ratio（比的应用题，那是下一周）。本周只教 2.1–2.2（ratios involving rational numbers, writing a ratio in its simplest form）。(10) 第 8–14 周已完成 N1，本周开始 N2。N1 包括：1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则、1.5 数轴、1.6 不等号、1.7 近似估算（1.4 跳过因 AEIS 禁用计算器）。对家长说：「本周作业有 5+8+3 道题，模拟官方 Sec 1 数学卷型。孩子完成后系统会自动批改选择题，写作部分要求写出推理步骤。本周不是完整试卷，是样本。本周只教 2.1–2.2 有理数比与化简，不教 2.3 应用题（下一周）。不用计算器。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-18": {
    title: "用百分数比较 — Comparing Two Quantities by Percentage",
    fossil: "comparing the wrong way (saying 20 is 75% of 15) / treating 'A is 75% of B' as A being larger",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 18 周，用百分数比较两个量（comparing two quantities by percentage）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.2 comparing two quantities by percentage。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 17 周已教 N3 的 3.1（expressing one quantity as a percentage of another），本周只教 3.2（comparing two quantities by percentage）。本周不教 3.3 percentages greater than 100%，3.4 percentage increase/decrease，3.5 reverse percentages，3.6 solving problems involving percentage（3.3–3.6 是后续内容）。本周比较方法：将较小的数表示为较大的数的百分比（express the smaller as a percentage of the larger），这样百分比保持 ≤ 100%（留待下周教 >100% 的情况）。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Compare 15 and 20 by percentage.  问孩子：'Which is smaller?' 等孩子回答 15 后，解释：'Step 1: Identify which is smaller and which is larger. 15 < 20, so 15 is smaller and 20 is larger. Step 2: Express the smaller as a percentage of the larger. (15 ÷ 20) × 100% = 0.75 × 100% = 75%. Step 3: State the comparison. 15 is 75% of 20. This means 15 is smaller than 20.' 再问：'What does \&quot;A is 75% of B\&quot; mean? Does A have more or less than B?' 等孩子思考后，解释：'If A is 75% of B, that means A is smaller than B. Why? Because 75% < 100%. If A were equal to B, A would be 100% of B. If A is only 75% of B, A is smaller. So 15 is 75% of 20 means 15 is smaller and 20 is larger.' 再问：'What if we compare the wrong way? 20 ÷ 15 = 1.333..., then × 100 = 133%. We could say 20 is 133% of 15. But the question asks to express the smaller as a percentage of the larger, so we should say 15 is 75% of 20 (not 20 is 133% of 15). This week we only teach ≤ 100% comparisons (smaller ÷ larger). Next week we'll teach >100% percentages.' 让孩子看到今天的目标：comparing two quantities by percentage（用百分数比较两个量），express the smaller as a % of the larger（将较小的表示为较大的的百分比）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Comparing the wrong way (saying 20 is 75% of 15). ✗ Example: Compare 15 and 20 by percentage. Wrong: 20 is 75% of 15. Correct: 15 is 75% of 20. Rule: express the smaller as a percentage of the larger. 15 < 20, so 15 is smaller. We express 15 as a percentage of 20 (not 20 as a percentage of 15). (15 ÷ 20) × 100% = 75%. So 15 is 75% of 20 (not 20 is 75% of 15).' 再写：'Fossil 2: Treating \&quot;A is 75% of B\&quot; as A being larger. ✗ Example: If A is 75% of B, which is larger? Wrong: A is larger. Correct: B is larger. Rule: if A is 75% of B, that means A is smaller than B. Why? Because 75% < 100%. If A were equal to B, A would be 100% of B. If A is only 75% of B, A is smaller. So \&quot;15 is 75% of 20\&quot; means 15 is smaller and 20 is larger (not 15 is larger).' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（compare A and B by percentage, express the smaller as a % of the larger）：Compare 15 and 20 by percentage. 步骤：① First identify which is smaller. 15 < 20, so 15 is smaller and 20 is larger. ② Express the smaller as a percentage of the larger. (15 ÷ 20) × 100% = 0.75 × 100% = 75%. ③ State the comparison. 15 is 75% of 20. Answer: 15 is 75% of 20 (or: 15 is smaller, 20 is larger; 15 is 75% of 20). 例题 2（应用题 word problem with money）：Wei has S$18. Aisha has S$24. Compare their amounts by percentage. Express the smaller amount as a percentage of the larger amount. 步骤：① Compare S$18 and S$24. S$18 < S$24, so S$18 is smaller. ② (18 ÷ 24) × 100% = 0.75 × 100% = 75%. ③ So S$18 is 75% of S$24. Answer: S$18 is 75% of S$24 (or: Wei has less; his amount is 75% of Aisha's). 例题 3（应用题 word problem with test scores）：Wei scored 12 marks. Aisha scored 16 marks. Who scored higher? Compare by percentage. 步骤：① 12 < 16, so Wei scored lower and Aisha scored higher. ② Express Wei's score as a percentage of Aisha's. (12 ÷ 16) × 100% = 0.75 × 100% = 75%. ③ So Wei's score is 75% of Aisha's score. Answer: Aisha scored higher. Wei's score is 75% of Aisha's score. 让孩子理解三道题的共同点：都是先确定哪个较小，哪个较大，然后 smaller ÷ larger × 100%，最后陈述比较结果。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Compare 24 and 32 by percentage. Express the smaller as a percentage of the larger. Show your working steps. 答案：① 24 < 32, so 24 is smaller and 32 is larger. ② (24 ÷ 32) × 100% = 0.75 × 100% = 75%. ③ So 24 is 75% of 32. Answer: 24 is 75% of 32. 题 2：Wei has S$45. Aisha has S$60. Compare their amounts by percentage. Express the smaller amount as a percentage of the larger amount. Show your working steps. 答案：① S$45 < S$60, so S$45 is smaller. ② (45 ÷ 60) × 100% = 0.75 × 100% = 75%. ③ So S$45 is 75% of S$60. Answer: S$45 is 75% of S$60 (or: Wei has less; his amount is 75% of Aisha's). 题 3：In a test, Wei scored 18 marks and Aisha scored 24 marks. Compare their scores by percentage. Who scored higher? Express Wei's score as a percentage of Aisha's score. Show your working steps. 答案：① 18 < 24, so Wei scored lower and Aisha scored higher. ② (18 ÷ 24) × 100% = 0.75 × 100% = 75%. ③ So Wei's score is 75% of Aisha's score. Answer: Aisha scored higher. Wei's score is 75% of Aisha's score. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子比较错方向（如题 1 说 32 is 75% of 24），指出：'The question asks to express the smaller as a percentage of the larger. 24 < 32, so 24 is smaller and 32 is larger. We express 24 as a percentage of 32 (not 32 as a percentage of 24). (24 ÷ 32) × 100% = 75%. So 24 is 75% of 32 (not 32 is 75% of 24).' 如果孩子认为 'A is 75% of B' 意味着 A 较大，指出：'If A is 75% of B, that means A is smaller than B. Why? Because 75% < 100%. If A were equal to B, A would be 100% of B. If A is only 75% of B, A is smaller. So 24 is 75% of 32 means 24 is smaller and 32 is larger (not 24 is larger).'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.2 comparing two quantities by percentage（用百分数比较两个量），对应 preceding level 规则。(3) 本周化石：comparing the wrong way（错误地说 20 is 75% of 15，应该是 15 is 75% of 20；正确顺序是 smaller ÷ larger）；treating 'A is 75% of B' as A being larger（如果 A is 75% of B，则 A 较小，B 较大，不是 A 较大；75% < 100% 意味着 A < B）。(4) To compare A and B by percentage: express the smaller as a % of the larger（将较小的表示为较大的的百分比）。例：比较 15 和 20。15 < 20，所以 15 is (15 ÷ 20) × 100% = 75% of 20。15 is smaller, 20 is larger。(5) 'A is 75% of B' means A is smaller than B（A 是 B 的 75%，意味着 A < B，因为 75% < 100%）。(6) 应用题 word problem with money：Wei has S$18, Aisha has S$24. Compare by percentage. Solution: S$18 < S$24. (18 ÷ 24) × 100% = 75%. So S$18 is 75% of S$24 (Wei has less)。(7) 应用题 word problem with test scores：Wei scored 12, Aisha scored 16. Who scored higher? Solution: 12 < 16, Aisha scored higher. (12 ÷ 16) × 100% = 75%. Wei's score is 75% of Aisha's score。(8) 关键步骤：Step 1: Identify which is smaller and which is larger (确定哪个较小，哪个较大). Step 2: Express the smaller as a percentage of the larger: (smaller ÷ larger) × 100% (将较小的除以较大的，再乘 100%). Step 3: State the comparison (陈述比较结果：A is X% of B, so A is smaller and B is larger)。(9) 金额用新加坡元 S$（money in Singapore dollars S$）。(10) 唯一性 unique keys：两个选项不能是同一个金额。不要同时提供 75% 和 3/4 作为两个选项（那是同一个值）。不要在同一题中同时提供「15 is 75% of 20」和「20 is 133% of 15」作为两个正确选项（一题只有一个正确答案）。The inverted comparison（反向比较，如 20 is 133% of 15）必须作为错误选项（wrong option），不是第二个正确答案。(11) 本周只教 ≤ 100% 的情况（express the smaller as a % of the larger），不教 >100%（那是下周 3.3 percentages greater than 100%）。第 17 周已教 3.1（expressing one quantity as a percentage of another），本周教 3.2（comparing two quantities by percentage）。打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-19": {
    title: "大于 100% 的百分数 — Percentages Greater Than 100%",
    fossil: "thinking a percentage cannot exceed 100% / writing the inverted ≤100% value instead (e.g. 25 of 20 as 80% instead of 125%)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 19 周，大于 100% 的百分数（percentages greater than 100%）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.3 percentages greater than 100%。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 17 周已教 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），本周只教 3.3（percentages greater than 100%）。本周不教 3.4 percentage increase/decrease（百分数增加与减少），3.5 reverse percentages（逆向百分数），3.6 solving problems involving percentage（3.4–3.6 是后续内容）。本周重点：当第一个数大于第二个数时（A > B），A 占 B 的百分数大于 100%。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Express 25 as a percentage of 20.  问孩子：'What's the first step?' 等孩子思考后，解释：'A as a percentage of B means we divide A by B, then multiply by 100 to get the percentage. Step 1: A = 25, B = 20. Step 2: Observe if A > B or A < B. Here, 25 > 20, so the percentage will be >100%. Step 3: Divide A by B. 25 ÷ 20 = 1.25. Step 4: Multiply by 100 to get the percentage. 1.25 × 100 = 125. So 25 as a percentage of 20 is 125%.' 再问：'Can a percentage be more than 100%? Yes! When the first quantity (A) is larger than the second quantity (B), the percentage is >100%. Example: 25 is 125% of 20. This means 25 is larger than 20. If 25 were equal to 20, 25 would be 100% of 20. But 25 is larger than 20, so 25 is 125% of 20 (more than 100%).' 再问：'What if someone thinks a percentage cannot exceed 100% and writes the inverted value instead? If they think percentages must be ≤100%, they might write 20 as a percentage of 25 = (20 ÷ 25) × 100% = 80%. But the question asks for 25 as a percentage of 20 (not 20 as a percentage of 25). The correct answer is 125% (not 80%). 80% is the inverted wrong value. It's a common fossil: thinking a percentage cannot exceed 100% and inverting the calculation to get a ≤100% result. That's wrong! Percentages can be >100% when A > B.' 让孩子看到今天的目标：percentages greater than 100%（大于 100% 的百分数），when the first quantity is larger than the second（当第一个数大于第二个数时）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Thinking a percentage cannot exceed 100%. ✗ Example: Express 25 as a percentage of 20. Wrong thinking: \&quot;A percentage cannot be more than 100%, so I must have made a mistake if I get 125%.\&quot; Correct thinking: A percentage CAN be more than 100% when the first quantity is larger than the second. 25 > 20, so 25 as a percentage of 20 is 125% (which is >100%). This is correct! Rule: if A > B, then (A ÷ B) × 100% > 100%. Example: 25 ÷ 20 = 1.25, then 1.25 × 100 = 125%. So 25 is 125% of 20. This means 25 is larger than 20.' 再写：'Fossil 2: Writing the inverted ≤100% value instead (e.g. 25 of 20 as 80% instead of 125%). ✗ Example: Express 25 as a percentage of 20. Wrong: 20 ÷ 25 × 100 = 80% (inverted to get a ≤100% value). Correct: 25 ÷ 20 × 100 = 125%. Rule: The question asks for 25 as a percentage of 20 (not 20 as a percentage of 25). A = 25, B = 20. So we divide 25 by 20 (not 20 by 25). (25 ÷ 20) × 100% = 125%. Don't invert the calculation just to get a ≤100% value. The correct answer is 125% (not 80%). 80% is the inverted wrong value (20 as a percentage of 25), not the correct answer (25 as a percentage of 20).' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（express A as percentage of B where A > B）：Express 25 as a percentage of 20. Show your working steps. 步骤：① A = 25, B = 20. ② Observe: 25 > 20, so the percentage will be >100%. ③ (A ÷ B) × 100% = (25 ÷ 20) × 100%. ④ 25 ÷ 20 = 1.25. ⑤ 1.25 × 100 = 125. Answer: 125%. 例题 2（应用题 word problem with money where first amount > second amount）：Wei has S$36. Aisha has S$24. Express Wei's amount as a percentage of Aisha's amount. Show your working steps. 步骤：① Wei's amount = S$36. Aisha's amount = S$24. ② Observe: S$36 > S$24, so the percentage will be >100%. ③ (36 ÷ 24) × 100%. ④ 36 ÷ 24 = 1.5. ⑤ 1.5 × 100 = 150. Answer: 150%. (Or: Wei's amount is 150% of Aisha's amount, meaning Wei has more.)（韦的金额是爱莎的 150%，意味着韦有更多钱。） 例题 3（应用题 word problem where score > paper total）：Aisha scored 24 marks in a test. The test is out of 20 marks. Express Aisha's score as a percentage of the total marks. Show your working steps. 步骤：① Aisha's score = 24 marks. Total marks = 20 marks. ② Observe: 24 > 20, so the percentage will be >100%. This is possible because Aisha scored more than the paper total (e.g. bonus marks). ③ (24 ÷ 20) × 100%. ④ 24 ÷ 20 = 1.2. ⑤ 1.2 × 100 = 120. Answer: 120%. (Aisha's score is 120% of the total marks.)（爱莎的分数是总分的 120%。这是可能的，因为爱莎的分数超过试卷总分，例如有加分题。） 让孩子理解三道题的共同点：都是先观察 A 是否大于 B，然后 A ÷ B（结果是 >1 的小数），再乘 100，得到 >100% 的百分数。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Express 30 as a percentage of 20. Show your working steps. 答案：① A = 30, B = 20. ② Observe: 30 > 20, so the percentage will be >100%. ③ (30 ÷ 20) × 100%. ④ 30 ÷ 20 = 1.5. ⑤ 1.5 × 100 = 150. Answer: 150%. 题 2：Wei has S$48. Aisha has S$40. Express Wei's amount as a percentage of Aisha's amount. Show your working steps. 答案：① Wei's amount = S$48. Aisha's amount = S$40. ② Observe: S$48 > S$40, so the percentage will be >100%. ③ (48 ÷ 40) × 100%. ④ 48 ÷ 40 = 1.2. ⑤ 1.2 × 100 = 120. Answer: 120%. (Or: Wei's amount is 120% of Aisha's amount, meaning Wei has more.)（韦的金额是爱莎的 120%，意味着韦有更多钱。） 题 3：Aisha scored 26 marks in a test. The test is out of 20 marks. Express Aisha's score as a percentage of the total marks. Show your working steps. 答案：① Aisha's score = 26 marks. Total marks = 20 marks. ② Observe: 26 > 20, so the percentage will be >100%. This is possible because Aisha scored more than the paper total (e.g. bonus marks). ③ (26 ÷ 20) × 100%. ④ 26 ÷ 20 = 1.3. ⑤ 1.3 × 100 = 130. Answer: 130%. (Aisha's score is 130% of the total marks.)（爱莎的分数是总分的 130%。） 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子认为百分数不能超过 100% 而拒绝写 150% 或 120%，指出：'A percentage CAN be more than 100% when the first quantity is larger than the second. 30 > 20, so 30 as a percentage of 20 is 150% (which is >100%). This is correct! If 30 were equal to 20, 30 would be 100% of 20. But 30 is larger than 20, so 30 is 150% of 20 (more than 100%).' 如果孩子反向算（如题 1 算 20 ÷ 30 = 0.667，再 × 100 = 66.7% 或约成 80%），指出：'The question asks for 30 as a percentage of 20 (not 20 as a percentage of 30). A = 30, B = 20. So we divide 30 by 20 (not 20 by 30). (30 ÷ 20) × 100% = 150%. Don't invert the calculation just to get a ≤100% value. The correct answer is 150% (not 66.7% or 80%).'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.3 percentages greater than 100%（大于 100% 的百分数），对应 preceding level 规则。(3) 本周化石：thinking a percentage cannot exceed 100%（认为百分数不能超过 100%，错！当第一个数大于第二个数时，百分数可以大于 100%）；writing the inverted ≤100% value instead（如 25 of 20 错误地写成 80%，应该是 125%；正确算法是 25 ÷ 20，不是 20 ÷ 25）。(4) If A > B, then A as a percentage of B is greater than 100%（如果 A > B，则 A 占 B 的百分数大于 100%）。方法：(A ÷ B) × 100% > 100%。(5) 例：25 as a percentage of 20 = (25 ÷ 20) × 100% = 1.25 × 100% = 125%。50 as a percentage of 20 = 250%。36 as a percentage of 24 = 150%。(6) A percentage can be more than 100% when the first quantity is larger than the second（当第一个数大于第二个数时，百分比可以超过 100%）。(7) 应用题 word problem with money：Wei has S$36, Aisha has S$24. Express Wei's amount as a percentage of Aisha's. Solution: S$36 > S$24. (36 ÷ 24) × 100% = 1.5 × 100% = 150%. So S$36 is 150% of S$24 (Wei has more)（韦的金额是爱莎的 150%，韦有更多钱）。(8) 应用题 word problem where score > paper total：Aisha scored 24 out of 20. Express 24 as a percentage of 20. Solution: 24 > 20. (24 ÷ 20) × 100% = 1.2 × 100% = 120%. Aisha's score is 120% of the total marks（爱莎的分数是总分的 120%，这是可能的，因为有加分题）。(9) 关键步骤：Step 1: Identify A (the first quantity) and B (the second quantity). Step 2: Observe if A > B. If A > B, the percentage will be >100%. Step 3: Use the formula (A ÷ B) × 100%. Step 4: Calculate A ÷ B (this gives a decimal >1 if A > B). Step 5: Multiply by 100 to get the percentage. Step 6: State the answer with the % symbol and interpret (e.g. 'A is 125% of B, meaning A is larger than B')（陈述答案并解释：A 是 B 的 125%，意味着 A 大于 B）。(10) 金额用新加坡元 S$（money in Singapore dollars S$）。(11) 唯一性 unique keys：两个选项不能是同一个金额。不要同时提供 125% 和 5/4 作为两个选项（那是同一个值）。不要在同一题中同时提供「25 is 125% of 20」和「20 is 80% of 25」作为两个正确选项（一题只有一个正确答案）。The inverted ≤100% value（反向的 ≤100% 值）必须作为错误选项（wrong option），不是第二个正确答案。(12) 第 17 周已教 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage, express the smaller as a % of the larger, yielding ≤100%），本周教 3.3（percentages greater than 100%, when the first quantity is larger）。本周不教 3.4 percentage increase/decrease，3.5 reverse percentages，3.6 problems（后续内容）。打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-20": {
    title: "百分数增减与百分点 — Increasing/Decreasing a Quantity by a Given Percentage & Percentage Point",
    fossil: "adding the percentage value instead of the percentage of the quantity (80 increased by 10% written as 90) / treating a percentage-point change as a percentage increase (40% → 50% called a 10% increase)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 20 周，用百分数增减数量与百分点（increasing/decreasing a quantity by a given percentage, including concept of percentage point）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.4 increasing/decreasing a quantity by a given percentage (including concept of percentage point)。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 17 周已教 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），第 19 周教 3.3（percentages greater than 100%），本周只教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point）。本周不教 3.5 reverse percentages（逆向百分数），3.6 solving problems involving percentage（3.5–3.6 是后续内容）。本周重点：increase by r%: new = original × (1 + r/100)；decrease by r%: new = original × (1 − r/100)；percentage point（百分点，官方术语）：a change from 40% to 50% is 10 percentage points, NOT a 10% increase。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Increase 80 by 10%. 问孩子：'What's the first step?' 等孩子思考后，解释：'Increase a quantity by r% means we find r% of the quantity, then add it to the original. Step 1: Original = 80. Increase by 10%. Step 2: 10% of 80 = (10 ÷ 100) × 80 = 0.1 × 80 = 8. Step 3: New value = original + increase = 80 + 8 = 88. So 80 increased by 10% is 88 (or: 80 × 1.1 = 88).' 再问：'What if we add 10 directly instead of 10% of 80? 80 + 10 = 90. That's wrong! Increase by 10% means increase by 10% of 80 (which is 8), not by 10. The correct answer is 88 (not 90). The fossil is adding the percentage value (10) instead of the percentage of the quantity (10% of 80 = 8).' 再写：A rate changed from 40% to 50%. By how many percentage points? 解释：'Percentage point = new rate − old rate = 50% − 40% = 10 percentage points. This is NOT a 10% increase. A 10% increase of 40% would be 40 + (10% of 40) = 40 + 4 = 44%, not 50%. So 40% → 50% is a 10 percentage-point increase (not a 10% increase). Percentage point (百分点) and percentage increase (百分数增长) are different! 百分点 = 直接相减（50% − 40% = 10 percentage points）。百分数增长 = 先算 r% of old rate，再加（如 10% increase of 40% = 40 + 4 = 44%）。' 让孩子看到今天的目标：increasing/decreasing a quantity by a given percentage（用百分数增减数量）& percentage point（百分点）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Adding the percentage value instead of the percentage of the quantity. ✗ Example: Increase 80 by 10%. Wrong: 80 + 10 = 90 (adding the percentage value 10). Correct: 10% of 80 = 8, then 80 + 8 = 88 (adding the percentage of the quantity, which is 8). Rule: increase by r% means find r% of the quantity first, then add. 10% of 80 = (10 ÷ 100) × 80 = 8. So 80 increased by 10% = 80 + 8 = 88 (or 80 × 1.1 = 88). Don't add the percentage value (10) directly. Add the percentage of the quantity (10% of 80 = 8).' 再写：'Fossil 2: Treating a percentage-point change as a percentage increase. ✗ Example: A rate increased from 40% to 50%. Is this a 10% increase? Wrong: Yes, it's a 10% increase (because 50 − 40 = 10). Correct: No, it's a 10 percentage-point increase (not a 10% increase). A 10% increase of 40% would be 40 + (10% of 40) = 40 + 4 = 44%, not 50%. Rule: Percentage-point change = new rate − old rate (直接相减：50% − 40% = 10 percentage points). Percentage increase = old rate + (r% of old rate)（先算 r% of old rate，再加：如 10% increase of 40% = 40 + 4 = 44%）。These are different! 40% → 50% is a 10 percentage-point increase (not a 10% increase). A 10% increase of 40% would only reach 44%, not 50%.' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（increase a quantity by r%）：Increase 80 by 10%. Show your working steps. 步骤：① Original = 80. Increase by 10%. ② 10% of 80 = (10 ÷ 100) × 80 = 0.1 × 80 = 8. ③ New value = original + increase = 80 + 8 = 88. Answer: 88. (Or: new = 80 × (1 + 10/100) = 80 × 1.1 = 88.) 例题 2（decrease a quantity by r%, 应用题 word problem with discount）：A bag was S$60. The shop gave a 20% discount. What is the discounted price? Show your working steps. 步骤：① Original price = S$60. Discount = 20%. ② 20% of S$60 = (20 ÷ 100) × 60 = 0.2 × 60 = 12. ③ Discounted price = original − discount = S$60 − S$12 = S$48. Answer: S$48. (Or: new = S$60 × (1 − 20/100) = S$60 × 0.8 = S$48.) 例题 3（percentage point change, 应用题 word problem with rate）：A club membership rate increased from 25% to 40%. (i) By how many percentage points did the rate increase? (ii) Is this a 15% increase of the old rate? Explain clearly. Show your working. 步骤：(i) ① Old rate = 25%. New rate = 40%. ② Percentage-point increase = new − old = 40% − 25% = 15 percentage points. Answer (i): 15 percentage points. (ii) ① Is this a 15% increase? Check: 15% of 25% = (15 ÷ 100) × 25 = 3.75. ② So a 15% increase of 25% would be 25 + 3.75 = 28.75%, not 40%. ③ Answer (ii): No, it is not a 15% increase. It is a 15 percentage-point increase. A 15% increase of 25% would only reach 28.75%, not 40%. 让孩子理解三道题的共同点：增减时先算 r% of original，再加或减；百分点是直接相减，不是百分数增长。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei has S$80. His allowance is increased by 15%. How much does Wei have now? Show your working steps. 答案：① Original = S$80. Increase by 15%. ② 15% of S$80 = (15 ÷ 100) × 80 = 0.15 × 80 = 12. ③ New value = original + increase = S$80 + S$12 = S$92. Answer: S$92. (Or: new = S$80 × 1.15 = S$92.) 题 2：Aisha bought a bag. The original price was S$60. The shop gave a 20% discount. What is the discounted price? Show your working steps. 答案：① Original price = S$60. Discount = 20%. ② 20% of S$60 = (20 ÷ 100) × 60 = 0.2 × 60 = 12. ③ Discounted price = original − discount = S$60 − S$12 = S$48. Answer: S$48. (Or: new = S$60 × 0.8 = S$48.) 题 3：At Riverside Secondary, the Science Club membership rate increased from 25% to 40%. (i) By how many percentage points did the rate increase? Show your working. (ii) Is this increase a 15% increase of the old rate? Explain clearly with calculations. 答案：(i) ① Old rate = 25%. New rate = 40%. ② Percentage-point increase = new − old = 40% − 25% = 15 percentage points. Answer (i): 15 percentage points. (ii) ① Is this a 15% increase? Check: 15% of 25% = (15 ÷ 100) × 25 = 3.75. ② So a 15% increase of 25% would be 25 + 3.75 = 28.75%, not 40%. ③ Answer (ii): No, it is not a 15% increase. It is a 15 percentage-point increase. A 15% increase of 25% would only reach 28.75%, not 40%. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子在题 1 写 80 + 15 = 95（直接加 15 而不是加 15% of 80），指出：'Increase by 15% means increase by 15% of 80 (which is 12), not by 15. 15% of 80 = (15 ÷ 100) × 80 = 12. So 80 increased by 15% = 80 + 12 = 92 (not 95). The fossil is adding the percentage value (15) instead of the percentage of the quantity (15% of 80 = 12).' 如果孩子在题 3(ii) 说 'yes, it's a 15% increase because 40 − 25 = 15'，指出：'40% → 50% is a 15 percentage-point increase (直接相减：40 − 25 = 15 percentage points), but it is NOT a 15% increase of the old rate. A 15% increase of 25% would be 25 + (15% of 25) = 25 + 3.75 = 28.75%, not 40%. So 25% → 40% is a 15 percentage-point increase (not a 15% increase). Percentage point and percentage increase are different!'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.4 increasing/decreasing a quantity by a given percentage (including concept of percentage point)（用百分数增减数量，包括百分点的概念），对应 preceding level 规则。(3) 本周化石：adding the percentage value instead of the percentage of the quantity（直接加百分数而不是加数量的百分数：80 increased by 10% 错误地写成 90，应该是 88）；treating a percentage-point change as a percentage increase（把百分点变化当百分数增长：40% → 50% 错误地说是 10% 增长，应该是 10 个百分点的增长）。(4) Increase a quantity by r%: new = original × (1 + r/100)（增加：新值 = 原值 × (1 + r/100)）。方法：先算 r% of original，再加。例：80 increased by 10% = 10% of 80 = 8，80 + 8 = 88（或 80 × 1.1 = 88）。(5) Decrease a quantity by r%: new = original × (1 − r/100)（减少：新值 = 原值 × (1 − r/100)）。例：80 decreased by 10% = 10% of 80 = 8，80 − 8 = 72（或 80 × 0.9 = 72）。(6) Percentage point（百分点，官方术语）：a change from 40% to 50% is 10 percentage points（从 40% 到 50% 是 10 个百分点）。It is NOT a 10% increase（不是 10% 的增长，因为 10% increase of 40% would be 44%）。Percentage-point change = new rate − old rate（百分点变化 = 新比率 − 旧比率，直接相减）。(7) 应用题 word problem with price increase：A price of S$60 is increased by 20%. What is the new price? Solution: 20% of S$60 = 12. New price = S$60 + S$12 = S$72（或 S$60 × 1.2 = S$72）。(8) 应用题 word problem with discount：A bag was S$60. The shop gave a 20% discount. What is the discounted price? Solution: 20% of S$60 = 12. Discounted price = S$60 − S$12 = S$48（或 S$60 × 0.8 = S$48）。(9) 应用题 word problem with rate change：A club membership rate increased from 25% to 40%. (i) By how many percentage points? Answer: 40% − 25% = 15 percentage points. (ii) Is this a 15% increase of the old rate? Answer: No. A 15% increase of 25% would be 25 + (15% of 25) = 28.75%, not 40%. So it's a 15 percentage-point increase (not a 15% increase)。(10) 关键步骤：Step 1: Identify the original quantity or rate. Step 2: Calculate r% of the original: r% of N = (r ÷ 100) × N. Step 3: For increase, add; for decrease, subtract (增加时相加，减少时相减：increase: new = original + (r% of original); decrease: new = original − (r% of original)). Step 4: For percentage point, subtract rates directly (百分点变化：直接相减 new rate − old rate，不是百分数增长). Step 5: State the answer with units and interpret。(11) 金额用新加坡元 S$（money in Singapore dollars S$）。(12) 唯一性 unique keys：两个选项不能是同一个金额。不要同时提供 88 和 80 + 8 作为两个选项（那是同一个值）。不要在同一题中同时提供「10 percentage points」和「10% increase」作为两个正确选项（一题只有一个正确答案）。The wrong fossil values 必须作为错误选项。(13) 第 17 周已教 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），第 19 周教 3.3（percentages greater than 100%），本周教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point）。本周不教 3.5 reverse percentages，3.6 problems（后续内容）。打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-21": {
    title: "逆向百分数 — Reverse Percentages",
    fossil: "subtracting r% of the NEW amount instead of dividing by the factor (72 after 20% increase wrongly calculated as 57.6) / adding r% of the new amount after a decrease (64 after 20% decrease wrongly calculated as 76.8)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 21 周，逆向百分数（reverse percentages）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.5 reverse percentages。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 17 周已教 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），第 19 周教 3.3（percentages greater than 100%），第 20 周教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point），本周只教 3.5（reverse percentages，逆向百分数）。本周不教 3.6 solving problems involving percentage（3.6 百分数综合应用是下周内容）。本周重点：After an increase of r%, new = original × (1 + r/100), so original = new ÷ (1 + r/100)。After a decrease of r%, new = original × (1 − r/100), so original = new ÷ (1 − r/100)。本周化石：subtracting r% of the NEW amount instead of dividing by the factor（从新值减去百分数而不是除以因数），adding r% of the new amount after a decrease。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：After a 20% increase, a price is S$72. Find the original price. 问孩子：'What's the first step?' 等孩子思考后，解释：'Reverse percentages means we know the final value after a percentage increase or decrease, and we need to find the original value. Step 1: After 20% increase, new price = original price × (1 + 20/100) = original price × 1.20. Step 2: So S$72 = original price × 1.20. Step 3: Original price = S$72 ÷ 1.20 = S$60.' 再问：'What if we subtract 20% of 72 instead? 20% of 72 = 14.4. 72 − 14.4 = 57.6. That's wrong! The original price is S$60 (not S$57.6). The fossil is subtracting r% of the NEW amount instead of dividing by the factor. We must divide 72 by 1.20 (not subtract 20% of 72).' 再写：After a 20% decrease, a price is S$64. Find the original price. 解释：'After 20% decrease, new price = original price × (1 − 20/100) = original price × 0.80. So S$64 = original price × 0.80. Original price = S$64 ÷ 0.80 = S$80.' 让孩子看到今天的目标：reverse percentages（逆向百分数），given the final value after a percentage increase or decrease, find the original value。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Subtracting r% of the NEW amount instead of dividing by the factor (after an increase). ✗ Example: After a 20% increase, a price is S$72. Find the original price. Wrong: 20% of 72 = 14.4. Original = 72 − 14.4 = 57.6. Correct: After 20% increase, new = original × 1.20. So 72 = original × 1.20. Original = 72 ÷ 1.20 = 60. Rule: When finding the original after an increase, divide the new value by (1 + r/100). Don't subtract r% of the new value. The correct answer is S$60 (not S$57.6). After a 20% increase, the new value is 1.20 times the original. So divide by 1.20 to reverse the increase.' 再写：'Fossil 2: Adding r% of the new amount after a decrease (instead of dividing by the factor). ✗ Example: After a 20% decrease, a price is S$64. Find the original price. Wrong: 20% of 64 = 12.8. Original = 64 + 12.8 = 76.8. Correct: After 20% decrease, new = original × 0.80. So 64 = original × 0.80. Original = 64 ÷ 0.80 = 80. Rule: When finding the original after a decrease, divide the new value by (1 − r/100). Don't add r% of the new value. The correct answer is S$80 (not S$76.8). After a 20% decrease, the new value is 0.80 times the original. So divide by 0.80 to reverse the decrease.' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（reverse an increase）：After a 20% increase, a price is S$72. Find the original price. Show your working steps. 步骤：① After 20% increase, new price = original price × (1 + 20/100) = original price × 1.20. ② So S$72 = original price × 1.20. ③ Original price = S$72 ÷ 1.20 = S$60. Answer: S$60. 例题 2（reverse a decrease, 应用题 word problem with discount）：After a 20% discount, a price is S$64. Find the original price before the discount. Show your working steps. 步骤：① After 20% decrease, new price = original price × (1 − 20/100) = original price × 0.80. ② So S$64 = original price × 0.80. ③ Original price = S$64 ÷ 0.80 = S$80. Answer: S$80. 例题 3（application problem with reverse）：Aisha's allowance was increased by 25%. After the increase, her allowance is S$100. What was her original allowance? Show your working clearly. 步骤：① After 25% increase, new allowance = original allowance × (1 + 25/100) = original allowance × 1.25. ② So S$100 = original allowance × 1.25. ③ Original allowance = S$100 ÷ 1.25 = S$80. Answer: S$80. 让孩子理解三道题的共同点：都是已知百分数增减后的值，求原始值。方法：写出等式（new = original × factor），移项（original = new ÷ factor）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：After a 15% increase, Wei's allowance is S$92. What was Wei's original allowance? Show your working steps. 答案：① After 15% increase, new = original × (1 + 15/100) = original × 1.15. ② So S$92 = original × 1.15. ③ Original = S$92 ÷ 1.15 = S$80. Answer: S$80. 题 2：Aisha bought a phone case. After a 20% discount, the price is S$64. What was the original price before the discount? Show your working steps. 答案：① After 20% decrease, new = original × (1 − 20/100) = original × 0.80. ② So S$64 = original × 0.80. ③ Original = S$64 ÷ 0.80 = S$80. Answer: S$80. 题 3：Mr Lim's monthly pass was increased by 25%. After the increase, the pass costs S$100. (i) What was the original price of the pass before the increase? Show your working. (ii) Check your answer by calculating 25% of your original price and adding it to see if you get S$100. 答案：(i) ① After 25% increase, new = original × 1.25. ② So S$100 = original × 1.25. ③ Original = S$100 ÷ 1.25 = S$80. Answer: S$80. (ii) Check: 25% of S$80 = 0.25 × 80 = 20. S$80 + S$20 = S$100. ✓ 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子用化石方法（如题 1 算 92 − 0.15 × 92），指出：'That's the fossil! After a 15% increase, the new value is 1.15 times the original. So divide 92 by 1.15 to find the original. Don't subtract 15% of 92 from 92. The correct method is original = 92 ÷ 1.15 = 80.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.5 reverse percentages（逆向百分数），对应 preceding level 规则。(3) 本周化石：subtracting r% of the NEW amount instead of dividing by the factor（从新值减去百分数而不是除以因数：72 after 20% increase 错误地算 72 − 14.4 = 57.6，应该是 72 ÷ 1.20 = 60）；adding r% of the new amount after a decrease（64 after 20% decrease 错误地算 64 + 12.8 = 76.8，应该是 64 ÷ 0.80 = 80）。(4) After an increase of r%, new = original × (1 + r/100), so original = new ÷ (1 + r/100)（增加后逆向：原值 = 新值 ÷ (1 + r/100)）。例：After a 20% increase the price is S$72. Original = 72 ÷ 1.20 = S$60。(5) After a decrease of r%, new = original × (1 − r/100), so original = new ÷ (1 − r/100)（减少后逆向：原值 = 新值 ÷ (1 − r/100)）。例：After a 20% decrease the price is S$64. Original = 64 ÷ 0.80 = S$80。(6) 关键步骤：Step 1: Identify r% and the final value. Step 2: Write the equation: new = original × factor. For increase: factor = 1 + r/100. For decrease: factor = 1 − r/100. Step 3: Rearrange: original = new ÷ factor. Step 4: Calculate and state the answer with units. Step 5: Check by working forward (用原值乘以因数看是否得到新值)。(7) 不用计算器，用友好的整数（原值是整数如 60, 80, 100）。金额用新加坡元 S$。(8) 不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。对家长说：「第 17 周已教 N3 的 3.1，第 18 周教 3.2，第 19 周教 3.3，第 20 周教 3.4，本周教 3.5（reverse percentages）。下周教 3.6 solving problems involving percentage（百分数综合应用）。app 作业包括应用题 MCQ + 选择题 MCQ + 写算式 show working，不是完整 34 + 20 + 10–15 题。本周让孩子熟悉 Sec 1 数学卷型和格式。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-22": {
    title: "百分数综合应用 — Problems Involving Percentages",
    fossil: "treating a reverse problem as \"subtract r% of the new amount\" / treating a percentage-point change as a relative % / adding the % as a raw number / saying \"A is 20% of B\" when the story is \"A is 20% more than B\"",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 22 周，百分数综合应用（problems involving percentages）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.6 problems involving percentages。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 17 周已教 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），第 19 周教 3.3（percentages greater than 100%），第 20 周教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point），第 21 周教 3.5（reverse percentages），本周只教 3.6（problems involving percentages，百分数综合应用，在应用题中混合使用 3.1–3.5 技能）。本周完成 N3。本周方法：mix skills from 3.1–3.5 in short word problems。Skill 3.1: express A as % of B（20 of 50 = 40%）。Skill 3.2: compare by %（80 is 160% of 50; 80 is 60% more than 50）。Skill 3.3: % > 100（125% of 80 = 100）。Skill 3.4: increase/decrease（80 + 10% = 88; 80 − 10% = 72; 40% → 50% is 10 percentage points, not 25%）。Skill 3.5: reverse（after 20% increase the price is S$72, original = 72 ÷ 1.20 = S$60）。本周化石：treating a reverse problem as \&quot;subtract r% of the new amount\&quot;（把逆向问题当作&quot;从新值减去 r%&quot;），treating a percentage-point change as a relative %（把百分点变化当作相对百分数），adding the % as a raw number（把百分数当作原始数加），saying \&quot;A is 20% of B\&quot; when the story is \&quot;A is 20% more than B\&quot;。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写 4 道短题，代表 4 种百分数技能。题 1（3.1 express as %）：Express 15 as a percentage of 60. 问孩子：'What's the first step?' 等孩子思考后，解释：'A as a percentage of B = (A ÷ B) × 100%. So (15 ÷ 60) × 100% = 0.25 × 100% = 25%. Answer: 25%.' 题 2（3.4 increase）：Increase S$80 by 10%. 解释：'10% of S$80 = 0.1 × 80 = 8. So S$80 + S$8 = S$88. Answer: S$88. Don't just add 10 to get 90!' 题 3（3.5 reverse）：After a 20% increase, the price is S$72. Find the original price. 解释：'After 20% increase, new = original × 1.20. So 72 = original × 1.20. Original = 72 ÷ 1.20 = 60. Answer: S$60. Don't subtract 20% of 72 (that gives 57.6, wrong)!' 题 4（3.4 percentage point）：A rate increased from 40% to 50%. By how many percentage points did it increase? 解释：'50% − 40% = 10 percentage points. Answer: 10 percentage points (not 25%). Don't say &quot;increased by 25%&quot; because that's a relative change. The difference is 10 percentage points.' 让孩子看到今天的目标：mix skills 3.1–3.5 in word problems（在应用题中混合使用 3.1–3.5 技能）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Treating a reverse problem as \&quot;subtract r% of the new amount\&quot;. ✗ Example: After a 20% increase, the price is S$72. Find the original price. Wrong: 20% of 72 = 14.4. Original = 72 − 14.4 = 57.6. Correct: After 20% increase, new = original × 1.20. So 72 = original × 1.20. Original = 72 ÷ 1.20 = 60. Rule: When finding the original after an increase, divide the new value by (1 + r/100). Don't subtract r% of the new value. The correct answer is S$60 (not S$57.6).' 再写：'Fossil 2: Treating a percentage-point change as a relative %. ✗ Example: A rate increased from 40% to 50%. By how much did it increase? Wrong: \&quot;increased by 25%\&quot; (because (50−40)/40 = 0.25 = 25%). Correct: \&quot;increased by 10 percentage points\&quot; (because 50% − 40% = 10 percentage points). Rule: When comparing two percentages (e.g. 40% to 50%), the difference is measured in percentage points (50 − 40 = 10 percentage points), not as a relative % increase (25%).' 再写：'Fossil 3: Adding the % as a raw number. ✗ Example: Increase S$80 by 10%. Wrong: S$80 + 10 = S$90. Correct: 10% of S$80 = 0.1 × 80 = 8. S$80 + S$8 = S$88. Rule: 10% is not 10. You must calculate 10% of the original amount first, then add it.' 再写：'Fossil 4: Saying \&quot;A is 20% of B\&quot; when the story is \&quot;A is 20% more than B\&quot;. ✗ Example: 80 is 20% more than 50. Wrong: \&quot;80 is 20% of 50\&quot; (that would mean 80 = 0.2 × 50 = 10, wrong!). Correct: \&quot;80 is 20% more than 50\&quot; means 80 = 50 + 20% of 50 = 50 + 10 = 60, wait that's wrong too. Let me recalculate: 80 is what % more than 50? (80 − 50) / 50 × 100% = 30 / 50 × 100% = 60%. So 80 is 60% more than 50 (not 20%). Actually, if 80 is 20% more than the base, then 80 = base × 1.20, so base = 80 / 1.20 = 66.67 (not 50). Rule: \&quot;A is r% more than B\&quot; means A = B + r% of B = B × (1 + r/100). Don't confuse \&quot;A is r% of B\&quot; (meaning A = r% × B) with \&quot;A is r% more than B\&quot; (meaning A = B + r% of B).' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤），覆盖 4 种混合技能。例题 1（3.1 express as %, writing steps）：Express 24 as a percentage of 80. Show your working steps. 步骤：① A = 24, B = 80. ② (A ÷ B) × 100% = (24 ÷ 80) × 100%. ③ 24 ÷ 80 = 0.3. ④ 0.3 × 100 = 30. Answer: 30%. 例题 2（3.4 increase, writing steps）：Wei had S$60. His allowance was increased by 15%. What is Wei's new allowance after the increase? Show your working steps. 步骤：① 15% of S$60 = 0.15 × 60 = 9. ② S$60 + S$9 = S$69. Answer: S$69. 例题 3（3.5 reverse a decrease with discount story）：Aisha bought a phone at a sale. After a 15% discount, the sale price is S$68. What was the original price before the discount? Show your working clearly. 步骤：① After 15% discount, new price = original price × (1 − 15/100) = original price × 0.85. ② So S$68 = original price × 0.85. ③ Original price = S$68 ÷ 0.85 = S$80. Answer: S$80. 例题 4（3.4 percentage point）：The class attendance rate increased from 75% to 90%. (i) By how many percentage points did the rate increase? (ii) What is the relative percentage increase? 步骤：(i) 90% − 75% = 15 percentage points. Answer: 15 percentage points. (ii) Relative increase = (90 − 75) / 75 × 100% = 15 / 75 × 100% = 20%. Answer: 20% relative increase. Note: 15 percentage points ≠ 20% relative increase. 让孩子理解这 4 道题覆盖了 N3 的 3.1, 3.4, 3.5 三种技能，在不同的应用情景中混合使用。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1（3.1 express as %）：Express 24 as a percentage of 80. Show your working steps. 答案：① A = 24, B = 80. ② (A ÷ B) × 100% = (24 ÷ 80) × 100%. ③ 24 ÷ 80 = 0.3. ④ 0.3 × 100 = 30. Answer: 30%. 题 2（3.4 increase）：Wei had S$60. His allowance was increased by 15%. What is Wei's new allowance after the increase? Show your working steps. 答案：① 15% of S$60 = 0.15 × 60 = 9. ② S$60 + S$9 = S$69. Answer: S$69. 题 3（3.5 reverse a discount, two-part）：Aisha bought a phone at a sale. After a 15% discount, the sale price is S$68. (i) What was the original price before the discount? Show your working. (ii) Check your answer by calculating 15% of your original price and subtracting it to see if you get S$68. 答案：(i) ① After 15% discount, new = original × 0.85. ② So S$68 = original × 0.85. ③ Original = S$68 ÷ 0.85 = S$80. Answer: S$80. (ii) Check: 15% of S$80 = 0.15 × 80 = 12. S$80 − S$12 = S$68. ✓ The check confirms the answer is S$80. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子犯化石错误（如题 3 算 68 − 15% of 68 = 57.8），指出：'That's the fossil! After a 15% discount, the sale price is 85% of the original (not 85% less than the original). So new = original × 0.85. Divide 68 by 0.85 to get the original, which is 80 (not 57.8 or 68 + 15% of 68 = 78.2).' 如果孩子题 2 算 60 + 15 = 75，指出：'That's fossil 3! 15% is not 15. Calculate 15% of 60 first: 0.15 × 60 = 9. Then add: 60 + 9 = 69.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.6 problems involving percentages（百分数综合应用，在应用题中混合使用 3.1–3.5 技能），对应 preceding level 规则。本周完成 N3。(3) 本周化石：treating a reverse problem as \&quot;subtract r% of the new amount\&quot;（72 after 20% increase 错误地算 72 − 14.4 = 57.6，应该是 72 ÷ 1.20 = 60）；treating a percentage-point change as a relative %（40% → 50% 错误地说\&quot;increased by 25%\&quot;，应该是\&quot;increased by 10 percentage points\&quot;）；adding the % as a raw number（80 + 10 = 90，应该是 80 + 10% of 80 = 88）；saying \&quot;A is 20% of B\&quot; when the story is \&quot;A is 20% more than B\&quot;。(4) Skill 3.1: express A as % of B（20 of 50 = (20 ÷ 50) × 100% = 40%）。(5) Skill 3.2: compare by %（80 is what % of 50? (80 ÷ 50) × 100% = 160%; 80 is 60% more than 50）。(6) Skill 3.3: % > 100（125% of 80 = 1.25 × 80 = 100）。(7) Skill 3.4: increase/decrease（increase S$80 by 10% → S$80 + 0.1 × 80 = S$88; decrease S$80 by 10% → S$80 − 0.1 × 80 = S$72; 40% → 50% is 10 percentage points, not 25%）。(8) Skill 3.5: reverse（after 20% increase the price is S$72, original = 72 ÷ 1.20 = S$60）。(9) 关键步骤：Step 1: Identify the type of problem (确定题目类型：表达为百分数、用百分数比较、增减、逆向、百分点). Step 2: Write the equation or formula (写出等式或公式). Step 3: Calculate step by step (逐步计算). Step 4: State the answer with units (陈述答案加单位，如 %, S$). (10) 不用计算器，用友好的整数（答案是整数）。金额用新加坡元 S$。(11) 不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。对家长说：「第 17 周已教 N3 的 3.1，第 18 周教 3.2，第 19 周教 3.3，第 20 周教 3.4，第 21 周教 3.5，本周教 3.6（problems involving percentages，百分数综合应用）。本周完成 N3。下周将教 N4 rate and speed（速率和速度）。app 作业包括应用题 MCQ + 选择题 MCQ + 写算式 show working，不是完整 34 + 20 + 10–15 题。本周让孩子熟悉 Sec 1 数学卷型和格式，在短应用题中混合使用百分数技能。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-23": {
    title: "平均速率速度匀速和平均速度 — Average Rate, Speed, Constant Speed and Average Speed",
    fossil: "taking the mean of two speeds (e.g. average of 40 km/h and 60 km/h as 50 km/h) instead of total distance ÷ total time / using one part of the journey as if it were the whole / mixing rate units",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 23 周，平均速率、速度、匀速和平均速度（concepts of average rate, speed, constant speed and average speed）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed: 4.1 concepts of average rate, speed, constant speed and average speed。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 17–22 周已完成 N3（百分数），本周开始 N4，只教 4.1（concepts of average rate, speed, constant speed and average speed）。本周不教 4.2 conversion of units（单位换算，如 km/h ↔ m/s），4.3 problems involving rate and speed（速率和速度应用题），4.2–4.3 是后续周次内容。Speed 是官方 Sec 1 内容，不是 P6-only。本周方法：Average rate = total quantity ÷ total time。Speed = distance ÷ time。Constant speed = the same speed for the whole journey。Average speed = total distance ÷ total time（不是两个速度的平均数）。例：60 km at 60 km/h then 60 km at 30 km/h：times 1 h + 2 h = 3 h，average speed = 120 ÷ 3 = 40 km/h，不是 45。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Wei reads 90 pages in 3 hours. What is his average reading rate? 问孩子：'What's the first step?' 等孩子思考后，解释：'Average rate = total quantity ÷ total time. Step 1: Total pages = 90. Total time = 3 hours. Step 2: Average rate = 90 ÷ 3 = 30. Answer: 30 pages/h.' 再写：Aisha cycles 120 km in 2 hours. What is her speed? 解释：'Speed = distance ÷ time. Distance = 120 km. Time = 2 hours. Speed = 120 ÷ 2 = 60. Answer: 60 km/h.' 再写：Wei cycles 60 km at 60 km/h, then 60 km at 30 km/h. What is his average speed? 问：'Can we just take the average of 60 and 30? (60 + 30) ÷ 2 = 45 km/h?' 等孩子思考后，指出：'No! That's a fossil error. Average speed is NOT the mean of two speeds. We must use total distance ÷ total time. Let me show you: Part 1: 60 km at 60 km/h. Time = 60 ÷ 60 = 1 hour. Part 2: 60 km at 30 km/h. Time = 60 ÷ 30 = 2 hours. Total distance = 60 + 60 = 120 km. Total time = 1 + 2 = 3 hours. Average speed = 120 ÷ 3 = 40 km/h (not 45 km/h). The correct answer is 40 km/h.' 让孩子看到今天的目标：average rate, speed, constant speed and average speed（平均速率、速度、匀速和平均速度），using total distance ÷ total time for average speed (not the mean of speeds)。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Taking the mean of two speeds instead of total distance ÷ total time. ✗ Example: Wei cycles 60 km at 60 km/h, then 60 km at 30 km/h. What is his average speed? Wrong: (60 + 30) ÷ 2 = 45 km/h. Correct: Part 1 time = 60 ÷ 60 = 1 h. Part 2 time = 60 ÷ 30 = 2 h. Total distance = 120 km. Total time = 3 h. Average speed = 120 ÷ 3 = 40 km/h. Rule: Average speed = total distance ÷ total time (NOT the mean of speeds). The mean of 60 and 30 is 45, but that's WRONG because Wei spent more time at 30 km/h (2 h) than at 60 km/h (1 h). The correct average speed is 40 km/h.' 再写：'Fossil 2: Using one part of the journey as if it were the whole. ✗ Example: Wei cycles 60 km at 60 km/h, then 60 km at 30 km/h. What is his average speed? Wrong: 60 km/h (using the first part only). Correct: Total distance = 120 km. Total time = 3 h. Average speed = 40 km/h. Rule: For a two-part journey, you must calculate the time for each part, then use total distance ÷ total time. Don't just use the speed of one part.' 再写：'Fossil 3: Mixing rate units. ✗ Example: confusing pages per hour with hours per page. Correct: Average rate = total pages ÷ total time gives pages per hour (pages/h). If Wei reads 90 pages in 3 hours, the rate is 90 ÷ 3 = 30 pages/h (not 3 ÷ 90 = 0.033... hours/page).' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤），覆盖 4 个概念。例题 1（average rate）：Wei reads 90 pages in 3 hours. What is his average reading rate? Show your working steps. 步骤：① Total pages = 90. Total time = 3 hours. ② Average rate = total pages ÷ total time = 90 ÷ 3 = 30. Answer: 30 pages/h. 例题 2（speed = distance ÷ time）：Aisha cycles 18 km in 2 hours at constant speed. What is her speed? Show your working steps. 步骤：① Distance = 18 km. Time = 2 hours. ② Speed = distance ÷ time = 18 ÷ 2 = 9. Answer: 9 km/h. 例题 3（average speed, two-part journey）：Wei cycles 60 km at 60 km/h, then 60 km at 30 km/h. What is his average speed for the whole journey? Show your working steps. 步骤：① Part 1: distance = 60 km, speed = 60 km/h. Time = distance ÷ speed = 60 ÷ 60 = 1 hour. ② Part 2: distance = 60 km, speed = 30 km/h. Time = 60 ÷ 30 = 2 hours. ③ Total distance = 60 + 60 = 120 km. Total time = 1 + 2 = 3 hours. ④ Average speed = total distance ÷ total time = 120 ÷ 3 = 40. Answer: 40 km/h. (Note: The average of the two speeds (60+30)÷2 = 45 is WRONG. We must use total distance ÷ total time = 40 km/h.) 例题 4（two-part with different distances）：Mr Lim drives 40 km at 40 km/h, then 40 km at 20 km/h. What is his average speed? 步骤：① Part 1: 40 km at 40 km/h. Time = 40 ÷ 40 = 1 h. ② Part 2: 40 km at 20 km/h. Time = 40 ÷ 20 = 2 h. ③ Total distance = 40 + 40 = 80 km. Total time = 1 + 2 = 3 h. ④ Average speed = 80 ÷ 3 = 26.67 km/h (round to 26.7 or keep as 80/3). For this week, use friendly numbers so answers are whole: 80 ÷ 3 ≈ 27 km/h (or state 26.67 km/h). 让孩子理解四道题的共同点：average rate and speed 都是用 total ÷ total（总量 ÷ 总时间）。Average speed 不是两个速度的平均数，一定要算出每段的时间，再用 total distance ÷ total time。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1（average rate）：Wei prints 150 pages in 5 hours. What is the average printing rate in pages per hour? Show your working steps. 答案：① Total pages = 150. Total time = 5 hours. ② Average rate = total pages ÷ total time = 150 ÷ 5 = 30. Answer: 30 pages/h. 题 2（constant speed）：Aisha cycles from home to school, a distance of 18 km, at constant speed in 2 hours. What is her speed in km/h? Show your working steps. 答案：① Distance = 18 km. Time = 2 hours. ② Speed = distance ÷ time = 18 ÷ 2 = 9. Answer: 9 km/h. 题 3（average speed, two-part journey with three sub-questions）：Mr Lim drives from Riverside Secondary to Marina Bay. He drives the first 40 km at 40 km/h, then the next 40 km at 20 km/h. (i) What is the total distance? Show your working. (ii) What is the total time? Show your working clearly for each part of the journey. (iii) What is Mr Lim's average speed for the whole journey? Show your working. 答案：(i) Total distance = 40 + 40 = 80 km. Answer: 80 km. (ii) Part 1: 40 km at 40 km/h. Time = 40 ÷ 40 = 1 h. Part 2: 40 km at 20 km/h. Time = 40 ÷ 20 = 2 h. Total time = 1 + 2 = 3 h. Answer: 3 h. (iii) Average speed = total distance ÷ total time = 80 ÷ 3 = 26.67 km/h (or 26.7 km/h, or 80/3 km/h). Answer: 26.67 km/h (not 30 km/h, which is the mean of 40 and 20). 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子在题 3(iii)用 (40 + 20) ÷ 2 = 30 km/h，指出：'You took the mean of 40 km/h and 20 km/h and got 30 km/h. But that's WRONG for average speed! Look at the times: Mr Lim spent 1 hour at 40 km/h and 2 hours at 20 km/h. He spent more time at the slower speed. So the average speed must be closer to 20 than to 40. The correct way is: total distance ÷ total time = 80 ÷ 3 = 26.67 km/h. Average speed is NOT the mean of speeds.' 如果孩子在题 3(ii)没有分段算时间，只写 total time = 3 h 而没有写出每段的时间，提醒：'Good! Your answer 3 h is correct. But the official requirement is to show your working clearly for each part of the journey. Please write: Part 1: 40 km at 40 km/h. Time = 40 ÷ 40 = 1 h. Part 2: 40 km at 20 km/h. Time = 40 ÷ 20 = 2 h. Total time = 1 + 2 = 3 h. This shows the method clearly.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed: 4.1 concepts of average rate, speed, constant speed and average speed（平均速率、速度、匀速和平均速度的概念），对应 preceding level 规则。第 17–22 周已完成 N3，本周开始 N4，只教 4.1。(3) 本周化石：taking the mean of two speeds（把两个速度求平均数，如 40 和 60 错误地算 (40+60)÷2 = 50，应该是 total distance ÷ total time；例：60 km at 60 km/h 用时 1 h，60 km at 30 km/h 用时 2 h，total 120 km in 3 h，average speed = 120 ÷ 3 = 40 km/h，不是 45）；using one part of the journey as if it were the whole（把旅程的一段当作全程）；mixing rate units（混淆速率单位）。(4) Average rate = total quantity ÷ total time（平均速率 = 总量 ÷ 总时间，如 90 pages in 3 h → 30 pages/h）。(5) Speed = distance ÷ time（速度 = 路程 ÷ 时间，如 120 km in 2 h → 60 km/h）。(6) Constant speed = the same speed for the whole journey（匀速 = 全程保持同一速度）。(7) Average speed = total distance ÷ total time（平均速度 = 总路程 ÷ 总时间，不是两个速度的平均数）。例：60 km at 60 km/h then 60 km at 30 km/h：times 1 h + 2 h = 3 h，average speed = 120 ÷ 3 = 40 km/h，不是 45。(8) 关键步骤：Step 1: Identify quantities (rate: total quantity and total time; speed: distance and time). Step 2: For average speed with two parts, calculate time for each part: time = distance ÷ speed. Step 3: Find total distance and total time. Step 4: Average speed = total distance ÷ total time (NOT the mean of speeds). Step 5: State the answer with units (km/h, pages/h, litres/min). (9) 金额如涉及用新加坡元 S$（money in Singapore dollars S$）。Distances 用 km 或 m；times 用 h 或 min（保持单位一致；本周不教 km/h ↔ m/s 换算）。(10) 唯一性 unique keys：两个选项不能是同一个数值。The fossil (mean of two speeds) must be a WRONG option when the question asks for average speed（当题目问平均速度时，化石（两个速度的平均数）必须是错误选项）。(11) 本周开始 N4（第 17–22 周完成 N3 百分数）。本周只教 N4 的 4.1（concepts of average rate, speed, constant speed and average speed）。本周不教 4.2 conversion of units（单位换算，如 km/h ↔ m/s）和 4.3 problems involving rate and speed（速率和速度应用题），那些是后续周次内容。Speed 是官方 Sec 1 内容，不是 P6-only。课后引导家长和孩子完成 /learn 页面的第 23 周作业（5 道应用题选择题 + 8 道选择题 + 3 道 show-working 题），系统会自动批改。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-24": {
    title: "速率单位换算 — Conversion of Units (km/h to m/s)",
    fossil: "multiplying by 18/5 when converting km/h → m/s (wrong direction); multiplying by 5/18 when converting m/s → km/h; treating 1 hour as 60 seconds; forgetting the 1000",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 24 周，速率单位换算（conversion of units，官方举例 e.g. km/h to m/s）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed: 4.2 conversion of units (e.g. km/h to m/s)。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 23 周已完成 4.1（concepts of average rate, speed, constant speed and average speed），本周只教 4.2 conversion of units（单位换算，如 km/h ↔ m/s）。本周不教 4.3 problems involving rate and speed（速率和速度应用题），4.3 是第 25 周内容。本周方法：1 km = 1000 m, 1 h = 3600 s。km/h → m/s: multiply by 1000/3600 = 5/18（如 18 km/h = 18 × 5/18 = 5 m/s）。m/s → km/h: multiply by 3600/1000 = 18/5（如 10 m/s = 10 × 18/5 = 36 km/h）。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Convert 18 km/h to m/s. 问孩子：'What's the first step?' 等孩子思考后，解释：'To convert km/h to m/s, we need to know: 1 km = 1000 m, 1 h = 3600 s. So 1 km/h = 1000 m / 3600 s = 1000/3600 m/s. We can simplify this fraction: 1000/3600 = 5/18. So to convert km/h to m/s, we multiply by 5/18. Step 1: 1 km = 1000 m, 1 h = 3600 s. Step 2: km/h → m/s: multiply by 1000/3600 = 5/18. Step 3: 18 km/h = 18 × 5/18 = 5 m/s. Answer: 5 m/s.' 再写：Convert 10 m/s to km/h. 解释：'To convert m/s to km/h, we multiply by the reciprocal: 3600/1000 = 18/5. Step 1: 1 km = 1000 m, 1 h = 3600 s. Step 2: m/s → km/h: multiply by 3600/1000 = 18/5. Step 3: 10 m/s = 10 × 18/5 = 36 km/h. Answer: 36 km/h.' 让孩子看到今天的目标：conversion of units（单位换算），specifically km/h ↔ m/s。Key formula: km/h × 5/18 = m/s; m/s × 18/5 = km/h。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Multiplying by 18/5 when converting km/h → m/s (wrong direction). ✗ Example: Convert 18 km/h to m/s. Wrong: 18 × 18/5 = 64.8 m/s. Correct: 18 × 5/18 = 5 m/s. Rule: km/h → m/s: multiply by 5/18 (not 18/5). To remember: km is bigger than m (1 km = 1000 m), and h is bigger than s (1 h = 3600 s), so when we convert km/h to m/s, the numerator grows 1000 times but the denominator also grows 3600 times, so the overall value gets smaller. 18 km/h = 5 m/s (5 is smaller than 18). If you multiply by 18/5, you get 64.8, which is bigger than 18—that tells you the direction is wrong!' 再写：'Fossil 2: Multiplying by 5/18 when converting m/s → km/h (wrong direction). ✗ Example: Convert 10 m/s to km/h. Wrong: 10 × 5/18 = 2.78 m/s. Correct: 10 × 18/5 = 36 km/h. Rule: m/s → km/h: multiply by 18/5 (not 5/18). To remember: m/s → km/h is the opposite direction of km/h → m/s, so we use the reciprocal: 18/5 instead of 5/18.' 再写：'Fossil 3: Treating 1 hour as 60 seconds (forgetting 3600). ✗ Example: 1 h = 60 s. Wrong! Correct: 1 h = 60 min = 60 × 60 s = 3600 s. Rule: 1 h = 3600 s (not 60 s). This is why the conversion factor is 5/18 = 1000/3600, not 1000/60.' 再写：'Fossil 4: Forgetting the 1000 (forgetting 1 km = 1000 m). ✗ Example: 1 km = 100 m or 1 km = 10 m. Wrong! Correct: 1 km = 1000 m. Rule: 1 km = 1000 m. This is why the conversion factor is 5/18 = 1000/3600.' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤），覆盖两个方向的换算。例题 1（km/h → m/s）：Convert 18 km/h to m/s. Show your working steps. 步骤：① 1 km = 1000 m, 1 h = 3600 s. ② km/h → m/s: multiply by 1000/3600 = 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. Answer: 5 m/s. 例题 2（m/s → km/h）：Convert 10 m/s to km/h. Show your working steps. 步骤：① 1 km = 1000 m, 1 h = 3600 s. ② m/s → km/h: multiply by 3600/1000 = 18/5. ③ 10 m/s = 10 × 18/5 = 36 km/h. Answer: 36 km/h. 例题 3（short application）：Wei cycles at 18 km/h. Write the speed in m/s. Show your working steps. 步骤：① Wei's speed = 18 km/h. ② km/h → m/s: multiply by 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. Answer: 5 m/s. 每做完一题，问孩子：'What's the key conversion factor? km/h → m/s use × 5/18. m/s → km/h use × 18/5. Can you remember which one is for which direction?' 指出常见数值：18 km/h = 5 m/s, 36 km/h = 10 m/s, 72 km/h = 20 m/s, 54 km/h = 15 m/s（方便孩子记住）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1（km/h → m/s）：Convert 18 km/h to m/s. Show your working steps. 答案：① 1 km = 1000 m, 1 h = 3600 s. ② km/h → m/s: multiply by 1000/3600 = 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. Answer: 5 m/s. 题 2（m/s → km/h）：Convert 10 m/s to km/h. Show your working steps. 答案：① 1 km = 1000 m, 1 h = 3600 s. ② m/s → km/h: multiply by 3600/1000 = 18/5. ③ 10 m/s = 10 × 18/5 = 36 km/h. Answer: 36 km/h. 题 3（short application）：Wei cycles at 18 km/h. Write the speed in m/s. Show your working steps. 答案：① Wei's speed = 18 km/h. ② km/h → m/s: multiply by 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. Answer: 5 m/s. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子在题 1 用 18 × 18/5 = 64.8 m/s（错误方向），指出：'You multiplied by 18/5. But that's the WRONG direction! To convert km/h to m/s, we multiply by 5/18 (not 18/5). Let me show you: 1 km/h = 1000 m / 3600 s = 5/18 m/s. So 18 km/h = 18 × 5/18 = 5 m/s. The correct answer is 5 m/s (not 64.8 m/s). To check: 5 m/s is smaller than 18 km/h, which makes sense because m is smaller than km and s is smaller than h, so the numerical value should be smaller.' 如果孩子在题 2 用 10 × 5/18 = 2.78...（错误方向），指出：'You multiplied by 5/18. But that's the WRONG direction! To convert m/s to km/h, we multiply by 18/5 (not 5/18). Let me show you: 1 m/s = 3600 s / 1000 m × 1 km = 18/5 km/h. So 10 m/s = 10 × 18/5 = 36 km/h. The correct answer is 36 km/h (not 2.78 km/h). To check: 36 km/h is larger than 10 m/s, which makes sense because km is larger than m and h is larger than s, so the numerical value should be larger.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed: 4.2 conversion of units (e.g. km/h to m/s)（速率单位换算，官方举例），对应 preceding level 规则。第 23 周已完成 4.1，本周只教 4.2。(3) 本周化石：multiplying by 18/5 when converting km/h → m/s（方向错误，应该是 × 5/18：如 18 km/h 错误地算 18 × 18/5 = 64.8 m/s，正确应该是 18 × 5/18 = 5 m/s）；multiplying by 5/18 when converting m/s → km/h（方向错误，应该是 × 18/5：如 10 m/s 错误地算 10 × 5/18 = 2.78... m/s，正确应该是 10 × 18/5 = 36 km/h）；treating 1 hour as 60 seconds（把 1 小时当 60 秒，正确是 1 h = 3600 s）；forgetting the 1000（忘记 1 km = 1000 m）。(4) 关键换算公式：1 km = 1000 m, 1 h = 3600 s。km/h → m/s: multiply by 1000/3600 = 5/18（如 18 km/h = 18 × 5/18 = 5 m/s，36 km/h = 10 m/s，72 km/h = 20 m/s，54 km/h = 15 m/s）。m/s → km/h: multiply by 3600/1000 = 18/5（如 10 m/s = 10 × 18/5 = 36 km/h，5 m/s = 18 km/h）。(5) 关键步骤：Step 1: Write the given speed and units (写出已知速度和单位，如 18 km/h 或 10 m/s). Step 2: Identify the conversion factor (确定转换因数：km/h → m/s 用 × 5/18；m/s → km/h 用 × 18/5). Step 3: Perform the calculation (执行计算：18 × 5/18 = 5；10 × 18/5 = 36). Step 4: State the answer with units (陈述答案并加单位，如 5 m/s 或 36 km/h). Step 5: Check if needed (检验如果需要：5 m/s × 18/5 = 18 km/h ✓). (6) 记忆技巧：To remember the direction: km/h → m/s makes the number smaller (18 → 5), because m is smaller than km. m/s → km/h makes the number bigger (10 → 36), because km is bigger than m. If your converted number goes the wrong way (e.g., 18 → 64.8), you've used the wrong factor! (7) 常见友好数值（convenient values）：18 km/h = 5 m/s, 36 km/h = 10 m/s, 72 km/h = 20 m/s, 54 km/h = 15 m/s. 这些数值方便记忆和检验。(8) 唯一性 unique keys：两个选项不能是同一个数值。Do not offer both 18 × 5/18 and 5 m/s as two separate options unless you're asking \&quot;which working is correct\&quot;. The fossil \&quot;wrong direction\&quot; must be a WRONG option（化石&quot;方向错误&quot;必须是错误选项）。(9) 本周继续 N4（第 23 周完成 4.1）。本周只教 N4 的 4.2（conversion of units，单位换算）。本周不教 4.1（concepts of average rate, speed, constant speed and average speed，已在第 23 周完成）和 4.3（problems involving rate and speed，速率和速度应用题，第 25 周内容）。课后引导家长和孩子完成 /learn 页面的第 24 周作业（5 道应用题选择题 + 8 道选择题 + 3 道 show-working 题），系统会自动批改。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-25": {
    title: "速率和速度应用题 — Problems Involving Rate and Speed",
    fossil: "taking the mean of two speeds (e.g. average of 40 km/h and 60 km/h as 50 km/h) instead of total distance ÷ total time; converting the wrong direction then solving (18 km/h in 10 s wrongly using × 18/5 instead of × 5/18); using one part of the journey as the whole; mixing units (km with m/s without converting)",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 25 周，速率和速度应用题（problems involving rate and speed）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed: 4.3 problems involving rate and speed（速率和速度应用题）。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 23 周已教 4.1（concepts of average rate, speed, constant speed and average speed），第 24 周已教 4.2（conversion of units，如 km/h ↔ m/s），本周只教 4.3（problems involving rate and speed，速率和速度应用题，在应用题中混合使用 4.1–4.2 技能）。本周完成 N4。本周不教 N5 algebra（下周内容）。官方大纲 4.3 wording：'problems involving rate and speed'（速率和速度应用题）。本周方法：混合使用已学技能 mix skills 4.1–4.2 in short word problems。Average rate = total quantity ÷ total time。Speed = distance ÷ time; time = distance ÷ speed; distance = speed × time。Average speed = total distance ÷ total time（不是两个速度的平均数）。Convert km/h ↔ m/s when the story needs matching units（当应用题需要统一单位时，换算 km/h ↔ m/s，然后解题）。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写两道例题，一道是 average speed，一道是 convert then solve。例题 1：Wei cycles 60 km at 60 km/h, then 60 km at 30 km/h. What is his average speed for the whole journey? Show your working steps. 问孩子：'Can we just take the average of 60 and 30? (60 + 30) ÷ 2 = 45 km/h?' 等孩子思考后，指出：'No! That's a fossil error. Average speed is NOT the mean of two speeds. We must use total distance ÷ total time. Let me show you: Part 1: 60 km at 60 km/h. Time = 60 ÷ 60 = 1 hour. Part 2: 60 km at 30 km/h. Time = 60 ÷ 30 = 2 hours. Total distance = 60 + 60 = 120 km. Total time = 1 + 2 = 3 hours. Average speed = 120 ÷ 3 = 40 km/h (not 45 km/h). The correct answer is 40 km/h.' 例题 2：Wei runs at 18 km/h. Convert this to m/s. Then find how many metres Wei travels in 10 seconds. Show your working steps clearly. 解释：'Step 1: Wei's speed = 18 km/h. Step 2: Convert km/h to m/s: 1 km = 1000 m, 1 h = 3600 s. km/h → m/s: multiply by 1000/3600 = 5/18. Step 3: 18 km/h = 18 × 5/18 = 5 m/s. Step 4: In 10 seconds, Wei travels: distance = speed × time = 5 × 10 = 50 m. Answer: 18 km/h = 5 m/s. Wei travels 50 m in 10 seconds.' 问：'What if we don't convert first? 18 km/h, in 10 s, distance = 18 × 10 = 180 m? No! That's wrong. The units don't match. km/h measures distance per hour, but we're asked for distance in seconds. We must convert first: 18 km/h = 5 m/s. Then 5 × 10 = 50 m. Not 180 m!' 让孩子看到今天的目标：problems involving rate and speed（速率和速度应用题，mixing skills 4.1 + 4.2 in short word problems）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Taking the mean of two speeds instead of total distance ÷ total time. ✗ Example: Wei cycles 60 km at 60 km/h, then 60 km at 30 km/h. What is his average speed? Wrong: (60 + 30) ÷ 2 = 45 km/h. Correct: Part 1 time = 60 ÷ 60 = 1 h. Part 2 time = 60 ÷ 30 = 2 h. Total distance = 120 km. Total time = 3 h. Average speed = 120 ÷ 3 = 40 km/h. Rule: Average speed = total distance ÷ total time (NOT the mean of speeds).' 再写：'Fossil 2: Converting the wrong direction then solving. ✗ Example: Wei runs at 18 km/h. How many metres does he travel in 10 seconds? Wrong: Convert km/h to m/s using wrong direction: 18 × 18/5 = 64.8 m/s. Then 64.8 × 10 = 648 m. Correct: Convert km/h to m/s: 18 × 5/18 = 5 m/s. Then 5 × 10 = 50 m. Rule: km/h → m/s: multiply by 5/18 (not 18/5). Check your conversion: 5 m/s is reasonable (5 metres per second is slower than 18 km per hour in the right unit). 64.8 m/s is way too fast!' 再写：'Fossil 3: Using one part of the journey as the whole. ✗ Example: Wei cycles 60 km at 60 km/h, then 60 km at 30 km/h. What is his average speed? Wrong: 60 km/h (using the first part only). Correct: Total distance = 120 km. Total time = 3 h. Average speed = 40 km/h.' 再写：'Fossil 4: Mixing units (km with m/s without converting). ✗ Example: Wei runs at 18 km/h. How many metres does he travel in 10 seconds? Wrong: 18 × 10 = 180 m (mixing km/h with seconds without converting). Correct: First convert 18 km/h = 5 m/s. Then 5 × 10 = 50 m. Rule: When units don't match, convert first!' 让孩子跟读改正后的方法各 2 次，加深记忆。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤），覆盖 mixing skills 4.1 + 4.2。例题 1（speed = distance ÷ time, skill 4.1）：Wei cycles from home to school, a distance of 20 km, at constant speed in 2 hours. What is his speed in km/h? Show your working steps. 步骤：① Distance = 20 km. Time = 2 hours. ② Speed = distance ÷ time = 20 ÷ 2 = 10. Answer: 10 km/h. 例题 2（average speed = total distance ÷ total time, skill 4.1, two-part journey with three sub-questions）：Mr Lim drives from Riverside Secondary to Marina Bay. He drives the first 40 km at 40 km/h, then the next 40 km at 20 km/h. (i) What is the total distance? Show your working. (ii) What is the total time? Show your working clearly for each part of the journey. (iii) What is Mr Lim's average speed for the whole journey? Show your working. 步骤：(i) Total distance = 40 + 40 = 80 km. Answer: 80 km. (ii) Part 1: 40 km at 40 km/h. Time = distance ÷ speed = 40 ÷ 40 = 1 hour. Part 2: 40 km at 20 km/h. Time = 40 ÷ 20 = 2 hours. Total time = 1 + 2 = 3 hours. Answer: 3 hours. (iii) Average speed = total distance ÷ total time = 80 ÷ 3 = 26.67 km/h (wait, let me check: 80 ÷ 3 = 26.666..., but the question expects friendly numbers. Let me recalculate with the right numbers: if we use 40 km at 40 km/h (1 h) then 40 km at 20 km/h (2 h), total 80 km in 3 h, average = 80 ÷ 3 = 26.67, that's not friendly. Let me fix: Mr Lim drives the first 40 km at 40 km/h (time 1 h), then the next 40 km at 20 km/h (time 2 h). Total distance = 80 km. Total time = 3 h. Average speed = 80 ÷ 3. But 80 ÷ 3 is not a friendly number. I should change the problem to make the answer friendly. Actually, let me keep it as 80 ÷ 3 = 26.67 for this example, but note that in the homework, we use friendly numbers. So average speed = 80 ÷ 3 = 26.67 km/h (or we can express it as 26 2/3 km/h, which is exact). Let me show the working anyway.) Average speed = total distance ÷ total time = 80 ÷ 3 = 26.67 km/h (or 26 2/3 km/h). Answer: 26.67 km/h (or 26 2/3 km/h). (Note: For homework, we'll use friendlier numbers that give integer answers.) 例题 3（convert then solve, mixing skills 4.1 + 4.2）：Aisha runs at 18 km/h. Convert this speed to m/s. Then find how many metres Aisha travels in 10 seconds. Show your working steps clearly. 步骤：① Aisha's speed = 18 km/h. ② Convert km/h to m/s: 1 km = 1000 m, 1 h = 3600 s. km/h → m/s: multiply by 1000/3600 = 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. ④ In 10 seconds, Aisha travels: distance = speed × time = 5 × 10 = 50 m. Answer: 18 km/h = 5 m/s. Aisha travels 50 m in 10 seconds. 每做完一题，问孩子：'What's the key skill we used? Example 1: speed = distance ÷ time. Example 2: average speed = total distance ÷ total time (NOT the mean of speeds). Example 3: convert km/h to m/s first (× 5/18), then multiply by time to get distance.' 指出：本周是 problems involving rate and speed，mixing skills 4.1 (concepts) + 4.2 (conversion)。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1（speed = distance ÷ time）：Wei cycles from home to school, a distance of 20 km, at constant speed in 2 hours. What is his speed in km/h? Show your working steps. 答案：① Distance = 20 km. Time = 2 hours. ② Speed = distance ÷ time = 20 ÷ 2 = 10. Answer: 10 km/h. 题 2（average speed, two-part journey）：Mr Lim drives from Riverside Secondary to Marina Bay. He drives the first 40 km at 40 km/h, then the next 40 km at 20 km/h. (i) What is the total distance? Show your working. (ii) What is the total time? Show your working clearly for each part of the journey. (iii) What is Mr Lim's average speed for the whole journey? Show your working. 答案：(i) Total distance = 40 + 40 = 80 km. Answer: 80 km. (ii) Part 1: 40 km at 40 km/h. Time = distance ÷ speed = 40 ÷ 40 = 1 hour. Part 2: 40 km at 20 km/h. Time = 40 ÷ 20 = 2 hours. Total time = 1 + 2 = 3 hours. Answer: 3 hours. (iii) Average speed = total distance ÷ total time = 80 ÷ 3 = 26.67 km/h (or 80/3 km/h, or 26 2/3 km/h). Answer: 26.67 km/h (or 26 2/3 km/h). (Note: This is not a friendly integer. For the actual homework on the platform, we'll adjust the numbers to get friendly integer answers, like changing the distances or speeds so the result is a whole number. But for this Zoom practice, it's OK to show 80 ÷ 3 = 26.67 or 26 2/3.) 题 3（convert then solve）：Aisha runs at 18 km/h. Convert this speed to m/s. Then find how many metres Aisha travels in 10 seconds. Show your working steps clearly. 答案：① Aisha's speed = 18 km/h. ② Convert km/h to m/s: 1 km = 1000 m, 1 h = 3600 s. km/h → m/s: multiply by 1000/3600 = 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. ④ In 10 seconds, Aisha travels: distance = speed × time = 5 × 10 = 50 m. Answer: 18 km/h = 5 m/s. Aisha travels 50 m in 10 seconds. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子在题 2 (iii) 用 (40+20)÷2 = 30 km/h（错误：取两个速度的平均数），指出：'You took the mean of 40 and 30. But that's the WRONG method! Average speed is NOT the mean of two speeds. You must use total distance ÷ total time. Let me show you: Total distance = 80 km. Total time = 3 h (1 h + 2 h). Average speed = 80 ÷ 3 = 26.67 km/h (or 26 2/3 km/h). The correct answer is 26.67 km/h, not 30 km/h. The mean of 40 and 20 is 30, but that's WRONG because Mr Lim spent more time at 20 km/h (2 h) than at 40 km/h (1 h), so the average speed is closer to 20 km/h. 26.67 is between 20 and 40, and closer to 20, which makes sense.' 如果孩子在题 3 用 18 × 10 = 180 m（错误：混用单位不换算），指出：'You multiplied 18 km/h by 10 seconds. But the units don't match! km/h measures distance per hour, but you're asked for distance in seconds. You must convert first: 18 km/h = 5 m/s. Then 5 × 10 = 50 m. The correct answer is 50 m, not 180 m. If Wei travels 18 km in 1 hour (3600 seconds), then in 10 seconds he travels much less than 1 km. 50 m is reasonable. 180 m would be if he travels at 18 m/s, but he's only at 5 m/s.' 如果孩子在题 3 用 18 × 18/5 = 64.8 m/s 然后 64.8 × 10 = 648 m（错误：换算方向错误），指出：'You converted km/h to m/s by multiplying by 18/5. But that's the WRONG direction! To convert km/h to m/s, we multiply by 5/18 (not 18/5). Let me show you: 1 km/h = 1000 m / 3600 s = 5/18 m/s. So 18 km/h = 18 × 5/18 = 5 m/s. Then 5 × 10 = 50 m. The correct answer is 50 m, not 648 m. 648 m in 10 seconds would be way too fast! To check: 5 m/s means 5 metres per second. In 10 seconds, that's 50 metres. That's reasonable for running.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed: 4.3 problems involving rate and speed（速率和速度应用题，mixing skills 4.1–4.2），对应 preceding level 规则。第 23 周已完成 4.1，第 24 周已完成 4.2，本周教 4.3。本周完成 N4。(3) 本周化石：taking the mean of two speeds（把两个速度求平均数而不是用总路程 ÷ 总时间：60 km/h and 30 km/h 错误地算 (60+30)÷2 = 45 km/h；正确算法：60 km at 60 km/h 用时 1 h，60 km at 30 km/h 用时 2 h，total 120 km in 3 h，average speed = 120 ÷ 3 = 40 km/h，不是 45）；converting the wrong direction then solving（换算方向错误然后解题：18 km/h 问 10 秒走多远，错误地用 18 × 18/5 = 64.8 m/s 然后 64.8 × 10 = 648 m，正确应该是 18 × 5/18 = 5 m/s 然后 5 × 10 = 50 m）；using one part of journey as whole（把旅程一段当全程）；mixing units without converting（单位混用不换算：如 18 km/h in 10 s 错误地算 18 × 10 = 180 m，应该先换算 18 km/h = 5 m/s，再算 5 × 10 = 50 m）。(4) 混合使用已学技能 mix skills 4.1–4.2：Average rate = total quantity ÷ total time。Speed = distance ÷ time; time = distance ÷ speed; distance = speed × time。Average speed = total distance ÷ total time（不是两个速度的平均数）。Convert km/h ↔ m/s when needed（当应用题需要统一单位时，先换算再解题：km/h → m/s multiply by 5/18；m/s → km/h multiply by 18/5）。(5) 关键步骤：Step 1: Read the question carefully and identify what is given and what is asked (仔细读题，确定已知和所求). Step 2: For constant speed: speed = distance ÷ time (匀速：速度 = 路程 ÷ 时间). Step 3: For average speed with two parts: calculate time for each part (time = distance ÷ speed), then total distance ÷ total time (对于分两段的平均速度：先算每段时间，再用总路程 ÷ 总时间；不是两个速度的平均数). Step 4: If units don't match (e.g. km/h and seconds), convert first (如果单位不匹配，如 km/h 和秒，先换算：km/h → m/s multiply by 5/18). Step 5: State the answer with units (陈述答案并加单位，如 km/h, m/s, m, km, h, s). Step 6: Check your answer (检验答案：如 40 km/h average for 120 km in 3 h? 40 × 3 = 120 ✓). (6) 唯一性 unique keys：两个选项不能是同一个数值。If a two-speed journey has average 40 km/h, do not also offer 45 (the mean of the two speeds) as a second correct option（如果一个双速度旅程平均速度是 40 km/h，不要同时提供 45（两个速度的平均数）作为第二个正确选项；45 必须是错误选项）。If a conversion is needed, the wrong-direction result must be a WRONG option（如果需要换算，方向错误的结果必须是错误选项）。本周完成 N4（4.1–4.3）。下周开始 N5 algebra。打开 /learn 页面，提醒孩子本周作业入口，完成后会自动批改。对家长说：作业完成后我们会在微信群里同步进度。下周开始 N5 algebra（代数）。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-17": {
    title: "百分数 — Expressing One Quantity as a Percentage of Another",
    fossil: "dividing the wrong way (B as a percentage of A) / forgetting to multiply by 100",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 17 周，将一个数表示为另一个数的百分比（expressing one quantity as a percentage of another）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.1 expressing one quantity as a percentage of another。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 15–16 周已完成 N2（ratios involving rational numbers, writing a ratio in its simplest form, problems involving ratio），本周开始 N3，只教 3.1（expressing one quantity as a percentage of another）。本周不教 3.2 comparing two quantities by percentage，3.3 percentages greater than 100%，3.4 percentage increase/decrease，3.5 reverse percentages，3.6 solving problems involving percentage（3.2–3.6 是后续内容）。SMATH 试学周已教 P6 percentage，本周是 Sec 1 的 3.1（express A as a percentage of B），不是 P6 的重复。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Express 12 as a percentage of 40.  问孩子：'What's the first step?' 等孩子思考后，解释：'A as a percentage of B means we divide A by B, then multiply by 100 to get the percentage. Step 1: A = 12, B = 40. Step 2: Divide A by B. 12 ÷ 40 = 0.3. Step 3: Multiply by 100 to get the percentage. 0.3 × 100 = 30. So 12 as a percentage of 40 is 30%.' 再问：'What if we divide the wrong way? 40 ÷ 12 = 3.333..., then × 100 = 333.33%. That's wrong! The question asks for 12 as a percentage of 40 (12 is the part, 40 is the whole). So we divide 12 by 40, not 40 by 12. The order matters: A as a percentage of B = (A ÷ B) × 100%.' 再问：'What if we forget to multiply by 100? 12 ÷ 40 = 0.3. If we stop here, the answer is 0.3. But the question asks for a percentage, not a decimal. We must multiply by 100 to get 30%. Don't forget the × 100 step!' 让孩子看到今天的目标：express one quantity as a percentage of another（将一个数表示为另一个数的百分比），using the formula (A ÷ B) × 100%。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Dividing the wrong way (B as a percentage of A). ✗ Example: Express 12 as a percentage of 40. Wrong: 40 ÷ 12 × 100 = 333.33%. Correct: 12 ÷ 40 × 100 = 30%. Rule: A as a percentage of B means (A ÷ B) × 100%. A is the numerator (part), B is the denominator (whole). If the question says 12 as a percentage of 40, then A = 12, B = 40, so divide 12 by 40 (not 40 by 12). The order matters.' 再写：'Fossil 2: Forgetting to multiply by 100 (leaving the decimal as the answer). ✗ Example: Express 12 as a percentage of 40. Wrong: 12 ÷ 40 = 0.3 (stop here). Correct: 12 ÷ 40 = 0.3, then 0.3 × 100 = 30%. Rule: after dividing A by B, you must multiply by 100 to convert the decimal to a percentage. 0.3 is a decimal. 30% is a percentage. The question asks for a percentage, so the final answer must be 30% (not 0.3). Don't forget the × 100 step!' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（express A as percentage of B）：Express 12 as a percentage of 40. 步骤：① A = 12, B = 40. ② (A ÷ B) × 100% = (12 ÷ 40) × 100%. ③ 12 ÷ 40 = 0.3. ④ 0.3 × 100 = 30. Answer: 30%. 例题 2（应用题 word problem）：Wei has S$32. He spends S$8 on lunch. Express the amount he spends as a percentage of the total amount he has. 步骤：① Amount spent = S$8 (this is A, the part). ② Total amount = S$32 (this is B, the whole). ③ (A ÷ B) × 100% = (8 ÷ 32) × 100%. ④ 8 ÷ 32 = 0.25. ⑤ 0.25 × 100 = 25. Answer: 25%. 例题 3（已知分数和整体，求百分比）：A class has 40 students. 6 students are absent today. Express the number of absent students as a percentage of the class. 步骤：① Absent students = 6 (this is A, the part). ② Total students = 40 (this is B, the whole). ③ (A ÷ B) × 100% = (6 ÷ 40) × 100%. ④ 6 ÷ 40 = 0.15. ⑤ 0.15 × 100 = 15. Answer: 15%. 让孩子理解三道题的共同点：都是先除（A ÷ B），再乘 100。A 是部分（part），B 是整体（whole）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Express 18 as a percentage of 60. Show your working steps. 答案：① A = 18, B = 60. ② (A ÷ B) × 100% = (18 ÷ 60) × 100%. ③ 18 ÷ 60 = 0.3. ④ 0.3 × 100 = 30. Answer: 30%. 题 2：Wei has S$80. He spends S$20 on lunch. Express the amount he spends as a percentage of the total amount he has. Show your working steps. 答案：① Amount spent = S$20. Total amount = S$80. ② (A ÷ B) × 100% = (20 ÷ 80) × 100%. ③ 20 ÷ 80 = 0.25. ④ 0.25 × 100 = 25. Answer: 25%. 题 3：The canteen has 120 seats. 30 seats are occupied during recess. Express the number of occupied seats as a percentage of the total number of seats. Show your working steps. 答案：① Occupied seats = 30. Total seats = 120. ② (A ÷ B) × 100% = (30 ÷ 120) × 100%. ③ 30 ÷ 120 = 0.25. ④ 0.25 × 100 = 25. Answer: 25%. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子除错方向（如题 1 算 60 ÷ 18），指出：'The question asks for 18 as a percentage of 60. That means 18 is the part (A), 60 is the whole (B). So we divide 18 by 60 (not 60 by 18). Check the order: A as a percentage of B = (A ÷ B) × 100%.' 如果孩子忘记 × 100（如题 1 写 0.3 作为最终答案），指出：'You divided 18 by 60 and got 0.3. Good! But the question asks for a percentage. 0.3 is a decimal. We need to multiply by 100 to convert it to a percentage: 0.3 × 100 = 30%. The final answer is 30% (not 0.3).'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.1 expressing one quantity as a percentage of another（将一个数表示为另一个数的百分比），对应 preceding level 规则。本周开始 N3。(3) 本周化石：dividing the wrong way（B as a percentage of A，如果题目是 12 as a percentage of 40，错误地算 40 as a percentage of 12，错！应该是 12 ÷ 40，不是 40 ÷ 12）；forgetting to multiply by 100（leaving 12/40 = 0.3 as the answer，忘记 × 100% 得 30%，错！必须 × 100%）。(4) A as a percentage of B = (A ÷ B) × 100%。例：12 as a percentage of 40 = (12 ÷ 40) × 100% = 0.3 × 100% = 30%。(5) 应用题 word problem：Wei has S$32, he spends S$8. Express S$8 as a percentage of S$32. Solution: (8 ÷ 32) × 100% = 0.25 × 100% = 25%。(6) 已知分数和整体，求百分比 given part and whole, find percentage：A class has 40 students, 6 are absent. Express 6 as a percentage of 40. Solution: (6 ÷ 40) × 100% = 0.15 × 100% = 15%。(7) 关键步骤：Step 1: Identify A (the part) and B (the whole). Step 2: Divide A by B (A ÷ B). Step 3: Multiply by 100 to get the percentage ((A ÷ B) × 100%). (8) 金额用新加坡元 S$（money in Singapore dollars S$）。(9) 唯一性 unique keys：两个选项不能是同一个金额的不同写法。如果一个选项是 30%，不能同时提供 30% 和 3/10 作为两个选项。The inverted (B of A) value 必须作为错误选项（wrong option），不是第二个正确答案。(10) 本周开始 N3（第 15–16 周完成 N2 ratios）。SMATH 试学周已教 P6 percentage，本周是 Sec 1 的 3.1（express A as a percentage of B），不是 P6 的重复。本周不教 3.2 comparing by percentage，3.3 percentages > 100%，3.4 increase/decrease，3.5 reverse percentages，3.6 problems（later weeks）。课后引导家长和孩子完成 /learn 页面的第 17 周作业（5 道应用题选择题 + 8 道选择题 + 3 道 show-working 题），系统会自动批改。下周第 18 周会继续 N3 的 3.2–3.6（comparing by percentage, percentages > 100%, increase/decrease, reverse percentages, problems involving percentage）。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-16": {
    title: "比的应用题 — Problems Involving Ratio",
    fossil: "using 2/3 of the total when the ratio is 2 : 3 (should be 2/5) / swapping who gets which part",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 16 周，比的应用题（problems involving ratio）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.3 problems involving ratio。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 15 周已教 2.1–2.2（ratios involving rational numbers, writing a ratio in its simplest form），本周只教 2.3（problems involving ratio），本周完成官方 N2。本周不教 N3 percentage（百分数，那是更后面的内容）。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Wei and Aisha share S$60 in the ratio 2 : 3. How much does Wei get?  问孩子：'What's the first step?' 等孩子思考后，解释：'Step 1: Find total parts. Total parts = 2 + 3 = 5. Step 2: Find one part. One part = S$60 ÷ 5 = S$12. Step 3: Find Wei's share. Wei gets 2 parts = 2 × S$12 = S$24. Aisha gets 3 parts = 3 × S$12 = S$36.' 再问：'What if we want to check? Wei S$24 + Aisha S$36 = S$60 ✓. And is the ratio 2 : 3? S$24 : S$36 = 24 : 36. Simplify: HCF = 12. 24 ÷ 12 = 2, 36 ÷ 12 = 3. So 24 : 36 = 2 : 3 ✓. Our answer is correct.' 让孩子看到今天的目标：按给定比例分配数量（share a quantity in a given ratio），已知一个量和比求另一个量（given one quantity and the ratio, find the other），已知差和比求数量（given the difference and the ratio, find a quantity）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Using 2/3 of the total when the ratio is 2 : 3 (should be 2/5). ✗ Example: Wei and Aisha share S$60 in the ratio 2 : 3. How much does Wei get? Wrong: Wei gets 2/3 of S$60 = 2/3 × S$60 = S$40. Correct: Wei gets 2/5 of S$60 = 2/5 × S$60 = S$24. Rule: if the ratio is 2 : 3, total parts = 2 + 3 = 5 (not 3). Wei's share = 2 parts out of 5 total parts = 2/5 of the total (not 2/3). The denominator is the sum of all parts in the ratio.' 再写：'Fossil 2: Swapping who gets which part. ✗ Example: Wei and Aisha share S$60 in the ratio 2 : 3. How much does Wei get? Wrong: Wei gets 3 parts = 3 × S$12 = S$36 (swapping Wei's 2 parts for Aisha's 3 parts). Correct: Wei gets 2 parts = 2 × S$12 = S$24. Rule: if the ratio is Wei : Aisha = 2 : 3, Wei gets 2 parts (not 3), and Aisha gets 3 parts (not 2). The order in the ratio matches the order of the names. First name in the ratio gets the first number, second name gets the second number.' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（按比分配）：Wei and Aisha share S$60 in the ratio 2 : 3. How much does Wei get? 步骤：① Ratio 2 : 3. ② Total parts = 2 + 3 = 5. ③ One part = S$60 ÷ 5 = S$12. ④ Wei gets 2 parts = 2 × S$12 = S$24. ⑤ Aisha gets 3 parts = 3 × S$12 = S$36. Answer: Wei gets S$24, Aisha gets S$36. 例题 2（已知一个量求另一个量）：Wei has S$24. The ratio Wei : Aisha = 2 : 3. How much does Aisha have? 步骤：① Wei's 2 parts = S$24. ② One part = S$24 ÷ 2 = S$12. ③ Aisha's 3 parts = 3 × S$12 = S$36. Answer: Aisha has S$36. 例题 3（已知差求数量）：Wei and Aisha share money in the ratio 2 : 3. Aisha gets S$12 more than Wei. How much does Wei get? 步骤：① Ratio 2 : 3. ② Difference = 3 − 2 = 1 part. ③ One part = S$12. ④ Wei's 2 parts = 2 × S$12 = S$24. ⑤ Aisha's 3 parts = 3 × S$12 = S$36. ⑥ Check: S$36 − S$24 = S$12 ✓. Answer: Wei gets S$24. 让孩子理解三种题型的共同点：都是先找 one part，再乘以各自的份数。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei and Aisha share S$75 in the ratio 2 : 3. How much does each person get? Show your working steps. 答案：① Ratio 2 : 3. ② Total parts = 2 + 3 = 5. ③ One part = S$75 ÷ 5 = S$15. ④ Wei gets 2 parts = 2 × S$15 = S$30. ⑤ Aisha gets 3 parts = 3 × S$15 = S$45. Answer: Wei gets S$30, Aisha gets S$45. 题 2：The ratio of Wei's savings to Aisha's savings is 3 : 4. Wei has S$36. How much does Aisha have? Show your working steps. 答案：① Wei's 3 parts = S$36. ② One part = S$36 ÷ 3 = S$12. ③ Aisha's 4 parts = 4 × S$12 = S$48. Answer: Aisha has S$48. 题 3：The canteen has 48 students. Mr Lim divides them into two groups for a class trip in the ratio 5 : 3. How many students are in the larger group? Show your working steps. 答案：① Ratio 5 : 3. ② Total parts = 5 + 3 = 8. ③ One part = 48 ÷ 8 = 6 students. ④ First group: 5 parts = 5 × 6 = 30 students. ⑤ Second group: 3 parts = 3 × 6 = 18 students. ⑥ Larger group = 30 students (5 > 3). Answer: 30 students. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子用 2/3 of total 而不是 2/5 of total，指出：'The ratio is 2 : 3. Total parts = 2 + 3 = 5 (not 3). Wei's share is 2 parts out of 5 total parts, which is 2/5 of the total (not 2/3). The denominator is always the sum of all parts.' 如果孩子把 Wei : Aisha = 2 : 3 中 Wei 的份数算成 3，指出：'Wei : Aisha = 2 : 3 means Wei gets the first number (2 parts) and Aisha gets the second number (3 parts). Don't swap them.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.3 problems involving ratio（比的应用题），对应 preceding level 规则。本周完成官方 N2。(3) 本周化石：using 2/3 of the total when the ratio is 2 : 3（如果比是 2 : 3，错误地用 2/3 of total，正确应该是 2/5 of total，因为总份数是 2+3=5）；swapping who gets which part（如果 Wei : Aisha = 2 : 3，把 Wei 的份数错给成 3 parts，Aisha 错给成 2 parts，应该 Wei 是 2 parts，Aisha 是 3 parts）。(4) 按比分配 share a quantity in a given ratio：S$60 in 2 : 3 → total parts = 2+3=5, one part = S$60÷5 = S$12, Wei's 2 parts = 2×S$12 = S$24, Aisha's 3 parts = 3×S$12 = S$36。(5) 已知一个量求另一个 given one quantity and the ratio, find the other：Wei has S$24, Wei : Aisha = 2 : 3 → Wei's 2 parts = S$24, one part = S$24÷2 = S$12, Aisha's 3 parts = 3×S$12 = S$36。(6) 已知差求数量 given the difference and the ratio, find a quantity：Aisha has S$12 more than Wei, ratio 2 : 3 → difference = 3−2 = 1 part = S$12, Wei's 2 parts = 2×S$12 = S$24, Aisha's 3 parts = 3×S$12 = S$36。(7) 关键步骤：Step 1: Find total parts (总份数 = 比的各项相加). Step 2: Find one part (一份 = total ÷ total parts, or known quantity ÷ that person's ratio number, or difference ÷ difference in ratio numbers). Step 3: Find each share (each share = one part × that person's ratio number). (8) 金额用新加坡元 S$（money in Singapore dollars S$）。(9) 唯一性 unique keys：两个选项不能是同一个金额。如果 key 是 S$24，不能同时提供 S$24 和 S$36 作为「Wei 的份数」的正确答案在同一题中。(10) 第 15 周已教 2.1–2.2（ratios involving rational numbers, writing a ratio in its simplest form），本周教 2.3（problems involving ratio），本周完成官方 N2。本周不教 N3 percentage（百分数，那是更后面的内容）。打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-26": {
    title: "用字母表示数 — Using Letters to Represent Numbers",
    mathExample: "A number is n. 3 more than n is n + 3 (not 3n). Twice n is 2n or 2 × n (not n + 2). Wei has n dollars, spends S$5, amount left = n − 5 (not 5 − n).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 26 周，用字母表示数（using letters to represent numbers）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.1 using letters to represent numbers。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 23–25 周已完成 N4（Rate and Speed），本周开始 N5，只教 5.1 using letters to represent numbers（用字母表示数）。本周不教 5.2 interpreting notations（解读符号，如 ab, a², 3(x+y)），5.3 evaluation（代数式求值），5.4 translation（实际问题翻译），5.5 nth term，5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：A number is n. What is 3 more than n?  问孩子：'What do you think?' 等孩子思考后，解释：'A letter stands for a number. n is a number. 3 more than n means we add 3 to n. So it's n + 3.' 再写：'What if the story says \&quot;3 times n\&quot;? That's 3 × n, or we can write 2n for \&quot;twice n\&quot;. But 3 more than n is NOT 3n. 3 more than n is n + 3.' 让孩子看到今天的目标：学会用字母代表数（letters stand for numbers），写出简单的代数式（write simple algebraic expressions from statements like \&quot;3 more than n\&quot;, \&quot;5 less than n\&quot;, \&quot;twice n\&quot;, \&quot;half of n\&quot;）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Writing 3n when the story is \&quot;3 more than n\&quot;. ✗ Example: A number is n. What is 3 more than n? Wrong: 3n. Correct: n + 3. Rule: 3 more than n means add 3 to n, so n + 3. 3n means 3 times n (multiply), not 3 more than n.' 再写：'Fossil 2: Writing n + 3 when the story is \&quot;3 times n\&quot;. ✗ Example: A number is n. What is 3 times n? Wrong: n + 3. Correct: 3n or 3 × n. Rule: 3 times n means multiply n by 3, so 3n or 3 × n. n + 3 means 3 more than n (add), not 3 times n.' 再写：'Fossil 3: Writing 3 − n when the story is \&quot;n minus 3\&quot;. ✗ Example: A number is n. What is n minus 3? Wrong: 3 − n. Correct: n − 3. Rule: n minus 3 means subtract 3 from n, so n − 3. The order matters: n − 3 is not the same as 3 − n.' 再写：'Fossil 4: Treating the letter as a unit, not a number. ✗ Example: Reading n + 3 as \&quot;n 个加 3 个\&quot; (n units plus 3 units). Correct: n is a number (not a unit). n + 3 means the number n plus 3.' 让孩子跟读改正后的表达式 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（3 more than n）：Wei thinks of a number n. Write an expression for \&quot;3 more than n\&quot;. Show your working. 步骤：① Let the number be n. ② 3 more than n means n + 3. Answer: n + 3. (Note: n stands for the number Wei thinks of.) 例题 2（twice x）：Aisha has x sweets. Write an expression for \&quot;twice x\&quot;. Show your working. 步骤：① Let the number of sweets be x. ② Twice x means 2 × x or 2x. Answer: 2x. (Note: x stands for the number of sweets Aisha has.) 例题 3（n minus 5）：Wei has n dollars. He spends S$5. Write an expression for the amount Wei has left. Show your working. 步骤：① Let Wei's money be n dollars. ② Wei spends S$5. ③ Amount left = n − 5. Answer: n − 5. (Note: n stands for the number of dollars Wei has.) 让孩子理解共同点：字母代表一个数 letter stands for a number；从文字写出代数式 write the expression from words；本周只写表达式不代入数值 write the expression only, do not substitute a value this week (that's 5.3 evaluation)。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：A number is k. Write an expression for \&quot;5 less than k\&quot;. Show your working steps. 答案：① Let the number be k. ② 5 less than k means k − 5. Answer: k − 5. (Note: k stands for the number.) 题 2：Mr Lim has n students in his class. Write an expression for \&quot;twice n\&quot;. Show your working steps. 答案：① Let the number of students be n. ② Twice n means 2 × n or 2n. Answer: 2n. (Note: n stands for the number of students.) 题 3：Aisha has x dollars. She spends S$4 on lunch. Write an expression for the amount Aisha has left. Show your working steps. 答案：① Let Aisha's money be x dollars. ② Aisha spends S$4. ③ Amount left = x − 4. Answer: x − 4. (Note: x stands for the number of dollars Aisha has.) 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子写 3n 当题目是 \&quot;3 more than n\&quot;，指出：'3 more than n means add 3 to n, so n + 3 (not 3n). 3n means 3 times n.' 如果孩子写 5 − k 当题目是 \&quot;5 less than k\&quot;，指出：'5 less than k means subtract 5 from k, so k − 5 (not 5 − k). The order matters.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.1 using letters to represent numbers（用字母表示数），对应 preceding level 规则。第 23–25 周已完成 N4，本周开始 N5，只教 5.1。(3) 本周化石：writing 3n when the story is \&quot;3 more than n\&quot;（当应用题说&quot;n 多 3&quot;时错误地写 3n，正确应该是 n + 3）；writing n + 3 when the story is \&quot;3 times n\&quot;（当应用题说&quot;n 的 3 倍&quot;时错误地写 n + 3，正确应该是 3n）；writing 3 − n when the story is \&quot;n minus 3\&quot;（当应用题说&quot;n 减 3&quot;时错误地写 3 − n，正确应该是 n − 3）；treating the letter as a unit, not a number（把字母当单位而不是数）。(4) A letter stands for a number（字母代表一个数）。3 more than n is n + 3（不是 3n）。5 less than n is n − 5（不是 5 − n）。Twice n is 2n or 2 × n（不是 n + 2）。Half of n is n ÷ 2 or n/2（不是 n − 2）。(5) 本周只教写出表达式 write the expression，本周不教代入数值求值 substitute a value（那是 5.3 evaluation，后续周次内容）。本周不教 5.2 interpreting notations（解读符号，如 ab, a², 3(x+y)），5.3 evaluation，5.4 translation of real-world situations as a named 5.4 week，5.5 nth term，5.6–5.8 simplifying（那些是后续周次内容）。(6) 用友好的整数字母（friendly whole-number letters，如 n, x, k）。不用计算器（calculators are not allowed）。金额用新加坡元 S$（money in Singapore dollars S$）。(7) 唯一性 unique keys：两个选项不能是同一个表达式或同一个意思。n + 3 和 3n 是不同的表达式。2n 和 2 × n 是同一个意思。The fossil (3n when the story is n + 3, or n + 3 when the story is 3n) must be a WRONG option。(8) 打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-27": {
    title: "解读代数符号 — Interpreting Algebraic Notations",
    mathExample: "3y means 3 × y (not 3 + y). a² means a × a (not 2a). 3(x + y) means 3 × (x + y) (not 3x + y). ab means a × b (not a + b). a³ means a × a × a (not 3a).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 27 周，解读代数符号（interpreting algebraic notations）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.2 interpreting notations。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 26 周已完成 5.1（using letters to represent numbers），本周只教 5.2 interpreting notations（解读代数符号，官方大纲逐字引用：ab as a × b; a/b as a ÷ b; a² as a × a; a³ as a × a × a; a²b as a × a × b; 3y as 3 × y; 3(x + y) as 3 × (x + y); (3 + y)/5 as (3 + y) ÷ 5）。本周不教 5.3 evaluation（代入数值求值），5.4 translation，5.5 nth term，5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：3y。问孩子：'What does 3y mean?' 等孩子思考后，解释：'3y means 3 multiplied by y, or 3 × y. It does NOT mean 3 + y.' 再写：'If y = 4, then 3y = 3 × 4 = 12, not 3 + 4 = 7.' 再写：a²。问孩子：'What does a² mean?' 解释：'a² means a squared, which is a × a. It does NOT mean 2a or 2 × a.' 再写：'If a = 5, then a² = 5 × 5 = 25, not 2 × 5 = 10.' 让孩子看到今天的目标：学会解读代数符号（interpret algebraic notations），理解 ab, a², a³, a²b, 3y, 3(x + y), (3 + y)/5 等符号的正确意思（learn what each notation means）。本周只教符号代表什么 what the notation means，本周不代入数值求值 do not substitute values to evaluate（那是 5.3 evaluation，下周内容）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Reading 3y as 3 + y. ✗ Example: What does 3y mean? Wrong: 3 + y. Correct: 3 × y. Rule: 3y means 3 multiplied by y, not 3 plus y. If y = 4, then 3y = 3 × 4 = 12, not 3 + 4 = 7.' 再写：'Fossil 2: Reading ab as a + b. ✗ Example: What does ab mean? Wrong: a + b. Correct: a × b. Rule: ab means a multiplied by b, not a plus b.' 再写：'Fossil 3: Reading a² as 2a. ✗ Example: What does a² mean? Wrong: 2a or 2 × a. Correct: a × a. Rule: a² means a squared, which is a × a, not 2 times a. If a = 5, then a² = 5 × 5 = 25, not 2 × 5 = 10.' 再写：'Fossil 4: Reading a³ as 3a. ✗ Example: What does a³ mean? Wrong: 3a or 3 × a. Correct: a × a × a. Rule: a³ means a cubed, which is a × a × a, not 3 times a. If a = 2, then a³ = 2 × 2 × 2 = 8, not 3 × 2 = 6.' 再写：'Fossil 5: Reading 3(x + y) as 3x + y (dropping the bracket). ✗ Example: What does 3(x + y) mean? Wrong: 3x + y. Correct: 3 × (x + y). Rule: 3(x + y) means 3 multiplied by the sum (x + y), not 3 times x plus y. 3x + y is a different expression (it means 3 × x plus y, which is not the same as 3 multiplied by the whole sum). If x = 2 and y = 3, then 3(x + y) = 3 × (2 + 3) = 3 × 5 = 15, not 3 × 2 + 3 = 9.' 让孩子跟读改正后的符号意思 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（3y means 3 × y）：What does 3y mean? Show your working. 步骤：① The notation 3y means 3 multiplied by y. ② 3y = 3 × y. (Note: 3y does NOT mean 3 + y.) Answer: 3y means 3 × y. 例题 2（a² means a × a）：What does a² mean? Show your working. 步骤：① The notation a² means a squared. ② a² = a × a. (Note: a² does NOT mean 2a or 2 × a.) Answer: a² means a × a. 例题 3（3(x + y) means 3 × (x + y)）：What does 3(x + y) mean? Show your working. 步骤：① The notation 3(x + y) means 3 multiplied by the sum (x + y). ② 3(x + y) = 3 × (x + y). (Note: 3(x + y) does NOT mean 3x + y. That would drop the bracket. 3x + y means 3 × x plus y, which is different. If x = 2 and y = 3, then 3(x + y) = 3 × (2 + 3) = 3 × 5 = 15, but 3x + y = 3 × 2 + 3 = 6 + 3 = 9, so they are different. Also, 3x + 3y is the expanded form, which is skill 5.8 simplifying; we don't teach that this week.) Answer: 3(x + y) means 3 × (x + y). 让孩子理解共同点：每个代数符号有固定的意思 each notation has a fixed meaning；3y means 3 × y (not 3 + y)；a² means a × a (not 2a)；3(x + y) means 3 × (x + y) (not 3x + y)；本周只教符号代表什么 what the notation means，本周不代入数值求值 do not substitute values（那是 5.3 evaluation，下周内容）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 5 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：What does ab mean? Show your working steps. 答案：① The notation ab means a multiplied by b. ② ab = a × b. (Note: ab does NOT mean a + b.) Answer: ab means a × b. 题 2：What does a/b mean? Show your working steps. 答案：① The notation a/b means a divided by b. ② a/b = a ÷ b. Answer: a/b means a ÷ b. 题 3：What does a³ mean? Show your working steps. 答案：① The notation a³ means a cubed. ② a³ = a × a × a. (Note: a³ does NOT mean 3a or 3 × a.) Answer: a³ means a × a × a. 题 4：What does 5x mean? Show your working steps. 答案：① The notation 5x means 5 multiplied by x. ② 5x = 5 × x. (Note: 5x does NOT mean 5 + x.) Answer: 5x means 5 × x. 题 5：Wei says \&quot;3(x + y) means 3x + y\&quot;. Is Wei correct? Write what 3(x + y) means and explain why Wei's answer is wrong. Show your working steps. 答案：① Wei says 3(x + y) means 3x + y. ② Wei is NOT correct. ③ The notation 3(x + y) means 3 multiplied by the sum (x + y). ④ 3(x + y) = 3 × (x + y), not 3x + y. ⑤ If we drop the bracket and write 3x + y, that means 3 × x plus y, which is different from 3 multiplied by the whole sum (x + y). ⑥ For example, if x = 2 and y = 3, then 3(x + y) = 3 × (2 + 3) = 3 × 5 = 15, but 3x + y = 3 × 2 + 3 = 6 + 3 = 9, so they are different. Answer: Wei is NOT correct. 3(x + y) means 3 × (x + y), not 3x + y. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子写 3 + y 当 3y 的意思，指出：'3y means 3 × y (multiply), not 3 + y (add).' 如果孩子写 2a 当 a² 的意思，指出：'a² means a × a (a squared), not 2a (2 times a).' 如果孩子写 3x + y 当 3(x + y) 的意思，指出：'3(x + y) means 3 × (x + y) (3 multiplied by the whole sum), not 3x + y (which is 3 times x plus y, different from 3 multiplied by the whole sum).'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.2 interpreting notations（解读代数符号），对应 preceding level 规则。第 26 周已完成 5.1，本周只教 5.2。(3) 官方 5.2 wording（官方术语，逐字引用）：'• ab as a × b • a/b as a ÷ b or a × 1/b • a² as a × a, a³ as a × a × a, a²b as a × a × b • 3y as y + y + y or 3 × y • 3(x + y) as 3 × (x + y) • (3 + y)/5 as (3 + y) ÷ 5 or 1/5 × (3 + y)'。(4) 本周化石：reading 3y as 3 + y（把 3y 读成 3 + y，正确是 3 × y）；reading ab as a + b（把 ab 读成 a + b，正确是 a × b）；reading a² as 2a（把 a² 读成 2a，正确是 a × a）；reading a³ as 3a（把 a³ 读成 3a，正确是 a × a × a）；reading 3(x + y) as 3x + y (dropping the bracket)（把 3(x + y) 读成 3x + y，丢掉括号，正确是 3 × (x + y)；3x + y 是不同的表达式，它是 3 × x plus y，不等于 3 multiplied by the whole sum (x + y)。3x + 3y 是 expansion 5.8 后续内容，本周不教）。(5) ab means a × b（不是 a + b）。a/b means a ÷ b。a² means a × a（不是 2a）。a³ means a × a × a（不是 3a）。a²b means a × a × b。3y means 3 × y（不是 3 + y）。3(x + y) means 3 × (x + y)（不是 3x + y）。(3 + y)/5 means (3 + y) ÷ 5。(6) 本周只教 what each notation means（本周只教每个符号代表什么），本周不代入数值求值 do not substitute values（那是 5.3 evaluation，下周内容）。用友好的字母（friendly letters，如 a, b, x, y, k, n）。不用计算器（calculators are not allowed）。(7) 唯一性 unique keys：两个选项不能是同一个意思。Do not offer both 3 × y and y + y + y as two options when both are official readings of 3y（不要同时提供两个官方读法作为不同选项；选一个正确 prefer 3 × y，其他选项做成错误如 3 + y）。The fossil (3y as 3 + y, ab as a + b, a² as 2a, a³ as 3a, 3(x + y) as 3x + y) must be a WRONG option（化石错误值必须作为错误选项）。(8) 打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-28": {
    title: "代数式求值 — Evaluation of Algebraic Expressions",
    mathExample: "If a = 3: 2a = 2 × 3 = 6 (not 2 + 3 = 5). a² = 3 × 3 = 9 (not 2 × 3 = 6). 3(a + 2) = 3 × (3 + 2) = 3 × 5 = 15 (not 3 × 3 + 2 = 11). If x = 4, y = 2: 3(x + y) = 3 × (4 + 2) = 18 (not 3 × 4 + 2 = 14).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 28 周，代数式求值（evaluation of algebraic expressions and formulae）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.3 evaluation of algebraic expressions and formulae。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 26 周已完成 5.1（using letters to represent numbers），第 27 周已完成 5.2（interpreting notations），本周只教 5.3 evaluation of algebraic expressions and formulae（代数式求值）。本周不教 5.4 translation of real-world situations（实际问题翻译），5.5 nth term（第 n 项），5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：If a = 3, what is 2a?  问孩子：'What do you think?' 等孩子思考后，解释：'We substitute the given number for the letter. a = 3 means we replace a with 3. 2a means 2 × a. So 2a = 2 × 3 = 6.' 再写：'What if someone says 2a = 2 + 3 = 5? Is that correct?' 解释：'No. 2a means 2 × a, not 2 + a. So 2a = 2 × 3 = 6, not 2 + 3 = 5.' 让孩子看到今天的目标：学会代入数值求值（substitute a given number for the letter and evaluate the expression），结合 Week 27 学过的 notation meanings（2a means 2 × a, a² means a × a, 3(a + 2) means 3 × (a + 2)）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Evaluating 2a as 2 + a. ✗ Example: If a = 3, what is 2a? Wrong: 2a = 2 + 3 = 5. Correct: 2a = 2 × 3 = 6. Rule: 2a means 2 × a (multiply), not 2 + a (add).' 再写：'Fossil 2: Evaluating a² as 2a. ✗ Example: If a = 3, what is a²? Wrong: a² = 2a = 2 × 3 = 6. Correct: a² = a × a = 3 × 3 = 9. Rule: a² means a × a (a squared), not 2a (2 times a). If a = 3, then a² = 3 × 3 = 9, not 2 × 3 = 6.' 再写：'Fossil 3: Evaluating 3(a + 2) as 3a + 2 (dropping the bracket). ✗ Example: If a = 3, what is 3(a + 2)? Wrong: 3(a + 2) = 3a + 2 = 3 × 3 + 2 = 9 + 2 = 11. Correct: 3(a + 2) = 3 × (a + 2) = 3 × (3 + 2) = 3 × 5 = 15. Rule: 3(a + 2) means 3 × (a + 2) (3 multiplied by the whole sum), not 3a + 2 (which drops the bracket). The bracket means we must add first (3 + 2 = 5), then multiply by 3 (3 × 5 = 15).' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（evaluate 2a+1 when a=3）：Evaluate 2a + 1 when a = 3. Show your working. 步骤：① Given a = 3. ② 2a + 1 = 2 × 3 + 1. ③ = 6 + 1. ④ = 7. Answer: 7. (Note: 2a means 2 × a, not 2 + a. If we wrongly evaluate 2a as 2 + a, we get 2 + 3 = 5, which is WRONG. Correct: 2a = 2 × 3 = 6, then 2a + 1 = 6 + 1 = 7.) 例题 2（evaluate a² when a=3）：Evaluate a² when a = 3. Show your working. 步骤：① Given a = 3. ② a² = a × a = 3 × 3. ③ = 9. Answer: 9. (Note: a² means a × a, not 2a or 2 × a. If we wrongly evaluate a² as 2a = 2 × 3 = 6, which is WRONG. Correct: a² = 3 × 3 = 9.) 例题 3（evaluate 3(x+y) when x=4 y=2）：Evaluate 3(x + y) when x = 4 and y = 2. Show your working. 步骤：① Given x = 4 and y = 2. ② 3(x + y) = 3 × (x + y) = 3 × (4 + 2). ③ = 3 × 6. ④ = 18. Answer: 18. (Note: 3(x + y) means 3 × (x + y), not 3x + y. If we drop the bracket and evaluate 3x + y = 3 × 4 + 2 = 12 + 2 = 14, which is WRONG. Correct: 3(x + y) = 3 × (4 + 2) = 3 × 6 = 18.) 让孩子理解共同点：代入数值 substitute the given number；按运算顺序 follow order of operations BODMAS / PEMDAS（先括号，再乘除，后加减）；逐步计算 calculate step by step。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：If a = 3, evaluate 2a + 1. Show your working steps. 答案：① Given a = 3. ② 2a + 1 = 2 × 3 + 1. ③ = 6 + 1. ④ = 7. Answer: 7. 题 2：If a = 3, evaluate a². Show your working steps. 答案：① Given a = 3. ② a² = a × a = 3 × 3. ③ = 9. Answer: 9. 题 3：If x = 4 and y = 2, evaluate 3(x + y). Show your working steps. Then explain why evaluating 3(x + y) as 3x + y would be wrong. 答案：① Given x = 4 and y = 2. ② 3(x + y) = 3 × (x + y) = 3 × (4 + 2). ③ = 3 × 6. ④ = 18. Answer: 18. Explanation: If we drop the bracket and evaluate 3x + y instead, we get 3 × 4 + 2 = 12 + 2 = 14, which is WRONG. The bracket means we must add x and y first (4 + 2 = 6), then multiply by 3 (3 × 6 = 18). 3(x + y) is NOT the same as 3x + y. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子写 2a = 2 + 3 = 5，指出：'2a means 2 × a (multiply), not 2 + a (add). So 2a = 2 × 3 = 6, not 2 + 3 = 5.' 如果孩子写 a² = 2 × 3 = 6，指出：'a² means a × a (a squared), not 2a (2 times a). So a² = 3 × 3 = 9, not 2 × 3 = 6.' 如果孩子写 3(a + 2) = 3 × 3 + 2 = 11，指出：'3(a + 2) means 3 × (a + 2) (3 multiplied by the whole sum), not 3a + 2 (which drops the bracket). We add first: 3 + 2 = 5. Then multiply: 3 × 5 = 15. Not 3 × 3 + 2 = 11.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.3 evaluation of algebraic expressions and formulae（代数式求值），对应 preceding level 规则。第 26 周已完成 5.1，第 27 周已完成 5.2，本周只教 5.3 evaluation。(3) 本周化石：evaluating 2a as 2 + a（a=3 → 5 instead of 6）；evaluating a² as 2a（a=3 → 6 instead of 9）；evaluating 3(a + 2) as 3a + 2 (dropping the bracket)（a=3 → 11 instead of 15）。(4) 本周方法：Substitute a given number for the letter（代入给定数值，结合 Week 27 的 notation meanings）。If a = 3: 2a = 2 × 3 = 6（不是 2 + 3 = 5）; 2a + 1 = 2 × 3 + 1 = 7; a² = 3 × 3 = 9（不是 2 × 3 = 6）; 3(a + 2) = 3 × (3 + 2) = 3 × 5 = 15（不是 3 × 3 + 2 = 11）; a³ = 3 × 3 × 3 = 27; 5a − 2 = 5 × 3 − 2 = 13. If x = 4, y = 2: xy = 4 × 2 = 8; x + y = 4 + 2 = 6; 3(x + y) = 3 × (4 + 2) = 18; x² = 4 × 4 = 16. (5) 关键步骤：Step 1: Write \&quot;Given a = ...\&quot; (陈述已知：Given a = 3). Step 2: Substitute the number into the expression (代入数值：2a + 1 = 2 × 3 + 1). Step 3: Follow order of operations BODMAS / PEMDAS (遵循运算顺序：先括号 Brackets，再乘除 × ÷，后加减 + −). Step 4: Calculate step by step (逐步计算：2 × 3 = 6, then 6 + 1 = 7). Step 5: State the answer clearly (清楚陈述答案：Answer: 7). (6) 用友好的整数 friendly integers（如 a=3, x=4, y=2, n=5）。不用计算器 no calculator。金额如涉及用新加坡元 S$（money in Singapore dollars S$）。(7) 唯一性 unique keys：两个选项不能是同一个数值（除非题目是&quot;which working&quot;）。The fossil (2a as 2+a=5; a² as 2a=6; 3(a+2) as 3a+2=11) must be a WRONG option（化石错误值必须作为错误选项）。(8) 打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-29": {
    title: "生活情境写成代数式 — Translation of Real-World Situations into Algebraic Expressions",
    mathExample: "Wei has n dollars, spends S$5 → n − 5 (not n + 5). k tickets at S$3 each → 3k (not k + 3). n books at S$4 each plus S$2 postage → 4n + 2. Rectangle length x width 3 perimeter → 2(x + 3).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 29 周，生活情境写成代数式（translation of simple real-world situations into algebraic expressions）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.4 translation of simple real-world situations into algebraic expressions。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 26–28 周已完成 5.1–5.3（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions），本周只教 5.4 translation of simple real-world situations into algebraic expressions（将简单的现实情境翻译为代数式）。本周不教 5.5 finding the value of an unknown (nth term)，5.6–5.8 simplifying algebraic expressions（化简代数式）。这些是后续周次内容。不用计算器，要写出推理步骤。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：Wei has n dollars and spends S$5. How much does he have left?  问孩子：'What do you think the expression is?' 等孩子思考后，解释：'We turn the real-world sentence into an algebraic expression. Wei has n dollars. He spends S$5. Spending means we subtract 5. So the amount left = n − 5.' 再写：'What if someone says the amount left is n + 5? Is that correct?' 解释：'No. Spending means subtract, not add. So n − 5, not n + 5.' 让孩子看到今天的目标：学会将现实情境句子翻译为代数式（translation of simple real-world situations into algebraic expressions），using Week 26–27 notation（用第 26–27 周学过的字母表示数和符号解读）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Writing n + 5 when he spends S$5. ✗ Example: Wei has n dollars and spends S$5. Wrong: Amount left = n + 5. Correct: Amount left = n − 5. Rule: Spending means subtract (花掉是减), not add (不是加). When Wei spends S$5, we subtract 5, so n − 5, not n + 5.' 再写：'Fossil 2: Treating \&quot;each\&quot; as + not ×. ✗ Example: A ticket costs S$3. Wei buys k tickets. What is the total cost? Wrong: Total cost = k + 3. Correct: Total cost = 3k. Rule: \&quot;Each\&quot; means multiply (\&quot;每个\&quot;是乘), not add (不是加). k tickets at S$3 each = 3 × k = 3k, not k + 3.' 再写：'Fossil 3: Writing 2x + 3 for perimeter instead of 2(x + 3). ✗ Example: A rectangle has length x cm and width 3 cm. What is the perimeter? Wrong: Perimeter = 2x + 3. Correct: Perimeter = 2(x + 3) or 2x + 6. Rule: Perimeter = 2 × (length + width) = 2(x + 3). We can also expand it to 2x + 6 (that's 5.8 simplifying, later content), but this week we prefer 2(x + 3) as \&quot;twice the sum\&quot;. 2x + 3 is WRONG because it's only 2 × length plus width, not twice the sum of both.' 让孩子跟读改正后的推理步骤 2 次。",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（Wei has n dollars spends S$5 amount left）：Wei has n dollars and spends S$5. Write an expression for the amount Wei has left. Show your working. 步骤：① Let Wei's money be n dollars. ② Wei spends S$5. ③ Amount left = n − 5. Answer: n − 5. (Note: n stands for the number of dollars Wei has. When Wei spends S$5, we subtract 5, so n − 5. Not n + 5.) 例题 2（k tickets at S$3 each）：A ticket costs S$3. Aisha buys k tickets. Write an expression for the total cost. Show your working. 步骤：① Let the number of tickets be k. ② Each ticket costs S$3. ③ Total cost = 3 × k = 3k. Answer: 3k. (Note: k stands for the number of tickets. \&quot;Each\&quot; means multiply, so 3k. Not k + 3.) 例题 3（n books at S$4 each plus S$2 postage）：Wei buys n books at S$4 each. Postage costs S$2. Write an expression for the total cost. Show your working. 步骤：① Let the number of books be n. ② Each book costs S$4. ③ Cost of books = 4 × n = 4n. ④ Postage = S$2. ⑤ Total cost = 4n + 2. Answer: 4n + 2. (Note: n stands for the number of books. Books cost 4n, plus postage S$2, so 4n + 2.) 让孩子理解共同点：将现实情境句子转化为代数式 translate real-world sentences into expressions（using Week 26–27 notation: n, k, x; +, −, ×; spending 是减，\&quot;each\&quot; 是乘，plus 是加）。用友好的字母 friendly letters（如 n, k, x）。不用计算器 no calculator。金额用新加坡元 S$ (money in Singapore dollars S$)。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei has n dollars in his wallet. He spends S$5 on lunch. Write an expression for the amount of money Wei has left. Show your working and write what n stands for. 答案：① Let Wei's money be n dollars. ② Wei spends S$5. ③ Amount left = n − 5. Answer: n − 5. (Note: n stands for the number of dollars Wei has.) 题 2：Aisha goes to a shop. A pen costs S$3. She buys k pens. Write an expression for the total cost in S$. Show your working and write what k stands for. 答案：① Let the number of pens be k. ② Each pen costs S$3. ③ Total cost = 3 × k = 3k. Answer: 3k. (Note: k stands for the number of pens.) 题 3：Mr Lim buys n books at S$4 each. The postage costs S$2. (i) Write an expression for the total cost in S$. Show your working. (ii) Write what n stands for. 答案：① Let the number of books be n. ② Each book costs S$4. ③ Cost of books = 4 × n = 4n. ④ Postage = S$2. ⑤ Total cost = 4n + 2. Answer: 4n + 2. (Note: n stands for the number of books.) 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps'）。如果孩子写 n + 5 when spending S$5，指出：'Spending means subtract (花掉是减), not add (不是加). So n − 5, not n + 5.' 如果孩子写 k + 3 for k tickets at S$3 each，指出：'\&quot;Each\&quot; means multiply (\&quot;每个\&quot;是乘), not add (不是加). So 3k, not k + 3.' 如果孩子写 2x + 3 for perimeter，指出：'Perimeter = 2 × (length + width) = 2(x + 3), not 2x + 3. We can also expand it to 2x + 6 (that's 5.8 simplifying, later content), but this week we prefer 2(x + 3) as \&quot;twice the sum\&quot;.' 如果孩子混淆，提醒：'Read the sentence carefully. Wei has n dollars and spends S$5. Spending means we subtract 5, so n − 5. k tickets at S$3 each means 3 × k = 3k. n books at S$4 each plus S$2 postage means 4n + 2.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.4 translation of simple real-world situations into algebraic expressions（将简单的现实情境翻译为代数式），对应 preceding level 规则。第 26–28 周已完成 5.1–5.3，本周只教 5.4 translation（生活情境写成代数式）。(3) 本周化石：writing 3k when the story is \&quot;S$3 more than k\&quot;（当应用题说&quot;比 k 多 S$3&quot;时错误地写 3k，正确应该是 k + 3）；writing n + 5 when he spends S$5（当他花掉 S$5 时错误地写 n + 5，正确应该是 n − 5）；writing 2x + 3 for perimeter instead of 2(x + 3)（周长错误地写 2x + 3，正确应该是 2(x + 3)）；treating \&quot;each\&quot; as + not ×（把&quot;每个&quot;当作加法而不是乘法）。(4) 本周方法：Turn a short real-world sentence into an expression（将现实情境句子转化为代数式），using Week 26–27 notation。Wei has n dollars and spends S$5 → n − 5（spending 是减，不是加，不是 n + 5）。k tickets at S$3 each → 3k（\&quot;each\&quot; 是乘，不是加，不是 k + 3）。n years old, in 4 years → n + 4。Rectangle length x width 3 perimeter → 2(x + 3) or 2x + 6，pick ONE（本周优先 2(x + 3) as \&quot;twice the sum\&quot;；2x+6 is 5.6/5.8 simplifying 后续内容）。n books at S$4 each plus S$2 postage → 4n + 2（books 4n，plus postage S$2，so 4n + 2）。(5) 关键步骤：Step 1: Read the sentence carefully and identify what the letter stands for (仔细读题，确定字母代表什么). Step 2: Let the letter stand for the quantity (设字母代表这个量：Let Wei's money be n dollars; let the number of tickets be k). Step 3: Translate the sentence into an expression (将句子翻译为代数式：spends S$5 → subtract 5, so n − 5; k tickets at S$3 each → multiply 3 by k, so 3k; n books at S$4 each plus S$2 postage → 4n + 2). Step 4: State what the letter stands for (陈述字母代表什么：n stands for the number of dollars Wei has; k stands for the number of tickets; n stands for the number of books). Step 5: Check the expression matches the story (检验表达式是否匹配题意：if Wei has n dollars and spends S$5, does he have n − 5 left? Yes ✓. Does he have n + 5? No, spending means subtract, not add). (6) Friendly letters（用友好的字母，如 n, k, x）。No calculator（不用计算器）。金额用新加坡元 S$（money in Singapore dollars S$，never 美元）。(7) 唯一性 unique keys：两个选项不能是同一个意思（2n and 2 × n as two options is a fail; 2(x+3) and 2x+6 as two options is a fail）。n − 5 and 5 − n must not both be marked correct（n − 5 和 5 − n 不能同时标记为正确）。The fossil is a WRONG option（化石错误值必须作为错误选项）。(8) 打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤（show working steps），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-30": {
    title: "找第 n 项的代数式 — Finding an Algebraic Expression for the nth Term",
    mathExample: "2, 4, 6, 8, … → nth term = 2n. 3, 5, 7, 9, … → nth term = 2n + 1 (not n + 2). Check: n=1 → 3 ✓, n=2 → 5 ✓. Fossil: n + 2 gives n=2 → 4 ✗. 4, 7, 10, 13, … → nth term = 3n + 1.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 30 周，找第 n 项的代数式（recognising and representing patterns/relationships by finding an algebraic expression for the nth term）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 26–29 周已完成 5.1–5.4（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions、translation of simple real-world situations into algebraic expressions），本周只教 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term（找第 n 项的代数式）。本周不教 5.6 addition and subtraction of linear expressions（线性表达式加减），5.7 simplification（化简），5.8 brackets and common factors（括号和公因数）。这些是后续周次内容。不用计算器，要写出推理步骤和检验（check n=1 and n=2）。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：2, 4, 6, 8, …  问孩子：'What pattern do you see?' 等孩子思考后，解释：'The sequence increases by 2 each time. We call this the common difference: d = 2. The first term is 2. We can find the nth term using the formula: nth term = a + (n − 1)d, where a is the first term and d is the common difference. So nth term = 2 + (n − 1) × 2 = 2 + 2n − 2 = 2n.' 再写：'Let's check: When n = 1, 2n = 2 × 1 = 2 ✓. When n = 2, 2n = 2 × 2 = 4 ✓.' 让孩子看到今天的目标：学会找简单线性数列的第 n 项（find the nth term of a simple linear sequence），并用 n=1 和 n=2 检验。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下常见混淆：'Fossil 1: Writing n + 2 for 3, 5, 7, 9. ✗ Example: 3, 5, 7, 9, … Wrong: nth term = n + 2. Check: n=1 → 1 + 2 = 3 ✓, but n=2 → 2 + 2 = 4 ✗ (should be 5). Correct: nth term = 2n + 1. Check: n=1 → 2 × 1 + 1 = 3 ✓, n=2 → 2 × 2 + 1 = 5 ✓. Rule: n + 2 is the common difference, not the nth term. The common difference is 2 (每次增加 2), so the coefficient of n is 2, giving 2n + 1, not n + 2.' 再写：'Fossil 2: Using the first term as the formula (always 3). ✗ Example: 3, 5, 7, 9, … Wrong: nth term = 3. This would give 3 for all positions, not just n=1. Rule: The nth term must give different values for different n. Use the formula a + (n − 1)d and simplify.' 再写：'Fossil 3: Writing 2n for 3, 5, 7, 9. ✗ Example: 3, 5, 7, 9, … Wrong: nth term = 2n. Check: n=1 → 2 × 1 = 2 ✗ (should be 3). Correct: nth term = 2n + 1. Rule: The common difference is 2, so we have 2n, but the first term is 3, not 2, so we need to adjust: 2n + 1.' 再写：'Fossil 4: Treating n as \&quot;the next term\&quot; not the position. ✗ Rule: n is the position in the sequence (第 1 项, 第 2 项, 第 3 项…), not the value of the next term. When n = 1, we get the 1st term. When n = 2, we get the 2nd term.'",
      },
      {
        name: "例题",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤并检验）。例题 1（2, 4, 6, 8）：Find the nth term of the sequence 2, 4, 6, 8, … Show your working and check for n = 1 and n = 2. 步骤：① Identify the pattern: The sequence increases by 2 each time. ② Common difference d = 2. ③ First term a = 2. ④ nth term = a + (n − 1)d = 2 + (n − 1) × 2 = 2 + 2n − 2 = 2n. ⑤ Check: When n = 1, 2n = 2 × 1 = 2 ✓. When n = 2, 2n = 2 × 2 = 4 ✓. Answer: 2n. (Note: The sequence increases by 2 each time, so the nth term is 2n. When n = 1, we get 2, the first term. When n = 2, we get 4, the second term.) 例题 2（3, 5, 7, 9）：Find the nth term of the sequence 3, 5, 7, 9, … Show your working and check for n = 1 and n = 2. 步骤：① Identify the pattern: The sequence increases by 2 each time. ② Common difference d = 2. ③ First term a = 3. ④ nth term = a + (n − 1)d = 3 + (n − 1) × 2 = 3 + 2n − 2 = 2n + 1. ⑤ Check: When n = 1, 2n + 1 = 2 × 1 + 1 = 3 ✓. When n = 2, 2n + 1 = 2 × 2 + 1 = 5 ✓. Answer: 2n + 1. (Note: Do NOT write n + 2. Although n + 2 gives 3 when n = 1, it gives 4 when n = 2, not 5. So n + 2 is wrong. The correct nth term is 2n + 1.) 例题 3（4, 7, 10, 13）：Find the nth term of the sequence 4, 7, 10, 13, … Show your working and check for n = 1 and n = 2. 步骤：① Identify the pattern: The sequence increases by 3 each time. ② Common difference d = 3. ③ First term a = 4. ④ nth term = a + (n − 1)d = 4 + (n − 1) × 3 = 4 + 3n − 3 = 3n + 1. ⑤ Check: When n = 1, 3n + 1 = 3 × 1 + 1 = 4 ✓. When n = 2, 3n + 1 = 3 × 2 + 1 = 7 ✓. Answer: 3n + 1. (Note: The common difference is 3, so the coefficient of n is 3. The first term is 4, so we adjust to 3n + 1.) 让孩子理解共同点：找简单线性数列的第 n 项 find the nth term of a simple linear sequence，用公式 nth term = a + (n − 1)d 化简为 pn + q 的形式，并用 n=1 和 n=2 检验（check by substituting n = 1 and n = 2）。用友好的整数 friendly integers。不用计算器 no calculator。不用二次数列 do not use quadratic sequences。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤并检验。家长可以用手机拍照孩子的推理。题 1：Find the nth term of the sequence 2, 4, 6, 8, … Show your working and check your answer for n = 1 and n = 2. 答案：① Identify the pattern: The sequence increases by 2 each time. ② Common difference d = 2. ③ First term a = 2. ④ nth term = a + (n − 1)d = 2 + (n − 1) × 2 = 2 + 2n − 2 = 2n. ⑤ Check: When n = 1, 2n = 2 × 1 = 2 ✓. When n = 2, 2n = 2 × 2 = 4 ✓. Answer: 2n. 题 2：Wei writes the sequence 3, 5, 7, 9, … (i) Find the nth term. Show your working. (ii) Check your answer by substituting n = 1 and n = 2. (iii) Aisha says the nth term is n + 2. Explain why this is wrong. 答案：(i) ① Identify the pattern: The sequence increases by 2 each time. ② Common difference d = 2. ③ First term a = 3. ④ nth term = a + (n − 1)d = 3 + (n − 1) × 2 = 3 + 2n − 2 = 2n + 1. Answer: 2n + 1. (ii) Check: When n = 1, 2n + 1 = 2 × 1 + 1 = 3 ✓. When n = 2, 2n + 1 = 2 × 2 + 1 = 5 ✓. (iii) Aisha's answer n + 2 is wrong because when n = 2, n + 2 = 2 + 2 = 4, but the 2nd term is 5, not 4. The correct nth term is 2n + 1. 题 3：Aisha writes the sequence 4, 7, 10, 13, … Find the nth term. Show your working and check your answer for n = 1 and n = 2. 答案：① Identify the pattern: The sequence increases by 3 each time. ② Common difference d = 3. ③ First term a = 4. ④ nth term = a + (n − 1)d = 4 + (n − 1) × 3 = 4 + 3n − 3 = 3n + 1. ⑤ Check: When n = 1, 3n + 1 = 3 × 1 + 1 = 4 ✓. When n = 2, 3n + 1 = 3 × 2 + 1 = 7 ✓. Answer: 3n + 1. 教师巡看孩子的推理，纠正格式（如果孩子只写答案不写步骤，提醒 'AEIS 官方要求写出 working steps and check your answer'）。如果孩子写 n + 2 for 3, 5, 7, 9，指出：'Check n = 2: n + 2 = 2 + 2 = 4, but the 2nd term is 5, not 4. So n + 2 is wrong. The correct nth term is 2n + 1.' 如果孩子写 2n for 3, 5, 7, 9，指出：'Check n = 1: 2n = 2 × 1 = 2, but the 1st term is 3, not 2. So 2n is wrong. The correct nth term is 2n + 1.' 如果孩子混淆，提醒：'Use the formula: nth term = a + (n − 1)d. For 3, 5, 7, 9, a = 3, d = 2. So nth term = 3 + (n − 1) × 2 = 3 + 2n − 2 = 2n + 1. Then check: n = 1 → 3 ✓, n = 2 → 5 ✓.'",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term（识别和表示模式/关系，找到第 n 项的代数式），对应 preceding level 规则。第 26–29 周已完成 5.1–5.4，本周只教 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term（找第 n 项）。(3) 本周化石：writing n + 2 for 3, 5, 7, 9（错误地写 n + 2，这只是公差，不是第 n 项；正确应该是 2n + 1）；using the first term as the formula (always 3)（把第一项当作公式，永远是 3）；writing 2n for 3, 5, 7, 9（错误地写 2n，n=1 → 2 不是 3）；treating n as \&quot;the next term\&quot; not the position（把 n 当作&quot;下一项&quot;而不是位置）。(4) 本周方法：Find the nth term of a simple linear sequence（找简单线性数列的第 n 项）。Common difference d, first term a: nth term = a + (n − 1)d, then simplify to pn + q. 2, 4, 6, 8, … → nth term = 2n（公差 d = 2，第一项 a = 2，nth term = 2 + (n − 1) × 2 = 2n）。3, 5, 7, 9, … → nth term = 2n + 1（公差 d = 2，第一项 a = 3，nth term = 3 + (n − 1) × 2 = 2n + 1，不是 n + 2）。4, 7, 10, 13, … → nth term = 3n + 1（公差 d = 3，第一项 a = 4，nth term = 4 + (n − 1) × 3 = 3n + 1）。5, 8, 11, 14, … → nth term = 3n + 2. (5) 关键步骤：Step 1: Identify the pattern and find the common difference d (找出规律，确定公差 d：每次增加多少). Step 2: Identify the first term a (确定第一项 a). Step 3: Use the formula nth term = a + (n − 1)d and simplify to pn + q (使用公式 nth term = a + (n − 1)d，化简为 pn + q 的形式). Step 4: Check by substituting n = 1 and n = 2 (检验：代入 n = 1 和 n = 2，看是否得到数列的第一项和第二项). Step 5: State the final answer (陈述最终答案). (6) Friendly integers（用友好的整数）。No calculator（不用计算器）。Do not use quadratic sequences（不用二次数列）。(7) 唯一性 unique keys：两个选项不能是同一个表达式或同一组值（Two options must not be the same expression or the same sequence of values）。For 3, 5, 7, 9 do not offer both 2n + 1 and n + 2 as two \&quot;correct\&quot; options（对于 3, 5, 7, 9，不要同时提供 2n + 1 和 n + 2 作为两个&quot;正确&quot;选项）— n + 2 is the fossil and is WRONG（n + 2 是化石错误，是错的）。Check every formula at n=1 and n=2 before keying it（在录入每个公式前检查 n=1 和 n=2）。(8) 打开 /learn 页面，告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写算式部分要写出推理步骤并检验（show working steps and check n=1 and n=2），模拟 AEIS Part 2 格式。我们会在微信群里同步进度。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-31": {
    title: "一次式加减 — Addition and Subtraction of Linear Expressions",
    mathExample: "(2x + 3) + (x + 5) = 3x + 8. (3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3 (not 2x + 4). Fossil: 2x + 4 (only subtracted first term). (4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9 (not 2x + 3). Fossil: 2x + 3 (forgot −(−3) = +3).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。对家长说：「今天教中学 AEIS 数学第 31 周，一次式加减（addition and subtraction of linear expressions）。本周是 Sec 1 数学卷型样本，内容对应前一级 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.6 addition and subtraction of linear expressions。官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA。SEAB 官方规则：申请 Sec 2 入学的孩子需熟悉 Sec 2 前一级（Sec 1）的内容。第 26–30 周已完成 5.1–5.5（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions、translation of simple real-world situations into algebraic expressions、recognising and representing patterns/relationships by finding an algebraic expression for the nth term），本周只教 5.6 addition and subtraction of linear expressions（一次式加减）。本周不教 5.7 simplification of linear algebraic expressions such as −2(3x − 5) + 4x（一次代数式化简），5.8 use of brackets and extraction of common factors（括号的使用和提取公因数）。这些是后续周次内容。不用计算器，要写出推理步骤。减法时要改变第二个括号中每一项的符号（change the sign of every term in the expression after a minus）。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板上写：(2x + 3) + (x + 5)  问孩子：'How do we add these two expressions?' 等孩子思考后，解释：'We collect like terms（合并同类项）。For the x terms: 2x + x = 3x. For the constant terms: 3 + 5 = 8. So (2x + 3) + (x + 5) = 3x + 8.' 再写：(3x + 4) − (x + 1)  解释：'When subtracting, we must change the sign of EVERY term in the bracket after the minus（减法时，改变减号后面每一项的符号）。So (3x + 4) − (x + 1) = 3x + 4 − x − 1. Now collect like terms: 3x − x = 2x, and 4 − 1 = 3. Answer: 2x + 3.' 让孩子看到今天的目标：学会通过合并同类项来加减两个一次式（add or subtract two linear expressions by collecting like terms），减法时记得改变第二个括号中每一项的符号。",
      },
      {
        name: "化石",
        duration: "3 分钟",
        teacherNotes: "在白板上写化石错误：(3x + 4) − (x + 1) = 2x + 4 ✗  解释：'This is wrong because we only subtracted the first term（只减了第一项）。When we subtract, we must change the sign of EVERY term: −(x + 1) = −x − 1, not −x + 1. So (3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3, not 2x + 4.' 再写：(4x + 6) − (2x − 3) = 2x + 3 ✗  解释：'This is wrong because we forgot to change the sign of −3. When we subtract −(2x − 3), we get −2x + 3（减号改变了 −3 变成 +3）. So (4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9, not 2x + 3.' 强调：'减法时，改变第二个括号中每一项的符号。−(x + 1) = −x − 1. −(2x − 3) = −2x + 3. The minus sign flips every term inside the bracket.'",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（(2x + 3) + (x + 5) addition）：Simplify (2x + 3) + (x + 5). Show your working. 步骤：① Collect the x terms: 2x + x = 3x. ② Collect the constant terms: 3 + 5 = 8. ③ Answer: 3x + 8. (Note: We add the coefficients of like terms. 2x + x = 3x. 3 + 5 = 8.) 例题 2（(3x + 4) − (x + 1) subtraction）：Simplify (3x + 4) − (x + 1). Show your working. 步骤：① Change the sign of every term in the bracket after the minus: (3x + 4) − (x + 1) = 3x + 4 − x − 1. ② Collect the x terms: 3x − x = 2x. ③ Collect the constant terms: 4 − 1 = 3. ④ Answer: 2x + 3. (Note: When subtracting, change the sign of EVERY term in the second bracket: −(x + 1) = −x − 1, not −x + 1. Common fossil: writing 2x + 4 or 2x + 5. The correct answer is 2x + 3.) 例题 3（(4x + 6) − (2x − 3) subtraction with inner minus）：Simplify (4x + 6) − (2x − 3). Show your working. 步骤：① Change the sign of every term in the bracket after the minus: (4x + 6) − (2x − 3) = 4x + 6 − 2x + 3. ② Collect the x terms: 4x − 2x = 2x. ③ Collect the constant terms: 6 + 3 = 9. ④ Answer: 2x + 9. (Note: When subtracting, −(2x − 3) = −2x + 3. The minus sign changes −3 to +3. Common fossil: writing 2x + 3 instead of 2x + 9 by forgetting to change the sign of −3.)",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Simplify (2x + 5) + (3x + 4). Show your working. 答案：① Collect the x terms: 2x + 3x = 5x. ② Collect the constant terms: 5 + 4 = 9. ③ Answer: 5x + 9. (Note: We add the coefficients of like terms.) 题 2：Simplify (4x + 7) − (x + 2). Show your working. Aisha writes (4x + 7) − (x + 2) = 3x + 9. Explain why this is wrong and what the correct answer should be. 答案：① Change the sign of every term: (4x + 7) − (x + 2) = 4x + 7 − x − 2. ② Collect like terms: 4x − x = 3x, 7 − 2 = 5. ③ Answer: 3x + 5. ④ Aisha's answer 3x + 9 is wrong because she did not change the sign of +2 to −2 when subtracting. She wrote 4x + 7 − x + 2 instead of 4x + 7 − x − 2. The correct answer is 3x + 5, not 3x + 9. 题 3：Mr Lim gives the expression (5x + 8) − (2x − 3). (i) Simplify the expression. Show your working. (ii) Explain why the answer is NOT 3x + 5. 答案：(i) ① Change the sign of every term: (5x + 8) − (2x − 3) = 5x + 8 − 2x + 3. ② Collect like terms: 5x − 2x = 3x, 8 + 3 = 11. ③ Answer: 3x + 11. (ii) The answer is NOT 3x + 5 because when we subtract −(2x − 3), we must change the sign of EVERY term. −(−3) = +3, not −3. So we have 8 + 3 = 11, not 8 − 3 = 5. The correct answer is 3x + 11.",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.6 addition and subtraction of linear expressions（一次式加减），对应 preceding level 规则。第 26–30 周已完成 5.1–5.5，本周只教 5.6 addition and subtraction（一次式加减）。(3) 本周化石：subtracting only the first term（只减第一项）：(3x + 4) − (x + 1) → 2x + 4 or 2x + 5（错误，应该是 2x + 3）；forgetting to change the sign of the second term after a minus（忘记改变第二项符号）：(4x + 6) − (2x − 3) → 2x + 3（错误，应该是 2x + 9，因为 −(−3) = +3）；adding coefficients of unlike terms（把不同类项的系数相加）：x + 3 → 4x。(4) 本周方法：Add or subtract two linear expressions by collecting like terms（通过合并同类项来加减两个一次式）。Change the sign of every term in the expression after a minus（减法时，改变减号后面每一项的符号）。(2x + 3) + (x + 5) = 3x + 8（加法：直接合并）。(3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3（减法：改变第二个括号中每一项的符号）。(4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9（关键：−(−3) = +3）。本周不教 5.7 simplification such as −2(3x − 5) + 4x（展开括号化简），5.8 use of brackets and extraction of common factors（括号的使用和提取公因数）。Friendly integers。No calculator。写出算式步骤。(5) 下周课前请孩子完成第 31 周 app 作业（5 道选择 + 8 道选择 + 3 道 show working）。家长微信看每周进度通报，app 作业练对了就 OK，练错了说明题目难度合适需要本周反复练。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-32": {
    title: "一次式化简 — Simplification of linear expressions",
    mathExample: "−2(3x − 5) + 4x = −6x + 10 + 4x = −2x + 10",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 一次式化简：展开括号再合并同类项。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N5.7 simplification of linear expressions such as −2(3x − 5) + 4x。本周重点是展开括号时，负数乘以负数等于正数（negative times negative is positive）。」提醒家长可以在旁边观摩，但请让孩子自己动笔写算式。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写一个简单的例子：2(x + 3)。问孩子：「这个式子怎么展开？」引导孩子说出：2 × x = 2x，2 × 3 = 6，所以 2(x + 3) = 2x + 6。再写一个：3(x − 2)。引导孩子说出：3 × x = 3x，3 × (−2) = −6，所以 3(x − 2) = 3x − 6。强调：括号外的数要乘以括号内的每一项（multiply the number outside by EVERY term inside）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：−2(3x − 5) = −6x − 10（标记为 ✗）。问孩子：「这个展开对吗？」等孩子思考后，圈出错误部分 −10。解释：−2 乘以 −5 应该是 +10，不是 −10。负数乘以负数等于正数（negative times negative is positive）。改正后写：−2(3x − 5) = −6x + 10（标记为 ✓）。让孩子跟读改正后的步骤 3 次：−2 × 3x = −6x，−2 × (−5) = +10，所以 −2(3x − 5) = −6x + 10。再写一个错误例子：4x − 2(3x − 5) = 4x − 6x − 10（标记为 ✗）。问孩子：「这个对吗？」引导孩子发现 −2 × (−5) 应该是 +10，不是 −10。改正：4x − 2(3x − 5) = 4x − 6x + 10 = −2x + 10（标记为 ✓）。让孩子跟读 3 次。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（−2(3x − 5) + 4x simplification）：Simplify −2(3x − 5) + 4x. Show your working. 步骤：① Expand the bracket: −2(3x − 5) = −2 × 3x + (−2) × (−5) = −6x + 10. ② Write: −2(3x − 5) + 4x = −6x + 10 + 4x. ③ Collect like terms: −6x + 4x = −2x. ④ Answer: −2x + 10. (Note: When multiplying −2 by the bracket, multiply −2 by EVERY term inside. −2 × 3x = −6x. −2 × (−5) = +10, not −10. Negative times negative is positive. Common fossil: writing −6x − 10 instead of −6x + 10, or writing the final answer as −2x − 10 instead of −2x + 10.) 例题 2（2(3x − 5) + 4x simplification）：Simplify 2(3x − 5) + 4x. Show your working. 步骤：① Expand the bracket: 2(3x − 5) = 2 × 3x + 2 × (−5) = 6x − 10. ② Write: 2(3x − 5) + 4x = 6x − 10 + 4x. ③ Collect like terms: 6x + 4x = 10x. ④ Answer: 10x − 10. (Note: 2 × (−5) = −10, not +10.) 例题 3（3(x + 2) − 2(x − 1) simplification with two brackets）：Simplify 3(x + 2) − 2(x − 1). Show your working. 步骤：① Expand the first bracket: 3(x + 2) = 3x + 6. ② Expand the second bracket: −2(x − 1) = −2x + 2. ③ Write: 3(x + 2) − 2(x − 1) = 3x + 6 − 2x + 2. ④ Collect like terms: 3x − 2x = x, 6 + 2 = 8. ⑤ Answer: x + 8. (Note: −2 × (−1) = +2, not −2.)",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Simplify 2(x + 3) + 4x. Show your working. 答案：① Expand the bracket: 2(x + 3) = 2x + 6. ② Write: 2(x + 3) + 4x = 2x + 6 + 4x. ③ Collect like terms: 2x + 4x = 6x. ④ Answer: 6x + 6. (Note: Expand first, then collect like terms.) 题 2：Wei simplifies −2(3x − 5) + 4x. (i) Show your working and write the simplified answer. (ii) Aisha writes −2(3x − 5) + 4x = −6x − 10 + 4x = −2x − 10. Explain why this is wrong and what the correct answer should be. 答案：(i) ① Expand the bracket: −2(3x − 5) = −2 × 3x + (−2) × (−5) = −6x + 10. ② Write: −2(3x − 5) + 4x = −6x + 10 + 4x. ③ Collect like terms: −6x + 4x = −2x. ④ Answer: −2x + 10. (ii) Aisha's answer −2x − 10 is wrong because she expanded −2(3x − 5) as −6x − 10 instead of −6x + 10. She forgot that −2 × (−5) = +10, not −10. Negative times negative is positive. The correct answer is −2x + 10, not −2x − 10. 题 3：Mr Lim gives the expression 3(x + 2) − 2(x − 1). Simplify the expression. Show your working. 答案：① Expand the first bracket: 3(x + 2) = 3x + 6. ② Expand the second bracket: −2(x − 1) = −2x + 2. ③ Write: 3(x + 2) − 2(x − 1) = 3x + 6 − 2x + 2. ④ Collect like terms: 3x − 2x = x, 6 + 2 = 8. ⑤ Answer: x + 8. (Note: −2 × (−1) = +2, not −2. Expand both brackets first, then collect like terms.)",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.7 simplification of linear expressions such as −2(3x − 5) + 4x ; 2x/3 − 3(x − 5)/2（一次式化简：展开括号再合并同类项），对应 preceding level 规则。第 26–31 周已完成 5.1–5.6，本周只教 5.7 simplification of linear expressions（一次式化简）。(3) 本周化石：−2(3x − 5) = −6x − 5 or −6x − 10（错误：忘记负负得正 negative times negative is positive，正确是 −6x + 10，因为 −2 × (−5) = +10）；4x − 2(3x − 5) = 4x − 6x − 10（错误：忘记 −2 × (−5) = +10，写成了 −10，正确应该是 4x − 6x + 10 = −2x + 10）；dropping the sign on the second term inside the bracket（漏掉括号里第二项的符号）。(4) 本周方法：Expand the bracket, then collect like terms（展开括号，然后合并同类项）。−2(3x − 5) + 4x = −6x + 10 + 4x = −2x + 10（先展开 −2 乘以括号里的每一项：−2 × 3x = −6x，−2 × (−5) = +10；再合并 −6x + 4x = −2x）。2(3x − 5) + 4x = 6x − 10 + 4x = 10x − 10（2 × 3x = 6x，2 × (−5) = −10；6x + 4x = 10x）。3(x + 2) − 2(x − 1) = 3x + 6 − 2x + 2 = x + 8（展开两个括号：3(x + 2) = 3x + 6，−2(x − 1) = −2x + 2；合并：3x − 2x = x，6 + 2 = 8）。4x − 2(3x − 5) = 4x − 6x + 10 = −2x + 10（展开：−2 × 3x = −6x，−2 × (−5) = +10；合并：4x − 6x = −2x）。本周不教 5.8 use of brackets and extraction of common factors（括号的使用和提取公因数，下周内容）。Friendly integers。No calculator。写出算式步骤。(5) 下周课前请孩子完成第 32 周 app 作业（5 道选择 + 8 道选择 + 3 道 show working）。家长微信看每周进度通报，app 作业练对了就 OK，练错了说明题目难度合适需要本周反复练。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-33": {
    title: "提取公因式 — Use brackets and extract common factors",
    mathExample: "3x + 6 = 3(x + 2). Check: 3(x + 2) = 3x + 6 ✓",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 提取公因式。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N5.8 use of brackets and extraction of common factors。本周重点是找出最大公因数 HCF，然后每一项都除以 HCF，用括号写出来。」提醒家长可以在旁边观摩，但请让孩子自己动笔写算式。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写一个简单的例子：3x + 6。问孩子：「3x 和 6 的最大公因数 HCF 是多少？」引导孩子说出：3。问：「3x ÷ 3 等于多少？」答：x。问：「6 ÷ 3 等于多少？」答：2。写出：3x + 6 = 3(x + 2)。让孩子检验：展开 3(x + 2) = 3 × x + 3 × 2 = 3x + 6 ✓。再写一个：4x + 10。引导孩子说出：HCF = 2（不是 4，因为 4 不是 10 的因数）。4x ÷ 2 = 2x，10 ÷ 2 = 5。所以 4x + 10 = 2(2x + 5)。检验：2(2x + 5) = 4x + 10 ✓。强调：找 HCF，每一项都除以 HCF，用括号写出来，最后展开检验（find HCF, divide each term by HCF, write with bracket, check by expanding）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：3x + 6 = 3(x + 6)（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，展开检验：3(x + 6) = 3x + 18，不是 3x + 6。圈出错误部分：只分解了 x 项，忘记 6 也要除以 3。改正后写：3x + 6 = 3(x + 2)（标记为 ✓）。让孩子跟读改正后的步骤 3 次：HCF = 3, 3x ÷ 3 = x, 6 ÷ 3 = 2, so 3x + 6 = 3(x + 2)。再写一个错误例子：5x − 15 = 5(x + 3)（标记为 ✗）。问孩子：「这个对吗？」展开检验：5(x + 3) = 5x + 15，不是 5x − 15。圈出错误：丢掉了负号（dropping the sign）。改正：5x − 15 = 5(x − 3)（标记为 ✓）。让孩子跟读 3 次：HCF = 5, 5x ÷ 5 = x, −15 ÷ 5 = −3 (keep the minus), so 5x − 15 = 5(x − 3)。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（3x + 6，skill 5.8 use of brackets and extraction of common factors）：Factorise 3x + 6. Show your working. Check by expanding. 步骤：① Find the HCF of 3x and 6. HCF = 3. ② 3x ÷ 3 = x, 6 ÷ 3 = 2. ③ 3x + 6 = 3(x + 2). ④ Check by expanding: 3(x + 2) = 3 × x + 3 × 2 = 3x + 6 ✓. Answer: 3(x + 2). (Note: Common fossil: writing 3(x + 6) instead of 3(x + 2). This is wrong because 3(x + 6) = 3x + 18, not 3x + 6. When factorising, divide EVERY term by the HCF.) 例题 2（5x − 15，skill 5.8 extraction of common factors with minus）：Factorise 5x − 15. Show your working. Explain why 5(x + 3) is wrong. 步骤：① Find the HCF of 5x and 15. HCF = 5. ② 5x ÷ 5 = x, −15 ÷ 5 = −3. ③ 5x − 15 = 5(x − 3). ④ Check by expanding: 5(x − 3) = 5 × x − 5 × 3 = 5x − 15 ✓. Answer: 5(x − 3). Explanation: If we write 5(x + 3), when we expand it we get 5x + 15, not 5x − 15. The sign must be kept: −15 ÷ 5 = −3, so 5(x − 3) = 5x − 15 ✓. 例题 3（2x + 2y，skill 5.8 extraction of common factors with two variables）：Factorise 2x + 2y. Show your working. Check by expanding. 步骤：① Find the HCF of 2x and 2y. HCF = 2. ② 2x ÷ 2 = x, 2y ÷ 2 = y. ③ 2x + 2y = 2(x + y). ④ Check by expanding: 2(x + y) = 2 × x + 2 × y = 2x + 2y ✓. Answer: 2(x + y). 每道例题示范后，让孩子跟读关键步骤（find HCF → divide each term → write with bracket → check by expanding）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Factorise 3x + 6. Show your working. Check by expanding the bracket. 答案：① Find the HCF of 3x and 6. HCF = 3. ② 3x ÷ 3 = x, 6 ÷ 3 = 2. ③ 3x + 6 = 3(x + 2). ④ Check by expanding: 3(x + 2) = 3 × x + 3 × 2 = 3x + 6 ✓. Answer: 3(x + 2). (Note: Common fossil: writing 3(x + 6) instead of 3(x + 2). This is wrong because 3(x + 6) = 3x + 18, not 3x + 6.) 题 2：Wei factorises 5x − 15 and writes 5(x + 3). (i) Factorise 5x − 15. Show your working. (ii) Check by expanding. (iii) Explain why Wei's answer 5(x + 3) is wrong. 答案：(i) ① Find the HCF of 5x and 15. HCF = 5. ② 5x ÷ 5 = x, −15 ÷ 5 = −3. ③ 5x − 15 = 5(x − 3). Answer: 5(x − 3). (ii) Check by expanding: 5(x − 3) = 5 × x − 5 × 3 = 5x − 15 ✓. (iii) Wei's answer 5(x + 3) is wrong because when we expand 5(x + 3) we get 5x + 15, not 5x − 15. The sign must be kept: −15 ÷ 5 = −3, so the correct answer is 5(x − 3), not 5(x + 3). 题 3：Factorise 2x + 2y. Show your working. Check by expanding the bracket. 答案：① Find the HCF of 2x and 2y. HCF = 2. ② 2x ÷ 2 = x, 2y ÷ 2 = y. ③ 2x + 2y = 2(x + y). ④ Check by expanding: 2(x + y) = 2 × x + 2 × y = 2x + 2y ✓. Answer: 2(x + y). 逐一检查孩子的推理。对家长说：「每道题都要写出 HCF，然后每一项除以 HCF，最后展开检验。」如果孩子只分解了 x 项（化石错误：3x + 6 = 3(x + 6)），指出错误，让孩子改正。如果孩子丢掉负号（化石错误：5x − 15 = 5(x + 3)），指出错误，让孩子改正。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.8 use of brackets and extraction of common factors（提取公因式），对应 preceding level 规则。第 26–32 周已完成 5.1–5.7，本周只教 5.8 use of brackets and extraction of common factors（提取公因式）。本周完成 N5（5.1–5.8）。(3) 本周化石：factoring only the x term: 3x + 6 = 3(x + 6)（错误：只分解了 x 项，忘记 6 也要除以 3，正确是 3(x + 2)）；writing 3x + 6 = 3x(1 + 6)（错误：把 3 只放在 x 上）；taking a factor that is not common: 4x + 10 = 4(x + 10/4)（错误：4 不是 10 的因数，正确是 2(2x + 5)）；dropping the sign: 5x − 15 = 5(x + 3)（错误：丢掉负号，正确是 5(x − 3)）。(4) 本周方法：Extract the highest common factor and write with a bracket（提取最大公因数，用括号写出来）。3x + 6 = 3(x + 2)（HCF = 3: 3x ÷ 3 = x, 6 ÷ 3 = 2）。4x + 10 = 2(2x + 5)（HCF = 2: 4x ÷ 2 = 2x, 10 ÷ 2 = 5）。6x + 9 = 3(2x + 3)（HCF = 3）。5x − 15 = 5(x − 3)（HCF = 5，keep the minus sign）。2x + 2y = 2(x + y)（HCF = 2）。ax + ay = a(x + y)（HCF = a）。Check by expanding the bracket（检验：展开括号，看是否回到原式）。对家长说：「下周不教 N6 functions and graphs。本周完成了 N5 全部内容（5.1–5.8）。」对孩子说：「今天学习了提取公因式。记住：找 HCF，每一项都除以 HCF，用括号写出来，最后展开检验。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-34": {
    title: "平面直角坐标系 — Cartesian coordinates in two dimensions",
    mathExample: "Point A at (3, 2): x = 3 (horizontal), y = 2 (vertical). On x-axis means y = 0, e.g. (5, 0). On y-axis means x = 0, e.g. (0, 4). Origin at (0, 0).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 平面直角坐标系。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N6.1 Cartesian coordinates in two dimensions。本周重点是认识 x 轴（横轴）、y 轴（纵轴）、原点 (0, 0)，读坐标和画点。有序对 (x, y) 是先 x 后 y，x 是横坐标，y 是纵坐标。本周不教 6.2–6.5（函数图像、y=ax+b、gradient 斜率）。」提醒家长可以在旁边观摩，但请让孩子自己动笔画坐标。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个简单的坐标系（x 轴横向，y 轴竖向，标出原点 (0, 0)）。指着原点问孩子：「这个点是什么？」引导孩子说出：origin（原点），坐标是 (0, 0)。指着 x 轴问：「这条横轴叫什么？」答：x-axis（x 轴）。指着 y 轴问：「这条竖轴叫什么？」答：y-axis（y 轴）。在坐标系上画一个点，标记为 (3, 2)。问孩子：「这个点的 x 坐标是多少？」答：3。问：「y 坐标是多少？」答：2。强调：ordered pair (x, y) with x first, then y（有序对：先 x 后 y）。再画一个点 (5, 0)，问：「这个点在 x 轴上还是 y 轴上？」引导孩子说出：on the x-axis（在 x 轴上），因为 y = 0。再画一个点 (0, 4)，问：「这个点在哪个轴上？」答：on the y-axis（在 y 轴上），因为 x = 0。强调：on the x-axis means y = 0, on the y-axis means x = 0。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Point A at (3, 2). Wei says x = 2 and y = 3（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误部分：swapping x and y（颠倒了 x 和 y）。改正后写：Point A at (3, 2). x = 3 and y = 2（标记为 ✓）。让孩子跟读改正后的句子 3 次：ordered pair (x, y) with x first, then y, so (3, 2) means x = 3 and y = 2。再写一个错误例子：Point B at (4, 0). Aisha says B is on the y-axis（标记为 ✗）。问孩子：「这个对吗？」圈出错误：placing (4, 0) on the y-axis（把 (4, 0) 放在 y 轴上）。改正：Point B at (4, 0). B is on the x-axis（标记为 ✓）。让孩子跟读 3 次：on the x-axis means y = 0, so (4, 0) is on the x-axis, not the y-axis。再写一个错误例子：Point C at (0, 5). Mr Lim says C is on the x-axis（标记为 ✗）。问孩子：「这个对吗？」圈出错误：placing (0, 5) on the x-axis（把 (0, 5) 放在 x 轴上）。改正：Point C at (0, 5). C is on the y-axis（标记为 ✓）。让孩子跟读 3 次：on the y-axis means x = 0, so (0, 5) is on the y-axis, not the x-axis。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（Point P at (3, 5)，skill 6.1 Cartesian coordinates in two dimensions）：What is the x-coordinate of P? What is the y-coordinate of P? Wei says P is on the x-axis. Explain why Wei is wrong. 步骤：The ordered pair is (x, y) with x first, then y. Point P is at (3, 5), so x-coordinate = 3 and y-coordinate = 5. Answer: x-coordinate is 3, y-coordinate is 5. Explanation: Wei is wrong because on the x-axis means y = 0. Point P has y = 5, not y = 0, so P is NOT on the x-axis. (Note: Common fossil: swapping x and y, reading (3, 5) as x = 5 and y = 3. This is wrong because in the ordered pair (x, y), the first number is always x and the second number is always y.) 例题 2（Point Q at (0, −4)，skill 6.1 Cartesian coordinates with axes）：State the coordinates of Q. Is Q on the x-axis or the y-axis? Explain. From the origin, describe how to reach Q. 步骤：The coordinates of Q are (0, −4). The x-coordinate is 0 and the y-coordinate is −4. On the y-axis means x = 0. Since Q has x = 0, Q is on the y-axis. Answer: Q is on the y-axis because x = 0. From the origin, move 0 units horizontally (stay at x = 0) and 4 units down (because y = −4). (Note: Fossil: saying Q is on the x-axis. This is wrong because on the x-axis means y = 0, but Q has y = −4, so Q is NOT on the x-axis.) 例题 3（Points R (2, 3) and S (3, 2)，skill 6.1 ordered pair with x first then y）：Which point is the origin? Explain why R and S are different points. 步骤：The origin has coordinates (0, 0). Neither R nor S is (0, 0), so neither is the origin. Answer: Neither R nor S is the origin. Point R is at (2, 3), so x = 2 and y = 3. Point S is at (3, 2), so x = 3 and y = 2. The x-coordinate and y-coordinate are swapped. R is 2 units right and 3 units up from the origin. S is 3 units right and 2 units up from the origin. They are at different positions, so R and S are different points. Answer: R and S are different points because (2, 3) ≠ (3, 2). The order of x and y matters. 教师边讲边画坐标系，标出点 P, Q, R, S，让孩子看到坐标的位置。强调关键步骤：① Identify the ordered pair (x, y) with x first, then y（识别有序对 (x, y)，x 在前，y 在后）. ② State the x-coordinate (horizontal) and y-coordinate (vertical)（陈述 x 坐标（横坐标）和 y 坐标（纵坐标））. ③ Check if the point is on an axis: x-axis means y = 0, y-axis means x = 0（检查点是否在坐标轴上：x 轴意味着 y = 0，y 轴意味着 x = 0）. ④ Plot or describe the point: from the origin, move x units horizontally first, then y units vertically（画点或描述点：从原点开始，先横移 x 单位，再竖移 y 单位）. ⑤ State the final answer（陈述最终答案）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：A grid shows point P at (3, 5). (i) What is the x-coordinate of P? (ii) What is the y-coordinate of P? (iii) Wei says P is on the x-axis. Explain why Wei is wrong. 答案：(i) The ordered pair is (x, y) with x first, then y. Point P is at (3, 5), so x-coordinate = 3. Answer: 3. (ii) y-coordinate = 5. Answer: 5. (iii) Wei is wrong because on the x-axis means y = 0. Point P has y = 5, not y = 0, so P is NOT on the x-axis. (Note: Common fossil: swapping x and y, reading (3, 5) as x = 5 and y = 3.) 题 2：Aisha plots point Q at (0, −4). (i) State the coordinates of Q. (ii) Is Q on the x-axis or the y-axis? Explain your answer. (iii) From the origin, describe how to reach Q (direction and number of units). 答案：(i) The coordinates of Q are (0, −4). Answer: (0, −4). (ii) Q is on the y-axis. Explanation: On the y-axis means x = 0. Since Q has x = 0, Q is on the y-axis. (Note: Fossil: saying Q is on the x-axis. This is wrong because on the x-axis means y = 0, but Q has y = −4.) (iii) From the origin, move 0 units horizontally (stay at x = 0) and 4 units down (because y = −4). Answer: 0 units horizontally, 4 units down. 题 3：Mr Lim gives three points: R (2, 3), S (3, 2), T (0, 0). (i) Which point is the origin? (ii) Explain why R and S are different points. (iii) Plot R and S on a coordinate grid and label them (draw a simple grid on paper). 答案：(i) The origin has coordinates (0, 0). T is (0, 0), so T is the origin. Answer: T. (ii) Point R is at (2, 3), so x = 2 and y = 3. Point S is at (3, 2), so x = 3 and y = 2. The x-coordinate and y-coordinate are swapped. R is 2 units right and 3 units up from the origin. S is 3 units right and 2 units up from the origin. They are at different positions, so R and S are different points. Answer: R and S are different because (2, 3) ≠ (3, 2). The order of x and y matters. (iii) Draw a coordinate grid with x-axis (horizontal) and y-axis (vertical). Plot R at (2, 3): 2 right, 3 up. Plot S at (3, 2): 3 right, 2 up. Label them R and S. 如果孩子某题卡住超过 2 分钟，教师给一个提示词（比如说 'What does ordered pair (x, y) mean? Which comes first?' 或 'On the x-axis, what is the value of y?'），但不说完整答案。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N6. Functions and graphs: 6.1 Cartesian coordinates in two dimensions（平面直角坐标系），对应 preceding level 规则。第 26–33 周已完成 N5（5.1–5.8 代数式和提取公因式），本周只教 N6.1 Cartesian coordinates in two dimensions（x-axis 横轴、y-axis 纵轴、origin 原点 (0, 0)、ordered pair (x, y) with x first (horizontal) then y (vertical)、reading a plotted point、plotting a given point）。本周不教 N6.2–6.5（ordered-pair graphs as a relationship、y=ax+b、graphs of linear functions、gradient 斜率）。(3) 本周化石：swapping x and y: reading (3, 2) as (2, 3)（错误：颠倒 x 和 y，把 (3, 2) 读成 (2, 3)。正确：ordered pair (x, y) with x first then y，所以 (3, 2) 是 x = 3, y = 2）；placing (4, 0) on the y-axis（错误：把 (4, 0) 画在 y 轴上，正确：on the x-axis means y = 0, so (4, 0) is on the x-axis）；placing (0, 5) on the x-axis（错误：把 (0, 5) 画在 x 轴上，正确：on the y-axis means x = 0, so (0, 5) is on the y-axis）。(4) 本周方法：x-axis is horizontal（横轴），y-axis is vertical（纵轴），origin is (0, 0)（原点在 (0, 0)），ordered pair (x, y) with x first then y（有序对：先 x 后 y）。Read a plotted point: look at the x value first (horizontal), then the y value (vertical)（读点：先看 x，再看 y）。Plot a given point: from the origin, move x units horizontally first, then y units vertically（画点：从原点开始，先横移 x，再竖移 y）。Positive x right, negative x left（正 x 向右，负 x 向左）。Positive y up, negative y down（正 y 向上，负 y 向下）。On the x-axis means y = 0, e.g. (5, 0) not (0, 5)（在 x 轴上意味着 y = 0）。On the y-axis means x = 0, e.g. (0, 4) not (4, 0)（在 y 轴上意味着 x = 0）。Friendly integers. No calculator（calculators are not allowed）。写出算式步骤。打开 /learn 页面，给孩子看第 34 周作业入口。告诉孩子：「这周的作业在这里，完成后系统会自动批改选择题，写作部分需写出推理步骤。」对家长说：「孩子完成作业后，我们会在微信群里同步进度。如果有问题随时联系。」不提「小班课」「包过」等销售话术。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-35": {
    title: "有序对的集合的图像表示两个量之间的关系 — Graph of a set of ordered pairs as a representation of a relationship between two variables",
    mathExample: "Table: hours (1, 2, 3) and distance (4, 8, 12) km. Ordered pairs: (1, 4), (2, 8), (3, 12). The set represents a relationship: as hours increase, distance increases. NOT (4, 1), (8, 2), (12, 3) ✗.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 有序对的集合的图像表示两个量之间的关系。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N6.2 graph of a set of ordered pairs as a representation of a relationship between two variables。本周重点是从表格写出有序对集合、画这些点、理解这组点表示两个量之间的关系（例如 tickets 数量与 cost 总价、hours 小时与 distance 距离）。从图像或表格读出有序对、选择哪个表格与给定的点集匹配、选择哪个有序对属于给定的关系表格。本周不教 N6.3–6.5（linear functions y=ax+b、graphs of linear functions、gradient 斜率）。」提醒家长可以在旁边观摩，但请让孩子自己动笔写有序对和画点。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写一个简单的表格：hours (1, 2, 3) and distance in km (4, 8, 12)。指着表格问孩子：「这个表格给出了什么？」引导孩子说出：two variables（两个量），hours（小时）和 distance（距离）。问：「第一个量是什么？」答：hours（小时）。问：「第二个量是什么？」答：distance（距离）。问：「我们怎么写成有序对？」引导孩子说出：ordered pair (x, y)（有序对 (x, y)），with x first, then y（先 x 后 y）。问：「1 小时对应多少距离？」答：4 km。问：「所以第一个有序对是什么？」答：(1, 4)。强调：The first variable is hours, the second variable is distance, so the ordered pair is (hours, distance) = (1, 4), NOT (4, 1)（第一个量是 hours，第二个量是 distance，所以有序对是 (hours, distance) = (1, 4)，不是 (4, 1)）。再问：「2 小时对应多少距离？」答：8 km。问：「有序对是什么？」答：(2, 8)。问：「3 小时呢？」答：(3, 12)。强调：The set of ordered pairs is {(1, 4), (2, 8), (3, 12)}（有序对集合是 {(1, 4), (2, 8), (3, 12)}）。问：「这组点可以画在图像上吗？」答：Yes（可以）。问：「这组点表示什么？」引导孩子说出：a relationship between two variables（两个量之间的关系）。As hours increase, distance also increases（随着小时增加，距离也增加）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Table: tickets (1, 2, 3) and cost in S$ (5, 10, 15). Wei says the ordered pair for 2 tickets is (10, 2)（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误部分：swapping the two variables（颠倒两个量）。改正后写：The first variable is tickets, the second variable is cost, so the ordered pair for 2 tickets is (2, 10), NOT (10, 2)（标记为 ✓）。让孩子跟读改正后的句子 3 次：The ordered pair is (tickets, cost) with tickets first, then cost, so 2 tickets is (2, 10), NOT (10, 2)。再写一个错误例子：Set {(1, 8), (2, 16), (3, 24)}. Aisha plots these points. She says the point for x = 3 is (24, 3)（标记为 ✗）。问孩子：「这个对吗？」圈出错误：plotting (y, x) instead of (x, y)（把 (x, y) 画成 (y, x)）。改正：The point for x = 3 is (3, 24), NOT (24, 3)（标记为 ✓）。让孩子跟读 3 次：ordered pair (x, y) with x first, then y, so x = 3 is (3, 24), NOT (24, 3)。再写一个错误例子：Mr Lim says: the graph of this set gives the equation y = ax + b（标记为 ✗）。问孩子：「本周教 y = ax + b 吗？」答：No（不教）。改正：This week we only teach N6.2: the graph of a set of ordered pairs represents a relationship between two variables（标记为 ✓）。让孩子跟读 3 次：This week we do NOT teach y = ax + b. We only teach that the graph of a set represents a relationship between two variables。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（Table: hours (1, 2, 3) and pay in S$ (12, 24, 36)，skill 6.2 ordered pairs from table）：Write the ordered pairs from this table as a set. Wei plots these points. What ordered pair represents 2 hours? Aisha says the ordered pair for 2 hours is (24, 2). Explain why Aisha is wrong. 步骤：A table gives a set of ordered pairs (x, y). The first variable is hours, the second variable is pay. For 1 hour, pay is S$12, so the ordered pair is (1, 12). For 2 hours, pay is S$24, so (2, 24). For 3 hours, pay is S$36, so (3, 36). Answer: {(1, 12), (2, 24), (3, 36)}. The ordered pair for 2 hours is (2, 24). Answer: (2, 24). Aisha is wrong because the ordered pair is (hours, pay), NOT (pay, hours). The first variable is hours, so hours comes first in the ordered pair. 2 hours is (2, 24), NOT (24, 2). (Note: Common fossil: swapping the two variables, writing (12, 1), (24, 2), (36, 3). This is wrong because the ordered pair is (hours, pay), not (pay, hours).) 例题 2（Set {(1, 5), (2, 10), (3, 15)} where the first variable is tickets and the second variable is cost in S$，skill 6.2 reading pairs from a set）：How much does 1 ticket cost? Which ordered pair represents 3 tickets? Wei says (10, 2) is in this set. Explain why Wei is wrong. 步骤：The ordered pair (1, 5) means 1 ticket costs S$5. Answer: S$5. For 3 tickets, look for the ordered pair with first value 3. The pair (3, 15) means 3 tickets cost S$15. Answer: (3, 15). Wei is wrong because (10, 2) is NOT in the set. The set has (2, 10), which means 2 tickets cost S$10, but (10, 2) would mean 10 tickets cost S$2, which is NOT in this table. Also, (10, 2) swaps the two variables. Answer: (10, 2) is NOT in the set. (Note: Fossil: saying (15, 3) represents 3 tickets. This is wrong because the first value in the ordered pair is the number of tickets, so 3 tickets is (3, 15), not (15, 3).) 例题 3（Graph shows points (1, 4), (2, 8), (3, 12)，skill 6.2 graph represents relationship）：Make a table to show this relationship (x in the first row, y in the second row). Which ordered pair is NOT in this set: (2, 8), (4, 2), or (3, 12)? Does this graph represent a relationship between two variables? Explain your answer. 步骤：Make a table: x: 1, 2, 3 and y: 4, 8, 12. The set is {(1, 4), (2, 8), (3, 12)}. Check each pair: (2, 8) is in the set ✓. (4, 2) is NOT in the set ✗ (x = 4 is not in the table, and also the order is swapped). (3, 12) is in the set ✓. Answer: (4, 2) is NOT in the set. The graph shows a set of ordered pairs, and this set represents a relationship between two variables: as x increases, y also increases. Answer: Yes, the graph represents a relationship between two variables.",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：A table shows the number of hours worked and the total pay in S$. Hours: 1, 2, 3. Pay (S$): 12, 24, 36. (i) Write the ordered pairs from this table as a set. (ii) Wei plots these points on a graph. What ordered pair represents 2 hours? (iii) Aisha says the ordered pair for 2 hours is (24, 2). Explain why Aisha is wrong. 答案：(i) A table gives a set of ordered pairs (x, y). The first variable is hours, the second variable is pay. For 1 hour, pay is S$12, so (1, 12). For 2 hours, pay is S$24, so (2, 24). For 3 hours, pay is S$36, so (3, 36). Answer: {(1, 12), (2, 24), (3, 36)}. (ii) The ordered pair for 2 hours is (2, 24). Answer: (2, 24). (iii) Aisha is wrong because the ordered pair is (hours, pay), NOT (pay, hours). The first variable is hours, so hours comes first in the ordered pair. 2 hours is (2, 24), NOT (24, 2). (Note: Fossil: swapping the two variables.) 题 2：Mr Lim gives this set of ordered pairs: {(1, 5), (2, 10), (3, 15)}. The first variable is the number of tickets. The second variable is the total cost in S$. (i) How much does 1 ticket cost? (ii) Which ordered pair represents 3 tickets? (iii) Wei says (10, 2) is in this set. Explain why Wei is wrong. 答案：(i) The ordered pair (1, 5) means 1 ticket costs S$5. Answer: S$5. (ii) For 3 tickets, look for the ordered pair with first value 3. The pair (3, 15) means 3 tickets cost S$15. Answer: (3, 15). (iii) Wei is wrong because (10, 2) is NOT in the set. The set has (2, 10), which means 2 tickets cost S$10, but (10, 2) would mean 10 tickets cost S$2, which is NOT in this table. Also, (10, 2) swaps the two variables. Answer: (10, 2) is NOT in the set. 题 3：A graph shows points at (1, 4), (2, 8), (3, 12). (i) Make a table to show this relationship (x in the first row, y in the second row). (ii) Which ordered pair is NOT in this set: (2, 8), (4, 2), or (3, 12)? (iii) Does this graph represent a relationship between two variables? Explain your answer. 答案：(i) Make a table: x: 1, 2, 3 and y: 4, 8, 12. (ii) The set is {(1, 4), (2, 8), (3, 12)}. Check each pair: (2, 8) is in the set ✓. (4, 2) is NOT in the set ✗ (x = 4 is not in the table, and also the order is swapped). (3, 12) is in the set ✓. Answer: (4, 2) is NOT in the set. (iii) The graph shows a set of ordered pairs, and this set represents a relationship between two variables: as x increases, y also increases. Answer: Yes, the graph represents a relationship between two variables.",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N6. Functions and graphs: 6.2 graph of a set of ordered pairs as a representation of a relationship between two variables（有序对的集合的图像表示两个量之间的关系），对应 preceding level 规则。第 34 周已完成 N6.1 Cartesian coordinates in two dimensions（平面直角坐标系）。本周只教 N6.2 graph of a set of ordered pairs as a representation of a relationship between two variables（表格给出一组有序对，这些点可以画出来，这组点的图像表示两个量之间的关系，例如 tickets 数量与 cost 总价、hours 小时与 distance 距离；从图像或表格读出有序对；选择哪个表格与给定的点集匹配；选择哪个有序对属于给定的关系表格）。本周不教 N6.3–6.5（linear functions y=ax+b、graphs of linear functions、gradient 斜率）。(3) 本周化石：swapping the two variables when writing ordered pairs from a table (tickets, cost) → writing (cost, tickets) instead of (tickets, cost)（从表格写有序对时颠倒两个量）；or plotting (y, x) instead of (x, y)（或画点时把 (x, y) 画成 (y, x)）。(4) 本周方法：A table gives a set of ordered pairs (x, y)（表格给出一组有序对）。The first variable is x, the second variable is y（第一个量是 x，第二个量是 y）。Write each pair as (x, y) with x first, then y（写出每个对 (x, y)，x 在前，y 在后）。These points can be plotted on a graph（这些点可以画在图像上）。The set of points represents a relationship between two variables（这组点表示两个量之间的关系）。Example: table hours (1, 2, 3) and distance (4, 8, 12) → ordered pairs (1, 4), (2, 8), (3, 12)（例：表格 hours (1, 2, 3) 和 distance (4, 8, 12) → 有序对 (1, 4), (2, 8), (3, 12)）。Read pairs from a graph or table（从图像或表格读出有序对）。Choose which table matches a given set of points（选择哪个表格与给定的点集匹配）。Choose which ordered pair belongs to a given relationship table（选择哪个有序对属于给定的关系表格）。金额用新元 S$。不用计算器。(5) 提醒孩子回家完成 /learn 页面第 35 周作业：5 道选择题 + 8 道选择题 + 3 道 show working 应用题（从表格写有序对、解释为什么颠倒的对是错的、从图像做表格并判断哪个对不在集合中）。系统会自动批改选择题，show working 题孩子可以拍照发给家长。(6) 对家长说：「本周完成 N6.2 有序对的集合的图像表示两个量之间的关系。第 34 周已完成 N6.1 Cartesian coordinates in two dimensions（平面直角坐标系）。本周不教 N6.3–6.5（linear functions y=ax+b、graphs of linear functions、gradient）。如果孩子做题时还是颠倒两个量（把 (tickets, cost) 写成 (cost, tickets)），请提醒孩子：ordered pair is (first variable, second variable) with the first variable first, then the second variable（有序对是 (第一个量, 第二个量)，第一个量在前，第二个量在后）。下周见！」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-36": {
    title: "一次函数 y = ax + b — Linear functions y = ax + b",
    mathExample: "y = 5x + 3: coefficient of x is a = 5, constant term is b = 3. Find y when x = 2: y = 5(2) + 3 = 13. Find x when y = 18: 18 = 5x + 3 → 15 = 5x → x = 3. NOT a = 3, b = 5 ✗.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 一次函数 y = ax + b。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N6.3 linear functions y = ax + b。本周重点是认识形式 y = ax + b，a 是 x 的系数，b 是常数项，给定 x 求 y 或给定 y 求 x，识别哪个方程是 y = ax + b 的形式，简单一步改写如 y − 2 = 3x → y = 3x + 2。本周不教 N6.4–6.5（graphs of linear functions 一次函数的图像、gradient 斜率）。本周不画一次函数的图像，不求斜率，不求 rise/run。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写 y = 5x + 3。指着这个式子问孩子：「这个是什么形式？」引导孩子说出：linear function y = ax + b（一次函数 y = ax + b）。问：「在 y = ax + b 里，a 是什么？」答：the coefficient of x（x 的系数）。问：「b 是什么？」答：the constant term（常数项）。问：「在 y = 5x + 3 里，a 是多少？」答：a = 5。问：「b 是多少？」答：b = 3。强调：Compare y = 5x + 3 with y = ax + b. The coefficient of x is a = 5, the constant term is b = 3. NOT a = 3, b = 5 ✗（对比 y = 5x + 3 和 y = ax + b，x 的系数是 a = 5，常数项是 b = 3，不是 a = 3, b = 5 ✗）。再问：「如果 x = 2，怎么求 y？」引导孩子说出：substitute x = 2 into the function（把 x = 2 代入函数）。写：y = 5x + 3 = 5(2) + 3 = 10 + 3 = 13. 所以 y = 13。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: in y = 3x + 2, a = 2 and b = 3（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误部分：mixing up a and b（混淆 a 和 b）。改正后写：In y = ax + b, a is the coefficient of x and b is the constant term. In y = 3x + 2, the coefficient of x is 3, so a = 3. The constant term is 2, so b = 2. NOT a = 2, b = 3 ✗（标记为 ✓）。让孩子跟读改正后的句子 3 次：In y = 3x + 2, a = 3 (the coefficient of x) and b = 2 (the constant term), NOT a = 2, b = 3。再写一个错误例子：Aisha writes y = 3x + 2 as 3y = x + 2（标记为 ✗）。问孩子：「这个对吗？」圈出错误：writing the coefficient on the wrong side（把系数写在错的一边）。改正：The coefficient 3 is for x, not for y, so it is y = 3x + 2, NOT 3y = x + 2（标记为 ✓）。让孩子跟读 3 次：y = 3x + 2, NOT 3y = x + 2. The coefficient 3 is for x, not for y。再问：「本周教一次函数的图像吗？」答：No（不教）。改正：This week we only teach N6.3: the form y = ax + b, identify a and b, find y given x, find x given y. We do NOT teach N6.4–6.5 (graphs of linear functions, gradient)（本周只教 N6.3：形式 y = ax + b，识别 a 和 b，给定 x 求 y，给定 y 求 x。我们不教 N6.4–6.5 图像和斜率）。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（y = 5x + 2，skill 6.3 identify a and b and find y given x）：Wei writes the function y = 5x + 2. (i) What is the coefficient of x in this function? (ii) What is the constant term b? (iii) Find y when x = 3. 步骤：The function is in the form y = ax + b. Compare y = 5x + 2 with y = ax + b. The coefficient of x is a = 5. Answer: 5. The constant term is b = 2. Answer: 2. To find y when x = 3, substitute x = 3 into the function: y = 5x + 2 = 5(3) + 2 = 15 + 2 = 17. Answer: y = 17. (Note: Common fossil: mixing up a and b, saying a = 2 and b = 5. This is wrong because in y = 5x + 2, the coefficient of x is 5 so a = 5, and the constant term is 2 so b = 2.) 例题 2（y = 4x + 7，skill 6.3 find y given x and find x given y）：Mr Lim gives the function y = 4x + 7. (i) Find y when x = 2. (ii) Find x when y = 15. (iii) Aisha says: 「In this function, a = 7 and b = 4.」 Explain why Aisha is wrong. 步骤：To find y when x = 2, substitute x = 2 into the function: y = 4x + 7 = 4(2) + 7 = 8 + 7 = 15. Answer: y = 15. To find x when y = 15, substitute y = 15 into the function: 15 = 4x + 7. Subtract 7 from both sides: 15 − 7 = 4x, so 8 = 4x. Divide both sides by 4: x = 8 ÷ 4 = 2. Answer: x = 2. (Check: when x = 2, y = 4(2) + 7 = 15 ✓.) In the form y = ax + b, a is the coefficient of x and b is the constant term. In y = 4x + 7, the coefficient of x is 4, so a = 4. The constant term is 7, so b = 7. Aisha said a = 7 and b = 4, which swaps the two values. Answer: Aisha is wrong because a = 4 (not 7) and b = 7 (not 4). 例题 3（y = 8x + 5，skill 6.3 real-world context tickets and cost）：A function shows the relationship between the number of tickets x and the total cost in S$: y = 8x + 5. (i) A student buys 4 tickets. Find the total cost y. (ii) The total cost is S$29. How many tickets x did the student buy? (iii) Wei writes this function as 8y = x + 5. Explain why Wei is wrong. 步骤：To find y when x = 4, substitute x = 4: y = 8x + 5 = 8(4) + 5 = 32 + 5 = 37. Answer: y = 37 (total cost is S$37). To find x when y = 29, substitute y = 29: 29 = 8x + 5. Subtract 5: 29 − 5 = 8x, so 24 = 8x. Divide by 8: x = 24 ÷ 8 = 3. Answer: x = 3 (3 tickets). The correct function is y = 8x + 5. Wei wrote 8y = x + 5. This is wrong because the left side should be y (not 8y), and the right side should be 8x + 5 (not x + 5). The coefficient 8 is for x, not for y. Answer: Wei is wrong because the function is y = 8x + 5, not 8y = x + 5. 让孩子跟读每个答案的关键句子。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei writes the function y = 5x + 2. (i) What is the coefficient of x in this function? (ii) What is the constant term b? (iii) Find y when x = 3. 答案：The function is in the form y = ax + b. Compare y = 5x + 2 with y = ax + b. The coefficient of x is a = 5. Answer: 5. The constant term is b = 2. Answer: 2. To find y when x = 3, substitute x = 3: y = 5x + 2 = 5(3) + 2 = 15 + 2 = 17. Answer: y = 17. (Note: Fossil: mixing up a and b.) 题 2：Mr Lim gives the function y = 4x + 7. (i) Find y when x = 2. (ii) Find x when y = 15. (iii) Aisha says: 「In this function, a = 7 and b = 4.」 Explain why Aisha is wrong. 答案：To find y when x = 2, substitute x = 2: y = 4x + 7 = 4(2) + 7 = 8 + 7 = 15. Answer: y = 15. To find x when y = 15, substitute y = 15: 15 = 4x + 7. Subtract 7: 8 = 4x. Divide by 4: x = 2. Answer: x = 2. In y = ax + b, a is the coefficient of x and b is the constant term. In y = 4x + 7, a = 4 and b = 7. Aisha said a = 7 and b = 4, which swaps the two. Answer: Aisha is wrong because a = 4 and b = 7, not a = 7 and b = 4. 题 3：A function shows the relationship between the number of tickets x and the total cost in S$: y = 8x + 5. (i) A student buys 4 tickets. Find the total cost y. (ii) The total cost is S$29. How many tickets x did the student buy? (iii) Wei writes this function as 8y = x + 5. Explain why Wei is wrong. 答案：To find y when x = 4, substitute x = 4: y = 8x + 5 = 8(4) + 5 = 32 + 5 = 37. Answer: y = 37 (S$37). To find x when y = 29, substitute y = 29: 29 = 8x + 5. Subtract 5: 24 = 8x. Divide by 8: x = 3. Answer: x = 3 (3 tickets). The correct function is y = 8x + 5. Wei wrote 8y = x + 5. This is wrong because the coefficient 8 is for x, not for y. Answer: Wei is wrong because the function is y = 8x + 5, not 8y = x + 5. 教师逐题检查孩子的推理。如果孩子写对了，表扬：「推理很清楚！」如果有错误，引导孩子自己找错：「检查一下 a 和 b 是不是对的？」或「检查一下算式里 x 的系数是不是写对了？」家长可以用手机拍照孩子的推理，课后引导孩子把推理步骤和答案上传到 /learn 对应周的作业里，系统会自动批改。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N6. Functions and graphs: 6.3 linear functions y = ax + b（一次函数 y = ax + b），对应 preceding level 规则。第 34–35 周已完成 N6.1–6.2（Cartesian coordinates in two dimensions 平面直角坐标系，graph of a set of ordered pairs as a representation of a relationship between two variables 有序对的集合的图像表示两个量之间的关系）。本周只教 N6.3 linear functions y = ax + b（认识形式 y = ax + b，a 是 x 的系数，b 是常数项，给定 x 求 y 或给定 y 求 x 通过代入，识别哪个方程是 y = ax + b 的形式，简单一步改写如 y − 2 = 3x → y = 3x + 2）。本周不教 N6.4–6.5（graphs of linear functions 一次函数的图像、gradient 斜率）。本周不画一次函数的图像，不求斜率，不求 rise/run。(3) 本周化石：mixing up a and b（混淆 a 和 b）：saying in y = 3x + 2 that a = 2 and b = 3（说 y = 3x + 2 里 a = 2 和 b = 3，错误，应该是 a = 3, b = 2）；or writing y = 3x + 2 as 3y = x + 2（或把 y = 3x + 2 写成 3y = x + 2，错误，coefficient 3 is for x, not for y）。(4) 本周方法：Recognise the form y = ax + b（认识形式 y = ax + b）。a is the coefficient of x, b is the constant term（a 是 x 的系数，b 是常数项）。Find y when x is given by substitution（给定 x 求 y，代入）：y = 5x + 2, when x = 3, y = 5(3) + 2 = 17. Find x when y is given by solving（给定 y 求 x，解方程）：y = 4x + 7, when y = 15, substitute and solve 15 = 4x + 7 → x = 2. Rearrange a simple one-step equation（简单一步改写）：y − 3 = 2x → y = 2x + 3. Recognise which is in the form y = ax + b（识别哪个是 y = ax + b 的形式）：y = 2x + 7 ✓, y = x² ✗. Friendly integers. 金额用新元 S$ 或新加坡元。No calculator。(5) 课后作业：请孩子完成 /learn 页面本周作业（SMATH Week 36）。系统会自动批改选择题，写作题需孩子上传手写推理照片或打字步骤。家长微信会收到进度通报。下周继续。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-37": {
    title: "一次函数的图像 — Graphs of linear functions",
    mathExample: "y = 2x + 1: y-intercept is where x = 0, substitute x = 0 → y = 1, so y-intercept is (0, 1). x-intercept is where y = 0, substitute y = 0 → 0 = 2x + 1 → x = −0.5, so x-intercept is (−0.5, 0). Is (2, 5) on the graph? Substitute x = 2: y = 2(2) + 1 = 5 ✓ Yes.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 一次函数的图像。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N6.4 graphs of linear functions。本周重点是 y = ax + b 的图像是一条直线，通过代入 x 或 y 求图像上的点，y-intercept（y 轴截距）是 x = 0 的点 (0, b)，x-intercept（x 轴截距）是 y = 0 的点，判断给定的点是否在图像上。本周只教 N6.4（graphs of linear functions），不教 N6.5（gradient 斜率）。不教斜率名称（gradient / slope），不教 rise over run，不教「line goes up by a for each 1 in x」作为 gradient 概念。」提醒家长可以在旁边观摩，但请让孩子自己动笔算和画。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写 y = 2x + 1，并画一个简单的坐标系（x 轴横向，y 轴竖向）。指着这个式子问孩子：「这个函数的图像是什么形状？」引导孩子说出：a straight line（一条直线）。问：「我们怎么找到这条线上的点？」引导孩子说出：substitute x into the function and calculate y（把 x 代入函数算出 y）。问：「如果我想知道这条线在哪里穿过 y 轴，我应该代入什么值？」答：x = 0。强调：The y-intercept is where x = 0, which is the point where the graph crosses the y-axis（y-intercept 是 x = 0 的点，就是图像穿过 y 轴的点）。问：「如果 x = 0，y 是多少？」写：y = 2(0) + 1 = 1. 所以 y-intercept 是 (0, 1)。强调：The y-intercept is the point (0, 1), not the number 1, and not the point (2, 1) or (1, 2)（y-intercept 是点 (0, 1)，不是数字 1，也不是点 (2, 1) 或 (1, 2)）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: the y-intercept of y = 2x + 3 is (2, 3)（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误部分：using (a, b) as a point on the graph instead of (0, b)（把 (a, b) 当作 y-intercept）。改正后写：The y-intercept is where x = 0. Substitute x = 0 into y = 2x + 3: y = 2(0) + 3 = 3. The y-intercept is the point (0, 3), NOT (2, 3) or (3, 0)（标记为 ✓）。让孩子跟读改正后的句子 3 次：The y-intercept of y = 2x + 3 is (0, 3), NOT (2, 3) or (3, 0)。再写一个错误例子：Aisha says: the y-intercept of y = 2x + 3 is 2（标记为 ✗）。问孩子：「这个对吗？」圈出错误：saying the y-intercept is the number 2（说 y-intercept 是数字 2）。改正：The y-intercept is a point, not just a number. The y-intercept is (0, 3), not 2 or 3（标记为 ✓）。让孩子跟读 3 次：The y-intercept is the point (0, 3), not the number 2 or 3。再问：「本周教 gradient（斜率）吗？」答：No（不教）。改正：This week we only teach N6.4: graphs of linear functions (the graph is a straight line, find points by substituting x or y, y-intercept is (0, b), x-intercept is where y = 0, decide if a point is on the graph). We do NOT teach N6.5 gradient（本周只教 N6.4：图像是直线，通过代入求点，y-intercept 是 (0, b)，x-intercept 是 y = 0 的点，判断点是否在图像上。我们不教 N6.5 gradient）。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（y = 2x + 1，skill 6.4 find y-intercept and another point）：Wei writes the function y = 2x + 1. (i) What is the y-intercept of this graph (the point where the graph crosses the y-axis)? (ii) Find one other point on this graph by substituting x = 2. (iii) Aisha says the point (2, 1) is on the graph. Show that Aisha is wrong. 步骤：The y-intercept is where the graph crosses the y-axis, which means x = 0. Substitute x = 0 into y = 2x + 1: y = 2(0) + 1 = 0 + 1 = 1. The y-intercept is the point (0, 1). Answer: (0, 1). (Note: Common fossil: saying the y-intercept is 2 or (2, 1). This is wrong because the y-intercept is where x = 0, which gives y = 1, so the point is (0, 1), not (2, 1) or 2.) To find another point, substitute x = 2 into y = 2x + 1: y = 2(2) + 1 = 4 + 1 = 5. The point is (2, 5). Answer: (2, 5). To check if (2, 1) is on the graph, substitute x = 2 into y = 2x + 1: y = 2(2) + 1 = 4 + 1 = 5. When x = 2, y = 5, not y = 1. So the point (2, 1) is NOT on the graph. Answer: No, (2, 1) is not on the graph because when x = 2, y = 5 (not 1). 例题 2（y = 3x − 6，skill 6.4 find y-intercept and x-intercept）：Mr Lim gives the function y = 3x − 6. (i) What is the y-intercept? (ii) What is the x-intercept (the point where the graph crosses the x-axis)? (iii) Wei says the y-intercept is −6. Explain why Wei is wrong. 步骤：The y-intercept is where x = 0. Substitute x = 0: y = 3(0) − 6 = 0 − 6 = −6. The y-intercept is (0, −6). Answer: (0, −6). The x-intercept is where y = 0 (where the graph crosses the x-axis). Substitute y = 0: 0 = 3x − 6. Add 6 to both sides: 6 = 3x. Divide by 3: x = 2. The x-intercept is (2, 0). Answer: (2, 0). Wei is wrong because the y-intercept is a point, not just a number. The y-intercept is where x = 0. When x = 0, y = 3(0) − 6 = −6. The y-intercept is the point (0, −6), not the number −6. Answer: Wei is wrong because the y-intercept is the point (0, −6), not the number −6. 例题 3（y = 8x + 5，skill 6.4 real-world tickets cost and check if points are on graph）：The cost of tickets (in S$) is given by the function y = 8x + 5, where x is the number of tickets. (i) A student buys 0 tickets (x = 0). What is the cost y? What does this tell you about the y-intercept? (ii) Is the point (3, 29) on the graph of this function? Show your working. (iii) Aisha says the point (8, 5) is on the graph because a = 8 and b = 5. Explain why Aisha is wrong. 步骤：Substitute x = 0: y = 8(0) + 5 = 0 + 5 = 5. Answer: y = 5 (cost is S$5). This is the y-intercept, the point (0, 5). Even if x = 0 (0 tickets), the cost is S$5 (this is the fixed cost or booking fee). To check if (3, 29) is on the graph, substitute x = 3: y = 8(3) + 5 = 24 + 5 = 29. When x = 3, y = 29 ✓. The point (3, 29) is on the graph. Answer: Yes. To check if (8, 5) is on the graph, substitute x = 8: y = 8(8) + 5 = 64 + 5 = 69. When x = 8, y = 69, not y = 5. So (8, 5) is NOT on the graph. Answer: Aisha is wrong because (8, 5) is not on the graph. When x = 8, y = 69 (not 5). The values a and b are from the equation, not coordinates of a point on the graph. 让孩子跟读每个答案的关键句子。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei writes the function y = 2x + 1. (i) What is the y-intercept of this graph (the point where the graph crosses the y-axis)? (ii) Find one other point on this graph by substituting x = 2. (iii) Aisha says the point (2, 1) is on the graph. Show that Aisha is wrong. 答案：The y-intercept is where x = 0. Substitute x = 0: y = 2(0) + 1 = 1. The y-intercept is (0, 1). Answer: (0, 1). (Note: Fossil: saying y-intercept is 2 or (2, 1).) Substitute x = 2: y = 2(2) + 1 = 5. The point is (2, 5). Answer: (2, 5). To check if (2, 1) is on the graph, substitute x = 2: y = 2(2) + 1 = 5. When x = 2, y = 5, not 1. Answer: No, (2, 1) is not on the graph. 题 2：Mr Lim gives the function y = 3x − 6. (i) What is the y-intercept? (ii) What is the x-intercept (the point where the graph crosses the x-axis)? (iii) Wei says the y-intercept is −6. Explain why Wei is wrong. 答案：The y-intercept is where x = 0. Substitute x = 0: y = 3(0) − 6 = −6. The y-intercept is (0, −6). Answer: (0, −6). The x-intercept is where y = 0. Substitute y = 0: 0 = 3x − 6. Add 6: 6 = 3x. Divide by 3: x = 2. The x-intercept is (2, 0). Answer: (2, 0). Wei is wrong because the y-intercept is a point, not a number. The y-intercept is (0, −6), not −6. 题 3：The cost of tickets is y = 8x + 5 (in S$). (i) A student buys 0 tickets. What is the cost y? What is the y-intercept? (ii) Is the point (3, 29) on the graph? Show your working. (iii) Aisha says (8, 5) is on the graph because a = 8 and b = 5. Explain why Aisha is wrong. 答案：Substitute x = 0: y = 8(0) + 5 = 5. Answer: y = 5 (S$5). The y-intercept is (0, 5). Substitute x = 3: y = 8(3) + 5 = 24 + 5 = 29. When x = 3, y = 29 ✓. Answer: Yes, (3, 29) is on the graph. Substitute x = 8: y = 8(8) + 5 = 64 + 5 = 69. When x = 8, y = 69, not 5. Answer: Aisha is wrong because (8, 5) is not on the graph. When x = 8, y = 69 (not 5). 教师逐题检查孩子的推理。如果孩子写对了，表扬：「推理很清楚！」如果有错误，引导孩子自己找错：「检查一下 y-intercept 是不是点 (0, b)？」或「检查一下代入 x 后 y 的值是不是对的？」家长可以用手机拍照孩子的推理，课后引导孩子把推理步骤和答案上传到 /learn 对应周的作业里，系统会自动批改。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N6. Functions and graphs: 6.4 graphs of linear functions（一次函数的图像），对应 preceding level 规则。第 34–36 周已完成 N6.1–6.3（Cartesian coordinates in two dimensions 平面直角坐标系，graph of a set of ordered pairs 有序对的集合的图像表示两个量之间的关系，linear functions y = ax + b 一次函数 y = ax + b）。本周只教 N6.4 graphs of linear functions（y = ax + b 的图像是一条直线，通过代入 x 或 y 求图像上的点，y-intercept 是 x = 0 的点 (0, b)，x-intercept 是 y = 0 的点，判断给定的点是否在图像上）。本周不教 N6.5（gradient 斜率）。(3) 本周化石：using (a, b) or (b, a) as a point on the graph instead of (0, b)（把 (a, b) 或 (b, a) 当作 y-intercept，正确：y-intercept 是 x = 0 时的点 (0, b)，所以 y = 2x + 3 的 y-intercept 是 (0, 3)，不是 (2, 3) 或 (3, 2)）；or saying the y-intercept of y = 2x + 3 is 2（说 y-intercept 是 2，错误，正确：y-intercept 是点 (0, 3)，不是数字 2）。(4) 本周方法：The graph of y = ax + b is a straight line（y = ax + b 的图像是一条直线）。Find points on the graph by substituting x or y（通过代入 x 或 y 求图像上的点）。The y-intercept is where x = 0, which gives the point (0, b)（y 轴截距是 x = 0 的点，即 (0, b)）。Example: y = 2x + 3 的 y-intercept 是 (0, 3)。The x-intercept is where y = 0（x 轴截距是 y = 0 的点）：substitute y = 0 and solve for x. Example: y = 3x − 6, x-intercept: 0 = 3x − 6 → x = 2, so x-intercept is (2, 0). Decide whether a given point lies on the graph: substitute the x-coordinate into the function and check if the y-coordinate matches（判断给定的点是否在图像上：代入 x 坐标，检查 y 坐标是否匹配）。Friendly integers. 金额用新元 S$。No calculator。本周只教 N6.4，不教 N6.5 gradient。(5) 课后作业：请孩子完成 /learn 页面本周作业（SMATH Week 37）。系统会自动批改选择题，写作题需孩子上传手写推理照片或打字步骤。家长微信会收到进度通报。下周继续第 38 周（N6.5 gradient 斜率 / 升降比）。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-38": {
    title: "斜率 / 升降比 — Gradient as vertical/horizontal change",
    mathExample: "Line from (0, 1) to (2, 5): vertical change = 5 − 1 = 4, horizontal change = 2 − 0 = 2, gradient = 4/2 = 2. Line from (0, 4) to (2, 0): vertical change = 0 − 4 = −4, horizontal change = 2, gradient = −4/2 = −2.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 斜率 / 升降比。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N6.5 the gradient of a linear graph as the ratio of the vertical change to the horizontal change (positive and negative gradients)。本周重点是 gradient = (vertical change) / (horizontal change)（斜率 = 竖直变化 / 水平变化），也可以用两个点 (x₁, y₁) 和 (x₂, y₂) 计算 gradient = (y₂ − y₁) / (x₂ − x₁)，positive gradient（正斜率）：line goes up as x increases（线向右上升），negative gradient（负斜率）：line goes down as x increases（线向右下降）。本周只教 N6.5 gradient as vertical/horizontal change，不教如何从斜率求直线方程（equation of a line from gradient），不教平行线和垂直线（parallel and perpendicular lines），不教中点（midpoint）和距离（distance）。本周完成官方 N6 全部内容（6.1–6.5）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个简单的坐标系（x 轴横向，y 轴竖向），标出两个点 (0, 1) 和 (2, 5)，用直线连接。指着这条线问孩子：「这条线是向上还是向下？」引导孩子说出：up（向上）。问：「从 (0, 1) 到 (2, 5)，y 的变化是多少？」引导孩子说出：5 − 1 = 4。强调：This is the vertical change（这是竖直变化）。问：「x 的变化是多少？」答：2 − 0 = 2。强调：This is the horizontal change（这是水平变化）。问：「斜率 / 升降比是什么公式？」引导孩子说出：gradient = (vertical change) / (horizontal change)（gradient = 竖直变化 / 水平变化）。写：gradient = 4 / 2 = 2. 强调：The gradient is 2. This is also called rise over run（斜率是 2，也叫 rise over run，升降比）。再问：「这条线向上还是向下？」答：向上。强调：When the line goes up as x increases, the gradient is positive（当线向右上升时，gradient 是正数）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: gradient = (horizontal change) / (vertical change) = 2 / 4 = 0.5（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误部分：writing run/rise instead of rise/run（把 run/rise 写成了 rise/run）。改正后写：The gradient is the ratio of the vertical change to the horizontal change. gradient = (vertical change) / (horizontal change) = 4 / 2 = 2, NOT (horizontal change) / (vertical change) = 2 / 4 = 0.5（标记为 ✓）。让孩子跟读改正后的句子 3 次：gradient = (vertical change) / (horizontal change), which is rise over run, NOT run over rise。再写一个错误例子：Line from (0, 4) to (2, 0): Wei says gradient = 4/2 = 2（标记为 ✗）。问孩子：「这个对吗？」圈出错误：dropping the negative sign when the line goes down（当线向下时丢掉负号）。改正：The vertical change is 0 − 4 = −4 (not 4 − 0 = 4). The horizontal change is 2 − 0 = 2. gradient = (vertical change) / (horizontal change) = −4 / 2 = −2, NOT 4 / 2 = 2（标记为 ✓）。强调：When the line goes down as x increases, the vertical change is negative, so the gradient is negative（当线向右下降时，竖直变化是负数，所以 gradient 是负数）。让孩子跟读 3 次：When the line goes down as x increases, the gradient is negative, NOT positive。再问：「本周教如何从斜率求直线方程吗？」答：No（不教）。改正：This week we only teach N6.5: the gradient of a linear graph as the ratio of the vertical change to the horizontal change (positive and negative gradients). We do NOT teach how to find the equation of a line from the gradient, or parallel and perpendicular lines, or midpoint and distance（本周只教 N6.5：斜率是竖直变化与水平变化的比，正斜率与负斜率。我们不教如何从斜率求直线方程，不教平行线和垂直线，不教中点和距离）。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（line from (0, 2) to (3, 8), find the gradient）：A line passes through the points (0, 2) and (3, 8). (i) What is the vertical change from (0, 2) to (3, 8)? (ii) What is the horizontal change from (0, 2) to (3, 8)? (iii) What is the gradient of this line? Show your calculation. 步骤：The vertical change is 8 − 2 = 6. Answer: 6. The horizontal change is 3 − 0 = 3. Answer: 3. The gradient is the ratio of the vertical change to the horizontal change. gradient = (vertical change) / (horizontal change) = 6 / 3 = 2. Answer: 2. (Note: Common fossil: writing (horizontal change) / (vertical change) = 3 / 6 = 0.5. This is wrong because the gradient is rise over run, which is (vertical change) / (horizontal change), not run over rise.) 例题 2（line from (0, 10) to (5, 0), find the gradient and explain）：Wei draws a line that passes through (0, 10) and (5, 0). (i) What is the gradient of this line? Show your working. (ii) Wei says: 「The line goes down as x increases, so the gradient should be positive.」 Explain why Wei is wrong. 步骤：The vertical change is 0 − 10 = −10. The horizontal change is 5 − 0 = 5. gradient = (vertical change) / (horizontal change) = −10 / 5 = −2. Answer: −2. (Note: The line goes down as x increases, so the gradient is negative. Common fossil: dropping the negative sign and saying the gradient is 2. This is wrong because when y decreases as x increases, the gradient must be negative.) Wei is wrong because when a line goes down as x increases, the vertical change is negative (y decreases). The gradient is (vertical change) / (horizontal change). If the vertical change is negative, the gradient is negative, not positive. Answer: Wei is wrong because when the line goes down as x increases, the gradient is negative, not positive. 例题 3（line from (1, 3) to (4, 12), find gradient using formula）：Aisha plots a line that passes through (1, 3) and (4, 12). (i) Find the gradient of this line using the formula: gradient = (y₂ − y₁) / (x₂ − x₁). (ii) Mr Lim says the gradient is (x₂ − x₁) / (y₂ − y₁) = 3 / 9 = 1/3. Explain why Mr Lim is wrong. 步骤：Let (x₁, y₁) = (1, 3) and (x₂, y₂) = (4, 12). The gradient = (y₂ − y₁) / (x₂ − x₁) = (12 − 3) / (4 − 1) = 9 / 3 = 3. Answer: 3. Mr Lim is wrong because the gradient formula is (y₂ − y₁) / (x₂ − x₁), not (x₂ − x₁) / (y₂ − y₁). Mr Lim swapped the numerator and denominator. The correct gradient is (y₂ − y₁) / (x₂ − x₁) = 9 / 3 = 3, not 1/3. Answer: Mr Lim is wrong because the gradient is (y₂ − y₁) / (x₂ − x₁) = 9 / 3 = 3, not (x₂ − x₁) / (y₂ − y₁) = 3 / 9 = 1/3. He used run over rise instead of rise over run. 让孩子跟读每个答案的关键句子。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：A line passes through the points (0, 2) and (3, 8). (i) What is the vertical change from (0, 2) to (3, 8)? (ii) What is the horizontal change from (0, 2) to (3, 8)? (iii) What is the gradient of this line? Show your calculation. 答案：vertical change = 8 − 2 = 6. Answer: 6. horizontal change = 3 − 0 = 3. Answer: 3. gradient = (vertical change) / (horizontal change) = 6 / 3 = 2. Answer: 2. (Note: Fossil: writing run/rise = 3/6 = 0.5.) 题 2：Wei draws a line that passes through (0, 10) and (5, 0). (i) What is the gradient of this line? Show your working. (ii) Wei says: 「The line goes down as x increases, so the gradient should be positive.」 Explain why Wei is wrong. 答案：vertical change = 0 − 10 = −10. horizontal change = 5 − 0 = 5. gradient = −10 / 5 = −2. Answer: −2. Wei is wrong because when the line goes down as x increases, the gradient is negative, not positive. 题 3：Aisha plots a line that passes through (1, 3) and (4, 12). (i) Find the gradient using gradient = (y₂ − y₁) / (x₂ − x₁). (ii) Mr Lim says the gradient is (x₂ − x₁) / (y₂ − y₁) = 1/3. Explain why Mr Lim is wrong. 答案：gradient = (12 − 3) / (4 − 1) = 9 / 3 = 3. Answer: 3. Mr Lim is wrong because the gradient is (y₂ − y₁) / (x₂ − x₁) = 9 / 3 = 3, not (x₂ − x₁) / (y₂ − y₁) = 3 / 9 = 1/3. He used run over rise instead of rise over run. 教师逐题检查孩子的推理。如果孩子写对了，表扬：「推理很清楚！」如果有错误，引导孩子自己找错：「检查一下 gradient 是不是 rise over run（竖直变化除以水平变化）？」或「检查一下线向下时 gradient 是不是负数？」家长可以用手机拍照孩子的推理，课后引导孩子把推理步骤和答案上传到 /learn 对应周的作业里，系统会自动批改。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N6. Functions and graphs: 6.5 the gradient of a linear graph as the ratio of the vertical change to the horizontal change (positive and negative gradients)（斜率 / 升降比），对应 preceding level 规则。第 34–37 周已完成 N6.1–6.4（Cartesian coordinates in two dimensions 平面直角坐标系，graph of a set of ordered pairs 有序对的集合的图像表示两个量之间的关系，linear functions y = ax + b 一次函数 y = ax + b，graphs of linear functions 一次函数的图像）。本周只教 N6.5 the gradient of a linear graph as the ratio of the vertical change to the horizontal change (positive and negative gradients)（gradient = (vertical change) / (horizontal change)，也可以用两个点 (x₁, y₁) 和 (x₂, y₂) 计算 gradient = (y₂ − y₁) / (x₂ − x₁)，positive gradient 正斜率：line goes up as x increases 线向右上升，negative gradient 负斜率：line goes down as x increases 线向右下降）。本周不教如何从斜率求直线方程，不教平行线和垂直线，不教中点和距离。本周完成官方 N6 全部内容（6.1–6.5）。(3) 本周化石：writing run/rise instead of rise/run（把 run/rise 当成 gradient，错误，gradient 是 rise over run，竖直变化除以水平变化）；or dropping the negative sign when the line goes down（当线向下时丢掉负号，错误，line goes down as x increases 时 gradient 是负数）。(4) 本周方法：gradient = (vertical change) / (horizontal change)（斜率 = 竖直变化 / 水平变化）。Also gradient = (y₂ − y₁) / (x₂ − x₁)（也可以用两个点计算）。This is also called rise over run（也叫 rise over run，升降比）。Positive gradient: line goes up as x increases（正斜率：线向右上升）。Negative gradient: line goes down as x increases（负斜率：线向右下降）。Example: from (0, 1) to (2, 5), vertical change = 4, horizontal change = 2, gradient = 4/2 = 2. Example: from (0, 4) to (2, 0), vertical change = −4, horizontal change = 2, gradient = −4/2 = −2. Friendly integers. 金额用新元 S$。No calculator。(5) 课后作业：请孩子完成 /learn 页面本周作业（SMATH Week 38）。系统会自动批改选择题，写作题需孩子上传手写推理照片或打字步骤。家长微信会收到进度通报。本周完成官方 N6 全部内容。不再继续（第 34–38 周已完成 N6.1–6.5 Functions and graphs）。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-39": {
    title: "方程的概念 — Concept of equation",
    mathExample: "2x + 1 = 7 is an equation ✓ (has equal sign =). 3x + 5 is an expression ✗ (no equal sign). Is x = 3 a solution of 2x + 1 = 7? Check: 2(3) + 1 = 7 ✓ so x = 3 is a solution.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 方程的概念。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.1 concept of equation。本周重点是 an equation is a statement that two expressions are equal（方程是表示两个式子相等的陈述，有等号 =），an expression has no equal sign（代数式没有等号），the two sides of an equation are equal（方程的两边相等），you may check whether a given number makes an equation true by substitution（可以用代入的办法检查某个数是否使方程成立）。Example: is x = 3 a solution of 2x + 1 = 7? Substitute x = 3 into the left side: 2(3) + 1 = 7 ✓, so x = 3 is a solution。Distinguish 2x+1 (expression) from 2x+1=7 (equation)。本周只教 N7.1 concept of equation，不教如何解方程（solving equations using inverse operations or 'do the same to both sides'），不教 N7.2 solving linear equations in one variable，不教 N7.3 fractional equations，不教 N7.4 formulating a linear equation to solve problems。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写 2x + 1 = 7 和 3x + 5。指着 2x + 1 = 7 问孩子：「这个有等号吗？」引导孩子说出：Yes, it has an equal sign (=)。强调：An equation is a statement that two expressions are equal. An equation has an equal sign (=)（方程是表示两个式子相等的陈述，方程有等号）。写：2x + 1 = 7 is an equation ✓。指着 3x + 5 问孩子：「这个有等号吗？」引导孩子说出：No, it does not have an equal sign。强调：An expression is a combination of numbers, variables, and operations. An expression does NOT have an equal sign（代数式是数字、变量和运算的组合，代数式没有等号）。写：3x + 5 is an expression ✓。再问：「2x + 1 = 7 是方程还是代数式？」答：equation 方程。「3x + 5 是方程还是代数式？」答：expression 代数式。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 「3x + 2 is an equation」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：calling an expression like 3x + 2 an equation（把代数式 3x + 2 说成方程）。改正后写：3x + 2 is an expression, not an equation. An equation must have an equal sign (=), and 3x + 2 does not have an equal sign（标记为 ✓）。让孩子跟读改正后的句子 3 次：3x + 2 is an expression, not an equation. An equation must have an equal sign。再写一个错误例子：Mr Lim says: 「2x + 1 = 7 is an expression」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：saying an equation like 2x + 1 = 7 is an expression（把方程 2x + 1 = 7 说成代数式）。改正：2x + 1 = 7 is an equation, not an expression. An equation has an equal sign (=), and 2x + 1 = 7 has an equal sign（标记为 ✓）。强调：An equation has an equal sign (=), an expression does not have an equal sign（方程有等号，代数式没有等号）。让孩子跟读 3 次：An equation has an equal sign (=), an expression does not。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（Is 2x + 1 = 7 an equation or an expression? Is x = 3 a solution?）：Wei writes: 2x + 1 = 7. (i) Is this an equation or an expression? Explain your answer. (ii) Is x = 3 a solution of this equation? Show your working by substituting x = 3 into the equation. 步骤：2x + 1 = 7 has an equal sign (=). An equation is a statement that two expressions are equal. The left side is 2x + 1 and the right side is 7. Answer: 2x + 1 = 7 is an equation. Substitute x = 3 into the left side of the equation: 2x + 1 = 2(3) + 1 = 6 + 1 = 7. The right side is 7. When x = 3, the left side equals the right side (7 = 7 ✓). Answer: Yes, x = 3 is a solution of 2x + 1 = 7. 例题 2（Is 3x + 5 an equation or an expression? Why is Mr Lim wrong?）：Aisha writes: 3x + 5. (i) Is this an equation or an expression? Explain your answer. (ii) Mr Lim says「3x + 5 is an equation」. Explain why Mr Lim is wrong. 步骤：3x + 5 does not have an equal sign (=). An expression is a combination of numbers, variables, and operations, but it does not have an equal sign. Answer: 3x + 5 is an expression, not an equation. An equation must have an equal sign (=) to show that two expressions are equal. 3x + 5 has no equal sign, so it is an expression, not an equation. Answer: Mr Lim is wrong because 3x + 5 is an expression. An equation must have an equal sign, and 3x + 5 does not have an equal sign. 例题 3（Check n = 2 in C = 8n + 10 when C = 26, why is Wei wrong saying 8n + 10 is an equation, why is Aisha wrong saying C = 8n + 10 is an expression）：The cost of tickets (in S$) is given by the equation C = 8n + 10, where C is the total cost and n is the number of tickets. (i) Is n = 2 a solution when the total cost is C = 26? Check by substituting n = 2 into the equation C = 8n + 10. (ii) Wei says「8n + 10 is an equation」. Explain why Wei is wrong. (iii) Aisha says「C = 8n + 10 is an expression」. Explain why Aisha is wrong. 步骤：Substitute n = 2 into the right side: 8n + 10 = 8(2) + 10 = 16 + 10 = 26. The left side is C = 26. When n = 2, the right side equals the left side (26 = 26 ✓). Answer: Yes, n = 2 is a solution when C = 26. 8n + 10 does not have an equal sign. An equation must have an equal sign to show that two expressions are equal. 8n + 10 is an expression, not an equation. Answer: Wei is wrong because 8n + 10 is an expression, not an equation. An equation must have an equal sign. C = 8n + 10 has an equal sign (=). An equation is a statement that two expressions are equal. The left side is C and the right side is 8n + 10. C = 8n + 10 is an equation, not an expression. Answer: Aisha is wrong because C = 8n + 10 is an equation. An equation has an equal sign, and C = 8n + 10 has an equal sign. 教师一边说一边板书，每步停顿，让孩子看清楚。强调：An equation has an equal sign (=), an expression does not。Check a solution by substitution: substitute the value into the equation and check if the left side equals the right side。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei writes: 2x + 1 = 7. (i) Is this an equation or an expression? Explain your answer. (ii) Is x = 3 a solution of this equation? Show your working by substituting x = 3 into the equation. (iii) Is x = 2 a solution of this equation? Show your working. 答案：2x + 1 = 7 has an equal sign (=). An equation is a statement that two expressions are equal. Answer: 2x + 1 = 7 is an equation. Substitute x = 3 into the left side: 2x + 1 = 2(3) + 1 = 6 + 1 = 7. The right side is 7. When x = 3, the left side equals the right side (7 = 7 ✓). Answer: Yes, x = 3 is a solution. Substitute x = 2 into the left side: 2x + 1 = 2(2) + 1 = 4 + 1 = 5. The right side is 7. When x = 2, the left side is 5 but the right side is 7 (5 ≠ 7 ✗). Answer: No, x = 2 is not a solution because 5 ≠ 7. 题 2：Aisha writes: 3x + 5. (i) Is this an equation or an expression? Explain your answer. (ii) Mr Lim says「3x + 5 is an equation」. Explain why Mr Lim is wrong. 答案：3x + 5 does not have an equal sign (=). An expression is a combination of numbers, variables, and operations, but it does not have an equal sign. Answer: 3x + 5 is an expression, not an equation. An equation must have an equal sign (=) to show that two expressions are equal. 3x + 5 has no equal sign, so it is an expression, not an equation. Answer: Mr Lim is wrong because 3x + 5 is an expression. An equation must have an equal sign, and 3x + 5 does not have an equal sign. 题 3：The cost of tickets (in S$) is given by the equation C = 8n + 10, where C is the total cost and n is the number of tickets. (i) Is n = 2 a solution when the total cost is C = 26? Check by substituting n = 2 into the equation C = 8n + 10. (ii) Wei says「8n + 10 is an equation」. Explain why Wei is wrong. (iii) Aisha says「C = 8n + 10 is an expression」. Explain why Aisha is wrong. 答案：Substitute n = 2 into the right side: 8n + 10 = 8(2) + 10 = 16 + 10 = 26. The left side is C = 26. When n = 2, the right side equals the left side (26 = 26 ✓). Answer: Yes, n = 2 is a solution when C = 26. 8n + 10 does not have an equal sign. An equation must have an equal sign to show that two expressions are equal. 8n + 10 is an expression, not an equation. Answer: Wei is wrong because 8n + 10 is an expression, not an equation. An equation must have an equal sign. C = 8n + 10 has an equal sign (=). An equation is a statement that two expressions are equal. The left side is C and the right side is 8n + 10. C = 8n + 10 is an equation, not an expression. Answer: Aisha is wrong because C = 8n + 10 is an equation. An equation has an equal sign, and C = 8n + 10 has an equal sign. 如果孩子算错，教师指出错在哪一步，让孩子重新算那一步。不直接给答案。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.1 concept of equation（方程的概念），对应 preceding level 规则。本周只教 N7.1 concept of equation（an equation is a statement that two expressions are equal 方程是表示两个式子相等的陈述，有等号 =；an expression has no equal sign 代数式没有等号；you may check whether a given number makes an equation true by substitution 可以用代入检查某个数是否使方程成立）。Example: is x = 3 a solution of 2x + 1 = 7? Substitute x = 3 into the left side: 2(3) + 1 = 7 ✓, so x = 3 is a solution。Distinguish 2x+1 (expression) from 2x+1=7 (equation)。本周不教如何解方程（Do not teach solving equations using inverse operations or 'do the same to both sides'），不教 N7.2 solving linear equations in one variable，不教 N7.3 fractional equations，不教 N7.4 formulating a linear equation to solve problems。(3) 本周化石：calling 3x + 2 an equation（把代数式 3x + 2 说成方程）；or saying 2x + 1 = 7 is an expression（把方程 2x + 1 = 7 说成代数式）。(4) 作业在 /learn 页面第 39 周，完成后系统会自动批改选择题，写作部分有 AI 反馈。对家长：「孩子完成作业后，我们会在微信群里同步进度。」不提「小班课」「包过」等销售话术。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-40": {
    title: "解一元一次方程 — Solving linear equations in one variable",
    mathExample: "2x + 1 = 7 → Subtract 1 from both sides: 2x + 1 − 1 = 7 − 1 → 2x = 6 → Divide by 2: x = 3. Check: 2(3) + 1 = 7 ✓. 3x − 2 = x + 6 → Subtract x from both sides: 2x − 2 = 6 → Add 2 to both sides: 2x = 8 → x = 4. Check: 10 = 10 ✓.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 解一元一次方程。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.2 solving linear equations in one variable。本周重点是 solve ax + b = c and ax + b = cx + d by doing the same operation to both sides (add/subtract/multiply/divide) until x is alone（解 ax + b = c 和 ax + b = cx + d，对两边同时做同样的操作，直到 x 单独在一边）。Use inverse operations: if +b, subtract b from both sides; if −b, add b to both sides; if ax, divide both sides by a（用逆运算：如果有 +b，两边同时减 b；如果有 −b，两边同时加 b；如果有 ax，两边同时除以 a）。Example: 2x + 1 = 7 → 2x + 1 − 1 = 7 − 1 → 2x = 6 → x = 3. Check: 2(3) + 1 = 7 ✓。Friendly integers so x is an integer（友好整数）。Check by substitution after solving（解出来后代入检验）。本周只教 N7.2 solving linear equations in one variable，不教 N7.3 fractional equations（分式方程，例如 x/3 + (x−2)/4 = 3），不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写 2x + 1 = 7。问孩子：「这是什么？」引导孩子说出：This is an equation（这是方程）。强调：An equation is a statement that two expressions are equal（方程是表示两个式子相等的陈述）。问：「我们需要找到 x 的值，让左边等于右边。怎么做？」引导孩子思考：To isolate x, we need to do the same operation to both sides（要把 x 分离出来，我们需要对两边做同样的操作）。写：2x + 1 = 7。问：「左边有 +1，我们应该做什么操作？」答：Subtract 1 from both sides（两边同时减 1）。写：2x + 1 − 1 = 7 − 1 → 2x = 6。问：「现在怎么求 x？」答：Divide both sides by 2（两边同时除以 2）。写：x = 3。强调：We must do the same operation to BOTH sides to keep the equation balanced（我们必须对两边做同样的操作才能保持方程平衡）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei solves 2x + 1 = 7. Wei writes: 2x + 1 = 7 → 2x = 7（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：changing only one side（只改了一边）。指出：Wei only removed +1 from the left side, but did not subtract 1 from the right side（Wei 只把左边的 +1 去掉了，但没有从右边减 1）。强调：To keep the equation balanced, you must do the same operation to BOTH sides（要保持方程平衡，你必须对两边做同样的操作）。改正后写：2x + 1 = 7 → 2x + 1 − 1 = 7 − 1 → 2x = 6 → x = 3（标记为 ✓）。让孩子跟读改正后的步骤：2x + 1 − 1 = 7 − 1 → 2x = 6。再问孩子：「为什么要两边同时减 1？」答：To keep the equation balanced（保持方程平衡）。让孩子跟读 3 次：Subtract 1 from both sides. 2x + 1 − 1 = 7 − 1。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范三道完整例题（写出推理步骤）。例题 1（Solve 2x + 1 = 7 and check）：Solve 2x + 1 = 7. Show your working. Check your answer by substitution. 步骤：① The equation is 2x + 1 = 7. ② Subtract 1 from both sides: 2x + 1 − 1 = 7 − 1. ③ Simplify: 2x = 6. ④ Divide both sides by 2: 2x ÷ 2 = 6 ÷ 2. ⑤ x = 3. ⑥ Check by substitution: 2(3) + 1 = 6 + 1 = 7 ✓. Answer: x = 3. 例题 2（Solve 3x − 2 = x + 6 and check）：Wei solves 3x − 2 = x + 6 and gets x = 4. (i) Solve 3x − 2 = x + 6. Show your working step by step. (ii) Check by substituting x = 4 into both sides of the equation. 步骤：① The equation is 3x − 2 = x + 6. ② Subtract x from both sides: 3x − 2 − x = x + 6 − x. ③ Simplify: 2x − 2 = 6. ④ Add 2 to both sides: 2x − 2 + 2 = 6 + 2. ⑤ Simplify: 2x = 8. ⑥ Divide both sides by 2: 2x ÷ 2 = 8 ÷ 2. ⑦ x = 4. ⑧ Check by substitution: Left side: 3(4) − 2 = 12 − 2 = 10. Right side: 4 + 6 = 10. 10 = 10 ✓. Answer: x = 4. 例题 3（Solve 4x + 5 = 21, check, explain fossil error）：Aisha solves 4x + 5 = 21. (i) Solve 4x + 5 = 21. Show your working. (ii) Check your answer by substitution. (iii) Aisha's friend says「I solved 4x + 5 = 21 by writing 4x = 21」. Explain what is wrong with this working. 步骤：① The equation is 4x + 5 = 21. ② Subtract 5 from both sides: 4x + 5 − 5 = 21 − 5. ③ Simplify: 4x = 16. ④ Divide both sides by 4: 4x ÷ 4 = 16 ÷ 4. ⑤ x = 4. ⑥ Check by substitution: 4(4) + 5 = 16 + 5 = 21 ✓. Answer: x = 4. The friend wrote 4x = 21 by only changing the left side. This is wrong because if you remove +5 from the left side, you must also subtract 5 from the right side to keep the equation balanced. The correct step is 4x + 5 − 5 = 21 − 5 → 4x = 16, not 4x = 21. 教师在白板或屏幕上写出每道题的完整步骤，孩子看着跟随。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Solve 2x + 1 = 7. Show your working. Check your answer by substitution. 答案：① The equation is 2x + 1 = 7. ② Subtract 1 from both sides: 2x + 1 − 1 = 7 − 1. ③ Simplify: 2x = 6. ④ Divide both sides by 2: 2x ÷ 2 = 6 ÷ 2. ⑤ x = 3. ⑥ Check by substitution: 2(3) + 1 = 6 + 1 = 7 ✓. Answer: x = 3. 题 2：Wei solves 3x − 2 = x + 6 and gets x = 4. (i) Solve 3x − 2 = x + 6. Show your working step by step. (ii) Check by substituting x = 4 into both sides of the equation. 答案：① The equation is 3x − 2 = x + 6. ② Subtract x from both sides: 3x − 2 − x = x + 6 − x. ③ Simplify: 2x − 2 = 6. ④ Add 2 to both sides: 2x − 2 + 2 = 6 + 2. ⑤ Simplify: 2x = 8. ⑥ Divide both sides by 2: 2x ÷ 2 = 8 ÷ 2. ⑦ x = 4. ⑧ Check by substitution: Left side: 3(4) − 2 = 12 − 2 = 10. Right side: 4 + 6 = 10. 10 = 10 ✓. Answer: x = 4. 题 3：Aisha solves 4x + 5 = 21. (i) Solve 4x + 5 = 21. Show your working. (ii) Check your answer by substitution. (iii) Aisha's friend says「I solved 4x + 5 = 21 by writing 4x = 21」. Explain what is wrong with this working. 答案：① The equation is 4x + 5 = 21. ② Subtract 5 from both sides: 4x + 5 − 5 = 21 − 5. ③ Simplify: 4x = 16. ④ Divide both sides by 4: 4x ÷ 4 = 16 ÷ 4. ⑤ x = 4. ⑥ Check by substitution: 4(4) + 5 = 16 + 5 = 21 ✓. Answer: x = 4. The friend wrote 4x = 21 by only changing the left side. This is wrong because if you remove +5 from the left side, you must also subtract 5 from the right side to keep the equation balanced. The correct step is 4x + 5 − 5 = 21 − 5 → 4x = 16, not 4x = 21. 孩子写完后，教师检查每一步推理，指出如果有步骤缺失或错误。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.2 solving linear equations in one variable（解一元一次方程），对应 preceding level 规则。本周只教 N7.2 solving linear equations in one variable（solve ax + b = c and ax + b = cx + d by doing the same operation to both sides until x is alone，对两边同时做同样的操作直到 x 单独在一边）。Use inverse operations: if +b, subtract b from both sides; if −b, add b to both sides; if ax, divide both sides by a（用逆运算）。Example: 2x + 1 = 7 → 2x + 1 − 1 = 7 − 1 → 2x = 6 → x = 3. Check: 2(3) + 1 = 7 ✓。Friendly integers so x is an integer（友好整数）。Check by substitution after solving（解出来后代入检验）。本周不教 N7.3 fractional equations（分式方程，例如 x/3 + (x−2)/4 = 3），不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。(3) 本周化石：changing only one side: 2x + 1 = 7 → 2x = 7 ✗（错误：只改了一边。正确：两边同时减 1）。(4) 本周作业在 /learn 页面，完成后系统自动批改 MCQ，writing 部分有 AI Kaizen 反馈（一个改善焦点）。家长会在微信群收到进度同步。不提「小班课」「包过」「保证录取」等话术。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. 本周对应申请 Sec 2 入学者的 preceding level（Sec 1）内容。第 39 周已完成 N7.1 concept of equation。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-41": {
    title: "解简单分式方程 — Solving simple fractional equations that can be reduced to linear equations",
    mathExample: "x/3 + (x−2)/4 = 3 → LCD 12 → Multiply EVERY term by 12: 4x + 3(x−2) = 36 → 4x + 3x − 6 = 36 → 7x = 42 → x = 6. Check: 6/3 + (6−2)/4 = 2 + 1 = 3 ✓. 3/(x−2) = 6 → Multiply both sides by (x−2): 3 = 6(x−2) → 3 = 6x − 12 → 15 = 6x → x = 5/2 (or 2.5). Check: 3/(2.5−2) = 3/0.5 = 6 ✓. x≠2.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 解简单分式方程。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.3 solving simple fractional equations that can be reduced to linear equations。官方例题：x/3 + (x−2)/4 = 3 和 3/(x−2) = 6。本周重点是 clear denominators by multiplying EVERY term (including the constant) by the LCD 两边每一项（包括常数）都乘以最小公倍数 LCD 来去分母；then solve the resulting linear equation the same way as Week 40 然后用第 40 周的方法解一元一次方程；check by substitution 代入检验；exclude values that make a denominator zero 排除使分母为零的值。本周只教 N7.3 solving simple fractional equations，不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写 x/3 + (x−2)/4 = 3。问孩子：「这个方程有分数。怎么解？」引导孩子思考：We need to clear the denominators（我们需要去掉分母）。问：「分母是 3 和 4。我们要找什么？」答：The LCD (lowest common denominator) 最小公倍数。写：LCD of 3 and 4 = 12。问：「找到 LCD 后做什么？」答：Multiply EVERY term on BOTH sides by the LCD（两边每一项都乘以 LCD）。强调：EVERY term including the constant on the right side（每一项包括右边的常数）。写：Multiply EVERY term by 12: 12 × (x/3) + 12 × ((x−2)/4) = 12 × 3。问：「12 × (x/3) 等于多少？」引导孩子算：12 ÷ 3 = 4，所以 12 × (x/3) = 4x。写：4x。问：「12 × ((x−2)/4) 等于多少？」答：12 ÷ 4 = 3，所以 12 × ((x−2)/4) = 3(x−2)。写：3(x−2)。问：「12 × 3 等于多少？」答：36。写：4x + 3(x−2) = 36。强调：We multiplied EVERY term including the 3 on the right（我们把每一项包括右边的 3 都乘以了 12）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei solves x/3 + (x−2)/4 = 3. Wei writes: Multiply by 12: 4x + 3(x−2) = 3（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：multiplying only the left side（只把左边乘以 12）。指出：Wei multiplied the left side by 12, but forgot to multiply the 3 on the right side by 12（Wei 把左边乘以 12，但忘记把右边的 3 也乘以 12）。强调：When you clear denominators, multiply EVERY term on BOTH sides by the LCD, including the constant on the right（去分母时，两边每一项都要乘以 LCD，包括右边的常数）。改正后写：4x + 3(x−2) = 36（标记为 ✓，因为 12 × 3 = 36）。让孩子跟读改正后的步骤：Multiply EVERY term by 12: 4x + 3(x−2) = 36。再给第二个化石例子：Aisha solves 3/(x−2) = 6. Aisha writes: 3 = 6（标记为 ✗）。问孩子：「这个对吗？」圈出错误：multiplying only one side（只把一边乘以 (x−2)）。指出：Aisha multiplied the left side by (x−2) to get 3, but forgot to multiply the right side by (x−2)（Aisha 把左边乘以 (x−2) 得到 3，但忘记把右边也乘以 (x−2)）。改正后写：3 = 6(x−2)（标记为 ✓）。让孩子跟读 3 次：Multiply BOTH sides by (x−2). 3 = 6(x−2)。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出推理步骤）。例题 1（Solve x/3 + (x−2)/4 = 3 and check）：Solve x/3 + (x−2)/4 = 3. Show your working step by step. Check your answer by substitution. 步骤：① The equation is x/3 + (x−2)/4 = 3. ② Find the LCD of 3 and 4: LCD = 12. ③ Multiply EVERY term on BOTH sides by 12: 12 × (x/3) + 12 × ((x−2)/4) = 12 × 3. ④ Simplify: 4x + 3(x−2) = 36. ⑤ Expand the bracket: 4x + 3x − 6 = 36. ⑥ Collect like terms: 7x − 6 = 36. ⑦ Add 6 to both sides: 7x = 42. ⑧ Divide by 7: x = 6. ⑨ Check by substitution: x/3 + (x−2)/4 = 6/3 + (6−2)/4 = 2 + 4/4 = 2 + 1 = 3 ✓. Answer: x = 6. 例题 2（Solve 3/(x−2) = 6, check, explain x≠2）：Solve 3/(x−2) = 6. (i) Show your working step by step. (ii) Check your answer by substitution. (iii) Explain why x ≠ 2. 步骤：① The equation is 3/(x−2) = 6. ② Multiply both sides by (x−2): 3 = 6(x−2). ③ Expand the right side: 3 = 6x − 12. ④ Add 12 to both sides: 3 + 12 = 6x → 15 = 6x. ⑤ Divide by 6: x = 15/6 = 5/2 or 2.5. ⑥ Check by substitution: 3/(x−2) = 3/(2.5−2) = 3/0.5 = 6 ✓. Answer: x = 5/2 or x = 2.5. ⑦ Explain: x ≠ 2 because if x = 2, the denominator (x−2) becomes zero, and division by zero is undefined. 教师在白板或屏幕上写出每道题的完整步骤，孩子看着跟随。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 2 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Solve x/3 + (x−2)/4 = 3. Show your working step by step. Check your answer by substitution. 答案：① The equation is x/3 + (x−2)/4 = 3. ② Find the LCD of 3 and 4: LCD = 12. ③ Multiply EVERY term on BOTH sides by 12: 12 × (x/3) + 12 × ((x−2)/4) = 12 × 3. ④ Simplify: 4x + 3(x−2) = 36. ⑤ Expand the bracket: 4x + 3x − 6 = 36. ⑥ Collect like terms: 7x − 6 = 36. ⑦ Add 6 to both sides: 7x = 42. ⑧ Divide by 7: x = 6. ⑨ Check by substitution: x/3 + (x−2)/4 = 6/3 + (6−2)/4 = 2 + 4/4 = 2 + 1 = 3 ✓. Answer: x = 6. 题 2：Solve 3/(x−2) = 6. (i) Show your working step by step. (ii) Check your answer by substitution. (iii) Explain why x ≠ 2. 答案：① The equation is 3/(x−2) = 6. ② Multiply both sides by (x−2): 3 = 6(x−2). ③ Expand the right side: 3 = 6x − 12. ④ Add 12 to both sides: 3 + 12 = 6x → 15 = 6x. ⑤ Divide by 6: x = 15/6 = 5/2 or 2.5. ⑥ Check by substitution: 3/(x−2) = 3/(2.5−2) = 3/0.5 = 6 ✓. Answer: x = 5/2 or x = 2.5. ⑦ Explain: x ≠ 2 because if x = 2, the denominator (x−2) becomes zero, and division by zero is undefined. 孩子写完后，教师检查每一步推理，指出如果有步骤缺失或错误。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.3 solving simple fractional equations that can be reduced to linear equations（解简单分式方程），对应 preceding level 规则。官方例题：x/3 + (x−2)/4 = 3 和 3/(x−2) = 6。本周只教 N7.3 solving simple fractional equations：clear denominators by multiplying EVERY term (including the constant) by the LCD 两边每一项（包括常数）都乘以 LCD 来去分母；then solve the resulting linear equation the same way as Week 40 然后用第 40 周的方法解一元一次方程；check by substitution 代入检验；exclude values that make a denominator zero 排除使分母为零的值（for 3/(x−2) = 6, x≠2）。本周不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。(3) 本周化石：multiplying only one term by the LCD, or multiplying only one side, when clearing denominators（去分母时只把一项或只把一边乘以 LCD）。Wrong: x/3 + (x−2)/4 = 3 → 4x + 3(x−2) = 3 ✗（错误：忘记把右边的 3 也乘以 12）。Wrong: 3/(x−2) = 6 → 3 = 6 ✗（错误：只把左边乘以 (x−2)）。Right: multiply EVERY term on BOTH sides by the LCD（正确：两边每一项都乘以 LCD）。(4) 本周作业在 /learn 页面，完成后系统自动批改 MCQ，writing 部分有 AI Kaizen 反馈（一个改善焦点）。家长会在微信群收到进度同步。不提「小班课」「包过」「保证录取」等话术。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. 本周对应申请 Sec 2 入学者的 preceding level（Sec 1）内容。第 39–40 周已完成 N7.1 concept of equation、N7.2 solving linear equations in one variable。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-42": {
    title: "列一元一次方程解应用题 — Formulating a linear equation in one variable to solve problems",
    mathExample: "Wei is x years old. Aisha is 3 years older. Together they are 27. → Equation: x + (x+3) = 27 → 2x + 3 = 27 → 2x = 24 → x = 12. Check: Wei 12, Aisha 15, 12+15 = 27 ✓. Book S$x, notebook S$4 less. 2 books + 1 notebook = S$26. → Equation: 2x + (x−4) = 26 → 3x − 4 = 26 → 3x = 30 → x = 10. Check: book S$10, notebook S$6, 2(10)+6 = 26 ✓.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 列一元一次方程解应用题。官方 MOE 2020 G3 Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.4 formulating a linear equation in one variable to solve problems。本周重点是 read a short school-life word problem 读一段学校生活小故事，write ONE linear equation in one unknown 写一个一元一次方程，solve it the same way as Week 40 用第 40 周方法解，check by substitution in the original story 在原故事中验算。Typical stories: ages 年龄（Wei is x, Aisha is x+3, together 27）、prices 物价（book S$x, notebook S$4 less, 2 books + 1 notebook S$26）、groups 人数分组（class 36, one group x, the other x+4）。Friendly integers 友好整数。Amounts in S$ 新元 only。No calculator。本周完成 N7（7.1–7.4），完成 Sec 1 NUMBER AND ALGEBRA N1–N7。本周不开始 GEOMETRY AND MEASUREMENT G1 angles（角）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写：Wei is x years old. Aisha is 3 years older than Wei. Together, they are 27 years old. 问孩子：「这是一个应用题 word problem。我们要找什么？」答：We need to find Wei's age（我们要找 Wei 的年龄）。问：「Wei 的年龄是什么？」引导孩子说：Let Wei's age = x（设 Wei 的年龄为 x）。写：Let Wei's age = x. 问：「Aisha is 3 years older than Wei. Aisha 的年龄是多少？」引导孩子说：Aisha's age = x + 3（Aisha 的年龄 = x + 3）。写：Aisha's age = x + 3. 强调：x + 3 is an expression for Aisha's age, not an equation（x + 3 是 Aisha 年龄的代数式 expression，不是方程 equation）。问：「Together they are 27. 怎么写成方程 equation？」引导孩子说：Wei's age + Aisha's age = 27（Wei 的年龄 + Aisha 的年龄 = 27）。写：x + (x+3) = 27. 强调：This is an equation because it has 「=」（这是一个方程，因为它有「=」号）。问：「现在怎么解这个方程？」答：Solve the same way as Week 40（用第 40 周的方法解）。写：x + x + 3 = 27 → 2x + 3 = 27 → 2x = 24 → x = 12. 问：「x = 12 是什么意思？」答：Wei is 12 years old（Wei 12 岁）。问：「Aisha 几岁？」答：Aisha is 12 + 3 = 15 years old. 问：「怎么检验？」答：Check: 12 + 15 = 27 ✓. 强调：We check by substitution in the original story（我们在原故事中代入检验）。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei reads: 「Wei is x years old. Aisha is 3 years older. Together they are 27.」 Wei writes: x + 3（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：x + 3 is only an expression, not an equation（x + 3 只是一个代数式 expression，不是方程 equation）。指出：Wei wrote an expression for Aisha's age, but forgot to write the equation with the total 27（Wei 写了 Aisha 年龄的代数式，但忘记写包含总数 27 的方程）。强调：An expression is just one quantity, like x + 3. An equation has「=」and two sides, like x + (x+3) = 27（代数式只是一个量，比如 x + 3。方程有「=」号和两边，比如 x + (x+3) = 27）。改正后写：Equation: x + (x+3) = 27（标记为 ✓）。让孩子跟读改正后的步骤：Formulate the equation: x + (x+3) = 27。再给第二个化石例子：Aisha reads: 「A notebook costs S$4 less than a book.」 Aisha writes: notebook = x + 4（标记为 ✗）。问孩子：「这个对吗？」圈出错误：translating 「少 / less than」 backwards（把「少 / less than」翻译反了）。指出：「Less than」 means subtract, not add（「less than」 意思是减，不是加）。If a notebook costs S$4 less than a book, and the book is x, then the notebook is x − 4, not x + 4（如果笔记本比书少 S$4，书是 x，那么笔记本是 x − 4，不是 x + 4）。改正后写：notebook = x − 4（标记为 ✓）。让孩子跟读 3 次：Less than means subtract. Notebook = x − 4。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出推理步骤）。例题 1（Wei is x, Aisha is 3 older, together 27）：Wei is x years old. Aisha is 3 years older than Wei. Together, Wei and Aisha are 27 years old. (i) Formulate an equation. (ii) Solve the equation. (iii) Check by substitution in the original story. 步骤：① Read the problem: Wei is x years old. Aisha is 3 years older. Together they are 27. ② Identify the unknown: Let Wei's age = x. ③ Translate the story into algebraic expressions: Aisha's age = x + 3. ④ Formulate the equation using the total: Wei's age + Aisha's age = 27 → x + (x+3) = 27. ⑤ Solve the equation: x + x + 3 = 27 → 2x + 3 = 27 → 2x = 27 − 3 → 2x = 24 → x = 12. ⑥ Check by substitution in the original story: Wei is 12 years old. Aisha is 12 + 3 = 15 years old. Together: 12 + 15 = 27 ✓. Answer: Wei is 12 years old, Aisha is 15 years old. 例题 2（Book S$x, notebook S$4 less, 2 books + 1 notebook = S$26）：A book costs S$x. A notebook costs S$4 less than the book. Wei buys 2 books and 1 notebook for a total of S$26. (i) Formulate an equation. (ii) Solve the equation. (iii) Check by substitution. 步骤：① Read the problem: Book S$x, notebook S$4 less, 2 books + 1 notebook = S$26. ② Let the price of a book = S$x. ③ Translate: The price of a notebook = S$(x − 4) because it is S$4 less than the book. ④ Formulate the equation: 2 books + 1 notebook = S$26 → 2x + (x−4) = 26. ⑤ Solve: 2x + x − 4 = 26 → 3x − 4 = 26 → 3x = 30 → x = 10. ⑥ Check: Book = S$10. Notebook = S$(10−4) = S$6. Total: 2(10) + 6 = 20 + 6 = 26 ✓. Answer: The book costs S$10, the notebook costs S$6. 每个步骤写完后，让孩子跟着说一遍。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 2 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei is x years old. Aisha is 4 years older than Wei. Together, Wei and Aisha are 28 years old. (i) Formulate an equation. (ii) Solve the equation. (iii) Check by substitution in the original story. 答案：① Let Wei's age = x. ② Aisha's age = x + 4. ③ Equation: x + (x+4) = 28. ④ Solve: 2x + 4 = 28 → 2x = 24 → x = 12. ⑤ Check: Wei 12, Aisha 16, 12+16 = 28 ✓. Answer: Wei is 12 years old, Aisha is 16 years old. 题 2：Mr Lim splits a class of 40 students into two groups. One group has 6 more students than the other. Let x be the number of students in the smaller group. (i) Formulate an equation. (ii) Solve the equation. (iii) Check by substitution. 答案：① Let x = number of students in the smaller group. ② Larger group = x + 6. ③ Equation: x + (x+6) = 40. ④ Solve: 2x + 6 = 40 → 2x = 34 → x = 17. ⑤ Check: Smaller group 17, larger group 23, 17+23 = 40 ✓. Answer: The smaller group has 17 students, the larger group has 23 students. 孩子做完后，教师检查步骤。如果孩子卡在某一步，教师提示关键词（比如「Formulate the equation using the total」或「Check by substitution in the story」）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.4 formulating a linear equation in one variable to solve problems（列一元一次方程解应用题），对应 preceding level 规则。本周只教 N7.4：read a short school-life word problem 读应用题，write ONE linear equation in one unknown 写一个一元一次方程，solve it the same way as Week 40 用第 40 周方法解，check by substitution in the original story 在原故事中验算。Typical stories: ages 年龄、prices 物价（S$ 新元 only）、groups 人数分组。Friendly integers。No calculator。第 42 周完成 N7（7.1 concept of equation, 7.2 solving linear equations, 7.3 solving simple fractional equations, 7.4 formulating a linear equation to solve problems）。第 39–42 周完成 Sec 1 NUMBER AND ALGEBRA N1–N7（质数分解、HCF/LCM、平方立方和根、负数四则、数轴、不等号、近似估算、有理数比、比的应用、百分数、速率速度、用字母表示数、代数、坐标、一次函数、方程）。本周不开始 GEOMETRY AND MEASUREMENT G1 angles（角）。(3) 本周化石：writing an expression instead of an equation（写成代数式而不是方程）。Wrong: Wei is x, Aisha is 3 older, together 27 → write x + 3 ✗（错误：这只是 Aisha 年龄的代数式，不是方程）。Wrong: notebook is S$4 less than book → x + 4 instead of x − 4 ✗（错误：中文「少」语序翻译错误）。Right: write one equation with「=」and the total（正确：写一个包含「=」和总数的方程）。(4) 本周作业在 /learn 页面，完成后系统自动批改 MCQ，writing 部分有 AI Kaizen 反馈（一个改善焦点）。家长会在微信群收到进度同步。不提「小班课」「包过」「保证录取」等话术。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. 本周对应申请 Sec 2 入学者的 preceding level（Sec 1）内容。第 39–41 周已完成 N7.1 concept of equation、N7.2 solving linear equations in one variable、N7.3 solving simple fractional equations。恭喜完成 N7 Equations and inequalities 所有小节！",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-43": {
    title: "识别和分类四种角 — Right, acute, obtuse and reflex angles",
    mathExample: "90° is right. 35° is acute (0° < 35° < 90°). 95° is obtuse (90° < 95° < 180°). 200° is reflex (180° < 200° < 360°). 270° is reflex (180° < 270° < 360°). 180° is NOT one of the four 1.1 types.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 识别和分类四种角。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.1 right, acute, obtuse and reflex angles。本周重点是 classify four types of angles（分类四种角）。Right angle = 90°（直角 = 90°）。Acute angle: greater than 0° and less than 90°（锐角：大于 0° 小于 90°）。Obtuse angle: greater than 90° and less than 180°（钝角：大于 90° 小于 180°）。Reflex angle: greater than 180° and less than 360°（优角：大于 180° 小于 360°）。Examples: 35° is acute; 95° is obtuse; 200° is reflex; 90° is right。180° is NOT one of the four 1.1 types（180° 不是这四种角之一）。本周只教 G1.1（four types of angles），不教 G1.2（vertically opposite angles / angles on a straight line / angles at a point）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个直角标记（小正方形）。问孩子：「这个角叫什么？」引导孩子说出：Right angle（直角）。强调：A right angle equals 90°（直角 = 90°）。写：90° = right angle。再画一个小角（明显小于 90°）。问：「这个角小于 90° 还是大于 90°？」答：Less than 90°（小于 90°）。说：This is an acute angle（这是锐角）。强调：Acute angle is greater than 0° and less than 90°（锐角大于 0° 小于 90°）。写：0° < acute < 90°。再画一个大角（明显大于 90° 但小于 180°）。问：「这个角大于 90° 还是小于 90°？」答：Greater than 90°。说：This is an obtuse angle（这是钝角）。强调：Obtuse angle is greater than 90° and less than 180°（钝角大于 90° 小于 180°）。写：90° < obtuse < 180°。最后画一个更大的角（明显大于 180° 但小于 360°）。问：「这个角大于 180° 还是小于 180°？」答：Greater than 180°。说：This is a reflex angle（这是优角）。强调：Reflex angle is greater than 180° and less than 360°（优角大于 180° 小于 360°）。写：180° < reflex < 360°。如果孩子卡住，教师先示范一次，让孩子跟着说。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 95° is a reflex angle（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：mixing obtuse and reflex（混淆钝角和优角）。指出：Wei said 95° is reflex, but 95° is obtuse, not reflex（Wei 说 95° 是优角，但 95° 是钝角，不是优角）。为什么？Because 90° < 95° < 180°（因为 90° < 95° < 180°）。强调：Obtuse angle is between 90° and 180°（钝角在 90° 和 180° 之间）。Reflex angle is between 180° and 360°（优角在 180° 和 360° 之间）。改正后写：95° is obtuse（标记为 ✓，因为 90° < 95° < 180°）。让孩子跟读改正后的句子：95° is obtuse because 90° is less than 95° and 95° is less than 180°。再给第二个化石例子：Aisha says: 270° is obtuse（标记为 ✗）。问孩子：「这个对吗？」圈出错误：270° is reflex, not obtuse（270° 是优角，不是钝角）。为什么？Because 180° < 270° < 360°（因为 180° < 270° < 360°）。改正后写：270° is reflex（标记为 ✓，因为 180° < 270° < 360°）。让孩子跟读 3 次：270° is reflex because 270° is greater than 180° and less than 360°。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤）。例题 1（Classify 35°）：What type of angle is 35°? Explain your answer. 步骤：① 35° is less than 90°（35° 小于 90°）. ② An acute angle is greater than 0° and less than 90°（锐角大于 0° 小于 90°）. ③ Since 0° < 35° < 90°, 35° is an acute angle. Answer: 35° is acute. 例题 2（Classify 200°）：What type of angle is 200°? Explain your answer. 步骤：① 200° is greater than 180°（200° 大于 180°）. ② A reflex angle is greater than 180° and less than 360°（优角大于 180° 小于 360°）. ③ Since 180° < 200° < 360°, 200° is a reflex angle. Answer: 200° is reflex. 例题 3（Classify 90°）：Wei says: 「An angle measures 90°. What type of angle is this?」 Aisha says: 「90° is a right angle.」 Is Aisha correct? Explain. 步骤：① A right angle equals 90°（直角 = 90°）. ② The angle measures 90°. ③ Since the angle equals 90°, it is a right angle. Answer: Yes, Aisha is correct. 90° is a right angle. 例题 4（Explain fossil error）：Wei says: 「95° is a reflex angle.」 Explain what is wrong with Wei's statement. 步骤：① 95° is greater than 90° but less than 180°（95° 大于 90° 但小于 180°）. ② An obtuse angle is greater than 90° and less than 180°（钝角大于 90° 小于 180°）. ③ A reflex angle is greater than 180° and less than 360°（优角大于 180° 小于 360°）. ④ Since 90° < 95° < 180°, 95° is obtuse, not reflex. Answer: Wei is wrong because 95° is an obtuse angle, not a reflex angle. 95° is between 90° and 180°, so it is obtuse. Reflex angles are between 180° and 360°. 教师在白板或屏幕上写出每道题的完整步骤，孩子看着跟随。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei is in the classroom. He notices the corner where the door meets the wall forms an angle of 35°. What type of angle is 35°? Explain your answer. 答案：① 35° is less than 90°. ② An acute angle is greater than 0° and less than 90°. ③ Since 0° < 35° < 90°, 35° is an acute angle. Answer: 35° is acute. 题 2：Aisha looks at the clock on the sports field. The minute hand and hour hand form an angle of 200°. What type of angle is 200°? Explain your answer. 答案：① 200° is greater than 180°. ② A reflex angle is greater than 180° and less than 360°. ③ Since 180° < 200° < 360°, 200° is a reflex angle. Answer: 200° is reflex. 题 3：Mr Lim draws three angles on the whiteboard: Angle A is 90°, Angle B is 95°, and Angle C is 270°. (i) What type of angle is Angle A? (ii) What type of angle is Angle B? (iii) What type of angle is Angle C? (iv) Wei says「Angle B is a reflex angle.」Explain what is wrong with Wei's statement. 答案：(i) Angle A = 90° is a right angle. (ii) Angle B = 95°: 90° < 95° < 180°, so Angle B is obtuse. (iii) Angle C = 270°: 180° < 270° < 360°, so Angle C is reflex. (iv) Wei is wrong because Angle B (95°) is an obtuse angle, not a reflex angle. 95° is between 90° and 180°, so it is obtuse. Reflex angles are between 180° and 360°. 孩子写完后，教师检查每一步推理，指出如果有步骤缺失或错误。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.1 right, acute, obtuse and reflex angles（识别和分类四种角），对应 preceding level 规则。本周只教 G1.1：Right angle = 90°（直角 = 90°）。Acute angle: 0° < angle < 90°（锐角：大于 0° 小于 90°）。Obtuse angle: 90° < angle < 180°（钝角：大于 90° 小于 180°）。Reflex angle: 180° < angle < 360°（优角：大于 180° 小于 360°）。Examples: 35° is acute; 90° is right; 95° is obtuse; 200° is reflex; 270° is reflex。180° is NOT one of the four 1.1 types（180° 不是这四种角之一）。本周不教 G1.2（vertically opposite angles / angles on a straight line / angles at a point）。(3) 本周化石：mixing obtuse and reflex（混淆钝角和优角）。Wrong: 95° is reflex ✗（错误：95° 是 obtuse 钝角，因为 90° < 95° < 180°）。Wrong: 270° is obtuse ✗（错误：270° 是 reflex 优角，因为 180° < 270° < 360°）。Right: 90° is right; 35° is acute; 95° is obtuse; 200° is reflex。(4) 本周作业在 /learn 页面，完成后系统自动批改 MCQ，writing 部分有 AI Kaizen 反馈（一个改善焦点）。家长会在微信群收到进度同步。不提「小班课」「包过」「保证录取」等话术。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School（classroom door corner, clock, sports field corner）。本周对应申请 Sec 2 入学者的 preceding level（Sec 1）内容。第 43 周开始 GEOMETRY AND MEASUREMENT G1（G1.1 only）。第 39–42 周已完成 Sec 1 NUMBER AND ALGEBRA N1–N7。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-44": {
    title: "对顶角、平角、周角 — Vertically opposite angles, angles on a straight line, angles at a point",
    mathExample: "Two lines cross, one angle 70°, vertically opposite = 70° (equal). Straight line with ray, one angle 70°, adjacent = 180° − 70° = 110°. Three angles at a point: 120° + 150° + ? = 360°, so ? = 90°.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 对顶角、平角、周角。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.2 vertically opposite angles, angles on a straight line, angles at a point。本周重点是：vertically opposite angles are equal（对顶角相等），angles on a straight line add to 180°（平角上的角之和为 180°），angles at a point add to 360°（周角上的角之和为 360°）。Examples: two lines cross, one angle 70°, vertically opposite = 70°（对顶角相等）; straight line with ray, one angle 70°, adjacent angle = 110°（平角上的角之和为 180°）; three angles at a point: 120° + 150° + ? = 360°, so ? = 90°（周角上的角之和为 360°）。本周只教 G1.2（vertically opposite angles, angles on a straight line, angles at a point），不教 G1.3（properties of angles related to parallel lines and transversals: corresponding / alternate / interior angles）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画两条相交的直线，交点标 O。标出一个角是 70°。指着对面的角，问孩子：「这个角是多少度？」引导孩子说出：70°。强调：Vertically opposite angles are equal（对顶角相等）。写：vertically opposite angles = equal。再擦掉，画一条水平直线，再画一条射线从直线上一点 O 向上。标出一个角是 70°，问孩子：「直线上的另一个角是多少度？」引导孩子说出：110°。强调：Angles on a straight line add to 180°（平角上的角之和为 180°）。写：angles on a straight line = 180°，所以 70° + ? = 180°, ? = 110°。再擦掉，在白板上画一个点 O，从 O 引出三条射线（三个角）。标出两个角：120° 和 150°。问孩子：「第三个角是多少度？」引导孩子说出：90°。强调：Angles at a point add to 360°（周角上的角之和为 360°）。写：angles at a point = 360°，所以 120° + 150° + ? = 360°, ? = 90°。如果孩子卡住，教师先示范一次，让孩子跟着算。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 「Two lines cross at O. One angle is 70°. The vertically opposite angle is 110° because they add to 180°.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：using the wrong total（使用错误的总数）。指出：Wei said the vertically opposite angle is 110° because they add to 180°, but this is wrong（Wei 说对顶角是 110° 因为它们加起来是 180°，但这是错的）。为什么？Because vertically opposite angles are EQUAL, not supplementary（因为对顶角相等，不是互补）。改正后写：The vertically opposite angle is 70° because vertically opposite angles are equal（标记为 ✓）。让孩子跟读改正后的句子：The vertically opposite angle is 70° because vertically opposite angles are equal. 再给第二个化石例子：Aisha says: 「Angles at a point add to 180°.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：wrong total（错误的总数）。指出：Aisha said angles at a point add to 180°, but this is wrong（Aisha 说周角上的角加到 180°，但这是错的）。为什么？Because angles at a point add to 360°, not 180°（因为周角上的角加到 360°，不是 180°）。改正后写：Angles at a point add to 360°（标记为 ✓）。让孩子跟读 3 次：Angles at a point add to 360°. 再给第三个化石例子：Mr Lim draws a straight line with a ray. One angle is 70°. Wei says: 「The adjacent angle is also 70° because vertically opposite angles are equal.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：wrong property（错误的性质）。指出：Wei said the adjacent angle is 70° because vertically opposite angles are equal, but this is wrong（Wei 说相邻角也是 70° 因为对顶角相等，但这是错的）。为什么？Because these are angles on a straight line, not vertically opposite angles（因为这些是平角上的角，不是对顶角）。Angles on a straight line add to 180°, so the adjacent angle is 180° − 70° = 110°（平角上的角加到 180°，所以相邻角是 180° − 70° = 110°）。改正后写：The adjacent angle is 110° because angles on a straight line add to 180°（标记为 ✓）。让孩子跟读改正后的句子。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤）。例题 1（Vertically opposite angles）：Two lines cross at point O. One angle is 70°. Find the vertically opposite angle. Explain your answer. 步骤：① Vertically opposite angles are equal（对顶角相等）. ② One angle is 70°. ③ The vertically opposite angle = 70°. Answer: 70° because vertically opposite angles are equal. 例题 2（Angles on a straight line）：A straight line has a ray from point O. One angle is 110°. Find the adjacent angle on the straight line. Explain your answer. 步骤：① Angles on a straight line add to 180°（平角上的角之和为 180°）. ② One angle is 110°. ③ Adjacent angle = 180° − 110° = 70°. Answer: 70° because 110° + 70° = 180°. 例题 3（Angles at a point）：Three angles at point O are 120°, 150°, and x. Find x. 步骤：① Angles at a point add to 360°（周角上的角之和为 360°）. ② 120° + 150° + x = 360°. ③ 270° + x = 360°. ④ x = 360° − 270° = 90°. Answer: x = 90°. 例题 4（Explain fossil error）：Wei says: 「Two lines cross. One angle is 70°. The vertically opposite angle is 110° because they add to 180°.」 Explain what is wrong with Wei's statement. 步骤：① Vertically opposite angles are equal, not supplementary（对顶角相等，不是互补）. ② One angle is 70°. ③ The vertically opposite angle = 70° because they are equal. ④ Wei said 110° because he used the wrong property. Angles that add to 180° are angles on a straight line, not vertically opposite angles. Answer: Wei is wrong. The vertically opposite angle is 70°, not 110°. Vertically opposite angles are equal, so both angles are 70°. Angles on a straight line add to 180°, but these are vertically opposite angles, not angles on a straight line. 教师在白板或屏幕上写出每道题的完整步骤，并画出相应的图形（two lines crossing, straight line with ray, angles at a point），孩子看着跟随。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei notices two lines crossing in the classroom. The lines form angles at the crossing point. One angle is 50°. (i) What is the vertically opposite angle? (ii) Explain your answer. 答案：(i) The vertically opposite angle is 50°. (ii) Explanation: Vertically opposite angles are equal. One angle is 50°. The vertically opposite angle = 50° because vertically opposite angles are equal. 题 2：Aisha draws a straight line on her paper. She draws a ray from a point on the line. One angle is 130°. (i) What is the adjacent angle on the straight line? (ii) Show your working. 答案：(i) The adjacent angle is 50°. (ii) Working: Angles on a straight line add to 180°. One angle is 130°. Adjacent angle = 180° − 130° = 50°. Check: 130° + 50° = 180° ✓. 题 3：Mr Lim marks three angles at a point O. The angles are 100°, 120°, and x. (i) Find the value of x. Show your working. (ii) Wei says x = 140° because 100° + 120° + 140° = 360°. Is Wei correct? (iii) Aisha says: 「Angles at a point add to 180°, so x = 180° − 100° − 120° = −40°.」 Explain what is wrong with Aisha's statement. 答案：(i) Angles at a point add to 360°. 100° + 120° + x = 360°. 220° + x = 360°. x = 360° − 220° = 140°. Answer: x = 140°. (ii) Wei is correct. 100° + 120° + 140° = 360° ✓. (iii) Aisha is wrong. She said angles at a point add to 180°, but this is wrong. Angles at a point add to 360°, not 180°. So x = 360° − 100° − 120° = 140°, not −40°. 孩子写完后，教师检查每一步推理，指出如果有步骤缺失或错误。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.2 vertically opposite angles, angles on a straight line, angles at a point（对顶角、平角、周角），对应 preceding level 规则。本周只教 G1.2：vertically opposite angles are equal（对顶角相等）——两条直线相交，对顶角相等；angles on a straight line add to 180°（平角上的角之和为 180°）——一条直线上的角加起来等于 180°；angles at a point add to 360°（周角上的角之和为 360°）——一个点周围的角加起来等于 360°。Examples: two lines cross, one angle 70°, vertically opposite = 70°（对顶角相等）; straight line with ray, one angle 70°, adjacent angle = 110°（平角上的角之和为 180°）; three angles at a point: 120° + 150° + ? = 360°, so ? = 90°（周角上的角之和为 360°）。本周不教 G1.3 parallel lines properties（corresponding / alternate / interior angles）。(3) 本周化石：using the wrong total（使用错误的总数）。Wrong: two lines cross, one angle 70°, the vertically opposite is 110° because they add to 180° ✗（错误：对顶角应该相等，是 70°，不是 110°）。Wrong: angles on a straight line, one is 70°, the adjacent is 70° because vertically opposite angles are equal ✗（错误：这是平角上的角，应该加到 180°，所以是 110°，不是 70°）。Wrong: angles at a point add to 180° ✗（错误：周角上的角加到 360°，不是 180°）。Right: vertically opposite = equal（正确：对顶角相等）; straight line = 180°（正确：平角上的角之和为 180°）; at a point = 360°（正确：周角上的角之和为 360°）。(4) 本周作业在 /learn 页面，完成后系统自动批改 MCQ，writing 部分有 AI Kaizen 反馈（一个改善焦点）。家长会在微信群收到进度同步。不提「小班课」「包过」「保证录取」等话术。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。本周对应申请 Sec 2 入学者的 preceding level（Sec 1）内容。第 44 周继续 GEOMETRY AND MEASUREMENT G1（G1.2 only）。第 43 周已完成 G1.1 classification of angles。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-45": {
    title: "平行线截线的角 — Angles formed by two parallel lines and a transversal",
    mathExample: "AB ∥ CD, transversal, one angle 70°. Corresponding = 70° (equal). Alternate = 70° (equal). Interior on same side = 180° − 70° = 110°.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 平行线与横截线形成的角。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.3 angles formed by two parallel lines and a transversal: corresponding angles, alternate angles, interior angles。本周重点是：corresponding angles are equal（同位角相等），alternate angles are equal（内错角相等），interior angles add to 180°（同旁内角互补，之和为 180°）。Examples: AB ∥ CD, transversal, one angle 70°, corresponding angle = 70°（同位角相等）; alternate angle = 70°（内错角相等）; interior angle on same side = 180° − 70° = 110°（同旁内角之和为 180°）。本周只教 G1.3（angles formed by two parallel lines and a transversal: corresponding, alternate, interior），不教 G1.4（properties of triangles and special quadrilaterals）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画两条水平平行线 AB 和 CD（标上 AB ∥ CD），再画一条横截线 EF 穿过两条平行线，交点标 P 和 Q。在 P 点标出一个角是 70°。指着 Q 点对应位置的角，问孩子：「这个角是多少度？」引导孩子说出：70°。强调：When two parallel lines are cut by a transversal, corresponding angles are equal（当两条平行线被横截线所截时，同位角相等）。写：corresponding angles = equal。再擦掉对应角标记，在 P 点标出一个角是 70°（与横截线和上方平行线形成的角），指着 Q 点交错的另一侧的角，问孩子：「这个角是多少度？」引导孩子说出：70°。强调：When two parallel lines are cut by a transversal, alternate angles are equal（当两条平行线被横截线所截时，内错角相等）。写：alternate angles = equal。再擦掉内错角标记，在 P 点标出一个角是 70°，指着 Q 点同一侧的内角，问孩子：「这个角是多少度？」引导孩子说出：110°。强调：When two parallel lines are cut by a transversal, interior angles on the same side add to 180°（当两条平行线被横截线所截时，同旁内角之和为 180°）。写：interior angles (same side) = 180°，所以 70° + ? = 180°, ? = 110°。如果孩子卡住，教师先示范一次，让孩子跟着算。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 「AB ∥ CD, transversal cuts them. One angle is 70°. The corresponding angle is 110° because corresponding angles add to 180°.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：mixing the three angle names or using the wrong relation（混淆三种角的名称，或使用错误的关系）。指出：Wei said the corresponding angle is 110° because corresponding angles add to 180°, but this is wrong（Wei 说同位角是 110° 因为同位角加起来是 180°，但这是错的）。为什么？Because when two parallel lines are cut by a transversal, corresponding angles are EQUAL, not supplementary（因为当两条平行线被横截线所截时，同位角相等，不是互补）。改正后写：The corresponding angle is 70° because corresponding angles are equal（标记为 ✓）。让孩子跟读改正后的句子：The corresponding angle is 70° because corresponding angles are equal. 再给第二个化石例子：Aisha says: 「AB ∥ CD, transversal, one angle 70°. The interior angle on the same side is 70° because angles are equal.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：using 「equal」 for interior angles on the same side（对同旁内角使用「相等」）。指出：Aisha said the interior angle on the same side is 70° because angles are equal, but this is wrong（Aisha 说同旁内角是 70° 因为角相等，但这是错的）。为什么？Because when two parallel lines are cut by a transversal, interior angles on the same side add to 180°, not equal（因为当两条平行线被横截线所截时，同旁内角之和为 180°，不是相等）。改正后写：The interior angle on the same side is 110° because 70° + 110° = 180°（标记为 ✓）。让孩子跟读 3 次：Interior angles on the same side add to 180°. 再给第三个化石例子：Mr Lim marks two angles and says they are corresponding, but they are actually alternate. Ask the child to identify the error（标记为 ✗）。指出：These are alternate angles, not corresponding angles. Corresponding angles are in matching positions on the two parallel lines. Alternate angles are on opposite sides of the transversal（这些是内错角，不是同位角。同位角在两条平行线上的匹配位置。内错角在横截线的对侧）。强调：Corresponding = matching positions（同位 = 匹配位置）; Alternate = opposite sides（内错 = 对侧）; Interior same side = same side（同旁 = 同侧）。让孩子跟读 3 次：Corresponding = equal, alternate = equal, interior same side = 180°.",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤）。例题 1（Corresponding angles）：AB ∥ CD, transversal EF crosses at P and Q. Angle APE = 70°. Find the corresponding angle CQF. Explain your answer. 步骤：① Identify the angle relationship: AB and CD are parallel lines. Transversal EF cuts them at P and Q. Angle APE at P and angle CQF at Q are in corresponding positions（同位角）. ② Recall the property: When two parallel lines are cut by a transversal, corresponding angles are equal（同位角相等）. ③ Apply the property: Angle APE = 70°, so corresponding angle CQF = 70° (equal). ④ Answer: The corresponding angle CQF is 70° because corresponding angles are equal. 例题 2（Alternate angles）：AB ∥ CD, transversal, angle BPQ = 80°. Find the alternate angle DQP. Explain your answer. 步骤：① Identify the angle relationship: AB ∥ CD with transversal. Angle BPQ at P and angle DQP at Q are alternate angles（内错角）. ② Recall the property: When two parallel lines are cut by a transversal, alternate angles are equal（内错角相等）. ③ Apply the property: Angle BPQ = 80°, so alternate angle DQP = 80° (equal). ④ Answer: The alternate angle DQP is 80° because alternate angles are equal. 例题 3（Interior angles on the same side）：AB ∥ CD, transversal, angle APQ = 120°. Find the interior angle PQC on the same side. 步骤：① Identify the angle relationship: AB ∥ CD with transversal. Angle APQ at P and angle PQC at Q are interior angles on the same side（同旁内角）. ② Recall the property: When two parallel lines are cut by a transversal, interior angles on the same side add to 180°（同旁内角之和为 180°）. ③ Apply the property: Angle APQ + angle PQC = 180°. Given angle APQ = 120°, so 120° + angle PQC = 180°. ④ Solve: angle PQC = 180° − 120° = 60°. ⑤ Answer: The interior angle PQC is 60° because interior angles on the same side add to 180°. 例题 4（Explain fossil error）：Wei says: 「AB ∥ CD, transversal, one angle 125°. The interior angle on the same side is 125° because angles are equal.」 Explain why Wei is wrong and give the correct answer. 步骤：① Wei's statement: Wei said the interior angle on the same side is 125° because angles are equal. ② Identify the error: Wei confused interior angles on the same side with corresponding angles or alternate angles. Interior angles on the same side are NOT equal. ③ Correct property: When two parallel lines are cut by a transversal, interior angles on the same side add to 180°, not equal. Corresponding angles and alternate angles are equal, but interior angles on the same side add to 180°. ④ Correct calculation: Given one angle is 125°. Interior angle on the same side = 180° − 125° = 55°. ⑤ Answer: Wei is wrong because interior angles on the same side add to 180°, not equal. The correct interior angle is 55°, not 125°. 教师边示范边让孩子跟读关键步骤。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Wei draws AB ∥ CD with a transversal cutting at M and N. Angle at M is 65°. (i) What is the corresponding angle at N? (ii) Explain your answer. 答案：(i) The corresponding angle at N is 65°. (ii) Explanation: When two parallel lines are cut by a transversal, corresponding angles are equal. The angle at M is 65°. The corresponding angle at N = 65° because corresponding angles are equal. 题 2：Aisha draws AB ∥ CD with a transversal. One angle is 95°. (i) What is the alternate angle? (ii) What is the interior angle on the same side? Show your working. 答案：(i) The alternate angle is 95°. (ii) The interior angle on the same side: 95° + interior angle = 180° (interior angles on the same side add to 180°). Interior angle = 180° − 95° = 85°. Check: 95° + 85° = 180° ✓. 题 3：Mr Lim marks AB ∥ CD with a transversal. One angle is 130°. (i) Find the corresponding angle. (ii) Find the interior angle on the same side. Show your working. (iii) Wei says the interior angle is 130° because angles are equal. Is Wei correct? Explain. 答案：(i) Corresponding angle = 130° (corresponding angles are equal). (ii) Interior angle on the same side: 130° + interior angle = 180°. Interior angle = 180° − 130° = 50°. (iii) Wei is not correct. Wei confused interior angles on the same side with corresponding or alternate angles. Interior angles on the same side add to 180°, not equal. The correct interior angle is 50°, not 130°. 教师巡视，及时给出口头反馈。如果孩子混淆三种角，教师在白板上重新画图标出 corresponding（匹配位置）、alternate（对侧）、interior same side（同侧），让孩子辨认。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.3 angles formed by two parallel lines and a transversal: corresponding angles, alternate angles, interior angles（平行线与横截线形成的角），对应 preceding level 规则。本周只教 G1.3：corresponding angles are equal（同位角相等）——当两条平行线被横截线所截时，同位角相等；alternate angles are equal（内错角相等）——当两条平行线被横截线所截时，内错角相等；interior angles add to 180°（同旁内角互补）——当两条平行线被横截线所截时，同旁内角之和为 180°。Examples: AB ∥ CD, transversal, one angle 70°, corresponding angle = 70°（同位角相等）; alternate angle = 70°（内错角相等）; interior angle on same side = 180° − 70° = 110°（同旁内角之和为 180°）。本周不教 G1.4 properties of triangles and special quadrilaterals。(3) 本周化石：mixing the three angle names or using the wrong relation（混淆三种角的名称，或使用错误的关系：相等与互补）。Wrong: corresponding angles add to 180° ✗（错误：同位角应该相等，不是互补）。Wrong: interior (same-side) angles are equal ✗（错误：同旁内角应该互补，加到 180°，不是相等）。Wrong: calling an alternate pair 'corresponding' ✗（错误：把内错角叫成同位角）。Right: corresponding = equal（正确：同位角相等）; alternate = equal（正确：内错角相等）; interior (same-side) = 180°（正确：同旁内角之和为 180°）。(4) 本周作业在 /learn 页面，完成后系统自动批改 MCQ，writing 部分有 AI Kaizen 反馈（一个改善焦点）。家长会在微信群收到进度同步。不提「小班课」「包过」「保证录取」等话术。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。本周对应申请 Sec 2 入学者的 preceding level（Sec 1）内容。第 45 周继续 GEOMETRY AND MEASUREMENT G1（G1.3 only）。第 44 周已完成 G1.2 vertically opposite angles, angles on a straight line, angles at a point。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-46": {
    title: "三角形性质 — Properties of triangles",
    mathExample: "Triangle ABC angles 70° + 60° + x = 180°, x = 50°. Exterior angle 110° = 70° + 40° (sum of two opposite interiors). Isosceles PQ = PR, ∠Q = 65°, ∠R = 65°. Equilateral, each angle = 60°.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 三角形的性质。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.4 properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties。官方 1.4 also includes special quadrilaterals and regular polygons, but 本周只教三角形部分 this week focuses only on triangles；special quadrilaterals and regular polygons wait for a later week. 本周重点是：sum of interior angles of a triangle is 180°（三角形内角和为 180°），exterior angle of a triangle equals the sum of the two opposite interior angles（三角形的外角等于两个不相邻的内角之和），isosceles triangle: two equal sides ⇒ two equal base angles（等腰三角形：两边相等则两底角相等），equilateral triangle: all sides equal, all angles 60°（等边三角形：三边相等，三角皆 60°）。Examples: Triangle ABC with angles 70° and 60°, third angle = 180° − 70° − 60° = 50°. Triangle exterior angle 110° and one opposite interior 70°, other opposite interior = 110° − 70° = 40°. Isosceles PQR with PQ = PR, if ∠Q = 65°, then ∠R = 65°. Equilateral, each angle = 60°. 本周只教 G1.4 的三角形部分，不教 special quadrilaterals 和 regular polygons（四边形和正多边形留待后续周次）。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个三角形 ABC，三个顶点标 A、B、C。在顶点 A 标出一个角是 70°，在顶点 B 标出一个角是 60°。指着顶点 C 的角，问孩子：「这个角是多少度？」引导孩子说出：50°。强调：The sum of interior angles of a triangle is 180°（三角形内角和为 180°）。写：angle A + angle B + angle C = 180°, so 70° + 60° + angle C = 180°, angle C = 180° − 70° − 60° = 50°。再擦掉角度标记，画一个新的三角形 DEF，在顶点 F 外面延长一边画出一个外角标记为 110°（exterior angle）。在三角形内部标出两个不相邻的内角：顶点 D 标 70°，顶点 E 标一个问号。问孩子：「角 E 是多少度？」引导孩子说出：40°。强调：An exterior angle of a triangle equals the sum of the two opposite interior angles（三角形的外角等于两个不相邻的内角之和）。写：exterior angle at F = angle D + angle E, so 110° = 70° + angle E, angle E = 110° − 70° = 40°。如果孩子卡住，教师先示范一次，让孩子跟着算。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 「Triangle ABC has angles 70° and 60°. The sum of all angles in a triangle is 360°, so angle C = 360° − 70° − 60° = 230°.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：using 360° as the triangle angle sum（错误：把三角形内角和当成 360°，混淆了周角 angles at a point 和三角形内角和 triangle angle sum）。指出：Wei said the triangle angle sum is 360°, but this is wrong（Wei 说三角形内角和是 360°，但这是错的）。为什么？Because the sum of interior angles of a TRIANGLE is 180°, not 360°（因为三角形内角和是 180°，不是 360°）。Angles at a point sum to 360°, but a triangle's interior angles sum to 180°（周角是 360°，但三角形内角和是 180°）。改正后写：The sum of interior angles of a triangle is 180°, so angle C = 180° − 70° − 60° = 50°（标记为 ✓）。让孩子跟读改正后的句子：The sum of interior angles of a triangle is 180°. Angle C = 50°. 再给第二个化石例子：Aisha says: 「Triangle PQR is isosceles with equal sides PQ = PR. Since PQ = PR, the angles at P and R must be equal, so angle P = angle R.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：swapping equal sides and equal angles in isosceles triangle（错误：把等腰三角形的等边和等角弄反）。指出：Aisha said since PQ = PR, then angle P = angle R, but this is wrong（Aisha 说因为 PQ = PR，所以 ∠P = ∠R，但这是错的）。为什么？Because in an isosceles triangle with two equal sides, the two BASE angles (the angles opposite the equal sides) are equal, not the vertex angle（因为等腰三角形若两边相等，则两底角相等，不是顶角和底角相等）。改正后写：In an isosceles triangle with PQ = PR, the two base angles Q and R are equal, so ∠Q = ∠R (NOT ∠P = ∠R)（标记为 ✓）。让孩子跟读改正后的句子：If PQ = PR, then ∠Q = ∠R, the two base angles are equal.",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤）。例题 1（Triangle angle sum）：Triangle ABC has angles 70° and 60°. Find angle C. Explain your answer. 步骤：① Recall the property: The sum of interior angles of a triangle is 180°（三角形内角和为 180°）. ② Identify the given angles: angle A = 70°, angle B = 60°. ③ Apply the property: angle A + angle B + angle C = 180°. ④ Substitute: 70° + 60° + angle C = 180°. ⑤ Solve: 130° + angle C = 180°, so angle C = 180° − 130° = 50°. ⑥ Answer: Angle C = 50° because the sum of interior angles of a triangle is 180°. 例题 2（Exterior angle）：Triangle DEF has an exterior angle at F measuring 115°. One opposite interior angle at D is 55°. Find angle E. Explain your answer. 步骤：① Recall the property: An exterior angle of a triangle equals the sum of the two opposite interior angles（三角形的外角等于两个不相邻的内角之和）. ② Identify the given: exterior angle at F = 115°, one opposite interior angle D = 55°. ③ Apply the property: exterior angle at F = angle D + angle E. ④ Substitute: 115° = 55° + angle E. ⑤ Solve: angle E = 115° − 55° = 60°. ⑥ Answer: Angle E = 60° because an exterior angle equals the sum of the two opposite interior angles. 例题 3（Isosceles triangle）：Triangle PQR is isosceles with PQ = PR. The base angles Q and R each measure 50°. Find the vertex angle P. Explain. 步骤：① Recall the property: In an isosceles triangle with two equal sides, the two base angles are equal（等腰三角形两边相等则两底角相等）. ② Identify the given: PQ = PR (two equal sides), angle Q = 50°, angle R = 50° (the two base angles are equal). ③ Apply the triangle angle sum property: angle P + angle Q + angle R = 180°. ④ Substitute: angle P + 50° + 50° = 180°. ⑤ Solve: angle P + 100° = 180°, so angle P = 180° − 100° = 80°. ⑥ Answer: Vertex angle P = 80°. 例题 4（Equilateral triangle）：Triangle XYZ is equilateral. Find each interior angle. Explain. 步骤：① Recall the property: In an equilateral triangle, all three sides are equal and all three angles are equal（等边三角形三边相等，三角皆相等）. ② Recall the triangle angle sum: The sum of interior angles = 180°. ③ Since all three angles are equal, each angle = 180° ÷ 3 = 60°. ④ Answer: Each interior angle = 60° because in an equilateral triangle, all angles are equal and sum to 180°. 示范完每道例题后，让孩子跟着读一遍关键步骤和答案。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Triangle ABC has angles 50° and 80°. (i) What is the measure of angle C? (ii) Show your working. 答案：(i) Angle C = 50°. (ii) Working: The sum of interior angles of a triangle is 180°. angle A + angle B + angle C = 180°. 50° + 80° + angle C = 180°. 130° + angle C = 180°. angle C = 180° − 130° = 50°. 题 2：Triangle DEF has an exterior angle at E measuring 125°. One opposite interior angle at D is 65°. (i) What is the other opposite interior angle at F? (ii) Show your working using the exterior angle property. 答案：(i) Angle F = 60°. (ii) Working: An exterior angle equals the sum of the two opposite interior angles. exterior angle at E = angle D + angle F. 125° = 65° + angle F. angle F = 125° − 65° = 60°. 题 3：Triangle PQR is isosceles with PQ = PR. The base angles Q and R each measure 65°. (i) Find the vertex angle P. (ii) Show your working. (iii) Wei says since PQ = PR, angle P must equal angle R, so angle P = 65°. Explain why Wei is wrong and give the correct angle P. 答案：(i) Angle P = 50°. (ii) Working: In triangle PQR, angle P + angle Q + angle R = 180°. angle P + 65° + 65° = 180°. angle P + 130° = 180°. angle P = 180° − 130° = 50°. (iii) Wei is wrong because in an isosceles triangle with PQ = PR, the two BASE angles Q and R are equal, not the vertex angle P and the base angle R. The correct property is: if PQ = PR, then ∠Q = ∠R (the two base angles are equal). The vertex angle P = 180° − 65° − 65° = 50°, not 65°. 题目做完后，教师逐题检查孩子的答案和推理步骤，纠正任何错误。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.4 properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties。官方 1.4 also includes special quadrilaterals and regular polygons, but 本周只教三角形部分；四边形和正多边形留待后续周次。本周方法：sum of interior angles of a triangle is 180°（三角形内角和为 180°）——三个内角相加等于 180°，if given two angles, third angle = 180° − first angle − second angle; exterior angle of a triangle equals the sum of the two opposite interior angles（三角形的外角等于两个不相邻的内角之和）——exterior angle = sum of the two opposite interior angles; isosceles triangle: two equal sides ⇒ two equal base angles（等腰三角形：两边相等则两底角相等）——if AB = AC, then ∠B = ∠C (NOT ∠A = ∠C); equilateral triangle: all sides equal, all angles 60°（等边三角形：三边相等，三角皆 60°）——三边相等的三角形，每个角都是 60°。Examples: Triangle ABC with angles 70° and 60°, third angle = 180° − 70° − 60° = 50°. Triangle exterior angle 110° and one opposite interior 70°, other opposite interior = 110° − 70° = 40°. Isosceles PQR with PQ = PR, if ∠Q = 65°, then ∠R = 65°. Equilateral, each angle = 60°. (3) 本周化石：using 360° as the triangle angle sum（错误：把三角形内角和当成 360°，混淆了周角和三角形内角和。正确：三角形内角和是 180°，不是 360°。Wrong: 70° + 60° + x = 360°, so x = 230°. Right: 70° + 60° + x = 180°, so x = 50°）；swapping equal sides and equal angles in isosceles triangle（错误：把等腰三角形的等边和等角弄反。Wrong: isosceles with AB = AC means ∠A = ∠C. Right: if AB = AC, then ∠B = ∠C, the two base angles are equal）。(4) 本周作业在 app 里，完成后提交。下周见。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周只教 G1.4 的三角形部分，不教 special quadrilaterals 和 regular polygons。第 45 周已完成 G1.3 angles formed by two parallel lines and a transversal。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-47": {
    title: "特殊四边形性质 — Properties of special quadrilaterals",
    mathExample: "Parallelogram ABCD: ∠A = 70°, opposite ∠C = 70°, consecutive ∠B = 110°. Rectangle diagonals equal. Rhombus 4 equal sides. Square: rectangle + rhombus. Trapezium: exactly 1 pair parallel sides.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 特殊四边形的性质。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.4 properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties。第 46 周已教三角形部分，本周只教特殊四边形 special quadrilaterals only；正多边形 regular polygons wait for a later week. 本周重点是：parallelogram（平行四边形）：opposite sides equal and parallel、opposite angles equal、consecutive angles add to 180°、diagonals bisect each other；rectangle（矩形）：a parallelogram with four right angles、diagonals equal；rhombus（菱形）：a parallelogram with four equal sides、diagonals bisect each other at right angles；square（正方形）：rectangle + rhombus，four equal sides and four right angles；trapezium（梯形）：exactly one pair of parallel sides（新加坡用法）。Examples: Parallelogram ABCD with ∠A = 70°, opposite ∠C = 70°, consecutive ∠B = 110°. Rectangle diagonal PR = 12 cm, diagonal QS = 12 cm（对角线相等）. Rhombus side = 8 cm, all sides = 8 cm. Square side = 6 cm, all sides = 6 cm and all angles = 90°. Trapezium: exactly one pair of parallel sides. 本周只教 G1.4 的特殊四边形部分，第 46 周已教三角形，正多边形留待后续周次。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个平行四边形 ABCD（parallelogram），四个顶点标 A、B、C、D。标记对边平行（用箭头符号 ∥）。在顶点 A 标出一个角是 70°。指着顶点 C 的角（对角），问孩子：「这个角是多少度？」引导孩子说出：70°（对角相等）。再指着顶点 B 的角（相邻角），问：「这个角是多少度？」引导孩子说出：110°（相邻角互补，180° − 70° = 110°）。强调：In a parallelogram, opposite angles are equal（平行四边形对角相等）；consecutive angles add to 180°（相邻角互补）。写：parallelogram ABCD, ∠A = 70°, opposite ∠C = 70° (opposite angles equal), consecutive ∠B = 180° − 70° = 110° (consecutive angles add to 180°). 再擦掉标记，画一个矩形 PQRS（rectangle），标出四个直角 90°。画出两条对角线 PR 和 QS，标记对角线长度相等（PR = QS）。强调：In a rectangle, all four angles are 90° and diagonals are equal（矩形四个角都是 90°，对角线相等）。如果孩子卡住，教师先示范一次，让孩子跟着算。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 「Parallelogram ABCD has angle A = 70°. Since it's a parallelogram, the diagonals are equal. Also, opposite angle C = 110° because consecutive angles are related.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：treating every parallelogram as a rectangle（错误：把平行四边形当成矩形，认为所有平行四边形的对角线都相等）and swapping opposite/consecutive angle relations（错误：对角应该相等，不是互补）。指出：Wei said parallelogram diagonals are equal, but this is wrong（Wei 说平行四边形对角线相等，但这是错的）。为什么？Because only RECTANGLE diagonals are equal; parallelogram diagonals bisect each other but are not necessarily equal（因为只有矩形的对角线相等；平行四边形对角线互相平分，但不一定相等）。Also, Wei said opposite angle C = 110°, but this is wrong（Wei 说对角 C = 110°，这也是错的）。为什么？Because in a parallelogram, OPPOSITE angles are equal, so ∠C = 70°; CONSECUTIVE angles add to 180°, so ∠B = 110°（因为平行四边形对角相等，所以 ∠C = 70°；相邻角互补，所以 ∠B = 110°）。改正后写：Parallelogram ABCD, ∠A = 70°, opposite ∠C = 70° (opposite angles equal), consecutive ∠B = 110° (consecutive angles add to 180°). Parallelogram diagonals bisect each other but are not necessarily equal; only rectangle diagonals are equal（标记为 ✓）。让孩子跟读改正后的句子：Opposite angles are equal, ∠C = 70°. Consecutive angles add to 180°, ∠B = 110°. Only rectangle diagonals are equal. 再给第二个化石例子：Aisha says: 「A trapezium has two pairs of parallel sides.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：giving a trapezium two pairs of parallel sides（错误：说梯形有两对平行边）。指出：Aisha said trapezium has two pairs of parallel sides, but this is wrong（Aisha 说梯形有两对平行边，这是错的）。为什么？Because a trapezium has EXACTLY ONE pair of parallel sides (Singapore usage); if it had two pairs, it would be a parallelogram, not a trapezium（因为梯形恰好一对平行边，新加坡用法；如果有两对平行边，那就是平行四边形，不是梯形）。改正后写：A trapezium has exactly one pair of parallel sides (Singapore usage)（标记为 ✓）。让孩子跟读改正后的句子：Trapezium has exactly one pair of parallel sides.",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤）。例题 1（Parallelogram angles）：Parallelogram ABCD has angle A = 70°. Find opposite angle C and consecutive angle B. Explain your answer. 步骤：① Recall the properties: In a parallelogram, opposite angles are equal and consecutive angles add to 180°（平行四边形对角相等，相邻角互补）. ② Identify the given: ∠A = 70°. ③ Apply the opposite angle property: ∠C = ∠A = 70° (opposite angles equal). ④ Apply the consecutive angle property: ∠A + ∠B = 180° (consecutive angles add to 180°). ⑤ Substitute: 70° + ∠B = 180°. ⑥ Solve: ∠B = 180° − 70° = 110°. ⑦ Answer: Opposite angle C = 70°, consecutive angle B = 110° because in a parallelogram, opposite angles are equal and consecutive angles add to 180°. 例题 2（Rectangle diagonals）：Rectangle PQRS has diagonal PR = 12 cm. Find diagonal QS. Explain your answer. 步骤：① Recall the property: In a rectangle, the diagonals are equal（矩形对角线相等）. ② Identify the given: diagonal PR = 12 cm. ③ Apply the property: diagonal QS = diagonal PR (rectangle diagonals equal). ④ Substitute: diagonal QS = 12 cm. ⑤ Answer: Diagonal QS = 12 cm because in a rectangle, the diagonals are equal. 例题 3（Rhombus sides）：Rhombus ABCD has side AB = 8 cm. Find side BC. Explain your answer. 步骤：① Recall the property: In a rhombus, all four sides are equal（菱形四边相等）. ② Identify the given: side AB = 8 cm. ③ Apply the property: all sides are equal, so BC = AB. ④ Substitute: BC = 8 cm. ⑤ Answer: Side BC = 8 cm because in a rhombus, all four sides are equal. 例题 4（Square properties）：Square EFGH has side EF = 6 cm. (i) Find side FG. (ii) What is the measure of angle F? Explain. 步骤：① Recall the properties: A square has four equal sides and four right angles（正方形四边相等且四角为直角）. ② Identify the given: side EF = 6 cm. ③ Apply the equal sides property: FG = EF = 6 cm (all sides equal). ④ Apply the right angles property: ∠F = 90° (all angles are right angles). ⑤ Answer: (i) Side FG = 6 cm because a square has four equal sides. (ii) Angle F = 90° because a square has four right angles. 示范完每道例题后，让孩子跟着读一遍关键步骤和答案。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：Parallelogram PQRS has angle P = 80°. (i) What is opposite angle R? (ii) What is consecutive angle Q? (iii) Show your working using parallelogram properties. 答案：(i) Angle R = 80°. (ii) Angle Q = 100°. (iii) Working: In a parallelogram, opposite angles are equal and consecutive angles add to 180°. Opposite ∠R = ∠P = 80° (opposite angles equal). Consecutive ∠P + ∠Q = 180°, so 80° + ∠Q = 180°, ∠Q = 180° − 80° = 100°. 题 2：Rectangle ABCD has diagonal AC = 14 cm. (i) Find diagonal BD using the rectangle property. (ii) Show your working. (iii) Aisha says 「Since it's a parallelogram, the diagonals bisect each other but are not necessarily equal, so BD might not equal 14 cm.」 Explain why Aisha's reasoning is incomplete and give the correct answer. 答案：(i) Diagonal BD = 14 cm. (ii) Working: In a rectangle, the diagonals are equal. Diagonal BD = diagonal AC = 14 cm (rectangle diagonals equal). (iii) Aisha is correct that in a general parallelogram, diagonals bisect each other but are not necessarily equal. However, a rectangle is a SPECIAL parallelogram with four right angles, and in a rectangle, the diagonals are equal. So BD = AC = 14 cm. 题 3：(a) Rhombus PQRS has side PQ = 9 cm. Find all four sides. Show working. (b) Square WXYZ has side WX = 7 cm. (i) Find side XY. (ii) Find angle X. (iii) Wei says 「A square is both a rectangle and a rhombus.」 Is Wei correct? Explain. 答案：(a) In a rhombus, all four sides are equal. PQ = QR = RS = SP = 9 cm. (b) (i) In a square, all four sides are equal. Side XY = WX = 7 cm. (ii) In a square, all four angles are right angles. Angle X = 90°. (iii) Yes, Wei is correct. A square has four equal sides (like a rhombus) and four right angles (like a rectangle), so a square is both a rectangle and a rhombus. 题目做完后，教师逐题检查孩子的答案和推理步骤，纠正任何错误。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.4 properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties。第 46 周已教三角形部分，本周只教特殊四边形；正多边形留待后续周次。本周方法：parallelogram（平行四边形）：opposite sides equal and parallel、opposite angles equal、consecutive angles add to 180°、diagonals bisect each other；rectangle（矩形）：a parallelogram with four right angles、diagonals equal；rhombus（菱形）：a parallelogram with four equal sides、diagonals bisect each other at right angles；square（正方形）：rectangle + rhombus，four equal sides and four right angles；trapezium（梯形）：exactly one pair of parallel sides（新加坡用法）。Examples: Parallelogram ABCD with ∠A = 70°, opposite ∠C = 70°, consecutive ∠B = 110°. Rectangle diagonal PR = 12 cm, diagonal QS = 12 cm. Rhombus side = 8 cm, all sides = 8 cm. Square side = 6 cm, all sides = 6 cm and all angles = 90°. Trapezium: exactly one pair of parallel sides. (3) 本周化石：treating every parallelogram as a rectangle（错误：把平行四边形当成矩形，认为所有平行四边形的对角线都相等。正确：只有矩形的对角线相等，一般平行四边形的对角线不一定相等）；giving a trapezium two pairs of parallel sides（错误：说梯形有两对平行边。正确：梯形恰好一对平行边）；using 360° wrongly for consecutive angles of a parallelogram（错误：对角互补。正确：对角相等，相邻角互补）。(4) 本周作业在 app 里，完成后提交。下周见。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周只教 G1.4 的特殊四边形部分，第 46 周已教三角形，正多边形留待后续周次。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-48": {
    title: "正多边形性质 — Properties of regular polygons",
    mathExample: "Regular hexagon: 6 sides, 6 lines of symmetry, interior 120°. Regular pentagon: 5 lines of symmetry, interior 108° (not 72°; 72° is exterior/centre). Regular octagon: interior 135°. Regular decagon: interior 144°.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 正多边形的性质。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.4 properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties。第 46 周已教三角形部分，第 47 周已教特殊四边形部分，本周只教正多边形 regular polygons only；本周完成 G1.4。本周重点是：a regular polygon has all sides equal and all interior angles equal（正多边形所有边相等、所有内角相等）；official named ones: regular pentagon (5 sides 正五边形), hexagon (6 sides 正六边形), octagon (8 sides 正八边形), decagon (10 sides 正十边形)；number of lines of symmetry equals the number of sides（对称轴的数量等于边数）；rotational symmetry of order n for a regular n-gon（正 n 边形的旋转对称阶数为 n）；interior angle formula: (n − 2) × 180° ÷ n（内角公式：(n − 2) × 180° ÷ n）。Examples: Regular hexagon (6 sides) has 6 lines of symmetry, each interior angle = (6 − 2) × 180° ÷ 6 = 120°. Regular pentagon (5 sides) has 5 lines of symmetry, each interior angle = (5 − 2) × 180° ÷ 5 = 108° (not 72°; 72° is the exterior or centre angle). 本周完成 G1.4，第 46 周已教三角形，第 47 周已教特殊四边形。」提醒家长可以在旁边观摩，但请让孩子自己动笔算。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个正六边形（regular hexagon），标记顶点 ABCDEF，所有边都相等（标记等号）。指着边，问孩子：「正六边形有几条边？」引导孩子说出：6 条边。再画出 6 条对称轴（从每个顶点到对边中点，或从两条对边的中点）。问孩子：「这个正六边形有几条对称轴？」引导孩子说出：6 条。强调：In a regular polygon, the number of lines of symmetry equals the number of sides（正多边形的对称轴数量等于边数）。写：regular hexagon has 6 sides, so 6 lines of symmetry. 再擦掉，写：What is the measure of each interior angle of a regular hexagon? Use the formula: interior angle = (n − 2) × 180° ÷ n. For hexagon, n = 6. So interior angle = (6 − 2) × 180° ÷ 6 = 4 × 180° ÷ 6 = 720° ÷ 6 = 120°. Answer: 120°. 如果孩子卡住，教师先示范一次，让孩子跟着算。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 「A regular hexagon has 6 sides. So it has 5 lines of symmetry.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：mixing up the number of sides and the number of lines of symmetry（错误：混淆边数和对称轴数量）。指出：Wei said a regular hexagon has 5 lines of symmetry, but this is wrong（Wei 说正六边形有 5 条对称轴，但这是错的）。为什么？Because in a regular polygon, the number of lines of symmetry EQUALS the number of sides（因为正多边形的对称轴数量等于边数）。A regular hexagon has 6 sides, so it has 6 lines of symmetry, not 5（正六边形有 6 条边，所以有 6 条对称轴，不是 5）。改正后写：Regular hexagon has 6 sides, so 6 lines of symmetry（标记为 ✓）。让孩子跟读改正后的句子：Regular hexagon has 6 sides and 6 lines of symmetry. 再给第二个化石例子：Aisha says: 「A regular pentagon has 5 sides. Each interior angle is 360° ÷ 5 = 72°.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：using 360° ÷ n as the interior angle（错误：用 360° ÷ n 当作内角）。指出：Aisha said each interior angle = 360° ÷ 5 = 72°, but this is wrong（Aisha 说每个内角 = 360° ÷ 5 = 72°，但这是错的）。为什么？Because 360° ÷ n gives the EXTERIOR angle or the centre angle, not the interior angle（因为 360° ÷ n 算出的是外角或中心角，不是内角）。The correct formula for the interior angle is (n − 2) × 180° ÷ n（正确的内角公式是 (n − 2) × 180° ÷ n）。For a regular pentagon (n = 5): interior angle = (5 − 2) × 180° ÷ 5 = 3 × 180° ÷ 5 = 540° ÷ 5 = 108°（正五边形：内角 = (5 − 2) × 180° ÷ 5 = 108°）。The value 72° is the exterior angle or centre angle, not the interior angle（72° 是外角或中心角，不是内角）。改正后写：Each interior angle of a regular pentagon = (5 − 2) × 180° ÷ 5 = 108°, not 72°. 72° is the exterior or centre angle（标记为 ✓）。让孩子跟读改正后的句子：Interior angle = 108°, not 72°. 72° is the exterior or centre angle.",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范四道完整例题（写出推理步骤）。例题 1（Regular hexagon lines of symmetry and interior angle）：A regular hexagon has 6 equal sides and 6 equal angles. (i) How many lines of symmetry does it have? (ii) Calculate the measure of each interior angle. Explain your answer. 步骤：① For lines of symmetry: Recall the property: In a regular polygon, the number of lines of symmetry equals the number of sides（正多边形的对称轴数量等于边数）. ② Identify the given: regular hexagon has 6 sides. ③ Apply the property: number of lines of symmetry = 6. ④ Answer: 6 lines of symmetry. ⑤ For interior angle: Recall the formula: interior angle = (n − 2) × 180° ÷ n. ⑥ Given: n = 6. ⑦ Apply: interior angle = (6 − 2) × 180° ÷ 6. ⑧ Calculate: = 4 × 180° ÷ 6 = 720° ÷ 6 = 120°. ⑨ Answer: Each interior angle = 120°. 例题 2（Regular pentagon interior angle and fossil）：A regular pentagon has 5 sides. (i) Calculate the measure of each interior angle using the formula (n − 2) × 180° ÷ n. (ii) Wei says each interior angle = 360° ÷ 5 = 72°. Explain what is wrong with Wei's calculation. 步骤：① For interior angle: Formula: interior angle = (n − 2) × 180° ÷ n. ② Given: n = 5. ③ Apply: interior angle = (5 − 2) × 180° ÷ 5. ④ Calculate: = 3 × 180° ÷ 5 = 540° ÷ 5 = 108°. ⑤ Answer: Each interior angle = 108°. ⑥ Wei's error: Wei said each interior angle = 360° ÷ 5 = 72°. This is wrong. Wei used the formula 360° ÷ n, but this gives the EXTERIOR angle or the centre angle, not the interior angle. The correct formula for the interior angle is (n − 2) × 180° ÷ n. For a regular pentagon: interior angle = 108°. The value 72° is the exterior angle or centre angle. Answer: Wei is wrong. Each interior angle is 108°, not 72°. 例题 3（Regular octagon lines of symmetry and interior angle）：A regular octagon has 8 equal sides and 8 equal angles. (i) How many lines of symmetry does it have? (ii) Calculate the measure of each interior angle. 步骤：① For lines of symmetry: Property: lines of symmetry = number of sides for a regular polygon. ② Given: octagon has 8 sides. ③ Apply: lines of symmetry = 8. ④ Answer: 8 lines of symmetry. ⑤ For interior angle: Formula: interior angle = (n − 2) × 180° ÷ n. ⑥ Given: n = 8. ⑦ Apply: interior angle = (8 − 2) × 180° ÷ 8. ⑧ Calculate: = 6 × 180° ÷ 8 = 1080° ÷ 8 = 135°. ⑨ Answer: Each interior angle = 135°. 例题 4（Explain the difference between the two formulas）：Explain the difference between (n − 2) × 180° ÷ n and 360° ÷ n for a regular polygon. 步骤：① The formula (n − 2) × 180° ÷ n gives the INTERIOR angle of a regular n-gon. ② The formula 360° ÷ n gives the EXTERIOR angle or the centre angle from the centre of the polygon. ③ These are different values. For example, for a regular octagon (n = 8): interior angle = (8 − 2) × 180° ÷ 8 = 135°; exterior angle = 360° ÷ 8 = 45°. ④ Interior angle ≠ exterior angle. ⑤ Answer: Use (n − 2) × 180° ÷ n for the interior angle, and 360° ÷ n for the exterior angle. Do not confuse the two. 示范完每道例题后，让孩子跟着读一遍关键步骤和答案。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：A regular hexagon ABCDEF has 6 equal sides and 6 equal angles. (i) How many lines of symmetry does this regular hexagon have? (ii) What is the order of rotational symmetry? (iii) Calculate the measure of each interior angle using the formula (n − 2) × 180° ÷ n. Show all working steps. 答案：(i) Lines of symmetry = number of sides = 6. Answer: 6 lines of symmetry. (ii) Order of rotational symmetry = n = 6. Answer: rotational symmetry of order 6. (iii) Interior angle = (n − 2) × 180° ÷ n. n = 6. Interior angle = (6 − 2) × 180° ÷ 6 = 4 × 180° ÷ 6 = 720° ÷ 6 = 120°. Answer: 120°. 题 2：A regular pentagon PQRST has 5 equal sides and 5 equal angles. (i) How many lines of symmetry does this regular pentagon have? (ii) Calculate the measure of each interior angle using the formula (n − 2) × 180° ÷ n. Show all working. (iii) Wei says each interior angle = 360° ÷ 5 = 72°. Explain what is wrong with Wei's calculation and give the correct interior angle. 答案：(i) Lines of symmetry = number of sides = 5. Answer: 5 lines of symmetry. (ii) Interior angle = (n − 2) × 180° ÷ n. n = 5. Interior angle = (5 − 2) × 180° ÷ 5 = 3 × 180° ÷ 5 = 540° ÷ 5 = 108°. Answer: 108°. (iii) Wei used 360° ÷ 5 = 72° for the interior angle, but 72° is the exterior angle or centre angle, not the interior angle. The correct formula for the interior angle is (n − 2) × 180° ÷ n. For a regular pentagon: interior angle = (5 − 2) × 180° ÷ 5 = 108°. Wei is wrong. The correct interior angle is 108°, not 72°. 题 3：A regular octagon has 8 equal sides and 8 equal angles. (i) How many lines of symmetry does this regular octagon have? (ii) Calculate the measure of each interior angle. Show all working. (iii) Explain the difference between (n − 2) × 180° ÷ n and 360° ÷ n. 答案：(i) Lines of symmetry = number of sides = 8. Answer: 8 lines of symmetry. (ii) Interior angle = (n − 2) × 180° ÷ n. n = 8. Interior angle = (8 − 2) × 180° ÷ 8 = 6 × 180° ÷ 8 = 1080° ÷ 8 = 135°. Answer: 135°. (iii) The formula (n − 2) × 180° ÷ n gives the INTERIOR angle of a regular n-gon. The formula 360° ÷ n gives the EXTERIOR angle or the centre angle. For a regular octagon: interior angle = 135°; exterior angle = 360° ÷ 8 = 45°. Use (n − 2) × 180° ÷ n for the interior angle, and 360° ÷ n for the exterior angle. Do not confuse the two. 题目做完后，教师逐题检查孩子的答案和推理步骤，纠正任何错误。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.4 properties of triangles, special quadrilaterals and regular polygons (pentagon, hexagon, octagon and decagon), including symmetry properties。第 46 周已教三角形部分，第 47 周已教特殊四边形部分，本周只教正多边形；本周完成 G1.4。本周方法：a regular polygon has all sides equal and all interior angles equal（正多边形所有边相等、所有内角相等）；official named ones: regular pentagon (5 sides), hexagon (6 sides), octagon (8 sides), decagon (10 sides)；number of lines of symmetry equals the number of sides（对称轴的数量等于边数）；rotational symmetry of order n for a regular n-gon（正 n 边形的旋转对称阶数为 n）；interior angle formula: (n − 2) × 180° ÷ n（内角公式：(n − 2) × 180° ÷ n）。Examples: Regular hexagon (6 sides) has 6 lines of symmetry, rotational symmetry of order 6, each interior angle = (6 − 2) × 180° ÷ 6 = 120°. Regular pentagon (5 sides) has 5 lines of symmetry, each interior angle = (5 − 2) × 180° ÷ 5 = 108° (not 72°; 72° is the exterior angle or centre angle). Regular octagon (8 sides) has 8 lines of symmetry, each interior angle = (8 − 2) × 180° ÷ 8 = 135°. Regular decagon (10 sides) has 10 lines of symmetry, each interior angle = (10 − 2) × 180° ÷ 10 = 144° (not 36°; 36° is exterior/centre). (3) 本周化石：mixing up the number of sides and the number of lines of symmetry（错误：混淆边数和对称轴数量。正确：正多边形的对称轴数量等于边数。Wrong: regular hexagon has 5 lines of symmetry. Right: regular hexagon has 6 sides and 6 lines of symmetry）；using 360° ÷ n as the interior angle（错误：用 360° ÷ n 当作正 n 边形的内角。那是外角或中心角，不是内角。Wrong: each interior angle of a regular pentagon = 360° ÷ 5 = 72°. Right: each interior angle = (5 − 2) × 180° ÷ 5 = 108°; 72° is the exterior or centre angle）。(4) 本周作业在 app 里，完成后提交。下周见。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周完成 G1.4（第 46 周三角形，第 47 周特殊四边形，第 48 周正多边形）。官方 1.4 现已完成。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-49": {
    title: "特殊四边形分类 — Classifying special quadrilaterals",
    mathExample: "Opposite sides parallel and equal, consecutive angles add to 180° → parallelogram. Four right angles and four equal sides → square (most specific name). Exactly one pair parallel → trapezium. Four equal sides and diagonals at right angles, but angles not 90° → rhombus.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 特殊四边形分类。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.5 classifying special quadrilaterals on the basis of their properties（根据性质给特殊四边形分类）。本周是 G1.5 classification only。Given a list of properties → name the most specific special quadrilateral that must be true（给定一组性质，说出必须符合的最具体的特殊四边形）。Hierarchy（包含关系）: square ⊂ rectangle and square ⊂ rhombus ⊂ parallelogram; trapezium is not a parallelogram（正方形 ⊂ 矩形，正方形 ⊂ 菱形 ⊂ 平行四边形；梯形不是平行四边形）。Singapore definition: trapezium = exactly one pair of parallel sides（新加坡定义：梯形 = 恰好一对对边平行）。「A square is a rectangle」is TRUE. 「A rectangle is a square」is FALSE unless extra properties are given. Examples: Opposite sides parallel and equal → parallelogram (no extra properties, cannot say rectangle or rhombus). Four right angles and four equal sides → square (not just 「rectangle」, because square is more specific). Exactly one pair parallel → trapezium. Four equal sides and diagonals at right angles but angles not 90° → rhombus (not square). 第 47 周已教 G1.4 properties。本周化石：stopping at the less specific name（错误：停在不够具体的名称）；reversing the hierarchy（错误：颠倒包含关系）；confusing parallelogram and trapezium（错误：混淆平行四边形和梯形）。本周不教 G1.6 polygon angle sum。本周不教 G1.7 construction。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。」说完后让孩子准备好纸笔，开始上课。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上写下一组性质：「Quadrilateral ABCD has: (1) Opposite sides parallel and equal. (2) Opposite angles equal. (3) Consecutive angles add to 180°. (4) Diagonals bisect each other.」问孩子：「Based on these properties, what is the most specific name for this quadrilateral?」引导孩子说出：parallelogram（平行四边形）。强调：These properties describe a parallelogram. We cannot say it is a rectangle, because we are not told it has four right angles. We cannot say it is a rhombus, because we are not told it has four equal sides. So the most specific name is parallelogram（这些性质描述的是平行四边形。我们不能说它是矩形，因为没有告诉我们它有四个直角。我们不能说它是菱形，因为没有告诉我们它有四条边相等。所以最具体的名称是平行四边形）。写：Given properties → parallelogram (no extra properties given). 再擦掉，写第二组性质：「Quadrilateral PQRS has: (1) Four right angles. (2) Four equal sides. (3) Diagonals equal and bisect each other at right angles.」问孩子：「Based on these properties, what is the most specific name for this quadrilateral?」引导孩子说出：square（正方形）。强调：These properties describe a square. A square is also a rectangle (because it has four right angles) and also a rhombus (because it has four equal sides), but SQUARE is the most specific name（这些性质描述的是正方形。正方形也是矩形（因为它有四个直角）也是菱形（因为它有四条边相等），但正方形是最具体的名称）。写：Given properties → square (the most specific name). 如果孩子卡住，教师先示范一次。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei says: 「A quadrilateral has four right angles and four equal sides. It is a rectangle.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：stopping at the less specific name（错误：停在不够具体的名称）。指出：Wei said it is a rectangle, which is true, but NOT the most specific name（Wei 说它是矩形，这是对的，但不是最具体的名称）。为什么？Because a quadrilateral with four right angles AND four equal sides is a SQUARE, which is more specific than just saying rectangle（因为一个有四个直角和四条边相等的四边形是正方形，这比只说矩形更具体）。A square is a rectangle, but not every rectangle is a square. When we classify, we name the MOST SPECIFIC figure the given properties force（正方形是矩形，但不是每个矩形都是正方形。当我们分类时，我们要说出给定性质必然确定的最具体的图形）。改正后写：Four right angles and four equal sides → square (the most specific name)（标记为 ✓）。让孩子跟读改正后的句子：Four right angles and four equal sides → square, not just rectangle. 再给第二个化石例子：Aisha says: 「Every rectangle is a square.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：reversing the hierarchy（错误：颠倒包含关系）。指出：Aisha said every rectangle is a square, but this is wrong（Aisha 说每个矩形都是正方形，但这是错的）。为什么？Because a rectangle only needs four right angles; it does NOT need four equal sides. A rectangle is a square ONLY IF it also has four equal sides. But not every rectangle has four equal sides. So 「every rectangle is a square」is FALSE（因为矩形只需要四个直角；它不需要四条边相等。矩形只有在它也有四条边相等时才是正方形。但不是每个矩形都有四条边相等。所以「每个矩形都是正方形」是错的）。The correct statement is: 「Every square is a rectangle」, because every square has four right angles, which is the requirement for a rectangle（正确的陈述是：「每个正方形都是矩形」，因为每个正方形都有四个直角，这是矩形的要求）。改正后写：Every square is a rectangle ✓. But NOT every rectangle is a square ✗（标记改正）。让孩子跟读：Every square is a rectangle, but not every rectangle is a square. 再给第三个化石例子：Wei says: 「A quadrilateral has two pairs of parallel sides. It is a trapezium.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：confusing parallelogram and trapezium（错误：混淆平行四边形和梯形）。指出：Wei said two pairs of parallel sides → trapezium, but this is wrong（Wei 说两对对边平行 → 梯形，但这是错的）。为什么？Because in Singapore definition, a trapezium has EXACTLY ONE pair of parallel sides, not two pairs. If a quadrilateral has TWO pairs of parallel sides, it is a parallelogram, not a trapezium（因为在新加坡定义中，梯形有恰好一对对边平行，不是两对。如果一个四边形有两对对边平行，它是平行四边形，不是梯形）。改正后写：Two pairs of parallel sides → parallelogram ✓. Exactly one pair of parallel sides → trapezium ✓（标记改正）。让孩子跟读：Two pairs parallel → parallelogram. Exactly one pair parallel → trapezium. 教师总结本节：Fossil errors this week: (1) stopping at the less specific name (four right angles + four equal sides → just saying 「rectangle」, should say 「square」). (2) reversing the hierarchy (saying 「every rectangle is a square」, should say 「every square is a rectangle」). (3) confusing parallelogram and trapezium (two pairs parallel → trapezium, should say parallelogram; Singapore trapezium = exactly one pair). Remember: name the MOST SPECIFIC figure the given properties force.",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出推理步骤）。例题 1（Classify by properties: parallelogram case）：At Riverside Secondary, Mr Lim describes a quadrilateral ABCD: (1) Opposite sides AB and CD are parallel and equal. (2) Opposite sides BC and AD are parallel and equal. (3) Opposite angles are equal: ∠A = ∠C, ∠B = ∠D. (4) Consecutive angles add to 180°: ∠A + ∠B = 180°. (5) Diagonals AC and BD bisect each other at point O. Question: Based on these properties, what is the most specific name for quadrilateral ABCD? Explain your reasoning. 步骤：① List the given properties: opposite sides parallel and equal; opposite angles equal; consecutive angles add to 180°; diagonals bisect each other. ② Recall the definitions: A parallelogram has opposite sides parallel and equal, opposite angles equal, consecutive angles add to 180°, diagonals bisect each other. A rectangle is a parallelogram with four right angles. A rhombus is a parallelogram with four equal sides. A square is a rectangle + rhombus (four right angles and four equal sides). A trapezium has exactly one pair of parallel sides (Singapore definition). ③ Check the given properties: We are told opposite sides are parallel and equal, opposite angles equal, consecutive angles add to 180°, diagonals bisect each other. These are the properties of a parallelogram. ④ Check if extra properties are given: We are NOT told the quadrilateral has four right angles (so we cannot say it is a rectangle). We are NOT told the quadrilateral has four equal sides (so we cannot say it is a rhombus). We are NOT told it has four right angles AND four equal sides (so we cannot say it is a square). We are told TWO pairs of parallel sides, not exactly one pair (so it is NOT a trapezium). ⑤ Conclusion: The given properties match a parallelogram with no extra properties. The most specific name is parallelogram. ⑥ Answer: Quadrilateral ABCD is a parallelogram (the most specific name based on the given properties). 例题 2（Classify by properties: square case, fossil warning）：At Riverside Secondary, Wei describes a quadrilateral PQRS: (1) All four sides are equal: PQ = QR = RS = SP = 8 cm. (2) All four angles are right angles: ∠P = ∠Q = ∠R = ∠S = 90°. (3) Diagonals PR and QS are equal and bisect each other at right angles. Wei says: 「Because it has four right angles, it is a rectangle.」Question: (i) Is Wei's answer correct? (ii) What is the MOST SPECIFIC name for quadrilateral PQRS? Explain your reasoning. 步骤：① List the given properties: four equal sides (each = 8 cm); four right angles (each = 90°); diagonals equal and bisect each other at right angles. ② Recall the definitions: A parallelogram has opposite sides parallel and equal, opposite angles equal, consecutive angles add to 180°, diagonals bisect each other. A rectangle is a parallelogram with four right angles. A rhombus is a parallelogram with four equal sides. A square is a rectangle + rhombus (four right angles and four equal sides). ③ Analyze Wei's answer: Wei said 「it is a rectangle」. This is TRUE, because the quadrilateral has four right angles, which is the definition of a rectangle. BUT Wei's answer is NOT the most specific name. ④ Check the given properties: We are told the quadrilateral has four right angles (so it IS a rectangle). We are also told the quadrilateral has four equal sides (so it IS a rhombus). A quadrilateral that is BOTH a rectangle AND a rhombus is a SQUARE. ⑤ Identify the fossil error: Wei stopped at the less specific name 「rectangle」. Wei is correct that it is a rectangle, but Wei did not give the MOST SPECIFIC name. The most specific name is SQUARE. ⑥ Conclusion: (i) Wei's answer 「it is a rectangle」is TRUE but NOT the most specific name. Wei made the fossil error of stopping at the less specific name. (ii) The MOST SPECIFIC name for quadrilateral PQRS is SQUARE, because it has four right angles (rectangle property) AND four equal sides (rhombus property). ⑦ Answer: (i) Wei's answer is correct but not specific enough. Wei said 「rectangle」, which is true, but the most specific name is 「square」. (ii) The most specific name is square. 教师示范完例题后，让孩子在纸上写下关键步骤：① List given properties. ② Recall definitions. ③ Check which figure matches all given properties. ④ Name the MOST SPECIFIC figure. ⑤ Avoid fossil errors: do not stop at less specific name; do not reverse the hierarchy; do not confuse parallelogram and trapezium.",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：At Riverside Secondary, Mr Lim describes a quadrilateral ABCD: (1) Opposite sides AB and CD are parallel and equal. (2) Opposite sides BC and AD are parallel and equal. (3) Consecutive angles add to 180°. (4) Diagonals bisect each other. Question: Based on these properties, what is the most specific name for quadrilateral ABCD? Explain your reasoning. 答案：① List given properties: opposite sides parallel and equal, consecutive angles add to 180°, diagonals bisect each other. ② Recall definitions: Parallelogram has these properties. Rectangle is parallelogram + four right angles. Rhombus is parallelogram + four equal sides. Square is rectangle + rhombus. Trapezium has exactly one pair parallel (Singapore definition). ③ Check given properties: The given properties match a parallelogram. We are NOT told it has four right angles (so NOT rectangle). We are NOT told it has four equal sides (so NOT rhombus). We are NOT told it has four right angles AND four equal sides (so NOT square). We are told TWO pairs of parallel sides, not exactly one (so NOT trapezium). ④ Conclusion: The most specific name is parallelogram (no extra properties given). ⑤ Answer: Quadrilateral ABCD is a parallelogram. 题 2：At Riverside Secondary, Aisha describes a quadrilateral PQRS: (1) All four sides are equal: PQ = QR = RS = SP = 10 cm. (2) All four angles are right angles: ∠P = ∠Q = ∠R = ∠S = 90°. (3) Diagonals are equal and bisect each other at right angles. Wei says: 「Because it has four right angles, it is a rectangle.」Question: (i) Is Wei's answer correct? (ii) What is the MOST SPECIFIC name for quadrilateral PQRS? Explain your reasoning and identify Wei's fossil error if any. 答案：① List given properties: four equal sides (each = 10 cm), four right angles (each = 90°), diagonals equal and bisect each other at right angles. ② Recall definitions: Rectangle = parallelogram + four right angles. Rhombus = parallelogram + four equal sides. Square = rectangle + rhombus (four right angles AND four equal sides). ③ Analyze Wei's answer: Wei said 「it is a rectangle」. This is TRUE because the quadrilateral has four right angles. BUT Wei's answer is NOT the most specific name. ④ Check given properties: The quadrilateral has four right angles (so it IS a rectangle). The quadrilateral also has four equal sides (so it IS a rhombus). A quadrilateral that is BOTH rectangle AND rhombus is a SQUARE. ⑤ Identify fossil error: Wei stopped at the less specific name 「rectangle」. Wei is correct that it is a rectangle, but the MOST SPECIFIC name is SQUARE. ⑥ Conclusion: (i) Wei's answer 「it is a rectangle」is TRUE but NOT specific enough. Wei made the fossil error of stopping at the less specific name. (ii) The MOST SPECIFIC name is square (four right angles AND four equal sides). ⑦ Answer: (i) Wei is correct that it is a rectangle, but Wei should say 「square」, the most specific name. Wei made the fossil error of stopping at the less specific name. (ii) The most specific name is square. 题 3：At Riverside Secondary, Mr Lim describes a quadrilateral WXYZ: (1) Side WX is parallel to side YZ. (2) Side WZ is NOT parallel to side XY. Question: Based on these properties, what is the most specific name for quadrilateral WXYZ? Explain why it is NOT a parallelogram. 答案：① List given properties: One pair of opposite sides (WX and YZ) are parallel. The other pair of opposite sides (WZ and XY) are NOT parallel. ② Recall definitions: Trapezium (Singapore definition) = exactly one pair of parallel sides. Parallelogram = TWO pairs of parallel sides (opposite sides parallel). ③ Check given properties: We are told exactly ONE pair of sides are parallel (WX ∥ YZ), and the other pair are NOT parallel (WZ is NOT parallel to XY). This matches the Singapore definition of a trapezium. ④ Explain why NOT parallelogram: A parallelogram requires TWO pairs of opposite sides to be parallel. We are told only ONE pair is parallel, so it is NOT a parallelogram. ⑤ Conclusion: The most specific name is trapezium (Singapore definition: exactly one pair of parallel sides). ⑥ Answer: Quadrilateral WXYZ is a trapezium. It is NOT a parallelogram because a parallelogram requires two pairs of parallel sides, but WXYZ has only one pair of parallel sides (Singapore trapezium definition). 题目做完后，教师逐题检查孩子的答案和推理步骤，纠正任何错误。特别注意孩子是否犯了化石错误：(1) stopping at less specific name (四个直角+四条边相等 → 只说「rectangle」不说「square」), (2) reversing hierarchy (说「every rectangle is a square」), (3) confusing parallelogram and trapezium (两对平行 → 梯形)。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.5 classifying special quadrilaterals on the basis of their properties（根据性质给特殊四边形分类）。本周是 G1.5 classification only。Given properties → name the most specific special quadrilateral. Hierarchy（包含关系）: square ⊂ rectangle and square ⊂ rhombus ⊂ parallelogram; trapezium is not a parallelogram（正方形 ⊂ 矩形，正方形 ⊂ 菱形 ⊂ 平行四边形；梯形不是平行四边形）。Singapore definition: trapezium = exactly one pair of parallel sides（新加坡定义：梯形 = 恰好一对对边平行）。「A square is a rectangle」is TRUE. 「A rectangle is a square」is FALSE unless extra properties are given. Examples: Opposite sides parallel and equal → parallelogram (no extra properties). Four right angles and four equal sides → square (most specific name, not just 「rectangle」). Exactly one pair parallel → trapezium. Four equal sides and diagonals at right angles but angles not 90° → rhombus (not square). 第 47 周已教 G1.4 properties。(3) 本周化石：stopping at the less specific name（错误：停在不够具体的名称。例如：four right angles + four equal sides → 只说「it is a rectangle」虽然对但不够具体，should say「square」）；reversing the hierarchy（错误：颠倒包含关系。例如：说「every rectangle is a square」。正确：「every square is a rectangle」）；confusing parallelogram and trapezium（错误：two pairs of parallel sides → trapezium。正确：two pairs parallel → parallelogram; Singapore trapezium = exactly one pair）。(4) 本周作业在 app 里，完成后提交。下周见。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。Friendly integers。No calculator。本周完成 G1.5 classification of special quadrilaterals on the basis of their properties。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-50": {
    title: "凸多边形内角和与外角和 — Angle sum of interior and exterior angles of any convex polygon",
    mathExample: "Convex hexagon: 6 sides, interior sum = (6 − 2) × 180° = 720°. Exterior sum of any convex polygon = 360° always. Regular octagon: each exterior = 360° ÷ 8 = 45°. Fossil: using n × 180° instead of (n − 2) × 180°.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 凸多边形的内角和与外角和。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.6 angle sum of interior and exterior angles of any convex polygon（任意凸多边形的内角和与外角和）。本周是 G1.6 only。Interior angle sum of any convex n-gon = (n − 2) × 180°. Exterior angle sum of any convex polygon = 360° (always, no matter how many sides). For a regular n-gon: each interior = (n − 2) × 180° ÷ n; each exterior = 360° ÷ n. Friendly integers: triangle 180, quadrilateral 360, pentagon 540, hexagon 720, octagon 1080, nonagon 1260, decagon 1440, dodecagon 1800; regular hexagon each interior 120; regular pentagon each exterior 72; regular octagon each exterior 45. Examples: Convex hexagon has 6 sides, so interior sum = (6 − 2) × 180° = 720°. Exterior sum of any convex polygon = 360° (pentagon, decagon, any polygon—always 360°). Regular octagon: each exterior = 360° ÷ 8 = 45°. Fossil: using n × 180° instead of (n − 2) × 180° for interior sum; or saying exterior sum is (n − 2) × 180° or 180° instead of 360°. 第 48 周已教 G1.4 regular polygons naming and symmetry. 本周不教 G1.7 construction.」对孩子说：「今天我们学 Sec 1 G1.6 angle sums（角度和）。内角和 interior angle sum 用公式 (n − 2) × 180°，外角和 exterior angle sum always = 360°。」让孩子点头表示听懂了目标。",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个凸六边形（convex hexagon with 6 sides），标记 6 个顶点 ABCDEF。问孩子：「How many sides does this hexagon have?」引导孩子说出：6 sides（6 条边）。写下公式：Interior angle sum of any convex n-gon = (n − 2) × 180°. 问孩子：「For a hexagon, n = 6. What is the interior angle sum?」引导孩子说出：(6 − 2) × 180° = 4 × 180° = 720°. 写：Hexagon (6 sides): interior sum = (6 − 2) × 180° = 720°. 再擦掉，写第二个公式：Exterior angle sum of any convex polygon = 360° (always). 问孩子：「What is the exterior angle sum of a hexagon? A pentagon? An octagon?」引导孩子说出：360° for all of them（所有的都是 360°）。强调：The exterior angle sum is always 360°, no matter how many sides the polygon has（外角和总是 360°，不管多边形有几条边）。写：Exterior sum = 360° always (hexagon, pentagon, octagon—all 360°). 让孩子跟读：Interior sum uses (n − 2) × 180°; exterior sum is always 360°.",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei calculates the interior angle sum of a convex hexagon (6 sides). He says: 「Interior angle sum = 6 × 180° = 1080°.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：using n × 180° instead of (n − 2) × 180°（错误：用 n × 180° 代替 (n − 2) × 180°）。指出：Wei used 6 × 180° = 1080°, but this is wrong（Wei 用了 6 × 180° = 1080°，但这是错的）。为什么？Because the correct formula is (n − 2) × 180°, not n × 180°（因为正确的公式是 (n − 2) × 180°，不是 n × 180°）。For a hexagon with 6 sides, we calculate (6 − 2) × 180° = 4 × 180° = 720°（对于有 6 条边的六边形，我们计算 (6 − 2) × 180° = 4 × 180° = 720°）。改正后写：Hexagon interior sum = (6 − 2) × 180° = 720°, not 6 × 180° = 1080°（标记为 ✓）。让孩子跟读改正后的句子：Interior sum = (n − 2) × 180°, not n × 180°. 再给第二个化石例子：Aisha calculates the exterior angle sum of a convex pentagon (5 sides). She says: 「Exterior angle sum = (5 − 2) × 180° = 540°.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：confusing interior sum with exterior sum（错误：混淆内角和与外角和）。指出：Aisha calculated (5 − 2) × 180° = 540°, but this is the interior angle sum, not the exterior angle sum（Aisha 计算了 (5 − 2) × 180° = 540°，但这是内角和，不是外角和）。The exterior angle sum of any convex polygon is always 360°, no matter how many sides（任意凸多边形的外角和总是 360°，不管有几条边）。改正后写：Pentagon exterior sum = 360° (always for any convex polygon), not (5 − 2) × 180° = 540°（标记为 ✓）。让孩子跟读：Exterior sum is always 360°, not (n − 2) × 180°. The formula (n − 2) × 180° is for the interior sum. 再写第三个化石例子：Wei says: 「A regular pentagon has each interior angle = 360° ÷ 5 = 72°.」（标记为 ✗）。圈出错误：using 360° ÷ n for the interior angle（错误：用 360° ÷ n 计算内角）。指出：Wei used 360° ÷ 5 = 72°, but this is the exterior angle, not the interior angle（Wei 用了 360° ÷ 5 = 72°，但这是外角，不是内角）。Each interior angle = (n − 2) × 180° ÷ n. Each exterior angle = 360° ÷ n. For a regular pentagon: each interior = (5 − 2) × 180° ÷ 5 = 108°; each exterior = 360° ÷ 5 = 72°. 改正后写：Regular pentagon: each interior = (5 − 2) × 180° ÷ 5 = 108°; each exterior = 360° ÷ 5 = 72°（标记为 ✓）。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出推理步骤）。例题 1（Interior angle sum of a convex octagon）：At Riverside Secondary, Mr Lim draws a convex octagon on the board. He asks the class: 「What is the sum of all the interior angles of this convex octagon?」Question: Find the interior angle sum. Show your working clearly. 步骤：① Recall the formula: Interior angle sum of any convex n-gon = (n − 2) × 180°. ② Identify n: An octagon has 8 sides, so n = 8. ③ Apply the formula: Interior angle sum = (8 − 2) × 180° = 6 × 180°. ④ Calculate: 6 × 180° = 1080°. ⑤ Conclusion: The interior angle sum of a convex octagon is 1080°. ⑥ Answer: 1080°. 在白板写出每一步，边写边说。强调：We use (n − 2) × 180°, not n × 180°. For an octagon with 8 sides, we subtract 2 from 8 first: (8 − 2) = 6, then multiply by 180°: 6 × 180° = 1080°（我们用 (n − 2) × 180°，不是 n × 180°。对于有 8 条边的八边形，我们先从 8 减 2：(8 − 2) = 6，然后乘以 180°：6 × 180° = 1080°）。例题 2（Exterior angle sum and each exterior angle of a regular decagon）：At Riverside Secondary, Aisha studies a regular decagon (10 sides). She wants to find: (i) the exterior angle sum of the decagon; (ii) the measure of each exterior angle. Question: Find (i) the exterior angle sum, (ii) each exterior angle. Show your working. 步骤：① Exterior angle sum: Recall the property: Exterior angle sum of any convex polygon = 360° (always, no matter how many sides). A decagon has 10 sides, but the exterior angle sum is still 360°. ② Conclusion for (i): Exterior angle sum = 360°. ③ Each exterior angle: For a regular n-gon, each exterior angle = 360° ÷ n. A regular decagon has 10 sides, so each exterior angle = 360° ÷ 10 = 36°. ④ Conclusion for (ii): Each exterior angle = 36°. ⑤ Answer: (i) Exterior angle sum = 360°; (ii) Each exterior angle = 36°. 在白板写出每一步。强调：The exterior angle sum is always 360° for any convex polygon, whether it's a pentagon, hexagon, octagon, or decagon—always 360°（外角和对任意凸多边形总是 360°，无论是五边形、六边形、八边形还是十边形——总是 360°）。For a regular polygon, each exterior angle = 360° ÷ n（对于正多边形，每个外角 = 360° ÷ n）。让孩子跟读关键公式：Interior sum = (n − 2) × 180°; Exterior sum = 360° always; Each exterior = 360° ÷ n.",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：At Riverside Secondary, Mr Lim draws a convex heptagon (7 sides) on the board. He asks the class to find the sum of all the interior angles of this convex heptagon. Question: (i) Write the formula for the interior angle sum of any convex n-gon in terms of n. (ii) Use the formula to calculate the interior angle sum of the convex heptagon (7 sides). Show all your working steps clearly. (iii) Wei says: 「The interior angle sum should be 7 × 180° = 1260°, because there are 7 angles and each angle is close to 180°.」 Explain what is wrong with Wei's reasoning and show the correct calculation. 答案：① Formula: Interior angle sum of any convex n-gon = (n − 2) × 180°. ② Heptagon calculation: n = 7, so interior angle sum = (7 − 2) × 180° = 5 × 180° = 900°. ③ Wei's error: Wei used 7 × 180° = 1260°, but this is wrong. Wei used n × 180° instead of (n − 2) × 180°. The correct formula has (n − 2), not n. For a heptagon with 7 sides, we subtract 2 from 7 first: (7 − 2) = 5, then multiply by 180°: 5 × 180° = 900°. Wei's answer 1260° is 360° too large because he forgot to subtract 2. Correct answer: 900°. 题 2：Aisha studies convex polygons at Riverside Secondary. She observes that the exterior angle sum of any convex polygon is always the same value, no matter how many sides the polygon has. Question: (i) State the value of the exterior angle sum of any convex polygon. (ii) Verify that both a pentagon (5 sides) and a decagon (10 sides) have the same exterior angle sum by explaining why the exterior angle sum does not depend on the number of sides. (iii) Wei says: 「The exterior angle sum of a convex hexagon (6 sides) should be (6 − 2) × 180° = 720°.」 Explain what is wrong with Wei's reasoning. 答案：① Exterior angle sum = 360° (always for any convex polygon). ② Pentagon and decagon both have exterior angle sum = 360°. The exterior angle sum does NOT depend on the number of sides. It is always 360° for any convex polygon. Verification: Pentagon (5 sides) exterior sum = 360°. Decagon (10 sides) exterior sum = 360°. Both are the same value, 360°. ③ Wei's error: Wei said the exterior angle sum is (6 − 2) × 180° = 720°, but this is wrong. Wei calculated the interior angle sum, not the exterior angle sum. The formula (n − 2) × 180° gives the interior angle sum. The exterior angle sum is always 360° for any convex polygon. Correct answer: Exterior sum = 360°. 题 3：At Riverside Secondary, Mr Lim draws a regular nonagon (9 sides with all sides equal and all interior angles equal) on the board. Aisha and Wei work together to find the measure of each interior angle and each exterior angle. Question: (i) Calculate the sum of all the interior angles of the regular nonagon. Show your working clearly. (ii) Since the regular nonagon has 9 equal interior angles, calculate the measure of each interior angle. Show your working. (iii) Calculate the measure of each exterior angle of the regular nonagon using the formula: each exterior angle = 360° ÷ n. Show your working. (iv) Verify that each interior angle + each exterior angle = 180°. 答案：① Interior angle sum: n = 9, so interior sum = (9 − 2) × 180° = 7 × 180° = 1260°. ② Each interior angle: The regular nonagon has 9 equal interior angles, so each interior = 1260° ÷ 9 = 140°. ③ Each exterior angle: For a regular n-gon, each exterior = 360° ÷ n. n = 9, so each exterior = 360° ÷ 9 = 40°. ④ Verification: Each interior + each exterior = 140° + 40° = 180°. This is correct because an interior angle and its adjacent exterior angle are on a straight line, and angles on a straight line add to 180°. Correct answers: (i) 1260°; (ii) 140°; (iii) 40°; (iv) 140° + 40° = 180° ✓. 孩子做题时，教师观察，不要打断。做完后，请孩子读出每道题的答案和推理步骤。纠正格式错误（比如没写单位°，或跳过步骤）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.6 angle sum of interior and exterior angles of any convex polygon（任意凸多边形的内角和与外角和）。本周是 G1.6 only。Interior angle sum of any convex n-gon = (n − 2) × 180°. Exterior angle sum of any convex polygon = 360° (always, no matter how many sides). For a regular n-gon: each interior = (n − 2) × 180° ÷ n; each exterior = 360° ÷ n. Friendly integers: triangle 180, quadrilateral 360, pentagon 540, hexagon 720, octagon 1080, nonagon 1260, decagon 1440, dodecagon 1800; regular hexagon each interior 120; regular pentagon each exterior 72; regular octagon each exterior 45. Examples: Convex hexagon (6 sides): interior sum = (6 − 2) × 180° = 720°. Exterior sum of any convex polygon = 360° (pentagon, decagon, any polygon—always 360°). Regular octagon: each exterior = 360° ÷ 8 = 45°. Fossil: using n × 180° instead of (n − 2) × 180° for interior sum (hexagon 6 × 180° = 1080° ✗; right: (6 − 2) × 180° = 720° ✓); saying exterior sum is (n − 2) × 180° or 180° (wrong; exterior sum always = 360° ✓); confusing interior with exterior (calculating (6 − 2) × 180° = 720° but saying it's exterior sum ✗); using 360° ÷ n for the interior angle of a regular n-gon (wrong; 360° ÷ n gives exterior angle, not interior; each interior = (n − 2) × 180° ÷ n ✓). 第 48 周已教 G1.4 regular polygons naming and symmetry. 本周不教 G1.7 construction. (3) 本周作业：reading 5 道 MCQ + grammar 8 道 MCQ + writing 3 道 show working. 所有作业在 ttee.io 平台完成。对家长说：「请督促孩子本周完成作业。Writing 部分需要写出推理步骤，不只是答案。有问题可以随时联系我。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-51": {
    title: "按已知数据作简单几何图形 — Construction of simple geometrical figures from given data",
    mathExample: "Construct triangle ABC with AB = 6 cm, BC = 8 cm, CA = 10 cm using ruler + compasses (SSS). Construct a 60° angle with a protractor. Fossil: using a protractor to construct SSS (SSS needs compasses); saying AAA determines a unique triangle (AAA does not).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 按已知数据作简单几何图形。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.7 construction of simple geometrical figures from given data using compasses, ruler, set squares and protractors, where appropriate（按已知数据用圆规、直尺、三角板、量角器作简单几何图形）。本周是 G1.7 only。Which instrument for which job: compasses (equal lengths / arcs / circles), ruler (straight segments, measuring length), set squares (right angle, parallel / perpendicular lines), protractor (a given angle size). Triangle from given data: SSS (three sides → compasses + ruler); SAS (two sides and included angle → ruler + protractor + compasses); ASA (two angles and included side → ruler + protractor). A unique triangle is determined by SSS / SAS / ASA. AAA does NOT determine a unique triangle (similar copies of different sizes). Simple constructions: perpendicular from a point to a line (set square or compasses); a line parallel to a given line through a point (set square + ruler); an angle of a given size (protractor); copy a length (compasses). 作图：SSS 三边定三角形唯一 / SAS 两边夹角定三角形唯一 / ASA 两角夹边定三角形唯一。AAA 不定唯一三角形，只定相似，可以有不同大小的相似三角形。Fossil: using a protractor to construct SSS (SSS needs compasses to copy the three lengths, not protractor); saying AAA determines a unique triangle (AAA does not determine a unique triangle; similar copies can have different sizes). Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. Friendly integers: 6 cm, 8 cm, 10 cm, 60°, 90°. No calculator. 本周是 G1.7 only，只教 Sec 1 simple geometrical figures 作图。本周完成官方 G1. Angles, triangles and polygons 全部 1.1–1.7 小节（第 42–51 周已教完 G1.1–G1.7）。下周不教 G5 Mensuration（不教面积体积）。」对孩子说：「准备好了吗？我们开始第 51 周的学习。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上展示四种作图工具的图片或实物（如果有）：compasses（圆规）, ruler（直尺）, set square（三角板）, protractor（量角器）。问孩子：「Which instrument do you use to copy a length (for example, 6 cm)?」引导孩子说出：compasses（圆规）。写：compasses (equal lengths / arcs / circles). 再问：「Which instrument do you use to construct an angle of a given size (for example, 60°)?」引导孩子说出：protractor（量角器）。写：protractor (a given angle size). 再问：「Which instrument do you use to construct a perpendicular or a parallel line?」引导孩子说出：set square（三角板）。写：set square (right angle, parallel / perpendicular lines). 再问：「Which instrument do you use to draw a straight line or measure a length?」引导孩子说出：ruler（直尺）。写：ruler (straight segments, measuring length). 总结：Each instrument has its own job（每个工具有它自己的用途）。Compasses copy lengths（圆规复制长度）。Protractor constructs angles of given size（量角器作给定大小的角）。Set square constructs right angles, perpendiculars, and parallel lines（三角板作直角、垂线和平行线）。Ruler draws straight lines and measures lengths（直尺画直线和测量长度）。让孩子跟读：Compasses for lengths; protractor for angles; set square for perpendiculars and parallels; ruler for straight lines.",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei needs to construct a triangle with three given side lengths: AB = 6 cm, BC = 8 cm, CA = 10 cm. He says: 「To construct this triangle, I will use a protractor to measure the three side lengths.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：using a protractor to construct SSS (SSS needs compasses to copy the three lengths, not protractor)（错误：用量角器作 SSS。SSS 需要圆规来复制三边长，不是量角器）。指出：Wei said he will use a protractor to measure the three side lengths, but this is wrong（Wei 说他会用量角器测量三边长，但这是错的）。为什么？Because SSS construction uses compasses and ruler, not a protractor（因为 SSS 作图用圆规和直尺，不是量角器）。Compasses copy the three side lengths（圆规复制三边长）。Ruler measures the lengths and draws straight lines（直尺测量长度和画直线）。Protractor measures angles, not side lengths（量角器测量角度，不是边长）。改正后写：SSS construction uses compasses + ruler, not protractor（标记为 ✓）。让孩子跟读改正后的句子：SSS uses compasses + ruler, not protractor. 再给第二个化石例子：Aisha is given the following data: angle A = 50°, angle B = 70°, angle C = 60° (three angles only, no side lengths). Mr Lim asks: 「Can these three angles (AAA) determine a unique triangle?」 Aisha says: 「Yes, AAA determines a unique triangle because the three angles add to 180°.」（标记为 ✗）。问孩子：「这个对吗？」圈出错误：saying AAA determines a unique triangle (AAA does not determine a unique triangle; similar copies can have different sizes)（错误：说 AAA 定唯一三角形。AAA 不定唯一三角形；相似的三角形可以有不同的大小）。指出：Aisha said AAA determines a unique triangle, but this is wrong（Aisha 说 AAA 定唯一三角形，但这是错的）。为什么？Because AAA does not determine a unique triangle（因为 AAA 不定唯一三角形）。You can have similar triangles with the same three angles but different sizes（你可以有相同三个角但不同大小的相似三角形）。For example, a triangle with angles 50°, 60°, 70° and sides 3 cm, 4 cm, 5 cm is similar to a triangle with the same angles but sides 6 cm, 8 cm, 10 cm（例如，一个角度为 50°、60°、70° 且边长为 3 cm、4 cm、5 cm 的三角形与另一个角度相同但边长为 6 cm、8 cm、10 cm 的三角形相似）。Both have the same angles, but they are different triangles（两个三角形有相同的角度，但它们是不同的三角形）。AAA only determines the shape (angles), not the size (side lengths)（AAA 只定形状（角度），不定大小（边长））。改正后写：AAA does not determine a unique triangle. It only determines the shape, not the size（标记为 ✓）。让孩子跟读改正后的句子：AAA does not determine a unique triangle; it only determines the shape, not the size.",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出推理步骤）。例题 1（SSS construction）：At Riverside Secondary, Mr Lim gives the class the following data to construct a triangle ABC: side AB = 6 cm, side BC = 8 cm, side CA = 10 cm. Question: Describe the construction steps. Which instruments do you use? Is the triangle unique? 步骤：① Type of construction: This is an SSS construction (three sides are given: AB = 6 cm, BC = 8 cm, CA = 10 cm). ② Instruments needed: compasses and ruler (compasses copy the three lengths to form the triangle; ruler measures the lengths and draws straight lines). ③ Construction steps: Step 1: Use a ruler to draw side AB = 6 cm. Step 2: Open the compasses to 8 cm (the length of BC). Place the compass point at B and draw an arc. Step 3: Open the compasses to 10 cm (the length of CA). Place the compass point at A and draw an arc. Step 4: The two arcs intersect at point C. Step 5: Use a ruler to draw sides BC and CA to complete the triangle ABC. ④ Uniqueness: Yes, the triangle determined by SSS (three sides) is unique. Given three side lengths, there is only one triangle (up to congruence). ⑤ Answer: SSS construction uses compasses + ruler; the triangle is unique. 在白板写出每一步，边写边说。强调：We use compasses to copy the three side lengths, not a protractor. Protractor measures angles, not side lengths（我们用圆规复制三边长，不是量角器。量角器测量角度，不是边长）。例题 2（Construct a 60° angle with a protractor）：At Riverside Secondary, Wei needs to construct an angle of 60°. Question: Which instrument should Wei use? Describe the construction steps. 步骤：① Instrument needed: protractor (protractor can measure and construct an angle of a given size such as 60°). ② Construction steps: Step 1: Draw a baseline (a horizontal line or ray). Step 2: Place the center of the protractor at the vertex (the point where you want the angle). Step 3: Align the baseline with the 0° mark on the protractor. Step 4: Mark a point at the 60° position on the protractor. Step 5: Remove the protractor and draw a ray from the vertex through the 60° mark. The angle between the baseline and the new ray is 60°. ③ Answer: Protractor is the correct instrument for constructing an angle of a given size. 在白板写出每一步，边写边说。强调：Protractor constructs angles of given size. To construct a 60° angle, use a protractor（量角器作给定大小的角。要作 60° 角，用量角器）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出推理步骤。家长可以用手机拍照孩子的推理。题 1：At Riverside Secondary, Aisha is given the following data to construct a triangle PQR: angle P = 50°, angle Q = 70°, and side PQ = 8 cm (the side between angles P and Q). Question: (i) What type of construction is this (SSS / SAS / ASA)? Explain why. (ii) Describe the construction steps in order. For each step, state which instrument you use (compasses / ruler / set square / protractor). (iii) Is the triangle determined by this data unique? Explain why or why not. 答案：① Type of construction: This is an ASA construction (two angles and the included side are given: angle P = 50°, angle Q = 70°, side PQ = 8 cm). ② Instruments needed: ruler and protractor (ruler measures the side PQ = 8 cm; protractor constructs the two angles 50° and 70°). ③ Construction steps: Step 1: Use a ruler to draw side PQ = 8 cm. Step 2: At point P, use a protractor to construct angle P = 50°. Draw a ray from P at 50° to side PQ. Step 3: At point Q, use a protractor to construct angle Q = 70°. Draw a ray from Q at 70° to side PQ. Step 4: The two rays intersect at point R. Step 5: Triangle PQR is complete. ④ Uniqueness: Yes, the triangle determined by ASA (two angles and the included side) is unique. Given two angles and the side between them, there is only one triangle. ⑤ Answer: ASA construction uses ruler + protractor; the triangle is unique. 题 2：At Riverside Secondary, Wei needs to construct a perpendicular from a point P to a given line L. Mr Lim specifies: 「Use a set square.」 Question: (i) Describe the construction steps. (ii) Explain why a set square is appropriate for this construction. 答案：① Construction steps: Step 1: Place the set square so that one edge of the right angle lies along the line L. Step 2: Slide the set square along L until the other edge of the right angle passes through the point P. Step 3: Draw a line along the edge of the right angle through P. This line is perpendicular to L. ② Why set square is appropriate: A set square has a right angle (90°). To construct a perpendicular, we need a right angle. The set square provides a right angle, so it is appropriate for this construction. ③ Answer: Set square provides a right angle to construct a perpendicular. 题 3：At Riverside Secondary, Mr Lim gives a second set of data: three angles only (angle A = 50°, angle B = 70°, angle C = 60°). He asks: 「Can these three angles (AAA) determine a unique triangle?」 Question: Explain why or why not. 答案：① AAA does NOT determine a unique triangle. ② Reason: You can have similar triangles with the same three angles but different sizes. AAA only determines the shape (angles), not the size (side lengths). ③ Example: A triangle with angles 50°, 60°, 70° and sides 3 cm, 4 cm, 5 cm is similar to a triangle with the same angles but sides 6 cm, 8 cm, 10 cm. Both have the same angles, but they are different triangles. ④ Conclusion: AAA does not determine a unique triangle; it only determines the shape, not the size. 等孩子做完每道题，检查步骤是否完整。如果孩子跳步，提醒：「每步都要写出来，不能跳。」家长可以拍照保存孩子的推理。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.7 construction of simple geometrical figures from given data using compasses, ruler, set squares and protractors, where appropriate（按已知数据用圆规、直尺、三角板、量角器作简单几何图形）。本周是 G1.7 only. Which instrument for which job: compasses (equal lengths / arcs / circles), ruler (straight segments, measuring length), set squares (right angle, parallel / perpendicular lines), protractor (a given angle size). Triangle from given data: SSS (three sides → compasses + ruler); SAS (two sides and included angle → ruler + protractor + compasses); ASA (two angles and included side → ruler + protractor). A unique triangle is determined by SSS / SAS / ASA. AAA does NOT determine a unique triangle (similar copies of different sizes). Simple constructions: perpendicular from a point to a line (set square or compasses); a line parallel to a given line through a point (set square + ruler); an angle of a given size (protractor); copy a length (compasses). 作图：SSS 三边定三角形唯一 / SAS 两边夹角定三角形唯一 / ASA 两角夹边定三角形唯一。AAA 不定唯一三角形，只定相似，可以有不同大小的相似三角形。Fossil: using a protractor to construct SSS (SSS needs compasses to copy the three lengths, not protractor); saying AAA determines a unique triangle (AAA does not determine a unique triangle; similar copies can have different sizes). Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. Friendly integers: 6 cm, 8 cm, 10 cm, 60°, 90°. No calculator. 本周完成官方 G1. Angles, triangles and polygons 全部 1.1–1.7 小节（第 42–51 周已教完 G1.1–G1.7）。下周不教 G5 Mensuration（不教面积体积）。(3) 本周作业：reading 5 道 MCQ + grammar 8 道 MCQ + writing 3 道 show working. 所有作业在 ttee.io 平台完成。对家长说：「请督促孩子本周完成作业。Writing 部分需要写出推理步骤，不只是答案。有问题可以随时联系我。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-52": {
    title: "平行四边形和梯形的面积 — Area of parallelogram and trapezium",
    mathExample: "Parallelogram: base 8 cm, perpendicular height 5 cm → Area = 8 × 5 = 40 cm². Trapezium: parallel sides 6 cm and 10 cm, perpendicular height 4 cm → Area = ½ × (6 + 10) × 4 = 32 cm². Fossil: using the slanted side as the height of a parallelogram; forgetting the ½ in the trapezium formula.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 平行四边形和梯形的面积。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.1 area of parallelogram and trapezium（平行四边形和梯形的面积）。本周是 G5.1 only。Area of a parallelogram = base × corresponding perpendicular height. The slanted side is NOT the height（平行四边形面积 = 底 × 对应的垂直高。倾斜的边不是高）。Area of a trapezium = ½ × (sum of the two parallel sides) × perpendicular height（梯形面积 = ½ × (两条平行边之和) × 垂直高）。Friendly integers so every asked area is an integer（友好整数，所有求出的面积都是整数）。例如：parallelogram base 8 cm height 5 cm → 40 cm²; trapezium parallel sides 6 cm and 10 cm, height 4 cm → ½(6+10)×4 = 32 cm²。Units: cm²。No calculator。本周是 G5.1 only，只教平行四边形和梯形面积。本周不教 5.2 composite figures、5.3 prism/cylinder、5.4 unit conversion、5.5 composite solids。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。本周开始官方 G5 Mensuration。」在白板或屏幕上写：Week 52: Area of parallelogram and trapezium（平行四边形和梯形的面积）。对孩子说：「Today we will learn about the area of parallelogram and trapezium（今天我们学平行四边形和梯形的面积）。Let's start（我们开始吧）。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个平行四边形（parallelogram）。标出底（base）和垂直高（perpendicular height）。问孩子：「What is this shape called?」引导孩子说出：parallelogram（平行四边形）。写：parallelogram = 平行四边形。再指着底和高，问孩子：「Which one is the base, and which one is the height?」引导孩子识别底和垂直高。强调：The height must be perpendicular to the base（高必须垂直于底）。The slanted side is NOT the height（倾斜的边不是高）。在白板上画一个梯形（trapezium），标出两条平行边（parallel sides）和垂直高（perpendicular height）。问孩子：「What is this shape called?」引导孩子说出：trapezium（梯形）。写：trapezium = 梯形。问孩子：「A trapezium has how many pairs of parallel sides?」引导孩子说出：one pair（一对）。强调：Singapore trapezium = exactly one pair of parallel sides（新加坡梯形定义：恰好一对平行边）。Do not treat a parallelogram as a trapezium（不要把平行四边形当作梯形）。让孩子跟读：parallelogram / trapezium / base / perpendicular height / parallel sides。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子：Wei draws a parallelogram with base 12 cm. The slanted side is 7 cm, and the perpendicular height from the base is 5 cm. Wei says: 「The area is 12 × 7 = 84 cm²」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：using the slanted side 7 cm as the height（错误：用倾斜的边 7 cm 当高）。指出：Wei used the slanted side 7 cm as the height, but this is wrong（Wei 用倾斜的边 7 cm 当高，但这是错的）。为什么？Because the area of a parallelogram is base × perpendicular height, not base × slanted side（因为平行四边形的面积是底 × 垂直高，不是底 × 斜边）。The slanted side is NOT the height（倾斜的边不是高）。改正后写：Area = base × perpendicular height = 12 × 5 = 60 cm²（标记为 ✓）。让孩子跟读改正后的句子：Area = 12 × 5 = 60 cm², not 12 × 7 = 84 cm². 再给第二个化石例子：Aisha has a trapezium. The two parallel sides are 8 cm and 12 cm, and the perpendicular height is 5 cm. Aisha writes: 「Area = (8 + 12) × 5 = 100 cm²」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：forgetting the ½ in the trapezium formula（错误：忘记梯形公式中的 ½）。指出：Aisha forgot the ½. The correct formula is Area = ½ × (sum of parallel sides) × height = ½ × (8 + 12) × 5 = ½ × 20 × 5 = 50 cm², not 100 cm²（Aisha 忘记了 ½。正确公式是面积 = ½ × (两平行边之和) × 高 = ½ × (8 + 12) × 5 = 50 cm²，不是 100 cm²）。改正后写：Area = ½ × (8 + 12) × 5 = 50 cm²（标记为 ✓）。让孩子跟读改正后的句子：Trapezium area = ½ × (sum of parallel sides) × height. 总结两个化石：① Parallelogram: don't use the slanted side as the height. Use the perpendicular height（平行四边形：不要用斜边当高，要用垂直高）。② Trapezium: don't forget the ½ in the formula（梯形：不要忘记公式中的 ½）。",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出算式步骤）。例题 1（Parallelogram area）：At Riverside Secondary, Mr Lim draws a parallelogram with base 8 cm and perpendicular height 5 cm. Question: Calculate the area of the parallelogram. Show your working. 步骤：① Formula: Area of parallelogram = base × perpendicular height（公式：平行四边形面积 = 底 × 垂直高）。② Given: base = 8 cm, perpendicular height = 5 cm（已知：底 = 8 cm，垂直高 = 5 cm）。③ Calculation: Area = 8 × 5 = 40 cm²（计算：面积 = 8 × 5 = 40 cm²）。④ Answer: 40 cm²（答案：40 cm²）。在白板写出每一步，边写边说。强调：Use the perpendicular height, not the slanted side. The slanted side is NOT the height（用垂直高，不是斜边。斜边不是高）。例题 2（Trapezium area）：At Riverside Secondary, Aisha studies a trapezium. The trapezium has parallel sides of length 6 cm and 10 cm, and perpendicular height 4 cm. Question: Calculate the area of the trapezium. Show your working. 步骤：① Formula: Area of trapezium = ½ × (sum of the two parallel sides) × perpendicular height（公式：梯形面积 = ½ × (两平行边之和) × 垂直高）。② Given: parallel sides = 6 cm and 10 cm, perpendicular height = 4 cm（已知：平行边 = 6 cm 和 10 cm，垂直高 = 4 cm）。③ Calculation: Area = ½ × (6 + 10) × 4 = ½ × 16 × 4 = ½ × 64 = 32 cm²（计算：面积 = ½ × (6 + 10) × 4 = ½ × 16 × 4 = 32 cm²）。④ Answer: 32 cm²（答案：32 cm²）。在白板写出每一步，边写边说。强调：Do not forget the ½ in the trapezium formula. Common fossil: using (a + b)h instead of ½(a + b)h, which gives 64 cm² instead of the correct 32 cm²（不要忘记梯形公式中的 ½。常见化石：用 (a + b)h 而不是 ½(a + b)h，会得到 64 cm² 而不是正确的 32 cm²）。",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：At Riverside Secondary, Mr Lim draws a parallelogram with base 12 cm and perpendicular height 7 cm. Question: Calculate the area of the parallelogram. Show your working. 答案：① Formula: Area of parallelogram = base × perpendicular height. ② Given: base = 12 cm, perpendicular height = 7 cm. ③ Calculation: Area = 12 × 7 = 84 cm². ④ Answer: 84 cm². 题 2：Aisha studies a trapezium at Riverside Secondary. The trapezium has parallel sides of length 8 cm and 16 cm, and perpendicular height 6 cm. Question: (i) Calculate the area of the trapezium. Show your working. (ii) Wei says: 「I calculated the area as (8 + 16) × 6 = 144 cm².」 Explain what is wrong with Wei's working. What should the correct answer be? 答案：(i) ① Formula: Area of trapezium = ½ × (sum of the two parallel sides) × perpendicular height. ② Given: parallel sides = 8 cm and 16 cm, perpendicular height = 6 cm. ③ Calculation: Area = ½ × (8 + 16) × 6 = ½ × 24 × 6 = ½ × 144 = 72 cm². ④ Answer: 72 cm². (ii) Wei forgot the ½ in the trapezium formula. The correct formula is Area = ½ × (sum of parallel sides) × height. Wei wrote (8 + 16) × 6 = 144 cm², but this is wrong. The correct answer is ½ × (8 + 16) × 6 = 72 cm², not 144 cm². 题 3：Mr Lim gives Wei a parallelogram with base 10 cm, slanted side 8 cm, and perpendicular height 5 cm. Question: (i) Calculate the area of the parallelogram. Show your working. (ii) Aisha says: 「The area is 10 × 8 = 80 cm² because you multiply the base by the slanted side.」 Explain why Aisha is wrong. What is the correct method and answer? 答案：(i) ① Formula: Area of parallelogram = base × perpendicular height. ② Given: base = 10 cm, slanted side = 8 cm (not used for area calculation), perpendicular height = 5 cm. ③ Calculation: Area = base × perpendicular height = 10 × 5 = 50 cm². ④ Answer: 50 cm². (ii) Aisha is wrong because she used the slanted side 8 cm as the height. The area of a parallelogram is base × perpendicular height, not base × slanted side. The slanted side is NOT the height. The correct method is Area = base × perpendicular height = 10 × 5 = 50 cm², not 10 × 8 = 80 cm². 等孩子做完每道题，检查算式是否完整。如果孩子跳步，提醒：「每步都要写出来，不能跳。」家长可以拍照保存孩子的算式。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.1 area of parallelogram and trapezium（平行四边形和梯形的面积）。本周是 G5.1 only. Area of a parallelogram = base × corresponding perpendicular height. The slanted side is NOT the height. Area of a trapezium = ½ × (sum of the two parallel sides) × perpendicular height. Singapore trapezium = exactly one pair of parallel sides. Do not treat a parallelogram as a trapezium. Friendly integers: parallelogram base 8 cm height 5 cm → 40 cm²; trapezium parallel sides 6 cm and 10 cm, height 4 cm → ½(6+10)×4 = 32 cm². Units: cm². No calculator. Fossil: using the slanted side as the height of a parallelogram（错误：用平行四边形的斜边当高）; forgetting the ½ in the trapezium formula（错误：忘记梯形公式中的 ½）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. 本周开始官方 G5 Mensuration。本周不教 5.2 composite figures、5.3 prism/cylinder、5.4 unit conversion、5.5 composite solids。(3) 本周作业：reading 5 道 MCQ + grammar 8 道 MCQ + writing 3 道 show working. 所有作业在 ttee.io 平台完成。对家长说：「请督促孩子本周完成作业。Writing 部分需要写出算式步骤，不只是答案。有问题可以随时联系我。」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-53": {
    title: "组合平面图形的周长和面积 — Perimeter and area of composite plane figures",
    mathExample: "L-shape: 8 cm by 6 cm rectangle with 3 cm by 2 cm rectangle cut from corner → Area = 8 × 6 − 3 × 2 = 48 − 6 = 42 cm². Rectangle 10 cm by 6 cm with right triangle (base 4 cm, height 6 cm) attached → Area = 10 × 6 + ½ × 4 × 6 = 60 + 12 = 72 cm². Fossil: adding the perimeters of the individual pieces (double-counting shared internal edges); forgetting to subtract a cut-out area.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。孩子和家长都在镜头前。调整摄像头，让孩子的脸清晰可见。对家长说：「本周内容是 Sec 1 组合平面图形的周长和面积。官方 MOE 2020 G3 Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.2 problems involving perimeter and area of composite plane figures（组合平面图形的周长和面积问题）。本周是 G5.2 only。Composite plane figures（组合平面图形）由基本图形组成（rectangles, triangles, parallelograms, trapeziums）。For area: split the composite figure into known shapes, calculate each piece's area, then add them together; if there is a cut-out, subtract its area（求面积：把组合图形分割成已知的基本图形，分别求面积，然后相加；如果有切去的部分，减去它的面积）。For perimeter: add only the outer edges of the composite figure; do NOT add the perimeters of the individual pieces, because that double-counts the shared internal edges（求周长：只加组合图形的外边缘；不要把各个部分的周长相加，因为这会把共享的内边重复计算）。Friendly integers so every asked length and area is an integer（友好整数，所有边长和面积都是整数）。例如：L-shape: 8×6 rectangle with 3×2 cut-out → Area = 48 − 6 = 42 cm²; Rectangle 10×6 with triangle ½×4×6 attached → Area = 60 + 12 = 72 cm²。Units: cm and cm²。No calculator。本周是 G5.2 only，只教 composite plane figures 的 perimeter and area。本周不教 5.3 prism/cylinder、5.4 unit conversion、5.5 composite solids。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School。第 52 周已完成 G5.1 parallelogram/trapezium area。本周继续官方 G5 Mensuration。」在白板或屏幕上写：Week 53: Perimeter and area of composite plane figures（组合平面图形的周长和面积）。对孩子说：「Today we will learn about composite plane figures. A composite plane figure is made of basic shapes put together.」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "在白板或屏幕上画一个 L-shape（L 形）。说明：「This is a composite plane figure. It is made of two rectangles put together.」标出各个边的长度。先画大长方形（例如 8 cm by 6 cm），再画出从一个角切去的小长方形（例如 3 cm by 2 cm）。说明：「The large rectangle is 8 cm by 6 cm. We cut out a small rectangle 3 cm by 2 cm from one corner. What is the area of the remaining L-shape?」引导孩子思考：Area of large rectangle = 8 × 6 = 48 cm². Area of cut-out = 3 × 2 = 6 cm². Area of L-shape = 48 − 6 = 42 cm². 写出这些步骤。再画一个组合图形：一个长方形（10 cm by 6 cm）加上一个直角三角形（底 4 cm，高 6 cm）贴在一边。说明：「This composite figure is a rectangle plus a triangle attached. How do we find the total area?」引导孩子：Split the figure into known shapes. Rectangle area = 10 × 6 = 60 cm². Triangle area = ½ × 4 × 6 = 12 cm². Total area = 60 + 12 = 72 cm². 让孩子跟读：composite plane figure（组合平面图形）/ split into known shapes（分割成已知图形）/ add the areas（把面积相加）/ subtract the cut-out（减去切去的部分）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在屏幕上或白板上写下错误例子 1：Wei has an L-shaped figure. The large rectangle is 12 cm by 10 cm, with a small rectangle 5 cm by 4 cm cut from one corner. Wei says: 「Area = 12 × 10 = 120 cm²」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：forgetting to subtract the cut-out area（错误：忘记减去切去部分的面积）。指出：Wei forgot to subtract the cut-out. When a shape is cut out, we must subtract its area（Wei 忘记减去切去的部分。当一个图形被切去时，我们必须减去它的面积）。改正后写：Area of large rectangle = 12 × 10 = 120 cm². Area of cut-out = 5 × 4 = 20 cm². Area of L-shape = 120 − 20 = 100 cm²（标记为 ✓）。让孩子跟读改正后的句子：Area = 120 − 20 = 100 cm², not 120 cm². 再给第二个化石例子：Aisha has a composite figure made of two rectangles: Rectangle A is 8 cm by 5 cm. Rectangle B is 6 cm by 3 cm. They share a 3 cm edge. Mr Lim asks: 「What is the perimeter of the whole composite figure?」 Aisha says: 「Perimeter of A = 2(8 + 5) = 26 cm. Perimeter of B = 2(6 + 3) = 18 cm. Total perimeter = 26 + 18 = 44 cm.」（标记为 ✗）。问孩子：「这个对吗？」等孩子思考后，圈出错误：adding the perimeters of the individual pieces instead of adding only the outer edges（错误：把各个部分的周长相加，而不是只加外边缘）。指出：Aisha double-counted the shared 3 cm edge. When finding the perimeter of a composite figure, we add only the outer edges, not the perimeters of the individual pieces（Aisha 把共享的 3 cm 边重复计算了。求组合图形的周长时，我们只加外边缘，不是把各个部分的周长相加）。改正后说明：The correct perimeter is the sum of only the outer edge lengths. The shared internal edge is not part of the perimeter（正确的周长是只加外边缘的长度。共享的内边不是周长的一部分）。让孩子跟读：Add only the outer edges, not the perimeters of the pieces.",
      },
      {
        name: "示范",
        duration: "10 分钟",
        teacherNotes: "教师示范两道完整例题（写出算式步骤）。例题 1（L-shape area with cut-out）：At Riverside Secondary, Mr Lim shows an L-shaped figure. The figure is a large rectangle 12 cm by 10 cm, with a small rectangle 5 cm by 4 cm cut from the top-right corner. Question: Calculate the area of the L-shape. Show your working. 步骤：① Area of large rectangle = 12 × 10 = 120 cm²（大长方形面积 = 12 × 10 = 120 cm²）。② Area of cut-out = 5 × 4 = 20 cm²（切去部分面积 = 5 × 4 = 20 cm²）。③ Area of L-shape = 120 − 20 = 100 cm²（L 形面积 = 120 − 20 = 100 cm²）。④ Answer: 100 cm²（答案：100 cm²）。在白板写出每一步，边写边说。强调：When a shape is cut out, subtract its area. Do not forget the subtraction（当一个图形被切去时，减去它的面积。不要忘记减法）。例题 2（Rectangle plus triangle）：At Riverside Secondary, Aisha has a composite figure. The figure is made of a rectangle 14 cm by 8 cm with a right triangle (base 8 cm, height 6 cm) attached to one side. Question: Calculate the total area of the composite figure. Show your working. 步骤：① Area of rectangle = 14 × 8 = 112 cm²（长方形面积 = 14 × 8 = 112 cm²）。② Area of triangle = ½ × 8 × 6 = 24 cm²（三角形面积 = ½ × 8 × 6 = 24 cm²）。③ Total area = 112 + 24 = 136 cm²（总面积 = 112 + 24 = 136 cm²）。④ Answer: 136 cm²（答案：136 cm²）。在白板写出每一步，边写边说。强调：Split the composite figure into known shapes. Calculate each area separately, then add them together（把组合图形分割成已知图形。分别计算每个面积，然后相加）。示范完后，问孩子：「Can you explain the steps for finding the area of a composite figure?」引导孩子回答：Split into known shapes, calculate each area, add them (or subtract if there is a cut-out).",
      },
      {
        name: "练习",
        duration: "12 分钟",
        teacherNotes: "给孩子 3 道练习题，让孩子独立做，写出算式步骤。家长可以用手机拍照孩子的算式。题 1：At Riverside Secondary, Mr Lim shows an L-shaped figure. The figure is a large rectangle measuring 12 cm by 10 cm, with a small rectangle measuring 5 cm by 4 cm cut from the top-right corner. Question: (i) Calculate the area of the large rectangle before the cut-out. (ii) Calculate the area of the cut-out rectangle. (iii) Calculate the area of the remaining L-shape. Show your working. 答案：(i) Area of large rectangle = 12 × 10 = 120 cm². (ii) Area of cut-out = 5 × 4 = 20 cm². (iii) Area of L-shape = 120 − 20 = 100 cm². 题 2：Aisha has a composite figure at Riverside Secondary. The figure is made of a rectangle 14 cm by 8 cm with a right triangle attached to one side. The triangle has base 8 cm and height 6 cm. Question: (i) Calculate the area of the rectangle. Show your working. (ii) Calculate the area of the triangle. Show your working. (iii) Calculate the total area of the composite figure. Show your working. 答案：(i) Area of rectangle = 14 × 8 = 112 cm². (ii) Area of triangle = ½ × 8 × 6 = 24 cm². (iii) Total area = 112 + 24 = 136 cm². 题 3：Wei draws a T-shaped figure at Riverside Secondary. The horizontal part of the T is a rectangle 16 cm long and 4 cm wide. The vertical part of the T is a rectangle 6 cm long and 10 cm wide. Question: (i) Calculate the area of the horizontal part. Show your working. (ii) Calculate the area of the vertical part. Show your working. (iii) Calculate the total area of the T-shaped figure. Show your working. (iv) Mr Lim asks: 「Can you find the perimeter of this T-shape by adding the perimeter of the horizontal part and the perimeter of the vertical part?」 Explain why this method is wrong. What is the correct method for finding the perimeter of a composite figure? 答案：(i) Area of horizontal part = 16 × 4 = 64 cm². (ii) Area of vertical part = 6 × 10 = 60 cm². (iii) Total area = 64 + 60 = 124 cm². (iv) This method is wrong because it double-counts the shared internal edges. The correct method for finding the perimeter of a composite figure is to add only the outer edge lengths, not the perimeters of the individual pieces. 做完后，检查孩子的算式。指出化石错误：forgetting to subtract the cut-out; adding the perimeters of the pieces instead of the outer edges. 纠正后让孩子重新写一遍。强调：For area, split into shapes and add (or subtract cut-outs). For perimeter, add only the outer edges.",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.2 problems involving perimeter and area of composite plane figures（组合平面图形的周长和面积问题）。本周是 G5.2 only. Composite plane figures（组合平面图形）由 rectangles, triangles, parallelograms, trapeziums 组成。For area: split the composite figure into known shapes, calculate each piece's area, then add them together; if there is a cut-out (a shape removed from a corner), subtract its area. For perimeter: add only the outer edges of the composite figure; do NOT add the perimeters of the individual pieces, because that double-counts the shared internal edges. Friendly integers: all lengths and areas are integers. L-shape: 8×6 rectangle minus 3×2 cut-out → Area = 48 − 6 = 42 cm². Rectangle 10×6 plus triangle ½×4×6 → Area = 60 + 12 = 72 cm². Units: cm and cm². No calculator. Fossil: adding the perimeters of the individual pieces instead of adding only the outer edges（错误：把各个部分的周长相加，而不是只加外边缘）; forgetting to subtract a cut-out area（错误：忘记减去切去部分的面积）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. 第 52 周已完成 G5.1 parallelogram/trapezium area。本周继续官方 G5 Mensuration。本周不教 5.3 prism/cylinder、5.4 unit conversion、5.5 composite solids。(3) 下周预告（如有下周课程）：继续 Sec 1 内容。(4) 作业：完成 app 上的 Week 53 题目（reading MCQ 5 题 + grammar MCQ 8 题 + writing show-working 3 题）。Show working steps clearly. 对家长说：「本周化石焦点：adding the perimeters of the pieces (double-counting shared internal edges); forgetting to subtract a cut-out. 请在家长端查看孩子的作业提交，关注这两个化石错误。」对孩子说：「Great work today! Remember: for area, split the figure into shapes and add (or subtract cut-outs). For perimeter, add only the outer edges.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-54": {
    title: "棱柱和圆柱的体积和表面积 — Volume and Surface Area of Prism and Cylinder",
    mathExample: "Cuboid 8 cm × 5 cm × 4 cm → V = 160 cm³. Closed cylinder r = 7 cm, h = 10 cm (π = 22/7) → V = 1540 cm³, SA = 748 cm².",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。调整摄像头。对家长说：「本周教 Sec 1 AEIS 数学：prism and cylinder 的 volume and surface area（棱柱和圆柱的体积和表面积）。不教 unit conversion（单位换算）或 composite solids（组合立体图形），这些是后续内容。」",
      },
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "问孩子：「你知道 cuboid（长方体）和 cylinder（圆柱）吗？」在屏幕上或白板上画一个长方体和一个圆柱。指出：cuboid 是 rectangular prism（长方形棱柱），有 6 个长方形面。Cylinder 有 2 个圆形面（top and bottom circular bases）和 1 个 curved surface（侧面）。让孩子跟读：cuboid, cylinder, prism.",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在白板上写下两个常见错误：(1) 「Volume of cylinder = 2πr」或「Volume = πr²」；(2) 「Surface area of closed cylinder = 2πrh」（只有侧面，忘记两个圆形底面）。问孩子：「这两个公式对吗？」等孩子思考后，圈出错误。解释：(1) 圆柱体积 = 底面积 × 高 = πr²h，不是 2πr（那是圆的周长）或 πr²（那是一个圆的面积）。(2) Closed cylinder 表面积 = 两个圆形底面 + 侧面 = 2πr² + 2πrh，不是只有侧面 2πrh。改正后写：「V = πr²h」和「SA = 2πr² + 2πrh」。让孩子跟读 2 次。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范两道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: Cuboid 8 cm × 5 cm × 4 cm.\n(i) Volume = length × width × height = 8 × 5 × 4. 先算 8 × 5 = 40. 再算 40 × 4 = 160 cm³. (ii) Surface area = 2(lw + lh + wh) = 2(8×5 + 8×4 + 5×4) = 2(40 + 32 + 20) = 2 × 92 = 184 cm². 解释：Cuboid 有 6 个面（top, bottom, front, back, left, right）。Top and bottom = 2×lw. Front and back = 2×lh. Left and right = 2×wh. Total = 2(lw + lh + wh). Units: cm³ for volume, cm² for surface area.\n\n例题 2: Closed cylinder r = 7 cm, h = 10 cm, π = 22/7.\n(i) Volume = πr²h = 22/7 × 7 × 7 × 10. 先算 7 × 7 = 49. 再算 22/7 × 49 = 22 × 7 = 154. 最后 154 × 10 = 1540 cm³. (ii) Surface area = 2πr² + 2πrh. 先算 2πr² = 2 × 22/7 × 49 = 2 × 22 × 7 = 308 cm². 再算 2πrh = 2 × 22/7 × 7 × 10 = 2 × 22 × 10 = 440 cm². Total = 308 + 440 = 748 cm². 解释：Closed cylinder 有两个圆形底面（2πr²）和侧面（2πrh）。If the stem says open (no lid), use πr² + 2πrh.\n\n让孩子跟读关键公式：V = lwh, V = πr²h, SA = 2πr² + 2πrh.",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 3 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Cuboid 10 cm × 6 cm × 8 cm. Find the volume. (提示：V = lwh. 先算 10 × 6, 再乘 8.) 期待答案：10 × 6 = 60, 60 × 8 = 480 cm³.\n\n练习 2: Closed cylinder r = 7 cm, h = 15 cm, π = 22/7. Find the volume. (提示：V = πr²h. 先算 r² = 7 × 7 = 49, 再乘 π and h.) 期待答案：πr²h = 22/7 × 49 × 15 = 22 × 7 × 15 = 2310 cm³.\n\n练习 3: Cuboid 12 cm × 8 cm × 5 cm. Find the surface area. (提示：SA = 2(lw + lh + wh). 先算三个面的面积，再乘 2.) 期待答案：2(12×8 + 12×5 + 8×5) = 2(96 + 60 + 40) = 2 × 196 = 392 cm².\n\n如果孩子卡住，教师给词提示（例如：「先算 r²」或「V = lwh」），但不直接说出答案。孩子算完后，教师检查 working steps 和单位（cm³ for volume, cm² for surface area）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.3 volume and surface area of prism and cylinder（棱柱和圆柱的体积和表面积）。本周是 G5.3 only. Prism volume = area of base × height. Cuboid (rectangular prism): V = lwh, SA = 2(lw+lh+wh). Cylinder: V = πr²h. Closed cylinder SA = 2πr² + 2πrh (two circular bases + curved surface). Open cylinder SA = πr² + 2πrh. For π use 22/7 with r = 7 or 14 so answers are integers, OR leave as π form (e.g. 98π cm³). Units: cm³ for volume, cm² for surface area. No calculator. Cuboid 8×5×4 → V = 160 cm³. Closed cylinder r=7, h=10 → V = 1540 cm³, SA = 748 cm². Fossil: using 2πr or πr² as volume (not πr²h)；forgetting the two circular bases when finding SA of closed cylinder (using only 2πrh instead of 2πr² + 2πrh). Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. 本周不教 5.4 unit conversion cm²↔m² / cm³↔m³（单位换算），5.5 composite solids（组合立体图形）。第 52–53 周已完成 G5.1–G5.2。(3) 下周预告（如有下周课程）：继续 Sec 1 内容。(4) 作业：完成 app 上的 Week 54 题目（reading MCQ 5 题 + grammar MCQ 8 题 + writing show-working 3 题）。Show working steps clearly. 对家长说：「本周化石焦点：using 2πr or πr² as cylinder volume; forgetting the two circular bases when finding closed cylinder SA. 请在家长端查看孩子的作业提交，关注这两个化石错误。」对孩子说：「Great work today! Remember: cylinder volume = πr²h, closed cylinder SA = 2πr² + 2πrh (two bases + curved surface).」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-55": {
    title: "平方厘米与平方米换算 / 立方厘米与立方米换算 — Conversion between cm² and m², and between cm³ and m³",
    mathExample: "2 m² = 20 000 cm²; 50 000 cm² = 5 m²; 3 m³ = 3 000 000 cm³; 4 000 000 cm³ = 4 m³.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。调整摄像头。对家长说：「本周教 Sec 1 AEIS 数学：conversion between cm² and m², and between cm³ and m³（平方厘米与平方米换算 / 立方厘米与立方米换算）。不教 composite solids（组合立体图形），那是下周内容。」",
      },
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "问孩子：「你知道 1 m = 100 cm 吗？」在白板上写：1 m = 100 cm。然后问：「如果是面积，1 m² 等于多少 cm²？」等孩子思考。如果孩子说 100 cm²，说：「很多人这样想，但我们今天会看看为什么不是 100。」如果孩子说 10 000 cm²，说：「非常好！今天我们就来证明这个。」让孩子跟读：square metre（平方米）, square centimetre（平方厘米）, cubic metre（立方米）, cubic centimetre（立方厘米）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在白板上写下两个常见错误：(1) 「1 m² = 100 cm² because 1 m = 100 cm」；(2) 「1 m³ = 100 cm³」或「1 m³ = 10 000 cm³」。问孩子：「这两个换算对吗？」等孩子思考后，圈出错误。解释：(1) 面积是 length × width. 1 m² = 1 m × 1 m = 100 cm × 100 cm = 10 000 cm²，不是 100 cm²。虽然长度 1 m = 100 cm，但面积要平方，所以 100 × 100 = 10 000. (2) 体积是 length × width × height. 1 m³ = 1 m × 1 m × 1 m = 100 cm × 100 cm × 100 cm = 1 000 000 cm³，不是 100 或 10 000. 要立方，所以 100 × 100 × 100 = 1 000 000. 改正后写：「1 m² = 10 000 cm²」和「1 m³ = 1 000 000 cm³」。让孩子跟读 2 次。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范四道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: Convert 2 m² to cm².\n1 m² = 100 cm × 100 cm = 10 000 cm². 所以 2 m² = 2 × 10 000 cm² = 20 000 cm². Answer: 2 m² = 20 000 cm². (Note: 不是 2 × 100 = 200 cm². 面积要用 10 000, not 100.)\n\n例题 2: Convert 50 000 cm² to m².\n1 m² = 10 000 cm², 所以 1 cm² = 1/10 000 m². 50 000 cm² = 50 000 ÷ 10 000 m² = 5 m². Answer: 50 000 cm² = 5 m². (Note: 除以 10 000, not 100.)\n\n例题 3: Convert 3 m³ to cm³.\n1 m³ = 100 cm × 100 cm × 100 cm = 1 000 000 cm³. 所以 3 m³ = 3 × 1 000 000 cm³ = 3 000 000 cm³. Answer: 3 m³ = 3 000 000 cm³. (Note: 不是 3 × 100 = 300 或 3 × 10 000 = 30 000. 体积要用 1 000 000.)\n\n例题 4: Convert 4 000 000 cm³ to m³.\n1 m³ = 1 000 000 cm³, 所以 1 cm³ = 1/1 000 000 m³. 4 000 000 cm³ = 4 000 000 ÷ 1 000 000 m³ = 4 m³. Answer: 4 000 000 cm³ = 4 m³. (Note: 除以 1 000 000, not 100 or 10 000.)\n\n让孩子跟读关键换算因子：1 m² = 10 000 cm², 1 m³ = 1 000 000 cm³.",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Convert 4 m² to cm². (提示：1 m² = 10 000 cm². 乘以 4.) 期待答案：4 m² = 4 × 10 000 cm² = 40 000 cm².\n\n练习 2: Convert 80 000 cm² to m². (提示：除以 10 000.) 期待答案：80 000 cm² = 80 000 ÷ 10 000 m² = 8 m².\n\n练习 3: Convert 5 m³ to cm³. (提示：1 m³ = 1 000 000 cm³. 乘以 5.) 期待答案：5 m³ = 5 × 1 000 000 cm³ = 5 000 000 cm³.\n\n练习 4: Convert 7 000 000 cm³ to m³. (提示：除以 1 000 000.) 期待答案：7 000 000 cm³ = 7 000 000 ÷ 1 000 000 m³ = 7 m³.\n\n练习 5: A rectangle has length 5 m and width 2 m. Find the area in m², then convert to cm². (提示：先算面积 = length × width. 然后换算.) 期待答案：Area = 5 m × 2 m = 10 m²; 10 m² = 10 × 10 000 cm² = 100 000 cm².\n\n如果孩子卡住，教师给词提示（例如：「用 10 000 不是 100」或「除以 1 000 000」），但不直接说出答案。孩子算完后，教师检查 working steps 和换算因子（10 000 for area, 1 000 000 for volume）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.4 conversion between cm² and m², and between cm³ and m³（平方厘米与平方米换算 / 立方厘米与立方米换算）。本周是 G5.4 only. 1 m = 100 cm (length). 1 m² = 100 × 100 = 10 000 cm² (area). 1 m³ = 100 × 100 × 100 = 1 000 000 cm³ (volume). Friendly integers: 2 m² = 20 000 cm²; 50 000 cm² = 5 m²; 3 m³ = 3 000 000 cm³; 4 000 000 cm³ = 4 m³. 可以换算一个已算出的面积或体积（a 2 m by 3 m rectangle = 6 m² = 60 000 cm²）。No calculator. Units: cm² and m² for area; cm³ and m³ for volume. Fossil: using 100 instead of 10 000 for area (1 m² = 100 cm² is WRONG, correct is 1 m² = 10 000 cm²); using 100 or 10 000 instead of 1 000 000 for volume (correct is 1 m³ = 1 000 000 cm³). Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. 本周不教 5.5 composite solids（组合立体图形）。第 52–54 周已完成 G5.1–G5.3。(3) 下周预告（如有下周课程）：继续 Sec 1 内容。(4) 作业：完成 app 上的 Week 55 题目（reading MCQ 5 题 + grammar MCQ 8 题 + writing show-working 3 题）。Show working steps clearly. 对家长说：「本周化石焦点：using 100 instead of 10 000 for area; using 100 or 10 000 instead of 1 000 000 for volume. 请在家长端查看孩子的作业提交，关注这两个化石错误。」对孩子说：「Great work today! Remember: 1 m² = 10 000 cm² (not 100), 1 m³ = 1 000 000 cm³ (not 100 or 10 000).」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-56": {
    title: "组合立体体积与表面积 — Problems involving volume and surface area of composite solids",
    mathExample: "L-shape: two cuboids 10×5×4 + 6×5×3 = 290 cm³. Cut-out: 12×8×6 - 4×3×2 = 552 cm³. Cylinder on cuboid: 1400 + 1540 = 2940 cm³. Surface area: SA1 + SA2 - 2×(joined face).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "确认 Zoom 设置正常。调整摄像头。对家长说：「本周教 Sec 1 AEIS 数学：problems involving volume and surface area of composite solids（组合立体的体积与表面积）。这是 G5 Mensuration 最后一周内容，官方 G5.5。本周不教 Sec 2 内容。」",
      },
      {
        name: "热身",
        duration: "3 分钟",
        teacherNotes: "问孩子：「你记得长方体的体积公式吗？」等孩子回答：volume = length × width × height. 在白板上写：Volume of cuboid = l×w×h. 然后问：「圆柱的体积公式呢？」等孩子回答：volume = πr²h. 在白板上写：Volume of cylinder = πr²h. 说：「今天我们要学组合立体图形 (composite solids). 就是把两个或更多立体图形拼起来，或者从一个立体里挖掉一块。我们要算它们的体积和表面积。」让孩子跟读：composite solid（组合立体图形）, volume（体积）, surface area（表面积）。",
      },
      {
        name: "化石",
        duration: "8 分钟",
        teacherNotes: "在白板上写下两个常见错误：(1) 「Surface area: When two solids are joined, SA = SA of A + SA of B」（忘记减去接触面）；(2) 「Volume: When a piece is cut out, Volume = volume of large solid」（忘记减去挖掉的部分体积）。问孩子：「这两个做法对吗？」等孩子思考后，圈出错误。解释：(1) 当两个立体拼在一起时，接触的那个面被隐藏了，两边都看不见。所以 surface area = SA of A + SA of B - 2×(joined face area). 如果忘记减去，就把接触面算了两次，surface area 太大。(2) 当从一个立体里挖掉一块时，剩下的 volume = volume of large solid - volume of cut-out. 如果忘记减去挖掉的部分，就算成挖之前的体积了，不是剩下的体积。改正后写：「SA = SA_A + SA_B - 2×(joined face area)」和「Volume = large volume - cut-out volume」。让孩子跟读 2 次。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范三道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: L-shaped solid: Two cuboids. Cuboid A: 10 cm × 5 cm × 4 cm. Cuboid B: 6 cm × 5 cm × 3 cm. They are joined along a 5 cm × 3 cm face. Find the volume.\nVolume of A = 10×5×4 = 200 cm³. Volume of B = 6×5×3 = 90 cm³. Total volume = 200 + 90 = 290 cm³. Answer: 290 cm³. (Note: For volume, just add the pieces. The joined face doesn't affect volume calculation.)\n\n例题 2: Cut-out: A cuboid 12 cm × 8 cm × 6 cm has a smaller cuboid 4 cm × 3 cm × 2 cm cut out from one corner. Find the remaining volume.\nVolume of large cuboid = 12×8×6 = 576 cm³. Volume of cut-out = 4×3×2 = 24 cm³. Remaining volume = 576 - 24 = 552 cm³. Answer: 552 cm³. (Note: Subtract the cut-out volume.)\n\n例题 3: Surface area of joined solids: Two cuboids form an L-shape. Cuboid A: 12 cm × 6 cm × 5 cm. Cuboid B: 8 cm × 6 cm × 4 cm. They are joined along a 6 cm × 4 cm face. Find the surface area.\nSA of A alone = 2(12×6 + 12×5 + 6×5) = 2(72+60+30) = 2×162 = 324 cm². SA of B alone = 2(8×6 + 8×4 + 6×4) = 2(48+32+24) = 2×136 = 272 cm². Joined face area = 6×4 = 24 cm². Total SA = 324 + 272 - 2×24 = 596 - 48 = 548 cm². Answer: 548 cm². (Note: Subtract 2× the joined face area because that face is hidden on BOTH pieces. Do NOT double-count.)\n\n让孩子跟读关键步骤：Volume: add or subtract（体积：加或减）. Surface area: add SA - 2×(joined face)（表面积：加 SA 减 2×接触面）.",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Two cuboids form an L-shape. Cuboid A: 14 cm × 7 cm × 5 cm. Cuboid B: 10 cm × 7 cm × 4 cm. Joined along 7×4 face. Find the volume. (提示：算两个 volume 然后加起来.) 期待答案：Volume A = 14×7×5 = 490 cm³. Volume B = 10×7×4 = 280 cm³. Total = 490 + 280 = 770 cm³.\n\n练习 2: A cuboid 15 cm × 12 cm × 10 cm has a cut-out 6 cm × 4 cm × 5 cm removed. Find the remaining volume. (提示：大 volume 减小 volume.) 期待答案：Large = 15×12×10 = 1800 cm³. Cut-out = 6×4×5 = 120 cm³. Remaining = 1800 - 120 = 1680 cm³.\n\n练习 3: A cylinder radius 7 cm and height 8 cm stands on a cuboid 24 cm × 14 cm × 6 cm. Find the total volume. Use π = 22/7. (提示：长方体 volume + 圆柱 volume.) 期待答案：Cuboid = 24×14×6 = 2016 cm³. Cylinder = 22/7×7×7×8 = 22×7×8 = 1232 cm³. Total = 2016 + 1232 = 3248 cm³.\n\n练习 4: Two cuboids form an L-shape. Cuboid A: 10 cm × 6 cm × 4 cm. Cuboid B: 8 cm × 6 cm × 3 cm. Joined along 6×3 face. Find the surface area. (提示：算两个 SA，然后减去 2×(joined face).) 期待答案：SA of A = 2(10×6 + 10×4 + 6×4) = 2(60+40+24) = 2×124 = 248 cm². SA of B = 2(8×6 + 8×3 + 6×3) = 2(48+24+18) = 2×90 = 180 cm². Joined face = 6×3 = 18 cm². Total SA = 248 + 180 - 2×18 = 428 - 36 = 392 cm².\n\n练习 5: A cuboid 14 cm × 10 cm × 8 cm has a 5 cm × 4 cm rectangular hole cut 3 cm deep into one face. Find the new surface area. (提示：原来的 SA 减去挖掉的面 patch，加上 hole walls.) 期待答案：Original SA = 2(14×10 + 14×8 + 10×8) = 2(140+112+80) = 2×332 = 664 cm². Removed patch = 5×4 = 20 cm². Hole walls: 2(5×3) + 2(4×3) = 30 + 24 = 54 cm². New SA = 664 - 20 + 54 = 698 cm².\n\n如果孩子卡住，教师给词提示（例如：「用 add 还是 subtract？」或「joined face 要减几次？」），但不直接说出答案。孩子算完后，教师检查 working steps 和公式（volume: add or subtract; SA: subtract 2× joined face or add hole walls）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 1 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.5 problems involving volume and surface area of composite solids（组合立体的体积与表面积）。本周是 G5.5 only. Composite solids: cuboids / rectangular prisms and cylinders (G5.3 已完成)。Volume: add the pieces, or subtract a cut-out. Surface area: add the OUTER faces only. When two solids are joined, do NOT count the hidden joined face twice (subtract 2× the joined face area from the sum of the separate surface areas). When a piece is cut out of a face, the hole's walls are new surface; the removed face patch is gone. Friendly integers. For π use 22/7 (r multiple of 7) OR leave in π terms — ONE convention per item. Examples: L-shaped solid (8×5×4 + 6×5×3 = 290 cm³); cut-out (576 - 24 = 552 cm³); cylinder on cuboid (1400 + 1540 = 2940 cm³). Units: cm³, cm². Cast: Wei, Aisha, Mr Lim at Riverside Secondary. No calculator. Fossil: adding surface areas without subtracting joined face (double-counting); or forgetting to subtract cut-out volume. 第 52–55 周已完成 G5.1–G5.4。本周完成 G5.5，官方 G5 Mensuration 至此全部完成。本周是 Sec 1 最后一周 Mensuration 内容。本周不教 Sec 2 内容。(3) 下周预告（如有下周课程）：继续 Sec 1 或 Sec 2 内容。(4) 作业：完成 app 上的 Week 56 题目（reading MCQ 5 题 + grammar MCQ 8 题 + writing show-working 3 题）。Show working steps clearly. 对家长说：「本周化石焦点：adding surface areas of joined solids without subtracting the joined face (double-counting); or forgetting to subtract a cut-out when finding volume. 请在家长端查看孩子的作业提交，关注这两个化石错误。」对孩子说：「Great work today! Remember: Volume: add or subtract. Surface area: subtract 2× joined face; or add hole walls and subtract removed patch.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-57": {
    title: "地图比例尺（距离和面积）— Map scales (distance and area)",
    mathExample: "1 : 50 000, 2 cm on map → 1 km; 1 : 10 000, 1 cm² on map → 10 000 m²",
    boardWriting: "SMATH Week 57: Sec 2 N2.4 map scales (distance and area). Scale 1 : n means 1 unit on map = n units on ground. Distance: actual = map × n. Area: 1 cm² on map = n² cm² on ground.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 57 周 AEIS 中学数学，我们学 Sec 2 N2.4 map scales（地图比例尺）。内容是 distance and area（距离和面积）。本周是 Sec 2 N2.4 only，不教 2.5 direct and inverse proportion。第 8–56 周我们已完成 Sec 1 内容，本周开始 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：using the linear scale n for area instead of n²（用线性比例尺 n 当作面积比例尺，而不是用 n²；例如说 1 cm² on a 1 : 50 000 map is 50 000 cm²，错误，正确是 50 000² = 2 500 000 000 cm²）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你见过地图吗？地图上有没有看到 1 : 50 000 这样的比例尺？」让孩子简单说一句。然后说：「比例尺 1 : n 的意思是：地图上 1 单位对应实际 n 单位（相同单位）。比如 1 : 50 000 表示地图上 1 cm 对应实际 50 000 cm。今天我们学如何用比例尺算距离和面积。」让孩子跟读一句：「Scale 1 : n means 1 unit on the map corresponds to n of the same units on the ground.」然后问：「如果地图上一条路是 2 cm，比例尺 1 : 50 000，实际长度是多少？」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了，鼓励「Good!」；如果不确定，说「没关系，接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil: 1 cm² on a 1 : 50 000 map is 50 000 cm² on the ground. ✗」说明：「这是化石化错误：用线性比例尺 n 当作面积比例尺。正确做法：For area, the scale is the SQUARE of the linear scale（面积比例尺是线性比例尺的平方）。1 cm² on a 1 : n map = n² cm² on the ground. 比如 1 cm² on a 1 : 50 000 map = 50 000² cm² = 2 500 000 000 cm² on the ground，不是 50 000 cm²。线性比例尺 1 : 50 000 只用于距离（distance）：1 cm on the map = 50 000 cm on the ground. 对于面积（area），我们必须平方（square the scale）：1 cm² on the map = 50 000² cm² on the ground. 如果你用 50 000 而不是 50 000²，面积就会算错很多倍。」让孩子跟读一句：「For distance, actual = map × n. For area, actual = map × n².」再举一个例子：「比如 1 : 10 000 地图，1 cm² on the map 不是 10 000 cm² on the ground，而是 10 000² = 100 000 000 cm² on the ground。」让孩子看懂这个点，这是本周唯一的化石焦点。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范四道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: Distance (map → actual in km): On a 1 : 50 000 map, a river is 2 cm long. Find the actual length in km.\nMap length = 2 cm. Scale 1 : 50 000 means 1 cm on map = 50 000 cm on ground. Actual length = 2 × 50 000 = 100 000 cm. Convert to km: 100 000 cm = 1 km. Answer: 1 km. (Note: Use the linear scale for distance. Multiply map length by the scale factor.)\n\n例题 2: Distance (actual → map): On a 1 : 20 000 map, the actual distance is 4 km. Find the map length in cm.\nActual distance = 4 km. Convert to cm: 4 km = 4 × 100 000 = 400 000 cm. Scale 1 : 20 000 means 1 cm on map = 20 000 cm on ground, so map length = actual length ÷ 20 000. Map length = 400 000 ÷ 20 000 = 20 cm. Answer: 20 cm. (Note: To find map length, divide actual length by the scale factor.)\n\n例题 3: Area (map → actual in m²): On a 1 : 10 000 map, a square is 1 cm². Find the actual area in m².\nMap area = 1 cm². For area, the scale is the square of the linear scale. 1 cm² on map = 10 000² cm² on ground = 100 000 000 cm². Convert to m²: 100 000 000 cm² ÷ 10 000 = 10 000 m². Answer: 10 000 m². (Note: For area, square the linear scale. 1 cm² on a 1 : n map = n² cm² on the ground, NOT n cm².)\n\n例题 4: Area (map → actual in cm²): On a 1 : 50 000 map, a region is 2 cm². Find the actual area in cm².\nMap area = 2 cm². Scale 1 : 50 000 means 1 cm² on map = 50 000² cm² on ground. 2 cm² on map = 2 × 50 000² = 2 × 2 500 000 000 = 5 000 000 000 cm². Answer: 5 000 000 000 cm². (Note: Area scale = (linear scale)². For 2 cm², multiply 2 by 50 000².)\n\n让孩子跟读关键步骤：Distance: actual = map × n（距离：实际 = 地图 × n）. Area: actual = map × n²（面积：实际 = 地图 × n²）.",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: On a 1 : 100 000 map, a road is 5 cm long. Find the actual length in km. (提示：算 actual length in cm，然后换算成 km.) 期待答案：5 × 100 000 = 500 000 cm = 5 km.\n\n练习 2: On a 1 : 20 000 map, the actual distance is 6 km. Find the map length in cm. (提示：先把 6 km 换算成 cm，然后除以 20 000.) 期待答案：6 km = 600 000 cm. Map length = 600 000 ÷ 20 000 = 30 cm.\n\n练习 3: On a 1 : 10 000 map, a park is 4 cm long on the map. Find the actual length in metres. (提示：算 actual length in cm，然后换算成 m.) 期待答案：4 × 10 000 = 40 000 cm = 400 m.\n\n练习 4: On a 1 : 10 000 map, a lake is 2 cm². Find the actual area in m². (提示：For area, use n².) 期待答案：2 × 10 000² = 2 × 100 000 000 = 200 000 000 cm². 200 000 000 ÷ 10 000 = 20 000 m².\n\n练习 5: On a 1 : 50 000 map, a field is 3 cm². Find the actual area in cm². (提示：3 × 50 000² = ?) 期待答案：3 × 50 000² = 3 × 2 500 000 000 = 7 500 000 000 cm².\n\n如果孩子卡住，教师给词提示（例如：「用 n 还是 n²？」或「100 cm = 1 m, 100 000 cm = 1 km, 10 000 cm² = 1 m²」），但不直接说出答案。孩子算完后，教师检查 working steps 和公式（distance: actual = map × n; area: actual = map × n²）。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.4 map scales (distance and area)（地图比例尺，距离和面积）。本周是 N2.4 only. Scale 1 : n means 1 unit on the map corresponds to n of the same units on the ground. Distance: actual length = map length × n (same units), then convert (100 cm = 1 m, 100 000 cm = 1 km). Map length = actual length ÷ n. Area: the area scale is the SQUARE of the linear scale. 1 cm² on a 1 : n map = n² cm² on the ground. Then convert: 10 000 cm² = 1 m². Friendly integers: scales 1 : 10 000, 1 : 20 000, 1 : 50 000, 1 : 100 000. Examples: 1 : 50 000, 2 cm on map → 1 km; 1 : 10 000, 1 cm² on map → 10 000 m². Fossil: using the linear scale n for area instead of n²（用 n 当面积比例尺，而不是用 n²）. Cast: Wei, Aisha, Mr Lim at Riverside Secondary. No calculator. 本周不教 2.5 direct and inverse proportion. 第 8–56 周已完成 Sec 1 内容。本周开始 Sec 2 内容（Sec 3 申请者的 preceding level）。(3) 下周预告（如有下周课程）：继续 Sec 2 或后续内容。(4) 作业：完成 app 上的 Week 57 题目（reading MCQ 5 题 + grammar MCQ 8 题 + writing show-working 3 题）。Show working steps clearly. 对家长说：「本周化石焦点：using the linear scale n for area instead of n²（用线性比例尺 n 当作面积比例尺，而不是用 n²；For area, 1 cm² on a 1 : n map = n² cm² on the ground, NOT n cm²）。请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: For distance, actual = map × n. For area, actual = map × n².」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-58": {
    title: "正比和反比 — Direct and inverse proportion",
    mathExample: "Direct: y ∝ x, k = 12÷4 = 3, y = 3x. Inverse: y ∝ 1/x, k = 3×8 = 24, xy = 24. Workers × days = k.",
    boardWriting: "SMATH Week 58: Sec 2 N2.5 direct and inverse proportion. Direct: y = kx (y/x = k). If x doubles, y doubles. Inverse: xy = k (y = k/x). If x doubles, y halves.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 58 周 AEIS 中学数学，我们学 Sec 2 N2.5 direct and inverse proportion（正比和反比）。本周是 Sec 2 N2.5 only，不教 N5.9 expansion of the product of algebraic expressions。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：treating inverse as direct (or vice versa); using y = kx when the situation is xy = k（把反比当成正比，或把正比当成反比；该用 xy = k 时却用 y = kx；例如 4 workers take 6 days → 3 workers take 6×3÷4=4.5 days，错误，应该用反比公式 4×6=24, 3×days=24, days=8）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你知道 direct proportion（正比）和 inverse proportion（反比）吗？」让孩子简单说一句。然后说：「正比就是：一个量增加，另一个量也增加，比例不变（例如买的东西越多，花的钱越多）。反比就是：一个量增加，另一个量减少，乘积不变（例如工人越多，完成工作的天数越少）。今天我们学如何用公式算正比和反比。」让孩子跟读一句：「Direct proportion: y = kx. Inverse proportion: xy = k.」然后问：「如果 y 与 x 成正比，当 x = 4 时 y = 12，那么 k 是多少？」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了，鼓励「Good!」；如果不确定，说「没关系，接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil: 4 workers take 6 days → 3 workers take 6 × 3 ÷ 4 = 4.5 days using direct formula. ✗」说明：「这是化石化错误：把反比当成正比，用了正比的公式 y = kx（或相当于 days = workers × (6/4)）。正确做法：Workers and days are inversely proportional（工人数和天数是反比关系）。More workers → less time（工人越多，天数越少）。公式是 workers × days = k（反比）。4 × 6 = 24, so k = 24. For 3 workers: 3 × days = 24, days = 24 ÷ 3 = 8. 答案是 8 days，不是 4.5 days。If you use direct proportion, you get 4.5 days, which is WRONG because with fewer workers, the job should take MORE time, not less（如果用正比公式，会得到 4.5 天，这是错的，因为工人少了，天数应该增加，而不是减少）。」让孩子跟读一句：「Workers × days = k. If workers decrease, days increase.」再举一个例子：「比如 at constant speed, distance ∝ time（速度不变时，距离与时间成正比）。60 km in 2 hours → k = 60 ÷ 2 = 30. For 5 hours: distance = 30 × 5 = 150 km. 这是正比，因为时间越长，距离越远。」让孩子看懂这个点，这是本周唯一的化石焦点。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范四道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: Direct proportion: y is directly proportional to x. When x = 4, y = 12. Find y when x = 6.\ny ∝ x means y = kx. When x = 4, y = 12. Substitute: 12 = k × 4, so k = 12 ÷ 4 = 3. The equation is y = 3x. When x = 6, y = 3 × 6 = 18. Answer: 18. (Note: Direct proportion: y = kx or y/x = k. If x doubles, y doubles. Find k from one pair, then use the equation to find the missing value.)\n\n例题 2: Inverse proportion: y is inversely proportional to x. When x = 3, y = 8. Find y when x = 4.\ny ∝ 1/x means xy = k. When x = 3, y = 8. Substitute: 3 × 8 = k, so k = 24. The equation is xy = 24 or y = 24/x. When x = 4, 4 × y = 24, so y = 24 ÷ 4 = 6. Answer: 6. (Note: Inverse proportion: xy = k or y = k/x. If x doubles, y halves. Find k from one pair, then use the equation to find the missing value.)\n\n例题 3: Workers and days: 4 workers take 6 days to complete a job. How many days will 3 workers take?\nMore workers → less time, so this is inverse proportion. Workers × days = k. For 4 workers: 4 × 6 = k, so k = 24. The equation is workers × days = 24. For 3 workers: 3 × days = 24, so days = 24 ÷ 3 = 8. Answer: 8 days. (Note: Workers and days are inversely proportional. If you have more workers, you need fewer days. Use workers × days = k.)\n\n例题 4: Distance and time at constant speed: At a constant speed, a car travels 60 km in 2 hours. How far will it travel in 5 hours?\nAt constant speed, distance is directly proportional to time. Distance = k × time. When time = 2 hours, distance = 60 km. Substitute: 60 = k × 2, so k = 60 ÷ 2 = 30. The equation is distance = 30 × time. When time = 5 hours, distance = 30 × 5 = 150 km. Answer: 150 km. (Note: At constant speed, distance ∝ time. This is direct proportion. Use distance = k × time or distance/time = k.)\n\n每道例题讲完，让孩子跟读 working steps 的关键句子（例如：「y = kx. k = 12 ÷ 4 = 3.」「xy = k. k = 3 × 8 = 24.」「Workers × days = k. k = 4 × 6 = 24.」「Distance = k × time. k = 60 ÷ 2 = 30.」）。",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: y is directly proportional to x. When x = 5, y = 15. Find k and write the equation. Then find y when x = 8. (提示：y = kx. k = 15 ÷ 5 = ?) 期待答案：k = 3. y = 3x. When x = 8, y = 24.\n\n练习 2: y is inversely proportional to x. When x = 2, y = 12. Find k and write the equation. Then find x when y = 8. (提示：xy = k. k = 2 × 12 = ?) 期待答案：k = 24. xy = 24. When y = 8, x = 3.\n\n练习 3: 6 workers take 8 days to build a wall. How many days will 4 workers take to build the same wall? (提示：是正比还是反比？Workers × days = k.) 期待答案：Inverse. 6 × 8 = 48. For 4 workers: 4 × days = 48, days = 12.\n\n练习 4: At a constant speed, a car travels 90 km in 3 hours. How far will it travel in 7 hours? (提示：Distance = k × time.) 期待答案：k = 90 ÷ 3 = 30. Distance = 30 × 7 = 210 km.\n\n练习 5: Check if this table is direct or inverse proportion: x (2, 4, 6) and y (12, 6, 4). (提示：Check xy: 2×12 = ?, 4×6 = ?, 6×4 = ?) 期待答案：xy = 24 for all pairs. Inverse proportion.\n\n如果孩子卡住，教师给词提示（例如：「用 y = kx 还是 xy = k？」或「More workers → less time, so which type?」或「Check y/x or xy?」）。孩子做完一道，教师检查 working steps 是否清楚，然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.5 direct and inverse proportion（正比和反比）。本周是 N2.5 only. Direct proportion: y ∝ x, y = kx, y/x = k. If x doubles, y doubles. Inverse proportion: y ∝ 1/x, xy = k, y = k/x. If x doubles, y halves. Find k from one pair, then find the missing value. Distinguish 「which is direct / which is inverse」 from a table or a word situation (workers × days, speed × time for fixed distance, cost ∝ quantity). Fossil: treating inverse as direct (or vice versa); using y = kx when the situation is xy = k (saying 「4 workers 6 days → 3 workers 6×3÷4=4.5 days」using direct formula when it should be inverse: 4×6=24, 3×days=24, days=8). Friendly integers only. No calculator. Pick numbers so k is a clean integer (e.g. y=3x; xy=24; 4 workers 6 days ↔ 3 workers 8 days). Cast: Wei, Aisha, Mr Lim at Riverside Secondary. 本周不教 N5.9 expansion of the product of algebraic expressions. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」鼓励孩子：「你已经学会了正比和反比的公式。下周继续。Keep going!」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-59": {
    title: "代数式的积的展开 — Expansion of the product of algebraic expressions",
    mathExample: "(x+2)(x+3) = x² + 5x + 6. (2x+3)(x+2) = 2x² + 7x + 6. (x−1)(x+3) = x² + 2x − 3.",
    boardWriting: "SMATH Week 59: Sec 2 N5.9 expansion of the product of algebraic expressions. (x+a)(x+b): multiply each term in first bracket by each term in second bracket (FOIL), then collect like terms.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 59 周 AEIS 中学数学，我们学 Sec 2 N5.9 expansion of the product of algebraic expressions（代数式的积的展开）。本周是 Sec 2 N5.9 only，不教 5.10 changing the subject of a formula，不教 5.12 identities (a+b)² / (a−b)² / a²−b² as a named identities week — only expand products，不重教 N2.5 proportion。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，第 58 周已完成 Sec 2 N2.5 direct and inverse proportion，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：forgetting to multiply the second term (only doing x·x and dropping the rest), or adding instead of multiplying when expanding（忘记乘第二项，只做 x·x 就完了；或者把括号相加而不是相乘，说 (x+2)(x+3) = x²+5 而不是 x²+5x+6）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你以前学过代数式化简吗？比如 3x + 2x = 5x？」让孩子简单说一句。然后说：「今天我们学的是 expansion of the product（乘积的展开）。比如 (x+2)(x+3) 这样的两个括号相乘，要把第一个括号的每一项乘以第二个括号的每一项，然后合并同类项。英语口诀叫 FOIL: First, Outer, Inner, Last。」让孩子跟读一句：「Multiply each term in the first bracket by each term in the second bracket.」然后问：「如果 (x+2)(x+3)，x 乘 x 等于什么？」等孩子说 x²。「很好！但这只是四个乘法中的第一个，还有三个要做。接下来我们看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil 1: (x+2)(x+3) = x² + 6. ✗ (forgetting the middle term)」和「Fossil 2: (x+2)(x+3) = x² + 5. ✗ (adding 2+3=5 instead of expanding)」说明：「这两个都是化石化错误。正确做法：Each term in the first bracket must multiply each term in the second bracket（第一个括号的每一项乘以第二个括号的每一项）。(x+2)(x+3) = x·x + x·3 + 2·x + 2·3 = x² + 3x + 2x + 6. Then collect like terms（合并同类项）: 3x + 2x = 5x. Final answer: x² + 5x + 6. 如果你只做 x·x 和 2·3，忘记了 x·3 和 2·x，你就只得到 x² + 6，丢掉了中间项 5x。这是化石化错误 1：忘记乘第二项。如果你把 2+3=5 然后说答案是 x²+5，那是化石化错误 2：把括号加起来而不是乘起来。括号的意思是 MULTIPLY（相乘），不是 add（相加）。你不能直接把 2 和 3 加起来。你必须做完四个乘法：x·x, x·3, 2·x, 2·3，然后合并同类项。」让孩子跟读一句：「FOIL: First (x·x = x²), Outer (x·3 = 3x), Inner (2·x = 2x), Last (2·3 = 6). Collect like terms: 3x + 2x = 5x. Final: x² + 5x + 6.」再举一个例子：「(2x+3)(x+2) = 2x·x + 2x·2 + 3·x + 3·2 = 2x² + 4x + 3x + 6 = 2x² + 7x + 6. 注意 2x·x = 2x²（系数也要乘：2×1=2）。」让孩子看懂这个点。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范四道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: Expand (x+2)(x+3).\nUse the distributive property (FOIL method): multiply each term in the first bracket by each term in the second bracket. First: x·x = x². Outer: x·3 = 3x. Inner: 2·x = 2x. Last: 2·3 = 6. Combine: (x+2)(x+3) = x² + 3x + 2x + 6. Collect like terms: 3x + 2x = 5x. Final answer: x² + 5x + 6. (Note: Each term in the first bracket multiplies each term in the second bracket. Do not forget any term. Then collect like terms.)\n\n例题 2: Expand (2x+3)(x+2).\nMultiply each term in the first bracket by each term in the second bracket. 2x·x = 2x². 2x·2 = 4x. 3·x = 3x. 3·2 = 6. Combine: (2x+3)(x+2) = 2x² + 4x + 3x + 6. Collect like terms: 4x + 3x = 7x. Final answer: 2x² + 7x + 6. (Note: When the first term is 2x, 2x·x = 2x², not x². Multiply the coefficients: 2×1 = 2.)\n\n例题 3: Expand (x−1)(x+3).\nMultiply each term. Treat −1 as a single term (negative). x·x = x². x·3 = 3x. (−1)·x = −x. (−1)·3 = −3. Combine: (x−1)(x+3) = x² + 3x − x − 3. Collect like terms: 3x − x = 2x. Final answer: x² + 2x − 3. (Note: When you have a negative term like −1, multiply it by each term in the second bracket. (−1)·x = −x, (−1)·3 = −3. Then collect like terms: 3x − x = 2x.)\n\n例题 4: Expand (3x+1)(x+4).\n3x·x = 3x². 3x·4 = 12x. 1·x = x. 1·4 = 4. Combine: (3x+1)(x+4) = 3x² + 12x + x + 4. Collect like terms: 12x + x = 13x. Final answer: 3x² + 13x + 4.\n\n每道例题讲完，让孩子跟读一遍最终答案，并问：「你看懂为什么是四个乘法吗？」确认孩子理解 FOIL 方法。",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Expand (x+3)(x+5). (提示：四个乘法：x·x = ?, x·5 = ?, 3·x = ?, 3·5 = ?. 然后合并同类项.) 期待答案：x² + 5x + 3x + 15 = x² + 8x + 15.\n\n练习 2: Expand (x+4)(x+1). (提示：FOIL. Then collect like terms.) 期待答案：x² + x + 4x + 4 = x² + 5x + 4.\n\n练习 3: Expand (2x+1)(x+3). (提示：2x·x = 2x², not x². Then 2x·3, 1·x, 1·3.) 期待答案：2x² + 6x + x + 3 = 2x² + 7x + 3.\n\n练习 4: Expand (x−2)(x+5). (提示：(−2)·x = −2x. (−2)·5 = −10. Collect like terms carefully.) 期待答案：x² + 5x − 2x − 10 = x² + 3x − 10.\n\n练习 5: Expand (x+2)(x+4). Check: does (x+2)(x+4) equal x² + 6 or x² + 6x + 8? (提示：做完四个乘法，看有没有中间项.) 期待答案：x² + 4x + 2x + 8 = x² + 6x + 8. (Not x² + 6, because you must include the middle term 6x.)\n\n如果孩子卡住，教师给词提示（例如：「先做 x·x = x²，再做 x·第二个括号的第二项，然后做 第一个括号的第二项·x，最后做两个常数相乘。」或「合并同类项：3x + 5x = 8x.」）。每道题做完，问孩子：「你有没有做完四个乘法？有没有合并同类项？」鼓励孩子自己检查。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.9 expansion of the product of algebraic expressions（代数式的积的展开）。本周是 N5.9 only. Expand products of algebraic expressions: (x+2)(x+3), (2x−1)(x+4), (x+a)(x+b), (ax+b)(cx+d), and a single-term times a bracket (already known from Sec 1, may appear as a warm-up only). Collect like terms after expanding. Friendly integers only. No calculator. Fossil: forgetting to multiply the second term (only doing x·x and dropping the rest), or adding instead of multiplying when expanding (saying (x+2)(x+3) = x²+5 instead of x²+5x+6). Method: multiply each term in the first bracket by each term in the second bracket (FOIL: First, Outer, Inner, Last), then collect like terms. Example: (x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6. Example: (2x+3)(x+2) = 2x² + 4x + 3x + 6 = 2x² + 7x + 6. With negative: (x−1)(x+3) = x² + 3x − x − 3 = x² + 2x − 3. Cast: Wei, Aisha, Mr Lim at Riverside Secondary. 本周不教 5.10 changing the subject of a formula. 本周不教 5.12 identities (a+b)² / (a−b)² / a²−b² as a named identities week — only expand products. 本周不重教 N2.5 proportion. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」鼓励孩子：「你已经学会了 expansion of the product of algebraic expressions。记住 FOIL 方法，做完四个乘法，合并同类项。下周继续。Keep going!」",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-60": {
    title: "公式变形 — Changing the subject of a formula",
    mathExample: "From v = u + at, make t the subject: t = (v − u)/a. From A = πr², make r the subject: r = √(A/π). From y = mx + c, make x the subject: x = (y − c)/m.",
    boardWriting: "SMATH Week 60: Sec 2 N5.10 changing the subject of a formula. Use inverse operations in reverse order. Example: v = u + at → subtract u → divide by a → t = (v − u)/a.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 60 周 AEIS 中学数学，我们学 Sec 2 N5.10 changing the subject of a formula（公式变形 / 变换公式的主体）。本周是 Sec 2 N5.10 only，不教 5.11 finding the value of an unknown quantity in a given formula（把数值代入公式求未知量），不重教 5.9 expansion（展开乘积），不教 5.12 identities（恒等式）。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，第 58 周已完成 Sec 2 N2.5 direct and inverse proportion，第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：doing operations in the wrong order, or subtracting a term that is multiplied（运算顺序错误，或者减去一个被乘的项；例如从 v = u + at 变形 t 时，写成 t = v − u − a，忘记 at 是一个乘积项，不能直接减 a）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你学过逆运算吗？比如加法的逆运算是减法，乘法的逆运算是除法？」让孩子简单说一句。然后说：「今天我们学 changing the subject of a formula（公式变形）。比如 v = u + at，如果我们想让 t 变成主项（subject），就要把 t 分离出来，其他字母移到另一边。方法是：用逆运算（inverse operations），按相反顺序操作（in reverse order）。公式右边是 u + at，先加 u，所以我们先减 u（undo +u），然后 t 被 a 乘，所以我们再除以 a（undo ×a）。」让孩子跟读一句：「Use inverse operations in reverse order.」然后问：「如果 v = u + at，我们先减 u，得到什么？」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了 v − u = at，鼓励「Good!」；如果不确定，说「没关系，接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil: From v = u + at, make t the subject → t = v − u − a. ✗」说明：「这是化石化错误：减去一个被乘的项（subtracting a term that is multiplied）。正确做法：at is ONE term, meaning a × t, NOT a + t（at 是一个项，意思是 a × t，不是 a + t）。You cannot subtract a from v − u to get t（你不能从 v − u 减去 a 来得到 t）。After subtracting u, you have v − u = at, which means a × t = v − u. To isolate t, DIVIDE by a, NOT subtract a（要分离 t，除以 a，不是减 a）。The correct answer is t = (v − u)/a. If you write t = v − u − a, you are treating a as if it's added, but it's multiplied（如果你写 t = v − u − a，你是把 a 当作加的，但它是乘的）。」让孩子跟读一句：「at is ONE term. v − u = at. Divide by a: t = (v − u)/a.」再举一个例子：「From y = mx + c, make x the subject. ① Subtract c: y − c = mx. ② Divide by m: x = (y − c)/m. 不能写 x = y − m − c，因为 mx 是一个乘积项，不是 m + x。」让孩子看懂这个点，这是本周主要化石焦点。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范四道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: Make t the subject from v = u + at.\n① Start with v = u + at. ② We want t on its own (the subject). ③ First, remove the u from the right side. Subtract u from both sides: v − u = at. ④ Now t is multiplied by a. To isolate t, divide both sides by a: (v − u)/a = t. ⑤ Rewrite: t = (v − u)/a. Answer: t = (v − u)/a. (Note: Use inverse operations in reverse order. The formula is u + at, so last operation is +u. Undo that first by subtracting u. Then undo ×a by dividing by a. Do NOT subtract u and a separately from v; at is ONE term.)\n\n例题 2: Make r the subject from A = πr². Leave your answer in terms of √.\n① Start with A = πr². ② We want r on its own. ③ First, remove the π. Divide both sides by π: A/π = r². ④ Now r is squared. To isolate r, take the square root of both sides: √(A/π) = r. ⑤ Rewrite: r = √(A/π). Answer: r = √(A/π). (Note: The formula is πr², so r is squared AND multiplied by π. Undo ×π first by dividing by π, then undo the square by taking the square root. Do NOT subtract π from A.)\n\n例题 3: Make x the subject from y = mx + c.\n① Start with y = mx + c. ② We want x on its own. ③ First, remove the c. Subtract c from both sides: y − c = mx. ④ Now x is multiplied by m. Divide both sides by m: (y − c)/m = x. ⑤ Rewrite: x = (y − c)/m. Answer: x = (y − c)/m. (Note: The right side is mx + c, so the last operation is +c. Undo that first by subtracting c, then undo ×m by dividing by m. Do NOT subtract m and c separately from y; mx is ONE term.)\n\n例题 4: Make h the subject from V = lwh.\n① Start with V = lwh. ② We want h on its own. ③ h is multiplied by l and by w. To isolate h, divide both sides by lw: V/(lw) = h. ④ Rewrite: h = V/(lw). Answer: h = V/(lw). (Note: The right side is lwh, which means l × w × h. To undo this, divide by lw. Do NOT subtract l and w from V; lwh is ONE term. When you divide by lw, you are undoing the multiplication by l and w at the same time.)\n\n每道例题讲完，让孩子跟读 working steps 的关键句子（例如：「v − u = at. Divide by a: t = (v − u)/a.」「A/π = r². Take square root: r = √(A/π).」「y − c = mx. Divide by m: x = (y − c)/m.」「V/(lw) = h.」）。",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: From v = u + at, make t the subject. (提示：先减 u，然后除以 a.) 期待答案：v − u = at. t = (v − u)/a.\n\n练习 2: From A = πr², make r the subject. Leave answer in terms of √. (提示：先除以 π，然后开平方根.) 期待答案：A/π = r². r = √(A/π).\n\n练习 3: From y = 3x + 5, make x the subject. (提示：先减 5，然后除以 3.) 期待答案：y − 5 = 3x. x = (y − 5)/3.\n\n练习 4: From I = PRT/100, make T the subject. (提示：先乘以 100，然后除以 PR.) 期待答案：100I = PRT. T = 100I/(PR).\n\n练习 5: From V = lwh, make h the subject. (提示：h 被 l 和 w 乘，所以除以 lw.) 期待答案：h = V/(lw).\n\n如果孩子卡住，教师给词提示（例如：「at 是一个乘积项，不能直接减 a，要除以 a。」或「先用逆运算，按相反顺序：先 undo +u by subtracting u, then undo ×a by dividing by a.」或「r² 的逆运算是开平方根 √.」）。孩子做完一道，教师检查 working steps 是否清楚（每一步都写出来），然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.10 changing the subject of a formula（公式变形 / 变换公式的主体）。本周是 N5.10 only. Make a different letter the subject: from v = u + at make t the subject; from A = πr² make r the subject (leave √); from I = PRT/100 make T the subject; from y = mx + c make x the subject; from V = lwh make h the subject. Inverse operations in reverse order. Friendly integers. No calculator. Avoid π numerical values — leave in terms of π or use a simple square (A = 49π → r = 7). Fossil: doing operations in the wrong order, or subtracting a term that is multiplied (saying 「from v = u + at, make t the subject」 by writing 「t = v − u − a」forgetting that at is ONE term with multiplication). Method: use inverse operations in reverse order. From v = u + at, make t the subject: ① Subtract u (undo +u): v − u = at. ② Divide by a (undo ×a): t = (v − u)/a. From A = πr², make r the subject: ① Divide by π (undo ×π): A/π = r². ② Take square root (undo square): r = √(A/π). From y = mx + c, make x the subject: ① Subtract c: y − c = mx. ② Divide by m: x = (y − c)/m. Cast: Wei, Aisha, Mr Lim at Riverside Secondary. 本周不教 5.11 finding the value of an unknown quantity in a given formula. 本周不重教 5.9 expansion. 本周不教 5.12 identities. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」对家长说：「本周化石焦点：doing operations in the wrong order, or subtracting a term that is multiplied（运算顺序错误，或者减去一个被乘的项；at 是一个乘积项 a × t，不能直接减 a，要除以 a）。请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: Use inverse operations in reverse order. at is ONE term — divide by a, don't subtract a.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-61": {
    title: "代入公式求未知量 — Finding the value of an unknown quantity in a given formula",
    mathExample: "From v = u + at, given u = 5, a = 2, t = 3, find v: v = 5 + 2 × 3 = 11. From A = πr², given A = 49π, find r: 49π = πr², divide by π: 49 = r², r = 7. From y = 5x − 3, given y = 37, find x: make x the subject first, x = (y + 3)/5, then x = 40/5 = 8.",
    boardWriting: "SMATH Week 61: Sec 2 N5.11 finding the value of an unknown quantity in a given formula. Given formula and values, find the remaining letter. May rearrange first, then substitute. Example: v = u + at, u = 5, a = 2, t = 3 → v = 5 + 2×3 = 11.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 61 周 AEIS 中学数学，我们学 Sec 2 N5.11 finding the value of an unknown quantity in a given formula（公式代入求未知量）。本周是 Sec 2 N5.11 only，不教 5.12 identities (a+b)² / (a−b)² / a²−b²，不重教 N5.10 changing the subject as the whole week（上周已教；本周可以先变形再代入 — that is 5.11）。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，第 58 周已完成 Sec 2 N2.5 direct and inverse proportion，第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions，第 60 周已完成 Sec 2 N5.10 changing the subject of a formula，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：substituting into the wrong letter, or forgetting to change the subject before substituting（代入错误的字母，或者忘记先变形再代入；例如从 y = 5x − 3 求 x，已知 y = 37，直接写 x = 37 − 5 − 3 = 29，忘记先让 x 变成主项）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你学过把数值代入公式吗？比如 v = u + at，如果我告诉你 u = 5, a = 2, t = 3，你知道怎么算 v 吗？」让孩子简单说一句。然后说：「今天我们学 finding the value of an unknown quantity in a given formula（公式代入求未知量）。Given a formula and values, find the remaining letter（给你一个公式和数值，求剩下的字母）。方法：Step 1: Identify what is given and what you need to find（确定已知量和未知量）. Step 2: If the unknown is already the subject, substitute directly（如果未知量已经是主项，直接代入）. Step 3: If the unknown is not the subject, make it the subject first (using 5.10 skills), then substitute（如果未知量不是主项，先变形使其成为主项，再代入）. Step 4: Follow order of operations (BODMAS)（遵循运算顺序）. Step 5: Calculate and write the final answer（计算并写出最终答案）。」让孩子跟读一句：「Substitute carefully. Follow BODMAS.」然后问：「如果 v = u + at，u = 5, a = 2, t = 3，v 等于多少？」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了 v = 5 + 2 × 3 = 11，鼓励「Good!」；如果不确定，说「没关系，接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil 1: From v = u + at, u = 5, a = 2, t = 3, find v → v = 5 + 2 + 3 = 10. ✗」说明：「这是化石化错误：treating multiplication as addition（把乘法当加法）。正确做法：at means a × t, NOT a + t（at 意思是 a × t，不是 a + t）. So v = u + at = 5 + (2 × 3) = 5 + 6 = 11. Do NOT add all three numbers（不要把三个数都加起来）. The formula has a multiplication sign (×) hidden in at（公式里 at 隐含了一个乘号）。」让孩子跟读一句：「at means a × t. v = 5 + 2 × 3 = 5 + 6 = 11.」再写第二个化石错误：「Fossil 2: From y = 5x − 3, given y = 37, find x → x = 37 − 5 − 3 = 29. ✗」说明：「这是化石化错误：forgetting to change the subject before substituting（忘记先变形再代入）。正确做法：When you need to find x, you MUST first make x the subject（要求 x 时，必须先让 x 变成主项）. y = 5x − 3. Add 3 to both sides: y + 3 = 5x. Divide by 5: x = (y + 3)/5. THEN substitute y = 37: x = (37 + 3)/5 = 40/5 = 8. If you write x = 37 − 5 − 3, you are treating 5 and 3 as if they're added to x, but the formula is y = 5x − 3, which means 5 is multiplied by x and 3 is subtracted（如果你写 x = 37 − 5 − 3，你是把 5 和 3 当作加到 x 上，但公式是 y = 5x − 3，意思是 5 乘以 x，3 减去）. OR you can substitute first and solve the equation: 37 = 5x − 3, then 37 + 3 = 5x, 40 = 5x, x = 8. Both methods are correct（两种方法都对）。」让孩子跟读一句：「Make x the subject first: x = (y + 3)/5. Then substitute: x = 40/5 = 8.」让孩子看懂这两个化石焦点。",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范四道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: From v = u + at, given u = 5, a = 2, t = 3, find v.\n① Start with v = u + at. ② Identify what is given: u = 5, a = 2, t = 3. What we need to find: v. ③ v is already the subject, so we can substitute directly. ④ Substitute u = 5, a = 2, t = 3: v = 5 + 2 × 3. (Note: at means a × t, so 2 × 3, NOT 2 + 3.) ⑤ Follow order of operations: multiply first, then add. 2 × 3 = 6. ⑥ v = 5 + 6 = 11. Answer: v = 11. (Key point: at is ONE term meaning a × t, so substitute 2 for a and 3 for t, then multiply them together to get 2 × 3 = 6, then add to u = 5.)\n\n例题 2: From A = πr², given A = 49π, find r. Leave your answer as an integer.\n① Start with A = πr². ② Identify what is given: A = 49π. What we need to find: r. ③ r is not the subject, so we need to make r the subject first. Substitute A = 49π: 49π = πr². ④ Divide both sides by π: 49 = r². ⑤ Take the square root of both sides: r = √49 = 7. Answer: r = 7. (Note: A = 49π means 49 times π, NOT the number 64.3.14. When you divide 49π by π, you get 49. Then take the square root to find r.)\n\n例题 3: From y = 5x − 3, given y = 37, find x.\n① Start with y = 5x − 3. ② Identify what is given: y = 37. What we need to find: x. ③ x is not the subject, so we need to make x the subject first. y = 5x − 3. Add 3 to both sides: y + 3 = 5x. Divide by 5: x = (y + 3)/5. ④ Now substitute y = 37: x = (37 + 3)/5 = 40/5 = 8. Answer: x = 8. (Alternative method: Substitute y = 37 directly: 37 = 5x − 3. Then solve: 37 + 3 = 5x, 40 = 5x, x = 8. Both methods give the same answer.)\n\n例题 4: From C = 2πr, given C = 44, find r. Use π = 22/7.\n① Start with C = 2πr. ② Identify what is given: C = 44, π = 22/7. What we need to find: r. ③ r is not the subject, so make r the subject first. C = 2πr. Divide both sides by 2π: r = C/(2π). ④ Now substitute C = 44, π = 22/7: r = 44/(2 × 22/7) = 44/(44/7). (Note: 2 × 22/7 = 44/7.) ⑤ Dividing by a fraction: 44/(44/7) = 44 × 7/44 = 7. Answer: r = 7. (Key steps: Make r the subject first, then substitute. When π = 22/7, substitute that fraction and simplify carefully.)\n\n每道例题示范完，让孩子重复一遍关键步骤（例如：「v = 5 + 2 × 3 = 11.」或「Make x the subject first: x = (y + 3)/5. Then substitute: x = 40/5 = 8.」）。",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: From v = u + at, given u = 10, a = 4, t = 5, find v. (提示：v 已经是主项，直接代入。at means a × t.) 期待答案：v = 10 + 4 × 5 = 10 + 20 = 30.\n\n练习 2: From A = πr², given A = 64π, find r. Leave answer as an integer. (提示：代入 A = 64π，除以 π，开平方根.) 期待答案：64π = πr². Divide by π: 64 = r². r = √64 = 8.\n\n练习 3: From y = 3x + 7, given y = 28, find x. (提示：先让 x 变成主项，然后代入.) 期待答案：Make x the subject: x = (y − 7)/3. Substitute y = 28: x = (28 − 7)/3 = 21/3 = 7.\n\n练习 4: From I = PRT/100, given P = 2000, R = 5, T = 3, find I. (提示：I 已经是主项，直接代入. PRT means P × R × T.) 期待答案：I = (2000 × 5 × 3)/100 = 30000/100 = 300.\n\n练习 5: From C = 2πr, given C = 88, find r. Use π = 22/7. (提示：先让 r 变成主项，然后代入.) 期待答案：Make r the subject: r = C/(2π). Substitute C = 88, π = 22/7: r = 88/(2 × 22/7) = 88/(44/7) = 88 × 7/44 = 7.\n\n如果孩子卡住，教师给词提示（例如：「at means a × t, not a + t.」或「先让 x 变成主项，然后代入 y = 28.」或「PRT means P × R × T, multiply all three numbers.」或「π = 22/7 代入后，simplify carefully.」）。孩子做完一道，教师检查 working steps 是否清楚（每一步都写出来），然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.11 finding the value of an unknown quantity in a given formula（公式代入求未知量）。本周是 N5.11 only. Given a formula and values, find the remaining letter. Examples: v = u + at with numbers; A = πr² with A = 49π → r = 7; I = PRT/100; V = lwh; y = mx + c; C = 2πr leave in terms of π or use friendly integers. Friendly integers only. No calculator. For π use 22/7 with r a multiple of 7, OR leave in terms of π — never offer both as options on one item. Fossil: substituting into the wrong letter, or forgetting to change the subject before substituting (make letter the subject first, then plug in values — may rearrange first, then substitute; that is 5.11 using 5.10 skills). Method: Step 1: Identify what is given and what you need to find. Step 2: If the unknown is the subject, substitute directly. If not, make it the subject first (using 5.10 skills), then substitute. Step 3: Substitute the given values carefully. Step 4: Follow order of operations (BODMAS). Step 5: Calculate and write the final answer. Example: From v = u + at, given u = 5, a = 2, t = 3, find v. Substitute: v = 5 + 2 × 3 = 5 + 6 = 11. Example: From y = 5x − 3, given y = 37, find x. Make x the subject: y + 3 = 5x, x = (y + 3)/5. Substitute: x = (37 + 3)/5 = 40/5 = 8. Cast: secondary Wei, Aisha, Mr Lim at Riverside Secondary. 本周不教 5.12 identities (a+b)² / (a−b)² / a²−b². 本周不重教 N5.10 changing the subject as the whole week（上周已教；本周可以先变形再代入 — that is 5.11）。第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions。第 60 周已完成 Sec 2 N5.10 changing the subject of a formula。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」对家长说：「本周化石焦点：substituting into the wrong letter, or forgetting to change the subject before substituting（代入错误的字母，或者忘记先变形再代入；例如从 y = 5x − 3 求 x，已知 y = 37，直接写 x = 37 − 5 − 3 = 29，忘记先让 x 变成主项。正确做法：Make x the subject first: x = (y + 3)/5. Then substitute y = 37: x = 40/5 = 8.）。请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: If the unknown is not the subject, make it the subject first, then substitute. Follow BODMAS carefully.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-62": {
    title: "恒等式 — Identities: (a+b)², (a−b)², a²−b²",
    mathExample: "(x+3)² = x² + 6x + 9. (y−5)² = y² − 10y + 25. 7² − 2² = (7+2)(7−2) = 45. (2a+b)² = 4a² + 4ab + b².",
    boardWriting: "SMATH Week 62: Sec 2 N5.12 identities: (a+b)² = a² + 2ab + b², (a−b)² = a² − 2ab + b², a² − b² = (a+b)(a−b). Expand and recognise. Friendly integers. No calculator. Fossil: (a+b)² = a² + b² (drops 2ab).",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 62 周 AEIS 中学数学，我们学 Sec 2 N5.12 identities: (a+b)², (a−b)², a²−b²（恒等式）。本周是 Sec 2 N5.12 only，只教三个恒等式：(a+b)² = a² + 2ab + b², (a−b)² = a² − 2ab + b², a² − b² = (a+b)(a−b)。本周不教 5.13 factorisation of linear expressions ax+bx+kay+kby by grouping（分组提取）。本周不教 5.14 quadratic factorisation（二次因式分解）。本周不重教 5.9 expansion as the whole week（第 59 周已教；本周是恒等式的特殊形式）。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，第 58 周已完成 Sec 2 N2.5 direct and inverse proportion，第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions，第 60 周已完成 Sec 2 N5.10 changing the subject of a formula，第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：(a+b)² = a² + b² (dropping the middle term 2ab)（丢掉中间项 2ab；例如 (x+3)² 写成 x² + 9，忘记了 +6x）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你学过 (a+b)² 吗？它等于 a² + b² 吗？」让孩子简单说一句。然后说：「今天我们学 identities: (a+b)², (a−b)², a²−b²（恒等式）。Three identities: (a+b)² = a² + 2ab + b² (注意有三项，不是两项), (a−b)² = a² − 2ab + b² (中间项是负号，最后一项是正号), a² − b² = (a+b)(a−b) (平方差公式). Expand and recognise the identities（展开和识别恒等式）. Friendly integers only. No calculator.」让孩子跟读一句：「(a+b)² = a² + 2ab + b². NOT a² + b².」然后问：「如果 (x+3)²，你能展开吗？」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了 x² + 6x + 9，鼓励「Good!」；如果不确定或说 x² + 9，说「Almost, but we need the middle term. 接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil 1: (x+3)² = x² + 9. ✗」说明：「这是化石化错误：(a+b)² = a² + b² (dropping the middle term 2ab)（丢掉中间项 2ab）。正确做法：(a+b)² = a² + 2ab + b²（有三项，不是两项）. So (x+3)² = x² + 2(x)(3) + 3² = x² + 6x + 9. The middle term is 2ab = 2 × x × 3 = 6x. Do NOT write x² + 9（不要写 x² + 9）. You are missing the middle term 6x（你丢掉了中间项 6x）。」让孩子跟读一句：「(x+3)² = x² + 6x + 9. NOT x² + 9.」再写第二个化石错误：「Fossil 2: (y−5)² = y² − 25. ✗」说明：「这是化石化错误：(a−b)² = a² − b² (dropping the middle term −2ab)（丢掉中间项 −2ab）。正确做法：(a−b)² = a² − 2ab + b²（有三项，中间项是负号 −2ab，最后一项是正号 +b²）. So (y−5)² = y² − 2(y)(5) + 5² = y² − 10y + 25. The middle term is −2ab = −2 × y × 5 = −10y. Do NOT write y² − 25（不要写 y² − 25）. You are missing the middle term −10y（你丢掉了中间项 −10y）。」让孩子跟读一句：「(y−5)² = y² − 10y + 25. NOT y² − 25.」写第三个化石错误：「Fossil 3: (x+4)² = x² − 8x + 16. ✗」说明：「这是化石化错误：mixing the sign of 2ab（符号弄混了）。正确做法：For (a+b)², the middle term is +2ab (positive)（对于 (a+b)²，中间项是正号 +2ab）. So (x+4)² = x² + 2(x)(4) + 4² = x² + 8x + 16 (NOT x² − 8x + 16). If the middle term is −8x, that would be (x−4)²（如果中间项是 −8x，那是 (x−4)²）。」让孩子跟读：「(x+4)² = x² + 8x + 16. (x−4)² = x² − 8x + 16.」",
      },
      {
        name: "示范",
        duration: "15 分钟",
        teacherNotes: "示范四道例题（在屏幕上或白板上边写边讲）：\n\n例题 1: Expand (x+3)² using the identity (a+b)² = a² + 2ab + b².\n① Start with the identity (a+b)² = a² + 2ab + b². ② Identify a and b: Here a = x, b = 3. ③ Substitute into the identity: (x+3)² = x² + 2(x)(3) + 3². ④ Calculate each term: x² stays as x², 2(x)(3) = 2 × x × 3 = 6x, 3² = 9. ⑤ Add them: (x+3)² = x² + 6x + 9. Answer: x² + 6x + 9. (Key point: The middle term is 2ab. Do NOT write (x+3)² = x² + 9, because that drops the middle term 2ab = 6x. The identity has THREE terms: a², 2ab, b².)\n\n例题 2: Expand (y−5)² using the identity (a−b)² = a² − 2ab + b².\n① Start with the identity (a−b)² = a² − 2ab + b². ② Identify a and b: Here a = y, b = 5. ③ Substitute into the identity: (y−5)² = y² − 2(y)(5) + 5². ④ Calculate each term: y² stays as y², 2(y)(5) = 2 × y × 5 = 10y, 5² = 25. ⑤ Add them (note the middle term has a minus sign): (y−5)² = y² − 10y + 25. Answer: y² − 10y + 25. (Key point: For (a−b)², the middle term is −2ab, NOT +2ab. And the last term is +b², NOT −b². So (y−5)² = y² − 10y + 25, NOT y² − 25 or y² + 10y + 25.)\n\n例题 3: Calculate 7² − 2² using the identity a² − b² = (a+b)(a−b).\n① Start with the identity a² − b² = (a+b)(a−b). ② Identify a and b: Here a = 7, b = 2. ③ Substitute into the identity: 7² − 2² = (7+2)(7−2). ④ Calculate: (7+2) = 9, (7−2) = 5. ⑤ Multiply: 9 × 5 = 45. Answer: 45. (Alternative method: Calculate directly: 7² = 49, 2² = 4, 49 − 4 = 45. Both methods give the same answer. The identity is faster for some cases.)\n\n例题 4: Expand (2a+b)² using the identity (a+b)² = a² + 2ab + b².\n① Start with the identity (a+b)² = a² + 2ab + b². ② Identify a and b: Here the first term is 2a (the whole first term is 2a, not just a), b = b. ③ Substitute: (2a+b)² = (2a)² + 2(2a)(b) + b². ④ Calculate: (2a)² = 4a² (square both 2 and a), 2(2a)(b) = 2 × 2a × b = 4ab, b² stays as b². ⑤ Add: (2a+b)² = 4a² + 4ab + b². Answer: 4a² + 4ab + b². (Key point: When the first term is 2a, NOT just a, you must square the 2 as well: (2a)² = 2² × a² = 4a².)\n\n每个例题讲完后，让孩子跟读最后一行 Answer，然后问「这个步骤清楚吗？」如果孩子不清楚，再重复一遍关键步骤。",
      },
      {
        name: "练习",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Expand (x+4)² using (a+b)² = a² + 2ab + b². (提示：a = x, b = 4. 计算 a², 2ab, b².) 期待答案：(x+4)² = x² + 2(x)(4) + 4² = x² + 8x + 16.\n\n练习 2: Expand (y−6)² using (a−b)² = a² − 2ab + b². (提示：a = y, b = 6. 注意中间项是负号.) 期待答案：(y−6)² = y² − 2(y)(6) + 6² = y² − 12y + 36.\n\n练习 3: Factorise 81 − m² using a² − b² = (a+b)(a−b). (提示：81 = 9². a = 9, b = m.) 期待答案：81 − m² = 9² − m² = (9+m)(9−m).\n\n练习 4: Expand (3n+5)² using (a+b)² = a² + 2ab + b². (提示：a = 3n (整个第一项是 3n), b = 5. 计算 (3n)².) 期待答案：(3n+5)² = (3n)² + 2(3n)(5) + 5² = 9n² + 30n + 25.\n\n练习 5: Expand (2p−q)² using (a−b)² = a² − 2ab + b². (提示：a = 2p (整个第一项是 2p), b = q. 计算 (2p)².) 期待答案：(2p−q)² = (2p)² − 2(2p)(q) + q² = 4p² − 4pq + q².\n\n如果孩子卡住，教师给词提示（例如：「(a+b)² has THREE terms: a², 2ab, b². Do NOT drop the middle term.」或「For (a−b)², the middle term is −2ab, negative sign.」或「When the first term is 3n, (3n)² = 9n², NOT 3n². Square BOTH the 3 and the n.」）。孩子做完一道，教师检查 working steps 是否清楚（每一步都写出来），然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.12 identities: (a+b)², (a−b)², a²−b²（恒等式）。本周是 N5.12 only. Three identities: (a+b)² = a² + 2ab + b², (a−b)² = a² − 2ab + b², a² − b² = (a+b)(a−b). Expand and recognise the identities. Friendly integers only. No calculator. Fossil: (a+b)² = a² + b² (dropping the middle term 2ab), (a−b)² = a² − b² (dropping the middle term −2ab), mixing the sign of 2ab. 本周不教 5.13 factorisation of linear expressions ax+bx+kay+kby by grouping（分组提取公因式）。本周不教 5.14 quadratic factorisation（二次因式分解 x² + bx + c）。本周不重教 5.9 expansion as the whole week（第 59 周已教；本周是恒等式的特殊形式）。Cast: secondary Wei, Aisha, Mr Lim at Riverside Secondary. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions。第 60 周已完成 Sec 2 N5.10 changing the subject of a formula。第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」对家长说：「本周化石焦点：(a+b)² = a² + b² (dropping the middle term 2ab)（丢掉中间项 2ab；例如 (x+3)² 写成 x² + 9，忘记了 +6x。正确做法：(x+3)² = x² + 6x + 9, with the middle term 6x.）。请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: (a+b)² = a² + 2ab + b², NOT a² + b². Always include the middle term 2ab.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-63": {
    title: "一次式因式分解 — Factorisation ax+bx+kay+kby",
    mathExample: "2x + 4y + 6x + 12y = 2(x+2y) + 6(x+2y) = (2+6)(x+2y) = 8(x+2y). 3a + 5b + 9a + 15b = 1(3a+5b) + 3(3a+5b) = 4(3a+5b).",
    boardWriting: "SMATH Week 63: Sec 2 N5.13 factorisation of linear expressions ax+bx+kay+kby. Official method: GROUP ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky). Example: 2x + 4y + 6x + 12y = 2(x+2y) + 6(x+2y) = (2+6)(x+2y) = 8(x+2y). This is grouping (5.13), NOT just combine-then-HCF (5.8). Friendly integers. No calculator. Fossil: stopping after one pair.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 63 周 AEIS 中学数学，我们学 Sec 2 N5.13 factorisation of linear expressions ax+bx+kay+kby（一次式因式分解 / 分组提取）。本周是 N5.13 only，只教官方分组方法：ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky)。这不是 Sec 1 N5.8「先合并同类项再提取 HCF」，而是 Sec 2 5.13 分组提取。本周不教 5.14 factorisation of quadratic expressions ax²+bx+c（二次因式分解）。本周不重教 5.12 identities（第 62 周已教）。本周不重教 Sec 1 N5.8 common-factor extraction as the whole week（第 56 周已教；本周是分组：ax + bx + kay + kby）。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，第 58 周已完成 Sec 2 N2.5 direct and inverse proportion，第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions，第 60 周已完成 Sec 2 N5.10 changing the subject of a formula，第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula，第 62 周已完成 Sec 2 N5.12 identities: (a+b)², (a−b)², a²−b²，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：stopping after one pair（只分组了一对就停下；例如 2x + 4y + 6x + 12y，写出 2(x+2y) 然后停了，忘记继续分组第二对 6x + 12y）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你学过 factorisation（因式分解）吗？例如 2x + 4，能不能提取公因式？」让孩子简单说一句。然后说：「今天我们学官方 5.13 分组提取：factorisation of linear expressions ax+bx+kay+kby。Official method: GROUP ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky). Example with mixed terms: 2x + 4y + 6x + 12y. Step 1: Group first two terms: 2x + 4y = 2(x + 2y). Step 2: Group last two terms: 6x + 12y = 6(x + 2y). Step 3: Both groups have the same bracket (x + 2y), so 2(x + 2y) + 6(x + 2y) = (2 + 6)(x + 2y) = 8(x + 2y). This is GROUPING (official 5.13), NOT just 'combine like terms then HCF' (that would be Sec 1 N5.8). Friendly integers only. No calculator. No quadratics (no x² terms to factor).」让孩子跟读一句：「2x + 4y + 6x + 12y = 2(x+2y) + 6(x+2y) = (2+6)(x+2y) = 8(x+2y). Group each pair, then factor out the common bracket.」然后问：「如果是 3a + 5b + 9a + 15b，你能用分组方法因式分解吗？」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了 4(3a + 5b)，鼓励「Good!」；如果不确定，说「Let's learn the grouping method together. 接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil 1: From 2x + 4y + 6x + 12y, I group the first two: 2x + 4y = 2(x + 2y). Answer: 2(x + 2y). ✗」说明：「这是化石化错误：stopping after one pair（只分组了一对就停下）。You grouped the first pair to get 2(x + 2y), which is correct. BUT you have NOT finished. You MUST also group the second pair. Official 5.13 method: ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky). So group ALL pairs, then factor out the common bracket. 正确做法：Step 1: Group first two: 2x + 4y = 2(x + 2y). Step 2: Group last two: 6x + 12y = 6(x + 2y). Step 3: Both have (x + 2y), so 2(x + 2y) + 6(x + 2y) = (2 + 6)(x + 2y) = 8(x + 2y). Do NOT stop after grouping only one pair. Group both pairs, THEN factor.」让孩子跟读一句：「Group first two: 2(x+2y). Group last two: 6(x+2y). Both have (x+2y), so (2+6)(x+2y) = 8(x+2y).」再写第二个化石错误：「Fossil 2: From 2x + 6y + 8x + 24y, I get 10x + 30y = 10(x + y). ✗」说明：「这是化石化错误：writing (a+b)(x+y) when the coefficient is wrong（系数写错了）。If you combine first: 2x + 8x = 10x, 6y + 24y = 30y, so 10x + 30y. Then factor: Check the coefficients. 10x means coefficient of x is 10. 30y means coefficient of y is 30. If we factor out 10, we get 10x = 10 × x (correct) and 30y = 10 × 3y (NOT 10 × y). So the correct factorisation is 10x + 30y = 10(x + 3y), NOT 10(x + y). Check by expanding: 10(x + 3y) = 10x + 30y ✓. But 10(x + y) = 10x + 10y ✗, which does NOT match 10x + 30y. OR use official grouping: 2x + 6y + 8x + 24y = 2(x + 3y) + 8(x + 3y) = (2 + 8)(x + 3y) = 10(x + 3y). Both methods give the same answer: 10(x + 3y).」让孩子跟读一句：「10x + 30y = 10(x + 3y), NOT 10(x + y). The coefficient of y is 3.」问孩子：「Why does official 5.13 use grouping, not just 'combine like terms'?」（等孩子回答；期待答案：「Because grouping shows the structure: ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky). It teaches you to see the common bracket (a+b) or (x+ky) in both groups. This is the official method.」如果孩子不确定，教师给这个解释。）",
      },
      {
        name: "微课",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享，播放本周微课（2 个例题，每个 1 分钟，共 2 分钟）。微课例题 1: Factorise 2x + 4y + 6x + 12y completely using grouping. Solution: ① Start with 2x + 4y + 6x + 12y. ② Group first two terms and factor: 2x + 4y = 2(x + 2y). ③ Group last two terms and factor: 6x + 12y = 6(x + 2y). ④ Now both groups have the common bracket (x + 2y): 2(x + 2y) + 6(x + 2y). ⑤ Factor out the common bracket: 2(x + 2y) + 6(x + 2y) = (2 + 6)(x + 2y) = 8(x + 2y). Answer: 8(x + 2y). (Key point: This is official 5.13 grouping: ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky).) 微课例题 2: Factorise 3a + 5b + 9a + 15b completely using grouping. Solution: ① Start with 3a + 5b + 9a + 15b. ② Group first two: 3a + 5b = 1(3a + 5b) (cannot factor further, so coefficient is 1). ③ Group last two: 9a + 15b = 3(3a + 5b). ④ Both groups have (3a + 5b): 1(3a + 5b) + 3(3a + 5b). ⑤ Factor: (1 + 3)(3a + 5b) = 4(3a + 5b). Answer: 4(3a + 5b). (Note: When first pair cannot factor, write it as 1(3a + 5b). Then factor the second pair. Then combine the coefficients 1 + 3 = 4.) 播放完 2 个例题后，暂停微课。问孩子：「你看到 grouping 步骤了吗？Which step shows this is 5.13 grouping, not 5.8 HCF?」（等孩子回答；期待答案：「Step ④: Both groups have the common bracket (x + 2y) or (3a + 5b). Then we factor out the common bracket. This is the official 5.13 method: x(a+b) + ky(a+b) = (a+b)(x+ky).」如果孩子不确定，教师给这个解释。）再问：「Can you also do it by combining like terms first, then factoring?」（等孩子回答；期待答案：「Yes, you can. For example 1: 2x + 6x = 8x, 4y + 12y = 16y, then 8x + 16y = 8(x + 2y). Both methods give the same answer. But the official 5.13 method is grouping, which shows the structure better.」如果孩子不确定，教师给这个解释。）对孩子说：「Very good. Official 5.13 is grouping. You can also combine first if you prefer. Both methods work. Now let's check by expanding: 8(x + 2y) = 8x + 16y. Then 8x = 2x + 6x ✓, 16y = 4y + 12y ✓. So 8x + 16y = 2x + 4y + 6x + 12y ✓. Correct!」",
      },
      {
        name: "作业",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Factorise 4p + 6q + 8p + 12q completely using grouping. (提示：Group first two: 4p + 6q = ? Group last two: 8p + 12q = ? Both have which common bracket?) 期待答案：4p + 6q = 2(2p + 3q), 8p + 12q = 4(2p + 3q). Both have (2p + 3q), so 2(2p + 3q) + 4(2p + 3q) = (2 + 4)(2p + 3q) = 6(2p + 3q).\n\n练习 2: Factorise 5m + 7n + 10m + 14n completely using grouping. (提示：Group first two: 5m + 7n = ? (can it factor?). Group last two: 10m + 14n = ? Both have which common bracket?) 期待答案：5m + 7n = 1(5m + 7n), 10m + 14n = 2(5m + 7n). Both have (5m + 7n), so (1 + 2)(5m + 7n) = 3(5m + 7n).\n\n练习 3: Factorise 6a + 8b + 18a + 24b completely using grouping. (提示：Group first two: 6a + 8b = ? Group last two: 18a + 24b = ?) 期待答案：6a + 8b = 2(3a + 4b), 18a + 24b = 6(3a + 4b). Both have (3a + 4b), so 2(3a + 4b) + 6(3a + 4b) = (2 + 6)(3a + 4b) = 8(3a + 4b).\n\n练习 4: Factorise 3x + 5y + 12x + 20y completely. (提示：Use grouping method.) 期待答案：3x + 5y = 1(3x + 5y), 12x + 20y = 4(3x + 5y). So (1 + 4)(3x + 5y) = 5(3x + 5y).\n\n练习 5: Factorise 9x + 11y + 27x + 33y completely using grouping. (提示：Group each pair, then factor the common bracket.) 期待答案：9x + 11y = 1(9x + 11y), 27x + 33y = 3(9x + 11y). So (1 + 3)(9x + 11y) = 4(9x + 11y).\n\n如果孩子卡住，教师给词提示（例如：「Group the first two terms. Can you factor them? If not, write 1(3x + 5y). Then group the last two terms and factor.」或「Both groups should have the same bracket. Then factor out the common bracket using (a+b) where a and b are the coefficients.」或「Check your answer by expanding. Does 8(3a + 4b) = 24a + 32b? Does that equal 6a + 8b + 18a + 24b?」）。孩子做完一道，教师检查 working steps 是否清楚（每一步都写出来），然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.13 factorisation of linear expressions ax+bx+kay+kby（一次式因式分解 / 分组提取）。本周是 N5.13 only. Official method: GROUP ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky). Example with mixed terms: 2x + 4y + 6x + 12y = 2(x+2y) + 6(x+2y) = (2+6)(x+2y) = 8(x+2y). This is GROUPING (official 5.13), NOT just 'combine like terms then HCF' (that would be Sec 1 N5.8). Friendly integers only. No calculator. No quadratics (no x² terms to factor). Fossil: stopping after one pair (writing 2(x+2y) and stopping, forgetting to group the second pair); or writing (a+b)(x+y) when the coefficient is wrong (check coefficients carefully). 本周不教 5.14 factorisation of quadratic expressions ax²+bx+c（二次因式分解）。本周不重教 5.12 identities（第 62 周已教）。本周不重教 Sec 1 N5.8 common-factor extraction as the whole week（第 56 周已教；本周是分组：ax + bx + kay + kby）。Cast: secondary Wei, Aisha, Mr Lim at Riverside Secondary. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions。第 60 周已完成 Sec 2 N5.10 changing the subject of a formula。第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula。第 62 周已完成 Sec 2 N5.12 identities: (a+b)², (a−b)², a²−b²。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」对家长说：「本周化石焦点：stopping after one pair（只分组了一对就停下；例如 2x + 4y + 6x + 12y，写出 2(x+2y) 然后停了，忘记继续分组第二对 6x + 12y = 6(x+2y)，也忘记提取公共括号 (x+2y) 得到 (2+6)(x+2y) = 8(x+2y)）。正确做法：Group each pair, then factor out the common bracket. Official 5.13 method: ax + bx + kay + kby = x(a+b) + ky(a+b) = (a+b)(x+ky). This is grouping, not just 『combine then HCF』.」请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: Official 5.13 is GROUPING. Group each pair: 2x + 4y = 2(x+2y), 6x + 12y = 6(x+2y). Then factor the common bracket: (2+6)(x+2y) = 8(x+2y). Do NOT stop after grouping only one pair.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-64": {
    title: "二次式因式分解 — Factorisation ax²+bx+c",
    mathExample: "x²+5x+6=(x+2)(x+3). x²−5x+6=(x−2)(x−3). x²+x−6=(x+3)(x−2). 2x²+7x+3=(2x+1)(x+3).",
    boardWriting: "SMATH Week 64: Sec 2 N5.14 factorisation of quadratic expressions ax²+bx+c. Official method: x²+bx+c: find two numbers that multiply to c and add to b. Example: x²+5x+6 → 2×3=6, 2+3=5 → (x+2)(x+3). Signs: x²−5x+6 → (−2)×(−3)=6, (−2)+(−3)=−5 → (x−2)(x−3). Mixed: x²+x−6 → 3×(−2)=−6, 3+(−2)=1 → (x+3)(x−2). For 2x²+7x+3: test (2x+1)(x+3)=(2x²+7x+3) ✓. Friendly integers. No calculator. Fossil: wrong signs or wrong factor pair.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 64 周 AEIS 中学数学，我们学 Sec 2 N5.14 factorisation of quadratic expressions ax²+bx+c（二次式因式分解）。本周是 N5.14 only，只教官方因式分解方法：x²+bx+c，找两个数乘积是 c、和是 b，然后写成 (x+first)(x+second)。这是二次式，有 x² 项。本周不教 5.15 multiplication and division of simple algebraic fractions（代数分式乘除）。本周不重教 5.13 grouping（第 63 周已教）。本周不重教 5.12 identities（第 62 周已教）。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，第 58 周已完成 Sec 2 N2.5 direct and inverse proportion，第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions，第 60 周已完成 Sec 2 N5.10 changing the subject of a formula，第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula，第 62 周已完成 Sec 2 N5.12 identities: (a+b)², (a−b)², a²−b²，第 63 周已完成 Sec 2 N5.13 factorisation of linear expressions ax+bx+kay+kby，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：signs wrong（符号错误，例如 x²−5x+6 写成 (x+2)(x+3) 而不是 (x−2)(x−3)）；或 wrong factor pair（因数对错误，例如 x²+5x+6 写成 (x+6)(x+1) 而不是 (x+2)(x+3)，因为 6+1=7 不等于 5）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你学过因式分解（factorisation）吗？例如 x²+5x+6，能不能因式分解成两个括号的乘积？」让孩子简单说一句。然后说：「今天我们学官方 5.14 二次式因式分解：factorisation of quadratic expressions ax²+bx+c。Official method: For x²+bx+c, find two numbers that multiply to c and add to b, then write as (x+first)(x+second). Example: x²+5x+6. Step 1: I need two numbers that multiply to 6 (the constant term c=6) and add to 5 (the coefficient of x, b=5). Step 2: Try factor pairs of 6: 1 and 6 (1×6=6 ✓, 1+6=7 ✗), 2 and 3 (2×3=6 ✓, 2+3=5 ✓). Step 3: The two numbers are 2 and 3. Step 4: Write the factors: x²+5x+6 = (x+2)(x+3). Step 5: Check by expanding: (x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6 ✓. Friendly integers only. No calculator.」让孩子跟读一句：「x²+5x+6 = (x+2)(x+3). Find two numbers: multiply to 6, add to 5 → 2 and 3.」然后问：「如果是 x²−5x+6（注意中间是负号 −5x），你能因式分解吗？」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了 (x−2)(x−3)，鼓励「Good!」；如果不确定或说成 (x+2)(x+3)（化石），说「Let's learn how to handle signs together. 接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil 1: From x²−5x+6, I think the answer is (x+2)(x+3) because 2×3=6 and 2+3=5. ✗」说明：「这是化石化错误：signs wrong（符号错误）。Yes, 2×3=6 and 2+3=5, but look at the original expression: x²−5x+6. The middle term is −5x (negative). If we expand (x+2)(x+3), we get x² + 3x + 2x + 6 = x² + 5x + 6 (middle term is +5x, NOT −5x). So (x+2)(x+3) is the factorisation of x²+5x+6, NOT x²−5x+6. 正确做法：For x²−5x+6, the middle term is negative (−5x), but the constant term is positive (+6). This means both numbers must be negative (because (−2)×(−3)=+6, and (−2)+(−3)=−5). Find two negative numbers: (−2)×(−3)=6 ✓, (−2)+(−3)=−5 ✓. So x²−5x+6 = (x−2)(x−3). Check: (x−2)(x−3) = x² − 3x − 2x + 6 = x² − 5x + 6 ✓. The signs must match the middle term. If middle term is −5x, both factors need minus: (x−2)(x−3). If middle term is +5x, both factors need plus: (x+2)(x+3).」让孩子跟读一句：「x²−5x+6 = (x−2)(x−3), NOT (x+2)(x+3). Both factors have minus because the middle term is negative.」再写第二个化石错误：「Fossil 2: From x²+5x+6, I think the answer is (x+6)(x+1) because 6×1=6. ✗」说明：「这是化石化错误：wrong factor pair（因数对错误）。Yes, 6×1=6, but check the sum: 6+1=7, NOT 5. The middle term coefficient is 5 (from +5x), so the two numbers must add to 5. The correct factor pair is 2 and 3: 2×3=6 ✓, 2+3=5 ✓. So x²+5x+6 = (x+2)(x+3), NOT (x+6)(x+1). Check by expanding: (x+6)(x+1) = x² + 1x + 6x + 6 = x² + 7x + 6 ✗ (middle term is 7x, not 5x). But (x+2)(x+3) = x² + 5x + 6 ✓. Always test that the sum of the two numbers equals the middle term coefficient.」让孩子跟读一句：「x²+5x+6 = (x+2)(x+3), NOT (x+6)(x+1). The two numbers must add to 5: 2+3=5 ✓, 6+1=7 ✗.」问孩子：「Why do we need to check both the product AND the sum?」（等孩子回答；期待答案：「Because the two numbers must multiply to c (the constant term) AND add to b (the coefficient of x). If only the product is correct but the sum is wrong, the factorisation is wrong.」如果孩子不确定，教师给这个解释。）",
      },
      {
        name: "微课",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享，播放本周微课（2 个例题，每个 1 分钟，共 2 分钟）。微课例题 1: Factorise x²+5x+6 completely. Solution: ① Write x²+5x+6 in the form x²+bx+c, where b=5, c=6. ② Find two numbers that multiply to c=6 and add to b=5. ③ Try factor pairs of 6: 1 and 6 (1×6=6, 1+6=7 ✗), 2 and 3 (2×3=6 ✓, 2+3=5 ✓). ④ The two numbers are 2 and 3. ⑤ Write the factors: x²+5x+6 = (x+2)(x+3). ⑥ Check by expanding: (x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6 ✓. Answer: (x+2)(x+3). 微课例题 2: Factorise x²−5x+6 completely. Solution: ① Write x²−5x+6, where b=−5, c=6. ② The middle term is negative (−5x), but the constant term is positive (+6). This means both numbers must be negative (because (−2)×(−3)=+6, and (−2)+(−3)=−5). ③ Find two negative numbers that multiply to 6 and add to −5. Try −1 and −6 ((−1)×(−6)=6 ✓, (−1)+(−6)=−7 ✗), −2 and −3 ((−2)×(−3)=6 ✓, (−2)+(−3)=−5 ✓). ④ The two numbers are −2 and −3. ⑤ Write the factors: x²−5x+6 = (x−2)(x−3). ⑥ Check by expanding: (x−2)(x−3) = x² − 3x − 2x + 6 = x² − 5x + 6 ✓. Answer: (x−2)(x−3). 播放完 2 个例题后，暂停微课。问孩子：「你看到因式分解步骤了吗？What is the difference between x²+5x+6 and x²−5x+6?」（等孩子回答；期待答案：「The first one has +5x (middle term positive), so both factors are (x+2)(x+3) with plus. The second one has −5x (middle term negative), so both factors are (x−2)(x−3) with minus. The signs in the factors must match the sign of the middle term.」如果孩子不确定，教师给这个解释。）再问：「Can you factorise x²+x−6 where the constant term is negative?」（等孩子回答；期待答案：「When the constant term is negative (−6), one number is positive and one is negative. Find two numbers: 3×(−2)=−6 ✓, 3+(−2)=1 ✓. So x²+x−6 = (x+3)(x−2).」如果孩子不确定，教师给这个解释。）对孩子说：「Very good. Official 5.14 method: find two numbers, check product and sum, write the factors, then expand to check. Signs matter: +5x → both +, −5x → both −, −6 (constant) → one + one −. Now let's practice.」",
      },
      {
        name: "作业",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Factorise x²+7x+12 completely. (提示：Find two numbers: multiply to 12, add to 7. Try factor pairs of 12.) 期待答案：Try 1 and 12 (1×12=12, 1+12=13 ✗), 2 and 6 (2×6=12, 2+6=8 ✗), 3 and 4 (3×4=12 ✓, 3+4=7 ✓). So x²+7x+12 = (x+3)(x+4). Check: (x+3)(x+4) = x² + 7x + 12 ✓.\n\n练习 2: Factorise x²−7x+12 completely. (提示：Middle term is negative, constant term is positive. What does this tell you about the signs of the two numbers?) 期待答案：Both numbers must be negative. Try −3 and −4: (−3)×(−4)=12 ✓, (−3)+(−4)=−7 ✓. So x²−7x+12 = (x−3)(x−4). Check: (x−3)(x−4) = x² − 7x + 12 ✓.\n\n练习 3: Factorise x²+2x−8 completely. (提示：Constant term is negative. What does this tell you about the signs?) 期待答案：One positive, one negative. Find two numbers: multiply to −8, add to 2. Try 4 and −2: 4×(−2)=−8 ✓, 4+(−2)=2 ✓. So x²+2x−8 = (x+4)(x−2). Check: (x+4)(x−2) = x² + 2x − 8 ✓.\n\n练习 4: Factorise x²+6x+8 completely. (提示：Use the method from 微课例题 1.) 期待答案：Find two numbers: multiply to 8, add to 6. Try 2 and 4: 2×4=8 ✓, 2+4=6 ✓. So x²+6x+8 = (x+2)(x+4). Check: (x+2)(x+4) = x² + 6x + 8 ✓.\n\n练习 5: Factorise 2x²+7x+3 completely. (提示：This one has 2x². Test factor pairs: for 2x², try 2x and x. For 3, try 1 and 3. Test (2x+1)(x+3) by expanding.) 期待答案：Try (2x+1)(x+3): expand (2x+1)(x+3) = 2x² + 6x + x + 3 = 2x² + 7x + 3 ✓. So 2x²+7x+3 = (2x+1)(x+3).\n\n如果孩子卡住，教师给词提示（例如：「Write down all factor pairs of 12: 1 and 12, 2 and 6, 3 and 4. Check which pair adds to 7.」或「The middle term is −7x (negative), so both numbers must be negative. Try −3 and −4.」或「When the constant term is negative, one number is positive and one is negative. Which pair of +4 and −2 gives the sum 2?」或「Check your answer by expanding. Does (x+3)(x+4) = x² + 7x + 12?」）。孩子做完一道，教师检查 working steps 是否清楚（每一步都写出来），然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.14 factorisation of quadratic expressions ax²+bx+c（二次式因式分解）。本周是 N5.14 only. Official method: For x²+bx+c, find two numbers that multiply to c and add to b, then write as (x+first)(x+second). Example: x²+5x+6 = (x+2)(x+3) (find 2 and 3: 2×3=6, 2+3=5). Signs: x²−5x+6 = (x−2)(x−3) (both negative: (−2)×(−3)=6, (−2)+(−3)=−5). Mixed: x²+x−6 = (x+3)(x−2) (one positive, one negative: 3×(−2)=−6, 3+(−2)=1). For 2x²+7x+3: test (2x+1)(x+3) = 2x² + 7x + 3 ✓. Friendly integers only. No calculator. Fossil: signs wrong ((x+2)(x+3) when it should be (x−2)(x−3)); or wrong factor pair ((x+6)(x+1) when it should be (x+2)(x+3), because 6+1=7 not 5). 本周不教 5.15 multiplication and division of simple algebraic fractions（代数分式乘除）。本周不重教 5.13 grouping（第 63 周已教）。本周不重教 5.12 identities（第 62 周已教）。Cast: secondary Wei, Aisha, Mr Lim at Riverside Secondary. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions。第 60 周已完成 Sec 2 N5.10 changing the subject of a formula。第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula。第 62 周已完成 Sec 2 N5.12 identities: (a+b)², (a−b)², a²−b²。第 63 周已完成 Sec 2 N5.13 factorisation of linear expressions ax+bx+kay+kby。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」对家长说：「本周化石焦点：signs wrong（符号错误，例如 x²−5x+6 写成 (x+2)(x+3) 而不是 (x−2)(x−3)；展开 (x+2)(x+3) = x² + 5x + 6，中间项是 +5x 不是 −5x）；或 wrong factor pair（因数对错误，例如 x²+5x+6 写成 (x+6)(x+1)，但 6+1=7 不等于 5，正确的是 (x+2)(x+3) 因为 2+3=5）。正确做法：Find two numbers that multiply to c and add to b. Check both product AND sum. Write the factors, then expand to check. Signs: +5x → both +, −5x → both −, −6 (constant) → one + one −.」请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: Official 5.14 is quadratic factorisation. Find two numbers: multiply to c, add to b. Check the signs carefully. x²+5x+6 = (x+2)(x+3) ✓, x²−5x+6 = (x−2)(x−3) ✓. Always expand to check your answer.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-65": {
    title: "代数分式乘除 — Multiply and divide simple algebraic fractions",
    mathExample: "(3a/4b)×(5ab/3)=(5a²)/4. (3a/4)÷(9a²/10)=5/(6a). (2x/5)×(15/4x)=3/2. (6m/7n)÷(3m²/14)=4/(mn).",
    boardWriting: "SMATH Week 65: Sec 2 N5.15 multiplication and division of simple algebraic fractions. Official method: Multiply: (3a/4b)×(5ab/3) = (3a×5ab)/(4b×3) = (15a²b)/(12b). Cancel: 15÷3=5, 12÷3=4, cancel b. Answer: (5a²)/4. Divide: (3a/4)÷(9a²/10) = (3a/4)×(10/9a²) (flip second fraction). Multiply: (30a)/(36a²). Cancel: 30÷6=5, 36÷6=6, cancel one a. Answer: 5/(6a). Monomial over monomial. Integers after cancel. No calculator. Fossil: not flipping second fraction when dividing; or cancelling incorrectly.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 65 周 AEIS 中学数学，我们学 Sec 2 N5.15 multiplication and division of simple algebraic fractions（代数分式乘除）。本周是 N5.15 only，只教官方代数分式的乘法和除法：monomial over monomial（一项除以一项），cancel common number and letter factors（消去公因数和字母），leave the answer in simplest form（以最简形式作答）。官方 5.15 wording（逐字引用）：'multiplication and division of simple algebraic fractions such as'。官方 such as 例题：(3a / 4b) × (5ab / 3); (3a / 4) ÷ (9a² / 10)。本周不教 5.16 addition and subtraction of algebraic fractions with linear or quadratic denominators（代数分式加减，有线性或二次分母的那种，那是 5.16）。本周不重教 5.14 factorisation of quadratic expressions（第 64 周已教）。本周不重教 5.13 grouping（第 63 周已教）。本周不重教 5.12 identities（第 62 周已教）。第 8–56 周我们已完成 Sec 1 内容，第 57 周已完成 Sec 2 N2.4 map scales，第 58 周已完成 Sec 2 N2.5 direct and inverse proportion，第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions，第 60 周已完成 Sec 2 N5.10 changing the subject of a formula，第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula，第 62 周已完成 Sec 2 N5.12 identities: (a+b)², (a−b)², a²−b²，第 63 周已完成 Sec 2 N5.13 factorisation of linear expressions ax+bx+kay+kby，第 64 周已完成 Sec 2 N5.14 factorisation of quadratic expressions ax²+bx+c，本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：forgetting to flip the second fraction when dividing（除法时忘记把第二个分数倒过来再乘：(3a/4)÷(9a²/10) 错误地算 (3a/4)×(9a²/10)，应该是 (3a/4)×(10/9a²) ✓）；或 cancelling incorrectly（消去错误，例如把 3a 和 9a² 消成 1 和 3，忘记分母还剩一个 a，正确应该是分子 3a 里的 a 和分母 9a² 里的一个 a 消掉，分母还剩 3a）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你学过普通分数的乘法和除法吗？例如 (2/3) × (3/4) = (2×3)/(3×4) = 6/12 = 1/2（消去公因数 6）。除法呢？(2/3) ÷ (3/4) = (2/3) × (4/3) = (2×4)/(3×3) = 8/9（先把第二个分数倒过来，再乘）。」让孩子简单说一句。然后说：「今天我们学官方 5.15 代数分式乘除：multiplication and division of simple algebraic fractions。官方 such as 例题：(3a / 4b) × (5ab / 3)。Step 1: Multiply numerators and denominators: (3a × 5ab) / (4b × 3) = (15a²b) / (12b). Step 2: Cancel common factors. 15 and 12: greatest common factor is 3. 15÷3=5, 12÷3=4. Numerator has b, denominator has b: cancel b. Step 3: Simplest form: (5a²) / 4. Official 除法例题：(3a / 4) ÷ (9a² / 10). Step 1: Flip the second fraction and multiply: (3a / 4) × (10 / 9a²). Step 2: Multiply: (3a × 10) / (4 × 9a²) = (30a) / (36a²). Step 3: Cancel. 30 and 36: greatest common factor is 6. 30÷6=5, 36÷6=6. Numerator has a, denominator has a²: cancel one a. Step 4: Simplest form: 5 / (6a). Friendly integers. No calculator.」让孩子跟读一句：「(3a/4b)×(5ab/3) = (15a²b)/(12b) = (5a²)/4. (3a/4)÷(9a²/10) = (3a/4)×(10/9a²) = (30a)/(36a²) = 5/(6a).」然后问：「What is the difference between multiplication and division of algebraic fractions?」等孩子想一下（不必马上答对，下一环节会教）。如果孩子说对了「Division: flip the second fraction then multiply」，鼓励「Good!」；如果不确定或没说 flip（化石），说「Let's learn how to flip and cancel together. 接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil 1: From (3a/4) ÷ (9a²/10), I multiply (3a/4) × (9a²/10) = (27a³)/(40). ✗」说明：「这是化石化错误：forgetting to flip the second fraction when dividing（除法时忘记把第二个分数倒过来）。Division of fractions: flip the second fraction then multiply. Correct method: (3a/4) ÷ (9a²/10) = (3a/4) × (10/9a²) (flip 9a²/10 to 10/9a²). Then multiply: (3a × 10) / (4 × 9a²) = (30a) / (36a²). Cancel: 30÷6=5, 36÷6=6, and cancel one a from numerator with one a from denominator a². Answer: 5/(6a). Not (27a³)/40. Check: If we DON'T flip, we get (3a/4) × (9a²/10) = (27a³)/40, which cannot be simplified to integers and has a³ in the numerator. But the official answer is 5/(6a) (integers after cancel, only 6a in denominator). So we must flip the second fraction first.」让孩子跟读一句：「(3a/4) ÷ (9a²/10) = (3a/4) × (10/9a²), NOT (3a/4) × (9a²/10). Division: flip the second fraction then multiply.」再写第二个化石错误：「Fossil 2: From (30a)/(36a²), I cancel 30 and 36 to get (5a)/(6a²). ✗」说明：「这是化石化错误：cancelling incorrectly（消去错误）。Correct method: (30a) / (36a²). Step 1: Cancel numbers. 30 and 36 share greatest common factor 6. 30÷6=5, 36÷6=6. Now we have (5a) / (6a²). Step 2: Cancel letters. Numerator has a (which is a¹). Denominator has a². Cancel one a from both: a¹ ÷ a¹ = a⁰ = 1 (numerator), a² ÷ a¹ = a¹ = a (denominator). Answer: 5 / (6a). NOT (5a) / (6a²). The fossil error is stopping after cancelling numbers but forgetting to cancel letters. Check: (5a)/(6a²) still has a in numerator and a² in denominator. We can cancel one more a. Correct simplest form: 5/(6a).」让孩子跟读一句：「(30a)/(36a²) = (5a)/(6a²) (cancel numbers 6) = 5/(6a) (cancel one a). Simplest form has no common factors left.」问孩子：「Why do we cancel both numbers AND letters?」（等孩子回答；期待答案：「Because simplest form means no common factors remain. We must cancel ALL common factors: numbers (like 6) AND letters (like a). If we only cancel numbers, the answer is not in simplest form yet.」如果孩子不确定，教师给这个解释。）",
      },
      {
        name: "微课",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享，播放本周微课（4 个例题，每个 1 分钟，共 4 分钟）。微课例题 1: Simplify (3a/4b) × (5ab/3) and leave your answer in simplest form. Solution: ① Multiply numerators and denominators: (3a × 5ab) / (4b × 3) = (15a²b) / (12b). ② Cancel common factors. Numbers: 15 and 12 share factor 3. 15÷3=5, 12÷3=4. Now (5a²b) / (4b). Letters: numerator has b, denominator has b. Cancel b. Now (5a²) / 4. ③ Answer: (5a²) / 4. Check: no common factors remain, integers 5 and 4, simplest form ✓. 微课例题 2: Simplify (3a/4) ÷ (9a²/10) and leave your answer in simplest form. Solution: ① Division: flip the second fraction then multiply. (3a/4) ÷ (9a²/10) = (3a/4) × (10/9a²). ② Multiply: (3a × 10) / (4 × 9a²) = (30a) / (36a²). ③ Cancel. Numbers: 30 and 36 share factor 6. 30÷6=5, 36÷6=6. Now (5a) / (6a²). Letters: numerator has a¹, denominator has a². Cancel one a. Now 5 / (6a). ④ Answer: 5 / (6a). Check: no common factors remain, integers 5 and 6, simplest form ✓. 微课例题 3: Simplify (2x/5) × (15/4x) and leave your answer in simplest form. Solution: ① Multiply: (2x × 15) / (5 × 4x) = (30x) / (20x). ② Cancel. Numbers: 30 and 20 share factor 10. 30÷10=3, 20÷10=2. Now (3x) / (2x). Letters: numerator has x, denominator has x. Cancel x. Now 3 / 2. ③ Answer: 3 / 2. Check: no common factors, integers, simplest form ✓. 微课例题 4: Simplify (6m/7n) ÷ (3m²/14) and leave your answer in simplest form. Solution: ① Division: flip and multiply. (6m/7n) × (14/3m²). ② Multiply: (6m × 14) / (7n × 3m²) = (84m) / (21m²n). ③ Cancel. Numbers: 84 and 21 share factor 21. 84÷21=4, 21÷21=1. Now (4m) / (m²n). Letters: numerator has m¹, denominator has m². Cancel one m. Now 4 / (mn). ④ Answer: 4 / (mn). Check: simplest form ✓. 播放完 4 个例题后，暂停微课。问孩子：「What are the two main steps for dividing algebraic fractions?」（等孩子回答；期待答案：「Step 1: Flip the second fraction then multiply. Step 2: Cancel all common factors (numbers and letters).」如果孩子不确定，教师给这个解释。）再问：「When do we stop cancelling?」（等孩子回答；期待答案：「We stop when no common factors remain. The answer must be in simplest form: integers after cancel, no common number or letter factors left.」如果孩子不确定，教师给这个解释。）对孩子说：「Very good. Official 5.15 method: Multiply: multiply numerators and denominators, then cancel. Divide: flip the second fraction then multiply, then cancel. Always leave the answer in simplest form. Cancel ALL common factors: numbers AND letters. Now let's practice.」",
      },
      {
        name: "作业",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Simplify (2a/3) × (9/4a) and leave your answer in simplest form. (提示：Multiply numerators and denominators, then cancel common factors.) 期待答案：Multiply: (2a × 9) / (3 × 4a) = (18a) / (12a). Cancel: 18 and 12 share factor 6. 18÷6=3, 12÷6=2. Now (3a) / (2a). Cancel a. Answer: 3 / 2 ✓.\n\n练习 2: Simplify (5x/6) ÷ (10x²/9) and leave your answer in simplest form. (提示：Division: flip the second fraction then multiply.) 期待答案：Flip and multiply: (5x/6) × (9/10x²) = (5x × 9) / (6 × 10x²) = (45x) / (60x²). Cancel: 45 and 60 share factor 15. 45÷15=3, 60÷15=4. Now (3x) / (4x²). Cancel one x. Answer: 3 / (4x) ✓.\n\n练习 3: Simplify (4p/7) × (21/8p) and leave your answer in simplest form. (提示：Multiply first, then cancel numbers and letters separately.) 期待答案：Multiply: (4p × 21) / (7 × 8p) = (84p) / (56p). Cancel: 84 and 56 share factor 28. 84÷28=3, 56÷28=2. Now (3p) / (2p). Cancel p. Answer: 3 / 2 ✓.\n\n练习 4: Simplify (3y/8) ÷ (9y²/16) and leave your answer in simplest form. (提示：Flip the second fraction first. Then multiply and cancel.) 期待答案：Flip and multiply: (3y/8) × (16/9y²) = (3y × 16) / (8 × 9y²) = (48y) / (72y²). Cancel: 48 and 72 share factor 24. 48÷24=2, 72÷24=3. Now (2y) / (3y²). Cancel one y. Answer: 2 / (3y) ✓.\n\n练习 5: Simplify (10a/9b) × (3b/5a²) and leave your answer in simplest form. (提示：Multiply, then cancel ALL common factors: numbers AND letters.) 期待答案：Multiply: (10a × 3b) / (9b × 5a²) = (30ab) / (45a²b). Cancel numbers: 30 and 45 share factor 15. 30÷15=2, 45÷15=3. Now (2ab) / (3a²b). Cancel letters: cancel one a and cancel b. Answer: 2 / (3a) ✓.\n\n如果孩子卡住，教师给词提示（例如：「Write down the multiplication: (numerator1 × numerator2) / (denominator1 × denominator2). What is 2a × 9?」或「For division, what do you do to the second fraction first? Flip it, then multiply.」或「Find the greatest common factor of 18 and 12. Then divide both by that factor.」或「After cancelling numbers, check if there are common letters. Numerator has a, denominator has a. Can you cancel them?」或「Check your answer: is it in simplest form? Are there any common factors left?」）。孩子做完一道，教师检查 working steps 是否清楚（每一步都写出来），然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.15 multiplication and division of simple algebraic fractions（代数分式乘除）。本周是 N5.15 only. Official method: Multiply: (3a/4b) × (5ab/3) = (3a × 5ab) / (4b × 3) = (15a²b) / (12b). Cancel: 15÷3=5, 12÷3=4, cancel b. Answer: (5a²) / 4. Divide: (3a/4) ÷ (9a²/10) = (3a/4) × (10/9a²) (flip second fraction). Multiply: (30a) / (36a²). Cancel: 30÷6=5, 36÷6=6, cancel one a. Answer: 5 / (6a). Keep items at this SIMPLE level: monomial over monomial (one term over one term), cancel common number and letter factors, leave the answer in simplest form. Integers after cancel. No calculator. Friendly integers. No adding/subtracting fractions (that is 5.16). No linear/quadratic binomial denominators like (x+1) or (x²+2x+1) (that is 5.16). Fossil: forgetting to flip the second fraction when dividing ((3a/4) ÷ (9a²/10) = (3a/4) × (9a²/10) ✗, should be (3a/4) × (10/9a²) ✓); or cancelling incorrectly (cancelling 3a and 9a² to get 1 and 3, forgetting the remaining a in denominator; correct: cancel one a, denominator still has one a left, so answer is 5/(6a) not 5/6). 本周不教 5.16 addition and subtraction of algebraic fractions with linear or quadratic denominators（代数分式加减）。本周不重教 5.14 factorisation of quadratic expressions（第 64 周已教）。本周不重教 5.13 grouping（第 63 周已教）。本周不重教 5.12 identities（第 62 周已教）。Cast: secondary Wei, Aisha, Mr Lim at Riverside Secondary. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。第 59 周已完成 Sec 2 N5.9 expansion of the product of algebraic expressions。第 60 周已完成 Sec 2 N5.10 changing the subject of a formula。第 61 周已完成 Sec 2 N5.11 finding the value of an unknown quantity in a given formula。第 62 周已完成 Sec 2 N5.12 identities: (a+b)², (a−b)², a²−b²。第 63 周已完成 Sec 2 N5.13 factorisation of linear expressions ax+bx+kay+kby。第 64 周已完成 Sec 2 N5.14 factorisation of quadratic expressions ax²+bx+c。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」对家长说：「本周化石焦点：forgetting to flip the second fraction when dividing（除法时忘记把第二个分数倒过来：(3a/4) ÷ (9a²/10) 错误地算成 (3a/4) × (9a²/10)，应该先把 9a²/10 倒成 10/9a²，再乘：(3a/4) × (10/9a²) ✓）；或 cancelling incorrectly（消去错误，只消数字不消字母，或者消字母时算错次幂，例如 (30a)/(36a²) 消成 (5a)/(6a²) 就停了，忘记 numerator 有 a¹ 和 denominator 有 a²，还能再消一个 a，正确应该是 5/(6a)）。正确做法：Multiply: multiply numerators and denominators, then cancel ALL common factors (numbers and letters). Divide: flip the second fraction then multiply, then cancel ALL common factors. Leave the answer in simplest form (no common factors remain).」请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: Official 5.15 is multiply and divide simple algebraic fractions. Multiply: (numerator1 × numerator2) / (denominator1 × denominator2), then cancel. Divide: flip the second fraction then multiply, then cancel. Cancel ALL common factors: numbers AND letters. Always leave your answer in simplest form. (3a/4b)×(5ab/3)=(5a²)/4 ✓. (3a/4)÷(9a²/10)=5/(6a) ✓.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
  "SMATH-66": {
    title: "代数分式加减 — Add and subtract algebraic fractions",
    mathExample: "1/(x−2)+2/(x−3)=(3x−7)/[(x−2)(x−3)]. 1/(x²−9)+2/(x−3)=(2x+7)/[(x−3)(x+3)]. 1/(x−3)+2/(x−3)²=(x−1)/(x−3)².",
    boardWriting: "SMATH Week 66: Sec 2 N5.16 addition and subtraction of algebraic fractions with linear or quadratic denominator. Official method: 1/(x−2)+2/(x−3). Common denominator: (x−2)(x−3). Rewrite: [(x−3)+2(x−2)]/[(x−2)(x−3)] = (3x−7)/[(x−2)(x−3)]. Example with quadratic: 1/(x²−9)+2/(x−3). Factorise: x²−9=(x−3)(x+3). Common denominator: (x−3)(x+3). Rewrite: [1+2(x+3)]/[(x−3)(x+3)] = (2x+7)/[(x−3)(x+3)]. Example with powers: 1/(x−3)+2/(x−3)². Common denominator: (x−3)². Rewrite: [(x−3)+2]/(x−3)² = (x−1)/(x−3)². Factorise denominators when needed. Find common denominator. Combine numerators. Simplify. Integers. No calculator. Fossil: adding denominators; or sign errors when expanding brackets.",
    sections: [
      {
        name: "课前",
        duration: "2 分钟",
        teacherNotes: "欢迎孩子。「今天是第 66 周 AEIS 中学数学，我们学 Sec 2 N5.16 addition and subtraction of algebraic fractions with linear or quadratic denominator（代数分式加减，线性或二次分母）。本周是 N5.16 only，只教官方代数分式的加法和减法：find common denominator（找公分母）, factorise difference of squares when needed（需要时因式分解平方差，例如 x²−9=(x−3)(x+3)）, combine the numerators（合并分子）, simplify（化简）, leave the answer as a single fraction in simplest form（以单一分数的最简形式作答）。官方 5.16 wording（逐字引用）：'addition and subtraction of algebraic fractions with linear or quadratic denominator such as'。官方 such as 例题：1/(x−2) + 2/(x−3); 1/(x²−9) + 2/(x−3); 1/(x−3) + 2/(x−3)²。本周不开始 N6 (quadratic functions)（不教二次函数）。第 65 周已完成 N5.15 multiply/divide。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」告诉孩子本周化石焦点（高频错误）：「本周化石焦点：not finding common denominator before adding/subtracting（加减前没找公分母：直接把 1/(x−2) + 2/(x−3) 写成 3/(2x−5)，错误）；或 sign errors when combining numerators（合并分子时符号错误：2(x−2)展开成 2x−2 而不是 2x−4）；或 leaving answer unsimplified（答案没化简：分子没合并同类项）。我们会反复练这个点，直到改掉。」",
      },
      {
        name: "热身",
        duration: "5 分钟",
        teacherNotes: "问孩子：「你学过普通分数的加法吗？例如 1/2 + 1/3。能直接加分子 1+1=2，分母 2+3=5，得 2/5 吗？」让孩子想一下。然后说：「不能。When adding fractions, you do NOT add denominators. Find common denominator first. 1/2 + 1/3: common denominator is 6. Rewrite: 3/6 + 2/6 = 5/6. Today we learn official 5.16: addition and subtraction of algebraic fractions（代数分式加减）。官方 such as 例题：1/(x−2) + 2/(x−3)。Step 1: Find common denominator. The two denominators are (x−2) and (x−3). Common denominator: (x−2)(x−3). Step 2: Rewrite each fraction. First: 1(x−3)/[(x−2)(x−3)]. Second: 2(x−2)/[(x−2)(x−3)]. Step 3: Add numerators: [(x−3) + 2(x−2)] / [(x−2)(x−3)]. Step 4: Expand and simplify: x−3 + 2x−4 = 3x−7. Answer: (3x−7) / [(x−2)(x−3)]. Factorise difference of squares when needed: x²−9 = (x−3)(x+3). Friendly integers. No calculator.」让孩子跟读一句：「1/(x−2) + 2/(x−3) = (3x−7)/[(x−2)(x−3)]. Find common denominator first. Do NOT add denominators.」然后问：「Can you add 1/2 + 1/3 to get 2/5?」等孩子回答「No」。如果孩子说对了，鼓励「Good! You need common denominator 6, so 3/6 + 2/6 = 5/6.」如果不确定，说「Let's learn the common denominator method together. 接下来我们一起看微课例题。」",
      },
      {
        name: "化石",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享或白板，写下本周化石错误：「Fossil 1: From 1/(x−2) + 2/(x−3), I add numerators and denominators: 1+2=3, (x−2)+(x−3)=2x−5. Answer: 3/(2x−5). ✗」说明：「这是化石化错误：adding denominators（把分母相加）。When adding fractions, you do NOT add denominators. The rule is: find a common denominator, rewrite each fraction with that denominator, then add only the numerators (denominators stay the same). If you write 1/(x−2) + 2/(x−3) = 3/(2x−5), you are treating fractions like integers, which is wrong. Fractions add like this: 1/2 + 1/3 = 3/6 + 2/6 = 5/6 (NOT 2/5). Similarly, 1/(x−2) + 2/(x−3) requires common denominator (x−2)(x−3), NOT adding denominators to get 2x−5. Correct method: Common denominator: (x−2)(x−3). Rewrite: (x−3)/[(x−2)(x−3)] + (2x−4)/[(x−2)(x−3)] = (3x−7)/[(x−2)(x−3)]. Answer: (3x−7)/[(x−2)(x−3)].」让孩子跟读一句：「1/(x−2) + 2/(x−3) ≠ 3/(2x−5). Find common denominator (x−2)(x−3) first.」再写第二个化石错误：「Fossil 2: From [(x−3) + 2(x−2)] / [(x−2)(x−3)], I expand: 2(x−2) = 2x−2. So (x−3) + (2x−2) = 3x−5. Answer: (3x−5)/[(x−2)(x−3)]. ✗」说明：「这是化石化错误：sign errors when expanding brackets（展开括号时符号错误）。Correct method: 2(x−2) = 2×x + 2×(−2) = 2x − 4 (NOT 2x−2). The minus sign must be distributed: 2×(−2) = −4. Then (x−3) + (2x−4) = x−3+2x−4 = 3x−7 (NOT 3x−5). Check: 2(x−2) = 2x−4. If x=3, 2(3−2)=2(1)=2. And 2×3−4=6−4=2 ✓. But 2×3−2=6−2=4 ✗. So 2(x−2)=2x−4, NOT 2x−2. Answer: (3x−7)/[(x−2)(x−3)].」让孩子跟读一句：「2(x−2) = 2x−4, NOT 2x−2. Distribute 2 to both x and −2.」问孩子：「Why can't you add denominators?」（等孩子回答；期待答案：「Because the rule for adding fractions is: find common denominator, rewrite, then add only numerators. Denominators stay the same. If you add denominators, you get a wrong answer.」如果孩子不确定，教师给这个解释。）",
      },
      {
        name: "微课",
        duration: "10 分钟",
        teacherNotes: "打开屏幕共享，播放本周微课（3 个例题，每个 1 分钟，共 3 分钟）。微课例题 1: Simplify 1/(x−2) + 2/(x−3) and leave your answer as a single fraction in simplest form. Solution: ① Find common denominator. The two denominators are (x−2) and (x−3). Common denominator: (x−2)(x−3). ② Rewrite each fraction with common denominator. First fraction: 1/(x−2) = 1(x−3)/[(x−2)(x−3)] = (x−3)/[(x−2)(x−3)]. Second fraction: 2/(x−3) = 2(x−2)/[(x−2)(x−3)] = (2x−4)/[(x−2)(x−3)]. ③ Add numerators: [(x−3) + (2x−4)] / [(x−2)(x−3)] = [x−3+2x−4] / [(x−2)(x−3)] = (3x−7) / [(x−2)(x−3)]. ④ Answer: (3x−7) / [(x−2)(x−3)]. Check: numerator is in simplest form (3x−7 cannot be factored), no common factors with denominator ✓. 微课例题 2: Factorise x²−9. Then simplify 1/(x²−9) + 2/(x−3) and leave your answer in simplest form. Solution: ① Factorise x²−9. This is difference of squares: a²−b² = (a+b)(a−b). Here a=x, b=3. So x²−9 = x²−3² = (x+3)(x−3). ② Find common denominator. First fraction has denominator (x+3)(x−3). Second fraction has denominator (x−3). Common denominator: (x+3)(x−3). ③ Rewrite: 1/(x²−9) = 1/[(x+3)(x−3)]. 2/(x−3) = 2(x+3)/[(x+3)(x−3)] = (2x+6)/[(x+3)(x−3)]. ④ Add: [1 + (2x+6)] / [(x+3)(x−3)] = (2x+7) / [(x+3)(x−3)]. ⑤ Answer: (2x+7) / [(x+3)(x−3)]. Alternative form: (2x+7) / (x²−9) (both correct). 微课例题 3: Simplify 1/(x−3) + 2/(x−3)² and leave your answer in simplest form. Solution: ① Find common denominator. First denominator: (x−3). Second denominator: (x−3)². Common denominator: (x−3)² (the larger power). ② Rewrite first fraction: 1/(x−3) = 1(x−3)/(x−3)² = (x−3)/(x−3)². Second fraction already has denominator (x−3)²: 2/(x−3)². ③ Add: [(x−3) + 2] / (x−3)² = [x−3+2] / (x−3)² = (x−1) / (x−3)². ④ Answer: (x−1) / (x−3)². Check: simplest form ✓. 播放完 3 个例题后，暂停微课。问孩子：「What is the first step for adding algebraic fractions?」（等孩子回答；期待答案：「Step 1: Find common denominator. Factorise denominators if needed (x²−9=(x−3)(x+3)). Then find common denominator.」如果孩子不确定，教师给这个解释。）再问：「Can you add denominators?」（等孩子回答；期待答案：「No. When adding fractions, do NOT add denominators. Find common denominator, rewrite, then add only numerators.」如果孩子不确定，教师给这个解释。）对孩子说：「Very good. Official 5.16 method: Find common denominator, rewrite each fraction, add/subtract numerators, simplify. Factorise denominators when needed: x²−9=(x−3)(x+3). Now let's practice.」",
      },
      {
        name: "作业",
        duration: "15 分钟",
        teacherNotes: "给孩子 5 道题目让他/她在纸上算（教师不给完整答案，只给提示，让孩子自己写出 working steps）：\n\n练习 1: Simplify 1/(x−4) + 3/(x−1) and leave your answer as a single fraction in simplest form. (提示：Find common denominator. What is (x−4)(x−1)? Rewrite each fraction.) 期待答案：Common denominator: (x−4)(x−1). Rewrite: (x−1)/[(x−4)(x−1)] + (3x−12)/[(x−4)(x−1)] = (4x−13)/[(x−4)(x−1)] ✓.\n\n练习 2: Factorise x²−16. Then simplify 1/(x²−16) + 3/(x−4) and leave your answer in simplest form. (提示：x²−16 is difference of squares. a=x, b=4.) 期待答案：x²−16 = (x−4)(x+4). Common denominator: (x−4)(x+4). Rewrite: 1/[(x−4)(x+4)] + (3x+12)/[(x−4)(x+4)] = (3x+13)/[(x−4)(x+4)] ✓.\n\n练习 3: Simplify 2/(x+2) − 1/(x+2)² and leave your answer in simplest form. (提示：Common denominator is (x+2)². Remember the minus sign when combining.) 期待答案：Common denominator: (x+2)². Rewrite: (2x+4)/(x+2)² − 1/(x+2)² = [(2x+4)−1]/(x+2)² = (2x+3)/(x+2)² ✓.\n\n练习 4: Simplify 3/(x−2) + 1/(x+5) and leave your answer as a single fraction in simplest form. (提示：Common denominator: (x−2)(x+5). Rewrite each.) 期待答案：Common denominator: (x−2)(x+5). Rewrite: (3x+15)/[(x−2)(x+5)] + (x−2)/[(x−2)(x+5)] = (4x+13)/[(x−2)(x+5)] ✓.\n\n练习 5: Simplify 2/(x²−25) + 1/(x−5) and leave your answer in simplest form. (提示：Factorise x²−25 first. Then find common denominator.) 期待答案：x²−25 = (x−5)(x+5). Common denominator: (x−5)(x+5). Rewrite: 2/[(x−5)(x+5)] + (x+5)/[(x−5)(x+5)] = (x+7)/[(x−5)(x+5)] ✓.\n\n如果孩子卡住，教师给词提示（例如：「Find common denominator first. If denominators are (x−4) and (x−1), what is the common denominator?」或「Factorise x²−16 using a²−b². What are a and b?」或「When subtracting, be careful with signs: 2(x+2)−1 = (2x+4)−1 = 2x+3. NOT 2x+4−1=2x+5.」或「Expand 3(x+5): 3×x + 3×5 = 3x+15. NOT 3x+5.」或「Check your answer by expanding the denominator. Does (x−4)(x−1) = x²−5x+4?」）。孩子做完一道，教师检查 working steps 是否清楚（每一步都写出来），然后让孩子继续下一道。",
      },
      {
        name: "收口",
        duration: "3 分钟",
        teacherNotes: "总结本周重点：(1) 官方 Sec 2 AEIS 数学卷型：Part 1 MCQ 34 题 30 分钟 + Part 2 show working 20+10–15 题 1 小时 45 分钟，不用计算器。(2) 本周内容：Sec 2 NUMBER AND ALGEBRA, N5. Algebraic manipulation: 5.16 addition and subtraction of algebraic fractions with linear or quadratic denominator（代数分式加减）。本周是 N5.16 only. Add/subtract: find common denominator, rewrite each fraction, combine numerators (add or subtract), simplify numerator. Factorise denominators when needed: x²−9=(x−3)(x+3), x²−16=(x−4)(x+4), x²−1=(x−1)(x+1). Leave answer as a single fraction in simplest form. Integers in coefficients. No calculator. This week is ADD/SUBTRACT only. 第 65 周已完成 N5.15 multiply/divide. Fossil: adding denominators (writing 1/(x−2)+2/(x−3)=3/(2x−5) by adding numerators AND denominators, which is wrong); or sign errors when expanding brackets (2(x−2)=2x−2 instead of 2x−4; or 2(x+3)=2x+3 instead of 2x+6); or leaving answer unsimplified (stopping at [(x−3)+2(x−2)]/[(x−2)(x−3)] without simplifying numerator to (3x−7)). 本周不开始 N6 (quadratic functions). 本周不重教 5.15 multiply/divide（第 65 周已教）。Cast: secondary Wei, Aisha, Mr Lim at Riverside Secondary. 第 8–56 周已完成 Sec 1 内容。第 57 周已完成 Sec 2 N2.4 map scales。第 58 周已完成 Sec 2 N2.5 direct and inverse proportion。第 59 周已完成 Sec 2 N5.9 expansion。第 60 周已完成 Sec 2 N5.10 changing the subject。第 61 周已完成 Sec 2 N5.11 finding the value in a formula。第 62 周已完成 Sec 2 N5.12 identities。第 63 周已完成 Sec 2 N5.13 grouping。第 64 周已完成 Sec 2 N5.14 factorisation of quadratics。第 65 周已完成 Sec 2 N5.15 multiply/divide algebraic fractions。本周继续 Sec 2 内容（Sec 3 申请者的 preceding level）。」对家长说：「本周化石焦点：adding denominators（把分母相加：1/(x−2)+2/(x−3) 错误地写成 3/(2x−5)，忘记找公分母 (x−2)(x−3)，正确答案 (3x−7)/[(x−2)(x−3)]）；或 sign errors when expanding（展开括号符号错误：2(x−2)展开成 2x−2 而不是 2x−4，忘记 2×(−2)=−4；或 2(x+3)展开成 2x+3 而不是 2x+6，忘记 2×3=6）；或 leaving answer unsimplified（答案没化简：分子停在 [(x−3)+2(x−2)]，没有展开合并同类项成 (3x−7)）。正确做法：Find common denominator, rewrite each fraction, add/subtract numerators (expand brackets carefully), simplify numerator. Factorise denominators when needed (x²−9=(x−3)(x+3)). Leave answer as a single fraction in simplest form.」请在家长端查看孩子的作业提交，关注这个化石错误。」对孩子说：「Great work today! Remember: Official 5.16 is add and subtract algebraic fractions. Find common denominator first. Do NOT add denominators. Rewrite each fraction, then add/subtract only numerators. Expand brackets carefully: 2(x−2)=2x−4 (NOT 2x−2). Simplify numerator. Leave answer as a single fraction in simplest form. 1/(x−2)+2/(x−3)=(3x−7)/[(x−2)(x−3)] ✓. 1/(x²−9)+2/(x−3)=(2x+7)/[(x−3)(x+3)] ✓. 1/(x−3)+2/(x−3)²=(x−1)/(x−3)² ✓.」鼓励孩子并结束课程。",
      },
    ],
    speakingPrompts: null,
  },
};

export default async function LessonPlanPage({
  params,
}: {
  params: Promise<{ level: string; weekNumber: string }>;
}) {
  const session = await getServerSession(authOptions);

  if (!session?.user || session.user.role !== "admin") {
    redirect("/learn");
  }

  const { level, weekNumber } = await params;
  const key = `${level}-${weekNumber}`;
  const plan = lessonPlans[key];

  if (!plan) {
    return (
      <div>
        <div className="mb-8">
          <Link
            href="/learn/plans"
            className="text-sm text-muted hover:text-ink transition-colors mb-4 inline-block"
          >
            ← 返回教案列表
          </Link>
          <h1 className="font-serif font-semibold text-3xl text-ink">
            教案暂未上线
          </h1>
        </div>
        <div className="bg-card border border-line rounded-xl p-8 text-center">
          <p className="text-muted">
            {level} 第 {weekNumber} 周的教案正在准备中
          </p>
        </div>
      </div>
    );
  }

  const isMath = level === "MATH" || level === "SMATH";

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/learn/plans"
          className="text-sm text-muted hover:text-ink transition-colors mb-4 inline-block"
        >
          ← 返回教案列表
        </Link>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-semibold text-accent px-3 py-1 bg-accent/10 rounded-full">
                {level} 第 {weekNumber} 周
              </span>
              {weekNumber === "0" && level === "A2" && (
                <span className="text-xs text-ink-2 px-2 py-1 bg-paper-2 border border-line rounded-full">
                  完整 45 分钟教案
                </span>
              )}
            </div>
            <h1 className="font-serif font-semibold text-3xl text-ink mb-2">
              {plan.title}
            </h1>
            {plan.fossil && (
              <p className="text-sm text-ink-2">
                <strong>化石重点：</strong>
                {plan.fossil}
              </p>
            )}
            {plan.mathExample && (
              <p className="text-sm text-ink-2">
                <strong>本周例题：</strong>
                {plan.mathExample}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Board Writing */}
      {plan.boardWriting && (
        <div className="mb-6 bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-5">
          <h3 className="font-serif font-semibold text-base text-ink mb-2">
            📝 板书
          </h3>
          <p className="font-mono text-lg text-accent">{plan.boardWriting}</p>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-6 mb-8">
        <h2 className="font-serif font-semibold text-2xl text-ink">
          教学环节（45 分钟）
        </h2>
        {plan.sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-card border border-line rounded-xl p-5"
          >
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="font-serif font-semibold text-xl text-accent">
                {idx + 1}. {section.name}
              </h3>
              <span className="text-sm text-muted">{section.duration}</span>
            </div>
            <p className="text-sm text-ink-2 leading-relaxed whitespace-pre-line">
              {section.teacherNotes}
            </p>
          </div>
        ))}
      </div>

      {/* Spoken Lines */}
      {plan.spokenLines && plan.spokenLines.length > 0 && (
        <div className="mb-6 bg-paper-2 border border-line rounded-xl p-5">
          <h3 className="font-serif font-semibold text-lg text-ink mb-3">
            💬 跟读句子
          </h3>
          <ul className="space-y-2">
            {plan.spokenLines.map((line, idx) => (
              <li key={idx} className="text-sm text-ink flex items-start gap-2">
                <span className="text-accent font-semibold mt-0.5">
                  {idx + 1}.
                </span>
                <span className="font-mono">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Child Prompts */}
      {plan.childPrompts && plan.childPrompts.length > 0 && (
        <div className="mb-6 bg-warn-bg/30 border border-warn-ink/20 rounded-xl p-5">
          <h3 className="font-serif font-semibold text-lg text-ink mb-3">
            🎤 开口提示（孩子自己说）
          </h3>
          <ul className="space-y-2">
            {plan.childPrompts.map((prompt, idx) => (
              <li key={idx} className="text-sm text-ink flex items-start gap-2">
                <span className="text-accent font-semibold mt-0.5">
                  {idx + 1}.
                </span>
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Backup Prompts */}
      {plan.backupPrompts && plan.backupPrompts.length > 0 && (
        <div className="mb-6 bg-paper border border-line rounded-xl p-5">
          <h3 className="font-serif font-semibold text-lg text-ink mb-3">
            🔄 备用提示（如果卡壳）
          </h3>
          <ul className="space-y-2">
            {plan.backupPrompts.map((prompt, idx) => (
              <li key={idx} className="text-sm text-ink-2 flex items-start gap-2">
                <span className="text-muted font-semibold mt-0.5">•</span>
                <span>{prompt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 bg-warn-bg border border-warn-ink/20 rounded-xl p-5">
        <h3 className="font-serif font-semibold text-base mb-2 text-ink">
          使用提醒
        </h3>
        <p className="text-xs text-ink-2">
          这是授课教师专用的 Zoom 教案。不包含销售话术。课后引导家长和孩子完成 /learn 页面的对应周作业，系统会自动批改和反馈。
        </p>
      </div>
    </div>
  );
}
