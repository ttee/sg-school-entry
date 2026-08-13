import Link from "next/link";

export default function HomePage() {
  const wechatId = process.env.NEXT_PUBLIC_WECHAT_ID;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

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
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#paths" className="text-ink-2 hover:text-ink transition-colors font-medium">
              路径
            </Link>
            <Link href="#ceq-course" className="text-ink-2 hover:text-ink transition-colors font-medium">
              会员课程
            </Link>
            <Link href="#contact" className="text-ink-2 hover:text-ink transition-colors font-medium">
              咨询
            </Link>
          </nav>
          <Link
            href="/learn"
            className="text-sm text-muted hover:text-ink transition-colors"
          >
            登录
          </Link>
        </div>
      </header>

      <main id="main">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
              升学工作室
            </p>
            <h1 className="font-serif font-semibold text-3xl md:text-5xl leading-tight tracking-tight mb-4 max-w-4xl">
              帮中国家庭走通新加坡政府学校路径
            </h1>
            <p className="text-lg text-ink-2 mb-3 max-w-2xl">
              CEQ 英语门槛 → AEIS 数学与英语，以及录取后的英语授课适应。
            </p>
            <p className="text-base text-ink-2 mb-8 max-w-2xl">
              小班直播课（最多 8 人）+ 每周作业 app。家长订阅，孩子登录做题。
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors text-base"
              >
                微信咨询 / 预约评估
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors text-base"
              >
                免费试学一周
              </Link>
            </div>
            <p className="text-sm text-muted max-w-2xl">
              非 MOE、SEAB、Cambridge 官方机构 · 录取不保证 · 月度会员 S$320 或预付 12 周 A2 / B1 冲刺包 · PayNow / 微信转账
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-paper" id="paths">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              小学一条路，中学另一条
            </h2>
            <p className="text-ink-2 mb-6 max-w-2xl">
              学段不同，考试组合就不同。不要用中学的办法去准备小学，也不要把科学当成 AEIS 科目。
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">小学 · P2–P5</p>
                <h3 className="font-serif text-xl font-semibold mb-2">小学路径</h3>
                <p className="text-ink-2 mb-4">
                  先过英语门槛，再在新加坡考 AEIS 数学。小学 AEIS 不另考英语卷，英语能力由 CEQ 证明。
                </p>
                <ul className="space-y-0 border-t border-line">
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    英语：剑桥英语资格考试（Cambridge English Qualifications, CEQ）。P2–P4 一般对应 A2 Key for Schools；P5 一般对应 B1 Preliminary for Schools。
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    CEQ 须在提交 AEIS / S-AEIS 申请前 12 个月内取得。提供成绩单 PDF（Statement of Results）即可，不必等待纸质证书。
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    数学：赴新加坡参加 AEIS 数学。考试地点与场次以教育部公布为准。
                  </li>
                  <li className="py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    科学不是 AEIS 试卷。政府小学各科以英语授课，科学准备放在录取之后。
                  </li>
                </ul>
              </article>

              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">中学 · Sec 1–3</p>
                <h3 className="font-serif text-xl font-semibold mb-2">中学路径</h3>
                <p className="text-ink-2 mb-4">
                  AEIS 英语与 AEIS 数学两科都要考。中学路径不要求 CEQ。
                </p>
                <ul className="space-y-0 border-t border-line">
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    英语、数学均在新加坡参加 AEIS（或后续的 S-AEIS，如当年开放）。
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    不要求提交剑桥英语资格考试（CEQ）。
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    科学及其他英语授课科目不是 AEIS 考试范围。部分预备课程会按教育部大纲教科学，那是入学后的适应，不能替代 AEIS。
                  </li>
                  <li className="py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    派位取决于考试表现、学位空缺与申报居住区域，不是交了申请就会有学位。
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-paper-2" id="ceq-course">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              会员与课程
            </h2>
            <p className="text-ink-2 mb-6 max-w-2xl">
              家长订阅，孩子登录。小班直播课（最多 8 人）+ 每周作业 app。先走 CEQ 英语门槛，再进 AEIS 数学与英语赛道。录取后可续订英语授课适应（不作为入学考试售卖）。
            </p>

            <div className="mb-8 bg-accent/5 border border-accent/20 rounded-xl p-6">
              <h3 className="font-serif font-semibold text-xl mb-3 text-ink">
                月度会员
              </h3>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-serif text-3xl font-semibold text-accent">
                  S$320
                </span>
                <span className="text-ink-2">/ 月</span>
              </div>
              <p className="text-sm text-ink-2 mb-4">
                小班直播课（每周 2 次，每次 1.5 小时）+ 每周作业 app 解锁全部当前级别（A2 或 B1）。包含 CEQ 备考四项技能：阅读、写作、听读准备、口语提示。
              </p>
              <ul className="space-y-2 text-sm text-ink-2 mb-5">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>每周 2 次小班直播课（1.5 小时/次）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>每周作业 app 全部解锁（阅读、语法、写作、听读、口语）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>选择题自动批改，写作待家长/老师查看</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span>
                  <span>家长微信通报进度，可随时取消</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                咨询月度订阅
              </Link>
            </div>

            <h3 className="font-serif font-semibold text-xl mb-4 text-ink">
              12 周预付包（CEQ 冲刺）
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-semibold">A2 Key for Schools</h3>
                  <div className="font-serif text-2xl font-semibold text-accent">S$2,480</div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">适合 P2–P4 CEQ 门槛</p>
                <p className="text-ink-2 mb-4 text-sm">
                  12 周冲刺剑桥 A2 Key for Schools 水平，帮孩子在 CEQ 考试前准备好听、说、读、写四项。
                </p>
                <ul className="space-y-0 border-t border-line mb-5">
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    12 周，每周 2 次课，每次 1.5 小时（共 24 节课）
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    小班授课，每班最多 8 人
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    针对 Cambridge A2 Key for Schools 四项技能：阅读、写作、听力、口语
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    包含 2 次模拟考，家长微信通报进度
                  </li>
                  <li className="py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    帮孩子在提交 AEIS / S-AEIS 申请前 12 个月内考出 CEQ，不保证具体 CES 分数或学校录取
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                >
                  报名咨询
                </Link>
              </article>

              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-semibold">B1 Preliminary for Schools</h3>
                  <div className="font-serif text-2xl font-semibold text-accent">S$2,880</div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">适合 P5 CEQ 门槛</p>
                <p className="text-ink-2 mb-4 text-sm">
                  12 周冲刺剑桥 B1 Preliminary for Schools 水平，帮孩子在 CEQ 考试前准备好听、说、读、写四项。
                </p>
                <ul className="space-y-0 border-t border-line mb-5">
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    12 周，每周 2 次课，每次 1.5 小时（共 24 节课）
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    小班授课，每班最多 8 人
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    针对 Cambridge B1 Preliminary for Schools 四项技能：阅读、写作、听力、口语
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    包含 2 次模拟考，家长微信通报进度
                  </li>
                  <li className="py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    帮孩子在提交 AEIS / S-AEIS 申请前 12 个月内考出 CEQ，不保证具体 CES 分数或学校录取
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                >
                  报名咨询
                </Link>
              </article>
            </div>

            <p className="text-sm text-muted mt-5 max-w-3xl">
              <strong className="text-ink-2">付款方式：</strong>PayNow 或微信转账，报名以咨询确认为准。无 Stripe。月度会员可随时取消，12 周预付包不退费。
              <br />
              <strong className="text-ink-2 mt-2 inline-block">考试单独报名：</strong>CEQ 考试本身在剑桥授权考点报名，不含在课程学费内。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-paper" id="contact">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">咨询与报名</h2>
            <p className="text-ink-2 mb-6">
              咨询月度会员或 12 周预付包，请说明孩子出生年份、拟申请学段（小学 P2–P5 或中学 Sec 1–3）。报名以咨询确认为准。
            </p>
            <div className="bg-card border border-line rounded-2xl p-6 shadow mb-6">
              <h3 className="font-serif font-semibold text-lg mb-4 text-ink">添加顾问微信</h3>
              <p className="text-sm text-ink-2 mb-4">
                {wechatId ? (
                  <>
                    <strong className="text-ink font-semibold">微信号：</strong>
                    <code className="ml-2 px-2 py-1 bg-paper-2 rounded text-sm font-mono">
                      {wechatId}
                    </code>
                  </>
                ) : (
                  <span className="text-ink-2">
                    报名时向老师索取微信号，或通过下方邮件联系。
                  </span>
                )}
              </p>
              {contactEmail && (
                <p className="text-sm text-ink-2">
                  <strong className="text-ink font-semibold">邮件：</strong>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="ml-2 text-accent hover:text-accent-hover underline"
                  >
                    {contactEmail}
                  </a>
                </p>
              )}
              <div className="mt-4 pt-4 border-t border-line">
                <p className="text-sm text-ink-2">
                  <strong className="text-ink font-semibold">付款方式：</strong>
                  PayNow / 微信转账
                </p>
              </div>
            </div>
            <div className="bg-paper-2 border border-line rounded-xl p-5">
              <h3 className="font-serif font-semibold text-base mb-2 text-ink">免费试学一周</h3>
              <p className="text-sm text-ink-2">
                家长可先让孩子免费试学一周（Week 0 试学周），体验作业 app。点击页面顶部「登录」，咨询时向老师索取试学账号。订阅后解锁全部当前级别周数。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-ink-2 mb-4 max-w-3xl">
            狮城入学（SG School Entry）与新加坡教育部（MOE）、新加坡考试与评鉴局（SEAB）、剑桥大学英语考评部（Cambridge English）均无隶属、授权或官方合作关系。本站不使用新加坡狮头国家标志，也不使用上述机构的标识。页面内容仅为路径说明，不构成录取、派位、签证或入境方面的承诺或法律意见。入学资格、考期、规则一律以各机构官网为准。
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <span>狮城入学 · SG School Entry</span>
            <a
              href="https://www.moe.gov.sg/international-students/aeis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              MOE AEIS
            </a>
            <a
              href="https://www.seab.gov.sg/aeis/about-aeis/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              SEAB
            </a>
            <a
              href="https://www.assessment.sg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              assessment.sg
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
