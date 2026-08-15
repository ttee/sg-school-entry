export default function DualValidationMapMath() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照官方大纲 / Mapping to Official Syllabus
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周练习题对应 <strong>MOE 2021 Primary Mathematics Syllabus P1 to P6</strong>（Updated October 2025）中的 <strong>Primary 2</strong> 内容，符合 MOE AEIS 的「<strong>preceding level</strong>」规则：<em>申请 P3 入学的孩子需掌握 P2 数学内容</em>。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周作业题目
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                对应 P2 大纲内容
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                AEIS preceding level 规则
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q1–Q3</strong><br />
                书店购物、储蓄计算、小贩中心座位
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Number and Algebra → Whole Numbers</strong><br />
                • Numbers up to 1000<br />
                • Addition and subtraction algorithms (up to 3 digits)<br />
                <strong>Money</strong><br />
                • Counting amount of money in dollars and cents
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P3</strong> 的孩子需熟悉 <strong>P2</strong> 的整数加减（三位数）和钱币计算
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q4</strong><br />
                Sarah 数纸币和硬币
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Money</strong><br />
                • Counting amount of money in dollars and cents<br />
                • Reading and writing money in decimal notation
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子会数「几张纸币 + 几个硬币」，并换算成小数记号（decimal notation）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q5</strong><br />
                图书馆中英文藏书总数
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers</strong><br />
                • Addition and subtraction algorithms (up to 3 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                三位数加法（680 + 215），P2 核心技能
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1, Q3, Q8</strong><br />
                比较和排序数字
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers</strong><br />
                • Comparing and ordering numbers (up to 1000)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲明确要求 comparing and ordering numbers up to 1000
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2, Q7</strong><br />
                加减运算（三位数）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers</strong><br />
                • Addition and subtraction algorithms (up to 3 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 标准计算题：725 - 389, 348 + 276
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4, Q5, Q6</strong><br />
                钱币换算、纸币硬币计数
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Money</strong><br />
                • Counting amount of money in dollars and cents<br />
                • Reading and writing money in decimal notation<br />
                • Converting an amount of money in decimal notation to cents only, and vice versa
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                $6.75 = 675 cents（换算）<br />
                5 dollars and eight 10-cent coins = $5.80
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                食阁购物、找零
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Whole Numbers + Money</strong><br />
                • Multiplication within tables (2, 3, 4, 5, 10)<br />
                • Addition and subtraction algorithms<br />
                • Money calculations with decimal notation
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P2/P3 数学 Part 2 short-answer questions 要求 show working steps。本题练习 multi-step word problem 和钱币计算
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方大纲引用：</strong>
          <br />
          • <strong>2021 Primary Mathematics Syllabus P1 to P6 (Updated October 2025)</strong>, Section 5: Primary Mathematics Syllabus, Primary Two (P2)
          <br />
          • Strands covered: <em>Number and Algebra</em> (Whole Numbers, Money)
          <br />
          • 官方链接：
          <a
            href="https://www.moe.gov.sg/primary/curriculum/syllabus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            MOE Primary School Subjects and Syllabuses
          </a>
        </p>
        <p className="text-xs text-ink-2 mt-2">
          📝 <strong>AEIS preceding level 规则引用：</strong>
          <br />
          "For AEIS-Primary, your child needs to be familiar with the Mathematics topics taught in our mainstream schools for the level <strong>preceding</strong> the one that they applied for. For example, if your child wishes to seek admission to Primary 3, they should be familiar with Primary 2 content."
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
          所有情境、人名、地点均为虚构。我们<strong>不编造</strong> CES 分数、不编造「往年通过率」，也<strong>不承诺</strong>「包过」或录取结果。
        </p>
      </div>
    </div>
  );
}
