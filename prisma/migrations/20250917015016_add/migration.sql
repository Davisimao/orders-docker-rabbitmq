/*
  Warnings:

  - The `ds_status` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."StatusOption" AS ENUM ('pending', 'approved', 'shipped');

-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "ds_status",
ADD COLUMN     "ds_status" "public"."StatusOption" NOT NULL DEFAULT 'pending';
