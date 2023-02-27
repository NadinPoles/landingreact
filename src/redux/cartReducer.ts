import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAR_CART,
  CLEAR_CARTORDER,
} from "./actionTypes";
import { CartState } from "./types";
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  clearCartOrder,
} from "./actions";

const initialState: CartState = {
  cart: [],
};

type ProductAction = ReturnType<
  | typeof addToCart
  | typeof removeFromCart
  | typeof incrementQuantity
  | typeof decrementQuantity
  | typeof clearCart
  | typeof clearCartOrder
>;

export default function cartReducer(
  state = initialState,
  action: ProductAction
) {
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        });
        return { ...state, cart: tempCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      if (window.confirm("Удалить товар?")) {
        return {
          ...state,
          cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
        };
      } else {
        return state;
      }
    case INCREMENT_QUANTITY:
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return state;
    case DECREMENT_QUANTITY:
      const item_decr = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (item_decr) {
        if (item_decr.quantity == 1) {
          item_decr.quantity = 1;
        } else {
          item_decr.quantity--;
        }
        return {
          ...state,
          cart: [...state.cart],
        };
      }
      return state;
    case CLEAR_CART:
      if (window.confirm("Очистить корзину?")) {
        return { ...state, cart: [] };
      } else {
        return state;
      }
    case CLEAR_CARTORDER:
      return { ...state, cart: [] };
    default:
      return state;
  }
}
