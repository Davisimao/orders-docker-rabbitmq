# 🚀 Desafio - CRUD com FastAPI + PostgreSQL + Docker + Fila

Este projeto é um **desafio prático** para desenvolver uma API CRUD de gerenciamento de pedidos utilizando **FastAPI**, com persistência em **PostgreSQL**, mensageria via **RabbitMQ** (ou Redis Streams), e toda a stack orquestrada com **Docker Compose**.

---

## 🎯 Objetivo

Criar uma aplicação backend capaz de:

- Gerenciar pedidos (CRUD completo)
- Persistir os dados em banco de dados PostgreSQL
- Publicar mensagens em uma fila a cada novo pedido
- Ter um *consumer* que processa mensagens dessa fila

---

## 📋 Requisitos

### **API (FastAPI)**
- Endpoints:
  - `POST /orders` → criar um pedido
  - `GET /orders` → listar todos os pedidos
  - `GET /orders/{id}` → buscar pedido por ID
  - `PUT /orders/{id}` → atualizar pedido
  - `DELETE /orders/{id}` → deletar pedido
- Ao criar um pedido, enviar mensagem para a fila

### **Banco de Dados (PostgreSQL)**
- Tabela `orders`:
  - `id` (UUID ou serial)
  - `product_name` (string)
  - `quantity` (int)
  - `status` (pending, approved, shipped)

### **Fila (RabbitMQ ou Redis)**
- Publicar evento `Novo pedido criado com ID X` ao criar um pedido
- Ter um *consumer* separado que lê a fila e processa as mensagens

---

## 🐳 Docker Compose

O `docker-compose.yml` deve subir os seguintes serviços:

- **API** (FastAPI)
- **PostgreSQL**
- **Fila** (RabbitMQ ou Redis)
- **Consumer** (worker para processar mensagens)

O banco e a fila devem ter persistência configurada via **volumes**.

---