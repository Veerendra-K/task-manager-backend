# Task Manager Backend

A beginner-friendly RESTful backend application built using **Node.js**, **Express**, and **MySQL**.  
This project demonstrates CRUD operations and is suitable for learning backend fundamentals and interview preparation.

---

## 🚀 Features

- RESTful APIs using Express
- MySQL database integration
- CRUD operations (Create, Read, Update, Delete)
- Prepared statements to prevent SQL injection
- Proper HTTP status codes
- Persistent data storage using MySQL

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- Postman (for API testing)

---

## 📁 Project Structure

task-manager-backend/
├── index.js
├── package.json
├── package-lock.json
├── README.md
├── .env
├── .gitignore

---

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. MySQL Database Setup

CREATE DATABASE taskdb;

USE taskdb;

CREATE TABLE tasks (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
status VARCHAR(50) DEFAULT 'pending'
);

### 3. Environment Variables

Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=taskdb

### 4. Run Server

    node index.js

Server runs at:
http://localhost:3000

📌 API Endpoints
GET /tasks → Fetch all tasks
POST /tasks → Create a new task
PUT /tasks/:id → Update a task
DELETE /tasks/:id → Delete a task

🧠 Summary
“I built a RESTful backend using Node.js and Express, connected it to a MySQL database using mysql2. I implemented full CRUD operations with GET, POST, PUT, and DELETE APIs, used prepared statements to prevent SQL injection, handled proper HTTP status codes, and ensured persistent data storage using MySQL.”
