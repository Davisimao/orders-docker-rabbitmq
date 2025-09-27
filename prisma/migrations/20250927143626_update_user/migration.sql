/*
  Warnings:

  - Added the required column `id_user` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Order" ADD COLUMN     "id_user" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."User" (
    "id_user" TEXT NOT NULL,
    "ds_email" TEXT NOT NULL,
    "ds_document" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ds_email_key" ON "public"."User"("ds_email");

-- CreateIndex
CREATE UNIQUE INDEX "User_ds_document_key" ON "public"."User"("ds_document");

-- AddForeignKey
ALTER TABLE "public"."Order" ADD CONSTRAINT "Order_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "public"."User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
