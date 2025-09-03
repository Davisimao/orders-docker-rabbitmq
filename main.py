from typing import Union
from enum import Enum
from fastapi import FastAPI
from sqlmodel import Field, Session, SQLModel, create_engine, select

app = FastAPI()

class Status(str, Enum):
    pending = "pending"
    approved = "approved"
    shipped = "shipped"

class Hero(SQLModel, table=True):
    id: int = Field(primary_key=True)
    name: str = Field(index=True)
    quantity: int
    status: Status = Field(default=Status.pending)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

@app.post("/items")
def create_item(item:Item):
    return {item}