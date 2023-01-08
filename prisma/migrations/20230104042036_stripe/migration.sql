/*
  Warnings:

  - You are about to drop the column `wallet` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `membershipExp` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `wallet` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Payout` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vote` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `artistId` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `stripeCustomerId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Payout" DROP CONSTRAINT "Payout_wallet_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_wallet_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_artistWallet_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_voterWallet_fkey";

-- DropIndex
DROP INDEX "User_wallet_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "wallet",
ADD COLUMN     "artistId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "membershipExp",
DROP COLUMN "wallet",
ADD COLUMN     "email" VARCHAR(255) NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "stripeAccountId" VARCHAR(255),
ADD COLUMN     "stripeCustomerId" VARCHAR(255) NOT NULL,
ALTER COLUMN "username" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Payout";

-- DropTable
DROP TABLE "Vote";

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
