import { useCallback } from "react";
import { useSettingsStore } from "@/stores/settingsStore";
import type { Locale, BilingualText } from "@/types";

import esCommon from "@/i18n/locales/es/common.json";
import enCommon from "@/i18n/locales/en/common.json";

type TranslationKey = string;

const translations: Record<Locale, Record<string, unknown>> = {
  es: esCommon,
  en: enCommon,
};

function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined) return undefined;
    if (typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  
  return typeof current === "string" ? current : undefined;
}

export function useTranslation() {
  const { locale, setLocale } = useSettingsStore();

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>): string => {
      const translation = getNestedValue(translations[locale], key);
      
      if (!translation) {
        console.warn(`Translation missing for key: ${key} in locale: ${locale}`);
        return key;
      }

      if (params) {
        return Object.entries(params).reduce(
          (str, [paramKey, paramValue]) =>
            str.replace(new RegExp(`{{${paramKey}}}`, "g"), String(paramValue)),
          translation
        );
      }

      return translation;
    },
    [locale]
  );

  const tBilingual = useCallback(
    (content: BilingualText): string => {
      return content[locale] || content.es || content.en;
    },
    [locale]
  );

  const tArray = useCallback(
    <T>(content: { es: T; en: T }): T => {
      return content[locale] || content.es || content.en;
    },
    [locale]
  );

  return {
    t,
    tBilingual,
    tArray,
    locale,
    setLocale,
  };
}
