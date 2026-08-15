export default function DualValidationMapWeek6() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>放学与周末 / After School and Weekends</strong>：Mei 和 Priya 讲放学时间、课外活动、周末计划。焦点是<strong>时间介词 at / in / on</strong>（at 7 o'clock / at night / at the weekend, in the morning / in July, on Monday / on 12 September）。中文用「在」表达所有时间（在周一、在早上、在七点），孩子会说 in Monday、on morning、in 7 o'clock。
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
                <strong>阅读</strong><br />Mei 和 Priya 聊放学与周末 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 的故事（school ends at 2 p.m., ballet on Monday, piano at 4 o'clock, go to Botanic Gardens on Saturday, in the morning, at the weekend），做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：时间介词 at/in/on
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 4 / Part 5</strong><br />语法选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练时间介词（at 7 o'clock, at night, at the weekend, in the morning, in July, in 2026, on Monday, on 15 September），短文完形选择题（20 题全聚焦 at/in/on）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 50–70 词，讲放学活动
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲放学后做什么、周末计划（finish at 2 p.m., CCA on Tuesday, piano in the afternoon, go swimming at 4 o'clock, visit grandparents on Sunday），练时间介词 at/in/on
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />对话：Priya 讲她的周末安排<br /><span className="text-xs text-muted">（先读脚本，音频稍后）</span>
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力对话</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读对话脚本（Priya 和 Mei 聊周末：Saturday morning 画画课、at 10 o'clock 开始、in the afternoon 去图书馆、on Sunday 和家人去 Gardens by the Bay、at night 做作业），做 5 道选择题；音频稍后更新
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟讲放学和周末
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Speaking Part 1</strong><br />个人信息问答
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲放学后活动和周末（I finish school at..., I have CCA on..., I play piano in..., I go swimming at..., On Saturday I...），练时间介词 at/in/on，AI 会盯住介词用法
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
          Reading & Writing Part 5 tests grammatical forms including prepositions. Writers of the tasks are guided by the Language Specifications. The A2 Key / Key for Schools vocabulary list (August 2025) includes time words and prepositions: at 7 o'clock, in the morning, on Monday, half past, a.m./p.m.
        </p>
      </div>
    </div>
  );
}
