import NewsCard from "@/components/common/news-card";
import { ImageConstants } from "@/constants";
import React, { memo } from "react";

const SectionNews = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-center mx-auto">
        <h2 className="uppercase border-b-2 border-gray-400 pb-2 font-bold text-lg">
          Tin tức
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {NEWS.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default memo(SectionNews);

const NEWS = [
  {
    id: 1,
    title: "Mừng xuân Ất Tỵ - Quay là trúng Lì Xì",
    image: ImageConstants.NEWS_01,
    author: "Tushoes",
    description:
      "Mừng xuân Ất Tỵ - Quay là trúng Lì Xì- Toàn bộ sản phẩm giảm từ 20% -70%- Đơn h...",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Check Giày Real Hà Nội",
    image: ImageConstants.NEWS_02,
    author: "Tushoes",
    description:
      "Chào bạn yêu thích giày dép sneaker Mình Tú admin Tushoes và Tú đã có hơn 5 năm ki...",
    createdAt: new Date(),
  },
  {
    id: 3,
    title:
      "Sneaker (Giày) chuẩn 98%-99% so với hãng duy nhất tại Tushoes là gì ? Có nên sử dụng giày chuẩn 98%-99% ?",
    image: ImageConstants.NEWS_03,
    author: "Tushoes",
    description:
      "Sneaker (Giày) chuẩn 98%-99% so với hãng duy nhất tại TuShoes là gì ? Tại sao...",
    createdAt: new Date(),
  },
];
