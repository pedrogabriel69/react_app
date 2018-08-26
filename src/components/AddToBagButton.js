import React from 'react';
import { BagContext } from '../containers/BagProvider';

import { Button } from 'reactstrap';

const AddToBagButton = (props) => {
  const { product } = props;

  return (
    <BagContext.Consumer>
      {({ addItem }) => (
        <Button color="success" onClick={() => addItem(product)}>
          Add to Cart
        </Button>
      )}
    </BagContext.Consumer>
  );
}

export default AddToBagButton;
