import React from 'react';
import ProductCard from './ProductCard';

const Catalog = (props) => {
  const { products } = props;
  const catalogItems = products.map((product) =>
    <li key={product.id}>
      <ProductCard product={product} />
      <br/>
    </li>
  );

  return (
    <ul>
      {catalogItems}
    </ul>
  )
};

export default Catalog;
