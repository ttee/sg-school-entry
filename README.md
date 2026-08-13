# 狮城入学 / SG School Entry

A bilingual (简体中文 default) **升学工作室** (education studio) helping Chinese families navigate Singapore MOE government school pathways (primary P2–P5, secondary Sec 1–3) through **CEQ**, **AEIS Mathematics**, and **AEIS English**.

这是给中国家长的升学工作室：帮家庭走通新加坡政府学校路径（小学 P2–P5、中学 Sec 1–3），先过 **CEQ 英语门槛**，再走 **AEIS 数学**与**AEIS 英语**赛道。

**Not affiliated with MOE, SEAB, or Cambridge.** 本站与教育部、考评局、剑桥均无隶属关系。

---

## What this is / 这是什么

A **trust page + homework app** for a small education studio. Not a self-serve US SaaS. Not a student-pass PEI.

**升学工作室模式：**
- **Parent is the customer.** 家长订阅，通过微信或 PayNow 付款，报名以咨询确认为准。
- **Child is the user.** 孩子登录 `/learn` 做每周作业（阅读、语法、写作、听读准备、口语提示）。
- **Small live classes + weekly homework app.** 小班直播课（最多 8 人）+ 每周作业 app。选择题自动批改，写作留给家长或老师查看。
- **Membership gates learning.** 免费试学一周（Week 0）；订阅后解锁全部当前级别周数。

### Learning pathway / 学习路径

The studio guides families through entrance exams **in order**:

1. **CEQ (Cambridge English Qualifications)** — Primary applicants must clear this English gate first (A2 Key for Schools for P2–P4, B1 Preliminary for Schools for P5), dated within 12 months before AEIS/S-AEIS application.
2. **AEIS Mathematics** — Primary and secondary both sit this in Singapore.
3. **AEIS English** — Secondary applicants only (primary use CEQ instead).
4. **After admission: English-medium subjects** — Science, humanities, etc. are **not** AEIS papers. The studio helps with post-admission adaptation, but does not sell these as entrance exam prep.

小学：CEQ → AEIS 数学 → 等派位。  
中学：AEIS 英语 + AEIS 数学 → 等派位。  
录取后：英语授课适应（不作为入学考试售卖）。

---

## Membership & Pricing / 会员与价格

**Two subscription models** (both assumed starting prices, editable, not fake historical data):

### 1. Monthly membership / 月度会员
**S$320 / month**
- Small live classes (2× per week, 1.5 hours each, max 8 students)
- Weekly homework app unlocked for the child's level (A2 or B1)
- Covers CEQ prep: reading, writing, listening-as-text, speaking prompts
- Auto-scored MCQs; writing stored for parent/teacher review
- WeChat progress updates to parents
- Can cancel anytime

### 2. Prepaid 12-week packages / 12 周预付包
CEQ exam-focused sprint courses:
- **A2 Key for Schools:** S$2,480 (typical for P2–P4)
- **B1 Preliminary for Schools:** S$2,880 (typical for P5)
- 12 weeks, 24 sessions (2× per week, 1.5 hours each)
- Includes 2 mock tests + parent WeChat updates
- No refunds

**Payment:** PayNow or WeChat transfer (微信转账). No Stripe. Enrollment confirmed after consultation (报名以咨询确认为准).

**CEQ exam itself** is booked separately at authorized Cambridge centres (not included in course fees).

**Subscription unlocks:** All weeks for the child's level. Unsubscribed users can only access Week 0 (试学周 / sample week).

---

## Tech Stack / 技术栈

- **Next.js 16** (App Router) — Vercel-friendly, mobile-first, fast on WeChat WebView
- **Auth.js** (credentials provider) — email + password, no WeChat OAuth in v1
- **Prisma + SQLite** (local dev) or PostgreSQL (production via `DATABASE_URL`)
- **Tailwind CSS 4** — Matches the existing cream/ink/teal paper look
- **Original homework content** — All homework texts are original studio materials modelled on Cambridge English Qualifications (CEQ) task TYPES at CEFR A2 and B1 levels. They are NOT official Cambridge past papers or sample papers. Content is unique per week, created specifically for this studio's students.

System CJK fonts (no Google Fonts for WeChat compatibility).

---

## Demo Accounts / 试学账号

**Two seed users for testing:**

| Email | Password | Role | Level | Subscribed | Access |
|-------|----------|------|-------|------------|--------|
| `demo@sgschoolentry.local` | `demo1234` | student | A2 | ✅ Yes | All A2 weeks + sample week already submitted |
| `trial@sgschoolentry.local` | `trial1234` | student | A2 | ❌ No | Week 0 (sample) only; other weeks locked with paywall |

**Use these to test:**
- Login at `/learn`
- Dashboard shows weeks, completion status, scores
- Trial user sees the paywall card on locked weeks
- Demo user can submit homework and see auto-scoring

**⚠️ Never present these as "real customers" in marketing or metrics.**

---

## How to Run Locally / 本地运行

### Prerequisites

- Node.js 18+ (or Bun)
- npm or pnpm

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env.example` to `.env` and fill in:

```bash
cp .env.example .env
```

Required variables:
- `DATABASE_URL` — PostgreSQL connection string
  - **Production (Vercel):** `postgresql://user:pass@host:5432/dbname?pgbouncer=true`
  - **Local dev option 1:** Use local PostgreSQL `postgresql://localhost:5432/sgschoolentry`
  - **Local dev option 2 (SQLite):** `file:./dev.db`
    - Change `prisma/schema.prisma` provider to `"sqlite"` and remove `directUrl` line
    - Faster for local testing, but production uses PostgreSQL
- `DIRECT_URL` — (Optional) Direct connection for migrations when using pooled connections
  - For **Supabase/pooled**: Use direct connection URL (port 5432, no `?pgbouncer=true`)
  - If not set, `DATABASE_URL` is used for both queries and migrations
- `AUTH_SECRET` — generate with `openssl rand -base64 32`
- `NEXTAUTH_URL` — defaults to `http://localhost:3000`

### 3. Run migrations and seed data

```bash
npm run db:migrate # Run migrations to create tables
npm run db:seed    # Seed demo users + weeks (idempotent, safe to re-run)
```

Or for local dev with a fresh database:
```bash
npm run db:push    # Quick schema sync (local dev only)
npm run db:seed
```

This creates:
- 2 demo users (demo@ subscribed, trial@ not)
- 8 weeks total: 4 for A2 (Week 0–3), 4 for B1 (Week 0–3)
- Each week has 5 question types: reading, grammar, writing, listening, speaking
- Demo user has Week 0 (sample) already submitted with score

**Seed is idempotent** — re-running is safe and UPDATES existing week content in place. Questions are upserted by `(weekId, order)`, so production content will refresh on every build. This allows homework content to be improved over time without orphaning existing submissions.

### 4. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

- `/` — marketing landing page (parent-facing trust page)
- `/learn` — homework app (child-facing, login required)
- `/login` — login page with demo credentials shown

### 5. Build for production

```bash
npm run build    # Includes prisma db push && seed (auto-runs on Vercel)
npm start
```

---

## File Structure / 文件结构

```
/app
  /api
    /auth/[...nextauth]  — Auth.js handler
    /submission          — Homework submission API
  /learn                 — Homework app (protected)
    /[weekId]            — Week detail + questions
  /(auth)/login          — Login page
  /page.tsx              — Marketing landing (parent-facing)
  /layout.tsx            — Root layout
  /globals.css           — Tailwind + theme

/components
  /SessionProvider.tsx   — Client-side session wrapper
  /WeekHomework.tsx      — Interactive homework UI

/lib
  /auth.ts               — Auth.js config
  /db.ts                 — Prisma client singleton

/prisma
  /schema.prisma         — Database schema (User, Week, Question, Submission)
  /seed.ts               — Seed script

/middleware.ts           — Protect /learn routes

.env                     — Environment variables (gitignored)
.env.example             — Template for required env vars
```

---

## Database Schema / 数据库结构

### User
- `id`, `email`, `password` (hashed), `name`
- `role` (e.g. "student", "parent")
- `level` (A2 or B1)
- `subscribed` (boolean) — gates access to non-sample weeks

### Week
- `id`, `level` (A2/B1), `weekNumber`, `title`, `description`
- `isSample` (boolean) — Week 0 is free for all
- `dueDate` (optional)

### Question
- `id`, `weekId`, `type` (reading, grammar, writing, listening, speaking)
- `order`, `content`, `options` (JSON for MCQs), `correctAnswer`, `points`

### Submission
- `id`, `userId`, `weekId`, `answers` (JSON)
- `score` (auto-calculated for MCQs + speaking/writing completion)
- `completedAt` (null if in progress)

---

## Membership Model in Code / 会员模式实现

**Access control:**
- Unsubscribed (`subscribed: false`): can only access weeks where `isSample: true` (Week 0).
- Subscribed (`subscribed: true`): can access all weeks for their level.
- Paywall card shown on locked weeks: "订阅后解锁 / Unlock with subscription" → links to `/#ceq-course`.

**Scoring:**
- MCQs (reading, grammar, listening): auto-scored against `correctAnswer`.
- Writing: full points if non-empty (manual review by parent/teacher).
- Speaking: full points if user confirms practice completion.
- Total score displayed after submission.

**No fake metrics:**
- Do not show "10,000 students" or invented pass rates.
- Completion counts and streaks are real data from the `Submission` table.

---

## Roadmap / 路线图 (v1 ships CEQ homework; future tracks can be locked)

**v1 (current):**
- ✅ Marketing landing (parent trust page) with membership + prepaid pricing
- ✅ Login + Auth.js credentials
- ✅ CEQ homework weeks (A2 & B1) with reading, grammar, writing, listening, speaking
- ✅ Dashboard showing weeks, progress, scores
- ✅ Paywall for unsubscribed users
- ✅ Auto-scoring for MCQs
- ✅ Demo accounts (subscribed vs trial)

**Future (can be "coming soon / locked" in v1):**
- AEIS Mathematics track (after CEQ → separate weeks or progression gate)
- AEIS English track (for secondary students)
- Post-admission: English-medium subject support (Science, etc.) — **not sold as entrance exam**
- Parent dashboard (view child's progress from parent login)
- WeChat OAuth (requires Open Platform app)
- Stripe (if expanding beyond WeChat/PayNow payment)

---

## Deployment / 部署

### Vercel (recommended)

**Important:** This project was switched from Framework "Other" (static) to **Next.js**. Update your Vercel project settings.

1. Push this repo to GitHub: `ttee/sg-school-entry`
2. Import in Vercel: **Add New → Project → Import** `ttee/sg-school-entry`
3. **Framework Preset:** **Next.js** (must be Next.js, not Other/static)
   - If your project was created with Framework "Other", change it in:
     - **Project Settings → General → Framework Preset → Next.js**
4. **Environment Variables** (required):
   - `DATABASE_URL` — **PostgreSQL connection string** (Vercel Postgres, Neon, Supabase, Railway, etc.)
     - ⚠️ **SQLite is local dev only** — `file:./dev.db` will NOT persist on Vercel
     - Production must use PostgreSQL: `postgresql://user:pass@host:5432/dbname?pgbouncer=true`
     - For **Supabase**: Use the transaction pooler URL with `?pgbouncer=true`
   - `DIRECT_URL` — **(Optional but recommended for pooled connections)**
     - Direct connection URL for migrations (no connection pooler)
     - For **Supabase**: Use the direct connection string (port 5432, no `?pgbouncer=true`)
     - If not set, `DATABASE_URL` will be used for both queries and migrations
   - `AUTH_SECRET` — generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL` — your production domain (e.g. `https://sgschoolentry.com`)
5. Deploy
   - **Schema and seed run automatically** during build (`npm run build` includes `prisma migrate deploy && prisma db seed`)
   - First deploy runs migrations to create tables, then seeds demo users + weeks
   - Migrations are committed to repo under `prisma/migrations/`
   - Seed is idempotent — safe to re-run on subsequent deploys
   - **Safe for existing databases** — migrations only touch our tables (User, Week, Question, Submission), won't affect Supabase Auth or other tables

**Vercel auto-detects Next.js** — no `vercel.json` needed. Just ensure Framework Preset = Next.js.

### Other platforms (Railway, Render, Fly.io, etc.)

- **Framework:** Next.js (not static site)
- **Database:** **PostgreSQL required** (SQLite is local dev only, will not persist in production)
  - Neon, Supabase, Railway Postgres, etc.
  - Set `DATABASE_URL` to your PostgreSQL connection string
- **Build command:** `npm run build` (includes `prisma generate`)
- **Start command:** `npm start`
- **Environment variables:** `DATABASE_URL`, `AUTH_SECRET`, `NEXTAUTH_URL`

After first deploy, run once:
```bash
npx prisma db push    # Create tables
npx prisma db seed    # Seed demo users + weeks
```

---

## Content Accuracy / 内容边界

- **Three exam subjects only:** CEQ, AEIS Mathematics, AEIS English (secondary).
- **CEQ validity:** Within 12 months before AEIS/S-AEIS application. Statement of Results PDF is sufficient.
- **As of August 2026:** 2026 AEIS applications closed; tests scheduled 1–3 September 2026 in Singapore. Defer to [MOE AEIS](https://www.moe.gov.sg/international-students/aeis) for dates.
- **Science is not an AEIS subject.** No "AEIS Science paper" exists. Post-admission adaptation only.
- **MOE does not issue entry permits just to sit AEIS.** AEIS registration is not an ICA pass.
- **Homework content originality:** All reading passages, grammar items, writing tasks, listening scripts, and speaking prompts in the homework app are original studio materials. They are NOT copied from, paraphrased from, or reconstructed from Cambridge Assessment English official papers. They follow CEQ task TYPES and CEFR level descriptors, but all names, situations, and wording are invented for this studio.

对外只强调三门考试。日期、资格、派位规则一律以官网为准。不编造通过率或名额。作业内容全部原创，不抄剑桥真题。

---

## Placeholders to Replace Before Live / 上线前请替换

| Placeholder | Where | Replace with |
|-------------|-------|--------------|
| `your-wechat-id` | Contact section | Real WeChat ID |
| `mailto:hello@example.com` | Contact section | Real email |
| S$320/month, S$2,480, S$2,880 | Membership prices | Confirmed pricing after operational review |

---

## License / 许可

This is a private education studio project. All content is original (not copied from Cambridge past papers).

**Not affiliated with:**
- Ministry of Education (MOE)
- Singapore Examinations and Assessment Board (SEAB)
- Cambridge English

**Does not use:**
- Singapore lion-head national symbol
- MOE, SEAB, or Cambridge logos

---

## Contact / 联系

For consultation on monthly membership or 12-week prepaid packages:

- **WeChat / 微信:** `your-wechat-id`
- **Email / 邮件:** [hello@example.com](mailto:hello@example.com)

报名以咨询确认为准。付款通过 PayNow 或微信转账，无 Stripe。

---

**Built with ❤️ for Chinese families navigating the Singapore government school pathway.**  
**为走新加坡政府学校路径的中国家庭而建。**
