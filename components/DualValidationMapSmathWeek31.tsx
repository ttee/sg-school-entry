export default function DualValidationMapSmathWeek31() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 31 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）代数式和公式第六小节：addition and subtraction of linear expressions（一次式的加减）。第 26–30 周已完成 5.1–5.5（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions、translation of simple real-world situations into algebraic expressions、recognising and representing patterns/relationships by finding an algebraic expression for the nth term），本周只教 5.6 addition and subtraction of linear expressions（一次式加减）。本周不教 5.7 simplification of linear algebraic expressions such as −2(3x − 5) + 4x（一次代数式化简，如 −2(3x − 5) + 4x），5.8 use of brackets and extraction of common factors（括号的使用和提取公因数）。这些是后续周次内容。
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
                <strong>选择题</strong><br />5 道选择题（(2x+3)+(x+5)、(3x+4)−(x+1)、(5x−2)+(3x+7)、(4x+6)−(2x−3)、which working is correct for (3x+4)−(x+1)）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae</strong><br />5.6 addition and subtraction of linear expressions<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 26–30 周已完成 5.1–5.5（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions、translation of simple real-world situations into algebraic expressions、recognising and representing patterns/relationships by finding an algebraic expression for the nth term），本周只教 5.6 addition and subtraction of linear expressions（一次式加减，by collecting like terms 合并同类项）。本周不教 5.7 simplification of linear algebraic expressions such as −2(3x − 5) + 4x（一次代数式化简），5.8 use of brackets and extraction of common factors（括号的使用和提取公因数）。这些是后续周次内容。官方 5.6 wording（官方术语，逐字引用）：'addition and subtraction of linear expressions'。本周方法：Add or subtract two linear expressions by collecting like terms（通过合并同类项来加减两个一次式）。(2x + 3) + (x + 5) = 3x + 8。(3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3（减法时，改变第二个式子中每一项的符号 change the sign of every term in the expression after a minus）。(5x − 2) + (3x + 7) = 8x + 5。(4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9（注意减法后的负号变正号）。Friendly integers. No calculator. Do not expand a bracket times a binomial this week（本周不教括号乘以二项式）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（mix of + and −、one with − (2x − 3) so the inner minus flips、one 5x − (2x + 3)、one "which is NOT"、one "which working is correct"）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.6 addition and subtraction of linear expressions</strong><br />一次式加减，通过合并同类项（official content from MOE 2020 G3 Sec 1 syllabus）。Method: Add or subtract two linear expressions by collecting like terms（合并同类项）。(2x + 3) + (x + 5) = 3x + 8（加法：直接合并同类项）。(3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3（减法：改变第二个括号中每一项的符号 change the sign of every term in the expression after a minus）。(5x − 2) + (3x + 7) = 8x + 5。(4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9（关键：减号后面的 −3 变成 +3）。Friendly integers. No calculator. 本周化石 fossil errors：subtracting only the first term（只减第一项）：(3x + 4) − (x + 1) → 2x + 4 or 2x + 5（错误：应该是 2x + 3）；forgetting to change the sign of the second term after a minus（忘记改变第二项符号）：(4x + 6) − (2x − 3) → 2x + 3（错误：应该是 2x + 9，因为 −(−3) = +3）；adding coefficients of unlike terms（把不同类项的系数相加）：x + 3 → 4x（错误）。唯一性 unique keys：两个选项不能是同一个表达式（Two options must not be the same expression）。Fossil value must be a WRONG option（化石值必须是错误选项）：2x + 4 when the answer is 2x + 3；2x + 3 when the answer is 2x + 9。Do not offer both 3x + 8 and (2x + 3) + (x + 5) as two options（不要同时提供 3x + 8 和 (2x + 3) + (x + 5) 作为两个选项）。Check every minus: change the sign of every term after −（检查每个减号：改变减号后面每一项的符号）。本周教 N5 的 5.6（addition and subtraction of linear expressions，一次式加减）。第 26–30 周已完成 5.1–5.5，本周只教 5.6 一次式加减。本周不教 5.7 simplification，5.8 brackets and common factors。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求加两个一次式、减两个一次式并改变符号、减法时第二个式子中有负号的情况，并说明化石错误）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.6 addition and subtraction of linear expressions</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范（addition and subtraction of linear expressions）：<br />例 1（(2x + 3) + (x + 5)，skill 5.6 addition）：Simplify (2x + 3) + (x + 5). Show your working.<br />Solution: ① Collect the x terms: 2x + x = 3x. ② Collect the constant terms: 3 + 5 = 8. ③ Answer: 3x + 8. (Note: We add the coefficients of like terms. 2x + x = 3x, not 2x. 3 + 5 = 8.)<br />例 2（(3x + 4) − (x + 1)，skill 5.6 subtraction）：Simplify (3x + 4) − (x + 1). Show your working.<br />Solution: ① Change the sign of every term in the bracket after the minus: (3x + 4) − (x + 1) = 3x + 4 − x − 1. ② Collect the x terms: 3x − x = 2x. ③ Collect the constant terms: 4 − 1 = 3. ④ Answer: 2x + 3. (Note: When subtracting, change the sign of EVERY term in the second bracket: −(x + 1) = −x − 1, not −x + 1. Common fossil: writing 2x + 4 or 2x + 5. The correct answer is 2x + 3.)<br />例 3（(4x + 6) − (2x − 3)，skill 5.6 subtraction with inner minus）：Simplify (4x + 6) − (2x − 3). Show your working.<br />Solution: ① Change the sign of every term in the bracket after the minus: (4x + 6) − (2x − 3) = 4x + 6 − 2x + 3. ② Collect the x terms: 4x − 2x = 2x. ③ Collect the constant terms: 6 + 3 = 9. ④ Answer: 2x + 9. (Note: When subtracting, −(2x − 3) = −2x + 3. The minus sign changes −3 to +3. Common fossil: writing 2x + 3 instead of 2x + 9 by forgetting to change the sign of −3.)<br />关键步骤：Step 1: When subtracting, change the sign of EVERY term in the expression after the minus（减法时，改变减号后面每一项的符号）. Step 2: Collect like terms（合并同类项）. Step 3: State the final answer（陈述最终答案）.<br />化石：Subtracting only the first term（只减第一项）：(3x + 4) − (x + 1) → 2x + 4 or 2x + 5（错误，应该是 2x + 3）。Forgetting to change the sign of the second term after a minus（忘记改变第二项符号）：(4x + 6) − (2x − 3) → 2x + 3（错误，应该是 2x + 9）。Adding coefficients of unlike terms（把不同类项的系数相加）：x + 3 → 4x（错误）。本周教 N5 的 5.6（addition and subtraction of linear expressions，一次式加减）。本周不教 5.7 simplification such as −2(3x − 5) + 4x，5.8 brackets and common factors。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.6 addition and subtraction of linear expressions（本周只教 5.6，第 26–30 周已完成 5.1–5.5。5.7 simplification of linear algebraic expressions such as −2(3x − 5) + 4x、5.8 use of brackets and extraction of common factors 等是后续周次内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>subtracting only the first term（只减第一项）：(3x + 4) − (x + 1) → 2x + 4 or 2x + 5（错误，应该是 2x + 3）；forgetting to change the sign of the second term after a minus（忘记改变第二项符号）：(4x + 6) − (2x − 3) → 2x + 3（错误，应该是 2x + 9）；adding coefficients of unlike terms（把不同类项的系数相加）：x + 3 → 4x。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.6 addition and subtraction of linear expressions（本周只教 5.6，一次式加减）。官方 5.6 wording（逐字引用）：'addition and subtraction of linear expressions'。本周方法：Add or subtract two linear expressions by collecting like terms（通过合并同类项来加减两个一次式）。Change the sign of every term in the expression after a minus（减法时，改变减号后面每一项的符号）。(2x + 3) + (x + 5) = 3x + 8。(3x + 4) − (x + 1) = 3x + 4 − x − 1 = 2x + 3。(5x − 2) + (3x + 7) = 8x + 5。(4x + 6) − (2x − 3) = 4x + 6 − 2x + 3 = 2x + 9（注意 −(−3) = +3）。Friendly integers. No calculator（calculators are not allowed）。Do not expand a bracket times a binomial this week（本周不教括号乘以二项式）。唯一性 unique keys：两个选项不能是同一个表达式（Two options must not be the same expression）。Fossil value must be a WRONG option（化石值必须是错误选项）。Do not offer both 3x + 8 and (2x + 3) + (x + 5) as two options（不要同时提供化简后的结果和原始表达式作为两个选项）。Check every minus: change the sign of every term after −（检查每个减号：改变减号后面每一项的符号）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。第 26–30 周已完成 5.1–5.5，本周只教 5.6，下周 5.7 simplification。
        </p>
      </div>
    </div>
  );
}
