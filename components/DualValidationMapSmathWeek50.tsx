export default function DualValidationMapSmathWeek50() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 50 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）GEOMETRY AND MEASUREMENT 第一小节：G1.6 angle sum of interior and exterior angles of any convex polygon（任意凸多边形的内角和与外角和）。<strong>本周只教 G1.6（angle sums only）</strong>：Interior angle sum of any convex n-gon = (n − 2) × 180°; Exterior angle sum of any convex polygon = 360°（无论几边形）。For a regular n-gon: each interior = (n − 2) × 180° ÷ n; each exterior = 360° ÷ n. Friendly integers: n = 3, 4, 5, 6, 8, 9, 10, 12（友好整数：三角形 180、四边形 360、五边形 540、六边形 720、八边形 1080、九边形 1260、十边形 1440、十二边形 1800；正六边形每个内角 120；正五边形每个外角 72；正八边形每个外角 45）。第 48 周已教 G1.4 regular polygons（naming and symmetry of pentagon, hexagon, octagon, decagon）。本周不教 G1.7 construction。No calculator 不用计算器。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周题目
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                考试题型
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                内容对应官方大纲
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />5 道选择题（Convex hexagon has 6 sides: interior sum = (6 − 2) × 180° = 720°. Convex octagon: 8 sides, interior sum = (8 − 2) × 180° = 1080°. Exterior sum of any convex polygon = 360° always. Wei uses 5 × 180° = 900° for pentagon interior sum—wrong, should be (5 − 2) × 180° = 540°. Regular octagon: each exterior = 360° ÷ 8 = 45°. Fossil: using n × 180° instead of (n − 2) × 180°）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons</strong><br />1.6 angle sum of interior and exterior angles of any convex polygon<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, GEOMETRY AND MEASUREMENT）<br />本周只教 G1.6 angle sums：Interior sum = (n − 2) × 180°; Exterior sum = 360° (any convex polygon). For regular n-gon: each interior = (n − 2) × 180° ÷ n; each exterior = 360° ÷ n.
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（Convex nonagon: 9 sides, interior sum = (9 − 2) × 180° = 1260°. Wei uses 10 × 180° = 1800° for decagon—wrong, should be (10 − 2) × 180° = 1440°. Aisha says pentagon exterior sum is (5 − 2) × 180° = 540°—wrong, exterior sum always 360°. Regular hexagon: each interior = (6 − 2) × 180° ÷ 6 = 120°. Dodecagon: 12 sides, interior sum = (12 − 2) × 180° = 1800°. Wei calculates octagon exterior sum as (8 − 2) × 180° = 1080°—that's interior sum, not exterior. Regular pentagon: each exterior = 360° ÷ 5 = 72°. Quadrilateral: interior sum 360°; exterior sum also 360° but different question）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 GEOMETRY AND MEASUREMENT: G1.6 angle sum of interior and exterior angles</strong><br />识别和应用凸多边形的内角和与外角和公式（official content from MOE 2020 G3 Sec 1 syllabus）。官方 1.6 wording（逐字引用）：「angle sum of interior and exterior angles of any convex polygon」. Interior = (n − 2) × 180°; Exterior = 360°. 本周不教 G1.7 construction.
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（Convex heptagon: 7 sides, interior sum = (7 − 2) × 180° = 900°. Wei says 7 × 180° = 1260°—explain error. Exterior sum of any convex polygon = 360° always. Pentagon and decagon both have exterior sum 360°. Wei says hexagon exterior sum is (6 − 2) × 180° = 720°—he calculated interior sum, not exterior. Regular nonagon: interior sum = (9 − 2) × 180° = 1260°; each interior = 140°; each exterior = 360° ÷ 9 = 40°. Verify 140° + 40° = 180°）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 GEOMETRY AND MEASUREMENT: G1.6 angle sum of interior and exterior angles</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出推理步骤和最终答案）
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方来源：</strong>
          <a
            href="https://www.moe.gov.sg/api/media/d415c25d-cf29-4b05-83da-9713f38edd14/2020-G2-and-G3-Mathematics-Syllabuses.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            MOE 2020 G3 Mathematics Syllabuses (PDF)
          </a>
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>官方考试时长与题型：</strong>Part 1 Multiple-choice questions (34 items) 30 分钟 + Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items) 1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions: candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer.
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周是样本：</strong>本周作业不是完整 34 + 20 + 10–15 题，不是 2 小时 15 分钟正式试卷。本周让孩子熟悉 Sec 1 数学卷型和格式。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.6 angle sum of interior and exterior angles of any convex polygon（任意凸多边形的内角和与外角和）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>using n × 180° instead of (n − 2) × 180° for the interior angle sum（错误：用 n × 180° 代替 (n − 2) × 180°。例如：hexagon has 6 sides, so interior sum = 6 × 180° = 1080°。Wrong: 6 × 180° = 1080° ✗。Right: (6 − 2) × 180° = 720° ✓）。Saying the exterior angle sum is (n − 2) × 180° or 180° instead of 360°（错误：说外角和是 (n − 2) × 180° 或 180°。Wrong: pentagon exterior sum = (5 − 2) × 180° = 540° ✗。Right: exterior sum = 360° (always for any convex polygon) ✓）。Confusing interior sum with exterior sum: calculating (n − 2) × 180° but claiming it's the exterior sum（错误：计算出 (n − 2) × 180° 却说这是外角和。(n − 2) × 180° 是内角和，不是外角和）。Using 360° ÷ n for the interior angle of a regular n-gon（错误：用 360° ÷ n 计算正多边形的内角。Wrong: regular pentagon each interior = 360° ÷ 5 = 72° ✗。Right: each interior = (5 − 2) × 180° ÷ 5 = 108°; each exterior = 360° ÷ 5 = 72° ✓）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 GEOMETRY AND MEASUREMENT, G1. Angles, triangles and polygons: 1.6 angle sum of interior and exterior angles of any convex polygon。官方 1.6 wording（逐字引用）：「angle sum of interior and exterior angles of any convex polygon」。<strong>本周是 G1.6 only</strong>。Interior angle sum of any convex n-gon = (n − 2) × 180°（任意凸 n 边形的内角和 = (n − 2) × 180°）。Exterior angle sum of any convex polygon = 360°（任意凸多边形的外角和 = 360°，无论几边形）。For a regular n-gon: each interior angle = (n − 2) × 180° ÷ n; each exterior angle = 360° ÷ n（正 n 边形的每个内角 = (n − 2) × 180° ÷ n；每个外角 = 360° ÷ n）。Friendly integers: triangle (3 sides) 180°, quadrilateral (4) 360°, pentagon (5) 540°, hexagon (6) 720°, heptagon (7) 900°, octagon (8) 1080°, nonagon (9) 1260°, decagon (10) 1440°, dodecagon (12) 1800°. Regular hexagon each interior 120°; regular pentagon each exterior 72°; regular octagon each exterior 45°. Cast: Wei, Aisha, Mr Lim at Riverside Secondary School（描述多边形：convex hexagon with 6 sides, regular octagon with 8 equal sides and 8 equal angles）。Friendly integers（友好整数，角度和边数是整数）。No calculator（calculators are not allowed）。唯一性 unique keys：每道选择题只有一个正确答案（only ONE option may be true）。不要在一道题目中同时提供「interior sum of a quadrilateral is 360°」和「exterior sum of any convex polygon is 360°」作为两个正确选项（两个都是 360° 但问题不同，容易混淆）。<strong>本周只教 G1.6 angle sums（内角和与外角和）</strong>。第 48 周已教 G1.4 regular polygons（properties and symmetry of pentagon, hexagon, octagon, decagon）。第 49 周已教 G1.5 classifying special quadrilaterals。本周不教 G1.7 construction of simple geometrical figures from given data using compasses, ruler, set squares and protractors（尺规作图）。第 50 周完成 G1.6 angle sum of interior and exterior angles of any convex polygon。
        </p>
      </div>
    </div>
  );
}
