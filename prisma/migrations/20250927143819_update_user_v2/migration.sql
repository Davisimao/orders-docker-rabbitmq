/*
  Warnings:

  - Added the required column `ds_password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "ds_password" TEXT NOT NULL;
