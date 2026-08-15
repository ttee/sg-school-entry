export default function DualValidationMapWeek2() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>学校生活 / School Life</strong>：Mei 的美术课、合唱团、雨天体育课。焦点是<strong>现在进行时 vs 一般现在时</strong>（I am painting now 正在做 vs I have Art on Tuesday 习惯）和 <strong>like + -ing</strong>（I like singing，不是 like sing）。
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
                <strong>阅读</strong><br />Mei 的美术课日记 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 写的美术课和 CCA 日记，讲她正在画狮城、每周二有合唱团，做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：I am drawing / I like painting / every Tuesday
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 4</strong><br />语法选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练现在进行时（am/is/are + -ing）vs 一般现在时（习惯），like/enjoy + -ing，短文完形选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 50–70 词，讲学校活动
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲正在做的活动或喜欢的科目/CCA，练 like + -ing 和 now vs every day
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />老师公告校运会 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力公告</strong><br />单人说明，5 道三选一
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听 PE 老师 Mr Krishnan 公告下周五校运会安排（时间、服装、比赛项目），做 5 道三选一题；官方考试听两遍，我们的播放器可重听
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟对比 now vs every day
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Speaking Part 1</strong><br />个人信息问答
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲现在正在做什么 vs 平时每天做什么，练 like/enjoy + -ing，AI 会盯住进行时和 -ing 形式
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方链接：</strong>
          <a
            href="https://www.cambridgeenglish.org/exams-and-tests/key/exam-format"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            Cambridge A2 Key for Schools 考试格式
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
