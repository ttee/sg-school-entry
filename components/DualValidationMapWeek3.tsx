export default function DualValidationMapWeek3() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        先看 Family Tree 儿歌（mommy/daddy/grandma/grandpa/aunt/uncle/cousin 在野餐带 apples/grapes/crackers/cheese），再做作业。本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>家庭与朋友 / Family and Friends</strong>：Wei 上周日全家 East Coast Park 野餐，mummy/daddy/grandma/grandpa/aunt/cousin 都去了，每个人带了吃的，Grandpa 讲以前常去 Changi Beach 野餐。焦点是<strong>一般过去时</strong>（yesterday I went, we visited, everyone brought, we had）和 <strong>used to</strong>（We used to picnic every month，不是 use to）。
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
                <strong>阅读</strong><br />Wei 全家 East Coast Park 野餐 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Wei 上周日全家野餐，mummy/daddy/grandma/grandpa/aunt/cousin 每人带食物（apples/grapes/crackers/cheese/cookies），Grandpa 讲以前常去 Changi Beach 野餐，做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：had / brought / used to have
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 4</strong><br />语法选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练过去时不规则动词（had, brought, came, stopped）和 used to（We used to have picnics），短文完形选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 50–70 词，讲过去的家庭野餐
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲家庭野餐，用儿歌的家庭词（mummy/daddy/grandma/grandpa/aunt/uncle/cousin），练过去时（brought/had/played）和 used to
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />对话：Wei 和妈妈计划周日出游
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力对话</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                听 Wei 和妈妈计划去麦里芝水库野餐，邀请小慧，做 5 道选择题；官方考试听两遍，我们的播放器可重听
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟讲过去的家庭野餐
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Speaking Part 1</strong><br />个人信息问答
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲家庭野餐，用儿歌的家庭词（mummy/daddy/grandma/grandpa/aunt/uncle/cousin），练过去时（went/brought/had/played）和 used to，AI 会盯住过去时动词变形
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-accent/20">
        <p className="text-xs text-ink-2 mb-2">
          📚 <strong>官方链接：</strong>
          <a
            href="https://www.cambridgeenglish.org/exams-and-tests/key/exam-format"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline ml-1"
          >
            Cambridge A2 Key for Schools 考试格式
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
