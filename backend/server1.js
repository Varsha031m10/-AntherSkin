import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Root route for testing server
app.get('/', (req, res) => {
  res.send('AntherSkin backend is running!');
});

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/antherskin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Order Model
const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true }
  },
  items: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

// Order Endpoint
app.post('/api/orders', async (req, res) => {
  try {
    const { customer, items } = req.body;

    if (!customer || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid order data' 
      });
    }

    // Sanitize and validate item data
    const validatedItems = items.map(item => ({
      id: item.id,
      name: item.name?.trim() || '',
      price: parseFloat(item.price) || 0,
      quantity: parseInt(item.quantity) || 1
    }));

    const total = validatedItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );

    const newOrder = new Order({
      customer: {
        name: customer.name.trim(),
        email: customer.email.trim(),
        address: customer.address.trim(),
        phone: customer.phone.trim()
      },
      items: validatedItems,
      total: parseFloat(total.toFixed(2)),
      status: 'pending'
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      orderId: savedOrder._id,
      total: savedOrder.total
    });

  } catch (error) {
    console.error('Order processing error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
