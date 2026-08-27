export default function DualValidationMap() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        试学周按 <strong>A2 Key for Schools</strong> 题型来练。课文是<strong>失物招领 / Lost and Found</strong>：Aunty Tan 问 "Is this your white water bottle with the pink flower?"，Mei 答 "Yes, Aunty! That is my white water bottle!" 本周盯住冠词 a / an / the。
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
                <strong>阅读</strong><br />Mei 的失物招领邮件 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，5 道三选一
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Mei 写给表姐的邮件，讲 Auntie Tan 帮她找回水壶的经过，做 8 道选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />冠词 a / an / the
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 4 & 5</strong><br />完形填空（选择 + 开放式）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                本周盯住冠词 a / an / the：第一次说到用 a / an，已经认出来或大家都知道用 the
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 50–70 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写一封邮件，我们练 50–70 词作为拉伸，熟悉考试邮件格式
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />课表公告 + 选择题（额外练习，非微课）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Listening Part 3</strong><br />对话，5 道三选一
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听老师公告明天的课表，做 5 道三选一题；官方考试听两遍，我们的播放器可重听
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟谈失物招领 + 练对话
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Speaking Part 1</strong><br />事实性和个人信息问答
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲失物招领经历，练对话 "Is this your white water bottle?" / "Yes, Aunty! That is my white water bottle!"
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
