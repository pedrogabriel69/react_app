import React, { Component } from 'react';
import Catalog from '../components/Catalog';
import PRODUCTS from '../constants/products';

class CatalogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
    };
  }

  render() {
    const {products} = this.state;

    return (
      <div className="catalog-container">
        <Catalog products={products} />
      </div>
    );
  }
}

export default CatalogContainer;
