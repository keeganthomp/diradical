-- DropIndex
DROP INDEX "Track_id_key";

-- AlterTable
ALTER TABLE "Track" ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Track_pkey" PRIMARY KEY ("id");
