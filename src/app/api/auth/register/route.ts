import User from '@/models/user'
import { registerSchema } from '@/schema/auth.schema'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { formatZodError } from '@/app/utils/format'

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullName } = await req.json()
    const parseResult = registerSchema.safeParse({
      email,
      password,
      fullName
    })
    if (!parseResult.success) {
      return NextResponse.json(
        {
          message: 'Invalid data',
          errors: formatZodError(parseResult.error)
        },
        {
          status: 400
        }
      )
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: 'Email đã tồn tại' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      email,
      password: hashedPassword,
      fullName
    })

    await newUser.save()

    return NextResponse.json(
      {
        message: 'Đăng ký thành công',
        user: newUser
      },
      {
        status: 200
      }
    )
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error?.message || 'Đăng ký thất lại'
      },
      {
        status: 500
      }
    )
  }
}
