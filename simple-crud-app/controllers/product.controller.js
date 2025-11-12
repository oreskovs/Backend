const express = require("express");
const Product = require("../models/product.model");

exports.getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    if (!product) {
      res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id);
    if (!product) {
      res.status(404).json({ message: "Product not found!" });
    }
    const updatedProduct = await Product.findById(product);
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: `Product with id: ${id} not found!` });
    }
    res.status(200).json({ message: `Product with id: ${id} is deleted!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
