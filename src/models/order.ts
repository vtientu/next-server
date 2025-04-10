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
            enum: ['percent', 'fixed'],
            default: null
          },
          value: { type: Number, default: 0 }
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
      enum: ['cod', 'vnpay', 'momo'],
      required: true
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending'
    },
    orderStatus: {
      type: String,
      enum: ['pending', 'confirmed', 'delivering', 'done', 'cancelled'],
      default: 'pending'
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
