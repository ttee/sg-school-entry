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
    if (isMath) {
      return [
        "能写出完整算式并检查单位",
        "能解释每一步的意义"
      ];
    }
    
    return [
      "能识别并改正化石错误",
      "能在自己的句子中正确使用"
    ];
  };

  const getLearnerContext = (): string => {
    if (fossil) {
      return fossil;
    }
    return "";
  };

  const mapSectionsToTeachingSteps = (): {
    readiness: string;
    iDo: string;
    weDo: string;
    youDo: string;
    closure: string;
  } => {
    // Standard section names
    const readinessNames = ["课前", "热身"];
    const iDoNames = ["化石", "示范"];
    const weDoNames = ["跟读", "带练"];
    const youDoNames = ["开口", "练习"];
    const closureNames = ["收口"];
    
    const readinessSection = sections.find(s => readinessNames.includes(s.name));
    const iDoSection = sections.find(s => iDoNames.includes(s.name));
    const weDoSection = sections.find(s => weDoNames.includes(s.name));
    const youDoSection = sections.find(s => youDoNames.includes(s.name));
    const closureSection = sections.find(s => closureNames.includes(s.name));
    
    // If standard names found, use them
    if (readinessSection || iDoSection || weDoSection || youDoSection || closureSection) {
      return {
        readiness: readinessSection?.name || sections[0]?.name || "",
        iDo: iDoSection?.name || "",
        weDo: weDoSection?.name || "",
        youDo: youDoSection?.name || "",
        closure: closureSection?.name || sections[sections.length - 1]?.name || ""
      };
    }
    
    // If non-standard names (SMATH), map by order
    const totalSteps = sections.length;
    if (totalSteps >= 5) {
      return {
        readiness: sections[0].name,
        iDo: sections[1].name,
        weDo: sections[2].name,
        youDo: sections[totalSteps - 2].name,
        closure: sections[totalSteps - 1].name
      };
    } else if (totalSteps === 4) {
      return {
        readiness: sections[0].name,
        iDo: sections[1].name,
        weDo: sections[2].name,
        youDo: sections[2].name,
        closure: sections[3].name
      };
    } else if (totalSteps === 3) {
      return {
        readiness: sections[0].name,
        iDo: sections[1].name,
        weDo: sections[1].name,
        youDo: sections[1].name,
        closure: sections[2].name
      };
    } else if (totalSteps === 2) {
      return {
        readiness: sections[0].name,
        iDo: sections[0].name,
        weDo: sections[0].name,
        youDo: sections[1].name,
        closure: sections[1].name
      };
    }
    
    return {
      readiness: sections[0]?.name || "",
      iDo: sections[0]?.name || "",
      weDo: sections[0]?.name || "",
      youDo: sections[0]?.name || "",
      closure: sections[0]?.name || ""
    };
  };

  const getReadinessHook = (): string => {
    const firstSection = sections[0];
    if (!firstSection) return "";
    
    const notes = firstSection.teacherNotes;
    // Extract first action/hook (first sentence)
    const firstSentence = notes.split('。')[0] || notes.split('.')[0] || notes.substring(0, 60);
    return firstSentence.length > 60 ? firstSentence.substring(0, 60) + "..." : firstSentence;
  };

  const getKeyQuestions = (): string[] => {
    if (isMath) {
      return [
        "这一步为什么可以这样算？",
        "答案的单位是什么，为什么？"
      ];
    }
    
    return [
      "哪一个词错了，为什么？",
      "改正后应该怎么说？"
    ];
  };

  const getAfLMove = (): string => {
    const youDoSection = sections.find(s => s.name === "开口" || s.name === "练习");
    if (youDoSection) {
      const notes = youDoSection.teacherNotes;
      if (notes.includes("自己说") || notes.includes("独立")) {
        return "让孩子独立输出，观察是否能自己纠正";
      }
      if (notes.includes("提示")) {
        return "给词提示但不说完整句子，检测理解程度";
      }
      if (notes.includes("写") || notes.includes("算式")) {
        return "让孩子自己写算式，观察步骤是否完整";
      }
    }
    
    const fossilSection = sections.find(s => s.name === "化石" || s.name === "示范");
    if (fossilSection && fossilSection.teacherNotes.includes("问")) {
      return "问「这个对吗？」等孩子思考后再讲解";
    }
    
    return "通过开口环节检测学生能否独立产出";
  };

  const getClosureExit = (): string => {
    const closureSection = sections.find(s => s.name === "收口");
    if (!closureSection) {
      if (isMath) {
        return "孩子再写一遍完整算式";
      }
      return "孩子再说一遍改正后的句子";
    }
    
    const notes = closureSection.teacherNotes;
    if (notes.includes("作业")) {
      return "布置作业，孩子确认本周重点";
    }
    if (notes.includes("总结")) {
      return "孩子总结本周学到的内容";
    }
    
    if (isMath) {
      return "孩子再写一遍完整算式";
    }
    return "孩子再说一遍改正后的句子";
  };

  const learnerContext = getLearnerContext();
  const teachingSteps = mapSectionsToTeachingSteps();

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
                <span className="text-blue-600 mt-0.5">✓</span>
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learner Context */}
        {learnerContext && (
          <div className="bg-white/80 rounded-lg p-4 border border-blue-200 md:col-span-2">
            <h3 className="font-semibold text-sm text-blue-900 mb-2">学习者</h3>
            <p className="text-sm text-gray-800">{learnerContext}</p>
          </div>
        )}

        {/* Readiness */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">准备</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.readiness}:</span>{" "}
            {getReadinessHook()}
          </p>
        </div>

        {/* I Do */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">示范 I do</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.iDo}:</span>{" "}
            教师示范板书例题
          </p>
        </div>

        {/* We Do */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">带练 We do</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.weDo}:</span>{" "}
            {isMath ? "一起写算式步骤" : "跟读目标句型"}
          </p>
        </div>

        {/* You Do */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">独立 You do</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.youDo}:</span>{" "}
            {isMath ? "孩子自己写" : "孩子自己说"}
          </p>
        </div>

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

        {/* Assessment for Learning */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">检测理解</h3>
          <p className="text-sm text-gray-800">{getAfLMove()}</p>
        </div>

        {/* Closure */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">收口</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.closure}:</span>{" "}
            {getClosureExit()}
          </p>
        </div>

        {/* Teaching Resources */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">教学资源</h3>
          <ul className="text-sm text-gray-800 space-y-1">
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>板书例题微课</span>
            </li>
            {boardWriting && (
              <li className="flex items-start gap-1">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>板书要点：{boardWriting}</span>
              </li>
            )}
            {sections.some(s => s.teacherNotes.includes("YouTube") || s.teacherNotes.includes("官方")) && (
              <li className="flex items-start gap-1">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>YouTube 辅助素材（额外）</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-blue-200">
        <p className="text-xs text-blue-700">
          依据：课前准备、课堂实施、评估与反馈、积极课堂文化
        </p>
      </div>
    </div>
  );
}
