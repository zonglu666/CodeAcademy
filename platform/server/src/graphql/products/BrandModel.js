import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const Schema: mongoose.SchemaType = mongoose.Schema(
  {
    englishName: {
      type: String,
      required: true,
    },
    chineseName: {
      type: String,
    },
  },
  {
    collection: 'brands',
  },
);

export default mongoose.model('Brand', Schema);
