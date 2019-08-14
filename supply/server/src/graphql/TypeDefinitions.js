// @flow
import { gql } from 'apollo-server';
import productTypes from './products/productTypes';

const queryTypes: string = gql`
  type Query {
    products: ProductConnection
  }
`;

const globalQuery: Array<string> = [productTypes, queryTypes];

export default globalQuery;
