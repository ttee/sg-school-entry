"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DualValidationMap from "./DualValidationMap";
import DualValidationMapWeek1 from "./DualValidationMapWeek1";
import DualValidationMapWeek2 from "./DualValidationMapWeek2";
import DualValidationMapWeek3 from "./DualValidationMapWeek3";
import DualValidationMapWeek4 from "./DualValidationMapWeek4";
import DualValidationMapWeek5 from "./DualValidationMapWeek5";
import DualValidationMapWeek6 from "./DualValidationMapWeek6";
import DualValidationMapWeek7 from "./DualValidationMapWeek7";
import DualValidationMapWeek8 from "./DualValidationMapWeek8";
import DualValidationMapWeek9 from "./DualValidationMapWeek9";
import DualValidationMapWeek10 from "./DualValidationMapWeek10";
import DualValidationMapWeek11 from "./DualValidationMapWeek11";
import DualValidationMapB1Week0 from "./DualValidationMapB1Week0";
import DualValidationMapB1Week1 from "./DualValidationMapB1Week1";
import DualValidationMapB1Week2 from "./DualValidationMapB1Week2";
import DualValidationMapB1Week3 from "./DualValidationMapB1Week3";
import DualValidationMapB1Week4 from "./DualValidationMapB1Week4";
import DualValidationMapB1Week5 from "./DualValidationMapB1Week5";
import DualValidationMapB1Week6 from "./DualValidationMapB1Week6";
import DualValidationMapB1Week7 from "./DualValidationMapB1Week7";
import DualValidationMapB1Week8 from "./DualValidationMapB1Week8";
import DualValidationMapB1Week9 from "./DualValidationMapB1Week9";
import DualValidationMapB1Week10 from "./DualValidationMapB1Week10";
import DualValidationMapB1Week11 from "./DualValidationMapB1Week11";
import DualValidationMapMath from "./DualValidationMapMath";
import DualValidationMapMathWeek1 from "./DualValidationMapMathWeek1";
import DualValidationMapMathWeek2 from "./DualValidationMapMathWeek2";
import DualValidationMapMathWeek3 from "./DualValidationMapMathWeek3";
import DualValidationMapMathWeek4 from "./DualValidationMapMathWeek4";
import DualValidationMapMathWeek5 from "./DualValidationMapMathWeek5";
import DualValidationMapMathWeek6 from "./DualValidationMapMathWeek6";
import DualValidationMapMathWeek7 from "./DualValidationMapMathWeek7";
import DualValidationMapMathWeek8 from "./DualValidationMapMathWeek8";
import DualValidationMapMathWeek9 from "./DualValidationMapMathWeek9";
import DualValidationMapMathWeek10 from "./DualValidationMapMathWeek10";
import DualValidationMapMathWeek11 from "./DualValidationMapMathWeek11";
import DualValidationMapMathWeek12 from "./DualValidationMapMathWeek12";
import DualValidationMapMathWeek13 from "./DualValidationMapMathWeek13";
import DualValidationMapMathWeek14 from "./DualValidationMapMathWeek14";
import DualValidationMapMathWeek15 from "./DualValidationMapMathWeek15";
import DualValidationMapMathWeek16 from "./DualValidationMapMathWeek16";
import DualValidationMapMathWeek17 from "./DualValidationMapMathWeek17";
import DualValidationMapMathWeek18 from "./DualValidationMapMathWeek18";
import DualValidationMapMathWeek19 from "./DualValidationMapMathWeek19";
import DualValidationMapMathWeek20 from "./DualValidationMapMathWeek20";
import DualValidationMapMathWeek21 from "./DualValidationMapMathWeek21";
import DualValidationMapMathWeek22 from "./DualValidationMapMathWeek22";
import DualValidationMapMathWeek23 from "./DualValidationMapMathWeek23";
import DualValidationMapMathWeek24 from "./DualValidationMapMathWeek24";
import DualValidationMapMathWeek25 from "./DualValidationMapMathWeek25";
import DualValidationMapMathWeek26 from "./DualValidationMapMathWeek26";
import DualValidationMapMathWeek27 from "./DualValidationMapMathWeek27";
import DualValidationMapMathWeek28 from "./DualValidationMapMathWeek28";
import DualValidationMapMathWeek29 from "./DualValidationMapMathWeek29";
import DualValidationMapSecWeek0 from "./DualValidationMapSecWeek0";
import DualValidationMapSecWeek1 from "./DualValidationMapSecWeek1";
import DualValidationMapSecWeek2 from "./DualValidationMapSecWeek2";
import DualValidationMapSecWeek3 from "./DualValidationMapSecWeek3";
import DualValidationMapSecWeek4 from "./DualValidationMapSecWeek4";
import DualValidationMapSecWeek5 from "./DualValidationMapSecWeek5";
import DualValidationMapSecWeek6 from "./DualValidationMapSecWeek6";
import DualValidationMapSecWeek7 from "./DualValidationMapSecWeek7";
import DualValidationMapSecWeek8 from "./DualValidationMapSecWeek8";
import DualValidationMapSecWeek9 from "./DualValidationMapSecWeek9";
import DualValidationMapSecWeek10 from "./DualValidationMapSecWeek10";
import DualValidationMapSecWeek11 from "./DualValidationMapSecWeek11";
import DualValidationMapSmathWeek0 from "./DualValidationMapSmathWeek0";
import DualValidationMapSmathWeek1 from "./DualValidationMapSmathWeek1";
import DualValidationMapSmathWeek2 from "./DualValidationMapSmathWeek2";
import DualValidationMapSmathWeek3 from "./DualValidationMapSmathWeek3";
import DualValidationMapSmathWeek4 from "./DualValidationMapSmathWeek4";
import DualValidationMapSmathWeek5 from "./DualValidationMapSmathWeek5";
import DualValidationMapSmathWeek6 from "./DualValidationMapSmathWeek6";
import DualValidationMapSmathWeek7 from "./DualValidationMapSmathWeek7";
import DualValidationMapSmathWeek8 from "./DualValidationMapSmathWeek8";
import DualValidationMapSmathWeek9 from "./DualValidationMapSmathWeek9";
import DualValidationMapSmathWeek10 from "./DualValidationMapSmathWeek10";
import DualValidationMapSmathWeek11 from "./DualValidationMapSmathWeek11";
import DualValidationMapSmathWeek12 from "./DualValidationMapSmathWeek12";
import DualValidationMapSmathWeek13 from "./DualValidationMapSmathWeek13";
import DualValidationMapSmathWeek14 from "./DualValidationMapSmathWeek14";
import DualValidationMapSmathWeek15 from "./DualValidationMapSmathWeek15";
import DualValidationMapSmathWeek16 from "./DualValidationMapSmathWeek16";
import DualValidationMapSmathWeek17 from "./DualValidationMapSmathWeek17";
import DualValidationMapSmathWeek18 from "./DualValidationMapSmathWeek18";
import DualValidationMapSmathWeek19 from "./DualValidationMapSmathWeek19";
import DualValidationMapSmathWeek20 from "./DualValidationMapSmathWeek20";
import DualValidationMapSmathWeek21 from "./DualValidationMapSmathWeek21";
import DualValidationMapSmathWeek22 from "./DualValidationMapSmathWeek22";
import DualValidationMapSmathWeek23 from "./DualValidationMapSmathWeek23";
import DualValidationMapSmathWeek24 from "./DualValidationMapSmathWeek24";
import DualValidationMapSmathWeek25 from "./DualValidationMapSmathWeek25";
import DualValidationMapSmathWeek26 from "./DualValidationMapSmathWeek26";
import DualValidationMapSmathWeek27 from "./DualValidationMapSmathWeek27";
import DualValidationMapSmathWeek28 from "./DualValidationMapSmathWeek28";
import DualValidationMapSmathWeek29 from "./DualValidationMapSmathWeek29";
import DualValidationMapSmathWeek30 from "./DualValidationMapSmathWeek30";
import DualValidationMapSmathWeek31 from "./DualValidationMapSmathWeek31";
import DualValidationMapSmathWeek32 from "./DualValidationMapSmathWeek32";
import DualValidationMapSmathWeek33 from "./DualValidationMapSmathWeek33";
import DualValidationMapSmathWeek34 from "./DualValidationMapSmathWeek34";
import DualValidationMapSmathWeek35 from "./DualValidationMapSmathWeek35";
import DualValidationMapSmathWeek36 from "./DualValidationMapSmathWeek36";
import DualValidationMapSmathWeek37 from "./DualValidationMapSmathWeek37";
import DualValidationMapSmathWeek38 from "./DualValidationMapSmathWeek38";
import DualValidationMapSmathWeek39 from "./DualValidationMapSmathWeek39";
import DualValidationMapSmathWeek40 from "./DualValidationMapSmathWeek40";
import DualValidationMapSmathWeek41 from "./DualValidationMapSmathWeek41";
import DualValidationMapSmathWeek42 from "./DualValidationMapSmathWeek42";
import DualValidationMapSmathWeek43 from "./DualValidationMapSmathWeek43";
import DualValidationMapSmathWeek44 from "./DualValidationMapSmathWeek44";
import DualValidationMapSmathWeek45 from "./DualValidationMapSmathWeek45";
import DualValidationMapSmathWeek46 from "./DualValidationMapSmathWeek46";
import DualValidationMapSmathWeek47 from "./DualValidationMapSmathWeek47";
import DualValidationMapSmathWeek48 from "./DualValidationMapSmathWeek48";
import DualValidationMapSmathWeek49 from "./DualValidationMapSmathWeek49";
import DualValidationMapSmathWeek50 from "./DualValidationMapSmathWeek50";
import DualValidationMapSmathWeek51 from "./DualValidationMapSmathWeek51";
import DualValidationMapSmathWeek52 from "./DualValidationMapSmathWeek52";
import DualValidationMapSmathWeek53 from "./DualValidationMapSmathWeek53";
import DualValidationMapSmathWeek54 from "./DualValidationMapSmathWeek54";
import DualValidationMapSmathWeek55 from "./DualValidationMapSmathWeek55";
import DualValidationMapSmathWeek56 from "./DualValidationMapSmathWeek56";
import DualValidationMapSmathWeek57 from "./DualValidationMapSmathWeek57";
import DualValidationMapSmathWeek58 from "./DualValidationMapSmathWeek58";
import DualValidationMapSmathWeek59 from "./DualValidationMapSmathWeek59";
import DualValidationMapSmathWeek60 from "./DualValidationMapSmathWeek60";
import DualValidationMapSmathWeek61 from "./DualValidationMapSmathWeek61";
import DualValidationMapSmathWeek62 from "./DualValidationMapSmathWeek62";
import DualValidationMapSmathWeek63 from "./DualValidationMapSmathWeek63";
import DualValidationMapSmathWeek64 from "./DualValidationMapSmathWeek64";
import DualValidationMapSmathWeek65 from "./DualValidationMapSmathWeek65";
import DualValidationMapSmathWeek66 from "./DualValidationMapSmathWeek66";
import DualValidationMapSmathWeek67 from "./DualValidationMapSmathWeek67";
import DualValidationMapSmathWeek68 from "./DualValidationMapSmathWeek68";
import DualValidationMapSmathWeek69 from "./DualValidationMapSmathWeek69";
import DualValidationMapSmathWeek70 from "./DualValidationMapSmathWeek70";
import DualValidationMapSmathWeek71 from "./DualValidationMapSmathWeek71";
import DualValidationMapSmathWeek72 from "./DualValidationMapSmathWeek72";
import DualValidationMapSmathWeek73 from "./DualValidationMapSmathWeek73";
import DualValidationMapSmathWeek74 from "./DualValidationMapSmathWeek74";
import DualValidationMapSmathWeek75 from "./DualValidationMapSmathWeek75";
import DualValidationMapSmathWeek76 from "./DualValidationMapSmathWeek76";
import DualValidationMapSmathWeek77 from "./DualValidationMapSmathWeek77";
import DualValidationMapSmathWeek78 from "./DualValidationMapSmathWeek78";
import DualValidationMapSmathWeek79 from "./DualValidationMapSmathWeek79";
import DualValidationMapSmathWeek80 from "./DualValidationMapSmathWeek80";
import DualValidationMapSmathWeek81 from "./DualValidationMapSmathWeek81";
import DualValidationMapSmathWeek82 from "./DualValidationMapSmathWeek82";
import DualValidationMapSmathWeek83 from "./DualValidationMapSmathWeek83";
import DualValidationMapSmathWeek84 from "./DualValidationMapSmathWeek84";
import DualValidationMapSmathWeek85 from "./DualValidationMapSmathWeek85";
import DualValidationMapSmathWeek86 from "./DualValidationMapSmathWeek86";
import OfficialClip from "./OfficialClip";
import WeikeMiniLesson from "./WeikeMiniLesson";
import BoardWeike from "./BoardWeike";
import SmathFigure from "./SmathFigure";

type Question = {
  id: string;
  type: string;
  order: number;
  content: string;
  options: string | null;
  correctAnswer: string | null;
  choiceWhy: string | null;
  points: number;
  audioUrl: string | null;
};

type Week = {
  id: string;
  title: string;
  description: string | null;
  level: string;
  weekNumber: number;
  errorFocus: string | null;
  parentBrief: string | null;
  videoUrl: string | null;
  kaizenFocus: string | null;
  officialClipId: string | null;
  officialClipCredit: string | null;
};

type Submission = {
  answers: string;
  score: number | null;
  completedAt: string | null;
} | null;

function getShortPracticeDescription(week: Week): string {
  const title = week.title.toLowerCase();
  const description = (week.description || "").toLowerCase();
  
  // Extract key topics from title/description for SMATH/MATH
  if (description.includes("angle") || title.includes("angle")) {
    return "孩子练习角度计算与几何推理。";
  }
  if (description.includes("inequality") || description.includes("inequalities")) {
    return "孩子练习不等式的图示与求解。";
  }
  if (description.includes("linear") || description.includes("coordinate")) {
    return "孩子练习直线方程与坐标几何。";
  }
  if (description.includes("algebra") || description.includes("equation")) {
    return "孩子练习代数运算与方程求解。";
  }
  if (description.includes("fraction") || description.includes("decimal")) {
    return "孩子练习分数与小数的运算。";
  }
  if (description.includes("ratio") || description.includes("proportion")) {
    return "孩子练习比例与百分比计算。";
  }
  if (description.includes("geometry") || description.includes("area") || description.includes("perimeter")) {
    return "孩子练习图形的面积与周长。";
  }
  if (description.includes("statistic") || description.includes("data") || description.includes("mean")) {
    return "孩子练习统计图表与数据分析。";
  }
  if (description.includes("number") || description.includes("整数") || description.includes("whole")) {
    return "孩子练习整数运算与数感。";
  }
  
  return "孩子练习本周数学重点。";
}

function getShortErrorFocus(errorFocus: string | null): string | null {
  if (!errorFocus) return null;
  
  // Map common error patterns to short Chinese phrases
  const focus = errorFocus.toLowerCase();
  
  if (focus.includes("supplementary") && focus.includes("vertically opposite")) {
    return "对顶角不是互补角";
  }
  if (focus.includes("180°") && focus.includes("point")) {
    return "周角是360°不是180°";
  }
  if (focus.includes("open") && focus.includes("closed")) {
    return "空心实心圆点的区别";
  }
  if (focus.includes("intercept") || focus.includes("gradient")) {
    return "截距与斜率的混淆";
  }
  if (focus.includes("sign") && focus.includes("inequality")) {
    return "不等号方向的变化";
  }
  
  // Only return mapped 简体 phrases, never English
  return null;
}

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
  
  // Speaking recording state
  const [recording, setRecording] = useState<Record<string, boolean>>({});
  const [recordedBlob, setRecordedBlob] = useState<Record<string, Blob | null>>({});
  const [recordingTime, setRecordingTime] = useState<Record<string, number>>({});
  const [evaluating, setEvaluating] = useState<Record<string, boolean>>({});
  const [speakingEval, setSpeakingEval] = useState<Record<string, any>>({});
  const [speakingAttempts, setSpeakingAttempts] = useState<Record<string, any[]>>({});
  const mediaRecorderRef = useRef<Record<string, MediaRecorder | null>>({});
  const audioChunksRef = useRef<Record<string, Blob[]>>({});
  const timerIntervalRef = useRef<Record<string, NodeJS.Timeout | null>>({});
  
  // Writing feedback state
  const [writingFeedback, setWritingFeedback] = useState<Record<string, any>>({});
  const [gettingFeedback, setGettingFeedback] = useState<Record<string, boolean>>({});
  const [previousWritingFocus, setPreviousWritingFocus] = useState<Record<string, string>>({});

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

  // Speaking recording handlers
  const startRecording = async (questionId: string, maxDuration: number) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      
      mediaRecorderRef.current[questionId] = mediaRecorder;
      audioChunksRef.current[questionId] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current[questionId].push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current[questionId], { type: "audio/webm" });
        setRecordedBlob((prev) => ({ ...prev, [questionId]: blob }));
        stream.getTracks().forEach((track) => track.stop());
        if (timerIntervalRef.current[questionId]) {
          clearInterval(timerIntervalRef.current[questionId]!);
        }
      };
      
      mediaRecorder.start();
      setRecording((prev) => ({ ...prev, [questionId]: true }));
      setRecordingTime((prev) => ({ ...prev, [questionId]: 0 }));
      
      // Start timer
      timerIntervalRef.current[questionId] = setInterval(() => {
        setRecordingTime((prev) => {
          const newTime = (prev[questionId] || 0) + 1;
          if (newTime >= maxDuration) {
            stopRecording(questionId);
            return { ...prev, [questionId]: maxDuration };
          }
          return { ...prev, [questionId]: newTime };
        });
      }, 1000);
    } catch (err: any) {
      console.error("Recording failed:", err);
      alert("无法访问麦克风。WeChat 中请使用「上传录音」功能。");
    }
  };
  
  const stopRecording = (questionId: string) => {
    const recorder = mediaRecorderRef.current[questionId];
    if (recorder && recorder.state === "recording") {
      recorder.stop();
      setRecording((prev) => ({ ...prev, [questionId]: false }));
    }
    if (timerIntervalRef.current[questionId]) {
      clearInterval(timerIntervalRef.current[questionId]!);
    }
  };
  
  const submitSpeaking = async (questionId: string, level: string) => {
    const blob = recordedBlob[questionId];
    if (!blob) return;
    
    setEvaluating((prev) => ({ ...prev, [questionId]: true }));
    setError("");
    
    try {
      const formData = new FormData();
      formData.append("audio", blob, "recording.webm");
      formData.append("questionId", questionId);
      formData.append("durationSec", String(recordingTime[questionId] || 0));
      formData.append("level", level);
      
      const res = await fetch("/api/speaking/evaluate", {
        method: "POST",
        body: formData,
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || data.error || "评估失败");
      }
      
      setSpeakingEval((prev) => ({ ...prev, [questionId]: data.evaluation }));
      
      // Fetch updated attempts
      const attemptsRes = await fetch(`/api/speaking/attempts?questionId=${questionId}`);
      const attemptsData = await attemptsRes.json();
      if (attemptsData.success) {
        setSpeakingAttempts((prev) => ({ ...prev, [questionId]: attemptsData.attempts }));
      }
      
      // Mark as completed
      handleSpeakingComplete(questionId);
    } catch (err: any) {
      setError(err.message || "评估失败，请重试");
    } finally {
      setEvaluating((prev) => ({ ...prev, [questionId]: false }));
    }
  };
  
  const getWritingFeedback = async (questionId: string) => {
    const text = answers[questionId];
    if (!text || !text.trim()) {
      alert("请先输入写作内容");
      return;
    }
    
    setGettingFeedback((prev) => ({ ...prev, [questionId]: true }));
    setError("");
    
    try {
      const res = await fetch("/api/writing/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId, text }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || data.error || "批改失败");
      }
      
      setWritingFeedback((prev) => ({ ...prev, [questionId]: data.feedback }));
    } catch (err: any) {
      setError(err.message || "批改失败，请重试");
    } finally {
      setGettingFeedback((prev) => ({ ...prev, [questionId]: false }));
    }
  };
  
  // Load speaking attempts on mount
  useEffect(() => {
    questions.forEach(async (q) => {
      if (q.type === "speaking") {
        try {
          const res = await fetch(`/api/speaking/attempts?questionId=${q.id}`);
          const data = await res.json();
          if (data.success && data.attempts.length > 0) {
            setSpeakingAttempts((prev) => ({ ...prev, [q.id]: data.attempts }));
            const lastAttempt = data.attempts[data.attempts.length - 1];
            setSpeakingEval((prev) => ({ 
              ...prev, 
              [q.id]: {
                scores: lastAttempt.scores,
                feedback: lastAttempt.feedback,
              }
            }));
          }
        } catch (err) {
          console.error("Failed to load speaking attempts:", err);
        }
      }
      
      if (q.type === "writing") {
        // Fetch previous writing feedback to show the 改善焦点
        try {
          const res = await fetch(`/api/writing/previous?questionId=${q.id}`);
          const data = await res.json();
          if (data.success && data.previousFocus) {
            setPreviousWritingFocus((prev) => ({ ...prev, [q.id]: data.previousFocus }));
          }
        } catch (err) {
          console.error("Failed to load previous writing focus:", err);
        }
      }
    });
  }, [questions]);

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

      {/* BoardWeike - first content block */}
      <div className="mb-8 space-y-4">
        <div className="bg-card border border-line rounded-xl p-5">
          <p className="text-sm text-ink-2 mb-3">
            先看这两个句子，跟读正确的一句，再做本周卷
          </p>
          <BoardWeike 
            level={week.level} 
            weekNumber={week.weekNumber}
            planTitle={week.title}
            planFirstLine={week.errorFocus || week.parentBrief?.split('。')[0] || week.parentBrief?.split('.')[0] || ""}
          />
        </div>
      </div>

      {/* Lesson content: Parent brief + Video + How to use */}
      {(week.parentBrief || week.videoUrl || (week.officialClipId && week.officialClipCredit)) && (
        <div className="mb-8 space-y-4">
          {/* Parent brief card */}
          {week.parentBrief && (
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-5">
              <h2 className="font-serif font-semibold text-lg text-ink mb-2">
                📌 {(week.level === "MATH" || week.level === "SMATH") ? "本周家长说明" : "本周纠错焦点"}
              </h2>
              
              {/* MATH/SMATH: Show concise card instead of full dump */}
              {(week.level === "MATH" || week.level === "SMATH") ? (
                <div className="text-sm text-ink-2 leading-relaxed space-y-1">
                  <p className="font-semibold">{week.title}</p>
                  <p>{getShortPracticeDescription(week)}</p>
                  {getShortErrorFocus(week.errorFocus) && (
                    <p><span className="font-semibold">盯住：</span>{getShortErrorFocus(week.errorFocus)}</p>
                  )}
                  <p className="text-muted text-xs mt-2">官方卷型与大纲在下方「本周题目」。</p>
                </div>
              ) : (
                /* A2/B1/SEC: Keep existing behavior */
                <>
                  {week.errorFocus && (
                    <div className="mb-2">
                      <span className="text-sm font-normal text-accent px-2 py-1 bg-accent/20 rounded-full">
                        {week.errorFocus}
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-ink-2 leading-relaxed whitespace-pre-wrap">
                    {week.parentBrief}
                  </p>
                </>
              )}
            </div>
          )}

          {/* Official YouTube clip (when configured via seed) */}
          {week.officialClipId && week.officialClipCredit && (
            <OfficialClip 
              videoId={week.officialClipId}
              credit={week.officialClipCredit}
            />
          )}

          {/* Video player (if exists) */}
          {week.videoUrl && (
            <div className="bg-card border border-line rounded-xl p-5">
              <h3 className="font-semibold text-ink mb-3">🎬 播放本周微课 / Watch this week's micro-lesson</h3>
              <video
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="auto"
                className="w-full rounded-lg bg-paper-2"
                style={{ maxHeight: '480px' }}
              >
                <source src={week.videoUrl} type="video/mp4" />
                Your browser does not support the video element.
              </video>
              <p className="mt-2 text-sm text-ink-2">
                先看动画（无声自动播放）。要点右下角开声音。
              </p>
              <div className="mt-3 text-sm text-ink-2 space-y-1">
                <p className="font-semibold">💡 如何看微课 / How to use:</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>先看微课，了解本周重点错误 / Watch the video first</li>
                  <li>再做下方题目（阅读、语法、写作、听力、口语）/ Then complete the homework below</li>
                  <li>口语和写作 AI 会盯住同一个焦点 / Speaking & writing AI will focus on the same error</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Dual-validation map for A2 Week 0 */}
      {week.level === "A2" && week.weekNumber === 0 && <DualValidationMap />}

      {/* Dual-validation map for A2 Week 1 */}
      {week.level === "A2" && week.weekNumber === 1 && <DualValidationMapWeek1 />}

      {/* Dual-validation map for A2 Week 2 */}
      {week.level === "A2" && week.weekNumber === 2 && <DualValidationMapWeek2 />}

      {/* Dual-validation map for A2 Week 3 */}
      {week.level === "A2" && week.weekNumber === 3 && <DualValidationMapWeek3 />}

      {/* Dual-validation map for A2 Week 4 */}
      {week.level === "A2" && week.weekNumber === 4 && <DualValidationMapWeek4 />}

      {/* Dual-validation map for A2 Week 5 */}
      {week.level === "A2" && week.weekNumber === 5 && <DualValidationMapWeek5 />}

      {/* Dual-validation map for A2 Week 6 */}
      {week.level === "A2" && week.weekNumber === 6 && <DualValidationMapWeek6 />}

      {/* Dual-validation map for A2 Week 7 */}
      {week.level === "A2" && week.weekNumber === 7 && <DualValidationMapWeek7 />}

      {/* Dual-validation map for A2 Week 8 */}
      {week.level === "A2" && week.weekNumber === 8 && <DualValidationMapWeek8 />}

      {/* Dual-validation map for A2 Week 9 */}
      {week.level === "A2" && week.weekNumber === 9 && <DualValidationMapWeek9 />}

      {/* Dual-validation map for A2 Week 10 */}
      {week.level === "A2" && week.weekNumber === 10 && <DualValidationMapWeek10 />}

      {/* Dual-validation map for A2 Week 11 */}
      {week.level === "A2" && week.weekNumber === 11 && <DualValidationMapWeek11 />}

      {/* Dual-validation map for B1 Week 0 */}
      {week.level === "B1" && week.weekNumber === 0 && <DualValidationMapB1Week0 />}

      {/* Dual-validation map for B1 Week 1 */}
      {week.level === "B1" && week.weekNumber === 1 && <DualValidationMapB1Week1 />}

      {/* Dual-validation map for B1 Week 2 */}
      {week.level === "B1" && week.weekNumber === 2 && <DualValidationMapB1Week2 />}

      {/* Dual-validation map for B1 Week 3 */}
      {week.level === "B1" && week.weekNumber === 3 && <DualValidationMapB1Week3 />}

      {/* Dual-validation map for B1 Week 4 */}
      {week.level === "B1" && week.weekNumber === 4 && <DualValidationMapB1Week4 />}

      {/* Dual-validation map for B1 Week 5 */}
      {week.level === "B1" && week.weekNumber === 5 && <DualValidationMapB1Week5 />}

      {/* Dual-validation map for B1 Week 6 */}
      {week.level === "B1" && week.weekNumber === 6 && <DualValidationMapB1Week6 />}

      {/* Dual-validation map for B1 Week 7 */}
      {week.level === "B1" && week.weekNumber === 7 && <DualValidationMapB1Week7 />}

      {/* Dual-validation map for B1 Week 8 */}
      {week.level === "B1" && week.weekNumber === 8 && <DualValidationMapB1Week8 />}

      {/* Dual-validation map for B1 Week 9 */}
      {week.level === "B1" && week.weekNumber === 9 && <DualValidationMapB1Week9 />}

      {/* Dual-validation map for B1 Week 10 */}
      {week.level === "B1" && week.weekNumber === 10 && <DualValidationMapB1Week10 />}

      {/* Dual-validation map for B1 Week 11 */}
      {week.level === "B1" && week.weekNumber === 11 && <DualValidationMapB1Week11 />}

      {/* Dual-validation map for MATH Week 0 */}
      {week.level === "MATH" && week.weekNumber === 0 && <DualValidationMapMath />}

      {/* Dual-validation map for MATH Week 1 */}
      {week.level === "MATH" && week.weekNumber === 1 && <DualValidationMapMathWeek1 />}

      {/* Dual-validation map for MATH Week 2 */}
      {week.level === "MATH" && week.weekNumber === 2 && <DualValidationMapMathWeek2 />}

      {/* Dual-validation map for MATH Week 3 */}
      {week.level === "MATH" && week.weekNumber === 3 && <DualValidationMapMathWeek3 />}

      {/* Dual-validation map for MATH Week 4 */}
      {week.level === "MATH" && week.weekNumber === 4 && <DualValidationMapMathWeek4 />}

      {/* Dual-validation map for MATH Week 5 */}
      {week.level === "MATH" && week.weekNumber === 5 && <DualValidationMapMathWeek5 />}

      {/* Dual-validation map for MATH Week 6 */}
      {week.level === "MATH" && week.weekNumber === 6 && <DualValidationMapMathWeek6 />}

      {/* Dual-validation map for MATH Week 7 */}
      {week.level === "MATH" && week.weekNumber === 7 && <DualValidationMapMathWeek7 />}

      {/* Dual-validation map for MATH Week 8 */}
      {week.level === "MATH" && week.weekNumber === 8 && <DualValidationMapMathWeek8 />}

      {/* Dual-validation map for MATH Week 9 */}
      {week.level === "MATH" && week.weekNumber === 9 && <DualValidationMapMathWeek9 />}

      {/* Dual-validation map for MATH Week 10 */}
      {week.level === "MATH" && week.weekNumber === 10 && <DualValidationMapMathWeek10 />}

      {/* Dual-validation map for MATH Week 11 */}
      {week.level === "MATH" && week.weekNumber === 11 && <DualValidationMapMathWeek11 />}

      {/* Dual-validation map for MATH Week 12 */}
      {week.level === "MATH" && week.weekNumber === 12 && <DualValidationMapMathWeek12 />}

      {/* Dual-validation map for MATH Week 13 */}
      {week.level === "MATH" && week.weekNumber === 13 && <DualValidationMapMathWeek13 />}

      {/* Dual-validation map for MATH Week 14 */}
      {week.level === "MATH" && week.weekNumber === 14 && <DualValidationMapMathWeek14 />}

      {/* Dual-validation map for MATH Week 15 */}
      {week.level === "MATH" && week.weekNumber === 15 && <DualValidationMapMathWeek15 />}

      {/* Dual-validation map for MATH Week 16 */}
      {week.level === "MATH" && week.weekNumber === 16 && <DualValidationMapMathWeek16 />}

      {/* Dual-validation map for MATH Week 17 */}
      {week.level === "MATH" && week.weekNumber === 17 && <DualValidationMapMathWeek17 />}

      {/* Dual-validation map for MATH Week 18 */}
      {week.level === "MATH" && week.weekNumber === 18 && <DualValidationMapMathWeek18 />}

      {/* Dual-validation map for MATH Week 19 */}
      {week.level === "MATH" && week.weekNumber === 19 && <DualValidationMapMathWeek19 />}

      {/* Dual-validation map for MATH Week 20 */}
      {week.level === "MATH" && week.weekNumber === 20 && <DualValidationMapMathWeek20 />}

      {/* Dual-validation map for MATH Week 21 */}
      {week.level === "MATH" && week.weekNumber === 21 && <DualValidationMapMathWeek21 />}

      {/* Dual-validation map for MATH Week 22 */}
      {week.level === "MATH" && week.weekNumber === 22 && <DualValidationMapMathWeek22 />}

      {/* Dual-validation map for MATH Week 23 */}
      {week.level === "MATH" && week.weekNumber === 23 && <DualValidationMapMathWeek23 />}

      {/* Dual-validation map for MATH Week 24 */}
      {week.level === "MATH" && week.weekNumber === 24 && <DualValidationMapMathWeek24 />}

      {/* Dual-validation map for MATH Week 25 */}
      {week.level === "MATH" && week.weekNumber === 25 && <DualValidationMapMathWeek25 />}

      {/* Dual-validation map for MATH Week 26 */}
      {week.level === "MATH" && week.weekNumber === 26 && <DualValidationMapMathWeek26 />}
      {week.level === "MATH" && week.weekNumber === 27 && <DualValidationMapMathWeek27 />}
      {week.level === "MATH" && week.weekNumber === 28 && <DualValidationMapMathWeek28 />}
      {week.level === "MATH" && week.weekNumber === 29 && <DualValidationMapMathWeek29 />}

      {/* Dual-validation map for SEC Week 0 */}
      {week.level === "SEC" && week.weekNumber === 0 && <DualValidationMapSecWeek0 />}

      {/* Dual-validation map for SEC Week 1 */}
      {week.level === "SEC" && week.weekNumber === 1 && <DualValidationMapSecWeek1 />}

      {/* Dual-validation map for SEC Week 2 */}
      {week.level === "SEC" && week.weekNumber === 2 && <DualValidationMapSecWeek2 />}

      {/* Dual-validation map for SEC Week 3 */}
      {week.level === "SEC" && week.weekNumber === 3 && <DualValidationMapSecWeek3 />}

      {/* Dual-validation map for SEC Week 4 */}
      {week.level === "SEC" && week.weekNumber === 4 && <DualValidationMapSecWeek4 />}

      {/* Dual-validation map for SEC Week 5 */}
      {week.level === "SEC" && week.weekNumber === 5 && <DualValidationMapSecWeek5 />}

      {/* Dual-validation map for SEC Week 6 */}
      {week.level === "SEC" && week.weekNumber === 6 && <DualValidationMapSecWeek6 />}

      {/* Dual-validation map for SEC Week 7 */}
      {week.level === "SEC" && week.weekNumber === 7 && <DualValidationMapSecWeek7 />}

      {/* Dual-validation map for SEC Week 8 */}
      {week.level === "SEC" && week.weekNumber === 8 && <DualValidationMapSecWeek8 />}

      {/* Dual-validation map for SEC Week 9 */}
      {week.level === "SEC" && week.weekNumber === 9 && <DualValidationMapSecWeek9 />}

      {/* Dual-validation map for SEC Week 10 */}
      {week.level === "SEC" && week.weekNumber === 10 && <DualValidationMapSecWeek10 />}

      {/* Dual-validation map for SEC Week 11 */}
      {week.level === "SEC" && week.weekNumber === 11 && <DualValidationMapSecWeek11 />}

      {/* Dual-validation map for SMATH Week 0 */}
      {week.level === "SMATH" && week.weekNumber === 0 && <DualValidationMapSmathWeek0 />}

      {/* Dual-validation map for SMATH Week 1 */}
      {week.level === "SMATH" && week.weekNumber === 1 && <DualValidationMapSmathWeek1 />}

      {/* Dual-validation map for SMATH Week 2 */}
      {week.level === "SMATH" && week.weekNumber === 2 && <DualValidationMapSmathWeek2 />}

      {/* Dual-validation map for SMATH Week 3 */}
      {week.level === "SMATH" && week.weekNumber === 3 && <DualValidationMapSmathWeek3 />}

      {/* Dual-validation map for SMATH Week 4 */}
      {week.level === "SMATH" && week.weekNumber === 4 && <DualValidationMapSmathWeek4 />}

      {/* Dual-validation map for SMATH Week 5 */}
      {week.level === "SMATH" && week.weekNumber === 5 && <DualValidationMapSmathWeek5 />}

      {/* Dual-validation map for SMATH Week 6 */}
      {week.level === "SMATH" && week.weekNumber === 6 && <DualValidationMapSmathWeek6 />}
      {week.level === "SMATH" && week.weekNumber === 7 && <DualValidationMapSmathWeek7 />}
      {week.level === "SMATH" && week.weekNumber === 8 && <DualValidationMapSmathWeek8 />}
      {week.level === "SMATH" && week.weekNumber === 9 && <DualValidationMapSmathWeek9 />}
      {week.level === "SMATH" && week.weekNumber === 10 && <DualValidationMapSmathWeek10 />}
      {week.level === "SMATH" && week.weekNumber === 11 && <DualValidationMapSmathWeek11 />}
      {week.level === "SMATH" && week.weekNumber === 12 && <DualValidationMapSmathWeek12 />}
      {week.level === "SMATH" && week.weekNumber === 13 && <DualValidationMapSmathWeek13 />}
      {week.level === "SMATH" && week.weekNumber === 14 && <DualValidationMapSmathWeek14 />}
      {week.level === "SMATH" && week.weekNumber === 15 && <DualValidationMapSmathWeek15 />}
      {week.level === "SMATH" && week.weekNumber === 16 && <DualValidationMapSmathWeek16 />}
      {week.level === "SMATH" && week.weekNumber === 17 && <DualValidationMapSmathWeek17 />}
      {week.level === "SMATH" && week.weekNumber === 18 && <DualValidationMapSmathWeek18 />}
      {week.level === "SMATH" && week.weekNumber === 19 && <DualValidationMapSmathWeek19 />}
      {week.level === "SMATH" && week.weekNumber === 20 && <DualValidationMapSmathWeek20 />}
      {week.level === "SMATH" && week.weekNumber === 21 && <DualValidationMapSmathWeek21 />}
      {week.level === "SMATH" && week.weekNumber === 22 && <DualValidationMapSmathWeek22 />}
      {week.level === "SMATH" && week.weekNumber === 23 && <DualValidationMapSmathWeek23 />}
      {week.level === "SMATH" && week.weekNumber === 24 && <DualValidationMapSmathWeek24 />}
      {week.level === "SMATH" && week.weekNumber === 25 && <DualValidationMapSmathWeek25 />}
      {week.level === "SMATH" && week.weekNumber === 26 && <DualValidationMapSmathWeek26 />}
      {week.level === "SMATH" && week.weekNumber === 27 && <DualValidationMapSmathWeek27 />}
      {week.level === "SMATH" && week.weekNumber === 28 && <DualValidationMapSmathWeek28 />}
      {week.level === "SMATH" && week.weekNumber === 29 && <DualValidationMapSmathWeek29 />}
      {week.level === "SMATH" && week.weekNumber === 30 && <DualValidationMapSmathWeek30 />}
      {week.level === "SMATH" && week.weekNumber === 31 && <DualValidationMapSmathWeek31 />}
      {week.level === "SMATH" && week.weekNumber === 32 && <DualValidationMapSmathWeek32 />}
      {week.level === "SMATH" && week.weekNumber === 33 && <DualValidationMapSmathWeek33 />}
      {week.level === "SMATH" && week.weekNumber === 34 && <DualValidationMapSmathWeek34 />}
      {week.level === "SMATH" && week.weekNumber === 35 && <DualValidationMapSmathWeek35 />}
      {week.level === "SMATH" && week.weekNumber === 36 && <DualValidationMapSmathWeek36 />}
      {week.level === "SMATH" && week.weekNumber === 37 && <DualValidationMapSmathWeek37 />}
      {week.level === "SMATH" && week.weekNumber === 38 && <DualValidationMapSmathWeek38 />}
      {week.level === "SMATH" && week.weekNumber === 39 && <DualValidationMapSmathWeek39 />}
      {week.level === "SMATH" && week.weekNumber === 40 && <DualValidationMapSmathWeek40 />}
      {week.level === "SMATH" && week.weekNumber === 41 && <DualValidationMapSmathWeek41 />}
      {week.level === "SMATH" && week.weekNumber === 42 && <DualValidationMapSmathWeek42 />}
      {week.level === "SMATH" && week.weekNumber === 43 && <DualValidationMapSmathWeek43 />}
      {week.level === "SMATH" && week.weekNumber === 44 && <DualValidationMapSmathWeek44 />}
      {week.level === "SMATH" && week.weekNumber === 45 && <DualValidationMapSmathWeek45 />}
      {week.level === "SMATH" && week.weekNumber === 46 && <DualValidationMapSmathWeek46 />}
      {week.level === "SMATH" && week.weekNumber === 47 && <DualValidationMapSmathWeek47 />}
      {week.level === "SMATH" && week.weekNumber === 48 && <DualValidationMapSmathWeek48 />}
      {week.level === "SMATH" && week.weekNumber === 49 && <DualValidationMapSmathWeek49 />}
      {week.level === "SMATH" && week.weekNumber === 50 && <DualValidationMapSmathWeek50 />}
      {week.level === "SMATH" && week.weekNumber === 51 && <DualValidationMapSmathWeek51 />}
      {week.level === "SMATH" && week.weekNumber === 52 && <DualValidationMapSmathWeek52 />}
      {week.level === "SMATH" && week.weekNumber === 53 && <DualValidationMapSmathWeek53 />}
      {week.level === "SMATH" && week.weekNumber === 54 && <DualValidationMapSmathWeek54 />}
      {week.level === "SMATH" && week.weekNumber === 55 && <DualValidationMapSmathWeek55 />}
      {week.level === "SMATH" && week.weekNumber === 56 && <DualValidationMapSmathWeek56 />}
      {week.level === "SMATH" && week.weekNumber === 57 && <DualValidationMapSmathWeek57 />}
      {week.level === "SMATH" && week.weekNumber === 58 && <DualValidationMapSmathWeek58 />}
      {week.level === "SMATH" && week.weekNumber === 59 && <DualValidationMapSmathWeek59 />}
      {week.level === "SMATH" && week.weekNumber === 60 && <DualValidationMapSmathWeek60 />}
      {week.level === "SMATH" && week.weekNumber === 61 && <DualValidationMapSmathWeek61 />}
      {week.level === "SMATH" && week.weekNumber === 62 && <DualValidationMapSmathWeek62 />}
      {week.level === "SMATH" && week.weekNumber === 63 && <DualValidationMapSmathWeek63 />}
      {week.level === "SMATH" && week.weekNumber === 64 && <DualValidationMapSmathWeek64 />}
      {week.level === "SMATH" && week.weekNumber === 65 && <DualValidationMapSmathWeek65 />}
      {week.level === "SMATH" && week.weekNumber === 66 && <DualValidationMapSmathWeek66 />}
      {week.level === "SMATH" && week.weekNumber === 67 && <DualValidationMapSmathWeek67 />}
      {week.level === "SMATH" && week.weekNumber === 68 && <DualValidationMapSmathWeek68 />}
      {week.level === "SMATH" && week.weekNumber === 69 && <DualValidationMapSmathWeek69 />}
      {week.level === "SMATH" && week.weekNumber === 70 && <DualValidationMapSmathWeek70 />}
      {week.level === "SMATH" && week.weekNumber === 71 && <DualValidationMapSmathWeek71 />}
      {week.level === "SMATH" && week.weekNumber === 72 && <DualValidationMapSmathWeek72 />}
      {week.level === "SMATH" && week.weekNumber === 73 && <DualValidationMapSmathWeek73 />}
      {week.level === "SMATH" && week.weekNumber === 74 && <DualValidationMapSmathWeek74 />}
      {week.level === "SMATH" && week.weekNumber === 75 && <DualValidationMapSmathWeek75 />}
      {week.level === "SMATH" && week.weekNumber === 76 && <DualValidationMapSmathWeek76 />}
      {week.level === "SMATH" && week.weekNumber === 77 && <DualValidationMapSmathWeek77 />}
      {week.level === "SMATH" && week.weekNumber === 78 && <DualValidationMapSmathWeek78 />}
      {week.level === "SMATH" && week.weekNumber === 79 && <DualValidationMapSmathWeek79 />}
      {week.level === "SMATH" && week.weekNumber === 80 && <DualValidationMapSmathWeek80 />}
      {week.level === "SMATH" && week.weekNumber === 81 && <DualValidationMapSmathWeek81 />}
      {week.level === "SMATH" && week.weekNumber === 82 && <DualValidationMapSmathWeek82 />}
      {week.level === "SMATH" && week.weekNumber === 83 && <DualValidationMapSmathWeek83 />}
      {week.level === "SMATH" && week.weekNumber === 84 && <DualValidationMapSmathWeek84 />}
      {week.level === "SMATH" && week.weekNumber === 85 && <DualValidationMapSmathWeek85 />}
      
      {/* SMATH Diagrams */}
      {week.level === "SMATH" && (week.weekNumber === 44 || week.weekNumber === 70 || week.weekNumber === 71 || week.weekNumber === 72 || week.weekNumber === 75 || week.weekNumber === 76 || week.weekNumber === 77 || week.weekNumber === 78 || week.weekNumber === 79 || week.weekNumber === 80 || week.weekNumber === 81 || week.weekNumber === 82 || week.weekNumber === 83 || week.weekNumber === 84 || week.weekNumber === 85 || week.weekNumber === 86) && (
        <SmathFigure weekNumber={week.weekNumber} />
      )}
      
      <div className="space-y-8">
        {questions.map((question, idx) => (
          <div
            key={question.id}
            id={question.id}
            className="bg-card border border-line rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-serif font-semibold text-xl text-ink">
                {idx + 1}.{" "}
                {(week.level === "MATH" || week.level === "SMATH")
                  ? (question.type === "reading"
                    ? "应用题 / Word Problems"
                    : question.type === "grammar"
                    ? "选择题 / Multiple Choice"
                    : question.type === "writing"
                    ? "应用题（写算式）/ Show Your Working"
                    : question.type === "listening"
                    ? (question.audioUrl ? "听力 / Listening" : "听读 / Reading")
                    : "口语 / Speaking")
                  : (question.type === "reading"
                    ? "阅读理解 / Reading"
                    : question.type === "grammar"
                    ? "语法 / Use of English"
                    : question.type === "writing"
                    ? "写作 / Writing"
                    : question.type === "listening"
                    ? (question.audioUrl ? "听力 / Listening" : "听读 / Reading")
                    : "口语 / Speaking")}
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

            {question.type === "listening" && !question.audioUrl && (
              <div className="mb-6 bg-paper border border-line rounded-lg p-4">
                <p className="text-sm font-semibold text-ink mb-3">听读课文 / Reading Text</p>
                <div className="whitespace-pre-wrap text-sm text-ink-2">
                  {question.content}
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
                  const showCorrectAndRight =
                    isCompleted && correctAnswer && userAnswer === correctAnswer;
                  
                  const choiceWhyData = question.choiceWhy 
                    ? JSON.parse(question.choiceWhy)?.[i] 
                    : null;

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
                        <div className="mt-3 space-y-2">
                          <p className="text-xs text-accent">
                            正确答案：{correctAnswer}
                          </p>
                          {choiceWhyData && choiceWhyData[userAnswer] && (
                            <p className="text-xs text-ink-2 bg-paper-2 rounded px-3 py-2">
                              {choiceWhyData[userAnswer]}
                            </p>
                          )}
                        </div>
                      )}
                      {showCorrectAndRight && choiceWhyData && choiceWhyData[correctAnswer] && (
                        <p className="text-xs text-muted mt-2">
                          {choiceWhyData[correctAnswer]}
                        </p>
                      )}
                    </div>
                  );
                })}
                {isCompleted && question.correctAnswer && (() => {
                  const userAnswers = Array.isArray(answers[question.id]) 
                    ? answers[question.id] 
                    : Object.values(answers[question.id] || {});
                  const correctAnswers = question.correctAnswer.split(",");
                  const hasWrongAnswer = userAnswers.some((ans: string, idx: number) => 
                    ans !== correctAnswers[idx]
                  );
                  const siblingQuestion = hasWrongAnswer 
                    ? questions.find(q => 
                        q.id !== question.id && 
                        q.type === question.type && 
                        q.options
                      )
                    : null;
                  
                  return siblingQuestion && (
                    <button
                      onClick={() => {
                        const element = document.getElementById(siblingQuestion.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }}
                      className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 font-semibold rounded-full hover:bg-accent/20 transition-colors text-sm"
                    >
                      🔄 再练一道
                    </button>
                  );
                })()}
              </div>
            )}

            {question.type === "writing" && (
              <div className="space-y-4">
                {/* Show previous focus if exists */}
                {previousWritingFocus[question.id] && !isCompleted && (
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                    <p className="text-sm font-semibold text-ink mb-1">📌 本次练习焦点：</p>
                    <p className="text-sm text-ink-2">{previousWritingFocus[question.id]}</p>
                  </div>
                )}
                
                {/* How to practice guide */}
                {!isCompleted && !writingFeedback[question.id] && week.level !== "MATH" && week.level !== "SMATH" && week.level !== "SMATH" && (
                  <div className="bg-paper border border-line rounded-lg p-3">
                    <p className="text-sm font-semibold text-ink mb-2">💡 如何练习 / How to practice:</p>
                    <ol className="text-sm text-ink-2 space-y-1 list-decimal list-inside">
                      <li>输入你的写作内容 / Write your answer</li>
                      <li>点击"提交写作"获取 AI 反馈 / Tap submit to get AI feedback</li>
                      <li>阅读改善焦点 / Read the improvement focus</li>
                      <li>点击"再写一次"继续练习 / Tap rewrite to practice again</li>
                    </ol>
                  </div>
                )}
                
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
                <div className="flex justify-between items-center gap-3">
                  <div className="flex flex-col gap-2 flex-1">
                    {!isCompleted && week.level !== "MATH" && week.level !== "SMATH" && (
                      <button
                        onClick={() => getWritingFeedback(question.id)}
                        disabled={gettingFeedback[question.id] || !answers[question.id] || answers[question.id].trim().length <= 10}
                        className="px-5 py-2.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {gettingFeedback[question.id] ? "批改中..." : "📝 提交写作 / Get feedback"}
                      </button>
                    )}
                    {!isCompleted && week.level !== "MATH" && week.level !== "SMATH" && (!answers[question.id] || answers[question.id].trim().length <= 10) && (
                      <p className="text-xs text-muted">
                        请先输入至少 10 个字符，然后点击提交获取改善反馈 / Type at least 10 characters to submit for feedback
                      </p>
                    )}
                  </div>
                  {week.level !== "MATH" && week.level !== "SMATH" && (
                    <p className="text-xs text-muted whitespace-nowrap">
                      字数 / Words: {(answers[question.id] || "").trim().split(/\s+/).filter((w: string) => w.length > 0).length}
                    </p>
                  )}
                </div>
                
                {/* AI Feedback Display */}
                {writingFeedback[question.id] && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 space-y-3 text-sm">
                    <h3 className="font-semibold text-ink text-lg">AI 批改反馈</h3>
                    
                    {writingFeedback[question.id].highlights && (
                      <div>
                        <p className="font-semibold text-ink mb-1">✨ 本次亮点：</p>
                        <ul className="list-disc list-inside space-y-1 text-ink-2">
                          {writingFeedback[question.id].highlights.map((h: string, i: number) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {writingFeedback[question.id].taskCompletion && (
                      <div>
                        <p className="font-semibold text-ink mb-1">✅ 任务完成度：</p>
                        <p className="text-ink-2">{writingFeedback[question.id].taskCompletion}</p>
                      </div>
                    )}
                    
                    {writingFeedback[question.id].grammarOfWeek && (
                      <div>
                        <p className="font-semibold text-ink mb-1">📚 本周语法点：</p>
                        <p className="text-ink-2">{writingFeedback[question.id].grammarOfWeek}</p>
                      </div>
                    )}
                    
                    {writingFeedback[question.id].cohesion && (
                      <div>
                        <p className="font-semibold text-ink mb-1">🔗 连接词和逻辑：</p>
                        <p className="text-ink-2">{writingFeedback[question.id].cohesion}</p>
                      </div>
                    )}
                    
                    {writingFeedback[question.id].wordCount && (
                      <div>
                        <p className="font-semibold text-ink mb-1">📊 字数：</p>
                        <p className="text-ink-2">
                          实际 {writingFeedback[question.id].wordCount.actual} 词 
                          (目标 {writingFeedback[question.id].wordCount.target}) - 
                          {writingFeedback[question.id].wordCount.comment}
                        </p>
                      </div>
                    )}
                    
                    {writingFeedback[question.id].focus && (
                      <div>
                        <p className="font-semibold text-ink mb-1">🎯 改善焦点：</p>
                        <p className="text-ink-2 bg-paper rounded p-2">
                          {writingFeedback[question.id].focus}
                        </p>
                      </div>
                    )}
                    
                    {writingFeedback[question.id].modelParagraph && (
                      <div>
                        <p className="font-semibold text-ink mb-1">📖 示范段落：</p>
                        <p className="text-ink-2 bg-paper rounded p-3 whitespace-pre-wrap italic">
                          {writingFeedback[question.id].modelParagraph}
                        </p>
                      </div>
                    )}
                    
                    {!isCompleted && (
                      <button
                        onClick={() => {
                          setWritingFeedback((prev) => ({ ...prev, [question.id]: null }));
                        }}
                        className="px-4 py-2 bg-paper text-ink border border-line text-sm font-semibold rounded-full hover:bg-paper-2 transition-colors"
                      >
                        🔄 再写一次
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {question.type === "speaking" && (
              <div className="space-y-4">
                {/* Show previous focus if exists */}
                {speakingAttempts[question.id] && speakingAttempts[question.id].length > 0 && !isCompleted && (
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                    <p className="text-sm font-semibold text-ink mb-1">📌 本次练习焦点：</p>
                    <p className="text-sm text-ink-2">
                      {speakingAttempts[question.id][speakingAttempts[question.id].length - 1].feedback?.focus || ""}
                    </p>
                  </div>
                )}
                
                {/* Recording UI */}
                <div className="bg-paper border border-line rounded-lg p-4">
                  <p className="text-sm text-ink-2 mb-3">
                    请点击"开始录音"并按照提示完成口语练习。录音将由AI评估并提供改进建议。
                  </p>
                  
                  {!recording[question.id] && !recordedBlob[question.id] && (
                    <button
                      onClick={() => startRecording(question.id, week.level === "A2" ? 60 : 120)}
                      disabled={isCompleted || evaluating[question.id]}
                      className="px-5 py-2.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50"
                    >
                      🎤 开始录音
                    </button>
                  )}
                  
                  {recording[question.id] && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-warn-ink rounded-full animate-pulse"></div>
                        <span className="text-lg font-semibold text-ink">
                          {Math.floor((recordingTime[question.id] || 0) / 60)}:
                          {String((recordingTime[question.id] || 0) % 60).padStart(2, "0")}
                        </span>
                        <span className="text-sm text-muted">
                          / {week.level === "A2" ? "1:00" : "2:00"}
                        </span>
                      </div>
                      <button
                        onClick={() => stopRecording(question.id)}
                        className="px-5 py-2.5 bg-warn-bg text-warn-ink font-semibold rounded-full hover:opacity-80 transition-opacity"
                      >
                        ⏹ 停止录音
                      </button>
                    </div>
                  )}
                  
                  {recordedBlob[question.id] && !evaluating[question.id] && !speakingEval[question.id] && (
                    <div className="space-y-3">
                      <audio
                        controls
                        src={URL.createObjectURL(recordedBlob[question.id]!)}
                        className="w-full"
                      />
                      <div className="flex gap-3">
                        <button
                          onClick={() => submitSpeaking(question.id, week.level)}
                          className="px-5 py-2.5 bg-accent text-accent-ink font-semibold rounded-full hover:bg-accent-hover transition-colors"
                        >
                          提交评估
                        </button>
                        <button
                          onClick={() => {
                            setRecordedBlob((prev) => ({ ...prev, [question.id]: null }));
                            setRecordingTime((prev) => ({ ...prev, [question.id]: 0 }));
                          }}
                          className="px-5 py-2.5 bg-paper-2 text-ink border border-line font-semibold rounded-full hover:bg-line transition-colors"
                        >
                          重新录音
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {evaluating[question.id] && (
                    <div className="text-center py-4">
                      <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full mx-auto mb-2"></div>
                      <p className="text-sm text-muted">AI 正在评估中...</p>
                    </div>
                  )}
                  
                  {/* Fallback file upload for WeChat */}
                  {!recording[question.id] && !recordedBlob[question.id] && !isCompleted && (
                    <div className="mt-3 pt-3 border-t border-line">
                      <label className="block">
                        <span className="text-sm text-muted mb-2 block">
                          如果录音失败（WeChat环境），可以上传录音文件：
                        </span>
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setRecordedBlob((prev) => ({ ...prev, [question.id]: file }));
                            }
                          }}
                          className="text-sm"
                        />
                      </label>
                    </div>
                  )}
                </div>
                
                {/* AI Feedback Display */}
                {speakingEval[question.id] && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 space-y-4">
                    <h3 className="font-semibold text-ink text-lg">AI 评估结果</h3>
                    
                    {/* Scores */}
                    <div className="space-y-2">
                      {Object.entries(speakingEval[question.id].scores || {}).map(([key, value]: [string, any]) => {
                        const labels: Record<string, string> = {
                          pronunciation: "发音 Pronunciation",
                          fluency: "流利 Fluency",
                          taskAchievement: "任务 Task",
                          vocabularyGrammar: "词汇/语法 Vocab/Grammar",
                        };
                        return (
                          <div key={key} className="flex items-center gap-3">
                            <span className="text-sm font-medium text-ink w-40">{labels[key]}</span>
                            {value === null ? (
                              <span className="text-xs text-muted">发音评估暂不可用</span>
                            ) : (
                              <div className="flex-1 bg-paper-2 rounded-full h-6 overflow-hidden">
                                <div
                                  className="bg-accent h-full flex items-center justify-center text-xs text-accent-ink font-semibold"
                                  style={{ width: `${(value / 5) * 100}%` }}
                                >
                                  {value}/5
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Feedback */}
                    {speakingEval[question.id].feedback && (
                      <div className="space-y-3 text-sm">
                        {speakingEval[question.id].feedback.highlights && (
                          <div>
                            <p className="font-semibold text-ink mb-1">✨ 本次亮点：</p>
                            <ul className="list-disc list-inside space-y-1 text-ink-2">
                              {speakingEval[question.id].feedback.highlights.map((h: string, i: number) => (
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {speakingEval[question.id].feedback.focus && (
                          <div>
                            <p className="font-semibold text-ink mb-1">🎯 改善焦点：</p>
                            <p className="text-ink-2">{speakingEval[question.id].feedback.focus}</p>
                          </div>
                        )}
                        
                        {speakingEval[question.id].feedback.modelSentences && (
                          <div>
                            <p className="font-semibold text-ink mb-1">📖 跟读句子：</p>
                            <ul className="list-decimal list-inside space-y-1 text-ink-2">
                              {speakingEval[question.id].feedback.modelSentences.map((s: string, i: number) => (
                                <li key={i}>{s}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {speakingEval[question.id].feedback.nextSteps && (
                          <div>
                            <p className="font-semibold text-ink mb-1">💡 下次怎么说得更好：</p>
                            <p className="text-ink-2">{speakingEval[question.id].feedback.nextSteps}</p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Re-record button */}
                    {!isCompleted && (
                      <button
                        onClick={() => {
                          setRecordedBlob((prev) => ({ ...prev, [question.id]: null }));
                          setRecordingTime((prev) => ({ ...prev, [question.id]: 0 }));
                          setSpeakingEval((prev) => ({ ...prev, [question.id]: null }));
                        }}
                        className="px-5 py-2.5 bg-paper text-ink border border-line font-semibold rounded-full hover:bg-paper-2 transition-colors"
                      >
                        🔄 再录一次
                      </button>
                    )}
                    
                    {/* Attempt history comparison */}
                    {speakingAttempts[question.id] && speakingAttempts[question.id].length > 1 && (
                      <div className="pt-3 border-t border-line">
                        <p className="text-xs text-muted mb-2">
                          进步对比 ({speakingAttempts[question.id].length} 次尝试)
                        </p>
                        <div className="flex gap-2 text-xs">
                          {speakingAttempts[question.id].slice(-2).map((attempt: any, i: number) => (
                            <div key={i} className="flex-1 bg-paper-2 rounded p-2">
                              <p className="font-semibold text-ink mb-1">
                                {i === 0 ? "上次" : "本次"}
                              </p>
                              {Object.entries(attempt.scores).map(([key, val]: [string, any]) => (
                                val !== null && (
                                  <p key={key} className="text-muted">
                                    {key}: {val}/5
                                  </p>
                                )
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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
