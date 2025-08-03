import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'; 

const Cart = () => {
  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Start shopping now!</p>
      ) : (
        <>
          <div className="cart-items-grid">
            {cartItems.map((item, index) => (
              <div className="cart-card" key={index}>
                <div className="card-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✖ Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="total">Total: {totalPrice}</div>
            <Link to="/checkout">
              <button className="checkout-btn">Proceed to Checkout ➤</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
