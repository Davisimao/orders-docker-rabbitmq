from sqlalchemy import String, Enum
from sqlalchemy.orm import Mapped, mapped_column
from enum import Enum as PyEnum
from ..db import Base

class OrderStatus(PyEnum):
    PENDING = "pending"
    APPROVED = "approved"
    SHIPPED = "shipped"

class Order(Base):
    __tablename__ = "tbl_orders"

    id_order: Mapped[int] = mapped_column(primary_key=True)
    ds_product_name: Mapped[str] = mapped_column(String(50), nullable=False)
    ds_quantity: Mapped[int] = mapped_column(nullable=False)
    ds_status: Mapped[OrderStatus] = mapped_column(
        Enum(OrderStatus, name="order_status"),
        nullable=False,
        default=OrderStatus.PENDING
    )
