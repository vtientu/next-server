import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
})

const registerSchema = z.object({
  fullName: z.string().min(1, { message: 'Tên không được để trống' }),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z.string().min(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' })
})

export { loginSchema, registerSchema }
