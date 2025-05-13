/*
  Warnings:

  - Made the column `slug` on table `posts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "slug" SET NOT NULL;
