import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Root test route
router.get('/', (req, res) => {
  res.send('Welcome to the Booking API');
});

// Booking POST route
router.post('/', async (req, res) => {
  try {
    const { customerName, customerEmail, service, bookingDate } = req.body;

    if (!customerName || !customerEmail || !service || !bookingDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBooking = new Booking({ customerName, customerEmail, service, bookingDate });
    await newBooking.save();

    res.status(201).json({ message: 'Booking successfully created' });
  } catch (error) {
    console.error('Error during booking creation:', error);
    res.status(400).json({ message: 'Failed to submit booking' });
  }
});

export default router;
