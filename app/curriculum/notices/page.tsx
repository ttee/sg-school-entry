import Link from "next/link";
import CurriculumNav from "@/components/CurriculumNav";
import { THEMES } from "@/lib/curriculum/storylines";

const SIGNS = [
  {
    place: "MRT 月台",
    hear: "Please mind the gap. Please let passengers alight first. Doors closing. Please stand clear.",
    href: "/curriculum/stories/78",
  },
  {
    place: "巴士",
    hear: "The next stop is Bedok. Please press the bell if you are alighting.",
    href: "/curriculum/stories/79",
  },
  {
    place: "学校广播",
    hear: "PE is cancelled. Please proceed to the hall at 7:50.",
    href: "/curriculum/stories/80",
  },
  {
    place: "诊所叫号屏",
    hear: "Please take a queue number. Now serving A12. Please wait to be called.",
    href: "/curriculum/stories/81",
  },
  {
    place: "私人医院大厅",
    hear: "Please register at the counter. Please have your NRIC ready. Visiting hours are from 12 p.m. to 8 p.m.",
    href: "/curriculum/stories/82",
  },
  {
    place: "药房窗口",
    hear: "Collect your medication at Counter 3. Take this after food. Three times a day.",
    href: "/curriculum/stories/83",
  },
  {
    place: "组屋告示栏",
    hear: "Water supply will be disrupted from 9 a.m. to 5 p.m. The lift is under maintenance.",
    href: "/curriculum/stories/84",
  },
  {
    place: "图书馆门贴",
    hear: "Opening hours: 11 a.m. to 9 p.m. Closed on Public Holidays. Silent zone. No eating or drinking.",
    href: "/curriculum/stories/85",
  },
  {
    place: "电梯安全贴",
    hear: "In case of fire, do not use the lift. Use the staircase.",
    href: "/curriculum/stories/86",
  },
  {
    place: "商场地面 / 优先通道",
    hear: "Please queue here. This queue is reserved for the elderly, pregnant women and wheelchair users.",
    href: "/curriculum/stories/87",
  },
  {
    place: "公园告示",
    hear: "Do not feed the monkeys. Keep to the path. Please use the bin.",
    href: "/curriculum/stories/88",
  },
  {
    place: "诊所短信",
    hear: "Your appointment is on Tuesday at 3 p.m. Please arrive 15 minutes early.",
    href: "/curriculum/stories/89",
  },
];

export default function NoticesPage() {
  const theme = THEMES.find((t) => t.id === "notices");
  return (
    <>
      <CurriculumNav current="/curriculum/notices" />
      <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">
        每天听到、看到的英语
      </p>
      <h1 className="font-serif font-semibold text-3xl mb-3">广播、告示、诊所与医院</h1>
      <p className="text-ink-2 mb-6 max-w-2xl leading-relaxed">
        这些句子出现在 MRT 喇叭、学校 PA、诊所屏幕、私人医院大厅、组屋楼下告示栏和手机短信里。孩子要会读、会听，不是只会课本对话。点进去有阅读、语法、开口和练习题。
      </p>
      <div className="space-y-3 mb-10">
        {SIGNS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block bg-card border border-line rounded-2xl p-5 hover:border-accent"
          >
            <p className="text-xs font-semibold text-accent mb-1">{s.place}</p>
            <p className="text-sm font-medium" lang="en">
              {s.hear}
            </p>
          </Link>
        ))}
      </div>
      {theme && (
        <p className="text-sm text-ink-2">
          课文目录里这一组是「{theme.title}」。从{" "}
          <Link href="/curriculum/stories/78" className="text-accent font-semibold">
            课文 78
          </Link>{" "}
          起往下读。
        </p>
      )}
    </>
  );
}
