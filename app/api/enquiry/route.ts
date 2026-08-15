import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

interface EnquiryRequest {
  parentWechat: string;
  childBirthYear: number;
  stage: string;
  intent: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryRequest = await request.json();

    const { parentWechat, childBirthYear, stage, intent } = body;

    // Validation
    if (!parentWechat || !parentWechat.trim()) {
      return NextResponse.json(
        { error: "请填写家长微信号" },
        { status: 400 }
      );
    }

    if (!childBirthYear || childBirthYear < 2000 || childBirthYear > new Date().getFullYear()) {
      return NextResponse.json(
        { error: "请填写有效的出生年份" },
        { status: 400 }
      );
    }

    const validStages = ["P2", "P3", "P4", "P5", "Sec1", "Sec2", "Sec3"];
    if (!stage || !validStages.includes(stage)) {
      return NextResponse.json(
        { error: "请选择有效的学段" },
        { status: 400 }
      );
    }

    const validIntents = ["monthly", "a2-12week", "b1-12week", "trial"];
    if (!intent || !validIntents.includes(intent)) {
      return NextResponse.json(
        { error: "请选择报名意向" },
        { status: 400 }
      );
    }

    // Simple rate limiting: check for duplicate submission from same wechat in last 5 minutes
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const recentEnquiry = await prisma.enquiry.findFirst({
      where: {
        parentWechat: parentWechat.trim(),
        createdAt: {
          gte: fiveMinutesAgo,
        },
      },
    });

    if (recentEnquiry) {
      return NextResponse.json(
        { 
          error: "您刚刚已提交过咨询，请稍后再试",
          success: false 
        },
        { status: 429 }
      );
    }

    // Save enquiry
    await prisma.enquiry.create({
      data: {
        parentWechat: parentWechat.trim(),
        childBirthYear,
        stage,
        intent,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "提交成功！老师会在 1-2 个工作日内添加您的微信。",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating enquiry:", error);
    return NextResponse.json(
      { error: "提交失败，请稍后重试" },
      { status: 500 }
    );
  }
}
