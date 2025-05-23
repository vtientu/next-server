import { InferSchemaType, model, models, Schema } from 'mongoose'
import slugify from 'slugify'

const COLLECTION_NAME = 'products'
const DOCUMENT_NAME = 'Product'

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    images: [
      {
        url: { type: String, required: true },
        public_id: { type: String, required: true }
      }
    ],
    thumbnails: [
      {
        url: { type: String, required: true },
        public_id: { type: String, required: true }
      }
    ],
    sizes: [
      {
        size: { type: String, required: true },
        stock: { type: Number, required: true, min: 0, default: 0 }
      }
    ],
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    isFeatured: { type: Boolean, default: false, index: true },
    isPublic: { type: Boolean, default: false, index: true, select: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', select: false },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User', select: false }
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true
  }
)

productSchema.index({ name: 'text', description: 'text' })
productSchema.index({ category: 1, 'sizes.size': 1 })

productSchema.pre('save', async function (next) {
  if (!this.isModified('name')) return next()

  const baseSlug = slugify(this.name, { lower: true, strict: true })
  let slug = baseSlug
  let counter = 1

  while (await ProductModel.findOne({ slug })) {
    slug = `${baseSlug}-${counter++}`
  }

  this.slug = slug
  next()
})

const ProductModel = models.Product || model(DOCUMENT_NAME, productSchema, COLLECTION_NAME)
export type ProductDocument = InferSchemaType<typeof productSchema> & { _id: string }
export default ProductModel
