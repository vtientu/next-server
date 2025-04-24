import { Container } from '@/components/common/container-width'
import { ImageRatio } from '@/components/common/image-ratio'
import HomeBanner from '@/components/sections/home-banner'
import SectionNews from '@/components/sections/section-news'
import SectionProduct from '@/components/sections/section-products'
import { ImageConstants } from '@/constants'
import { ProductWithDiscount } from '@/types/product.types'
import { Suspense } from 'react'

export default async function Home() {
  let featuredProducts: ProductWithDiscount[] = []
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const responseFeatured = await fetch(`${baseUrl}/api/product/featured`, {
    method: 'GET'
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
    })

  if (responseFeatured.status === 200) {
    featuredProducts = responseFeatured.data.products
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
