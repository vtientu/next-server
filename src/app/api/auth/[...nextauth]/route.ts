import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import mongoose from '@/database/mongoose'
import User from '@/models/user'
import bcrypt from 'bcrypt'
import { loginSchema } from '@/schema/auth'
import { formatZodError } from '@/app/utils/format'
import { AUTH_ERRORS } from '@/constants/auth'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          if (!credentials) {
            throw new Error(
              JSON.stringify({
                code: AUTH_ERRORS.MISSING_CREDENTIALS,
                message: 'Vui lòng nhập email và mật khẩu'
              })
            )
          }
          const { email, password } = credentials
          const parseResult = loginSchema.safeParse({
            email,
            password
          })

          if (!parseResult.success) {
            throw new Error(
              JSON.stringify({
                code: AUTH_ERRORS.VALIDATION_ERROR,
                errors: formatZodError(parseResult.error)
              })
            )
          }

          await mongoose.connectDB()
          const user = await User.findOne({ email: parseResult.data.email })
          if (!user) {
            throw new Error(
              JSON.stringify({
                code: AUTH_ERRORS.INVALID_CREDENTIALS,
                message: 'Email hoặc mật khẩu không chính xác'
              })
            )
          }
          const isPasswordCorrect = await bcrypt.compare(parseResult.data.password, user.password)
          if (!isPasswordCorrect) {
            throw new Error(
              JSON.stringify({
                code: AUTH_ERRORS.INVALID_CREDENTIALS,
                message: 'Email hoặc mật khẩu không chính xác'
              })
            )
          }
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.fullName,
            image: user.avatar
          }
        } catch (error: any) {
          console.log(error)
          throw new Error(error.message)
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
