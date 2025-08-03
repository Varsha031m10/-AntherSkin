// src/components/BookingForm.js
/*import React, { useState } from 'react';
import './BookingForm.css'; // Optional styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    service: '',
    bookingDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        alert('Booking successful!');
        setFormData({
          customerName: '',
          customerEmail: '',
          service: '',
          bookingDate: ''
        });
      } else {
        alert(data.message || 'Booking failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Appointment</h2>
      <input
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="customerEmail"
        value={formData.customerEmail}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="service"
        value={formData.service}
        onChange={handleChange}
        placeholder="Service (e.g., Hair Spa)"
        required
      />
      <input
        type="date"
        name="bookingDate"
        value={formData.bookingDate}
        onChange={handleChange}
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
