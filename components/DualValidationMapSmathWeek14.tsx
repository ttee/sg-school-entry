export default function DualValidationMapSmathWeek14() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 14 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）数论第六部分：approximation and estimation（近似与估算）。
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
                <strong>应用题</strong><br />5 道选择题（四舍五入到小数位数和有效数字、估算）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations</strong><br />1.7 approximation and estimation (including rounding off numbers to a required number of decimal places or significant figures, and estimating the results of computation)<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（四舍五入到小数位数、四舍五入到有效数字、判断有效数字数量、估算加法或商、金额估算、判断哪个不正确）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.7 approximation and estimation</strong><br />四舍五入到小数位数 rounding off to decimal places (d.p.)：3.456 to 2 d.p. = 3.46（看第三位 6 ≥ 5，进位）；2.5 to 0 d.p. = 3（看第一位 5 ≥ 5，进位）。<br />四舍五入到有效数字 rounding off to significant figures (s.f.)：0.03450 to 2 s.f. = 0.035（leading zeros after the decimal are not significant，有效数字从第一个非零数字开始，3 和 4 是前两位有效数字，看第三位 5 ≥ 5，进位）；3482 to 2 s.f. = 3500（3 和 4 是前两位有效数字，看第三位 8 ≥ 5，进位，后面补零保持位值）。<br />估算 estimating the results of computation：先四舍五入每个数，再计算。48 × 21 ≈ 50 × 20 = 1000（先将 48 round to 50，21 round to 20，再相乘）。<br />金额 money if any：新加坡元 S$，never 美元（do not use USD）。不用计算器 calculators are not allowed。<br />本周化石 fossil error：rounding down when the next digit is 5（2.5 to 0 d.p. 应该是 3，不是 2，因为下一位是 5 要进位）；counting leading zeros as significant figures（0.03450 中的 0.0 不是有效数字，只有 3450 是）；estimating without rounding first（直接计算 48 × 21 = 1008，然后四舍五入到 1000，错误！应该先 round 每个数，再计算 50 × 20 = 1000）。<br />唯一性 unique keys：两个选项不能都对同一题干为真。不提供 3.46 和 346/100 作为两个选项（数值相同）。2.5 to 0 d.p. 只有 3 是正确答案（不是 2）。估算题只有一个 intended estimate 是正确的（如果 key 是 50×20=1000，不提供 48×20=960 作为第二个正确答案）。<br />本周已完成 1.1–1.6：第 8 周教了 1.1 质数和质数分解（primes and prime factorisation），第 9 周教了 1.2 HCF 和 LCM（highest common factor and lowest common multiple），第 10 周教了 1.2 平方、立方、平方根和立方根（squares, cubes, square roots and cube roots），第 11 周教了 1.3 负数、整数、有理数、实数及其四则运算（negative numbers, integers, rational numbers, real numbers and their four operations），1.4 计算器运算已跳过（AEIS 不允许使用计算器 calculators are not allowed），第 12 周教了 1.5 数轴上的数的表示和排序（representation and ordering of numbers on the number line），第 13 周教了 1.6 不等号的使用（use of &lt;, &gt;, ≤, ≥），本周教 1.7 近似与估算。本周完成官方 N1。<br />本周不教 N2 比 ratio（那是下一部分，未开放）。<br />本周不用计算器（1.4 exists in the syllabus; AEIS forbids calculators）。<br />本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出四舍五入决策步骤、有效数字步骤、估算步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.7 approximation and estimation</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1：Round 3.456 to 2 decimal places.<br />Solution: 3.456 to 2 d.p. Look at the third decimal place: 6. Since 6 ≥ 5, round up.<br />Answer: 3.46<br />例 2：Round 0.03450 to 2 significant figures.<br />Solution: 0.03450. Leading zeros after the decimal are not significant. The first non-zero digit is 3 (1st s.f.), then 4 (2nd s.f.), then 5 (3rd digit). Since 5 ≥ 5, round up the 2nd s.f. from 4 to 5.<br />Answer: 0.035<br />例 3：Estimate 48 × 21 by rounding each number first, then compute.<br />Solution: Round 48 to 50 (nearest ten). Round 21 to 20 (nearest ten). Estimate: 50 × 20 = 1000.<br />Answer: 1000<br />例 4（金额应用）：Wei bought items for S$19.80, S$32.50, and S$8.40. Estimate the total cost by rounding each price to the nearest dollar first.<br />Solution: S$19.80 ≈ S$20, S$32.50 ≈ S$33 (since 0.50 ≥ 0.5, round up), S$8.40 ≈ S$8. Estimate: S$20 + S$33 + S$8 = S$61.<br />Answer: S$61
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.7 approximation and estimation (including rounding off numbers to a required number of decimal places or significant figures, and estimating the results of computation)（本周只教 1.7 近似与估算，本周完成官方 N1）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>rounding down when the next digit is 5（2.5 to 0 d.p. 应该是 3，不是 2，因为 digit ≥ 5 要 round up）、counting leading zeros as significant figures（0.03450 to 2 s.f. = 0.035，小数点后的前导零不是有效数字，只有 3450 是）、estimating without rounding first, or rounding the answer only（48 × 21 应该先 round 成 50 × 20 再计算 = 1000，不是先算 48 × 21 = 1008 再 round to 1000）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.7 approximation and estimation (including rounding off numbers to a required number of decimal places or significant figures, and estimating the results of computation)（本周只教 1.7 近似与估算）。四舍五入到小数位数 rounding off to decimal places (d.p.)：3.456 to 2 d.p. = 3.46（看第三位 6 ≥ 5，进位）；2.5 to 0 d.p. = 3（看第一位 5 ≥ 5，进位，答案只能是 3，不是 2）。四舍五入到有效数字 rounding off to significant figures (s.f.)：0.03450 to 2 s.f. = 0.035（leading zeros after the decimal are not significant，有效数字从第一个非零数字开始，3 和 4 是前两位，看第三位 5 ≥ 5，进位）；3482 to 2 s.f. = 3500（3 和 4 是前两位，看第三位 8 ≥ 5，进位，后面补零保持位值）。估算 estimating the results of computation：先四舍五入每个数，再计算。48 × 21 ≈ 50 × 20 = 1000（先 round 每个数，再相乘，不是先算 48 × 21 = 1008 再 round）。金额用新加坡元 S$（如涉及钱币）。不用计算器（calculators are not allowed）。唯一性 unique keys：两个选项不能都对同一题干为真。不提供 3.46 和 346/100 作为两个选项（数值相同）。2.5 to 0 d.p. 只有 3 是正确答案（不是 2）。估算题只有一个 intended estimate 是正确的（如果 key 是 50×20=1000，不提供 48×20=960 或其他合理估算作为第二个正确答案）。化石：2.5 to 0 d.p. = 2（错！应该是 3，因为 5 ≥ 5，round up）；0.03450 to 2 s.f. = 0.00（错！前导零不是有效数字，只有 3450 是，正确答案是 0.035）；48 × 21 先算 1008 再 round to 1000（错！应该先 round 每个数 50×20，再算 1000）。第 8–13 周已教 1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则、1.5 数轴、1.6 不等号，1.4 计算器运算已跳过（AEIS 禁用计算器），本周是 1.7 近似与估算，本周完成官方 N1。下一部分是 N2 比 ratio（未开放）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。
        </p>
      </div>
    </div>
  );
}
