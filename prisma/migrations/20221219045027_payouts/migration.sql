-- CreateTable
CREATE TABLE "Payout" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "period" INTEGER NOT NULL,
    "wallet" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Payout_id_key" ON "Payout"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Payout_period_wallet_key" ON "Payout"("period", "wallet");

-- AddForeignKey
ALTER TABLE "Payout" ADD CONSTRAINT "Payout_wallet_fkey" FOREIGN KEY ("wallet") REFERENCES "User"("wallet") ON DELETE RESTRICT ON UPDATE CASCADE;
