/*
  Warnings:

  - You are about to drop the column `trackId` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `wallet` on the `Vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[period,voterWallet]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `artistWallet` to the `Vote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voterWallet` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_trackId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_wallet_fkey";

-- DropIndex
DROP INDEX "Vote_period_trackId_wallet_key";

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "trackId",
DROP COLUMN "wallet",
ADD COLUMN     "artistWallet" TEXT NOT NULL,
ADD COLUMN     "voterWallet" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vote_period_voterWallet_key" ON "Vote"("period", "voterWallet");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_artistWallet_fkey" FOREIGN KEY ("artistWallet") REFERENCES "User"("wallet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_voterWallet_fkey" FOREIGN KEY ("voterWallet") REFERENCES "User"("wallet") ON DELETE RESTRICT ON UPDATE CASCADE;
