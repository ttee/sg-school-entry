export default function DualValidationMapSmathWeek27() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 27 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）代数式和公式第二小节：interpreting notations（解读代数符号）。第 26 周已完成 5.1（using letters to represent numbers），本周只教 5.2 interpreting notations（解读代数符号）。本周不教 5.3 evaluation（代入数值求值），5.4 translation（实际问题翻译），5.5 nth term，5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周题目
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                考试题型
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                内容对应官方大纲
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />5 道选择题（ab means a × b、3y means 3 × y、a² means a × a、3(x + y) means 3 × (x + y)、which is correct reading of a² not 2a）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae</strong><br />5.2 interpreting notations<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 26 周已完成 5.1（using letters to represent numbers），本周只教 5.2 interpreting notations（解读代数符号）。本周不教 5.3 evaluation（代入数值求值），5.4 translation（实际问题翻译），5.5 nth term，5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。官方 5.2 wording（官方术语，逐字引用）：'interpreting notations: • ab as a × b • a/b as a ÷ b or a × 1/b • a² as a × a, a³ as a × a × a, a²b as a × a × b • 3y as y + y + y or 3 × y • 3(x + y) as 3 × (x + y) • (3 + y)/5 as (3 + y) ÷ 5 or 1/5 × (3 + y)'。本周方法：Teach what each notation means（教每个符号代表什么）。ab means a × b（不是 a + b）。a/b means a ÷ b。a² means a × a（不是 2a）。a³ means a × a × a（不是 3a）。a²b means a × a × b。3y means 3 × y（官方也提 y + y + y，但优先用 3 × y；不是 3 + y）。3(x + y) means 3 × (x + y)（不是 3x + y）。(3 + y)/5 means (3 + y) ÷ 5。用友好的字母（friendly letters，如 a, b, x, y, k, n）。本周不代入数值 do not substitute values（那是 5.3 evaluation，下周内容）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（a/b means a ÷ b、a³ means a × a × a、a²b means a × a × b、(3 + y)/5 means (3 + y) ÷ 5、which is NOT correct reading of 3y (3 + y)、5x means 5 × x、which working correctly reads a² (a × a)、2(a + b) means 2 × (a + b)）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.2 interpreting notations</strong><br />解读代数符号（official notation meanings from MOE 2020 G3 Sec 1 syllabus）：ab means a × b（不是 a + b）。a/b means a ÷ b（也可以写成 a × 1/b，但本周不要同时提供两个作为不同选项）。a² means a × a（不是 2a）。a³ means a × a × a（不是 3a）。a²b means a × a × b（不是 2ab）。3y means 3 × y（官方也提 y + y + y，但本周选择题不要同时提供两个作为不同选项，优先用 3 × y；不是 3 + y, y³, 3 − y）。3(x + y) means 3 × (x + y)（不是 3x + y；3x + 3y 是展开 expansion，属于 5.8 后续内容，本周不教）。(3 + y)/5 means (3 + y) ÷ 5。本周化石 fossil errors：reading 3y as 3 + y（把 3y 读成 3 + y，正确是 3 × y）；reading ab as a + b（把 ab 读成 a + b，正确是 a × b）；reading a² as 2a（把 a² 读成 2a，正确是 a × a）；reading a³ as 3a（把 a³ 读成 3a，正确是 a × a × a）；reading 3(x + y) as 3x + y (dropping the bracket)（把 3(x + y) 读成 3x + y，丢掉括号，正确是 3 × (x + y)）。唯一性 unique keys：两个选项不能是同一个意思。Do not offer both 3 × y and y + y + y as two options when both are official readings of 3y（不要同时提供 3 × y 和 y + y + y 作为两个选项，因为官方大纲列出两个都对；选一个正确 prefer 3 × y，其他选项做成错误如 3 + y, y³）。Do not offer both a ÷ b and a × 1/b as two options for a/b。Do not offer both 3 × (x + y) and 3x + 3y as two options this week（本周不要同时提供，因为 3x + 3y 是 expansion 5.8 后续内容；正确是 3 × (x + y)，化石 3x + y 是错的）。本周只教 5.2 interpreting notations。下周 5.3 evaluation（代入数值求值）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 3y means 3 × y、a² means a × a、3(x + y) means 3 × (x + y) and explain why 3x + y is wrong）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.2 interpreting notations</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范（interpreting notations）：<br />例 1（3y means 3 × y, skill 5.2）：What does 3y mean? Show your working.<br />Solution: ① The notation 3y means 3 multiplied by y. ② 3y = 3 × y. (Note: 3y does NOT mean 3 + y.) Answer: 3y means 3 × y.<br />例 2（a² means a × a, skill 5.2）：What does a² mean? Show your working.<br />Solution: ① The notation a² means a squared. ② a² = a × a. (Note: a² does NOT mean 2a or 2 × a.) Answer: a² means a × a.<br />例 3（3(x + y) means 3 × (x + y), skill 5.2）：What does 3(x + y) mean? Show your working.<br />Solution: ① The notation 3(x + y) means 3 multiplied by the sum (x + y). ② 3(x + y) = 3 × (x + y). (Note: 3(x + y) does NOT mean 3x + y. That would drop the bracket. 3x + y means 3 × x plus y, which is different. Also, 3x + 3y is the expanded form, which is skill 5.8 simplifying; we don't teach that this week.) Answer: 3(x + y) means 3 × (x + y).<br />关键步骤：Step 1: Read the notation carefully (仔细看符号). Step 2: Write what it means (写出它的意思：3y means 3 × y; ab means a × b; a² means a × a; a³ means a × a × a; a/b means a ÷ b; 3(x + y) means 3 × (x + y); (3 + y)/5 means (3 + y) ÷ 5). Step 3: State what it does NOT mean (陈述它不代表什么：3y does NOT mean 3 + y; a² does NOT mean 2a; 3(x + y) does NOT mean 3x + y). Step 4: If the question asks \"Is Wei correct?\", answer Yes or No and explain (如果题目问"Wei 正确吗？"，回答 Yes 或 No 并解释).<br />化石：Reading 3y as 3 + y（把 3y 读成 3 + y，正确是 3 × y）。Reading ab as a + b（把 ab 读成 a + b，正确是 a × b）。Reading a² as 2a（把 a² 读成 2a，正确是 a × a）。Reading a³ as 3a（把 a³ 读成 3a，正确是 a × a × a）。Reading 3(x + y) as 3x + y (dropping the bracket)（把 3(x + y) 读成 3x + y，丢掉括号，正确是 3 × (x + y)；3x + y 是不同的表达式，它是 3 × x plus y，不等于 3 multiplied by the whole sum (x + y)。3x + 3y 是 expansion 5.8 后续内容，本周不教）。本周教 N5 的 5.2（interpreting notations，解读代数符号）。本周不教 5.3 evaluation，5.4 translation，5.5 nth term，5.6–5.8 simplifying。这些是后续周次内容。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方来源：</strong>
          <a
            href="https://www.seab.gov.sg/aeis/test-details/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            SEAB AEIS Test Details (2026年7月1日更新)
          </a>
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>官方考试时长与题型：</strong>Part 1 Multiple-choice questions (34 items) 30 分钟 + Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items) 1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions: candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer.
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周是样本：</strong>本周作业不是完整 34 + 20 + 10–15 题，不是 2 小时 15 分钟正式试卷。本周让孩子熟悉 Sec 1 数学卷型和格式。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.2 interpreting notations（本周只教 5.2，第 26 周已完成 5.1。5.3 evaluation 等是后续周次内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>reading 3y as 3 + y（把 3y 读成 3 + y，正确是 3 × y）；reading ab as a + b（把 ab 读成 a + b，正确是 a × b）；reading a² as 2a（把 a² 读成 2a，正确是 a × a）；reading a³ as 3a（把 a³ 读成 3a，正确是 a × a × a）；reading 3(x + y) as 3x + y (dropping the bracket)（把 3(x + y) 读成 3x + y，丢掉括号，正确是 3 × (x + y)；3x + y 是不同的表达式）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.2 interpreting notations（本周只教 5.2，解读代数符号）。官方 5.2 wording（逐字引用）：'• ab as a × b • a/b as a ÷ b or a × 1/b • a² as a × a, a³ as a × a × a, a²b as a × a × b • 3y as y + y + y or 3 × y • 3(x + y) as 3 × (x + y) • (3 + y)/5 as (3 + y) ÷ 5 or 1/5 × (3 + y)'。本周不代入数值 do not substitute values（那是 5.3 evaluation，下周内容）。用友好的字母（friendly letters，如 a, b, x, y）。不用计算器（calculators are not allowed）。唯一性 unique keys：两个选项不能是同一个意思（除非题目是"which working"）。The fossil (3y as 3 + y, ab as a + b, a² as 2a, a³ as 3a, 3(x + y) as 3x + y) must be a WRONG option（化石错误值必须作为错误选项）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。第 26 周已完成 5.1，本周只教 5.2，下周 5.3 evaluation。
        </p>
      </div>
    </div>
  );
}
