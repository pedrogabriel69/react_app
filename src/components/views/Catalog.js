import React from 'react';

import ProductCard from '../ProductCard';
import Bag from './Bag';

import { Container, Row, Col } from 'reactstrap';

const Catalog = (props) => {
  const { items } = props;
  const catalogItems = items.map((product) =>
    <Col sm="4" key={product.fields.id}>
      <ProductCard product={product.fields} />
    </Col>
  );

  return (
    <Container>
      <Bag />
      <br />
      <Row>
        {catalogItems}
      </Row>
    </Container>
  )
};

export default Catalog;
