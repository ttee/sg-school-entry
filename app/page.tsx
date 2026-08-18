"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const payNowNumber = "94594601";
  
  const [showCurriculumMap, setShowCurriculumMap] = useState(false);
  
  const [formData, setFormData] = useState({
    parentWechat: "",
    childBirthYear: "",
    stage: "",
    intent: "",
  });
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentWechat: formData.parentWechat,
          childBirthYear: parseInt(formData.childBirthYear),
          stage: formData.stage,
          intent: formData.intent,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: data.message || "提交成功！",
        });
        setFormData({
          parentWechat: "",
          childBirthYear: "",
          stage: "",
          intent: "",
        });
      } else {
        setFormStatus({
          type: "error",
          message: data.error || "提交失败，请稍后重试",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "提交失败，请检查网络连接",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Link href="/guide" className="text-ink-2 hover:text-ink transition-colors font-medium">
              升学向导
            </Link>
            <Link href="/assess" className="text-ink-2 hover:text-ink transition-colors font-medium">
              入学摸底
            </Link>
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
              小学先 CEQ 英语门槛再考数学，中学考英语+数学。录取后续订英语授课适应。
            </p>
            <p className="text-base text-ink-2 mb-6 max-w-2xl">
              每周作业 app + 家长微信跟进。家长订阅，孩子登录做题。
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Link
                href="/guide"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors text-base"
              >
                升学向导
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-ink border border-accent font-semibold rounded-full hover:bg-accent/10 transition-colors text-base"
              >
                微信咨询
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 mb-4 text-sm">
              <Link
                href="/assess"
                className="text-ink-2 hover:text-ink underline"
              >
                入学摸底
              </Link>
              <Link
                href="/learn"
                className="text-ink-2 hover:text-ink underline"
              >
                免费试学
              </Link>
            </div>
            <p className="text-sm text-muted max-w-2xl">
              非 MOE、SEAB、Cambridge 官方机构
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-paper-2">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-6">
              已开课程
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <h3 className="font-serif text-xl font-semibold mb-2">A2 Key for Schools</h3>
                <p className="text-sm text-ink-2 mb-2">12 周 · P2–P4 CEQ 门槛</p>
                <p className="text-xs text-muted">试学周免费</p>
              </article>

              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <h3 className="font-serif text-xl font-semibold mb-2">B1 Preliminary for Schools</h3>
                <p className="text-sm text-ink-2 mb-2">12 周 · P5 CEQ 门槛</p>
                <p className="text-xs text-muted">试学周免费</p>
              </article>

              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <h3 className="font-serif text-xl font-semibold mb-2">AEIS 数学</h3>
                <p className="text-sm text-ink-2 mb-2">试学周 + 第 1–29 周 · P2–P4 AEIS 数学</p>
                <p className="text-xs text-muted">试学周免费</p>
              </article>
            </div>
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
                <p className="text-sm text-ink-2 mb-4">
                  中学英语有试学周 + 第 1–11 周。中学数学有试学周 + 第 1–83 周。申请 Sec 1 用前一级 P6；申请 Sec 2 用前一级 Sec 1；申请 Sec 3 用前一级 Sec 2。卷型：英语是写作 + 理解/语言运用；数学是选择题 + 写算式。
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

            <div className="mt-6 bg-paper-2 border border-line rounded-xl p-5">
              <h3 className="font-serif font-semibold text-base mb-2 text-ink">AEIS 官方申请</h3>
              <p className="text-sm text-ink-2 mb-2">
                <a 
                  href="https://www.moe.gov.sg/international-students/aeis/apply" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover underline"
                >
                  教育部 AEIS 申请页面
                </a>
              </p>
              <p className="text-sm text-ink-2">
                2026 年申请窗口已结束。下一轮日期与考场以官网为准。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-paper-2" id="ceq-course">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              会员与课程
            </h2>
            <p className="text-ink-2 mb-6 max-w-2xl">
              家长订阅，孩子登录。每周作业 app + 家长微信跟进。先走 CEQ 英语门槛，再进 AEIS 数学与英语赛道。录取后可续订英语授课适应（不作为入学考试售卖）。
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-8">
              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-semibold">月度会员</h3>
                  <div className="font-serif text-2xl font-semibold text-accent">S$320</div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">按月订阅</p>
                <p className="text-ink-2 mb-4 text-sm">
                  作业 app 解锁已上线周数：A2 / B1 / SEC 各试学周 + 第 1–11 周，MATH 试学周 + 第 1–29 周，SMATH 试学周 + 第 1–83 周。家长微信进度通报。可随时取消。
                </p>
                <ul className="space-y-0 border-t border-line mb-5">
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    包含 CEQ 备考四项技能：阅读、写作、听读准备、口语提示
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    选择题自动批改，写作 AI 简体点评（Kaizen 一个改善焦点）
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    家长微信进度通报，可随时取消
                  </li>
                  <li className="py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    试学一周免费
                  </li>
                </ul>
                <p className="text-xs text-muted mb-4">
                  如需老师带练，微信咨询后再约（有教案再开 Zoom）。
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                >
                  咨询月度订阅
                </Link>
              </article>
              <article className="bg-card border border-line rounded-2xl p-6 shadow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-semibold">A2 Key for Schools</h3>
                  <div className="font-serif text-2xl font-semibold text-accent">S$2,480</div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-3">适合 P2–P4 CEQ 门槛</p>
                <p className="text-ink-2 mb-4 text-sm">
                  该级别作业 app 12 周路径（试学周 + 第 1–11 周）。
                </p>
                <ul className="space-y-0 border-t border-line mb-5">
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    针对 Cambridge A2 Key for Schools：阅读、写作、听读、口语提示
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    作业 app A2 试学周 + 第 1–11 周（共 12 周）
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    家长微信进度通报
                  </li>
                  <li className="py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    对准申请前 12 个月内要交的 CEQ 成绩单格式来练
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
                  该级别作业 app 12 周路径（试学周 + 第 1–11 周）。
                </p>
                <ul className="space-y-0 border-t border-line mb-5">
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    针对 Cambridge B1 Preliminary for Schools：阅读、写作、听读、口语提示
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    作业 app B1 试学周 + 第 1–11 周（共 12 周）
                  </li>
                  <li className="border-b border-line py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    家长微信进度通报
                  </li>
                  <li className="py-3 pl-5 relative before:absolute before:left-0 before:top-5 before:w-2 before:h-2 before:rounded-full before:bg-accent text-sm text-ink-2">
                    对准申请前 12 个月内要交的 CEQ 成绩单格式来练
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
              <strong className="text-ink-2">付款方式：</strong>PayNow 或微信转账，报名以咨询确认为准。月度会员可随时取消，12 周预付包不退费。
              <br />
              <strong className="text-ink-2 mt-2 inline-block">考试单独报名：</strong>CEQ 考试本身在剑桥授权考点报名，不含在课程学费内。
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-paper" id="pedagogy">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">
              针对性纠错，防止英语化石化
            </h2>
            <p className="text-ink-2 mb-6 max-w-3xl">
              每周只打<strong>一个</strong>中国学生的高频错误。微课对照中英句子，作业 + AI 口语/写作盯住同一点，直到改掉。
            </p>

            <div className="bg-card border border-line rounded-2xl p-6 mb-6 shadow">
              <h3 className="font-serif font-semibold text-lg mb-4 text-ink">为什么每周只改一个错？</h3>
              <div className="grid md:grid-cols-2 gap-5 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold text-ink flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>母语迁移</span>
                  </p>
                  <p className="text-ink-2 ml-6">
                    中文没有冠词、动词不变形、靠时间词表示过去。孩子说 "I go to school by the bus" 或 "she wake up" 不是粗心，是中文习惯在干扰。
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-ink flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>防化石化</span>
                  </p>
                  <p className="text-ink-2 ml-6">
                    错误说多了会固化。一次改太多点，孩子顾不过来，还是会重复旧错。我们让 AI 盯住<strong>一个焦点</strong>，直到孩子真的改掉。
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-ink flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>聚焦形式</span>
                  </p>
                  <p className="text-ink-2 ml-6">
                    阅读、写作、口语任务还是真实话题（学校、家庭、环境），但本周的微课、语法题、AI 批改都指向<strong>同一个语法点</strong>。
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-ink flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    <span>注意 + 输出</span>
                  </p>
                  <p className="text-ink-2 ml-6">
                    微课先让孩子看到错的句子和对的句子对比，然后跟读一句。写作和口语时，AI 会再次提醒这个焦点，等孩子真正用对了，再换下一个。
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <button
                onClick={() => setShowCurriculumMap(!showCurriculumMap)}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
              >
                <span>{showCurriculumMap ? '收起' : '展开'}纠错地图</span>
                <svg
                  className={`w-5 h-5 transition-transform ${showCurriculumMap ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {showCurriculumMap && (
              <>
                <h3 className="font-serif font-semibold text-xl mb-4 text-ink">已上线纠错地图（A2 共 11 周，B1 共 11 周）</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-line rounded-xl overflow-hidden text-sm">
                    <thead>
                      <tr className="bg-paper-2 border-b border-line">
                        <th className="px-4 py-3 text-left font-semibold text-ink">级别</th>
                        <th className="px-4 py-3 text-left font-semibold text-ink">周</th>
                        <th className="px-4 py-3 text-left font-semibold text-ink">主题</th>
                        <th className="px-4 py-3 text-left font-semibold text-ink">本周只改这一个错</th>
                        <th className="px-4 py-3 text-left font-semibold text-ink">中文干扰举例</th>
                      </tr>
                    </thead>
                    <tbody className="bg-card">
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">0</td>
                        <td className="px-4 py-3 text-ink-2">试学周</td>
                        <td className="px-4 py-3 text-ink">冠词 a/an/the 和零冠词</td>
                        <td className="px-4 py-3 text-ink-2">I go to school by <span className="line-through">the</span> bus / I am <span className="text-warn-ink">✗</span> student</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">1</td>
                        <td className="px-4 py-3 text-ink-2">Daily Routines</td>
                        <td className="px-4 py-3 text-ink">第三人称单数 -s；at/in/on 时间介词</td>
                        <td className="px-4 py-3 text-ink-2">she wake<span className="text-warn-ink">✗</span> up / in Monday</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">2</td>
                        <td className="px-4 py-3 text-ink-2">School Life</td>
                        <td className="px-4 py-3 text-ink">一般现在时 vs 现在进行时；like + -ing</td>
                        <td className="px-4 py-3 text-ink-2">I am going to school every day</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">3</td>
                        <td className="px-4 py-3 text-ink-2">Family</td>
                        <td className="px-4 py-3 text-ink">一般过去时；used to</td>
                        <td className="px-4 py-3 text-ink-2">yesterday I go / I use to live</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">4</td>
                        <td className="px-4 py-3 text-ink-2">Shopping & Food</td>
                        <td className="px-4 py-3 text-ink">可数/不可数名词；some/any、much/many</td>
                        <td className="px-4 py-3 text-ink-2">two breads / how many rice? / I need some waters</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">5</td>
                        <td className="px-4 py-3 text-ink-2">Sports Day</td>
                        <td className="px-4 py-3 text-ink">比较级和最高级</td>
                        <td className="px-4 py-3 text-ink-2">more bigger / more cheap / he is tall than me</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">6</td>
                        <td className="px-4 py-3 text-ink-2">Around Singapore</td>
                        <td className="px-4 py-3 text-ink">时间介词 at/in/on</td>
                        <td className="px-4 py-3 text-ink-2">in Monday / on the morning / at 2026</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">7</td>
                        <td className="px-4 py-3 text-ink-2">Weekend Plans</td>
                        <td className="px-4 py-3 text-ink">be going to 将来时</td>
                        <td className="px-4 py-3 text-ink-2">I going to / Tomorrow I go library / I go to swim</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">8</td>
                        <td className="px-4 py-3 text-ink-2">School Rules</td>
                        <td className="px-4 py-3 text-ink">can / must 情态动词</td>
                        <td className="px-4 py-3 text-ink-2">I can to swim / I must to go / Can I to borrow</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">9</td>
                        <td className="px-4 py-3 text-ink-2">Weekend Hobbies</td>
                        <td className="px-4 py-3 text-ink">like / enjoy + -ing</td>
                        <td className="px-4 py-3 text-ink-2">I like swim / I enjoy to read / I like to swimming</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">10</td>
                        <td className="px-4 py-3 text-ink-2">Everyday Routines</td>
                        <td className="px-4 py-3 text-ink">频率副词位置（实义动词前、be 后）</td>
                        <td className="px-4 py-3 text-ink-2">I go always / I am always go / I never am late</td>
                      </tr>
                      <tr className="border-b border-line">
                        <td className="px-4 py-3 font-semibold text-accent">A2</td>
                        <td className="px-4 py-3 text-ink-2">11</td>
                        <td className="px-4 py-3 text-ink-2">Where Things Are</td>
                        <td className="px-4 py-3 text-ink">地点介词 in / on / at</td>
                        <td className="px-4 py-3 text-ink-2">in the bus / on the classroom / at the table (for in) / in the wall</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">0</td>
                        <td className="px-4 py-3 text-ink-2">试学周</td>
                        <td className="px-4 py-3 text-ink">现在完成 vs 过去时</td>
                        <td className="px-4 py-3 text-ink-2">I have went yesterday / I am here for 6 months</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">1</td>
                        <td className="px-4 py-3 text-ink-2">Travel</td>
                        <td className="px-4 py-3 text-ink">Have you ever...? 比较级 more/-er</td>
                        <td className="px-4 py-3 text-ink-2">Have you go...? / It was impressive than...</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">2</td>
                        <td className="px-4 py-3 text-ink-2">Technology</td>
                        <td className="px-4 py-3 text-ink">If + 过去, would... / suggest + -ing</td>
                        <td className="px-4 py-3 text-ink-2">If school change... / suggest to use</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">3</td>
                        <td className="px-4 py-3 text-ink-2">Environment</td>
                        <td className="px-4 py-3 text-ink">被动语态；should/ought to</td>
                        <td className="px-4 py-3 text-ink-2">We recycle the bottles（该用被动）</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">4</td>
                        <td className="px-4 py-3 text-ink-2">Communication</td>
                        <td className="px-4 py-3 text-ink">间接引语 (Reported speech)</td>
                        <td className="px-4 py-3 text-ink-2">He said he will come / She said I am busy</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">5</td>
                        <td className="px-4 py-3 text-ink-2">Describing People</td>
                        <td className="px-4 py-3 text-ink">定语从句 who/which/that</td>
                        <td className="px-4 py-3 text-ink-2">The girl sits next to me / the book who I read</td>
                      </tr>
                      <tr className="bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">6</td>
                        <td className="px-4 py-3 text-ink-2">When We Were Younger</td>
                        <td className="px-4 py-3 text-ink">used to 表过去习惯</td>
                        <td className="px-4 py-3 text-ink-2">I use to walk / I didn't used to / I am used to swim</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">7</td>
                        <td className="px-4 py-3 text-ink-2">Rain or Shine</td>
                        <td className="px-4 py-3 text-ink">although / despite 对比转折</td>
                        <td className="px-4 py-3 text-ink-2">Although...but / Despite of / Despite + 句子</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">8</td>
                        <td className="px-4 py-3 text-ink-2">Such a Busy Week</td>
                        <td className="px-4 py-3 text-ink">so / such 加强描述</td>
                        <td className="px-4 py-3 text-ink-2">so a beautiful park / such beautiful / so + 名词</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">9</td>
                        <td className="px-4 py-3 text-ink-2">Too Tired to Run</td>
                        <td className="px-4 py-3 text-ink">too...to / enough</td>
                        <td className="px-4 py-3 text-ink-2">too much tired / enough rich / I am not enough tall</td>
                      </tr>
                      <tr className="border-b border-line bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">10</td>
                        <td className="px-4 py-3 text-ink-2">Checking What We Heard</td>
                        <td className="px-4 py-3 text-ink">反意疑问句 question tags</td>
                        <td className="px-4 py-3 text-ink-2">You like it, is it? / She's tall, is she? / You don't like English, isn't it?</td>
                      </tr>
                      <tr className="bg-paper-2">
                        <td className="px-4 py-3 font-semibold text-accent">B1</td>
                        <td className="px-4 py-3 text-ink-2">11</td>
                        <td className="px-4 py-3 text-ink-2">What Had Already Happened</td>
                        <td className="px-4 py-3 text-ink">过去完成时 past perfect</td>
                        <td className="px-4 py-3 text-ink-2">When I arrived, the bus left / I have finished before she came</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}

            <div className="mt-6 bg-paper-2 border border-line rounded-xl p-5">
              <p className="text-sm text-ink-2">
                所有情境、人名、地点均为虚构。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-paper" id="contact">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-serif font-semibold text-2xl md:text-3xl mb-3">报名咨询</h2>
            <p className="text-ink-2 mb-6">
              提交后老师会在 1–2 个工作日内添加您的微信。咨询月度会员、12 周预付包或试学账号。
            </p>

            <form onSubmit={handleSubmit} className="bg-card border border-line rounded-2xl p-6 shadow mb-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="parentWechat" className="block text-sm font-semibold text-ink mb-1">
                    家长微信号 <span className="text-accent">*</span>
                  </label>
                  <input
                    id="parentWechat"
                    type="text"
                    required
                    value={formData.parentWechat}
                    onChange={(e) => setFormData({ ...formData, parentWechat: e.target.value })}
                    className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="您的微信号"
                  />
                </div>

                <div>
                  <label htmlFor="childBirthYear" className="block text-sm font-semibold text-ink mb-1">
                    孩子出生年份 <span className="text-accent">*</span>
                  </label>
                  <input
                    id="childBirthYear"
                    type="number"
                    required
                    min="2000"
                    max={new Date().getFullYear()}
                    value={formData.childBirthYear}
                    onChange={(e) => setFormData({ ...formData, childBirthYear: e.target.value })}
                    className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="例如：2015"
                  />
                </div>

                <div>
                  <label htmlFor="stage" className="block text-sm font-semibold text-ink mb-1">
                    拟申请学段 <span className="text-accent">*</span>
                  </label>
                  <select
                    id="stage"
                    required
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">请选择</option>
                    <optgroup label="小学 Primary">
                      <option value="P2">P2</option>
                      <option value="P3">P3</option>
                      <option value="P4">P4</option>
                      <option value="P5">P5</option>
                    </optgroup>
                    <optgroup label="中学 Secondary">
                      <option value="Sec1">Sec 1</option>
                      <option value="Sec2">Sec 2</option>
                      <option value="Sec3">Sec 3</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="intent" className="block text-sm font-semibold text-ink mb-1">
                    报名意向 <span className="text-accent">*</span>
                  </label>
                  <select
                    id="intent"
                    required
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">请选择</option>
                    <option value="monthly">月度会员（S$320/月）</option>
                    <option value="a2-12week">A2 Key 12 周预付包（S$2,480）</option>
                    <option value="b1-12week">B1 Preliminary 12 周预付包（S$2,880）</option>
                    <option value="trial">免费试学账号</option>
                  </select>
                </div>

                {formStatus.type && (
                  <div
                    className={`text-sm rounded-lg px-4 py-3 ${
                      formStatus.type === "success"
                        ? "bg-accent/10 text-accent border border-accent/20"
                        : "bg-warn-bg text-warn-ink border border-warn-ink/20"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-ink font-semibold py-3 rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "提交中..." : "提交咨询"}
                </button>

                <p className="text-xs text-muted text-center">
                  提交后老师会添加您的微信 · 不会向您推送任何营销信息
                </p>
              </div>
            </form>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-paper-2 border border-line rounded-xl p-5">
                <h3 className="font-serif font-semibold text-base mb-2 text-ink">付款方式</h3>
                <p className="text-sm text-ink-2 mb-1">
                  PayNow：{payNowNumber}（手机号）
                </p>
                <p className="text-sm text-ink-2">
                  微信转账：老师添加后告知
                </p>
              </div>

              <div className="bg-paper-2 border border-line rounded-xl p-5">
                <h3 className="font-serif font-semibold text-base mb-2 text-ink">免费试学</h3>
                <p className="text-sm text-ink-2">
                  提交表单时选择「免费试学账号」，老师会为您开通试学周权限。
                </p>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
              <p className="text-xs text-ink-2">
                <strong className="text-ink">隐私说明：</strong>
                我们仅收集您的微信号用于咨询回复，不会公开或出售给第三方。您可随时要求删除。详见
                <Link href="/privacy" className="text-accent hover:underline ml-1">隐私政策</Link>。
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
            <Link href="/privacy" className="hover:text-ink transition-colors">
              隐私 / Privacy
            </Link>
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
              Cambridge 考点
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
