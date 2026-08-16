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
