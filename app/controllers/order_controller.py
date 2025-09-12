from sqlalchemy.orm import Session
from ..db import SessionLocal
from sqlalchemy.orm import Session
from ..models import order

# Dependência de sessão do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def add_order(product_name: str, quantity: int, db: Session):
    db.add(order(product_name,quantity))
