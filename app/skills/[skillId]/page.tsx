"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { skills, drills, type Skill, type SkillDrill } from "@/lib/skills-data";

export default function SkillDrillPage() {
  const params = useParams();
  const skillId = params.skillId as string;

  const skill = skills.find((s) => s.id === skillId);
  const drill = drills.find((d) => d.skillId === skillId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [completed, setCompleted] = useState<boolean[]>(
    drill ? new Array(drill.items.length).fill(false) : []
  );

  if (!skill) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ink mb-4">技能未找到</h1>
          <Link href="/skills" className="text-accent hover:text-accent-hover">
            返回技能列表
          </Link>
        </div>
      </div>
    );
  }

  if (!drill) {
    return (
      <div className="min-h-screen bg-paper">
        <header className="sticky top-0 z-50 bg-paper border-b border-line">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link href="/skills" className="text-accent hover:text-accent-hover">
              ← 返回技能列表
            </Link>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-ink mb-2">{skill.labelZh}</h1>
          <p className="text-muted mb-4">{skill.labelEn}</p>
          <div className="bg-warn-bg border border-line rounded-[--radius] p-6">
            <p className="text-warn-ink mb-4">
              先做{skill.weekLabel}作业。
            </p>
            <Link
              href="/trial/A2"
              className="inline-block px-6 py-2 rounded-[--radius] bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
            >
              去试学周
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const currentItem = drill.items[currentIndex];
  const totalItems = drill.items.length;
  const completedCount = completed.filter((c) => c).length;

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setShowFeedback(true);
    if (index === currentItem.correctIndex) {
      const newCompleted = [...completed];
      newCompleted[currentIndex] = true;
      setCompleted(newCompleted);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setCompleted(new Array(drill.items.length).fill(false));
  };

  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 bg-paper border-b border-line">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/skills" className="text-accent hover:text-accent-hover">
            ← 返回技能列表
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-ink mb-2">{skill.labelZh}</h1>
          <p className="text-muted mb-4">{skill.labelEn}</p>
          <div className="flex items-center gap-2">
            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
              {skill.weekLabel}
            </span>
          </div>
        </div>

        <div className="mb-6 bg-card border border-line rounded-[--radius] p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">
              已练 {completedCount} / 共 {totalItems}
            </span>
            <span className="text-muted">
              第 {currentIndex + 1} / {totalItems} 题
            </span>
          </div>
          <div className="mt-2 h-2 bg-line rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(completedCount / totalItems) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-card border border-line rounded-[--radius] p-8 mb-6">
          <p className="text-xl text-ink mb-6 font-medium">{currentItem.question}</p>

          <div className="space-y-3">
            {currentItem.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === currentItem.correctIndex;
              const showAsCorrect = showFeedback && isCorrect;
              const showAsWrong = showFeedback && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleOptionSelect(index)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-[--radius] border-2 transition-all ${
                    showAsCorrect
                      ? "border-accent bg-accent/10"
                      : showAsWrong
                      ? "border-red-500 bg-red-50"
                      : isSelected
                      ? "border-accent bg-accent/5"
                      : "border-line bg-paper hover:border-accent/50"
                  } ${showFeedback ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm ${
                        showAsCorrect
                          ? "border-accent bg-accent text-accent-ink"
                          : showAsWrong
                          ? "border-red-500 bg-red-500 text-white"
                          : isSelected
                          ? "border-accent text-accent"
                          : "border-line text-muted"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <div className="flex-1">
                      <p className="text-ink font-medium">{option}</p>
                      {showFeedback && (
                        <p className="mt-2 text-sm text-muted">
                          {currentItem.whyWrong[index]}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-6 py-2 rounded-[--radius] border border-line text-ink hover:bg-paper-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            上一题
          </button>
          {showFeedback && currentIndex < totalItems - 1 && (
            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-[--radius] bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
            >
              下一题
            </button>
          )}
          {currentIndex === totalItems - 1 && completedCount === totalItems && (
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-[--radius] bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
            >
              重新练习
            </button>
          )}
        </div>

        {completedCount === totalItems && (
          <div className="mt-8 bg-accent/10 border border-accent rounded-[--radius] p-6">
            <h2 className="text-2xl font-bold text-ink mb-2">完成！</h2>
            <p className="text-ink-2 mb-4">
              你已完成本技能的全部 {totalItems} 道练习题。
            </p>
            <div className="flex gap-4">
              <Link
                href="/skills"
                className="inline-block px-6 py-2 rounded-[--radius] bg-accent text-accent-ink hover:bg-accent-hover transition-colors"
              >
                返回技能列表
              </Link>
              <Link
                href="/trial"
                className="inline-block px-6 py-2 rounded-[--radius] border border-accent text-accent hover:bg-accent/5 transition-colors"
              >
                试学完整课程
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
