import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAR_CART,
  CLEAR_CARTORDER,
  GET_SECTION_PRODUCTS,
  SET_WIDTH_FILTER,
} from "./actionTypes";
import { typedAction, Product } from "./types";
import { FormEvent } from "react";

export const addToCart = (product: Product) => {
  return typedAction(ADD_TO_CART, product);
};

export const removeFromCart = (product: Product) => {
  return typedAction(REMOVE_FROM_CART, product);
};

export const incrementQuantity = (product: Product) => {
  return typedAction(INCREMENT_QUANTITY, product);
};

export const decrementQuantity = (product: Product) => {
  return typedAction(DECREMENT_QUANTITY, product);
};

export const clearCart = () => {
  return typedAction(CLEAR_CART);
};

export const clearCartOrder = () => {
  return typedAction(CLEAR_CARTORDER);
};

export const setWidthFilter = (e: FormEvent<HTMLInputElement>) => {
  return typedAction(SET_WIDTH_FILTER, e);
};

export const getSectionProducts = (section: Product[]) => {
  return typedAction(GET_SECTION_PRODUCTS, section);
};
