/*
  Warnings:

  - The primary key for the `Track` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `albumId` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `songId` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `Track` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `Track` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `trackId` on the `Vote` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_userId_fkey";

-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_albumId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_trackId_fkey";

-- AlterTable
ALTER TABLE "Track" DROP CONSTRAINT "Track_pkey",
DROP COLUMN "albumId",
DROP COLUMN "songId",
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "username" VARCHAR(30);

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "trackId",
ADD COLUMN     "trackId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Album";

-- CreateIndex
CREATE UNIQUE INDEX "Track_id_key" ON "Track"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Vote_period_trackId_userId_key" ON "Vote"("period", "trackId", "userId");

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
