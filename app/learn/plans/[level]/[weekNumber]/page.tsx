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
