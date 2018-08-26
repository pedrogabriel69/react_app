import React, { Component } from 'react';

import request from 'superagent';

import Catalog from '../components/views/Catalog';
import Bag from '../components/views/Bag';

const domen = 'https://cdn.contentful.com';
const space_id = 'mev3k65cznn7';
const environment = 'master';
const accessToken = '67c70f0fb26aac98bf4ebd36101e03d44d8f1e50ae3cee7345cba6117479602b';
const endPoint = `${domen}/spaces/${space_id}/environments/${environment}/entries`;

class CatalogContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    request
      .get(endPoint)
      .query({access_token: accessToken, 'content_type': 'product'})
      .then(({ body: { items } }) => {
        this.setState( {items} );
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="CatalogContainer">
        <Catalog items={items} />
      </div>
    );
  }
}

export default CatalogContainer;
