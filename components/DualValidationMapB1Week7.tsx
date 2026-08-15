export default function DualValidationMapB1Week7() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>对比和转折 / Contrast</strong>：Mei 讲述运动会遇到下雨，计划改变但仍然顺利进行。描述对比情况时必须正确使用 although / even though + 从句 和 despite / in spite of + 名词或 -ing 形式。焦点是对比连接词的结构，区分后面接从句（although）还是接名词（despite），不混淆 although + but 或 despite of。
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
                <strong>阅读</strong><br />Mei 讲运动会遇雨的邮件 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题（Reading Part 3 or similar）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 描述运动会遇到下雨但仍然进行的邮件，看她用 although / despite 表达对比和转折，理解计划改变时如何表达
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：although / despite 填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空（Reading Part 5: Multiple-choice cloze）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练习 although / even though + 从句 vs despite / in spite of + 名词/-ing，区分错误形式（although + but / despite of / despite + 从句）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，描述计划改变的一天
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右（Writing Part 1）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，描述因天气或意外情况导致计划改变的一天，必须用 although / even though 至少一次、despite / in spite of 至少一次，表达对比
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
            B1 PET for Schools Handbook（语法规范：第 16 页 connecting words 包含 although, even though, despite, in spite of）
          </a>
        </p>
        <p className="text-xs text-ink-2">
          📖 <strong>MOE 课程对照：</strong>本周练习用 although / despite 表达对比和转折，属于 MOE English Language Syllabus 2020 中 Grammar 部分对连接词和句子结构的理解（具体单元编号未在眼前文档中确认，故标注为一般对照）。
        </p>
      </div>
    </div>
  );
}
