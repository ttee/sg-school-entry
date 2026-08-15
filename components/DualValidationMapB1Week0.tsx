export default function DualValidationMapB1Week0() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        试学周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>转校适应 / School Transition</strong>：Chen Wei 从中文学校转到英文学校的经历。焦点是<strong>现在完成时 vs 一般过去时</strong>（have been here for six months / went last year）。
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
                <strong>阅读</strong><br />Finding My Voice in English（Chen Wei 转校经历）+ 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读学生写的转校经历文章，练读懂时间线、情感变化、具体建议
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：have been / went / have lived
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练现在完成时（I have been here for...）vs 一般过去时（I went yesterday），一个完整短文完形
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />论坛建议帖 100 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写论坛回复给新生，用 have been / have learned 描述持续经验，用 went / started 说明确过去事件
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />Ms Lim 年级主任欢迎致辞 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力公告</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听 Ms Lim 在 Ang Mo Kio Secondary School 讲学校支持措施、学习时段、CCA 安排，做 5 道三选一题；官方考试听两遍，我们的播放器可重听
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~2 分钟讲克服学习挑战
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>个人陈述</strong><br />2 分钟独白
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲克服英语学习挑战的经历，用 have been / have improved 描述持续改善，用 felt / started 说过去某个时间点，AI 会盯住完成时和过去时
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
