export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";

export interface LocaleInfo {
  code: Locale;
  name: string;
  flag: string;
}

export const locales: LocaleInfo[] = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export const localeFlags: Record<Locale, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
};

export function isValidLocale(locale: string): locale is Locale {
  return ["es", "en"].includes(locale);
}
