import express from "express";
import { Product } from "../data/ppp";

const router = express.Router();

// 🔹 GET /api/products — получить все товары
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // или ppp если это массив
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// 🔹 POST /api/products — добавить товар
router.post('/', async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch {
    res.status(400).json({ error: 'Error saving to db' });
  }
});

export default router;