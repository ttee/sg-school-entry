import Link from "next/link";
import OfficialClip from "@/components/OfficialClip";
import LandingNav from "@/components/LandingNav";
import LandingEnquiry from "@/components/LandingEnquiry";
import { THEMES } from "@/lib/curriculum/storylines";
import { CONTEXT_TOPICS } from "@/lib/curriculum/singapore-context";

export const metadata = {
  title: "狮城入学 · 过 CEQ 和 AEIS",
  description:
    "专为有意向入读新加坡政府学校的家庭打造。用食堂、小息、失物招领这些新加坡场景上课，从容应对 CEQ、AEIS 入学考。",
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
    body: "你要知道今天错了哪一题，下周改哪一个习惯。进度用中文就能看懂。",
  },
];

const PILLARS = [
  {
    href: "/curriculum/speaking",
    titleZh: "跟读开口",
    body: "食堂、小息、失物招领。每课对着新加坡这一幕开口，不是背单词表。",
  },
  {
    href: "/assess",
    titleZh: "做完就知道错在哪",
    body: "P2 到中三，英语和数学各有一份摸底。交卷后逐题看，中文写清为什么错。",
  },
  {
    href: "/curriculum/mocks",
    titleZh: "限时练手",
    body: "小学按 CEQ 的语言点出题，中学按 AEIS 英语卷的题型练速度。",
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
    titleZh: "小学英语在新加坡考 CEQ",
    body: "现在小学入学，英语用剑桥 CEQ 成绩单，数学考 AEIS。人在新加坡，这两件事都能排上。",
  },
  {
    titleZh: "华文有底，英语要补上",
    body: "孩子中文不吃亏。真正卡人的是课室英语。我们把时间花在这里。",
  },
];

const HABITS = [
  {
    titleZh: "早点摸底",
    body: "小学英语成绩要赶申请窗口。先摸底，再定申请几年级。",
    href: "/assess",
    cta: "先做摸底",
  },
  {
    titleZh: "每天听告示",
    body: "MRT 喇叭、诊所叫号屏、组屋楼下告示。Please mind the gap 比美国课文先用上。",
    href: "/curriculum/notices",
    cta: "广播和告示",
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
    tag: "想来新加坡读小学",
    title: "先过 CEQ，再考 AEIS 数学",
    body: "英语冲剑桥 CEQ，数学对准 AEIS。来新加坡是为了每天泡在英语里，学得更快。本站用校园场景陪着练。",
    next: "打开小学试学",
    href: "/trial/A2",
  },
  {
    tag: "人已经在新加坡",
    title: "开口要快",
    body: "早会、食堂、小息，孩子这周就要听懂。先把生活场景和摸底做了，再定申请几年级。",
    next: "先看这些词",
    href: "/curriculum/context",
  },
  {
    tag: "申请中学",
    title: "作文、理解语法、再加数学",
    body: "英语写一篇，再做理解语法；数学不给计算器。按前一年级的内容来。本站用中学校园场景陪着练。",
    next: "打开中学试学",
    href: "/trial/SEC",
  },
];

const CHALLENGES = [
  {
    titleZh: "位子有限",
    body: "热门政府学校每年就那么多国际学生名额。CEQ 和 AEIS 要赶申请窗口。",
  },
  {
    titleZh: "准证、考试、政府学位分开看",
    body: "私立学校是语言环境和申请学生准证的路，不是终点。政府学校要过 CEQ / AEIS。准证以 ICA 为准。",
  },
  {
    titleZh: "头三个月最懵",
    body: "hawker centre、HDB、mind the gap。这些我们课上就练。",
  },
];

const FAQS = [
  {
    q: "一定要来新加坡吗？",
    a: "来了学得更快。入读私立学校，是为了申请学生准证、每天泡在新加坡英语里。终点是 CEQ 和 AEIS，不是私立学校本身。本站把食堂、小息、失物招领做成课，人在本地听得到，网上对着练。准证以 ICA 为准。",
  },
  {
    q: "我英语不好，能帮孩子吗？",
    a: "能。对错、说明、报名表都是中文。孩子做英文题，你看中文解释。有问题微信找顾问。",
  },
  {
    q: "这跟普通网课有什么不一样？",
    a: "课文从新加坡的食堂、小息、地铁、告示来。孩子若在本地，白天听到的就是课上的话。进度你用中文就能看见。",
  },
  {
    q: "过了 CEQ / AEIS 就一定有政府学校学位吗？",
    a: "不一定。学位和准证是教育部、移民局的事。我们把该练的练熟。先看试学，再跟顾问谈怎么来新加坡备考。",
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
                狮城入学
              </p>
              <h1 className="font-serif font-semibold text-3xl md:text-5xl leading-tight tracking-tight mb-4">
                专为有意向入读新加坡政府学校的家庭打造
              </h1>
              <p className="text-ink-2 mb-5 max-w-xl leading-relaxed">
                帮助孩子破除语言障碍，从容应对 CEQ、AEIS 入学考。
              </p>
              <ul className="space-y-3 mb-6 max-w-xl text-sm text-ink-2 leading-relaxed">
                <li>
                  <strong className="text-ink">用新加坡语境学。</strong>
                  课文从食堂点餐、小息（recess）、鸡饭、失物招领（Lost and Found）、地铁告示来。孩子在本地听得到，网站上对着练。
                </li>
                <li>
                  <strong className="text-ink">精准匹配考纲。</strong>
                  小学组：冲刺剑桥 CEQ 英语认证，同步对接新加坡数学。中学组：系统备战 AEIS 英语写作、阅读理解与语法词汇，全方位备战数学试题。
                </li>
                <li>
                  <strong className="text-ink">人在新加坡学得更快。</strong>
                  入读私立学校，是为了申请学生准证、每天泡在英语里。终点是 CEQ 和 AEIS。准证以 ICA 为准。
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link
                  href="/trial"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover"
                >
                  立即免费体验试学课
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-accent rounded-full font-semibold"
                >
                  咨询备考
                </Link>
              </div>
              <p className="text-sm text-ink mb-1">
                留下微信，顾问说明怎么来新加坡备考。PayNow 94594601。
              </p>
              <p className="text-xs text-muted mb-5">先看试学课。课文都从新加坡场景来。</p>
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
                  <source src="/trial/a2-w0-setup.mp4?v=sync1" type="video/mp4" />
                </video>
                <div className="bg-card p-5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                    试学课文 · 失物招领
                  </p>
                  <p className="text-sm text-ink leading-relaxed mb-4">
                    新加坡小学走廊。水瓶丢了要去 Lost and Found；柜台叫 Aunty，课本里的 teacher 用不上。
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-ink-2 leading-relaxed">
                    <div>
                      <p className="text-xs font-semibold text-ink mb-1">对准哪张考</p>
                      <p>小学 CEQ 口语就是这种日常问答：东西丢了怎么说、是不是你的、怎么道谢。</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink mb-1">看完怎么练</p>
                      <p>跟读，再选题，再写一句。本站课文都从食堂、小息、地铁、告示这些场景来。</p>
                    </div>
                  </div>
                  <Link href="/trial/A2" className="inline-flex mt-4 text-sm text-accent font-semibold">
                    打开这一课 →
                  </Link>
                </div>
              </div>
              <p className="text-xs text-muted mt-2">
                Mei 和 Priya。人在新加坡听得到这些话；网站把这一幕做成课，陪着过 CEQ。
              </p>
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
              英语上课，生活里还有华语，回国也近。真正要练的，是课室和食堂里那口英语。本站把这些场景做成课。
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
            <p className="text-sm text-muted mb-6 max-w-2xl">三种常见情况。先看课文怎么从新加坡场景来，再跟顾问谈备考。</p>
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
              先摸底，再按孩子程度排 CEQ 或 AEIS 的课。课文对着新加坡的日子来。
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
                  小学 AEIS 不再另考英语卷。英语用 CEQ 证明（P2–P4 对照 A2 Key，P5 对照 B1 Preliminary），数学考 AEIS。
                </p>
                <Link href="/小学" className="text-accent font-semibold text-sm">
                  小学试学 →
                </Link>
              </article>
              <article className="bg-card border border-line rounded-2xl p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">中学 · Sec 1–3</p>
                <h3 className="font-serif text-xl font-semibold mb-2">英语和数学都要考</h3>
                <p className="text-sm text-ink-2 mb-4">
                  中学不交 CEQ。AEIS 英语考写作、阅读理解和语言运用，共 2 小时 10 分。数学无计算器。测申请年级的前一级课纲。
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
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-2">怎么开始</h2>
            <p className="text-ink-2 mb-8 max-w-2xl">先看试学课，觉得对再谈怎么来新加坡备考。费用以顾问确认为准。</p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <article className="bg-card border border-line rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent mb-1">试学课</p>
                <h3 className="font-serif text-2xl font-semibold mb-2">免费</h3>
                <p className="text-sm text-ink-2 mb-4">看课文怎么从新加坡场景来。小学英语 / 中学英语 / 数学各有试学周。</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>失物招领这一幕</li>
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
                <p className="text-xs font-semibold text-accent mb-1">来新加坡备考</p>
                <h3 className="font-serif text-2xl font-semibold mb-2">咨询顾问</h3>
                <p className="text-sm text-ink-2 mb-4">私立学校是语言环境和学生准证的路。本站用这些语境陪着过 CEQ / AEIS。</p>
                <ul className="text-sm space-y-2 mb-6">
                  <li>学生准证路径（以 ICA 为准）</li>
                  <li>新加坡语境课文 + CEQ / AEIS</li>
                  <li>年级与程度摸底</li>
                  <li>顾问微信 · 家长中文说明</li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold"
                >
                  咨询备考
                </Link>
              </article>
            </div>
            <p className="text-sm text-ink-2">
              PayNow 94594601，或微信转账。考试报名费另计。
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
            <h3 className="font-serif font-semibold text-xl mb-2">留下微信，顾问谈备考</h3>
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
