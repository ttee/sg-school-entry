export default function DualValidationMapSmathWeek28() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 28 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）代数式和公式第三小节：evaluation of algebraic expressions and formulae（代数式求值）。第 26 周已完成 5.1（using letters to represent numbers），第 27 周已完成 5.2（interpreting notations），本周只教 5.3 evaluation（代数式求值）。本周不教 5.4 translation of real-world situations（实际问题翻译），5.5 nth term（第 n 项），5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。
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
                <strong>选择题</strong><br />5 道选择题（value of 2a when a=3、value of a² when a=3、value of 2a+1 when a=3、value of 3(a+2) when a=3、which working is correct for a² when a=3）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae</strong><br />5.3 evaluation of algebraic expressions and formulae<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 26 周已完成 5.1（using letters to represent numbers），第 27 周已完成 5.2（interpreting notations），本周只教 5.3 evaluation of algebraic expressions and formulae（代数式求值）。本周不教 5.4 translation of real-world situations（实际问题翻译），5.5 nth term（第 n 项），5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。官方 5.3 wording（官方术语，逐字引用）：'evaluation of algebraic expressions and formulae'。本周方法：Substitute a given number for the letter（代入数值求值）。If a = 3: 2a = 2 × 3 = 6（不是 2 + 3 = 5）; 2a + 1 = 2 × 3 + 1 = 7; a² = 3 × 3 = 9（不是 2 × 3 = 6）; 3(a + 2) = 3 × (3 + 2) = 3 × 5 = 15（不是 3 × 3 + 2 = 11）; a³ = 3 × 3 × 3 = 27; 5a − 2 = 5 × 3 − 2 = 13. If x = 4, y = 2: xy = 4 × 2 = 8; x + y = 4 + 2 = 6; 3(x + y) = 3 × (4 + 2) = 18; x² = 4 × 4 = 16. 用友好的整数 friendly integers（如 a=3, x=4, y=2, n=5）。不用计算器 no calculator。金额如涉及用新加坡元 S$（money in Singapore dollars S$），never 美元。本周代入数值求值 substitute and evaluate（结合 Week 27 的 notation meanings）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（value of 5x when x=2、value of x² when x=5、value of x³ when x=2、value of xy when x=3 y=4、value of 3(x+y) when x=4 y=2、value of 5a−2 when a=3、which working is correct for x² when x=4、formula cost=3n+2 when n=4）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.3 evaluation of algebraic expressions and formulae</strong><br />代数式求值（official content from MOE 2020 G3 Sec 1 syllabus）。Method: Substitute the given number for the letter（代入给定的数值）。If a = 3: 2a = 2 × 3 = 6（不是 2 + 3 = 5）; 2a + 1 = 2 × 3 + 1 = 7; a² = 3 × 3 = 9（不是 2 × 3 = 6）; 3(a + 2) = 3 × (3 + 2) = 3 × 5 = 15（不是 3 × 3 + 2 = 11，dropping the bracket）; a³ = 3 × 3 × 3 = 27; 5a − 2 = 5 × 3 − 2 = 13. If x = 4, y = 2: xy = 4 × 2 = 8; x + y = 4 + 2 = 6; 3(x + y) = 3 × (4 + 2) = 18; x² = 4 × 4 = 16. 本周化石 fossil errors：evaluating 2a as 2 + a（a=3 → 5 instead of 6）；evaluating a² as 2a（a=3 → 6 instead of 9）；evaluating 3(a + 2) as 3a + 2（a=3 → 11 instead of 15，dropping the bracket）。唯一性 unique keys：两个选项不能是同一个数值。The fossil value must be a WRONG option（化石错误值必须作为错误选项：5 when 2a=6; 6 when a²=9; 11 when 3(a+2)=15）。Do not offer both the working "2 × 3 + 1" and the final answer "7" as two separate options in the same MCQ（不要同时提供算式"2 × 3 + 1"和最终答案"7"作为两个选项，除非题目是"which working"）。本周教 N5 的 5.3（evaluation of algebraic expressions and formulae，代数式求值）。第 26 周已完成 5.1，第 27 周已完成 5.2，本周教 5.3。本周不教 5.4 translation，5.5 nth term，5.6–5.8 simplifying。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 evaluate 2a+1 when a=3、evaluate a² when a=3、evaluate 3(x+y) when x=4 y=2 and name the fossil 3x+y）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.3 evaluation of algebraic expressions and formulae</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范（evaluation of algebraic expressions）：<br />例 1（evaluate 2a+1 when a=3, skill 5.3）：Evaluate 2a + 1 when a = 3. Show your working.<br />Solution: ① Given a = 3. ② 2a + 1 = 2 × 3 + 1. ③ = 6 + 1. ④ = 7. Answer: 7. (Note: 2a means 2 × a, not 2 + a. If we wrongly evaluate 2a as 2 + a, we get 2 + 3 = 5, which is WRONG. Correct: 2a = 2 × 3 = 6, then 2a + 1 = 6 + 1 = 7.)<br />例 2（evaluate a² when a=3, skill 5.3）：Evaluate a² when a = 3. Show your working.<br />Solution: ① Given a = 3. ② a² = a × a = 3 × 3. ③ = 9. Answer: 9. (Note: a² means a × a, not 2a or 2 × a. If we wrongly evaluate a² as 2a = 2 × 3 = 6, which is WRONG. Correct: a² = 3 × 3 = 9.)<br />例 3（evaluate 3(x+y) when x=4 y=2, skill 5.3）：Evaluate 3(x + y) when x = 4 and y = 2. Show your working.<br />Solution: ① Given x = 4 and y = 2. ② 3(x + y) = 3 × (x + y) = 3 × (4 + 2). ③ = 3 × 6. ④ = 18. Answer: 18. (Note: 3(x + y) means 3 × (x + y), not 3x + y. If we drop the bracket and evaluate 3x + y = 3 × 4 + 2 = 14, which is WRONG. Correct: 3(x + y) = 3 × (4 + 2) = 3 × 6 = 18.)<br />关键步骤：Step 1: Write "Given a = ..." (陈述已知：Given a = 3). Step 2: Substitute the number into the expression (代入数值：2a + 1 = 2 × 3 + 1). Step 3: Follow order of operations BODMAS / PEMDAS (遵循运算顺序：先括号 Brackets，再乘除 × ÷，后加减 + −). Step 4: Calculate step by step (逐步计算：2 × 3 = 6, then 6 + 1 = 7). Step 5: State the answer clearly (清楚陈述答案：Answer: 7). Step 6: If the question asks "Is Wei correct?", identify the fossil error and explain (如果题目问"Wei 正确吗？"，识别化石错误并解释：Wei evaluates 3(x + y) as 3x + y, dropping the bracket. Wei is NOT correct. 3(x + y) = 3 × (x + y) = 3 × 6 = 18, not 3x + y = 14).<br />化石：Evaluating 2a as 2 + a（a=3 → 2+3=5 instead of 2×3=6）。Evaluating a² as 2a（a=3 → 2×3=6 instead of 3×3=9）。Evaluating 3(a + 2) as 3a + 2 (dropping the bracket)（a=3 → 3×3+2=11 instead of 3×(3+2)=15）。本周教 N5 的 5.3（evaluation of algebraic expressions and formulae，代数式求值）。本周不教 5.4 translation of real-world situations（实际问题翻译），5.5 nth term，5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.3 evaluation of algebraic expressions and formulae（本周只教 5.3，第 26 周已完成 5.1，第 27 周已完成 5.2。5.4 translation 等是后续周次内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>evaluating 2a as 2 + a（a=3 → 5 instead of 6）；evaluating a² as 2a（a=3 → 6 instead of 9）；evaluating 3(a + 2) as 3a + 2 (dropping the bracket)（a=3 → 11 instead of 15）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.3 evaluation of algebraic expressions and formulae（本周只教 5.3，代数式求值）。官方 5.3 wording（逐字引用）：'evaluation of algebraic expressions and formulae'。本周方法：Substitute a given number for the letter（代入给定数值），如 Week 27 notation 所示。If a = 3: 2a = 2 × 3 = 6; 2a + 1 = 7; a² = 3 × 3 = 9; 3(a + 2) = 3 × (3 + 2) = 15; a³ = 27; 5a − 2 = 13. If x = 4, y = 2: xy = 8; x + y = 6; 3(x + y) = 18; x² = 16. 用友好的整数 friendly integers。不用计算器（calculators are not allowed）。唯一性 unique keys：两个选项不能是同一个数值（除非题目是"which working"）。The fossil (2a as 2+a=5; a² as 2a=6; 3(a+2) as 3a+2=11) must be a WRONG option（化石错误值必须作为错误选项）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。第 26 周已完成 5.1，第 27 周已完成 5.2，本周只教 5.3，下周 5.4 translation。
        </p>
      </div>
    </div>
  );
}
