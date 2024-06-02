import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../actions/cartActions';

const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log(action.payload);
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      // console.log(existingItem && existingItem.quantity < action.payload.availability);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      // if (action.payload.availability === 0){
      //   return {
      //     ...state
      //   };
      // }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.product.id
            ? { ...item, quantity: Number(action.payload.quantity) }
            : item
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
