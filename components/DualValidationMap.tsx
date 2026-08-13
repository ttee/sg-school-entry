export default function DualValidationMap() {
  return (
    <div className="mb-8 bg-card border border-accent/40 rounded-xl p-6">
      <h2 className="font-serif font-semibold text-xl text-ink mb-3">
        试学周对应官方什么 / Week 0 Curriculum Alignment
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周是<strong>第一天入学 + Lost and Found / 冠词 a/an/the</strong>。以下是诚实的双重对照：MOE
        官方英语大纲 + Cambridge A2 Key for Schools 考试格式（技能相关，但<strong>不是真题</strong>）。
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
                Cambridge A2 Key 技能对应 / Related Skill
              </th>
              <th className="px-4 py-3 text-left font-semibold text-ink border-b border-line">
                诚实说明 / Honest Gap
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
                Reading Parts 1–5：简单书面信息理解
              </td>
              <td className="px-4 py-3 text-muted text-xs align-top">
                原创 CEQ 风格作业，不是官方真题或样题
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
                考试最接近的是 Parts 4–5 完形填空；我们教冠词在故事情境中的使用
              </td>
              <td className="px-4 py-3 text-muted text-xs align-top">
                不是 Cambridge 完形填空试卷；是针对冠词的原创练习
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
                Part 6 Guided writing：官方要求 25+ 词；我们要求 50–70 词作为拉伸练习
              </td>
              <td className="px-4 py-3 text-muted text-xs align-top">
                不是限时 1 小时试卷；不是 Part 7 图片故事题
              </td>
            </tr>
            <tr className="border-b border-line">
              <td className="px-4 py-3 text-ink align-top">
                <strong>听力：</strong>选择题
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                Listening and Viewing
              </td>
              <td className="px-4 py-3 text-ink-2 align-top">
                Listening Parts 1–5：公告、对话等日常语速适中的材料
              </td>
              <td className="px-4 py-3 text-muted text-xs align-top">
                播放器可暂停和重听；官方考试听两遍
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
                Speaking Part 1 个人信息和事实性话题（非 Part 2 的双人讨论）
              </td>
              <td className="px-4 py-3 text-muted text-xs align-top">
                不是官方 8–10 分钟双人考试；是单人自述练习
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-5 space-y-3">
        <div className="bg-paper-2 border border-line rounded-lg p-4 text-sm">
          <p className="font-semibold text-ink mb-2">📚 官方资源 / Official Resources:</p>
          <ul className="space-y-1.5 text-ink-2">
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
          </ul>
        </div>

        <div className="bg-warn-bg border border-warn-ink/30 rounded-lg p-4 text-sm">
          <p className="font-semibold text-ink mb-2">⚠️ 不是什么 / What This Is NOT:</p>
          <ul className="list-disc list-inside space-y-1 text-ink-2 ml-2">
            <li>
              <strong>不是 Cambridge 官方真题或样题</strong> — 本站与剑桥无隶属关系，不出售或使用官方 past papers
            </li>
            <li>
              <strong>不是 STELLAR 课本内容</strong> — 我们不抄 Shared Book Approach / Supported Reading 的具体步骤
            </li>
            <li>
              <strong>不保证 CES 分数或 AEIS 录取</strong> — 不编造「CES 120 保证」或「往年 AEIS 通过率」
            </li>
          </ul>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-sm">
          <p className="font-semibold text-ink mb-2">✅ 诚实说明 / Honest Statement:</p>
          <p className="text-ink-2 leading-relaxed">
            本周作业内容<strong>全部原创</strong>，由本工作室编写，参考 MOE Areas of Language Learning 和
            Cambridge A2 Key for Schools <strong>任务类型</strong>（不是真题内容）。所有情境、人名、地点均为虚构。
          </p>
          <p className="text-ink-2 leading-relaxed mt-2">
            <strong>纠错焦点：</strong>冠词 a/an/the 和零冠词（by bus, on Monday）。这是中国学生的高频错误（中文没有冠词）。本周微课、语法题、AI
            口语/写作反馈会盯住这一个错误，直到孩子改掉。
          </p>
        </div>
      </div>
    </div>
  );
}
