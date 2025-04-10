import { z } from 'zod'

export const productQuerySchema = z.object({
  searchKey: z.string().optional(),
  page: z.coerce.number().min(1).optional().default(1),
  limit: z.coerce.number().min(1).optional().default(10),
  sortBy: z.enum(['price', 'createdAt']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
  category: z.string().optional(),
  size: z.string().optional()
})

export type ProductQuery = z.infer<typeof productQuerySchema>

export const productCreateSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  price: z.coerce.number().min(0),
  category: z.string().min(1),
  sizes: z.array(
    z.object({
      size: z.string().min(1),
      stock: z.coerce.number().min(0)
    })
  ),
  images: z.array(
    z.object({
      url: z.string().min(1),
      public_id: z.string().min(1)
    })
  ),
  thumbnails: z.array(
    z.object({
      url: z.string().min(1),
      public_id: z.string().min(1)
    })
  ),
  isPublic: z.boolean().optional().default(false),
  createdBy: z.string().min(1),
  updatedBy: z.string().min(1)
})

export type ProductCreate = z.infer<typeof productCreateSchema>
