export default function DualValidationMapMathWeek16() {
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
                Library has 8 shelves. Each shelf holds 1267 books. How many books in total?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Four Operations</strong><br />
                • 3.1 multiplication algorithm: up to 4 digits by 1 digit
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：4 位数 × 1 位数。1267 × 8 = 10136（竖式进位）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Mr Tan bought 23 boxes. Each box contains 124 pencils. How many pencils altogether?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Four Operations</strong><br />
                • 3.1 multiplication algorithm: up to 3 digits by 2 digits
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：3 位数 × 2 位数。124 × 23 = 2852。两个部分积对齐位值（124×20=2480, 124×3=372）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                9856 bottle caps packed equally into 4 bins. How many in each bin?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Four Operations</strong><br />
                • 3.2 division algorithm: up to 4 digits by 1 digit
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：4 位数 ÷ 1 位数（整除）。9856 ÷ 4 = 2464（竖式 long division）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                9847 books arranged equally on 8 shelves. How many books per shelf? How many left?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Four Operations</strong><br />
                • 3.2 division algorithm: up to 4 digits by 1 digit (with remainder)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：4 位数 ÷ 1 位数有余数。9847 ÷ 8 = 1230 R7（8 × 1230 = 9840, 9847 − 9840 = 7）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                5634 tarts. Pack 6 tarts in each box. How many boxes? How many left?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Four Operations</strong><br />
                • 3.2 division algorithm: up to 4 digits by 1 digit (with remainder)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：4 位数 ÷ 1 位数，理解 quotient（商）和 remainder（余数）。5634 ÷ 6 = 939 R0（整除）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                3456 × 7
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.1 multiplication algorithm (4-digit × 1-digit)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 新技能：4 位数 × 1 位数（竖式进位）。3456 × 7 = 24192
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                8293 × 8
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.1 multiplication algorithm (4-digit × 1-digit)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：4 位数 × 1 位数。8293 × 8 = 66344（注意连续进位 carry）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                425 × 36
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.1 multiplication algorithm (3-digit × 2-digit)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：3 位数 × 2 位数。425 × 36 = 15300。两个部分积：425×30=12750, 425×6=2550，对齐后相加
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                567 × 29
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.1 multiplication algorithm (3-digit × 2-digit)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：3 位数 × 2 位数。567 × 29 = 16443。两个部分积对齐位值
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                8964 ÷ 4
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.2 division algorithm (4-digit ÷ 1-digit, exact)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：4 位数 ÷ 1 位数（整除）。8964 ÷ 4 = 2241
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                7236 ÷ 3
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.2 division algorithm (4-digit ÷ 1-digit, exact)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：4 位数 ÷ 1 位数（整除）。7236 ÷ 3 = 2412
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                9125 ÷ 5
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.2 division algorithm (4-digit ÷ 1-digit, exact)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：4 位数 ÷ 1 位数（整除）。9125 ÷ 5 = 1825
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                Mei solved 6847 ÷ 7 = 978 R1. Is she correct?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Four Operations</strong><br />
                • 3.2 division algorithm (4-digit ÷ 1-digit, with remainder)<br />
                • Checking division answers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：检查除法答案。验证：7 × 978 = 6846, 6846 + 1 = 6847 ✓。余数必须小于除数（1 &lt; 7 ✓）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) 1856 students × $3 each = ?<br />
                (b) 4365 marbles ÷ 9 bags = ? R?<br />
                (c) 248 boxes × 45 markers. Enough for 600 students × 18 markers each?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Comprehensive Application</strong><br />
                • 3.1 multiplication algorithm (4-digit × 1-digit, 3-digit × 2-digit)<br />
                • 3.2 division algorithm (4-digit ÷ 1-digit with remainder)<br />
                • Word problem solving<br />
                • Showing working steps
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 1856 × 3 = 5568（4 位数 × 1 位数）；(b) 4365 ÷ 9 = 485 R0（整除，9 × 485 = 4365）；(c) 248 × 45 = 11160 markers total（3 位数 × 2 位数）。600 × 18 = 10800 needed（3 位数 × 2 位数）。11160 &gt; 10800，所以够。要求孩子写出算式、答案、以及判断理由
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
          • Strands covered: <em>Numbers and Algebra</em> (Sub-strand: Whole Numbers)
          <br />
          • Content points: <strong>Whole Numbers → Four Operations</strong> 3.1 multiplication algorithm: (i) up to 4 digits by 1 digit, (ii) up to 3 digits by 2 digits; 3.2 division algorithm: up to 4 digits by 1 digit
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
