import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "en" as const;
export const locales = ["en", "id"] as const;

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/about": {
    en: "/about",
    id: "/about",
  },
  "/projects": {
    en: "/projects",
    id: "/projects",
  },
  "/dashboard": {
    en: "/dashboard",
    id: "/dashboard",
  },
  "/chatroom": {
    en: "/chatroom",
    id: "/chatroom",
  },
  "/contact": {
    en: "/contact",
    id: "/contact",
  },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;
