export default function DualValidationMapMathWeek2() {
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
                披萨切片、丝带分割
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Number and Algebra → Fractions</strong><br />
                • Fraction as part of a whole<br />
                • Notation and representations of fractions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P3</strong> 的孩子需理解 <strong>P2</strong> 分数概念：分数表示「整体的一部分」（part of a whole）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q3</strong><br />
                纸杯蛋糕分类
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • Fraction as part of a whole<br />
                • Notation and representations of fractions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子会用分数表示「一组物品中的部分」（5 out of 12 = 5/12）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q4</strong><br />
                橙汁剩余量
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions → Addition and Subtraction</strong><br />
                • Adding and subtracting like fractions within one whole with denominators not exceeding 12
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子会算「整体减去一个分数」：1 整体 = 4/4，喝掉 1/4，剩下 3/4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读理解 Q5</strong><br />
                戴眼镜的学生比例
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions → Addition and Subtraction</strong><br />
                • Adding like fractions within one whole with denominators not exceeding 12
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子会加同分母分数：2/10 + 3/10 = 5/10
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1–Q2</strong><br />
                比较单位分数大小
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • Comparing and ordering fractions with denominators not exceeding 12:<br />
                &nbsp;&nbsp;– unit fractions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子会比较单位分数（1/2, 1/3, 1/4, 1/5...）：分母越大，分数越小
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3–Q4</strong><br />
                比较和排序同分母分数
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • Comparing and ordering fractions with denominators not exceeding 12:<br />
                &nbsp;&nbsp;– like fractions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 大纲要求孩子会比较同分母分数（3/7 {"<"} 5/7）和排序（1/9 {"<"} 2/9 {"<"} 5/9 {"<"} 7/9）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5–Q7</strong><br />
                加减同分母分数
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions → Addition and Subtraction</strong><br />
                • Adding and subtracting like fractions within one whole with denominators not exceeding 12
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P2 标准计算题：2/8 + 3/8 = 5/8；7/10 - 3/10 = 4/10；5/12 - 2/12 = 3/12
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                图书馆书架分类统计
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • Fraction as part of a whole<br />
                • Notation and representations<br />
                • Adding like fractions within one whole
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P2/P3 数学 Part 2 short-answer questions 要求 show working steps。本题练习 multi-step word problem：先算科学书数量（12 - 5 - 3 = 4），再用分数表示（4/12），最后加分数（5/12 + 3/12 = 8/12）
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
          • Strands covered: <em>Number and Algebra</em> (Sub-strand: Fractions)
          <br />
          • Content points: 1.1 Fraction as part of a whole · 1.2 Notation and representations of fractions · 1.3 Comparing and ordering fractions with denominators of given fractions not exceeding 12 (unit fractions, like fractions) · 2.1 Adding and subtracting like fractions within one whole with denominators of given fractions not exceeding 12
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
          所有情境、人名、地点均为虚构。
        </p>
      </div>
    </div>
  );
}
