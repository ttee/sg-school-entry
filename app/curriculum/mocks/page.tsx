import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { MOCKS } from "@/lib/curriculum/mocks";

export default function MocksIndex() {
  return (
    <>
      <CurriculumNav current="/curriculum/mocks" />
      <h1 className="font-serif font-semibold text-3xl mb-3">限时模拟卷</h1>
      <p className="text-ink-2 mb-8 max-w-2xl leading-relaxed">
        原创题，OAS 四选一。时间与题量是工作室缩小版，用来练速度和涂卡习惯，不是剑桥/SEAB 真卷。
        小学官方 CEQ 还含听力、写作、口语；中学 AEIS 英语还有作文。
      </p>
      <div className="space-y-4">
        {MOCKS.map((m) => (
          <Link
            key={m.id}
            href={`/curriculum/mocks/${m.id}`}
            className="block bg-card border border-line rounded-2xl p-5 hover:border-accent"
          >
            <p className="text-xs font-semibold text-accent mb-1">
              {m.minutes} 分钟 · {m.items.length} 题
              {m.targetCes != null ? ` · 目标 CES ${m.targetCes}` : ""}
            </p>
            <h2 className="font-serif font-semibold text-lg mb-1">{m.titleZh}</h2>
            <p className="text-sm text-ink-2">{m.blurb}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
