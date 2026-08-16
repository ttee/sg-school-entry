export default function DualValidationMapSmathWeek18() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 18 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）百分数第二小节：comparing two quantities by percentage（用百分数比较两个量）。第 17 周已教 N3 的 3.1，本周只教 3.2。
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
                <strong>应用题</strong><br />5 道选择题（比较 15 和 20、S$18 和 S$24、12 和 16、9 和 12、两个测验分数 20 和 25）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N3. Percentage</strong><br />3.2 comparing two quantities by percentage<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 17 周已完成 N3 的 3.1（expressing one quantity as a percentage of another），本周只教 3.2（comparing two quantities by percentage）。本周不教 3.3 percentages greater than 100%，3.4 percentage increase/decrease，3.5 reverse percentages，3.6 solving problems involving percentage（3.3–3.6 是后续内容）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（比较 S$16 和 S$20、S$30 和 S$40、班级 32 人和 40 人、21 和 28、which working is correct for comparing 18 and 24、食堂两个区 60 座位和 80 座位、Aisha S$35 vs Wei S$28 谁有更多钱、14 和 16）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.2 comparing two quantities by percentage</strong><br />To compare A and B by percentage：express the smaller as a % of the larger（将较小的表示为较大的的百分比）。<br />比较 15 和 20：15 &lt; 20，所以 15 is (15 ÷ 20) × 100% = 75% of 20。15 is smaller, 20 is larger。<br />'A is 75% of B' means A is smaller than B（A 是 B 的 75%，意味着 A &lt; B，因为 75% &lt; 100%）。<br />应用题 word problem：Wei has S$18, Aisha has S$24. Compare their amounts by percentage. Express the smaller as a percentage of the larger. Solution: S$18 &lt; S$24. (18 ÷ 24) × 100% = 0.75 × 100% = 75%. So S$18 is 75% of S$24 (Wei has less)。<br />测验分数 test scores：Wei scored 12 marks, Aisha scored 16 marks. Who scored higher? Compare by percentage. Solution: 12 &lt; 16. Aisha scored higher. Express Wei's score as a percentage of Aisha's: (12 ÷ 16) × 100% = 0.75 × 100% = 75%. Wei's score is 75% of Aisha's score。<br />用友好的整数 friendly numbers：答案是整数百分比或简单值（如 12.5%, 37.5%, 75%, 80%）。<br />不用计算器 calculators are not allowed。金额 money：新加坡元 S$，never 美元（do not use USD）。<br />本周化石 fossil error：comparing the wrong way（错误地说 20 is 75% of 15，应该是 15 is 75% of 20；正确顺序是 smaller ÷ larger，不是 larger ÷ smaller）；treating 'A is 75% of B' as A being larger（如果 A is 75% of B，则 A 较小，B 较大，不是 A 较大；75% &lt; 100% 意味着 A &lt; B）。<br />唯一性 unique keys：两个选项不能是同一个金额的不同写法。如果一个选项是 75%，不能同时提供 75% 和 3/4 作为两个选项（那是同一个值）。不要在同一题中同时提供「15 is 75% of 20」和「20 is 133% of 15」作为两个正确选项（一题只有一个正确答案）。The inverted comparison（反向比较，如 20 is 133% of 15）必须作为错误选项（wrong option），不是第二个正确答案。<br />本周只教 ≤ 100% 的情况（express the smaller as a % of the larger），不教 &gt;100%（那是下周 3.3 percentages greater than 100%）。第 17 周已教 3.1（expressing one quantity as a percentage of another），本周教 3.2（comparing two quantities by percentage）。本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。不发明官方 cut-scores 或 extra official names（不发明「percentage difference」等官方术语）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出比较 24 和 32 的步骤、S$45 和 S$60 比较的步骤、Wei 18 分 vs Aisha 24 分测验分数比较的步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N3.2 comparing two quantities by percentage</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1（compare A and B by percentage, express the smaller as a % of the larger）：Compare 15 and 20 by percentage.<br />Solution: First identify which is smaller. 15 &lt; 20, so 15 is smaller and 20 is larger. Express 15 as a percentage of 20. (15 ÷ 20) × 100% = 0.75 × 100% = 75%. So 15 is 75% of 20.<br />Answer: 15 is 75% of 20 (or: 15 is smaller, 20 is larger; 15 is 75% of 20).<br />例 2（应用题 word problem with money）：Wei has S$18. Aisha has S$24. Compare their amounts by percentage. Express the smaller amount as a percentage of the larger amount.<br />Solution: Compare S$18 and S$24. S$18 &lt; S$24, so S$18 is smaller. (18 ÷ 24) × 100% = 0.75 × 100% = 75%. So S$18 is 75% of S$24.<br />Answer: S$18 is 75% of S$24 (or: Wei has less; his amount is 75% of Aisha's).<br />例 3（应用题 word problem with test scores）：Wei scored 12 marks. Aisha scored 16 marks. Who scored higher? Compare by percentage.<br />Solution: 12 &lt; 16, so Wei scored lower and Aisha scored higher. Express Wei's score as a percentage of Aisha's. (12 ÷ 16) × 100% = 0.75 × 100% = 75%. So Wei's score is 75% of Aisha's score.<br />Answer: Aisha scored higher. Wei's score is 75% of Aisha's score.<br />关键步骤：Step 1: Identify which is smaller and which is larger (确定哪个较小，哪个较大). Step 2: Express the smaller as a percentage of the larger: (smaller ÷ larger) × 100% (将较小的除以较大的，再乘 100%). Step 3: State the comparison (陈述比较结果：A is X% of B, so A is smaller and B is larger).<br />化石：Comparing the wrong way（错误地说 20 is 75% of 15，应该是 15 is 75% of 20；正确顺序是 smaller ÷ larger，不是 larger ÷ smaller）；Treating 'A is 75% of B' as A being larger（如果 A is 75% of B，则 A 较小，B 较大，不是 A 较大；75% &lt; 100% 意味着 A &lt; B）；本周只教 ≤ 100% 的情况（express the smaller as a % of the larger），不教 &gt;100%（那是下周 3.3）。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N3. Percentage: 3.2 comparing two quantities by percentage（本周只教 3.2，第 17 周已教 3.1，本周不教 3.3–3.6 percentages greater than 100%/increase/decrease/reverse/problems）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>comparing the wrong way（错误地说 20 is 75% of 15，应该是 15 is 75% of 20；正确顺序是 smaller ÷ larger）；treating 'A is 75% of B' as A being larger（如果 A is 75% of B，则 A 较小，B 较大，不是 A 较大；75% &lt; 100% 意味着 A &lt; B）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N3. Percentage: 3.2 comparing two quantities by percentage（本周只教 3.2）。To compare A and B by percentage: express the smaller as a % of the larger（将较小的表示为较大的的百分比）。比较 15 和 20：15 &lt; 20，所以 15 is (15 ÷ 20) × 100% = 75% of 20。15 is smaller, 20 is larger。'A is 75% of B' means A is smaller than B（A 是 B 的 75%，意味着 A &lt; B）。用友好的整数（friendly numbers），答案是整数百分比或简单值（如 12.5%, 37.5%）。不用计算器（calculators are not allowed）。金额用新加坡元 S$（如涉及钱币）。唯一性 unique keys：两个选项不能是同一个金额的不同写法。如果一个选项是 75%，不能同时提供 75% 和 3/4 作为两个选项。不要在同一题中同时提供「15 is 75% of 20」和「20 is 133% of 15」作为两个正确选项（一题只有一个正确答案）。The inverted comparison（反向比较，如 20 is 133% of 15）必须作为错误选项。本周只教 ≤ 100% 的情况（express the smaller as a % of the larger），不教 &gt;100%（那是下周 3.3）。第 17 周已教 3.1（expressing one quantity as a percentage of another），本周教 3.2（comparing two quantities by percentage）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names（不发明「percentage difference」等官方术语）。
        </p>
      </div>
    </div>
  );
}
