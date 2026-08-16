export default function DualValidationMapMathWeek15() {
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
                Mei has 12 stickers. She wants to arrange them in equal rows with no stickers left over. Which is a factor of 12?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Factors and Multiples</strong><br />
                • 2.1 factors, multiples and their relationship<br />
                • 2.2 determining if a 1-digit number is a factor of a given number within 100
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：识别因数。12 的因数有 1, 2, 3, 4, 6, 12。6 可以整除 12（12 ÷ 6 = 2 无余数）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Is 6 a factor of 42?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Factors and Multiples</strong><br />
                • 2.2 determining if a 1-digit number is a factor of a given number within 100
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：测试因数。42 ÷ 6 = 7 无余数，所以 6 是 42 的因数
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                What are the common factors of 12 and 18?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Factors and Multiples</strong><br />
                • 2.3 finding the common factors of two given numbers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：找公因数。12 的因数：1, 2, 3, 4, 6, 12。18 的因数：1, 2, 3, 6, 9, 18。公因数：1, 2, 3, 6
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                Is 35 a multiple of 7?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Factors and Multiples</strong><br />
                • 2.4 determining if a number is a multiple of a given 1-digit number
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：判断倍数。7 × 5 = 35，所以 35 是 7 的倍数
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                Smallest common number for packs of 4 and 6.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Factors and Multiples</strong><br />
                • 2.5 finding the common multiples of two given 1-digit numbers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：找公倍数。4 的倍数：4, 8, 12, 16, 20...。6 的倍数：6, 12, 18, 24...。最小公倍数是 12（本周不叫 LCM，只说 smallest common multiple）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                Which is NOT a factor of 24?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Factors</strong><br />
                • Identifying factors within 100
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 新概念：区分因数和非因数。24 的因数：1, 2, 3, 4, 6, 8, 12, 24。5 不是因数（24 ÷ 5 有余数）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                List all the factors of 18.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Factors</strong><br />
                • Listing all factors systematically
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：系统列举因数。18 的因数：1, 2, 3, 6, 9, 18（配对：1×18, 2×9, 3×6）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                Which number is a common factor of both 20 and 30?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Common factors</strong><br />
                • Finding common factors of two numbers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：识别公因数。20 的因数：1, 2, 4, 5, 10, 20。30 的因数：1, 2, 3, 5, 6, 10, 15, 30。公因数包括 10
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                Which of these is a multiple of 8?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Multiples</strong><br />
                • Identifying multiples
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：识别倍数。8 的倍数：8, 16, 24, 32, 40, 48...。48 = 8 × 6
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                What are the first three common multiples of 3 and 4?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Common multiples</strong><br />
                • Finding common multiples of two 1-digit numbers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：找公倍数。3 的倍数：3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36...。4 的倍数：4, 8, 12, 16, 20, 24, 28, 32, 36...。前三个公倍数：12, 24, 36
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                A number is a factor of 36 and also a factor of 48. Which could it be?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Common factors</strong><br />
                • Finding common factors application
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 标准技能：应用公因数。36 的因数：1, 2, 3, 4, 6, 9, 12, 18, 36。48 的因数：1, 2, 3, 4, 6, 8, 12, 16, 24, 48。公因数：1, 2, 3, 4, 6, 12。选项中 12 是公因数
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                Priya says: "Any number is a factor of itself." Is she correct?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Factor properties</strong><br />
                • Understanding factor-multiple relationship
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 概念理解：任何数都是自己的因数（例如 7 ÷ 7 = 1），任何数也都是自己的倍数
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                If 4 is a factor of 12, what is the relationship?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers: Factor-multiple relationship</strong><br />
                • 2.1 factors, multiples and their relationship
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 关系理解：如果 4 是 12 的因数，那么 12 就是 4 的倍数。因数和倍数是互逆关系
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) List all factors of 48.<br />
                (b) Find the smallest number that is a multiple of both 6 and 9. Show working.<br />
                (c) Explain the relationship between factors and multiples using the example: "3 is a factor of 15" and "15 is a multiple of 3."
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers → Comprehensive Application</strong><br />
                • Listing all factors systematically<br />
                • Finding common multiples<br />
                • Understanding factor-multiple relationship<br />
                • Explaining mathematical reasoning
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 48 的因数：1, 2, 3, 4, 6, 8, 12, 16, 24, 48；(b) 6 的倍数：6, 12, 18, 24, 30, 36...。9 的倍数：9, 18, 27, 36...。最小公倍数是 18；(c) 解释：3 整除 15（15 ÷ 3 = 5），所以 3 是 15 的因数，15 是 3 的倍数。这两个说法表达同一个关系
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
          • Content points: <strong>Whole Numbers → Factors and Multiples</strong> 2.1 factors, multiples and their relationship; 2.2 determining if a 1-digit number is a factor of a given number within 100; 2.3 finding the common factors of two given numbers; 2.4 determining if a number is a multiple of a given 1-digit number; 2.5 finding the common multiples of two given 1-digit numbers
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
