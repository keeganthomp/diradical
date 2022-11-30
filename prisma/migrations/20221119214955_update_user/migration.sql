/*
  Warnings:

  - You are about to drop the column `walletAddress` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nonCustodialWallet]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[custodialWallet]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `custodialWallet` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nonCustodialWallet` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_walletAddress_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "walletAddress",
ADD COLUMN     "custodialWallet" VARCHAR(255) NOT NULL,
ADD COLUMN     "nonCustodialWallet" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_nonCustodialWallet_key" ON "User"("nonCustodialWallet");

-- CreateIndex
CREATE UNIQUE INDEX "User_custodialWallet_key" ON "User"("custodialWallet");
