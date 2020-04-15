import { PRODUCTS_ACTION_TYPES } from "./products.actions";

const INITIAL_STATE = {
  productList: [],
  isError: false,
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPES.SET_FETCHED_PRODUCTS:
      return state = {
        ...state,
        productList: action.value,
        isError: false,
        isLoading: false
      };
    case PRODUCTS_ACTION_TYPES.SET_ERROR_PRODUCTS:
      return state = {
        ...state,
        productList: [],
        isError: true,
        isLoading: false
      };
    case PRODUCTS_ACTION_TYPES.SET_LOADING_PRODUCTS:
      return state = {
        ...state,
        productList: [],
        isError: false,
        isLoading: true
      };
    default:
      return state;
  }
}