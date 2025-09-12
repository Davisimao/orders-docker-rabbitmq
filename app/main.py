from fastapi import FastAPI
from .routes.order_routes import router
from .db import engine, Base
from .models import order

app = FastAPI()
app.include_router(router)

order.Base.metadata.create_all(bind=engine)