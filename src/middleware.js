import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session — this is required for Server Components to read auth state.
  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  // Public auth pages — always accessible
  const publicPaths = ['/login', '/forgot-password', '/auth/set-password']
  if (publicPaths.some(p => pathname.startsWith(p))) {
    return supabaseResponse
  }

  // Protected routes — redirect to login if not authenticated
  const protectedPrefixes = ['/app', '/admin']
  const isProtected = protectedPrefixes.some(p => pathname.startsWith(p))

  if (isProtected && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('redirect', pathname)
    return NextResponse.redirect(url)
  }

  // Admin guard — redirect non-admins away from /admin
  if (pathname.startsWith('/admin') && user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || !['internal_admin', 'developer'].includes(profile.role)) {
      const url = request.nextUrl.clone()
      url.pathname = '/app'
      return NextResponse.redirect(url)
    }
  }

  // Redirect authenticated users away from login — route based on role
  if ((pathname === '/login' || pathname === '/') && user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const url = request.nextUrl.clone()
    const adminRoles = ['internal_admin', 'developer', 'school_admin', 'content_reviewer']
    url.pathname = profile && adminRoles.includes(profile.role) ? '/admin' : '/app'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
