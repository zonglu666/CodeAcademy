import ProductModel from './ProductModel';
import BrandModel from './BrandModel';
import type { ProductType, ProductConnection } from './ProductTypes';

const resolvers: Object = {
  products: async ProductConnection => {
    const products = ProductModel.find().populate('brand');
    return {
      products,
    };
  },
};

export default resolvers;
