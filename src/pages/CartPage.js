import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
