import { NextRequest, NextResponse } from 'next/server';

const PROTECTED = ['/dashboard', '/taches', '/carte', '/analytics', '/parametres', '/reglages'];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED.some((r) => pathname.startsWith(r));
  if (!isProtected) return NextResponse.next();

  // La vérification du rôle est gérée côté client dans (admin)/layout.tsx
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/taches/:path*', '/carte/:path*', '/analytics/:path*', '/parametres/:path*', '/reglages/:path*'],
};
