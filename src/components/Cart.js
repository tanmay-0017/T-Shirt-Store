import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (item, quantity) => {
    if (quantity > item.stock) {
      alert(`Cannot order more than ${item.stock} of this item.`);
    } else {
      updateQuantity(item, quantity);
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                max={item.stock}
                onChange={e => handleQuantityChange(item, e.target.value)}
              />
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
