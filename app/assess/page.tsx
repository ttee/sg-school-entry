"use client";

import Link from "next/link";
import { useState } from "react";

// 诊断题目 - 基于现有 A2 Week 0-3 的错误焦点
// Error foci: articles, 3sg-s, present simple vs continuous, past simple, at/in/on time, like + -ing
const diagnosticItems = [
  {
    id: 1,
    type: "grammar",
    question: "Mei goes to school ___ bus every morning.",
    options: ["by", "by the", "on", "with"],
    correct: 0,
    errorFocus: "articles",
    explanation: "交通方式用零冠词：by bus, by MRT, by car（不加 the）"
  },
  {
    id: 2,
    type: "grammar",
    question: "Ms Tan ___ us English every Monday.",
    options: ["teach", "teachs", "teaches", "teaching"],
    correct: 2,
    errorFocus: "3sg-s",
    explanation: "第三人称单数（she/he/Ms Tan）动词要加 -s：teaches"
  },
  {
    id: 3,
    type: "grammar",
    question: "I am ___ student at this school.",
    options: ["a", "an", "the", "no article needed"],
    correct: 0,
    errorFocus: "articles",
    explanation: "第一次提到某个名词，用 a/an：a student"
  },
  {
    id: 4,
    type: "grammar",
    question: "Priya ___ her homework right now.",
    options: ["does", "is doing", "do", "did"],
    correct: 1,
    errorFocus: "present-continuous",
    explanation: "\"right now\" 表示正在发生，用现在进行时：is doing"
  },
  {
    id: 5,
    type: "grammar",
    question: "We have English lessons ___ Monday and Wednesday.",
    options: ["in", "at", "on", "by"],
    correct: 2,
    errorFocus: "time-prepositions",
    explanation: "星期几前用 on：on Monday, on Wednesday"
  },
  {
    id: 6,
    type: "grammar",
    question: "My sister ___ reading story books.",
    options: ["like", "likes", "is like", "liking"],
    correct: 1,
    errorFocus: "3sg-s",
    explanation: "she/my sister 是第三人称单数，动词加 -s：likes"
  },
  {
    id: 7,
    type: "grammar",
    question: "Yesterday I ___ my water bottle in the classroom.",
    options: ["lose", "lost", "have lost", "am losing"],
    correct: 1,
    errorFocus: "past-simple",
    explanation: "\"Yesterday\" 明确过去时间，用过去式：lost"
  },
  {
    id: 8,
    type: "reading",
    question: `Read this notice:\n\n**Lost and Found**\nSomeone found a water bottle outside the office this morning. It has a pink flower sticker. Please come to the office ___ recess to collect it.\n\nWhat is the correct word for the blank?`,
    options: ["in", "on", "at", "by"],
    correct: 2,
    errorFocus: "time-prepositions",
    explanation: "具体时刻或休息时间用 at：at recess, at 3 o'clock"
  },
  {
    id: 9,
    type: "grammar",
    question: "I enjoy ___ in the school library after lessons.",
    options: ["read", "to read", "reading", "reads"],
    correct: 2,
    errorFocus: "like-ing",
    explanation: "enjoy/like 后面用 -ing 形式：enjoy reading"
  },
  {
    id: 10,
    type: "reading",
    question: `Mei's timetable shows:\nMonday: English at 8:00, Maths at 9:30\nTuesday: Science at 8:00, PE at 10:00\n\nWhich sentence is correct?`,
    options: [
      "Mei have English on Monday morning.",
      "Mei has English in Monday morning.",
      "Mei has English on Monday morning.",
      "Mei is having English on Monday morning."
    ],
    correct: 2,
    errorFocus: "combined",
    explanation: "第三人称单数 has + 时间表用一般现在时 + 星期用 on"
  }
];

// 评估规则：根据错误焦点的正确率推荐一个试学周
function calculateRecommendation(answers: (number | null)[]) {
  const articlesItems = [0, 2];
  const thirdPersonItems = [1, 5];
  const basicItems = [0, 1, 2, 5, 8];
  
  let articlesCorrect = 0;
  let thirdPersonCorrect = 0;
  let basicCorrect = 0;
  let totalCorrect = 0;

  answers.forEach((answer, idx) => {
    if (answer === diagnosticItems[idx].correct) {
      totalCorrect++;
      if (articlesItems.includes(idx)) articlesCorrect++;
      if (thirdPersonItems.includes(idx)) thirdPersonCorrect++;
      if (basicItems.includes(idx)) basicCorrect++;
    }
  });

  const articlesRate = articlesCorrect / articlesItems.length;
  const thirdPersonRate = thirdPersonCorrect / thirdPersonItems.length;
  const basicRate = basicCorrect / basicItems.length;

  // 推荐规则：基础薄弱或语法较好都推荐 A2 试学周，只有很强才推荐 B1 试学周
  if (basicRate >= 0.8 && totalCorrect >= 8) {
    return {
      level: "B1",
      weekTitle: "B1 试学周",
      weekUrl: "/learn/trial/B1",
      kaizenFocus: articlesRate < thirdPersonRate ? "冠词 a/an/the 的使用" : totalCorrect < 9 ? "第三人称单数动词加 -s" : "现在完成时与过去时的区分"
    };
  } else {
    return {
      level: "A2",
      weekTitle: "A2 试学周",
      weekUrl: "/learn/trial/A2",
      kaizenFocus: articlesRate < thirdPersonRate ? "冠词 a/an/the 的使用" : "第三人称单数动词加 -s"
    };
  }
}

export default function AssessPage() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(diagnosticItems.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);

  const handleAnswer = (itemIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[itemIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // 检查是否全部作答
    if (answers.some(a => a === null)) {
      alert("请完成所有题目后再提交。");
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers(new Array(diagnosticItems.length).fill(null));
    setSubmitted(false);
    setShowExplanations(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCorrect = answers.filter(
    (answer, idx) => answer === diagnosticItems[idx].correct
  ).length;

  const recommendation = submitted ? calculateRecommendation(answers) : null;

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
        {!submitted ? (
          <>
            <div className="mb-8">
              <h1 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-3">
                入学英语摸底
              </h1>
              <p className="text-ink-2 mb-2">
                这是本工作室的摸底练习，帮助家长判断孩子适合从哪个门槛开始。共 10 题，约 5–8 分钟。
              </p>
              <p className="text-sm text-muted">
                孩子做，家长可以坐旁边，但请让孩子自己答。不计时，不排名。
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {diagnosticItems.map((item, itemIndex) => (
                <div
                  key={item.id}
                  className="bg-card border border-line rounded-2xl p-5 md:p-6 shadow"
                >
                  <p className="text-sm font-semibold text-accent mb-2">
                    题目 {item.id} / 10
                  </p>
                  <p className="text-ink mb-4 whitespace-pre-line leading-relaxed">
                    {item.question}
                  </p>
                  <div className="space-y-2">
                    {item.options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          answers[itemIndex] === optionIndex
                            ? "border-accent bg-accent/5"
                            : "border-line hover:border-accent/50 hover:bg-accent/5"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${itemIndex}`}
                          checked={answers[itemIndex] === optionIndex}
                          onChange={() => handleAnswer(itemIndex, optionIndex)}
                          className="mt-0.5 accent-accent"
                        />
                        <span className="text-ink-2">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className="px-8 py-3.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
              >
                提交摸底
              </button>
            </div>

            <div className="mt-8 bg-paper-2 border border-line rounded-xl p-5 text-sm text-ink-2">
              <p className="mb-2">
                <strong className="text-ink">隐私说明：</strong>
              </p>
              <p>
                本摸底不收集孩子的姓名、年龄或联系方式。答案仅在浏览器本地计算，不上传服务器。
                如需咨询或报名，请点击提交后的「微信咨询」按钮。
                详见<Link href="/privacy" className="text-accent hover:underline">隐私政策</Link>。
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
                评估结果
              </p>
              <h1 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-3">
                摸底完成
              </h1>
              <p className="text-ink-2">
                答对 <strong className="text-ink font-semibold">{totalCorrect}</strong> / {diagnosticItems.length} 题
              </p>
            </div>

            {recommendation && (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-6">
                <h2 className="font-serif font-semibold text-2xl text-ink mb-4">
                  建议下一步：{recommendation.weekTitle}
                </h2>
                
                <div className="bg-paper border border-line rounded-xl p-5 mb-5">
                  <p className="text-sm font-semibold text-ink mb-2">
                    本次改善焦点
                  </p>
                  <p className="text-ink-2 leading-relaxed">
                    先练这个：<strong className="text-ink">{recommendation.kaizenFocus}</strong>
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
                    href="/guide"
                    className="text-ink-2 hover:text-ink transition-colors underline"
                  >
                    升学向导
                  </Link>
                </div>
              </div>
            )}

            <div className="bg-paper-2 border border-line rounded-xl p-5 mb-6">
              <p className="text-sm text-ink-2 leading-relaxed">
                <strong className="text-ink">诚实告知：</strong>
                这是本工作室的摸底练习，不是 Cambridge 或 MOE 官方测验。
                结果仅供参考。
                真实水平需通过剑桥授权考点的正式 CEQ 考试评定。
              </p>
            </div>

            <div className="mb-6">
              <button
                onClick={() => setShowExplanations(!showExplanations)}
                className="text-sm text-accent hover:underline font-semibold"
              >
                {showExplanations ? "▼ 收起解析" : "▶ 查看每题解析"}
              </button>
            </div>

            {showExplanations && (
              <div className="space-y-4 mb-8">
                {diagnosticItems.map((item, itemIndex) => {
                  const isCorrect = answers[itemIndex] === item.correct;
                  return (
                    <div
                      key={item.id}
                      className="bg-card border border-line rounded-xl p-5"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span
                          className={`flex-none w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                            isCorrect
                              ? "bg-accent/20 text-accent"
                              : "bg-warn-bg text-warn-ink"
                          }`}
                        >
                          {isCorrect ? "✓" : "✗"}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink mb-1">
                            题目 {item.id}
                          </p>
                          <p className="text-ink-2 text-sm whitespace-pre-line">
                            {item.question}
                          </p>
                        </div>
                      </div>
                      <div className="ml-9">
                        <p className="text-sm text-ink-2 mb-1">
                          <strong className="text-ink">正确答案：</strong>
                          {item.options[item.correct]}
                        </p>
                        {!isCorrect && answers[itemIndex] !== null && (
                          <p className="text-sm text-warn-ink mb-2">
                            你的答案：{item.options[answers[itemIndex]!]}
                          </p>
                        )}
                        <p className="text-sm text-ink-2">
                          <strong className="text-ink">解析：</strong>
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
              >
                重新摸底
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-ink border border-line font-semibold rounded-full hover:border-ink-2 hover:bg-card transition-colors"
              >
                返回首页
              </Link>
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-line py-8 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-ink-2 mb-4 max-w-3xl">
            狮城入学（SG School Entry）与新加坡教育部（MOE）、新加坡考试与评鉴局（SEAB）、剑桥大学英语考评部（Cambridge English）均无隶属、授权或官方合作关系。本站不使用新加坡狮头国家标志，也不使用上述机构的标识。页面内容仅为路径说明，不构成录取、派位、签证或入境方面的承诺或法律意见。入学资格、考期、规则一律以各机构官网为准。
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <Link href="/" className="hover:text-ink transition-colors">
              狮城入学 · SG School Entry
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
          </div>
        </div>
      </footer>
    </>
  );
}
