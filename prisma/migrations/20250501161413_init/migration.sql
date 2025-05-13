-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Draft', 'Publish');

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Draft';
