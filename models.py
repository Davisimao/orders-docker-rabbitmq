from typing import List
from typing import Optional
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from enum import Enum as PyEnum
from sqlalchemy import Enum

class Base(DeclarativeBase):
    pass

class OrderStatus(PyEnum):
    PENDING = "pending"
    APPROVED = "approved"
    SHIPPED = "shipped"
    
class Order(Base):
    __tablename__ = "tbl_orders"
    id_order : Mapped[int] = mapped_column(primary_key=True)
    ds_product_name : Mapped[str] = mapped_column(String(50),nullable=False)
    ds_quantity : Mapped[int] = mapped_column(nullable=False),
    ds_status :  Mapped[OrderStatus] = mapped_column(
        Enum(OrderStatus, name="order_status"),
        nullable=False,
        default=OrderStatus.PENDING
    )