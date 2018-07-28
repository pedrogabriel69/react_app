import React from 'react';
import Image from './Image';
import TextBox from './Textbox';
import Price from './Price';

const ProductCard = ({product}) => {
  const { imageUrl, imageContext, imageHeight, imageWidth } = product.image;

  return (
    <div className="card">
      <div className="image">
        <Image src={imageUrl} alt={imageContext} height={imageHeight} width={imageWidth} />
      </div>
      <div className="text-box">
        <TextBox context={product.context} />
      </div>
      <div className="price-value">
        <Price priceValue={product.priceValue} />
      </div>
      <br/>
    </div>
  )
};

export default ProductCard;
