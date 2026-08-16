export default function DualValidationMapSmathWeek15() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 15 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）数论第二部分开头：ratio and proportion 的前两小节（ratios involving rational numbers, writing a ratio in its simplest form）。
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
                <strong>应用题</strong><br />5 道选择题（分数比化简、小数比化简、混合比化简、识别相同比、三位数比化简）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion</strong><br />2.1 ratios involving rational numbers<br />2.2 writing a ratio in its simplest form<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（分数比、小数比、分数与整数比、三项含分数比、判断已化简比、新币金额比、混合比、顺序识别）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N2.1 ratios involving rational numbers, N2.2 writing a ratio in its simplest form</strong><br />比 ratio 可以涉及分数或小数 involving rational numbers：1/2 : 1/3, 0.4 : 0.6, 2/3 : 4。<br />化简 writing in its simplest form：转换为相同形式（全是整数，或全是相同分母），然后除以 HCF（highest common factor）。1/2 : 1/3 = 3 : 2（乘以 6）；0.4 : 0.6 = 4 : 6 = 2 : 3（先转换为整数，再除以 HCF 2）；2/3 : 4 = 2 : 12 = 1 : 6（转换为相同形式，再除以 HCF 2）。<br />顺序 order matters：a : b 不是 b : a。<br />不用计算器 calculators are not allowed。金额 money if any：新加坡元 S$，never 美元（do not use USD）。<br />本周化石 fossil error：leaving a ratio with fractions unsimplified（把 1/2 : 1/3 作为最终答案，而不是化简为 3 : 2）；swapping the order（如果 key 是 3 : 2，错写成 2 : 3，顺序颠倒）；treating 2/3 : 4 as 2 : 4（只取分子，忽略分母）。<br />唯一性 unique keys：两个选项不能是同一个比的不同写法。不提供 2 : 3 和 4 : 6 同时作为选项（都是同一个比）。不提供 1 : 6 和 2 : 12 同时作为选项（都是同一个比）。如果 key 是 3 : 2，2 : 3 必须作为错误选项（order fossil），不是第二个正确答案。<br />本周已完成 N1（第 8–14 周教了 1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则、1.5 数轴、1.6 不等号、1.7 近似估算，1.4 calculator computation 已跳过因 AEIS forbids calculators）。本周开始 N2，只教 2.1 和 2.2（ratios involving rational numbers, writing a ratio in its simplest form）。<br />本周不教 2.3 problems involving ratio（比的应用题，那是下一周）。<br />本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出分数比化简步骤、小数比化简步骤、金额比化简步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N2.1 ratios involving rational numbers, N2.2 writing a ratio in its simplest form</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1：Write 1/2 : 1/3 in its simplest form.<br />Solution: 1/2 : 1/3. To compare fractions, find a common denominator. LCM of 2 and 3 is 6. 1/2 = 3/6, 1/3 = 2/6. So 1/2 : 1/3 = 3/6 : 2/6 = 3 : 2 (multiply through by 6, or just use the numerators after converting to the same denominator).<br />Answer: 3 : 2<br />例 2：Write 0.4 : 0.6 in its simplest form.<br />Solution: 0.4 : 0.6. Convert to whole numbers by multiplying by 10: 0.4 × 10 = 4, 0.6 × 10 = 6. So 0.4 : 0.6 = 4 : 6. Find HCF of 4 and 6: HCF = 2. Divide both by 2: 4 ÷ 2 = 2, 6 ÷ 2 = 3.<br />Answer: 2 : 3<br />例 3：Write 2/3 : 4 in its simplest form.<br />Solution: 2/3 : 4. Convert to the same form. 4 = 12/3. So 2/3 : 4 = 2/3 : 12/3 = 2 : 12 (use the numerators). Find HCF of 2 and 12: HCF = 2. Divide both by 2: 2 ÷ 2 = 1, 12 ÷ 2 = 6.<br />Answer: 1 : 6<br />例 4（金额应用）：Wei has S$2.50 and Aisha has S$3.75. Write the ratio of Wei's money to Aisha's money in its simplest form.<br />Solution: Wei : Aisha = S$2.50 : S$3.75. Convert to cents: 250 cents : 375 cents. Find HCF of 250 and 375: HCF = 125. Divide both by 125: 250 ÷ 125 = 2, 375 ÷ 125 = 3.<br />Answer: 2 : 3
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.1 ratios involving rational numbers, 2.2 writing a ratio in its simplest form（本周只教 2.1–2.2，只涉及有理数比与化简，不教 2.3 problems involving ratio 应用题，那是下一周）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>leaving a ratio with fractions unsimplified（把 1/2 : 1/3 作为最终答案，而不是化简为 3 : 2）、swapping the order（如果 key 是 3 : 2，错写成 2 : 3，a : b 不是 b : a）、treating 2/3 : 4 as 2 : 4（只取分子，忽略分母，错！应该转换 4 = 12/3，然后 2/3 : 12/3 = 2 : 12 = 1 : 6）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.1 ratios involving rational numbers, 2.2 writing a ratio in its simplest form（本周只教 2.1–2.2）。比 ratio 可以涉及分数或小数 involving rational numbers：1/2 : 1/3, 0.4 : 0.6, 2/3 : 4。化简 writing in its simplest form：转换为相同形式（全是整数，或全是相同分母），然后除以 HCF。1/2 : 1/3 = 3 : 2（乘以 6）；0.4 : 0.6 = 4 : 6 = 2 : 3（先转整数，再除以 HCF 2）；2/3 : 4 = 2 : 12 = 1 : 6（转换为相同形式，4 = 12/3，然后 2/3 : 12/3 = 2 : 12，再除以 HCF 2）。顺序 order matters：a : b 不是 b : a。不用计算器（calculators are not allowed）。金额用新加坡元 S$（如涉及钱币）。唯一性 unique keys：两个选项不能是同一个比的不同写法。不提供 2 : 3 和 4 : 6 同时作为选项。不提供 1 : 6 和 2 : 12 同时作为选项。如果 key 是 3 : 2，2 : 3 必须作为错误选项（order fossil），不是第二个正确答案。化石：1/2 : 1/3 留为最终答案（错！应化简为 3 : 2）；3 : 2 写成 2 : 3（错！顺序颠倒）；2/3 : 4 写成 2 : 4（错！应是 1 : 6）。第 8–14 周已完成 N1（1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则、1.5 数轴、1.6 不等号、1.7 近似估算，1.4 跳过因 AEIS 禁用计算器），本周开始 N2，只教 2.1–2.2（ratios involving rational numbers, writing a ratio in its simplest form）。本周不教 2.3 problems involving ratio（应用题，下一周）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。'ratios involving rational numbers', 'writing a ratio in its simplest form' 是官方用词 in N2.1–2.2。
        </p>
      </div>
    </div>
  );
}
