import React from 'react';

function ProductPage({ category }) {
  return (
    <div className="product-page">
      <h2>{category} Products</h2>
      <p>Explore our best {category.toLowerCase()} care products!</p>
      {/* Add more product cards later */}
    </div>
  );
}

export default ProductPage;
