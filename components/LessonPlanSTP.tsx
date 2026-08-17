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
      return [
        "能写出算式并代回检查",
        "能解释每一步的意义"
      ];
    }
    
    if (boardWriting) {
      return [
        `能改正这一句：${fossil?.split('/')[0]?.trim() || '化石错误'}`,
        "能在自己的句子中应用"
      ];
    }
    
    return [
      "能识别化石错误模式",
      "能说出改正后的句子"
    ];
  };

  const getLearnerContext = (): string => {
    if (fossil) {
      return fossil;
    }
    return "";
  };

  const getKeyQuestions = (): string[] => {
    // Use childPrompts only if they're already 简体 or very short English
    if (childPrompts && childPrompts.length >= 2) {
      const firstPrompt = childPrompts[0];
      const secondPrompt = childPrompts[1];
      
      // Check if prompts are short enough (< 50 chars suggests they might be usable)
      if (firstPrompt.length < 50 && secondPrompt.length < 50) {
        return [firstPrompt, secondPrompt];
      }
    }
    
    // Generate 简体 questions
    if (isMath) {
      return [
        "这一步为什么可以这样算？",
        "答案的单位是什么？"
      ];
    }
    
    return [
      "哪一个词错了，为什么？",
      "改正后怎么说？"
    ];
  };

  const getLessonStructure = (): { phase: string; steps: string[] }[] => {
    const structure: { phase: string; steps: string[] }[] = [];
    
    // Standard section names
    const readinessNames = ["课前", "热身"];
    const engagementNames = ["化石", "示范", "跟读"];
    const masteryNames = ["开口", "练习", "收口"];
    
    const readinessSteps = sections
      .filter(s => readinessNames.includes(s.name))
      .map(s => s.name);
    
    const engagementSteps = sections
      .filter(s => engagementNames.includes(s.name))
      .map(s => s.name);
    
    const masterySteps = sections
      .filter(s => masteryNames.includes(s.name))
      .map(s => s.name);
    
    // If no matches (SMATH plans often differ), map by order
    if (readinessSteps.length === 0 && engagementSteps.length === 0 && masterySteps.length === 0) {
      const totalSteps = sections.length;
      if (totalSteps >= 3) {
        // First step → Readiness
        structure.push({ 
          phase: "准备", 
          steps: [sections[0].name] 
        });
        
        // Middle steps → Engagement
        const middleSteps = sections.slice(1, -1).map(s => s.name);
        if (middleSteps.length > 0) {
          structure.push({ 
            phase: "参与", 
            steps: middleSteps 
          });
        }
        
        // Last step → Mastery
        structure.push({ 
          phase: "掌握", 
          steps: [sections[totalSteps - 1].name] 
        });
      } else if (totalSteps === 2) {
        structure.push({ phase: "准备", steps: [sections[0].name] });
        structure.push({ phase: "掌握", steps: [sections[1].name] });
      } else if (totalSteps === 1) {
        structure.push({ phase: "参与", steps: [sections[0].name] });
      }
    } else {
      // Use matched sections
      if (readinessSteps.length > 0) {
        structure.push({ phase: "准备", steps: readinessSteps });
      }
      if (engagementSteps.length > 0) {
        structure.push({ phase: "参与", steps: engagementSteps });
      }
      if (masterySteps.length > 0) {
        structure.push({ phase: "掌握", steps: masterySteps });
      }
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
    const resources = ["板书例题微课"];
    
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

  const learnerContext = getLearnerContext();
  const lessonStructure = getLessonStructure();

  return (
    <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Learning Objective */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">学习目标</h3>
          <p className="text-sm text-gray-800">{getLearningObjective()}</p>
        </div>

        {/* Success Criteria */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">成功标准</h3>
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
        {learnerContext && (
          <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-sm text-blue-900 mb-2">学习者</h3>
            <p className="text-sm text-gray-800">{learnerContext}</p>
          </div>
        )}

        {/* Key Questions */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">关键问题</h3>
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
        {lessonStructure.length > 0 && (
          <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
            <h3 className="font-semibold text-sm text-blue-900 mb-2">课堂结构</h3>
            <div className="text-sm text-gray-800 space-y-1.5">
              {lessonStructure.map((phaseGroup, i) => (
                <div key={i}>
                  <span className="font-semibold text-blue-700">{phaseGroup.phase}:</span>{" "}
                  <span>{phaseGroup.steps.join(" → ")}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Assessment for Learning */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">检测理解</h3>
          <p className="text-sm text-gray-800">{getAfLMove()}</p>
        </div>

        {/* Teaching Resources */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200 md:col-span-2">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">教学资源</h3>
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
          依据新加坡教学实践框架：课前准备、课堂实施、评估与反馈、积极课堂文化
          {isMath && "｜数学课堂：准备、参与、掌握"}
        </p>
      </div>
    </div>
  );
}
