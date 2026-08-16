export default function DualValidationMapMathWeek19() {
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
                2/7 + 3/7 (like fractions)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3. Addition and Subtraction<br />
                • 3.1 adding fractions (like denominators)<br />
                • Same denominator: add numerators
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：同分母分数加法。2/7 + 3/7 = 5/7
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                1 − (5/8 + 1/8), simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 subtracting fractions (like denominators)<br />
                • Simplifying to simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：同分母减法和化简。8/8 − 6/8 = 2/8 = 1/4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                1/2 + 1/4 (unlike fractions)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 adding fractions (not more than two different denominators)<br />
                • Finding common denominator
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：异分母加法（两个分母）。1/2 + 1/4 = 2/4 + 1/4 = 3/4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                2/3 − 1/6, simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 subtracting fractions (not more than two different denominators)<br />
                • Simplifying to simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：异分母减法和化简。2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                1/3 + 1/6, simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 adding fractions (not more than two different denominators)<br />
                • Denominators not exceeding 12
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：异分母加法。1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                3/4 − 1/2
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 subtracting fractions (unlike denominators)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：3/4 − 1/2 = 3/4 − 2/4 = 1/4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                5/12 + 1/4, simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 adding fractions (denominators ≤ 12)<br />
                • Simplifying
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：5/12 + 1/4 = 5/12 + 3/12 = 8/12 = 2/3
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                5/6 − 1/3, simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 subtracting fractions (unlike denominators)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                1/4 + 1/8
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 adding fractions (unlike denominators)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：1/4 + 1/8 = 2/8 + 1/8 = 3/8
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                7/10 − 1/5, simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 subtracting fractions (unlike denominators)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：7/10 − 1/5 = 7/10 − 2/10 = 5/10 = 1/2
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                3/8 + 1/4
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 adding fractions (unlike denominators)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：3/8 + 1/4 = 3/8 + 2/8 = 5/8
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                5/6 − 1/2, simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 subtracting fractions (unlike denominators)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：5/6 − 1/2 = 5/6 − 3/6 = 2/6 = 1/3
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                Which calculation shows 1/2 + 1/4?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 3.1 Understanding the algorithm<br />
                • Finding common denominator before adding
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：算法理解。正确算法：先找公分母再加分子。1/2 + 1/4 = 2/4 + 1/4 = 3/4
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) 2/5 + 1/5<br />
                (b) 3/4 − 1/2<br />
                (c) 1/3 + 1/6
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions → Comprehensive Application</strong><br />
                • 3.1 adding and subtracting fractions (like and unlike denominators)<br />
                • Word problem solving<br />
                • Showing working steps<br />
                • Simplifying to simplest form
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 2/5 + 1/5 = 3/5（同分母直接加分子）；(b) 3/4 − 1/2 = 3/4 − 2/4 = 1/4（异分母先通分：1/2 = 2/4，再减）；(c) 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2（异分母先通分，加完要化简）。要求孩子写出算式、答案、以及说明（同分母直接加减分子，异分母先找公分母，答案要化到最简）
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
          • Strands covered: <em>Numbers and Algebra</em> (Sub-strand: Fractions)
          <br />
          • Content points: <strong>Fractions → 3. Addition and Subtraction</strong> 3.1 adding and subtracting fractions with denominators of given fractions not exceeding 12 and not more than two different denominators
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
