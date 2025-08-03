import React from 'react';
import ProductCard from '../components/ProductCard';

// Import your images
import aloe from '../assets/aloe.webp';
import charcoal from '../assets/charcoal.webp';
import vitamin from '../assets/vitamin.webp';

const products = [
  {
    id: 1,
    name: 'Aloe Vera Moisturizer',
    description: 'Hydrates and soothes skin',
    price: 299,
    image: aloe,
  },
  {
    id: 2,
    name: 'Charcoal Face Wash',
    description: 'Deep cleansing with natural charcoal',
    price: 199,
    image: charcoal,
  },
  {
    id: 3,
    name: 'Vitamin C Serum',
    description: 'Brightens and evens skin tone',
    price: 499,
    image: vitamin,
  },
];

const Home = () => {
  return (
    <div>
      <h1>Skin Care Products</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
