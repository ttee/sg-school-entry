"use client";

import { useState } from "react";

type ParentCardProps = {
  focus: string;
  completed: string[];
  mastery: string;
  isMathTrack: boolean;
};

export default function ParentCard({
  focus,
  completed,
  mastery,
  isMathTrack,
}: ParentCardProps) {
  const [copied, setCopied] = useState(false);

  const allActivities = isMathTrack
    ? ["阅读", "语法", "写作"]
    : ["阅读", "语法", "写作", "听读", "口语"];

  const getActivityStatus = (activity: string) => {
    return completed.includes(activity) ? "✓" : "△";
  };

  const cardText = `本周焦点：${focus}。${allActivities
    .map((a) => `${a}${getActivityStatus(a)}`)
    .join(" ")}。掌握：${mastery}。下周继续这个错，不换新错。`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cardText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-card border border-line rounded-xl p-4 md:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-serif font-semibold text-base text-ink mb-3">
            一周家长卡
          </h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-muted">本周焦点：</span>
              <span className="text-ink">{focus}</span>
            </div>
            <div>
              <span className="text-muted">完成：</span>
              {allActivities.map((activity, i) => (
                <span key={activity} className="text-ink ml-1">
                  {activity}
                  <span
                    className={
                      completed.includes(activity)
                        ? "text-accent"
                        : "text-muted"
                    }
                  >
                    {getActivityStatus(activity)}
                  </span>
                  {i < allActivities.length - 1 ? " " : ""}
                </span>
              ))}
            </div>
            <div>
              <span className="text-muted">掌握：</span>
              <span className="text-ink">{mastery}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-accent text-white rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors whitespace-nowrap"
        >
          {copied ? "已复制" : "复制"}
        </button>
      </div>
    </div>
  );
}
