import { ImageRatio } from "@/components/common/image-ratio";
import { format } from "date-fns";
import { ArrowRight, TimerIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewsCard = ({ news }: { news: News }) => {
  return (
    <div className="flex flex-col mb-10">
      <ImageRatio src={news.image} alt={news.title} className="aspect-[9/5]" />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold mt-4 mb-3 line-clamp-2">
          {news.title}
        </h3>
        <div className="flex items-center gap-1 line-clamp-1 mb-2">
          <p className="text-sm text-gray-500 flex flex-row items-center gap-1">
            <TimerIcon width={15} height={15} />{" "}
            {format(new Date(news.createdAt), "dd/MM/yyyy")} by
          </p>
          <p className="text-sm text-primary">{news.author}</p>
        </div>
        <p className="text-sm text-gray-500 mb-2 line-clamp-2">
          {news.description}
        </p>
      </div>
      <Link
        href={`/news/${news.id}`}
        className="text-primary flex flex-row items-center uppercase font-semibold h-10"
      >
        Xem thêm <ArrowRight width={20} height={15} />
      </Link>
    </div>
  );
};

export default NewsCard;

interface News {
  id: number;
  title: string;
  image: string;
  author: string;
  description: string;
  createdAt: Date | string;
}
