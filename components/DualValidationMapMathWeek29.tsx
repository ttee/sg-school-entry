export default function DualValidationMapMathWeek29() {
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
                Solid with 6 square faces, all equal: which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.1 identifying 2D representations of cube
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：识别立体图形。Cube（立方体）有 6 个正方形面，都相等
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                2D representation: rectangle and two circles. Which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.1 identifying 2D representations of cylinder
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：Cylinder（圆柱）的 2D 表示是一个长方形和两个圆。注意：4.1 包括 cone 和 cylinder，但 4.3 nets 不包括
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                Net: 6 equal squares in a cross. Which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.3 identifying the nets of 3D solids (cube)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：识别展开图。Cube net 有 6 个正方形，折叠后无重叠。Cross shape（十字形）是有效的 cube net
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                Net: 1 square and 4 triangles. Which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.3 identifying the nets of 3D solids (pyramid)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：Square pyramid（正方体棱锥）有 1 个正方形底 + 4 个三角形面（共 5 面）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                Net: 2 triangles and 3 rectangles. Which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.3 identifying the nets of 3D solids (prism)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：Triangular prism（三角棱柱）有 2 个三角形面 + 3 个长方形面（共 5 面）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                Row of 6 equal squares in a straight line: net of a cube?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.3 identifying the nets of 3D solids (cube)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：一排 6 个正方形不是 cube net，因为折叠时面会重叠
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                Cuboid net must have how many faces?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.3 identifying the nets of 3D solids (cuboid)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：Cuboid（长方体）有 6 个长方形面（对面相等）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                In 4.1 2D representations but NOT in 4.3 nets?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.1 vs 4.3 scope difference
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：4.1 包括 cone 和 cylinder，但 4.3 nets 不包括（不能发明圆锥圆柱展开图）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                2D drawing of a cube (square + 2 parallelograms): is that a net?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.3 distinguishing 2D drawing from net
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：2D drawing（正方形+平行四边形）是立体图形的画法，不是 net（展开图）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                Net: 6 rectangles, opposite faces match (8×4, 8×3, 4×3). Which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.3 identifying the nets of 3D solids (cuboid)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：Cuboid net 有 6 个长方形，对面成对相等（2 faces of 8×4, 2 faces of 8×3, 2 faces of 4×3）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                Can net of 1 square + 4 triangles form a cube?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.4 identifying the solid which can be formed by a given net
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：1 square + 4 triangles 形成 square pyramid，不是 cube（cube 需要 6 个正方形）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                How many faces does a square pyramid have?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.1 identifying 2D representations of pyramid
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：Square pyramid 有 5 个面（1 square base + 4 triangular faces）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                2D representation: circle + triangle. Which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets</strong><br />
                • 4.1 identifying 2D representations of cone
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：Cone（圆锥）的 2D 表示是圆+三角形（或圆+扇形）。注意：cone 只在 4.1，不在 4.3 nets
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) Row of 6 equal squares: net of a cube?<br />
                (b) Net: 1 square + 4 triangles. Which solid?<br />
                (c) Net: 2 triangles + 3 rectangles. Which solid?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Nets → Comprehensive Application</strong><br />
                • 4.1 identifying 2D representations<br />
                • 4.2 drawing 2D representations<br />
                • 4.3 identifying the nets of 3D solids<br />
                • 4.4 identifying the solid which can be formed by a given net<br />
                • Multi-step problem requiring showing working
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 识别有效的 cube net：6 个正方形必须折叠后无重叠，一排 6 个会重叠；(b) 识别 square pyramid net：1 square + 4 triangles，共 5 面；(c) 识别 triangular prism net：2 triangles + 3 rectangles，共 5 面。要求孩子写出每一步说明（如 "A cube net has 6 squares that fold without overlapping. A row of 6 squares is NOT a cube net because faces overlap when folded"、"A square pyramid has 1 square + 4 triangles"、"A triangular prism has 2 triangles + 3 rectangles"）、区分（如 prism vs pyramid）。常见错误：以为任何 6 个正方形排列都是 cube net、混淆 prism（2 triangles + 3 rectangles）和 square pyramid（1 square + 4 triangles）、发明 cone/cylinder net（cone 和 cylinder 只在 4.1 二维表示，不在 4.3 展开图中）、把 2D drawing 当 net
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
          • Strands covered: <em>Geometry</em> (Sub-strand: Nets)
          <br />
          • Content points: <strong>Nets</strong> 4.1 identifying 2D representations of cube, cuboid, cone, cylinder, prism, pyramid; 4.2 drawing 2D representations of cube, cuboid, prism, pyramid (NOT cone, NOT cylinder); 4.3 identifying the nets of 3D solids: cube, cuboid, prism, pyramid (NOT cone, NOT cylinder); 4.4 identifying the solid which can be formed by a given net
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
          本周只教：展开图 / nets、识别二维表示（4.1: cube, cuboid, cone, cylinder, prism, pyramid）、画二维表示（4.2: cube, cuboid, prism, pyramid——不包括 cone, cylinder）、识别展开图（4.3: cube, cuboid, prism, pyramid——不包括 cone, cylinder）、从展开图判断立体图形（4.4）。本周不教：nets of cone, cylinder, sphere（cone 和 cylinder 只在 4.1 二维表示，不在 4.3 展开图；sphere 不在 P4 nets 列表）、surface area / volume formulas（表面积体积公式）、Euler's formula（欧拉公式）、line symmetry / rotational symmetry（对称，已在第 28 周教过）、triangle angle sum（三角形内角和）。这是最后一个官方 P4 Geometry 主题周。
        </p>
        <p className="text-xs text-muted mt-3 pt-2 border-t border-accent/10">
          所有情境、人名、地点均为虚构。
        </p>
      </div>
    </div>
  );
}
