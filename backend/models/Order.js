import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    address: String,
    phone: String
  },
  cartItems: [{
    name: String,
    price: Number,
    quantity: Number,
    id: String
  }],
  total: Number,
  status: {
    type: String,
    default: 'pending'
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
