export default function DualValidationMapWeek5() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>运动会 / Sports Day</strong>：Mei 和 Priya 参加学校运动会，Mei 写日记记录 Priya 跑 100 米金牌、自己跳远、接力赛。焦点是<strong>比较级和最高级</strong>（bigger than / the biggest；more + 多音节形容词）。中文用「比」和「最」，孩子会说 more bigger、more cheap、he is tall than me。
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
                <strong>阅读</strong><br />Mei 运动会日记 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 周五参加学校运动会（Priya was faster than most students, the tallest runner, My jump was better than first, the girl was the best），做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：比较级和最高级
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 4</strong><br />语法选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练比较级（better than, bigger than, faster than, more tired, more fun）和最高级（the fastest, the strongest, the most exciting, the best），短文完形选择题（17 题全聚焦比较级/最高级）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 50–70 词，讲学校运动
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲学校运动会或体育活动、谁最擅长运动（faster than, the best, more exciting than），练比较级和最高级
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />通知：Ms Tan 讲运动会安排<br /><span className="text-xs text-muted">（先读脚本，音频稍后）</span>
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力通知</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读通知脚本（Ms Tan 宣布运动会下周五、穿house T恤、带水壶和帽子、第一项是 100 米、12 点颁奖），做 5 道选择题；音频稍后更新
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟比较自己和同学
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Speaking Part 1</strong><br />个人信息问答
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲学校运动或活动，比较自己和朋友（I am faster than... / She is the best at...），练比较级和最高级，AI 会盯住 -er/-est 和 more/most 的用法
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
