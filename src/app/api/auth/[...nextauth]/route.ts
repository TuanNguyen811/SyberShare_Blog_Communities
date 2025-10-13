import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { z } from "zod"
import { prisma } from "@/lib/prisma"
import { randomUUID } from "crypto"

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

// Create a custom adapter that extends PrismaAdapter
function CustomPrismaAdapter(prisma) {
  const standardAdapter = PrismaAdapter(prisma);
  
  return {
    ...standardAdapter,
    createUser: async (data) => {
      // Generate a username based on the email or name
      const baseUsername = data.email?.split('@')[0] || 
                          (data.name?.toLowerCase().replace(/\s+/g, '.')) || 
                          'user';
      
      // Clean the username of any special characters
      const cleanedUsername = baseUsername.replace(/[^a-zA-Z0-9_.]/g, '');
      
      // Add a random suffix to ensure uniqueness
      const username = `${cleanedUsername}_${randomUUID().substring(0, 6)}`;
      
      // Ensure we have all required fields
      return prisma.user.create({
        data: {
          ...data,
          username: username,
        }
      });
    }
  };
}

const handler = NextAuth({
  adapter: CustomPrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login", // Error code passed in query string as ?error=
    newUser: "/auth/register", // New users will be directed here on first sign in
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const parsed = credentialsSchema.safeParse(credentials)
        if (!parsed.success) return null

        const { email, password } = parsed.data
        const user = await prisma.user.findUnique({
          where: { email }
        })

        if (!user?.password_hash) return null

        const isValid = await compare(password, user.password_hash)
        if (!isValid) return null

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          username: user.username,
          role: user.role,
          bio: user.bio,
          birth_year: user.birth_year,
          address: user.address,
          phone: user.phone,
          avatar_url: user.avatar_url,
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        // Copy all user properties to the token
        token.id = user.id
        token.username = user.username
        token.role = user.role
        token.bio = user.bio
        token.birth_year = user.birth_year
        token.address = user.address
        token.phone = user.phone
        token.avatar_url = user.avatar_url
      }
      return token
    },
    session: ({ session, token }) => {
      // Include custom user properties from token in the session
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          role: token.role,
          bio: token.bio,
          birth_year: token.birth_year,
          address: token.address,
          phone: token.phone,
          avatar_url: token.avatar_url,
        },
      }
    },
  },
})

export { handler as GET, handler as POST }