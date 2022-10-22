/*
  Warnings:

  - Added the required column `contractAddress` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Track" ADD COLUMN     "contractAddress" INTEGER NOT NULL;
