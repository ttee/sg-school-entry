export default function DualValidationMapSmathWeek24() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 24 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）速率和速度第二小节：conversion of units（单位换算，如 km/h ↔ m/s）。第 23 周已完成 4.1（concepts of average rate, speed, constant speed and average speed），本周只教 4.2 conversion of units（单位换算，如 km/h ↔ m/s）。本周不教 4.3 problems involving rate and speed（速率和速度应用题），4.3 是第 25 周内容。
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
                <strong>应用题</strong><br />5 道选择题（18 km/h in m/s、36 km/h in m/s、10 m/s in km/h、72 km/h in m/s、which working is correct: 18 km/h × 5/18 = 5 m/s, not 18 km/h × 18/5）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed</strong><br />4.2 conversion of units (e.g. km/h to m/s)<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 23 周已完成 4.1（concepts of average rate, speed, constant speed and average speed，平均速率、速度、匀速和平均速度的概念）。本周只教 4.2 conversion of units（单位换算，如 km/h ↔ m/s）。本周不教 4.3 problems involving rate and speed（速率和速度应用题，下周内容）。官方举例："conversion of units (e.g. km/h to m/s)"。方法：1 km = 1000 m, 1 h = 3600 s。km/h → m/s: multiply by 5/18（如 18 km/h = 18 × 5/18 = 5 m/s，36 km/h = 10 m/s，72 km/h = 20 m/s，54 km/h = 15 m/s）。m/s → km/h: multiply by 18/5（如 10 m/s = 10 × 18/5 = 36 km/h，5 m/s = 18 km/h）。也可以出现 m/min 或 km/min 作为友好的整数过渡单位（但官方举例只说 km/h 和 m/s，不要发明额外的官方单位名称）。答案是友好的整数 friendly numbers，不用计算器。Speed 是官方 Sec 1 内容，不是 P6-only（不要声称速度是 P6 专属或发明禁令）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（54 km/h in m/s、5 m/s in km/h、20 m/s in km/h、which is the correct conversion: 18 km/h × 5/18 = 5 m/s、which is wrong direction: 18 km/h × 18/5、45 km/h in m/s、25 m/s in km/h、which working converts m/s to km/h）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N4.2 conversion of units (e.g. km/h to m/s)</strong><br />Conversion of units（单位换算，官方举例 km/h to m/s）：1 km = 1000 m, 1 h = 3600 s。关键方法：km/h → m/s: multiply by 1000/3600 = 5/18（18 km/h = 18 × 5/18 = 5 m/s；36 km/h = 36 × 5/18 = 10 m/s；72 km/h = 72 × 5/18 = 20 m/s；54 km/h = 54 × 5/18 = 15 m/s；45 km/h = 45 × 5/18 = 12.5 m/s）。m/s → km/h: multiply by 3600/1000 = 18/5（10 m/s = 10 × 18/5 = 36 km/h；5 m/s = 5 × 18/5 = 18 km/h；20 m/s = 20 × 18/5 = 72 km/h；25 m/s = 25 × 18/5 = 90 km/h）。也可以出现 m/min 或 km/min 作为友好的整数过渡单位，但官方举例只说 km/h to m/s，不要发明额外的官方单位名称（如果题目用 m/min 或 km/min，只是简单的算术运算，如 180 m/min = 180 × 60 m/h = 10,800 m/h = 10.8 km/h，但保持答案是友好整数，所以题目设计会保证算术友好）。答案是友好的整数 friendly numbers，不用计算器 calculators are not allowed。<br />例 1（km/h → m/s）：Convert 18 km/h to m/s. Solution: 18 km/h = 18 × 5/18 m/s = 5 m/s. Answer: 5 m/s.<br />例 2（m/s → km/h）：Convert 10 m/s to km/h. Solution: 10 m/s = 10 × 18/5 km/h = 36 km/h. Answer: 36 km/h.<br />例 3（which working is correct）：Which working correctly converts 18 km/h to m/s? A. 18 × 5/18 = 5 m/s ✓ B. 18 × 18/5 = 64.8 m/s ✗ (wrong direction) C. 18 ÷ 5/18 = ... ✗ (wrong operation) D. 18 × 1000/60 = ... ✗ (wrong denominator, should be 3600). Answer: A.<br />例 4（identify wrong direction）：Which calculation is the WRONG direction? If we want to convert km/h to m/s, we multiply by 5/18. If we want to convert m/s to km/h, we multiply by 18/5. Which calculation uses the wrong direction? Example: "18 km/h × 18/5 = 64.8" (this is wrong direction, should be × 5/18). Answer: that is the wrong direction.<br />用友好的整数 friendly numbers：答案是整数或简单小数（如 5 m/s, 10 m/s, 18 km/h, 36 km/h）。不用计算器（calculators are not allowed）。<br />本周化石 fossil errors：multiplying by 18/5 when converting km/h → m/s（方向错误，应该是 × 5/18）；multiplying by 5/18 when converting m/s → km/h（方向错误，应该是 × 18/5）；treating 1 hour as 60 seconds（把 1 小时当 60 秒，应该是 3600 秒）；forgetting the 1000（忘记 1 km = 1000 m）。<br />唯一性 unique keys：两个选项不能是同一个数值。If 18 km/h = 5 m/s is one of the options, do not also offer "18 × 5/18" as a separate option unless you're asking "which working is correct" (then both the final answer 5 m/s and the working 18 × 5/18 can coexist because they're different forms of the same truth). The fossil "wrong direction" must be a WRONG option（化石"方向错误"必须是错误选项）。如果一个 MCQ 正确答案是 5 m/s，错误选项里不能有另一个也是 5 m/s 的表达（如 "5" 和 "5.0" 不能同时作为两个选项）。<br />本周教 N4 的 4.2（conversion of units，单位换算，官方举例 e.g. km/h to m/s），是速率和速度第二小节。本周不教 4.1（concepts of average rate, speed, constant speed and average speed，已在第 23 周完成）和 4.3（problems involving rate and speed，速率和速度应用题，下周内容）。Speed 是官方 Sec 1 内容，不是 P6-only。本周不声称 AEIS 是 G3 paper。G3 只是官方 preceding-level 内容来源（官方举例：apply Secondary 3 → be familiar with Secondary 2 content，本周针对 Sec 2 申请者，内容为 Sec 1）。不发明官方 cut-scores 或 extra official names（4.2 conversion of units (e.g. km/h to m/s) 是官方大纲术语和官方举例）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 18 km/h 转换为 m/s 的步骤、10 m/s 转换为 km/h 的步骤、Wei cycles at 18 km/h, write the speed in m/s and show working 18 × 5/18 = 5 m/s）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N4.2 conversion of units (e.g. km/h to m/s)</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范：<br />例 1（km/h → m/s, writing steps）：Convert 18 km/h to m/s. Show your working steps.<br />Solution: ① 1 km = 1000 m, 1 h = 3600 s. ② km/h → m/s: multiply by 1000/3600 = 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. Answer: 5 m/s.<br />例 2（m/s → km/h, writing steps）：Convert 10 m/s to km/h. Show your working steps.<br />Solution: ① 1 km = 1000 m, 1 h = 3600 s. ② m/s → km/h: multiply by 3600/1000 = 18/5. ③ 10 m/s = 10 × 18/5 = 36 km/h. Answer: 36 km/h.<br />例 3（short application with show working）：Wei cycles at 18 km/h. Write the speed in m/s. Show your working steps.<br />Solution: ① Wei's speed = 18 km/h. ② km/h → m/s: multiply by 5/18. ③ 18 km/h = 18 × 5/18 = 5 m/s. Answer: 5 m/s.<br />关键步骤：Step 1: Write the given speed and units（写出已知速度和单位，如 18 km/h 或 10 m/s）. Step 2: Identify the conversion factor（确定转换因数：km/h → m/s 用 × 5/18；m/s → km/h 用 × 18/5）. Step 3: Perform the calculation（执行计算：18 × 5/18 = 5；10 × 18/5 = 36）. Step 4: State the answer with units（陈述答案并加单位，如 5 m/s 或 36 km/h）. Step 5: Check if needed（检验如果需要：5 m/s × 18/5 = 18 km/h ✓）。<br />化石：Multiplying by 18/5 when converting km/h → m/s（方向错误，应该是 × 5/18：如 18 km/h 错误地算 18 × 18/5 = 64.8 m/s，正确应该是 18 × 5/18 = 5 m/s）；multiplying by 5/18 when converting m/s → km/h（方向错误，应该是 × 18/5：如 10 m/s 错误地算 10 × 5/18 = 2.78... m/s，正确应该是 10 × 18/5 = 36 km/h）；treating 1 hour as 60 seconds（把 1 小时当 60 秒，正确是 1 h = 3600 s）；forgetting the 1000（忘记 1 km = 1000 m）。本周教 N4 的 4.2（conversion of units，单位换算）。本周不教 4.1（concepts of average rate, speed, constant speed and average speed，已在第 23 周完成）和 4.3（problems involving rate and speed，速率和速度应用题，下周内容）。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N4. Rate and Speed: 4.2 conversion of units (e.g. km/h to m/s)（本周只教 4.2，第 23 周已完成 4.1。本周不教 4.3 problems involving rate and speed，那是第 25 周内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>multiplying by 18/5 when converting km/h → m/s（方向错误，如 18 km/h 错误地算 18 × 18/5 = 64.8 m/s，应该是 18 × 5/18 = 5 m/s）；multiplying by 5/18 when converting m/s → km/h（方向错误，如 10 m/s 错误地算 10 × 5/18 = 2.78... m/s，应该是 10 × 18/5 = 36 km/h）；treating 1 hour as 60 seconds（把 1 小时当 60 秒，应该是 3600 秒）；forgetting the 1000（忘记 1 km = 1000 m）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N4. Rate and Speed: 4.2 conversion of units (e.g. km/h to m/s)（本周只教 4.2，单位换算）。1 km = 1000 m, 1 h = 3600 s。km/h → m/s: multiply by 1000/3600 = 5/18（如 18 km/h = 18 × 5/18 = 5 m/s；36 km/h = 10 m/s；72 km/h = 20 m/s；54 km/h = 15 m/s）。m/s → km/h: multiply by 3600/1000 = 18/5（如 10 m/s = 10 × 18/5 = 36 km/h；5 m/s = 18 km/h）。用友好的整数（friendly numbers），答案是整数。不用计算器（calculators are not allowed）。唯一性 unique keys：两个选项不能是同一个数值。The fossil "wrong direction" must be a WRONG option（当题目问正确的转换时，化石"方向错误"必须是错误选项）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。Speed 是官方 Sec 1 内容，不是 P6-only。第 23 周已完成 4.1（concepts of average rate, speed, constant speed and average speed），本周只教 4.2（conversion of units），第 25 周教 4.3（problems involving rate and speed）。
        </p>
      </div>
    </div>
  );
}
