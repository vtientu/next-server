import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/format.utils";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const ShoesCard = ({ shoes }: { shoes: Shoes }) => {
  return (
    <div className="flex flex-col px-4 mb-10">
      <Link
        href={`/product/${shoes.id}`}
        className="relative cursor-pointer aspect-[5/4] hover:scale-105 transition-all duration-500 h-[160px] xl:h-[180px]"
      >
        <Image
          fill
          alt={shoes.name}
          src={shoes.thumbnail}
          className={cn(
            "object-contain",
            shoes?.thumbnail_hover && "hover:opacity-0"
          )}
          priority
        />
        {shoes.thumbnail_hover && (
          <Image
            fill
            alt={shoes.name}
            src={shoes.thumbnail_hover}
            className="object-contain opacity-0 hover:opacity-100 absolute top-0 left-0 transition-opacity duration-500"
          />
        )}
      </Link>
      <div className="flex flex-col gap-5 text-center">
        <Link
          href={`/product/${shoes.id}`}
          className="font-semibold cursor-pointer leading-[22px] h-[44px]"
        >
          {shoes.name}
        </Link>
        <div className="flex items-center justify-center space-x-2 flex-wrap text-[15px]">
          <p className="text-md font-semibold text-[#f00]">
            {formatPrice(shoes.price_discount)}
          </p>
          <p className="text-md line-through text-gray-400">
            {formatPrice(shoes.price)}
          </p>
          <p className="text-sm font-semibold text-[#f00]">
            [ -{shoes.percent_discount}%]
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ShoesCard);

interface Shoes {
  id: number;
  name: string;
  thumbnail: string;
  thumbnail_hover?: string;
  price: number;
  price_discount: number;
  percent_discount: number;
}
