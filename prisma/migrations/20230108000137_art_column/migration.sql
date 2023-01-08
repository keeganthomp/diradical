/*
  Warnings:

  - You are about to drop the column `coverArt` on the `Track` table. All the data in the column will be lost.
  - Added the required column `art` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "coverArt",
ADD COLUMN     "art" VARCHAR(46) NOT NULL;
