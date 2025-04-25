// hooks/useCategories.ts
import useSWR from 'swr'
import { buildCategoryTree } from '@/utils/category.utils'
import { CategoryDocument } from '@/models/category'
import { fetcher } from '@/libs/fetcher'

export const useCategories = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category`,
    async (url) => {
      const res = await fetcher<{ data: { categories: CategoryDocument[] } }>(url)
      return buildCategoryTree(res.data.categories) as (CategoryDocument & {
        children: CategoryDocument[]
        _id: string
      })[]
    },
    {
      revalidateOnFocus: false,
      dedupingInterval: 1000 * 60 * 5 // cache 5 phút
    }
  )

  return {
    categories: data ?? [],
    isLoading,
    isError: error
  }
}
