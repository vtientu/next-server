import { z } from 'zod'

/**
 * Parse query object with zod schema, ignore invalid fields
 * @param schema ZodObject schema
 * @param raw raw query (usually from URLSearchParams)
 * @returns Partial result with only valid fields
 */
export function parseQueryWithZod<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  raw: Record<string, string>
): Partial<z.infer<z.ZodObject<T>>> {
  const result: Partial<z.infer<z.ZodObject<T>>> = {}

  for (const key in raw) {
    if (key in schema.shape) {
      const field = schema.shape[key as keyof T]
      const parsed = field.safeParse(raw[key])
      if (parsed.success) {
        result[key as keyof T] = parsed.data
      }
    }
  }

  return result
}
