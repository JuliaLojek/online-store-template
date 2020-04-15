import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, selectIsError, selectIsLoading } from '../modules/products/products.selectors';
import { ACTION_FETCH_PRODUCTS } from '../modules/products/products.actions';
import ProductCard from './ProductCard/ProductCard';

function ProductList() {
  const productList = useSelector(state => selectAllProducts(state));
  const isError = useSelector(state => selectIsError(state));
  const isLoading = useSelector(state => selectIsLoading(state));
  const dispatch = useDispatch();
  const fetchProducts = () => dispatch (ACTION_FETCH_PRODUCTS());

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    isError ?
      "I couldn't load data"
      :
      isLoading ?
        "loading..."
        :
        <section>
          {productList.map(item => {
            return (
              <ProductCard key={item.id}
                title={item.title}
                image={item.image}
                description={item.description.slice(0, 100) + "..."}
                price={item.price + "$"}
                id={item.id}
              />
            )
          })}
        </section>
  )
}

export default ProductList;