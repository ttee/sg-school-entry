export default function DualValidationMapWeek8() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>学校规则和能做什么 / School Rules and What We Can Do</strong>：Ms Tan 发通知讲图书馆、食堂、游泳池 CCA 的规则，Mei 写作文讲图书馆的规则和她能做什么。焦点是<strong>can（能力和许可）和 must（必须、义务）</strong>。中文用「能/必须」不变形，孩子会说 I can to swim / I must to go / I can swimming / I can swim?（错误问句）。
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
                <strong>阅读</strong><br />Ms Tan 发通知：图书馆、食堂、游泳池规则 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Ms Tan 的通知（You can borrow 3 books, You must return books on time, You can ask the librarian, You must queue up, You can swim in the lanes, You must bring your towel），做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：can / must
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 5</strong><br />语法选择填空（6 gaps）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练 can / must 结构（can borrow, must be quiet, can ask, cannot find, can keep, can read），短文完形 6 题全聚焦 can / must + 动词原形（无 to）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 40–60 词，讲学校规则
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲学校规则和课后能做什么（I can play basketball, We must wear our uniform, I can go to the library），至少用 1 次 can 和 1 次 must
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
          Cambridge A2 Key for Schools Language Specifications (Handbook 2020, Verb forms section) includes modal verbs <em>can</em> (ability / permission) and <em>must</em> (obligation). Reading & Writing Part 5 tests grammatical forms. Part 6 writing requires candidates to produce basic texts communicating simple information using common modal verbs.
        </p>
      </div>
    </div>
  );
}
