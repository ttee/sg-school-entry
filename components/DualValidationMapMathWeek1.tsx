export default function DualValidationMapMathWeek1() {
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
                <strong>阅读理解 Q1–Q2</strong><br />
                鸡腿分装、花圃种花
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Number and Algebra → Multiplication and Division</strong><br />
                • Multiplication tables of 2, 3, 4, 5 and 10<br />
                • Multiplying within the multiplication tables
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P3</strong> 的孩子需熟悉 <strong>P2</strong> 的乘法口诀（2、3、4、5、10 的倍数）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q3</strong><br />
                Ali 每周储蓄
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Multiplication and Division</strong><br />
                • Multiplication tables of 2, 3, 4, 5 and 10<br />
                • Mental calculation involving multiplication within multiplication tables
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子会用乘法解决「每周 $5，8 周」这类重复加法问题（5 × 8）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q4–Q5</strong><br />
                苹果平分、笔记本分架
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Multiplication and Division</strong><br />
                • Use of ÷<br />
                • Relationship between multiplication and division<br />
                • Dividing within the multiplication tables
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子理解除法是「平均分」，并知道 20 ÷ 4 = 5 因为 4 × 5 = 20（乘除互逆关系）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1–Q3</strong><br />
                乘法计算（3×5, 4×6, 10×7）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Multiplication and Division</strong><br />
                • Multiplication tables of 2, 3, 4, 5 and 10<br />
                • Mental calculation involving multiplication
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 标准计算题：孩子需熟记 2、3、4、5、10 的乘法口诀，并能快速计算
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4–Q5, Q7</strong><br />
                除法计算（18÷3, 20÷4, 15÷5）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Multiplication and Division</strong><br />
                • Use of ÷<br />
                • Dividing within the multiplication tables<br />
                • Mental calculation involving division
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 标准计算题：孩子需会用除法符号 ÷，并能在乘法表范围内快速计算除法
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6, Q8</strong><br />
                判断乘法正误、等值题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Multiplication and Division</strong><br />
                • Multiplication tables of 2, 3, 4, 5 and 10<br />
                • Relationship between multiplication and division
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子能判断哪个乘法算式正确（3×7=21 ✓），并找到等值的乘法式（24 = 3×8 或 4×6）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                玩具车购物、计算剩余
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Multiplication and Division</strong><br />
                • Multiplying within the multiplication tables<br />
                • Addition and subtraction algorithms (up to 3 digits, from Week 0)<br />
                • Money (from Week 0)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P2/P3 数学 Part 2 short-answer questions 要求 show working steps。本题练习 multi-step word problem：先用乘法算总价（3×$4），再用减法算剩余（$20 - $12）
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
          • Strands covered: <em>Number and Algebra</em> (Sub-strand: Multiplication and Division)
          <br />
          • Content points: 3.1 Multiplication tables of 2, 3, 4, 5 and 10 · 3.2 Use of ÷ · 3.3 Relationship between multiplication and division · 3.4 Multiplying and dividing within the multiplication tables · 3.5 Mental calculation involving multiplication and division within multiplication tables of 2, 3, 4, 5 and 10
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
