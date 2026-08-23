import CurriculumNav from "@/components/CurriculumNav";
import { A2_SPEAKING, B1_SPEAKING, LISTENING_NOTES } from "@/lib/curriculum/speaking";

function Block({
  data,
}: {
  data: typeof A2_SPEAKING | typeof B1_SPEAKING;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-serif font-semibold text-2xl mb-1">{data.exam}</h2>
      <p className="text-sm text-muted mb-4">{data.time}</p>
      <div className="space-y-4 mb-6">
        {data.parts.map((p) => (
          <div key={p.name} className="bg-card border border-line rounded-2xl p-5">
            <h3 className="font-semibold mb-1">{p.name}</h3>
            <p className="text-sm text-ink-2 mb-3">{p.do}</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {p.prompts.map((pr) => (
                <li key={pr}>{pr}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-line rounded-xl overflow-hidden bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="text-left px-3 py-2">量表</th>
              <th className="text-left px-3 py-2">顾问看什么</th>
            </tr>
          </thead>
          <tbody>
            {data.rubric.map((r) => (
              <tr key={r.criterion} className="border-t border-line">
                <td className="px-3 py-2 font-semibold">{r.criterion}</td>
                <td className="px-3 py-2 text-ink-2">{r.look}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm font-semibold mb-2">跟读 / 对练</p>
      <ul className="list-disc pl-5 text-sm text-ink-2 space-y-1">
        {data.drill.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </section>
  );
}

export default function SpeakingPage() {
  return (
    <>
      <CurriculumNav current="/curriculum/speaking" />
      <h1 className="font-serif font-semibold text-3xl mb-3">CEQ 口语与听力</h1>
      <p className="text-ink-2 mb-8 max-w-2xl">
        量表条目来自剑桥公开评分维度（语法词汇、语篇、语音、互动）。新加坡口音可以，语法要标准。
        试学周的故事视频用于开口，不替代正式口试。
      </p>
      <Block data={A2_SPEAKING} />
      <Block data={B1_SPEAKING} />
      <h2 className="font-serif font-semibold text-xl mb-3">听力对照</h2>
      <div className="space-y-3">
        {LISTENING_NOTES.map((n) => (
          <div key={n.paper} className="bg-card border border-line rounded-2xl p-5">
            <p className="font-semibold">{n.paper}</p>
            <p className="text-sm text-ink-2 mt-1">{n.studio}</p>
            <p className="text-sm text-muted mt-1">{n.parts}</p>
          </div>
        ))}
      </div>
    </>
  );
}
