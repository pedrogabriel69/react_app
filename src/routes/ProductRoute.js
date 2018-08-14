import React from 'react';

import { productPath } from '../helpers/routes';
import Product from '../components/views/Product';

export default {
  path: productPath(),
  exact: true,
  strict: true,
  component: Product
};
