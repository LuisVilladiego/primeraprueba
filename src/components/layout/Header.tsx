import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { useCommandPaletteStore } from "@/stores/commandPaletteStore";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { NotificationCenter } from "@/components/NotificationCenter";
import { Flame, Star, Zap, Search } from "lucide-react";

export function Header() {
  const { t, locale } = useTranslation();
  const { stats } = useUserStore();
  const { open: openCommandPalette } = useCommandPaletteStore();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="flex items-center gap-6">
        {/* Search Button */}
        <button
          onClick={openCommandPalette}
          className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-500 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">
            {locale === "es" ? "Buscar..." : "Search..."}
          </span>
          <kbd className="ml-1 hidden rounded bg-zinc-200 px-1.5 py-0.5 text-xs font-medium dark:bg-zinc-700 sm:inline">
            ⌘K
          </kbd>
        </button>
        {/* XP */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
            <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">{t("dashboard.totalXP")}</p>
            <p className="font-semibold text-zinc-900 dark:text-white">
              {stats.totalXp.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Level */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
            <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">{t("dashboard.currentLevel")}</p>
            <p className="font-semibold text-zinc-900 dark:text-white">
              {stats.level}
            </p>
          </div>
        </div>

        {/* Streak */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
            <Flame className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <p className="text-xs text-zinc-500">{t("dashboard.studyStreak")}</p>
            <p className="font-semibold text-zinc-900 dark:text-white">
              {stats.streakDays} {t("dashboard.days")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <NotificationCenter />
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
}
