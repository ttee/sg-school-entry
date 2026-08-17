"use client";

type LessonPlanSTPProps = {
  level: string;
  weekNumber: number;
  title: string;
  fossil?: string;
  boardWriting?: string;
  mathExample?: string;
  sections: {
    name: string;
    duration: string;
    teacherNotes: string;
  }[];
  spokenLines?: string[];
  childPrompts?: string[];
};

export default function LessonPlanSTP({
  level,
  weekNumber,
  title,
  fossil,
  boardWriting,
  mathExample,
  sections,
  spokenLines,
  childPrompts,
}: LessonPlanSTPProps) {
  const isMath = level === "MATH" || level === "SMATH";
  
  const getLearningObjective = (): string => {
    if (isMath) {
      const topic = title.split('—')[0].trim();
      return `能运用${topic}解决应用题`;
    }
    const grammar = title.split('—')[0].trim();
    return `能正确使用${grammar}`;
  };

  const getSuccessCriteria = (): string[] => {
    if (isMath && mathExample) {
      const firstExample = mathExample.split('.')[0] || mathExample.substring(0, 50);
      return [
        "I can write the formula and show working",
        `I can solve problems like: ${firstExample}...`
      ];
    }
    
    if (spokenLines && spokenLines.length >= 2) {
      return [
        `I can say: "${spokenLines[0]}"`,
        `I can say: "${spokenLines[1]}"`
      ];
    }
    
    if (boardWriting) {
      return [
        `I can use ${boardWriting} correctly`,
        "I can apply this in my own sentences"
      ];
    }
    
    return [
      "I can recognize the error pattern",
      "I can produce correct sentences"
    ];
  };

  const getLearnerContext = (): string => {
    if (fossil) {
      return `常见化石：${fossil}`;
    }
    return "新加坡学生通过板书例题掌握本周重点";
  };

  const getKeyQuestions = (): string[] => {
    if (childPrompts && childPrompts.length >= 2) {
      return [
        childPrompts[0],
        childPrompts[1]
      ];
    }
    
    if (isMath) {
      return [
        "What formula do we use?",
        "How do we show the working?"
      ];
    }
    
    return [
      "What is wrong with this sentence?",
      "How can we fix it?"
    ];
  };

  const getLessonStructure = (): { phase: string; steps: string[] }[] => {
    const structure: { phase: string; steps: string[] }[] = [];
    
    const readinessSteps = sections
      .filter(s => s.name === "课前" || s.name === "热身")
      .map(s => s.name);
    if (readinessSteps.length > 0) {
      structure.push({ phase: "准备 Readiness", steps: readinessSteps });
    }
    
    const engagementSteps = sections
      .filter(s => s.name === "化石" || s.name === "示范" || s.name === "跟读")
      .map(s => s.name);
    if (engagementSteps.length > 0) {
      structure.push({ phase: "参与 Engagement", steps: engagementSteps });
    }
    
    const masterySteps = sections
      .filter(s => s.name === "开口" || s.name === "练习" || s.name === "收口")
      .map(s => s.name);
    if (masterySteps.length > 0) {
      structure.push({ phase: "掌握 Mastery", steps: masterySteps });
    }
    
    return structure;
  };

  const getAfLMove = (): string => {
    const openingSection = sections.find(s => s.name === "开口" || s.name === "练习");
    if (openingSection) {
      const notes = openingSection.teacherNotes;
      if (notes.includes("自己说") || notes.includes("独立")) {
        return "让孩子独立输出，观察是否能自己纠正";
      }
      if (notes.includes("提示")) {
        return "给词提示但不说完整句子，检测理解程度";
      }
    }
    
    const fossilSection = sections.find(s => s.name === "化石");
    if (fossilSection && fossilSection.teacherNotes.includes("问孩子")) {
      return "问「这个对吗？」等孩子思考后再讲解";
    }
    
    return "通过跟读和开口环节检测学生理解";
  };

  const getTeachingResources = (): string[] => {
    const resources = ["板书例题微课 (BoardWeike)"];
    
    if (boardWriting) {
      resources.push(`板书要点：${boardWriting}`);
    }
    
    const hasVideo = sections.some(s => 
      s.teacherNotes.includes("YouTube") || 
      s.teacherNotes.includes("官方") ||
      s.teacherNotes.includes("视频")
    );
    if (hasVideo) {
      resources.push("官方 YouTube 辅助素材");
    }
    
    return resources;
  };

  return (
    <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-serif font-bold text-xl text-blue-900">
          📋 Singapore Teaching Practice 教案框架
        </h2>
        <span className="text-xs text-blue-600 px-2 py-1 bg-blue-100 rounded-full">
          {level} 第 {weekNumber} 周
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Learning Objective */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">📌 学习目标 Learning Objective</h3>
          <p className="text-sm text-gray-800">{getLearningObjective()}</p>
        </div>

        {/* Success Criteria */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">✅ 成功标准 Success Criteria</h3>
          <ul className="text-sm text-gray-800 space-y-1">
            {getSuccessCriteria().map((criterion, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learner Context */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">👤 学习者 Learner Context</h3>
          <p className="text-sm text-gray-800">{getLearnerContext()}</p>
        </div>

        {/* Key Questions */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">❓ 关键问题 Key Questions</h3>
          <ul className="text-sm text-gray-800 space-y-1">
            {getKeyQuestions().map((question, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-blue-600 mt-0.5">{i + 1}.</span>
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lesson Structure */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">📚 课堂结构 Lesson Structure</h3>
          <div className="text-sm text-gray-800 space-y-1.5">
            {getLessonStructure().map((phaseGroup, i) => (
              <div key={i}>
                <span className="font-semibold text-blue-700">{phaseGroup.phase}:</span>{" "}
                <span>{phaseGroup.steps.join(" → ")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment for Learning */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">🔍 检测理解 Assessment for Learning</h3>
          <p className="text-sm text-gray-800">{getAfLMove()}</p>
        </div>

        {/* Teaching Resources */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200 md:col-span-2">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">🎯 教学资源 Teaching Resources</h3>
          <ul className="text-sm text-gray-800 space-y-1">
            {getTeachingResources().map((resource, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>{resource}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-blue-200">
        <p className="text-xs text-blue-700">
          <strong>框架依据：</strong>Singapore Teaching Practice (STP) — Lesson Preparation, Enactment, Assessment & Feedback, Positive Classroom Culture
          {isMath && " | Maths Readiness-Engagement-Mastery phases"}
        </p>
      </div>
    </div>
  );
}
