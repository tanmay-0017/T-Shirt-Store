import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ products, addToCart }) => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    type: '',
    priceRange: [0, 100],
  });
  const [error, setError] = useState('');

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.color.toLowerCase().includes(search.toLowerCase()) ||
      product.type.toLowerCase().includes(search.toLowerCase())
    )
    .filter(product =>
      (filters.gender === '' || product.gender === filters.gender) &&
      (filters.color === '' || product.color === filters.color) &&
      (filters.type === '' || product.type === filters.type) &&
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1]
    );

  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      addToCart(product);
      setError('');
    } else {
      setError('This item is out of stock.');
    }
  };

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select onChange={e => setFilters({ ...filters, gender: e.target.value })}>
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select onChange={e => setFilters({ ...filters, color: e.target.value })}>
          <option value="">All Colors</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <select onChange={e => setFilters({ ...filters, type: e.target.value })}>
          <option value="">All Types</option>
          <option value="polo">Polo</option>
          <option value="round-neck">Round Neck</option>
        </select>
        <label>
          Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[1]}
            onChange={e => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
          />
        </label>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
