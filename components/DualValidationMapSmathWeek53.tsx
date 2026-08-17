export default function DualValidationMapSmathWeek53() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周题目
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 53 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）GEOMETRY AND MEASUREMENT 第五节：G5.2 problems involving perimeter and area of composite plane figures（组合平面图形的周长和面积问题）。<strong>本周只教 G5.2 composite plane figures</strong>：Composite plane figures（组合平面图形）由基本图形组成（rectangles, triangles, parallelograms, trapeziums）。Split the composite figure into known shapes, calculate each piece's area, then add them together（把组合图形分割成已知的基本图形，分别求面积，然后相加）。If there is a cut-out (e.g. a small rectangle removed from a corner), subtract its area（如果有切去的部分，减去它的面积）。For perimeter, add only the outer edges of the composite figure; do NOT add the perimeters of the individual pieces, because that double-counts the shared internal edges（求周长：只加组合图形的外边缘；不要把各个部分的周长相加，因为这会把共享的内边重复计算）。Friendly integers（友好整数，边长和面积都是整数）。例如：L-shape: 8 cm by 6 cm rectangle with 3 cm by 2 cm rectangle cut from corner → Area = 8 × 6 − 3 × 2 = 48 − 6 = 42 cm²; Rectangle 10 cm by 6 cm with right triangle base 4 cm height 6 cm attached → Total area = 10 × 6 + ½ × 4 × 6 = 60 + 12 = 72 cm². Units: cm and cm². No calculator 不用计算器。
      </p>

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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.2 problems involving perimeter and area of composite plane figures（组合平面图形的周长和面积问题）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 GEOMETRY AND MEASUREMENT, G5. Mensuration: 5.2 problems involving perimeter and area of composite plane figures。官方 5.2 wording（逐字引用）：「problems involving perimeter and area of composite plane figures」。<strong>本周是 G5.2 only</strong>。Composite plane figures = 组合平面图形，由 rectangles, triangles, parallelograms, trapeziums 组成。For area: split the figure into known shapes, calculate each area, add them; if there is a cut-out, subtract its area（求面积：分割成已知图形，分别求面积，相加；有切去的部分就减去）。For perimeter: add only the outer edges; do NOT add perimeters of pieces (double-counts shared edges)（求周长：只加外边缘；不要把各部分周长相加，会重复计算共享边）。Friendly integers（友好整数，边长和面积都是整数。例如 L-shape: 8×6 rectangle minus 3×2 cut-out → 48 − 6 = 42 cm²; 10×6 rectangle plus triangle ½×4×6 → 60 + 12 = 72 cm²）。Cast: Wei, Aisha, Mr Lim at Riverside Secondary School. No calculator（calculators are not allowed）。<strong>本周只教 G5.2 problems involving perimeter and area of composite plane figures（组合平面图形的周长和面积）</strong>。本周不教 5.3 volume and surface area of prism and cylinder（棱柱和圆柱的体积和表面积），不教 5.4 conversion between cm² and m², and between cm³ and m³（单位换算），不教 5.5 problems involving volume and surface area of composite solids（组合立体图形）。第 52 周已完成 G5.1 parallelogram and trapezium area（平行四边形和梯形面积）。本周继续官方 G5 Mensuration。
        </p>
      </div>
    </div>
  );
}
