/*
  Warnings:

  - Changed the type of `songId` on the `Track` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "songId",
ADD COLUMN     "songId" INTEGER NOT NULL;
