/*
  Warnings:

  - You are about to drop the `PlayEvent` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('PLAY_INITIATED', 'PLAY_SAVED');

-- DropForeignKey
ALTER TABLE "PlayEvent" DROP CONSTRAINT "PlayEvent_seasonId_fkey";

-- DropForeignKey
ALTER TABLE "PlayEvent" DROP CONSTRAINT "PlayEvent_trackId_fkey";

-- DropForeignKey
ALTER TABLE "PlayEvent" DROP CONSTRAINT "PlayEvent_userId_fkey";

-- DropTable
DROP TABLE "PlayEvent";

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "EventType" NOT NULL DEFAULT 'PLAY_INITIATED',
    "trackId" TEXT NOT NULL,
    "seasonId" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
