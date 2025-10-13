import { DefaultSession } from "next-auth"
import { Role } from "@prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      username?: string
      role?: Role
      bio?: string
      birth_year?: number
      address?: string
      phone?: string
      avatar_url?: string
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    username: string
    role?: Role
    bio?: string
    birth_year?: number
    address?: string
    phone?: string
    avatar_url?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    username?: string
    role?: Role
    bio?: string
    birth_year?: number
    address?: string
    phone?: string
    avatar_url?: string
  }
}