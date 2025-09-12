# routes/order_routes.py
from fastapi import APIRouter
from ..controllers import order_controller

router = APIRouter()

@router.get("/")
def read_root():
    return {"Hello": "World"}

@router.post("orders")
def create_order(product_name: str, quantity: int):
    return order_controller.add_order(product_name, quantity)
    

