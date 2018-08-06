import React from 'react';

const BagTotal = (props) => {
  const { total } = props;

  return (
    <div>
      {`Total: ${total}$`}
    </div>
  )
}

export default BagTotal;
