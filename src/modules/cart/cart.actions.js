export const CART_ACTION_TYPES = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART"
};

export const ACTION_ADD_PRODUCT_TO_CART = (id) => {
  return {
    type: CART_ACTION_TYPES.ADD_PRODUCT_TO_CART,
    value: id
  };
};
