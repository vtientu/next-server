import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl"; // Giới hạn độ rộng
};

export function Container({
  children,
  className,
  maxWidth = "xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        `mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20`, // Responsive padding
        `max-w-${maxWidth}`,
        className
      )}
    >
      {children}
    </div>
  );
}
