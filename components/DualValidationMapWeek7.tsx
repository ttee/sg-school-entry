export default function DualValidationMapWeek7() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>周末打算 / Weekend Plans</strong>：Mei 讲这个周末家人的计划（去 East Coast Park、去 Bedok Mall、做作业、拜访祖父母）。焦点是<strong>be going to 表示打算和计划</strong>（I am going to visit…; She is going to buy…; We are going to cycle…）。中文用「要/打算」不变形，孩子会说 I going to the library / I go to swim tomorrow / Tomorrow I go library（用裸现在时）。
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
                <strong>阅读</strong><br />Mei 讲周末打算 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 的邮件（We're going to visit East Coast Park, Dad is going to take photos, I'm going to buy a book, Jun Wei is going to come, We're going to do homework），做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：be going to
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 5</strong><br />语法选择填空（6 gaps）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练 be going to 结构（are going to go, is going to bring, am going to take, are going to go, are going to have, are going to come），短文完形 6 题全聚焦主谓一致 + going to + 动词原形
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 40–60 词，讲周末打算
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲周末计划（I am going to visit the library, My family is going to have lunch, We are going to play games），至少用 2 次 be going to
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
          Cambridge A2 Key for Schools Language Specifications (Handbook 2020, Verb forms section) includes <em>be going to</em> for future plans and intentions. Reading & Writing Part 5 tests grammatical forms. Part 6 writing requires candidates to produce basic texts communicating simple information using common future forms.
        </p>
      </div>
    </div>
  );
}
