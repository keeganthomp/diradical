/*
  Warnings:

  - You are about to drop the column `current` on the `Season` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "type" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Season" DROP COLUMN "current";
