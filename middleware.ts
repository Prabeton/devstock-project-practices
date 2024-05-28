import createMiddleware from "next-intl/middleware";

type MiddlewareConfig = {
  locales: string[];
  defaultLocale: string;
  localePrefix?: string;
  localeDetection: boolean;
};

export default createMiddleware({
  locales: ["pl", "en"],
  defaultLocale: "pl",
  localePrefix: undefined,
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
