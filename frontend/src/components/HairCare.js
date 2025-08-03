import React, { useContext, useState } from 'react';
import './HairCare.css';
import hairProduct1 from '../assets/shamp.jpeg';
import hairProduct2 from '../assets/serum1.jpeg';
import hairProduct3 from '../assets/oil.jpeg';
import { CartContext } from './CartContext';

const Haircare = () => {
  const { addToCart } = useContext(CartContext);
  const [addedItemId, setAddedItemId] = useState(null);

  const products = [
    {
      id: 5,
      name: 'Gentle Repair Shampoo',
      image: hairProduct1,
      description: 'A sulfate-free shampoo that gently cleanses and repairs damaged hair.',
      price: '318.99',
    },
    {
      id: 6,
      name: 'Silk Touch Hair Serum',
      image: hairProduct2,
      description: 'Smooth frizz and add shine with this lightweight, non-greasy serum.',
      price: '422.99',
    },
    {
      id: 7,
      name: 'Nourishing Coconut Hair Oil',
      image: hairProduct3,
      description: 'Deep conditioning oil enriched with coconut extract for stronger hair.',
      price: '215.49',
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 700);
  };

  return (
    <div className="haircare-container">
      <h2>Our Haircare Products</h2>
      <img src="hair.jpeg" alt="Haircare Banner" className="haircare-banner" />
      <div className="haircare-products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <div className="add-button-wrapper">
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              {addedItemId === product.id && <span className="add-feedback">+1</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Haircare;
