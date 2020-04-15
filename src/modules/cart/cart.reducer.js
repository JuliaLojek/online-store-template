import { CART_ACTION_TYPES } from "./cart.actions";

const INITIAL_STATE = {
  productsInCartById: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_PRODUCT_TO_CART:
      return state = {
        ...state,
        productsInCartById: [...state.productsInCartById, action.value]
      };
    default:
      return state;
  }
}