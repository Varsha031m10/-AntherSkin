import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  service: String,
  bookingDate: String
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
