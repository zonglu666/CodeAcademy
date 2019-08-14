// @flow
import { gql } from 'apollo-server';

type Brand = {
  englishName: string,
  chineseName: string,
};

export type ProductType = {
  _id: string,
  name: string,
  status: string,
  price: int,
  brand: Brand,
};

export type ProductConnection = {
  products: Array<ProductType>,
};

const productType: string = gql`
  type Brand {
    englishName: String
    chineseName: String
  }

  type Product {
    _id: String
    name: String
    status: String
    price: Int
    brand: Brand
  }

  type ProductConnection {
    products: [Product]
  }
`;

export default productType;
