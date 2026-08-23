"use client";

import { useState } from "react";
import Link from "next/link";

const PAYNOW = "94594601";

export default function LandingEnquiry() {
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

  const isSecondary = formData.stage.startsWith("Sec");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentWechat: formData.parentWechat,
          childBirthYear: parseInt(formData.childBirthYear, 10),
          stage: formData.stage,
          intent: formData.intent,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setFormStatus({ type: "success", message: data.message || "提交成功！顾问会加您微信。" });
        setFormData({ parentWechat: "", childBirthYear: "", stage: "", intent: "" });
      } else {
        setFormStatus({ type: "error", message: data.error || "提交失败，请稍后重试" });
      }
    } catch {
      setFormStatus({ type: "error", message: "提交失败，请检查网络连接" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = (
    e: React.FormEvent<HTMLInputElement | HTMLSelectElement>,
    key: keyof typeof formData
  ) => {
    const target = e.currentTarget;
    target.setCustomValidity("");
    setFormData({ ...formData, [key]: target.value });
  };

  const requireZh = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    if (target.validity.valueMissing) target.setCustomValidity("请填写这一项");
  };

  return (
    <div id="contact">
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
              onChange={(e) => field(e, "parentWechat")}
              onInvalid={requireZh}
              className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="您的微信号"
            />
          </div>
          <div>
            <label htmlFor="childBirthYear" className="block text-sm font-semibold text-ink mb-1">
              孩子哪年出生 <span className="text-accent">*</span>
            </label>
            <input
              id="childBirthYear"
              type="number"
              required
              min={2000}
              max={new Date().getFullYear()}
              value={formData.childBirthYear}
              onChange={(e) => field(e, "childBirthYear")}
              onInvalid={(e) => {
                e.preventDefault();
                const t = e.currentTarget;
                if (t.validity.valueMissing) t.setCustomValidity("请填写这一项");
                else t.setCustomValidity("请填写 2000 年或以后的出生年");
              }}
              className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="例如：2015"
            />
          </div>
          <div>
            <label htmlFor="stage" className="block text-sm font-semibold text-ink mb-1">
              打算申请哪个年级 <span className="text-accent">*</span>
            </label>
            <select
              id="stage"
              required
              value={formData.stage}
              onChange={(e) => {
                e.currentTarget.setCustomValidity("");
                setFormData({ ...formData, stage: e.target.value, intent: "" });
              }}
              onInvalid={requireZh}
              className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">请选择</option>
              <optgroup label="小学 · CEQ + AEIS 数学">
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
                <option value="P5">P5</option>
              </optgroup>
              <optgroup label="中学 · AEIS 英语 + 数学">
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
              onChange={(e) => field(e, "intent")}
              onInvalid={requireZh}
              className="w-full px-4 py-2.5 bg-paper border border-line rounded-xl text-ink focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">请选择</option>
              <option value="trial">先免费试学（不用登录）</option>
              {!isSecondary && (
                <>
                  <option value="a2-12week">小学 CEQ · A2 · 12 周 RMB 2,680</option>
                  <option value="b1-12week">小学 P5 · B1 · 12 周 RMB 2,680</option>
                </>
              )}
              {isSecondary && <option value="monthly">中学 AEIS 作业（顾问确认开通）</option>}
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
            className="w-full bg-accent text-accent-ink font-semibold py-3 rounded-full hover:bg-accent-hover disabled:opacity-50"
          >
            {isSubmitting ? "提交中..." : "提交咨询 · 顾问加微信"}
          </button>
        </div>
      </form>
      <p className="text-sm text-ink-2">
        PayNow {PAYNOW}（手机号）· 微信转账。CEQ 考点报名费不含在作业包内。
        <Link href="/privacy" className="text-accent font-semibold ml-1">
          隐私政策
        </Link>
      </p>
    </div>
  );
}
