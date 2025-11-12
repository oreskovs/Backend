# 🛍️ Simple CRUD App - Node.js + Express + MongoDB

A simple **RESTful API** built with **Node.js**, **Express**, and **MongoDB Atlas** that allows you to manage products using full **CRUD operations** (Create, Read, Update, Delete).

---

## 🚀 Features

- 📦 Create new products
- 🔍 Retrieve all products
- 🧾 Get a single product by ID
- ✏️ Update existing products
- ❌ Delete products

---

## 🧰 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/oreskovs/Backend/simple-crud-app.git
   cd simple-crud-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of the project and add your MongoDB password:

   ```env
   DB_PASSWORD=your_mongodb_password_here
   ```

4. **Run the server**

   ```bash
   node app.js
   ```

   or with **nodemon**:

   ```bash
   npx nodemon app.js
   ```

5. The server will start on  
   👉 `http://localhost:3000`

---

## 🌐 API Endpoints

### Base URL

```
http://localhost:3000/
```

### Product Routes (`/products`)

| Method | Route           | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/products`     | Get all products           |
| GET    | `/products/:id` | Get product by ID          |
| POST   | `/products`     | Create a new product       |
| PUT    | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product by ID     |

---

## 📦 Example JSON Body

When creating or updating a product (`POST` or `PUT`):

```json
{
  "name": "Laptop Lenovo ThinkPad",
  "quantity": 10,
  "price": 999.99,
  "image": "https://example.com/laptop.jpg"
}
```

---

## 🧠 Project Structure

```
simple-crud-app/
├── app.js
├── controllers/
│   └── product.controller.js
├── models/
│   └── product.model.js
├── routes/
│   └── productRoutes.js
├── .env
├── package.json
└── README.md
```

---

## 🧑‍💻 Author

**Stojance Oreskov**  
📧 Email: [oreskov.stojance1@gmail.com](mailto:oreskov.stojance1@gmail.com)  
🌍 GitHub: [oreskov-s](https://github.com/oreskovs)

---

## 📝 License

This project is licensed under the **MIT License** — feel free to use, modify, and share it.

---
