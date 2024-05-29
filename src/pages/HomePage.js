import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ products, addToCart }) => {
  return (
    <div className="home-page">
      <h1>Our Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default HomePage;
