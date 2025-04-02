import { Container } from "@/components/common/container-width";
import { ImageRatio } from "@/components/common/image-ratio";
import HomeBanner from "@/components/sections/home-banner";
import SectionProduct from "@/components/sections/section-product";
import { ImageConstants } from "@/constants";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-full h-[2000px]">
      <Suspense
        fallback={
          <ImageRatio
            src={ImageConstants.BANNER_01}
            className="w-full h-full aspect-[2.6]"
          />
        }
      >
        <HomeBanner />
      </Suspense>
      <Container>
        <SectionProduct title="Sản phẩm mới" />
      </Container>
    </div>
  );
}
