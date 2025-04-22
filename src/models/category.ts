import { InferSchemaType, model, models, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Category'
const COLLECTION_NAME = 'categories'

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    parent: { type: Schema.Types.ObjectId, ref: 'Category' }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const CategoryModel = models.Category || model(DOCUMENT_NAME, categorySchema)
export type CategoryDocument = InferSchemaType<typeof categorySchema> & { _id: string }
export default CategoryModel
