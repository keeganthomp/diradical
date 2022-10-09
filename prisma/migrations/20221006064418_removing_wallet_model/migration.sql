/*
  Warnings:

  - You are about to drop the column `walletId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Wallet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_walletId_fkey";

-- DropIndex
DROP INDEX "User_walletId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "walletId";

-- DropTable
DROP TABLE "Wallet";
