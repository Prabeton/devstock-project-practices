import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import createIntlMiddleware from "next-intl/middleware";

const locales = ["pl", "en"] as const;
type Locale = (typeof locales)[number];

type MiddlewareConfig = {
  locales: readonly string[];
  defaultLocale: string;
  localePrefix?: 'as-needed' | 'always' | 'never';
  localeDetection?: boolean;
};

const intlConfig: MiddlewareConfig = {
  locales: locales,
  defaultLocale: "pl",
  localePrefix: 'as-needed',
  localeDetection: false,
};

const intlMiddleware = createIntlMiddleware(intlConfig);

async function redirectLoggedInUsers(request: NextRequest) {
  const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const protectedPaths = ['/landing', '/login', '/register'];
  
  const pathWithoutLocale = locales.some(locale => request.nextUrl.pathname.startsWith(`/${locale}/`))
    ? request.nextUrl.pathname.replace(/^\/[^\/]+/, '')
    : request.nextUrl.pathname;

  const isProtectedPath = protectedPaths.some(path => pathWithoutLocale.startsWith(path));

  if (session && isProtectedPath) {
    const currentLocale = locales.find(locale => request.nextUrl.pathname.startsWith(`/${locale}/`)) || 'pl';
    
    const dashboardUrl = new URL(`/${currentLocale}/dashboard`, request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  return null;
}

export default async function middleware(request: NextRequest) {
  const redirectResponse = await redirectLoggedInUsers(request);
  if (redirectResponse) return redirectResponse;

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};