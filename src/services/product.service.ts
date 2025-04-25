export const getFeaturedProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/featured`, {
      cache: 'no-store' // Tắt cache nếu cần dữ liệu mới nhất
    })

    if (!res.ok) {
      const errorMessage = await res.text() // Lấy chi tiết lỗi từ API nếu có
      throw new Error(`Failed to fetch: ${res.status} - ${errorMessage}`)
    }

    const data = await res.json()

    if (data.status !== 200) {
      throw new Error(`Error from API: ${data.message || 'Unknown error'}`)
    }

    return data.data.products
  } catch (error) {
    console.error('Error fetching featured products:', error)
    throw error
  }
}
