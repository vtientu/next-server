import { model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Category'
const COLLECTION_NAME = 'categories'

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const CategoryModel = model(DOCUMENT_NAME, categorySchema)
export default CategoryModel
