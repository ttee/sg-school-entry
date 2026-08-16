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

  const isMath = level === "MATH";

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
