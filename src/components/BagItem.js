import React from 'react';
import TextBox from './TextBox';

const BagItem = (props) => {
  const { item } = props;

  return (
    <li>
      {`${item.context} Qty: ${item.quantity} × ${item.priceValue * item.quantity}$`}
    </li>
  );
}

export default BagItem;
