export default function DualValidationMapSmathWeek41() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 41 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）Equations and inequalities 第三小节：7.3 solving simple fractional equations that can be reduced to linear equations（解简单分式方程）。本周只教 N7.3 solving simple fractional equations that can be reduced to linear equations：clear denominators by multiplying EVERY term (including the constant) by the LCD 两边每一项（包括常数）都乘以最小公倍数 LCD 来去分母；then solve the resulting linear equation the same way as Week 40 然后用第 40 周的方法解一元一次方程；check by substitution 代入检验；exclude values that make a denominator zero 排除使分母为零的值（for 3/(x−2)=6, x≠2）。官方例题：x/3 + (x−2)/4 = 3 → LCD 12 → 4x + 3(x−2) = 36 → 4x + 3x − 6 = 36 → 7x = 42 → x = 6. Check: 6/3 + (6−2)/4 = 2 + 1 = 3 ✓。3/(x−2) = 6 → 3 = 6(x−2) → 3 = 6x − 12 → 15 = 6x → x = 5/2 (or 2.5). Check: 3/(2.5−2) = 3/0.5 = 6 ✓. x≠2。本周不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。
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
                <strong>选择题</strong><br />5 道选择题（x/4 + (x−1)/3 = 2 的 LCD、去分母后方程、4/(x−1) = 8 第一步、x≠1 的原因、检验 x = 4）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities</strong><br />7.3 solving simple fractional equations that can be reduced to linear equations<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />本周只教 N7.3 solving simple fractional equations。本周不教 N7.4 formulating equations to solve problems。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（x/4 + (x−1)/3 = 2 去分母展开后、x/2 + (x+2)/3 = 4 的 x 值、4/(x−1) = 8 两边乘以(x−1)后、5/(x+1) = 5 展开后、2/(x−3) = 4 的 x 值、官方例题化石错误分析、官方例题化石、检验 x = 1.5 在 4/(x−1) = 8）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N7.3 solving simple fractional equations</strong><br />解简单分式方程（official content from MOE 2020 G3 Sec 1 syllabus）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（Solve x/4 + (x−1)/3 = 2 show working and check、Solve 4/(x−1) = 8 show working check and explain x≠1、Find LCD for x/2 + (x+2)/3 = 4 multiply every term and explain fossil error）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N7.3 solving simple fractional equations</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.3 solving simple fractional equations that can be reduced to linear equations（本周只教 7.3）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>multiplying only one term by the LCD, or multiplying only one side, when clearing denominators（去分母时只把一项或只把一边乘以 LCD）。Wrong: x/3 + (x−2)/4 = 3 → 4x + 3(x−2) = 3（错误：忘记把右边的 3 也乘以 12）。Wrong: 3/(x−2) = 6 → 3 = 6（错误：只把左边乘以 (x−2)，右边没有乘）。Right: multiply EVERY term on BOTH sides by the LCD（正确：两边每一项都乘以 LCD）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N7. Equations and inequalities: 7.3 solving simple fractional equations that can be reduced to linear equations（本周只教 7.3，解简单分式方程）。官方 7.3 wording（逐字引用）：「solving simple fractional equations that can be reduced to linear equations such as x/3 + (x−2)/4 = 3 ; 3/(x−2) = 6」。本周方法：Clear denominators by multiplying EVERY term (including the constant) by the LCD, then solve the resulting linear equation the same way as Week 40（两边每一项包括常数都乘以 LCD 来去分母，然后用第 40 周的方法解一元一次方程）。Check by substitution（代入检验）。Exclude values that make a denominator zero（排除使分母为零的值）。Example: x/3 + (x−2)/4 = 3. LCD = 12. Multiply EVERY term by 12: 4x + 3(x−2) = 36. Expand: 4x + 3x − 6 = 36. Collect: 7x = 42. x = 6. Check: 6/3 + (6−2)/4 = 2 + 1 = 3 ✓。Example: 3/(x−2) = 6. Multiply both sides by (x−2): 3 = 6(x−2). Expand: 3 = 6x − 12. 15 = 6x. x = 5/2 or 2.5. Check: 3/(2.5−2) = 3/0.5 = 6 ✓. x≠2。Friendly integers（友好整数）。No calculator（不用计算器）。本周不教 N7.4 formulating a linear equation to solve problems（用方程解应用题）。唯一性 unique keys：每道选择题只有一个正确答案（only ONE option may be algebraically true）。不要提供两个等价的解值或等价的去分母方程作为两个选项。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。
        </p>
      </div>
    </div>
  );
}
