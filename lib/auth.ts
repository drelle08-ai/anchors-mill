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
        try {
          if (!credentials?.username || !credentials?.password) {
            return null
          }

          // Temporary: hardcode test user to verify auth flow works
          if (credentials.username === 'testuser' && credentials.password === 'test123') {
            return {
              id: '1',
              email: 'test@example.com',
              name: 'Test User',
              image: null,
            }
          }

          // Normal flow: lookup user in database
          const user = await prisma.user.findUnique({
            where: { username: String(credentials.username) },
          })

          if (!user) {
            return null
          }

          const isPasswordValid = await bcrypt.compare(
            String(credentials.password),
            user.password
          )

          if (!isPasswordValid) {
            return null
          }

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.fullName,
            image: null,
          }
        } catch (error) {
          console.error('[AUTH_ERROR]', error)
          return null
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
