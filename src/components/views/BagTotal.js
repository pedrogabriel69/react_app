import React from 'react';
import Link from '../Link';

import { bagPath } from '../../helpers/routes';

const BagTotal = (props) => {
  const { total } = props;

  return (
    <button>
      <Link to={bagPath()}>
        {`Checkout: ${total}$`}
      </Link>
    </button>
  )
}

export default BagTotal;
