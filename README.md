
# 📦 Learn Prisma ORM

A simple Node.js + TypeScript project for learning and experimenting with **Prisma ORM** using **PostgreSQL**.

This project is structured to understand database connection, schema modeling, migrations, and CRUD operations using Prisma with a PostgreSQL database.

---

## 🚀 Tech Stack

* Node.js (ES Module)
* TypeScript
* Prisma ORM
* PostgreSQL
* pg
* dotenv
* tsx (for running TypeScript files)

---

## 📁 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd learn-prisma-orm
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

Replace:

* `username`
* `password`
* `database_name`

with your actual PostgreSQL credentials.

---

## ⚙️ Prisma Setup

### Initialize Prisma (if not initialized)

```bash
npx prisma init
```

This will create:

```
prisma/
  └── schema.prisma
```

---

### Run Migration

After defining your models in `schema.prisma`:

```bash
npx prisma migrate dev --name init
```

---

### Generate Prisma Client

```bash
npx prisma generate
```

---

## ▶️ Running the Project

Since you're using `tsx`, you can run TypeScript files directly:

```bash
npx tsx index.ts
```

Or add a script inside `package.json`:

```json
"scripts": {
  "dev": "tsx index.ts"
}
```

Then run:

```bash
npm run dev
```

---

## 🧠 What You Can Practice Here

* Creating Prisma models
* Running migrations
* Performing CRUD operations
* Understanding relations
* Connecting PostgreSQL with Prisma
* Using Prisma Client in TypeScript

---

## 📚 Useful Prisma Commands

```bash
npx prisma studio        # Open Prisma GUI
npx prisma migrate dev   # Run migration
npx prisma generate      # Generate client
npx prisma db push       # Push schema without migration
```

---

## 📌 Dependencies Overview

### Dependencies

* `@prisma/client` – Prisma client for querying database
* `@prisma/adapter-pg` – PostgreSQL adapter
* `pg` – PostgreSQL driver
* `dotenv` – Environment variable support

### Dev Dependencies

* `prisma` – Prisma CLI
* `typescript` – TypeScript compiler
* `tsx` – Run TypeScript without compiling
* `@types/node` – Node types
* `@types/pg` – PostgreSQL types

---

## 🎯 Goal of This Project

This repository is intended for learning Prisma ORM fundamentals and relational database modeling using PostgreSQL in a TypeScript environment.

---

