export default function DualValidationMapMathWeek20() {
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
                Value of digit in 3.256
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1. Decimals up to 3 decimal places<br />
                • 1.1 notation, representations and place values (tenths, hundredths, thousandths)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：3位小数的位值。3.256 中的 5 在百分位 = 0.05
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Compare 0.47 and 0.5
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.2 comparing and ordering decimals
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：比较小数。0.47 = 47 hundredths, 0.5 = 0.50 = 50 hundredths，所以 0.47 &lt; 0.5
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                Order 0.8, 0.75, 0.805
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.2 comparing and ordering decimals<br />
                • Ordering 3 decimals from smallest to greatest
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：排序小数。补零对齐：0.800, 0.750, 0.805。从小到大：0.75 &lt; 0.8 &lt; 0.805
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                0.4 as fraction in simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.3 expressing decimals as fractions<br />
                • Simplifying to simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：小数转分数。0.4 = 4/10 = 2/5（化简）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                3/5 as decimal
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.4 expressing fractions as decimals when the denominator is a factor of 10 or 100
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：分数转小数。5 是 10 的因数：3/5 = 6/10 = 0.6
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                0.25 as fraction in simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.3 expressing decimals as fractions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：0.25 = 25/100 = 1/4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                7/10 as decimal
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.4 expressing fractions as decimals
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：7/10 = 0.7
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                Round 2.36 to 1 d.p.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.5 rounding decimals to the nearest whole number / 1 decimal place / 2 decimal places
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：四舍五入到1位小数。看第2位：6 ≥ 5，进位。2.36 → 2.4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                Round 5.852 to 2 d.p.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.5 rounding decimals to 2 decimal places
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：四舍五入到2位小数。看第3位：2 &lt; 5，不进位。5.852 → 5.85
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                Compare 0.6 and 0.58
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.2 comparing and ordering decimals
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：0.6 = 0.60 &gt; 0.58
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                1/4 as decimal
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.4 expressing fractions as decimals
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：4 是 100 的因数。1/4 = 25/100 = 0.25
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                Round 3.47 to nearest whole number
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.5 rounding decimals to nearest whole number
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：看十分位：4 &lt; 5，不进位。3.47 → 3
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                0.75 as fraction in simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals</strong><br />
                • 1.3 expressing decimals as fractions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：0.75 = 75/100 = 3/4
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) Value of digit 8 in 12.385<br />
                (b) Compare and order: 1.2, 1.15, 1.205<br />
                (c) Convert: 0.6 to fraction, 3/4 to decimal, round 4.68 to 1 d.p.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Decimals → Comprehensive Application</strong><br />
                • 1.1 place values<br />
                • 1.2 comparing and ordering<br />
                • 1.3 expressing decimals as fractions<br />
                • 1.4 expressing fractions as decimals<br />
                • 1.5 rounding decimals
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 8 在百分位 = 0.08；(b) 补零对齐 1.200, 1.150, 1.205，从小到大 1.15 &lt; 1.2 &lt; 1.205；(c) 0.6 = 6/10 = 3/5, 3/4 = 75/100 = 0.75, 4.68 → 4.7（看百分位 8 ≥ 5 进位）。要求孩子写出算式、答案、以及说明（位值、补零对齐、化简、分母是10或100的因数、四舍五入规则）
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
          • Strands covered: <em>Numbers and Algebra</em> (Sub-strand: Decimals)
          <br />
          • Content points: <strong>Decimals → 1. Decimals up to 3 decimal places</strong> 1.1 notation, representations and place values (tenths, hundredths, thousandths); 1.2 comparing and ordering decimals; 1.3 expressing decimals as fractions; 1.4 expressing fractions as decimals when the denominator is a factor of 10 or 100; 1.5 rounding decimals to the nearest whole number / 1 decimal place / 2 decimal places
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
        <p className="text-xs text-muted mt-3 pt-2 border-t border-accent/10">
          所有情境、人名、地点均为虚构。
        </p>
      </div>
    </div>
  );
}
