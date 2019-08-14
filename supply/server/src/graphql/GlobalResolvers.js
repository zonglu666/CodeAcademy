// @flow
import productResolvers from './products/ProductResolvers';

type ResolversType = {
  Query: Object,
  Mutation: Object,
};

const globalResolvers: ResolversType = {
  Query: {
    products: productResolvers.products,
  }
};

export default globalResolvers;
