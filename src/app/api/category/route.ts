import logger from '@/app/utils/logger'
import { parseQueryWithZod } from '@/app/utils/zod.utils'
import CategoryModel, { CategoryDocument } from '@/models/category'
import { categoryQuerySchema } from '@/schema/category.schema'
import { FilterQuery } from 'mongoose'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const rawQuery = Object.fromEntries(searchParams.entries())
    const parsedQuery = parseQueryWithZod(categoryQuerySchema, rawQuery)

    const query: FilterQuery<CategoryDocument> = {}

    if (parsedQuery.search) {
      query.name = parsedQuery.search
    }

    let queryBuilder = CategoryModel.find(query)

    if (parsedQuery.skip) {
      queryBuilder = queryBuilder.skip(parsedQuery.skip)
    }

    if (parsedQuery.limit) {
      queryBuilder = queryBuilder.limit(parsedQuery.limit)
    }

    const [categories, totalCategories] = await Promise.all([queryBuilder.exec(), CategoryModel.countDocuments(query)])

    return NextResponse.json({
      status: 200,
      data: {
        categories,
        totalData: totalCategories
      }
    })
  } catch (error) {
    logger.error(error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}
