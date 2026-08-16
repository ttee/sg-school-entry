export default function DualValidationMapMathWeek17() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照官方大纲 / Mapping to Official Syllabus
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周练习题对应 <strong>MOE 2021 Primary Mathematics Syllabus P1 to P6</strong>（Updated October 2025）中的 <strong>Primary 4</strong> 内容，符合 MOE AEIS 的「<strong>preceding level</strong>」规则：<em>申请 P5 入学的孩子需掌握 P4 数学内容</em>。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周作业题目
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                对应 P4 大纲内容
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                AEIS preceding level 规则
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q1</strong><br />
                Which of these is a mixed number: 2 1/3 or 7/3?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 mixed numbers, improper fractions and their relationship<br />
                • Recognise and identify mixed numbers
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                申请 <strong>P5</strong> 的孩子需理解 <strong>P4</strong> 技能：识别带分数（mixed number has whole number + proper fraction）。2 1/3 是带分数，7/3 是假分数
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q2</strong><br />
                2 1/3 pizzas as improper fraction
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 mixed numbers, improper fractions and their relationship<br />
                • Convert mixed number to improper fraction
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：带分数→假分数。2 1/3 = (2×3+1)/3 = 7/3
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q3</strong><br />
                11/4 kg as mixed number
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 mixed numbers, improper fractions and their relationship<br />
                • Convert improper fraction to mixed number
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：假分数→带分数。11/4 = 11 ÷ 4 = 2 R 3，所以 2 3/4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q4</strong><br />
                17/5 equals 3 2/5?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 mixed numbers, improper fractions and their relationship<br />
                • Recognise equivalent forms
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：识别等值形式。17/5 = 17 ÷ 5 = 3 R 2 = 3 2/5。两种形式表示同一个量
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题 Q5</strong><br />
                3/2 bottles: which statement is correct?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 mixed numbers, improper fractions and their relationship<br />
                • Identify improper fractions (numerator > denominator)
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：识别假分数。3/2 分子 > 分母，所以是假分数（improper fraction）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q6</strong><br />
                1 2/5 to improper
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 conversion: mixed → improper
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：1 2/5 = (1×5+2)/5 = 7/5
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q7</strong><br />
                13/6 to mixed
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 conversion: improper → mixed
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：13/6 = 13 ÷ 6 = 2 R 1，所以 2 1/6
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q8</strong><br />
                3 1/4 to improper
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 conversion: mixed → improper
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：3 1/4 = (3×4+1)/4 = 13/4
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q9</strong><br />
                19/8 to mixed
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 conversion: improper → mixed
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：19/8 = 19 ÷ 8 = 2 R 3，所以 2 3/8
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q10</strong><br />
                Which equals 4 1/3?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 conversion and equivalence
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：4 1/3 = (4×3+1)/3 = 13/3
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q11</strong><br />
                2 5/6 to improper
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 conversion: mixed → improper
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：2 5/6 = (2×6+5)/6 = 17/6
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q12</strong><br />
                23/10 to mixed
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 conversion: improper → mixed
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：23/10 = 23 ÷ 10 = 2 R 3，所以 2 3/10
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>选择题 Q13</strong><br />
                How many improper fractions in: 2 1/4, 5/3, 1 5/8, 9/2?
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions</strong><br />
                • 1.1 identify improper fractions
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                P4 技能：识别假分数（分子 ≥ 分母）。5/3 和 9/2 是假分数，共 2 个
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>应用题（需写 working）</strong><br />
                (a) 3 2/5 boxes → improper<br />
                (b) 17/6 kg → mixed<br />
                (c) 9/4 m: identify form & convert
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Fractions → Comprehensive Application</strong><br />
                • 1.1 mixed numbers and improper fractions: conversion both ways, identifying forms<br />
                • Word problem solving<br />
                • Showing working steps
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                AEIS P4/P5 数学 Part 2 short-answer questions 要求 show working steps。本题练习：(a) 3 2/5 = (3×5+2)/5 = 17/5；(b) 17/6 = 17 ÷ 6 = 2 R 5，所以 2 5/6；(c) 9/4 是假分数（分子 9 > 分母 4），转换成带分数：9 ÷ 4 = 2 R 1，所以 2 1/4 m。要求孩子写出算式、答案、以及识别形式的说明
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方大纲引用：</strong>
          <br />
          • <strong>2021 Primary Mathematics Syllabus P1 to P6 (Updated October 2025)</strong>, Section 6: Primary Mathematics Syllabus, Primary Four (P4)
          <br />
          • Strands covered: <em>Numbers and Algebra</em> (Sub-strand: Fractions)
          <br />
          • Content points: <strong>Fractions → 1. Fractions</strong> 1.1 mixed numbers, improper fractions and their relationship (denominators of given fractions not exceeding 12)
          <br />
          • 官方链接：
          <a
            href="https://www.moe.gov.sg/media/files/primary/2021%20Primary%20Mathematics%20Syllabus%20P1%20to%20P6%20Updated%20October%202025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            MOE 2021 Primary Mathematics Syllabus P1–P6 (Updated Oct 2025)
          </a>
        </p>
        <p className="text-xs text-ink-2 mt-2">
          📝 <strong>AEIS preceding level 规则引用：</strong>
          <br />
          "For AEIS-Primary, your child needs to be familiar with the Mathematics topics taught in our mainstream schools for the level <strong>preceding</strong> the one that they applied for. For example, if your child wishes to seek admission to Primary 5, they should be familiar with Primary 4 content."
          <br />
          • 官方链接：
          <a
            href="https://www.moe.gov.sg/international-students/aeis/test-details"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            MOE AEIS Test Details
          </a>
        </p>
        <p className="text-xs text-muted mt-3 pt-2 border-t border-accent/10">
          所有情境、人名、地点均为虚构。
        </p>
      </div>
    </div>
  );
}
