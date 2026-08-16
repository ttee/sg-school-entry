export default function DualValidationMapMathWeek28() {
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
                Isosceles triangle (not equilateral): symmetric figure?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.1 identifying symmetric figures
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：识别对称图形。等腰三角形（非等边）有 1 条对称轴
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Square: how many lines of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.1 identifying lines of symmetry (square has 4)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：正方形有 4 条对称轴（两条中线穿过对边，两条对角线）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                Non-square rectangle: diagonals as lines of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.2 determining whether a straight line is a line of symmetry
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：非正方形长方形的对角线不是对称轴。只有两条中线是对称轴
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                Non-square rectangle: how many lines of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.1 identifying lines of symmetry (non-square rectangle has 2)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：非正方形长方形有 2 条对称轴（两条中线穿过对边的中点）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                4×4 grid, vertical line of symmetry, 1 square shaded 1 unit left. Matching square?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.3 completing a symmetric figure on a square grid
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：在方格纸上完成对称图形。1 unit left → 1 unit right（距离相等）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                Which figure is NOT symmetric? Scalene triangle
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.1 identifying symmetric figures (scalene has 0)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：不规则三边形（三边不等）没有对称轴
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                Equilateral triangle: how many lines of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.1 identifying lines of symmetry (equilateral has 3)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：等边三角形有 3 条对称轴（从每个顶点到对边中点）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                Rectangle diagonal: line of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.2 determining whether a straight line is a line of symmetry
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：非正方形长方形的对角线不是对称轴（折叠后两半不重合）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                Rectangle long-side midline: line of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.2 determining whether a straight line is a line of symmetry (yes)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：穿过长方形两条长边中点的直线是对称轴
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                Horizontal line, 2 squares shaded 1 unit above. Matching squares below?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.3 completing a symmetric figure on a square grid
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：2 squares 1 unit above → 2 squares 1 unit below（数量和距离相同）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                Circle: has a line of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.1 identifying symmetric figures (circle has many)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：圆有很多条对称轴（任何经过圆心的直线都是对称轴）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                Square diagonal: line of symmetry?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.2 determining whether a straight line is a line of symmetry (yes)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：正方形的对角线是对称轴（正方形有 4 条对称轴，包括两条对角线）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                After completing, left half has 5 shaded squares. Right half?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry</strong><br />
                • 3.3 completing a symmetric figure (both halves equal)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：对称图形两半必须相同。左半 5 个 → 右半也是 5 个
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) Non-square rectangle: lines of symmetry.<br />
                (b) Equilateral triangle: lines of symmetry.<br />
                (c) Complete symmetric figure on grid.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Symmetry → Comprehensive Application</strong><br />
                • 3.1 identifying symmetric figures<br />
                • 3.2 determining whether a straight line is a line of symmetry<br />
                • 3.3 completing a symmetric figure on a square grid<br />
                • Multi-step problem requiring showing working
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 识别非正方形长方形的对称轴：2 条中线穿过对边中点，对角线不是；(b) 识别等边三角形的对称轴：3 条；(c) 完成方格纸上的对称图形：距离对称轴相同距离的位置。要求孩子写出每一步说明（如 "A non-square rectangle has 2 lines of symmetry: the two midlines. The diagonals are NOT lines of symmetry"、"An equilateral triangle has 3 lines of symmetry"）、验证（如用文字描述如何折叠检查）。常见错误：把长方形的对角线当对称轴、认为每个图形都有对称轴、在对称轴错误的一侧完成图形、数出不能让两半重合的折叠线
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
          • Strands covered: <em>Geometry</em> (Sub-strand: Symmetry)
          <br />
          • Content points: <strong>Symmetry</strong> 3.1 identifying symmetric figures; 3.2 determining whether a straight line is a line of symmetry of a symmetric figure; 3.3 completing a symmetric figure with respect to a given line of symmetry on a square grid
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
          本周只教：对称轴 / line of symmetry、对称图形 / symmetric figure、识别对称图形（3.1）、判断一条直线是否是对称轴（3.2）、在方格纸上完成对称图形（3.3）。本周不教：rotational symmetry / order of rotational symmetry（旋转对称，不在 P4 大纲）、reflection in a point（点对称）、3D symmetry（立体对称）、nets（展开图，后续单元）、triangle angle sum（三角形内角和）、quadrilateral interior-angle sum（四边形内角和）。
        </p>
        <p className="text-xs text-muted mt-3 pt-2 border-t border-accent/10">
          所有情境、人名、地点均为虚构。
        </p>
      </div>
    </div>
  );
}
