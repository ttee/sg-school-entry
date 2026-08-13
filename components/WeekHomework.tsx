"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Question = {
  id: string;
  type: string;
  order: number;
  content: string;
  options: string | null;
  correctAnswer: string | null;
  points: number;
  audioUrl: string | null;
};

type Week = {
  id: string;
  title: string;
  description: string | null;
};

type Submission = {
  answers: string;
  score: number | null;
  completedAt: string | null;
} | null;

export default function WeekHomework({
  week,
  questions,
  submission: initialSubmission,
  userId,
}: {
  week: Week;
  questions: Question[];
  submission: Submission;
  userId: string;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, any>>(
    initialSubmission ? JSON.parse(initialSubmission.answers) : {}
  );
  const [saving, setSaving] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showTranscript, setShowTranscript] = useState<Record<string, boolean>>({});

  const isCompleted = !!initialSubmission?.completedAt;

  const handleMCQChange = (questionId: string, index: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [index]: value,
      },
    }));
  };

  const handleTextChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleSpeakingComplete = (questionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: "completed",
    }));
  };

  const saveProgress = async () => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          weekId: week.id,
          answers,
          submit: false,
        }),
      });

      if (!res.ok) {
        throw new Error("保存失败");
      }
    } catch (err) {
      setError("保存失败，请重试");
    } finally {
      setSaving(false);
    }
  };

  const submitHomework = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          weekId: week.id,
          answers,
          submit: true,
        }),
      });

      if (!res.ok) {
        throw new Error("提交失败");
      }

      const data = await res.json();
      router.refresh();
    } catch (err) {
      setError("提交失败，请重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/learn"
          className="text-sm text-muted hover:text-ink transition-colors mb-4 inline-block"
        >
          ← 返回作业列表
        </Link>
        <h1 className="font-serif font-semibold text-3xl text-ink mb-2">
          {week.title}
        </h1>
        {week.description && (
          <p className="text-ink-2">{week.description}</p>
        )}
        {isCompleted && initialSubmission?.score !== null && (
          <div className="mt-4 bg-accent/10 border border-accent/20 rounded-lg px-4 py-3">
            <p className="text-accent font-semibold">
              已提交 · 得分：{initialSubmission.score} 分
            </p>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {questions.map((question, idx) => (
          <div
            key={question.id}
            className="bg-card border border-line rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-serif font-semibold text-xl text-ink">
                {idx + 1}.{" "}
                {question.type === "reading"
                  ? "阅读理解 / Reading"
                  : question.type === "grammar"
                  ? "语法 / Use of English"
                  : question.type === "writing"
                  ? "写作 / Writing"
                  : question.type === "listening"
                  ? "听力 / Listening"
                  : "口语 / Speaking"}
              </h2>
              <span className="text-sm text-muted">{question.points} 分</span>
            </div>

            {question.type === "listening" && question.audioUrl && (
              <div className="mb-6 bg-paper border border-line rounded-lg p-4">
                <div className="mb-3">
                  <p className="text-sm text-ink-2 mb-2">
                    请先听录音，可暂停、可再听。考试听力通常听两遍。
                  </p>
                  <audio
                    controls
                    className="w-full"
                    style={{
                      maxWidth: "100%",
                      height: "40px",
                    }}
                  >
                    <source src={question.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <div>
                  <button
                    onClick={() =>
                      setShowTranscript((prev) => ({
                        ...prev,
                        [question.id]: !prev[question.id],
                      }))
                    }
                    className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    {showTranscript[question.id]
                      ? "隐藏原文 / Hide script"
                      : "显示原文 / Show script"}
                  </button>
                  {showTranscript[question.id] && (
                    <div className="mt-3 whitespace-pre-wrap text-sm text-ink-2 bg-paper-2 rounded-lg p-3 border border-line">
                      {question.content}
                    </div>
                  )}
                </div>
              </div>
            )}

            {question.type !== "listening" && (
              <div className="whitespace-pre-wrap text-ink-2 mb-4">
                {question.content}
              </div>
            )}

            {question.options && (
              <div className="space-y-4">
                {JSON.parse(question.options).map((opt: string, i: number) => {
                  const [questionText, ...choices] = opt.split("|");
                  const userAnswer = answers[question.id]?.[i];
                  const correctAnswers = question.correctAnswer?.split(",");
                  const correctAnswer = correctAnswers?.[i];
                  const showCorrect =
                    isCompleted && correctAnswer && userAnswer !== correctAnswer;

                  return (
                    <div
                      key={i}
                      className="bg-paper border border-line rounded-lg p-4"
                    >
                      <p className="font-semibold text-ink mb-3">
                        {i + 1}. {questionText}
                      </p>
                      <div className="space-y-2">
                        {choices.map((choice, ci) => {
                          const choiceValue = choice.split(".")[0].trim();
                          const isSelected = userAnswer === choiceValue;
                          const isCorrect = correctAnswer === choiceValue;

                          return (
                            <label
                              key={ci}
                              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                                isCompleted
                                  ? isCorrect
                                    ? "bg-accent/10 border border-accent"
                                    : isSelected
                                    ? "bg-warn-bg border border-warn-ink/20"
                                    : "hover:bg-paper-2"
                                  : isSelected
                                  ? "bg-accent/10 border border-accent"
                                  : "hover:bg-paper-2"
                              }`}
                            >
                              <input
                                type="radio"
                                name={`${question.id}-${i}`}
                                value={choiceValue}
                                checked={isSelected}
                                onChange={(e) =>
                                  !isCompleted &&
                                  handleMCQChange(question.id, i, e.target.value)
                                }
                                disabled={isCompleted}
                                className="w-4 h-4 text-accent"
                              />
                              <span className="text-sm text-ink">
                                {choice}
                                {isCompleted && isCorrect && " ✓"}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                      {showCorrect && (
                        <p className="text-xs text-accent mt-2">
                          正确答案：{correctAnswer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {question.type === "writing" && (
              <div>
                <textarea
                  value={answers[question.id] || ""}
                  onChange={(e) =>
                    !isCompleted &&
                    handleTextChange(question.id, e.target.value)
                  }
                  disabled={isCompleted}
                  rows={8}
                  className="w-full px-4 py-3 bg-paper border border-line rounded-lg text-ink resize-y focus:outline-none focus:ring-2 focus:ring-accent disabled:opacity-60"
                  placeholder="在此输入你的答案..."
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-muted">
                    写作需手动批改。完成后提交即可。
                  </p>
                  <p className="text-xs text-muted">
                    字数 / Words: {(answers[question.id] || "").trim().split(/\s+/).filter((w: string) => w.length > 0).length}
                  </p>
                </div>
              </div>
            )}

            {question.type === "speaking" && (
              <div className="bg-paper border border-line rounded-lg p-4">
                {answers[question.id] === "completed" || isCompleted ? (
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-2xl">✓</span>
                    <span className="font-semibold">已练习完成</span>
                  </div>
                ) : (
                  <button
                    onClick={() => handleSpeakingComplete(question.id)}
                    className="px-5 py-2.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                  >
                    确认已练习
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="mt-6 bg-warn-bg border border-warn-ink/20 rounded-lg px-4 py-3 text-warn-ink">
          {error}
        </div>
      )}

      {!isCompleted && (
        <div className="mt-8 flex gap-4">
          <button
            onClick={saveProgress}
            disabled={saving}
            className="px-6 py-3 bg-paper-2 text-ink border border-line font-semibold rounded-full hover:bg-line transition-colors disabled:opacity-50"
          >
            {saving ? "保存中..." : "保存进度"}
          </button>
          <button
            onClick={submitHomework}
            disabled={submitting}
            className="px-6 py-3 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50"
          >
            {submitting ? "提交中..." : "提交作业"}
          </button>
        </div>
      )}
    </div>
  );
}
