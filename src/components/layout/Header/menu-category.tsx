'use client'

import Link from 'next/link'
import { cn } from '@/libs/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { useCategories } from '@/hooks/useCategories'
import { Loader2 } from 'lucide-react'
import { toast } from '@/hooks/useToast'

// Dùng client component vì ở component cha có logic useHeaderSticky
// => Kiểm tra liên tục khi scroll nên nếu để server component sẽ bị re-render liên tục và mất hiệu ứng sticky
export default function MenuCategory() {
  const { categories, isLoading, isError } = useCategories()

  if (isError) {
    toast({
      title: isError.message,
      description: 'Please try again later',
      variant: 'destructive'
    })
    return <div className='text-center text-xl font-bold text-white'>Some thing wrong</div>
  }

  if (isLoading)
    return (
      <div className='text-center flex justify-center items-center h-full text-2xl font-bold text-white'>
        <Loader2 className='animate-spin' />
      </div>
    )

  return (
    <NavigationMenu>
      <NavigationMenuList className='flex flex-row'>
        {categories.map((item) => (
          <NavigationMenuItem key={item._id} className='relative'>
            {item.children.length > 0 ? (
              <NavigationMenuTrigger className='uppercase bg-bg-gray-700 text-background hover:bg-bg-gray-700 hover:data-[state=open]:bg-bg-gray-700 focus:bg-bg-gray-700 focus:data-[state=open]:bg-bg-gray-700 hover:text-background focus:text-background data-[state=open]:bg-bg-gray-700 data-[state=open]:text-background'>
                {item.name}
              </NavigationMenuTrigger>
            ) : (
              <Link href={`/category/${item._id}`}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'uppercase bg-bg-gray-700 text-background hover:bg-bg-gray-700 hover:data-[state=open]:bg-bg-gray-700 focus:bg-bg-gray-700 focus:data-[state=open]:bg-bg-gray-700 hover:text-background focus:text-background data-[state=open]:bg-bg-gray-700 data-[state=open]:text-background'
                  )}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            )}
            {item.children.length > 0 && (
              <NavigationMenuContent className='absolute min-w-[120px] top-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]'>
                <ul>
                  {item.children.map((component: any) => (
                    <ListItem key={component._id} title={component.name} href={`/category/${component._id}`} />
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = ({ className, title, href }: ListItemProps) => {
  return (
    <li>
      <NavigationMenuLink asChild className='w-full'>
        <Link href={href} className={cn('block select-none space-y-2 p-2 font-medium hover:text-blue-500', className)}>
          <div className='text-sm leading-none'>{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

type ListItemProps = {
  className?: string
  title: string
  href: string
}
