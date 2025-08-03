import React from 'react';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a great product for your skin.",
      price: "$29.99",
      image: "kit.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "A fantastic moisturizer for dry skin.",
      price: "$34.99",
      image: "moisturizer.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Nourishing face cream for glowing skin.",
      price: "$25.99",
      image: "sunscreen.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      description: "A serum to rejuvenate your skin.",
      price: "$40.99",
      image: "serum.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      description: "A soothing cleanser for sensitive skin.",
      price: "$19.99",
      image: "cleanser.jpg",
    }
  ];

  return (
    <div className="carousel-container">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="price">{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;
