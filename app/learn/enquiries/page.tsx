import { getSession } from "@/lib/session";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function EnquiriesPage() {
  const session = await getSession();

  if (!session?.user || session.user.role !== "admin") {
    redirect("/learn");
  }

  const enquiries = await prisma.enquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const stageLabels: Record<string, string> = {
    P2: "小学 P2",
    P3: "小学 P3",
    P4: "小学 P4",
    P5: "小学 P5",
    Sec1: "中学 Sec 1",
    Sec2: "中学 Sec 2",
    Sec3: "中学 Sec 3",
  };

  const intentLabels: Record<string, string> = {
    enrol: "咨询来新加坡备考 CEQ / AEIS",
    monthly: "月度会员",
    "a2-12week": "A2 Key 12 周",
    "b1-12week": "B1 Preliminary 12 周",
    trial: "先看试学课",
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-serif font-semibold text-3xl text-ink mb-2">
            报名咨询记录
          </h1>
          <p className="text-ink-2">
            共 <strong className="text-accent">{enquiries.length}</strong> 条咨询
          </p>
        </div>
        <Link
          href="/learn"
          className="text-sm text-muted hover:text-ink transition-colors"
        >
          ← 返回
        </Link>
      </div>

      {enquiries.length === 0 ? (
        <div className="bg-card border border-line rounded-xl p-12 text-center">
          <p className="text-muted">暂无咨询记录</p>
        </div>
      ) : (
        <div className="space-y-4">
          {enquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="bg-card border border-line rounded-xl p-5 hover:border-accent hover:shadow-md transition-all"
            >
              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <p className="text-xs text-muted mb-1">家长微信号</p>
                  <p className="font-mono text-sm font-semibold text-accent break-all">
                    {enquiry.parentWechat}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">孩子出生年份</p>
                  <p className="text-sm text-ink">{enquiry.childBirthYear}</p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">拟申请学段</p>
                  <p className="text-sm text-ink">
                    {stageLabels[enquiry.stage] || enquiry.stage}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">报名意向</p>
                  <p className="text-sm text-ink">
                    {intentLabels[enquiry.intent] || enquiry.intent}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted mb-1">提交时间</p>
                  <p className="text-xs text-ink-2">
                    {new Date(enquiry.createdAt).toLocaleString("zh-CN", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 bg-paper-2 border border-line rounded-xl p-5">
        <h3 className="font-serif font-semibold text-base mb-2 text-ink">
          隐私提醒
        </h3>
        <p className="text-xs text-ink-2">
          以上数据仅供管理员查看，不得公开或分享给未经授权的第三方。家长可随时要求删除其数据。
        </p>
      </div>
    </div>
  );
}
