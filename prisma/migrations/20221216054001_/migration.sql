/*
  Warnings:

  - A unique constraint covering the columns `[audio]` on the table `Track` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Track_audio_key" ON "Track"("audio");
