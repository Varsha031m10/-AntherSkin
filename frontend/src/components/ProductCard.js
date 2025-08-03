import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // adjust the path if needed

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleBooking = () => {
    navigate(`/book/${product.id}`, { state: { product } });
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '250px' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>₹{product.price}</strong></p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
