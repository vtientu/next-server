import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import mongoose from '@/database/mongoose'
import User from '@/models/user'
import bcrypt from 'bcrypt'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
        await mongoose.connectDB()
        const user = await User.findOne({ email: credentials.email })
        if (!user) {
          return null
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordCorrect) {
          return null
        }
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.fullName,
          image: user.avatar
        }
      }
    })
  ],
  pages: {
    signIn: '/login' // sẽ redirect nếu chưa login
  },
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
