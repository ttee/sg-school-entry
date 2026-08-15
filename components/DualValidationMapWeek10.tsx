export default function DualValidationMapWeek10() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>日常作息和频率 / Everyday Routines and Frequency</strong>：Mei 写邮件讲她的学校日常作息（wake up, breakfast, bus, library, always/usually/often/sometimes/never），Priya 写作文讲她的上学日。焦点是<strong>频率副词的位置：实义动词前、be 动词后</strong>。中文「总是/经常/有时/从不」位置自由，孩子会说 I go always / I am always go / I never am late。
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
                <strong>阅读</strong><br />Mei 写邮件：学校日常作息（wake up, breakfast, bus, canteen, library，always/usually/often/sometimes/never）+ 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 的邮件（I always wake up at 6:30, I never skip breakfast, Jun Wei is always at the canteen, I am never late），做选择题，理解频率副词在句子里的意思
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形 6 题：频率副词位置（实义动词前 / be 后）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 5</strong><br />语法选择填空（6 gaps）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练频率副词的正确位置。实义动词前：I always walk, She always comes, She often helps；be 动词后：I am never late, She is never angry, I am sometimes tired。6 题全聚焦词序，不是 35 道杂题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 40–60 词，讲日常作息
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲你的学校日常作息（I always wake up at 7:00, I usually take the bus, I am never late），至少用 2 个不同的频率副词，位置必须正确
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方依据：</strong>
          <a
            href="https://www.cambridgeenglish.org/Images/669045-cambridge-english-key-and-key-for-schools-handbook-for-teachers.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            A2 Key for Schools Handbook for teachers
          </a>
          {" · "}
          <a
            href="https://www.cambridgeenglish.org/exams-and-tests/key/exam-format"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            A2 Key for Schools 考试格式
          </a>
        </p>
        <p className="text-xs text-ink-2">
          Cambridge A2 Key for Schools Language Specifications (Handbook 2020, section on adverbs and adverbial phrases) includes adverbs of frequency: <em>always, usually, often, sometimes, never</em>. Reading & Writing Part 5 tests grammatical forms including word order. Part 6 writing requires candidates to produce basic texts using appropriate adverbs to describe routines and habits. MOE English Language Syllabus 2020 general strand emphasizes accurate use of common adverbs (exact can-do code unverified for frequency adverbs specifically).
        </p>
      </div>
    </div>
  );
}
