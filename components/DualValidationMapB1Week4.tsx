export default function DualValidationMapB1Week4() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>学校消息传递 / School Messages</strong>：同学转述老师的话、班长通知、家长叮嘱。焦点是<strong>间接引语</strong>（said that / told me that）和<strong>时态后移</strong>（will → would, can → could）。说和写都要区分 said 和 told，注意时态后移。
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
                <strong>阅读</strong><br />学生群聊传错消息引发误会 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题（Reading Part 3）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读学生因误读消息导致连锁反应的故事，练读懂 Ms Tan said..., Jun Wei told me that..., 以及梳理多层转述的因果关系
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：said that / told me that / will → would / can → could
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空（Reading Part 5: Multiple-choice cloze）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练间接引语中 said (that) 和 told sb (that) 的区别，以及时态后移（will → would, can → could, is → was）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，转述老师和同学说的话
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右（Writing Part 1）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给缺席的同学，转述老师和同学说的作业、考试、活动信息，用 The teacher said (that)..., My classmate told me (that)..., 时态要后移
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />学生食堂对话转述老师通知 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力对话</strong><br />5 道选择题（Listening Part 2: Multiple choice）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听 Mei 和 Priya 在食堂聊天，Mei 转述 Ms Chen 的通知（图书馆装修、食堂时间），做 5 道三选一题；先读脚本（音频稍后）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟转述一条学校消息
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>个人陈述</strong><br />1-2 分钟独白（Speaking Part 2: Extended turn）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲老师或同学告诉你的一条学校消息，用 She said (that)..., He told me (that)..., 时态后移（will → would），AI 会盯住 said/told 用法和时态
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
            href="https://www.moe.gov.sg/primary/curriculum/syllabus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            MOE 小学课程大纲
          </a>
        </p>
      </div>
    </div>
  );
}
