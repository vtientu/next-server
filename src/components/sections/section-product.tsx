import { ImageRatio } from "@/components/common/image-ratio";
import { ImageConstants } from "@/constants";
import React from "react";

const SectionProduct = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center">
        <h2 className="uppercase border-b-2 border-gray-400 pb-2">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {PRODUCT.map((product) => (
          <div key={product.id}>
            <ImageRatio
              src={product.image}
              alt={product.name}
              className="aspect-[5/4]"
              imageProps={{
                fill: true,
                className: "object-contain",
              }}
            />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionProduct;

const PRODUCT = [
  {
    id: 1,
    name: "Product 1",
    image: ImageConstants.PRODUCT,
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    image: ImageConstants.PRODUCT,
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    image: ImageConstants.PRODUCT,
    price: 300,
  },
  {
    id: 4,
    name: "Product 4",
    image: ImageConstants.PRODUCT,
    price: 400,
  },
  {
    id: 5,
    name: "Product 5",
    image: ImageConstants.PRODUCT,
    price: 500,
  },
  {
    id: 6,
    name: "Product 6",
    image: ImageConstants.PRODUCT,
    price: 600,
  },
  {
    id: 7,
    name: "Product 7",
    image: ImageConstants.PRODUCT,
    price: 700,
  },
  {
    id: 8,
    name: "Product 8",
    image: ImageConstants.PRODUCT,
    price: 800,
  },
  {
    id: 9,
    name: "Product 9",
    image: ImageConstants.PRODUCT,
    price: 900,
  },
  {
    id: 10,
    name: "Product 10",
    image: ImageConstants.PRODUCT,
    price: 1000,
  },
  {
    id: 11,
    name: "Product 11",
    image: ImageConstants.PRODUCT,
    price: 1100,
  },
  {
    id: 12,
    name: "Product 12",
    image: ImageConstants.PRODUCT,
    price: 1200,
  },
];
