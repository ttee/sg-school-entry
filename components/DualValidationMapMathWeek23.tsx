export default function DualValidationMapMathWeek23() {
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
                Rectangle area 24 cm², length 8 cm → breadth ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.1 finding one dimension of a rectangle given the other dimension and its area/perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：已知面积和一边求另一边。area = length × width → width = area ÷ length。24 ÷ 8 = 3 cm
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Square area 36 cm² → side ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.2 finding the length of one side of a square given its area/perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：已知正方形面积求边长。area = side × side，36 = 6 × 6，所以 side = 6 cm
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                Square perimeter 20 cm → side ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.2 finding the length of one side of a square given its area/perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：已知正方形周长求边长。perimeter = 4 × side → side = perimeter ÷ 4。20 ÷ 4 = 5 cm
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                L-shape: 6×4 rectangle + 3×2 rectangle
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.3 finding the area and perimeter of composite figures made up of rectangles and squares
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：组合图形面积。拆分：6 × 4 = 24 cm²，3 × 2 = 6 cm²，total = 24 + 6 = 30 cm²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                L-shape: 10×6 rectangle − 4×3 corner
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.3 finding the area and perimeter of composite figures made up of rectangles and squares
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：组合图形周长。只算外轮廓边。Trace the outer perimeter of the L-shape: 10 + 3 + 4 + 3 + 6 + 6 = 32 cm（10 cm bottom + 3 cm right side up to cutout + 4 cm left into notch + 3 cm up + 6 cm continuing left on top + 6 cm down left side）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                Rectangle area 48 m², breadth 6 m → length ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.1 finding one dimension of a rectangle given the other dimension and its area/perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：已知面积和宽求长。area = length × width → length = area ÷ breadth。48 ÷ 6 = 8 m
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                Rectangle perimeter 28 m, length 9 m → breadth ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.1 finding one dimension of a rectangle given the other dimension and its area/perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：已知周长和长求宽。perimeter = 2 × (length + width) → 28 = 2 × (9 + width) → 14 = 9 + width → width = 5 m。或简化公式：width = perimeter ÷ 2 − length = 14 − 9 = 5 m
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                Square area 49 cm² → side ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.2 finding the length of one side of a square given its area/perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：已知正方形面积求边长。area = side × side，49 = 7 × 7，所以 side = 7 cm
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                Square perimeter 32 cm → side ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.2 finding the length of one side of a square given its area/perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：已知正方形周长求边长。perimeter = 4 × side → side = perimeter ÷ 4。32 ÷ 4 = 8 cm
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                T-shape: 8×3 top + 4×5 bottom (share 4 cm)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.3 finding the area and perimeter of composite figures made up of rectangles and squares
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：组合图形面积。拆分：8 × 3 = 24 cm²，4 × 5 = 20 cm²，total = 24 + 20 = 44 cm²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                12×8 rectangle + 5×5 square
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.3 finding the area and perimeter of composite figures made up of rectangles and squares
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：组合图形面积。12 × 8 = 96 m²，5 × 5 = 25 m²，total = 96 + 25 = 121 m²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                9×7 rectangle − 3×2 corner
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.3 finding the area and perimeter of composite figures made up of rectangles and squares
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：组合图形面积（减法）。9 × 7 = 63 cm²，3 × 2 = 6 cm²，remaining area = 63 − 6 = 57 cm²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                15×8 garden − 3×3 flower bed
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter</strong><br />
                • 1.3 finding the area and perimeter of composite figures made up of rectangles and squares
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：组合图形面积（减法）。15 × 8 = 120 m²，3 × 3 = 9 m²，remaining area = 120 − 9 = 111 m²
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) Rectangle area 40 cm², length 10 cm → breadth ?<br />
                (b) Square perimeter 28 cm → side ?<br />
                (c) L-shape: 7×5 rectangle P + 4×3 rectangle Q (share 4 cm) → total area ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area and Perimeter → Comprehensive Application</strong><br />
                • 1.1 finding one dimension of a rectangle given the other dimension and its area/perimeter<br />
                • 1.2 finding the length of one side of a square given its area/perimeter<br />
                • 1.3 finding the area and perimeter of composite figures made up of rectangles and squares<br />
                • Multi-step problem requiring showing working
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 已知面积和长求宽：breadth = area ÷ length = 40 ÷ 10 = 4 cm；(b) 已知周长求边长：side = perimeter ÷ 4 = 28 ÷ 4 = 7 cm；(c) 组合图形面积（拆分）：Rectangle P area = 7 × 5 = 35 cm²，Rectangle Q area = 4 × 3 = 12 cm²，total area = 35 + 12 = 47 cm²。要求孩子写出每一步算式、标注单位（cm 或 cm²）、说明拆分方法（如 "I split the L-shape into two rectangles" 或 "我把 L 形拆成两个长方形"）。常见错误：面积÷错边（dividing by the wrong side）、正方形边长当面积（confusing side with area）、组合图形漏算某一块（missing a rectangle in composite figure）、周长算进内部边（including internal edges in perimeter）
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
          • Strands covered: <em>Measurement and Geometry</em> (Sub-strand: Area and Perimeter)
          <br />
          • Content points: <strong>Area and Perimeter</strong> 1.1 finding one dimension of a rectangle given the other dimension and its area/perimeter, 1.2 finding the length of one side of a square given its area/perimeter, 1.3 finding the area and perimeter of composite figures made up of rectangles and squares
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
