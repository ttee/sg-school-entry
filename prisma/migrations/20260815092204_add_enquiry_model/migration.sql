-- CreateTable
CREATE TABLE "Enquiry" (
    "id" TEXT NOT NULL,
    "parentWechat" TEXT NOT NULL,
    "childBirthYear" INTEGER NOT NULL,
    "stage" TEXT NOT NULL,
    "intent" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Enquiry_createdAt_idx" ON "Enquiry"("createdAt");

-- CreateIndex
CREATE INDEX "Enquiry_parentWechat_idx" ON "Enquiry"("parentWechat");
