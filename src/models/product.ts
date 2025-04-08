import { model, Schema } from 'mongoose'

const COLLECTION_NAME = 'products'
const DOCUMENT_NAME = 'product'

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: [
      {
        url: String,
        public_id: String
      }
    ],
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    isPublic: { type: Boolean, default: false, index: true, select: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true
  }
)

export const Product = model(DOCUMENT_NAME, productSchema, COLLECTION_NAME)
