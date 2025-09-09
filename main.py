from fastapi import FastAPI

app = FastAPI()

orders = ["pedido1", "pedido2"]


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/orders")
def get_all_orders():
    return orders
