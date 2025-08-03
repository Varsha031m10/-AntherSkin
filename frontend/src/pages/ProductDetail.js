import React from 'react';
import { useParams } from 'react-router-dom';

const sampleProducts = {
  1: {
    name: 'Pastel Bloom Cleanser',
    description: 'A soothing cleanser with chamomile and green tea extracts.',
    price: '₹499',
    ingredients: 'Aloe Vera, Chamomile, Green Tea, Vitamin E',
  },
  2: {
    name: 'Blush Pink Serum',
    description: 'Hydrating serum with blush pink essence for glow.',
    price: '₹699',
    ingredients: 'Hyaluronic Acid, Rose Extract, Niacinamide',
  },
  3: {
    name: 'Mint Fresh Moisturizer',
    description: 'Lightweight moisturizer for daily use.',
    price: '₹599',
    ingredients: 'Shea Butter, Mint Extract, Ceramides',
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = sampleProducts[id];

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="p-8 bg-pink-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-2">{product.description}</p>
      <p className="font-semibold mb-1">Price: {product.price}</p>
      <p className="mb-4">Ingredients: {product.ingredients}</p>
    </div>
  );
};

export default ProductDetails;
