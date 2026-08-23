import Link from "next/link";
import { notFound } from "next/navigation";
import CurriculumNav from "@/components/CurriculumNav";
import { getSession } from "@/lib/session";
import { isAdminRole } from "@/lib/access";
import { CONTEXT_TOPICS } from "@/lib/curriculum/singapore-context";
import {
  ALL_STORIES,
  CYCLE,
  SAMPLE_SCRIPTS,
  THEMES,
  getStory,
} from "@/lib/curriculum/storylines";

export function generateStaticParams() {
  return ALL_STORIES.map((s) => ({ n: String(s.n) }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const story = getStory(Number(n));
  if (!story) notFound();
  const session = await getSession();
  const isReviewer =
    isAdminRole(session?.user?.role) || Boolean(session?.user?.subscribed);
  const theme = THEMES.find((t) => t.stories.some((s) => s.n === story.n));
  const script = SAMPLE_SCRIPTS.find((s) => s.n === story.n);
  const contextTopic = CONTEXT_TOPICS.find((t) => t.story === story.n);
  const dialogue =
    script?.lines ??
    contextTopic?.dialogue.map((d) => ({ who: d.who, say: d.line }));
  const prev = getStory(story.n - 1);
  const next = getStory(story.n + 1);

  return (
    <>
      <CurriculumNav current="/curriculum/stories" />
      <p className="text-xs font-semibold text-accent mb-1">
        课文 {story.n} · {theme?.title}
      </p>
      <h1 className="font-serif font-semibold text-3xl mb-2">{story.title}</h1>
      <p className="text-ink-2 mb-6">{story.focus}</p>
      <p className="text-sm text-ink-2 mb-6 max-w-2xl">
        这一页是课文提纲（语法、词汇、开口句）。完整每周作业在{" "}
        <Link href="/learn" className="text-accent font-semibold">
          作业列表
        </Link>
        里，不在这一页解锁。
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-card border border-line rounded-xl p-4 text-sm">
          <p className="font-semibold">Grammar (1–2 items)</p>
          <p className="text-ink-2 mt-1">{story.grammar}</p>
        </div>
        <div className="bg-card border border-line rounded-xl p-4 text-sm">
          <p className="font-semibold">Exam fit</p>
          <p className="text-ink-2 mt-1">{story.exam}</p>
        </div>
      </div>

      <h2 className="font-serif font-semibold text-lg mb-2">Singapore vocab</h2>
      <p className="text-sm mb-6">{story.vocab.join(" · ")}</p>

      <h2 className="font-serif font-semibold text-lg mb-2">Oracy (say these)</h2>
      <ul className="list-disc pl-5 text-sm mb-8 space-y-1">
        {story.oracy.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>

      {dialogue && dialogue.length > 0 && (
        <section className="bg-card border border-accent/40 rounded-2xl p-5 mb-8">
          <h2 className="font-serif font-semibold text-lg mb-1">开口对话</h2>
          {script?.scene && <p className="text-sm text-muted mb-3">{script.scene}</p>}
          <div className="space-y-2 text-sm">
            {dialogue.map((l, i) => (
              <p key={i}>
                <strong>{l.who}:</strong> {l.say}
              </p>
            ))}
          </div>
        </section>
      )}

      <h2 className="font-serif font-semibold text-lg mb-3">本课四步</h2>
      <ol className="space-y-2 mb-8 text-sm">
        {CYCLE.map((c) => (
          <li key={c.step}>
            <strong>{c.step}.</strong> {c.do}
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap gap-3 mb-8">
        {isReviewer ? (
          <Link
            href="/learn"
            className="px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold"
          >
            打开全部作业
          </Link>
        ) : (
          story.href && (
            <Link
              href={story.href}
              className="px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold"
            >
              打开试学
            </Link>
          )
        )}
        {contextTopic && (
          <Link
            href="/curriculum/context"
            className="px-5 py-2.5 border border-accent rounded-full font-semibold"
          >
            语境：{contextTopic.zhScene}
          </Link>
        )}
        {!isReviewer && (
          <Link
            href="/#contact"
            className="px-5 py-2.5 border border-line rounded-full font-semibold"
          >
            问顾问开通作业
          </Link>
        )}
        <Link href="/curriculum/stories" className="px-5 py-2.5 border border-line rounded-full">
          课文目录
        </Link>
      </div>

      <p className="text-sm text-muted">
        {prev && (
          <Link href={`/curriculum/stories/${prev.n}`} className="text-accent mr-4">
            ← {prev.n}. {prev.title}
          </Link>
        )}
        {next && (
          <Link href={`/curriculum/stories/${next.n}`} className="text-accent">
            {next.n}. {next.title} →
          </Link>
        )}
      </p>
    </>
  );
}
