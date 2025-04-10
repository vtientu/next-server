import logger from '@/app/utils/logger'
import { parseQueryWithZod } from '@/app/utils/zod.utils'
import ProductModel, { ProductDocument } from '@/models/product'
import { productCreateSchema, productQuerySchema } from '@/schema/product.schema'
import { FilterQuery, SortOrder } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const rawQuery = Object.fromEntries(searchParams.entries())
    const parsedQuery = parseQueryWithZod(productQuerySchema, rawQuery)

    const filter: FilterQuery<ProductDocument> = {}

    if (parsedQuery.searchKey) {
      filter.$text = {
        $search: parsedQuery.searchKey
      }
    }

    if (parsedQuery.category) {
      filter.category = parsedQuery.category
    }

    if (parsedQuery.size) {
      filter['sizes.size'] = parsedQuery.size
    }

    const sort: { [key: string]: SortOrder } = {}
    if (parsedQuery.sortBy) {
      sort[parsedQuery.sortBy] = parsedQuery.sortOrder === 'asc' ? 1 : -1
    } else {
      sort.createdAt = -1
    }

    const page = parsedQuery.page ?? 1
    const limit = parsedQuery.limit ?? 10
    const skip = (page - 1) * limit

    const [products, total] = await Promise.all([
      ProductModel.find(filter).sort(sort).skip(skip).limit(limit),
      ProductModel.countDocuments(filter)
    ])

    return NextResponse.json({ data: products, pagination: { page, limit, total } })
  } catch (error) {
    logger.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = productCreateSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.message, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const product = await ProductModel.create(parsed.data)
    return NextResponse.json({ data: product }, { status: 201 })
  } catch (error) {
    logger.error(error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
