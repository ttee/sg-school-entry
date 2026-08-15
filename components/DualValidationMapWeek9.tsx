export default function DualValidationMapWeek9() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>周末爱好和喜欢做什么 / Weekend Hobbies and What We Like Doing</strong>：Mei 写邮件讲家人的周末爱好（swimming, reading, drawing, cooking），Priya 写作文讲家人不同的爱好。焦点是<strong>like / love / hate / enjoy + -ing</strong>。中文「喜欢」后直接加动词，孩子会说 I like swim / I like to swimming / I enjoy to read。
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
                <strong>阅读</strong><br />Mei 写邮件：周末爱好（swimming, reading, drawing, cooking）+ 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 的邮件（I love swimming, I enjoy reading, My mum enjoys drawing, My dad enjoys cooking），做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：like / love / hate / enjoy + -ing
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 5</strong><br />语法选择填空（6 gaps）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练 like/love/hate/enjoy + -ing 结构（I enjoy painting, She loves playing, He enjoys playing, She hates jogging, She hates waiting, We like reading），短文完形 6 题全聚焦 verb + -ing
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 40–60 词，讲课后喜欢做什么
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲课后喜欢做什么（I like playing basketball, I enjoy reading, I love swimming），至少用 like/love/enjoy/hate + -ing 2 次
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
          Cambridge A2 Key for Schools Language Specifications (Handbook 2020, Verb forms section) includes <em>like / love / hate / enjoy + -ing</em> for expressing likes and dislikes. Reading & Writing Part 5 tests grammatical forms. Part 6 writing requires candidates to produce basic texts communicating simple information using common verb patterns for expressing preferences.
        </p>
      </div>
    </div>
  );
}
