import React, { Component } from 'react';
import PRODUCTS from '../constants/products';
import { BagProvider } from './BagProvider';
import Catalog from '../components/Catalog';
import Bag from '../components/Bag';

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
      <BagProvider>
        <div className="CatalogContainer">
          <h2>Products</h2>
          <Catalog products={products} />
        </div>
        <div className="bag">
          <Bag />
        </div>
      </BagProvider>
    );
  }
}

export default CatalogContainer;
