export default function DualValidationMapSecWeek10() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 10 周按 <strong>AEIS-Secondary Sec 1 English</strong> 卷型样本来练。这是 AEIS 中学英语，<strong>不是 CEQ</strong>。Wei 在 Riverside Secondary 第一次消防演习（alarm / leave bags / walk don't run / stairs / assembly point on the field / class register / instructions a listener needs）的故事，练理解 + 语法/词汇。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周作业
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                考试题型
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                孩子练到什么
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解</strong><br />Fire Drill at Riverside Secondary + 5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Comprehension</strong><br />基于 2 篇文章的 15 道 MCQ（官方）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读中学生第一次消防演习的场景（alarm rings / Mr Lim: leave bags, walk don't run / corridor too crowded / stairs wide enough for two lines / assembly point on the field / duty teacher guides / class register / Jun Wei late from toilet / principal: you were fast enough and calm enough / instructions a listener needs），做 5 道理解题。官方正式卷有 2 篇文章共 15 题，本周是样本。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法/词汇</strong><br />8 道选择题，练 too + adj（太…不能）vs adj + enough（足够…可以）化石
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Language Use</strong><br />Comprehension cloze 15 题 + Vocabulary 10 题 + Grammar 10 题（官方）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练 too + adj（太…不能）vs adj + enough（足够…可以）。如果意思是「超过需要/不可能」（The corridor was too crowded to move quickly），正确答案是 too（too crowded / too slow / too late / too loud），enough 不出现或明显错误。如果意思是「足够达到需要」（The staircase was wide enough for two lines），正确答案是 enough（wide enough / quiet enough / fast enough / large enough），too 不出现或明显错误。每个空只有一个正确选项。禁止：too enough, enough too, very enough。不能同时让 too 和 enough 都对。例：The corridor was too crowded. ✓ The staircase was wide enough. ✓ The field was large enough. ✓ The alarm was too loud. ✓。官方共 35 道 MCQ，本周练 8 道样本。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />2 个本周题目选 1 个，写 200–300 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Writing (Sec 1)</strong><br />2 个题目，选写 1 篇，200–300 词（官方）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练 Sec 1 写作格式。本周题目：A Fire Drill at School 或 Why Fire Drills Are Important。Sec 2 是 4 题 250–350 词，Sec 3 是 4 题 300–400 词（本周不练那两个级别）。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方来源：</strong>
          <a
            href="https://www.seab.gov.sg/aeis/test-details/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            SEAB AEIS Test Details (2026年7月1日更新)
          </a>
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>官方考试时长：</strong>Part 1 Writing + Part 2 Comprehension & Language Use = 共 2 小时 10 分钟。Part 2 共 50 道 MCQ（Comprehension 15 + Comprehension cloze 15 + Vocabulary 10 + Grammar 10）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周是样本：</strong>本周作业不是完整 50 题，不是 2 小时 10 分钟正式试卷。本周让孩子熟悉题型和格式。
        </p>
        <p className="text-xs text-ink-2">
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。例如申请 Sec 3 入学 → 需熟悉 Sec 2 内容（官方 SEAB/MOE 同页说明）。本周针对 Sec 1 申请者，对应 Sec 1 前一级内容水平。
        </p>
      </div>
    </div>
  );
}
