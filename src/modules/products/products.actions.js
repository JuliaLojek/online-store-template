export const PRODUCTS_ACTION_TYPES = {
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  SET_FETCHED_PRODUCTS: "SET_FETCHED_PRODUCTS",
  SET_ERROR_PRODUCTS: "SET_ERROR_PRODUCTS",
  SET_LOADING_PRODUCTS: "SET_LOADING_PRODUCTS"
};

export const ACTION_FETCH_PRODUCTS = () => {
  return dispatch => {
    return fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          return dispatch(ACTION_SET_FETCHED_PRODUCTS(data));
        } else {
          return dispatch(ACTION_SET_ERROR_PRODUCTS());
        }
      })
      .catch(error => dispatch(ACTION_SET_ERROR_PRODUCTS()))
  }
};

export const ACTION_SET_FETCHED_PRODUCTS = (productList) => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_FETCHED_PRODUCTS,
    value: productList
  };
};

export const ACTION_SET_ERROR_PRODUCTS = () => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_ERROR_PRODUCTS
  };
};

export const ACTION_SET_LOADING_PRODUCTS = () => {
  return {
    type: PRODUCTS_ACTION_TYPES.SET_LOADING_PRODUCTS
  };
};