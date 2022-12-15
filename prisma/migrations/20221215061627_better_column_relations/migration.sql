/*
  Warnings:

  - You are about to drop the column `userId` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Vote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[period,trackId,wallet]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `wallet` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallet` to the `Vote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_userId_fkey";

-- DropIndex
DROP INDEX "Vote_period_trackId_userId_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "userId",
ADD COLUMN     "wallet" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "userId",
ADD COLUMN     "wallet" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vote_period_trackId_wallet_key" ON "Vote"("period", "trackId", "wallet");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_wallet_fkey" FOREIGN KEY ("wallet") REFERENCES "User"("wallet") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_wallet_fkey" FOREIGN KEY ("wallet") REFERENCES "User"("wallet") ON DELETE RESTRICT ON UPDATE CASCADE;
