import React from 'react';

import { contactPath } from '../helpers/routes';
import Contact from '../components/views/Contact';

export default {
  path: contactPath(),
  exact: true,
  strict: true,
  component: Contact
};
