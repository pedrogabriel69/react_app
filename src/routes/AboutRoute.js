import React from 'react';

import { aboutPath } from '../helpers/routes';
import About from '../components/views/About.js';

export default {
  path: aboutPath(),
  exact: true,
  strict: true,
  component: About
};
