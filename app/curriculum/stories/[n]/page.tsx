import Link from "next/link";
import { notFound } from "next/navigation";
import CurriculumNav from "@/components/CurriculumNav";
import McqPaper from "@/components/McqPaper";
import { getSession } from "@/lib/session";
import { isAdminRole } from "@/lib/access";
import { CONTEXT_TOPICS } from "@/lib/curriculum/singapore-context";
import { buildStoryLesson } from "@/lib/curriculum/story-lesson";
import {
  ALL_STORIES,
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
  const lesson = buildStoryLesson(story, theme, contextTopic, script);
  const prev = getStory(story.n - 1);
  const next = getStory(story.n + 1);

  return (
    <>
      <CurriculumNav current="/curriculum/stories" />
      <p className="text-xs font-semibold text-accent mb-1">
        课文 {story.n} · {theme?.title}
      </p>
      <h1 className="font-serif font-semibold text-3xl mb-2">{story.title}</h1>
      <p className="text-ink-2 mb-2">{story.focus}</p>
      <p className="text-xs text-accent mb-6">{story.exam}</p>

      <section className="bg-card border border-line rounded-2xl p-5 mb-8">
        <h2 className="font-serif font-semibold text-lg mb-2">这一课在练什么</h2>
        <p className="text-sm text-ink-2 leading-relaxed mb-2">{lesson.sceneZh}</p>
        <p className="text-sm text-ink leading-relaxed">{lesson.sceneEn}</p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-semibold text-lg mb-2">阅读</h2>
        <p className="text-sm text-ink-2 mb-3">先读，再在下面做题。词就是本课的词。</p>
        <div className="bg-card border border-line rounded-2xl p-5 text-sm leading-relaxed whitespace-pre-wrap">
          {lesson.reading}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-semibold text-lg mb-2">{lesson.grammar.titleZh}</h2>
        <p className="text-sm text-ink-2 mb-3">{lesson.grammar.ruleZh}</p>
        <p className="text-sm font-medium mb-4" lang="en">
          {lesson.grammar.ruleEn}
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-3">
          <div className="border border-warn-ink/30 bg-warn-bg/40 rounded-xl p-4 text-sm">
            <p className="text-xs font-semibold text-warn-ink mb-1">不要这样说</p>
            <p lang="en">{lesson.grammar.wrong}</p>
          </div>
          <div className="border border-accent/40 bg-accent/5 rounded-xl p-4 text-sm">
            <p className="text-xs font-semibold text-accent mb-1">要这样说</p>
            <p lang="en">{lesson.grammar.right}</p>
          </div>
        </div>
        <ul className="list-disc pl-5 text-sm text-ink-2 space-y-1">
          {lesson.grammar.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-semibold text-lg mb-3">词汇（会用，不只认识）</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card">
            <thead className="bg-accent/5">
              <tr>
                <th className="text-left px-3 py-2">词</th>
                <th className="text-left px-3 py-2">例句</th>
                <th className="text-left px-3 py-2">家长怎么讲</th>
              </tr>
            </thead>
            <tbody>
              {lesson.vocab.map((row) => (
                <tr key={row.word} className="border-t border-line align-top">
                  <td className="px-3 py-2 font-semibold whitespace-nowrap">{row.word}</td>
                  <td className="px-3 py-2" lang="en">
                    {row.example}
                  </td>
                  <td className="px-3 py-2 text-ink-2">{row.noteZh}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-card border border-accent/40 rounded-2xl p-5 mb-8">
        <h2 className="font-serif font-semibold text-lg mb-1">开口：跟读 / 分角色</h2>
        {lesson.dialogueScene && (
          <p className="text-sm text-muted mb-3">{lesson.dialogueScene}</p>
        )}
        <p className="text-sm text-ink-2 mb-3">孩子读英语。家长对中文提示即可。</p>
        <div className="space-y-2 text-sm">
          {lesson.dialogue.map((l, i) => (
            <p key={`${l.who}-${i}`}>
              <strong>{l.who}:</strong> <span lang="en">{l.say}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="font-serif font-semibold text-lg mb-2">练习</h2>
        <p className="text-sm text-ink-2 mb-4">五题。做完看为什么错。</p>
        <McqPaper paper={lesson.paper} />
      </section>

      <section className="bg-card border border-line rounded-2xl p-5 mb-8">
        <h2 className="font-serif font-semibold text-lg mb-2">写一句再写一段</h2>
        <p className="text-sm text-ink-2 mb-2">{lesson.writeZh}</p>
        <p className="text-sm font-medium mb-3" lang="en">
          {lesson.writeEn}
        </p>
        <p className="text-xs font-semibold text-muted mb-2">可以这样起头</p>
        <ul className="list-disc pl-5 text-sm space-y-1" lang="en">
          {lesson.starters.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 mb-8">
        {isReviewer && (
          <Link
            href="/learn"
            className="px-5 py-2.5 bg-accent text-accent-ink rounded-full font-semibold"
          >
            每周作业（批改）
          </Link>
        )}
        {story.href && (
          <Link
            href={story.href}
            className="px-5 py-2.5 border border-accent rounded-full font-semibold"
          >
            相关试学视频
          </Link>
        )}
        {contextTopic && (
          <Link
            href="/curriculum/context"
            className="px-5 py-2.5 border border-line rounded-full font-semibold"
          >
            语境：{contextTopic.zhScene}
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
