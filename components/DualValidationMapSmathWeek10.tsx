export default function DualValidationMapSmathWeek10() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 10 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）数论后半部分：squares, cubes, square roots and cube roots（平方、立方、平方根、立方根）通过质数分解（by prime factorisation）求解。
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
                <strong>应用题</strong><br />5 道选择题（平方、立方、平方根、立方根）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations</strong><br />1.2 squares, cubes, square roots and cube roots by prime factorisation<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（平方、立方、平方根、立方根计算）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.2 squares, cubes, square roots and cube roots by prime factorisation</strong><br />Square（平方）：n² 通过质数分解写成质数乘积，每个质因数的次幂乘以 2。例：6 = 2 × 3，6² = 2² × 3² = 4 × 9 = 36。<br />Cube（立方）：n³ 通过质数分解写成质数乘积，每个质因数的次幂乘以 3。例：4 = 2²，4³ = 2⁶ = 64。<br />Square root（平方根）：√n 通过质数分解，只有当每个质因数的次幂都是偶数时才有整数平方根，每个质因数的次幂除以 2。例：√36 = √(2² × 3²) = 2¹ × 3¹ = 6。如果有奇数次幂，则不是 perfect square。<br />Cube root（立方根）：³√n 通过质数分解，只有当每个质因数的次幂都是 3 的倍数时才有整数立方根，每个质因数的次幂除以 3。例：³√64 = ³√(2⁶) = 2² = 4。如果有次幂不是 3 的倍数，则不是 perfect cube。<br />方法步骤：(1) 质数分解 prime factorisation；(2) 平方时每个质因数的次幂×2；(3) 立方时每个质因数的次幂×3；(4) 开平方根时每个质因数的次幂÷2（必须是偶数次幂）；(5) 开立方根时每个质因数的次幂÷3（必须是 3 的倍数次幂）。<br />本周不教：HCF/LCM（那是上周第 9 周内容）。不用计算器（calculators are not allowed）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出推理步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.2 squares, cubes, square roots and cube roots by prime factorisation</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出推理步骤和最终答案）<br />应用：正方形地砖拼成大正方形（tiles in a square）、小立方体堆成大立方体（cube of unit cubes）等情境需要用平方根或立方根求边长。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 squares, cubes, square roots and cube roots by prime factorisation（本周只教平方、立方、平方根、立方根部分，不教 HCF/LCM，那是上周第 9 周内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>swapping square and cube（把平方和立方的指数规则搞反，平方时把质数次幂×3，立方时把质数次幂×2），taking square root of a non-perfect-square（开平方时遇到奇数次幂仍然除以 2），taking cube root of a non-perfect-cube（开立方根时遇到不是 3 的倍数的次幂仍然除以 3），mixing √ and ³√（把平方根和立方根混淆）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 squares, cubes, square roots and cube roots by prime factorisation（本周只教平方、立方、平方根和立方根部分，不教 HCF 和 LCM）。Square（平方）：先质数分解一个数，写成质数乘积形式（如 6 = 2 × 3），求它的平方时把每个质因数的次幂×2（6² = 2² × 3² = 36）。Cube（立方）：把每个质因数的次幂×3（4 = 2²，4³ = 2⁶ = 64）。Square root（平方根）：只有每个质因数的次幂都是偶数时才是 perfect square，每个次幂÷2（√36 = √(2² × 3²) = 2¹ × 3¹ = 6）。如果有奇数次幂，不是 perfect square。Cube root（立方根）：只有每个质因数的次幂都是 3 的倍数时才是 perfect cube，每个次幂÷3（³√64 = ³√(2⁶) = 2² = 4）。如果有次幂不是 3 的倍数，不是 perfect cube。应用：正方形地砖拼成大正方形，求边长用平方根（tiles in a square）；小立方体堆成大立方体，求边长用立方根（cube of unit cubes）。不用计算器（calculators are not allowed）。本周不教 HCF/LCM（那是第 9 周）。数字保持友好（numbers stay friendly，平方和立方保持在 1000 以下）。金额用新加坡元 S$（如题目涉及钱币，虽然本周数学题目一般不涉及钱币）。
        </p>
      </div>
    </div>
  );
}
