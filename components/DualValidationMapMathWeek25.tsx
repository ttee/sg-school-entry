export default function DualValidationMapMathWeek25() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照官方大纲 / Mapping to Official Syllabus
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周练习题对应 <strong>MOE 2021 Primary Mathematics Syllabus P1 to P6</strong>（Updated October 2025）中的 <strong>Primary 4</strong> 内容，符合 MOE AEIS 的「<strong>preceding level</strong>」规则：<em>申请 P5 入学的孩子需掌握 P4 数学内容</em>。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周作业题目
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                对应 P4 大纲内容
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                AEIS preceding level 规则
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q1</strong><br />
                40 children. Pie: Football 1/2, Swimming 1/4, Basketball 1/8, Running 1/8. Most popular?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (identifying the largest slice by comparing fractions)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：比较分数大小找最大块。1/2 > 1/4 > 1/8，所以 Football (1/2) 最受欢迎
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                48 students. Pie: Bus 1/2. How many by bus? (1/2 of 48 = 48 ÷ 2)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (calculating the number in a slice using fraction of a set)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：读饼图一块的分数，用分数乘总数求人数。1/2 of 48 = 48 ÷ 2 = 24 students
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                24 students. Pie: Apple 1/3, Orange 1/4, Mango 1/6, Banana 1/4. Least popular?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (identifying the smallest slice by comparing fractions)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：比较分数找最小块。Convert: 1/3 = 4/12, 1/4 = 3/12, 1/6 = 2/12, 1/4 = 3/12. Smallest = 2/12 = 1/6 = Mango
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                80 books. Pie: Fiction 1/2. Fiction books? (1/2 of 80 = 80 ÷ 2 = 40)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (calculating the number in a slice)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：读饼图一块分数求人数。Fiction = 1/2 of 80 = 80 ÷ 2 = 40 books
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                60 students. Pie: Water 2/5. How many bought water? (2/5 of 60 = 60 ÷ 5 × 2 = 24)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (calculating with fractions where numerator > 1)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：用分数（分子>1）乘总数。2/5 of 60 = 60 ÷ 5 × 2 = 12 × 2 = 24 students
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                50 students. Pie: English 1/5, Maths 2/5, Science 1/5, Art 1/5. Most popular?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (comparing fractions to find largest)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：比较分数找最大块。2/5 > 1/5，所以 Maths 最受欢迎
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                36 families. Pie: Cycling 1/3. Cycling = 36 ÷ 3 = 12 families
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (calculating the number)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：1/3 of 36 = 36 ÷ 3 = 12 families
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                72 meals. Pie: Rice 1/2 = 36, Noodles 1/4 = 18, Bread 1/8 = 9, Sandwich 1/8 = 9. Same?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (comparing calculated values)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：算出每块人数再比较。Bread = Sandwich = 9，所以 Bread and Sandwich 数量相同
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                30 students. Pie: Dog 1/2 = 30 ÷ 2 = 15 students
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：1/2 of 30 = 30 ÷ 2 = 15 students chose dogs
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                45 children. Pie: Storybooks 1/3 = 45 ÷ 3 = 15 children
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：1/3 of 45 = 45 ÷ 3 = 15 children
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                64 students. Pie: Sports 1/2 = 32, Music 1/4 = 16, Art 1/8 = 8, Drama 1/8 = 8. Which = 16?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (calculating and comparing)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：算出每块人数。Music = 1/4 of 64 = 64 ÷ 4 = 16 students (唯一答案)
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                100 passengers. Pie: Singapore 1/2 = 100 ÷ 2 = 50 passengers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：1/2 of 100 = 100 ÷ 2 = 50 passengers
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                56 students. Pie: Soccer 3/8 = 56 ÷ 8 × 3 = 21 students
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from pie charts (fraction with numerator > 1)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：3/8 of 56 = 56 ÷ 8 × 3 = 7 × 3 = 21 students
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) 32 students. Pie: Apple 1/4, Orange 1/2, Mango 1/8, Banana 1/8. Most popular? Compare fractions: 1/2 > 1/4 > 1/8. Orange.<br />
                (b) 40 drinks. Pie: Water 1/2 = 40 ÷ 2 = 20. Juice 1/4 = 40 ÷ 4 = 10.<br />
                (c) 48 children. Pie: Running 1/3 = 48 ÷ 3 = 16. Check sum: 1/3 + 1/6 + 1/3 + 1/6 = 1 ✓
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Comprehensive Application</strong><br />
                • 1.2 reading and interpreting data from pie charts (comparing fractions, calculating numbers, verifying fractions sum to 1)<br />
                • Multi-step problem requiring showing working
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 比较分数找最大块：1/2 = 4/8, 1/4 = 2/8, 1/8 = 1/8, 1/8 = 1/8. 最大是 4/8 = 1/2，所以 Orange；(b) 算两块人数：Water = 1/2 of 40 = 40 ÷ 2 = 20，Juice = 1/4 of 40 = 40 ÷ 4 = 10；(c) 算一块人数并验证：Running = 1/3 of 48 = 48 ÷ 3 = 16。验证：1/3 + 1/6 + 1/3 + 1/6 = 2/6 + 1/6 + 2/6 + 1/6 = 6/6 = 1 ✓。要求孩子写出每一步算式（如 "40 ÷ 2 = 20"）、比较分数过程（如 "1/2 = 4/8, 1/4 = 2/8, so 4/8 > 2/8, Orange is the most popular"）、验证分数之和是 1（如 "Check: 1/2 + 1/4 + 1/8 + 1/8 = 4/8 + 2/8 + 1/8 + 1/8 = 8/8 = 1. Correct."）。常见错误：把最大块当作全部（treating the largest slice as the whole: 如果 Football 是 1/2，不是说 Football = 40，而是 Football = 40 ÷ 2 = 20）、先乘分子再除分母（incorrect order: should divide by denominator first: 40 ÷ 2, not 40 × 1 ÷ 2）、分数加起来不是 1（fractions do not sum to 1: 必须检查）、比较分数时不通分（not converting to common denominator when comparing unlike fractions）
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方大纲引用：</strong>
          <br />
          • <strong>2021 Primary Mathematics Syllabus P1 to P6 (Updated October 2025)</strong>, Section 6: Primary Mathematics Syllabus, Primary Four (P4)
          <br />
          • Strands covered: <em>Data Analysis</em> (Sub-strand: Statistics)
          <br />
          • Content points: <strong>Statistics</strong> 1.2 reading and interpreting data from pie charts
          <br />
          • 官方链接：
          <a
            href="https://www.moe.gov.sg/media/files/primary/2021%20Primary%20Mathematics%20Syllabus%20P1%20to%20P6%20Updated%20October%202025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            MOE 2021 Primary Mathematics Syllabus P1–P6 (Updated Oct 2025)
          </a>
        </p>
        <p className="text-xs text-ink-2 mt-2">
          📝 <strong>AEIS preceding level 规则引用：</strong>
          <br />
          "For AEIS-Primary, your child needs to be familiar with the Mathematics topics taught in our mainstream schools for the level <strong>preceding</strong> the one that they applied for. For example, if your child wishes to seek admission to Primary 5, they should be familiar with Primary 4 content."
          <br />
          • 官方链接：
          <a
            href="https://www.moe.gov.sg/international-students/aeis/test-details"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            MOE AEIS Test Details
          </a>
        </p>
        <p className="text-xs text-ink-2 mt-3 pt-2 border-t border-accent/10">
          本周只教：饼图（pie charts），用分数（fractions: 1/2, 1/4, 1/8, 1/5, 3/8 等），不用百分数（percentages）。本周不教：百分数（percentages，P5）、平均数/均值（mean / average）、360° 扇形角度计算（sector angles in degrees，除非用简单分数 1/4 = 90°，但重点是分数 of a set）、条形图/折线图作为主要新技能（bar graphs / line graphs 已在 P3 第 13 周 / P4 第 24 周学过）、P5/P6 数据主题（mode / median / range）。
        </p>
        <p className="text-xs text-muted mt-3 pt-2 border-t border-accent/10">
          所有情境、人名、地点均为虚构。
        </p>
      </div>
    </div>
  );
}
