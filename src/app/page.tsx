import { Container } from '@/components/common/container-width'
import { ImageRatio } from '@/components/common/image-ratio'
import HomeBanner from '@/components/sections/home-banner'
import SectionNews from '@/components/sections/section-news'
import SectionProduct from '@/components/sections/section-products'
import { ImageConstants } from '@/constants'
import { getFeaturedProducts } from '@/services/product.service'
import { ProductWithDiscount } from '@/types/product.types'
import { Suspense } from 'react'

export default async function Home() {
  let featuredProducts: ProductWithDiscount[] = []

  try {
    featuredProducts = await getFeaturedProducts()
  } catch (error) {
    console.error('Error fetching featured products:', error)
    featuredProducts = [] // fallback để tránh crash
  }
  return (
    <div className='w-full gap-8 flex flex-col'>
      <Suspense fallback={<ImageRatio src={ImageConstants.BANNER_01} className='w-full h-full aspect-[2.6]' />}>
        <HomeBanner />
      </Suspense>
      <Container>
        <SectionProduct title='Sản phẩm nổi bật' products={featuredProducts} />
        <SectionNews />
      </Container>
    </div>
  )
}
