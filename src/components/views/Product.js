import React from 'react';
import ProductCard from '../ProductCard';

const Product = (props) => {
  const { product } = props.location.state;

  return (
    <div className={"product_" + product.id}>
      <ProductCard product={product} />
    </div>
  )
}

export default Product;
