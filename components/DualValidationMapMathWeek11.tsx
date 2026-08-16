export default function DualValidationMapMathWeek11() {
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
                The library opens at 9:00 a.m. It closes at 6:00 p.m. How long is the library open?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Time</strong><br />
                • Finding starting time, finishing time, or duration<br />
                • Time in hours and minutes
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P4</strong> 的孩子需理解 <strong>P3</strong> 技能：从开始时间和结束时间计算经过时间（duration）。9:00 a.m. 到 6:00 p.m. = 9 小时
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                A PE lesson starts at 10:15 a.m. It lasts 45 minutes. What time does it finish?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Time</strong><br />
                • Finding finishing time from starting time and duration
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：开始时间 + 经过时间 = 结束时间。10:15 a.m. + 45 min = 11:00 a.m.
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                How many seconds are there in 3 minutes?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Time</strong><br />
                • Measuring time in seconds<br />
                • 1 minute = 60 seconds
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：秒（seconds）与分钟的换算。1 min = 60 s，3 min = 3 × 60 = 180 s
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                The clock shows 14:30. What is this time in 12-hour clock?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Time</strong><br />
                • 24-hour clock<br />
                • Conversion between 12-hour and 24-hour clock
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：24 小时制。14:30 = 2:30 p.m.（14 − 12 = 2）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                Jun Wei's art lesson ended at 11:20 a.m. It lasted 50 minutes. What time did it start?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Time</strong><br />
                • Finding starting time from finishing time and duration
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：结束时间 − 经过时间 = 开始时间。11:20 a.m. − 50 min = 10:30 a.m.
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                What is 2:45 p.m. in 24-hour clock?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: 24-hour clock</strong><br />
                • Conversion from 12-hour to 24-hour clock
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：下午时间转 24 小时制。2:45 p.m. = 14:45（2 + 12 = 14）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                How many seconds are in 1 minute?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: seconds</strong><br />
                • 1 minute = 60 seconds
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新概念：秒（seconds）。1 min = 60 s
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                A music lesson starts at 1:30 p.m. and ends at 2:15 p.m. How long is the lesson?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: duration</strong><br />
                • Finding duration from start and finish times
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：结束 − 开始 = 经过时间。2:15 p.m. − 1:30 p.m. = 45 min
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                The school assembly starts at 07:45. What is this time in 12-hour clock?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: 24-hour clock</strong><br />
                • Conversion from 24-hour to 12-hour clock
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：24 小时制转 12 小时制。07:45 = 7:45 a.m.（早上不加 12）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                Mei's recess is 30 minutes long. It starts at 9:45 a.m. When does it end?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: finding finish time</strong><br />
                • Start time + duration = finish time
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：9:45 a.m. + 30 min = 10:15 a.m.
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                How many seconds are there in 2 minutes?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: seconds</strong><br />
                • Converting minutes to seconds
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：2 min = 2 × 60 = 120 s
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                A swimming lesson is from 3:00 p.m. to 4:30 p.m. How long is the lesson?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: duration</strong><br />
                • Word problems on duration
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：4:30 p.m. − 3:00 p.m. = 1 hour 30 minutes 或 90 minutes
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                What is 8:20 a.m. in 24-hour clock?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Time: 24-hour clock</strong><br />
                • Morning times in 24-hour format
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新技能：早上时间用 24 小时制。8:20 a.m. = 08:20（早上不加 12）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) A Chinese lesson starts at 10:30 a.m. and lasts 1 hour 15 minutes. What time does it finish?<br />
                (b) The school canteen opens at 06:45. What is this time in 12-hour clock?<br />
                (c) Ali ran 100 m in 18 seconds. Priya ran the same distance in 15 seconds. How many seconds faster was Priya?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Measurement → Time</strong><br />
                • Finding finishing time from start + duration<br />
                • Converting 24-hour clock to 12-hour clock<br />
                • Measuring time in seconds<br />
                • Word problems on time
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P3/P4 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 10:30 a.m. + 1 h 15 min = 11:45 a.m.；(b) 06:45 = 6:45 a.m.；(c) 18 s − 15 s = 3 s
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
          • Strands covered: <em>Measurement</em> (Sub-strand: Time)
          <br />
          • Content points: <strong>Measurement</strong> 3.1 Measuring time in seconds; 3.2 Finding starting time, finishing time, or duration; 3.3 24-hour clock (e.g. 2:30 p.m. = 14:30)
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
