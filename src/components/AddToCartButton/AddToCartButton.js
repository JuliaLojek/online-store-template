import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTION_ADD_PRODUCT_TO_CART } from '../../modules/cart/cart.actions';

function AddToCartButton(props) {
  const dispatch = useDispatch();
  const addToCart = (value) => dispatch (ACTION_ADD_PRODUCT_TO_CART(value));
  
  return (
    <button onClick={() => addToCart(props.id)}>
      add to cart
    </button>
  );
}

export default AddToCartButton;