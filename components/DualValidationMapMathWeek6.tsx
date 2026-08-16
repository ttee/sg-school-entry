export default function DualValidationMapMathWeek6() {
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
                4256 个小玩具 + 2318 个大玩具 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers → Whole Numbers → Numbers up to 10 000</strong><br />
                • 1.1 Counting, reading and writing in numerals and words<br />
                • 1.3 Addition and subtraction algorithms (up to 4 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P4</strong> 的孩子需理解 <strong>P3</strong> 技能：四位数加法，对齐位值（千、百、十、个）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                $12.40 + $15.80 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Money → Dollars and Cents</strong><br />
                • 3.1 Addition and subtraction of money in decimal notation<br />
                • 3.2 Solving up to 2-step word problems involving money
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：钱币小数记法（$12.40 读作 twelve dollars forty cents），对齐小数点加减
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                7845 本书 + 1237 本书 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.3 Addition and subtraction algorithms (up to 4 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：四位数加法（7845 + 1237 = 9082），对齐千百十个位
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                $50.00 − $18.60 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Money</strong><br />
                • 3.1 Addition and subtraction of money in decimal notation
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：钱币减法，对齐小数点（$50.00 − $18.60 = $31.40）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                5234 − 3896 = ?（求差）
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.3 Addition and subtraction algorithms (up to 4 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：四位数减法（5234 − 3896 = 1338），找「多多少」用减法
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                7395 中 7 的位值是多少？
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.1 Counting, reading and writing<br />
                • 1.2 Place values (thousands, hundreds, tens, ones)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：位值（7 在千位 = 7000）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                比较 4567 和 4576 大小
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.4 Comparing and ordering numbers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：比较四位数（千位相同看百位，百位相同看十位，4576 > 4567）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                3 本书 × $9.50 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Money</strong><br />
                • 3.2 Solving up to 2-step word problems involving money
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：钱币乘法应用（3 × $9.50 = $28.50）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                2340 + 1895 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.3 Addition and subtraction algorithms (up to 4 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：四位数加法（2340 + 1895 = 4235）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                8200 − 3456 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.3 Addition and subtraction algorithms (up to 4 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：四位数减法借位（8200 − 3456 = 4744）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                $4.80 + $1.50 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Money</strong><br />
                • 3.1 Addition and subtraction of money in decimal notation
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：钱币小数加法（$4.80 + $1.50 = $6.30）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                3000 + 2000 + 400 + 50 + 6 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.2 Place values (thousands, hundreds, tens, ones)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：展开式（expanded form）转标准形式（3000 + 2000 + 400 + 50 + 6 = 5456）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                6789 − 5432 = ?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Numbers up to 10 000</strong><br />
                • 1.3 Addition and subtraction algorithms (up to 4 digits)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：四位数减法（6789 − 5432 = 1357）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) 2 张成人票 × $12.50 + 3 张儿童票 × $7.80<br />
                (b) $100.00 − (4 × $12.50) 找零
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Money</strong><br />
                • 3.2 Solving up to 2-step word problems involving money<br />
                • 3.1 Addition and subtraction of money in decimal notation
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P3/P4 数学 Part 2 short-answer questions 要求 show working steps。本题练习两步钱币应用题：(a) 2 × $12.50 = $25.00, 3 × $7.80 = $23.40, $25.00 + $23.40 = $48.40。(b) 4 × $12.50 = $50.00, $100.00 − $50.00 = $50.00
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
          • Strands covered: <em>Numbers</em> (Sub-strand: Whole Numbers up to 10 000), <em>Measurement</em> (Sub-strand: Money)
          <br />
          • Content points: <strong>Whole Numbers to 10 000</strong> 1.1 Counting, reading and writing; 1.2 Place values; 1.3 Addition and subtraction algorithms (up to 4 digits); 1.4 Comparing and ordering. <strong>Money</strong> 3.1 Addition and subtraction in decimal notation; 3.2 2-step word problems.
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
