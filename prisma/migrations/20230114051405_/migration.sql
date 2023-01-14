/*
  Warnings:

  - You are about to drop the column `provider_account_id` on the `Account` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,provider_providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider_providerAccountId` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Account_provider_provider_account_id_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "provider_account_id",
ADD COLUMN     "provider_providerAccountId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_provider_providerAccountId_key" ON "Account"("provider", "provider_providerAccountId");
