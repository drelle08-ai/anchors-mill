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
            console.error('[AUTH] Missing credentials')
            return null
          }

          console.log('[AUTH] Attempting authentication for:', credentials.username)

          const user = await prisma.user.findUnique({
            where: { username: String(credentials.username) },
          })

          console.log('[AUTH] User lookup result:', user ? 'found' : 'not found')

          if (!user) {
            console.error('[AUTH] User not found:', credentials.username)
            return null
          }

          const isPasswordValid = await bcrypt.compare(
            String(credentials.password),
            user.password
          )

          console.log('[AUTH] Password validation:', isPasswordValid ? 'valid' : 'invalid')

          if (!isPasswordValid) {
            console.error('[AUTH] Invalid password')
            return null
          }

          console.log('[AUTH] Authentication successful')
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.fullName,
            image: null,
          }
        } catch (error) {
          console.error('[AUTH] Exception:', error instanceof Error ? error.message : String(error))
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
