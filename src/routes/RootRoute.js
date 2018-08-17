import React from 'react';

import { rootPath } from '../helpers/routes';
import Catalog from '../containers/CatalogContainer';

export default {
  path: rootPath(),
  exact: true,
  strict: true,
  component: Catalog
};
