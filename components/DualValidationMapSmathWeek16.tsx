export default function DualValidationMapSmathWeek16() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 16 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）数论第二部分完结：ratio and proportion 的第三小节（problems involving ratio）。本周完成官方 N2。
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
                <strong>应用题</strong><br />5 道选择题（按比分配金额、已知一个量和比求另一个、已知差和比求总量、有理数比先化简再分配、比较谁多和多多少）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion</strong><br />2.3 problems involving ratio<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 15 周已教 2.1–2.2（ratios involving rational numbers, writing a ratio in its simplest form），本周只教 2.3（problems involving ratio），本周完成官方 N2。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（班级学生比、按比分配金额、已知一个量求另一个、按比重新分配总和、判断正确算式、已知分配后剩余、商店物品比、有理数比先化简再求小份）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N2.3 problems involving ratio</strong><br />按比分配 share a quantity in a given ratio：S$60 in 2 : 3 → total parts = 2+3=5, one part = S$60÷5 = S$12, shares are S$24 and S$36。<br />已知一个量和比，求另一个量 given one quantity and the ratio, find the other：Wei has S$24, Wei : Aisha = 2 : 3 → Wei's 2 parts = S$24, one part = S$24÷2 = S$12, Aisha's 3 parts = 3×S$12 = S$36。<br />已知差和比，求数量 given the difference and the ratio, find a quantity：Aisha has S$12 more than Wei, ratio 2 : 3 → difference = 3−2 = 1 part = S$12, Wei's 2 parts = 2×S$12 = S$24, Aisha's 3 parts = 3×S$12 = S$36。<br />比可能涉及有理数 ratios may involve rationals from last week（先化简再用）：如 1/2 : 1/3 化简为 3 : 2，然后用 3 : 2 来分配。<br />不用计算器 calculators are not allowed。金额 money：新加坡元 S$，never 美元（do not use USD）。<br />本周化石 fossil error：using 2/3 of the total when the ratio is 2 : 3（如果比是 2 : 3，错误地用 2/3 of total，正确应该是 2/5 of total，因为总份数是 2+3=5）；swapping who gets which part（如果 Wei : Aisha = 2 : 3，把 Wei 的份数错给成 3 parts，Aisha 错给成 2 parts，应该 Wei 是 2 parts，Aisha 是 3 parts）。<br />唯一性 unique keys：两个选项不能是同一个金额。如果 key 是 S$24，不能同时提供 S$24 和 S$36 作为「Wei 的份数」的正确答案在同一题中。化石 2/3-of-total 必须作为错误选项（wrong option），不是第二个正确答案。<br />本周完成 N2（第 15 周教了 2.1–2.2 有理数比与化简，本周教 2.3 比的应用题）。本周不教 N3 percentage（百分数，那是更后面的内容）。<br />本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。不发明官方 cut-scores 或 extra official names（不发明「地图比例尺」等官方主题名，ordinary share / find-one-quantity problems are enough）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出按比分配金额的步骤、已知一个量求另一个量的步骤、班级分组按比分配人数的步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N2.3 problems involving ratio</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1（按比分配）：Wei and Aisha share S$60 in the ratio 2 : 3. How much does Wei get?<br />Solution: Ratio 2 : 3. Total parts = 2 + 3 = 5. One part = S$60 ÷ 5 = S$12. Wei gets 2 parts = 2 × S$12 = S$24. Aisha gets 3 parts = 3 × S$12 = S$36.<br />Answer: Wei gets S$24, Aisha gets S$36.<br />例 2（已知一个量求另一个量）：Wei has S$24. The ratio Wei : Aisha = 2 : 3. How much does Aisha have?<br />Solution: Wei's 2 parts = S$24. One part = S$24 ÷ 2 = S$12. Aisha's 3 parts = 3 × S$12 = S$36.<br />Answer: Aisha has S$36.<br />例 3（已知差求数量）：Wei and Aisha share money in the ratio 2 : 3. Aisha gets S$12 more than Wei. How much does Wei get?<br />Solution: Ratio 2 : 3. Difference = 3 − 2 = 1 part = S$12. Wei's 2 parts = 2 × S$12 = S$24. Aisha's 3 parts = 3 × S$12 = S$36.<br />Answer: Wei gets S$24.<br />关键步骤：Step 1: Find total parts (总份数 = 比的各项相加). Step 2: Find one part (一份 = total ÷ total parts). Step 3: Find each share (each share = one part × that person's ratio number).<br />化石：比 2 : 3 时，用 2/3 of total 来算 Wei 的份数 ✗ (应该是 2/5 of total，因为总份数是 2+3=5)；比 Wei : Aisha = 2 : 3 时，把 Wei 的份数算成 3 parts ✗ (应该是 2 parts)；忘记先把有理数比化简 ✗ (如果比是 1/2 : 1/3，必须先化简为 3 : 2，然后用 3 : 2 来算)。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.3 problems involving ratio（本周只教 2.3，这是 N2 最后一小节，本周完成官方 N2，不教 N3 percentage）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>using 2/3 of the total when the ratio is 2 : 3（如果比是 2 : 3，错误地用 2/3 of total，正确应该是 2/5 of total，因为总份数是 2+3=5）；swapping who gets which part（如果 Wei : Aisha = 2 : 3，把 Wei 的份数错给成 3 parts，Aisha 错给成 2 parts，应该 Wei 是 2 parts，Aisha 是 3 parts）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N2. Ratio and proportion: 2.3 problems involving ratio（本周只教 2.3）。按比分配 share a quantity in a given ratio：S$60 in 2 : 3 → total parts = 2+3=5, one part = S$60÷5 = S$12, shares are S$24 and S$36。已知一个量和比，求另一个量 given one quantity and the ratio, find the other：Wei has S$24, Wei : Aisha = 2 : 3 → Wei's 2 parts = S$24, one part = S$24÷2 = S$12, Aisha's 3 parts = 3×S$12 = S$36。已知差和比，求数量 given the difference and the ratio, find a quantity：Aisha has S$12 more than Wei, ratio 2 : 3 → difference = 3−2 = 1 part = S$12, Wei's 2 parts = 2×S$12 = S$24, Aisha's 3 parts = 3×S$12 = S$36。比可能涉及有理数（先化简再用）：如 1/2 : 1/3 化简为 3 : 2，然后用 3 : 2 来分配。不用计算器（calculators are not allowed）。金额用新加坡元 S$（如涉及钱币）。唯一性 unique keys：两个选项不能是同一个金额。如果 key 是 S$24，不能同时提供 S$24 和 S$36 作为「Wei 的份数」的正确答案在同一题中。化石 2/3-of-total 必须作为错误选项。本周完成 N2（第 15 周教了 2.1–2.2 有理数比与化简，本周教 2.3 比的应用题）。本周不教 N3 percentage（百分数，那是更后面的内容）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names（不发明「地图比例尺」等官方主题名，ordinary share / find-one-quantity problems are enough）。'problems involving ratio' 是官方用词 in N2.3。
        </p>
      </div>
    </div>
  );
}
