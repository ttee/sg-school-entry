export default function DualValidationMapB1Week3() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>环境行动 / Environment Action</strong>：新加坡学校环保项目、HDB 社区回收、Town Council 垃圾分类、Eco Fair 展示。焦点是<strong>被动语态</strong>（Plastic is recycled, bins are collected）和<strong>情态动词建议</strong>（should/ought to + 动词原形）。先看官方 Bloobin Recycle Right 影片，再做作业。
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
                <strong>阅读</strong><br />Bedok HDB 环保项目学生记叙 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读中三学生在 Bedok HDB 做回收项目的经历，练读懂问题、解决方案、成果、推断因果
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：is recycled / should reduce / ought to bring
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练被动语态（Plastic is recycled, bins are collected）和情态动词建议（should/ought to + 动词原形），一个完整短文完形
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，给朋友讲如何做回收项目
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，建议他如何做回收项目，用被动语态（Bins should be placed, posters could be displayed）和情态动词（should, ought to, could, must）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />学校 Green Week 广播通知 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力对话</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听学校 Eco Club 的 Green Week 通知（纸张回收、节电、可重用袋、减食物浪费），做 5 道三选一题；官方考试听两遍，我们的播放器可重听
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~2 分钟讲家庭环保习惯
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>个人陈述</strong><br />2 分钟独白
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲想让家人开始的环保习惯，用被动语态（Water can be saved, plastic should be reduced）和情态动词（should/ought to + 动词原形），AI 会盯住被动和情态动词
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
