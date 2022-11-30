/*
  Warnings:

  - You are about to drop the column `audioIpfsHash` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `contractAddress` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `coverArtIpfsHash` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mdk` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `songId` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_mdk_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "audioIpfsHash",
DROP COLUMN "contractAddress",
DROP COLUMN "coverArtIpfsHash",
ADD COLUMN     "songId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "mdk",
DROP COLUMN "username";
