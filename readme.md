# Library Management Backend

This repository contains the backend implementation for the Library Management System. It is responsible for handling user data, book data, and borrowing/returning functionality. The backend runs on port **3000** and serves as the API layer for the frontend.

---

## **Installation Guide**

1. Clone the repository:

2. Install dependencies:

3. Set up the database (SQLite):
- Run migrations to create database tables:
  ```
  npx sequelize-cli db:migrate
  ```
- (Optional) Run seeders to populate the database with sample data:
  ```
  npx sequelize-cli db:seed:all
  ```

4. Start the backend server:
- For development (with nodemon):
  ```
  npm run dev
  ```
- For production:
  ```
  npm start
  ```

The backend server will be running at **http://localhost:3000**.

---

## **API Endpoints**

### **Users**
- `GET /users`: Fetch all users
- `GET /users/:id`: Fetch details of a specific user

### **Books**
- `GET /books`: Fetch all books
- `GET /books/:id`: Fetch details of a specific book

### **Borrowed Books**
- `POST /borrowed-books/borrow`: Lend a book to a user
- `POST /borrowed-books/return`: Return a borrowed book

---

## **Technologies Used**

- **Node.js** with **Express.js** for API creation
- **SQLite** as the database, managed using **Sequelize ORM**
- **dotenv** for environment variable management
- **Nodemon** for development server hot-reloading

---

## **Additional Notes**

- Ensure you configure the `.env` file in the root directory with necessary variables such as database configurations. Example:
