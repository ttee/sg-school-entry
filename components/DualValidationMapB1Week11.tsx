export default function DualValidationMapB1Week11() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是 Mei 迟到后发现很多事情<strong>已经发生了</strong>：公车已开走、食堂已卖完、图书馆已关门。焦点是过去完成时 past perfect（had + 过去分词），用来表示两个过去动作中较早的那个（When I arrived, the bus had left），纠正中文式错误（When I arrived, the bus left / I have finished before she came / I already eat before she come）。
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
                <strong>阅读</strong><br />Mei 迟到后发现很多事情已经发生的邮件 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题（Reading Part 3 or similar）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 讲述迟到一整天的经历：公车已开走 (the bus had left)、老师已擦掉板书 (Ms Tan had erased it)、食堂已卖光 (had sold out)、图书馆已关门 (had closed)
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：past perfect vs simple past 填空（6 gaps）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空（Reading Part 5: Multiple-choice cloze）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练习 had + 过去分词（had been taken, had started, had finished）vs 一般过去时（planned, arrived），区分哪个动作更早发生
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，讲述迟到经历
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右（Writing Part 1）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件讲述一次迟到经历，必须用至少两次 past perfect 说明到达时某事已经发生（When I got there, my friends had already left; The shop had closed before I arrived）
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
            B1 PET for Schools Handbook（语法规范：past perfect 列于 language specifications）
          </a>
        </p>
        <p className="text-xs text-ink-2">
          📖 <strong>MOE 课程对照：</strong>本周练习用 past perfect 描述过去某时间点之前已完成的动作，属于 MOE English Language Syllabus 2020 中 Grammar 部分对时态系统的理解（具体单元编号未在眼前文档中确认，故标注为一般对照）。
        </p>
      </div>
    </div>
  );
}
