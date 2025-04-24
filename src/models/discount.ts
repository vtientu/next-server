import { DISCOUNT_APPLY_TO, DISCOUNT_TYPE } from '@/constants/app'
import { Schema, model, models } from 'mongoose'

const COLLECTION_NAME = 'discounts'
const DOCUMENT_NAME = 'Discount'

const discountSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, enum: Object.values(DISCOUNT_TYPE), required: true },
    value: { type: Number, required: true },
    code: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    maxUsage: { type: Number, required: true },
    usage: { type: Number, default: 0 },
    applyTo: {
      type: String,
      enum: Object.values(DISCOUNT_APPLY_TO),
      required: true
    },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    isActive: { type: Boolean, default: true }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true
  }
)

const DiscountModel = models.Discount || model(DOCUMENT_NAME, discountSchema, COLLECTION_NAME)
export default DiscountModel
