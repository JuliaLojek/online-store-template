import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProductsInCart, selectTotalSum } from '../modules/cart/cart.selectors';

function CartView() {
  const productsInCart = useSelector(state => selectAllProductsInCart(state));
  const totalSum = useSelector(state => selectTotalSum(state));

  return (
    <main>
      <h2>
        Products in your cart:
      </h2>
      {productsInCart && productsInCart.map(item => {
        return (
          <div key={item.id}>
            <p>{item.title} - <b>{item.price + "$"}</b></p>
          </div>
        )
      })}
      <div>
        <h3>
          Total sum: {totalSum + "$"}
        </h3>
      </div>
    </main>
  );
}

export default CartView;