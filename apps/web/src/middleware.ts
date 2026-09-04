import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Foundation Middleware
 * 
 * Protects authenticated routes and handles unauthenticated redirection.
 * Currently uses a mocked session check for Phase 1 UI presentation.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Public routes
  if (
    pathname === '/' ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/signup') ||
    pathname.startsWith('/about')
  ) {
    return NextResponse.next();
  }

  // Placeholder for real auth token check
  const hasToken = request.cookies.has('auth_token') || true; // Set to true for Phase 1 demo

  if (!hasToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
