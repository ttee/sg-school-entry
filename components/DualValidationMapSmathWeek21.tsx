export default function DualValidationMapSmathWeek21() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 21 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）百分数第五小节：reverse percentages（逆向百分数）。第 17–20 周已教 N3 的 3.1–3.4，本周只教 3.5。
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
                <strong>应用题</strong><br />5 道选择题（72 after 20% increase find original、64 after 20% decrease find original、100 after 25% increase find original、90 after 10% decrease find original、which working is correct: 72 ÷ 1.2 not 72 − 0.2×72）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N3. Percentage</strong><br />3.5 reverse percentages<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 17 周已完成 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周完成 3.2（comparing two quantities by percentage），第 19 周完成 3.3（percentages greater than 100%），第 20 周完成 3.4（increasing/decreasing a quantity by a given percentage, including percentage point），本周只教 3.5（reverse percentages，逆向百分数）。本周不教 3.6 solving problems involving percentage（3.6 百分数综合应用是下周内容）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（60 after 25% increase find original、S$96 after 20% discount find original price、150 after 50% increase find original、S$108 after 10% tax find original price、which working correct 64 ÷ 0.8 not 64 + 20% of 64、80 after 20% decrease find original、class size 18 after 25% decrease find original、S$45 after 10% increase find original）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.5 reverse percentages</strong><br />Reverse percentages（逆向百分数）：given the final value after a percentage increase or decrease, find the original value（已知百分数增减后的值，求原始值）。<br />After an increase of r%, new = original × (1 + r/100)（增加 r% 后，新值 = 原值 × (1 + r/100)）。So original = new ÷ (1 + r/100)（所以原值 = 新值 ÷ (1 + r/100)）。<br />例 1：After a 20% increase the price is S$72. Find the original price. Solution: ① After 20% increase, new = original × (1 + 20/100) = original × 1.20. ② So 72 = original × 1.20. ③ Original = 72 ÷ 1.20 = 60. Answer: S$60.<br />After a decrease of r%, new = original × (1 − r/100)（减少 r% 后，新值 = 原值 × (1 − r/100)）。So original = new ÷ (1 − r/100)（所以原值 = 新值 ÷ (1 − r/100)）。<br />例 2：After a 20% decrease the price is S$64. Find the original price. Solution: ① After 20% decrease, new = original × (1 − 20/100) = original × 0.80. ② So 64 = original × 0.80. ③ Original = 64 ÷ 0.80 = 80. Answer: S$80.<br />用友好的整数 friendly numbers：原值是整数（如 60, 80, 100），新值也是整数。不用计算器（calculators are not allowed）。金额 money：新加坡元 S$，never 美元（do not use USD）。<br />本周化石 fossil error：subtracting r% of the NEW amount instead of dividing by the factor（从新值减去 r% 而不是除以因数：例如 72 after 20% increase，错误地算 72 − 20% of 72 = 72 − 14.4 = 57.6，应该是 72 ÷ 1.20 = 60）；adding r% of the new amount after a decrease（例如 64 after 20% decrease，错误地算 64 + 20% of 64 = 64 + 12.8 = 76.8，应该是 64 ÷ 0.80 = 80）。<br />唯一性 unique keys：两个选项不能是同一个金额的不同写法。如果一个选项是 60，不能同时提供 60 和 72 ÷ 1.2 作为两个选项（那是同一个值）。The wrong fossil value（化石错误值，如 57.6 when the answer is 60）必须作为错误选项（wrong option），不是第二个正确答案。<br />本周教逆向百分数（3.5）。第 17 周已教 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），第 19 周教 3.3（percentages greater than 100%），第 20 周教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point），本周教 3.5（reverse percentages）。本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。不发明官方 cut-scores 或 extra official names（reverse percentages 是官方大纲术语）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 S$92 after 15% increase find original 的步骤、S$64 after 20% discount find original price 的步骤、sale price S$90 after 25% increase in allowance 应用题步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.5 reverse percentages</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1（reverse an increase）：After a 20% increase, a price is S$72. Find the original price. Show your working steps.<br />Solution: ① After 20% increase, new price = original price × (1 + 20/100) = original price × 1.20. ② So S$72 = original price × 1.20. ③ Original price = S$72 ÷ 1.20 = S$60. Answer: S$60.<br />例 2（reverse a decrease）：After a 20% discount, a price is S$64. Find the original price before the discount. Show your working steps.<br />Solution: ① After 20% decrease, new price = original price × (1 − 20/100) = original price × 0.80. ② So S$64 = original price × 0.80. ③ Original price = S$64 ÷ 0.80 = S$80. Answer: S$80.<br />例 3（application problem with reverse）：Aisha's allowance was increased by 25%. After the increase, her allowance is S$100. What was her original allowance? Show your working clearly.<br />Solution: ① After 25% increase, new allowance = original allowance × (1 + 25/100) = original allowance × 1.25. ② So S$100 = original allowance × 1.25. ③ Original allowance = S$100 ÷ 1.25 = S$80. Answer: S$80.<br />关键步骤：Step 1: Identify the percentage increase or decrease r% and the final value (确定增减的百分数和最终值). Step 2: Write the equation: new = original × factor (写出等式：新值 = 原值 × 因数). For increase: factor = 1 + r/100. For decrease: factor = 1 − r/100. Step 3: Rearrange to find original: original = new ÷ factor (移项求原值：原值 = 新值 ÷ 因数). Step 4: Calculate and state the answer with units (计算并陈述答案加单位，如 S$, marks). Step 5: Check by working forward (检验：用原值乘以因数看是否得到新值).<br />化石：Subtracting r% of the NEW amount instead of dividing by the factor（从新值减去 r% 而不是除以因数：例如 72 after 20% increase，错误地算 72 − 20% of 72 = 72 − 14.4 = 57.6，应该是 72 ÷ 1.20 = 60）；Adding r% of the new amount after a decrease（例如 64 after 20% decrease，错误地算 64 + 20% of 64 = 64 + 12.8 = 76.8，应该是 64 ÷ 0.80 = 80）。本周教逆向百分数（3.5），下周教百分数综合应用（3.6 solving problems involving percentage）。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N3. Percentage: 3.5 reverse percentages（本周只教 3.5，第 17 周已教 3.1，第 18 周已教 3.2，第 19 周已教 3.3，第 20 周已教 3.4，本周不教 3.6 solving problems involving percentage，3.6 是下周内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>subtracting r% of the NEW amount instead of dividing by the factor（从新值减去百分数而不是除以因数，例如 72 after 20% increase 错误地算 72 − 14.4 = 57.6，应该是 72 ÷ 1.20 = 60）；adding r% of the new amount after a decrease（例如 64 after 20% decrease 错误地算 64 + 12.8 = 76.8，应该是 64 ÷ 0.80 = 80）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.5 reverse percentages（本周只教 3.5）。After an increase of r%, new = original × (1 + r/100), so original = new ÷ (1 + r/100)（增加 r% 后，新值 = 原值 × (1 + r/100)，所以原值 = 新值 ÷ (1 + r/100)）。After a decrease of r%, new = original × (1 − r/100), so original = new ÷ (1 − r/100)（减少 r% 后，新值 = 原值 × (1 − r/100)，所以原值 = 新值 ÷ (1 − r/100)）。例：After a 20% increase the price is S$72. Original = 72 ÷ 1.20 = S$60. After a 20% decrease the price is S$64. Original = 64 ÷ 0.80 = S$80. 用友好的整数（friendly numbers），原值是整数。不用计算器（calculators are not allowed）。金额用新加坡元 S$（如涉及钱币）。唯一性 unique keys：两个选项不能是同一个金额。不要同时提供 60 和 72 ÷ 1.2 作为两个选项。The wrong fossil values 必须作为错误选项（wrong option）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。
        </p>
      </div>
    </div>
  );
}
