"use client";

import Link from "next/link";
import { useState } from "react";
import OfficialClip from "@/components/OfficialClip";

// 简化版英语检测题（从 assess 页面精简而来）
const englishItems = [
  {
    id: 1,
    question: "I go to school ___ bus every morning.",
    options: ["by", "by the", "on", "with"],
    correct: 0,
  },
  {
    id: 2,
    question: "Ms Tan ___ us English every Monday.",
    options: ["teach", "teachs", "teaches", "teaching"],
    correct: 2,
  },
  {
    id: 3,
    question: "Yesterday I ___ my water bottle in the classroom.",
    options: ["lose", "lost", "have lost", "am losing"],
    correct: 1,
  },
  {
    id: 4,
    question: "I enjoy ___ in the library after lessons.",
    options: ["read", "to read", "reading", "reads"],
    correct: 2,
  },
];

// 原创 P2 数学题（对应 MOE P2 大纲：钱币、乘除法、简单应用题）
const mathItems = [
  {
    id: 1,
    question: "Ali has three $2 notes. How much money does he have?",
    options: ["$5", "$6", "$7", "$8"],
    correct: 1,
    strand: "钱币 Money",
  },
  {
    id: 2,
    question: "There are 4 boxes. Each box has 5 oranges. How many oranges are there in total?",
    options: ["9", "15", "20", "25"],
    correct: 2,
    strand: "乘法 Multiplication",
  },
  {
    id: 3,
    question: "Mei has $10. She buys a book for $3. How much money does she have left?",
    options: ["$6", "$7", "$8", "$13"],
    correct: 1,
    strand: "减法应用 Subtraction word problem",
  },
  {
    id: 4,
    question: "12 ÷ 3 = ?",
    options: ["3", "4", "5", "6"],
    correct: 1,
    strand: "除法 Division",
  },
  {
    id: 5,
    question: "A pencil costs 50¢. How many pencils can Priya buy with $2?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    strand: "钱币除法 Money division",
  },
  {
    id: 6,
    question: "Which number is missing? 5, 10, ___, 20, 25",
    options: ["12", "13", "15", "18"],
    correct: 2,
    strand: "数字规律 Number patterns",
  },
];

type Step = "info" | "english" | "math" | "result";

export default function GuidePage() {
  const [step, setStep] = useState<Step>("info");
  
  // Step 1: 基本信息
  const [birthYear, setBirthYear] = useState("");
  const [intendedLevel, setIntendedLevel] = useState("");
  
  // Step 2: 英语检测
  const [englishAnswers, setEnglishAnswers] = useState<(number | null)[]>(
    new Array(englishItems.length).fill(null)
  );
  
  // Step 3: 数学检测
  const [mathAnswers, setMathAnswers] = useState<(number | null)[]>(
    new Array(mathItems.length).fill(null)
  );

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthYear || !intendedLevel) {
      alert("请填写完整信息");
      return;
    }
    setStep("english");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnglishSubmit = () => {
    if (englishAnswers.some(a => a === null)) {
      alert("请完成所有英语题目");
      return;
    }
    setStep("math");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMathSubmit = () => {
    if (mathAnswers.some(a => a === null)) {
      alert("请完成所有数学题目");
      return;
    }
    setStep("result");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setBirthYear("");
    setIntendedLevel("");
    setEnglishAnswers(new Array(englishItems.length).fill(null));
    setMathAnswers(new Array(mathItems.length).fill(null));
    setStep("info");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 计算推荐路径
  const getRecommendation = () => {
    const englishCorrect = englishAnswers.filter(
      (answer, idx) => answer === englishItems[idx].correct
    ).length;
    const mathCorrect = mathAnswers.filter(
      (answer, idx) => answer === mathItems[idx].correct
    ).length;

    const englishRate = englishCorrect / englishItems.length;
    const mathRate = mathCorrect / mathItems.length;
    
    const isPrimary = intendedLevel.startsWith("P");
    const isUpperPrimary = intendedLevel === "P5";
    const isSecondary = intendedLevel.startsWith("Sec");

    // 找出英语改善焦点
    let englishFocus = "冠词与时态准确度";
    if (englishAnswers[0] !== englishItems[0].correct) {
      englishFocus = "交通方式零冠词（by bus 不加 the）";
    } else if (englishAnswers[1] !== englishItems[1].correct) {
      englishFocus = "第三人称单数动词加 -s";
    } else if (englishAnswers[2] !== englishItems[2].correct) {
      englishFocus = "过去时态的准确使用";
    }

    let recommendation = {
      pathway: "",
      englishCourse: "",
      mathCourse: "",
      notes: [] as string[],
      kaizenFocus: englishFocus,
    };

    if (isPrimary) {
      // 小学路径：CEQ + AEIS 数学
      recommendation.pathway = "小学 AEIS 路径（P2–P5）";
      
      if (englishRate <= 0.5) {
        recommendation.englishCourse = "建议：A2 Key for Schools 试学周 + 第 1–11 周（直播课）";
        recommendation.notes.push("英语基础需要加强，建议从 A2 试学周开始");
      } else if (isUpperPrimary && englishRate >= 0.75) {
        recommendation.englishCourse = "建议：B1 Preliminary for Schools 试学周 + 第 1–11 周（直播课）";
        recommendation.notes.push("P5 申请一般对应 B1 水平（常见对应，以官网年龄核对为准）");
      } else {
        recommendation.englishCourse = "建议：A2 Key for Schools 试学周 + 第 1–11 周（直播课）";
        recommendation.notes.push("P2–P4 申请一般对应 A2 Key for Schools（常见对应，以官网年龄核对为准）");
      }
      
      recommendation.mathCourse = "建议：AEIS 数学 试学周 + 第 1–5 周（P2 知识点直播课）";
      recommendation.notes.push("诚实告知：当前数学周数为 P2 内容（前置级别练习）");
      
      if (intendedLevel === "P4" || intendedLevel === "P5") {
        recommendation.notes.push(`申请 ${intendedLevel} 需要更高前置大纲知识，目前尚未上线相应周数，请微信咨询`);
      }
      
    } else if (isSecondary) {
      // 中学路径：AEIS 英语 + 数学（两科都考）
      recommendation.pathway = "中学 AEIS 路径（Sec 1–3）";
      recommendation.englishCourse = "需要：AEIS 中学英语（含写作、理解、语法）";
      recommendation.mathCourse = "需要：AEIS 中学数学";
      recommendation.notes.push("诚实告知：目前尚未上线中学 AEIS 英语或数学周数");
      recommendation.notes.push("请微信咨询中学路径安排");
      recommendation.notes.push("中学不要求 CEQ，但需在新加坡参加 AEIS 英语 + 数学两科考试");
    }

    return recommendation;
  };

  const recommendation = step === "result" ? getRecommendation() : null;

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

      <main id="main" className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
            家长升学向导
          </p>
          <h1 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-3">
            新加坡政府学校入学向导
          </h1>
          <p className="text-ink-2 mb-2">
            帮助中国家长理解 AEIS / S-AEIS / CEQ 路径，找到适合孩子的起点。
          </p>
          <p className="text-sm text-muted">
            约 10–15 分钟完成 · 包含简短英语与数学检测 · 结果即时显示
          </p>
        </div>

        {/* 进度指示 */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <div className={`flex items-center gap-2 ${step === "info" ? "text-accent font-semibold" : step === "english" || step === "math" || step === "result" ? "text-ink-2" : "text-muted"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "info" ? "bg-accent text-accent-ink" : "bg-paper-2 border border-line"}`}>1</span>
            <span className="hidden sm:inline">基本信息</span>
          </div>
          <span className="text-muted">→</span>
          <div className={`flex items-center gap-2 ${step === "english" ? "text-accent font-semibold" : step === "math" || step === "result" ? "text-ink-2" : "text-muted"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "english" ? "bg-accent text-accent-ink" : step === "math" || step === "result" ? "bg-ink-2 text-paper" : "bg-paper-2 border border-line"}`}>2</span>
            <span className="hidden sm:inline">英语</span>
          </div>
          <span className="text-muted">→</span>
          <div className={`flex items-center gap-2 ${step === "math" ? "text-accent font-semibold" : step === "result" ? "text-ink-2" : "text-muted"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "math" ? "bg-accent text-accent-ink" : step === "result" ? "bg-ink-2 text-paper" : "bg-paper-2 border border-line"}`}>3</span>
            <span className="hidden sm:inline">数学</span>
          </div>
          <span className="text-muted">→</span>
          <div className={`flex items-center gap-2 ${step === "result" ? "text-accent font-semibold" : "text-muted"}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === "result" ? "bg-accent text-accent-ink" : "bg-paper-2 border border-line"}`}>4</span>
            <span className="hidden sm:inline">建议</span>
          </div>
        </div>

        {/* Step 1: 基本信息 */}
        {step === "info" && (
          <form onSubmit={handleInfoSubmit} className="space-y-6">
            <div className="bg-card border border-line rounded-2xl p-6 shadow">
              <h2 className="font-serif font-semibold text-xl text-ink mb-4">
                第一步：孩子基本信息
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="birthYear" className="block text-sm font-semibold text-ink mb-2">
                    孩子出生年份 <span className="text-accent">*</span>
                  </label>
                  <input
                    id="birthYear"
                    type="number"
                    required
                    min="2010"
                    max={new Date().getFullYear()}
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                    placeholder="例如：2016"
                  />
                  <p className="text-xs text-muted mt-1">
                    MOE 以出生年份判断入学资格，
                    <a 
                      href="https://www.moe.gov.sg/international-students/aeis/eligibility-criteria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline ml-1"
                    >
                      请以官网年龄核对为准 →
                    </a>
                  </p>
                </div>

                <div>
                  <label htmlFor="intendedLevel" className="block text-sm font-semibold text-ink mb-2">
                    拟申请年级 <span className="text-accent">*</span>
                  </label>
                  <select
                    id="intendedLevel"
                    required
                    value={intendedLevel}
                    onChange={(e) => setIntendedLevel(e.target.value)}
                    className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                  >
                    <option value="">请选择</option>
                    <optgroup label="小学 Primary（CEQ + AEIS 数学）">
                      <option value="P2">P2（小二）</option>
                      <option value="P3">P3（小三）</option>
                      <option value="P4">P4（小四）</option>
                      <option value="P5">P5（小五）</option>
                    </optgroup>
                    <optgroup label="中学 Secondary（AEIS 英语 + 数学）">
                      <option value="Sec1">Sec 1（中一）</option>
                      <option value="Sec2">Sec 2（中二）</option>
                      <option value="Sec3">Sec 3（中三）</option>
                    </optgroup>
                  </select>
                  <p className="text-xs text-muted mt-1">
                    小学与中学考试科目组合不同，请根据孩子年龄与MOE年龄标准选择
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                >
                  下一步：英语检测 →
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Step 2: 英语检测 */}
        {step === "english" && (
          <div className="space-y-6">
            <div className="bg-card border border-line rounded-2xl p-6 shadow">
              <h2 className="font-serif font-semibold text-xl text-ink mb-2">
                第二步：简短英语检测
              </h2>
              <p className="text-sm text-ink-2 mb-4">
                共 {englishItems.length} 题，约 3 分钟。从现有摸底题精简而来。
              </p>

              <div className="space-y-5">
                {englishItems.map((item, itemIndex) => (
                  <div key={item.id} className="bg-paper border border-line rounded-xl p-4">
                    <p className="text-sm font-semibold text-accent mb-2">
                      英语题 {item.id} / {englishItems.length}
                    </p>
                    <p className="text-ink mb-3">{item.question}</p>
                    <div className="space-y-2">
                      {item.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            englishAnswers[itemIndex] === optionIndex
                              ? "border-accent bg-accent/5"
                              : "border-line hover:border-accent/50 hover:bg-accent/5"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`english-${itemIndex}`}
                            checked={englishAnswers[itemIndex] === optionIndex}
                            onChange={() => {
                              const newAnswers = [...englishAnswers];
                              newAnswers[itemIndex] = optionIndex;
                              setEnglishAnswers(newAnswers);
                            }}
                            className="mt-0.5 accent-accent"
                          />
                          <span className="text-ink-2">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep("info")}
                  className="px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
                >
                  ← 返回修改
                </button>
                <button
                  onClick={handleEnglishSubmit}
                  className="px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                >
                  下一步：数学检测 →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: 数学检测 */}
        {step === "math" && (
          <div className="space-y-6">
            <div className="bg-card border border-line rounded-2xl p-6 shadow">
              <h2 className="font-serif font-semibold text-xl text-ink mb-2">
                第三步：P2 水平数学检测
              </h2>
              <p className="text-sm text-ink-2 mb-1">
                共 {mathItems.length} 题，约 5 分钟。原创题目，对应 MOE P2 大纲（钱币、乘除法、简单应用题）。
              </p>
              <p className="text-xs text-muted mb-4">
                所有题目均为本工作室原创，不使用过往试卷
              </p>

              <div className="space-y-5">
                {mathItems.map((item, itemIndex) => (
                  <div key={item.id} className="bg-paper border border-line rounded-xl p-4">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-semibold text-accent">
                        数学题 {item.id} / {mathItems.length}
                      </p>
                      <span className="text-xs text-muted">{item.strand}</span>
                    </div>
                    <p className="text-ink mb-3">{item.question}</p>
                    <div className="space-y-2">
                      {item.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            mathAnswers[itemIndex] === optionIndex
                              ? "border-accent bg-accent/5"
                              : "border-line hover:border-accent/50 hover:bg-accent/5"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`math-${itemIndex}`}
                            checked={mathAnswers[itemIndex] === optionIndex}
                            onChange={() => {
                              const newAnswers = [...mathAnswers];
                              newAnswers[itemIndex] = optionIndex;
                              setMathAnswers(newAnswers);
                            }}
                            className="mt-0.5 accent-accent"
                          />
                          <span className="text-ink-2">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep("english")}
                  className="px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
                >
                  ← 返回英语
                </button>
                <button
                  onClick={handleMathSubmit}
                  className="px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                >
                  查看建议 →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: 结果与建议 */}
        {step === "result" && recommendation && (
          <div className="space-y-6">
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <h2 className="font-serif font-semibold text-2xl text-ink mb-3">
                {recommendation.pathway}
              </h2>
              
              <div className="space-y-4 mb-5">
                <div className="bg-paper border border-line rounded-xl p-4">
                  <p className="text-sm font-semibold text-ink mb-1">📚 英语准备</p>
                  <p className="text-ink-2 text-sm">{recommendation.englishCourse}</p>
                </div>

                <div className="bg-paper border border-line rounded-xl p-4">
                  <p className="text-sm font-semibold text-ink mb-1">🔢 数学准备</p>
                  <p className="text-ink-2 text-sm">{recommendation.mathCourse}</p>
                </div>

                {recommendation.notes.length > 0 && (
                  <div className="bg-paper border border-line rounded-xl p-4">
                    <p className="text-sm font-semibold text-ink mb-2">⚠️ 重要说明</p>
                    <ul className="space-y-1 text-sm text-ink-2">
                      {recommendation.notes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5">•</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-paper border border-line rounded-xl p-4">
                  <p className="text-sm font-semibold text-ink mb-1">✨ 本次改善焦点</p>
                  <p className="text-ink-2 text-sm">
                    优先练习：<strong className="text-ink">{recommendation.kaizenFocus}</strong>
                  </p>
                  <p className="text-xs text-muted mt-2">
                    每周只改一个错，改到真正改掉为止
                  </p>
                </div>
              </div>
            </div>

            {/* 官方信息 */}
            <div className="bg-card border border-line rounded-2xl p-6 shadow">
              <h3 className="font-serif font-semibold text-lg text-ink mb-3">
                📋 官方报名与考试信息
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-ink mb-1">年龄与资格核对（官方）</p>
                  <p className="text-ink-2 mb-1">
                    请务必核对 MOE 官方年龄与 CEQ 资格标准：
                  </p>
                  <a
                    href="https://www.moe.gov.sg/international-students/aeis/eligibility-criteria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-1"
                  >
                    moe.gov.sg/international-students/aeis/eligibility-criteria →
                  </a>
                </div>

                <div className="border-t border-line pt-3">
                  <p className="font-semibold text-ink mb-1">AEIS 考试（官方）</p>
                  <p className="text-ink-2 mb-2">
                    AEIS 考试在新加坡进行，测试英语和/或数学（具体科目取决于申请小学还是中学）。
                  </p>
                  <div className="space-y-1 text-ink-2">
                    <p><strong className="text-ink">官网总览：</strong>
                      <a href="https://www.moe.gov.sg/international-students/aeis" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        moe.gov.sg/international-students/aeis →
                      </a>
                    </p>
                    <p><strong className="text-ink">报名申请：</strong>
                      <a href="https://www.moe.gov.sg/international-students/aeis/apply" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        moe.gov.sg/international-students/aeis/apply →
                      </a>
                    </p>
                    <p><strong className="text-ink">考试详情：</strong>
                      <a href="https://www.moe.gov.sg/international-students/aeis/test-details" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        moe.gov.sg/international-students/aeis/test-details →
                      </a>
                    </p>
                  </div>
                  
                  <div className="bg-paper-2 border border-line rounded-lg p-3 mt-3">
                    <p className="text-xs font-semibold text-ink mb-1">2026 年 AEIS 考试日期（官方已公布）</p>
                    <ul className="text-xs text-ink-2 space-y-0.5">
                      <li>• 2026 年 AEIS 申请已关闭</li>
                      <li>• Sec 1: 2026年9月1日（周二）</li>
                      <li>• Sec 2/3: 2026年9月2日（周三）</li>
                      <li>• Primary 2/3 及 4/5 数学: 2026年9月3日（周四）</li>
                      <li>• 录取后次年1月入学（视表现、空缺、居住区域而定）</li>
                    </ul>
                    <p className="text-xs text-muted mt-2">
                      具体日期以官网为准。费用请见申请页面（小学 $340，中学 $630，另加 GST，不退费——仅在官网确认后引用具体金额）。
                    </p>
                  </div>
                </div>

                <div className="border-t border-line pt-3">
                  <p className="font-semibold text-ink mb-1">S-AEIS 补充考试（官方）</p>
                  <p className="text-ink-2 mb-2">
                    S-AEIS 为同一学年内的补充入学考试，适用于 P2–P4 和 Sec 1–2（不包括 P5 和 Sec 3）。
                  </p>
                  <a
                    href="https://www.moe.gov.sg/international-students/s-aeis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline inline-flex items-center gap-1"
                  >
                    moe.gov.sg/international-students/s-aeis →
                  </a>
                  <p className="text-xs text-muted mt-2">
                    2027 年 S-AEIS 申请预计 2027 年 1 月初开放；考试预计 2027 年 2 月底至 3 月初举行（暂定）。
                    如获录取，同年 4/5 月入学。具体以官网为准。
                  </p>
                </div>

                {intendedLevel.startsWith("P") && (
                  <div className="border-t border-line pt-3">
                    <p className="font-semibold text-ink mb-1">CEQ 剑桥英语资格考试（小学专用，官方）</p>
                    <p className="text-ink-2 mb-2">
                      小学 AEIS 不另考英语，英语能力由 Cambridge English Qualifications (CEQ) 成绩证明。
                      须在提交 AEIS 申请前 12 个月内在剑桥授权考点考取。
                    </p>
                    <div className="space-y-1 text-ink-2">
                      <p><strong className="text-ink">查找考点（官方）：</strong>
                        <a href="https://www.cambridgeenglish.org/find-a-centre/find-an-exam-centre/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                          cambridgeenglish.org/find-a-centre →
                        </a>
                      </p>
                      <p className="text-xs text-muted mt-1">
                        任何国家的授权考点均可。提交成绩单 PDF（Statement of Results）即可，不必等纸质证书。
                        纸笔或机考均可，需选择适龄考卷。
                      </p>
                    </div>
                    <p className="text-xs text-warn-ink bg-warn-bg border border-warn-ink/20 rounded-lg p-2 mt-2">
                      ⚠️ 本站不编造中国考点名称或地址，请自行在官网查询
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 备选学校 */}
            <div className="bg-card border border-line rounded-2xl p-6 shadow">
              <h3 className="font-serif font-semibold text-lg text-ink mb-2">
                🏫 备选私立/国际学校（非官方、非合作）
              </h3>
              <p className="text-sm text-ink-2 mb-4">
                如果 AEIS 未能派位，可以了解以下私立学校作为备选。我们与这些学校无隶属或合作关系。
                学位与学生证（Student's Pass）由学校和 ICA 决定，不由本工作室办理。
              </p>

              <div className="space-y-4">
                <div className="bg-paper border border-line rounded-xl p-4">
                  <h4 className="font-semibold text-ink mb-1">三育中小学 San Yu Adventist School</h4>
                  <p className="text-sm text-ink-2 mb-2">
                    私立基督教学校，设小学与中学，课程通向 PSLE 与 GCE O-Level。
                  </p>
                  <div className="space-y-1 text-xs text-ink-2">
                    <p>
                      <strong className="text-ink">官网：</strong>
                      <a href="https://syas.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        syas.edu.sg →
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">申请流程：</strong>
                      <a href="https://syas.edu.sg/pages/new-application" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        syas.edu.sg/pages/new-application →
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">入学要求：</strong>
                      <a href="https://syas.edu.sg/pages/admission-prerequisites" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        syas.edu.sg/pages/admission-prerequisites →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-paper border border-line rounded-xl p-4">
                  <h4 className="font-semibold text-ink mb-1">DIMENSIONS International College</h4>
                  <p className="text-sm text-ink-2 mb-2">
                    私立教育机构 (PEI)，提供剑桥小学课程及其他私立课程，同时设有"政府学校入学预备课程（小学 P2–5 及中学 Sec 1–3）"。
                  </p>
                  <div className="space-y-1 text-xs text-ink-2">
                    <p>
                      <strong className="text-ink">官网：</strong>
                      <a href="https://dimensions.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        dimensions.edu.sg →
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">预备课程：</strong>
                      <a href="https://dimensions.edu.sg/academic-courses/preparatory-course-for-admission-to-government-schools-primary-2-5-and-secondary-1-3/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        Preparatory Course for Admission to Government Schools →
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">申请：</strong>
                      <a href="https://dimensions.edu.sg/apply-now/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        dimensions.edu.sg/apply-now →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-paper-2 border border-line rounded-lg p-3">
                  <p className="text-xs text-ink-2">
                    <strong className="text-ink">学生证（Student's Pass）：</strong>
                    国际学生需由学校向新加坡移民局 (ICA) 申请学生证。
                    <a href="https://www.ica.gov.sg/reside/STP/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                      ica.gov.sg/reside/STP →
                    </a>
                  </p>
                  <p className="text-xs text-muted mt-2">
                    学位与签证以学校和 ICA 为准。本站不编造学费、录取分数或"容易入学"等说法。
                  </p>
                </div>
              </div>
            </div>

            {/* 官方影片 */}
            <div className="bg-card border border-line rounded-2xl p-6 shadow">
              <h3 className="font-serif font-semibold text-lg text-ink mb-3">
                🎬 了解新加坡（官方影片）
              </h3>
              <p className="text-sm text-ink-2 mb-4">
                这是新加坡官方旅游宣传片，帮助家长了解新加坡的生活与自然环境。不是 AEIS/CEQ 考题，也不是本工作室微课。
              </p>
              
              <OfficialClip
                videoId="Lwkn3WWGhUg"
                credit="VisitSingapore 官方频道（新加坡旅游局）。这是新加坡生活与自然的官方宣传片，不是 AEIS / CEQ 考题，也不是本校微课。"
              />

              <div className="mt-4 bg-paper-2 border border-line rounded-lg p-3">
                <p className="text-xs text-ink-2">
                  <strong className="text-ink">更多官方内容：</strong>
                  新加坡教育部 YouTube 频道
                  <a href="https://www.youtube.com/@moespore" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                    youtube.com/@moespore →
                  </a>
                </p>
              </div>
            </div>

            {/* 行动召唤 */}
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <h3 className="font-serif font-semibold text-lg text-ink mb-3">
                下一步行动
              </h3>
              
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <Link
                  href="/#contact"
                  className="flex items-center justify-center px-5 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors text-center text-sm"
                >
                  微信咨询 / 报名
                </Link>
                <Link
                  href="/assess"
                  className="flex items-center justify-center px-5 py-3 bg-transparent text-ink border border-accent font-semibold rounded-full hover:bg-accent/10 transition-colors text-center text-sm"
                >
                  完整英语摸底
                </Link>
                <Link
                  href="/learn"
                  className="flex items-center justify-center px-5 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors text-center text-sm"
                >
                  免费试学一周
                </Link>
              </div>

              <div className="bg-paper border border-line rounded-lg p-3">
                <p className="text-xs text-ink-2 leading-relaxed">
                  <strong className="text-ink">诚实告知：</strong>
                  不包过 · 不承诺包过 · 不保证录取 · 不编造 CES 分数线 · 题目全部原创 · 
                  非 MOE、SEAB、Cambridge 官方机构 · 
                  付款方式：PayNow 94594601 / 微信转账（咨询时告知）
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
              >
                重新开始
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
              >
                返回首页
              </Link>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-ink-2 mb-4 max-w-3xl">
            狮城入学（SG School Entry）与新加坡教育部（MOE）、新加坡考试与评鉴局（SEAB）、剑桥大学英语考评部（Cambridge English）均无隶属、授权或官方合作关系。本站不使用新加坡狮头国家标志，也不使用上述机构的标识。页面内容仅为路径说明，不构成录取、派位、签证或入境方面的承诺或法律意见。入学资格、考期、规则一律以各机构官网为准。
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              狮城入学 · SG SCHOOL ENTRY
            </Link>
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
          </div>
        </div>
      </footer>
    </>
  );
}
