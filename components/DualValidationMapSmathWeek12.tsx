export default function DualValidationMapSmathWeek12() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 12 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）数论第四部分：representation and ordering of numbers on the number line（数轴上的数的表示和排序）。
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
                <strong>应用题</strong><br />5 道选择题（数轴上点的位置和排序）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations</strong><br />1.5 representation and ordering of numbers on the number line<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（数轴标点、排序、比较大小、判断哪个数在两数之间、简单分数和小数在数轴上的位置）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.5 representation and ordering of numbers on the number line</strong><br />数轴 number line：一条横线，中间标 0，0 右边是正数（positive numbers），0 左边是负数（negative numbers）。<br />表示 representation：在数轴上标出一个数对应的点。整数（integers）容易标，如 −3, 0, 2。简单有理数（simple rationals）也能标，如 −1/2（在 −1 和 0 中间）、3/2（在 1 和 2 中间）、−2.5（在 −3 和 −2 中间）。<br />排序 ordering：从左到右（left to right）就是从小到大（smallest to largest）。左边的数小于右边的数（further left means smaller）。<br />负数比较：−8 在 −3 的左边，所以 −8 小于 −3（−8 is to the left of −3, so −8 is smaller than −3）。本周常见化石：以为 −8 大于 −3（因为 8 &gt; 3）。<br />比较多个数：例如 −5, −1, 0, 2 从小到大排序为 −5, −1, 0, 2（左到右顺序）。<br />两数之间 between：哪个数在两个数之间。例如 −3 和 1 之间可以是 −2, −1, 0（这些数在数轴上都在 −3 右边且在 1 左边）。<br />简单分数和小数：−1/2 在 −1 和 0 中间（halfway between −1 and 0）。3/2 = 1.5，在 1 和 2 中间。−2.5 在 −3 和 −2 中间。<br />本周不教：1.6 不等号的使用（use of &lt;, &gt;, ≤, ≥），那是下一周的内容。本周可以用文字说「further left = smaller」或「−8 is smaller than −3」，但不把不等号符号作为本周的主要教学目标。本周不教 1.7 近似与估算 approximation and estimation（后续周）。<br />本周已完成 1.1–1.3 和跳过 1.4：第 8 周教了 1.1 质数和质数分解（primes and prime factorisation），第 9 周教了 1.2 HCF 和 LCM（highest common factor and lowest common multiple），第 10 周教了 1.2 平方、立方、平方根和立方根（squares, cubes, square roots and cube roots），第 11 周教了 1.3 负数、整数、有理数、实数及其四则运算（negative numbers, integers, rational numbers, real numbers and their four operations），1.4 计算器运算已跳过（AEIS 不允许使用计算器 calculators are not allowed），本周教 1.5 数轴上的数的表示和排序，下一周教 1.6 不等号。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出排序步骤或说明位置）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.5 representation and ordering of numbers on the number line</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />应用：温度读数（temperature readings，如 −8°C, −3°C, 0°C, 2°C 按从低到高排序）、楼层标记（floors above/below ground，如地下 3 层 = −3，0 是地面 ground level，5 是地上 5 层，从低到高排序）、账户余额（account balance with negative amounts，如欠款 −S$50 比余额 S$20 更小）等情境需要在数轴上表示和排序。金额用新加坡元 S$（money in Singapore dollars S$）。<br />写作步骤示范：<br />例 1：Arrange −5, 2, −1, 0 from smallest to largest.<br />Solution: On a number line, numbers increase from left to right. −5 is furthest left, then −1, then 0, then 2.<br />Answer: −5, −1, 0, 2<br />例 2：Mark the position of −1/2 on the number line.<br />Solution: −1/2 lies halfway between −1 and 0 on the negative side (left of 0).<br />例 3：Temperature application: On Monday the temperature was −8°C. On Tuesday it was −3°C. Which day was colder?<br />Solution: On a number line, −8 is to the left of −3, so −8 is smaller than −3. Smaller temperature means colder.<br />Answer: Monday (−8°C is colder than −3°C)
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.5 representation and ordering of numbers on the number line（本周只教 1.5 数轴上的数的表示和排序，不教 1.6 不等号符号、1.7 近似与估算）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>placing a negative on the positive side（把负数标在正数一侧）、thinking a more-negative number is larger because its absolute value is larger（以为更负的数更大，例如以为 −8 &gt; −3 因为 8 &gt; 3）。记住：数轴上越靠左的数越小（further left = smaller）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.5 representation and ordering of numbers on the number line（本周只教 1.5 数轴上的数的表示和排序）。数轴 number line：0 右边是正数，0 左边是负数。表示 representation：在数轴上标出整数（如 −3, 0, 2）和简单有理数（如 −1/2, 3/2, −2.5）。排序 ordering：从左到右 = 从小到大（left to right = smallest to largest）。越靠左越小（further left = smaller）。负数比较：−8 在 −3 左边，所以 −8 &lt; −3（注意：不是 −8 &gt; −3）。两数之间 between：例如 −3 和 1 之间可以是 −2, −1, 0。简单分数：−1/2 在 −1 和 0 中间，3/2 在 1 和 2 中间。不用计算器（calculators are not allowed）。应用：温度读数（−8°C 比 −3°C 更冷）、楼层（地下楼层用负数，地面 = 0，地上楼层用正数）、账户余额（负数 = 欠款）。金额用新加坡元 S$（如涉及钱币）。第 8–11 周已教 1.1 质数分解、1.2 HCF/LCM/平方立方和根、1.3 负数四则，1.4 计算器运算已跳过（AEIS 禁用计算器），本周是 1.5 数轴，下一周教 1.6 不等号（本周可以说「further left = smaller」或「−8 is smaller than −3」，但不把不等号符号作为本周主要练习内容）。
        </p>
      </div>
    </div>
  );
}
