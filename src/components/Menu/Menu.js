import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAmountOfProductsInCart } from '../../modules/cart/cart.selectors';

function Menu() {
  const amountOfProductsInCart = useSelector(state => selectAmountOfProductsInCart(state));
  
  return (
    <nav>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/cart">Cart ({amountOfProductsInCart})</Link>
    </nav>
  );
}

export default Menu;