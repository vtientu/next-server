'use client'

import Modal from '@/components/common/modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { memo, useState } from 'react'
import { signIn } from 'next-auth/react'

const LoginModal = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async () => {
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      })
      console.log(res)
    } catch (error) {
      // console.log(error.error)
    }
  }

  return (
    <Modal
      title='Đăng nhập'
      trigger={<Button variant='outline'>Đăng nhập</Button>}
      actions={<Button onClick={handleLogin}>Đăng nhập</Button>}
    >
      <div className='grid gap-4 py-4'>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label className='text-right'>Name</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} id='name' className='col-span-3' />
        </div>
        <div className='grid grid-cols-4 items-center gap-4'>
          <Label className='text-right'>Username</Label>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} id='username' className='col-span-3' />
        </div>
      </div>
    </Modal>
  )
}

export default memo(LoginModal)
