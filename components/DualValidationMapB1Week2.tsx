export default function DualValidationMapB1Week2() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        先看官方 gov.sg Real or Fake 影片（街访：识别 AI 生成照片、deepfake 视频、假政府短信，下载 ScamShield），再做作业。本周按 <strong>B1 Preliminary for Schools</strong> 题型来练。故事是<strong>科技日常 / Technology Today</strong>：新加坡青少年学习辨别真假信息、ScamShield app、网络安全习惯。焦点是<strong>第一条件句</strong>（If you see a strange SMS, you should...）和<strong>动名词</strong>（enjoy checking, good at spotting, interested in learning）。
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border border-accent/20 rounded-lg overflow-hidden text-sm bg-card">
          <thead className="bg-accent/5">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                本周作业
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                考试题型
              </th>
              <th className="px-3 py-2.5 text-left font-semibold text-ink border-b border-accent/20">
                孩子练到什么
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>阅读</strong><br />How to Spot Real or Fake 青少年指南 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>长文本阅读</strong><br />一篇长文本，多道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Priya 写的辨别真假指南（阿姨差点被假 SMS 骗，学习识别 AI 照片、deepfake 视频、假政府短信，下载 ScamShield），练读懂细节、推断建议
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：If you see... / enjoy checking / good at spotting
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>语法完形</strong><br />短文，选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练第一条件句（If you see a suspicious message, you should...）和动名词（enjoy checking, good at spotting, interested in learning），一个完整短文完形
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 100-120 词，给朋友讲辨别真假经验
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>邮件写作</strong><br />官方 100 词左右
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲学习辨别真假的经验，用第一条件句（If you see a strange SMS, you should check...）和动名词（I enjoy checking... / I'm good at spotting...），推荐 ScamShield 等工具
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />两个学生讨论学习 app + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力对话</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听 Ethan 和 Priya 讨论 EduQuiz 学习 app 的功能、价格、使用方式，做 5 道三选一题；官方考试听两遍，我们的播放器可重听
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~2 分钟讲怎么识别真假
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>个人陈述</strong><br />2 分钟独白
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲怎么识别 AI 照片、deepfake 视频、假 SMS，用第一条件句（If you see something suspicious, you should...）和动名词（I enjoy checking... / I'm good at spotting...），AI 会盯住条件句和动名词
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方链接：</strong>
          <a
            href="https://www.cambridgeenglish.org/exams-and-tests/preliminary-for-schools/exam-format"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            Cambridge B1 Preliminary for Schools 考试格式
          </a>
          {" · "}
          <a
            href="https://www.moe.gov.sg/primary/curriculum/syllabus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            MOE 小学课程大纲
          </a>
        </p>
      </div>
    </div>
  );
}
