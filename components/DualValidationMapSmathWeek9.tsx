export default function DualValidationMapSmathWeek9() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型与内容
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 9 周按 <strong>AEIS-Secondary Sec 1 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学，<strong>不是 CEQ</strong>。内容对应申请 Sec 2 入学的 preceding level（前一级 Sec 1）数论：HCF 和 LCM（highest common factor and lowest common multiple）通过质数分解（by prime factorisation）求解。
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
                <strong>应用题</strong><br />5 道选择题（HCF 和 LCM 应用）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ，30 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>官方 Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations</strong><br />1.2 finding highest common factor (HCF) and lowest common multiple (LCM) by prime factorisation<br />（官方 MOE 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题</strong><br />8 道选择题（HCF 和 LCM 计算）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 1 Multiple-choice questions</strong><br />34 道 MCQ（同一部分）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.2 HCF and LCM by prime factorisation</strong><br />HCF（highest common factor / 最大公约数）：两个数共有的质因数，取最小次幂相乘。例：12 = 2² × 3, 18 = 2 × 3²，HCF = 2¹ × 3¹ = 6。<br />LCM（lowest common multiple / 最小公倍数）：所有质因数，取最大次幂相乘。例：12 = 2² × 3, 18 = 2 × 3²，LCM = 2² × 3² = 36。<br />方法步骤：(1) 质数分解 prime factorisation；(2) HCF 取共有质数的小次幂；(3) LCM 取所有质数的大次幂。<br />本周不教：squares, cubes, square roots and cube roots（平方、立方、平方根、立方根，那是 1.2 的另一部分，下周教）。<br />不用计算器（calculators are not allowed）。
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作 / Show Your Working</strong><br />3 道应用题（要求写出推理步骤）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 2 Short-answer and open-ended questions</strong><br />Short-answer 20 题 + Open-ended 10–15 题，1 小时 45 分钟（官方 SEAB）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Sec 1 NUMBER AND ALGEBRA: N1.2 HCF and LCM by prime factorisation</strong><br />官方要求：clearly show the method of solution by writing working steps in the spaces provided, plus the final answer（需写出推理步骤和最终答案）<br />应用：largest number of groups/bags = HCF（最多组数/袋数用 HCF），smallest total/common time = LCM（最少总数/共同时间用 LCM）
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 2 申请者，内容为 Sec 2 前一级（Sec 1）的官方 2020 G3 Mathematics Syllabuses, Secondary One, NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 finding highest common factor (HCF) and lowest common multiple (LCM) by prime factorisation。
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>本周化石：</strong>swapping HCF and LCM（把 HCF 和 LCM 的方法搞反，算 HCF 时用所有质数取大次幂，算 LCM 时只用共有质数），using product of highest powers for HCF instead of lowest powers（HCF 应该取共有质数的最小次幂，不是最大次幂）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 2020 G3 Mathematics Syllabuses - Sec 1 NUMBER AND ALGEBRA, N1. Numbers and their operations: 1.2 finding highest common factor (HCF) and lowest common multiple (LCM) by prime factorisation（本周只教 HCF 和 LCM 部分，不教 squares, cubes, square roots and cube roots）。HCF（highest common factor / 最大公约数）：先质数分解两个数，找共有的质因数，取最小次幂相乘。例：24 = 2³ × 3, 36 = 2² × 3²，共有 2 和 3，HCF = 2² × 3 = 12（取小次幂：2 的次幂取 2，3 的次幂取 1）。LCM（lowest common multiple / 最小公倍数）：先质数分解两个数，看所有质因数（共有的和各自独有的），取最大次幂相乘。例：12 = 2² × 3, 18 = 2 × 3²，LCM = 2² × 3² = 36（取大次幂：2 的次幂取 2，3 的次幂取 2）。应用规律：largest number of groups = HCF（最多能分几组/几袋，用 HCF）；smallest total/common time = LCM（最小公倍数/最早共同时间，用 LCM）。不用计算器（calculators are not allowed）。本周不教 squares/cubes/roots（那是 1.2 的另一部分）。数字保持友好（numbers stay friendly）。金额用新加坡元 S$（如题目涉及钱币）。
        </p>
      </div>
    </div>
  );
}
