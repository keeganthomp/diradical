/*
  Warnings:

  - You are about to drop the column `sourceIpfsHash` on the `Track` table. All the data in the column will be lost.
  - Added the required column `audioIpfsHash` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" DROP COLUMN "sourceIpfsHash",
ADD COLUMN     "audioIpfsHash" VARCHAR(46) NOT NULL;
