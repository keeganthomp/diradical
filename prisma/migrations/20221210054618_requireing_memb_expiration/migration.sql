/*
  Warnings:

  - Made the column `membershipExp` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "membershipExp" SET NOT NULL;
