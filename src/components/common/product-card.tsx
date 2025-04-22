import { cn } from '@/lib/utils'
import { ProductWithDiscount } from '@/types/product.types'
import { formatPrice } from '@/utils/format.utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { memo } from 'react'

const ShoesCard = ({ product }: { product: ProductWithDiscount }) => {
  return (
    <div className='flex flex-col px-4 mb-10'>
      <Link
        href={`/product/${product.slug}`}
        className='relative cursor-pointer aspect-[5/4] hover:scale-105 transition-all duration-500 h-[160px] xl:h-[180px]'
      >
        <Image
          fill
          sizes='(max-width: 768px) 75vw, (max-width: 1200px) 75vw, 100vw'
          alt={product.name}
          src={product.thumbnails[0].url}
          className={cn('object-contain', product?.thumbnails?.[1] && 'hover:opacity-0')}
          priority
        />
        {product.thumbnails?.[1] && (
          <Image
            fill
            sizes='(max-width: 768px) 75vw, (max-width: 1200px) 75vw, 100vw'
            alt={product.name}
            src={product.thumbnails[1].url}
            className='object-contain opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-500'
          />
        )}
      </Link>
      <div className='flex flex-col gap-5 text-center'>
        <Link href={`/product/${product.slug}`} className='font-semibold cursor-pointer leading-[22px] h-[44px]'>
          {product.name}
        </Link>
        <div className='flex items-center justify-center space-x-2 flex-wrap text-[15px]'>
          <p className='text-md font-semibold text-[#f00]'>{formatPrice(product.price)}</p>
          <p className='text-md line-through text-gray-400'>{formatPrice(product.price)}</p>
          <p className='text-sm font-semibold text-[#f00]'>[ -{product.discount.value}%]</p>
        </div>
      </div>
    </div>
  )
}

export default memo(ShoesCard)
