/*
  Warnings:

  - You are about to drop the column `genre` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `source` on the `Track` table. All the data in the column will be lost.
  - You are about to alter the column `coverArt` on the `Track` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(46)`.
  - Added the required column `audio` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "genre",
DROP COLUMN "source",
ADD COLUMN     "audio" VARCHAR(46) NOT NULL,
ALTER COLUMN "coverArt" SET DATA TYPE VARCHAR(46);
