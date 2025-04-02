import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function ImageRatio({
  imageProps,
  src,
  className,
  alt,
  ...otherProps
}: ImageRatioProps) {
  return (
    <div
      className={cn("bg-transparent relative aspect-video", className)}
      {...otherProps}
    >
      <Image
        src={src}
        fill
        priority
        alt={alt || "Image"}
        {...imageProps}
        className={cn("h-auto w-auto object-cover", imageProps?.className)}
      />
    </div>
  );
}

export type ImageRatioProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  alt?: string;
  imageProps?: Omit<ImageProps, "src" | "alt">;
};
