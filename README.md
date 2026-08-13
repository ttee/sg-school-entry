# 狮城入学 / SG School Entry

A bilingual (简体中文 default + English) static landing page for families in mainland China who are looking at **Singapore MOE government schools** (primary P2–P5, secondary Sec 1–3) through **CEQ** and **AEIS / S-AEIS**.

这是给中国家长与学生看的静态说明页：如何走入新加坡教育部政府学校（小学 P2–P5、中学 Sec 1–3），先把 **CEQ**、**AEIS 数学**、**AEIS 英语**三条考试路径说清楚。默认简体中文，可切换 English。不含繁体。

This site is **not** affiliated with MOE, SEAB, or Cambridge English. It does not use the Singapore lion-head symbol or those organisations’ logos.

本站与教育部、考评局、剑桥均无隶属关系，也不使用狮头国家标志或上述机构标识。

---

## What this page is / 这是什么

**EN.** A calm, mobile-first explainer. Primary applicants typically sit CEQ first (A2 Key for Schools for P2–P4, B1 Preliminary for Schools for P5), then AEIS Mathematics in Singapore. Secondary applicants sit AEIS English and AEIS Mathematics; CEQ is not required. Science is **not** an AEIS paper; English-medium Science and other subjects are discussed only after admission. Admission is not guaranteed.

**中文。** 给微信里就能打开的说明页。小学：先考剑桥英语资格考试（CEQ），再赴新加坡考 AEIS 数学。中学：考 AEIS 英语 + AEIS 数学，不要求 CEQ。科学不是 AEIS 科目；英语授课的科学与其他科目，放在录取之后。录取不保证。

No invented pass rates, headcount, testimonials, or partnerships. Official dates and CES cut-offs are **not** hardcoded — the page points at MOE’s checker.

不编造通过率、人数、评价或合作机构。不把 CES 分数线表写进页面，资格以教育部官方查询为准。

---

## How to open locally / 本地打开

There is no build step. Open the HTML file in a browser.

无需构建，用浏览器直接打开即可。

```bash
# from this folder / 在本目录
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Or serve the folder with any static server, for example:

或用任意静态服务器打开本目录，例如：

```bash
npx --yes serve .
python3 -m http.server 4173
```

Then visit `http://localhost:4173` (or the port printed).

Language toggle is stored in `localStorage` key `sgse-lang` (`zh-CN` | `en`). Default is Simplified Chinese.

语言切换记在浏览器 `localStorage` 的 `sgse-lang`。默认简体中文。

The contact form has **no backend**. Submit only reveals a thank-you on the same page.

咨询表单**没有服务器**。提交后只在当前页面显示致谢。

---

## Deploy on Vercel / 部署到 Vercel

1. Push this folder to GitHub as **`ttee/sg-school-entry`** (or import that existing repo).
2. In Vercel: **Add New → Project → Import** `ttee/sg-school-entry`.
3. **Framework Preset:** `Other` (static). Leave build command empty. **Output directory:** empty / root (the `index.html` at the repo root is the site).
4. Deploy. The production URL will serve `index.html` at `/`.

中文步骤：

1. 把本目录推到 GitHub 仓库 **`ttee/sg-school-entry`**（或在 Vercel 里导入该仓库）。
2. Vercel：**Add New → Project → Import** `ttee/sg-school-entry`。
3. **Framework Preset** 选 **Other**（静态站点）。构建命令留空；输出目录留空 / 仓库根目录（根上的 `index.html` 即整站）。
4. 部署后，根路径 `/` 即本页。

No environment variables are required.

不需要环境变量。

---

## CEQ Course Pricing / CEQ 课程价格

The site now includes a paid **CEQ English Course** section with two tracks:

1. **A2 Key for Schools** — S$2,480 (typical for P2–P4)
2. **B1 Preliminary for Schools** — S$2,880 (typical for P5)

These are **assumed starting prices** set for the first revenue offering. They are editable and reflect the intended 12-week, 24-session small-class format (max 8 students), not fake historical data or "from our 10,000 students" claims.

本站现已加入付费 **CEQ 英语冲刺班**，分两条赛道：

1. **A2 Key for Schools** — S$2,480（适用于 P2–P4）
2. **B1 Preliminary for Schools** — S$2,880（适用于 P5）

这是首次收费产品的**假设起步价**，可修改，反映 12 周 24 节小班（最多 8 人）的实际设定，不是编造的历史数据或「来自一万名学员」的虚假宣称。

---

## Placeholders to replace before going live / 上线前请替换

| Placeholder | Where | Replace with |
| --- | --- | --- |
| `your-wechat-id` | Contact section (`<code>your-wechat-id</code>`) | Real WeChat ID |
| `mailto:hello@example.com` | Contact section email link | Real mailbox, e.g. `mailto:you@yourdomain.com` |
| Prices: S$2,480 / S$2,880 | CEQ course section | Confirmed pricing after operational review |

| 占位 | 位置 | 换成 |
| --- | --- | --- |
| `your-wechat-id` | 咨询区微信 | 真实微信号 |
| `mailto:hello@example.com` | 咨询区邮件链接 | 真实邮箱 |
| 价格：S$2,480 / S$2,880 | CEQ 课程区 | 运营确认后的最终价格 |

Optional: set `og:url` / a real favicon if you later add a custom domain.

若绑定正式域名，可再补 `og:url` 与独立 favicon。

---

## Files / 文件

- `index.html` — entire page (CSS in `<style>`, JS in `<script>`). No other assets required.
- `README.md` — this file.

`index.html` 是完整单页，不依赖外部字体、图片或构建工具（系统字体栈，避免国内微信内置浏览器加载 Google Fonts）。

---

## Accuracy notes / 内容边界

- Lead with three exam subjects only: **CEQ**, **AEIS Mathematics**, **AEIS English (secondary)**.
- CEQ for AEIS/S-AEIS application: within **12 months**; Statement of Results PDF is enough.
- As of **August 2026**: 2026 AEIS applications had closed; tests were scheduled **1–3 September 2026** in Singapore. Always defer to [MOE AEIS](https://www.moe.gov.sg/international-students/aeis).
- MOE does not issue entry permits just to sit AEIS. AEIS entry proof is not an ICA pass.

对外只强调三门考试。日期、资格、派位规则一律以官网为准。
