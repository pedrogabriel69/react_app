import React, { Component, createContext } from 'react';

export const BagContext = createContext();

export class BagProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
  }

  addItem(item) {
    const { items } = this.state;
    const addedItem = Object.assign({ quantity: 1 }, item);
    const updatedItems = [...items];
    const existingItem = items.find(i => i.context === item.context);

    if (existingItem) {
      const itemPosition = items.findIndex(i => i.id === item.id);
      addedItem.quantity += updatedItems[itemPosition].quantity;
      updatedItems.splice(itemPosition, 1, addedItem);
    } else {
      updatedItems.push(addedItem);
    }

    this.setState({
      items: updatedItems
    });
  }

  totalPrice() {
    const { items } = this.state;
    const total = items.reduce((sum, item) => sum + (item.priceValue * item.quantity), 0);
    return total;
  }

  render() {
    const { items } = this.state;
    const { children } = this.props;

    return (
      <BagContext.Provider value={{
        items,
        addItem: this.addItem,
        totalPrice: this.totalPrice
      }}>
        {children}
      </BagContext.Provider>
    );
  }
}
