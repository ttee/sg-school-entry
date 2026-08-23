import Link from "next/link";
import { notFound } from "next/navigation";
import CurriculumNav from "@/components/CurriculumNav";
import StoryLessonFlow from "@/components/StoryLessonFlow";
import { getSession } from "@/lib/session";
import { isAdminRole } from "@/lib/access";
import { CONTEXT_TOPICS } from "@/lib/curriculum/singapore-context";
import { buildStoryLesson } from "@/lib/curriculum/story-lesson";
import {
  ALL_STORIES,
  SAMPLE_SCRIPTS,
  THEMES,
  WEEK_MAPS,
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
  const path = Object.values(WEEK_MAPS).find((m) => m.weeks.includes(story.n));

  return (
    <>
      <CurriculumNav current="/curriculum/stories" />
      <p className="text-xs font-semibold text-accent mb-1">
        课文 {story.n} · {theme?.title}
        {path ? ` · ${path.label}` : ""}
      </p>
      <h1 className="font-serif font-semibold text-3xl mb-2">{story.title}</h1>
      <p className="text-ink-2 mb-2">{story.focus}</p>
      <p className="text-xs text-accent mb-2">{lesson.grammar.titleZh}</p>
      <p className="text-sm text-ink-2 mb-6 max-w-2xl leading-relaxed">{lesson.sceneZh}</p>

      <StoryLessonFlow lesson={lesson} />

      <div className="flex flex-wrap gap-3 mt-10 mb-8">
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
            相关试学
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
          12 周路径
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
