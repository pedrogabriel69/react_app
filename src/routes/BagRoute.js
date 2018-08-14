import React from 'react';

import { bagPath } from '../helpers/routes';
import Bag from '../components/views/Bag';

export default {
  path: bagPath(),
  exact: true,
  strict: true,
  component: Bag
};
