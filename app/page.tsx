import Link from "next/link";
import OfficialClip from "@/components/OfficialClip";
import LandingNav from "@/components/LandingNav";
import LandingEnquiry from "@/components/LandingEnquiry";
import { THEMES } from "@/lib/curriculum/storylines";
import { CONTEXT_TOPICS } from "@/lib/curriculum/singapore-context";

export const metadata = {
  title: "狮城入学 · 进新加坡政府学校",
  description:
    "食堂、小息、失物招领。小学先过英语再考数学，中学英语数学一起考。12 周 2680 元。打开就能试。",
};

function story(n: number) {
  for (const t of THEMES) {
    const s = t.stories.find((x) => x.n === n);
    if (s) return s;
  }
  return null;
}

const LOST = story(2);
const MRT = story(38);

const PROBLEMS = [
  {
    titleZh: "课本对不上食堂",
    body: "孩子会说 classroom，一进学校听到的是 canteen、recess、Aunty。通知听不懂，语法对了也排队排错。",
  },
  {
    titleZh: "家里没人对练",
    body: "小学英语有口试。家长白天上班，孩子对着试卷点头，进校第一天却不敢举手。",
  },
  {
    titleZh: "交了钱看不见进度",
    body: "人在中国，或人在新加坡也忙。你要知道今天错了哪一题，下周改哪一个习惯。",
  },
];

const PILLARS = [
  {
    href: "/curriculum/speaking",
    titleZh: "跟读开口",
    body: "食堂、小息、失物招领，每课几句能用的话。试学视频打开就能听。",
  },
  {
    href: "/assess",
    titleZh: "做完就知道错在哪",
    body: "P2 到中三，英语和数学各有一份摸底。交卷后逐题看，中文写清为什么错。",
  },
  {
    href: "/curriculum/mocks",
    titleZh: "限时练手",
    body: "小学按 CEQ 的语言点出题，中学按那 50 道选择题练速度。",
  },
  {
    href: "/curriculum/guide",
    titleZh: "家长用中文看",
    body: "说明、对错、报名都是简体中文。顾问微信跟你说本周盯哪一句。",
  },
];

const ROADMAP = [
  { m: "头两个月", t: "先开口", d: "校园课文，冠词和时态。一周只改一个中国孩子常犯的错。" },
  { m: "第三、四个月", t: "对准试卷", d: "阅读、完形、短写作、跟读。小学这条线是为了拿 CEQ 成绩单。" },
  { m: "第五、六个月", t: "限时", d: "小学数学，或中学英语加数学。按申请年级的前一级来练。" },
];

const WHY_NOW = [
  {
    titleZh: "英语上课，生活里还有华语",
    body: "政府学校用英语教课，华文是母语课。回国近，食堂里却要排队用英语点鸡饭。",
  },
  {
    titleZh: "小学英语可以在中国先考",
    body: "现在小学入学，英语用剑桥 CEQ 成绩单。数学再到新加坡考。路是清楚的。",
  },
  {
    titleZh: "华文有底，英语要补上",
    body: "孩子中文不吃亏。真正卡人的是课室英语。我们把时间花在这里。",
  },
];

const HABITS = [
  {
    titleZh: "早点摸底",
    body: "小学英语成绩要赶申请窗口。人还在中国，就可以先做题、先试学。",
    href: "/assess",
    cta: "先做摸底",
  },
  {
    titleZh: "每天说两句",
    body: "canteen、recess、Thank you Aunty。比抱着美国课文背得快。",
    href: "/curriculum/context",
    cta: "这些词怎么说",
  },
  {
    titleZh: "华文保持，英语加码",
    body: "母语课孩子有底。作业时间留给英语和数学。",
    href: "/curriculum/stories",
    cta: "看课文",
  },
];

const FAMILY_PATHS = [
  {
    tag: "人还在中国",
    title: "先考英语，再飞去考数学",
    body: "申请小学的，在国内考 CEQ。课文、语法、数学摸底在家里做。数学那一卷，仍要去新加坡考。",
    next: "打开小学试学",
    href: "/trial/A2",
  },
  {
    tag: "家长已经在新加坡上班",
    title: "开口要快",
    body: "早会、食堂、小息，孩子这周就要听懂。先把十个生活场景和摸底做了，再定申请几年级。",
    next: "先看这些词",
    href: "/curriculum/context",
  },
  {
    tag: "申请中学",
    title: "作文、五十题、再加数学",
    body: "中学不考 CEQ。英语写一篇，再做理解语法；数学不给计算器。按前一年级的内容来。",
    next: "打开中学试学",
    href: "/trial/SEC",
  },
];

const CHALLENGES = [
  {
    titleZh: "位子有限",
    body: "热门学校每年就那么多国际学生名额。卷子练熟是你能做的那一步。",
  },
  {
    titleZh: "作业是作业，房租另算",
    body: "12 周 2680 元。考点报名费、房租自己付。",
  },
  {
    titleZh: "头三个月最懵",
    body: "hawker centre、HDB、mind the gap。这些我们课上就练。",
  },
];

const FAQS = [
  {
    q: "人在中国能开始吗？",
    a: "能。试学和摸底打开就能做，不用登录。作业开通后在家里按周交。数学和中学英语那几场，还是要去新加坡考。",
  },
  {
    q: "我英语不好，能帮孩子吗？",
    a: "能。对错、说明、报名表都是中文。孩子做英文题，你看中文解释。有问题微信找顾问。",
  },
  {
    q: "这跟去补习班有什么不一样？",
    a: "每天在家做：课文、选择题、你能看见对错。一周改一个习惯。教室课往往一周两次，你问今天学了什么，孩子说不上来。",
  },
  {
    q: "做完作业就一定有学位吗？",
    a: "学位和准证是教育部、移民局的事。我们把该练的练熟。先试学，觉得对再付钱。",
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
                给要进政府学校的家庭
              </p>
              <h1 className="font-serif font-semibold text-3xl md:text-5xl leading-tight tracking-tight mb-4">
                孩子进新加坡学校，先会在食堂开口
              </h1>
              <p className="text-ink-2 mb-5 max-w-xl">
                小学：国内先过英语，再到新加坡考数学。中学：英语作文加五十题，再加数学。课文里有 Lost and Found、recess、鸡饭。打开就能试。
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link
                  href="/trial/A2"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover"
                >
                  先看试学
                </Link>
                <Link
                  href="/assess"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-accent rounded-full font-semibold"
                >
                  先做摸底
                </Link>
              </div>
              <p className="text-sm text-ink mb-1">
                12 周 <strong>2680 元</strong>，微信或 PayNow 94594601。
              </p>
              <p className="text-xs text-muted mb-5">不用登录就能试。顾问开通后按周交作业。</p>
              <ul className="flex flex-wrap gap-2 text-xs">
                {[
                  "校园课文",
                  "P2 到中三摸底",
                  "家长看中文",
                  "顾问微信",
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
                  <source src="/trial/a2-w0-setup.mp4?v=imagine1" type="video/mp4" />
                </video>
                <div className="grid grid-cols-2 gap-px bg-line">
                  <div className="bg-card p-4">
                    <p className="text-xs font-semibold text-accent mb-1">进校前要会说</p>
                    <p className="text-sm text-ink-2">I lost my water bottle. Is this your bottle? Thank you, Aunty Tan.</p>
                  </div>
                  <div className="bg-card p-4">
                    <p className="text-xs font-semibold text-accent mb-1">跟读就这几句</p>
                    <p className="text-sm text-ink-2">Lost and Found、recess、canteen。打开就能听。</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted mt-2">Mei 和 Priya，试学周里的两个孩子。</p>
            </div>
          </div>
        </section>

        {/* Why Singapore now */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">
              很多家庭把下一步放在新加坡
            </h2>
            <p className="text-ink-2 mb-8 max-w-3xl leading-relaxed">
              英语上课，生活里还有华语，回国也近。真正要练的，是课室和食堂里那口英语。
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {WHY_NOW.map((w) => (
                <article key={w.titleZh} className="bg-card border border-line rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2">{w.titleZh}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed">{w.body}</p>
                </article>
              ))}
            </div>

            <h3 className="font-serif font-semibold text-xl mb-2">看看哪条像你们家</h3>
            <p className="text-sm text-muted mb-6 max-w-2xl">三种常见情况。点进去就能试。</p>
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

            <h3 className="font-serif font-semibold text-xl mb-6">这三件，早点做</h3>
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

            <h3 className="font-serif font-semibold text-xl mb-6">心里要有数</h3>
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
              交了钱，却不知道今天学了什么
            </h2>
            <p className="text-ink-2 mb-8 max-w-2xl">难的往往不是某一条语法，是听不懂、开不了口、你这边看不见。</p>
            <div className="grid md:grid-cols-3 gap-4">
              {PROBLEMS.map((p) => (
                <article key={p.titleZh} className="bg-card border border-line rounded-2xl p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2">{p.titleZh}</h3>
                  <p className="text-sm text-ink-2 leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Singapore-context English */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              用新加坡的日子学英语
            </h2>
            <p className="text-ink-2 mb-8 max-w-3xl leading-relaxed">
              课本里的 apartment，到了这里要说 HDB。排队点鸡饭、坐地铁、叫 Aunty。家长先用中文看懂，孩子再开口。
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
              这些词家长怎么讲
            </Link>
          </div>
        </section>

        {/* 3. Weekly passages */}
        <section className="py-12 md:py-16 bg-paper-2">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              每周课文
            </h2>
            <p className="text-ink-2 mb-8 max-w-2xl">
              听一遍，跟读两句，再做阅读。一周只钉一两个语法点。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {LOST && (
                <Link
                  href={LOST.href ?? "/curriculum/stories/2"}
                  className="bg-card border border-line rounded-2xl p-6 hover:border-accent"
                >
                  <p className="text-xs font-semibold text-accent mb-1">课文 {LOST.n}</p>
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
                  <p className="text-xs font-semibold text-accent mb-1">课文 {MRT.n}</p>
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
              看课文目录
            </Link>
          </div>
        </section>

        {/* 4. Features */}
        <section className="py-12 md:py-16 bg-paper-2">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-8">
              你每周能看见什么
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
              这半年怎么排
            </h2>
            <p className="text-ink-2 mb-8 max-w-2xl">
              12 周一个周期。先摸底，再决定从哪一周开始。
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

            <h3 className="font-serif font-semibold text-xl mb-3">进度表示例</h3>
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
                    <td className="px-3 py-2">小李</td>
                    <td className="px-3 py-2">P4</td>
                    <td className="px-3 py-2">124 / 目标 130</td>
                    <td className="px-3 py-2">however / therefore</td>
                  </tr>
                  <tr className="border-t border-line">
                    <td className="px-3 py-2">小张</td>
                    <td className="px-3 py-2">中一</td>
                    <td className="px-3 py-2">语法 82%</td>
                    <td className="px-3 py-2">although 后面不要再加 but</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mb-8">开通后，你看到的是自己孩子的对错。</p>

            <div className="grid md:grid-cols-2 gap-6">
              <OfficialClip
                videoId="Mqf8E8vwEg0"
                title="政府小学的一天（小一）"
                credit="Kranji Primary School《A Day In a Life of A P1 Student》"
                hideWeeklyHomework
              />
              <OfficialClip
                videoId="ZjGt6r8XSTg"
                title="CEQ 口语长这样"
                credit="Cambridge English《A2 Key for Schools Speaking test》"
                hideWeeklyHomework
              />
            </div>
          </div>
        </section>

        {/* 6. Pricing */}
        <section className="py-12 md:py-16 bg-paper-2" id="pricing">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">多少钱</h2>
            <p className="text-ink-2 mb-8 max-w-2xl">先试、先摸底，觉得对再交。</p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <article className="bg-card border border-line rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent mb-1">试学</p>
                <h3 className="font-serif text-2xl font-semibold mb-2">免费</h3>
                <p className="text-sm text-ink-2 mb-4">打开就能做，不用登录。小学英语 / 中学英语 / 数学各有试学周。</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>Lost and Found 试学视频</li>
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
                <p className="text-xs font-semibold text-accent mb-1">12 周作业</p>
                <h3 className="font-serif text-2xl font-semibold mb-2">2680 元</h3>
                <p className="text-sm text-ink-2 mb-4">付给顾问。一个周期大约十二周。</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>本年级周作业（课文 + 语法焦点 + 读写）</li>
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
            <p className="text-sm text-ink-2">
              PayNow 94594601，或微信转账。考点报名费另付。
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
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              进校第一天，要能开口
            </h2>
            <p className="text-ink-2 mb-6">会排队、会问、会答。别只会填空。</p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/trial/A2"
                className="inline-flex px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full"
              >
                先看试学
              </Link>
              <Link href="/assess" className="inline-flex px-6 py-3.5 border border-accent rounded-full font-semibold">
                按年级摸底
              </Link>
            </div>
            <h3 className="font-serif font-semibold text-xl mb-2">留下微信，顾问联系您</h3>
            <p className="text-sm text-ink-2 mb-4">也可以先转 PayNow 94594601。微信号只用来回复你。</p>
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
