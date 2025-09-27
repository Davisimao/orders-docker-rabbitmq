/*
  Warnings:

  - You are about to drop the column `ds_document` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cd_document]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cd_document` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."User_ds_document_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "ds_document",
ADD COLUMN     "cd_document" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_cd_document_key" ON "public"."User"("cd_document");
