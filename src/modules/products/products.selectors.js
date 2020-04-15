export const selectAllProducts = (state) => {
  return state.products.productList;
};

export const selectIsError = (state) => {
  return state.products.isError;
};

export const selectIsLoading = (state) => {
  return state.products.isLoading;
};