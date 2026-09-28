import { useSettingsStore } from "@/stores/settingsStore";
import { locales, type Locale } from "@/i18n/config";
import type { LocaleInfo } from "@/i18n/config";

export function LanguageSelector() {
  const { locale, setLocale } = useSettingsStore();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-zinc-200 p-1 dark:border-zinc-700">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => setLocale(loc.code as Locale)}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
            locale === loc.code
              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
              : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          <span>{loc.flag}</span>
          <span className="hidden sm:inline">{loc.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
