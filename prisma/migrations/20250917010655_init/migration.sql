-- CreateTable
CREATE TABLE "public"."Order" (
    "id_order" TEXT NOT NULL,
    "ds_product_name" TEXT NOT NULL,
    "ds_quantity" INTEGER NOT NULL,
    "ds_status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id_order")
);
