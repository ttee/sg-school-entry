export default function DualValidationMapWeek11() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>地点描述 / Describing Places</strong>：Ms Tan 写通知讲失物招领和运动会集合地点（water bottle on the desk, pencil case under the chair, meet at the gate, sit in the shelter），Priya 写作文讲她的教室布局。焦点是<strong>地点介词 in / on / at 的正确使用</strong>。中文「在」一个字，孩子会说 in the bus / on the classroom / at the table（想说 in）/ in the wall。
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
                <strong>阅读</strong><br />Ms Tan 写通知：失物招领 + 运动会集合地点（bottle on the desk, bag under the chair, meet at the gate, sit in the shelter）+ 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Ms Tan 的通知（water bottle on my desk, pencil case under the chair, meet at the school gate, sit in the shelter），做选择题，理解地点介词的意思
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形 6 题：地点介词（in 封闭空间 / on 表面 / at 地点点 / under / between）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 5</strong><br />语法选择填空（6 gaps）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练地点介词的正确使用。in 封闭空间：on the second floor（楼层用 on）, in the classroom；on 表面：at the front, on the wall；between 两者之间：between Mei and Jun Wei；under 下面：under our chairs；on 表面：on the desk。6 题全聚焦地点介词，不是 35 道杂题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 40–60 词，讲集合地点和教室位置
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲你在哪里见面（We can meet at the school gate），你的教室在哪里（My classroom is on the second floor, in Building A），你坐在哪里（I sit next to the window），必须用 in / on / at 各至少一次表示地点（不是时间）
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
          Cambridge A2 Key for Schools Language Specifications (Handbook 2020, section on prepositions) includes prepositions of place: <em>in, on, at, under, next to, between, behind, in front of</em>. Reading & Writing Part 5 tests grammatical forms including prepositions. Part 6 writing requires candidates to produce basic texts using appropriate prepositions to describe locations. MOE English Language Syllabus 2020 general strand emphasizes accurate use of common prepositions of place (exact can-do code unverified for this specific set).
        </p>
      </div>
    </div>
  );
}
