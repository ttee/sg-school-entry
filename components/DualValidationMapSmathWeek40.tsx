export default function DualValidationMapSmathWeek40() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 40 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）Equations and inequalities 第二小节：7.2 solving linear equations in one variable（解一元一次方程）。本周只教 N7.2 solving linear equations in one variable：解 ax + b = c 和 ax + b = cx + d 型方程，通过对两边同时做同样的操作（加减乘除）直到 x 单独在一边。Friendly integers so x is an integer（友好整数，x 的解是整数）。Check by substitution after solving（解出来后用代入的办法检验）。Example: 2x + 1 = 7 → 2x + 1 − 1 = 7 − 1 → 2x = 6 → x = 3. Check: 2(3) + 1 = 7 ✓。本周不教 N7.3 fractional equations（分式方程，例如 x/3 + (x−2)/4 = 3），不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。
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
                <strong>选择题</strong><br />5 道选择题（Solve 2x + 1 = 7 → x = 3、Wei solves 3x − 2 = x + 6 correct step、Solve 4x + 3 = 15 → x = 3、Aisha solves 5x − 1 = 14 first step、check x = 3 in 2x + 1 = 7 by substitution）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities</strong><br />7.2 solving linear equations in one variable<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />本周只教 N7.2 solving linear equations in one variable。本周不教 N7.3 fractional equations、N7.4 formulating equations to solve problems。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（Solve 3x + 2 = 11 → x = 3、Wei solves 2x − 5 = 3 working、Solve 6x − 4 = 2x + 12 → x = 4、check x = 4 in 4x + 5 = 21 by substitution、Solve 7x + 3 = 24 first step、x + 8 = 12 → x = 4、5x = 3x + 10 → x = 5、Aisha says subtract 1 from both sides is correct）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N7.2 solving linear equations in one variable</strong><br />解一元一次方程（official content from MOE 2020 G3 Sec 1 syllabus）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（Solve 2x + 1 = 7 show working and check、Wei solves 3x − 2 = x + 6 show working and check x = 4、Aisha solves 4x + 5 = 21 show working check and explain why 4x = 21 is wrong）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N7.2 solving linear equations in one variable</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方来源：</strong>
          <a
            href="https://www.moe.gov.sg/api/media/d415c25d-cf29-4b05-83da-9713f38edd14/2020-G2-and-G3-Mathematics-Syllabuses.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            MOE 2020 G3 Mathematics Syllabuses (PDF)
          </a>
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>官方考试时长与题型：</strong>Part 1 Multiple-choice questions (34 items) 30 分钟 + Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items) 1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions: candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer.
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周是样本：</strong>本周作业不是完整 34 + 20 + 10–15 题，不是 2 小时 15 分钟正式试卷。本周让孩子熟悉 Sec 1 数学卷型和格式。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.2 solving linear equations in one variable（本周只教 7.2）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>changing only one side（只改一边）: 2x + 1 = 7 → 2x = 7（错误：只把左边的 +1 去掉了，右边没有减 1，正确：两边同时减 1，2x + 1 − 1 = 7 − 1 → 2x = 6）；or subtracting 1 from the left but not the right（或只从左边减 1 但右边没有减）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.2 solving linear equations in one variable（本周只教 7.2，解一元一次方程）。官方 7.2 wording（逐字引用）：「solving linear equations in one variable」。本周方法：Solve ax + b = c and ax + b = cx + d by doing the same operation to both sides (add/subtract/multiply/divide) until x is alone（解 ax + b = c 和 ax + b = cx + d，对两边同时做同样的操作，直到 x 单独在一边）。Use inverse operations: if +b, subtract b from both sides; if −b, add b to both sides; if ax, divide both sides by a（用逆运算：如果有 +b，两边同时减 b；如果有 −b，两边同时加 b；如果有 ax，两边同时除以 a）。Example: 2x + 1 = 7. Subtract 1 from both sides: 2x + 1 − 1 = 7 − 1 → 2x = 6. Divide both sides by 2: x = 3. Check: 2(3) + 1 = 7 ✓（例：2x + 1 = 7。两边同时减 1：2x + 1 − 1 = 7 − 1 → 2x = 6。两边同时除以 2：x = 3。检验：2(3) + 1 = 7 ✓）。Example: 3x − 2 = x + 6. Subtract x from both sides: 2x − 2 = 6. Add 2 to both sides: 2x = 8. Divide by 2: x = 4. Check: 3(4) − 2 = 4 + 6 → 10 = 10 ✓。Friendly integers so x is an integer（友好整数，x 的解是整数）。Check by substitution after solving（解出来后代入检验）。不用计算器（calculators are not allowed）。本周不教 N7.3 fractional equations（分式方程，例如 x/3 + (x−2)/4 = 3 或 3/(x−2) = 6），不教 N7.4 formulating a linear equation to solve problems（用方程解应用题，把文字题变成方程）。唯一性 unique keys：每道选择题只有一个正确答案（only ONE option may be true）。Solve 2x + 1 = 7 → x = 3，不能同时提供 x = 3 和另一个等价的正确答案作为两个选项。不用「Both A and B」meta-options（不用「A 和 B 都对」之类的元选项）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。
        </p>
      </div>
    </div>
  );
}
