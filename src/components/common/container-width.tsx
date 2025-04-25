import { cn } from '@/libs/utils'
import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' // Giới hạn độ rộng
}

export function Container({ children, className, maxWidth = 'xl' }: ContainerProps) {
  return (
    <div
      className={cn(
        `mx-auto w-full px-[15px] md:w-[750px] lg:w-[970px] xl:w-[1170px]`, // Responsive padding
        `max-w-${maxWidth}`,
        className
      )}
    >
      {children}
    </div>
  )
}
