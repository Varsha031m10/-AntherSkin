import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// POST /api/orders
router.post('/', async (req, res) => {
  try {
    const { customer, cartItems, total, status } = req.body;

    if (!customer || !customer.name || !customer.email) {
      return res.status(400).json({ message: 'Customer name and email are required.' });
    }

    const order = new Order({
      customer,
      cartItems,
      total,
      status
    });

    const savedOrder = await order.save();

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: savedOrder._id
    });
  } catch (err) {
    console.error('Order save error:', err);
    res.status(500).json({ message: 'Server error processing order' });
  }
});

export default router;
