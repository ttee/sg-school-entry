export default function DualValidationMapWeek4() {
  return (
    <div className="mb-8 bg-accent/10 border border-accent/30 rounded-xl p-5">
      <h2 className="font-serif font-semibold text-lg text-ink mb-2">
        本周对照考试题型
      </h2>
      <p className="text-sm text-ink-2 mb-4 leading-relaxed">
        本周按 <strong>A2 Key for Schools</strong> 题型来练。故事是<strong>购物与食物 / Shopping and Food</strong>：Priya 上周六跟妈妈去小印度德卡市场（Tekka Market）买菜，Mei 拿着购物清单去超市。焦点是<strong>可数/不可数名词</strong>（eggs 可数 vs rice 不可数）和<strong>量词</strong>（some/any、much/many、a lot of、How many/How much）。中文量词系统不同，孩子会说 two breads、how many rice、I need some waters。
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
                <strong>阅读</strong><br />Priya 德卡市场购物记 + 选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 3</strong><br />一篇长文本，选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读 Priya 上周六跟妈妈去小印度德卡市场买食材（some vegetables, a lot of potatoes, some spices, any saffron, How much fish, How many bags），做选择题
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>语法</strong><br />完形：some/any, much/many, How many/How much
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Reading Part 4</strong><br />语法选择填空
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                练量词（some money, some things, any oil, many bottles, much rice）和可数/不可数名词（eggs 可数、rice 不可数、milk 不可数），短文完形选择题（16 题全聚焦量词）
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>写作</strong><br />邮件 50–70 词，讲一次购物
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Part 6 guided email</strong><br />官方最低 25 词
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                写邮件给朋友，讲去哪里购物、买了什么（some vegetables, two bottles, a lot of rice）、买多还是买少，练量词和可数/不可数名词
              </td>
            </tr>
            <tr className="border-b border-accent/10">
              <td className="px-3 py-3 text-ink align-top">
                <strong>听力</strong><br />对话：Priya 帮妈妈列购物清单
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>听力对话</strong><br />5 道选择题
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                读对话脚本（Priya 和妈妈列清单：How many eggs? Two dozen. Do we have any milk? Some, but not much.），做 5 道选择题
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 text-ink align-top">
                <strong>口语</strong><br />~1 分钟讲一次购物经历
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                <strong>Speaking Part 1</strong><br />个人信息问答
              </td>
              <td className="px-3 py-3 text-ink-2 align-top">
                讲去哪里购物、买了什么（a lot of vegetables, some fruit, How many bags?），练量词和可数/不可数名词，AI 会盯住 some/any, much/many 的用法
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
