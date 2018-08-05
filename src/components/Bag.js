import React from 'react';
import { BagContext } from '../containers/BagProvider';
import BagItem from './BagItem';
import BagTotal from './BagTotal';

const Bag = () => {
  return (
    <BagContext.Consumer>
      {({ items, totalPrice }) => (
        <div>
          <div className="bagItem">
            {(items.length > 0) ? (
              items.map(item => (
                <ul key={item.id}>
                  <BagItem item={item} />
                </ul>
              ))
            ) : (
              <p>
                Your Bag is empty.
              </p>
            )}
          </div>
          <div className="bagTotal">
            <BagTotal total={totalPrice()}/>
          </div>
        </div>
      )}
    </BagContext.Consumer>
  );
}

export default Bag;
