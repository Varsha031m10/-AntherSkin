import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './SkinProducts.css'; // Make sure this CSS is created and imported

const SkinProducts = () => {
  const { addToCart } = useContext(CartContext);
  const [animateId, setAnimateId] = useState(null);

  const products = [
    {
      id: 1,
      name: "Hydrating Face Cream",
      description: "A rich cream to hydrate and nourish your skin.",
      price: "299.99",
      image: "moisturizer.jpg",
    },
    {
      id: 2,
      name: "Soothing Serum",
      description: "A calming serum for sensitive skin.",
      price: "345.99",
      image: "serum.jpg",
    },
    {
      id: 3,
      name: "Exfoliating Scrub",
      description: "Gently exfoliates to reveal smoother skin.",
      price: "255.99",
      image: "cleanser.jpg",
    },
    {
      id: 4,
      name: "Moisturizing Sunscreen",
      description: "Protects your skin while keeping it moisturized.",
      price: "400.99",
      image: "sunscreen.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAnimateId(product.id);
    setTimeout(() => setAnimateId(null), 1000);
  };

  return (
    <div className="skin-products-container">
      <h2 className="section-heading">Our Skincare Products</h2>

      <div className="section-header-image">
        <img
          src="img1.jpg"
          alt="Skin Care Banner"
          className="skin-banner-image"
        />
      </div>

      <div className="carousel-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
              {animateId === product.id && <span className="cart-badge">+1</span>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinProducts;
