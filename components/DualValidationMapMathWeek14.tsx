export default function DualValidationMapMathWeek14() {
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
                At Changi Airport, the number of passengers is 85 432. What is the value of the digit 5?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Place Value</strong><br />
                • Numbers up to 100 000<br />
                • Understanding place value (ten thousands, thousands, hundreds, tens, ones)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：识别五位数中每个数字的位值。85 432 中的 5 在千位 = 5 000
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Mr Tan's company has 67 890 items. Mrs Lee's company has 67 980 items. Which has more?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Comparing</strong><br />
                • Comparing numbers up to 100 000<br />
                • Understanding relative magnitude
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：比较五位数的大小。从万位开始比较，如果相同则比较千位、百位、十位。67 980 &gt; 67 890
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                The library has 52 147 books. Write this number in words.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Reading and Writing</strong><br />
                • Reading and writing numbers in words and numerals
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：将五位数字转换为文字。52 147 = Fifty-two thousand, one hundred and forty-seven
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                Production: January 34 567, February 34 756, March 34 657, April 34 576. Which month highest?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Comparing and Ordering</strong><br />
                • Comparing multiple numbers<br />
                • Finding maximum value
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：比较多个五位数，找出最大值。34 756 是最大的数字（February）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                Write ninety-three thousand, two hundred and fifteen in numerals.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Reading and Writing</strong><br />
                • Converting words to numerals<br />
                • Understanding place value notation
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：将文字数字转换为阿拉伯数字。ninety-three thousand, two hundred and fifteen = 93 215
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                In 78 456, the digit 7 is in the _____ place.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Place value</strong><br />
                • Identifying place value positions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 新概念：识别五位数中各数字的位值。78 456 中的 7 在万位（ten thousands place）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                Arrange from smallest to largest: 45 678, 45 768, 45 687, 45 786.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Ordering</strong><br />
                • Arranging numbers in ascending order
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：按从小到大排序。比较百位、十位、个位：45 678, 45 687, 45 768, 45 786
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                Missing number: 52 000, 54 000, 56 000, _____, 60 000
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Number patterns</strong><br />
                • Identifying and continuing patterns
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：识别数字规律（每次增加 2 000），找出缺失的数 = 58 000
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                Round 67 482 to the nearest thousand.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Rounding</strong><br />
                • Rounding to nearest thousand
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：四舍五入到千位。67 482 → 67 000（百位是 4，小于 5，向下取整）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                In 90 345, which digit is in the hundreds place?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Place value</strong><br />
                • Identifying specific place values
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：识别百位数字。90 345 中百位是 3
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                Compare: 81 234 _____ 81 324
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Comparing</strong><br />
                • Using comparison symbols (&gt;, &lt;, =)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：比较两个五位数。81 234 &lt; 81 324（百位 2 &lt; 3）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                What is 10 000 more than 56 789?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Addition</strong><br />
                • Adding multiples of 10 000<br />
                • Understanding place value in addition
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：万位加 1。56 789 + 10 000 = 66 789
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                The smallest 5-digit number is _____.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Number sense</strong><br />
                • Understanding number magnitude and range
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 新概念：最小的五位数 = 10 000（万位是 1，其余位是 0）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) The school fundraiser collected $73 685. Write this in words. Show place value of each digit.<br />
                (b) Compare: Fundraiser A $84 567 and Fundraiser B $84 657. Which is larger?<br />
                (c) Goal is $90 000. Collected $73 685. How much more needed? Show working.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Comprehensive Application</strong><br />
                • Writing numbers in words<br />
                • Identifying place values<br />
                • Comparing numbers<br />
                • Subtraction with 5-digit numbers<br />
                • Real-world money applications
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 73 685 = Seventy-three thousand, six hundred and eighty-five；(b) 比较 84 567 &lt; 84 657；(c) 计算差值 90 000 − 73 685 = 16 315
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
          • Content points: <strong>Whole Numbers</strong> 4.1 Numbers up to 100 000; 4.2 Place value (ten thousands, thousands, hundreds, tens, ones); 4.3 Reading and writing numbers in numerals and words; 4.4 Comparing and ordering numbers; 4.5 Number patterns
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
