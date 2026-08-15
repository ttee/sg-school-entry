export default function DualValidationMapB1Week1() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>旅行与文化 / Travel and Culture</strong>：Gardens by the Bay 学习之旅。焦点是<strong>现在完成时经历用法</strong>（Have you ever been…? Have you visited…?）和<strong>比较级</strong>（more impressive, bigger, -er than）。
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
                <strong>阅读</strong><br />Gardens by the Bay 学习之旅游记 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读学生写的 Gardens by the Bay 学习之旅游记，练读懂游记细节、推断意图。<span className="text-accent font-medium">（先看上方 VisitSingapore 官方 Cloud Forest 影片）</span>
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：Have you ever been… / more impressive than
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练现在完成时经历（Have you ever visited…?）和比较级（more/less + adj, -er than），一个完整短文完形
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100 词，讲旅行经历
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲一次旅行或参观，用 Have you ever…? 和比较级描述感受
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />Sentosa Heritage Trail 导游公告 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力公告</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听导游 Janice 在 Sentosa Heritage Trail 入口公告行程安排、规则、时间地点，做 5 道三选一题；官方考试听两遍，我们的播放器可重听
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟讲旅行经历和比较
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>个人陈述</strong><br />1 分钟独白
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲一次旅行或参观经历，用 Have you ever…? 开头，用比较级描述感受（more interesting, better than…），AI 会盯住完成时和比较级
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
