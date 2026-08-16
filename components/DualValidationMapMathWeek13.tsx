export default function DualValidationMapMathWeek13() {
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
                [Bar graph showing favourite fruits]. How many children chose Apple?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Data Representation</strong><br />
                • Reading bar graphs<br />
                • Interpreting data from bars
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P4</strong> 的孩子需理解 <strong>P3</strong> 技能：读条形统计图（bar graph）。读图中 Apple 的条形高度 = 8 children
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                [Bar graph showing favourite sports]. Which sport is the most popular?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Data Representation</strong><br />
                • Comparing bars<br />
                • Finding the highest value
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 技能：比较条形图中的条高，找出最高的条 = most popular sport
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                [Bar graph showing favourite colours]. Which colour is the least popular?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Data Representation</strong><br />
                • Comparing bars<br />
                • Finding the lowest value
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 技能：比较条形图中的条高，找出最短的条 = least popular colour
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                [Bar graph showing pets]. How many more children have cats than fish?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Data Representation</strong><br />
                • Reading bar values<br />
                • Calculating difference
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：从条形图读出两个数，计算差值（difference）。cats − fish = 答案
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                [Bar graph showing drinks]. How many children were surveyed in total?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Data Representation</strong><br />
                • Reading all bar values<br />
                • Calculating total
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：读出所有条的值，相加得总数（total）。milk + juice + water + tea = total children
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q1</strong><br />
                A bar graph is used to show _____ .
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Bar graphs</strong><br />
                • Understanding bar graph purpose
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 新概念：条形统计图（bar graph）用来显示和比较数据（data）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q2</strong><br />
                In a bar graph, the height of the bar shows _____ .
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Bar graph structure</strong><br />
                • Understanding bar height meaning
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：条高（height of the bar）代表数量（the number/value）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q3</strong><br />
                [Given bar graph]. The tallest bar shows the _____ number.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Comparing bars</strong><br />
                • Tallest bar = greatest value
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：最高的条（tallest bar）= 最大的数（greatest number）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q4</strong><br />
                [Given bar graph]. The shortest bar shows the _____ number.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Comparing bars</strong><br />
                • Shortest bar = smallest value
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：最短的条（shortest bar）= 最小的数（smallest number）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q5</strong><br />
                [Given bar graph]. How many children chose swimming?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Reading bar values</strong><br />
                • Reading specific bar height
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：读条形图中某一条的高度 = 该项的数值
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                [Given bar graph showing books read]. How many more books did Ali read than Sara?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Calculating difference</strong><br />
                • Reading two bars and finding difference
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：读两个条的值，计算 Ali − Sara = difference
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                [Given bar graph]. What is the total number of children who participated?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Calculating total</strong><br />
                • Adding all bar values
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：把所有条的值相加得总数（total）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                In a bar graph, each bar represents _____ .
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics: Bar graph structure</strong><br />
                • Understanding what bars represent
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P3 标准技能：每个条（each bar）代表一个类别（a category or item）
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) At Tampines Primary School, the class did a survey about favourite sports. The results are shown below.<br />
                [Bar graph: Football 12, Basketball 8, Swimming 10, Badminton 6]<br />
                How many students chose Football? Show your working.<br />
                (b) Which sport is the most popular? How do you know?<br />
                (c) How many more students chose Football than Badminton? Show your working.
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Statistics → Data Representation</strong><br />
                • Reading bar graphs<br />
                • Comparing bars and finding most/least<br />
                • Calculating difference between values<br />
                • Real-world applications
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P3/P4 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 读条形图值 = 12 students；(b) 找最高的条 = Football is most popular；(c) 计算差值 12 − 6 = 6 students
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
          • Strands covered: <em>Statistics</em> (Sub-strand: Data Representation)
          <br />
          • Content points: <strong>Statistics</strong> 3.1 Reading and interpreting bar graphs; 3.2 Comparing data using bar graphs; 3.3 Solving simple problems involving bar graphs
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
