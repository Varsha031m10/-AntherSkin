// /routes/products.js

import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET route to fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);  // Send products as JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
