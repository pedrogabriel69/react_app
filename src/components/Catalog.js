import React from 'react';
import ProductCard from './ProductCard';

const Catalog = ({products}) => {
  const catalogItems = products.map((product) =>
    <li>
      <ProductCard key={product.id} product={product} />
    </li>
  );

  return (
    <ul>
      {catalogItems}
    </ul>
  )
};

export default Catalog;
