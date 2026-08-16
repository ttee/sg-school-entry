export default function DualValidationMapSecWeek7() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 7 周按 <strong>AEIS-Secondary Sec 1 English</strong> 卷型样本来练。这是 AEIS 中学英语，<strong>不是 CEQ</strong>。Wei 第一次放学（bell 铃声 / pack bag 收书包 / bus bay or MRT / wait for the bus 等车 / don't run across the road 不要跑过马路）的故事，练理解 + 语法/词汇。
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
                <strong>阅读理解</strong><br />First Dismissal at Riverside Secondary + 5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Comprehension</strong><br />基于 2 篇文章的 15 道 MCQ（官方）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读中学生第一次放学的场景（The bell rings at 1:40 / pack your bags quickly and quietly / check your desk / bus bay / duty teacher at the road / wait behind the yellow line / walk don't run to the bus door / tap student pass / road safety），做 5 道理解题。官方正式卷有 2 篇文章共 15 题，本周是样本。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法/词汇</strong><br />8 道选择题，练 if（可能）vs when（一定会发生）化石
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Language Use</strong><br />Comprehension cloze 15 题 + Vocabulary 10 题 + Grammar 10 题（官方）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练 if（可能）vs when（一定会发生）。如果事件是一定会发生的（The bell rings every day at 1:40），正确答案是 when（When the bell rings, you must pack your bags）。如果事件是可能的、不确定的（Maybe you will miss the bus, maybe not），正确答案是 if（If you miss the bus, you can take the MRT）。每个空只有一个正确选项。不能同时让 if 和 when 都对。禁止：把 if 和 when 混淆、把 when 用于不确定事件、把 if 用于一定会发生的事件。官方共 35 道 MCQ，本周练 8 道样本。
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
                练 Sec 1 写作格式。本周题目：My First Dismissal at Secondary School 或 Staying Safe After School。Sec 2 是 4 题 250–350 词，Sec 3 是 4 题 300–400 词（本周不练那两个级别）。
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
