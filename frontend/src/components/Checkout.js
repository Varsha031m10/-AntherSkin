import './Checkout.css';
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const API_URL = 'http://localhost:5000/api/orders';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors = [];
    if (!customer.name.trim()) errors.push('Name is required');
    if (!customer.email.trim()) errors.push('Email is required');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) errors.push('Invalid email format');
    if (!customer.address.trim()) errors.push('Address is required');
    if (!customer.phone.trim()) errors.push('Phone is required');
    if (cartItems.length === 0) errors.push('Cart is empty');
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      setError(errors.join(', '));
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const preparedItems = cartItems.map(item => ({
        id: item.id || `temp_${Math.random().toString(36).slice(2, 9)}`,
        name: String(item.name || 'Unknown'),
        price: parseFloat(item.price || 0),
        quantity: parseInt(item.quantity || 1)
      }));

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer: {
            name: customer.name.trim(),
            email: customer.email.trim(),
            address: customer.address.trim(),
            phone: customer.phone.trim()
          },
          items: preparedItems
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Order failed');
      }

      clearCart();
      navigate('/order-success');

    } catch (error) {
      console.error('Order error:', error);
      setError(
        error.message === 'Failed to fetch' 
          ? 'Network error. Please check your connection.'
          : error.message || 'Order failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      {error && (
        <div className="error-message">
          {error.split(',').map((err, i) => (
            <div key={i}>• {err.trim()}</div>
          ))}
        </div>
      )}

      <form className="checkout-form" onSubmit={handleSubmit}>
        <input className="checkout-input" name="name" placeholder="Full Name" onChange={handleChange} required /><br /><br />
        <input className="checkout-input" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
        <textarea className="checkout-textarea" name="address" placeholder="Address" onChange={handleChange} required /><br /><br />
        <input className="checkout-input" name="phone" placeholder="Phone Number" onChange={handleChange} required /><br /><br />
        
        <button className="checkout-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
