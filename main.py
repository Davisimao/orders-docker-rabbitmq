from enum import Enum
from typing import Optional
from fastapi import FastAPI
from sqlmodel import SQLModel, Field, Relationship, create_engine

app = FastAPI()

# -------------------
# Database
# -------------------
DATABASE_URL = "postgresql://myuser:mypassword@db:5432/mydb"
engine = create_engine(DATABASE_URL, echo=True)


# -------------------
# Enums
# -------------------
class OrderStatus(str, Enum):
    pending = "pending"
    approved = "approved"
    shipped = "shipped"
    cancelled = "cancelled"


# -------------------
# Models
# -------------------
class Order(SQLModel, table=True):
    __tablename__ = "orders"

    id: Optional[int] = Field(default=None, primary_key=True)
    customer_name: str
    status: OrderStatus = Field(default=OrderStatus.pending)
    total_amount: float = Field(default=0)

    # relação com OrderItem
    items: list["OrderItem"] = Relationship(back_populates="order")


class OrderItem(SQLModel, table=True):
    __tablename__ = "order_items"

    id: Optional[int] = Field(default=None, primary_key=True)
    order_id: int = Field(foreign_key="orders.id")
    product_name: str
    quantity: int
    unit_price: float

    order: Order = Relationship(back_populates="items")


# -------------------
# Startup
# -------------------
@app.get("/")
def read_root():
    return {"Hello": "World"}
