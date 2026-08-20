import Link from "next/link";

export const metadata = {
  title: "隐私政策 / Privacy Policy · 狮城入学",
  description: "本站如何收集和使用儿童个人数据 | How we collect and use children's personal data",
};

export default function PrivacyPage() {
  return (
    <>
      <a
        className="absolute left-3 -top-12 bg-ink text-paper px-3 py-2 z-50 focus:top-3"
        href="#main"
      >
        跳到正文
      </a>

      <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-4 min-h-14 flex items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center gap-2.5 mr-auto">
            <svg className="w-8 h-8 text-accent flex-none" viewBox="0 0 32 32" aria-hidden="true">
              <rect x="1" y="1" width="30" height="30" rx="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 24V11h16v13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M13 24V15h6v9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col leading-tight">
              <strong className="font-serif font-semibold text-ink tracking-wide">狮城入学</strong>
              <span className="text-xs text-muted tracking-wider">SG SCHOOL ENTRY</span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            返回首页
          </Link>
        </div>
      </header>

      <main id="main" className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h1 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-3">
          隐私政策 / Privacy Policy
        </h1>
        <p className="text-sm text-muted mb-8">
          更新日期 / Last updated: 2026 年 8 月 13 日 / 13 August 2026
        </p>

        <div className="prose prose-ink max-w-none space-y-8">
          <section className="bg-accent/5 border border-accent/20 rounded-xl p-6 mb-8">
            <h2 className="font-serif font-semibold text-xl text-ink mb-3">
              家长须知：您的孩子未满 18 岁时，我们需要您的同意
            </h2>
            <p className="text-sm text-ink-2 leading-relaxed">
              本站是小学生英语教学工作室。学生账号收集的所有个人数据均需家长或监护人同意。<strong>孩子本人不能自行注册或提交个人信息。</strong>
            </p>
            <p className="text-sm text-ink-2 leading-relaxed mt-3">
              <strong>English:</strong> This is a primary-school English education studio. All personal data collected from student accounts requires parental or guardian consent. <strong>Children cannot register or submit personal information on their own.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              1. 适用法律 / Applicable Law
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              本站遵守新加坡《2012 年个人资料保护法》（Personal Data Protection Act 2012, PDPA）。
            </p>
            <p className="text-ink-2 leading-relaxed mb-3">
              新加坡个人资料保护委员会（PDPC）于 2024 年 3 月 28 日发布《关于数字环境中儿童个人数据的 PDPA 咨询指南》（Advisory Guidelines on the PDPA for Children's Personal Data in the Digital Environment），明确指出：
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2 mb-4">
              <li>
                <strong>13 岁以下儿童</strong>的个人数据收集，机构必须获得家长或监护人的同意。
              </li>
              <li>
                <strong>13 至 17 岁</strong>的青少年如果有足够理解能力，可以自行给予同意；但在教育环境中，PDPC 建议机构可以选择更高的同意年龄。
              </li>
              <li>
                <strong>本站作为小学教育工作室</strong>，要求所有 18 岁以下学生的账号均由家长或监护人同意并监督使用。
              </li>
            </ul>
            <p className="text-ink-2 leading-relaxed mb-3">
              儿童个人数据应受更高标准的保护。本站不会将儿童数据用于营销、公开排名或出售给第三方。
            </p>
            <div className="bg-paper-2 border border-line rounded-lg p-4 text-sm">
              <p className="text-ink-2 mb-2">
                <strong>官方资源 / Official Resources:</strong>
              </p>
              <ul className="space-y-1.5 text-muted">
                <li>
                  <a
                    href="https://www.pdpc.gov.sg/guidelines-and-consultation/2024/03/advisory-guidelines-on-the-pdpa-for-childrens-personal-data-in-the-digital-environment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    PDPC 儿童数据咨询指南（英文）
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pdpc.gov.sg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    新加坡个人资料保护委员会 (PDPC)
                  </a>
                </li>
                <li>
                  <a
                    href="https://sso.agc.gov.sg/Act/PDPA2012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    个人资料保护法 2012 全文（英文）
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              2. 我们收集哪些数据 / What We Collect
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              我们收集以下数据用于教学与进度跟踪：
            </p>
            <table className="w-full border border-line rounded-xl overflow-hidden text-sm mb-4">
              <thead className="bg-paper-2">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-ink border-b border-line">
                    数据类型 / Data Type
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-ink border-b border-line">
                    收集内容 / What We Collect
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card">
                <tr className="border-b border-line">
                  <td className="px-4 py-3 text-ink">报名咨询</td>
                  <td className="px-4 py-3 text-ink-2">
                    家长微信号、孩子出生年份、拟申请学段、报名意向（通过本站报名表留下，7 个工作日内回复）
                  </td>
                </tr>
                <tr className="border-b border-line">
                  <td className="px-4 py-3 text-ink">学生信息</td>
                  <td className="px-4 py-3 text-ink-2">
                    姓名、年级/级别（A2 或 B1）、登录邮箱（家长提供，用于登录和进度通报）
                  </td>
                </tr>
                <tr className="border-b border-line">
                  <td className="px-4 py-3 text-ink">作业答案</td>
                  <td className="px-4 py-3 text-ink-2">
                    阅读/语法选择题答案、写作文本、听读练习答案
                  </td>
                </tr>
                <tr className="border-b border-line">
                  <td className="px-4 py-3 text-ink">口语录音</td>
                  <td className="px-4 py-3 text-ink-2">
                    可选提交的语音录音文件（正式周由顾问批改）
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-ink">进度数据</td>
                  <td className="px-4 py-3 text-ink-2">
                    每周完成状态、得分、提交时间（用于家长微信通报）
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-ink-2 leading-relaxed">
              <strong>English:</strong> We collect enquiry data via registration form (parent WeChat, child birth year, intended stage, registration intent), student name/class/level, login email provided by parent, homework answers, optional voice recordings (reviewed by advisors during enrolled weeks), and progress data for parent updates.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              3. 数据用途 / Purpose of Collection
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              我们收集这些数据的唯一目的是：
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2 mb-4">
              <li>
                <strong>教学：</strong>提供每周作业 app 与家长微信跟进的教学服务
              </li>
              <li>
                <strong>评估与反馈：</strong>选择题当场看对错；写作和口语先看题目、先跟读；正式周由顾问开通批改
              </li>
              <li>
                <strong>家长通报：</strong>通过微信或邮件向家长通报孩子的周作业完成情况与分数
              </li>
              <li>
                <strong>账号管理：</strong>维护登录账号与订阅状态
              </li>
            </ul>
            <p className="text-ink-2 leading-relaxed mb-3">
              <strong className="text-warn-ink">我们不会：</strong>
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2">
              <li>公开学生的姓名、分数或作业内容（不做公开排名榜）</li>
              <li>将儿童数据出售给任何第三方</li>
              <li>将数据用于广告投放或营销推广</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              4. 批改流程与数据存储 / Feedback Process & Storage
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              <strong>作业批改流程：</strong>
            </p>
            <p className="text-ink-2 leading-relaxed mb-3">
              选择题当场看对错；写作和口语先看题目、先跟读；正式周由顾问开通批改。写作和口语批改功能仅在正式报名周期由顾问开通，公开访客无法使用 AI 批改功能。
            </p>
            <p className="text-ink-2 leading-relaxed mb-3">
              <strong>数据存储：</strong>
            </p>
            <p className="text-ink-2 leading-relaxed mb-3">
              学生的作业答案、写作文本存储在我们的 PostgreSQL 数据库中（托管在 Vercel / Supabase，位于新加坡或美国数据中心）。口语练习记录存储提交时间和完成状态，用于进度跟踪。
            </p>
            <div className="bg-paper-2 border border-line rounded-lg p-5">
              <p className="text-sm text-ink-2 leading-relaxed mb-2">
                <strong>关于 AI 评估（仅适用于正式报名学员）：</strong>
              </p>
              <p className="text-sm text-ink-2 leading-relaxed">
                正式报名学员在顾问开通后可使用 AI 辅助批改功能。该功能通过 Google Gemini API（经 Vercel 云端）对写作文本和口语录音进行评估。根据 <a
                  href="https://ai.google.dev/gemini-api/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Google Gemini API 用户条款
                </a>，提交给 API 的内容可能被 Google 用于产品改进。如家长对此有疑虑，可联系顾问讨论替代批改方式。
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              5. 数据访问与分享 / Data Access & Sharing
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              <strong>谁可以看到孩子的数据：</strong>
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2 mb-4">
              <li>
                <strong>家长本人：</strong>通过微信通报或登录网站查看孩子的进度与分数
              </li>
              <li>
                <strong>授课老师：</strong>查看作业完成情况与写作内容，用于教学反馈
              </li>
              <li>
                <strong>不分享给其他学生或公众：</strong>不公开学生的姓名、分数或作业内容
              </li>
            </ul>
            <p className="text-ink-2 leading-relaxed mb-3">
              <strong>第三方服务：</strong>
            </p>
            <p className="text-ink-2 leading-relaxed">
              我们使用以下第三方服务处理数据，均仅用于教学目的：
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2">
              <li>
                <strong>Vercel：</strong>网站托管（美国 / 新加坡节点）
              </li>
              <li>
                <strong>Supabase / PostgreSQL：</strong>数据库存储
              </li>
              <li>
                <strong>Google Gemini API：</strong>AI 写作与口语评估（见上一节说明）
              </li>
            </ul>
            <p className="text-sm text-muted mt-3">
              我们不会将儿童数据出售给广告商或其他教育机构。
            </p>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              6. 家长权利：如何撤回同意或删除数据 / Parental Rights
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              家长或监护人有权：
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2 mb-4">
              <li>
                <strong>查看数据：</strong>登录孩子的学生账号查看作业与进度，或通过微信 / 邮件索取数据副本
              </li>
              <li>
                <strong>更正数据：</strong>如发现姓名或联系方式有误，可通过微信 / 邮件通知我们更正
              </li>
              <li>
                <strong>撤回同意 / 删除账号：</strong>随时通知我们停止收集孩子的数据并删除已存储的账号与作业记录
              </li>
            </ul>
            <div className="bg-card border border-line rounded-xl p-5">
              <p className="font-semibold text-ink mb-2">如何联系我们 / How to Contact Us:</p>
              <p className="text-sm text-ink-2 mb-2">
                通过本站报名表留下微信号，7 个工作日内回复。
              </p>
              <p className="text-xs text-muted mt-3">
                我们会在 7 个工作日内回复您的请求。删除数据后，孩子的账号将无法继续使用本站服务。
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              7. 数据保留期限 / Data Retention
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              我们会保留学生数据直到以下情况之一发生：
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2">
              <li>家长或监护人要求删除账号</li>
              <li>订阅到期后 1 年内无续订（自动删除试学账号数据）</li>
              <li>学生完成课程或停止使用本站服务超过 2 年</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              8. 安全措施 / Security Measures
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              我们采取以下措施保护儿童数据：
            </p>
            <ul className="list-disc pl-6 text-ink-2 space-y-2">
              <li>
                <strong>密码加密：</strong>使用 bcrypt 哈希存储登录密码，本站员工无法查看明文密码
              </li>
              <li>
                <strong>HTTPS 加密传输：</strong>所有数据通过 SSL/TLS 加密传输
              </li>
              <li>
                <strong>访问限制：</strong>仅授课老师和系统管理员可以访问学生数据库，需通过身份验证
              </li>
              <li>
                <strong>无公开 API：</strong>学生数据不对外开放 API 或公开查询接口
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              9. 免责声明 / Disclaimer
            </h2>
            <div className="bg-paper-2 border border-line rounded-lg p-5">
              <p className="text-sm text-ink-2 leading-relaxed mb-3">
                <strong>本隐私政策不构成法律意见。</strong>
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-3">
                本站尽力遵守新加坡《个人资料保护法》（PDPA）和 PDPC 儿童数据咨询指南，但本站不是持牌法律顾问，本政策不构成对 PDPA 条文的完整解释或法律意见。
              </p>
              <p className="text-sm text-ink-2 leading-relaxed mb-3">
                <strong>本站不声称「PDPA 认证」或「PDPC 官方认可」。</strong>
              </p>
              <p className="text-sm text-ink-2 leading-relaxed">
                如对 PDPA 合规要求有疑问，请咨询专业法律顾问或联系新加坡个人资料保护委员会（PDPC）。
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
              10. 政策更新 / Policy Updates
            </h2>
            <p className="text-ink-2 leading-relaxed mb-3">
              我们可能会更新本隐私政策以反映法律变更或服务调整。更新时会在本页面顶部标注新的生效日期，并通过微信或邮件通知已订阅的家长。
            </p>
            <p className="text-sm text-muted">
              继续使用本站服务即表示您接受更新后的隐私政策。如不同意更新内容,请停止使用并联系我们删除数据。
            </p>
          </section>

          <section className="border-t border-line pt-8">
            <p className="text-sm text-muted mb-4">
              <strong className="text-ink">联系我们 / Contact Us:</strong>
            </p>
            <p className="text-sm text-ink-2 mb-2">
              如对本隐私政策有任何疑问，请通过首页报名表留下微信号。报名时也可向老师咨询数据收集与使用的具体情况。
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-semibold"
            >
              ← 返回首页 / Back to Home
            </Link>
          </section>
        </div>
      </main>

      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              狮城入学 · SG School Entry
            </Link>
            <Link href="/privacy" className="hover:text-ink transition-colors">
              隐私 / Privacy
            </Link>
            <a
              href="https://www.pdpc.gov.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              PDPC
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
