export default function DualValidationMapSmathWeek20() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 20 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）百分数第四小节：increasing/decreasing a quantity by a given percentage (including concept of percentage point)（用百分数增减数量，包括百分点的概念）。第 17–19 周已教 N3 的 3.1–3.3，本周只教 3.4。
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
                <strong>应用题</strong><br />5 道选择题（increase 80 by 10%、decrease 80 by 10%、S$60 increased by 20%、rate from 40% to 50% by how many percentage points、which is true: 40% to 50% is 10 percentage points not a 10% increase）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N3. Percentage</strong><br />3.4 increasing/decreasing a quantity by a given percentage (including concept of percentage point)<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 17 周已完成 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周完成 3.2（comparing two quantities by percentage），第 19 周完成 3.3（percentages greater than 100%），本周只教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point）。本周不教 3.5 reverse percentages（逆向百分数），3.6 solving problems involving percentage（3.5–3.6 是后续内容）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（increase 50 by 20%、decrease 120 by 25%、shop adds 8% to S$50、rate from 30% to 45% by how many percentage points、which working is correct for increasing 80 by 10% where 80+10=90 is wrong、S$40 increased by 50%、pass rate from 60% to 75% which statement correct、S$100 decreased by 30%）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.4 increasing/decreasing a quantity by a given percentage (including concept of percentage point)</strong><br />Increase a quantity by r%: new = original × (1 + r/100)（增加 r%：新值 = 原值 × (1 + r/100)）。方法：先算 r% of original，再加到 original。例：80 increased by 10% = 10% of 80 = 8，80 + 8 = 88（或 80 × 1.1 = 88）。<br />Decrease a quantity by r%: new = original × (1 − r/100)（减少 r%：新值 = 原值 × (1 − r/100)）。例：80 decreased by 10% = 10% of 80 = 8，80 − 8 = 72（或 80 × 0.9 = 72）。<br />Percentage point（百分点，官方术语）：a change from 40% to 50% is an increase of 10 percentage points（从 40% 到 50% 是增加 10 个百分点）。It is NOT a 10% increase（不是 10% 的增长，因为 10% increase of 40% would be 44%）。Percentage-point change = new rate − old rate（百分点变化 = 新比率 − 旧比率）。<br />应用题 word problem with money：A price of S$60 is increased by 20%. What is the new price? Solution: 20% of S$60 = (20 ÷ 100) × 60 = 0.2 × 60 = 12. New price = S$60 + S$12 = S$72. (Or: S$60 × 1.2 = S$72.)<br />应用题 word problem with discount：A bag was S$60. The shop gave a 20% discount. What is the discounted price? Solution: 20% of S$60 = 12. Discounted price = S$60 − S$12 = S$48. (Or: S$60 × 0.8 = S$48.)<br />应用题 word problem with rate change：A club membership rate increased from 25% to 40%. By how many percentage points? Solution: 40% − 25% = 15 percentage points (not a 15% increase). Is it a 15% increase? Check: 15% of 25% = (15 ÷ 100) × 25 = 3.75. So 25% + 3.75 = 28.75%, not 40%. Answer: No, it's a 15 percentage-point increase, not a 15% increase.<br />用友好的整数 friendly numbers：答案是整数（如 88, 72, 60, 120）或简单的百分点（如 10 percentage points, 15 percentage points）。<br />不用计算器 calculators are not allowed。金额 money：新加坡元 S$，never 美元（do not use USD）。<br />本周化石 fossil error：adding the percentage value instead of the percentage of the quantity（直接加百分数而不是加数量的百分数：80 increased by 10% 错误地写成 80 + 10 = 90，应该是 10% of 80 = 8，then 80 + 8 = 88）；treating a percentage-point change as a percentage increase（把百分点变化当百分数增长：40% → 50% 错误地说是 10% 增长，应该是 10 个百分点的增长；10% increase of 40% would be 44%, not 50%）。<br />唯一性 unique keys：两个选项不能是同一个金额的不同写法。如果一个选项是 88，不能同时提供 88 和 80 + 8 作为两个选项（那是同一个值）。不要在同一题中同时提供「10 percentage points」和「10% increase」作为两个正确选项（一题只有一个正确答案）。The wrong fossil value（化石错误值，如 90 when the answer is 88）必须作为错误选项（wrong option），不是第二个正确答案。<br />本周教百分数增减与百分点（3.4）。第 17 周已教 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage），第 19 周教 3.3（percentages greater than 100%），本周教 3.4（increasing/decreasing a quantity by a given percentage, including percentage point）。本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。不发明官方 cut-scores 或 extra official names（percentage point 是官方术语，不发明其他名称）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 S$80 increased by 15% 的步骤、S$60 decreased by 20% discount 的步骤、rate from 25% to 40% by how many percentage points and is it a 15% increase explain 应用题步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.4 increasing/decreasing a quantity by a given percentage (including concept of percentage point)</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1（increase a quantity by r%）：Increase 80 by 10%. Show your working steps.<br />Solution: ① Original = 80. Increase by 10%. ② 10% of 80 = (10 ÷ 100) × 80 = 0.1 × 80 = 8. ③ New value = original + increase = 80 + 8 = 88. Answer: 88. (Or: new = 80 × (1 + 10/100) = 80 × 1.1 = 88.)<br />例 2（decrease a quantity by r%, 应用题 word problem with discount）：A bag was S$60. The shop gave a 20% discount. What is the discounted price? Show your working steps.<br />Solution: ① Original price = S$60. Discount = 20%. ② 20% of S$60 = (20 ÷ 100) × 60 = 0.2 × 60 = 12. ③ Discounted price = original − discount = S$60 − S$12 = S$48. Answer: S$48. (Or: new = S$60 × (1 − 20/100) = S$60 × 0.8 = S$48.)<br />例 3（percentage point change, 应用题 word problem with rate）：A club membership rate increased from 25% to 40%. (i) By how many percentage points did the rate increase? (ii) Is this a 15% increase of the old rate? Explain clearly. Show your working.<br />Solution: (i) ① Old rate = 25%. New rate = 40%. ② Percentage-point increase = new − old = 40% − 25% = 15 percentage points. Answer (i): 15 percentage points. (ii) ① Is this a 15% increase? Check: 15% of 25% = (15 ÷ 100) × 25 = 3.75. ② So a 15% increase of 25% would be 25 + 3.75 = 28.75%, not 40%. ③ Answer (ii): No, it is not a 15% increase. It is a 15 percentage-point increase. A 15% increase of 25% would only reach 28.75%, not 40%.<br />关键步骤：Step 1: Identify the original quantity or rate (确定原始数量或比率). Step 2: Calculate r% of the original: r% of N = (r ÷ 100) × N (计算 r% of 原值). Step 3: For increase, add; for decrease, subtract (增加时相加，减少时相减：increase: new = original + (r% of original); decrease: new = original − (r% of original)). Step 4: For percentage point, subtract rates directly (百分点变化：直接相减 new rate − old rate，不是百分数增长). Step 5: State the answer with units and interpret (陈述答案并解释：如 88, S$48, 15 percentage points, 'this is not a 15% increase because...')<br />化石：Adding the percentage value instead of the percentage of the quantity（80 increased by 10% 错误地写成 80 + 10 = 90，应该是 10% of 80 = 8，then 80 + 8 = 88）；Treating a percentage-point change as a percentage increase（40% → 50% 错误地说是 10% 增长，应该是 10 个百分点的增长；10% increase of 40% 是 44%，不是 50%）。本周教增减与百分点（3.4），下周教逆向百分数（3.5 reverse percentages）。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N3. Percentage: 3.4 increasing/decreasing a quantity by a given percentage (including concept of percentage point)（本周只教 3.4，第 17 周已教 3.1，第 18 周已教 3.2，第 19 周已教 3.3，本周不教 3.5–3.6 reverse percentages/problems）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>adding the percentage value instead of the percentage of the quantity（80 increased by 10% 错误地写成 90，应该是 88）；treating a percentage-point change as a percentage increase（40% → 50% 错误地说是 10% 增长，应该是 10 个百分点的增长）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.4 increasing/decreasing a quantity by a given percentage (including concept of percentage point)（本周只教 3.4）。Increase a quantity by r%: new = original × (1 + r/100)（增加：新值 = 原值 × (1 + r/100)）。Decrease a quantity by r%: new = original × (1 − r/100)（减少：新值 = 原值 × (1 − r/100)）。Percentage point（百分点，官方术语）：a change from 40% to 50% is 10 percentage points, NOT a 10% increase（从 40% 到 50% 是 10 个百分点，不是 10% 的增长；10% increase of 40% would be 44%）。用友好的整数（friendly numbers），答案是整数。不用计算器（calculators are not allowed）。金额用新加坡元 S$（如涉及钱币）。唯一性 unique keys：两个选项不能是同一个金额。不要同时提供 88 和 80 + 8 作为两个选项。不要在同一题中同时提供「10 percentage points」和「10% increase」作为两个正确选项（一题只有一个正确答案）。The wrong fossil values 必须作为错误选项。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names（percentage point 是官方术语）。
        </p>
      </div>
    </div>
  );
}
