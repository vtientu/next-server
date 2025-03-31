import Image, { ImageProps } from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { AspectRatioProps } from "@radix-ui/react-aspect-ratio";

const DEFAULT_IMAGE_SRC = "/images/default-image.jpg";

export function ImageRatio({
  ratio = 16 / 9,
  imageProps,
  src,
  className,
  ...otherProps
}: ImageRatioProps) {
  return (
    <AspectRatio
      ratio={ratio}
      className={cn("bg-muted", className)}
      {...otherProps}
    >
      <Image
        src={src}
        alt={imageProps?.alt || "Image"}
        fill
        className="h-full w-full rounded-md object-cover"
        {...imageProps}
        onError={(e) => {
          (e.target as HTMLImageElement).src = DEFAULT_IMAGE_SRC;
        }}
      />
    </AspectRatio>
  );
}

export type ImageRatioProps = AspectRatioProps & {
  src: string;
  ratio?: number;
  imageProps?: ImageProps;
};
