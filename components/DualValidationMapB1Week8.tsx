export default function DualValidationMapB1Week8() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>加强描述 / Intensifiers</strong>：Mei 讲述一个特别忙碌或特别累的周六，用 so 和 such 让描述更生动。焦点是 so + 形容词 和 such (+ a/an) + 形容词 + 名词，区分 so 后面不能直接加名词，such 后面必须有名词。
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
                <strong>阅读</strong><br />Mei 讲忙碌周六的邮件 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题（Reading Part 3 or similar）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 描述学校音乐会彩排、困在学校、室内游戏的邮件，看她用 so / such 强调累、饿、无聊、开心等感受
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：so / such 填空（6 gaps）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空（Reading Part 5: Multiple-choice cloze）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练习 so + 形容词 vs such a/an + 形容词 + 名词 vs such + 形容词 + 不可数/复数，区分错误形式（so a / so + 名词 / such + 形容词 alone）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，描述特别的一天
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右（Writing Part 1）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，描述特别好或特别累的一天，必须用 so + 形容词至少一次、such (+ a/an) + 形容词 + 名词至少一次，让描述更生动
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
            B1 PET for Schools Handbook（语法规范：第 16 页 intensifiers 包含 so, such, too, enough）
          </a>
        </p>
        <p className="text-xs text-ink-2">
          📖 <strong>MOE 课程对照：</strong>本周练习用 so / such 强化描述，属于 MOE English Language Syllabus 2020 中 Grammar 部分对形容词和加强词的理解（具体单元编号未在眼前文档中确认，故标注为一般对照）。
        </p>
      </div>
    </div>
  );
}
