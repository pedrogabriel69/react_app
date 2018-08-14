import React, { Component } from 'react';

import PRODUCTS from '../constants/products';
import Catalog from '../components/views/Catalog';
import Bag from '../components/views/Bag';

class CatalogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <div className="CatalogContainer">
          <Catalog products={products} />
        </div>
        <div className="bag">
          <Bag />
        </div>
      </div>
    );
  }
}

export default CatalogContainer;
