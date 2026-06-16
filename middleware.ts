import { auth } from '@/lib/auth'

export const middleware = auth((req) => {
  // If auth succeeds, this runs. If it fails, redirects to sign-in.
  // Redirect logic is in authOptions pages.signIn
})

export const config = {
  matcher: ['/dashboard/:path*'],
}
