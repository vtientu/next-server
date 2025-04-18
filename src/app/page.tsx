import { Container } from '@/components/common/container-width'
import { ImageRatio } from '@/components/common/image-ratio'
import HomeBanner from '@/components/sections/home-banner'
import SectionNews from '@/components/sections/section-news'
import SectionProduct from '@/components/sections/section-products'
import { ImageConstants } from '@/constants'
import { Suspense } from 'react'

export default async function Home() {
  const responseFeatured = await fetch('/api/product/featured', {
    method: 'GET'
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
    })

  const featuredProducts = responseFeatured.data.products

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
