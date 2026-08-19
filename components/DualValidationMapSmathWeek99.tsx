export default function DualValidationMapSmathWeek99() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周题目
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 99 周按 <strong>AEIS-Secondary Sec 3 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学。内容对应申请 Sec 3 入学的 preceding level（前一级 Sec 2）STATISTICS AND PROBABILITY 第一节：S1. Data handling and analysis —— 本周教 <strong>calculation of the standard deviation for a set of data (grouped and ungrouped)</strong> (1.15)（计算标准差，分组和不分组数据）。先求平均数，再算每个数与平均数差的平方（(x − mean)²），加起来除以个数（÷ n），再开方（√）。分组数据用组中值（class midpoint）。不要除以 n−1，新加坡中学用 n。例：Data 2, 4, 6, 8. Mean = 5. SD = √( [(2−5)² + (4−5)² + (6−5)² + (8−5)²] / 4 ) = √(20 / 4) = √5. 不要把 Σ(x−mean) 当成标准差（那个总是 0）。不要忘记开方。
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
            MOE 2020 G2 and G3 Mathematics Syllabuses (PDF)
          </a>
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>官方考试时长与题型：</strong>Part 1 Multiple-choice questions (34 items) 30 分钟 + Part 2 Short-answer questions (20 items) and open-ended questions (10 to 15 items) 1 小时 45 分钟。Calculators are not allowed（不允许使用计算器）。Short-answer and open-ended questions: candidates are required to show the method of solution clearly by writing working steps in the spaces provided, plus the final answer.
        </p>
        <p className="text-xs text-ink-2 mb-2">
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 3 申请者，内容为 Sec 3 前一级（Sec 2）的官方 MOE 2020 G2 and G3 Mathematics Syllabuses, Secondary Two, STATISTICS AND PROBABILITY, S1. Data handling and analysis —— 本周教 1.15 calculation of the standard deviation for a set of data (grouped and ungrouped)（计算标准差，分组和不分组数据）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G2 and G3 Mathematics Syllabuses - Sec 2 STATISTICS AND PROBABILITY, S1. Data handling and analysis: <strong>本周是 1.15 calculation of the standard deviation for a set of data (grouped and ungrouped)</strong>（计算标准差，分组和不分组数据）。标准差（standard deviation, SD）衡量数据的离散程度（spread / variation）。公式：不分组数据 SD = √( Σ(x − mean)² / n ) 或等价公式 SD = √( Σx² / n − mean² )；分组数据用组中值 x，公式 SD = √( Σf(x − mean)² / Σf )。步骤：(1) 算平均数 mean，(2) 算每个数与平均数的差 x − mean，(3) 求差的平方 (x − mean)²，(4) 求平方和 Σ(x − mean)²（分组数据是 Σf(x − mean)²），(5) 除以个数 n（分组数据除以 Σf）得到方差 variance，(6) 开方得到标准差 SD = √variance。新加坡中学用 n 作为分母，不用 n−1（那是样本标准差 sample SD，这里教的是总体标准差 population SD）。不要把 Σ(x−mean) 当成标准差（正负相消总是 0）。不要忘记开方（方差 variance 不是标准差 SD，SD = √variance）。分组数据用组中值（class midpoint，不是组端 class end）。本周不教 S1.16 (use mean and SD to compare two sets)。Cast: secondary Wei（中学生 Wei）, Aisha（中学生 Aisha）, Mr Lim（林老师）at Riverside Secondary School（河畔中学）。No calculator（calculators are not allowed）。第 99 周学 calculating the standard deviation（计算标准差）。
        </p>
      </div>
    </div>
  );
}
