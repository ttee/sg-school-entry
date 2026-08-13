-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "Question_weekId_order_key" ON "Question"("weekId", "order");
