import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const Schema: mongoose.SchemaType = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    price: {
      type: Number,
    },
    brand: {
      type: ObjectId,
      ref: 'Brand',
    },
  },
  {
    collection: 'products',
  },
);

export default mongoose.model('Product', Schema);
