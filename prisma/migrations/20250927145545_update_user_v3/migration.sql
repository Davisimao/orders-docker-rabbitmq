/*
  Warnings:

  - Made the column `ds_full_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "ds_password" DROP NOT NULL,
ALTER COLUMN "ds_full_name" SET NOT NULL;
