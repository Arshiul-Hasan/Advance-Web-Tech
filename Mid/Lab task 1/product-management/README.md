# Product & Employee Management API

SL:
Name:** MD.Nur-E-Arshiul Hasan
ID:23-53765-3
Section:B

## Description
A NestJS REST API for managing products and employees with full CRUD operations, connected to a real database.

## Requirements
- Node.js
- pnpm
- PostgreSQL

## Database Setup
1. Install PostgreSQL and create a database (example: `product_db`).
2. Copy `.env.example` to `.env`.
3. Fill in your own database values in `.env`.

## Installation
```bash
pnpm install
```

## Run the App
```bash
pnpm run start:dev
```
The server runs at `http://localhost:3000`.

## Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get a product by ID |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get an employee by ID |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

## Screenshots
Postman screenshots are in the `screenshots/` folder.