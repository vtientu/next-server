import React from 'react'
import ProductFilters from './ProductFilters'

// Define the Product type
interface Product {
  id: string | number
  name: string
  description: string
  price: number
  // Add other product properties as needed
}

async function getProductsByCategory(category: string): Promise<Product[]> {
  if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error('API base URL is not configured')
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?category=${category}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) {
      // Handle specific HTTP errors
      if (res.status === 404) {
        throw new Error('Category not found')
      }
      if (res.status === 429) {
        throw new Error('Too many requests. Please try again later')
      }
      throw new Error(`Failed to fetch products: ${res.statusText}`)
    }

    const data = await res.json()
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching products: ${error.message}`)
    }
    throw new Error('An unexpected error occurred while fetching products')
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const products = await getProductsByCategory(params.slug)

  if (!products || products.length === 0) {
    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'>Category: {params.slug}</h1>
        <p className='text-gray-600'>No products found in this category.</p>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Category: {params.slug}</h1>

      <ProductFilters
        onFilterChange={(filters) => {
          'use client'
          console.log(filters)
        }}
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {products.map((product: Product) => (
          <div key={product.id} className='border p-4 rounded-lg shadow hover:shadow-md transition-shadow'>
            <h2 className='text-lg font-semibold'>{product.name}</h2>
            <p className='text-gray-600 mt-2'>{product.description}</p>
            <p className='font-bold text-blue-600 mt-2'>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
