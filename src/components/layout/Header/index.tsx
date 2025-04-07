'use client'

import { Container } from '@/components/common/container-width'
import { ImageRatio } from '@/components/common/image-ratio'
import LoginModal from '@/components/common/modals/login-modal'
import { MenuCategory } from '@/components/layout/Header/menu-category'
import ThemeToggle from '@/components/layout/Header/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { ImageConstants } from '@/constants'
import { useHeaderSticky } from '@/hooks/useHeaderSticky'
import { cn } from '@/lib/utils'
import { LogOut, Search, Settings, ShoppingCart } from 'lucide-react'
import React, { memo } from 'react'

const Header = () => {
  const isSticky = useHeaderSticky()
  return (
    <div>
      <section id='hero-section'></section>
      <Container className={cn('py-2 items-center justify-between', isSticky ? 'hidden' : 'flex')}>
        <ImageRatio
          src={ImageConstants.LOGO_IMAGE}
          className='h-[38px] aspect-[4.4] bg-background'
          imageProps={{
            className: 'dark:invert'
          }}
        />
        <div className='flex items-center border-2 border-gray-500 w-[30%] h-[30px]'>
          <Input
            className='focus:outline-none focus-visible:ring-0 border-0 shadow-none h-auto'
            placeholder='Tìm kiếm sản phẩm'
          />
          <Button className='bg-background outline-none shadow-none text-foreground hover:bg-background h-auto py-[5px]'>
            <Search />
          </Button>
        </div>
        <div className='flex space-x-3 items-center'>
          <div className='flex space-x-3 items-center cursor-pointer'>
            <ShoppingCart width={20} height={20} />
            <div className='flex flex-col'>
              <p className='font-bold select-none leading-none'>Giỏ hàng</p>
              <p className='select-none leading-none'>(0) sản phẩm</p>
            </div>
          </div>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className='focus-visible:outline-none select-none'>
              <Avatar className='cursor-pointer'>
                <AvatarImage />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Văn Tiến Tú</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='focus:font-semibold'>
                Cài đặt
                <DropdownMenuShortcut>
                  <Settings width={20} height={20} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className='text-red-600 focus:font-semibold focus:text-red-600'>
                Đăng xuất
                <DropdownMenuShortcut>
                  <LogOut width={20} height={20} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <LoginModal />
      </Container>
      <div
        className={cn(
          'bg-[#333] dark:bg-gray-400 justify-center  w-full flex h-[50px]',
          isSticky ? 'fixed z-50' : 'flex'
        )}
      >
        <MenuCategory />
      </div>
    </div>
  )
}

export default memo(Header)
