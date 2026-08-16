export default function DualValidationMapMathWeek24() {
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
                Library loans: Mon 45, Tue 52, Wed 48, Thu 56, Fri 50 → most books on which day?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables and line graphs (finding the highest value)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：从给出的数据中找最大值。比较 45, 52, 48, 56, 50，最大是 56，对应 Thursday
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Temperature: Mon 30, Tue 31, Wed 29, Thu 32, Fri 30. Tue→Wed: up or down? By how much?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables and line graphs (identifying increase/decrease and calculating difference)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：读折线图趋势，判断升降。Tuesday 31°C → Wednesday 29°C，31 > 29，所以 down。差值 = 31 − 29 = 2°C
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                Students: Mon 28, Tue ?, Wed 34, Thu 40, Fri 36. Pattern +3 then -4
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.1 completing a table from given data
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：根据规律补全表格。Monday 28，规律 +3，所以 Tuesday = 28 + 3 = 31。验证：31 + 3 = 34 (Wednesday) ✓
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                Monday meals: Rice 68, Noodles 52, Bread 40. How much more rice than noodles?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables (comparing values, calculating difference)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：从表中读数并计算差值。Rice 68 − Noodles 52 = 16 more rice meals
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                Temperature: 8am 26°C, 10am 29°C, 12noon 31°C. Difference noon − 8am?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from line graphs (reading specific data points and finding difference)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：读折线图上的点，计算差值。Noon 31°C − 8am 26°C = 5°C
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                Rainfall mm: Mon 12, Tue 8, Wed 15, Thu 10, Fri 6. Lowest day?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables (finding the lowest value)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：从表中找最小值。比较 12, 8, 15, 10, 6，最小是 6，对应 Friday
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                Playground students: Mon 34, Tue 38, Wed 42, Thu 46, Fri 50. Mon→Fri increase?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables (calculating overall change)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：计算总增量。Friday 50 − Monday 34 = 16 students increase
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                Book sales: Mon 24, Tue 30, Wed 27, Thu 33, Fri 36. Which day went down?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from line graphs (identifying decrease)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：判断哪一天下降。Tuesday 30 → Wednesday 27，30 > 27，所以 Wednesday went down
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                Buses: 7am 18, 8am 25, 9am 32, 10am 28, 11am 22. Most buses at?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables (finding the highest value)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：找最大值。比较 18, 25, 32, 28, 22，最大是 32，对应 9 a.m.
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                East Coast Park: Sat 245, Sun 320. How much more on Sunday?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables (comparing two values and finding difference)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：计算差值。Sunday 320 − Saturday 245 = 75 more visitors
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                Savings: Jan $45, Feb $52, Mar $48, Apr $58, May $60. Biggest increase between?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from line graphs (comparing consecutive changes)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：比较连续月份增量。Jan→Feb: +7 (52−45), Feb→Mar: −4 (48−52), Mar→Apr: +10 (58−48), Apr→May: +2 (60−58)。最大是 Mar→Apr = 10，唯一最大增量
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                Temperature: 6am 24°C, 9am 28°C, 12noon 32°C, 3pm 30°C, 6pm 26°C. At noon?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.2 reading and interpreting data from tables (reading a specific value)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：从表中读特定值。直接读：12 noon = 32°C
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                Drinks sold: Mon 85, Tue 92, Wed 88, Thu 95, Fri 90. Tuesday?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics</strong><br />
                • 1.1 completing a table from given data
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：补全表格。直接给出了 Tuesday = 92 drinks（验证题，确认能读表）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) Rainy days: Jan 12, Feb 8, Mar 10, Apr 15. Most rainy month?<br />
                (b) Temperature noon: Mon 29°C, Tue 31°C, Wed 30°C, Thu 33°C, Fri 32°C. Highest day? Difference from Monday?<br />
                (c) Library visitors: Mon 56, Tue ?, Wed 68, Thu 74, Fri 70. Pattern +6. Find Tuesday.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Comprehensive Application</strong><br />
                • 1.1 completing a table from given data<br />
                • 1.2 reading and interpreting data from tables and line graphs (finding highest/lowest, calculating difference, identifying patterns)<br />
                • Multi-step problem requiring showing working
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 比较 12, 8, 10, 15，最大是 15，所以 April；(b) 找最高点：Thursday 33°C，差值 = 33 − 29 = 4°C；(c) 补全表格：Monday 56 + 6 = 62，所以 Tuesday = 62，验证：62 + 6 = 68 (Wednesday) ✓。要求孩子写出每一步算式、标注单位（°C, days, visitors）、说明读图方法（如 "I looked at the highest point on the line graph" 或 "我找到折线图上最高的点"）。常见错误：把折线两点之间的斜率当成数值（the slope is not the value, read the point on the vertical axis）、读错横轴日期（misreading the day/category on horizontal axis）、算差值用加法而不是减法（difference should be subtraction）、表格填数时单位漏写或错写（missing or wrong units）
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
          • Content points: <strong>Statistics</strong> 1.1 completing a table from given data, 1.2 reading and interpreting data from tables and line graphs
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
          本周不教：饼图（pie charts，下周）、条形图作为主要新技能（bar graphs 已在 P3 第 13 周学过）、平均数/均值（mean / average）、P5/P6 数据主题（mode / median / range）。
        </p>
        <p className="text-xs text-muted mt-3 pt-2 border-t border-accent/10">
          所有情境、人名、地点均为虚构。
        </p>
      </div>
    </div>
  );
}
