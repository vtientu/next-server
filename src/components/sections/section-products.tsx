import ShoesCard from '@/components/common/product-card'
import { ImageConstants } from '@/constants'
import { ProductDocument } from '@/models/product'
import React from 'react'

const SectionProduct = ({ title, products }: { title: string; products: ProductDocument[] }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='text-center mx-auto'>
        <h2 className='uppercase border-b-2 border-gray-400 pb-2 font-bold text-lg'>{title}</h2>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4'>
        {products.map((product) => (
          <ShoesCard key={product.id} shoes={product} />
        ))}
      </div>
    </div>
  )
}

export default SectionProduct

const PRODUCT = [
  {
    id: 1,
    name: "Air Jordan 1 Low 'Midnight Navy'",
    thumbnail: ImageConstants.PRODUCT,
    price: 2100000,
    price_discount: 1575000,
    percent_discount: 25
  },
  {
    id: 2,
    name: 'Product 2',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 200,
    price_discount: 200,
    percent_discount: 10
  },
  {
    id: 3,
    name: 'Product 3',
    thumbnail: ImageConstants.PRODUCT,
    price: 300,
    price_discount: 300,
    percent_discount: 10
  },
  {
    id: 4,
    name: 'Product 4',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 400,
    price_discount: 400,
    percent_discount: 10
  },
  {
    id: 5,
    name: 'Product 5',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 500,
    price_discount: 500,
    percent_discount: 10
  },
  {
    id: 6,
    name: 'Product 6',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 600,
    price_discount: 600,
    percent_discount: 10
  },
  {
    id: 7,
    name: 'Product 7',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 700,
    price_discount: 700,
    percent_discount: 10
  },
  {
    id: 8,
    name: 'Product 8',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 800,
    price_discount: 800,
    percent_discount: 10
  },
  {
    id: 9,
    name: 'Product 9',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 900,
    price_discount: 900,
    percent_discount: 10
  },
  {
    id: 10,
    name: 'Product 10',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 1000,
    price_discount: 1000,
    percent_discount: 10
  },
  {
    id: 11,
    name: 'Product 11',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 1100,
    price_discount: 1100,
    percent_discount: 10
  },
  {
    id: 12,
    name: 'Product 12',
    thumbnail: ImageConstants.PRODUCT,
    thumbnail_hover: ImageConstants.PRODUCT_HOVER,
    price: 1200,
    price_discount: 1200,
    percent_discount: 10
  }
]
