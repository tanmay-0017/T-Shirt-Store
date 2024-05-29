import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { addToCart, removeFromCart, updateQuantity } from './redux/actions/cartActions';
import './styles/App.css';

const App = () => {
  const products = [
    { id: 1, name: 'Red Polo', color: 'red', type: 'polo', price: 20, gender: 'male', image: '/images/red_polo.jpg' },
    { id: 2, name: 'Blue Round-Neck', color: 'blue', type: 'round-neck', price: 15, gender: 'female', image: '/images/blue_round_neck.jpg' },
    { id: 1, name: 'Red Polo', color: 'red', type: 'polo', price: 20, gender: 'male', image: '/images/red_polo.jpg' },
    { id: 2, name: 'Blue Round-Neck', color: 'blue', type: 'round-neck', price: 15, gender: 'female', image: '/images/blue_round_neck.jpg' },
    { id: 3, name: 'Green Polo', color: 'green', type: 'polo', price: 22, gender: 'male', image: '/images/green_polo.jpg' },
    { id: 4, name: 'Yellow Round-Neck', color: 'yellow', type: 'round-neck', price: 18, gender: 'female', image: '/images/yellow_round_neck.jpg' },
    { id: 5, name: 'Black Polo', color: 'black', type: 'polo', price: 25, gender: 'male', image: '/images/black_polo.jpg' },
    { id: 6, name: 'White Round-Neck', color: 'white', type: 'round-neck', price: 20, gender: 'female', image: '/images/white_round_neck.jpg' },
    { id: 7, name: 'Pink Polo', color: 'pink', type: 'polo', price: 24, gender: 'female', image: '/images/pink_polo.jpg' },
    { id: 8, name: 'Gray Round-Neck', color: 'gray', type: 'round-neck', price: 19, gender: 'male', image: '/images/gray_round_neck.jpg' }
  ];

  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = product => dispatch(addToCart(product));
  const handleRemoveFromCart = product => dispatch(removeFromCart(product));
  const handleUpdateQuantity = (product, quantity) => dispatch(updateQuantity(product, quantity));

  return (
    <Router>
      <div className="app">
      <header>
          <h1>T-Shirt Store</h1>
          <div className="header-links">
            <Link to="/" className="home-button">Home</Link>
            <Link to="/cart" className="cart-button">
              Cart
              <span className="cart-count">{cartItems.length}</span>
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage products={products} addToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={handleUpdateQuantity} removeFromCart={handleRemoveFromCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

