// models/discount.model.ts
import { Schema, model } from 'mongoose'

const COLLECTION_NAME = 'discounts'
const DOCUMENT_NAME = 'Discount'

const discountSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },

    type: { type: String, enum: ['percent', 'fixed'], required: true },
    value: { type: Number, required: true },

    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },

    applyTo: {
      type: String,
      enum: ['all', 'category', 'product'],
      required: true
    },

    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true
  }
)

const DiscountModel = model(DOCUMENT_NAME, discountSchema, COLLECTION_NAME)
export default DiscountModel
