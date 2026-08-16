export default function DualValidationMapMathWeek9() {
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
                Convert 5 km to metres
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Length</strong><br />
                • 1.1 Length: kilometres (km)<br />
                • 1.4 Conversion of a measurement in compound units to the smaller unit and vice versa (km ↔ m)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P4</strong> 的孩子需理解 <strong>P3</strong> 技能：1 km = 1000 m，5 km = 5000 m
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                Convert 3 m 45 cm to cm (compound unit)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Length</strong><br />
                • 1.3 Length/mass/volume in compound units<br />
                • 1.4 Conversion of a measurement in compound units to the smaller unit (m ↔ cm)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：复合单位（3 m 45 cm = 300 cm + 45 cm = 345 cm）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                Convert 2500 g to kg and g
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Mass</strong><br />
                • 1.3 Mass in compound units<br />
                • 1.4 Conversion of a measurement in compound units to the smaller unit and vice versa (kg ↔ g)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：2500 g = 2 kg 500 g（1 kg = 1000 g）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                Compare 1 l 200 ml and 900 ml
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Volume</strong><br />
                • 1.2 Volume of liquid: millilitres (ml)<br />
                • 1.3 Volume in compound units<br />
                • 1.4 Conversion (l ↔ ml)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：毫升（ml）和复合单位比较（1 l 200 ml = 1200 ml > 900 ml）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                3 km − 1500 m = ? km
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Length</strong><br />
                • 1.1 Length: kilometres (km)<br />
                • 1.4 Conversion (km ↔ m)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：千米减法需统一单位（3 km = 3000 m，3000 − 1500 = 1500 m = 1.5 km）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                How many metres in 2 km?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Length: km</strong><br />
                • 1.1 Length: kilometres (km)<br />
                • 1.4 Conversion (km ↔ m)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：1 km = 1000 m，2 km = 2000 m
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                Convert 1 m 35 cm to cm
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Compound units</strong><br />
                • 1.3 Length in compound units<br />
                • 1.4 Conversion to smaller unit
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：复合单位转小单位（1 m 35 cm = 135 cm）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                Convert 3 kg 250 g to g
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Mass compound units</strong><br />
                • 1.3 Mass in compound units<br />
                • 1.4 Conversion (kg ↔ g)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：3 kg 250 g = 3000 g + 250 g = 3250 g
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                How many ml in 2 l?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Volume: ml</strong><br />
                • 1.2 Volume of liquid: millilitres (ml)<br />
                • 1.4 Conversion (l ↔ ml)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：毫升（1 l = 1000 ml，2 l = 2000 ml）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                Convert 4500 ml to l and ml
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Volume compound units</strong><br />
                • 1.3 Volume in compound units<br />
                • 1.4 Conversion to larger unit (ml ↔ l)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：4500 ml = 4 l 500 ml（1000 ml = 1 l）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                Convert 8000 m to km
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Length: km</strong><br />
                • 1.1 Length: kilometres (km)<br />
                • 1.4 Conversion to larger unit (m ↔ km)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：8000 m = 8 km（1000 m = 1 km）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                Convert 560 cm to m and cm
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Length compound units</strong><br />
                • 1.3 Length in compound units<br />
                • 1.4 Conversion to larger unit (cm ↔ m)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：560 cm = 5 m 60 cm（100 cm = 1 m）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                Convert 4200 g to kg and g
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Mass compound units</strong><br />
                • 1.3 Mass in compound units<br />
                • 1.4 Conversion to larger unit (g ↔ kg)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：4200 g = 4 kg 200 g（1000 g = 1 kg）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) Convert 7 km to m<br />
                (b) Convert 2 m 75 cm to cm<br />
                (c) A bottle has 1 l 800 ml of water. Mei drinks 600 ml. How much is left? Give answer in l and ml.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement</strong><br />
                • 1.1 Length: kilometres (km)<br />
                • 1.3 Length/volume in compound units<br />
                • 1.4 Conversion of a measurement in compound units to the smaller unit and vice versa (km ↔ m, m ↔ cm, l ↔ ml)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P3/P4 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 7 km = 7000 m；(b) 2 m 75 cm = 275 cm；(c) 1 l 800 ml − 600 ml = 1 l 200 ml 或 1800 ml − 600 ml = 1200 ml = 1 l 200 ml
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
          • Strands covered: <em>Measurement</em> (Sub-strand: Length, Mass, Volume)
          <br />
          • Content points: <strong>Measurement</strong> 1.1 Length: kilometres (km); 1.2 Volume of liquid: millilitres (ml); 1.3 Length/mass/volume in compound units; 1.4 Conversion of a measurement in compound units to the smaller unit and vice versa: km ↔ m, m ↔ cm, kg ↔ g, l ↔ ml
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
