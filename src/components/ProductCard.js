import React from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToBagButton from './AddToBagButton';

const ProductCard = (props) => {
  const { product } = props;
  const { imageUrl, imageContext, imageHeight, imageWidth } = product.image;

  return (
    <div className="card">
      <div className="image">
        <Image src={imageUrl} alt={imageContext} height={imageHeight} width={imageWidth} />
      </div>
      <div className="textBoxPrice">
        <TextBox context={product.context} />
        <Price priceValue={product.priceValue} />
      </div>
      <AddToBagButton product={product} />
    </div>
  )
};

export default ProductCard;
