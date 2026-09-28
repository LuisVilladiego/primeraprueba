import type { Locale } from "@/types";

export const defaultLocale: Locale = "es";
export const locales: Locale[] = ["es", "en"];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
