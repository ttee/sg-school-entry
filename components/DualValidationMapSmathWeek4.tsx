export default function DualValidationMapSmathWeek4() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 4 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 1 入学的 preceding level（前一级 P6）圆的面积和周长（area and circumference of circle）主题。
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
                <strong>应用题</strong><br />5 道选择题（圆的面积和周长）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 P6 Area and Circumference of Circle</strong><br />1.1 area and circumference of circle<br />1.2 finding the area and perimeter of semicircle and quarter circle<br />1.3 finding the area and perimeter of composite figures made up of square, rectangle, triangle, semicircle and quarter circle<br />（2021 Primary Mathematics Syllabus）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（圆的面积和周长）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>P6 Area and Circumference of Circle 1.1–1.3</strong><br />圆周长 Circumference = 2πr 或 πd（如 r=7, π=22/7 → 44 cm）<br />圆面积 Area = πr²（如 r=7, π=22/7 → 154 cm²）<br />半圆周长 Semicircle perimeter = πr + 2r（弧长 + 直径，如 r=7 → 22+14=36 cm）<br />四分之一圆周长 Quarter circle perimeter = (1/2)πr + 2r（弧长 + 两边，如 r=14 → 22+28=50 cm）<br />组合图形（composite figures: rectangle + semicircle 等）
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
                <strong>P6 Area and Circumference of Circle 1.1–1.3</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 1 申请者，内容为 Sec 1 前一级（P6）的官方 2021 Primary Mathematics Syllabus - P6 Area and Circumference of Circle 1.1 (area and circumference of circle), 1.2 (finding the area and perimeter of semicircle and quarter circle), 1.3 (finding the area and perimeter of composite figures made up of square, rectangle, triangle, semicircle and quarter circle).
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>π 的值：</strong>官方大纲没有统一规定 π = 22/7 或 π = 3.14。每道题会明确说明「Take π = 22/7」或「Take π = 3.14」。本周所有题目全用 π = 22/7（因为 radius 是 7 的倍数时答案是整数）。不混用两个值在同一道题。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>半圆周长忘了加直径（Semicircle perimeter = πr + diameter，不是只有 πr 或 (1/2)×2πr）；面积公式 πr² 与周长公式 2πr 混淆（Area 是 πr²，Circumference 是 2πr）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 2021 Primary Mathematics Syllabus P6 Area and Circumference of Circle 1.1–1.3。不包含：volume（体积）、algebra（代数）、ratio（比）、percentage（百分数）、fraction division（已在第 3 周）、speed（速度）、sphere/cone/cylinder formulae（球体/圆锥/圆柱公式，不在官方 P6 Circle 1.1–1.3）、calculators、invented official facts。本周用新加坡元（S$），不用美元（本周题目无钱币情境）。
        </p>
      </div>
    </div>
  );
}
