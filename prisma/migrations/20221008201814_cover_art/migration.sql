/*
  Warnings:

  - Added the required column `coverArt` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" ADD COLUMN     "coverArt" VARCHAR(255) NOT NULL;
