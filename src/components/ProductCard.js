import React from 'react';

import { Card, CardBody, CardTitle } from 'reactstrap';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToBagButton from './AddToBagButton';
import Link from './Link';
import { productPath } from '../helpers/routes';

const ProductCard = (props) => {
  const {product} = props;
  const { imageUrl, imageContext, imageHeight, imageWidth } = product.image;

  return (
    <Card>
      {/* <Image src={imageUrl} alt={imageContext} height={imageHeight} width={imageWidth} /> */}
      <img src={imageUrl} alt={imageContext} height={imageHeight} width={imageWidth} />
      <CardBody>
        <CardTitle>
          <Link to={{
            pathname: productPath(product.id),
            state: {
              product: product
            }
          }}>
            {/* <TextBox context={product.context}/> */}
            {product.context}
          </Link>
          {/* <Price priceValue={product.priceValue}/> */}
          {` ${product.priceValue}$`}
        </CardTitle>
        <AddToBagButton product={product} />
      </CardBody>
    </Card>
  )
};

export default ProductCard;
