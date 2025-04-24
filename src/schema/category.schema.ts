import { z } from 'zod'

export const categoryQuerySchema = z.object({
  search: z.string().optional(),
  skip: z.coerce.number().optional(),
  limit: z.coerce.number().optional()
})

export type CategoryQuery = z.infer<typeof categoryQuerySchema>

export const categoryCreateSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  parent: z.string().optional()
})

export type CategoryCreate = z.infer<typeof categoryCreateSchema>
