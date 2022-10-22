/*
  Warnings:

  - Added the required column `coverArtIpfsHash` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceIpfsHash` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" ADD COLUMN     "coverArtIpfsHash" VARCHAR(46) NOT NULL,
ADD COLUMN     "sourceIpfsHash" VARCHAR(46) NOT NULL;
