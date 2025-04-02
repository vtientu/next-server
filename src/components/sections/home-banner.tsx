"use client";

import { ImageRatio } from "@/components/common/image-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ImageConstants } from "@/constants";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const HomeBanner = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
        Fade(),
      ]}
    >
      <CarouselContent>
        {BANNER.map((item, index) => (
          <CarouselItem key={index}>
            <ImageRatio
              src={item.src}
              alt={item.alt}
              className="aspect-[2.6]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HomeBanner;

const BANNER = [
  {
    src: ImageConstants.BANNER_01,
    alt: "Banner 1",
    href: "/banner/banner-1",
  },
  {
    src: ImageConstants.BANNER_02,
    alt: "Banner 2",
    href: "/banner/banner-2",
  },
  {
    src: ImageConstants.BANNER_03,
    alt: "Banner 3",
    href: "/banner/banner-3",
  },
  {
    src: ImageConstants.BANNER_04,
    alt: "Banner 4",
    href: "/banner/banner-4",
  },
];
