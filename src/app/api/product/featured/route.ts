import logger from '@/app/utils/logger'
import { parseQueryWithZod } from '@/app/utils/zod.utils'
import mongoose from '@/database/mongoose'
import ProductModel, { ProductDocument } from '@/models/product'
import { productQuerySchema } from '@/schema/product.schema'
import { FilterQuery } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    await mongoose.connectDB()
    const { searchParams } = new URL(req.url)
    const rawQuery = Object.fromEntries(searchParams.entries())
    const parsedQuery = parseQueryWithZod(productQuerySchema, rawQuery)

    const filter: FilterQuery<ProductDocument> = {
      isFeatured: true,
      isPublic: true
    }

    if (parsedQuery.searchKey) {
      filter.$text = {
        $search: parsedQuery.searchKey
      }
    }

    const page = parsedQuery.page ?? 1
    const limit = parsedQuery.limit ?? 10
    const skip = (page - 1) * limit

    const [products, total] = await Promise.all([
      ProductModel.find(filter).skip(skip).limit(limit).lean(),
      ProductModel.countDocuments(filter)
    ])

    return NextResponse.json({
      status: 200,
      data: {
        products,
        totalData: total
      }
    })
  } catch (error) {
    logger.error(error)
    return NextResponse.json(
      {
        status: 500,
        message: 'Internal server error'
      },
      { status: 500 }
    )
  }
}
