/*
  Warnings:

  - Made the column `ds_password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "ds_password" SET NOT NULL;
