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
      return `Use ${topic} to solve a word problem.`;
    }
    const grammar = title.split('—')[0].trim();
    return `Use ${grammar} correctly.`;
  };

  const getSuccessCriteria = (): string[] => {
    if (isMath) {
      return [
        "Write a complete equation and check the unit",
        "Explain what each step means"
      ];
    }
    
    return [
      "Spot and fix the high-frequency error",
      "Use the target in their own sentence"
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
    // Standard section names (both English and Chinese for backwards compatibility)
    const readinessNames = ["Prep", "Warm-up", "课前", "热身"];
    const iDoNames = ["High-frequency error", "I do", "Model", "化石", "示范"];
    const weDoNames = ["Echo", "We do", "跟读", "带练"];
    const youDoNames = ["You do", "Speak", "Practice", "开口", "练习"];
    const closureNames = ["Close", "收口"];
    
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
        "Why can we do this step?",
        "What is the unit, and why?"
      ];
    }
    
    return [
      "Which word is wrong, and why?",
      "How should we say it after the fix?"
    ];
  };

  const getAfLMove = (): string => {
    const youDoSection = sections.find(s => 
      s.name === "You do" || s.name === "Speak" || s.name === "Practice" || 
      s.name === "开口" || s.name === "练习"
    );
    if (youDoSection) {
      const notes = youDoSection.teacherNotes;
      if (notes.includes("自己说") || notes.includes("独立") || notes.toLowerCase().includes("independent")) {
        return "Let the child produce independently; observe if they self-correct";
      }
      if (notes.includes("提示") || notes.toLowerCase().includes("prompt") || notes.toLowerCase().includes("cue")) {
        return "Give word prompts but not full sentences to check understanding";
      }
      if (notes.includes("写") || notes.includes("算式") || notes.toLowerCase().includes("write") || notes.toLowerCase().includes("equation")) {
        return "Let the child write the equation; observe if steps are complete";
      }
    }
    
    const fossilSection = sections.find(s => 
      s.name === "High-frequency error" || s.name === "I do" || s.name === "Model" || 
      s.name === "化石" || s.name === "示范"
    );
    if (fossilSection && (fossilSection.teacherNotes.includes("问") || fossilSection.teacherNotes.toLowerCase().includes("ask"))) {
      return "Ask 'Is this correct?' Let the child think before explaining";
    }
    
    return "Check through the You do section if the child can produce independently";
  };

  const getClosureExit = (): string => {
    const closureSection = sections.find(s => s.name === "Close" || s.name === "收口");
    if (!closureSection) {
      if (isMath) {
        return "Child writes the complete equation again";
      }
      return "Child says the corrected sentence again";
    }
    
    const notes = closureSection.teacherNotes;
    if (notes.includes("作业") || notes.toLowerCase().includes("homework")) {
      return "Assign homework; child confirms this week's focus";
    }
    if (notes.includes("总结") || notes.toLowerCase().includes("summary") || notes.toLowerCase().includes("review")) {
      return "Child summarizes what they learned this week";
    }
    
    if (isMath) {
      return "Child writes the complete equation again";
    }
    return "Child says the corrected sentence again";
  };

  const learnerContext = getLearnerContext();
  const teachingSteps = mapSectionsToTeachingSteps();

  return (
    <div className="mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Learning Objective */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">Learning objective</h3>
          <p className="text-sm text-gray-800">{getLearningObjective()}</p>
        </div>

        {/* Success Criteria */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">Success criteria</h3>
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
            <h3 className="font-semibold text-sm text-blue-900 mb-2">Learner</h3>
            <p className="text-sm text-gray-800">{learnerContext}</p>
          </div>
        )}

        {/* Readiness */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">Readiness</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.readiness}:</span>{" "}
            {getReadinessHook()}
          </p>
        </div>

        {/* I Do */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">I do</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.iDo}:</span>{" "}
            Teacher models the board example
          </p>
        </div>

        {/* We Do */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">We do</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.weDo}:</span>{" "}
            {isMath ? "Write the steps together" : "Echo the target sentences"}
          </p>
        </div>

        {/* You Do */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">You do</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.youDo}:</span>{" "}
            {isMath ? "Child writes it" : "Child says it"}
          </p>
        </div>

        {/* Key Questions */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">Key questions</h3>
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
          <h3 className="font-semibold text-sm text-blue-900 mb-2">AfL check</h3>
          <p className="text-sm text-gray-800">{getAfLMove()}</p>
        </div>

        {/* Closure */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">Close</h3>
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-blue-700">{teachingSteps.closure}:</span>{" "}
            {getClosureExit()}
          </p>
        </div>

        {/* Teaching Resources */}
        <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
          <h3 className="font-semibold text-sm text-blue-900 mb-2">Teaching resources</h3>
          <ul className="text-sm text-gray-800 space-y-1">
            <li className="flex items-start gap-1">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>BoardWeike (board mini-lesson)</span>
            </li>
            {boardWriting && (
              <li className="flex items-start gap-1">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Board notes: {boardWriting}</span>
              </li>
            )}
            {sections.some(s => s.teacherNotes.includes("YouTube") || s.teacherNotes.includes("官方")) && (
              <li className="flex items-start gap-1">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Extra YouTube clip</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-blue-200">
        <p className="text-xs text-blue-700">
          STP: lesson preparation, lesson enactment, assessment and feedback, positive classroom culture
        </p>
      </div>
    </div>
  );
}
