export default function DualValidationMapSmathWeek30() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 30 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）代数式和公式第五小节：recognising and representing patterns/relationships by finding an algebraic expression for the nth term（识别和表示模式/关系，找到第 n 项的代数式）。第 26–29 周已完成 5.1–5.4（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions、translation of simple real-world situations into algebraic expressions），本周只教 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term（找第 n 项）。本周不教 5.6 addition and subtraction of linear expressions（线性表达式加减），5.7 simplification（化简），5.8 brackets and common factors（括号和公因数）。这些是后续周次内容。
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
                <strong>选择题</strong><br />5 道选择题（2, 4, 6, 8 nth term、3, 5, 7, 9 nth term、4, 7, 10, 13 nth term、10th term of 2n+1、which working is correct for 3, 5, 7, 9）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae</strong><br />5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 26–29 周已完成 5.1–5.4（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions、translation of simple real-world situations into algebraic expressions），本周只教 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term（识别和表示模式/关系，找到第 n 项的代数式）。本周不教 5.6 addition and subtraction of linear expressions（线性表达式加减），5.7 simplification（化简），5.8 brackets and common factors（括号和公因数）。这些是后续周次内容。官方 5.5 wording（官方术语，逐字引用）：'recognising and representing patterns/relationships by finding an algebraic expression for the nth term'。本周方法：Find the nth term of a simple linear sequence（找简单线性数列的第 n 项）。2, 4, 6, 8, … → nth term = 2n。3, 5, 7, 9, … → nth term = 2n + 1（check: n=1 → 3; n=2 → 5）。4, 7, 10, 13, … → nth term = 3n + 1（n=1 → 4）。5, 8, 11, 14, … → nth term = 3n + 2. Common difference d, first term a: nth term = a + (n − 1)d, then simplify to pn + q. Friendly integers. No calculator. Do not use quadratic sequences（不用二次数列）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（5, 8, 11, 14 nth term、1, 3, 5, 7 nth term、5th term of 3n+1、which NOT the nth term of 2, 5, 8, 11、5, 9, 13, 17 nth term、6, 11, 16, 21 nth term、8th term of 4n−3、1, 4, 7, 10 nth term）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term</strong><br />识别和表示模式/关系，找到第 n 项的代数式（official content from MOE 2020 G3 Sec 1 syllabus）。Method: Find the nth term of a simple linear sequence（找简单线性数列的第 n 项）。Common difference d, first term a: nth term = a + (n − 1)d, then simplify to pn + q. 2, 4, 6, 8, … → nth term = 2n（公差 d = 2，第一项 a = 2，nth term = 2 + (n − 1) × 2 = 2n）。3, 5, 7, 9, … → nth term = 2n + 1（公差 d = 2，第一项 a = 3，nth term = 3 + (n − 1) × 2 = 2n + 1，不是 n + 2）。4, 7, 10, 13, … → nth term = 3n + 1（公差 d = 3，第一项 a = 4，nth term = 4 + (n − 1) × 3 = 3n + 1）。5, 8, 11, 14, … → nth term = 3n + 2. 5, 9, 13, 17, … → nth term = 4n + 1（公差 d = 4）. Friendly integers. No calculator. 本周化石 fossil errors：writing n + 2 for 3, 5, 7, 9（错误地写 n + 2，这只是公差，不是第 n 项；正确应该是 2n + 1，因为 n=1 → 3，n=2 → 5，而 n + 2 在 n=2 时给出 4 不是 5）；using the first term as the formula (always 3)（把第一项当作公式，永远是 3）；writing 2n for 3, 5, 7, 9（错误地写 2n，n=1 → 2 不是 3）；treating n as "the next term" not the position（把 n 当作"下一项"而不是位置）。唯一性 unique keys：两个选项不能是同一个表达式或同一组值（Two options must not be the same expression or the same sequence of values）。For 3, 5, 7, 9 do not offer both 2n + 1 and n + 2 as two "correct" options（对于 3, 5, 7, 9，不要同时提供 2n + 1 和 n + 2 作为两个"正确"选项）— n + 2 is the fossil and is WRONG（n + 2 是化石错误，是错的）。Check every formula at n=1 and n=2 before keying it（在录入每个公式前检查 n=1 和 n=2）。本周教 N5 的 5.5（recognising and representing patterns/relationships by finding an algebraic expression for the nth term，找第 n 项的代数式）。第 26–29 周已完成 5.1–5.4，本周只教 5.5 找第 n 项。本周不教 5.6 addition and subtraction of linear expressions，5.7 simplification，5.8 brackets and common factors。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求找到 2, 4, 6, 8 的第 n 项、3, 5, 7, 9 的第 n 项并说明为何 n + 2 是错的、4, 7, 10, 13 的第 n 项，并在 n = 1 和 n = 2 时检验）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范（finding the nth term of a simple linear sequence）：<br />例 1（2, 4, 6, 8, skill 5.5）：Find the nth term of the sequence 2, 4, 6, 8, … Show your working and check for n = 1 and n = 2.<br />Solution: ① Identify the pattern: The sequence increases by 2 each time. ② Common difference d = 2. ③ First term a = 2. ④ nth term = a + (n − 1)d = 2 + (n − 1) × 2 = 2 + 2n − 2 = 2n. ⑤ Check: When n = 1, 2n = 2 × 1 = 2 ✓. When n = 2, 2n = 2 × 2 = 4 ✓. Answer: 2n. (Note: The sequence increases by 2 each time, so the nth term is 2n. When n = 1, we get 2, the first term. When n = 2, we get 4, the second term.)<br />例 2（3, 5, 7, 9, skill 5.5）：Find the nth term of the sequence 3, 5, 7, 9, … Show your working and check for n = 1 and n = 2.<br />Solution: ① Identify the pattern: The sequence increases by 2 each time. ② Common difference d = 2. ③ First term a = 3. ④ nth term = a + (n − 1)d = 3 + (n − 1) × 2 = 3 + 2n − 2 = 2n + 1. ⑤ Check: When n = 1, 2n + 1 = 2 × 1 + 1 = 3 ✓. When n = 2, 2n + 1 = 2 × 2 + 1 = 5 ✓. Answer: 2n + 1. (Note: Do NOT write n + 2. Although n + 2 gives 3 when n = 1, it gives 4 when n = 2, not 5. So n + 2 is wrong. The correct nth term is 2n + 1.)<br />例 3（4, 7, 10, 13, skill 5.5）：Find the nth term of the sequence 4, 7, 10, 13, … Show your working and check for n = 1 and n = 2.<br />Solution: ① Identify the pattern: The sequence increases by 3 each time. ② Common difference d = 3. ③ First term a = 4. ④ nth term = a + (n − 1)d = 4 + (n − 1) × 3 = 4 + 3n − 3 = 3n + 1. ⑤ Check: When n = 1, 3n + 1 = 3 × 1 + 1 = 4 ✓. When n = 2, 3n + 1 = 3 × 2 + 1 = 7 ✓. Answer: 3n + 1. (Note: The common difference is 3, so the coefficient of n is 3. The first term is 4, so we adjust to 3n + 1.)<br />关键步骤：Step 1: Identify the pattern and find the common difference d (找出规律，确定公差 d：每次增加多少). Step 2: Identify the first term a (确定第一项 a). Step 3: Use the formula nth term = a + (n − 1)d and simplify to pn + q (使用公式 nth term = a + (n − 1)d，化简为 pn + q 的形式). Step 4: Check by substituting n = 1 and n = 2 (检验：代入 n = 1 和 n = 2，看是否得到数列的第一项和第二项). Step 5: State the final answer (陈述最终答案).<br />化石：Writing n + 2 for 3, 5, 7, 9（错误地写 n + 2，这只是公差，不是第 n 项；正确应该是 2n + 1，因为 n=1 → 3，n=2 → 5，而 n + 2 在 n=2 时给出 4 不是 5）。Using the first term as the formula (always 3)（把第一项当作公式，永远是 3）。Writing 2n for 3, 5, 7, 9（错误地写 2n，n=1 → 2 不是 3）。Treating n as "the next term" not the position（把 n 当作"下一项"而不是位置）。本周教 N5 的 5.5（recognising and representing patterns/relationships by finding an algebraic expression for the nth term，找第 n 项的代数式）。本周不教 5.6 addition and subtraction of linear expressions，5.7 simplification，5.8 brackets and common factors。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term（本周只教 5.5，第 26–29 周已完成 5.1–5.4。5.6 linear expressions、5.7 simplification、5.8 brackets and common factors 等是后续周次内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>writing n + 2 for 3, 5, 7, 9（错误地写 n + 2，这只是公差，不是第 n 项；正确应该是 2n + 1）；using the first term as the formula (always 3)（把第一项当作公式，永远是 3）；writing 2n for 3, 5, 7, 9（错误地写 2n，n=1 → 2 不是 3）；treating n as "the next term" not the position（把 n 当作"下一项"而不是位置）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.5 recognising and representing patterns/relationships by finding an algebraic expression for the nth term（本周只教 5.5，找第 n 项的代数式）。官方 5.5 wording（逐字引用）：'recognising and representing patterns/relationships by finding an algebraic expression for the nth term'。本周方法：Find the nth term of a simple linear sequence（找简单线性数列的第 n 项）。Common difference d, first term a: nth term = a + (n − 1)d, then simplify to pn + q. 2, 4, 6, 8, … → nth term = 2n。3, 5, 7, 9, … → nth term = 2n + 1（不是 n + 2）。4, 7, 10, 13, … → nth term = 3n + 1. 5, 8, 11, 14, … → nth term = 3n + 2. Friendly integers. No calculator（calculators are not allowed）。Do not use quadratic sequences（不用二次数列）。唯一性 unique keys：两个选项不能是同一个表达式或同一组值（Two options must not be the same expression or the same sequence of values）。For 3, 5, 7, 9 do not offer both 2n + 1 and n + 2 as two "correct" options（对于 3, 5, 7, 9，不要同时提供 2n + 1 和 n + 2 作为两个"正确"选项）— n + 2 is the fossil and is WRONG（n + 2 是化石错误，是错的）。Check every formula at n=1 and n=2 before keying it（在录入每个公式前检查 n=1 和 n=2）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。第 26–29 周已完成 5.1–5.4，本周只教 5.5，下周 5.6 linear expressions。
        </p>
      </div>
    </div>
  );
}
