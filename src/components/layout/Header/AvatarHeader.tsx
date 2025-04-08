'use client'

import LoginModal from '@/components/common/modals/login-modal'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LogOut, Settings } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { Fragment, memo } from 'react'
import { signOut } from 'next-auth/react'

const AvatarHeader = () => {
  const { data: session, status } = useSession()

  return (
    <Fragment>
      {status === 'authenticated' ? (
        <DropdownMenu>
          <DropdownMenuTrigger className='focus-visible:outline-none select-none'>
            <Avatar className='cursor-pointer'>
              <AvatarImage />
              <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='focus:font-semibold'>
              Cài đặt
              <DropdownMenuShortcut>
                <Settings width={20} height={20} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-red-600 focus:font-semibold focus:text-red-600' onClick={() => signOut()}>
              Đăng xuất
              <DropdownMenuShortcut>
                <LogOut width={20} height={20} />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <LoginModal />
      )}
    </Fragment>
  )
}

export default memo(AvatarHeader)
