import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { hash } from "bcrypt"
import { z } from "zod"

const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  name: z.string().optional(),
  password: z.string().min(6)
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = registerSchema.parse(body)

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { username: data.username }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Email hoặc username đã tồn tại" },
        { status: 409 }
      )
    }

    // Hash password
    const password_hash = await hash(data.password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        name: data.name,
        password_hash
      },
      select: {
        id: true,
        email: true,
        username: true,
        name: true
      }
    })

    return NextResponse.json(user)
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      // Extract validation error messages in a more structured format
      const fieldErrors = Object.entries(error.flatten().fieldErrors).reduce(
        (acc, [field, messages]) => {
          acc[field] = messages ? messages[0] : 'Lỗi không hợp lệ';
          return acc;
        }, 
        {} as Record<string, string>
      );
      
      return NextResponse.json(
        { error: "Dữ liệu không hợp lệ", fieldErrors },
        { status: 400 }
      )
    }

    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Có lỗi xảy ra khi đăng ký" },
      { status: 500 }
    )
  }
}