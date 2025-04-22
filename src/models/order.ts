import { DISCOUNT_TYPE, ORDER_STATUS, PAYMENT_METHOD, PAYMENT_STATUS } from '@/constants/app'
import { Schema, model } from 'mongoose'

const COLLECTION_NAME = 'orders'
const DOCUMENT_NAME = 'Order'

const orderSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product' }, // optional ref
        name: { type: String, required: true }, // snapshot
        size: { type: String, required: true },
        quantity: { type: Number, required: true, min: 1 },
        price: { type: Number, required: true }, // đơn giá
        discount: {
          type: {
            type: String,
            enum: Object.values(DISCOUNT_TYPE),
            required: true
          },
          value: { type: Number, required: true }
        }
      }
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      phone: { type: String, required: true },
      addressLine: { type: String, required: true },
      ward: { type: String, required: true },
      district: { type: String, required: true },
      city: { type: String, required: true }
    },
    paymentMethod: {
      type: String,
      enum: Object.values(PAYMENT_METHOD),
      required: true
    },
    paymentStatus: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.PENDING
    },
    orderStatus: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      default: ORDER_STATUS.PENDING
    },
    totalPrice: { type: Number, required: true }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true
  }
)

const OrderModel = model(DOCUMENT_NAME, orderSchema, COLLECTION_NAME)
export default OrderModel
