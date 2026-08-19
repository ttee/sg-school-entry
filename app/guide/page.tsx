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

  // 计算推荐路径：返回一个试学周
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

    // 找出改善焦点
    let kaizenFocus = "冠词与时态准确度";
    const missedEnglish: string[] = [];
    const missedMath: string[] = [];
    
    if (englishAnswers[0] !== englishItems[0].correct) {
      missedEnglish.push("交通方式零冠词（by bus 不加 the）");
    }
    if (englishAnswers[1] !== englishItems[1].correct) {
      missedEnglish.push("第三人称单数动词加 -s");
    }
    if (englishAnswers[2] !== englishItems[2].correct) {
      missedEnglish.push("过去时态");
    }
    if (englishAnswers[3] !== englishItems[3].correct) {
      missedEnglish.push("动词后用 -ing 形式");
    }

    mathItems.forEach((item, idx) => {
      if (mathAnswers[idx] !== item.correct) {
        // Extract 简体 part only (before the English part in "钱币 Money" format)
        const chinesePart = item.strand.split(/\s+/)[0];
        missedMath.push(chinesePart);
      }
    });

    // Primary 路径：CEQ English 为主，但 English OK + weak maths → MATH 试学周
    if (isPrimary) {
      if (englishRate <= 0.5) {
        // Weak English → A2 试学周
        kaizenFocus = missedEnglish.length > 0 ? missedEnglish[0] : "冠词与时态准确度";
        return {
          weekTitle: "A2 试学周",
          weekUrl: "/learn/trial/A2",
          kaizenFocus,
          pathway: "小学 AEIS 路径（P2–P5）· CEQ English + AEIS 数学"
        };
      } else if (englishRate > 0.5 && mathRate <= 0.5) {
        // English OK but weak maths → MATH 试学周
        kaizenFocus = missedMath.length > 0 ? missedMath[0] : "数学基础";
        return {
          weekTitle: "MATH 试学周",
          weekUrl: "/learn/trial/MATH",
          kaizenFocus,
          pathway: "小学 AEIS 路径（P2–P5）· CEQ English + AEIS 数学"
        };
      } else if (isUpperPrimary && englishRate >= 0.75) {
        // P5 + strong English + maths not weak → B1 试学周
        kaizenFocus = missedEnglish.length > 0 ? missedEnglish[0] : "英语进阶用法";
        return {
          weekTitle: "B1 试学周",
          weekUrl: "/learn/trial/B1",
          kaizenFocus,
          pathway: "小学 AEIS 路径（P5）· CEQ English + AEIS 数学"
        };
      } else {
        // Default → A2 试学周
        kaizenFocus = missedEnglish.length > 0 ? missedEnglish[0] : "冠词与时态准确度";
        return {
          weekTitle: "A2 试学周",
          weekUrl: "/learn/trial/A2",
          kaizenFocus,
          pathway: "小学 AEIS 路径（P2–P4）· CEQ English + AEIS 数学"
        };
      }
    }

    // Secondary 路径：AEIS 英语 + 数学，English weaker → SEC，Maths weaker → SMATH
    if (isSecondary) {
      if (englishRate < mathRate) {
        // English weaker → SEC 试学周
        kaizenFocus = missedEnglish.length > 0 ? missedEnglish[0] : "英语基础";
        return {
          weekTitle: "SEC 试学周",
          weekUrl: "/learn/trial/SEC",
          kaizenFocus,
          pathway: "中学 AEIS 路径（Sec 1–3）· AEIS 英语 + 数学"
        };
      } else {
        // Maths weaker or tie → SMATH 试学周
        kaizenFocus = missedMath.length > 0 ? missedMath[0] : "数学基础";
        return {
          weekTitle: "SMATH 试学周",
          weekUrl: "/learn/trial/SMATH",
          kaizenFocus,
          pathway: "中学 AEIS 路径（Sec 1–3）· AEIS 英语 + 数学"
        };
      }
    }

    return {
      weekTitle: "A2 试学周",
      weekUrl: "/learn/trial/A2",
      kaizenFocus,
      pathway: "CEQ English 为主"
    };
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
            帮你理解 AEIS、S-AEIS、CEQ 是什么，孩子应该从哪里开始。
          </p>
          <p className="text-sm text-muted">
            约 10–15 分钟 · 有简短英语和数学题 · 马上看到建议
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
                第一步：孩子的基本信息
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="birthYear" className="block text-sm font-semibold text-ink mb-2">
                    孩子哪年出生 <span className="text-accent">*</span>
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
                    MOE 用出生年份判断能不能考，
                    <a 
                      href="https://www.moe.gov.sg/international-students/aeis/eligibility-criteria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline ml-1"
                    >
                      请去官网核对 →
                    </a>
                  </p>
                </div>

                <div>
                  <label htmlFor="intendedLevel" className="block text-sm font-semibold text-ink mb-2">
                    打算申请哪个年级 <span className="text-accent">*</span>
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
                    小学和中学考的科目不一样，请按 MOE 年龄标准选
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
                第二步：英语小测试
              </h2>
              <p className="text-sm text-ink-2 mb-4">
                共 {englishItems.length} 题，约 3 分钟。
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
                第三步：数学小测试（P2 水平）
              </h2>
              <p className="text-sm text-ink-2 mb-4">
                共 {mathItems.length} 题，约 5 分钟。对应 MOE P2 大纲（钱币、乘除法、简单应用题）。
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
              <p className="text-sm font-semibold text-accent mb-2">
                {recommendation.pathway}
              </p>
              <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
                建议下一步：{recommendation.weekTitle}
              </h2>
              
              <div className="bg-paper border border-line rounded-xl p-5 mb-5">
                <p className="text-sm font-semibold text-ink mb-2">
                  本次改善焦点
                </p>
                <p className="text-ink-2 leading-relaxed">
                  优先练习：<strong className="text-ink">{recommendation.kaizenFocus}</strong>
                </p>
                <p className="text-xs text-muted mt-2">
                  每周只改一个错。
                </p>
              </div>

              <Link
                href={recommendation.weekUrl}
                className="flex items-center justify-center w-full px-6 py-4 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors text-center mb-4"
              >
                开始 {recommendation.weekTitle} →
              </Link>

              <div className="flex items-center justify-center gap-4 text-sm">
                <Link
                  href="/#contact"
                  className="text-ink-2 hover:text-ink transition-colors underline"
                >
                  微信咨询
                </Link>
                <span className="text-muted">·</span>
                <Link
                  href="/assess"
                  className="text-ink-2 hover:text-ink transition-colors underline"
                >
                  完整英语摸底
                </Link>
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
                    <p className="text-xs font-semibold text-ink mb-1">2026 年 AEIS（官方已公布）</p>
                    <ul className="text-xs text-ink-2 space-y-0.5">
                      <li>• <strong className="text-ink">申请窗口（已关闭）：</strong>小学 9am 周二 2026年7月7日 – 4:30pm 周四 2026年7月16日；中学 9am 周三 2026年7月8日 – 4:30pm 周五 2026年7月17日</li>
                      <li>• <strong className="text-ink">考试日期：</strong>Sec 1: 2026年9月1日（周二）；Sec 2/3: 2026年9月2日（周三）；Primary 2/3 及 4/5 数学: 2026年9月3日（周四）</li>
                      <li>• <strong className="text-ink">费用（官方）：</strong>小学 $340，中学 $630，另加 GST，不退费</li>
                      <li>• 录取后次年1月入学（视表现、空缺、居住区域而定）</li>
                    </ul>
                    <p className="text-xs text-muted mt-2">
                      具体日期与费用以<a href="https://www.moe.gov.sg/international-students/aeis/apply" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">官网申请页面</a>为准。
                    </p>
                  </div>
                  
                  <div className="bg-paper-2 border border-line rounded-lg p-3 mt-2">
                    <p className="text-xs text-ink-2">
                      <strong className="text-ink">重要提示（SEAB）：</strong>
                      MOE 不会专为 AEIS 考试签发入境许可。入场证明是考场通行证（test venue pass），不是入境签证。
                      <a href="https://www.seab.gov.sg/aeis/about-aeis/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        seab.gov.sg/aeis/about-aeis →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="border-t border-line pt-3">
                  <p className="font-semibold text-ink mb-1">S-AEIS 补充考试（官方）</p>
                  <p className="text-ink-2 mb-2">
                    S-AEIS 为同一学年内的补充入学考试，适用于 P2–P4 和 Sec 1–2（<strong className="text-ink">不包括 P5 和 Sec 3</strong>）。
                  </p>
                  <div className="space-y-1 text-ink-2 text-sm">
                    <p>
                      <a
                        href="https://www.moe.gov.sg/international-students/s-aeis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        moe.gov.sg/international-students/s-aeis →
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.moe.gov.sg/international-students/s-aeis/eligibility-criteria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        S-AEIS 资格标准 →
                      </a>
                    </p>
                  </div>
                  <div className="bg-paper-2 border border-line rounded-lg p-3 mt-2">
                    <ul className="text-xs text-ink-2 space-y-1">
                      <li>• 2027 年 S-AEIS 申请预计 2027 年 1 月初开放；考试预计 2027 年 2 月底至 3 月初举行（暂定）</li>
                      <li>• 如获录取，同年 4/5 月入学</li>
                      <li>• <strong className="text-ink">小学 CEQ 时间窗口：</strong>2027 年 S-AEIS 小学申请的 CEQ 须在 2026 年 1 月至提交申请日期间取得（12 个月内）</li>
                      <li>• <strong className="text-ink">费用（官方）：</strong>小学 $340，中学 $630，另加 GST，不退费（与 AEIS 同）</li>
                      <li>• <strong className="text-ink">2026 AEIS P5 未录取者：</strong>如仍符合年龄要求，可申请 2027 S-AEIS P4；需提供 B1 Preliminary for Schools CEQ 成绩（须在 2027 S-AEIS 提交日期前 12 个月内取得）</li>
                    </ul>
                  </div>
                  <p className="text-xs text-muted mt-2">
                    具体日期、费用与资格以官网为准。
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
                      <p><strong className="text-ink">报名流程（官方）：</strong>
                        <a href="https://www.cambridgeenglish.org/exams-and-tests/register-for-an-exam/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                          cambridgeenglish.org/exams-and-tests/register-for-an-exam →
                        </a>
                      </p>
                      <p className="text-xs text-muted mt-1">
                        家长通过剑桥授权考点报名，不在 Cambridge 官网直接报名。
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
                  <p className="text-xs text-muted mt-2">
                    ⚠️ 预备课程不等于政府学校学位，仍需通过 AEIS 考试派位
                  </p>
                </div>

                <div className="bg-paper border border-line rounded-xl p-4">
                  <h4 className="font-semibold text-ink mb-1">St Francis Methodist School (International)</h4>
                  <p className="text-sm text-ink-2 mb-2">
                    国际/使命学校（非政府、非政府辅助），设小学与中学。
                  </p>
                  <div className="space-y-1 text-xs text-ink-2">
                    <p>
                      <strong className="text-ink">官网：</strong>
                      <a href="https://www.sfms.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        sfms.edu.sg →
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">招生信息：</strong>
                      <a href="https://www.sfms.edu.sg/admissions/admission-matters/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        sfms.edu.sg/admissions/admission-matters →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-paper border border-line rounded-xl p-4">
                  <h4 className="font-semibold text-ink mb-1">Anglo-Chinese School (International)</h4>
                  <p className="text-sm text-ink-2 mb-2">
                    MOE 批准的私立学校 (Privately Funded School)，<strong className="text-ink">仅设中学与大学预科，无小学部</strong>。
                  </p>
                  <div className="space-y-1 text-xs text-ink-2">
                    <p>
                      <strong className="text-ink">官网：</strong>
                      <a href="https://www.acsinternational.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        acsinternational.edu.sg →
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">招生流程：</strong>
                      <a href="https://www.acsinternational.edu.sg/en/admissions-process/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        acsinternational.edu.sg/en/admissions-process →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-paper border border-line rounded-xl p-4">
                  <h4 className="font-semibold text-ink mb-1">Hwa Chong International School</h4>
                  <p className="text-sm text-ink-2 mb-2">
                    MOE 批准的私立学校 (PFS)，<strong className="text-ink">招收 13–18 岁学生，IB 课程，无小学部</strong>。
                  </p>
                  <div className="space-y-1 text-xs text-ink-2">
                    <p>
                      <strong className="text-ink">官网：</strong>
                      <a href="https://www.hcis.edu.sg/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        hcis.edu.sg →
                      </a>
                    </p>
                    <p>
                      <strong className="text-ink">招生：</strong>
                      <a href="https://www.hcis.edu.sg/school-admission/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        hcis.edu.sg/school-admission →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-paper border border-line rounded-xl p-4">
                  <h4 className="font-semibold text-ink mb-1">St. Joseph's Institution International High School</h4>
                  <p className="text-sm text-ink-2 mb-2">
                    MOE 批准的私立学校 (PFS)，<strong className="text-ink">Grades 7–12（中学），无小学部</strong>。
                  </p>
                  <div className="space-y-1 text-xs text-ink-2">
                    <p>
                      <strong className="text-ink">官网：</strong>
                      <a href="https://www.sji-international.com.sg/admissions/high-school" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        sji-international.com.sg/admissions/high-school →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-paper-2 border border-line rounded-lg p-3">
                  <p className="text-xs text-ink-2 mb-2">
                    <strong className="text-ink">更多私立学校资源（MOE 官方）：</strong>
                  </p>
                  <div className="space-y-1 text-xs text-ink-2">
                    <p>
                      • MOE 批准的私立学校 (PFS) 名单：
                      <a href="https://www.moe.gov.sg/returning-singaporeans/other-options" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        moe.gov.sg/returning-singaporeans/other-options →
                      </a>
                    </p>
                    <p>
                      • MOE 私立学校搜索：
                      <a href="https://www.moe.gov.sg/private-education/private-schools" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                        moe.gov.sg/private-education/private-schools →
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
                    我们与以上学校无隶属或合作关系。
                  </p>
                </div>
              </div>
            </div>

            {/* 先看影片 */}
            <div className="bg-card border border-line rounded-2xl p-6 shadow">
              <h3 className="font-serif font-semibold text-lg text-ink mb-3">
                🎬 先看影片，了解真实校园
              </h3>
              <p className="text-sm text-ink-2 mb-4">
                先看校园里的一天，再看一个从浙江来的孩子怎么进课堂。
              </p>
              
              <div className="space-y-6">
                {/* 1. 动机影片 - CNA 国际学生真实故事 */}
                <div>
                  <p className="text-sm font-semibold text-ink mb-3">1. 真实案例：一名来自浙江的国际学生</p>
                  <OfficialClip
                    videoId="Knyh8cm4kJU"
                    credit="CNA Insider / Mediacorp《Life As An International Student At A Singapore Primary School》（2019）。华苑小学真实校园，一名从浙江来的孩子。非 MOE 官方，不是 AEIS / CEQ 考题。日期与学费以官网为准。"
                  />
                </div>

                {/* 2. 期望管理 - 邻里小学 vs 名校 */}
                <div>
                  <p className="text-sm font-semibold text-ink mb-3">2. 期望管理：AEIS 多数派位到邻里小学</p>
                  <OfficialClip
                    videoId="kMUsrkuVk7k"
                    credit="联合早报 zaobaosg《名校 vs 邻里小学》（2025）。新加坡主流媒体，非教育部。AEIS 派位看空位和住址，多数是邻里小学。"
                  />
                </div>

                {/* 3. 日常生活 - 政府小学的一天 */}
                <div>
                  <p className="text-sm font-semibold text-ink mb-3">3. 政府小学的一天（小一学生）</p>
                  <OfficialClip
                    videoId="Mqf8E8vwEg0"
                    credit="Kranji Primary School 官方频道《A Day In a Life of A P1 Student》。一所政府小学的一天，不是 AEIS 教程。"
                  />
                </div>
              </div>

              <div className="mt-6 bg-paper-2 border border-line rounded-lg p-3">
                <p className="text-xs text-ink-2">
                  <strong className="text-ink">更多官方内容：</strong>
                  新加坡教育部 YouTube 频道
                  <a href="https://www.youtube.com/@moespore" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                    youtube.com/@moespore →
                  </a>
                </p>
              </div>
            </div>

            {/* 行动召唤 - removed, now using single CTA in result card above */}

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
