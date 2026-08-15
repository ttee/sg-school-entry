export default function DualValidationMapB1Week5() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>同学描述 / Describing People</strong>：Mei 和 Priya 分别遇到新同学和新老师，描述人物特点时必须用定语从句。焦点是<strong>关系代词</strong>（who / which / that），区分人用 who / that，物用 which / that。说和写都要练习限定性定语从句（defining relative clauses）。
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
                <strong>阅读</strong><br />新同学误会和澄清的故事 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题（Reading Part 3）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 和 Priya 描述新同学、新老师时用 who / which / that 引出定语从句的故事，练习理解 the boy who sits..., the teacher who teaches..., the book which has...
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：who / which / that 区分使用
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空（Reading Part 5: Multiple-choice cloze）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练习关系代词选择：先行词是人用 who / that，先行词是物用 which / that，并掌握定语从句在句中的位置
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，描述一位你喜欢的同学或老师
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右（Writing Part 1）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，描述一位你喜欢的同学或老师，必须用定语从句补充说明，例如 She's a teacher who really listens, He's the friend who helped me...
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />同学在图书馆讨论小组作业分工 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力对话</strong><br />5 道选择题（Listening Part 2: Multiple choice）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听 Mei 和 Priya 在图书馆讨论小组作业，对话中用 who / which 描述组员和任务分工，做 5 道三选一题
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟描述一位你认识的人
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>个人陈述</strong><br />1-2 分钟独白（Speaking Part 2: Extended turn）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                描述一位同学或老师，用定语从句说明特点：He's the classmate who always helps me, She's a teacher who explains things clearly，AI 会盯住关系代词的使用
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
            B1 PET for Schools Handbook（语法规范：第 17 页 relative clauses）
          </a>
        </p>
      </div>
    </div>
  );
}
