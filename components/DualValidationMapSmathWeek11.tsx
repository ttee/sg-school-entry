export default function DualValidationMapSmathWeek11() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 11 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）数论第三部分：negative numbers, integers, rational numbers, real numbers and their four operations（负数、整数、有理数、实数及其四则运算）。
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
                <strong>应用题</strong><br />5 道选择题（负数四则运算）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations</strong><br />1.3 negative numbers, integers, rational numbers, real numbers and their four operations<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（负数加减乘除、(−3)² vs −3²、简单分数）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.3 negative numbers, integers, rational numbers, real numbers and their four operations</strong><br />负数 negative numbers：小于 0 的数（−1, −2, −3, ...）。<br />整数 integers：正整数、0、负整数的集合（..., −3, −2, −1, 0, 1, 2, 3, ...）。<br />有理数 rational numbers：能写成 a/b 形式的数（a 和 b 是整数，b ≠ 0）。整数是有理数的特例（3 = 3/1）。<br />实数 real numbers：有理数 + 无理数（本周只教孩子能手算的简单数，友好分数 denominators ≤ 12）。<br />四则运算 four operations：<br />加法 addition: 3 + (−5) = −2（加负数等于减正数 adding a negative = subtracting a positive）<br />减法 subtraction: −4 − 6 = −10（负数减正数更负），−4 − (−6) = 2（减负数等于加正数 subtracting a negative = adding a positive）<br />乘法 multiplication: (−3) × (−4) = 12（负负得正 negative × negative = positive），(−3) × 4 = −12（负正得负 negative × positive = negative）<br />除法 division: (−12) ÷ 4 = −3（负正得负），12 ÷ (−3) = −4（正负得负），(−12) ÷ (−3) = 4（负负得正）<br />运算顺序 order of operations：先括号 brackets，再乘除 multiplication/division（从左到右），最后加减 addition/subtraction（从左到右）。<br />区分 (−3)² and −3²：<br />(−3)² = (−3) × (−3) = 9（括号内先负后平方 brackets: negative first then square）<br />−3² = −(3 × 3) = −9（先平方后负 square first then negative）<br />简单有理数运算 simple rational operations：−2/3 + 1/6 = −4/6 + 1/6 = −3/6 = −1/2（同分母分子相加 like denominators: add numerators），(−3/4) × (8/9) = −24/36 = −2/3（分子乘分子、分母乘分母 multiply numerators and denominators，符号负正得负 negative × positive = negative，约分到最简 simplify to lowest terms）。<br />本周不教：1.4 计算器运算（AEIS 不允许使用计算器 calculators are not allowed）、1.5 数轴 number line、1.6 不等号 inequalities（&lt;, &gt;, ≤, ≥）、1.7 近似与估算 approximation and estimation（后续周）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出算式步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.3 negative numbers, integers, rational numbers, real numbers and their four operations</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />应用：温度变化（temperature changes，如实验室温度 5°C 降低 9°C 得 −4°C）、电梯楼层（lift floors，地下停车场用负数）、账户余额（account balance，支出超过余额得负数，如 S$50 − S$70 = −S$20）等情境需要负数四则运算。金额用新加坡元 S$（money in Singapore dollars S$）。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.3 negative numbers, integers, rational numbers, real numbers and their four operations（本周只教 1.3 负数、整数、有理数、实数及其四则运算，不教 1.4 计算器运算、1.5 数轴、1.6 不等号、1.7 近似与估算）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>sign error when adding/subtracting negatives（负数加减时符号错误，例如把 −4 − (−6) 当成 −10 而不是 2），minus × minus left negative（负负得正记错，以为负数乘负数还是负数），mixing (−3)² and −3²（混淆 (−3)² = 9 和 −3² = −9，前者括号内先负后平方，后者先平方后负）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.3 negative numbers, integers, rational numbers, real numbers and their four operations（本周只教 1.3 负数、整数、有理数、实数及其四则运算，不教 1.4 计算器运算、1.5 数轴、1.6 不等号、1.7 近似与估算）。加减法：3 + (−5) = −2（加负数等于减正数），−4 − 6 = −10（负数减正数更负），−4 − (−6) = 2（减负数等于加正数）。乘除法：(−3) × (−4) = 12（负负得正），(−12) ÷ 4 = −3（负正得负），12 ÷ (−3) = −4（正负得负）。运算顺序：先括号，再乘除（从左到右），最后加减（从左到右）。区分 (−3)² = 9 和 −3² = −9（前者括号内先负后平方，后者先平方后负）。简单有理数：−2/3 + 1/6 = −1/2，(−3/4) × (8/9) = −2/3（保持分数友好 denominators ≤ 12）。应用：温度、电梯楼层、账户余额等情境。金额用新加坡元 S$（如涉及钱币）。不用计算器（calculators are not allowed）。第 8–10 周已教 1.1 质数分解和 1.2 HCF/LCM/平方立方和根，本周是 1.3，后续周教 1.4–1.7。
        </p>
      </div>
    </div>
  );
}
