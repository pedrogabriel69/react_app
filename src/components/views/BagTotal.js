import React from 'react';

import { Button } from 'reactstrap';

import Link from '../Link';
import { bagPath } from '../../helpers/routes';

const BagTotal = (props) => {
  const { total } = props;

  return (
    <Link to={bagPath()}>
      <Button color="success">
        {`Checkout: ${total}$`}
      </Button>
    </Link>
  )
}

export default BagTotal;
