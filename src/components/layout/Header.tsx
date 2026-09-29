import { useTranslation } from "@/hooks/useTranslation";
import { useUserStore } from "@/stores/userStore";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";
import { Flame, Star, Zap } from "lucide-react";

export function Header() {
  const { t } = useTranslation();
  const { stats } = useUserStore();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/80 px-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="flex items-center gap-6">
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
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
}
