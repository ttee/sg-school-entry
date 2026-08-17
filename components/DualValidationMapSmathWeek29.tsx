export default function DualValidationMapSmathWeek29() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 29 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）代数式和公式第四小节：translation of simple real-world situations into algebraic expressions（将简单的现实情境翻译为代数式）。第 26–28 周已完成 5.1–5.3（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions），本周只教 5.4 translation。本周不教 5.5 nth term（第 n 项），5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。
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
                <strong>选择题</strong><br />5 道选择题（Wei has n dollars spends S$5 amount left、k tickets at S$3 each total cost、n years old in 4 years、n books at S$4 plus S$2 postage、which expression shows amount left when spending S$5）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae</strong><br />5.4 translation of simple real-world situations into algebraic expressions<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）<br />第 26–28 周已完成 5.1–5.3（using letters to represent numbers、interpreting notations、evaluation of algebraic expressions），本周只教 5.4 translation of simple real-world situations into algebraic expressions（将简单的现实情境翻译为代数式）。本周不教 5.5 finding the value of an unknown (nth term)，5.6–5.8 simplifying（化简代数式）。这些是后续周次内容。官方 5.4 wording（官方术语，逐字引用）：'translation of simple real-world situations into algebraic expressions'。本周方法：Turn a short real-world sentence into an expression（将短的现实情境句子转化为代数式），using Week 26–27 notation。Wei has n dollars and spends S$5 → n − 5（不是 n + 5）。A ticket costs S$3; k tickets → 3k（不是 k + 3）。Aisha is n years old; in 4 years → n + 4。A rectangle has length x cm and width 3 cm; perimeter → 2(x + 3) or 2x + 6，pick ONE form（本周优先 2(x + 3) as "twice the sum"，或 2x + 6 only if you do not also offer 2(x+3)；2x+6 is 5.6/5.8 later）。Cost of n books at S$4 each plus S$2 postage → 4n + 2. Friendly letters. No calculator. Money: 新加坡元 S$（never 美元）。
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（n sweets buy 3 more、k apples at S$2 each、n years old sister 5 years younger、k people buy S$3 tickets revenue、n students add 4、rectangle length x width 3 perimeter、which NOT correct when spending S$5、which working shows n books at S$4 plus S$2 postage）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.4 translation of simple real-world situations into algebraic expressions</strong><br />将简单的现实情境翻译为代数式（official content from MOE 2020 G3 Sec 1 syllabus）。Method: Turn a short real-world sentence into an expression（将现实情境句子转化为代数式）。Wei has n dollars and spends S$5 → n − 5（spending 是减，不是加，不是 n + 5）。k tickets at S$3 each → 3k（"each" 是乘，不是加，不是 k + 3）。n years old, in 4 years → n + 4（将来是加）。n books at S$4 each plus S$2 postage → 4n + 2（books 4n，plus postage S$2，so 4n + 2）。Rectangle length x width 3 perimeter → 2(x + 3) or 2x + 6，pick ONE form（本周优先 2(x + 3) as "twice the sum"；2x+6 only if you do not also offer 2(x+3) in the same question；2x+6 is 5.6/5.8 simplifying 后续内容）。本周化石 fossil errors：writing 3k when the story is \"S$3 more than k\"（当应用题说"比 k 多 S$3"时错误地写 3k，正确应该是 k + 3）；writing n + 5 when he spends S$5（当他花掉 S$5 时错误地写 n + 5，正确应该是 n − 5）；writing 2x + 3 for perimeter instead of 2(x + 3)（周长错误地写 2x + 3，正确应该是 2(x + 3)）；treating \"each\" as + not ×（把"每个"当作加法而不是乘法）。唯一性 unique keys：两个选项不能是同一个意思（2n and 2 × n as two options is a fail; 2(x+3) and 2x+6 as two options is a fail）。n − 5 and 5 − n must not both be marked correct（n − 5 和 5 − n 不能同时标记为正确）。The fossil is a WRONG option（化石错误值必须作为错误选项）。本周教 N5 的 5.4（translation of simple real-world situations into algebraic expressions）。第 26–28 周已完成 5.1–5.3，本周教 5.4。本周不教 5.5 nth term，5.6–5.8 simplifying。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出 Wei has n dollars spends S$5 amount left、Aisha buys k pens at S$3 each、Wei buys n books at S$4 each plus S$2 postage，并说明字母代表什么）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N5.4 translation of simple real-world situations into algebraic expressions</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出算式步骤和最终答案）<br />写作步骤示范（translation of simple real-world situations into algebraic expressions）：<br />例 1（Wei has n dollars spends S$5, skill 5.4）：Wei has n dollars and spends S$5. Write an expression for the amount Wei has left. Show your working.<br />Solution: ① Let Wei's money be n dollars. ② Wei spends S$5. ③ Amount left = n − 5. Answer: n − 5. (Note: n stands for the number of dollars Wei has. When Wei spends S$5, we subtract 5, so n − 5. Not n + 5.)<br />例 2（k tickets at S$3 each, skill 5.4）：A ticket costs S$3. Aisha buys k tickets. Write an expression for the total cost. Show your working.<br />Solution: ① Let the number of tickets be k. ② Each ticket costs S$3. ③ Total cost = 3 × k = 3k. Answer: 3k. (Note: k stands for the number of tickets. \"Each\" means multiply, so 3k. Not k + 3.)<br />例 3（n books at S$4 each plus S$2 postage, skill 5.4）：Wei buys n books at S$4 each. Postage costs S$2. Write an expression for the total cost. Show your working.<br />Solution: ① Let the number of books be n. ② Each book costs S$4. ③ Cost of books = 4 × n = 4n. ④ Postage = S$2. ⑤ Total cost = 4n + 2. Answer: 4n + 2. (Note: n stands for the number of books. Books cost 4n, plus postage S$2, so 4n + 2.)<br />关键步骤：Step 1: Read the sentence carefully and identify what the letter stands for (仔细读题，确定字母代表什么). Step 2: Let the letter stand for the quantity (设字母代表这个量：Let Wei's money be n dollars; let the number of tickets be k). Step 3: Translate the sentence into an expression (将句子翻译为代数式：spends S$5 → subtract 5, so n − 5; k tickets at S$3 each → multiply 3 by k, so 3k; n books at S$4 each plus S$2 postage → 4n + 2). Step 4: State what the letter stands for (陈述字母代表什么：n stands for the number of dollars Wei has; k stands for the number of tickets; n stands for the number of books). Step 5: Check the expression matches the story (检验表达式是否匹配题意：if Wei has n dollars and spends S$5, does he have n − 5 left? Yes ✓. Does he have n + 5? No, spending means subtract, not add).<br />化石：Writing 3k when the story is \"S$3 more than k\"（当应用题说"比 k 多 S$3"时错误地写 3k，正确应该是 k + 3）。Writing n + 5 when he spends S$5（当他花掉 S$5 时错误地写 n + 5，正确应该是 n − 5）。Writing 2x + 3 for perimeter instead of 2(x + 3)（周长错误地写 2x + 3，正确应该是 2(x + 3)）。Treating \"each\" as + not ×（把"每个"当作加法而不是乘法）。本周教 N5 的 5.4（translation of simple real-world situations into algebraic expressions，生活情境写成代数式）。本周不教 5.5 nth term，5.6–5.8 simplifying。
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.4 translation of simple real-world situations into algebraic expressions（本周只教 5.4，第 26–28 周已完成 5.1–5.3。5.5 nth term 等是后续周次内容）。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>writing 3k when the story is \"S$3 more than k\"（当应用题说"比 k 多 S$3"时错误地写 3k，正确应该是 k + 3）；writing n + 5 when he spends S$5（当他花掉 S$5 时错误地写 n + 5，正确应该是 n − 5）；writing 2x + 3 for perimeter instead of 2(x + 3)（周长错误地写 2x + 3，正确应该是 2(x + 3)）；treating \"each\" as + not ×（把"每个"当作加法而不是乘法）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N5. Algebraic expressions and formulae: 5.4 translation of simple real-world situations into algebraic expressions（本周只教 5.4，将现实情境翻译为代数式）。官方 5.4 wording（逐字引用）：'translation of simple real-world situations into algebraic expressions'。本周方法：Turn a short real-world sentence into an expression（将短的现实情境句子转化为代数式），using Week 26–27 notation。Wei has n dollars and spends S$5 → n − 5。k tickets at S$3 each → 3k。n years old, in 4 years → n + 4。Rectangle length x width 3 perimeter → 2(x + 3) or 2x + 6，pick ONE（本周优先 2(x + 3)；2x+6 is 5.6/5.8 simplifying 后续内容）。n books at S$4 each plus S$2 postage → 4n + 2. Friendly letters. No calculator（calculators are not allowed）。金额：新加坡元 S$（money in Singapore dollars S$）。唯一性 unique keys：两个选项不能是同一个意思（2n and 2 × n as two options is a fail; 2(x+3) and 2x+6 as two options is a fail）。n − 5 and 5 − n must not both be marked correct（n − 5 和 5 − n 不能同时标记为正确）。The fossil is a WRONG option（化石错误值必须作为错误选项）。非官方机构运营（affiliation 非官方机构 is OK）。不发明官方未提及的内容（do not invent official facts）。不声称 AEIS 是 G3 paper（G3 只是官方 preceding-level 内容来源）。不发明官方 cut-scores 或 extra official names。第 26–28 周已完成 5.1–5.3，本周只教 5.4，下周 5.5 nth term。
        </p>
      </div>
    </div>
  );
}
