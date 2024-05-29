export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  payload: product
});

export const updateQuantity = (product, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { product, quantity }
});
