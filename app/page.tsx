import Link from "next/link";
import OfficialClip from "@/components/OfficialClip";
import LandingNav from "@/components/LandingNav";
import LandingEnquiry from "@/components/LandingEnquiry";
import { THEMES } from "@/lib/curriculum/storylines";
import { CONTEXT_TOPICS } from "@/lib/curriculum/singapore-context";

export const metadata = {
  title: "狮城入学 · 6 个月准备进新加坡政府学校",
  description:
    "给中国家庭的 CEQ + AEIS 作业。新加坡校园故事、按年级摸底、简体中文家长说明。12 周 RMB 2,680。试学打开就能做。",
};

function story(n: number) {
  for (const t of THEMES) {
    const s = t.stories.find((x) => x.n === n);
    if (s) return s;
  }
  return null;
}

const STORY_COUNT = THEMES.reduce((n, t) => n + t.stories.length, 0);
const LOST = story(2);
const MRT = story(38);

const PROBLEMS = [
  {
    titleZh: "没有新加坡语境",
    titleEn: "No Singapore context",
    body: "课本写 apartment、line up。孩子进校要听懂 canteen、recess、HDB、void deck、Aunty。听不懂通知，语法对了也没用。",
  },
  {
    titleZh: "开口练不够",
    titleEn: "Speaking is part of the score",
    body: "小学 CEQ 口语是正式分。家里没有考官，补习也很少每天对练。进校第一天就要举手、问 Aunty、跟同学说话。",
  },
  {
    titleZh: "家长看不见进度",
    titleEn: "Parents feel blind",
    body: "交了钱却不知道今天学了哪几个词、摸底错在哪。人身在中国或忙于工作，更需要简体中文对照，而不是一份全英文作业。",
  },
];

const PILLARS = [
  {
    href: "/curriculum/speaking",
    titleZh: "开口：故事 + 口语量表",
    body: "每课跟读 canteen / recess 台词。对照剑桥公开评分：语法词汇、语篇、语音、互动。试学周视频可反复看，不用登录。",
  },
  {
    href: "/assess",
    titleZh: "家长看得见：摸底对错",
    body: "P2 到 S3，英语 16 题、数学 12 题。交卷立刻逐题对照和中文迁移错误。开通作业后，进度页给顾问和家长看。",
  },
  {
    href: "/curriculum/mocks",
    titleZh: "限时卷：对照试卷结构",
    body: "工作室 OAS 四选一，不是把真卷贴上网。小学对照 CEQ 语言点；中学对照 AEIS 50 题里的语法、词汇、短理解。",
  },
  {
    href: "/curriculum/guide",
    titleZh: "简体中文家长说明",
    body: "网站说明是中文。顾问微信跟进。家长英语不好，也能看懂本周改哪一个错、孩子该申请小学还是中学。",
  },
];

const ROADMAP = [
  { m: "第 1–2 个月", t: "基础开口", d: "新加坡故事、冠词、时态、canteen 词汇。每周只改一个中文迁移错误。" },
  { m: "第 3–4 个月", t: "CEQ 题型", d: "阅读完形、短写作、口语跟读。小学走这条线拿 CEQ 成绩单。" },
  { m: "第 5–6 个月", t: "AEIS 限时", d: "小学数学 / 中学英语+数学限时卷。对照前一级课纲，不猜题。" },
];

const WHY_NOW = [
  {
    titleZh: "英语课 + 亚洲生活",
    body: "政府学校用英语上课，华文是母语课。离家近、生活里仍听得到华语，又要在食堂用英语排队。",
  },
  {
    titleZh: "小学先过 CEQ",
    body: "2022 年起小学 AEIS 不再另考英语。英语成绩单在中国就能考，再赴新加坡考数学。路径清楚。",
  },
  {
    titleZh: "不是保证移民",
    body: "录取看考试、学位空缺和居住区域。准证看 ICA 与雇主。作业包帮孩子应考和开口，不帮办 PR。",
  },
];

const HABITS = [
  {
    titleZh: "早准备",
    body: "小学 CEQ 要赶申请窗前 12 个月。人在中国先摸底、先试学，再决定开 12 周。",
    href: "/assess",
    cta: "按年级摸底",
  },
  {
    titleZh: "快浸入",
    body: "进校要用 canteen、recess、Aunty，不是美国课文。每天开口比只刷语法卷快。",
    href: "/curriculum/context",
    cta: "新加坡语境",
  },
  {
    titleZh: "用好双语",
    body: "华文有底是优势，但 AEIS / CEQ 测的是英语。把时间留给英语和数学，华文保持即可。",
    href: "/curriculum/stories",
    cta: "77 个故事",
  },
];

/** Composite paths, not named alumni or pass-rate claims. */
const FAMILY_PATHS = [
  {
    tag: "路径 A · 人还在中国",
    title: "先考 CEQ，再飞去考数学",
    body: "孩子申请小学。在授权考点拿 A2 / B1 成绩单，本站练故事、语法和数学摸底。AEIS 数学仍要赴新加坡考。我们不代报考点。",
    next: "小学试学",
    href: "/trial/A2",
  },
  {
    tag: "路径 B · 家长已在新加坡工作",
    title: "开口要快，课室不等你",
    body: "准证是家长的事。孩子要尽快听懂早会、食堂、小息。先做语境十课和摸底，再决定申请年级。录取仍看官方考试。",
    next: "语境十课",
    href: "/curriculum/context",
  },
  {
    tag: "路径 C · 申请中学",
    title: "英语作文 + 50 题，加数学",
    body: "中学不交 CEQ。测申请年级的前一级。本站有 SEC 英语试学和按年级英语/数学摸底。学位同样不是交作业就会有。",
    next: "中学试学",
    href: "/trial/SEC",
  },
];

const CHALLENGES = [
  {
    titleZh: "学位有限",
    body: "国际学生名额按校、按年有限。表现好也不等于想去哪所就去哪所。以 MOE 派位为准。",
  },
  {
    titleZh: "作业包不是生活全包",
    body: "12 周作业 RMB 2,680。房租、生活费、CEQ 考点费、AEIS 报名费另付官方。本页不报其他机构的价。",
  },
  {
    titleZh: "前三个月的语境冲击",
    body: "hawker centre、HDB、mind the gap、Thank you Aunty。这是我们专门练的，不是 Singlish 课。",
  },
];

const FAQS = [
  {
    q: "人在中国能开始吗？",
    a: "能。试学周和摸底打开就能做，不用登录、不用飞新加坡。正式作业开通后在家里按周提交。AEIS 本身仍要赴新加坡考，以教育部官网为准。",
  },
  {
    q: "这是教育部批准的课程吗？",
    a: "不是。狮城入学是作业平台，对照新加坡英语课纲和剑桥 CEQ 公开试卷结构。录取由 CEQ 成绩和 AEIS 官方考试决定，我们不能保证学位。",
  },
  {
    q: "家长英语不好怎么办？",
    a: "站内说明、错误对照、报名表都是简体中文。孩子做英文题，家长看中文解释。顾问用微信沟通。",
  },
  {
    q: "和去补习教室有什么不同？",
    a: "这里是每天在家做的结构化作业：故事、选择题、摸底数据。教室课一周两次，家长往往看不到当日对错。我们不提供其他机构的链接或比较表。",
  },
  {
    q: "课程是抄 NIE「新加坡语境华语」吗？",
    a: "不是。陈志锐副教授的资料库研究的是新加坡华语词。本站教的是进校要用的英语：hawker centre、HDB、recess。家长页有中英对照，方便您先用中文讲给孩子听。",
  },
  {
    q: "有没有通过保证？",
    a: "没有。先免费摸底和试学，再决定付钱。工作室 CES 是对照带，不是剑桥或考评局分数。正式门槛以 MOE 年龄核对器和官方成绩单为准。",
  },
  {
    q: "进政府学校等于能拿 PR 吗？",
    a: "不等于。AEIS 录取是入学，准证和永久居民是 ICA 的事，看家长身份与当年政策。本站不办理准证，也不承诺移民结果。",
  },
];

export default function HomePage() {
  return (
    <>
      <a
        className="absolute left-3 -top-12 bg-ink text-paper px-3 py-2 z-50 focus:top-3"
        href="#main"
      >
        跳到正文
      </a>
      <LandingNav />

      <main id="main">
        {/* 1. Hero */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                Results · Trust · Convenience
              </p>
              <h1 className="font-serif font-semibold text-3xl md:text-5xl leading-tight tracking-tight mb-3">
                6 个月内，把进新加坡政府学校的准备做完
              </h1>
              <p className="text-lg text-ink-2 mb-2">
                Get your child ready for a Singapore government school in 6 months
              </p>
              <p className="text-ink-2 mb-5 max-w-xl">
                留住中文根，拿到英语凭证，走政府学校通道。小学先 CEQ 再考 AEIS 数学；中学考英语 + 数学。新加坡校园故事、按年级摸底、简体中文家长说明。
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link
                  href="/trial/A2"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover"
                >
                  立即免费试学
                </Link>
                <Link
                  href="/assess"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-accent rounded-full font-semibold"
                >
                  先做摸底
                </Link>
              </div>
              <p className="text-sm text-ink mb-1">
                12 周作业 <strong>RMB 2,680</strong>，向升学顾问支付。试学不用登录。
              </p>
              <p className="text-xs text-muted mb-5">PayNow 94594601 · 微信转账</p>
              <ul className="flex flex-wrap gap-2 text-xs">
                {[
                  "对照 MOE 课纲",
                  "剑桥 CEQ 公开格式",
                  `${STORY_COUNT} 个新加坡故事`,
                  "P2–S3 英语+数学摸底",
                  "全站简体中文",
                ].map((t) => (
                  <li key={t} className="px-3 py-1.5 rounded-full border border-line bg-card text-ink-2">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-card border border-line rounded-2xl overflow-hidden shadow">
                <video
                  className="w-full aspect-video object-cover bg-ink"
                  poster="/trial/a2-w0-setup.jpg"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/trial/a2-w0-setup.mp4?v=sgchild1" type="video/mp4" />
                </video>
                <div className="grid grid-cols-2 gap-px bg-line">
                  <div className="bg-card p-4">
                    <p className="text-xs font-semibold text-accent mb-1">进校前要会说</p>
                    <p className="text-sm text-ink-2">I lost my water bottle. Is this your bottle? Thank you, Aunty Tan.</p>
                  </div>
                  <div className="bg-card p-4">
                    <p className="text-xs font-semibold text-accent mb-1">不是语法清单</p>
                    <p className="text-sm text-ink-2">Lost and Found、recess、canteen。试学周打开就能跟读。</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted mt-2">
                片中是本站锁定角色 Mei / Priya，新加坡口音、规范语法。不是考场录像，也不是保证录取。
              </p>
            </div>
          </div>
        </section>

        {/* Why Singapore now */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">
              不是只把孩子送去上学，是把下一步放在新加坡
            </h2>
            <p className="text-ink-2 mb-8 max-w-3xl leading-relaxed">
              英语课、亚洲生活、离中国近。双语政策让华文有底的孩子有入口，但课室、食堂、考试仍是英语。我们帮的是应考和开口，不是移民中介。
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {WHY_NOW.map((w) => (
                <article key={w.titleZh} className="bg-card border border-line rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2">{w.titleZh}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed">{w.body}</p>
                </article>
              ))}
            </div>

            <h3 className="font-serif font-semibold text-xl mb-2">三条常见路径（不是客户证言）</h3>
            <p className="text-sm text-muted mb-6 max-w-2xl">
              下面是作业怎么接官方通道。没有虚构的「进了某所名校」故事，也没有通过率。
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {FAMILY_PATHS.map((p) => (
                <article key={p.tag} className="bg-card border border-line rounded-2xl p-6 flex flex-col">
                  <p className="text-xs font-semibold text-accent mb-2">{p.tag}</p>
                  <h3 className="font-serif font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed mb-4 flex-1">{p.body}</p>
                  <Link href={p.href} className="text-sm text-accent font-semibold">
                    {p.next} →
                  </Link>
                </article>
              ))}
            </div>

            <h3 className="font-serif font-semibold text-xl mb-6">做成准备的家庭，通常做对这三件</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {HABITS.map((h) => (
                <article key={h.titleZh} className="bg-paper-2 border border-line rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2">{h.titleZh}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed mb-4">{h.body}</p>
                  <Link href={h.href} className="text-sm text-accent font-semibold">
                    {h.cta} →
                  </Link>
                </article>
              ))}
            </div>

            <h3 className="font-serif font-semibold text-xl mb-6">2026 仍然要面对</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {CHALLENGES.map((c) => (
                <article key={c.titleZh} className="bg-card border border-line rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2">{c.titleZh}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Problem */}
        <section className="py-12 md:py-16 bg-paper-2">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">
              家长交了钱，却还是看不见孩子今天学了什么
            </h2>
            <p className="text-ink-2 mb-8 max-w-2xl">
              AEIS / CEQ 难，不只是因为语法。难在语境、开口、和家长端的数据。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {PROBLEMS.map((p) => (
                <article key={p.titleZh} className="bg-card border border-line rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-lg mb-1">{p.titleZh}</h3>
                  <p className="text-xs text-accent mb-3">{p.titleEn}</p>
                  <p className="text-sm text-ink-2 leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Singapore-context English */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">
              用新加坡方式学英语
            </h2>
            <p className="text-lg text-ink-2 mb-3">Learn English the Singapore way</p>
            <p className="text-ink-2 mb-4 max-w-3xl leading-relaxed">
              多数海外英语材料是英美场景。政府学校第一天要听懂 HDB、hawker centre、MRT、recess、Aunty。
              先用中文把词讲清，再练英语开口——进校才不迷路。
            </p>
            <p className="text-sm text-muted mb-8 max-w-3xl leading-relaxed">
              国立教育学院陈志锐副教授主持过新加坡华语本地词研究（推广华语理事会《新加坡华语资料库》）。那是华语，不是英语课。本站不转载教材、不宣称与
              NIE 合作。我们把同一类生活写成英语作业。
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
              {CONTEXT_TOPICS.map((t) => (
                <Link
                  key={t.id}
                  href={t.href}
                  className="bg-card border border-line rounded-xl p-4 hover:border-accent"
                >
                  <p className="text-xs font-semibold text-accent mb-1">{t.zhScene}</p>
                  <p className="text-sm font-semibold mb-1">{t.enTitle}</p>
                  <p className="text-xs text-muted">{t.vocab[0].en}</p>
                </Link>
              ))}
            </div>
            <Link
              href="/curriculum/context"
              className="inline-flex px-6 py-3 border border-accent rounded-full font-semibold"
            >
              家长中文词表 + 十课台词
            </Link>
          </div>
        </section>

        {/* 3. 77 stories */}
        <section className="py-12 md:py-16 bg-paper-2">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">
              用新加坡生活学英语，不是只做语法卷
            </h2>
            <p className="text-ink-2 mb-2 max-w-2xl">
              {STORY_COUNT} 个校园与家庭故事。每课：听 → 开口 → 阅读完形 → 写一段。语法一次只钉 1–2 点。
            </p>
            <p className="text-sm text-muted mb-8">Learn English through Singapore school life, not isolated drills.</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {LOST && (
                <Link
                  href={LOST.href ?? "/curriculum/stories/2"}
                  className="bg-card border border-line rounded-2xl p-6 hover:border-accent"
                >
                  <p className="text-xs font-semibold text-accent mb-1">故事 {LOST.n}</p>
                  <h3 className="font-serif font-semibold text-xl mb-2">{LOST.title}</h3>
                  <p className="text-sm text-ink-2 mb-3">{LOST.focus}</p>
                  <p className="text-sm">
                    <strong>语法</strong> {LOST.grammar}
                    <br />
                    <strong>词汇</strong> {LOST.vocab.slice(0, 4).join(" · ")}
                    <br />
                    <strong>开口</strong> {LOST.oracy[0]}
                  </p>
                </Link>
              )}
              {MRT && (
                <Link
                  href={`/curriculum/stories/${MRT.n}`}
                  className="bg-card border border-line rounded-2xl p-6 hover:border-accent"
                >
                  <p className="text-xs font-semibold text-accent mb-1">故事 {MRT.n}</p>
                  <h3 className="font-serif font-semibold text-xl mb-2">{MRT.title}</h3>
                  <p className="text-sm text-ink-2 mb-3">{MRT.focus}</p>
                  <p className="text-sm">
                    <strong>语法</strong> {MRT.grammar}
                    <br />
                    <strong>词汇</strong> {MRT.vocab.slice(0, 4).join(" · ")}
                    <br />
                    <strong>开口</strong> {MRT.oracy[0]}
                  </p>
                </Link>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {THEMES.map((t) => (
                <Link
                  key={t.id}
                  href="/curriculum/stories"
                  className="bg-paper-2 border border-line rounded-xl p-4 text-sm hover:border-accent"
                >
                  <p className="font-semibold mb-1">{t.title}</p>
                  <p className="text-muted text-xs">{t.stories.length} 课</p>
                </Link>
              ))}
            </div>
            <Link
              href="/curriculum/stories"
              className="inline-flex px-6 py-3 border border-accent rounded-full font-semibold"
            >
              看全部 {STORY_COUNT} 个新加坡故事
            </Link>
          </div>
        </section>

        {/* 4. Features */}
        <section className="py-12 md:py-16 bg-paper-2">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-8">
              给中国家长的四件事
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {PILLARS.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="bg-card border border-line rounded-2xl p-6 hover:border-accent"
                >
                  <h3 className="font-serif font-semibold text-lg mb-2">{p.titleZh}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed">{p.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Path + proof of format */}
        <section className="py-12 md:py-16" id="paths">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">
              清楚的 6 个月路线，不是“报了班再看”
            </h2>
            <p className="text-ink-2 mb-8 max-w-2xl">
              12 周是一个作业周期。覆盖 CEQ 到 AEIS 的完整准备，通常按这条线排 6 个月。先摸底，再决定开几周。
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {ROADMAP.map((r) => (
                <article key={r.m} className="bg-card border border-line rounded-2xl p-6">
                  <p className="text-xs font-semibold text-accent mb-1">{r.m}</p>
                  <h3 className="font-serif font-semibold text-lg mb-2">{r.t}</h3>
                  <p className="text-sm text-ink-2">{r.d}</p>
                </article>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <article className="bg-card border border-line rounded-2xl p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">小学 · P2–P5</p>
                <h3 className="font-serif text-xl font-semibold mb-2">先过英语，再考数学</h3>
                <p className="text-sm text-ink-2 mb-4">
                  小学 AEIS 不再另考英语卷。英语用 CEQ 证明（P2–P4 对照 A2 Key，P5 对照 B1 Preliminary），再赴新加坡考 AEIS 数学。
                </p>
                <Link href="/小学" className="text-accent font-semibold text-sm">
                  小学试学 →
                </Link>
              </article>
              <article className="bg-card border border-line rounded-2xl p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">中学 · Sec 1–3</p>
                <h3 className="font-serif text-xl font-semibold mb-2">英语和数学都要考</h3>
                <p className="text-sm text-ink-2 mb-4">
                  中学不交 CEQ。AEIS 英语 2 小时 10 分：作文 + 50 题。数学无计算器。测申请年级的前一级课纲。
                </p>
                <Link href="/中学" className="text-accent font-semibold text-sm">
                  中学试学 →
                </Link>
              </article>
            </div>

            <h3 className="font-serif font-semibold text-xl mb-3">成绩表长这样（样例，不是录取承诺）</h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card min-w-[640px]">
                <thead className="bg-accent/5">
                  <tr>
                    <th className="text-left px-3 py-2">孩子</th>
                    <th className="text-left px-3 py-2">申请</th>
                    <th className="text-left px-3 py-2">工作室对照</th>
                    <th className="text-left px-3 py-2">本周焦点</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-line">
                    <td className="px-3 py-2">Li Wei（样例）</td>
                    <td className="px-3 py-2">P4</td>
                    <td className="px-3 py-2">CES 对照 124 / 目标 130</td>
                    <td className="px-3 py-2">完形连接词 however / therefore</td>
                  </tr>
                  <tr className="border-t border-line">
                    <td className="px-3 py-2">Zhang Min（样例）</td>
                    <td className="px-3 py-2">S1</td>
                    <td className="px-3 py-2">语法 82% · 可开限时卷</td>
                    <td className="px-3 py-2">although 不加 but</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mb-8">
              样例行来自课纲成绩表。开通后用真实作业分。我们不公布虚构通过率，也不使用名校校徽。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <OfficialClip
                videoId="Mqf8E8vwEg0"
                title="政府小学的一天（小一）"
                credit="Kranji Primary School 官方频道《A Day In a Life of A P1 Student》。真实校园一天，不是本站学生，也不是 AEIS 教程。"
                hideWeeklyHomework
              />
              <OfficialClip
                videoId="ZjGt6r8XSTg"
                title="CEQ 口语长这样"
                credit="Cambridge English 官方频道 English with Cambridge《A2 Key for Schools Speaking test》。官方口试样例，不是本站作业录像。"
                hideWeeklyHomework
              />
            </div>
          </div>
        </section>

        {/* 6. Pricing */}
        <section className="py-12 md:py-16 bg-paper-2" id="pricing">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">价格写在前面</h2>
            <p className="text-ink-2 mb-8 max-w-2xl">
              这是给顾问的作业包，不是游戏会员。先试学和摸底，再付钱。
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <article className="bg-card border border-line rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent mb-1">试学</p>
                <h3 className="font-serif text-2xl font-semibold mb-2">免费</h3>
                <p className="text-sm text-ink-2 mb-4">打开就能做，不用登录。小学英语 / 中学英语 / 数学各有试学周。</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>Lost and Found 故事视频</li>
                  <li>本周选择题与短写作</li>
                  <li>P2–S3 摸底 MCQ</li>
                </ul>
                <Link
                  href="/trial/A2"
                  className="inline-flex px-5 py-2.5 border border-accent rounded-full font-semibold"
                >
                  开始试学
                </Link>
              </article>
              <article className="bg-card border-2 border-accent rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent mb-1">12 周作业 · 最适合冲 CEQ / AEIS</p>
                <h3 className="font-serif text-2xl font-semibold mb-2">RMB 2,680</h3>
                <p className="text-sm text-ink-2 mb-4">向升学顾问一次支付。约 12 周一个周期。</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>本年级周作业（故事 + 语法焦点 + 读写）</li>
                  <li>摸底与限时卷</li>
                  <li>口语跟读与写作反馈（开通后）</li>
                  <li>顾问微信 · 家长中文说明</li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold"
                >
                  微信报名
                </Link>
              </article>
            </div>
            <p className="text-sm text-ink-2 mb-2">
              付款：PayNow 94594601 · 微信转账。不在本页收取信用卡。
            </p>
            <p className="text-sm text-muted">
              没有“不过退款”或虚构通过率。CEQ 考点费、AEIS 报名费另付官方。学位由教育部派位，不是交作业就会有学位。
            </p>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-6">家长常问</h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="bg-card border border-line rounded-xl px-5 py-4">
                  <summary className="font-semibold cursor-pointer">{f.q}</summary>
                  <p className="text-sm text-ink-2 mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA + enquiry */}
        <section className="py-12 md:py-16 bg-paper-2">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">
              孩子进校第一天，要能开口，不只是会做卷
            </h2>
            <p className="text-ink-2 mb-6">
              Your child should walk into a Singapore classroom able to queue, ask, and answer — not only fill blanks.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/trial/A2"
                className="inline-flex px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full"
              >
                立即免费试学
              </Link>
              <Link href="/assess" className="inline-flex px-6 py-3.5 border border-accent rounded-full font-semibold">
                按年级摸底
              </Link>
            </div>
            <h3 className="font-serif font-semibold text-xl mb-2">留下微信，顾问联系您</h3>
            <p className="text-sm text-ink-2 mb-4">
              也可以先 PayNow 94594601。我们只用微信号回复咨询，不出售给第三方。
            </p>
            <LandingEnquiry />
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 text-sm text-muted">
          <span>狮城入学</span>
          <Link href="/小学" className="hover:text-ink">
            小学
          </Link>
          <Link href="/中学" className="hover:text-ink">
            中学
          </Link>
          <Link href="/curriculum" className="hover:text-ink">
            课纲
          </Link>
          <Link href="/privacy" className="hover:text-ink">
            隐私政策
          </Link>
          <a href="https://www.moe.gov.sg/international-students/aeis" target="_blank" rel="noreferrer" className="hover:text-ink">
            MOE AEIS
          </a>
          <a href="https://www.ica.gov.sg/" target="_blank" rel="noreferrer" className="hover:text-ink">
            ICA 准证
          </a>
          <a href="https://www.seab.gov.sg/aeis/about-aeis/" target="_blank" rel="noreferrer" className="hover:text-ink">
            SEAB
          </a>
          <a href="https://www.assessment.sg/" target="_blank" rel="noreferrer" className="hover:text-ink">
            Cambridge 考点
          </a>
        </div>
      </footer>
    </>
  );
}
