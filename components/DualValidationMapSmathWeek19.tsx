export default function DualValidationMapSmathWeek19() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 19 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）百分数第三小节：percentages greater than 100%（大于 100% 的百分数）。第 17–18 周已教 N3 的 3.1–3.2，本周只教 3.3。
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
                <strong>应用题</strong><br />5 道选择题（25 as a % of 20、50 as a % of 20、S$36 as a % of S$24、18 as a % of 12、which is &gt;100%: 30 of 20 not 20 of 30）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N3. Percentage</strong><br />3.3 percentages greater than 100%<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 17 周已完成 N3 的 3.1（expressing one quantity as a percentage of another），第 18 周完成 3.2（comparing two quantities by percentage），本周只教 3.3（percentages greater than 100%）。本周不教 3.4 percentage increase/decrease（百分数增加与减少），3.5 reverse percentages（逆向百分数），3.6 solving problems involving percentage（3.4–3.6 是后续内容）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（40 as a % of 20、30 as a % of 24、S$50 as a % of S$40、36 as a % of 30、which working is correct for 25 as % of 20 where inverted 80% is wrong option、24 marks out of 20-mark paper、can a percentage be more than 100% with concrete pair、42 as a % of 35）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.3 percentages greater than 100%</strong><br />If A &gt; B, then A as a percentage of B is greater than 100%（如果 A &gt; B，则 A 占 B 的百分数大于 100%）。方法：(A ÷ B) × 100% &gt; 100%。<br />例 1：25 as a percentage of 20 = (25/20) × 100% = 1.25 × 100% = 125%。<br />例 2：50 as a percentage of 20 = (50/20) × 100% = 2.5 × 100% = 250%。<br />例 3：36 as a percentage of 24 = (36/24) × 100% = 1.5 × 100% = 150%。<br />A percentage can be more than 100% when the first quantity is larger than the second（当第一个数大于第二个数时，百分比可以超过 100%）。<br />应用题 word problem：Wei scored 24 marks out of 20. Express 24 as a percentage of 20. Solution: 24 &gt; 20. (24 ÷ 20) × 100% = 1.2 × 100% = 120%. So 24 is 120% of 20. This is possible because Wei's score (24) is larger than the paper total (20). (This example shows a scenario where scoring more than the paper total yields a percentage &gt;100%.)（韦得 24 分，总分 20 分。24 占 20 的百分数 = 120%。这是可能的，因为韦的分数大于试卷总分。）<br />金额 money：Wei has S$36. Aisha has S$24. Express Wei's amount as a percentage of Aisha's. Solution: S$36 &gt; S$24. (36 ÷ 24) × 100% = 1.5 × 100% = 150%. So S$36 is 150% of S$24 (Wei has more)（韦有 S$36，爱莎有 S$24。韦的金额占爱莎的 150%。韦有更多钱）。<br />用友好的整数 friendly numbers：答案是整数百分比或简单值（如 120%, 125%, 150%, 200%, 250%）。<br />不用计算器 calculators are not allowed。金额 money：新加坡元 S$，never 美元（do not use USD）。<br />本周化石 fossil error：thinking a percentage cannot exceed 100%（认为百分数不能超过 100%，错误！百分数可以大于 100%，当第一个数大于第二个数时）；writing the inverted ≤100% value instead（如 25 of 20 错误地写成 80%，应该是 125%；正确算法是 25 ÷ 20 = 1.25，再 × 100% = 125%，不是 20 ÷ 25 = 0.8，再 × 100% = 80%）。<br />唯一性 unique keys：两个选项不能是同一个金额的不同写法。如果一个选项是 125%，不能同时提供 125% 和 5/4 作为两个选项（那是同一个值）。不要在同一题中同时提供「25 is 125% of 20」和「20 is 80% of 25」作为两个正确选项（一题只有一个正确答案）。The inverted ≤100% value（反向的 ≤100% 值，如 20 as a percentage of 25 = 80%）必须作为错误选项（wrong option），不是第二个正确答案。<br />本周教 &gt;100% 的情况（当第一个数大于第二个数时）。第 17 周已教 3.1（expressing one quantity as a percentage of another），第 18 周教 3.2（comparing two quantities by percentage, express the smaller as a % of the larger, yielding ≤100%），本周教 3.3（percentages greater than 100%, when the first quantity is larger）。本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。不发明官方 cut-scores 或 extra official names（不发明「percentage surplus」等官方未提及的术语）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 express 30 as % of 20 的步骤、S$48 as % of S$40 的步骤、Aisha scored 26 out of 20-mark paper 应用题步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.3 percentages greater than 100%</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1（express A as percentage of B where A &gt; B）：Express 25 as a percentage of 20. Show your working steps.<br />Solution: ① A = 25, B = 20. ② Observe: 25 &gt; 20, so the percentage will be &gt;100%. ③ (A ÷ B) × 100% = (25 ÷ 20) × 100%. ④ 25 ÷ 20 = 1.25. ⑤ 1.25 × 100 = 125. Answer: 125%.<br />例 2（应用题 word problem with money where first amount &gt; second amount）：Wei has S$36. Aisha has S$24. Express Wei's amount as a percentage of Aisha's amount. Show your working steps.<br />Solution: ① Wei's amount = S$36. Aisha's amount = S$24. ② Observe: S$36 &gt; S$24, so the percentage will be &gt;100%. ③ (36 ÷ 24) × 100%. ④ 36 ÷ 24 = 1.5. ⑤ 1.5 × 100 = 150. Answer: 150%. (Or: Wei's amount is 150% of Aisha's amount, meaning Wei has more.)（韦的金额是爱莎的 150%，意味着韦有更多钱。）<br />例 3（应用题 word problem where score &gt; paper total）：Aisha scored 24 marks in a test. The test is out of 20 marks. Express Aisha's score as a percentage of the total marks. Show your working steps.<br />Solution: ① Aisha's score = 24 marks. Total marks = 20 marks. ② Observe: 24 &gt; 20, so the percentage will be &gt;100%. This is possible because Aisha scored more than the paper total (e.g. bonus marks). ③ (24 ÷ 20) × 100%. ④ 24 ÷ 20 = 1.2. ⑤ 1.2 × 100 = 120. Answer: 120%. (Aisha's score is 120% of the total marks.)（爱莎的分数是总分的 120%。这是可能的，因为爱莎的分数超过试卷总分，例如有加分题。）<br />关键步骤：Step 1: Identify A (the first quantity) and B (the second quantity). Step 2: Observe if A &gt; B or A &lt; B. If A &gt; B, the percentage will be &gt;100%. If A &lt; B, the percentage will be &lt;100%. Step 3: Use the formula (A ÷ B) × 100%. Step 4: Calculate A ÷ B (this gives a decimal &gt;1 if A &gt; B). Step 5: Multiply by 100 to get the percentage. Step 6: State the answer with the % symbol and interpret (e.g. 'A is 125% of B, meaning A is larger than B')（陈述答案并解释：A 是 B 的 125%，意味着 A 大于 B）。<br />化石：Thinking a percentage cannot exceed 100%（认为百分数不能超过 100%，错！当第一个数大于第二个数时，百分数可以大于 100%）；Writing the inverted ≤100% value instead（如 25 of 20 错误地写成 80%，应该是 125%；正确算法是 25 ÷ 20，不是 20 ÷ 25）。第 17–18 周教 ≤100% 的情况，本周教 &gt;100%。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N3. Percentage: 3.3 percentages greater than 100%（本周只教 3.3，第 17 周已教 3.1，第 18 周已教 3.2，本周不教 3.4–3.6 percentage increase/decrease/reverse/problems）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>thinking a percentage cannot exceed 100%（认为百分数不能超过 100%，错！当第一个数大于第二个数时，百分数可以大于 100%）；writing the inverted ≤100% value instead（如 25 of 20 错误地写成 80%，应该是 125%）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.3 percentages greater than 100%（本周只教 3.3）。If A &gt; B, then A as a percentage of B is greater than 100%（如果 A &gt; B，则 A 占 B 的百分数大于 100%）。方法：(A ÷ B) × 100% &gt; 100%。例：25 as a percentage of 20 = (25/20) × 100% = 125%。50 as a percentage of 20 = 250%。36 as a percentage of 24 = 150%。A percentage can be more than 100% when the first quantity is larger than the second（当第一个数大于第二个数时，百分比可以超过 100%）。用友好的整数（friendly numbers），答案是整数百分比（如 120%, 125%, 150%）。不用计算器（calculators are not allowed）。金额用新加坡元 S$（如涉及钱币）。唯一性 unique keys：两个选项不能是同一个金额。不要同时提供 125% 和 5/4 作为两个选项。不要在同一题中同时提供「25 is 125% of 20」和「20 is 80% of 25」作为两个正确选项（一题只有一个正确答案）。The inverted ≤100% value（反向的 ≤100% 值）必须作为错误选项。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。
        </p>
      </div>
    </div>
  );
}
