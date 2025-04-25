import { InferSchemaType, models } from 'mongoose'
import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'users'

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      default: 'other'
    },
    avatar: String
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

const UserModel = models.User || model(DOCUMENT_NAME, UserSchema, COLLECTION_NAME)
export type UserDocument = InferSchemaType<typeof UserSchema> & { _id: string }
export default UserModel
