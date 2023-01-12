/*
  Warnings:

  - A unique constraint covering the columns `[stripePayoutId]` on the table `Payout` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stripePayoutId` to the `Payout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payout" ADD COLUMN     "stripePayoutId" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Payout_stripePayoutId_key" ON "Payout"("stripePayoutId");
