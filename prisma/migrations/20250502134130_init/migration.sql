/*
  Warnings:

  - Added the required column `image_public_id` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "image_public_id" TEXT NOT NULL;
