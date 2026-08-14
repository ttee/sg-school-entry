export default function DualValidationMap() {
  return (
    <div className="mb-8 bg-card border border-accent/40 rounded-xl p-6">
      <h2 className="font-serif font-semibold text-xl text-ink mb-3">
        试学周对应官方什么 / Week 0 Curriculum Alignment
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        试学周按 <strong>A2 Key for Schools 题型</strong>来练，让孩子先熟悉考试会见到的读、写、听、说。本周故事是<strong>开学第一天 + Lost and Found</strong>，焦点是冠词 a/an/the。所有内容为工作室原创编写，参考 MOE 英语大纲和 Cambridge 官方考试格式。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-line rounded-lg overflow-hidden text-sm">
          <thead className="bg-paper-2">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-ink border-b border-line">
                本周作业 / Our Task
              </th>
              <th className="px-4 py-3 text-left font-semibold text-ink border-b border-line">
                MOE 英语大纲 2020 / MOE EL Syllabus 2020
              </th>
              <th className="px-4 py-3 text-left font-semibold text-ink border-b border-line">
                对应考试题型 / Exam Question Type
              </th>
              <th className="px-4 py-3 text-left font-semibold text-ink border-b border-line">
                孩子练到什么 / What Your Child Practices
              </th>
            </tr>
          </thead>
          <tbody className="bg-card">
            <tr className="border-b border-line">
              <td className="px-4 py-3 text-ink align-top">
                <strong>阅读：</strong>学校邮件 + 选择题
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                Reading and Viewing
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong> — one long text, detailed understanding + main ideas, 5 MCQ
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                读一篇文本（学校通知）+ 5 道三选一选择题，练的就是考试 Part 3 题型
              </td>
            </tr>
            <tr className="border-b border-line">
              <td className="px-4 py-3 text-ink align-top">
                <strong>语法：</strong>Lost and Found 故事中的 a/an/the
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                Grammar + Vocabulary
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                <strong>Reading Part 4 & 5</strong> — Part 4 multiple-choice cloze (vocabulary gaps); Part 5 open cloze (one word per gap)
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                在 Lost and Found 故事里填 a/an/the，训练完形填空的语法判断能力
              </td>
            </tr>
            <tr className="border-b border-line">
              <td className="px-4 py-3 text-ink align-top">
                <strong>写作：</strong>邮件 50–70 词
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                Writing and Representing
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                <strong>Reading & Writing Part 6</strong> — guided writing: short email or note, 25 words or more
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                写一封邮件；官方最低 25 词，我们练 50–70 词作为拉伸，熟悉考试邮件格式
              </td>
            </tr>
            <tr className="border-b border-line">
              <td className="px-4 py-3 text-ink align-top">
                <strong>听力：</strong>Ms Tan 课表公告 + 选择题
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                Listening and Viewing
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                <strong>Listening Part 3</strong> — dialogue, 5 three-option questions; each recording played twice
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                听课堂公告或对话，做 5 道三选一题；官方考试每段听两遍，本周也听两遍
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-ink align-top">
                <strong>口语：</strong>~1 分钟自述第一天
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                Speaking and Representing
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                <strong>Speaking Part 1</strong> — interview: factual/personal information, 3–4 min (full test 8–10 min per pair)
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                自述个人经历（第一天上学），练的是 Part 1 事实性和个人信息问答
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5">
        <div className="bg-paper-2 border border-line rounded-lg p-4 text-sm">
          <p className="font-semibold text-ink mb-2">📚 官方资源 / Official Resources:</p>
          <ul className="space-y-1.5 text-ink-2">
            <li>
              <a
                href="https://www.cambridgeenglish.org/exams-and-tests/key/exam-format"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Cambridge A2 Key for Schools 官方考试格式
              </a>
            </li>
            <li>
              <a
                href="https://www.moe.gov.sg/primary/curriculum/syllabus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                MOE 小学课程大纲（English Language Syllabus 2020）
              </a>
            </li>
            <li>
              <a
                href="https://libris.nie.edu.sg/sites/default/files/2020-01/primary_els-2020-_syllabus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                EL Syllabus 2020 完整版 PDF（NIE 托管）
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
