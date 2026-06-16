import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { prisma } from './db'

export const { handlers, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        if (!credentials?.username || !credentials?.password) {
          console.log('Missing credentials')
          return null
        }

        console.log('Attempting to authenticate:', credentials.username)

        const user = await prisma.user.findUnique({
          where: { username: String(credentials.username) },
        })

        console.log('User found:', !!user)

        if (!user) {
          console.log('User not found:', credentials.username)
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          String(credentials.password),
          user.password
        )

        console.log('Password valid:', isPasswordValid)

        if (!isPasswordValid) {
          console.log('Invalid password for user:', credentials.username)
          return null
        }

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.fullName,
          image: null,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
