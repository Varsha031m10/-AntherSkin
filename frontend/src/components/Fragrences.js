// src/components/Fragrances.js
import React, { useContext, useState } from 'react';
import './Fragrences.css';
import fragranceProduct1 from '../assets/fragrance1.jpeg';
import fragranceProduct2 from '../assets/fragrance2.jpeg';
import fragranceProduct3 from '../assets/fragrance3.jpeg';
//import fragranceBanner from '../assets/fragrences.jpeg'; // <-- Banner image
import { CartContext } from './CartContext';

const Fragrances = () => {
  const { addToCart } = useContext(CartContext);
  const [addedItemId, setAddedItemId] = useState(null);

  const products = [
    {
      id: 8,
      name: 'Rose Bloom Eau de Parfum',
      image: fragranceProduct1,
      description: 'Elegant and romantic rose scent for day and night.',
      price: '399.99',
    },
    {
      id: 9,
      name: 'Ocean Breeze Mist',
      image: fragranceProduct2,
      description: 'Refreshing aquatic fragrance perfect for summer.',
      price: '279.50',
    },
    {
      id: 10,
      name: 'Amber Nights Intense',
      image: fragranceProduct3,
      description: 'Warm amber and spice blend for a bold evening look.',
      price: '450.00',
    },
  ];
  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 700);
  };


  return (
    <div className="fragrance-container">
      <h2 className="fragrance-heading">Our Fragrance Products</h2>
      <img src="fragrences.jpeg" alt="Fragrance Banner" className="fragrance-banner" />
      <div className="fragrance-products">
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

export default Fragrances;
