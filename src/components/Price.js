import React from 'react';

const Price = (props) => {
  const { priceValue } = props;

  return (
    <span>
      {` ${priceValue}$`}
    </span>
  )
}

export default Price;
