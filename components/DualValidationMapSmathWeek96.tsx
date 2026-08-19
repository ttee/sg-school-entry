export default function DualValidationMapSmathWeek96() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周题目
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        第 96 周按 <strong>AEIS-Secondary Sec 3 Mathematics</strong> 卷型样本来练。这是 AEIS 中学数学。内容对应申请 Sec 3 入学的 preceding level（前一级 Sec 2）STATISTICS AND PROBABILITY 第一节：S1. Data handling and analysis —— 本周教 <strong>range, interquartile range and standard deviation as measures of spread</strong> (1.12)（离散程度：极差、四分位距和标准差）。Range = largest − smallest (极差 = 最大 − 最小). IQR = Q3 − Q1 (四分位距 = Q3 − Q1，先排序，用 W95 的四分位数方法找 Q1 和 Q3). A larger range / IQR / standard deviation means more spread (更大的 range / IQR / 标准差表示更分散). Range is pulled by one extreme value; IQR is not (极差受一个极端值影响；IQR 不受). This week we compare SD qualitatively (which is more spread), not calculate the full SD formula (本周只比较标准差 qualitatively 哪组更散，不套完整公式，那是 S1.15). 例：Data set: 10, 15, 18, 20, 22, 25, 30. Range = 30 − 10 = 20. Q2 = 20, Q1 = 15, Q3 = 25, IQR = 25 − 15 = 10.
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
          <strong>Preceding-level 规则：</strong>AEIS-Secondary 申请者需熟悉所申请级别前一级（preceding level）的英语与数学内容。官方举例：apply Secondary 3 → be familiar with Secondary 2 content. 本周针对 Sec 3 申请者，内容为 Sec 3 前一级（Sec 2）的官方 MOE 2020 G2 and G3 Mathematics Syllabuses, Secondary Two, STATISTICS AND PROBABILITY, S1. Data handling and analysis —— 本周教 1.12 range, interquartile range and standard deviation as measures of spread（离散程度：极差、四分位距和标准差）。
        </p>
        <p className="text-xs text-ink-2">
          <strong>本周内容：</strong>官方 MOE 2020 G2 and G3 Mathematics Syllabuses - Sec 2 STATISTICS AND PROBABILITY, S1. Data handling and analysis: <strong>本周是 1.12 range, interquartile range and standard deviation as measures of spread</strong>（离散程度：极差、四分位距和标准差）。Range = largest − smallest (极差 = 最大 − 最小). IQR = Q3 − Q1 (四分位距 = Q3 − Q1). 先排序，用 W95 的四分位数方法找 Q1 和 Q3，再算 IQR。A larger range / IQR / standard deviation means more spread (更大的 range / IQR / 标准差表示更分散). Range is pulled by one extreme value; IQR is not (极差受一个极端值影响，IQR 不受). This week we compare SD qualitatively (which is more spread around the mean), not calculate the full SD formula (本周只比较标准差 qualitatively 哪组更散，不套完整公式，那是 S1.15). 不要把极差反过来算（smallest − largest）。不要把 IQR 反过来算（Q1 − Q3）或加起来（Q3 + Q1）。不要把一个极端值当成 IQR。不要画箱线图（box-and-whisker plots 和 cumulative frequency diagrams 是 S1.13，不是本周）。本周建立在 W95 (S1.11 quartiles and percentiles) 基础上。本周不教 S1.13 cumulative frequency diagrams, box-and-whisker plots。本周不教 S1.15 calculation of the standard deviation formula（完整的 SD 计算公式）。Cast: secondary Wei（中学生 Wei）, Aisha（中学生 Aisha）, Mr Lim（林老师）at Riverside Secondary School（河畔中学）。No calculator（calculators are not allowed）。第 96 周学 measures of spread（离散程度：range, IQR, SD）。
        </p>
      </div>
    </div>
  );
}
