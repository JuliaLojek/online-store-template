export const selectAllProductsInCart = (state) => {
  return state.products.productList.filter(item => {
    return state.cart.productsInCartById.includes(item.id);
  });
};

export const selectTotalSum = (state) => {
  return selectAllProductsInCart(state).reduce(function(acc, item){
    return acc + item.price
  }, 0);
};

export const selectAmountOfProductsInCart = (state) => {
  return selectAllProductsInCart(state).length;
};