'use client'

import Modal from '@/components/common/modal'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import InputForm from '@/components/common/form-control/InputForm'
import { FieldValues, useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { toast } from '@/hooks/use-toast'
import { FormMessage } from '@/components/ui/form'
import { AUTH_ERRORS } from '@/constants/auth'

const LoginModal = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FieldValues>({
    defaultValues: DEFAULT_VALUE
  })

  const handleChangeTab = (value: string) => {
    setIsLogin(value === 'login')
    form.reset(DEFAULT_VALUE)
  }

  const onSubmit = async (data: FieldValues) => {
    try {
      if (isLogin) {
        const res = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false
        })
        if (!res?.ok && res) {
          if (res.error) {
            const response = JSON.parse(res.error)
            if (response.code === AUTH_ERRORS.VALIDATION_ERROR) {
              Object.entries(response.errors).forEach(([key, value]) => {
                form.setError(key as string, { message: value as string })
              })
            } else if (response.code === AUTH_ERRORS.INVALID_CREDENTIALS) {
              setError(response.message)
            } else {
              toast({
                description: response.message,
                title: 'Đăng nhập thất bại!',
                variant: 'destructive'
              })
            }
          }
        }
      } else {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const response = await res.json()

        if (!res.ok) {
          if (response.errors) {
            Object.entries(response.errors).forEach(([key, value]) => {
              form.setError(key as string, { message: value as string })
            })
          } else {
            toast({
              description: response.message,
              title: 'Đăng ký thất bại!',
              variant: 'destructive'
            })
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      title={isLogin ? 'Đăng nhập' : 'Đăng ký'}
      trigger={<Button variant='outline'>Đăng nhập</Button>}
      actions={<Button type='submit'>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</Button>}
      formProps={{
        methods: form,
        onSubmit
      }}
    >
      <Tabs defaultValue='login' onValueChange={handleChangeTab}>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='login'>Đăng nhập</TabsTrigger>
          <TabsTrigger value='register'>Đăng ký</TabsTrigger>
        </TabsList>
        <TabsContent value='login'>
          <div className='grid gap-4 py-4'>
            <InputForm control={form.control} name='email' label='Email' inputProps={{ type: 'email' }} />
            <InputForm control={form.control} name='password' label='Mật khẩu' inputProps={{ type: 'password' }} />
            {error && <FormMessage>{error}</FormMessage>}
          </div>
        </TabsContent>

        <TabsContent value='register'>
          <div className='grid gap-4 py-4'>
            <InputForm
              control={form.control}
              rules={{
                required: 'Họ tên không được để trống!'
              }}
              name='fullName'
              label='Họ và tên'
              inputProps={{ type: 'text' }}
            />
            <InputForm
              control={form.control}
              rules={{
                required: 'Email không được để trống!'
              }}
              name='email'
              label='Email'
              inputProps={{ type: 'email', autoComplete: 'user-email' }}
            />
            <InputForm
              control={form.control}
              rules={{
                required: 'Mật khẩu không được để trống!'
              }}
              name='password'
              label='Mật khẩu'
              inputProps={{ type: 'password', autoComplete: 'new-password' }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </Modal>
  )
}

export default LoginModal

const DEFAULT_VALUE = {
  email: '',
  password: '',
  fullName: ''
}
