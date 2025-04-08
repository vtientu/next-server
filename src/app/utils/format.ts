import { ZodError } from 'zod'

type FormatZodErrorOptions = {
  firstOnly?: boolean
}

export const formatZodError = (
  error: ZodError,
  options: FormatZodErrorOptions = {
    firstOnly: true
  }
) => {
  const fieldErrors = error.flatten().fieldErrors

  const formattedErrors = Object.fromEntries(
    Object.entries(fieldErrors).map(([key, value]) => {
      return [key, options.firstOnly ? value?.[0] : value]
    })
  )

  return formattedErrors
}
