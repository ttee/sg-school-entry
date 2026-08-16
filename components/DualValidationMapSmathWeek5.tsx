export default function DualValidationMapSmathWeek5() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 5 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 1 入学的 preceding level（前一级 P6）体积：正方体和长方体（volume of cube and cuboid）主题。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周作业
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
                <strong>应用题</strong><br />5 道选择题（正方体和长方体体积）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 P6 Volume of Cube and Cuboid</strong><br />2.1 finding one dimension of a cuboid given its volume and the other dimensions<br />2.2 finding the length of one edge of a cube given its volume<br />2.3 finding the height of a cuboid given its volume and base area<br />2.4 finding the area of a face of a cuboid given its volume and one dimension<br />2.5 use of √ and ³√ (cube/square root as needed to find an edge from a volume or a square face)<br />（2021 Primary Mathematics Syllabus）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（正方体和长方体体积）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>P6 Volume of Cube and Cuboid 2.1–2.5</strong><br />正方体体积 Volume of cube = edge³（如 edge=4 cm, V=4³=64 cm³）<br />长方体体积 Volume of cuboid = length × width × height（如 l=10, w=4, h=3 → V=120 cm³）<br />已知体积和两边求第三边：如 V=120, l=10, w=4 → h=120÷10÷4=3 cm<br />已知体积求正方体边长：edge = ³√volume（如 V=64 → edge=³√64=4 cm, 因为 4×4×4=64）<br />已知体积和底面积求高：height = volume ÷ base area（如 V=96 cm³, base=16 cm² → h=96÷16=6 cm）<br />已知体积和一边求某个面的面积：area of face = volume ÷ that dimension<br />单位：体积用 cm³ 或 m³，长度/边/高用 cm 或 m，面积用 cm² 或 m²
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出算式步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>P6 Volume of Cube and Cuboid 2.1–2.5</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方来源：</strong>
          <a
            href="https://www.seab.gov.sg/aeis/test-details/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            SEAB AEIS Test Details (2026年7月1日更新)
          </a>
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>官方考试时长与题型：</strong>Part 1 Multiple-choice questions (34 items) 30 分钟 + Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items) 1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions: candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer.
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周是样本：</strong>本周作业不是完整 34 + 20 + 10–15 题，不是 2 小时 15 分钟正式试卷。本周让孩子熟悉 Sec 1 数学卷型和格式。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Volume of Cube and Cuboid 2.1 (finding one dimension of a cuboid given its volume and the other dimensions), 2.2 (finding the length of one edge of a cube given its volume), 2.3 (finding the height of a cuboid given its volume and base area), 2.4 (finding the area of a face of a cuboid given its volume and one dimension), 2.5 (use of √ and ³√ as needed to find an edge from a volume or a square face).
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>单位：</strong>体积用 cm³ 或 m³（cubic centimetres / cubic metres），长度/边长/高度用 cm 或 m，面积用 cm² 或 m²。官方大纲在本主题的较早级别明确排除 cm³ 和 m³ 之间的转换，不要发明转换题。本周题目用 cm 和 cm³，不混用 m 和 m³。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>体积和边长混淆（volume vs edge: 把体积 64 cm³ 误当成边长 64 cm，或把边长 4 cm 误当成体积 4 cm³）；忘记长方体体积公式 V = l × w × h（忘了三个边都要乘）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 2021 Primary Mathematics Syllabus P6 Volume of Cube and Cuboid 2.1–2.5。Volume of a cube = edge³。Volume of a cuboid = length × width × height。单位 cm³ / m³。不教：cm³ 和 m³ 之间的转换（官方明确排除）、sphere/cone/cylinder（球体/圆锥/圆柱，不在官方 P6 Volume 2.1–2.5）、liquid capacity formulae beyond a cuboid tank as L×W×H in cm³（液体容量公式，除了长方体水箱用 L×W×H 算 cm³）、circles（圆，已在第 4 周）、algebra（代数）、ratio（比）、percentage（百分数）、fraction division（分数除法）、speed（速度）、nets（展开图）、invented official facts。
        </p>
      </div>
    </div>
  );
}
