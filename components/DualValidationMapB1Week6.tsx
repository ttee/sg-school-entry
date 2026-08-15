export default function DualValidationMapB1Week6() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>回忆过去习惯 / Past Habits</strong>：Priya 和 Mei 回忆小学低年级时的生活习惯，描述过去常做的事（现在不做了）时必须用 used to + 动词原形。焦点是 <strong>used to</strong> 表示过去习惯，区分肯定 used to / 否定 didn't use to，不混淆 be used to + -ing。
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
                <strong>阅读</strong><br />Priya 和 Mei 回忆低年级生活的邮件 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题（Reading Part 3 or similar）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Priya 描述过去习惯的邮件，看她用 used to / didn't use to 说以前常做的事和不做的事，对比过去和现在
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：used to / didn't use to 填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空（Reading Part 5: Multiple-choice cloze）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练习 used to + 动词原形 vs 错误形式（use to / used go / didn't used to / am used to），区分否定 didn't use to（use 不带 d）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，描述小时候的习惯
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右（Writing Part 1）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，描述小学一年级放学后常做的事，必须用 used to 至少两次、didn't use to 至少一次，对比过去和现在
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方链接：</strong>
          <a
            href="https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/exam-format"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            Cambridge B1 Preliminary for Schools 考试格式
          </a>
          {" · "}
          <a
            href="https://www.cambridgeenglish.org/Images/preliminary-schools-2020-handbook-for-teachers.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            B1 PET for Schools Handbook（语法规范：第 16 页 used to 表过去习惯和状态）
          </a>
        </p>
        <p className="text-xs text-ink-2">
          📖 <strong>MOE 课程对照：</strong>本周练习用 used to 描述过去习惯和状态，属于 MOE English Language Syllabus 2020 中 Grammar 部分对时态和动词形式的理解（具体单元编号未在眼前文档中确认，故标注为一般对照）。
        </p>
      </div>
    </div>
  );
}
