"use server";

import { cookies } from "next/headers";

import { Locale, defaultLocale } from "@/config";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export const getUserLocale = async () => {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
};

export const setUserLocale = async (locale: Locale) => {
  cookies().set(COOKIE_NAME, locale);
};
