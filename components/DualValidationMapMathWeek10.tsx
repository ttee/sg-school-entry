export default function DualValidationMapMathWeek10() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照官方大纲 / Mapping to Official Syllabus
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周练习题对应 <strong>MOE 2021 Primary Mathematics Syllabus P1 to P6</strong>（Updated October 2025）中的 <strong>Primary 3</strong> 内容，符合 MOE AEIS 的「<strong>preceding level</strong>」规则：<em>申请 P4 入学的孩子需掌握 P3 数学内容</em>。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周作业题目
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                对应 P3 大纲内容
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
                A rectangular field is 12 m long and 8 m wide. What is its area?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Area and Perimeter</strong><br />
                • 1.1 Area in square units (cm², m²)<br />
                • 1.2 Formula for area of a rectangle
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P4</strong> 的孩子需理解 <strong>P3</strong> 技能：长方形面积 = 长 × 宽，12 m × 8 m = 96 m²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                A square garden has sides of 6 m. What is its area?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Area and Perimeter</strong><br />
                • 1.1 Area in square units (m²)<br />
                • 1.2 Formula for area of a square
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：正方形面积 = 边长 × 边长，6 m × 6 m = 36 m²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                A rectangular room is 9 m long and 5 m wide. What is the perimeter?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Area and Perimeter</strong><br />
                • 1.3 Perimeter of rectilinear figures (rectangles)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：周长 = 所有边长之和，(9 + 5 + 9 + 5) m = 28 m 或 2 × (9 + 5) = 28 m
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                Which measures area: 12 cm² or 12 cm?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Area and Perimeter</strong><br />
                • 1.1 Concepts of area and perimeter<br />
                • Area in square units (cm²)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新概念：面积用平方单位（cm², m²），周长用长度单位（cm, m）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                A rectangle is 15 cm long. Its area is 75 cm². What is its width?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Area and Perimeter</strong><br />
                • 1.2 Formula for area of a rectangle<br />
                • Word problems on area
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：面积 ÷ 长 = 宽，75 cm² ÷ 15 cm = 5 cm
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                What is the area of a rectangle with length 10 cm and width 4 cm?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area: rectangle</strong><br />
                • 1.1 Area in square units (cm²)<br />
                • 1.2 Formula for area of a rectangle
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：长方形面积 = 长 × 宽，10 cm × 4 cm = 40 cm²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                What is the area of a square with sides of 7 cm?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area: square</strong><br />
                • 1.1 Area in square units (cm²)<br />
                • 1.2 Formula for area of a square
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：正方形面积 = 边长 × 边长，7 cm × 7 cm = 49 cm²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                What is the perimeter of a rectangle 8 m long and 3 m wide?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Perimeter: rectangle</strong><br />
                • 1.3 Perimeter of rectilinear figures (rectangles)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：周长 = 8 + 3 + 8 + 3 = 22 m 或 2 × (8 + 3) = 22 m
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                What is the perimeter of a square with sides of 5 cm?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Perimeter: square</strong><br />
                • 1.3 Perimeter of rectilinear figures (squares)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：正方形周长 = 4 × 边长，4 × 5 cm = 20 cm
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                A rectangle has length 12 cm and width 9 cm. What is its area?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area: rectangle</strong><br />
                • 1.2 Formula for area of a rectangle
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：12 cm × 9 cm = 108 cm²
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                Which unit is used to measure area?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area units</strong><br />
                • 1.1 Area in square units (cm², m²)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新概念：面积用 cm² 或 m²（平方单位）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                A square garden has area 64 m². What is the length of one side?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Area: square (reverse)</strong><br />
                • 1.2 Formula for area of a square<br />
                • Word problems on area
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：边长 × 边长 = 64，所以边长 = 8 m（8 × 8 = 64）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                A rectangle is 20 m long and 10 m wide. What is its perimeter?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Perimeter: rectangle</strong><br />
                • 1.3 Perimeter of rectilinear figures
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：20 + 10 + 20 + 10 = 60 m 或 2 × (20 + 10) = 60 m
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) A rectangular playground is 18 m long and 12 m wide. What is its area?<br />
                (b) A square table has sides of 4 m. What is its perimeter?<br />
                (c) A rectangular room has area 48 m². The length is 8 m. What is the width?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Geometry → Area and Perimeter</strong><br />
                • 1.1 Area in square units (m²)<br />
                • 1.2 Formula for area of a rectangle / square<br />
                • 1.3 Perimeter of rectilinear figures (squares)<br />
                • Word problems on area and perimeter
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P3/P4 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 18 m × 12 m = 216 m²；(b) 4 × 4 m = 16 m；(c) 48 m² ÷ 8 m = 6 m
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方大纲引用：</strong>
          <br />
          • <strong>2021 Primary Mathematics Syllabus P1 to P6 (Updated October 2025)</strong>, Section 5: Primary Mathematics Syllabus, Primary Three (P3)
          <br />
          • Strands covered: <em>Geometry</em> (Sub-strand: Area and Perimeter)
          <br />
          • Content points: <strong>Geometry</strong> 1.1 Concepts of area and perimeter of a plane figure; Area in square units (cm², m²); 1.2 Formula for area of a rectangle / square; 1.3 Perimeter of rectilinear figures (rectangles, squares); Word problems on area and perimeter of squares and rectangles
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
          "For AEIS-Primary, your child needs to be familiar with the Mathematics topics taught in our mainstream schools for the level <strong>preceding</strong> the one that they applied for. For example, if your child wishes to seek admission to Primary 4, they should be familiar with Primary 3 content."
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
