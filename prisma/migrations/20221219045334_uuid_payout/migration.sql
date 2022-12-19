-- DropIndex
DROP INDEX "Payout_id_key";

-- AlterTable
ALTER TABLE "Payout" ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Payout_pkey" PRIMARY KEY ("id");
