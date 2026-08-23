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

const ROADMAP = [
  { m: "头两个月", t: "先开口", d: "校园课文，冠词和时态。一周只改一个中国孩子常犯的错。" },
  { m: "第三、四个月", t: "对准试卷", d: "阅读、完形、短写作、跟读。小学这条线是为了拿 CEQ 成绩单。" },
  { m: "第五、六个月", t: "限时", d: "小学数学，或中学英语加数学。按申请年级的前一级来练。" },
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

        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              学了用不上，英语就停在那里
            </h2>
            <p className="text-ink-2 mb-8 max-w-3xl leading-relaxed">
              很多学英语的孩子进步不了，不是因为没背单词，而是学了用不上：没有真实的语言环境，课上的话到了食堂、小息、地铁对不上。本站每一课都放在新加坡语境里。学的就是这里要听、要说的英语。
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6">
              {CONTEXT_TOPICS.map((t) => (
                <div
                  key={t.id}
                  className="bg-card border border-line rounded-xl p-4"
                >
                  <p className="text-xs font-semibold text-accent mb-1">{t.zhScene}</p>
                  <p className="text-sm font-semibold mb-1">{t.enTitle}</p>
                  <p className="text-xs text-muted">{t.vocab[0].en}</p>
                </div>
              ))}
            </div>
            <Link
              href="/trial"
              className="inline-flex px-6 py-3 border border-accent rounded-full font-semibold"
            >
              打开试学课
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
                  href="/trial"
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
                <div
                  key={t.id}
                  className="bg-paper-2 border border-line rounded-xl p-4 text-sm"
                >
                  <p className="font-semibold mb-1">{t.title}</p>
                  <p className="text-muted text-xs">{t.stories.length} 课</p>
                </div>
              ))}
            </div>
            <Link
              href="/trial"
              className="inline-flex px-6 py-3 border border-accent rounded-full font-semibold"
            >
              打开试学课
            </Link>
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

            <h3 className="font-serif font-semibold text-xl mb-2">先看官方怎么用、怎么考</h3>
            <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
              一段是新加坡政府小学里英语怎么用；一段是 CEQ 口语怎么考。本站课文对着这两件事来。
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  食堂、小息、排队。政府小学一天里听到的英语，就是孩子要用上的语境。本站课文从这些场景抽。
                </p>
                <OfficialClip
                  videoId="Mqf8E8vwEg0"
                  title="政府小学的一天（小一）"
                  credit="Kranji Primary School《A Day In a Life of A P1 Student》"
                  hideWeeklyHomework
                />
              </div>
              <div>
                <p className="text-sm text-ink-2 leading-relaxed mb-3">
                  剑桥 A2 Key 口语：说明情况、互相问答、听懂对方。小学 CEQ 要过的，就是这一口，不是背单词表。
                </p>
                <OfficialClip
                  videoId="ZjGt6r8XSTg"
                  title="CEQ 口语长这样"
                  credit="Cambridge English《A2 Key for Schools Speaking test》"
                  hideWeeklyHomework
                />
              </div>
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
            <p className="text-ink-2 mb-6">会排队、会问、会答。</p>
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
