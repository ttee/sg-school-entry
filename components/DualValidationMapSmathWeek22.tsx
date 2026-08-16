export default function DualValidationMapSmathWeek22() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 22 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）百分数第六小节：problems involving percentages（百分数综合应用）。第 17–21 周已教 N3 的 3.1–3.5，本周只教 3.6。本周完成 N3。
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
                <strong>应用题</strong><br />5 道选择题（15 of 60 as a %、80 is what % of 50、increase S$80 by 10%、after 20% increase the price is S$72 find original、40% to 50% is how many percentage points）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N3. Percentage</strong><br />3.6 problems involving percentages<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 17 周已完成 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周完成 3.2（comparing two quantities by percentage），第 19 周完成 3.3（percentages greater than 100%），第 20 周完成 3.4（increasing/decreasing a quantity by a given percentage, including percentage point），第 21 周完成 3.5（reverse percentages），本周只教 3.6（problems involving percentages，百分数综合应用）。本周完成 N3。下周将教 N4 rate and speed（速率和速度是下周内容）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（20 of 50 as a %、60 is what % of 40、S$90 increased by 20%、48 after 20% increase find original、75% to 90% is how many percentage points、60 after 25% discount find original、which working correct for reverse problem、S$72 decreased by 25%）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.6 problems involving percentages</strong><br />Problems involving percentages（百分数综合应用）：mix skills from 3.1–3.5 in word problems（在应用题中混合使用 3.1–3.5 的技能）。<br />Skill 3.1: express A as % of B（20 of 50 = 40%）。<br />Skill 3.2: compare by %（80 is 160% of 50; 80 is 60% more than 50）。<br />Skill 3.3: % > 100（125% of 80 = 100）。<br />Skill 3.4: increase/decrease（80 + 10% = 88; 80 − 10% = 72; 40% → 50% is 10 percentage points, not 25%）。<br />Skill 3.5: reverse（after 20% increase the price is S$72, original = 72 ÷ 1.20 = S$60）。<br />例 1（3.1 express as %）：Express 15 as a percentage of 60. Solution: (15 ÷ 60) × 100% = 0.25 × 100% = 25%. Answer: 25%.<br />例 2（3.2 compare by %）：80 is what percentage of 50? Solution: (80 ÷ 50) × 100% = 1.6 × 100% = 160%. Answer: 160%. Also: 80 is 60% more than 50 (because 80 − 50 = 30, and 30 ÷ 50 × 100% = 60%).<br />例 3（3.4 increase）：Increase S$80 by 10%. Solution: 10% of S$80 = 0.1 × 80 = 8. So S$80 + S$8 = S$88. Answer: S$88.<br />例 4（3.5 reverse）：After a 20% increase, the price is S$72. Find the original price. Solution: After 20% increase, new = original × 1.20. So 72 = original × 1.20. Original = 72 ÷ 1.20 = 60. Answer: S$60.<br />例 5（3.4 percentage point）：A rate increased from 40% to 50%. By how many percentage points did the rate increase? Solution: 50% − 40% = 10 percentage points. Answer: 10 percentage points (not 25%).<br />用友好的整数 friendly numbers：答案是整数（如 25%, 160%, 88, 60, 10 percentage points）。不用计算器（calculators are not allowed）。金额 money：新加坡元 S$，never 美元（do not use USD）。<br />本周化石 fossil errors：treating a reverse problem as "subtract r% of the new amount"（把逆向问题当作"从新值减去 r%"：例如 72 after 20% increase 错误地算 72 − 20% of 72 = 57.6，应该是 72 ÷ 1.20 = 60）；treating a percentage-point change as a relative %（把百分点变化当作相对百分数：例如 40% → 50% 错误地说"increased by 25%"，应该是"increased by 10 percentage points"）；adding the % as a raw number（把百分数当作原始数加：例如 80 + 10 = 90，应该是 80 + 10% of 80 = 88）；saying "A is 20% of B" when the story is "A is 20% more than B"（把"A 比 B 多 20%"说成"A 是 B 的 20%"：80 is 20% more than 50 means 80 = 50 + 20% of 50，不是 80 = 20% of 50）。<br />唯一性 unique keys：两个选项不能是同一个金额或同一个真实陈述。不要同时提供"15 percentage points"和"increased by 25%"当两者都对同一对（60% → 75%）成立。不要同时提供 60 和 72 ÷ 1.2 作为两个选项（那是同一个值）。The fossil errors（化石错误值）必须作为错误选项（wrong option），不是第二个正确答案。<br />本周教百分数综合应用（3.6），是 N3 的最后一节。第 17 周已教 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），第 19 周教 3.3（percentages greater than 100%），第 20 周教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point），第 21 周教 3.5（reverse percentages），本周教 3.6（problems involving percentages，在应用题中混合使用）。本周完成 N3，不教 N4 rate and speed（下周内容）。本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。不发明官方 cut-scores 或 extra official names（problems involving percentages 是官方大纲术语）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 24 of 80 as a percentage 的步骤、S$60 increased by 15% 的步骤、sale price S$68 after 15% discount find original 应用题步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.6 problems involving percentages</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1（3.1 express as %, writing steps）：Express 15 as a percentage of 60. Show your working steps.<br />Solution: ① A = 15, B = 60. ② (A ÷ B) × 100% = (15 ÷ 60) × 100%. ③ 15 ÷ 60 = 0.25. ④ 0.25 × 100 = 25. Answer: 25%.<br />例 2（3.4 increase, writing steps）：Increase S$60 by 15%. Show your working steps.<br />Solution: ① 15% of S$60 = 0.15 × 60 = 9. ② S$60 + S$9 = S$69. Answer: S$69.<br />例 3（3.5 reverse a decrease with discount story）：Wei bought a phone at a sale. After a 15% discount, the price is S$68. What was the original price before the discount? Show your working clearly.<br />Solution: ① After 15% discount, new price = original price × (1 − 15/100) = original price × 0.85. ② So S$68 = original price × 0.85. ③ Original price = S$68 ÷ 0.85 = S$80. Answer: S$80.<br />关键步骤：Step 1: Identify the type of problem (express as %, compare by %, increase/decrease, reverse, percentage point)（确定题目类型：表达为百分数、用百分数比较、增减、逆向、百分点）。Step 2: Write the equation or formula（写出等式或公式）。For express as %: (A ÷ B) × 100%. For increase: original + r% of original. For decrease: original − r% of original. For reverse after increase: original = new ÷ (1 + r/100). For reverse after decrease: original = new ÷ (1 − r/100). Step 3: Calculate step by step（逐步计算）。Step 4: State the answer with units（陈述答案加单位，如 %, S$）。Step 5: Check by working forward when possible（检验：正向计算看是否得到原值）。<br />化石：Treating a reverse problem as "subtract r% of the new amount"（把逆向问题当作"从新值减去 r%"：例如 72 after 20% increase 错误地算 72 − 20% of 72 = 57.6，应该是 72 ÷ 1.20 = 60）；treating a percentage-point change as a relative %（把百分点变化当作相对百分数：40% → 50% 错误地说"increased by 25%"，应该是"increased by 10 percentage points"）；adding the % as a raw number（80 + 10 = 90，应该是 80 + 10% of 80 = 88）；saying "A is 20% of B" when the story is "A is 20% more than B"（80 is 20% more than 50 means 80 = 50 + 20% of 50，不是 80 = 20% of 50）。本周教百分数综合应用（3.6，mixing skills 3.1–3.5 in word problems），完成 N3。下周教 N4 rate and speed。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N3. Percentage: 3.6 problems involving percentages（本周只教 3.6，第 17 周已教 3.1，第 18 周已教 3.2，第 19 周已教 3.3，第 20 周已教 3.4，第 21 周已教 3.5，本周完成 N3。本周不教 N4 rate and speed，那是下周内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>treating a reverse problem as "subtract r% of the new amount"（把逆向问题当作"从新值减去 r%"，例如 72 after 20% increase 错误地算 72 − 14.4 = 57.6，应该是 72 ÷ 1.20 = 60）；treating a percentage-point change as a relative %（把百分点变化当作相对百分数：40% → 50% 错误地说"increased by 25%"，应该是"increased by 10 percentage points"）；adding the % as a raw number（80 + 10 = 90，应该是 80 + 10% of 80 = 88）；saying "A is 20% of B" when the story is "A is 20% more than B"。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.6 problems involving percentages（本周只教 3.6，混合使用 3.1–3.5 技能）。Skill 3.1: express A as % of B（20 of 50 = (20 ÷ 50) × 100% = 40%）。Skill 3.2: compare by %（80 is what % of 50? (80 ÷ 50) × 100% = 160%; 80 is 60% more than 50）。Skill 3.3: % > 100（125% of 80 = 1.25 × 80 = 100）。Skill 3.4: increase/decrease（increase S$80 by 10% → S$80 + 0.1 × 80 = S$88; decrease S$80 by 10% → S$80 − 0.1 × 80 = S$72; 40% → 50% is 10 percentage points, not 25%）。Skill 3.5: reverse（after 20% increase the price is S$72, original = 72 ÷ 1.20 = S$60）。用友好的整数（friendly numbers），答案是整数。不用计算器（calculators are not allowed）。金额用新加坡元 S$（如涉及钱币）。唯一性 unique keys：两个选项不能是同一个金额或同一个真实陈述。不要同时提供"15 percentage points"和"increased by 25%"当两者都对同一对（60% → 75%）成立。不要同时提供 60 和 72 ÷ 1.2 作为两个选项。The fossil errors 必须作为错误选项（wrong option），不是第二个正确答案。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。
        </p>
      </div>
    </div>
  );
}
