import React from 'react';
import { BagContext } from '../containers/BagProvider';

const AddToBagButton = (props) => {
  const { product } = props;

  return (
    <BagContext.Consumer>
      {({ addItem }) => (
        <button onClick={() => addItem(product)}>
          Add item
        </button>
      )}
    </BagContext.Consumer>
  );
}

export default AddToBagButton;
