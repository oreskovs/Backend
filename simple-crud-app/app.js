const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Product = require("./models/product.model");
const productRoutes = require("./routes/productRoutes");
const dbPassword = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://admin:${dbPassword}@backenddb.k6e0quv.mongodb.net/?appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.write("<h1>Hello from the Node Server</h1>");
  res.end();
});

app.use("/products", productRoutes);

app.listen(3000);
